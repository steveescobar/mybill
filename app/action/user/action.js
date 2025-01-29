"use server";

import { auth, signIn, signOut } from "@/app/auth";
import { User } from "@/modals/User";
import { UsersActivities } from "@/modals/UsersActivities";
import { connectToDB } from "@/utils/connection";
import generateAdminPasscode from "@/utils/generateAdminPasscode";
import generateReferralCode from "@/utils/generateRefCode";
import generateSecurityCode from "@/utils/generateSecurityCode";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

export const authenticate = async (formData) => {
    const { username, password } = Object.fromEntries(formData);

    if (!username) return {
        message: "Please enter username",
        status: 404,
        type: "danger"
    };

    if (!password) return {
        message: "Please enter password",
        status: 404,
        type: "danger"
    };

    try {
        await signIn("credentials", { username, password });

        return {
            message: "Logged in successfully",
            status: 201,
            type: "success"
        };

    } catch (err) {
        if (err.message.includes("CredentialsSignin")) {
            return {
                message: `Invalid username or password!, try again!`,
                status: 404,
                type: "danger"
            };
        }
        throw err;
    }
};

export const registerNewUser = async (formData) => {
    try {
        await connectToDB();

        let {
            username,
            invitationCode,
            adminPasscode,
            password,
        } = Object.fromEntries(formData);

        if (!username || !invitationCode || !adminPasscode || !password) {
            return {
                message: "Required field is missing. Please try again!",
                status: 404,
                type: "danger"
            };
        }

        const isUser = await User.findOne({ username: username });

        if (isUser) return {
            message: `"${username}" is not available!`,
            status: 404,
            type: "danger"
        };

        const parentUser = await User.findOne({ invitationCode: invitationCode });

        if (!parentUser) return {
            message: `Invalid parent user!`,
            status: 404,
            type: "danger"
        };

        if (parentUser?.role !== "admin" && parentUser?.role !== "superAdmin") {
            return {
                message: `"${parentUser?.invitationCode} - "Invalid invitation code, try again!`,
                status: 404,
                type: "danger"
            };
        }

        if (invitationCode !== parentUser?.invitationCode) {
            return {
                message: `"${parentUser?.invitationCode} - "Invalid invitation code, try again!`,
                status: 404,
                type: "danger"
            };
        }

        if (Number(adminPasscode) !== parentUser?.adminPasscode) {
            return {
                message: `"Invalid admin passcode, try again!`,
                status: 404,
                type: "danger"
            };
        }

        const hasedPassword = await bcrypt.hash(password, 10);
        const invitationCodee = await generateReferralCode();
        const adminPasscodee = await generateAdminPasscode();
        const securityCode = await generateSecurityCode();

        let initiateRole;
        if (parentUser?.username === "newton") {
            initiateRole = "admin"
        } else {
            initiateRole = "user"
        }

        const newUser = new User({
            username,
            invitationCode: invitationCodee,
            parentUser: parentUser?.username,
            role: initiateRole,
            adminPasscode: adminPasscodee,
            securityCode: securityCode,
            password: hasedPassword,
        });


        await newUser.save();

        await UsersActivities.create({
            notification: `${username} has been registered using ${invitationCode} and ${adminPasscode}`,
            operation: "registration"
        })

        return {
            message: "Account registered successfully!",
            status: 201,
            type: "success"
        };

    } catch (error) {
        console.log(error);
    }
}

export const logout = async () => {

    const { user: sessionUser } = await auth();
    const authenticatedUser = await User.findById(sessionUser._id);

    try {

        await UsersActivities.create({
            notification: `${authenticatedUser.username} loged out`,
            operation: "logout"
        });

        await signOut();


    } catch (err) {
        console.log(err)
    }
};

export const createUser = async (formData) => {

    try {
        await connectToDB();

        let {
            username,
            password,
            cpassword,
            role,
        } = Object.fromEntries(formData);

        if (!username || !password || !cpassword) {
            return {
                message: "Required field is missing. Please try again!",
                status: 404,
                type: "danger"
            };
        }

        if (password !== cpassword) {
            return {
                message: "Password is not matching, please check!",
                status: 404,
                type: "danger"
            };
        }

        const isUser = await User.findOne({ username: username });

        if (isUser) return {
            message: `"${username}" is not available!`,
            status: 404,
            type: "danger"
        };

        const { user: sessionUser } = await auth();
        const authenticatedUser = await User.findById(sessionUser._id);

        if (!authenticatedUser) return {
            message: `User not found!`,
            status: 404,
            type: "danger"
        };

        const hasedPassword = await bcrypt.hash(password, 10);
        const invitationCode = await generateReferralCode();
        const adminPasscode = await generateAdminPasscode();
        const securityCode = await generateSecurityCode();

        let userRole;
        if (authenticatedUser?.role === "admin") {
            userRole = "user";
        } else {
            userRole = role;
        }

        const newUser = new User({
            username,
            invitationCode,
            parentUser: authenticatedUser?.username,
            role: userRole,
            adminPasscode,
            securityCode: securityCode,
            password: hasedPassword,
        });

        await newUser.save();

        await UsersActivities.create({
            notification: `${authenticatedUser.username} has been created using ${authenticatedUser.invitationCode} and ${authenticatedUser.adminPasscode}`,
            operation: "created_user"
        })

        return {
            message: "Account created successfully!",
            status: 201,
            type: "success"
        };

    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async (formData) => {

    const {
        id,
        username,
        password,
        cpassword,
        role,
    } = Object.fromEntries(formData);

    try {
        await connectToDB();

        const objectId = new mongoose.Types.ObjectId(id);

        const currentUser = await User.findById(id);

        const { user: sessionUser } = await auth();
        const authenticatedUser = await User.findById(sessionUser._id);

        if (!authenticatedUser) return {
            message: `User not found!`,
            status: 404,
            type: "danger"
        };

        let newUsername;

        if (!currentUser) {
            return {
                message: "User not found.",
                status: 404,
                type: "danger"
            };
        }

        if (username && username !== currentUser.username) {
            const isUsernameAvailable = await User.findOne({ username: username });

            if (isUsernameAvailable) {
                return {
                    message: `"${username}" is not available. Please try a different username!`,
                    status: 404,
                    type: "danger"
                };
            } else {
                newUsername = username;
            }

        } else {
            newUsername = "";
        }

        if (username && username !== currentUser.username) {
            const isUsernameAvailable = await User.findOne({ username: username });

            if (isUsernameAvailable) {
                return {
                    message: `"${username}" is not available. Please try a different username!`,
                    status: 404,
                    type: "danger"
                };
            } else {
                newUsername = username
            }

        } else {
            newUsername = "";
        }


        if (password === "") {
            const updateFields = {
                username: newUsername,
                role: role,
            }

            Object.keys(updateFields).forEach(
                (key) => (updateFields[key] === "" || undefined) && delete updateFields[key]
            );

            await User.findByIdAndUpdate(objectId, updateFields);

            await UsersActivities.create({
                notification: `${username} has been changed new username`,
                operation: "change_username"
            })

            return {
                message: "Username updated successfully",
                status: 201,
                type: "success"
            };

        } else {

            if (password !== cpassword) {
                return {
                    message: "Password is not matching, please check!",
                    status: 404,
                    type: "danger"
                };
            }

            const hasedPassword = await bcrypt.hash(password, 10);
            const newSecurityCode = await generateSecurityCode();

            const updateFields = {
                username: newUsername,
                password: hasedPassword,
                role: role,
                securityCode: newSecurityCode
            }

            Object.keys(updateFields).forEach(
                (key) => (updateFields[key] === "" || undefined) && delete updateFields[key]
            );

            await User.findByIdAndUpdate(objectId, updateFields);

            await UsersActivities.create({
                notification: `${username} has been changed new password`,
                operation: "change_password"
            })
        }

        return {
            message: "User updated successfully",
            status: 201,
            type: "success"
        };

    } catch (error) {
        console.log(error)
    }

}

export const blockUser = async (formData) => {
    const { id, status } = Object.fromEntries(formData);

    try {
        await connectToDB();

        const { user: sessionUser } = await auth();
        const logedUser = await User.findById(sessionUser._id);

        if (!logedUser) return {
            message: `User not found!`,
            status: 404,
            type: "danger"
        };

        const authenticatedUser = await User.findById(id);

        if (!authenticatedUser) return {
            message: `User not found!`,
            status: 404,
            type: "danger"
        };

        const newSecurityCode = await generateSecurityCode();

        await User.findByIdAndUpdate(authenticatedUser?._id, {
            accountStatus: status,
            securityCode: newSecurityCode
        });

        let message;
        let activitiyMessage;
        let operationType;

        if (status === "true") {
            message = `User unblock blocked successfully`
            activitiyMessage = `${authenticatedUser.username} has been unblock by ${logedUser.username}`;
            operationType = "unblock"
        } else {
            message = `User blocked successfully`
            activitiyMessage = `${authenticatedUser.username} has been block by ${logedUser.username}`;
            operationType = "block"
        }

        await UsersActivities.create({
            notification: activitiyMessage,
            operation: operationType,
        })

        return {
            message: message,
            status: 201,
            type: "success"
        };

    } catch (error) {
        console.log(error)
    }
}

export const resetAdminPasscode = async (formData) => {
    const { oldAdminPasscode, newAdminPasscode, confirmAdminPasscode } = Object.fromEntries(formData);

    try {
        await connectToDB();

        const { user } = await auth();

        const authenticatedUser = await User.findById(user?._id);

        if (!authenticatedUser) return {
            message: `User not found!`,
            status: 404,
            type: "danger"
        };

        if (!oldAdminPasscode || !newAdminPasscode || !confirmAdminPasscode) return {
            message: "Required field is missing. Please try again!",
            status: 404,
            type: "danger"
        };

        if (newAdminPasscode.length < 4) return {
            message: "Admin passcode must be atleast 4 digit!",
            status: 404,
            type: "danger"
        };

        if (newAdminPasscode !== confirmAdminPasscode) return {
            message: "Please confirm your admin passcode",
            status: 404,
            type: "danger"
        };

        if (authenticatedUser?.adminPasscode !== parseFloat(oldAdminPasscode)) return {
            message: "Incorrect old admin passcode, please try again!",
            status: 404,
            type: "danger"
        };

        await User.findByIdAndUpdate(authenticatedUser, {
            adminPasscode: newAdminPasscode
        })

        await UsersActivities.create({
            notification: `${authenticatedUser.username} has been changed passcode`,
            operation: "change_passcode"
        })

        return {
            message: "Your admin passcode changed successfully!",
            status: 201,
            type: "success"
        };

    } catch (error) {
        console.log(error);
    }
}

export const resetPassword = async (formData) => {
    const { oldPassword, newPassword, confirmPassword } = Object.fromEntries(formData);

    try {
        await connectToDB();

        const { user } = await auth();

        const authenticatedUser = await User.findById(user?._id);

        if (!authenticatedUser) return {
            message: `User not found!`,
            status: 404,
            type: "danger"
        };

        if (!oldPassword || !newPassword || !confirmPassword) return {
            message: "Required field is missing. Please try again!",
            status: 404,
            type: "danger"
        };

        if (newPassword.length < 4) return {
            message: "Password must be atleast 4 digit!",
            status: 404,
            type: "danger"
        };

        if (newPassword !== confirmPassword) return {
            message: "Please confirm your admin passcode",
            status: 404,
            type: "danger"
        };

        const isPasswordCorrect = await bcrypt.compare(oldPassword, authenticatedUser?.password);

        if (!isPasswordCorrect) return {
            message: "Incorrect old password, please try again!",
            status: 404,
            type: "danger"
        };

        const hasedPassword = await bcrypt.hash(newPassword, 10);
        const securityCode = await generateSecurityCode();

        await User.findByIdAndUpdate(authenticatedUser?._id, {
            password: hasedPassword,
            securityCode: securityCode
        })

        await UsersActivities.create({
            notification: `${authenticatedUser.username} has been changed password`,
            operation: "change_password"
        })

        return {
            message: "Your password changed successfully!",
            status: 201,
            type: "success"
        };

    } catch (error) {
        console.log(error);
    }
}

export const logoutAllUser = async () => {
    try {
        await connectToDB();

        const newSecurityCode = await generateSecurityCode();

        await User.updateMany({}, {
            $set: {
                securityCode: newSecurityCode
            }
        });

        return {
            message: "All users loggedout!",
            status: 201,
            type: "success"
        };

    } catch (error) {
        console.log(error)
    }
}