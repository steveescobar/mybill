"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from '@/utils/getPicture';
import Image from "next/image";
import { InterBaseEncoded } from "@/utils/encodedFonts/InterBaseEncoded";

const View81 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 39";

    const [data, setData] = useState({
        amount: "$164.27",
        price: "$164",
        list: "5",

    });

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const [imageDimension, setImageDimension] = useState("50");

    const [time, setTime] = useState("9:34");
    const [network, setNetwork] = useState(4);
    const [net, setNet] = useState("wifi");
    const [isBattery, setIsBattery] = useState(true);
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
            0.4,
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
                                viewBox="0 0 590 1280"
                            >
                                <style>
                                    {
                                        InterBaseEncoded
                                    }
                                </style>
                                <g data-name="Group 1" transform="translate(-293 -310)">
                                    <g data-name="Group 26" transform="translate(-1171 -96)">
                                        <path
                                            d="M0 0H590V1280H0z"
                                            data-name="Rectangle 1"
                                            transform="translate(1464 406)"
                                        ></path>
                                        <g data-name="Group 25">
                                            <g data-name="Group 19" transform="translate(649 3)">
                                                <g
                                                    fill="none"
                                                    stroke="#dfdfdf"
                                                    strokeWidth="3"
                                                    data-name="Group 1"
                                                >
                                                    <path
                                                        d="M869.99 519.89l-12.759 13.644 12.759 12.507"
                                                        data-name="Path 1"
                                                    ></path>
                                                    <path d="M857.77 533.53h25.266" data-name="Path 2"></path>
                                                </g>
                                                <text
                                                    fill="#f0f0f0"
                                                    data-name="Cash balance"
                                                    fontFamily="Inter18pt-Medium, 'Inter \\31 8pt \\31 8pt'"
                                                    fontSize="26"
                                                    fontWeight="500"
                                                    letterSpacing=".01em"
                                                    transform="translate(1025 542)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Cash balance{" "}
                                                    </tspan>
                                                </text>
                                            </g>
                                            <text
                                                fill="#f0f0f0"
                                                data-name="$164.27"
                                                fontFamily="OpenSans-SemiBold, Open Sans"
                                                fontSize="68"
                                                fontWeight="600"
                                                transform="translate(1758 670)"
                                            >
                                                <tspan x="0" y="0" textAnchor="middle">
                                                    {data.amount}
                                                </tspan>
                                            </text>
                                            <g data-name="Group 12" transform="translate(650 -1)">
                                                <circle
                                                    cx="35"
                                                    cy="35"
                                                    r="35"
                                                    fill="#00bd45"
                                                    data-name="Ellipse 3"
                                                    transform="translate(852 1171)"
                                                ></circle>
                                                <circle
                                                    cx="35"
                                                    cy="35"
                                                    r="35"
                                                    fill="#00bd45"
                                                    data-name="Ellipse 4"
                                                    transform="translate(852 1292)"
                                                ></circle>
                                                <circle
                                                    cx="35"
                                                    cy="35"
                                                    r="35"
                                                    fill="#00bd45"
                                                    data-name="Ellipse 5"
                                                    transform="translate(852 1413)"
                                                ></circle>
                                                <circle
                                                    cx="35"
                                                    cy="35"
                                                    r="35"
                                                    fill="#00bd45"
                                                    data-name="Ellipse 2"
                                                    transform="translate(852 1050)"
                                                ></circle>
                                                <g
                                                    fill="none"
                                                    stroke="#000"
                                                    strokeWidth="3"
                                                    data-name="Group 5"
                                                    transform="translate(-.1 1.009)"
                                                >
                                                    <path d="M873.12 1095.45h27.963" data-name="Path 3"></path>
                                                    <path d="M873.12 1080.42h27.9" data-name="Path 4"></path>
                                                    <path
                                                        d="M877.35 1095.16v-14.736l9.63-7.948 9.917 7.948"
                                                        data-name="Path 5"
                                                    ></path>
                                                    <path d="M887.07 1080.71v14.272" data-name="Path 6"></path>
                                                    <path d="M896.62 1080.42v15.08" data-name="Path 7"></path>
                                                </g>
                                                <g data-name="Group 3" transform="translate(1.222 14.791)">
                                                    <g data-name="Group 4" transform="translate(-2 -14)">
                                                        <path
                                                            fill="none"
                                                            stroke="#000"
                                                            strokeWidth="3"
                                                            d="M880.87 1196.99l-6.419.172-.412.24-.24.309v18.022l.24.412.206.172H900.2l.445-.312.094-.484.11-17.432-.2-.687-.271-.622-.317-.687-.818-.766-.66-.528-.819-.449-.687-.238h-6.126l-.528.238-.713.449-.581.4-.555.449-.264.449h0l-.185.449-.159.448v12.623"
                                                            data-name="Path 8"
                                                        ></path>
                                                        <g data-name="Group 2">
                                                            <path
                                                                fill="none"
                                                                stroke="#000"
                                                                strokeWidth="3"
                                                                d="M881.41 1203.77l6.6 5.994 5.862-5.994"
                                                                data-name="Path 9"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </g>
                                                <g
                                                    fill="none"
                                                    stroke="#000"
                                                    strokeWidth="3"
                                                    data-name="Group 6"
                                                    transform="translate(-1.509 -.089)"
                                                >
                                                    <path
                                                        d="M881.67 1313.99h7.72l.714.313a9.17 9.17 0 01.893.669l.535.937v4.507l-.312.58-.8.8-1.026.4h-11.96l-.892.223-.8.58-.268.8v7.9l.446.759.625.625.892.223h23.027"
                                                        data-name="Path 10"
                                                    ></path>
                                                    <path
                                                        d="M894.7 1326.57l5.936 6.917-6.159 6.694"
                                                        data-name="Path 11"
                                                    ></path>
                                                </g>
                                                <g data-name="Group 9" transform="translate(-.339 2.37)">
                                                    <g data-name="Group 8">
                                                        <g
                                                            fill="none"
                                                            stroke="#000"
                                                            strokeWidth="3"
                                                            data-name="Group 7"
                                                        >
                                                            <path
                                                                d="M871.76 1449.61v-14.19l.4-.714h0l.446-.446h23.429"
                                                                data-name="Path 12"
                                                            ></path>
                                                            <g data-name="Rectangle 3" transform="translate(877 1441)">
                                                                <rect width="25" height="16" stroke="none" rx="2"></rect>
                                                                <rect
                                                                    width="22"
                                                                    height="13"
                                                                    x="1.5"
                                                                    y="1.5"
                                                                    rx="0.5"
                                                                ></rect>
                                                            </g>
                                                        </g>
                                                        <circle
                                                            cx="3.5"
                                                            cy="3.5"
                                                            r="3.5"
                                                            data-name="Ellipse 1"
                                                            transform="translate(887 1445)"
                                                        ></circle>
                                                    </g>
                                                </g>
                                                <g data-name="Group 11" transform="translate(-142 69)">
                                                    <circle
                                                        cx="35"
                                                        cy="35"
                                                        r="35"
                                                        fill="#00bd45"
                                                        data-name="Ellipse 6"
                                                        transform="translate(994 1459)"
                                                    ></circle>
                                                    <g
                                                        fill="none"
                                                        stroke="#000"
                                                        strokeWidth="3"
                                                        data-name="Group 10"
                                                        transform="translate(143.808 -67.294)"
                                                    >
                                                        <path
                                                            d="M875.33 1563v-2.273l.435-.893.721-1.064 1.03-.721 1.1-.583 1.064-.24h15.173"
                                                            data-name="Path 13"
                                                        ></path>
                                                        <path
                                                            d="M888.74 1550.29l6.316 7.106-5.081 5.561"
                                                            data-name="Path 14"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                            <path
                                                d="M0 0H590V123H0z"
                                                data-name="Rectangle 4"
                                                transform="translate(1464 1563)"
                                            ></path>
                                            <rect
                                                width="209"
                                                height="7"
                                                fill="#fff"
                                                data-name="Rectangle 6"
                                                rx="3.5"
                                                transform="translate(1655 1670)"
                                            ></rect>
                                            <g
                                                fill="none"
                                                stroke="#707070"
                                                strokeWidth="3"
                                                data-name="Group 16"
                                                transform="translate(649 3)"
                                            >
                                                <path
                                                    d="M1357.49 1178.782l8.477 8.661-8.477 7.869"
                                                    data-name="Path 18"
                                                ></path>
                                                <path
                                                    d="M1357.49 1298.782l8.477 8.661-8.477 7.869"
                                                    data-name="Path 20"
                                                ></path>
                                                <path
                                                    d="M1357.49 1298.782l8.477 8.661-8.477 7.869"
                                                    data-name="Path 21"
                                                ></path>
                                                <path
                                                    d="M1357.49 1418.782l8.477 8.661-8.477 7.869"
                                                    data-name="Path 22"
                                                ></path>
                                                <path
                                                    d="M1357.49 1058.782l8.477 8.661-8.477 7.869"
                                                    data-name="Path 23"
                                                ></path>
                                                <path
                                                    d="M1357.49 1538.782l8.477 8.661-8.477 7.869"
                                                    data-name="Path 24"
                                                ></path>
                                                <path
                                                    d="M1357.49 848.782l8.477 8.661-8.477 7.869"
                                                    data-name="Path 19"
                                                ></path>
                                            </g>
                                            <g data-name="Group 18" transform="translate(649 3)">
                                                <g
                                                    fill="none"
                                                    stroke="#707070"
                                                    strokeWidth="1"
                                                    data-name="Rectangle 2"
                                                    transform="translate(915 717)"
                                                >
                                                    <rect width="390" height="48" stroke="none" rx="19"></rect>
                                                    <rect width="389" height="47" x="0.5" y="0.5" rx="18.5"></rect>
                                                </g>
                                                <path
                                                    fill="none"
                                                    stroke="#707070"
                                                    strokeWidth="2"
                                                    d="M1273.342 734.74l6.773 6.92-6.773 6.287"
                                                    data-name="Path 25"
                                                ></path>
                                                <text
                                                    fill="#e4e4e4"
                                                    data-name="Turn on free overdraft coverage"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="22"
                                                    letterSpacing=".02em"
                                                    transform="translate(936 751)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Turn on free overdraft coverage
                                                    </tspan>
                                                </text>
                                            </g>
                                            <g
                                                data-name="Group 17"
                                                fontFamily="Roboto-Regular, Roboto"
                                                transform="translate(649 3)"
                                            >
                                                <text
                                                    fill="#e4e4e4"
                                                    data-name="Account &amp; routing"
                                                    fontSize="26"
                                                    transform="translate(851 867)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Account &amp; routing
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#cdcdcd"
                                                    data-name="Set up"
                                                    fontSize="23"
                                                    letterSpacing=".05em"
                                                    transform="translate(1255 866)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Set up
                                                    </tspan>
                                                </text>
                                            </g>
                                            <text
                                                fill="#e4e4e4"
                                                data-name="Add money to your balance"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="29"
                                                fontWeight="500"
                                                letterSpacing=".04em"
                                                transform="translate(1503 1004)"
                                            >
                                                <tspan x="0" y="0">
                                                    Add money to your balance
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#e4e4e4"
                                                data-name="Auto reload"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="23"
                                                letterSpacing=".06em"
                                                transform="translate(1598 1560)"
                                            >
                                                <tspan x="0" y="0">
                                                    Auto reload
                                                </tspan>
                                            </text>
                                            <g
                                                data-name="Group 20"
                                                fontFamily="Roboto-Regular, Roboto"
                                                transform="translate(649 3)"
                                            >
                                                <text
                                                    fill="#e4e4e4"
                                                    data-name="Add instantly"
                                                    fontSize="23"
                                                    letterSpacing=".06em"
                                                    transform="translate(948 1077)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Add instantly
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#707070"
                                                    data-name="Transfer from linked bank"
                                                    fontSize="22"
                                                    transform="translate(945 1110)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Transfer from linked bank
                                                    </tspan>
                                                </text>
                                            </g>
                                            <g
                                                data-name="Group 21"
                                                fontFamily="Roboto-Regular, Roboto"
                                                transform="translate(649 3)"
                                            >
                                                <text
                                                    fill="#e4e4e4"
                                                    data-name="Direct deposit"
                                                    fontSize="23"
                                                    letterSpacing=".06em"
                                                    transform="translate(948 1197)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Direct deposit{" "}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#707070"
                                                    data-name="Get paid up to 2 days faster"
                                                    fontSize="22"
                                                    letterSpacing=".01em"
                                                    transform="translate(948 1230)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Get paid up to 2 days faster
                                                    </tspan>
                                                </text>
                                            </g>
                                            <g
                                                data-name="Group 22"
                                                fontFamily="Roboto-Regular, Roboto"
                                                transform="translate(649 3)"
                                            >
                                                <text
                                                    fill="#e4e4e4"
                                                    data-name="Get bank or wire transfer"
                                                    fontSize="23"
                                                    letterSpacing=".06em"
                                                    transform="translate(949 1317)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Get bank or wire transfer
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#707070"
                                                    data-name="Send from another account"
                                                    fontSize="22"
                                                    letterSpacing=".01em"
                                                    transform="translate(946 1350)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Send from another account
                                                    </tspan>
                                                </text>
                                            </g>
                                            <g
                                                data-name="Group 23"
                                                fontFamily="Roboto-Regular, Roboto"
                                                transform="translate(649 3)"
                                            >
                                                <text
                                                    fill="#e4e4e4"
                                                    data-name="Deposit paper money"
                                                    fontSize="23"
                                                    letterSpacing=".06em"
                                                    transform="translate(949 1437)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Deposit paper money
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#707070"
                                                    data-name="Find a nearby retailer"
                                                    fontSize="22"
                                                    letterSpacing=".01em"
                                                    transform="translate(948 1470)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Find a nearby retailer
                                                    </tspan>
                                                </text>
                                            </g>
                                            <g data-name="Group 24" transform="translate(649 3)">
                                                <g data-name="Group 15">
                                                    <g
                                                        fill="none"
                                                        stroke="#707070"
                                                        strokeWidth="3"
                                                        data-name="Rectangle 5"
                                                        transform="translate(988 1586)"
                                                    >
                                                        <rect width="32" height="25" stroke="none" rx="3"></rect>
                                                        <rect width="29" height="22" x="1.5" y="1.5" rx="1.5"></rect>
                                                    </g>
                                                    <path
                                                        fill="none"
                                                        stroke="#707070"
                                                        strokeWidth="3"
                                                        d="M0 0L6 0"
                                                        data-name="Line 1"
                                                        transform="translate(996.5 1596.5)"
                                                    ></path>
                                                    <g data-name="Group 13">
                                                        <path
                                                            fill="none"
                                                            stroke="#707070"
                                                            strokeWidth="3"
                                                            d="M1201.9 1600.36l12.183 12.357.464.232h.928l13.459-12.589v-15.374h-14.388l-13.981 13.459v.58z"
                                                            data-name="Path 15"
                                                        ></path>
                                                        <circle
                                                            cx="2.5"
                                                            cy="2.5"
                                                            r="2.5"
                                                            fill="#707070"
                                                            data-name="Ellipse 7"
                                                            transform="translate(1218 1591)"
                                                        ></circle>
                                                    </g>
                                                    <g data-name="Group 14">
                                                        <circle
                                                            cx="18"
                                                            cy="18"
                                                            r="18"
                                                            fill="#fff"
                                                            data-name="Ellipse 8"
                                                            transform="translate(1304 1581)"
                                                        ></circle>
                                                        <text
                                                            data-name="5"
                                                            fontFamily="Roboto-Bold, Roboto"
                                                            fontSize="25"
                                                            fontWeight="700"
                                                            transform="translate(1322 1607)"
                                                        >
                                                            <tspan x="0" y="0" textAnchor="middle">
                                                                {data.list}
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                </g>
                                                <text
                                                    fill="#f0f0f0"
                                                    data-name="$164"
                                                    fontFamily="OpenSans-Medium, Open Sans"
                                                    fontSize="29"
                                                    fontWeight="500"
                                                    transform="translate(864 1610)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="start">
                                                        {data.price}
                                                    </tspan>
                                                </text>
                                            </g>
                                        </g>
                                    </g>
                                    <path
                                        fill="#585858"
                                        d="M34.734 19.618a.883.883 0 001.254 0l1.742-1.811a.946.946 0 00-.042-1.352 13.746 13.746 0 00-4.682-2.675l.55-2.648a.926.926 0 00-.892-1.122h-3.371a.92.92 0 00-.892.739l-.488 2.351c-4.487.23-8.291 2.508-8.291 7.176 0 4.041 3.142 5.776 6.466 6.967 3.142 1.2 4.807 1.644 4.807 3.33 0 1.735-1.658 2.752-4.111 2.752a8.892 8.892 0 01-6.384-2.56.906.906 0 00-1.282 0l-1.878 1.881a.948.948 0 000 1.338 12.289 12.289 0 005.429 3.066l-.516 2.487a.924.924 0 00.885 1.122l3.379.028a.92.92 0 00.906-.739l.488-2.362c5.4-.362 8.687-3.337 8.687-7.678 0-4-3.275-5.685-7.246-7.058-2.271-.843-4.236-1.421-4.236-3.156 0-1.686 1.832-2.355 3.672-2.355a9.329 9.329 0 016.061 2.292z"
                                        data-name="Path 3"
                                        transform="translate(560.521 1480.314)"
                                    ></path>
                                </g>
                            </svg>
                            <IOSOption
                                battery={battery}
                                isOption={isOption}
                                time={time}
                                network={network}
                                net={net}
                                isBattery={isBattery}
                                iconPadding={`2rem 5rem 0rem 7rem`}
                                isIOS={isIOS}
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
                                value={data.amount}
                                name="amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Amount2</label>
                            <input
                                type="text"
                                value={data.price}
                                name="price"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Number</label>
                            <input
                                type="text"
                                value={data.list}
                                name="list"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default View81