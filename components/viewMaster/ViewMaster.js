"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import View1 from '../views/View1';




const ViewMaster = () => {

    const searchParams = useSearchParams();

    const params = new URLSearchParams(searchParams);
    const pageName = params.get("pageName");

    return (
        <>
            {pageName === "1" && <View1 />}

        </>
    )
}

export default ViewMaster
