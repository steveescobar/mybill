"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from "@/utils/getPicture";
import Image from "next/image";
import Page93Icons from "../options/Page93Icons";
import { HelveticaBaseEncoded } from "@/utils/encodedFonts/HelveticaWorld";

const View101 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 101";

    const [data, setData] = useState({

        amount: "518.31 USDC",
        address: "TjHbjW6WhcAwFJnmQHV4g2XVF",
        address2: "7kNAKTEQS",
        network: "ERC20",
        remarks: "Platform Salary",
        time: "2024-09-26 04:10:41"

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

    const manageTimeDate = () => {
        const now = new Date();
        const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
        const finalRes = (`${now.getFullYear()}-${padL(now.getMonth() + 1)}-${padL(now.getDate())} ${padL(now.getHours())}:${padL(now.getMinutes())}:${padL(now.getSeconds())}`
        );
        return setData({
            ...data,
            time: finalRes
        });
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
                                viewBox="0 0 1736 3773"
                            >
                                <style>
                                    {
                                        HelveticaBaseEncoded
                                    }
                                </style>
                                <defs>
                                    <filter
                                        id="Path_277"
                                        width="932.371"
                                        height="932.371"
                                        x="406.668"
                                        y="305.191"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset></feOffset>
                                        <feGaussianBlur result="blur" stdDeviation="25"></feGaussianBlur>
                                        <feFlood floodColor="#fff"></feFlood>
                                        <feComposite in2="blur" operator="in"></feComposite>
                                    </filter>
                                    <filter
                                        id="Path_277-2"
                                        width="932.371"
                                        height="932.371"
                                        x="406.668"
                                        y="305.191"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset></feOffset>
                                        <feGaussianBlur result="blur-2" stdDeviation="25"></feGaussianBlur>
                                        <feFlood floodColor="#fff" result="color"></feFlood>
                                        <feComposite
                                            in="SourceGraphic"
                                            in2="blur-2"
                                            operator="out"
                                        ></feComposite>
                                        <feComposite in="color" operator="in"></feComposite>
                                        <feComposite in2="SourceGraphic" operator="in"></feComposite>
                                    </filter>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="0.5"
                                        x2="0.5"
                                        y2="1"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0"></stop>
                                        <stop offset="1" stopOpacity="0.8"></stop>
                                    </linearGradient>
                                </defs>
                                <g id="Group_384" data-name="Group 384" transform="translate(-937 -1120)">
                                    <path
                                        id="Rectangle_75"
                                        fill="url(#linear-gradient)"
                                        d="M0 0h1736v3773H0z"
                                        data-name="Rectangle 75"
                                        transform="translate(937 1120)"
                                    ></path>
                                    <text
                                        id="Withdrawal_Processing"
                                        fill="#9d9d9d"
                                        data-name="Withdrawal Processing"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        letterSpacing=".1em"
                                        transform="translate(1804.495 2469.545)"
                                    >
                                        <tspan x="-347.399" y="0">
                                            Withdrawal Processing
                                        </tspan>
                                    </text>
                                    <text
                                        id="Address_Account"
                                        fill="#b8b8b8"
                                        data-name="Address/Account"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="45"
                                        transform="translate(1216.072 2886.617)"
                                    >
                                        <tspan x="-175.089" y="0">
                                            Address/Account
                                        </tspan>
                                    </text>
                                    <text
                                        id="TjHbjW6WhcAwFJnmQHV4g2XVF"
                                        fill="#d6d6d6"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="58"
                                        transform="translate(3025 2886.969)"
                                    >
                                        <tspan x="-437.705" y="0" textAnchor="end">
                                            {data.address}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_7kNAKTEQS"
                                        fill="#d6d6d6"
                                        data-name="7kNAKTEQS"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="58"
                                        transform="translate(2745 2970.447)"
                                    >
                                        <tspan x="-159.939" y="0" textAnchor="end">
                                            {data.address2}
                                        </tspan>
                                    </text>
                                    <text
                                        id="ERC20"
                                        fill="#d6d6d6"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="58"
                                        transform="translate(2672 3159.73)"
                                    >
                                        <tspan x="-85.782" y="0" textAnchor="end">
                                            {data.network}
                                        </tspan>
                                    </text>
                                    <text
                                        id="Platform_Salary"
                                        fill="#d6d6d6"
                                        data-name="Platform Salary"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="58"
                                        transform="translate(2785 3366.486)"
                                    >
                                        <tspan x="-199.177" y="0" textAnchor="end">
                                            {data.remarks}
                                        </tspan>
                                    </text>
                                    <text
                                        id="Network"
                                        fill="#b8b8b8"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="46"
                                        transform="translate(1127.072 3156.496)"
                                    >
                                        <tspan x="-85.936" y="0">
                                            Network
                                        </tspan>
                                    </text>
                                    <text
                                        id="Remarks"
                                        fill="#b8b8b8"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="45"
                                        transform="translate(1132.955 3361.281)"
                                    >
                                        <tspan x="-88.352" y="0">
                                            Remarks
                                        </tspan>
                                    </text>
                                    <text
                                        id="_518.31_USDT"
                                        fill="#fff"
                                        data-name="518.31 USDT"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="165"
                                        transform="translate(2282 2678.35)"
                                    >
                                        <tspan x="-478.444" y="0" textAnchor="middle">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <path
                                        id="Rectangle_76"
                                        fill="#6f6f6f"
                                        d="M0 0h1566.683v5.824H0z"
                                        data-name="Rectangle 76"
                                        transform="translate(1022.629 2739.754)"
                                    ></path>
                                    <path
                                        id="Rectangle_77"
                                        fill="#6f6f6f"
                                        d="M0 0h1588.038v4.853H0z"
                                        data-name="Rectangle 77"
                                        transform="translate(1010.98 4645.207)"
                                    ></path>
                                    <text
                                        id="Copyright_2024_Stylight._Alle_Preise_inkl."
                                        fill="#efefef"
                                        data-name="Copyright © 2024 Stylight. Alle Preise inkl."
                                        fontFamily="Roboto-Light, Roboto"
                                        fontSize="57"
                                        fontWeight="300"
                                        transform="translate(1801.772 4734.152)"
                                    >
                                        <tspan x="-519.165" y="0">
                                            Copyright © 2024 Stylight. Alle Preise inkl.
                                        </tspan>
                                    </text>
                                    <text
                                        id="Conditions_of_Use_-Privacy_Policy_-_Legal_Terms"
                                        fill="#efefef"
                                        data-name="Conditions of Use -Privacy Policy - Legal Terms"
                                        fontFamily="Roboto-Light, Roboto"
                                        fontSize="57"
                                        fontWeight="300"
                                        transform="translate(1801.707 4811.807)"
                                    >
                                        <tspan x="-583.165" y="0">
                                            Conditions of Use -Privacy Policy - Legal Terms
                                        </tspan>
                                    </text>
                                    <text
                                        id="Estimated_completion_time_:_2023-8-26_15:30:35"
                                        fill="#efefef"
                                        data-name="Estimated completion time : 2023-8-26 15:30:35"
                                        fontFamily="Roboto-Light, Roboto"
                                        fontSize="51"
                                        fontWeight="300"
                                        letterSpacing=".148em"
                                        transform="translate(2512 4045.76)"
                                    >
                                        <tspan x="-703.238" y="0" textAnchor="middle">
                                            Estimated completion time : {data.time}
                                        </tspan>
                                    </text>
                                    <text
                                        id="You_will_receive_your_payment_once"
                                        fill="#efefef"
                                        data-name="You will receive your payment once"
                                        fontFamily="Roboto-Light, Roboto"
                                        fontSize="51"
                                        fontWeight="300"
                                        letterSpacing=".148em"
                                        transform="translate(1823.01 4169.039)"
                                    >
                                        <tspan x="-514.562" y="0">
                                            You will receive your payment once
                                        </tspan>
                                    </text>
                                    <text
                                        id="withdrawal_is_completed"
                                        fill="#efefef"
                                        data-name="withdrawal is completed"
                                        fontFamily="Roboto-Light, Roboto"
                                        fontSize="51"
                                        fontWeight="300"
                                        letterSpacing=".148em"
                                        transform="translate(1839.646 4253.488)"
                                    >
                                        <tspan x="-354.264" y="0">
                                            withdrawal is completed
                                        </tspan>
                                    </text>
                                    <path
                                        id="Line_1"
                                        fill="#0046d1"
                                        d="M0 .845 1.089 0"
                                        data-name="Line 1"
                                        transform="translate(1585.658 1801.309)"
                                    ></path>
                                    <path
                                        id="XMLID_740_"
                                        fill="#fff"
                                        d="M197.1 164.049h32.138V.9l-32.138 8Z"
                                        transform="translate(1554.035 1780.646)"
                                    ></path>
                                    <path
                                        id="XMLID_739_"
                                        fill="#fff"
                                        d="M0 0h32.138v107.023H0z"
                                        transform="translate(1804.646 1837.674)"
                                    ></path>
                                    <circle
                                        id="XMLID_736_"
                                        cx="18.76"
                                        cy="18.76"
                                        r="18.76"
                                        fill="#fff"
                                        transform="translate(1801.879 1786.775)"
                                    ></circle>
                                    <path
                                        id="XMLID_735_"
                                        fill="#fff"
                                        d="M346.189 60.134V20L307.9 40.144Z"
                                        transform="translate(1613.611 1790.916)"
                                    ></path>
                                    <path
                                        id="XMLID_729_"
                                        fill="#fff"
                                        d="M341.6 164.249h31.984V1.1l-31.984 8Z"
                                        transform="translate(1631.731 1780.754)"
                                    ></path>
                                    <path
                                        id="XMLID_726_"
                                        fill="#fff"
                                        d="M400.521 35C371.766 35 366.692 52.222 365 55.759v3.383a25.62 25.62 0 0 1 20.144-9.534c14.916 0 18.76 10.3 18.76 18.76v77.5h32.138V70.982C435.888 62.525 434.811 35 400.521 35"
                                        transform="translate(1644.313 1798.982)"
                                    ></path>
                                    <path
                                        id="XMLID_721_"
                                        fill="#fff"
                                        d="M496.075 138.439s-16.607 12.3-27.986 1.384c-4.306-4.152-5.689-12.763-5.689-20.3V52.636h32.138l-1.845-4H462.4V16.5l-32.138 8v24.138H415.5l1.845 4h12.917v70.888c0 13.839 3.537 34.752 32.291 34.752 28.6 0 35.521-17.837 35.521-17.837Z"
                                        transform="translate(1671.467 1789.035)"
                                    ></path>
                                    <path
                                        id="XMLID_702_"
                                        fill="#fff"
                                        d="M121.635 139.823c-4.306-4.152-5.689-12.763-5.689-20.3V52.636H144.7l-1.845-4h-26.91V16.5l-32.138 8v24.138H69.2l1.845 4h12.763v70.888c0 13.839 3.537 34.752 32.292 34.752 28.6 0 35.521-17.837 35.521-17.837l-1.845-2c-.155-.002-16.762 12.299-28.141 1.382"
                                        transform="translate(1485.265 1789.035)"
                                    ></path>
                                    <path
                                        id="XMLID_629_"
                                        fill="#fff"
                                        d="M310.416 110.639c25.064 0 45.516-16.761 45.516-37.52s-20.3-37.52-45.516-37.52c-25.064 0-45.516 16.761-45.516 37.52s20.451 37.52 45.516 37.52m-10.61-59.816c0-.615 1.691-9.687 10.61-9.687s10.61 9.072 10.61 9.687c.923 5.843 1.076 13.685 1.076 22.45s-.154 16.607-1.076 22.45c0 .615-1.691 9.687-10.61 9.687s-10.61-9.072-10.61-9.687c-.923-5.843-1.076-13.685-1.076-22.45s.153-16.76 1.076-22.45"
                                        transform="translate(1590.49 1799.305)"
                                    ></path>
                                    <path
                                        id="XMLID_617_"
                                        fill="#fff"
                                        d="M335.862 102.113H286.5a9.32 9.32 0 0 1-9.38-9.38c0-4.613 3.69-8.15 7.381-10.149L282.35 81.2c-9.687 4.152-17.222 14.3-17.222 25.679a26.94 26.94 0 0 0 9.995 21.066c-9.38 5.074-15.223 12.609-15.223 21.066 0 15.069 17.53 28.14 54.588 28.14 42.9 0 57.663-17.683 57.663-38.75a36.556 36.556 0 0 0-36.289-36.288m-18.914 71.041c-16.3 0-35.982-6.92-35.982-22.912a25.57 25.57 0 0 1 5.843-16.453 34 34 0 0 0 5.689.615h44.747a15.98 15.98 0 0 1 15.993 15.996c0 21.062-29.985 22.754-36.29 22.754"
                                        transform="translate(1587.803 1823.824)"
                                    ></path>
                                    <path
                                        id="XMLID_613_"
                                        fill="#fff"
                                        d="m120.6 37.4 50.744 111.79 20.913-39.826L157.966 37.4Z"
                                        transform="translate(1512.901 1800.273)"
                                    ></path>
                                    <path
                                        id="XMLID_612_"
                                        fill="#fff"
                                        d="M185.79 75.689 205.934 37.4H165.8Z"
                                        transform="translate(1537.205 1800.273)"
                                    ></path>
                                    <circle
                                        id="XMLID_606_"
                                        cx="18.76"
                                        cy="18.76"
                                        r="18.76"
                                        fill="#fff"
                                        transform="translate(1638.73 1958.074)"
                                    ></circle>
                                    <path
                                        id="XMLID_598_"
                                        fill="#fff"
                                        d="M2.1 119.884h37.52L2.1 87.9Z"
                                        transform="translate(1449.186 1827.426)"
                                    ></path>
                                    <path
                                        id="XMLID_596_"
                                        fill="#fff"
                                        d="M89.894 88.05 38.688 40.074c-.308-.308-6.3-5.536-6.3-13.685 0-10.764 9.534-19.375 21.374-19.375h1.384V4.4H48.53C21.928 4.4.4 22.237.4 44.38a35.3 35.3 0 0 0 10.764 25.064s51.205 47.976 51.359 48.283a26.5 26.5 0 0 1 7.381 18.76c0 14.147-10.456 25.679-23.373 25.679h-2v2.614h8c28.755 0 52.128-20.3 52.128-45.208-.004-12.147-5.693-23.372-14.765-31.522"
                                        transform="translate(1448.271 1782.529)"
                                    ></path>
                                    <path
                                        id="XMLID_595_"
                                        fill="#fff"
                                        d="M76.066 4.4H38.7l37.366 31.984Z"
                                        transform="translate(1468.865 1782.529)"
                                    ></path>
                                    <g data-type="innerShadowGroup">
                                        <g filter="url(#Path_277)" transform="translate(937 1120)">
                                            <g id="Path_277-3" fill="none" data-name="Path 277">
                                                <path d="M872.855 380.19c216.046 0 391.186 175.14 391.186 391.185s-175.14 391.186-391.186 391.186S481.67 987.421 481.67 771.375 656.81 380.19 872.855 380.19"></path>
                                                <path
                                                    fill="#6d6d6d"
                                                    d="M872.855 390.19c-210.186 0-381.185 171-381.185 381.185 0 210.187 171 381.186 381.185 381.186 210.187 0 381.186-171 381.186-381.186s-171-381.185-381.186-381.185m0-10c216.046 0 391.186 175.14 391.186 391.185s-175.14 391.186-391.186 391.186c-216.045 0-391.185-175.14-391.185-391.186 0-216.045 175.14-391.185 391.185-391.185"
                                                ></path>
                                            </g>
                                        </g>
                                        <g filter="url(#Path_277-2)" transform="translate(937 1120)">
                                            <g id="Path_277-4" fill="#fff" data-name="Path 277">
                                                <path d="M872.855 380.19c216.046 0 391.186 175.14 391.186 391.185s-175.14 391.186-391.186 391.186S481.67 987.421 481.67 771.375 656.81 380.19 872.855 380.19"></path>
                                                <path d="M872.855 390.19c-210.186 0-381.185 171-381.185 381.185 0 210.187 171 381.186 381.185 381.186 210.187 0 381.186-171 381.186-381.186s-171-381.185-381.186-381.185m0-10c216.046 0 391.186 175.14 391.186 391.185s-175.14 391.186-391.186 391.186c-216.045 0-391.185-175.14-391.185-391.186 0-216.045 175.14-391.185 391.185-391.185"></path>
                                            </g>
                                        </g>
                                        <g id="Path_277-5" fill="none" data-name="Path 277">
                                            <path d="M1809.853 1500.191c216.046 0 391.186 175.14 391.186 391.185s-175.14 391.186-391.186 391.186-391.185-175.14-391.185-391.186 175.14-391.185 391.185-391.185"></path>
                                            <path
                                                fill="#6d6d6d"
                                                d="M1809.853 1510.191c-210.186 0-381.185 171-381.185 381.185 0 210.187 171 381.186 381.185 381.186 210.187 0 381.186-171 381.186-381.186s-171-381.185-381.186-381.185m0-10c216.046 0 391.186 175.14 391.186 391.185s-175.14 391.186-391.186 391.186c-216.045 0-391.185-175.14-391.185-391.186 0-216.045 175.14-391.185 391.185-391.185"
                                            ></path>
                                        </g>
                                    </g>
                                    <g
                                        id="Rectangle_449"
                                        fill="none"
                                        stroke="#707070"
                                        strokeWidth="15"
                                        data-name="Rectangle 449"
                                    >
                                        <path stroke="none" d="M965 1148h1680v3717H965z"></path>
                                        <path d="M972.5 1155.5h1665v3702h-1665z"></path>
                                    </g>
                                </g>
                            </svg>
                            {/* <IOSOption
                                battery={battery}
                                isOption={isOption}
                                time={time}
                                network={network}
                                net={net}
                                isBattery={isBattery}
                                iconPadding={`2rem 5rem 0rem 7rem`}
                                // iconPadding={`2rem 4.5rem 0rem 6rem`}
                                isDarkBg={false}
                                isIOS={isIOS}
                            /> */}
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
                        </div>
                        <div className="global_form_inner">
                            <label>Address/Account</label>
                            <input
                                type="text"
                                value={data.address}
                                name="address"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.address2}
                                name="address2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Network</label>
                            <input
                                type="text"
                                value={data.network}
                                name="network"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Remarks</label>
                            <input
                                type="text"
                                value={data.remarks}
                                name="remarks"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Date</label>
                            <input
                                type="text"
                                value={data.time}
                                name="time"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <button className="dateTimeBtn" onClick={() => manageTimeDate()}>Current Date and Time</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default View101