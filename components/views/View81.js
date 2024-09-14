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
                                <g data-name="Group 26" transform="translate(-1464 -406)">
                                    <path
                                        d="M0 0H590V1280H0z"
                                        data-name="Rectangle 1"
                                        transform="translate(1464 406)"
                                    ></path>
                                    <g data-name="Group 25">
                                        <g data-name="Group 19" transform="translate(649 3)">
                                            <g fill="none" stroke="#dfdfdf" strokeWidth="3" data-name="Group 1">
                                                <path
                                                    d="M869.993 519.885l-12.759 13.644 12.759 12.507"
                                                    data-name="Path 1"
                                                ></path>
                                                <path d="M857.766 533.531h25.266" data-name="Path 2"></path>
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
                                            fontFamily="OpenSans-Bold, Open Sans"
                                            fontSize="68"
                                            fontWeight="700"
                                            letterSpacing=".006em"
                                            transform="translate(1760 670)"
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
                                                <path d="M873.119 1095.449h27.963" data-name="Path 3"></path>
                                                <path d="M873.119 1080.423h27.9" data-name="Path 4"></path>
                                                <path
                                                    d="M877.354 1095.159v-14.736l9.63-7.948 9.917 7.948"
                                                    data-name="Path 5"
                                                ></path>
                                                <path d="M887.071 1080.713v14.272" data-name="Path 6"></path>
                                                <path d="M896.615 1080.423v15.084" data-name="Path 7"></path>
                                            </g>
                                            <g data-name="Group 3" transform="translate(1.222 14.791)">
                                                <g data-name="Group 4" transform="translate(-2 -14)">
                                                    <path
                                                        fill="none"
                                                        stroke="#000"
                                                        strokeWidth="3"
                                                        d="M880.869 1196.985l-6.419.172-.412.24-.24.309v18.022l.24.412.206.172H900.2l.445-.312.094-.484.11-17.432-.2-.687-.271-.622-.317-.687-.818-.766-.66-.528-.819-.449-.687-.238h-6.126l-.528.238-.713.449-.581.4-.555.449-.264.449h0l-.185.449-.159.448v12.623"
                                                        data-name="Path 8"
                                                    ></path>
                                                    <g data-name="Group 2">
                                                        <path
                                                            fill="none"
                                                            stroke="#000"
                                                            strokeWidth="3"
                                                            d="M881.412 1203.773l6.6 5.994 5.862-5.994"
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
                                                    d="M881.67 1313.991h7.72l.714.313a9.139 9.139 0 01.893.669l.535.937v4.507l-.312.58-.8.8-1.026.4h-11.96l-.892.223-.8.58-.268.8v7.9l.446.759.625.625.892.223h23.027"
                                                    data-name="Path 10"
                                                ></path>
                                                <path
                                                    d="M894.7 1326.575l5.936 6.917-6.159 6.694"
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
                                                            d="M871.763 1449.611v-14.191l.4-.714h0l.446-.446h23.429"
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
                                                        d="M875.329 1563v-2.273l.435-.893.721-1.064 1.03-.721 1.1-.583 1.064-.24h15.173"
                                                        data-name="Path 13"
                                                    ></path>
                                                    <path
                                                        d="M888.739 1550.294l6.316 7.106-5.081 5.561"
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


                                        {
                                            isIOS
                                                ?
                                                <>
                                                    <rect
                                                        width="209"
                                                        height="7"
                                                        fill="#fff"
                                                        data-name="Rectangle 6"
                                                        rx="3.5"
                                                        transform="translate(1655 1670)"
                                                    ></rect>
                                                </>
                                                :
                                                <></>
                                        }
                                        <g
                                            fill="none"
                                            stroke="#707070"
                                            strokeWidth="3"
                                            data-name="Group 16"
                                            transform="translate(649 3)"
                                        >
                                            <path
                                                d="M1357.492 1178.777l8.477 8.661-8.477 7.869"
                                                data-name="Path 18"
                                            ></path>
                                            <path
                                                d="M1357.492 1298.777l8.477 8.661-8.477 7.869"
                                                data-name="Path 20"
                                            ></path>
                                            <path
                                                d="M1357.492 1298.777l8.477 8.661-8.477 7.869"
                                                data-name="Path 21"
                                            ></path>
                                            <path
                                                d="M1357.492 1418.777l8.477 8.661-8.477 7.869"
                                                data-name="Path 22"
                                            ></path>
                                            <path
                                                d="M1357.492 1058.777l8.477 8.661-8.477 7.869"
                                                data-name="Path 23"
                                            ></path>
                                            <path
                                                d="M1357.492 1538.777l8.477 8.661-8.477 7.869"
                                                data-name="Path 24"
                                            ></path>
                                            <path
                                                d="M1357.492 848.777l8.477 8.661-8.477 7.869"
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
                                                d="M1273.344 734.735l6.773 6.92-6.773 6.287"
                                                data-name="Path 25"
                                            ></path>
                                            <text
                                                fill="#e4e4e4"
                                                data-name="Turn on free overdraft coverage"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="22"
                                                letterSpacing=".022em"
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
                                            letterSpacing=".047em"
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
                                            letterSpacing=".063em"
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
                                                letterSpacing=".062em"
                                                transform="translate(948 1077)"
                                            >
                                                <tspan x="0" y="0">
                                                    Add instantly{" "}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#707070"
                                                data-name="Transfer from linked bank"
                                                fontSize="22"
                                                letterSpacing=".009em"
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
                                                letterSpacing=".062em"
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
                                                letterSpacing=".012em"
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
                                                letterSpacing=".063em"
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
                                                letterSpacing=".013em"
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
                                                letterSpacing=".062em"
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
                                                letterSpacing=".014em"
                                                transform="translate(948 1470)"
                                            >
                                                <tspan x="0" y="0">
                                                    Find a nearby retailer
                                                </tspan>
                                            </text>
                                        </g>
                                        <g data-name="Group 24" transform="translate(649 3)">
                                            <g data-name="Group 15">
                                                <text
                                                    fill="#585858"
                                                    data-name="$"
                                                    fontFamily="Calibri-BoldItalic, Calibri"
                                                    fontSize="37"
                                                    fontStyle="italic"
                                                    fontWeight="700"
                                                    letterSpacing=".004em"
                                                    transform="rotate(-7 13728.984 -8202.77)"
                                                >
                                                    <tspan x="0" y="0">
                                                        $
                                                    </tspan>
                                                </text>
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
                                                        d="M1201.9 1600.356l12.183 12.357.464.232h.928l13.459-12.589v-15.374h-14.388l-13.981 13.459v.58z"
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
                                                        letterSpacing=".004em"
                                                        transform="translate(1321 1607)"
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
                                                letterSpacing=".006em"
                                                transform="translate(890 1610)"
                                            >
                                                <tspan x="0" y="0"textAnchor="middle">
                                                    {data.price}
                                                </tspan>
                                            </text>
                                        </g>
                                    </g>
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