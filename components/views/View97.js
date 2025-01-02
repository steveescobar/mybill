"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
// import IOSOption from '../options/IOSOption';
import getPicture from "@/utils/getPicture";
import { HelveticaBaseEncoded } from "@/utils/encodedFonts/HelveticaWorld";
import Image from "next/image";
import Page93Icons from "../options/Page93Icons";

const View97 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 97";

    const [data, setData] = useState({

        amount: "518.31 USDT",
        address: "TjHbjW6WhcAwFJnmQHV4g2XVF",
        address2: "7kNAKTEQS",
        network: "TRC20",
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
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="0.5"
                                        x2="0.5"
                                        y2="1"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#002145" stopOpacity="0.902"></stop>
                                        <stop offset="1" stopColor="#002145"></stop>
                                    </linearGradient>
                                    <clipPath id="clip-path">
                                        <path
                                            id="Rectangle_448"
                                            fill="#fff"
                                            d="M0 0h1197.553v209.281H0z"
                                            data-name="Rectangle 448"
                                        ></path>
                                    </clipPath>
                                </defs>
                                <g id="Group_373" data-name="Group 373" transform="translate(-1437 -1294)">
                                    <g id="Group_363" data-name="Group 363" transform="translate(706 1085)">
                                        <g id="Group_188" data-name="Group 188" transform="translate(168 64)">
                                            <g id="Group_187" data-name="Group 187" transform="translate(10 -17)">
                                                <path
                                                    id="Rectangle_75"
                                                    fill="url(#linear-gradient)"
                                                    d="M0 0h1736v3773H0z"
                                                    data-name="Rectangle 75"
                                                    transform="translate(553 162)"
                                                ></path>
                                                <text
                                                    id="Withdrawal_Processing"
                                                    fill="#9d9d9d"
                                                    data-name="Withdrawal Processing"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="61"
                                                    letterSpacing=".1em"
                                                    transform="translate(1421 1428)"
                                                >
                                                    <tspan x="-371.778" y="0">
                                                        Withdrawal Processing
                                                    </tspan>
                                                </text>
                                                <text
                                                    id="Address_Account"
                                                    fill="#b8b8b8"
                                                    data-name="Address/Account"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="49"
                                                    transform="translate(801 1869)"
                                                >
                                                    <tspan x="-190.653" y="0">
                                                        Address/Account
                                                    </tspan>
                                                </text>
                                                <text
                                                    id="TjHbjW6WhcAwFJnmQHV4g2XVF"
                                                    fill="#d6d6d6"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="63"
                                                    transform="translate(2720 1870)"
                                                >
                                                    <tspan x="-475.438" y="0" textAnchor="end">
                                                        {data.address}
                                                    </tspan>
                                                </text>
                                                <text
                                                    id="_7kNAKTEQS"
                                                    fill="#d6d6d6"
                                                    data-name="7kNAKTEQS"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="63"
                                                    transform="translate(2420 1958)"
                                                >
                                                    <tspan x="-173.727" y="0" textAnchor="end">
                                                        {data.address2}
                                                    </tspan>
                                                </text>
                                                <text
                                                    id="TRC20"
                                                    fill="#d6d6d6"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="63"
                                                    transform="translate(2338 2158)"
                                                >
                                                    <tspan x="-94.069" y="0" textAnchor="end">
                                                        {data.network}
                                                    </tspan>
                                                </text>
                                                <text
                                                    id="Platform_Salary"
                                                    fill="#d6d6d6"
                                                    data-name="Platform Salary"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="63"
                                                    transform="translate(2460 2376)"
                                                >
                                                    <tspan x="-216.347" y="0" textAnchor="end">
                                                        {data.remarks}
                                                    </tspan>
                                                </text>
                                                <text
                                                    id="Network"
                                                    fill="#b8b8b8"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="49"
                                                    transform="translate(702 2153)"
                                                >
                                                    <tspan x="-91.54" y="0">
                                                        Network
                                                    </tspan>
                                                </text>
                                                <text
                                                    id="Remarks"
                                                    fill="#b8b8b8"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="49"
                                                    transform="translate(710 2371)"
                                                >
                                                    <tspan x="-96.206" y="0">
                                                        Remarks
                                                    </tspan>
                                                </text>
                                                <text
                                                    id="_518.31_USDT"
                                                    fill="#fff"
                                                    data-name="518.31 USDT"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="177"
                                                    transform="translate(1933 1650)"
                                                >
                                                    <tspan x="-513.24" y="0" textAnchor="middle">
                                                        {data.amount}
                                                    </tspan>
                                                </text>
                                                <path
                                                    id="Rectangle_76"
                                                    fill="#6f6f6f"
                                                    d="M0 0h1654v6H0z"
                                                    data-name="Rectangle 76"
                                                    transform="translate(590 1713)"
                                                ></path>
                                                <path
                                                    id="Rectangle_77"
                                                    fill="#6f6f6f"
                                                    d="M0 0h1677v6H0z"
                                                    data-name="Rectangle 77"
                                                    transform="translate(578 3724)"
                                                ></path>
                                                <text
                                                    id="_2024_integrityhome.com._All_rights_reserved."
                                                    fill="#efefef"
                                                    data-name="© 2025 integrityhome.com. All rights reserved."
                                                    fontFamily="Roboto-Light, Roboto"
                                                    fontSize="61"
                                                    fontWeight="300"
                                                    transform="translate(1421 3819)"
                                                >
                                                    <tspan x="-618.161" y="0">
                                                        © 2025 integrityhome.com. All rights reserved.
                                                    </tspan>
                                                </text>
                                                <text
                                                    id="Conditions_of_Use_-Privacy_Policy_-_Legal_Terms"
                                                    fill="#efefef"
                                                    data-name="Conditions of Use -Privacy Policy - Legal Terms"
                                                    fontFamily="Roboto-Light, Roboto"
                                                    fontSize="61"
                                                    fontWeight="300"
                                                    transform="translate(1421 3901)"
                                                >
                                                    <tspan x="-624.088" y="0">
                                                        Conditions of Use -Privacy Policy - Legal Terms
                                                    </tspan>
                                                </text>
                                                <text
                                                    id="Estimated_completion_time_:_2023-8-26_15:30:35"
                                                    fill="#efefef"
                                                    data-name="Estimated completion time : 2023-8-26 15:30:35"
                                                    fontFamily="Roboto-Light, Roboto"
                                                    fontSize="55"
                                                    fontWeight="300"
                                                    letterSpacing=".148em"
                                                    transform="translate(2184 3093)"
                                                >
                                                    <tspan x="-758.394" y="0" textAnchor="middle">
                                                        Estimated completion time : {data.time}
                                                    </tspan>
                                                </text>
                                                <text
                                                    id="You_will_receive_your_payment_once"
                                                    fill="#efefef"
                                                    data-name="You will receive your payment once"
                                                    fontFamily="Roboto-Light, Roboto"
                                                    fontSize="55"
                                                    fontWeight="300"
                                                    letterSpacing=".148em"
                                                    transform="translate(1447 3223)"
                                                >
                                                    <tspan x="-554.921" y="0">
                                                        You will receive your payment once
                                                    </tspan>
                                                </text>
                                                <text
                                                    id="withdrawal_is_completed"
                                                    fill="#efefef"
                                                    data-name="withdrawal is completed"
                                                    fontFamily="Roboto-Light, Roboto"
                                                    fontSize="55"
                                                    fontWeight="300"
                                                    letterSpacing=".148em"
                                                    transform="translate(1461 3312)"
                                                >
                                                    <tspan x="-382.05" y="0">
                                                        withdrawal is completed
                                                    </tspan>
                                                </text>
                                                <path
                                                    id="Line_1"
                                                    fill="#0046d1"
                                                    d="M0 .892 1.15 0"
                                                    data-name="Line 1"
                                                    transform="translate(1184.7 722)"
                                                ></path>
                                            </g>
                                        </g>
                                    </g>
                                    <g
                                        id="Your-Integrity-Homes-Logo"
                                        clipPath="url(#clip-path)"
                                        transform="translate(1706.223 1974)"
                                    >
                                        <path
                                            id="Path_233"
                                            fill="#fff"
                                            d="M89.428 3.706c-6.674 0-8.264 4.833-8.264 10.309l-.954 92.14c0 5.155 2.543 10.309 7.628 10.309v2.9a198 198 0 0 0-27.651 0v-3.222c14.938 4.188 6.039-96.651 6.674-102.45 0-5.155-1.907-10.309-8.264-10.309V.484a251 251 0 0 0 31.147 0v3.222Z"
                                            data-name="Path 233"
                                            transform="translate(175.318 1.449)"
                                        ></path>
                                        <path
                                            id="Path_234"
                                            fill="#fff"
                                            d="M83.816.484h3.814c9.853 12.242 75.642 80.542 87.719 93.429V37.856c0-29.64-1.907-32.217-13.031-34.15V.484a246 246 0 0 0 30.829 0v2.9c-8.9 2.255-11.125 4.51-11.125 13.209v102.128h-3.812L92.08 28.513v65.078c0 17.719 1.907 20.3 11.759 22.552v2.9a241 241 0 0 0-30.511 0v-2.9c8.581-2.255 10.488-4.51 10.488-13.209Z"
                                            data-name="Path 234"
                                            transform="translate(219.386 1.449)"
                                        ></path>
                                        <path
                                            id="Path_235"
                                            fill="#fff"
                                            d="M129.416 9.665c-10.806 0-14.618 2.9-17.48 11.92h-2.858L108.439 0a470 470 0 0 0 104.247 0l-.635 21.585h-2.862c-2.543-17.4-28.921-10.632-41-11.92l-.639 97.617c0 6.121 2.543 8.054 11.125 10.309v2.9a340 340 0 0 0-36.23 0v-2.9c9.213-2.255 11.441-3.866 11.441-10.309l-.635-97.617Z"
                                            data-name="Path 235"
                                            transform="translate(324.433)"
                                        ></path>
                                        <path
                                            id="Path_236"
                                            fill="#fff"
                                            d="M214.577 20.619h-2.862c-.954-16.431-35.6-11.276-47.99-11.92-1.589 12.242-1.269 34.15-1.269 48.325 9.533-1.933 42.27 5.8 43.539-8.7h2.862a137.6 137.6 0 0 0 0 22.874h-2.862c-1.908-14.175-34.007-6.765-43.539-8.376v51.548c13.029-1.611 49.259 6.122 53.391-11.6l2.543.644-2.543 18.364c-12.075-2.9-61.973-.966-76.276-1.611v-2.578c6.994-.322 9.537-2.577 9.537-10.309V59.924c0-52.514-.639-54.125-9.537-54.447v-2.9c2.543-1.289 74.053 2.9 72.145-2.577h2.862Z"
                                            data-name="Path 236"
                                            transform="translate(417.572)"
                                        ></path>
                                        <path
                                            id="Path_237"
                                            fill="#fff"
                                            d="M227.693 29.861a47 47 0 0 0-6.674.644c2.223 0 4.451.322 6.674.322Z"
                                            data-name="Path 237"
                                            transform="translate(661.255 89.34)"
                                        ></path>
                                        <path
                                            id="Path_238"
                                            fill="#fff"
                                            d="M199.363 35.254v2.9a221 221 0 0 1 29.24 0v-2.9c-3.816.322-6.04-2.578-7.309-7.088-4.451-.322-9.217-.644-14.3-.644a7.68 7.68 0 0 1-2.208 5.5 7.5 7.5 0 0 1-2.487 1.673 7.4 7.4 0 0 1-2.936.559"
                                            data-name="Path 238"
                                            transform="translate(596.463 82.34)"
                                        ></path>
                                        <path
                                            id="Path_239"
                                            fill="#fff"
                                            d="m208.658 60.421.315 35.439 12.714.966c0-11.6 1.589-25.129.635-29 12.714.322 26.063 19.974 36.549 33.828l21.612 3.866c-12.71-13.527-28.921-35.112-33.683-39.62 14.3-3.544 28.286-14.82 28.286-30.606 0-41.238-47.99-35.116-76.276-34.15v3.219c17.157.967 6.67 40.594 9.848 56.058m13.983-49.292c0-5.477 1.269-5.8 7.944-5.8 45.451 0 34.326 69.266-8.579 57.024.001-14.819.001-36.404.635-51.224"
                                            data-name="Path 239"
                                            transform="translate(594.797 .792)"
                                        ></path>
                                        <path
                                            id="Path_240"
                                            fill="#fff"
                                            d="M235.731 13.693c-2.543 5.155 5.72 81.509-1.589 98.906a123 123 0 0 1 15.572-4.188c0-.644-.315-1.611-.315-2.255l.954-92.14c0-5.477 1.589-10.309 8.263-10.309h-.316V.484a246 246 0 0 1-30.829 0v2.9c6.356 0 8.26 5.155 8.26 10.309"
                                            data-name="Path 240"
                                            transform="translate(680.549 1.449)"
                                        ></path>
                                        <path
                                            id="Path_241"
                                            fill="#fff"
                                            d="M234.315 30.748a5.4 5.4 0 0 1 2.227.322v-.97a5.8 5.8 0 0 0-2.227.648"
                                            data-name="Path 241"
                                            transform="translate(701.034 90.065)"
                                        ></path>
                                        <path
                                            id="Path_242"
                                            fill="#fff"
                                            d="M261.5 9.665c-10.806 0-14.618 2.9-17.48 11.92h-2.858L240.525 0a470 470 0 0 0 104.247 0l-.635 21.585h-2.862c-2.543-17.4-28.921-10.632-41-11.92l-.639 97.617c0 6.121 2.543 8.054 11.125 10.309v2.9a340 340 0 0 0-36.234 0v-2.9c9.217-2.255 11.445-3.866 11.445-10.309l-.635-97.617Z"
                                            data-name="Path 242"
                                            transform="translate(719.614)"
                                        ></path>
                                        <path
                                            id="Path_243"
                                            fill="#fff"
                                            d="M313.767 64.274c-7.944-9.987-29.875-57.346-42.589-60.89v-2.9a251 251 0 0 0 31.148 0v2.9c-6.994 1.611-7.309 5.477-3.816 11.6l24.155 41.56 25.109-40.271c4.451-7.088 6.04-12.242-1.589-12.887V.484a176 176 0 0 0 26.063 0v2.9C355.4 11.438 337.922 44.3 327.116 61.052v44.781c0 5.155 2.223 10.309 8.263 10.309v2.9a236 236 0 0 0-30.194 0v-2.9c6.359 0 8.582-4.833 8.582-10.309Z"
                                            data-name="Path 243"
                                            transform="translate(811.323 1.449)"
                                        ></path>
                                        <path
                                            id="Path_244"
                                            fill="#fff"
                                            d="M243.41 34.93c0-1.289 0-4.188-.319-7.732h-14.3c-3.177 6.444-16.526 8.376-22.247 8.054A51.4 51.4 0 0 1 185.564 33a64 64 0 0 0-11.121 3.544c17.796 6.763 40.681 7.729 68.967-1.614"
                                            data-name="Path 244"
                                            transform="translate(521.906 81.373)"
                                        ></path>
                                        <path
                                            id="Path_245"
                                            fill="#fff"
                                            d="M186.621 22.592c7.948-.966 8.263 6.121 7.948 13.209a47 47 0 0 1 9.533 0h2.862c0-7.732 1.589-14.5 7.309-13.209v-2.9a202.6 202.6 0 0 1-27.967 0v2.9Z"
                                            data-name="Path 245"
                                            transform="translate(557.399 58.917)"
                                        ></path>
                                        <path
                                            id="Path_246"
                                            fill="#fff"
                                            d="M192.287 110.586a44.2 44.2 0 0 1 9.533-4.833C167.813 77.4 173.533 4.27 229.79 4.592c18.115 0 29.24 6.443 32.733 16.753l2.862.644V1.692L260.3 3.948c-101.7-23.841-120.138 72.165-68.013 106.638"
                                            data-name="Path 246"
                                            transform="translate(490.714 .564)"
                                        ></path>
                                        <path
                                            id="Path_247"
                                            fill="#a5acaf"
                                            d="M24.264 36.811a7.41 7.41 0 0 0-5.93 1.016 7.6 7.6 0 0 0-2.17 2.2 7.7 7.7 0 0 0-1.117 2.9 1.95 1.95 0 0 1-.318 1.289v40.276h2.861V46.476a4.5 4.5 0 0 1 .432-1.721 4.4 4.4 0 0 1 1.066-1.409 4.31 4.31 0 0 1 3.27-1.058h.635c7.946-1.933 2.543 39.3 4.132 42.526h4.45V44.221a8.3 8.3 0 0 0-2.345-5.033 8.1 8.1 0 0 0-4.966-2.377"
                                            data-name="Path 247"
                                            transform="translate(44.067 109.454)"
                                        ></path>
                                        <path
                                            id="Path_248"
                                            fill="#a5acaf"
                                            d="M18.054 36.811a7.41 7.41 0 0 0-5.93 1.016 7.55 7.55 0 0 0-2.17 2.2 7.7 7.7 0 0 0-1.117 2.9 1.95 1.95 0 0 1-.318 1.289v40.276h2.86V46.476a4.5 4.5 0 0 1 .432-1.721 4.4 4.4 0 0 1 1.066-1.409 4.31 4.31 0 0 1 3.27-1.058h.635c7.946-1.933 2.543 39.3 4.132 42.526h4.45V44.221a7.56 7.56 0 0 0-2.164-5.212 7.35 7.35 0 0 0-5.146-2.198"
                                            data-name="Path 248"
                                            transform="translate(25.488 109.454)"
                                        ></path>
                                        <path
                                            id="Path_249"
                                            fill="#a5acaf"
                                            d="M11.843 36.774a7.92 7.92 0 0 0-6.105 1.186A8.1 8.1 0 0 0 3.5 40.238a8.2 8.2 0 0 0-1.191 2.98v41.237h3.178V46.439a4.5 4.5 0 0 1 .432-1.721 4.4 4.4 0 0 1 1.066-1.409 4.32 4.32 0 0 1 3.27-1.058h.636c7.946-1.933 2.543 39.3 4.132 42.526h4.45V44.184A8.32 8.32 0 0 0 17 39.06a8.12 8.12 0 0 0-5.157-2.286"
                                            data-name="Path 249"
                                            transform="translate(6.908 109.492)"
                                        ></path>
                                        <path
                                            id="Path_250"
                                            fill="#a5acaf"
                                            d="M126.811 47.528c.954-10.631 7.946-8.7 9.217-18.364H174.8V3.713H0V9.19h168.764v14.175H0v29.962h117.912c63.565-.966 71.51 99.551 5.085 101.161-47.038.322-50.534-72.81-2.225-73.777a26.7 26.7 0 0 1 10.343 2.076 27 27 0 0 1 8.769 5.935 27.4 27.4 0 0 1 5.855 8.889 27.7 27.7 0 0 1 2.048 10.485c1.271 28.351-44.177 33.183-44.5 3.222-.318-18.364 28.6-19.652 28.6-.966.318 10.631-16.527 11.6-16.527.644-.636-3.222 5.085-6.444 6.356-3.222-.636-8.7-12.713-4.188-12.077 2.9 0 18.364 28.286 16.43 27.65-1.289-.318-26.1-40.364-21.263-39.092 3.222 1.271 37.694 57.208 27.384 54.983-6.765C143.338 39.151 46.4 84.577 0 80.711v48.326h79.773a39 39 0 0 0 3.5 8.376c-1.907-.644-.636 44.46-.954 45.748h2.861V142.89a2.93 2.93 0 0 1 .318-1.611 70.6 70.6 0 0 0 6.357 7.41v34.15h7.628v-28.673a39.4 39.4 0 0 0 6.356 3.222v25.451h7.628v-23.2c74.684 10.635 84.218-99.869 13.344-112.111m-111.555.966a26.64 26.64 0 0 1-6.674-19.33H21.93a26.8 26.8 0 0 1-1.414 10.348 26.5 26.5 0 0 1-5.261 8.982Zm24.154 0a28.66 28.66 0 0 1-6.674-19.33h13.348a26.75 26.75 0 0 1-1.414 10.348 26.5 26.5 0 0 1-5.26 8.982m24.472 0a26.64 26.64 0 0 1-6.674-19.33h13.349a28.66 28.66 0 0 1-6.675 19.33m24.154 0a28.66 28.66 0 0 1-6.674-19.33h13.349a28.66 28.66 0 0 1-6.674 19.33Zm24.155 0a26.64 26.64 0 0 1-6.674-19.33h13.349a26.64 26.64 0 0 1-6.674 19.33ZM66.107 76.2H105.2c-3.5 5.8-50.852 2.9-56.572 3.544 5.719-.966 11.758-2.254 17.479-3.544m-50.534 45.1H8.581v-7.088h6.992Zm-5.085-27.7h14.938a21.2 21.2 0 0 1-1.6 9.983 20.9 20.9 0 0 1-6.026 8.057 21.55 21.55 0 0 1-5.783-8.135 21.8 21.8 0 0 1-1.529-9.905m16.845 27.7h-6.992v-7.088h6.992Zm11.759 0H32.1v-7.088h6.992Zm-5.085-27.7h14.937a21.2 21.2 0 0 1-1.6 9.983 20.9 20.9 0 0 1-6.028 8.059 22.55 22.55 0 0 1-5.678-8.178 22.8 22.8 0 0 1-1.631-9.864m16.845 27.7h-6.675v-7.088h6.992Zm12.077 0h-6.992v-7.088h6.992Zm-5.403-27.7h15.255a21.2 21.2 0 0 1-1.6 9.983 20.9 20.9 0 0 1-6.028 8.059 22.34 22.34 0 0 1-5.872-8.127 22.6 22.6 0 0 1-1.755-9.915m17.162 27.7H67.7v-7.088h6.992ZM8.581 89.088v-3.544h81.362a16.8 16.8 0 0 0-3.178 3.544Z"
                                            data-name="Path 250"
                                            transform="translate(0 11.108)"
                                        ></path>
                                        <path
                                            id="Path_251"
                                            fill="#75c93d"
                                            d="M291.958 43.816C280.2 27.385 212.181 49.937 212.5 75.711c10.172 24.489 76.916-11.598 79.458-31.895m-5.4-.644c-6.04 12.886-57.842 41.56-62.612 37.694-5.406-10.31 62.607-45.104 62.607-37.694Z"
                                            data-name="Path 251"
                                            transform="translate(635.766 114.368)"
                                        ></path>
                                        <path
                                            id="Path_252"
                                            fill="#75c93d"
                                            d="M480.352 52.578c5.086-4.188 34.007-9.343 34.007-14.5-5.72-5.155-19.388-.644-25.424 2.255-15.257 10.312-18.435 15.467-41.32 25.776-10.806.644-24.47 12.887-35.911 16.43-31.148 12.243-38.457 1.289-5.086-17.4 5.086 1.289 22.247 0 33.687-5.155 12.395-4.833 11.441-14.82-1.269-14.5C405.03 41.946 365.3 83.828 333.2 87.695c3.177-11.276 44.493-22.552 43.858-36.727-9.533-12.565-36.23 1.611-48.625 6.765 13.029-25.773-41.635-2.255-52.76 3.544a178.4 178.4 0 0 1 24.155-13.531l-.319-1.289c-14.3-7.41-95.026 38.016-64.2 45.426C250.885 76.1 302.372 49.678 319.533 50c-5.72 7.732-69.6 31.895-41 42.2 17.8-15.464 65.47-40.593 86.128-41.882-9.217 8.054-34.326 18.041-42.9 27.062-7.309 6.766-6.359 11.6 1.27 14.175 15.572 3.222 34.006-7.088 48.944-14.82-6.674 23.84 33.691 13.853 47.355 6.766-.635 16.43 36.549 5.155 44.178 4.51 5.4-2.578 37.5-10.31 41-19.331-9.217.323-18.115 9.343-34.641 13.853 18.114-11.269 3.811-19.324 10.485-29.955m-6.674 3.866c-10.487 27.707-65.155 40.916-44.178 23.84 6.04-2.9 19.069-4.833 21.931-10.954a222 222 0 0 0 22.247-12.886m-41 .322a68 68 0 0 1-22.566 6.765c12.714-8.698 50.217-22.874 22.565-6.765Z"
                                            data-name="Path 252"
                                            transform="translate(683.195 106.897)"
                                        ></path>
                                        <path
                                            id="Path_253"
                                            fill="#75c93d"
                                            d="M399.221 83.187c34.007-21.907 84.22-57.99 125.855-37.372 1.908-.644 1.593-2.255.319-3.866-56.253-20.618-119.819 21.908-164.632 50.581 2.543-7.088-1.589-12.564-5.72-16.753 36.549-23.518 54.664-35.439 77.23-32.861 1.589-1.611.954-1.933-4.451-3.544-37.5-7.41-67.378-13.531-129.671-14.82-36.865-.644-106.786 11.92-81.362 43.171-149.689 62.501 2.543 110.827 134.757 10.31 6.674 6.766 6.994 13.209.954 20.619-13.349 10.309-25.743 22.552-12.395 27.707 20.339-10.31 36.869-30.607 59.116-43.172M289.573 61.6c22.562.322 39.727 3.221 48.944 8.376-178.3 130.159-268.244 18.689-48.944-8.376m1.589-3.222a269.5 269.5 0 0 0-69.921 8.054C195.5 42.594 261.6 31.64 297.516 31.962a807 807 0 0 1 118.23 8.054c-27.967 3.866-55.3 17.4-74.053 28.029-10.485-5.798-27.016-9.02-50.532-9.665Z"
                                            data-name="Path 253"
                                            transform="translate(463.349 73.388)"
                                        ></path>
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

export default View97