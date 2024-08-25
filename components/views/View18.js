"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from '@/utils/getPicture';
import Image from "next/image";
import { RobotoBaseEncoded } from "@/utils/encodedFonts/RobotoBaseEncoded";

const View18 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 18";

    const [data, setData] = useState({
        amount: "CA$2.00",
        status: "Pending",
        deposited1: "Deposited funds",
        deposited1_amount: "CA$517.00",
        deposited2: "Deposited funds",
        deposited2_amount: "CA$201.00",
        status2: "History",
        deposited3: "Bought USD Coin",
        deposited3_amount: "CA$21.00",
        deposited4: "Deposited funds",
        deposited4_amount: "CA$21.00",
        deposited5: "Withdrew funds",
        deposited5_amount: "CA$486.49",
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
                                viewBox="0 0 1735 3770"
                            >
                                  <style>
                                    {
                                        RobotoBaseEncoded
                                    }
                                </style>
                                <defs>
                                    <filter
                                        id="Rectangle_50"
                                        width="97"
                                        height="77"
                                        x="1520"
                                        y="75"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset dy="3"></feOffset>
                                        <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
                                        <feFlood floodOpacity="0.161"></feFlood>
                                        <feComposite in2="blur" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                </defs>
                                <g data-name="Group 410" transform="translate(-2624 -111)">
                                    <path
                                        fill="#0a0b0d"
                                        d="M0 0H1735V3770H0z"
                                        data-name="Rectangle 78"
                                        transform="translate(2624 111)"
                                    ></path>
                                    <text
                                        fill="#fff"
                                        data-name="12:31"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="65"
                                        fontWeight="700"
                                        transform="translate(2885 243)"
                                    >
                                        <tspan x="-83.757" y="0">
                                            12:31
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#fff"
                                        d="M99.336 192A52.291 52.291 0 0064.3 205.967a1.26 1.26 0 00-.047 1.8l4.223 4.413a1.3 1.3 0 001.835.047 42.495 42.495 0 0129.04-11.337 42.5 42.5 0 0129.042 11.341 1.3 1.3 0 001.835-.047l4.223-4.413a1.261 1.261 0 00-.047-1.8A52.431 52.431 0 0099.336 192z"
                                        data-name="Path 7"
                                        transform="translate(3988.604 4.383)"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        d="M221.933 432.887l4.524 4.476a1.3 1.3 0 001.772.047 24.6 24.6 0 0132.553 0 1.3 1.3 0 001.772-.047l4.524-4.476a1.263 1.263 0 00-.047-1.851 33.732 33.732 0 00-45.081 0 1.289 1.289 0 00-.017 1.851zm22.588 7.387a12.888 12.888 0 00-9.4 4.034 1.265 1.265 0 00.032 1.772l8.447 8.336a1.3 1.3 0 001.835 0l8.447-8.336a1.265 1.265 0 00.032-1.772 12.95 12.95 0 00-9.394-4.034z"
                                        data-name="Path 8"
                                        transform="translate(3843.42 -207.795)"
                                    ></path>
                                    <g data-name="Group 71" transform="translate(0 -4)">
                                        <rect
                                            width="12"
                                            height="18"
                                            fill="#fff"
                                            data-name="Rectangle 35"
                                            rx="2"
                                            transform="translate(3935 233)"
                                        ></rect>
                                        <rect
                                            width="12"
                                            height="27"
                                            fill="#fff"
                                            data-name="Rectangle 36"
                                            rx="2"
                                            transform="translate(3956 224)"
                                        ></rect>
                                        <rect
                                            width="12"
                                            height="38"
                                            fill="#fff"
                                            data-name="Rectangle 37"
                                            rx="2"
                                            transform="translate(3979 213)"
                                        ></rect>
                                        <path
                                            fill="#3e3f41"
                                            d="M.31 0h12.228a.31.31 0 01.31.31v50a.31.31 0 01-.31.31H.31a.31.31 0 01-.31-.31v-50A.31.31 0 01.31 0z"
                                            data-name="Path 16"
                                            transform="translate(4002.152 200.383)"
                                        ></path>
                                    </g>
                                    <rect
                                        width="113"
                                        height="59"
                                        fill="#fff"
                                        data-name="Rectangle 49"
                                        opacity="0.4"
                                        rx="16"
                                        transform="translate(4153 192)"
                                    ></rect>
                                    <path
                                        fill="#777"
                                        d="M0 0a5 5 0 015 5v9a5 5 0 01-5 5V0z"
                                        data-name="Rectangle 51"
                                        opacity="0.67"
                                        transform="translate(4270 213)"
                                    ></path>
                                    <g filter="url(#Rectangle_50)" transform="translate(2624 111)">
                                        <path
                                            fill="#ffdb17"
                                            d="M16 0h63v59H16A16 16 0 010 43V16A16 16 0 0116 0z"
                                            data-name="Rectangle 50"
                                            transform="translate(1529 81)"
                                        ></path>
                                    </g>
                                    <text
                                        fill="#fff"
                                        data-name="Canadian Dollar"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="70"
                                        fontWeight="500"
                                        transform="translate(3492 407)"
                                    >
                                        <tspan x="-247.905" y="0">
                                            Canadian Dollar
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#8b8b8b"
                                        data-name="Primary balance"
                                        fontFamily="Roboto-Light, Roboto"
                                        fontSize="61"
                                        fontWeight="300"
                                        transform="translate(3492 494)"
                                    >
                                        <tspan x="-216.315" y="0">
                                            Primary balance
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#8b8b8b"
                                        data-name="CAD amount"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="61"
                                        transform="translate(2899 605)"
                                    >
                                        <tspan x="-171.622" y="0">
                                            CAD amount
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="CA$2.00"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="116"
                                        fontWeight="500"
                                        transform="translate(2952 730)"
                                    >
                                        <tspan x="-224.523" y="0">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="88"
                                        transform="translate(2887 1380)"
                                    >
                                        <tspan x="-159.521" y="0">
                                            {data.status}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="89"
                                        transform="translate(2868 2322)"
                                    >
                                        <tspan x="-141.453" y="0">
                                            History
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="Deposited funds"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="68"
                                        transform="translate(2974 2841)"
                                    >
                                        <tspan x="-247.28" y="0">
                                            {data.deposited4}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="Deposited funds"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="68"
                                        transform="translate(2974 1591)"
                                    >
                                        <tspan x="-247.28" y="0">
                                            {data.deposited1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="Deposited funds"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="68"
                                        transform="translate(2974 1913)"
                                    >
                                        <tspan x="-247.28" y="0">
                                            {data.deposited2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="Withdrew funds"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="68"
                                        transform="translate(2964 3171)"
                                    >
                                        <tspan x="-236.605" y="0">
                                            {data.deposited5}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="Sold Ethereum"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="68"
                                        transform="translate(2947 3494)"
                                    >
                                        <tspan x="-220.319" y="0">
                                            Sold Ethereum
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="Bought USD Coin"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="68"
                                        transform="translate(2985 2518)"
                                    >
                                        <tspan x="-258.088" y="0">
                                            {data.deposited3}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#c2c2c2"
                                        data-name="CA$517.00"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="65"
                                        transform="translate(4455 1964)"
                                    >
                                        <tspan x="-160.405" y="0" textAnchor='end'>
                                            {data.deposited2_amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#c2c2c2"
                                        data-name="CA$517.00"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="65"
                                        transform="translate(4455 1637)"
                                    >
                                        <tspan x="-160.405" y="0" textAnchor='end'>
                                            {data.deposited1_amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#c2c2c2"
                                        data-name="-CA$21.00"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="65"
                                        transform="translate(4446 2566)"
                                    >
                                        <tspan x="-151.122" y="0" textAnchor='end'>
                                            {data.deposited3_amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#c2c2c2"
                                        data-name="-CA$21.00"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="65"
                                        transform="translate(4446 2893)"
                                    >
                                        <tspan x="-151.122" y="0" textAnchor='end'>
                                            {data.deposited4_amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#c2c2c2"
                                        data-name="-CA$486.49"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="65"
                                        transform="translate(4460 3216)"
                                    >
                                        <tspan x="-169.371" y="0" textAnchor='end'>
                                            {data.deposited5_amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#878787"
                                        data-name="From Interac e-Transfer"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(3050 1683)"
                                    >
                                        <tspan x="-321.67" y="0">
                                            From Interac e-Transfer
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#878787"
                                        data-name="From Interac e-Transfer"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(3050 2008)"
                                    >
                                        <tspan x="-321.67" y="0">
                                            From Interac e-Transfer
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#878787"
                                        data-name="From Interac e-Transfer"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(3050 2933)"
                                    >
                                        <tspan x="-321.67" y="0">
                                            From Interac e-Transfer
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#878787"
                                        data-name="To Interac e-Transfer"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(3010 3263)"
                                    >
                                        <tspan x="-284.57" y="0">
                                            To Interac e-Transfer
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#878787"
                                        data-name="Using CAD Wallet"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(2968 2610)"
                                    >
                                        <tspan x="-239.645" y="0">
                                            Using CAD Wallet
                                        </tspan>
                                    </text>
                                    <g fill="#fff" data-name="Group 118" transform="translate(0 -4)">
                                        <path
                                            d="M37.264 58.091L9.937 31.913 38.029 4.586 32.869 0 0 31.913 10.773 42.06l22.1 20.811z"
                                            data-name="Path 15"
                                            transform="translate(2717.141 401.303)"
                                        ></path>
                                        <path
                                            d="M0 0H64V7H0z"
                                            data-name="Rectangle 72"
                                            transform="translate(2725 430)"
                                        ></path>
                                    </g>
                                    <rect
                                        width="740"
                                        height="232"
                                        fill="#3773f5"
                                        data-name="Rectangle 79"
                                        rx="116"
                                        transform="translate(2739 886)"
                                    ></rect>
                                    <text
                                        fill="#000030"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="72"
                                        fontWeight="400"
                                        transform="translate(3091 1027)"
                                    >
                                        <tspan x="-123.346" y="0">
                                            Deposit
                                        </tspan>
                                    </text>
                                    <rect
                                        width="740"
                                        height="232"
                                        fill="#3773f5"
                                        data-name="Rectangle 79"
                                        rx="116"
                                        transform="translate(3543 886)"
                                    ></rect>
                                    <text
                                        fill="#000030"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="72"
                                        fontWeight="400"
                                        transform="translate(3903 1027)"
                                    >
                                        <tspan x="-151.506" y="0">
                                            Withdraw
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#1e1f21"
                                        d="M0 0H1735V8H0z"
                                        data-name="Rectangle 81"
                                        transform="translate(2624 1201)"
                                    ></path>
                                    <path
                                        fill="#1e1f21"
                                        d="M0 0H1735V4H0z"
                                        data-name="Rectangle 82"
                                        transform="translate(2624 3526)"
                                    ></path>
                                    <g
                                        fill="none"
                                        stroke="#a1a1a1"
                                        strokeWidth="2"
                                        data-name="Ellipse 11"
                                        transform="translate(3374 1639)"
                                    >
                                        <ellipse cx="12" cy="12.5" stroke="none" rx="12" ry="12.5"></ellipse>
                                        <ellipse cx="12" cy="12.5" rx="11" ry="11.5"></ellipse>
                                    </g>
                                    <text
                                        fill="#878787"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="18"
                                        transform="translate(3386 1657)"
                                    >
                                        <tspan x="-5.542" y="0">
                                            R
                                        </tspan>
                                    </text>
                                    <g
                                        fill="none"
                                        stroke="#a1a1a1"
                                        strokeWidth="2"
                                        data-name="Ellipse 11"
                                        transform="translate(3374 1964)"
                                    >
                                        <ellipse cx="12" cy="12.5" stroke="none" rx="12" ry="12.5"></ellipse>
                                        <ellipse cx="12" cy="12.5" rx="11" ry="11.5"></ellipse>
                                    </g>
                                    <text
                                        fill="#878787"
                                        data-name="R"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="18"
                                        transform="translate(3386 1982)"
                                    >
                                        <tspan x="-5.542" y="0">
                                            R
                                        </tspan>
                                    </text>
                                    <g
                                        fill="none"
                                        stroke="#a1a1a1"
                                        strokeWidth="2"
                                        data-name="Ellipse 11"
                                        transform="translate(3374 2887)"
                                    >
                                        <ellipse cx="12" cy="12.5" stroke="none" rx="12" ry="12.5"></ellipse>
                                        <ellipse cx="12" cy="12.5" rx="11" ry="11.5"></ellipse>
                                    </g>
                                    <text
                                        fill="#878787"
                                        data-name="R"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="18"
                                        transform="translate(3386 2905)"
                                    >
                                        <tspan x="-5.542" y="0">
                                            R
                                        </tspan>
                                    </text>
                                    <g
                                        fill="none"
                                        stroke="#a1a1a1"
                                        strokeWidth="2"
                                        data-name="Ellipse 11"
                                        transform="translate(3298 3217)"
                                    >
                                        <ellipse cx="12" cy="12.5" stroke="none" rx="12" ry="12.5"></ellipse>
                                        <ellipse cx="12" cy="12.5" rx="11" ry="11.5"></ellipse>
                                    </g>
                                    <text
                                        fill="#878787"
                                        data-name="R"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="18"
                                        transform="translate(3310 3235)"
                                    >
                                        <tspan x="-5.542" y="0">
                                            R
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#0a0b0d"
                                        d="M0 0H1639V150H0z"
                                        data-name="Rectangle 471"
                                        transform="translate(2691 148)"
                                    ></path>
                                    <g data-name="Group 409" transform="translate(1947)">
                                        <g transform="translate(-552 1967)">
                                            <g data-name="Group 402" transform="translate(1302.173 1151)">
                                                <path
                                                    fill="#fff"
                                                    d="M36.458 952.11L1.625 979.585v50.238h26.869V1000.7h15.929v29.125h27.283v-50.24L36.458 952.11zm0 7.867l28.469 22.3v41.4H50.2v-29H22.715v29H7.989v-41.4z"
                                                    data-name="Path 259"
                                                    transform="translate(94 -503.883)"
                                                ></path>
                                            </g>
                                        </g>
                                        <g transform="translate(1146 3539.632)">
                                            <g data-name="Group 403" transform="translate(26.326 24.235)">
                                                <g fill="#3075ff" data-name="Group 404">
                                                    <path
                                                        d="M61.762 59.285V19.237c-11.01 0-22.577 4.376-30.361 12.151a41.192 41.192 0 0058.285 58.224c7.785-7.775 12.154-19.331 12.154-30.327z"
                                                        data-name="Path 260"
                                                        transform="translate(-18.33 -19.238)"
                                                    ></path>
                                                    <path
                                                        d="M322.048 57.016c-1.371-8.595-6.845-17.905-13.036-24.09A45.759 45.759 0 00284.9 20.779v36.237s37.17.091 37.148 0z"
                                                        data-name="Path 261"
                                                        transform="translate(-238.622 -20.778)"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                        <g
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="9"
                                            data-name="Group 405"
                                            transform="translate(-.5 -2.447)"
                                        >
                                            <path d="M1522.5 3584.208v43.981" data-name="Path 262"></path>
                                            <path d="M1539.5 3568.5v43.981" data-name="Path 263"></path>
                                            <path d="M1556.5 3596.773v43.981" data-name="Path 264"></path>
                                            <path d="M1573.5 3584.208v43.981" data-name="Path 265"></path>
                                        </g>
                                        <g
                                            fill="none"
                                            stroke="#fff"
                                            data-name="Group 407"
                                            transform="translate(0 -1)"
                                        >
                                            <path
                                                strokeLinecap="square"
                                                strokeWidth="9"
                                                d="M1906.934 3579.246l-50.346 50.346"
                                                data-name="Path 266"
                                            ></path>
                                            <g
                                                strokeWidth="6"
                                                data-name="Ellipse 135"
                                                transform="translate(1850 3573)"
                                            >
                                                <circle cx="13" cy="13" r="13" stroke="none"></circle>
                                                <circle cx="13" cy="13" r="10"></circle>
                                            </g>
                                            <g
                                                strokeWidth="6"
                                                data-name="Ellipse 136"
                                                transform="translate(1887 3610)"
                                            >
                                                <circle cx="13" cy="13" r="13" stroke="none"></circle>
                                                <circle cx="13" cy="13" r="10"></circle>
                                            </g>
                                        </g>
                                        <g data-name="Group 408" transform="translate(-1.192 3)">
                                            <g transform="rotate(-36 6477.077 -1335.802)">
                                                <path
                                                    fill="#fff"
                                                    d="M151.973 187.743l2.775-7.97-1.17-2.339c5.882 5.347 10.509 8.036 11.809 12.186.2.609 1.234 3.379 1.052 3.833-.622 7.928-6.956 7.733-15.845 8.2a74.014 74.014 0 01-30.343-4.668s-22.223-7.609-28.9-13.892c-6.316-6.316-9.326-10.47-7.221-15.85.56-1.493 1.564-2.109 3.149-2.905 3.508-.835 6.8-1.71 12.586.967a49.168 49.168 0 00-4.733 8.573c2.105 5.848 7.438 6.78 24.954 13.622 13.1 5.38 29.218 8.626 36 4.182h.468c.932-3.507-4.581-.43-4.581-3.939z"
                                                    data-name="Path 269"
                                                    transform="translate(1.95 -30.205)"
                                                ></path>
                                            </g>
                                            <g fill="none" data-name="Path 270">
                                                <path
                                                    d="M34 0A34 34 0 110 34 34 34 0 0134 0z"
                                                    transform="translate(2182 3569)"
                                                ></path>
                                                <path
                                                    fill="#fff"
                                                    d="M34 7C19.112 7 7 19.112 7 34s12.112 27 27 27 27-12.112 27-27S48.888 7 34 7m0-7c18.778 0 34 15.222 34 34S52.778 68 34 68 0 52.778 0 34 15.222 0 34 0z"
                                                    transform="translate(2182 3569)"
                                                ></path>
                                            </g>
                                        </g>
                                        <text
                                            fill="#878787"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="38"
                                            fontWeight="500"
                                            transform="translate(828 3709)"
                                        >
                                            <tspan x="0" y="0">
                                                Home
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#3075ff"
                                            data-name="My assets"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="38"
                                            fontWeight="500"
                                            transform="translate(1124 3709)"
                                        >
                                            <tspan x="0" y="0">
                                                My assets
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#878787"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="38"
                                            fontWeight="500"
                                            transform="translate(1496 3709)"
                                        >
                                            <tspan x="0" y="0">
                                                Trade
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#878787"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="38"
                                            fontWeight="500"
                                            transform="translate(1842 3709)"
                                        >
                                            <tspan x="0" y="0">
                                                Earn
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#878787"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="38"
                                            fontWeight="500"
                                            transform="translate(2168 3709)"
                                        >
                                            <tspan x="0" y="0">
                                                Web3
                                            </tspan>
                                        </text>
                                    </g>
                                    {
                                        isIOS
                                            ?
                                            <>
                                                <rect
                                                    width="624"
                                                    height="20"
                                                    fill="#fff"
                                                    data-name="Rectangle 473"
                                                    rx="10"
                                                    transform="translate(3174 3828)"
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
                                <label>Amount</label>
                                <input
                                    type="text"
                                    value={data.amount}
                                    name="amount"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Status</label>
                                <input
                                    type="text"
                                    value={data.status}
                                    name="status"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Deposite 1</label>
                                <input
                                    type="text"
                                    value={data.deposited1}
                                    name="deposited1"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.deposited1_amount}
                                    name="deposited1_amount"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Deposite 2</label>
                                <input
                                    type="text"
                                    value={data.deposited2}
                                    name="deposited2"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.deposited2_amount}
                                    name="deposited2_amount"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Deposite 3</label>
                                <input
                                    type="text"
                                    value={data.deposited3}
                                    name="deposited3"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.deposited3_amount}
                                    name="deposited3_amount"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Deposite 4</label>
                                <input
                                    type="text"
                                    value={data.deposited4}
                                    name="deposited4"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.deposited4_amount}
                                    name="deposited4_amount"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Deposite 5</label>
                                <input
                                    type="text"
                                    value={data.deposited5}
                                    name="deposited5"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.deposited5_amount}
                                    name="deposited5_amount"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                        </div>
                    </div>
            </div >
        </>
    )
}

export default View18