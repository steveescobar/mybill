"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation'

const Welcome = () => {

    const pathname = usePathname();

    return (
        <>
            {
                pathname === "/dashboard"
                    ?
                    <div className="welcome-wrapper">
                        <div className="welcome-info-wrapper">
                            <h3>Withdrawal Receipt</h3>
                            <p>Generate withdrawal receipts effortlessly with real-time tracking and secure data management.</p>
                            <div className="welcome-info-wrapper-alt">
                                <Link href="/dashboard/views/view1?pageName=1">
                                    <button className="cta-btn">Get Started <i className="fa fa-arrow-right"></i></button>
                                </Link>
                            </div>
                        </div>
                        <div className="extra-info-wrapper">
                            <h4>Why Choose Us?</h4>
                            <ul>
                                <li>Fast & Seamless Withdrawal Generation</li>
                                <li>Real-Time Tracking of Transactions</li>
                                <li>Secure Data Protection</li>
                                <li>Multi-Device Access, Anytime, Anywhere</li>
                            </ul>
                        </div>
                        <div className="background-container">
                            {/* Optional background elements */}
                        </div>
                    </div>
                    :
                    <></>
            }
        </>
    )
}

export default Welcome
