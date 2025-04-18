"use client";

import Link from 'next/link';
import React from 'react';
import Logout from '../logout/Logout';
import toast from 'react-hot-toast';

const TopNavBropdown = ({ user }) => {
    const isUser = user?.role === "user";
    const isAdmin = !isUser;

    const copyToClipboard = (val, label) => {
        if (!val) return toast.error(`${label} not found`);
        navigator.clipboard.writeText(val);
        toast.success(`Copied ${label}: ${val}`);
    };

    return (
        <div className="top-nav-dropdown">
            <h3>
                Welcome, {user?.username}
                <span> ({user?.role})</span>
            </h3>

            {isAdmin && (
                <>
                    <h5 onClick={() => copyToClipboard(user?.invitationCode, "Invitation Code")}>
                        Invitation Code: <span>{user?.invitationCode}</span> <i className="fa fa-clipboard" />
                    </h5>
                    <h5 onClick={() => copyToClipboard(user?.adminPasscode, "Admin Passcode")}>
                        Admin Passcode: <span>{user?.adminPasscode}</span> <i className="fa fa-clipboard" />
                    </h5>
                </>
            )}

            <ul>
                {isAdmin && (
                    <>
                        <Link href="/dashboard/allUser">
                            <li>All Users</li>
                        </Link>
                        <Link href="/dashboard/resetAdminPasscode">
                            <li>Change Admin Passcode</li>
                        </Link>
                    </>
                )}

                <Link href="/dashboard/resetPassword">
                    <li>Change Password</li>
                </Link>

                <Logout />
            </ul>
        </div>
    );
};

export default TopNavBropdown;
