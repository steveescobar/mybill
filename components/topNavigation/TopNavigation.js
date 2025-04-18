"use client";

import Link from "next/link";
import ListAllPage from "../listAllPage/ListAllPage";
import TopNavBropdown from "../topNavDropdown/TopNavBropdown";
import { useState } from "react";

const TopNavigation = ({ user }) => {

    const [isNav, setIsNav] = useState(false);

    return (
        <>
            <div className="app-top-nav-wrapper">
                <div className="app-top-childs">
                    <svg viewBox="0 0 20.9 12.4" width="20" height="12" className="sc-dlfnbm bmkBYC">
                        <path d="M18.9,1.6h-8.3C12.9-0.5,16.5-0.5,18.9,1.6z M18.9,10.8h-8.3C12.9,12.9,16.5,12.9,18.9,10.8z M12.3,7.1 c0-0.3,0.1-0.6,0.1-0.9c0-0.3,0-0.6-0.1-1l8.6,0c-0.1-0.6-0.3-1.2-0.5-1.7h-8.6C10.8,1.4,8.6,0,6.2,0C2.8,0,0,2.8,0,6.2 s2.8,6.2,6.2,6.2c2.5,0,4.6-1.4,5.6-3.5h8.6c0.3-0.6,0.5-1.2,0.5-1.8H12.3z"></path>
                    </svg>
                    <p>Billing System - V.4</p>
                    {
                        isNav && (
                            <>
                                <div className="sidebar-overlay"></div>
                                <div className="sidebar-overlay-closeicon" onClick={() => setIsNav(false)}><i className="fa fa-times"></i></div>
                            </>
                        )
                    }
                    {
                        user?.role === "user"
                            ? (
                                <ul className={isNav ? "rightVal" : ""}>
                                    <Link href="/dashboard"><li>Home</li></Link>
                                    <Link href="/dashboard/views/view1?pageName=1"><li>Receipt</li></Link>
                                    <ListAllPage />
                                </ul>
                            ) : (
                                <ul className={isNav ? "rightVal" : ""}>
                                    <Link href="/dashboard"><li>Home</li></Link>
                                    <Link href="/dashboard/views/view1?pageName=1"><li>Receipt</li></Link>
                                    <Link href="/dashboard/allUser"><li>All Users</li></Link>
                                    <ListAllPage />
                                    {user?.role === "superAdmin" && (
                                        <Link href="/dashboard/usersActivities">
                                            <li>Users Activities</li>
                                        </Link>
                                    )}
                                </ul>
                            )
                    }
                </div>
                <div className="app-top-childs">
                    <h6>{user?.username}</h6>
                    <div className="avatar-wrapper">
                        <div className="avatar-wrapper-inner">
                            <p>{user?.username?.charAt(0) || ''}</p>
                        </div>
                        <TopNavBropdown user={JSON.parse(JSON.stringify(user))} />
                    </div>
                    <div className="sidebar-toggle-btn">
                        <i className="fa fa-bars" onClick={() => setIsNav(true)}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNavigation;
