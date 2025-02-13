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
import View9 from '../views/View9';
import View10 from '../views/View10';
import View11 from '../views/View11';
import View12 from '../views/View12';
import View13 from '../views/View13';
import View14 from '../views/View14';
import View15 from '../views/Viwe15';
import View16 from '../views/View16';




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
            {pageName === "9" && <View9 />},
            {pageName === "10" && <View10 />},
            {pageName === "11" && <View11 />},
            {pageName === "12" && <View12 />},
            {pageName === "13" && <View13 />},
            {pageName === "14" && <View14 />},
            {pageName === "15" && <View15 />},
            {pageName === "16" && <View16 />},

        </>
    )
}

export default ViewMaster
