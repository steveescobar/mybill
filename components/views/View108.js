"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import getPicture from "@/utils/getPicture";
import Image from "next/image";
import Page93Icons from "../options/Page93Icons";
import { InterBaseEncoded } from "@/utils/encodedFonts/InterBaseEncoded";

const View108 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 108";

    const [data, setData] = useState({

        amount: "0.64",
        currency: "CAD",
        today: "Today",
        t1: "CAD → ETH",
        t2: "Processed",
        t3: "$1,389.48 CAD",
        t4: "CAD Deposit (via Interac)",
        t5: "Processed",
        t6: "+$1,390.00 CAD",
        yesterday: "Yesterday",
        y1: "CAD → ETH",
        y2: "Processed",
        y3: "$329.88 CAD",
        y4: "CAD Deposit (via Interac)",
        y5: "Processed",
        y6: "+$330.00 CAD",
        d1: "CAD Withdrawal (via Interac)",
        d2: "Processed",
        d3: "$173.36 CAD",
        d4: "ETH → CAD",
        d5: "Processed",
        d6: "+$153.36 CAD",
        date: "Fri, Nov 29",
    });

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const [imageDimension, setImageDimension] = useState("50");

    const [time, setTime] = useState("9:34");
    const [network, setNetwork] = useState(4);
    const [net, setNet] = useState("wifi");
    const [isBattery, setIsBattery] = useState(false);
    const [battery, setBattery] = useState(50);
    const [bgColor, setBgColor] = useState("#ffffff");
    const [isOption, setIsOption] = useState(true);
    const [isIOS, setIsIOS] = useState(true);
    const [preview, setPreview] = useState("");
    const [isPreview, setIsPreview] = useState(false);

    const fetchCurrentTime = async () => {
        const timeValue = await getCurrentTime();
        setTime(timeValue);
    }


    const takeScreenshot = async () => {
        await getPicture(
            setPreview,
            setIsPreview,
            screenshotRef,
            setIsLoading,
            toast,
            0,
            0.1,
            0,
            0
        );
    }

    const manageTimeDate = () => {
        const now = new Date();
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-US', options);

        return setData({
            ...data,
            date: formattedDate
        });
    };


    return (
        <>
            {isLoading ? <Loader /> : <></>}
            {
                isPreview
                    ?
                    <>
                        <div className="show_preview" onClick={() => setIsPreview(false)}>
                            <div className="inner_preview" onClick={(e) => e.stopPropagation()}>
                                <Image
                                    src={preview}
                                    height={100}
                                    width={100}
                                    alt="pre"
                                />
                            </div>
                        </div>
                    </>
                    :
                    <>
                    </>
            }
            <div className="bill-inner-view">
                <div className="bill-inner-view-childs">
                    <IconOptions
                        setImageDimension={setImageDimension}
                        setNetwork={setNetwork}
                        setNet={setNet}
                        setIsBattery={setIsBattery}
                        setBattery={setBattery}
                        setBgColor={setBgColor}
                        setIsOption={setIsOption}
                        setTime={setTime}
                        battery={battery}
                        isOption={isOption}
                        time={time}
                        bgColor={bgColor}
                        imageDimension={imageDimension}
                        fetchCurrentTime={fetchCurrentTime}
                        setIsIOS={setIsIOS}
                        isIOS={isIOS}
                    />
                    <div className="billing-mobile-wrapper" style={{
                        background: `${bgColor}`
                    }}>
                        <div
                            className="artboard"
                            ref={screenshotRef}
                            style={{
                                transform: `scale(${imageDimension / 100})`,
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 393.5 852.002"
                            >
                                <style>
                                    {
                                        InterBaseEncoded
                                    }
                                </style>
                                <g id="bill_108" data-name="bill 108" transform="translate(-983 -114)">
                                    <g id="Group_1" data-name="Group 1">
                                        <path
                                            id="Path_10"
                                            fill="#1bcea7"
                                            d="M16.077 0A16.077 16.077 0 1 1 0 16.077 16.077 16.077 0 0 1 16.077 0"
                                            data-name="Path 10"
                                            transform="translate(999.5 925.346)"
                                        ></path>
                                        <g id="bill_108-2" data-name="bill 108">
                                            <path
                                                id="Rectangle_1"
                                                fill="#f9fafc"
                                                d="M0 0h393v852H0z"
                                                data-name="Rectangle 1"
                                                transform="translate(983 114)"
                                            ></path>
                                            <path
                                                id="Rectangle_5"
                                                fill="#0b1326"
                                                d="M0 0h393v356H0z"
                                                data-name="Rectangle 5"
                                                transform="translate(983 114)"
                                            ></path>
                                            <text
                                                id="Fiat_Wallet"
                                                fill="#fff"
                                                data-name="Fiat Wallet"
                                                fontFamily="Inter"
                                                fontSize="17"
                                                transform="translate(1138 201)"
                                            >
                                                <tspan x="0" y="0">
                                                    Fiat Wallet
                                                </tspan>
                                            </text>
                                            <text
                                                id="_0.64"
                                                fill="#fff"
                                                data-name="0.64"
                                                fontFamily="Inter"
                                                fontSize="31"
                                                transform="translate(1179 246)"
                                                dominantBaseline="middle"
                                                textAnchor="middle"
                                            >
                                                <tspan fill="#9aa1b1" fontSize="20">
                                                    ${" "}
                                                </tspan>
                                                <tspan >
                                                    {data.amount}
                                                </tspan>
                                                <tspan fill="#9aa1b1" fontSize="23">
                                                    {" "}{data.currency}
                                                </tspan>
                                            </text>
                                            <path
                                                id="thin-long-arrow-right-icon"
                                                fill="#fff"
                                                d="M7.615 0 0 6.643 7.727 13.4l1.151-1.315-5.222-4.567 13.878.023V5.795L3.656 5.772l5.11-4.457Z"
                                                transform="translate(1005 188.6)"
                                            ></path>
                                            <rect
                                                id="Rectangle_2"
                                                width="47"
                                                height="47"
                                                fill="#082f4c"
                                                data-name="Rectangle 2"
                                                rx="20"
                                                transform="translate(1032 281)"
                                            ></rect>
                                            <g
                                                id="Rectangle_4"
                                                fill="none"
                                                stroke="#3088d0"
                                                strokeWidth="1.5"
                                                data-name="Rectangle 4"
                                                transform="translate(1044 293)"
                                            >
                                                <rect width="24" height="24" stroke="none" rx="11"></rect>
                                                <rect
                                                    width="22.5"
                                                    height="22.5"
                                                    x="0.75"
                                                    y="0.75"
                                                    rx="10.25"
                                                ></rect>
                                            </g>
                                            <path
                                                id="Path_1"
                                                fill="none"
                                                stroke="#3088d0"
                                                strokeWidth="1.5"
                                                d="M0 0v12"
                                                data-name="Path 1"
                                                transform="rotate(90 378.5 683.5)"
                                            ></path>
                                            <path
                                                id="Path_2"
                                                fill="none"
                                                stroke="#3088d0"
                                                strokeWidth="1.5"
                                                d="M0 0v12"
                                                data-name="Path 2"
                                                transform="translate(1056 299)"
                                            ></path>
                                            <rect
                                                id="Rectangle_2-2"
                                                width="47"
                                                height="47"
                                                fill="#082f4c"
                                                data-name="Rectangle 2"
                                                rx="20"
                                                transform="translate(1156 281)"
                                            ></rect>
                                            <g
                                                id="Rectangle_4-2"
                                                fill="none"
                                                stroke="#3088d0"
                                                strokeWidth="1.5"
                                                data-name="Rectangle 4"
                                                transform="translate(1168 293)"
                                            >
                                                <rect width="24" height="24" stroke="none" rx="11"></rect>
                                                <rect
                                                    width="22.5"
                                                    height="22.5"
                                                    x="0.75"
                                                    y="0.75"
                                                    rx="10.25"
                                                ></rect>
                                            </g>
                                            <path
                                                id="Path_1-2"
                                                fill="none"
                                                stroke="#3088d0"
                                                strokeWidth="1.5"
                                                d="M0 0v12"
                                                data-name="Path 1"
                                                transform="rotate(90 440.5 745.5)"
                                            ></path>
                                            <rect
                                                id="Rectangle_2-3"
                                                width="47"
                                                height="47"
                                                fill="#082f4c"
                                                data-name="Rectangle 2"
                                                rx="20"
                                                transform="translate(1280 281)"
                                            ></rect>
                                            <path
                                                id="Path_3"
                                                fill="#3088d0"
                                                d="M23.7 18.127a.694.694 0 0 0-.38 1.226l2.442 2.441c-19.468 0-19.069-.017-19.091-.016a.83.83 0 0 0-.662.831c.017.364.3.82.662.8l19.026.016-2.377 2.565a.694.694 0 1 0 .889 1.052l3.805-4.2a.694.694 0 0 0 0-1.052l-3.805-3.49a.7.7 0 0 0-.509-.173m-13.449 9.021a.7.7 0 0 0-.423.174l-3.577 3.836a.694.694 0 0 0 0 1.052l3.577 4.064a.694.694 0 1 0 .889-1.052l-2.45-2.685h19.277c.367.005.705-.48.705-.847a.723.723 0 0 0-.705-.69H8.267l2.451-2.623a.694.694 0 0 0-.466-1.226Z"
                                                data-name="Path 3"
                                                transform="translate(1286.578 277.188)"
                                            ></path>
                                            <text
                                                id="Buy_Crypto"
                                                fill="#fff"
                                                data-name="Buy Crypto"
                                                fontFamily="Inter"
                                                fontSize="14"
                                                textDecoration="underline"
                                                transform="translate(1019 354)"
                                            >
                                                <tspan x="0" y="0">
                                                    Buy Crypto
                                                </tspan>
                                            </text>
                                            <text
                                                id="Sell_Crypto"
                                                fill="#fff"
                                                data-name="Sell Crypto"
                                                fontFamily="Inter"
                                                fontSize="14"
                                                textDecoration="underline"
                                                transform="translate(1143 354)"
                                            >
                                                <tspan x="0" y="0">
                                                    Sell Crypto
                                                </tspan>
                                            </text>
                                            <text
                                                id="Transfer"
                                                fill="#fff"
                                                fontFamily="Inter"
                                                fontSize="14"
                                                textDecoration="underline"
                                                transform="translate(1276 354)"
                                            >
                                                <tspan x="0" y="0">
                                                    Transfer
                                                </tspan>
                                            </text>
                                            <rect
                                                id="Rectangle_6"
                                                width="376"
                                                height="59"
                                                fill="#151d34"
                                                data-name="Rectangle 6"
                                                rx="9"
                                                transform="translate(991 392)"
                                            ></rect>
                                            <text
                                                id="_2"
                                                fill="#9aa1b1"
                                                data-name="$"
                                                fontFamily="Inter"
                                                fontSize="20"
                                                transform="translate(1008 429)"
                                            >
                                                <tspan x="0" y="0">
                                                    $
                                                </tspan>
                                            </text>
                                            <text
                                                id="CAD-2"
                                                fill="#fff"
                                                data-name="CAD"
                                                fontFamily="Inter"
                                                fontSize="15"
                                                transform="translate(1031 427)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.currency}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_0.64_CAD"
                                                fill="#fff"
                                                data-name="$0.64 CAD"
                                                fontFamily="Inter"
                                                fontSize="15"
                                                transform="translate(1349 427)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    ${data.amount} {data.currency}
                                                </tspan>
                                            </text>
                                            <path
                                                id="Rectangle_7"
                                                fill="#fff"
                                                d="M0 0h392v131.5H0z"
                                                data-name="Rectangle 7"
                                                transform="translate(984 507)"
                                            ></path>
                                            <path
                                                id="Path_4"
                                                fill="none"
                                                stroke="#e2e2e2"
                                                strokeWidth="1"
                                                d="M0 0h393"
                                                data-name="Path 4"
                                                transform="translate(983.5 507.5)"
                                            ></path>
                                            <path
                                                id="Path_5"
                                                fill="#fff"
                                                stroke="#e2e2e2"
                                                strokeWidth="1"
                                                d="M.5 0h393"
                                                data-name="Path 5"
                                                transform="translate(982.5 639)"
                                            ></path>
                                            <text
                                                id="Today"
                                                fill="#707173"
                                                fontFamily="Inter"
                                                fontSize="12"
                                                transform="translate(1001 493)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.today}
                                                </tspan>
                                            </text>
                                            <path
                                                id="Path_10-2"
                                                fill="#fd754f"
                                                d="M16.077 0A16.077 16.077 0 1 1 0 16.077 16.077 16.077 0 0 1 16.077 0"
                                                data-name="Path 10"
                                                transform="translate(1000 524.672)"
                                            ></path>
                                            <path
                                                id="Path_6"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeWidth="1.5"
                                                d="M14.639 14.33c-1.027 2.025-3.151 3.991-5.653 3.991A5.953 5.953 0 0 1 3 13"
                                                data-name="Path 6"
                                                transform="translate(1007.092 528.414)"
                                            ></path>
                                            <path
                                                id="Path_7"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeWidth="1.5"
                                                d="M3.5 6.991A6.23 6.23 0 0 1 9.153 3a5.983 5.983 0 0 1 5.986 5.321"
                                                data-name="Path 7"
                                                transform="translate(1006.924 531.763)"
                                            ></path>
                                            <path
                                                id="Path_8"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M18.991 18.991V15.4a.4.4 0 0 0-.4-.4H15"
                                                data-name="Path 8"
                                                transform="translate(1003.073 527.745)"
                                            ></path>
                                            <path
                                                id="Path_9"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M6.991 6.991H3.4a.4.4 0 0 1-.4-.4V3"
                                                data-name="Path 9"
                                                transform="translate(1007.092 531.763)"
                                            ></path>
                                            <path
                                                id="_Transparent_Rectangle_"
                                                fill="none"
                                                d="M0 15h15V0H0Z"
                                                transform="translate(1009 598.589)"
                                            ></path>
                                            <path
                                                id="Path_10-3"
                                                fill="#1bcea7"
                                                d="M16.077 0A16.077 16.077 0 1 1 0 16.077 16.077 16.077 0 0 1 16.077 0"
                                                data-name="Path 10"
                                                transform="translate(1000 588.346)"
                                            ></path>
                                            <path
                                                id="reply-70"
                                                fill="#fff"
                                                d="M79.446 96.156a.57.57 0 0 0-.5.292c-2.154 3.8-4.257 4.693-7.489 4.807v-3.57a.564.564 0 0 0-.98-.384l-6.337 6.377a.573.573 0 0 0 0 .808l6.337 6.394a.573.573 0 0 0 .98-.4v-3.627c5.294-.384 8.56-4.217 8.56-10.125a.57.57 0 0 0-.43-.573.6.6 0 0 0-.141.001m-8.56 6.257c3.277-.034 5.632-.653 7.81-3.489a7.62 7.62 0 0 1-7.844 6.813.573.573 0 0 0-.573.573v2.779l-4.922-5 4.956-5.008v2.762a.573.573 0 0 0 .572.569Z"
                                                transform="translate(944.081 500.822)"
                                            ></path>
                                            <text
                                                id="CAD_ETH"
                                                data-name="CAD → ETH"
                                                fontFamily="Inter"
                                                fontSize="13.5"
                                                transform="translate(1047.797 536.849)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.t1}
                                                </tspan>
                                            </text>
                                            <text
                                                id="CAD_Deposit_via_Interac_"
                                                data-name="CAD Deposit (via Interac)"
                                                fontFamily="Inter"
                                                fontSize="13.5"
                                                transform="translate(1047.797 600.625)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.t4}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_1_390.00_CAD"
                                                fill="#1bcea7"
                                                data-name="+$1,390.00 CAD"
                                                fontFamily="Inter"
                                                fontSize="13.7"
                                                transform="translate(1359 609.593)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.t6}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_1_389.48_CAD"
                                                data-name="$1,389.48 CAD"
                                                fontFamily="Inter"
                                                fontSize="13.7"
                                                transform="translate(1359 544.821)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.t3}
                                                </tspan>
                                            </text>
                                            <text
                                                id="Processed"
                                                fill="#1bcea7"
                                                fontFamily="Inter"
                                                fontSize="13.5"
                                                transform="translate(1047.797 553.789)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.t2}
                                                </tspan>
                                            </text>
                                            <text
                                                id="Processed-2"
                                                fill="#1bcea7"
                                                data-name="Processed"
                                                fontFamily="Inter"
                                                fontSize="13.5"
                                                transform="translate(1047.797 617.5)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.t5}
                                                </tspan>
                                            </text>
                                            <path
                                                id="Rectangle_7-2"
                                                fill="#fff"
                                                d="M0 0h392.5v131.5H0z"
                                                data-name="Rectangle 7"
                                                transform="translate(983.5 677)"
                                            ></path>
                                            <path
                                                id="Path_4-2"
                                                fill="none"
                                                stroke="#e2e2e2"
                                                strokeWidth="1"
                                                d="M0 0h393"
                                                data-name="Path 4"
                                                transform="translate(983 677.5)"
                                            ></path>
                                            <path
                                                id="Path_5-2"
                                                fill="#fff"
                                                stroke="#e2e2e2"
                                                strokeWidth="1"
                                                d="M0 0h392.5"
                                                data-name="Path 5"
                                                transform="translate(983 809)"
                                            ></path>
                                            <text
                                                id="Yesterday"
                                                fill="#707173"
                                                fontFamily="Inter"
                                                fontSize="12"
                                                transform="translate(1000.5 663)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.yesterday}
                                                </tspan>
                                            </text>
                                            <path
                                                id="Path_10-4"
                                                fill="#fd754f"
                                                d="M16.077 0A16.077 16.077 0 1 1 0 16.077 16.077 16.077 0 0 1 16.077 0"
                                                data-name="Path 10"
                                                transform="translate(999.5 694.635)"
                                            ></path>
                                            <path
                                                id="Path_6-2"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeWidth="1.5"
                                                d="M14.639 14.33c-1.027 2.025-3.151 3.991-5.653 3.991A5.953 5.953 0 0 1 3 13"
                                                data-name="Path 6"
                                                transform="translate(1006.592 698.377)"
                                            ></path>
                                            <path
                                                id="Path_7-2"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeWidth="1.5"
                                                d="M3.5 6.991A6.23 6.23 0 0 1 9.153 3a5.983 5.983 0 0 1 5.986 5.321"
                                                data-name="Path 7"
                                                transform="translate(1006.424 701.727)"
                                            ></path>
                                            <path
                                                id="Path_8-2"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M18.991 18.991V15.4a.4.4 0 0 0-.4-.4H15"
                                                data-name="Path 8"
                                                transform="translate(1002.573 697.708)"
                                            ></path>
                                            <path
                                                id="Path_9-2"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M6.991 6.991H3.4a.4.4 0 0 1-.4-.4V3"
                                                data-name="Path 9"
                                                transform="translate(1006.592 701.727)"
                                            ></path>
                                            <path
                                                id="_Transparent_Rectangle_2"
                                                fill="none"
                                                d="M0 15h15V0H0Z"
                                                data-name="_Transparent_Rectangle_"
                                                transform="translate(1008.5 768.589)"
                                            ></path>
                                            <path
                                                id="Path_10-5"
                                                fill="#1bcea7"
                                                d="M16.077 0A16.077 16.077 0 1 1 0 16.077 16.077 16.077 0 0 1 16.077 0"
                                                data-name="Path 10"
                                                transform="translate(999.5 758.346)"
                                            ></path>
                                            <path
                                                id="reply-70-2"
                                                fill="#fff"
                                                d="M79.446 96.156a.57.57 0 0 0-.5.292c-2.154 3.8-4.257 4.693-7.489 4.807v-3.57a.564.564 0 0 0-.98-.384l-6.337 6.377a.573.573 0 0 0 0 .808l6.337 6.394a.573.573 0 0 0 .98-.4v-3.627c5.294-.384 8.56-4.217 8.56-10.125a.57.57 0 0 0-.43-.573.6.6 0 0 0-.141.001m-8.56 6.257c3.277-.034 5.632-.653 7.81-3.489a7.62 7.62 0 0 1-7.844 6.813.573.573 0 0 0-.573.573v2.779l-4.922-5 4.956-5.008v2.762a.573.573 0 0 0 .572.569Z"
                                                data-name="reply-70"
                                                transform="translate(943.581 670.822)"
                                            ></path>
                                            <text
                                                id="CAD_ETH-2"
                                                data-name="CAD → ETH"
                                                fontFamily="Inter"
                                                fontSize="13.5"
                                                transform="translate(1047.797 706.849)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.y1}
                                                </tspan>
                                            </text>
                                            <text
                                                id="CAD_Deposit_via_Interac_2"
                                                data-name="CAD Deposit (via Interac)"
                                                fontFamily="Inter"
                                                fontSize="13.5"
                                                transform="translate(1047.797 770.625)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.y4}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_330.00_CAD"
                                                fill="#1bcea7"
                                                data-name="+$330.00 CAD"
                                                fontFamily="Inter"
                                                fontSize="13.7"
                                                transform="translate(1359 779.593)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.y6}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_329.88_CAD"
                                                data-name="$329.88 CAD"
                                                fontFamily="Inter"
                                                fontSize="13.7"
                                                transform="translate(1359 714.821)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.y3}
                                                </tspan>
                                            </text>
                                            <text
                                                id="Processed-3"
                                                fill="#1bcea7"
                                                data-name="Processed"
                                                fontFamily="Inter"
                                                fontSize="13.5"
                                                transform="translate(1047.797 723.789)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.y2}
                                                </tspan>
                                            </text>
                                            <text
                                                id="Processed-4"
                                                fill="#1bcea7"
                                                data-name="Processed"
                                                fontFamily="Inter"
                                                fontSize="13.5"
                                                transform="translate(1047.797 787.5)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.y5}
                                                </tspan>
                                            </text>
                                            <path
                                                id="Rectangle_7-3"
                                                fill="#fff"
                                                d="M0 0h392.5v122.002H0z"
                                                data-name="Rectangle 7"
                                                transform="translate(983.5 844)"
                                            ></path>
                                            <path
                                                id="Path_4-3"
                                                fill="none"
                                                stroke="#e2e2e2"
                                                strokeWidth="1"
                                                d="M0 0h393"
                                                data-name="Path 4"
                                                transform="translate(983 844.5)"
                                            ></path>
                                            <text
                                                id="Fri_Nov_29"
                                                fill="#707173"
                                                data-name="Fri, Nov 29"
                                                fontFamily="Inter"
                                                fontSize="12"
                                                transform="translate(1000.5 830)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.date}
                                                </tspan>
                                            </text>
                                            <path
                                                id="_Transparent_Rectangle_3"
                                                fill="none"
                                                d="M0 15h15V0H0Z"
                                                data-name="_Transparent_Rectangle_"
                                                transform="translate(1008.5 935.589)"
                                            ></path>
                                            <path
                                                id="Path_11"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeWidth="1.5"
                                                d="M0 0v11.755"
                                                data-name="Path 11"
                                                transform="translate(1015.577 935.546)"
                                            ></path>
                                            <path
                                                id="Path_12"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeWidth="1.5"
                                                d="M0 0v11.755"
                                                data-name="Path 12"
                                                transform="rotate(90 40.015 981.439)"
                                            ></path>
                                            <text
                                                id="CAD_Withdrawal_via_Interac_"
                                                data-name="CAD Withdrawal (via Interac)"
                                                fontFamily="Inter"
                                                fontSize="13.5"
                                                transform="translate(1047.797 873.849)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.d1}
                                                </tspan>
                                            </text>
                                            <text
                                                id="ETH_CAD"
                                                data-name="ETH → CAD"
                                                fontFamily="Inter"
                                                fontSize="13.5"
                                                transform="translate(1047.797 937.625)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.d4}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_153.36_CAD"
                                                fill="#1bcea7"
                                                data-name="+$153.36 CAD"
                                                fontFamily="Inter"
                                                fontSize="13.7"
                                                transform="translate(1359 946.593)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.d6}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_173.36_CAD"
                                                data-name="$173.36 CAD"
                                                fontFamily="Inter"
                                                fontSize="13.7"
                                                transform="translate(1359 881.821)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.d3}
                                                </tspan>
                                            </text>
                                            <text
                                                id="Processed-5"
                                                fill="#1bcea7"
                                                data-name="Processed"
                                                fontFamily="Inter"
                                                fontSize="13.5"
                                                transform="translate(1047.797 890.79)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.d2}
                                                </tspan>
                                            </text>
                                            <text
                                                id="Processed-6"
                                                fill="#1bcea7"
                                                data-name="Processed"
                                                fontFamily="Inter"
                                                fontSize="13.5"
                                                transform="translate(1047.797 954.5)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.d5}
                                                </tspan>
                                            </text>
                                            <path
                                                id="Path_10-6"
                                                fill="#008fcb"
                                                d="M16.077 0A16.077 16.077 0 1 1 0 16.077 16.077 16.077 0 0 1 16.077 0"
                                                data-name="Path 10"
                                                transform="translate(999.5 861.847)"
                                            ></path>
                                            <g
                                                id="Rectangle_8"
                                                fill="#008fcb"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1"
                                                data-name="Rectangle 8"
                                                transform="translate(1007.577 872)"
                                            >
                                                <rect width="16" height="5" stroke="none" rx="1"></rect>
                                                <rect
                                                    width="15"
                                                    height="4"
                                                    x="0.5"
                                                    y="0.5"
                                                    fill="none"
                                                    rx="0.5"
                                                ></rect>
                                            </g>
                                            <path
                                                id="Path_13"
                                                fill="#008fcb"
                                                stroke="#fff"
                                                strokeWidth="1"
                                                d="M-24.26 22.1h11.388l-1-8.749h-9.388Z"
                                                data-name="Path 13"
                                                transform="translate(1034.143 862.15)"
                                            ></path>
                                            {
                                                isIOS
                                                    ?
                                                    <>
                                                        <rect
                                                            id="Rectangle_9"
                                                            width="139"
                                                            height="5"
                                                            data-name="Rectangle 9"
                                                            rx="2.5"
                                                            transform="translate(1110 953)"
                                                        ></rect></>
                                                    :
                                                    <></>
                                            }

                                            <path
                                                id="Line_1"
                                                fill="none"
                                                stroke="#f9f9f9"
                                                strokeWidth="1"
                                                d="M0 0h327"
                                                data-name="Line 1"
                                                transform="translate(1048.5 572.5)"
                                            ></path>
                                            <path
                                                id="Line_3"
                                                fill="none"
                                                stroke="#f9f9f9"
                                                strokeWidth="1"
                                                d="M0 0h327"
                                                data-name="Line 3"
                                                transform="translate(1048.5 739.5)"
                                            ></path>
                                            <path
                                                id="Line_4"
                                                fill="none"
                                                stroke="#f9f9f9"
                                                strokeWidth="1"
                                                d="M0 0h327"
                                                data-name="Line 4"
                                                transform="translate(1048.5 906.5)"
                                            ></path>
                                            <path
                                                id="Path_16"
                                                fill="#fff"
                                                d="M27.355 12.979A9.83 9.83 0 0 0 20.168 10a9.88 9.88 0 0 0-7.187 2.979A9.81 9.81 0 0 0 10 20.16a9.86 9.86 0 0 0 2.982 7.181 9.82 9.82 0 0 0 7.17 2.979.749.749 0 1 0 0-1.5 8.6 8.6 0 0 1-3.318-.637 8.8 8.8 0 0 1-2.8-1.911 8.32 8.32 0 0 1-2.551-6.122 8.8 8.8 0 0 1 .629-3.323 8.7 8.7 0 0 1 1.913-2.8 8.9 8.9 0 0 1 2.8-1.911 8.6 8.6 0 0 1 3.326-.637 8.8 8.8 0 0 1 3.326.629 8.7 8.7 0 0 1 2.8 1.911 8.9 8.9 0 0 1 1.913 2.8 8.6 8.6 0 0 1 .629 3.323v.009a.75.75 0 0 0 1.5 0v.009a9.74 9.74 0 0 0-2.964-7.181"
                                                data-name="Path 16"
                                                transform="rotate(-30 990.586 -2296.495)"
                                            ></path>
                                            <path
                                                id="Path_17"
                                                fill="#fff"
                                                d="M230.3 111.433h-4.722v-4.393a.74.74 0 0 0-1.479 0v5.133a.74.74 0 0 0 .74.74h5.461a.74.74 0 0 0 0-1.479Z"
                                                data-name="Path 17"
                                                transform="translate(1083.011 83.999)"
                                            ></path>
                                            <path
                                                id="dollar-sign-svgrepo-com"
                                                fill="#fff"
                                                d="M6.244 8.9a2.13 2.13 0 0 1-1.064 1.824 3.5 3.5 0 0 1-1.168.469v.815a.729.729 0 1 1-1.457 0V11.2l-.045-.008a3.7 3.7 0 0 1-.753-.23 2.4 2.4 0 0 1-.927-.682.728.728 0 1 1 1.1-.953 1 1 0 0 0 .368.281 2.4 2.4 0 0 0 .459.147 3.5 3.5 0 0 0 .492.059A2.2 2.2 0 0 0 4.388 9.5c.354-.23.4-.442.4-.6a.7.7 0 0 0-.173-.46 1.5 1.5 0 0 0-.389-.311 2 2 0 0 0-.47-.17 2.2 2.2 0 0 0-.46-.047 4.3 4.3 0 0 1-.713-.057 3.2 3.2 0 0 1-.911-.294 2.6 2.6 0 0 1-.862-.692A2.2 2.2 0 0 1 .3 5.486a2.1 2.1 0 0 1 .227-.943 2.4 2.4 0 0 1 .889-.943 3.5 3.5 0 0 1 1.14-.447v-.789a.729.729 0 1 1 1.457 0v.81l.045.01a4 4 0 0 1 .761.26 2.8 2.8 0 0 1 .819.563.729.729 0 0 1-1.028 1.031 1.4 1.4 0 0 0-.389-.266 2.5 2.5 0 0 0-.473-.166L3.7 4.6a2.3 2.3 0 0 0-.395-.066 2.17 2.17 0 0 0-1.112.3.78.78 0 0 0-.435.657.77.77 0 0 0 .181.463 1.2 1.2 0 0 0 .38.3 1.8 1.8 0 0 0 .5.159 3 3 0 0 0 .473.038 3.7 3.7 0 0 1 .769.079 3.4 3.4 0 0 1 .836.3 2.9 2.9 0 0 1 .805.641A2.16 2.16 0 0 1 6.245 8.9Z"
                                                transform="translate(1314.698 190.993)"
                                            ></path>
                                            <path
                                                id="Path_20"
                                                fill="#fff"
                                                d="M464 737.55a1.2 1.2 0 1 0 1.2-1.2 1.2 1.2 0 0 0-1.2 1.2"
                                                data-name="Path 20"
                                                transform="translate(880.584 -535.752)"
                                            ></path>
                                            <path
                                                id="Path_21"
                                                fill="#fff"
                                                d="M75.183 86.366a11.183 11.183 0 1 1 11.183-11.183 11.2 11.2 0 0 1-11.183 11.183m0-20.761a9.578 9.578 0 1 0 9.578 9.578 9.59 9.59 0 0 0-9.578-9.583Z"
                                                data-name="Path 21"
                                                transform="translate(1270.6 119.817)"
                                            ></path>
                                            <path
                                                id="Path_22"
                                                fill="#fff"
                                                d="M355.994 236.38a.8.8 0 0 1-.8-.8v-1.35c0-1.307 1-2.305 1.88-3.186.646-.647 1.315-1.315 1.315-1.848a2.41 2.41 0 0 0-2.4-2.415 2.353 2.353 0 0 0-2.4 2.36.8.8 0 1 1-1.6 0 3.994 3.994 0 0 1 7.988.054c0 1.2-.906 2.1-1.783 2.978-.7.693-1.412 1.411-1.412 2.055v1.351a.8.8 0 0 1-.788.801"
                                                data-name="Path 22"
                                                transform="translate(989.789 -37.343)"
                                            ></path>
                                            <path
                                                id="Path_23"
                                                fill="#1bcea7"
                                                d="M16.077 0A16.077 16.077 0 1 1 0 16.077 16.077 16.077 0 0 1 16.077 0"
                                                data-name="Path 23"
                                                transform="translate(999.5 924.547)"
                                            ></path>
                                            <path
                                                id="Path_24"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeWidth="1.2"
                                                d="M0 0v14.091"
                                                data-name="Path 24"
                                                transform="translate(1015.577 933.579)"
                                            ></path>
                                            <path
                                                id="Path_25"
                                                fill="none"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeWidth="1.2"
                                                d="M0 0v14.091"
                                                data-name="Path 25"
                                                transform="rotate(90 40.999 981.624)"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <Page93Icons
                                battery={battery}
                                isOption={isOption}
                                time={time}
                                network={network}
                                net={net}
                                isBattery={isBattery}
                                iconPadding={`2rem 5rem 0rem 7rem`}
                                isDarkBg={false}
                                isIOS={isIOS}
                                bgColor="#141a30"
                            />
                        </div>
                    </div>
                </div >
                <div className="bill-inner-view-childs">
                    <h4 className="section-heading">INPUTS - {pageName}</h4>
                    <div className="screenshot-btn">
                        <button onClick={() => takeScreenshot()}>Screenshot <i className="fa fa-copy"></i></button>
                    </div>
                    <div className="global_form_wrapper">
                        <div className="global_form_inner">
                            <label>Amount</label>
                            <input
                                type="text"
                                value={data.amount}
                                name="amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.currency}
                                name="currency"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Day1</label>
                            <input
                                type="text"
                                value={data.today}
                                name="today"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.t1}
                                name="t1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.t2}
                                name="t2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.t3}
                                name="t3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.t4}
                                name="t4"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.t5}
                                name="t5"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.t6}
                                name="t6"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Day2</label>
                            <input
                                type="text"
                                value={data.yesterday}
                                name="yesterday"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.y1}
                                name="y1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.y2}
                                name="y2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.y3}
                                name="y3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.y4}
                                name="y4"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.y5}
                                name="y5"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.y6}
                                name="y6"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Custom Day and Date</label>
                            <button className="dateTimeBtn" onClick={() => manageTimeDate()}>Current Date and Time</button>
                            <input
                                type="text"
                                value={data.date}
                                name="date"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.d1}
                                name="d1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.d2}
                                name="d2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.d3}
                                name="d3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.d4}
                                name="d4"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.d5}
                                name="d5"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.d6}
                                name="d6"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default View108