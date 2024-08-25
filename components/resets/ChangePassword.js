"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import img1 from "@/public/login_feature/img1.webp";
import img2 from "@/public/login_feature/img2.webp";
import img3 from "@/public/login_feature/img3.webp";
import img4 from "@/public/login_feature/img4.webp";
import img5 from "@/public/login_feature/img5.webp";
import img6 from "@/public/login_feature/img6.webp";
import img7 from "@/public/login_feature/img7.webp";
import img8 from "@/public/login_feature/img8.webp";
import img9 from "@/public/login_feature/img9.webp";
import img10 from "@/public/login_feature/img10.webp";
import img11 from "@/public/login_feature/img11.webp";
import Loader from '../loader/Loader';
import { logout, resetPassword} from '@/app/action/user/action';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

function Submit() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className="submit-btn"> {
            pending ?
                `Please wait...`
                :
                `RESET NOW`
        }
        </button>
    )
}

const ChangePassword = () => {

    const [currentImage, setCurrentImage] = useState(images[0]);

    const { back, push } = useRouter();
    const [isLoading, setIsloading] = useState(false);

    const sendBack = () => {
        return back();
    }

    const handleForm = async (formData) => {
        setIsloading(true);
        try {
            const response = await resetPassword(formData);

            if (response.status === 201) {
                toast.success(response.message);
                setIsloading(false);
                
                await logout();
                push("/")

                return;
            } else {
                setIsloading(false);
                toast.error(response.message);
                return;
            }

        } catch (error) {
            setIsloading(false);
            console.log(error)
        }
    }

    useEffect(() => {
        const getRandomImage = () => {
            const randomIndex = Math.floor(Math.random() * images.length);
            setCurrentImage(images[randomIndex]);
        };

        getRandomImage();

    }, []);

    return (
        <>
            {isLoading ? <Loader /> : <></>}
            <section className="auth-section">
                <div className="auth-main-wrapper">
                    <Image
                        className="img_bg"
                        src={currentImage}
                        alt="feature"
                        height={100}
                        width={100}
                        unoptimized
                    />
                    <div className="auth-overlay"></div>
                    <div className="auth-inner-wrapper">
                        <div className="auth-wrapper">
                            <div className="auth-form">
                                <div className="auth-logo">
                                    <svg
                                        width="20"
                                        height="12"
                                        className="sc-dlfnbm bmkBYC"
                                        viewBox="0 0 20.9 12.4"
                                        fill="#5522e6"
                                    >
                                        <path d="M18.9 1.6h-8.3c2.3-2.1 5.9-2.1 8.3 0zm0 9.2h-8.3c2.3 2.1 5.9 2.1 8.3 0zm-6.6-3.7c0-.3.1-.6.1-.9 0-.3 0-.6-.1-1h8.6c-.1-.6-.3-1.2-.5-1.7h-8.6C10.8 1.4 8.6 0 6.2 0 2.8 0 0 2.8 0 6.2s2.8 6.2 6.2 6.2c2.5 0 4.6-1.4 5.6-3.5h8.6c.3-.6.5-1.2.5-1.8h-8.6z"></path>
                                    </svg>
                                </div>
                                <p>SECIRITY</p>
                                <h3>Change Password</h3>
                                <form action={handleForm} className="global_form reverse-childs">
                                    <div className="form-group">
                                        <label><i className="fa fa-lock"></i> Old Password</label>
                                        <input
                                            placeholder="Enter old password"
                                            name="oldPassword"
                                            type="password"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label><i className="fa fa-key"></i> New Password</label>
                                        <input
                                            placeholder="Enter password"
                                            name="newPassword"
                                            type="password"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label><i className="fa fa-key"></i> Confirm Password</label>
                                        <input
                                            placeholder="Confirm Password"
                                            name="confirmPassword"
                                            type="password"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Submit />
                                    </div>
                                    <div className="form-group">
                                        <div className="form-links">
                                            <div onClick={() => sendBack()}>Back</div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChangePassword;