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
import View17 from '../views/View17';
import View18 from '../views/View18';
import View19 from '../views/View19';
import View20 from '../views/View20';
import View21 from '../views/View21';
import View22 from '../views/View22';
import View23 from '../views/View23';
import View24 from '../views/View24';
import View25 from '../views/View25';
import View26 from '../views/View26';
import View27 from '../views/View27';
import View28 from '../views/View28';
import View29 from '../views/View29';
import View30 from '../views/View30';
import View31 from '../views/View31';
import View32 from '../views/View32';
import View33 from '../views/View33';
import View34 from '../views/View34';
import View35 from '../views/View35';
import View36 from '../views/View36';



const ViewMaster = () => {

    const searchParams = useSearchParams();

    const params = new URLSearchParams(searchParams);
    const pageName = params.get("pageName");

    return (
        <>
            {pageName === "1" && <View1 />}
            {pageName === "2" && <View2 />}
            {pageName === "3" && <View3 />}
            {pageName === "4" && <View4 />}
            {pageName === "5" && <View5 />}
            {pageName === "6" && <View6 />}
            {pageName === "7" && <View7 />}
            {pageName === "8" && <View8 />}
            {pageName === "9" && <View9 />}
            {pageName === "10" && <View10 />}
            {pageName === "11" && <View11 />}
            {pageName === "12" && <View12 />}
            {pageName === "13" && <View13 />}
            {pageName === "14" && <View14 />}
            {pageName === "15" && <View15 />}
            {pageName === "16" && <View16 />}
            {pageName === "17" && <View17/>}
            {pageName === "18" && <View18 />}
            {pageName === "19" && <View19 />}
            {pageName === "20" && <View20 />}
            {pageName === "21" && <View21 />}
            {pageName === "22" && <View22 />}
            {pageName === "23" && <View23 />}
            {pageName === "24" && <View24 />}
            {pageName === "25" && <View25 />}
            {pageName === "26" && <View26 />}
            {pageName === "27" && <View27 />}
            {pageName === "28" && <View28 />}
            {pageName === "29" && <View29 />}
            {pageName === "30" && <View30 />}
            {pageName === "31" && <View31 />}
            {pageName === "32" && <View32 />}
            {pageName === "33" && <View33 />}
            {pageName === "34" && <View34 />}
            {pageName === "35" && <View35 />}
            {pageName === "36" && <View36 />}
        </>
    )
}

export default ViewMaster
