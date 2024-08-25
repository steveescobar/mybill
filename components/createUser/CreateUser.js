"use client";
import { createUser } from "@/app/action/user/action";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import { toast } from 'react-hot-toast';


function Submit() {
    const { pending } = useFormStatus();

    return (
        <>
            <button type="submit" className="submit-btn"> {
                pending ?
                    `Please wait...`
                    :
                    `CREATE NOW`
            }
            </button>
        </>
    )
}

const CreateUser = ({authUser}) => {

    const router = useRouter();

    const handleForm = async (formData) => {

        try {
            const response = await createUser(formData);

            if (response.status === 201) {
                toast.success(response.message);
                router.push("/dashboard/allUser");
                router.refresh();
                return;
            } else {
                toast.error(response.message);
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form action={handleForm} className="global_form">
                <div className="form-group">
                    <label><i className="fa fa-user"></i> Username</label>
                    <input
                        placeholder="Enter username"
                        name="username"
                        type="text"
                    />
                </div>
                {
                    authUser?.role === "superAdmin"
                        ?
                        <div className="form-group">
                            <label><i class="fa-solid fa-user-shield"></i> Role</label>
                            <select name="role">
                                <option value="user" selected>Select....</option>
                                <option value="superAdmin">Super Admin</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                        :
                        <></>
                }
                <div className="form-group">
                    <label><i className="fa fa-key"></i> Password</label>
                    <input
                        placeholder="Enter password"
                        name="password"
                        type="password"
                    />
                </div>
                <div className="form-group">
                    <label><i className="fa fa-key"></i> Confirm Password</label>
                    <input
                        placeholder="Re-enter password"
                        name="cpassword"
                        type="password"
                    />
                </div>
                <div className="form-group">
                    <Submit />
                </div>
            </form>
        </>
    )
}

export default CreateUser