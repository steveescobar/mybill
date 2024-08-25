"use client";

import { logout } from "@/app/action/user/action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "../loader/Loader";

const Logout = () => {
    const router = useRouter();
    const [isConfirm, setIsConfirm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const logoutMe = async () => {
        setIsLoading(true);

        try {
            const res = await logout();
            if (res === undefined) {
                setIsLoading(false);
                router.refresh();
            }
        } catch (error) {
            setIsLoading(false);
            console.log(error)
        }
    }

    return (
        <>
            {isLoading ? <Loader /> : <></>}
            <li onClick={() => setIsConfirm(true)}>Logout <i className="fa fa-sign-in"></i></li>
            {
                isConfirm
                    ?
                    <>
                        <div className="is-confirmed-wrapper">
                            <div className="is-confirmed-inner">
                                <h3>Are you sure you want to log out?</h3>
                                <div className="is-confirm-button">
                                    <button onClick={() => logoutMe()}>Yes, Logout</button>
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

export default Logout;
