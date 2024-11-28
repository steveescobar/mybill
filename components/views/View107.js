"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import getPicture from "@/utils/getPicture";
import Image from "next/image";
import Page93Icons from "../options/Page93Icons";
import { heeboEncoded } from "@/utils/encodedFonts/heeboEncoded";

const View107 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 107";

    const [data, setData] = useState({

        amount1: "$5,000.00",
        amount2: "$5,000.00",
        amount3: "$10,000.00",
        amount4: "$0.00",
        amount5: "$20,000.00",
        amount6: "$8,600.00",
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
            0,
            0.2,
            0
        );
    }

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
                                viewBox="0 0 591 1280"
                            >
                                <style>
                                    {
                                        heeboEncoded
                                    }
                                </style>
                                <defs>
                                    <filter
                                        id="Rectangle_3"
                                        width="563"
                                        height="855"
                                        x="14"
                                        y="191"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset></feOffset>
                                        <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
                                        <feFlood floodOpacity="0.051"></feFlood>
                                        <feComposite in2="blur" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                </defs>
                                <g id="bill_107" data-name="bill 107" transform="translate(-1082 -198)">
                                    <path
                                        id="Rectangle_1"
                                        fill="#f5f6f8"
                                        d="M0 0h591v1280H0z"
                                        data-name="Rectangle 1"
                                        transform="translate(1082 198)"
                                    ></path>
                                    <text
                                        id="and_through_our_app."
                                        data-name="and through our app."
                                        fontFamily="Heebo-Regular, Heebo"
                                        fontSize="26.1"
                                        transform="translate(1126 381)"
                                    >
                                        <tspan x="0" y="0">
                                            and through our app.
                                        </tspan>
                                    </text>
                                    <path
                                        id="Path_1"
                                        fill="#0275bd"
                                        d="M0 0h591v167H0Z"
                                        data-name="Path 1"
                                        transform="translate(1082 198)"
                                    ></path>
                                    <path
                                        id="Shape"
                                        fill="#fff"
                                        d="M16.3 26.014c0 2.781-1.272 4.32-4.623 4.32H8.81v-8.5c.362-.037 1.576-.059 1.938-.059h.976c3.418 0 4.576 1.45 4.576 4.239m6.805 11.1c0-4.386-3.58-5.977-7.922-6.073v-.163c3.7-.3 6.724-1.849 6.724-5.577 0-4.15-3.432-4.926-7.271-4.926-4.616 0-10.03.126-14.631 0V21.8c.969-.067 3.336.067 3.336 1.287v17.662C3.336 41.932.91 42.095 0 42.095v1.391c4.438-.118 9.727 0 14.2 0 4.707 0 8.9-1.586 8.9-6.377Zm-5.918-.451c0 3.632-1.265 5.355-5.659 5.355h-2.74V31.835H11.7c4.017 0 5.5 1.354 5.5 4.793Z"
                                        transform="translate(1106 279.439)"
                                    ></path>
                                    <path
                                        id="Path"
                                        fill="#fff"
                                        d="M61.839 43.43c-2.071 0-4.135 0-6.2.037v-1.42c.939 0 3.543-.052 3.543-1.317V24.324h-.074l-9.334 19.425H48.65l-9.106-19.462h-.067v16.444c0 1.294 2.582 1.317 3.558 1.317l.044 1.42c-2.582-.081-6.1-.141-8.64 0v-1.42c.984 0 3.2-.081 3.2-1.317V23.037c0-1.206-2.293-1.309-3.2-1.309V20.3c2.959.126 6.1.126 9.032 0l7.782 16.414 7.967-16.355c2.826.126 6.021.089 8.876-.037v1.428c-.939 0-3.4.067-3.4 1.309v17.672c0 1.265 2.434 1.317 3.4 1.317v1.42c-2.096-.06-4.196-.038-6.257-.038"
                                        transform="translate(1097.035 279.458)"
                                    ></path>
                                    <path
                                        id="Shape-2"
                                        fill="#fff"
                                        d="M102.229 31.734c0 4.438-.436 10.57-6.99 10.57s-7.027-6.162-7.027-10.57.473-10.526 7.027-10.526 6.99 6.132 6.99 10.526m6.125 0c0-7.656-4.675-11.954-13.115-11.954S82.08 24.041 82.08 31.734s4.682 11.983 13.159 11.983 13.115-4.283 13.115-11.983"
                                        data-name="Shape"
                                        transform="translate(1084.635 279.593)"
                                    ></path>
                                    <path
                                        id="Path-2"
                                        fill="#ed1c24"
                                        d="M161.219 0a26.629 26.629 0 1 0 26.629 26.629A26.63 26.63 0 0 0 161.219 0"
                                        data-name="Path"
                                        transform="translate(1070.959 284.738)"
                                    ></path>
                                    <path
                                        id="Shape-3"
                                        fill="#fff"
                                        d="m165.349 22.733-4.624-6.033a1.03 1.03 0 0 0-.821-.407 1 1 0 0 0-.8.392l-5.5 6.931v10.878l5.489-7.02a1.064 1.064 0 0 1 1.679.007l4.645 6.073a1 1 0 0 0 .74.385.97.97 0 0 0 .74-.385l4.645-6.073a1.08 1.08 0 0 1 .843-.414 1.04 1.04 0 0 1 .836.407l5.474 7.012V23.613l-5.5-6.931a1.01 1.01 0 0 0-.806-.392 1.05 1.05 0 0 0-.821.407l-4.586 6.036a1.01 1.01 0 0 1-.814.4 1.04 1.04 0 0 1-.819-.4m13.381 19.728h-25.15v-7.974h25.15Z"
                                        data-name="Shape"
                                        transform="translate(1066.023 280.501)"
                                    ></path>
                                    <g filter="url(#Rectangle_3)" transform="translate(1082 198)">
                                        <rect
                                            id="Rectangle_3-2"
                                            width="545"
                                            height="837"
                                            fill="#fff"
                                            data-name="Rectangle 3"
                                            rx="5"
                                            transform="translate(23 200)"
                                        ></rect>
                                    </g>
                                    <text
                                        id="Your_Interac_e-Transfer_limits"
                                        data-name="Your Interac e-Transfer limits"
                                        fontFamily="Heebo-Regular, Heebo"
                                        fontSize="26.1"
                                        transform="translate(1128 462)"
                                    >
                                        <tspan x="0" y="0">
                                            Your{" "}
                                        </tspan>
                                        <tspan fontStyle="italic">Interac </tspan>
                                        <tspan y="0">e-Transfer limits</tspan>
                                    </text>
                                    <text
                                        id="_24_hour_Interac_e-Transfer_limit"
                                        data-name="24 hour Interac e-Transfer limit"
                                        fontFamily="Heebo-Regular, Heebo"
                                        fontSize="30.35"
                                        transform="translate(1128 531)"
                                    >
                                        <tspan x="0" y="0">
                                            24 hour{" "}
                                        </tspan>
                                        <tspan fontStyle="italic">Interac </tspan>
                                        <tspan y="0">e-Transfer limit</tspan>
                                    </text>
                                    <text
                                        id="Your_remaining_daily_amount"
                                        data-name="Your remaining daily amount"
                                        fontFamily="Heebo-Regular, Heebo"
                                        fontSize="30.35"
                                        transform="translate(1128 644)"
                                    >
                                        <tspan x="0" y="0">
                                            Your remaining daily amount
                                        </tspan>
                                    </text>
                                    <text
                                        id="Your_remaining_amount"
                                        data-name="Your remaining amount"
                                        fontFamily="Heebo-Regular, Heebo"
                                        fontSize="30.35"
                                        transform="translate(1128 893)"
                                    >
                                        <tspan x="0" y="0">
                                            Your remaining amount
                                        </tspan>
                                    </text>
                                    <text
                                        id="_7_day_Interac_e-Transfer_Iimit"
                                        data-name="7 day Interac e-Transfer Iimit"
                                        fontFamily="Heebo-Regular, Heebo"
                                        fontSize="30.35"
                                        transform="translate(1128 780)"
                                    >
                                        <tspan x="0" y="0">
                                            7 day{" "}
                                        </tspan>
                                        <tspan fontStyle="italic">Interac </tspan>
                                        <tspan y="0">e-Transfer Iimit</tspan>
                                    </text>
                                    <text
                                        id="_30_day_Interac_e-Transfer_Iimit"
                                        data-name="30 day Interac e-Transfer Iimit"
                                        fontFamily="Heebo-Regular, Heebo"
                                        fontSize="30.35"
                                        transform="translate(1128 1030)"
                                    >
                                        <tspan x="0" y="0">
                                            30 day{" "}
                                        </tspan>
                                        <tspan fontStyle="italic">Interac </tspan>
                                        <tspan y="0">e-Transfer Iimit</tspan>
                                    </text>
                                    <text
                                        id="Your_remaining_amount-2"
                                        data-name="Your remaining amount"
                                        fontFamily="Heebo-Regular, Heebo"
                                        fontSize="30.35"
                                        transform="translate(1128 1143)"
                                    >
                                        <tspan x="0" y="0">
                                            Your remaining amount
                                        </tspan>
                                    </text>
                                    <text
                                        id="_5_000.00"
                                        data-name="$5,000.00"
                                        fontFamily="Heebo-Bold, Heebo"
                                        fontSize="30.5"
                                        fontWeight="700"
                                        transform="translate(1128 576)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.amount1}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_5_000.00-2"
                                        data-name="$5,000.00"
                                        fontFamily="Heebo-Bold, Heebo"
                                        fontSize="30.5"
                                        fontWeight="700"
                                        transform="translate(1128 689)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.amount2}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_0.00"
                                        data-name="$0.00"
                                        fontFamily="Heebo-Bold, Heebo"
                                        fontSize="30.5"
                                        fontWeight="700"
                                        transform="translate(1128 938)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.amount4}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_10_000.00"
                                        data-name="$10,000.00"
                                        fontFamily="Heebo-Bold, Heebo"
                                        fontSize="30.5"
                                        fontWeight="700"
                                        transform="translate(1128 825)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.amount3}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_20_000.00"
                                        data-name="$20,000.00"
                                        fontFamily="Heebo-Bold, Heebo"
                                        fontSize="30.5"
                                        fontWeight="700"
                                        transform="translate(1128 1075)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.amount5}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_8_600.00"
                                        data-name="$8,600.00"
                                        fontFamily="Heebo-Bold, Heebo"
                                        fontSize="30.5"
                                        fontWeight="700"
                                        transform="translate(1128 1188)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.amount6}
                                        </tspan>
                                    </text>
                                    <path
                                        id="Line_1"
                                        fill="none"
                                        stroke="rgba(112,112,112,0.3)"
                                        strokeLinecap="round"
                                        strokeWidth="1"
                                        d="M0 0h500"
                                        data-name="Line 1"
                                        transform="translate(1128 725.5)"
                                    ></path>
                                    <path
                                        id="Line_2"
                                        fill="none"
                                        stroke="rgba(112,112,112,0.3)"
                                        strokeLinecap="round"
                                        strokeWidth="1"
                                        d="M0 0h500"
                                        data-name="Line 2"
                                        transform="translate(1128.5 975.5)"
                                    ></path>
                                    <text
                                        id="Heads_up:_your_Interac_e-Transfer_limits"
                                        data-name="Heads up: your Interac e-Transfer limits"
                                        fontFamily="Heebo-Medium, Heebo"
                                        fontSize="26.2"
                                        fontWeight="500"
                                        transform="translate(1130 1276)"
                                    >
                                        <tspan x="0" y="0">
                                            Heads up:
                                        </tspan>
                                        <tspan
                                            xmlSpace="preserve"
                                            y="0"
                                            fontFamily="Heebo-Regular, Heebo"
                                            fontWeight="400"
                                        >
                                            {" "}
                                            your<tspan fontStyle="italic"> Interac </tspan> e-Transfer limits
                                        </tspan>
                                    </text>
                                    <path
                                        id="Path_18"
                                        fill="#fff"
                                        d="M46.095 27.5a18.6 18.6 0 1 0 13.148 5.447A18.47 18.47 0 0 0 46.095 27.5m0 34.734a15.991 15.991 0 1 1 15.99-15.991 16.01 16.01 0 0 1-15.99 15.991"
                                        data-name="Path 18"
                                        transform="translate(1484.5 265.311)"
                                    ></path>
                                    <path
                                        id="Path_19"
                                        fill="#fff"
                                        d="M173.838 107.473a7.758 7.758 0 0 0-13.248 5.483 1.3 1.3 0 1 0 2.6 0 5.16 5.16 0 0 1 5.285-5.158 5.213 5.213 0 0 1 5.033 5.033 5.16 5.16 0 0 1-2.645 4.633 7.39 7.39 0 0 0-3.816 6.428 1.3 1.3 0 0 0 2.6-.007 4.78 4.78 0 0 1 2.482-4.148 7.755 7.755 0 0 0 1.7-12.265Z"
                                        data-name="Path 19"
                                        transform="translate(1362.24 193.94)"
                                    ></path>
                                    <path
                                        id="Path_20"
                                        fill="#fff"
                                        d="M242.579 375.855a2 2 0 0 0-.032-.124 1 1 0 0 0-.043-.12 1.4 1.4 0 0 0-.12-.225q-.036-.054-.076-.1l-.086-.1c-.03-.035-.062-.059-.094-.085a1 1 0 0 0-.1-.076 1.2 1.2 0 0 0-.345-.163 1 1 0 0 0-.124-.032 1 1 0 0 0-.127-.019 1.2 1.2 0 0 0-.256 0c-.042 0-.085.011-.127.019a1 1 0 0 0-.124.032q-.06.019-.12.042c-.06.023-.078.035-.116.055s-.074.042-.109.066a1 1 0 0 0-.1.076q-.05.041-.094.085c-.044.044-.059.063-.086.1l-.076.1a1 1 0 0 0-.066.109 1.4 1.4 0 0 0-.1.235 1.3 1.3 0 0 0-.058.379q-.002.065.007.128c.009.063.011.085.019.126s.019.083.032.124a1 1 0 0 0 .043.12 1 1 0 0 0 .054.115 1 1 0 0 0 .066.11 1 1 0 0 0 .076.1 1 1 0 0 0 .086.1q.046.045.094.086c.048.041.068.052.1.076a1 1 0 0 0 .109.065 1 1 0 0 0 .116.054 1.3 1.3 0 0 0 .499.101q.064.002.128-.007c.064-.009.085-.011.127-.019s.083-.02.124-.032.081-.027.12-.043a1 1 0 0 0 .115-.054 1 1 0 0 0 .11-.065 1.3 1.3 0 0 0 .36-.36 1 1 0 0 0 .066-.11 2 2 0 0 0 .054-.115 1 1 0 0 0 .043-.12q.018-.061.032-.124c.014-.063.015-.084.019-.126s.007-.085.007-.128 0-.085-.007-.129z"
                                        data-name="Path 20"
                                        transform="translate(1289.293 -53.734)"
                                    ></path>
                                    <path
                                        id="Path_21"
                                        fill="none"
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        d="M15.21 18.022a8.011 8.011 0 1 0-8.01-8.011 8.01 8.01 0 0 0 8.01 8.011"
                                        data-name="Path 21"
                                        transform="translate(1606.529 294)"
                                    ></path>
                                    <path
                                        id="Path_22"
                                        fill="none"
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        d="M3 26.216A15.56 15.56 0 0 1 17.42 15c6.6 0 12.225 4.662 14.42 11.216"
                                        data-name="Path 22"
                                        transform="translate(1604.319 297.829)"
                                    ></path>
                                    <g
                                        id="Rectangle_6"
                                        fill="none"
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        data-name="Rectangle 6"
                                        transform="translate(1422 301.272)"
                                    >
                                        <rect width="35" height="25" stroke="none" rx="9"></rect>
                                        <rect width="32.5" height="22.5" x="1.25" y="1.25" rx="7.75"></rect>
                                    </g>
                                    <rect
                                        id="Rectangle_7"
                                        width="12"
                                        height="5"
                                        fill="#fff"
                                        data-name="Rectangle 7"
                                        rx="2.5"
                                        transform="translate(1434 295.772)"
                                    ></rect>
                                    <rect
                                        id="Rectangle_8"
                                        width="11"
                                        height="4.16"
                                        fill="#fff"
                                        data-name="Rectangle 8"
                                        rx="2.08"
                                        transform="rotate(90 576.114 884.886)"
                                    ></rect>
                                    <rect
                                        id="Rectangle_9"
                                        width="11"
                                        height="4.16"
                                        fill="#fff"
                                        data-name="Rectangle 9"
                                        rx="2.08"
                                        transform="rotate(90 556.644 865.416)"
                                    ></rect>
                                    <rect
                                        id="Rectangle_10"
                                        width="4"
                                        height="5"
                                        fill="#fff"
                                        data-name="Rectangle 10"
                                        rx="1"
                                        transform="translate(1433 308.272)"
                                    ></rect>
                                    <rect
                                        id="Rectangle_11"
                                        width="4"
                                        height="5"
                                        fill="#fff"
                                        data-name="Rectangle 11"
                                        rx="1"
                                        transform="translate(1442 308.272)"
                                    ></rect>
                                    <path
                                        id="Path_23"
                                        fill="none"
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M0 0c1.218 1.163 3.247 1.821 5.951 1.772S10.2 1.26 11.758 0"
                                        data-name="Path 23"
                                        transform="translate(1433.874 317.669)"
                                    ></path>
                                    <path
                                        id="Rectangle_4"
                                        fill="#fff"
                                        d="M0 0h591v172H0z"
                                        data-name="Rectangle 4"
                                        transform="translate(1082 1306)"
                                    ></path>
                                    <path
                                        id="Line_3"
                                        fill="none"
                                        stroke="rgba(112,112,112,0.2)"
                                        strokeWidth="1"
                                        d="M0 0h591"
                                        data-name="Line 3"
                                        transform="translate(1082 1306.5)"
                                    ></path>
                                    <path
                                        id="Rectangle_5"
                                        fill="#0275bd"
                                        d="M0 0h591v69H0z"
                                        data-name="Rectangle 5"
                                        transform="translate(1082 1409)"
                                    ></path>
                                    <circle
                                        id="Ellipse_7"
                                        cx="22.857"
                                        cy="22.857"
                                        r="22.857"
                                        fill="none"
                                        stroke="#6c6e6d"
                                        strokeWidth="3.5"
                                        data-name="Ellipse 7"
                                        transform="translate(1290.732 1319.951)"
                                    ></circle>
                                    <path
                                        id="Path_28"
                                        fill="none"
                                        stroke="#6c6e6d"
                                        strokeLinecap="round"
                                        strokeWidth="3.5"
                                        d="M77.075 115.852v2.293"
                                        data-name="Path 28"
                                        transform="translate(1236.501 1238.489)"
                                    ></path>
                                    <path
                                        id="Path_29"
                                        fill="none"
                                        stroke="#6c6e6d"
                                        strokeLinecap="round"
                                        strokeWidth="3.5"
                                        d="M77.075 30.894v2.293"
                                        data-name="Path 29"
                                        transform="translate(1236.501 1298.228)"
                                    ></path>
                                    <path
                                        id="Path_30"
                                        fill="none"
                                        stroke="#6c6e6d"
                                        strokeLinecap="round"
                                        strokeWidth="3.5"
                                        d="M67.661 44.349c0-3.166-3.079-5.732-6.878-5.732s-6.878 2.566-6.878 5.732 3.079 5.732 6.878 5.732 6.878 2.566 6.878 5.732-3.079 5.732-6.878 5.732-6.878-2.566-6.878-5.732"
                                        data-name="Path 30"
                                        transform="translate(1252.793 1292.797)"
                                    ></path>
                                    <path
                                        id="Path_24"
                                        fill="none"
                                        stroke="#6c6e6d"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3.5"
                                        d="M10021.424 6468.507c.6-1.738.906-2.608 1.354-2.849a1.31 1.31 0 0 1 1.239 0c.447.241.749 1.11 1.354 2.849l4 11.5a3 3 0 0 0 .414.927 1.3 1.3 0 0 0 .509.37 3 3 0 0 0 1.008.106l12.168.248c1.841.038 2.762.057 3.129.407a1.3 1.3 0 0 1 .383 1.179c-.091.5-.824 1.055-2.292 2.168l-9.7 7.354a3 3 0 0 0-.753.679 1.3 1.3 0 0 0-.194.6 3 3 0 0 0 .21.993l3.525 11.649c.532 1.762.8 2.644.579 3.1a1.3 1.3 0 0 1-1 .729c-.5.067-1.259-.458-2.771-1.51l-9.989-6.952a3 3 0 0 0-.879-.508 1.3 1.3 0 0 0-.629 0 3 3 0 0 0-.879.508l-9.99 6.952c-1.512 1.052-2.268 1.577-2.771 1.509a1.3 1.3 0 0 1-1-.728c-.221-.458.047-1.338.58-3.1l3.524-11.649a3 3 0 0 0 .211-.993 1.3 1.3 0 0 0-.2-.6 3 3 0 0 0-.753-.679l-9.7-7.354c-1.467-1.113-2.2-1.669-2.291-2.168a1.3 1.3 0 0 1 .383-1.179c.367-.351 1.287-.369 3.128-.407l12.169-.248a3 3 0 0 0 1.009-.106 1.3 1.3 0 0 0 .51-.369 3 3 0 0 0 .412-.926Z"
                                        data-name="Path 24"
                                        transform="translate(-8419.299 -5145.873)"
                                    ></path>
                                    <path
                                        id="Path_12"
                                        fill="none"
                                        d="m23.007 0 23.006 16.739H0Z"
                                        data-name="Path 12"
                                        transform="translate(1435.776 1316.433)"
                                    ></path>
                                    <path
                                        id="Path_13"
                                        fill="#6c6e6d"
                                        stroke="#707070"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        d="M21.672 3.173 7.645 13.379H35.7zm0-3.173 21.673 15.768H0Z"
                                        data-name="Path 13"
                                        transform="translate(1437.11 1318.732)"
                                    ></path>
                                    <path
                                        id="Rectangle_19"
                                        fill="#6c6e6d"
                                        d="M0 0h46.013v3.8H0Z"
                                        data-name="Rectangle 19"
                                        transform="translate(1435.776 1360.843)"
                                    ></path>
                                    <path
                                        id="Rectangle_20"
                                        fill="#6c6e6d"
                                        d="M0 0h46.013v3.507H0Z"
                                        data-name="Rectangle 20"
                                        transform="translate(1435.776 1338.298)"
                                    ></path>
                                    <path
                                        id="Rectangle_21"
                                        fill="#6c6e6d"
                                        d="M0 0h21.341v3.657H0Z"
                                        data-name="Rectangle 21"
                                        transform="rotate(90 52.61 1394.137)"
                                    ></path>
                                    <path
                                        id="Rectangle_22"
                                        fill="#6c6e6d"
                                        d="M0 0h21.341v3.961H0Z"
                                        data-name="Rectangle 22"
                                        transform="rotate(90 60.024 1401.043)"
                                    ></path>
                                    <path
                                        id="Rectangle_23"
                                        fill="#6c6e6d"
                                        d="M0 0h21.341v3.352H0Z"
                                        data-name="Rectangle 23"
                                        transform="rotate(90 66.729 1407.748)"
                                    ></path>
                                    <path
                                        id="Rectangle_18"
                                        fill="#707070"
                                        stroke="#707070"
                                        strokeWidth="1"
                                        d="M0 0h18.083v2.263H0Z"
                                        data-name="Rectangle 18"
                                        transform="translate(1155.841 1343.577)"
                                    ></path>
                                    <path
                                        id="Path_27"
                                        fill="rgba(0,0,0,0)"
                                        stroke="#707070"
                                        strokeWidth="3.5"
                                        d="M.125 44.072v21.6s-1.553 3.714 6.269 3.714h23.983s10.841 1.012 10.841-4.458v-2.022"
                                        data-name="Path 27"
                                        transform="translate(1145.163 1292.38)"
                                    ></path>
                                    <g
                                        id="Rectangle_12"
                                        fill="none"
                                        stroke="#707070"
                                        strokeWidth="3.5"
                                        data-name="Rectangle 12"
                                        transform="translate(1149.75 1323)"
                                    >
                                        <rect width="44" height="30" stroke="none" rx="6"></rect>
                                        <rect width="40.5" height="26.5" x="1.75" y="1.75" rx="4.25"></rect>
                                    </g>
                                    <path
                                        id="Line_4"
                                        fill="none"
                                        stroke="#707070"
                                        strokeWidth="3.5"
                                        d="M0 0h40"
                                        data-name="Line 4"
                                        transform="translate(1151.25 1333.5)"
                                    ></path>
                                    <g
                                        id="Ellipse_1"
                                        fill="#fff"
                                        stroke="#707070"
                                        strokeWidth="2.5"
                                        data-name="Ellipse 1"
                                        transform="translate(1179.75 1339)"
                                    >
                                        <circle cx="4.5" cy="4.5" r="4.5" stroke="none"></circle>
                                        <circle cx="4.5" cy="4.5" r="3.25" fill="none"></circle>
                                    </g>
                                    <text
                                        id="Pay_Transfer_Bank_services"
                                        fill="#707070"
                                        data-name="Pay &amp; Transfer Bank services"
                                        fontFamily="Heebo-Regular, Heebo"
                                        fontSize="22.2"
                                        transform="translate(1241 1390)"
                                    >
                                        <tspan x="0" y="0">
                                            Pay &amp; Transfer Bank services
                                        </tspan>
                                    </text>
                                    <text
                                        id="Offers"
                                        fill="#707070"
                                        fontFamily="Heebo-Regular, Heebo"
                                        fontSize="22.2"
                                        transform="translate(1573 1390)"
                                    >
                                        <tspan x="0" y="0">
                                            Offers
                                        </tspan>
                                    </text>
                                    <text
                                        id="Accounts"
                                        fill="#707070"
                                        fontFamily="Heebo-Regular, Heebo"
                                        fontSize="22.2"
                                        transform="translate(1121 1390)"
                                    >
                                        <tspan x="0" y="0">
                                            Accounts
                                        </tspan>
                                    </text>
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
                            <label>24 hour Interac e-Transfer limit</label>
                            <input
                                type="text"
                                value={data.amount1}
                                name="amount1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Your remaining daily amount</label>
                            <input
                                type="text"
                                value={data.amount2}
                                name="amount2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>7 day Interac e-Transfer Iimit</label>
                            <input
                                type="text"
                                value={data.amount3}
                                name="amount3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Your remaining amount</label>
                            <input
                                type="text"
                                value={data.amount4}
                                name="amount4"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>30 day Interac e-Transfer Iimit</label>
                            <input
                                type="text"
                                value={data.amount5}
                                name="amount5"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Your remaining amount</label>
                            <input
                                type="text"
                                value={data.amount6}
                                name="amount6"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default View107