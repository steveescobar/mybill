"use server";

import { auth } from "@/app/auth";
import { User } from "@/modals/User";
import { UsersActivities } from "@/modals/UsersActivities";
import { connectToDB } from "@/utils/connection";

export const fetchAuthenticatedUser = async () => {
    try {
        await connectToDB();
        const { user } = await auth();
        const authenticatedUser = await User.findById(user?._id);

        if (!authenticatedUser) return {
            message: `User not found!`,
            status: 404,
            type: "danger"
        };

        return authenticatedUser;

    } catch (error) {
        console.log(error)
    }
}

export const fetchedLoggedInUser = async () => {
    try {
        await connectToDB();
        const { user } = await auth();
    
        return user;

    } catch (error) {
        console.log(error)
    }
}

export const fetchUsers = async (q, page, limit) => {

    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = limit || 10;

    try {
        await connectToDB();

        const { user } = await auth();
        const authenticatedUser = await User.findById(user?._id);

        if (!authenticatedUser) return {
            message: `User not found!`,
            status: 404,
            type: "danger"
        };

        const role = authenticatedUser?.role;

        let count;
        let users;

        if (role === "superAdmin") {
            count = await User.countDocuments();

            users = await User.find({ username: { $regex: regex } })
                .sort({ createdAt: -1 })
                .limit(ITEM_PER_PAGE)
                .skip(ITEM_PER_PAGE * (page - 1));

        } else if (role === "admin") {

            count = 12;

            users = await User.find({
                $and: [
                    { username: { $regex: regex } },
                    { parentUser: { $in: [authenticatedUser?.username] } }
                ]
            })
                .sort({ createdAt: -1 })
                .limit(ITEM_PER_PAGE)
                .skip(ITEM_PER_PAGE * (page - 1));

        } else {
            count = 0;
            users = [];
        }

        return { users, count };

    } catch (error) {
        console.log(error)
    }
}

export const fetchSingleUser = async (id) => {
    try {
        await connectToDB();

        const user = await User.findById(id);
        return user;

    } catch (error) {
        console.log(error)
    }
}

export const fetchSingleUserByUsername = async (username) => {
    try {
        await connectToDB();

        if (!username) return {
            message: "Username can not be empty!",
            status: 404,
            type: "danger"
        };

        const userVal = await User.findOne({ username });

        if (!userVal) return {
            message: "User not found!",
            status: 404,
            type: "danger"
        };

        const user = JSON.parse(JSON.stringify(userVal));

        return {
            user: user,
            status: 201,
            type: "success"
        };

    } catch (error) {
        console.log(error);
        return {
            status: 404,
            type: "danger"
        };
    }
}

export const fetchUsersActivities = async (q, page, limit) => {

    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = limit || 10;

    try {
        await connectToDB();

        const count = await UsersActivities.countDocuments();

        const usersactivities = await UsersActivities.find()
            .sort({ createdAt: -1 })
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (page - 1));

        return { usersactivities, count };

    } catch (error) {
        console.log(error)
    }
}

export const fetchReport = async () => {
    try {
        await connectToDB();
        const allUsers = await User.find().countDocuments();
        const activeUser = await User.find({ accountStatus: true }).countDocuments();
        const blockUser = await User.find({ accountStatus: false }).countDocuments();

        return { allUsers, activeUser, blockUser };
    } catch (error) {
        console.log(error)
    }
}
