"use client";

import { useState } from "react";
import Loader from "../loader/Loader";
import { logoutAllUser } from "@/app/action/user/action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LogoutAllUser = () => {

    const router = useRouter();
    const [isConfirm, setIsConfirm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const logoutFunction = async () => {
        try {
            const response = await logoutAllUser();
            if (response.status === 201) {
                toast.success(response.message);
                setIsLoading(false);
                setIsConfirm(false);
            }
        } catch (error) {
            setIsLoading(false)
            setIsConfirm(false);
            console.log(error)
        }
    }

    return (
        <>
            {isLoading ? <Loader /> : <></>}
            <button onClick={() => setIsConfirm(true)} className="btn btn-red">Logout All Users <i className="fa fa-sign-in"></i></button>
            {
                isConfirm
                    ?
                    <>
                        <div className="is-confirmed-wrapper">
                            <div className="is-confirmed-inner">
                                <h3>Are your sure, all users will be logged out</h3>
                                <div className="is-confirm-button">
                                    <button onClick={() => logoutFunction()}>Yes, Logout All Users</button>
                                    <button onClick={() => setIsConfirm(false)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                    </>
            }
        </>
    )
}

export default LogoutAllUser;