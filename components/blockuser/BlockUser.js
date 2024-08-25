"use client";

import { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { blockUser } from "@/app/action/user/action";
import Loader from "../loader/Loader";

const BlockUser = ({ data, authUser }) => {

    const router = useRouter();

    const [isChecked, setIsChecked] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleForm = async () => {
        setIsLoading(true);
        const statusValue = !isChecked;

        const formData = new FormData();
        formData.append("id", data?._id);
        formData.append("status", statusValue);

        try {
            const response = await blockUser(formData);

            if (response.status === 201) {
                toast.success(response.message);
                router.refresh();
                setIsLoading(false);
                return;
            } else {
                toast.error(response.message);
            }

        } catch (error) {
            setIsLoading(true);
            console.log(error)
        }
    }

    const handleCheckboxChange = () => {
        handleForm();
    };

    useEffect(() => {
        setIsChecked(data?.accountStatus);
    }, [data?.accountStatus]);

    return (
        <>
            {isLoading ? <Loader /> : <></>}
            <div className="toggle-btn-app-block">
                <form>
                    {
                        data?.username === authUser?.username
                            ?
                            <>
                                <label className="switch opacity40">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        disabled
                                    />
                                    <span className="slider round"></span>
                                </label>
                            </>
                            :
                            <>
                                {
                                    data?.role === "superAdmin"
                                        ?
                                        <>
                                            <label className="switch opacity40">
                                                <input
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={handleCheckboxChange}
                                                    disabled
                                                />
                                                <span className="slider round"></span>
                                            </label>
                                        </>
                                        :
                                        <>
                                            <label className="switch">
                                                <input
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={handleCheckboxChange}
                                                />
                                                <span className="slider round"></span>
                                            </label>
                                        </>
                                }
                            </>
                    }
                    <span className="ml">{data?.accountStatus ? "Active" : "Block"}</span>
                </form>
            </div>
        </>
    )
}


export default BlockUser;