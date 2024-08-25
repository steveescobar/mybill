"use client";

import Image from "next/image";
import welcome from "@/public/welcome.png";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Welcome = () => {

    const pathname = usePathname();

    return (
        <>
            {
                pathname === "/dashboard"
                    ?
                    <>
                        <div className="welcome-wrapper">
                            <div className="welcome-info-wrapper">
                                <h3>Withdrawal Receipt</h3>
                                <p>Easy way to generate withdrawal receipt</p>
                                <div className="welcome-info-wrapper-alt">
                                    <Link href="/dashboard/views/view1">
                                        <button>Get Started <i className="fa fa-arrow-right"></i></button>
                                    </Link>
                                </div>
                            </div>
                            <div className="welcom-img">
                                <Image
                                    src={welcome}
                                    alt="views"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                        </div>
                    </>
                    :
                    <></>
            }
        </>
    )
}

export default Welcome
