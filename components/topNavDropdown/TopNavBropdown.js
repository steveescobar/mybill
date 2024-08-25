"use client";

import Link from 'next/link'
import React from 'react'
import Logout from '../logout/Logout'
import toast from 'react-hot-toast';

const TopNavBropdown = ({ user }) => {

    const copyToClipboard = (val) => {
        navigator.clipboard.writeText(val);
        return toast.success(`Copied - (${val})`);
    }

    return (
        <div className="top-nav-dropdown">
            <h3>Welcome, {user?.username} <span>({user.role})</span></h3>
            {
                user?.role === "user"
                    ?
                    <></>
                    :
                    <>
                        <h5 onClick={() => copyToClipboard(user?.invitationCode ?? "")}>Invitation Code: <span>{user?.invitationCode}</span> <i className="fa fa-clipboard"></i></h5>
                        <h5 onClick={() => copyToClipboard(user?.adminPasscode ?? "")}>Admin Passcode: <span>{user?.adminPasscode}</span> <i className="fa fa-clipboard"></i></h5>
                    </>
            }
            <ul>
                {
                    user?.role === "user"
                        ?
                        <>
                        </>
                        :
                        <>
                            <Link href="/dashboard/allUser">
                                <li>All Users</li>
                            </Link>
                            <Link href="/dashboard/resetAdminPasscode">
                                <li>Change Admin Passcode</li>
                            </Link>
                        </>
                }
                <Link href="/dashboard/resetPassword">
                    <li>Change Password</li>
                </Link>
                <Logout />
            </ul>
        </div>
    )
}

export default TopNavBropdown
