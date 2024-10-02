"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const ProtectedRoutes = ({ authUser, userType }) => {
    const router = useRouter();

    useEffect(() => {

        if (userType === "allUser") {
            if (authUser?.role === "user") {
                toast.error("Unauthorized!");
                router.back();
            }
        } else if (userType === "activityTypes") {
            if (authUser?.role !== "superAdmin") {
                toast.error("Unauthorized!");
                router.back();
            }
        }

    }, [authUser?.role,router,userType]);

    return;
}

export default ProtectedRoutes