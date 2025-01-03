"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import getPicture from "@/utils/getPicture";
import Image from "next/image";
import Page93Icons from "../options/Page93Icons";
import { heeboEncoded } from "@/utils/encodedFonts/HeeboEncoded";

const View107 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 107";

    const [data, setData] = useState({

        amount1: "$269.66",
        number: "0497 3981-843",
        amount2: "$39.99",
        date: "JAN 02,2025",
        interac: " INTERAC ETRNSFR AD RECVD FORIS",
        interacto: " 20250012010WZBA6E",
        interacamount: "+$140.01",
        interacamount1: "$127.41",
        fulfill: "INTERAC ETRNSFR FULFILL CRYPTO.COM",
        fulfillrecvd: " 20250012010WZBA6E",
        fulfillamount: "$20.00",
        fulfillamount1: "$137.40",
        sent: " INTERAC ETRNSFR SENT TALHA BIN",
        sentrecvd: " SHUJA 20250011522WXGKTE",
        sentamount: "$10.49",
        sentamount1: "$197.25",
        date1: "DEC 31,2024"
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
                                viewBox="0 0 589 1274"
                            >
                                <style>
                                    {
                                        heeboEncoded
                                    }
                                </style>
                                <defs>
                                    <filter
                                        id="Path_25"
                                        width="501"
                                        height="184"
                                        x="52"
                                        y="114"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset dx="8"></feOffset>
                                        <feGaussianBlur result="blur" stdDeviation="5"></feGaussianBlur>
                                        <feFlood floodOpacity="0.188"></feFlood>
                                        <feComposite in2="blur" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                </defs>
                                <g id="Group_6" data-name="Group 6" transform="translate(-1644 -224)">
                                    <g id="Group_5" data-name="Group 5" transform="translate(156 38)">
                                        <path
                                            id="Rectangle_13"
                                            fill="#fff"
                                            d="M0 0h589v1274H0z"
                                            data-name="Rectangle 13"
                                            transform="translate(1488 186)"
                                        ></path>
                                        <path
                                            id="Rectangle_14"
                                            fill="#0077c5"
                                            d="M0 0h589v242H0z"
                                            data-name="Rectangle 14"
                                            transform="translate(1488 186)"
                                        ></path>
                                        <g id="Group_1" data-name="Group 1" transform="translate(648 -84)">
                                            <path
                                                id="Path_26"
                                                fill="none"
                                                stroke="#e0ffff"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="3"
                                                d="m3460.308 1056.817-9.639 11.73 9.639 11.265"
                                                data-name="Path 26"
                                                transform="translate(-2540 -715.318)"
                                            ></path>
                                            <g filter="url(#Path_25)" transform="translate(840 270)">
                                                <path
                                                    id="Path_25-2"
                                                    fill="#fff"
                                                    d="M10 0h451a10 10 0 0 1 10 10v134a10 10 0 0 1-10 10H10a10 10 0 0 1-10-10V10A10 10 0 0 1 10 0"
                                                    data-name="Path 25"
                                                    transform="translate(59 129)"
                                                ></path>
                                            </g>
                                            <text
                                                id="Chequing"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="21"
                                                transform="translate(1090 438)"
                                            >
                                                <tspan x="0" y="0">
                                                    Chequing
                                                </tspan>
                                            </text>
                                            <text
                                                id="_269.66"
                                                data-name="$269.66"
                                                fontFamily="Heebo-Bold, Heebo"
                                                fontSize="26.1"
                                                fontWeight="700"
                                                letterSpacing=".03em"
                                                transform="translate(1083 488)"
                                            >
                                                <tspan x="50" y="0" textAnchor="middle">
                                                    {data.amount1}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_0497_3981-843"
                                                data-name="0497 3981-843"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".03em"
                                                transform="translate(1064 532)"
                                            >
                                                <tspan x="73" y="0" textAnchor="middle">
                                                    {data.number}
                                                </tspan>
                                            </text>
                                        </g>
                                        <g id="Group_3" data-name="Group 3" transform="translate(648 -87)">
                                            <path
                                                id="Rectangle_17"
                                                fill="#f5f6f8"
                                                d="M0 0h589v158H0z"
                                                data-name="Rectangle 17"
                                                transform="translate(840 695)"
                                            ></path>
                                            <path
                                                id="Path_27"
                                                fill="none"
                                                stroke="#16629c"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="3"
                                                d="m3460.308 1056.817-9.639 11.73 9.639 11.265"
                                                data-name="Path 27"
                                                transform="rotate(-90 2287.585 1972.404)"
                                            ></path>
                                            <text
                                                id="Transactions"
                                                fontFamily="Heebo-Medium, Heebo"
                                                fontSize="20"
                                                fontWeight="500"
                                                letterSpacing=".02em"
                                                transform="translate(887.007 729)"
                                            >
                                                <tspan x="0" y="0">
                                                    Transactions
                                                </tspan>
                                            </text>
                                            <text
                                                id="Account_details"
                                                fill="#6b7278"
                                                data-name="Account details"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".02em"
                                                transform="translate(1051.007 729)"
                                            >
                                                <tspan x="0" y="0">
                                                    Account details
                                                </tspan>
                                            </text>
                                            <text
                                                id="Statements"
                                                fill="#6b7278"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".02em"
                                                transform="translate(1238.007 729)"
                                            >
                                                <tspan x="0" y="0">
                                                    Statements
                                                </tspan>
                                            </text>
                                            <path
                                                id="Rectangle_15"
                                                fill="#dbdce1"
                                                d="M0 0h501v5H0z"
                                                data-name="Rectangle 15"
                                                transform="translate(866.007 751)"
                                            ></path>
                                            <path
                                                id="Rectangle_16"
                                                fill="#006fb0"
                                                d="M0 0h164v6H0z"
                                                data-name="Rectangle 16"
                                                transform="translate(866.007 751)"
                                            ></path>
                                            <text
                                                id="Funds_on_hold:_31.99"
                                                data-name="Funds on hold: $31.99"
                                                fontFamily="Heebo-Bold, Heebo"
                                                fontSize="27"
                                                fontWeight="700"
                                                transform="translate(866.007 815)"
                                            >
                                                <tspan x="0" y="0">
                                                    Funds on hold: {data.amount2}
                                                </tspan>
                                            </text>
                                        </g>
                                        <g id="Group_2" data-name="Group 2" transform="translate(637.5 -86)">
                                            <path
                                                id="Path_8"
                                                fill="#3273b7"
                                                stroke="#0077c5"
                                                strokeWidth="1"
                                                d="M9437.659 2881.94a1.08 1.08 0 0 1 1.03.75l1.189 3.7a12 12 0 0 1 1.435.829l3.8-.818a1.08 1.08 0 0 1 1.164.519l3 5.189a1.085 1.085 0 0 1-.137 1.268l-2.606 2.877a12 12 0 0 1 0 1.657l2.607 2.882a1.08 1.08 0 0 1 .136 1.267l-3 5.192a1.08 1.08 0 0 1-1.165.517l-3.8-.818a12 12 0 0 1-1.433.829l-1.191 3.7a1.08 1.08 0 0 1-1.029.75h-6a1.08 1.08 0 0 1-1.029-.75l-1.187-3.7a12 12 0 0 1-1.439-.833l-3.795.82a1.08 1.08 0 0 1-1.166-.519l-3-5.189a1.08 1.08 0 0 1 .137-1.268l2.606-2.881a12 12 0 0 1 0-1.653l-2.607-2.882a1.08 1.08 0 0 1-.138-1.267l3-5.192a1.08 1.08 0 0 1 1.166-.517l3.795.82a12 12 0 0 1 1.439-.833l1.189-3.695a1.08 1.08 0 0 1 1.026-.75h6Zm-.792 2.163h-4.413l-1.228 3.821-.829.4a10 10 0 0 0-1.177.679l-.765.52-3.93-.848-2.207 3.825 2.693 2.981-.065.917a10 10 0 0 0 0 1.358l.065.917-2.7 2.981 2.209 3.824 3.929-.846.765.517a10 10 0 0 0 1.177.679l.829.4 1.23 3.822h4.417l1.233-3.825.826-.4a10 10 0 0 0 1.175-.679l.764-.517 3.932.846 2.206-3.824-2.7-2.981.064-.917a10 10 0 0 0 0-1.361l-.064-.917 2.7-2.979-2.207-3.825-3.932.844-.764-.512a10 10 0 0 0-1.175-.679l-.826-.4-1.234-3.824Zm-2.207 6.49a6.49 6.49 0 1 1-6.488 6.49 6.49 6.49 0 0 1 6.488-6.49Zm0 2.163a4.327 4.327 0 1 0 4.328 4.327 4.326 4.326 0 0 0-4.328-4.327Z"
                                                data-name="Path 8"
                                                transform="translate(-8108.66 -2303.249)"
                                            ></path>
                                            <path
                                                id="Path_9"
                                                fill="#3273b7"
                                                stroke="#0077c5"
                                                strokeWidth="1"
                                                d="M6423.083 2912.285h19.084l-2.189 2.983a1.65 1.65 0 0 0 0 1.84.79.79 0 0 0 1.352 0l3.82-5.2c.009-.012.012-.03.021-.042a1.4 1.4 0 0 0 .182-.37v-.012a1.7 1.7 0 0 0 .063-.456 2 2 0 0 0-.014-.216v.007a1 1 0 0 0-.023-.165v.008a1.5 1.5 0 0 0-.233-.594l-3.821-5.2a.79.79 0 0 0-1.351 0 1.65 1.65 0 0 0 0 1.841l2.191 2.981h-19.086c-.528 0-.956.582-.956 1.3s.428 1.3.956 1.3Zm21.391 9.885h-19.086l2.189-2.982a1.65 1.65 0 0 0 0-1.839.79.79 0 0 0-1.351 0l-3.821 5.2c-.008.012-.012.03-.02.043a1.4 1.4 0 0 0-.184.371v.008a1.7 1.7 0 0 0-.047.672v-.007a2 2 0 0 0 .024.164v-.008a1.45 1.45 0 0 0 .233.6l3.82 5.2a.79.79 0 0 0 1.352 0 1.65 1.65 0 0 0 0-1.84l-2.189-2.981h19.086c.528 0 .955-.582.955-1.3s-.427-1.3-.955-1.3Z"
                                                data-name="Path 9"
                                                transform="translate(-5481.605 -2324.171)"
                                            ></path>
                                            <path
                                                id="Path_10"
                                                fill="none"
                                                stroke="#0077c5"
                                                strokeWidth="2"
                                                d="M7347.069 2935.813v-23.3h17.058l5.945 5.788v17.512l-3.755-5.046-2.19 5.046-3.131-5.046-2.5 5.046-2.659-5.046-2.191 5.046-2.349-5.046Z"
                                                data-name="Path 10"
                                                transform="translate(-6288.915 -2330.812)"
                                            ></path>
                                            <path
                                                id="Path_11"
                                                fill="none"
                                                stroke="#0077c5"
                                                strokeWidth="2"
                                                d="M7406.459 2908.549v7.285h9.066"
                                                data-name="Path 11"
                                                transform="translate(-6335.557 -2327.786)"
                                            ></path>
                                            <path
                                                id="Path_7"
                                                fill="#3273b7"
                                                stroke="#0077c5"
                                                strokeWidth="1"
                                                d="M8139.73 2921.11a1.6 1.6 0 0 0-.565-.023l-25.461 2.865c-.917.1-1.138.715-.491 1.362l5.5 5.5a8.2 8.2 0 0 1 1.688 2.7l2.317 6.956a.99.99 0 0 0 .618.71.91.91 0 0 0 .912-.406l15.559-18.647c.421-.506.362-.9-.08-1.015Zm-19.867 8.644-4.461-4.455 19.565-2.2-14.268 7.664a8 8 0 0 0-.837-1.008Zm3.982 9-1.871-5.609a7.5 7.5 0 0 0-.468-1.069l14.336-7.7Z"
                                                data-name="Path 7"
                                                transform="rotate(3 49305.277 -130536.818)"
                                            ></path>
                                            <text
                                                id="TRANSFER"
                                                fill="#0077c5"
                                                fontFamily="Heebo-Medium, Heebo"
                                                fontSize="20"
                                                fontWeight="600"
                                                letterSpacing=".033em"
                                                transform="translate(900 634)"
                                            >
                                                <tspan x="0" y="0">
                                                    TRANSFER
                                                </tspan>
                                            </text>
                                            <text
                                                id="PAY_BILL"
                                                fill="#0077c5"
                                                data-name="PAY BILL"
                                                fontFamily="Heebo-Medium, Heebo"
                                                fontSize="20"
                                                fontWeight="600"
                                                letterSpacing=".033em"
                                                transform="translate(1027 634)"
                                            >
                                                <tspan x="0" y="0">
                                                    PAY BILL
                                                </tspan>
                                            </text>
                                            <text
                                                id="INTERAC"
                                                fill="#0077c5"
                                                fontFamily="Heebo-Medium, Heebo"
                                                fontSize="20"
                                                 fontStyle="italic"
                                                fontWeight="600"
                                                letterSpacing=".033em"
                                                transform="translate(1157 634)"
                                            >
                                                <tspan x="0" y="0">
                                                    INTERAC
                                                </tspan>
                                            </text>
                                            <text
                                                id="E-TRANSFER"
                                                fill="#0077c5"
                                                fontFamily="Heebo-Medium, Heebo"
                                                fontSize="20"
                                                fontWeight="600"
                                                letterSpacing=".033em"
                                                transform="translate(1135 669)"
                                            >
                                                <tspan x="0" y="0">
                                                    E-TRANSFER
                                                </tspan>
                                            </text>
                                            <text
                                                id="MANAGE"
                                                fill="#0077c5"
                                                fontFamily="Heebo-Medium, Heebo"
                                                fontSize="20"
                                                fontWeight="600"
                                                letterSpacing=".033em"
                                                transform="translate(1283 634)"
                                            >
                                                <tspan x="0" y="0">
                                                    MANAGE
                                                </tspan>
                                            </text>
                                        </g>
                                        <g id="Group_4" data-name="Group 4" transform="translate(648 -86)">
                                            <path
                                                id="Path_24"
                                                fill="none"
                                                stroke="#60686a"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="3"
                                                d="M10017.26 6467.928c.488-1.4.732-2.106 1.092-2.3a1.06 1.06 0 0 1 1 0c.361.195.605.9 1.092 2.3l3.229 9.283a2.4 2.4 0 0 0 .332.749 1.1 1.1 0 0 0 .412.3 2.4 2.4 0 0 0 .814.084l9.824.2c1.486.031 2.23.045 2.527.329a1.06 1.06 0 0 1 .309.952c-.074.4-.666.852-1.852 1.751l-7.832 5.938a2.4 2.4 0 0 0-.607.547 1.1 1.1 0 0 0-.156.484 2.4 2.4 0 0 0 .17.8l2.848 9.406c.428 1.423.645 2.135.467 2.5a1.06 1.06 0 0 1-.811.589c-.4.054-1.016-.372-2.236-1.22l-8.068-5.613a2.4 2.4 0 0 0-.707-.411 1.1 1.1 0 0 0-.51 0 2.4 2.4 0 0 0-.707.411l-8.068 5.614c-1.221.848-1.832 1.272-2.236 1.219a1.06 1.06 0 0 1-.811-.588c-.18-.37.037-1.08.467-2.5l2.848-9.406a2.3 2.3 0 0 0 .168-.8 1 1 0 0 0-.156-.483 2.4 2.4 0 0 0-.607-.547l-7.832-5.938c-1.184-.9-1.775-1.347-1.85-1.751a1.06 1.06 0 0 1 .309-.952c.3-.283 1.039-.3 2.527-.328l9.824-.2a2.4 2.4 0 0 0 .814-.086 1.1 1.1 0 0 0 .414-.3 2.4 2.4 0 0 0 .332-.749Z"
                                                data-name="Path 24"
                                                transform="translate(-8666.526 -5037.336)"
                                            ></path>
                                            <path
                                                id="Path_12"
                                                fill="none"
                                                d="m18.493 0 18.493 13.455H0Z"
                                                data-name="Path 12"
                                                transform="translate(1188.255 1424.927)"
                                            ></path>
                                            <path
                                                id="Path_13"
                                                fill="#60686a"
                                                stroke="#707070"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1"
                                                d="m17.421 2.551-11.275 8.2H28.7l-11.275-8.2m0-2.551 17.416 12.675H0Z"
                                                data-name="Path 13"
                                                transform="translate(1189.328 1427.775)"
                                            ></path>
                                            <path
                                                id="Rectangle_19"
                                                fill="#60686a"
                                                d="M0 0h36.986v3.054H0Z"
                                                data-name="Rectangle 19"
                                                transform="translate(1188.255 1462.197)"
                                            ></path>
                                            <path
                                                id="Rectangle_20"
                                                fill="#60686a"
                                                d="M0 0h36.986v2.819H0Z"
                                                data-name="Rectangle 20"
                                                transform="translate(1188.255 1443.271)"
                                            ></path>
                                            <path
                                                id="Rectangle_21"
                                                fill="#60686a"
                                                d="M0 0h17.154v2.939H0Z"
                                                data-name="Rectangle 21"
                                                transform="rotate(90 -124.799 1321.872)"
                                            ></path>
                                            <path
                                                id="Rectangle_22"
                                                fill="#60686a"
                                                d="M0 0h17.154v3.184H0Z"
                                                data-name="Rectangle 22"
                                                transform="rotate(90 -118.839 1327.424)"
                                            ></path>
                                            <path
                                                id="Rectangle_23"
                                                fill="#60686a"
                                                d="M0 0h17.154v2.694H0Z"
                                                data-name="Rectangle 23"
                                                transform="rotate(90 -113.45 1332.813)"
                                            ></path>
                                            <circle
                                                id="Ellipse_7"
                                                cx="18.335"
                                                cy="18.335"
                                                r="18.335"
                                                fill="none"
                                                stroke="#60686a"
                                                strokeWidth="3.5"
                                                data-name="Ellipse 7"
                                                transform="translate(1043.559 1428.166)"
                                            ></circle>
                                            <path
                                                id="Path_28"
                                                fill="none"
                                                stroke="#60686a"
                                                strokeLinecap="round"
                                                strokeWidth="3.5"
                                                d="M77.075 115.852v1.839"
                                                data-name="Path 28"
                                                transform="translate(984.808 1339.899)"
                                            ></path>
                                            <path
                                                id="Path_29"
                                                fill="none"
                                                stroke="#60686a"
                                                strokeLinecap="round"
                                                strokeWidth="3.5"
                                                d="M77.075 30.894v1.839"
                                                data-name="Path 29"
                                                transform="translate(984.808 1404.628)"
                                            ></path>
                                            <path
                                                id="Path_30"
                                                fill="none"
                                                stroke="#60686a"
                                                strokeLinecap="round"
                                                strokeWidth="3.5"
                                                d="M64.939 43.215c0-2.539-2.47-4.6-5.517-4.6s-5.517 2.058-5.517 4.6 2.47 4.6 5.517 4.6 5.517 2.058 5.517 4.6-2.47 4.6-5.517 4.6-5.517-2.058-5.517-4.6"
                                                data-name="Path 30"
                                                transform="translate(1002.461 1398.744)"
                                            ></path>
                                            <text
                                                id="Accounts"
                                                fill="#0e73ab"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="18"
                                                letterSpacing="-.004em"
                                                fontWeight="600"
                                                transform="translate(879 1483.073)"
                                            >
                                                <tspan x="0" y="0">
                                                    Accounts
                                                </tspan>
                                            </text>
                                            <text
                                                id="Pay_Transfer"
                                                fill="#7a7b7f"
                                                data-name="Pay &amp; Transfer"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="18"
                                                letterSpacing="-.004em"
                                                transform="translate(1004 1484.073)"
                                            >
                                                <tspan x="0" y="0">
                                                    Pay &amp; Transfer
                                                </tspan>
                                            </text>
                                            <text
                                                id="Bank_services"
                                                fill="#7a7b7f"
                                                data-name="Bank services"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="18"
                                                letterSpacing="-.004em"
                                                transform="translate(1152 1484.073)"
                                            >
                                                <tspan x="0" y="0">
                                                    Bank services
                                                </tspan>
                                            </text>
                                            <text
                                                id="Offers"
                                                fill="#7a7b7f"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="18"
                                                letterSpacing="-.004em"
                                                transform="translate(1327 1484.073)"
                                            >
                                                <tspan x="0" y="0">
                                                    Offers
                                                </tspan>
                                            </text>
                                            <rect
                                                id="Rectangle_18"
                                                width="34"
                                                height="24"
                                                fill="#0e73ab"
                                                data-name="Rectangle 18"
                                                rx="3"
                                                transform="translate(902 1431.073)"
                                            ></rect>
                                            <path
                                                id="Rectangle_19-2"
                                                fill="#e4ffff"
                                                d="M0 0h34v3H0z"
                                                data-name="Rectangle 19"
                                                transform="translate(902 1438.073)"
                                            ></path>
                                            <path
                                                id="Rectangle_20-2"
                                                fill="#e4ffff"
                                                d="M0 0h14v2H0z"
                                                data-name="Rectangle 20"
                                                transform="translate(906 1447.073)"
                                            ></path>
                                            <g
                                                id="Ellipse_2"
                                                fill="#0e73ab"
                                                stroke="#e4ffff"
                                                strokeWidth="2.5"
                                                data-name="Ellipse 2"
                                                transform="translate(925 1443.073)"
                                            >
                                                <circle cx="4" cy="4" r="4" stroke="none"></circle>
                                                <circle cx="4" cy="4" r="2.75" fill="none"></circle>
                                            </g>
                                            <path
                                                id="Path_27-2"
                                                fill="rgba(0,0,0,0)"
                                                stroke="#0e73ab"
                                                strokeWidth="3.5"
                                                d="M.1 44.072V61.31s-1.195 2.965 4.8 2.965h18.39s8.311.808 8.311-3.558v-1.611"
                                                data-name="Path 27"
                                                transform="translate(898.559 1398.049)"
                                            ></path>
                                            <path
                                                id="Rectangle_21-2"
                                                fill="#f5f6f8"
                                                d="M0 0h589v52H0z"
                                                data-name="Rectangle 21"
                                                transform="translate(840 921)"
                                            ></path>
                                            <g
                                                id="Rectangle_22-2"
                                                fill="#d6d6d6"
                                                stroke="#d6d6d6"
                                                strokeWidth="2"
                                                data-name="Rectangle 22"
                                                transform="translate(840 919)"
                                            >
                                                <path stroke="none" d="M0 0h589v2H0z"></path>
                                                <rect width="587" x="1" y="1" fill="none"></rect>
                                            </g>
                                            <g
                                                id="Rectangle_23-2"
                                                fill="#d6d6d6"
                                                stroke="#d6d6d6"
                                                strokeWidth="2"
                                                data-name="Rectangle 23"
                                                transform="translate(840 971)"
                                            >
                                                <path stroke="none" d="M0 0h589v2H0z"></path>
                                                <rect width="587" x="1" y="1" fill="none"></rect>
                                            </g>
                                            <path
                                                id="Rectangle_21-3"
                                                fill="#f5f6f8"
                                                d="M0 0h589v52H0z"
                                                data-name="Rectangle 21"
                                                transform="translate(840 1290)"
                                            ></path>
                                            <g
                                                id="Rectangle_22-3"
                                                fill="#d6d6d6"
                                                stroke="#d6d6d6"
                                                strokeWidth="2"
                                                data-name="Rectangle 22"
                                                transform="translate(840 1288)"
                                            >
                                                <path stroke="none" d="M0 0h589v2H0z"></path>
                                                <rect width="587" x="1" y="1" fill="none"></rect>
                                            </g>
                                            <g
                                                id="Rectangle_23-3"
                                                fill="#d6d6d6"
                                                stroke="#d6d6d6"
                                                strokeWidth="2"
                                                data-name="Rectangle 23"
                                                transform="translate(840 1340)"
                                            >
                                                <path stroke="none" d="M0 0h589v2H0z"></path>
                                                <rect width="587" x="1" y="1" fill="none"></rect>
                                            </g>
                                            <g
                                                id="Rectangle_24"
                                                fill="#d6d6d6"
                                                stroke="#d6d6d6"
                                                strokeWidth="2"
                                                data-name="Rectangle 24"
                                                transform="translate(840 1076)"
                                            >
                                                <path stroke="none" d="M0 0h589v2H0z"></path>
                                                <rect width="587" x="1" y="1" fill="none"></rect>
                                            </g>
                                            <g
                                                id="Rectangle_25"
                                                fill="#d6d6d6"
                                                stroke="#d6d6d6"
                                                strokeWidth="2"
                                                data-name="Rectangle 25"
                                                transform="translate(840 1181)"
                                            >
                                                <path stroke="none" d="M0 0h589v2H0z"></path>
                                                <rect width="587" x="1" y="1" fill="none"></rect>
                                            </g>
                                            <g
                                                id="Rectangle_26"
                                                fill="#d6d6d6"
                                                stroke="#d6d6d6"
                                                strokeWidth="2"
                                                data-name="Rectangle 26"
                                                transform="translate(840 1416)"
                                            >
                                                <path stroke="none" d="M0 0h589v2H0z"></path>
                                                <rect width="587" x="1" y="1" fill="none"></rect>
                                            </g>
                                            <path
                                                id="Path_28-2"
                                                fill="none"
                                                stroke="#16629c"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="4"
                                                d="m3460.308 1056.817-9.639 11.73 9.639 11.265"
                                                data-name="Path 28"
                                                transform="rotate(180 2418.355 1047.389)"
                                            ></path>
                                            <path
                                                id="Path_31"
                                                fill="none"
                                                stroke="#16629c"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="4"
                                                d="m3460.308 1056.817-9.639 11.73 9.639 11.265"
                                                data-name="Path 31"
                                                transform="rotate(180 2417.913 1099.385)"
                                            ></path>
                                            <path
                                                id="Path_32"
                                                fill="none"
                                                stroke="#16629c"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="4"
                                                d="m3460.308 1056.817-9.639 11.73 9.639 11.265"
                                                data-name="Path 32"
                                                transform="rotate(180 2417.471 1151.381)"
                                            ></path>
                                            <path
                                                id="Path_33"
                                                fill="none"
                                                stroke="#16629c"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="3"
                                                d="m3460.308 1056.817-9.639 11.73 9.639 11.265"
                                                data-name="Path 33"
                                                transform="rotate(180 2417.471 1151.381)"
                                            ></path>
                                            <path
                                                id="Path_34"
                                                fill="none"
                                                stroke="#16629c"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="4"
                                                d="m3460.308 1056.817-9.639 11.73 9.639 11.265"
                                                data-name="Path 34"
                                                transform="rotate(180 2416.8 1230.375)"
                                            ></path>
                                            <text
                                                id="JAN_02_2025"
                                                fill="#0f1418"
                                                data-name="JAN 02, 2025"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="17"
                                                letterSpacing=".03em"
                                                transform="translate(863.241 960)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.date}
                                                </tspan>
                                            </text>
                                            <text
                                                id="DEC_31_2024"
                                                fill="#0f1418"
                                                data-name="DEC 31, 2024"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="17"
                                                letterSpacing=".03em"
                                                transform="translate(863.241 1327)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.date1}
                                                </tspan>
                                            </text>
                                            <text
                                                id="INTERAC_ETRNSFR_AD_RECVD_FORIS"
                                                fill="#0f1418"
                                                data-name="INTERAC ETRNSFR AD RECVD FORIS"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".017em"
                                                transform="translate(861.241 1014)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.interac}
                                                </tspan>
                                            </text>
                                            <text
                                                id="INTERAC_ETRNSFR_FULFILL_CRYPTO.COM"
                                                fill="#0f1418"
                                                data-name="INTERAC ETRNSFR FULFILL CRYPTO.COM"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".016em"
                                                transform="translate(861.241 1119)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.fulfill}
                                                </tspan>
                                            </text>
                                            <text
                                                id="INTERAC_ETRNSFR_SENT_TALHA_BIN"
                                                fill="#0f1418"
                                                data-name="INTERAC ETRNSFR SENT TALHA BIN"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".016em"
                                                transform="translate(861.241 1224)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.sent}
                                                </tspan>
                                            </text>
                                            <text
                                                id="RECURRING_PYMNT"
                                                fill="#0f1418"
                                                data-name="RECURRING PYMNT"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".016em"
                                                transform="translate(861.241 1381)"
                                            >
                                                <tspan x="0" y="0">
                                                    RECURRING PYMNT
                                                </tspan>
                                            </text>
                                            <text
                                                id="_20250012010WZBA6E"
                                                fill="#0f1418"
                                                data-name="20250012010WZBA6E"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".017em"
                                                transform="translate(861.241 1050)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.interacto}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_2025001183698E2FC"
                                                fill="#0f1418"
                                                data-name="2025001183698E2FC"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".017em"
                                                transform="translate(861.241 1155)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.fulfillrecvd}
                                                </tspan>
                                            </text>
                                            <text
                                                id="SHUJA_20250011522WXGKTE"
                                                fill="#0f1418"
                                                data-name="SHUJA 20250011522WXGKTE"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".017em"
                                                transform="translate(861.241 1259)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.sentrecvd}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_31DEC2024APPLE.COM_BILL_ON"
                                                fill="#0f1418"
                                                data-name="31DEC2024APPLE.COM/BILL ON"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".017em"
                                                transform="translate(861.241 1416)"
                                            >
                                                <tspan x="0" y="0">
                                                    31DEC2024APPLE.COM/BILL ON
                                                </tspan>
                                            </text>
                                            <text
                                                id="_140.01"
                                                fill="#246a2b"
                                                data-name="+$140.01"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".017em"
                                                transform="translate(1275.241 1014)"
                                            >
                                                <tspan x="85" y="0" textAnchor="end">
                                                    {data.interacamount}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_277.41"
                                                fill="#555a5e"
                                                data-name="$277.41"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".017em"
                                                transform="translate(1286 1049)"
                                            >
                                                <tspan x="75" y="0" textAnchor="end">
                                                    {data.interacamount1}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_137.40"
                                                fill="#555a5e"
                                                data-name="$137.40"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".017em"
                                                transform="translate(1288.241 1153)"
                                            >
                                                <tspan x="71" y="0" textAnchor="end">
                                                    {data.fulfillamount1}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_157.40"
                                                fill="#555a5e"
                                                data-name="$157.40"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".017em"
                                                transform="translate(1287.241 1257)"
                                            >
                                                <tspan x="70.5" y="0" textAnchor="end">
                                                    {data.sentamount1}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_197.25"
                                                fill="#555a5e"
                                                data-name="$197.25"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".017em"
                                                transform="translate(1287.241 1415)"
                                            >
                                                <tspan x="0" y="0">
                                                    $197.25
                                                </tspan>
                                            </text>
                                            <text
                                                id="_20.00"
                                                fill="#0f1418"
                                                data-name="$20.00"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".017em"
                                                transform="translate(1298.241 1119)"
                                            >
                                                <tspan x="62" y="0" textAnchor="end">
                                                    {data.fulfillamount}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_39.85"
                                                fill="#0f1418"
                                                data-name="$39.85"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".017em"
                                                transform="translate(1299.241 1223)"
                                            >
                                                <tspan x="60.5" y="0" textAnchor="end">
                                                    {data.sentamount}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_10.49"
                                                fill="#0f1418"
                                                data-name="$10.49"
                                                fontFamily="Heebo-Regular, Heebo"
                                                fontSize="20"
                                                letterSpacing=".017em"
                                                transform="translate(1299.241 1380)"
                                            >
                                                <tspan x="0" y="0">
                                                    $10.49
                                                </tspan>
                                            </text>
                                            <path
                                                id="Rectangle_10"
                                                fill="none"
                                                d="M0 0h35.183v19.253H0Z"
                                                data-name="Rectangle 10"
                                                transform="rotate(90 5.192 874.508)"
                                            ></path>
                                            <path
                                                id="Path_16"
                                                fill="#006fb0"
                                                d="M2.933 1.613v14.74A4.55 4.55 0 0 0 0 20.533a4.4 4.4 0 0 0 2.933 4.106v3.08A1.54 1.54 0 0 0 4.4 29.332a1.54 1.54 0 0 0 1.467-1.613v-3.08A4.4 4.4 0 0 0 8.8 20.533a4.55 4.55 0 0 0-2.933-4.18V1.613A1.54 1.54 0 0 0 4.4 0a1.54 1.54 0 0 0-1.467 1.613m2.933 18.92A1.467 1.467 0 1 1 4.4 19.066a1.467 1.467 0 0 1 1.467 1.467Z"
                                                data-name="Path 16"
                                                transform="rotate(90 7.033 879.299)"
                                            ></path>
                                            <path
                                                id="Path_17"
                                                fill="#006fb0"
                                                d="M2.933 1.467v3.006A4.55 4.55 0 0 0 0 8.653a4.4 4.4 0 0 0 2.933 4.107v14.813a1.467 1.467 0 1 0 2.933 0V12.76A4.4 4.4 0 0 0 8.8 8.653a4.55 4.55 0 0 0-2.933-4.18V1.467a1.467 1.467 0 1 0-2.933 0Zm2.934 7.186A1.467 1.467 0 1 1 4.4 7.187a1.467 1.467 0 0 1 1.467 1.466"
                                                data-name="Path 17"
                                                transform="rotate(90 1.827 884.359)"
                                            ></path>
                                            <path
                                                id="Path_18"
                                                fill="#006fb0"
                                                d="M2.933 1.467v12.54A4.55 4.55 0 0 0 0 18.186a4.4 4.4 0 0 0 2.933 4.107v5.28a1.467 1.467 0 1 0 2.933 0v-5.28A4.4 4.4 0 0 0 8.8 18.186a4.55 4.55 0 0 0-2.933-4.18V1.467a1.467 1.467 0 1 0-2.933 0Zm2.933 16.72A1.467 1.467 0 1 1 4.4 16.72a1.467 1.467 0 0 1 1.467 1.466Z"
                                                data-name="Path 18"
                                                transform="rotate(90 -3.307 889.493)"
                                            ></path>
                                            <text
                                                id="FILTER"
                                                fill="#0077c5"
                                                fontFamily="Heebo-Medium, Heebo"
                                                fontSize="20"
                                                fontWeight="600"
                                                letterSpacing=".033em"
                                                transform="translate(893 893)"
                                            >
                                                <tspan x="0" y="0">
                                                    FILTER
                                                </tspan>
                                            </text>
                                            <circle
                                                id="Ellipse_3"
                                                cx="17"
                                                cy="17"
                                                r="17"
                                                fill="#006fb0"
                                                data-name="Ellipse 3"
                                                transform="translate(972 869)"
                                            ></circle>
                                            <text
                                                id="_2"
                                                fill="#b4fcff"
                                                data-name="2"
                                                fontFamily="Heebo-Medium, Heebo"
                                                fontSize="20"
                                                fontWeight="500"
                                                letterSpacing=".033em"
                                                transform="translate(984 893)"
                                            >
                                                <tspan x="0" y="0">
                                                    2
                                                </tspan>
                                            </text>
                                        </g>
                                    </g>
                                    {
                                        isIOS
                                            ?
                                            <>
                                                <rect
                                                    id="Rectangle_27"
                                                    width="211"
                                                    height="7"
                                                    data-name="Rectangle 27"
                                                    rx="3.5"
                                                    transform="translate(1833 1470)"
                                                ></rect>
                                            </>
                                            :
                                            <></>
                                    }

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
                                bgColor="#0275bd"
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
                            <label>Amount1</label>
                            <input
                                type="text"
                                value={data.amount1}
                                name="amount1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                value={data.number}
                                name="number"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Amount2</label>
                            <input
                                type="text"
                                value={data.amount2}
                                name="amount2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Date</label>
                            <input
                                type="text"
                                value={data.date}
                                name="date"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Interac</label>
                            <input
                                type="text"
                                value={data.interac}
                                name="interac"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Interac Recvd</label>
                            <input
                                type="text"
                                value={data.interacto}
                                name="interacto"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Interac Amount</label>
                            <input
                                type="text"
                                value={data.interacamount}
                                name="interacamount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Interac Amount1</label>
                            <input
                                type="text"
                                value={data.interacamount1}
                                name="interacamount1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Fulfill</label>
                            <input
                                type="text"
                                value={data.fulfill}
                                name="fulfill"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Fulfill Recvd</label>
                            <input
                                type="text"
                                value={data.fulfillrecvd}
                                name="fulfillrecvd"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Fulfill Amount</label>
                            <input
                                type="text"
                                value={data.fulfillamount}
                                name="fulfillamount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Fulfill Amount1</label>
                            <input
                                type="text"
                                value={data.fulfillamount1}
                                name="fulfillamount1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Sent</label>
                            <input
                                type="text"
                                value={data.sent}
                                name="sent"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Sent Recvd</label>
                            <input
                                type="text"
                                value={data.sentrecvd}
                                name="sentrecvd"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Sent Amount</label>
                            <input
                                type="text"
                                value={data.sentamount}
                                name="sentamount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Sent Amount1</label>
                            <input
                                type="text"
                                value={data.sentamount1}
                                name="sentamount1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Dtae1</label>
                            <input
                                type="text"
                                value={data.date1}
                                name="date1"
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