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

const View100 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 100";

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
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="0.5"
                                        x2="0.5"
                                        y2="1"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0"></stop>
                                        <stop offset="1" stopColor="#1a1a1a" stopOpacity="0.902"></stop>
                                    </linearGradient>
                                </defs>
                                <g id="Group_381" data-name="Group 381" transform="translate(-5063 -1120)">
                                    <path
                                        id="Rectangle_75"
                                        fill="url(#linear-gradient)"
                                        d="M0 0h1736v3773H0z"
                                        data-name="Rectangle 75"
                                        transform="translate(5063 1120)"
                                    ></path>
                                    <text
                                        id="Withdrawal_Processing"
                                        fill="#9d9d9d"
                                        data-name="Withdrawal Processing"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="61"
                                        letterSpacing=".1em"
                                        transform="translate(5931 2386)"
                                    >
                                        <tspan x="-371.778" y="0">
                                            Redemption Processing
                                        </tspan>
                                    </text>
                                    <text
                                        id="Address_Account"
                                        fill="#b8b8b8"
                                        data-name="Address/Account"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="49"
                                        transform="translate(5311 2827)"
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
                                        transform="translate(7225 2828)"
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
                                        transform="translate(6925 2916)"
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
                                        transform="translate(6847 3116)"
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
                                        transform="translate(6966 3334)"
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
                                        transform="translate(5212 3111)"
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
                                        transform="translate(5220 3329)"
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
                                        transform="translate(6442.5 2608)"
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
                                        transform="translate(5100 2671)"
                                    ></path>
                                    <path
                                        id="Rectangle_77"
                                        fill="#6f6f6f"
                                        d="M0 0h1677v6H0z"
                                        data-name="Rectangle 77"
                                        transform="translate(5088 4682)"
                                    ></path>
                                    <text
                                        id="_2024_Vestiaire_Collective._All_rights_reserved."
                                        fill="#efefef"
                                        data-name="© 2025 Vestiaire Collective. All rights reserved."
                                        fontFamily="Roboto-Light, Roboto"
                                        fontSize="61"
                                        fontWeight="300"
                                        transform="translate(5931 4777)"
                                    >
                                        <tspan x="-618.206" y="0">
                                            © 2025 Vestiaire Collective. All rights reserved.
                                        </tspan>
                                    </text>
                                    <text
                                        id="Conditions_of_Use_-Privacy_Policy_-_Legal_Terms"
                                        fill="#efefef"
                                        data-name="Conditions of Use -Privacy Policy - Legal Terms"
                                        fontFamily="Roboto-Light, Roboto"
                                        fontSize="61"
                                        fontWeight="300"
                                        transform="translate(5931 4859)"
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
                                        transform="translate(6693 4051)"
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
                                        transform="translate(5957 4181)"
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
                                        transform="translate(5971 4270)"
                                    >
                                        <tspan x="-382.05" y="0">
                                            redemption is completed
                                        </tspan>
                                    </text>
                                    <path
                                        id="Line_1"
                                        fill="#0046d1"
                                        d="M0 .892 1.15 0"
                                        data-name="Line 1"
                                        transform="translate(5694.7 1680)"
                                    ></path>
                                    <path
                                        id="Path_255"
                                        fill="#fff"
                                        d="M233.309 11.392a7.42 7.42 0 0 1 5.1-2.34c6.49 0 9.735 11.231 9.735 22.462-1.853.468-7.881 1.4-21.785 1.872.461-7.956 2.32-16.847 6.95-21.994m37.542 49.136a27.22 27.22 0 0 1-19 7.487c-16.219 0-25.492-11.231-25.492-32.289h43.564c.462-.936.462-2.34.462-5.148 0-13.571-10.659-24.8-30.584-24.8-20.855 0-38.465 17.315-38.465 42.117 0 20.59 13.442 37.437 34.759 37.437 17.148 0 28.269-9.827 35.22-24.334Z"
                                        data-name="Path 255"
                                        transform="translate(6314.525 1775.957)"
                                    ></path>
                                    <path
                                        id="Path_256"
                                        fill="#fff"
                                        d="M273.8 6.776v-.468h-28.728v.468l3.707 2.34c3.707 1.872 6.022 4.212 6.022 6.084 0 2.808-3.707 14.975-6.022 21.994L242.75 54.04h-.462l-13.9-37.905a11.3 11.3 0 0 1-.93-4.68c0-1.4.93-1.872 4.637-2.808l4.169-.936v-1.4H188.99v1.4l2.783.936c4.169.936 5.1 1.4 7.414 7.019l28.737 65.515h6.952l25.484-59.43c3.245-7.487 5.1-8.891 9.273-12.167Z"
                                        data-name="Path 256"
                                        transform="translate(6250.861 1778.701)"
                                    ></path>
                                    <path
                                        id="Path_257"
                                        fill="#fff"
                                        d="M215.895 78.158V20.6c0-1.4 0-8.423.468-14.507l-.468-.468-33.367 11.23v.468l4.636 5.616c1.392 1.872 1.392 3.276 1.392 6.084v49.6c0 2.34-.462 2.808-4.175 3.744l-2.315.468v1.4h40.781v-1.4l-2.315-.468c-4.637-1.4-4.637-1.872-4.637-4.212"
                                        data-name="Path 257"
                                        transform="translate(6215.152 1775.174)"
                                    ></path>
                                    <path
                                        id="Path_258"
                                        fill="#fff"
                                        d="M197.721 27.914c8.811 0 15.295-6.551 15.295-14.039A13.617 13.617 0 0 0 199.113.3c-9.267 0-16.219 7.019-16.219 14.039 0 7.487 6.952 13.571 14.827 13.571"
                                        data-name="Path 258"
                                        transform="translate(6219.422 1747.736)"
                                    ></path>
                                    <path
                                        id="Path_259"
                                        fill="#fff"
                                        d="M219.643 83.606c-3.245 0-6.49-.468-8.343-2.34s-2.783-4.68-2.783-8.891V34.938h20.855l1.853-12.167h-22.708l.462-19.654h-.462c-9.267 8.423-22.709 19.654-36.612 29.95v1.872h9.273v41.647c0 7.955 1.385 13.1 5.56 17.315 3.707 3.744 9.267 5.616 17.148 5.616 14.365 0 23.632-8.423 29.192-19.187l-.462-.468a27.4 27.4 0 0 1-12.974 3.744"
                                        data-name="Path 259"
                                        transform="translate(6162.748 1762.238)"
                                    ></path>
                                    <path
                                        id="Path_260"
                                        fill="#fff"
                                        d="M196.534 9.128c1.392 0 1.854.468 2.783 2.34l10.2 18.719c2.315 4.212 3.707 4.68 6.022 4.68 5.56 0 12.512-4.68 12.512-12.635 0-9.827-11.12-16.379-26.415-16.379-25.485 0-41.242 19.654-41.242 41.649 0 20.122 12.974 37.437 35.22 37.437 14.365 0 25.485-7.487 31.975-21.058l-.462-.468a21.5 21.5 0 0 1-16.219 6.551c-15.757 0-25.954-13.571-25.954-33.225-.462-17.783 6.49-27.61 11.582-27.61"
                                        data-name="Path 260"
                                        transform="translate(6103.359 1776.35)"
                                    ></path>
                                    <path
                                        id="Path_261"
                                        fill="#fff"
                                        d="M179.8 11.392a7.42 7.42 0 0 1 5.1-2.34c6.484 0 9.729 11.231 9.729 22.462-1.853.468-7.875 1.4-21.779 1.872.462-7.956 2.315-16.847 6.95-21.994m37.536 49.136a27.2 27.2 0 0 1-19 7.487c-16.219 0-25.486-11.231-25.486-32.289h43.564c.462-.936.462-2.34.462-5.148 0-13.571-10.658-24.8-30.59-24.8-20.849 0-38.465 17.315-38.465 42.117 0 20.59 13.442 37.437 34.759 37.437 17.148 0 28.275-9.827 35.227-24.334Z"
                                        data-name="Path 261"
                                        transform="translate(6038.531 1775.957)"
                                    ></path>
                                    <path
                                        id="Path_262"
                                        fill="#fff"
                                        d="M174.65 107.164V14.507c0-1.4 0-8.423.462-14.507h-.462l-33.367 10.763v.468l4.637 5.616c1.392 1.872 1.392 3.276 1.392 6.084v84.233c0 2.34-.468 2.808-4.175 3.744l-2.315.468v1.4H181.6v-1.4l-2.315-.468c-4.175-.936-4.636-1.4-4.636-3.744"
                                        data-name="Path 262"
                                        transform="translate(6002.434 1746.168)"
                                    ></path>
                                    <path
                                        id="Path_263"
                                        fill="#fff"
                                        d="M166.887 107.164V14.507c0-1.4 0-8.423.462-14.507l-33.367 10.763v.468l4.637 5.616c1.392 1.872 1.392 3.276 1.392 6.084v84.233c0 2.34-.462 2.808-4.175 3.744l-2.315.468v1.4H174.3v-1.4l-2.315-.468c-4.169-.936-5.1-1.4-5.1-3.744"
                                        data-name="Path 263"
                                        transform="translate(5964.78 1746.168)"
                                    ></path>
                                    <path
                                        id="Path_264"
                                        fill="#fff"
                                        d="M168.323 76.982c-.93 2.34-2.783 5.148-6.49 5.148-8.343 0-12.98-19.187-12.98-39.309 0-9.827.468-21.526 4.175-28.546.924-2.34 2.777-5.148 6.484-5.148 8.343 0 12.98 19.187 12.98 39.309 0 9.827-.93 21.526-4.169 28.546m-6.952-71.13c-12.518 0-22.247 4.212-30.128 12.167a40.89 40.89 0 0 0-11.12 28.081c0 20.122 14.365 38.841 39.389 38.841 12.518 0 22.247-4.212 30.128-12.167a40.89 40.89 0 0 0 11.12-28.078c0-19.654-14.365-38.841-39.389-38.841"
                                        data-name="Path 264"
                                        transform="translate(5895.686 1776.35)"
                                    ></path>
                                    <path
                                        id="Path_265"
                                        fill="#fff"
                                        d="M178.276 100.284c-6.022 6.084-11.12 8.891-16.687 8.891-16.68 0-27.339-24.334-27.339-55.22 0-35.1 12.05-50.54 25.953-50.54 6.022 0 10.191 1.872 16.219 7.955 6.49 6.551 12.512 16.379 20.393 30.418h1.385c-.462-10.763-1.853-29.95-2.777-40.713h-.93L193.1 2.948c-.924 1.4-1.385 1.872-2.777 1.872-2.783 0-17.61-4.212-28.737-4.212-38 0-58.853 25.27-58.853 57.092 0 35.1 23.632 54.752 57.467 54.752 8.805 0 23.17-2.808 37.074-9.359.924-1.872 4.169-24.8 4.63-36.033l-.924-.468c-8.805 15.911-16.219 27.142-22.709 33.693"
                                        data-name="Path 265"
                                        transform="translate(5806.02 1749.305)"
                                    ></path>
                                    <path
                                        id="Path_266"
                                        fill="#fff"
                                        d="M118.833 11.392a7.4 7.4 0 0 1 5.1-2.34c6.488 0 9.732 11.231 9.732 22.462-1.854.468-7.878 1.4-21.782 1.872.462-7.956 2.317-16.847 6.95-21.994m37.539 49.136a27.21 27.21 0 0 1-19 7.487c-16.22 0-25.489-11.231-25.489-32.289h43.564c.463-.936.463-2.34.463-5.148 0-13.571-10.659-24.8-30.587-24.8-20.855 0-38.465 17.315-38.465 42.117 0 20.59 13.44 37.437 34.758 37.437 17.147 0 28.27-9.827 35.221-24.334Z"
                                        data-name="Path 266"
                                        transform="translate(5724.113 1775.957)"
                                    ></path>
                                    <path
                                        id="Path_267"
                                        fill="#fff"
                                        d="M118.266 30.274c3.244 0 9.732 1.872 16.684 5.616a26.53 26.53 0 0 0 6.95-17.783c0-6.084-3.244-11.231-10.2-11.231-8.342 0-17.147 9.827-21.318 25.27l-.927-.468.464-13.1c0-2.808.463-6.084.927-12.635l-.464-.468L76.557 16.7v.468l4.634 5.616c1.39 1.4 1.39 3.276 1.39 6.084v49.6c0 2.34-.463 2.808-4.17 3.744l-2.318.468v1.4h44.027v-1.4l-5.1-.468c-4.171-.468-4.635-.936-4.635-3.744V37.294c1.39-3.744 3.708-7.019 7.878-7.019"
                                        data-name="Path 267"
                                        transform="translate(5668.605 1774.389)"
                                    ></path>
                                    <path
                                        id="Path_268"
                                        fill="#fff"
                                        d="M102.849 77.766V20.207c0-1.4 0-8.423.463-14.507h-.463L69.482 16.463v.468l4.634 5.616c1.39 1.872 1.39 3.276 1.39 6.084v49.6c0 2.34-.463 2.808-4.171 3.744l-2.317.468v1.4H109.8v-1.4l-2.317-.468c-4.171-1.4-4.634-1.872-4.634-4.212"
                                        data-name="Path 268"
                                        transform="translate(5632.117 1775.564)"
                                    ></path>
                                    <path
                                        id="Path_269"
                                        fill="#fff"
                                        d="M84.676 27.914c8.806 0 15.294-6.551 15.294-14.039A13.62 13.62 0 0 0 86.066.3c-9.266 0-16.22 7.023-16.22 14.043 0 7.487 6.952 13.571 14.83 13.571"
                                        data-name="Path 269"
                                        transform="translate(5636.387 1747.736)"
                                    ></path>
                                    <path
                                        id="Path_270"
                                        fill="#fff"
                                        d="M94.914 72.227a6.88 6.88 0 0 1-4.635 1.4c-4.171 0-7.878-4.212-7.878-11.7 0-4.212.927-7.019 3.244-9.359s4.17-3.276 8.805-6.084v25.743Zm38 .936c-2.317 1.4-3.707 1.872-5.1 1.872a7.43 7.43 0 0 1-4.171-1.4c-1.39-1.4-2.317-3.276-2.317-8.423v-36.5c0-7.487-.927-13.1-5.1-17.315-3.708-3.744-9.732-5.616-17.611-5.616-12.97-.005-27.8 9.819-35.215 17.31-4.17 4.212-6.024 7.487-6.024 10.3 0 3.744 2.781 6.084 9.269 6.084 5.1 0 12.512-1.872 15.757-3.744l-4.635-16.384c1.853-1.872 3.707-2.34 6.488-2.34s5.561.468 6.951 2.34c2.318 1.872 3.244 7.019 3.244 17.315v7.955l-12.976 4.212c-13.44 4.68-18.074 6.551-21.318 10.3a12.85 12.85 0 0 0-3.707 8.891c0 8.423 6.024 16.379 16.683 16.379 7.415 0 12.049-2.808 19-8.891l2.317-1.872h.464c2.781 7.019 8.805 11.231 17.147 11.231 10.659 0 18.538-7.487 21.318-11.7Z"
                                        data-name="Path 270"
                                        transform="translate(5567.292 1775.957)"
                                    ></path>
                                    <path
                                        id="Path_271"
                                        fill="#fff"
                                        d="M83.055 78.158V20.6c0-1.4 0-8.423.463-14.507l-.463-.468-33.368 10.762v.468l4.634 5.616c1.39 1.872 1.39 3.276 1.39 6.084v49.6c0 2.34-.463 2.808-4.171 3.744l-2.317.468v1.4h41.246v-1.4l-2.317-.467c-5.1-.936-5.1-1.4-5.1-3.744"
                                        data-name="Path 271"
                                        transform="translate(5530.027 1775.174)"
                                    ></path>
                                    <path
                                        id="Path_272"
                                        fill="#fff"
                                        d="M64.881 27.914c8.806 0 15.294-6.551 15.294-14.039A13.62 13.62 0 0 0 66.272.3C57 .3 50.051 7.323 50.051 14.343c0 7.487 6.952 13.571 14.83 13.571"
                                        data-name="Path 272"
                                        transform="translate(5534.297 1747.736)"
                                    ></path>
                                    <path
                                        id="Path_273"
                                        fill="#fff"
                                        d="M86.408 84c-3.244 0-6.488-.468-8.341-2.34s-2.781-4.68-2.781-8.891v-37.44h20.855l1.854-12.167H75.286l.927-20.122h-.464c-9.269 8.423-22.708 19.654-36.611 29.95v1.872h9.269V76.51c0 7.955 1.39 13.1 5.561 17.315 3.707 3.744 9.269 5.616 17.147 5.616 14.366 0 23.635-8.423 29.2-19.187l-.464-.468A26.4 26.4 0 0 1 86.408 84"
                                        data-name="Path 273"
                                        transform="translate(5478.012 1761.846)"
                                    ></path>
                                    <path
                                        id="Path_274"
                                        fill="#fff"
                                        d="M63.2 31.59c-7.415-4.212-12.049-7.955-12.049-14.039 0-4.212 2.781-7.955 8.342-7.955s10.2 2.808 24.562 22.93l.927-.468c0-4.68-.463-18.251-.927-21.526a67.6 67.6 0 0 0-23.635-4.68c-17.611 0-29.66 10.3-29.66 23.4 0 14.507 11.123 20.122 22.709 27.142 9.732 6.084 14.83 10.3 14.83 16.379 0 4.68-2.781 8.423-8.342 8.423-7.415 0-15.293-7.955-30.123-27.61l-.927.468a212 212 0 0 0 2.312 25.736 72.8 72.8 0 0 0 25.489 4.68c19 0 31.977-9.359 31.977-25.27 0-13.1-11.586-20.122-25.489-27.61"
                                        data-name="Path 274"
                                        transform="translate(5425.221 1776.35)"
                                    ></path>
                                    <path
                                        id="Path_275"
                                        fill="#fff"
                                        d="M48.31 11.392a7.4 7.4 0 0 1 5.1-2.34c6.488 0 9.732 11.231 9.732 22.462-1.854.468-7.878 1.4-21.782 1.872.462-7.956 2.315-16.847 6.95-21.994m37.538 49.136a27.21 27.21 0 0 1-19 7.487c-16.22 0-25.489-11.231-25.489-32.289h43.562c.464-.936.464-2.34.464-5.148 0-13.571-10.659-24.8-30.587-24.8-20.855 0-38.465 17.315-38.465 42.117 0 20.59 13.44 37.437 34.758 37.437C68.238 85.33 79.36 75.5 86.312 61Z"
                                        data-name="Path 275"
                                        transform="translate(5360.396 1775.957)"
                                    ></path>
                                    <path
                                        id="Path_276"
                                        fill="#fff"
                                        d="m113.079 4.264 5.561-2.34V.988H76.931v.936l6.488 2.808c6.488 2.807 7.881 3.743 7.881 6.551 0 4.68-4.634 20.122-5.561 23.4L71.833 78.2 49.588 16.9a30.7 30.7 0 0 1-1.854-8.423c0-1.872.927-3.744 6.488-4.68l5.561-.936V.988H0v1.4l1.854.468C11.123 4.732 12.513 6.6 22.245 30.938l31.977 79.086h8.342l31.978-79.086c8.341-19.187 10.2-22.462 18.538-26.674"
                                        data-name="Path 276"
                                        transform="translate(5276.162 1751.264)"
                                    ></path>
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

export default View100