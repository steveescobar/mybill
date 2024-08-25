"use client";

import { logout } from "@/app/action/user/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "../loader/Loader";

const Profile = ({ authUser }) => {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const copyToClipboard = (val) => {
        navigator.clipboard.writeText(val);
        return toast.success(`Copied - (${val})`);
    }

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
            <div className="profile-info-wrapper">
                <div className="profile-image-wrapper">
                    <div className="profile-image-inner-wrapper">
                        <p>{authUser?.username[0].toUpperCase()}</p>
                    </div>
                </div>
                <div className="profile-info-details">
                    <h3>{authUser?.username}</h3>
                    <div className="profile-invert">
                        <p>Invitation Code</p>
                        <h4>{authUser?.invitationCode} <button onClick={() => copyToClipboard(authUser?.invitationCode ?? "")}>Copy</button></h4>
                    </div>
                    <div className="profile-invert">
                        <p>Admin Passcode</p>
                        <h4>{authUser?.adminPasscode} <button onClick={() => copyToClipboard(authUser?.adminPasscode ?? "")}>Copy</button></h4>
                    </div>
                </div>
                <ul>
                    <Link href="/dashboard/views/view1">
                        <li>
                            <div>Receipts</div>
                            <div><i className="fa fa-angle-right"></i></div>
                        </li>
                    </Link>
                    <Link href="/dashboard/allUser">
                        <li>
                            <div>Users</div>
                            <div><i className="fa fa-angle-right"></i></div>
                        </li>
                    </Link>
                    <Link href="/dashboard/resetPassword">
                        <li>
                            <div>Change Password</div>
                            <div><i className="fa fa-angle-right"></i></div>
                        </li>
                    </Link>
                    <Link href="/dashboard/resetAdminPasscode">
                        <li>
                            <div>Change Admin Passcode</div>
                            <div><i className="fa fa-angle-right"></i></div>
                        </li>
                    </Link>
                    <button onClick={() => logoutMe()}>LOGOUT <i className="fa fa-sign-in"></i></button>
                </ul>
            </div>
        </>
    )
}

export default Profile