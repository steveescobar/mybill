"use client";

import { appData } from "@/appData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ListAllPage = () => {
    const [isShow, setIsShow] = useState(false);
    const router = useRouter();

    const navigateTo = (data) => {
        router.replace(`/dashboard/views/view1?pageName=${data?.id}`);
        setIsShow(false);
        return;
    }
    
    return (
        <>
            <li onClick={() => setIsShow(true)}>List All Pages</li>
            {
                isShow
                    ?
                    <>
                        <div className="master-list-page-wrapper">
                            <button onClick={() => setIsShow(false)}>CLOSE MENU</button>
                            <div className="list-page-wrapper">
                                {
                                    appData?.map((data, index) => (
                                        <div className="list-page-card" key={index} onClick={() => navigateTo(data)}>
                                            <h3><i className="fa fa-circle"></i> {data.viewName}</h3>
                                            <Image
                                                src={data?.viewImageSrc}
                                                alt="view"
                                                height={100}
                                                width={100}
                                                unoptimized
                                            />
                                        </div>
                                    ))
                                }
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

export default ListAllPage