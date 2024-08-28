"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from "@/utils/getPicture";
import Image from "next/image";
import { RobotoBaseEncoded } from "@/utils/encodedFonts/RobotoBaseEncoded";

const View76 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 76";

    const [data, setData] = useState({
        statusTime: "5:41 PM Wed Aug 21",
        accountno: "07810 3966-090",
        currentBalance: "$233.33",
        availBalance: "$233.33",
        date1: "Aug 21,", date1_1: "2024", description1: "INTERAC ETRNSFR SENT LETICIA", description1_1: "202423419401C50FB", amount1: "-$38.64", balance1: "$233.33",
        date2: "Aug 21,", date2_2: "2024", description2: "INTERAC ETRNSFR SENT LETICIA", description2_2: "20242341858VNNNT6", amount2: "-$25.00", balance2: "$271.97",
        date3: "Aug 21,", date3_3: "2024", description3: "Branch transaction", amount3: "-$100.00", balance3: "$296.97",
        date4: "Aug 21,", date4_4: "2024", description4: "TELUS MOB", amount4: "-$200.00", balance4: "$396.97",
    });

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const [imageDimension, setImageDimension] = useState("70");

    const [time, setTime] = useState("9:34");
    const [network, setNetwork] = useState(4);
    const [net, setNet] = useState("wifi");
    const [isBattery, setIsBattery] = useState(true);
    const [battery, setBattery] = useState(50);
    const [bgColor, setBgColor] = useState("#ffffff");
    const [isOption, setIsOption] = useState(false);
    const [isIOS, setIsIOS] = useState(true);
    const [preview, setPreview] = useState("");
    const [isPreview, setIsPreview] = useState(false);

    const fetchCurrentTime = async () => {
        const timeValue = await getCurrentTime();
        setTime(timeValue);
    }
    const manageTimeDate = () => {
        const timeOptions = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };
        const dateOptions = {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
        };

        const now = new Date();
        const formattedTime = now.toLocaleString('en-US', timeOptions).replace(',', '');
        const formattedDate = now.toLocaleString('en-US', dateOptions).replace(',', '');

        const formattedDateTime = `${formattedTime} ${formattedDate}`;

        return setData({
            ...data,
            statusTime: formattedDateTime
        });
    };

    const takeScreenshot = async () => {
        await getPicture(
            setPreview,
            setIsPreview,
            screenshotRef,
            setIsLoading,
            toast,
            0,
            0,
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
                            <style>
                                {
                                    RobotoBaseEncoded
                                }
                            </style>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 4719.546 6641"
                            >
                                <style>
                                    {
                                        RobotoBaseEncoded
                                    }
                                </style>
                                <defs>
                                    <filter
                                        id="Path_9"
                                        width="4576.455"
                                        height="1576.198"
                                        x="58.427"
                                        y="1403.129"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset dx="5" dy="5"></feOffset>
                                        <feGaussianBlur result="blur" stdDeviation="26"></feGaussianBlur>
                                        <feFlood floodColor="#2e2c2c" floodOpacity="0.529"></feFlood>
                                        <feComposite in2="blur" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                </defs>
                                <g data-name="Group 40" transform="translate(-6028.454 -221)">
                                    <g data-name="Group 30" transform="translate(87)">
                                        <g data-name="Group 39">
                                            <g data-name="Group 23" transform="translate(5941.454 222)">
                                                <path
                                                    fill="#f5f7f6"
                                                    d="M0 0h4719.546v6631H0z"
                                                    data-name="Path 15"
                                                ></path>
                                            </g>
                                            <path
                                                fill="#3273b7"
                                                d="M0 0h4719.546v606H0z"
                                                data-name="Path 14"
                                                transform="translate(5941.454 221)"
                                            ></path>
                                            <g
                                                fill="none"
                                                stroke="#f8f8f8"
                                                strokeWidth="7"
                                                data-name="Rectangle 3"
                                                transform="translate(9590 567)"
                                            >
                                                <rect width="120" height="84" stroke="none" rx="32"></rect>
                                                <rect width="113" height="77" x="3.5" y="3.5" rx="28.5"></rect>
                                            </g>
                                            <rect
                                                width="23"
                                                height="33"
                                                fill="#fff"
                                                data-name="Rectangle 4"
                                                rx="11"
                                                transform="translate(9705 593)"
                                            ></rect>
                                            <rect
                                                width="23"
                                                height="33"
                                                fill="#fff"
                                                data-name="Rectangle 7"
                                                rx="11"
                                                transform="translate(9572 593)"
                                            ></rect>
                                            <rect
                                                width="53"
                                                height="13"
                                                fill="#fff"
                                                data-name="Rectangle 6"
                                                rx="6.5"
                                                transform="translate(9624 551)"
                                            ></rect>
                                            <circle
                                                cx="9.5"
                                                cy="9.5"
                                                r="9.5"
                                                fill="#fff"
                                                data-name="Ellipse 2"
                                                transform="translate(9622 589)"
                                            ></circle>
                                            <ellipse
                                                cx="10"
                                                cy="9.5"
                                                fill="#fff"
                                                data-name="Ellipse 3"
                                                rx="10"
                                                ry="9.5"
                                                transform="translate(9658 589)"
                                            ></ellipse>
                                            <path
                                                fill="#fff"
                                                d="M-15.626-20.255l4.886 1.736 11.362.93 7.238-.93 4.355-1.736a9.658 9.658 0 002.894-2.508c1.774-2.157 3.427-5.357 5.835-4.923 3.2.577-4.325 11.481-5.835 11.481L11.2-13.78l-3.34.95-7.238.865s-5.959-.411-10.021-.865a20.317 20.317 0 01-7.514-2.6c-1.51 0-11-6.339-8.492-8.5s7.515 2.648 9.779 3.675z"
                                                data-name="Path 1"
                                                transform="translate(9651.949 642.511)"
                                            ></path>
                                            <path
                                                fill="#fff"
                                                d="M120.83 196.344a5.9 5.9 0 01-1.1-.1 6.544 6.544 0 01-1.054-.323 6.424 6.424 0 01-.969-.518 5.938 5.938 0 01-.857-.7 5.666 5.666 0 01-1.644-3.978 5.778 5.778 0 01.112-1.1 5.694 5.694 0 01.323-1.054 6.354 6.354 0 01.506-.969 6.8 6.8 0 01.7-.856 5.577 5.577 0 01.857-.688 5.378 5.378 0 01.969-.52 5.287 5.287 0 011.054-.322 5.7 5.7 0 012.192 0 5.609 5.609 0 012.022.842 5.75 5.75 0 01.857.688 6.9 6.9 0 01.7.856 6.288 6.288 0 01.5.969 5.488 5.488 0 01.323 1.054 5.8 5.8 0 01.112 1.1 5.612 5.612 0 01-5.617 5.62z"
                                                data-name="Path 3"
                                                transform="translate(9909.803 443.219)"
                                            ></path>
                                            <g fill="#fff" data-name="Group 38">
                                                <path
                                                    d="M103.412 111.028a4.216 4.216 0 01-4.215-4.215v-9.29a4.222 4.222 0 011.321-3.066l13.422-12.671a14.521 14.521 0 004.079-10.124v-.5a14.608 14.608 0 00-15-14.6A14.92 14.92 0 0088.8 71.584a4.215 4.215 0 01-8.43 0c0-12.614 10.063-23.133 22.431-23.452a23.037 23.037 0 0123.646 23.028v.5a22.906 22.906 0 01-6.528 16.065 7.425 7.425 0 01-.126.125l-12.166 11.49v7.473a4.215 4.215 0 01-4.215 4.215z"
                                                    data-name="Path 2"
                                                    transform="translate(9924.725 502.463)"
                                                ></path>
                                                <path
                                                    d="M63.2 121.263c-34.85 0-63.2-27.2-63.2-60.632S28.35 0 63.2 0s63.2 27.2 63.2 60.631-28.357 60.632-63.2 60.632zm0-113.178C33 8.085 8.43 31.657 8.43 60.632S33 113.178 63.2 113.178s54.77-23.572 54.77-52.547S93.4 8.084 63.2 8.084z"
                                                    data-name="Path 4"
                                                    transform="translate(9965.406 531.775)"
                                                ></path>
                                            </g>
                                            <g data-name="Group 8" transform="translate(6119.88 927)">
                                                <text
                                                    fill="#091722"
                                                    fontFamily="Roboto-Bold, Roboto"
                                                    fontSize="170"
                                                    fontWeight="700"
                                                    transform="translate(.12 162)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Chequing
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#15222b"
                                                    data-name="Primary Chequing Account"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="165"
                                                    transform="translate(769.12 164)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Primary Chequing Account
                                                    </tspan>
                                                </text>
                                            </g>
                                            <text
                                                fill="#46494e"
                                                data-name="07810 3966-090"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="130"
                                                transform="translate(6120 1268)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.accountno}
                                                </tspan>
                                            </text>
                                            <g data-name="Group 9" transform="translate(6108.65 1346.25)">
                                                <text
                                                    fill="#0e171c"
                                                    fontFamily="Roboto-Bold, Roboto"
                                                    fontSize="100"
                                                    fontWeight="700"
                                                    transform="translate(117.35 94.75)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Overview
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#65696c"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="100"
                                                    fontWeight="500"
                                                    transform="translate(700.35 94.75)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Statements
                                                    </tspan>
                                                </text>
                                                <path
                                                    fill="#dadbdd"
                                                    d="M0 0H1310V21H0z"
                                                    data-name="Rectangle 8"
                                                    transform="translate(20.35 188.75)"
                                                ></path>
                                                <path
                                                    fill="#3072af"
                                                    d="M7 0h582c3.866 0 21.381-.9 18.4 1.709l-2.963 7.972c-.219 0-3.5 5.535-8.172 8.173-2.817 1.592-9.113 2.4-14.959 3.147H19.28c-3.866 0-10.958-3.533-15.36-7.275L-1.8 6.021C-1.8 2.155-.208-.378 7 0z"
                                                    data-name="Path 7"
                                                    transform="translate(1.803 189)"
                                                ></path>
                                            </g>
                                            <path
                                                fill="#f9fafb"
                                                d="M102.857 78.148c0 11.717-5.378 18.2-19.543 18.2h-12.1V60.54c1.532-.156 6.66-.249 8.193-.249h4.128c14.443 0 19.322 6.109 19.322 17.857zm28.768 46.745c0-18.48-15.134-25.18-33.49-25.585v-.686c15.635-1.278 28.424-7.791 28.424-23.5 0-17.483-14.509-20.755-30.738-20.755-19.512 0-42.4.53-61.851 0v6.015c4.1-.28 14.1.28 14.1 5.422v74.418c0 4.986-10.256 5.672-14.1 5.672v5.859c18.762-.5 41.119 0 60.037 0 19.888.003 37.617-6.697 37.617-26.86zm-25.016-1.9c0 15.3-5.347 22.562-23.921 22.562h-11.57v-42.882h12.32c16.979 0 23.264 5.7 23.264 20.194z"
                                                transform="translate(6110.706 481.566)"
                                            ></path>
                                            <path
                                                fill="#f8f8f8"
                                                d="M184.232 151.748c-8.755 0-17.48 0-26.2.156v-5.983c3.971 0 14.978-.218 14.978-5.547V71.253h-.313l-39.462 81.835h-4.753L89.986 71.1H89.7v69.276c0 5.454 10.913 5.547 15.041 5.547l.188 5.983c-10.913-.343-25.8-.592-36.523 0v-5.983c4.159 0 13.54-.343 13.54-5.547V65.83c0-5.08-9.694-5.516-13.54-5.516V54.3c12.508.53 25.766.53 38.18 0l32.9 69.152 33.677-68.9c11.945.53 25.453.374 37.523-.156v6.015c-3.971 0-14.384.28-14.384 5.516v74.449c0 5.329 10.288 5.547 14.384 5.547v5.977c-8.849-.245-17.73-.152-26.454-.152z"
                                                transform="translate(6183.958 481.417)"
                                            ></path>
                                            <path
                                                fill="#f4f7f9"
                                                d="M201.228 104.14c0 18.7-1.845 44.533-29.55 44.533s-29.706-25.959-29.706-44.533 2-44.346 29.706-44.346 29.55 25.835 29.55 44.346zm25.891 0c0-32.254-19.762-50.36-55.441-50.36s-55.628 17.95-55.628 50.36 19.794 50.485 55.628 50.485 55.441-18.044 55.441-50.485z"
                                                data-name="Shape"
                                                transform="translate(6285.285 480.317)"
                                            ></path>
                                            <path
                                                fill="#ed1c24"
                                                d="M281.13 34c-62.17 0-112.57 50.228-112.57 112.188s50.4 112.188 112.57 112.188S393.7 208.148 393.7 146.188 343.3 34 281.13 34z"
                                                data-name="Path"
                                                transform="translate(6418.759 438.456)"
                                            ></path>
                                            <path
                                                fill="rgba(0,0,0,0)"
                                                d="M0 0H106.222V105.862H0z"
                                                transform="translate(6817.219 696.739)"
                                            ></path>
                                            <path
                                                fill="rgba(0,0,0,0)"
                                                d="M0 0H106.222V105.862H0z"
                                                data-name="Rectangle"
                                                transform="translate(6038.454 696.739)"
                                            ></path>
                                            <path
                                                fill="#fff"
                                                d="M237.3 77.433l-19.543-25.4a4.349 4.349 0 00-3.471-1.714 4.227 4.227 0 00-3.377 1.652l-23.264 29.2v45.81l23.2-29.574a4.506 4.506 0 017.1.031l19.637 25.585a4.194 4.194 0 003.127 1.621 4.1 4.1 0 003.127-1.621l19.636-25.583a4.57 4.57 0 013.565-1.745 4.416 4.416 0 013.533 1.714l23.139 29.543v-45.81l-23.264-29.2a4.289 4.289 0 00-3.408-1.652 4.443 4.443 0 00-3.471 1.71l-19.387 25.433a4.288 4.288 0 01-3.44 1.683 4.383 4.383 0 01-3.439-1.683zm56.566 83.113H187.55v-33.594h106.316z"
                                                data-name="Shape"
                                                transform="translate(6460.006 472.931)"
                                            ></path>
                                            <text
                                                fill="#f5f7f6"
                                                data-name="5:41 PM Wed Aug 21"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="76"
                                                transform="translate(6039 331)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.statusTime}
                                                </tspan>
                                            </text>
                                            <g fill="#f8f8f8" data-name="Group 37">
                                                <path
                                                    d="M118.311 194.658h-7.924c0-26.927-20.533-48.834-45.772-48.834s-45.77 21.906-45.77 48.834H10.92c0-31.59 24.088-57.288 53.7-57.288s53.691 25.698 53.691 57.288z"
                                                    data-name="Path 5"
                                                    transform="translate(10305.486 444.905)"
                                                ></path>
                                                <path
                                                    d="M88.995 55.721a27.86 27.86 0 1127.86-27.86 27.892 27.892 0 01-27.86 27.86zm0-48.449a20.588 20.588 0 1020.587 20.587A20.61 20.61 0 0088.995 7.272z"
                                                    data-name="Path 6"
                                                    transform="translate(10280.888 533)"
                                                ></path>
                                            </g>
                                            <path
                                                fill="rgba(0,0,0,0)"
                                                d="M0 0H858.439V436.101H0z"
                                                data-name="Rectangle"
                                                transform="translate(6038.454 366.5)"
                                            ></path>
                                            <g data-name="Group 11" transform="translate(6947.71 3401.123)">
                                                <g
                                                    fill="none"
                                                    stroke="#3273b7"
                                                    strokeWidth="12"
                                                    data-name="Ellipse 4"
                                                    transform="translate(.29 -.123)"
                                                >
                                                    <circle cx="60.5" cy="60.5" r="60.5" stroke="none"></circle>
                                                    <circle cx="60.5" cy="60.5" r="54.5"></circle>
                                                </g>
                                                <text
                                                    fill="#3273b7"
                                                    fontFamily="Roboto-Bold, Roboto"
                                                    fontSize="75"
                                                    fontWeight="700"
                                                    transform="translate(51.29 89.877)"
                                                >
                                                    <tspan x="0" y="0">
                                                        i
                                                    </tspan>
                                                </text>
                                            </g>
                                            <rect
                                                width="4420"
                                                height="2802"
                                                fill="#fff"
                                                data-name="Rectangle 9"
                                                rx="24"
                                                transform="translate(6073 3636)"
                                            ></rect>
                                            <text
                                                fill="#5d6164"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="133"
                                                transform="translate(6120 3505)"
                                            >
                                                <tspan x="0" y="0">
                                                    Transactions
                                                </tspan>
                                            </text>
                                            <g data-name="Layer 2" transform="rotate(90 1306.572 5115.554)">
                                                <g data-name="invisible box" transform="translate(0 29.123)">
                                                    <path
                                                        fill="none"
                                                        d="M0 0H154.505V84.547H0z"
                                                        data-name="Rectangle 10"
                                                    ></path>
                                                </g>
                                                <g
                                                    fill="#3273b7"
                                                    data-name="icons Q2"
                                                    transform="translate(12.951)"
                                                >
                                                    <path
                                                        d="M12.881 7.085v64.728A19.966 19.966 0 000 90.169 19.322 19.322 0 0012.881 108.2v13.525a6.763 6.763 0 006.441 7.085 6.763 6.763 0 006.441-7.085V108.2a19.322 19.322 0 0012.881-18.031 19.966 19.966 0 00-12.881-18.356V7.085A6.763 6.763 0 0019.322 0a6.763 6.763 0 00-6.441 7.085zm12.882 83.084a6.441 6.441 0 11-6.441-6.441 6.441 6.441 0 016.441 6.441z"
                                                        data-name="Path 16"
                                                    ></path>
                                                    <path
                                                        d="M12.881 6.441v13.2A19.966 19.966 0 000 38a19.322 19.322 0 0012.881 18.033v65.05a6.441 6.441 0 0012.881 0v-65.05A19.322 19.322 0 0038.644 38a19.966 19.966 0 00-12.881-18.356V6.441a6.441 6.441 0 10-12.881 0zM25.763 38a6.441 6.441 0 11-6.441-6.441A6.441 6.441 0 0125.763 38z"
                                                        data-name="Path 17"
                                                        transform="translate(45.084 .644)"
                                                    ></path>
                                                    <path
                                                        d="M12.881 6.441v55.067A19.966 19.966 0 000 79.864 19.322 19.322 0 0012.881 97.9v23.186a6.441 6.441 0 0012.881 0V97.9a19.322 19.322 0 0012.882-18.036 19.966 19.966 0 00-12.881-18.356V6.441a6.441 6.441 0 10-12.881 0zm12.882 73.423a6.441 6.441 0 11-6.441-6.441 6.441 6.441 0 016.441 6.441z"
                                                        data-name="Path 18"
                                                        transform="translate(90.169 .644)"
                                                    ></path>
                                                </g>
                                            </g>
                                            <text
                                                fill="#3273b7"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="85"
                                                fontWeight="700"
                                                transform="translate(6487 3919)"
                                            >
                                                <tspan x="0" y="0">
                                                    FILTER
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#3273b7"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="85"
                                                fontWeight="700"
                                                transform="translate(10000 3492)"
                                            >
                                                <tspan x="0" y="0">
                                                    DOWNLOAD
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#030303"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="85"
                                                fontWeight="500"
                                                transform="translate(6908 3911)"
                                            >
                                                <tspan x="0" y="0">
                                                    Showing:
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#030303"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="85"
                                                fontWeight="700"
                                                transform="translate(6330 4326)"
                                            >
                                                <tspan x="0" y="0">
                                                    Date
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#030303"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="85"
                                                fontWeight="700"
                                                transform="translate(6936 4323)"
                                            >
                                                <tspan x="0" y="0">
                                                    Description
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#030303"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="85"
                                                fontWeight="700"
                                                transform="translate(9216 4323)"
                                            >
                                                <tspan x="0" y="0">
                                                    Amount
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#030303"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="85"
                                                fontWeight="700"
                                                transform="translate(9834 4323)"
                                            >
                                                <tspan x="0" y="0">
                                                    Balance
                                                </tspan>
                                            </text>
                                            <g data-name="Group 15" transform="translate(7314.147 3781.471)">
                                                <text
                                                    fill="#3273b7"
                                                    data-name="90 days"
                                                    fontFamily="Roboto-Bold, Roboto"
                                                    fontSize="85"
                                                    fontWeight="700"
                                                    transform="translate(231.853 127.529)"
                                                >
                                                    <tspan x="0" y="0">
                                                        90 days
                                                    </tspan>
                                                </text>
                                                <g fill="none" data-name="Path 19">
                                                    <path d="M100.5 1l445-1a100.5 100.5 0 010 201h-445A100.5 100.5 0 010 100.5C0 45 45 1 100.5 1z"></path>
                                                    <path
                                                        fill="#707070"
                                                        d="M545.521 11h.004L100.5 12C51.15 12 11 51.7 11 100.5c0 49.35 40.15 89.5 89.5 89.5h445c49.35 0 89.5-40.15 89.5-89.5 0-49.344-40.137-89.49-89.479-89.5M545.5 0C601.005 0 646 44.995 646 100.5S601.005 201 545.5 201h-445C44.995 201 0 156.005 0 100.5S44.995 1 100.5 1l445-1z"
                                                    ></path>
                                                </g>
                                                <g
                                                    fill="#3273b7"
                                                    data-name="Group 14"
                                                    transform="translate(75.332 71)"
                                                >
                                                    <rect
                                                        width="86"
                                                        height="14"
                                                        data-name="Rectangle 11"
                                                        rx="7"
                                                        transform="translate(-.479 -.471)"
                                                    ></rect>
                                                    <rect
                                                        width="71"
                                                        height="12"
                                                        data-name="Rectangle 12"
                                                        rx="6"
                                                        transform="translate(5.521 25.529)"
                                                    ></rect>
                                                    <rect
                                                        width="39"
                                                        height="10"
                                                        data-name="Rectangle 13"
                                                        rx="5"
                                                        transform="translate(23.521 49.529)"
                                                    ></rect>
                                                </g>
                                            </g>
                                            <g
                                                fill="#3273b7"
                                                data-name="Group 16"
                                                transform="translate(8231.656 3827.485)"
                                            >
                                                <text
                                                    data-name="All transactions"
                                                    fontFamily="Roboto-Bold, Roboto"
                                                    fontSize="85"
                                                    fontWeight="700"
                                                    transform="translate(136.345 80.515)"
                                                >
                                                    <tspan x="0" y="0">
                                                        All transactions
                                                    </tspan>
                                                </text>
                                                <g data-name="Group 14" transform="translate(0 24)">
                                                    <rect
                                                        width="86"
                                                        height="14"
                                                        data-name="Rectangle 11"
                                                        rx="7"
                                                        transform="translate(.344 -.485)"
                                                    ></rect>
                                                    <rect
                                                        width="71"
                                                        height="12"
                                                        data-name="Rectangle 12"
                                                        rx="6"
                                                        transform="translate(6.344 25.515)"
                                                    ></rect>
                                                    <rect
                                                        width="39"
                                                        height="10"
                                                        data-name="Rectangle 13"
                                                        rx="5"
                                                        transform="translate(24.344 49.515)"
                                                    ></rect>
                                                </g>
                                            </g>
                                            <g
                                                fill="none"
                                                stroke="#707070"
                                                strokeWidth="11"
                                                data-name="Rectangle 14"
                                                transform="translate(8102 3772)"
                                            >
                                                <rect width="970" height="210" stroke="none" rx="105"></rect>
                                                <rect width="959" height="199" x="5.5" y="5.5" rx="99.5"></rect>
                                            </g>
                                            <path
                                                fill="none"
                                                stroke="#ececec"
                                                strokeWidth="11"
                                                d="M6204.954 4129.614H10396.5"
                                                data-name="Path 20"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#ececec"
                                                strokeWidth="11"
                                                d="M6205.454 4462.114H10397"
                                                data-name="Path 21"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#ececec"
                                                strokeWidth="11"
                                                d="M6205.454 4930.409H10397"
                                                data-name="Path 22"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#ececec"
                                                strokeWidth="11"
                                                d="M6205.454 5431.654H10397"
                                                data-name="Path 23"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#ececec"
                                                strokeWidth="11"
                                                d="M6205.454 5908.5H10397"
                                                data-name="Path 24"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#ececec"
                                                strokeWidth="11"
                                                d="M6197.454 6369.5H10389"
                                                data-name="Path 25"
                                            ></path>
                                            <path
                                                fill="#3273b7"
                                                stroke="#3273b7"
                                                strokeWidth="3"
                                                d="M6636.992 4317.868l-21.816-18.9a5.653 5.653 0 00-7.187 0 4 4 0 000 6.225l30.491 26.414a5.653 5.653 0 007.187 0l30.492-26.411a4 4 0 000-6.225 5.653 5.653 0 00-7.187 0l-21.816 18.9v-68.612c0-2.431-2.275-4.4-5.082-4.4s-5.082 1.971-5.082 4.4z"
                                            ></path>
                                            <g data-name="Group 31">
                                                <g filter="url(#Path_9)" transform="translate(5941.45 221)">
                                                    <path
                                                        fill="#fff"
                                                        d="M32.171 0h4356.113c17.768 0 32.171 14.013 32.171 31.3v1357.6c0 17.286-14.4 31.3-32.171 31.3H32.171C14.4 1420.2 0 1406.185 0 1388.9V31.3C0 14.013 14.4 0 32.171 0z"
                                                        data-name="Path 9"
                                                        transform="translate(131.43 1476.13)"
                                                    ></path>
                                                </g>
                                                <text
                                                    fill="#262c33"
                                                    data-name="Current balance"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="100"
                                                    fontWeight="500"
                                                    transform="translate(6325 1908)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Current balance
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#262c33"
                                                    data-name="Additional account details"
                                                    fontFamily="Roboto-Bold, Roboto"
                                                    fontSize="100"
                                                    fontWeight="700"
                                                    transform="translate(6629 2568)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Additional account details
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#262c33"
                                                    data-name="$233.33"
                                                    fontFamily="Roboto-Light, Roboto"
                                                    fontSize="246"
                                                    fontWeight="300"
                                                    transform="translate(6325 2235)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.currentBalance}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#262c33"
                                                    data-name="$233.33"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="135"
                                                    transform="translate(10170 2117)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="end">
                                                        {data.availBalance}
                                                    </tspan>
                                                </text>
                                                <g data-name="Group 32" transform="translate(-63)">
                                                    <text
                                                        fill="#262c33"
                                                        data-name="Available balance"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="100"
                                                        fontWeight="500"
                                                        transform="translate(9282 1908)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            Available balance
                                                        </tspan>
                                                    </text>
                                                    <g data-name="Group 10" transform="translate(10113 1811.561)">
                                                        <g
                                                            fill="none"
                                                            stroke="#3273b7"
                                                            strokeWidth="10"
                                                            data-name="Ellipse 4"
                                                            transform="translate(0 .439)"
                                                        >
                                                            <circle cx="60.5" cy="60.5" r="60.5" stroke="none"></circle>
                                                            <circle cx="60.5" cy="60.5" r="55.5"></circle>
                                                        </g>
                                                        <text
                                                            fill="#3273b7"
                                                            data-name="i"
                                                            fontFamily="Roboto-Bold, Roboto"
                                                            fontSize="75"
                                                            fontWeight="700"
                                                            transform="translate(51 90.439)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                i
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                </g>
                                                <path
                                                    fill="#3273b7"
                                                    stroke="#3273b7"
                                                    strokeWidth="4.998"
                                                    d="M6467.355 2555.563c5.615 2.89 7.55 2.302 10.304-.361l35.242-34.084c2.753-2.663 6.657-6.942 3.724-9.41s-6.345 1.623-9.093 4.285l-35.045 34.362-35.89-29.312c-2.933-2.464-8.154-8.811-10.907-6.15s1.168 6.693 4.1 9.16l37.543 31.531z"
                                                    data-name="angle-down-solid (1)"
                                                ></path>
                                                <path
                                                    fill="none"
                                                    stroke="#707070"
                                                    strokeWidth="1.6"
                                                    d="M0 4L4017.369 0"
                                                    data-name="Line 1"
                                                    transform="translate(6324.454 2740.014)"
                                                ></path>
                                                <g data-name="Group 34" transform="translate(0 -45)">
                                                    <text
                                                        fill="#3273b7"
                                                        data-name="PAY BILL"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="90"
                                                        fontWeight="700"
                                                        transform="translate(7503 2996)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            PAY BILL
                                                        </tspan>
                                                    </text>
                                                    <path
                                                        fill="none"
                                                        stroke="#3273b7"
                                                        strokeWidth="12"
                                                        d="M7347.072 3004.466v-91.957h76.209l26.568 22.843v69.115l-16.78-19.914-9.788 19.914-13.983-19.914-11.187 19.914-11.886-19.914-9.788 19.914-10.487-19.914z"
                                                        data-name="Path 10"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#3273b7"
                                                        strokeWidth="12"
                                                        d="M7406.456 2908.553v30.816h38.349"
                                                        data-name="Path 11"
                                                    ></path>
                                                </g>
                                                <g
                                                    fill="#3273b7"
                                                    data-name="Group 35"
                                                    transform="translate(0 -47)"
                                                >
                                                    <text
                                                        data-name="INTERAC E-TRANSFER"
                                                        fontFamily="Roboto-BoldItalic, Roboto"
                                                        fontSize="90"
                                                        fontStyle="italic"
                                                        fontWeight="700"
                                                        transform="translate(8305 2996)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            INTERAC
                                                        </tspan>
                                                        <tspan
                                                            y="0"
                                                            fontFamily="Roboto-Bold, Roboto"
                                                            fontStyle="normal"
                                                        >
                                                            {" "}
                                                            E-TRANSFER
                                                        </tspan>
                                                    </text>
                                                    <path
                                                        stroke="#3273b7"
                                                        strokeWidth="4"
                                                        d="M8230.172 2921.244a6.784 6.784 0 00-2.469-.101l-111.105 12.505c-4 .45-4.962 3.121-2.139 5.944l24.018 23.981a35.991 35.991 0 017.357 11.79l10.112 30.352a4.324 4.324 0 002.699 3.096c1.256.336 2.689-.235 3.98-1.776l67.893-81.367c1.835-2.208 1.581-3.906-.351-4.428zm-86.692 37.72l-19.467-19.44 85.375-9.602-62.261 33.439a35.498 35.498 0 00-3.651-4.396zm17.375 39.25l-8.16-24.477a33.025 33.025 0 00-2.044-4.661l62.551-33.591z"
                                                    ></path>
                                                </g>
                                                <g
                                                    fill="#3273b7"
                                                    data-name="Group 36"
                                                    transform="translate(0 -38)"
                                                >
                                                    <text
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="90"
                                                        fontWeight="700"
                                                        transform="translate(9600 2988)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            MANAGE
                                                        </tspan>
                                                    </text>
                                                    <path
                                                        stroke="#3273b7"
                                                        strokeWidth="4"
                                                        d="M9496.114 2881.939a4.642 4.642 0 014.419 3.221l5.106 15.866a50.485 50.485 0 016.155 3.556l16.3-3.509a4.642 4.642 0 014.995 2.228l12.867 22.272a4.642 4.642 0 01-.585 5.44l-11.187 12.348a51.806 51.806 0 010 7.111l11.19 12.367a4.642 4.642 0 01.585 5.44l-12.867 22.281a4.642 4.642 0 01-4.995 2.219l-16.3-3.509a51.607 51.607 0 01-6.146 3.556l-5.115 15.866a4.642 4.642 0 01-4.419 3.221h-25.738a4.642 4.642 0 01-4.419-3.221l-5.1-15.857a51.007 51.007 0 01-6.174-3.574l-16.29 3.518a4.642 4.642 0 01-4.995-2.228l-12.867-22.272a4.642 4.642 0 01.585-5.44l11.187-12.366a51.8 51.8 0 010-7.093l-11.192-12.367a4.642 4.642 0 01-.585-5.44l12.872-22.281a4.642 4.642 0 014.995-2.219l16.293 3.519a51.56 51.56 0 016.174-3.574l5.106-15.857a4.642 4.642 0 014.4-3.221h25.735zm-3.4 9.284h-18.937l-5.273 16.4-3.556 1.736a42.667 42.667 0 00-5.05 2.915l-3.284 2.233-16.863-3.64-9.47 16.414 11.558 12.793-.279 3.936a42.521 42.521 0 000 5.83l.279 3.936-11.576 12.794 9.479 16.414 16.859-3.63 3.286 2.219a42.666 42.666 0 005.05 2.915l3.556 1.736 5.282 16.4h18.959l5.292-16.414 3.546-1.727a41.819 41.819 0 005.041-2.915l3.277-2.219 16.869 3.63 9.47-16.414-11.568-12.793.279-3.936a42.511 42.511 0 000-5.84l-.279-3.936 11.577-12.784-9.479-16.414-16.869 3.621-3.276-2.204a41.721 41.721 0 00-5.041-2.915l-3.547-1.725-5.3-16.414zm-9.469 27.851a27.851 27.851 0 11-27.851 27.851 27.851 27.851 0 0127.852-27.851zm0 9.284a18.568 18.568 0 1018.569 18.568 18.568 18.568 0 00-18.568-18.568z"
                                                    ></path>
                                                </g>
                                                <g
                                                    fill="#3273b7"
                                                    data-name="Group 33"
                                                    transform="translate(0 -37)"
                                                >
                                                    <text
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="90"
                                                        fontWeight="700"
                                                        transform="translate(6592 2988)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            TRANSFER
                                                        </tspan>
                                                    </text>
                                                    <path
                                                        stroke="#3273b7"
                                                        strokeWidth="3"
                                                        d="M6427.177 2934.737h100.767l-11.561 11.562a5.046 5.046 0 107.14 7.132h0l20.17-20.17c.048-.048.065-.117.109-.165a4.989 4.989 0 00.964-1.436l.012-.032v-.012a4.866 4.866 0 00.323-1.767 5.2 5.2 0 00-.069-.839v.028a4.754 4.754 0 00-.125-.641l.008.032a4.915 4.915 0 00-1.23-2.3h0l-20.17-20.17a5.046 5.046 0 10-7.138 7.132h0l11.565 11.561h-100.774a5.043 5.043 0 100 10.085h0zm112.945 38.323h-100.775l11.561-11.562a5.043 5.043 0 00-7.131-7.131l-20.171 20.163c-.048.048-.065.117-.109.165a4.952 4.952 0 00-.972 1.44l-.012.032v.012a5 5 0 00-.246 2.609v-.028a4.694 4.694 0 00.125.637l-.015-.032a4.88 4.88 0 001.234 2.307h0l20.17 20.17a5.046 5.046 0 107.132-7.14l-11.558-11.557h100.775a5.043 5.043 0 000-10.085h0z"
                                                    ></path>
                                                </g>
                                            </g>
                                            <path
                                                fill="#7d848a"
                                                stroke="#7d848a"
                                                strokeWidth="3"
                                                d="M7459.515 4334.309v-71.587l10.7 8.213a5.445 5.445 0 003.3 1.049c2.58 0 4.67-1.6 4.67-3.585a3.22 3.22 0 00-1.37-2.536h0l-18.664-14.328c-.045-.034-.108-.046-.153-.077a4.89 4.89 0 00-1.329-.685l-.03-.009h-.011a5.728 5.728 0 00-1.635-.229 6.235 6.235 0 00-.777.049h.026a5.6 5.6 0 00-.594.089l.03-.006a5.1 5.1 0 00-2.132.874h0l-18.661 14.325a3.215 3.215 0 00-1.37 2.536c0 1.98 2.091 3.585 4.67 3.585a5.445 5.445 0 003.3-1.049h0l10.7-8.216v71.59c0 1.982 2.09 3.582 4.666 3.582s4.664-1.6 4.664-3.582h0zm35.468-80.238v71.59l-10.7-8.213a5.434 5.434 0 00-3.289-1.04c-2.576 0-4.666 1.6-4.666 3.582a3.218 3.218 0 001.355 2.525l18.662 14.327c.045.034.108.046.153.077a4.846 4.846 0 001.333.691l.03.009h.011a5.971 5.971 0 002.412.175h-.026a5.527 5.527 0 00.59-.089l-.033.008a5.061 5.061 0 002.135-.877h0l18.665-14.328a3.221 3.221 0 001.366-2.533c0-1.98-2.091-3.585-4.67-3.585a5.44 5.44 0 00-3.3 1.052l-10.696 8.213v-71.59c0-1.977-2.091-3.582-4.666-3.582s-4.666 1.6-4.666 3.582h0z"
                                                data-name="arrow-right-arrow-left-svgrepo-com"
                                            ></path>
                                            <path
                                                fill="#7d848a"
                                                stroke="#7d848a"
                                                strokeWidth="3"
                                                d="M9064.088 4334.309v-71.587l10.7 8.213a5.445 5.445 0 003.3 1.049c2.58 0 4.67-1.6 4.67-3.585a3.22 3.22 0 00-1.37-2.536h0l-18.664-14.328c-.045-.034-.108-.046-.153-.077a4.89 4.89 0 00-1.329-.685l-.03-.009h-.011a5.728 5.728 0 00-1.635-.229 6.235 6.235 0 00-.777.049h.026a5.6 5.6 0 00-.594.089l.03-.006a5.1 5.1 0 00-2.132.874h0l-18.661 14.325a3.215 3.215 0 00-1.37 2.536c0 1.98 2.091 3.585 4.67 3.585a5.445 5.445 0 003.3-1.049h0l10.7-8.216v71.59c0 1.982 2.09 3.582 4.666 3.582s4.664-1.6 4.664-3.582h0zm35.468-80.238v71.59l-10.7-8.213a5.434 5.434 0 00-3.289-1.04c-2.576 0-4.666 1.6-4.666 3.582a3.218 3.218 0 001.355 2.525l18.662 14.327c.045.034.108.046.153.077a4.846 4.846 0 001.333.691l.03.009h.011a5.971 5.971 0 002.412.175h-.026a5.527 5.527 0 00.59-.089l-.033.008a5.061 5.061 0 002.135-.877h0l18.665-14.328a3.221 3.221 0 001.366-2.533c0-1.98-2.091-3.585-4.67-3.585a5.44 5.44 0 00-3.3 1.052l-10.696 8.213v-71.59c0-1.977-2.091-3.582-4.666-3.582s-4.666 1.6-4.666 3.582h0z"
                                                data-name="arrow-right-arrow-left-svgrepo-com"
                                            ></path>
                                            <g data-name="Group 17" transform="translate(6331.88 4577.187)">
                                                <text
                                                    fill="#3d444a"
                                                    data-name="Aug 21,"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(.12 85.813)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.date1}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="INTERAC ETRNSFR SENT LETICIA"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(569.12 96.813)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.description1}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="202423419401C50FB"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(580.12 223.813)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.description1_1}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="- $38.64"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(3040 170.813)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="middle">
                                                        {data.amount1}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="$233.33"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(3805 169.813)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="end">
                                                        {data.balance1}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="2024"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(.12 223.813)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.date1_1}
                                                    </tspan>
                                                </text>
                                                <path
                                                    fill="none"
                                                    stroke="#3273b7"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="12"
                                                    d="M3958.12 86l40 48-40 48"
                                                ></path>
                                            </g>
                                            <g data-name="Group 18" transform="translate(6331.88 5056.438)">
                                                <text
                                                    fill="#3d444a"
                                                    data-name="Aug 21,"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(.12 85.563)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.date2}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="INTERAC ETRNSFR SENT LETICIA"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(569.12 96.563)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.description2}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="20242341858VNNNT6"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(580.12 223.563)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.description2_2}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="- $25.00"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(3040 170.563)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="middle">
                                                        {data.amount2}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="$271.97"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(3805 169.563)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="end">
                                                        {data.balance2}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="2024"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(.12 223.563)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.date2_2}
                                                    </tspan>
                                                </text>
                                                <path
                                                    fill="none"
                                                    stroke="#3273b7"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="12"
                                                    d="M3958.12 86l40 48-40 48"
                                                    data-name="right-arrow-svgrepo-com"
                                                ></path>
                                            </g>
                                            <g data-name="Group 19" transform="translate(6331.88 5536)">
                                                <text
                                                    fill="#3d444a"
                                                    data-name="Aug 21,"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(.12 86)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.date3}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="Branch transaction"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(580.12 166)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.description3}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="- $100.00"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(3040 171)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="middle">
                                                        {data.amount3}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="$296.97"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(3805 170)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="end">
                                                        {data.balance3}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="2024"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(.12 224)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.date3_3}
                                                    </tspan>
                                                </text>
                                                <path
                                                    fill="none"
                                                    stroke="#3273b7"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="12"
                                                    d="M3958.12 86l40 48-40 48"
                                                    data-name="right-arrow-svgrepo-com"
                                                ></path>
                                            </g>
                                            <g data-name="Group 20" transform="translate(6331.88 6015)">
                                                <text
                                                    fill="#3d444a"
                                                    data-name="Aug 21,"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(.12 86)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.date4}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="TELUS MOB"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(580.12 166)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.description4}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="- $200.00"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(3040 171)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="middle">
                                                        {data.amount4}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="$396.97"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(3805 170)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="end">
                                                        {data.balance4}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#3d444a"
                                                    data-name="2024"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="90"
                                                    fontWeight="500"
                                                    transform="translate(.12 224)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.date4_4}
                                                    </tspan>
                                                </text>
                                                <path
                                                    fill="none"
                                                    stroke="#3273b7"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="12"
                                                    d="M3958.12 86l40 48-40 48"
                                                    data-name="right-arrow-svgrepo-com"
                                                ></path>
                                            </g>
                                            <path
                                                fill="#fff"
                                                d="M0 0H4719V445H0z"
                                                data-name="Rectangle 15"
                                                transform="translate(5942 6417)"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#ececec"
                                                strokeWidth="9"
                                                d="M5941.988 6420h4718.827"
                                                data-name="Path 26"
                                            ></path>
                                            <g data-name="Group 21" transform="translate(6467.454 6470.5)">
                                                <rect
                                                    width="157.484"
                                                    height="104.989"
                                                    fill="#3378bb"
                                                    data-name="Rectangle 16"
                                                    rx="19"
                                                    transform="translate(12.089)"
                                                ></rect>
                                                <path
                                                    fill="#fff"
                                                    d="M0 0H159.627V13.927H0z"
                                                    data-name="Rectangle 17"
                                                    transform="translate(11.018 29.997)"
                                                ></path>
                                                <path
                                                    fill="#fff"
                                                    d="M0 0H64.279V13.927H0z"
                                                    data-name="Rectangle 18"
                                                    transform="translate(32.444 67.493)"
                                                ></path>
                                                <circle
                                                    cx="18.212"
                                                    cy="18.212"
                                                    r="18.212"
                                                    fill="#fff"
                                                    data-name="Ellipse 5"
                                                    transform="translate(121.364 52.495)"
                                                ></circle>
                                                <circle
                                                    cx="6.964"
                                                    cy="6.964"
                                                    r="6.964"
                                                    fill="#3378bb"
                                                    data-name="Ellipse 6"
                                                    transform="translate(133.148 64.279)"
                                                ></circle>
                                                <path
                                                    fill="none"
                                                    stroke="#3378bb"
                                                    strokeWidth="8"
                                                    d="M.369 44.072v78.025s-4.567 13.419 18.432 13.419h82.28s31.875 3.656 31.875-16.106v-7.29"
                                                    data-name="Path 27"
                                                ></path>
                                            </g>
                                            <text
                                                fill="#3378bb"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="75"
                                                fontWeight="500"
                                                transform="translate(6394 6703)"
                                            >
                                                <tspan x="0" y="0">
                                                    Accounts
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#6c6e6d"
                                                data-name="Pay &amp; Transfer"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="75"
                                                fontWeight="500"
                                                transform="translate(7625 6703)"
                                            >
                                                <tspan x="0" y="0">
                                                    Pay &amp; Transfer
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#6c6e6d"
                                                data-name="Bank services"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="75"
                                                fontWeight="500"
                                                transform="translate(8786 6703)"
                                            >
                                                <tspan x="0" y="0">
                                                    Bank services
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#6c6e6d"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="75"
                                                fontWeight="500"
                                                transform="translate(9979 6703)"
                                            >
                                                <tspan x="0" y="0">
                                                    Offers
                                                </tspan>
                                            </text>
                                            <g
                                                fill="none"
                                                stroke="#6c6e6d"
                                                strokeWidth="12"
                                                transform="translate(7783.882 6471)"
                                            >
                                                <circle
                                                    cx="77"
                                                    cy="77"
                                                    r="77"
                                                    data-name="Ellipse 7"
                                                    transform="translate(.118)"
                                                ></circle>
                                                <path
                                                    strokeLinecap="round"
                                                    d="M77.075 115.852v7.723"
                                                    data-name="Path 28"
                                                ></path>
                                                <path
                                                    strokeLinecap="round"
                                                    d="M77.075 30.894v7.723"
                                                    data-name="Path 29"
                                                ></path>
                                                <path
                                                    strokeLinecap="round"
                                                    d="M100.246 57.926c0-10.664-10.374-19.309-23.171-19.309s-23.17 8.645-23.17 19.309 10.373 19.308 23.17 19.308 23.17 8.645 23.17 19.309-10.373 19.309-23.17 19.309-23.17-8.645-23.17-19.309"
                                                    data-name="Path 30"
                                                ></path>
                                            </g>
                                            <g data-name="Group 22" transform="translate(8941.693 6459)">
                                                <g fill="none" data-name="Polygon 1">
                                                    <path d="M75.5 0L151 66H0z" transform="translate(.306)"></path>
                                                    <path
                                                        fill="#6c6e6d"
                                                        d="M75.5 13.282L26.633 56h97.734L75.5 13.282M75.5 0L151 66H0L75.5 0z"
                                                        transform="translate(.306)"
                                                    ></path>
                                                </g>
                                                <path
                                                    fill="#6c6e6d"
                                                    d="M0 0H151V12H0z"
                                                    data-name="Rectangle 19"
                                                    transform="translate(.307 154)"
                                                ></path>
                                                <path
                                                    fill="#6c6e6d"
                                                    d="M0 0H151V10H0z"
                                                    data-name="Rectangle 20"
                                                    transform="translate(.307 78)"
                                                ></path>
                                                <path
                                                    fill="#6c6e6d"
                                                    d="M0 0H79V12H0z"
                                                    data-name="Rectangle 21"
                                                    transform="rotate(90 -21.847 58.154)"
                                                ></path>
                                                <path
                                                    fill="#6c6e6d"
                                                    d="M0 0H79V13H0z"
                                                    data-name="Rectangle 22"
                                                    transform="rotate(90 2.653 80.654)"
                                                ></path>
                                                <path
                                                    fill="#6c6e6d"
                                                    d="M0 0H79V11H0z"
                                                    data-name="Rectangle 23"
                                                    transform="rotate(90 24.653 102.654)"
                                                ></path>
                                            </g>
                                            <path
                                                fill="none"
                                                stroke="#6c6e6d"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="15"
                                                d="M10074.213 6475.84c2.08-5.982 3.119-8.973 4.657-9.8a4.492 4.492 0 014.264 0c1.537.829 2.576 3.82 4.656 9.8l13.747 39.549a10.223 10.223 0 001.421 3.188 4.489 4.489 0 001.75 1.271 10.222 10.222 0 003.47.366l41.861.853c6.332.129 9.5.194 10.762 1.4a4.492 4.492 0 011.317 4.055c-.313 1.719-2.836 3.631-7.883 7.458l-33.364 25.297a10.254 10.254 0 00-2.593 2.337 4.5 4.5 0 00-.668 2.057 10.241 10.241 0 00.724 3.415l12.125 40.076c1.834 6.062 2.751 9.093 1.994 10.667a4.493 4.493 0 01-3.45 2.506c-1.731.233-4.33-1.576-9.529-5.193l-34.368-23.917a10.258 10.258 0 00-3.022-1.748 4.5 4.5 0 00-2.163 0 10.26 10.26 0 00-3.024 1.745l-34.368 23.918c-5.2 3.618-7.8 5.426-9.529 5.193a4.493 4.493 0 01-3.452-2.506c-.757-1.574.16-4.6 1.994-10.667l12.125-40.076a10.232 10.232 0 00.724-3.415 4.5 4.5 0 00-.668-2.057 10.252 10.252 0 00-2.59-2.335l-33.366-25.3c-5.047-3.827-7.57-5.74-7.884-7.458a4.492 4.492 0 011.318-4.055c1.263-1.206 4.429-1.271 10.761-1.4l41.861-.853a10.228 10.228 0 003.471-.366 4.491 4.491 0 001.754-1.268 10.228 10.228 0 001.421-3.188z"
                                            ></path>
                                            <rect
                                                width="1532"
                                                height="32"
                                                data-name="Rectangle 24"
                                                rx="16"
                                                transform="translate(7695 6792)"
                                            ></rect>
                                            <path
                                                fill="#3273b7"
                                                stroke="#3273b7"
                                                strokeWidth="3"
                                                d="M9899.205 3492.362c.039.039.094.052.133.088a4.01 4.01 0 001.154.775l.026.01h0a3.992 3.992 0 001.55.308 4.033 4.033 0 002.866-1.181l16.215-16.213a4.056 4.056 0 00-5.736-5.736l-9.289 9.3v-61.551a4.053 4.053 0 00-8.106 0h0v61.544l-9.292-9.292a4.056 4.056 0 10-5.732 5.739h0zm48.258 12.533h-90.786a4.053 4.053 0 000 8.106h90.786a4.053 4.053 0 100-8.106z"
                                            ></path>
                                            <g data-name="Group 29" transform="translate(0 23)">
                                                <g data-name="Group 28">
                                                    <g data-name="Group 27">
                                                        <g data-name="Group 26" transform="translate(29 -15)">
                                                            <g data-name="Group 25">
                                                                <g
                                                                    data-name="Path 31"
                                                                    opacity="0.59"
                                                                    transform="translate(10543.631 290.914)"
                                                                >
                                                                    <path
                                                                        fill="#fff"
                                                                        d="M2.494 20.684H.5V.5h1.994a3.917 3.917 0 014.033 3.78V16.9a3.917 3.917 0 01-4.033 3.784z"
                                                                        data-name="Path 32"
                                                                    ></path>
                                                                    <path
                                                                        fill="#fffefe"
                                                                        d="M1 1v19.184h1.494A3.418 3.418 0 006.027 16.9V4.28A3.418 3.418 0 002.494 1H1M0 0h2.494a4.412 4.412 0 014.533 4.28V16.9a4.412 4.412 0 01-4.534 4.28H0z"
                                                                        data-name="Path 33"
                                                                    ></path>
                                                                </g>
                                                                <rect
                                                                    width="16"
                                                                    height="33"
                                                                    fill="#f9f2f2"
                                                                    data-name="Rectangle 36"
                                                                    rx="2"
                                                                    transform="translate(10044 287)"
                                                                ></rect>
                                                                <rect
                                                                    width="16"
                                                                    height="53"
                                                                    fill="#f9f2f2"
                                                                    data-name="Rectangle 38"
                                                                    rx="2"
                                                                    transform="translate(10095 267)"
                                                                ></rect>
                                                                <path
                                                                    fill="#fcfcfc"
                                                                    d="M221.992 434.518l5.228 5.173a1.5 1.5 0 002.047.055 28.431 28.431 0 0137.617 0 1.5 1.5 0 002.047-.055l5.228-5.173a1.46 1.46 0 00-.055-2.139 38.979 38.979 0 00-52.093 0 1.49 1.49 0 00-.019 2.139zm26.1 8.536a14.893 14.893 0 00-10.857 4.661 1.462 1.462 0 00.037 2.047l9.761 9.633a1.5 1.5 0 002.12 0l9.761-9.633a1.462 1.462 0 00.037-2.047 14.964 14.964 0 00-10.857-4.661z"
                                                                    data-name="Path 8"
                                                                    transform="translate(9923.359 -137.089)"
                                                                ></path>
                                                                <text
                                                                    fill="#fff"
                                                                    data-name="50%"
                                                                    fontFamily="Roboto-Regular, Roboto"
                                                                    fontSize="75"
                                                                    transform="translate(10223 323)"
                                                                >
                                                                    <tspan x="0" y="0">
                                                                        50%
                                                                    </tspan>
                                                                </text>
                                                                <g
                                                                    fill="#fff"
                                                                    stroke="#fffefe"
                                                                    strokeWidth="1"
                                                                    data-name="Rectangle 39"
                                                                    transform="translate(10384 271)"
                                                                >
                                                                    <rect
                                                                        width="76"
                                                                        height="57"
                                                                        stroke="none"
                                                                        rx="16"
                                                                    ></rect>
                                                                    <rect
                                                                        width="75"
                                                                        height="56"
                                                                        x="0.5"
                                                                        y="0.5"
                                                                        fill="none"
                                                                        rx="15.5"
                                                                    ></rect>
                                                                </g>
                                                                <g
                                                                    data-name="Path 6"
                                                                    transform="translate(10374.406 260.701)"
                                                                >
                                                                    <path
                                                                        fill="none"
                                                                        d="M25.067 0h116.977c13.844 0 25.067 10.809 25.067 24.142v29.506c0 13.333-11.223 24.141-25.067 24.141H25.067a25.924 25.924 0 01-14.8-4.658A23.662 23.662 0 010 53.648V24.142C0 10.809 11.223 0 25.067 0z"
                                                                        data-name="Path 34"
                                                                    ></path>
                                                                    <path
                                                                        fill="#fffefe"
                                                                        d="M25.067 3a22.751 22.751 0 00-8.625 1.675 22.07 22.07 0 00-7.019 4.557A20.569 20.569 0 003 24.142v29.506a20.662 20.662 0 008.953 17.005 22.917 22.917 0 0013.114 4.136h116.977a22.748 22.748 0 008.625-1.675 22.075 22.075 0 007.019-4.556 20.569 20.569 0 006.423-14.91V24.142a20.569 20.569 0 00-6.423-14.91 22.074 22.074 0 00-7.019-4.556A22.748 22.748 0 00142.044 3H25.067m0-3h116.977c13.844 0 25.067 10.808 25.067 24.141v29.507c0 13.333-11.223 24.141-25.067 24.141H25.067a25.924 25.924 0 01-14.8-4.658A23.662 23.662 0 010 53.648V24.142C0 10.809 11.223 0 25.067 0z"
                                                                        data-name="Path 35"
                                                                    ></path>
                                                                </g>
                                                                <rect
                                                                    width="18"
                                                                    height="24"
                                                                    fill="#f9f2f2"
                                                                    data-name="Rectangle 35"
                                                                    rx="2"
                                                                    transform="translate(10019 296)"
                                                                ></rect>
                                                                <rect
                                                                    width="17"
                                                                    height="43"
                                                                    fill="#f9f2f2"
                                                                    data-name="Rectangle 37"
                                                                    rx="2"
                                                                    transform="translate(10069 277)"
                                                                ></rect>
                                                                <path
                                                                    fill="#fcfcfc"
                                                                    d="M104.848 192a60.424 60.424 0 00-40.486 16.14 1.456 1.456 0 00-.055 2.084l4.88 5.1a1.5 1.5 0 002.12.055 49.521 49.521 0 0167.118 0 1.5 1.5 0 002.12-.055l4.88-5.1a1.457 1.457 0 00-.055-2.084A60.586 60.586 0 00104.848 192z"
                                                                    data-name="Path 7"
                                                                    transform="translate(10066.604 72.255)"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="#3273b7" data-name="Path 36">
                                        <path
                                            d="M4424.397 45.948c-1.778 0-5.118-3.477-8.987-7.505-3.637-3.785-8.162-8.497-13.132-12.173-5.855-4.332-11.215-6.438-16.384-6.438H40.771c-5.169 0-10.528 2.106-16.383 6.437-4.969 3.676-9.495 8.388-13.132 12.174-3.868 4.027-7.21 7.505-8.988 7.505-.337 0-.83-.12-1.216-1.164C.686 43.796.5 42.187.5 40a38.607 38.607 0 013.164-15.372 39.325 39.325 0 018.628-12.555 40.182 40.182 0 0112.8-8.468A40.704 40.704 0 0140.772.5h4345.123a40.706 40.706 0 0115.679 3.105 40.184 40.184 0 0112.8 8.468 39.335 39.335 0 018.629 12.555A38.603 38.603 0 014426.166 40c0 2.186-.186 3.795-.552 4.783-.387 1.044-.88 1.165-1.217 1.165z"
                                            transform="translate(6159 1694)"
                                        ></path>
                                        <path
                                            fill="#707070"
                                            d="M40.77 1c-5.372 0-10.582 1.032-15.486 3.067a39.683 39.683 0 00-12.642 8.363 38.826 38.826 0 00-8.52 12.396A38.106 38.106 0 001 40c0 2.127.175 3.678.52 4.61.311.838.617.838.748.838.44 0 1.355-.34 3.211-1.967 1.54-1.349 3.336-3.219 5.417-5.385 3.649-3.8 8.191-8.528 13.194-12.23 5.944-4.396 11.4-6.534 16.68-6.534h4345.124c5.28 0 10.737 2.138 16.681 6.536 5.004 3.701 9.547 8.43 13.196 12.23 2.08 2.165 3.876 4.035 5.416 5.383 1.855 1.626 2.77 1.967 3.21 1.967.13 0 .436 0 .747-.838.346-.933.52-2.484.52-4.61 0-5.263-1.05-10.368-3.122-15.174a38.834 38.834 0 00-8.52-12.396 39.685 39.685 0 00-12.642-8.363C4396.477 2.032 4391.266 1 4385.894 1H40.771m0-1h4345.123c22.517 0 40.77 17.908 40.77 40 0 22.091-18.253-19.668-40.77-19.668H40.771C18.254 20.332 0 62.096 0 40 0 17.908 18.253 0 40.77 0z"
                                            transform="translate(6159 1694)"
                                        ></path>
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
                                isDarkBg={false}
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
                            <label>Time</label>
                            <input
                                type="text"
                                value={data.statusTime}
                                name="statusTime"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <button className="dateTimeBtn" onClick={() => manageTimeDate()}>Current Date and Time</button>
                        </div>
                        <div className="global_form_inner">
                            <label>Account Number</label>
                            <input
                                type="text"
                                value={data.accountno}
                                name="accountno"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Current Balance</label>
                            <input
                                type="text"
                                value={data.currentBalance}
                                name="currentBalance"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Available Balance</label>
                            <input
                                type="text"
                                value={data.availBalance}
                                name="availBalance"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner" style={{ paddingBottom: "50px" }}>
                            <label>Transaction 1</label>
                            <input
                                type="text"
                                value={data.date1}
                                name="date1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.date1_1}
                                name="date1_1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.description1}
                                name="description1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.description1_1}
                                name="description1_1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount1}
                                name="amount1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.balance1}
                                name="balance1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner" style={{ paddingBottom: "50px" }}>
                            <label>Transaction 2</label>
                            <input
                                type="text"
                                value={data.date2}
                                name="date2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.date2_2}
                                name="date2_2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.description2}
                                name="description2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.description2_2}
                                name="description2_2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount2}
                                name="amount2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.balance2}
                                name="balance2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner" style={{ paddingBottom: "50px" }}>
                            <label>Transaction 3</label>
                            <input
                                type="text"
                                value={data.date3}
                                name="date3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.date3_3}
                                name="date3_3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.description3}
                                name="description3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount3}
                                name="amount3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.balance3}
                                name="balance3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Transaction 4</label>
                            <input
                                type="text"
                                value={data.date4}
                                name="date4"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.date4_4}
                                name="date4_4"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.description4}
                                name="description4"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount4}
                                name="amount4"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.balance4}
                                name="balance4"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default View76;