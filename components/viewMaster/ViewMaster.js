"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import View1 from '../views/View1';
import View2 from '../views/View2';
import View3 from '../views/View3';
import View4 from '../views/View4';
import View5 from '../views/View5';
import View6 from '../views/View6';
import View7 from '../views/View7';
import View8 from '../views/View8';




const ViewMaster = () => {

    const searchParams = useSearchParams();

    const params = new URLSearchParams(searchParams);
    const pageName = params.get("pageName");

    return (
        <>
            {pageName === "1" && <View1 />},
            {pageName === "2" && <View2 />},
            {pageName === "3" && <View3 />},
            {pageName === "4" && <View4 />},
            {pageName === "5" && <View5 />},
            {pageName === "6" && <View6 />},
            {pageName === "7" && <View7 />},
            {pageName === "8" && <View8 />},

        </>
    )
}

export default ViewMaster
