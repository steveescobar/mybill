"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from '@/utils/getPicture';
import { RobotoBaseEncoded } from "@/utils/encodedFonts/RobotoBaseEncoded";
import Image from "next/image";

const View4 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 4";

    const [data, setData] = useState({
        temp: "–27 €",
        name: "Aashir Ashfaq",
        moment: "Moment Ago",
        pro: "AA",
        ref: "sent from Revolut",
        iban: "LT12 3250 0538 0988 5971D",
        bic: "REVOLT21XXX",
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
            1,
            0.5,
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
                        isIOS={isIOS}
                        setIsIOS={setIsIOS}
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
                                viewBox="0 0 1546 3333"
                               
                            >
                                  <style>
                                    {
                                        RobotoBaseEncoded
                                    }
                                </style>
                                <g data-name="Group 406" transform="translate(-2522 -144)">
                                    <g data-name="Group 390">
                                        <path
                                            d="M0 0H1546V3333H0z"
                                            data-name="Rectangle 453"
                                            transform="translate(2522 144)"
                                        ></path>
                                        <path
                                            fill="#111"
                                            d="M0 0H1546V3113H0z"
                                            data-name="Rectangle 454"
                                            transform="translate(2522 364)"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M85.3 105.319a5.5 5.5 0 00-7.783-7.783l-18.09 18.108-18.108-18.091a5.5 5.5 0 00-7.783 7.783l18.109 18.092-18.092 18.108a5.5 5.5 0 007.783 7.783l18.091-18.109 18.109 18.09a5.5 5.5 0 107.783-7.783l-18.109-18.09z"
                                            data-name="Path 246"
                                            transform="translate(2561.075 303.219)"
                                        ></path>
                                        <g data-name="Group 366" transform="translate(1898 2)">
                                            <text
                                                fill="#fff"
                                                data-name="27"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="128"
                                                fontWeight="700"
                                                letterSpacing="-.018em"
                                                transform="translate(713 680)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.temp}
                                                </tspan>
                                            </text>
                                        </g>
                                        <g data-name="Group 367" transform="translate(1901)">
                                            <text
                                                fill="#2e69c5"
                                                data-name="To Aashir Ashfaq"
                                                fontFamily="MicrosoftSansSerif, Microsoft Sans Serif"
                                                fontSize="55"
                                                letterSpacing=".006em"
                                                fontWeight="500"
                                                transform="translate(701 810)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.name}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#78787a"
                                                data-name="Moment Ago"
                                                fontFamily="MicrosoftPhagsPa, Microsoft PhagsPa"
                                                fontSize="51"
                                                fontWeight="500"
                                                transform="translate(701 906)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.moment}
                                                </tspan>
                                            </text>
                                        </g>
                                        <circle
                                            cx="106"
                                            cy="106"
                                            r="106"
                                            fill="#5d5cde"
                                            data-name="Ellipse 131"
                                            transform="translate(3787 597)"
                                        ></circle>
                                        <text
                                            fill="#fff"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="93"
                                            fontWeight="700"
                                            transform="translate(3890 732)"
                                        >
                                            <tspan x="0" y="0" textAnchor="middle">
                                                {data.pro}
                                            </tspan>
                                        </text>
                                        <g
                                            fill="#386bc5"
                                            stroke="#000"
                                            strokeWidth="5"
                                            data-name="Ellipse 132"
                                            transform="translate(3932 740)"
                                        >
                                            <circle cx="37.5" cy="37.5" r="37.5" stroke="none"></circle>
                                            <circle cx="37.5" cy="37.5" r="35" fill="none"></circle>
                                        </g>
                                        <path
                                            d="M29.259 78.246a2.138 2.138 0 000-3.022L18.586 64.55a2.137 2.137 0 00-3.022 3.022L22.6 74.6H2.135a2.135 2.135 0 000 4.269h20.46L15.57 85.9a2.137 2.137 0 103.022 3.022l10.674-10.669z"
                                            data-name="Path 247"
                                            transform="translate(3953.75 698.311)"
                                        ></path>
                                        <g data-name="Group 375" transform="translate(1925)">
                                            <g data-name="Group 368" transform="translate(2 -3)">
                                                <rect
                                                    width="488"
                                                    height="146"
                                                    fill="#3b82f6"
                                                    data-name="Rectangle 455"
                                                    rx="70"
                                                    transform="translate(671 988)"
                                                ></rect>
                                                <text
                                                    fill="#fff"
                                                    data-name="Send again"
                                                    fontFamily="Roboto-Bold, Roboto"
                                                    fontSize="56"
                                                    fontWeight="500"
                                                    letterSpacing="-.02em"
                                                    transform="translate(812 1081)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Send again
                                                    </tspan>
                                                </text>
                                                <path
                                                    fill="#fff"
                                                    d="M20 0l20 18H0z"
                                                    data-name="Polygon 10"
                                                    transform="rotate(90 -129.5 913.5)"
                                                ></path>
                                                <path
                                                    fill="#fff"
                                                    d="M0 0H39V15H0z"
                                                    data-name="Rectangle 456"
                                                    transform="translate(736 1054)"
                                                ></path>
                                            </g>
                                            <g data-name="Group 371" transform="translate(1 2)">
                                                <g data-name="Group 369" transform="translate(522 -5)">
                                                    <rect
                                                        width="420"
                                                        height="146"
                                                        fill="#18242f"
                                                        data-name="Rectangle 455"
                                                        rx="70"
                                                        transform="translate(671 988)"
                                                    ></rect>
                                                </g>
                                                <text
                                                    fill="#2560c5"
                                                    data-name="Split bill"
                                                    fontFamily="Roboto-Bold, Roboto"
                                                    fontSize="47"
                                                    fontWeight="700"
                                                    letterSpacing=".015em"
                                                    transform="translate(1350 1075)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Split bill
                                                    </tspan>
                                                </text>
                                                <g data-name="Group 370" transform="translate(2 1)">
                                                    <path
                                                        fill="#2560c5"
                                                        d="M13 0l13 15H0z"
                                                        data-name="Polygon 11"
                                                        transform="rotate(-45 1884.676 -980.805)"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#2560c5"
                                                        strokeWidth="6"
                                                        d="M0 0L24 23"
                                                        data-name="Line 39"
                                                        transform="translate(1257.5 1039.5)"
                                                    ></path>
                                                    <path
                                                        fill="#2560c5"
                                                        d="M13 0l13 15H0z"
                                                        data-name="Polygon 11"
                                                        transform="rotate(45 -592.156 2076.848)"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#2560c5"
                                                        strokeWidth="6"
                                                        d="M24 0L0 23"
                                                        data-name="Line 39"
                                                        transform="translate(1277.543 1039.5)"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#2560c5"
                                                        strokeWidth="9"
                                                        d="M0 0L0 28"
                                                        data-name="Line 40"
                                                        transform="translate(1279.5 1054.5)"
                                                    ></path>
                                                </g>
                                            </g>
                                            <g data-name="Group 374">
                                                <g data-name="Group 373">
                                                    <g data-name="Group 372" transform="translate(454 2)">
                                                        <g data-name="Group 369" transform="translate(522 -5)">
                                                            <rect
                                                                width="420"
                                                                height="146"
                                                                fill="#18242f"
                                                                data-name="Rectangle 455"
                                                                rx="70"
                                                                transform="translate(671 988)"
                                                            ></rect>
                                                        </g>
                                                        <text
                                                            fill="#2560c5"
                                                            fontFamily="Roboto-Bold, Roboto"
                                                            fontSize="48"
                                                            fontWeight="700"
                                                            letterSpacing=".04em"
                                                            transform="translate(1333 1073)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                Schedule
                                                            </tspan>
                                                        </text>
                                                        <path
                                                            fill="#2560c5"
                                                            d="M13.6 0a2.364 2.364 0 012.551 2.133v3.555h15.3V2.133A2.364 2.364 0 0134.008 0a2.364 2.364 0 012.551 2.133v3.555h4.251c3.752 0 6.8 2.551 6.8 5.688v28.443c0 3.138-3.05 5.688-6.8 5.688H6.8c-3.752 0-6.8-2.551-6.8-5.688V11.377c0-3.138 3.05-5.689 6.8-5.689h4.251V2.133A2.364 2.364 0 0113.6 0zm28.91 17.065H5.1v22.754a1.585 1.585 0 001.7 1.422h34.01a1.585 1.585 0 001.7-1.422z"
                                                            data-name="Path 248"
                                                            transform="translate(1258.781 1033.247)"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                        <g data-name="Group 376" transform="translate(1895 10)">
                                            <rect
                                                width="1415"
                                                height="288"
                                                fill="#242426"
                                                data-name="Rectangle 457"
                                                rx="45"
                                                transform="translate(693 1199)"
                                            ></rect>
                                            <text
                                                fill="#7d7a7c"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="43"
                                                fontWeight="600"
                                                transform="translate(738 1311)"
                                            >
                                                <tspan x="0" y="0">
                                                    Reference
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#cfcfd1"
                                                data-name="sent from Revolut"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="47"
                                                fontWeight="600"
                                                transform="translate(738 1420)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.ref}
                                                </tspan>
                                            </text>
                                        </g>
                                        <g data-name="Group 379" transform="translate(1898)">
                                            <g data-name="Group 377" transform="translate(-9 377)">
                                                <g data-name="Group 378">
                                                    <rect
                                                        width="1415"
                                                        height="175"
                                                        fill="#242426"
                                                        data-name="Rectangle 457"
                                                        rx="45"
                                                        transform="translate(699 1186)"
                                                    ></rect>
                                                </g>
                                            </g>
                                            <text
                                                fill="#7d7a7c"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="43"
                                                fontWeight="600"
                                                transform="translate(740 1670)"
                                            >
                                                <tspan x="0" y="0">
                                                    Statement
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#3584f2"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="50"
                                                fontWeight="700"
                                                transform="translate(1803 1669)"
                                            >
                                                <tspan x="0" y="0">
                                                    Download
                                                </tspan>
                                            </text>
                                            <g
                                                fill="#3584f2"
                                                data-name="download-svgrepo-com (1)"
                                                transform="translate(1731 1636.217)"
                                            >
                                                <path
                                                    d="M19.049 33.238L30.1 21.056h-8.289V4h-5.524v17.056H8z"
                                                    data-name="Path 249"
                                                    transform="translate(5.193 -14.31)"
                                                ></path>
                                                <path
                                                    d="M39.985 22.142H6.221V11H2v11.142c0 1.756 1.893 3.183 4.221 3.183h33.764c2.328 0 4.221-1.428 4.221-3.183V11h-4.221z"
                                                    data-name="Path 250"
                                                    transform="translate(1.14 7.927)"
                                                ></path>
                                            </g>
                                        </g>
                                        <g data-name="Group 381" transform="translate(1900)">
                                            <g data-name="Group 377" transform="translate(-11 625)">
                                                <g data-name="Group 378" transform="translate(699 1186)">
                                                    <rect
                                                        width="1415"
                                                        height="324"
                                                        fill="#242426"
                                                        data-name="Rectangle 457"
                                                        rx="45"
                                                    ></rect>
                                                </g>
                                            </g>
                                            <g
                                                fill="#7d7a7c"
                                                data-name="Group 380"
                                                fontFamily="MicrosoftSansSerif, Microsoft Sans Serif"
                                                fontSize="44"
                                                transform="translate(1)"
                                                fontWeight="600"
                                            >
                                                <text transform="translate(735 1914)">
                                                    <tspan x="0" y="0">
                                                        IBAN
                                                    </tspan>
                                                </text>
                                                <text
                                                    data-name="BIC / SWIFT"
                                                    fontWeight="600"
                                                    transform="translate(735 2071)"
                                                >
                                                    <tspan x="0" y="0">
                                                        BIC / SWIFT
                                                    </tspan>
                                                </text>
                                            </g>
                                            <text
                                                fill="#c8c8ca"
                                                data-name="LT12 3250 0538 0988 5971D"
                                                fontFamily="MicrosoftSansSerif, Microsoft Sans Serif"
                                                fontSize="44"
                                                letterSpacing="-.002em"
                                                transform="translate(2046 1910)"
                                                fontWeight="600"
                                            >
                                                <tspan x="0" y="0" textAnchor='end'>
                                                    {data.iban}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#c8c8ca"
                                                fontFamily="MicrosoftSansSerif, Microsoft Sans Serif"
                                                fontSize="44"
                                                letterSpacing="-.074em"
                                                transform="translate(2046 2067)"
                                                fontWeight="600"
                                            >
                                                <tspan x="0" y="0" textAnchor='end'>
                                                    {data.bic}
                                                </tspan>
                                            </text>
                                        </g>
                                        <g data-name="Group 388" transform="translate(1898)">
                                            <g data-name="Group 385">
                                                <g data-name="Group 377" transform="translate(-9 1024)">
                                                    <g data-name="Group 378" transform="translate(699 1186)">
                                                        <rect
                                                            width="1415"
                                                            height="518"
                                                            fill="#242426"
                                                            data-name="Rectangle 457"
                                                            rx="45"
                                                        ></rect>
                                                    </g>
                                                </g>
                                                <g data-name="Group 384">
                                                    <g data-name="Group 380" transform="translate(3 387)">
                                                        <text
                                                            fill="#7d7a7c"
                                                            fontFamily="MicrosoftSansSerif, Microsoft Sans Serif"
                                                            fontSize="44"
                                                            transform="translate(735 1916)"
                                                            fontWeight="600"
                                                        >
                                                            <tspan x="0" y="0">
                                                                Category
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    <g data-name="Group 382" transform="translate(3 558)">
                                                        <text
                                                            fill="#7d7a7c"
                                                            fontFamily="MicrosoftSansSerif, Microsoft Sans Serif"
                                                            fontSize="44"
                                                            transform="translate(735 1914)"
                                                            fontWeight="600"
                                                        >
                                                            <tspan x="0" y="0">
                                                                Receipt
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    <g data-name="Group 383" transform="translate(3 726)">
                                                        <text
                                                            fill="#7d7a7c"
                                                            data-name="Exclude from analytics"
                                                            fontFamily="MicrosoftSansSerif, Microsoft Sans Serif"
                                                            fontSize="44"
                                                            transform="translate(735 1914)"
                                                            fontWeight="600"
                                                        >
                                                            <tspan x="0" y="0">
                                                                Exclude from analytics
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                </g>
                                                <text
                                                    fill="#3584f2"
                                                    fontFamily="MicrosoftSansSerif, Microsoft Sans Serif"
                                                    fontSize="44"
                                                    transform="translate(1819 2328)"
                                                    fontWeight="600"
                                                >
                                                    <tspan x="0" y="0">
                                                        Transfers
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3584f2"
                                                    fontFamily="MicrosoftSansSerif, Microsoft Sans Serif"
                                                    fontSize="44"
                                                    transform="translate(1873 2479)"
                                                    fontWeight="600"
                                                >
                                                    <tspan x="0" y="0">
                                                        Upload
                                                    </tspan>
                                                </text>
                                                <path
                                                    fill="#3584f2"
                                                    d="M45.22 13.886a2.762 2.762 0 000-4.2L35.322.794a3.573 3.573 0 00-4.67 0 2.762 2.762 0 000 4.2l4.268 3.833H3.3A3.142 3.142 0 000 11.792a3.142 3.142 0 003.3 2.965h31.62l-4.268 3.836a2.762 2.762 0 000 4.2 3.573 3.573 0 004.67 0l9.9-8.895zM10.857 46.5a3.573 3.573 0 004.67 0 2.762 2.762 0 000-4.2l-4.258-3.827H42.89a2.982 2.982 0 100-5.93H11.269l4.268-3.836a2.762 2.762 0 000-4.2 3.573 3.573 0 00-4.67 0l-9.9 8.895a2.762 2.762 0 000 4.2l9.9 8.895z"
                                                    data-name="Path 251"
                                                    transform="translate(1728.371 2289.891)"
                                                ></path>
                                                <path
                                                    fill="#3584f2"
                                                    d="M14.638 35.22l-1.021 3.063H6.283A6.289 6.289 0 000 44.567V69.7a6.289 6.289 0 006.283 6.283h37.7a6.289 6.289 0 006.285-6.283V44.567a6.289 6.289 0 00-6.283-6.283H36.65l-1.021-3.064A4.7 4.7 0 0031.162 32H19.106a4.7 4.7 0 00-4.468 3.22zm10.5 12.488a9.425 9.425 0 11-9.425 9.425 9.425 9.425 0 019.421-9.424z"
                                                    data-name="Path 252"
                                                    transform="translate(1808.629 2409.008)"
                                                ></path>
                                            </g>
                                            <g data-name="Group 387">
                                                <g data-name="Group 386">
                                                    <rect
                                                        width="204"
                                                        height="120"
                                                        fill="#3f3e43"
                                                        data-name="Rectangle 458"
                                                        rx="60"
                                                        transform="translate(1828 2592)"
                                                    ></rect>
                                                    <path
                                                        fill="rgba(255,255,255,0.99)"
                                                        d="M51.064 0A51.382 51.382 0 110 51.381 51.224 51.224 0 0151.064 0z"
                                                        data-name="Path 267"
                                                        transform="translate(1836 2600.237)"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                        <g data-name="Group 389" transform="translate(1899)">
                                            <rect
                                                width="1415"
                                                height="196"
                                                fill="#242426"
                                                data-name="Rectangle 457"
                                                rx="45"
                                                transform="translate(690 2780)"
                                            ></rect>
                                            <text
                                                fill="#c8c8bf"
                                                data-name="Get help"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="49"
                                                fontWeight="700"
                                                transform="translate(742 2893)"
                                            >
                                                <tspan x="0" y="0">
                                                    Get help
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#4e4e50"
                                                d="M88.664 83.455a3.693 3.693 0 010 5.22l-18.438 18.438a3.691 3.691 0 01-5.22-5.22l15.833-15.834-15.822-15.833a3.691 3.691 0 015.22-5.22l18.438 18.437z"
                                                data-name="Path 253"
                                                transform="translate(1884.556 2798.074)"
                                            ></path>
                                        </g>
                                    </g>
                                   {
                                    isIOS
                                    ?
                                    <>
                                     <rect
                                        width="558"
                                        height="22"
                                        fill="#fff"
                                        data-name="Rectangle 472"
                                        rx="11"
                                        transform="translate(3016 3425)"
                                    ></rect>
                                    </>
                                    :
                                    <></>
                                   }
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
                            <label>Temperature</label>
                            <input
                                type="text"
                                value={data.temp}
                                name="temp"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Name</label>
                            <input
                                type="text"
                                value={data.name}
                                name="name"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Moment</label>
                            <input
                                type="text"
                                value={data.moment}
                                name="moment"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Profile</label>
                            <input
                                type="text"
                                value={data.pro}
                                name="pro"
                                onChange={(e) => onChangeHandler(e)}
                                maxLength={2}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Reference</label>
                            <input
                                type="text"
                                value={data.ref}
                                name="ref"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>IBAM</label>
                            <input
                                type="text"
                                value={data.iban}
                                name="iban"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>BIC</label>
                            <input
                                type="text"
                                value={data.bic}
                                name="bic"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default View4