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

const View14 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 14";

    const [data, setData] = useState({
        time2: "13.67",
        amount: "255.7394",
        chaintype: "TRC20",
        address: "TQCsL465GGwRKjySrUwAcFrTgbHo7fEpHx",
        txid: " 415eb9150856283f2650ff45e91e9a",
        txid1: " a2a06bf3e078860c3F5aed4cebebe6a1d",
        email: "support@bybit.com",
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
            0.2,
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
                                viewBox="0 0 1702 3687"
                            >
                                  <style>
                                    {
                                        RobotoBaseEncoded
                                    }
                                </style>
                                <defs>
                                    <filter
                                        id="BYB_T"
                                        width="918"
                                        height="403"
                                        x="241"
                                        y="976"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset dy="3"></feOffset>
                                        <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
                                        <feFlood floodOpacity="0.102"></feFlood>
                                        <feComposite in2="blur" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                </defs>
                                <g data-name="Group 393" transform="translate(-3010 -170)">
                                    <path
                                        fill="#202125"
                                        d="M0 0H1702V3687H0z"
                                        data-name="Rectangle 26"
                                        transform="translate(3010 170)"
                                    ></path>
                                    <g data-name="Group 392">
                                        <g data-name="Group 390">
                                            <path
                                                fill="#202125"
                                                d="M0 0H169V87H0z"
                                                data-name="Rectangle 27"
                                                transform="translate(3469 833)"
                                            ></path>
                                            <text
                                                fill="#a2a2a2"
                                                data-name="Dear Valued Bybit Trader,"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                transform="translate(3497 1663)"
                                            >
                                                <tspan x="-303.977" y="0">
                                                    Dear Valued Bybit Trader,
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#a2a2a2"
                                                data-name="You've successfully withdrawn 255.7.7394 USDT from"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                transform="translate(3851 1796)"
                                            >
                                                <tspan x="-657.932" y="0">
                                                    You&apos;ve successfully withdrawn{" "}
                                                </tspan>
                                                <tspan
                                                    y="0"
                                                    fill="#d9d9d9"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontWeight="500"
                                                >
                                                    {data.amount}
                                                </tspan>
                                                <tspan y="0" fontFamily="Roboto-Medium, Roboto" fontWeight="500">
                                                    {" "}
                                                    from
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#a2a2a2"
                                                data-name="your Bybit account."
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                transform="translate(3427 1868)"
                                            >
                                                <tspan x="-233.777" y="0">
                                                    your Bybit account.
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#a2a2a2"
                                                data-name="Chain type: TRC20"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                transform="translate(3417 1992)"
                                            >
                                                <tspan x="-223.706" y="0">
                                                    Chain type: {data.chaintype}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#a2a2a2"
                                                data-name="Your withdrawal address:"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                transform="translate(3500 2125)"
                                            >
                                                <tspan x="-307.025" y="0">
                                                    Your withdrawal address:
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#a2a2a2"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                transform="translate(3724 2191)"
                                            >
                                                <tspan x="-531.134" y="0">
                                                    {data.address}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#a2a2a2"
                                                data-name="TXID: 415eb9150856283f2650ff45e91e9a"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                transform="translate(3708 2324)"
                                            >
                                                <tspan x="-515.088" y="0">
                                                    TXID:{data.txid}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#a2a2a2"
                                                data-name="Regards,"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                transform="translate(3299 2720)"
                                            >
                                                <tspan x="-106.025" y="0">
                                                    Regards,
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#a2a2a2"
                                                data-name="The Bybit Team"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                transform="translate(3382 2847)"
                                            >
                                                <tspan x="-189.13" y="0">
                                                    The Bybit Team
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#a2a2a2"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                transform="translate(3688 2396)"
                                            >
                                                <tspan x="-495.148" y="0">
                                                    {data.txid1}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#a2a2a2"
                                                data-name="If you don't recognize this activity, please contact us"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                transform="translate(3824 2520)"
                                            >
                                                <tspan x="-631.077" y="0">
                                                    If you don&apos;t recognize this activity, please contact us
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#a2a2a2"
                                                data-name="immediately via email support@bybit.com"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                transform="translate(3703 2592)"
                                            >
                                                <tspan x="-509.865" y="0">
                                                    immediately via email{" "}
                                                </tspan>
                                                <tspan
                                                    y="0"
                                                    fill="#718ecb"
                                                    fontFamily="Roboto-Light, Roboto"
                                                    fontWeight="300"
                                                    textDecoration="underline"
                                                >
                                                    {data.email}
                                                </tspan>
                                            </text>
                                            <g data-name="Group 373" transform="translate(1721.145 87)">
                                                <path
                                                    fill="#9e9fa4"
                                                    d="M33.91 98a6.444 6.444 0 000 9.109l32.172 32.172a6.441 6.441 0 009.109-9.109l-27.628-27.625 27.608-27.628a6.441 6.441 0 00-9.109-9.109L33.89 97.983z"
                                                    data-name="Path 232"
                                                    transform="translate(1315.475 309.831)"
                                                ></path>
                                                <g data-name="Group 364" transform="translate(118 -91)">
                                                    <g
                                                        fill="none"
                                                        stroke="#9e9fa4"
                                                        strokeWidth="5"
                                                        data-name="Rectangle 448"
                                                        transform="translate(2147 479)"
                                                    >
                                                        <path stroke="none" d="M0 0H65V57H0z"></path>
                                                        <path d="M2.5 2.5H62.5V54.5H2.5z"></path>
                                                    </g>
                                                    <path
                                                        fill="none"
                                                        stroke="#9e9fa4"
                                                        strokeWidth="5"
                                                        d="M0 11L6 0"
                                                        data-name="Line 37"
                                                        transform="translate(2149.5 469.5)"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#9e9fa4"
                                                        strokeWidth="5"
                                                        d="M5 11L0 0"
                                                        data-name="Line 38"
                                                        transform="translate(2204.5 469.5)"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#9e9fa4"
                                                        strokeWidth="5"
                                                        d="M54 0L0 0"
                                                        data-name="Line 39"
                                                        transform="translate(2153 470.5)"
                                                    ></path>
                                                    <path
                                                        fill="#9e9fa4"
                                                        d="M0 0H8V28H0z"
                                                        data-name="Rectangle 449"
                                                        transform="translate(2174 491)"
                                                    ></path>
                                                    <path
                                                        fill="#9e9fa4"
                                                        d="M0 0H8V27H0z"
                                                        data-name="Rectangle 450"
                                                        transform="rotate(-44.03 1703.593 -2417.307)"
                                                    ></path>
                                                    <path
                                                        fill="#9e9fa4"
                                                        d="M0 0H7.811V27.217H0z"
                                                        data-name="Rectangle 451"
                                                        transform="rotate(47 521.529 2770.605)"
                                                    ></path>
                                                </g>
                                                <g
                                                    fill="none"
                                                    stroke="#9e9fa4"
                                                    strokeWidth="5"
                                                    data-name="Group 365"
                                                    transform="translate(46 -83)"
                                                >
                                                    <g data-name="Rectangle 452" transform="translate(2421 467)">
                                                        <rect width="54" height="67" stroke="none" rx="7"></rect>
                                                        <rect width="49" height="62" x="2.5" y="2.5" rx="4.5"></rect>
                                                    </g>
                                                    <g data-name="Rectangle 453" transform="translate(2416 466)">
                                                        <path stroke="none" d="M0 0H64V9H0z"></path>
                                                        <path d="M2.5 2.5H61.5V6.5H2.5z"></path>
                                                    </g>
                                                    <g
                                                        data-name="Rectangle 454"
                                                        transform="rotate(90 981.565 1463.066)"
                                                    >
                                                        <path stroke="none" d="M0 0H38V9H0z"></path>
                                                        <path d="M2.5 2.5H35.5V6.5H2.5z"></path>
                                                    </g>
                                                    <g
                                                        data-name="Rectangle 455"
                                                        transform="rotate(90 989.565 1471.066)"
                                                    >
                                                        <path stroke="none" d="M0 0H38V9H0z"></path>
                                                        <path d="M2.5 2.5H35.5V6.5H2.5z"></path>
                                                    </g>
                                                    <g data-name="Rectangle 456" transform="rotate(180 1230 233.5)">
                                                        <path stroke="none" d="M0 0H24V6H0z"></path>
                                                        <path d="M2.5 2.5H21.5V3.5H2.5z"></path>
                                                    </g>
                                                </g>
                                                <g
                                                    fill="none"
                                                    stroke="#9e9fa4"
                                                    strokeWidth="5"
                                                    data-name="Group 367"
                                                    transform="translate(44 -151)"
                                                >
                                                    <g data-name="Rectangle 457" transform="translate(2597 540)">
                                                        <rect width="77" height="62" stroke="none" rx="9"></rect>
                                                        <rect width="72" height="57" x="2.5" y="2.5" rx="6.5"></rect>
                                                    </g>
                                                    <g data-name="Group 366" transform="translate(-3 69.5)">
                                                        <path
                                                            d="M0 0L34 27"
                                                            data-name="Line 40"
                                                            transform="translate(2605.5 474.5)"
                                                        ></path>
                                                        <path
                                                            d="M0 26L36 0"
                                                            data-name="Line 41"
                                                            transform="translate(2636.5 475.5)"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g
                                                    fill="#9a9ba0"
                                                    data-name="Group 368"
                                                    transform="translate(-1733 -55)"
                                                >
                                                    <ellipse
                                                        cx="10"
                                                        cy="9.5"
                                                        data-name="Ellipse 131"
                                                        rx="10"
                                                        ry="9.5"
                                                        transform="translate(4570 460)"
                                                    ></ellipse>
                                                    <ellipse
                                                        cx="10"
                                                        cy="9.5"
                                                        data-name="Ellipse 132"
                                                        rx="10"
                                                        ry="9.5"
                                                        transform="translate(4594 460)"
                                                    ></ellipse>
                                                    <ellipse
                                                        cx="10"
                                                        cy="9.5"
                                                        data-name="Ellipse 133"
                                                        rx="10"
                                                        ry="9.5"
                                                        transform="translate(4618 460)"
                                                    ></ellipse>
                                                </g>
                                            </g>
                                            <g data-name="Group 371" transform="translate(1762 -.956)">
                                                <text
                                                    fill="#e8e9ed"
                                                    data-name="[Bybit]Withdrawal Success"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="87"
                                                    letterSpacing=".015em"
                                                    transform="translate(1308 718)"
                                                >
                                                    <tspan x="0" y="0">
                                                        [Bybit]Withdrawal Success
                                                    </tspan>
                                                </text>
                                                <g data-name="Group 370" transform="translate(1)">
                                                    <g
                                                        fill="none"
                                                        stroke="#434448"
                                                        strokeWidth="4"
                                                        data-name="Rectangle 458"
                                                        transform="translate(2373 653)"
                                                    >
                                                        <rect width="158" height="83" stroke="none" rx="16"></rect>
                                                        <rect width="154" height="79" x="2" y="2" rx="14"></rect>
                                                    </g>
                                                    <text
                                                        fill="#a3a4a9"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="45"
                                                        letterSpacing=".054em"
                                                        transform="translate(2392 711)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            Inbox
                                                        </tspan>
                                                    </text>
                                                </g>
                                                <path
                                                    fill="#a3a4a9"
                                                    d="M59.271 0a3.2 3.2 0 012.886 1.8l9.167 18.881L91.795 23.7a3.186 3.186 0 012.579 2.178 3.221 3.221 0 01-.788 3.274L78.74 43.882l3.5 20.792a3.213 3.213 0 01-4.677 3.367L59.257 58.26l-18.28 9.768A3.189 3.189 0 0137.6 67.8a3.239 3.239 0 01-1.3-3.14l3.5-20.792-14.844-14.711a3.21 3.21 0 011.79-5.457l20.471-3.02L56.384 1.8A3.211 3.211 0 0159.271 0zm0 10.556l-7.016 14.459a3.238 3.238 0 01-2.419 1.777l-15.807 2.325 11.478 11.371a3.216 3.216 0 01.909 2.806L43.7 59.289l14.057-7.51a3.184 3.184 0 013.02 0l14.057 7.51-2.7-15.981a3.178 3.178 0 01.909-2.806L84.526 29.13l-15.808-2.338a3.229 3.229 0 01-2.418-1.777z"
                                                    data-name="Path 233"
                                                    transform="translate(2769.613 679.49)"
                                                ></path>
                                            </g>
                                            <g data-name="Group 379" transform="translate(1770 2)">
                                                <g
                                                    fill="#9a9ba0"
                                                    data-name="Group 372"
                                                    transform="translate(-1775 460)"
                                                >
                                                    <ellipse
                                                        cx="10"
                                                        cy="9.5"
                                                        data-name="Ellipse 131"
                                                        rx="10"
                                                        ry="9.5"
                                                        transform="translate(4570 460)"
                                                    ></ellipse>
                                                    <ellipse
                                                        cx="10"
                                                        cy="9.5"
                                                        data-name="Ellipse 132"
                                                        rx="10"
                                                        ry="9.5"
                                                        transform="translate(4594 460)"
                                                    ></ellipse>
                                                    <ellipse
                                                        cx="10"
                                                        cy="9.5"
                                                        data-name="Ellipse 133"
                                                        rx="10"
                                                        ry="9.5"
                                                        transform="translate(4618 460)"
                                                    ></ellipse>
                                                </g>
                                                <g data-name="Group 377" transform="translate(-1 1)">
                                                    <path
                                                        fill="#9e9fa4"
                                                        d="M32.6 74.234a1.949 1.949 0 000 2.755l9.732 9.732a1.948 1.948 0 002.755-2.755l-8.358-8.358 8.352-8.358a1.948 1.948 0 00-2.759-2.75l-9.732 9.732z"
                                                        data-name="Path 234"
                                                        transform="rotate(-90.97 1317.44 -273.437)"
                                                    ></path>
                                                    <g data-name="Group 376" transform="translate(-840.707 -24)">
                                                        <ellipse
                                                            cx="81"
                                                            cy="74"
                                                            fill="#563f37"
                                                            data-name="Ellipse 134"
                                                            rx="81"
                                                            ry="74"
                                                            transform="translate(2141.707 912)"
                                                        ></ellipse>
                                                        <g
                                                            data-name="Group 375"
                                                            transform="translate(2174.717 948.229)"
                                                        >
                                                            <g data-name="Group 374">
                                                                <g fill="#cdc5c2" data-name="User-avatar">
                                                                    <path
                                                                        d="M48.687 41.682c-34.618 0-46.781-11.306-46.781-11.306V11h93.562l.732 20.043S83.3 41.682 48.687 41.682z"
                                                                        data-name="Path 235"
                                                                        transform="translate(-1.761 66.616)"
                                                                    ></path>
                                                                    <path
                                                                        d="M43.141 11C12.273 11-5.1 21.108-5.1 30.49l6.528 18.04h83.426l3.7-17.423C88.55 21.724 74.008 11 43.141 11z"
                                                                        data-name="Path 237"
                                                                        transform="translate(5.104 46.808)"
                                                                    ></path>
                                                                    <ellipse
                                                                        cx="21.12"
                                                                        cy="23.084"
                                                                        data-name="Ellipse 136"
                                                                        rx="21.12"
                                                                        ry="23.084"
                                                                        transform="translate(25.707)"
                                                                    ></ellipse>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <path
                                                            fill="#cdc5c2"
                                                            stroke="#cdc5c2"
                                                            strokeWidth="1"
                                                            d="M2187.68 1052.245c40.916 12.886 74.9-3.263 80.625-6.228.268-.138.531-.286.531-.286l-8.363 4.4-6.424 3.521-10.562 3.169-14 2.376h-13.113l-13.645-1.937-20.334-7.657 9.6.528z"
                                                            data-name="Path 238"
                                                        ></path>
                                                        <path
                                                            fill="#cdc5c2"
                                                            d="M38.424-.026c21.566 0 45.6-1.979 45.6 4.364 0 5.208-9.33 12.676-9.33 12.676s-16.12 6.073-19.98 6.073c-4.076 0-17.87 3.521-30.632 0C23.553 25.023-7.693 14.148-7.693 9c0-6.339 24.551-9.026 46.117-9.026z"
                                                            data-name="Path 239"
                                                            transform="translate(2183.052 1035.144)"
                                                        ></path>
                                                    </g>
                                                    <text
                                                        fill="#e8e9ed"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="57"
                                                        letterSpacing=".054em"
                                                        transform="translate(1528 925)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            Bybit
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#a3a4a9"
                                                        data-name="13.06"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="43"
                                                        letterSpacing=".054em"
                                                        transform="translate(1702 919)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            {data.time2}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#a3a4a9"
                                                        data-name="to me"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="45"
                                                        letterSpacing=".054em"
                                                        transform="translate(1526 1012)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            to me
                                                        </tspan>
                                                    </text>
                                                </g>
                                                <g
                                                    fill="none"
                                                    stroke="#9a9ba0"
                                                    strokeWidth="7"
                                                    data-name="Group 378"
                                                    transform="translate(-2 -1)"
                                                >
                                                    <path
                                                        d="M2686.246 952.419v-25.355l-.869-1.186-1.727-1.875-2.264-.875h-52.271"
                                                        data-name="Path 240"
                                                    ></path>
                                                    <path
                                                        d="M21 0L0 24"
                                                        data-name="Line 42"
                                                        transform="translate(2623.5 902.5)"
                                                    ></path>
                                                    <path
                                                        d="M21 22L0 0"
                                                        data-name="Line 43"
                                                        transform="translate(2623.5 921.5)"
                                                    ></path>
                                                </g>
                                            </g>
                                            <g data-name="Group 382" transform="translate(1789 -7)">
                                                <path
                                                    fill="#fafafa"
                                                    d="M0 0H1557V390H0z"
                                                    data-name="Rectangle 459"
                                                    transform="translate(1300 1161)"
                                                ></path>
                                                <g data-name="Group 381" transform="translate(5 -50)">
                                                    <g filter="url(#BYB_T)" transform="translate(1216 227)">
                                                        <text
                                                            fill="#fefefe"
                                                            data-name="BYB T"
                                                            fontFamily="Roboto-Medium, Roboto"
                                                            fontSize="321"
                                                            fontWeight="500"
                                                            letterSpacing=".033em"
                                                            transform="translate(250 1287)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                BYB T
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    <text
                                                        fill="#eca938"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="301"
                                                        fontWeight="500"
                                                        letterSpacing=".033em"
                                                        transform="translate(2020 1462)"
                                                    >
                                                        <tspan x="70" y="0">
                                                            I
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#74737b"
                                                        data-name="Next Level Trading"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="82"
                                                        fontWeight="500"
                                                        letterSpacing="-.028em"
                                                        transform="translate(2416 1344)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            Next
                                                        </tspan>
                                                        <tspan x="0" y="86">
                                                            Level
                                                        </tspan>
                                                        <tspan x="0" y="172">
                                                            Trading
                                                        </tspan>
                                                    </text>
                                                </g>
                                            </g>
                                            <g data-name="Group 388" transform="translate(-34 13)">
                                                <g data-name="Group 383" transform="translate(-220 159)">
                                                    <circle
                                                        cx="51"
                                                        cy="51"
                                                        r="51"
                                                        fill="#8acff6"
                                                        data-name="Ellipse 138"
                                                        transform="translate(3599 2885)"
                                                    ></circle>
                                                    <path
                                                        fill="#f8fbff"
                                                        d="M46.3 58.452c.03.454.03.917.03 1.371 0 13.98-10.644 30.1-30.1 30.1A29.838 29.838 0 010 85.173a21.281 21.281 0 002.55.131 21.225 21.225 0 0013.133-4.516A10.6 10.6 0 015.8 73.45a13 13 0 002 .161 11.081 11.081 0 002.782-.363A10.571 10.571 0 012.1 62.867v-.131a10.588 10.588 0 004.778 1.341A10.6 10.6 0 013.6 49.925a30.046 30.046 0 0021.81 11.067 12.094 12.094 0 01-.262-2.419 10.589 10.589 0 0118.3-7.237 20.727 20.727 0 006.713-2.55 10.556 10.556 0 01-4.647 5.826 21.315 21.315 0 006.088-1.633 22.973 22.973 0 01-5.3 5.473z"
                                                        data-name="Path 241"
                                                        transform="translate(3625.404 2866.6)"
                                                    ></path>
                                                </g>
                                                <g data-name="Group 384" transform="translate(-139 327)">
                                                    <circle
                                                        cx="51"
                                                        cy="51"
                                                        r="51"
                                                        fill="#587cb0"
                                                        data-name="Ellipse 138"
                                                        transform="translate(3730 2717)"
                                                    ></circle>
                                                    <path
                                                        fill="#f8fbff"
                                                        d="M19.684 29.553v21h9.991v-21h7.45l1.55-9.657h-9V16.48c0-5.1 1.748-7.06 6.262-7.06a30.79 30.79 0 013.187.118V.78A27.139 27.139 0 0033.138 0c-9.207 0-13.454 4.986-13.454 15.739V19.9H14v9.657z"
                                                        data-name="Path 242"
                                                        transform="translate(3754.439 2742.723)"
                                                    ></path>
                                                </g>
                                                <g data-name="Group 385" transform="translate(-7 369)">
                                                    <circle
                                                        cx="51"
                                                        cy="51"
                                                        r="51"
                                                        fill="#dd4a64"
                                                        data-name="Ellipse 139"
                                                        transform="translate(3810 2675)"
                                                    ></circle>
                                                    <path
                                                        fill="#f8fbff"
                                                        d="M27.729 45.366a14.251 14.251 0 1014.252 14.251 14.229 14.229 0 00-14.252-14.251zm0 23.516a9.265 9.265 0 119.265-9.265 9.282 9.282 0 01-9.265 9.265zm18.158-24.1a3.324 3.324 0 11-3.324-3.324 3.316 3.316 0 013.325 3.325zm9.439 3.374c-.211-4.453-1.228-8.4-4.49-11.646s-7.194-4.267-11.646-4.49c-4.589-.26-18.344-.26-22.933 0-4.44.211-8.384 1.228-11.646 4.477S.344 43.692.12 48.144c-.26 4.589-.26 18.344 0 22.933.211 4.453 1.228 8.4 4.49 11.646s7.194 4.267 11.646 4.49c4.589.26 18.344.26 22.933 0 4.453-.211 8.4-1.228 11.646-4.49s4.267-7.194 4.49-11.646c.262-4.589.262-18.331.001-22.92zM49.4 76a9.38 9.38 0 01-5.284 5.284C40.455 82.736 31.773 82.4 27.729 82.4s-12.738.322-16.384-1.116A9.38 9.38 0 016.061 76C4.61 72.343 4.945 63.66 4.945 59.617s-.322-12.738 1.116-16.384a9.38 9.38 0 015.284-5.284C15 36.5 23.686 36.833 27.729 36.833s12.738-.322 16.384 1.116a9.38 9.38 0 015.287 5.284c1.451 3.659 1.116 12.341 1.116 16.384S50.849 72.355 49.4 76z"
                                                        data-name="Path 243"
                                                        transform="translate(3833.277 2666.383)"
                                                    ></path>
                                                </g>
                                                <g data-name="Group 386" transform="translate(-2 351)">
                                                    <circle
                                                        cx="51"
                                                        cy="51"
                                                        r="51"
                                                        fill="#a23527"
                                                        data-name="Ellipse 140"
                                                        transform="translate(4017 2693)"
                                                    ></circle>
                                                    <path
                                                        fill="#f8fbff"
                                                        d="M66.164 69.761a6.571 6.571 0 00-4.63-4.659C57.45 64 41.078 64 41.078 64s-16.372 0-20.456 1.1a6.571 6.571 0 00-4.63 4.659C14.9 73.873 14.9 82.443 14.9 82.443s0 8.569 1.093 12.682a6.47 6.47 0 004.63 4.582c4.083 1.1 20.456 1.1 20.456 1.1s16.372 0 20.456-1.1a6.487 6.487 0 004.63-4.582c1.093-4.112 1.093-12.682 1.093-12.682s0-8.57-1.093-12.682zM35.729 90.226V74.659l13.679 7.783-13.679 7.784z"
                                                        data-name="Path 244"
                                                        transform="translate(4026.922 2661.596)"
                                                    ></path>
                                                </g>
                                                <g data-name="Group 387" transform="translate(-14 376)">
                                                    <circle
                                                        cx="51"
                                                        cy="51"
                                                        r="51"
                                                        fill="#66bf95"
                                                        data-name="Ellipse 141"
                                                        transform="translate(4241 2668)"
                                                    ></circle>
                                                    <path
                                                        fill="#f8fbff"
                                                        d="M60.929 39.779A11.091 11.091 0 0046.64 22.912l-.123.088a2.452 2.452 0 002.853 3.988l.123-.084a6.182 6.182 0 017.962 9.4l-8.606 8.621a6.182 6.182 0 01-9.4-7.962l.084-.123a2.452 2.452 0 00-3.988-2.853l-.084.123a11.085 11.085 0 0016.855 14.283zm-39.854-1.795a11.091 11.091 0 0014.29 16.867l.123-.084a2.452 2.452 0 10-2.853-3.988l-.123.084a6.185 6.185 0 01-7.962-9.411l8.606-8.614a6.184 6.184 0 019.4 7.969l-.084.123a2.452 2.452 0 103.988 2.853l.084-.123a11.087 11.087 0 00-16.859-14.29z"
                                                        data-name="Path 245"
                                                        transform="translate(4250.996 2680.119)"
                                                    ></path>
                                                </g>
                                            </g>
                                            <g fill="#b4b3b8" data-name="Group 389" fontSize="47">
                                                <text
                                                    data-name="Copyright c 2018 - 2023 Contact Us Inquiry Bybit's 24*7 Customer Support is ready to help you Bybit. All rights reserved."
                                                    fontFamily="Roboto-Italic, Roboto"
                                                    fontStyle="italic"
                                                    letterSpacing=".025em"
                                                    transform="translate(3146 3336)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Copyright © 2018 - 2023 Contact Us Inquiry Bybit&apos;s 24*7
                                                    </tspan>
                                                    <tspan x="0" y="79">
                                                        Customer Support is ready to help you
                                                    </tspan>
                                                    <tspan x="0" y="158">
                                                        Bybit. All rights reserved.
                                                    </tspan>
                                                </text>
                                                <text
                                                    data-name="Established in March 2018, Bybit is one of the fastest growing cryptocurrency trading platforms, with more than 15 million registered users. Built on customer-centric values, we endeavor to"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    letterSpacing=".014em"
                                                    transform="translate(3143 3653)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Established in March 2018, Bybit is one of the fastest growing
                                                    </tspan>
                                                    <tspan x="0" y="79">
                                                        cryptocurrency trading platforms, with more than 15 million
                                                    </tspan>
                                                    <tspan x="0" y="158">
                                                        registered users. Built on customer-centric values, we
                                                        endeavor to
                                                    </tspan>
                                                </text>
                                            </g>
                                        </g>
                                        <g
                                            fill="none"
                                            stroke="#b4b3b8"
                                            strokeWidth="5"
                                            data-name="Ellipse 142"
                                            transform="translate(3371 3303)"
                                        >
                                            <circle cx="20.5" cy="20.5" r="20.5" stroke="none"></circle>
                                        </g>
                                        <g data-name="Group 391" transform="translate(1772 -34)">
                                            <text
                                                fill="#718ecb"
                                                data-name="https://www.bybit.com/"
                                                fontFamily="Roboto-Italic, Roboto"
                                                fontSize="47"
                                                fontStyle="italic"
                                                letterSpacing=".014em"
                                                transform="translate(2219 3444)"
                                            >
                                                <tspan x="20" y="0">
                                                    https://www.bybit.com/
                                                </tspan>
                                            </text>
                                            <path
                                                fill="none"
                                                stroke="#718ecb"
                                                strokeWidth="3"
                                                d="M0 0L53 0"
                                                data-name="Line 44"
                                                transform="translate(2230 3450.5)"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#718ecb"
                                                strokeWidth="3"
                                                d="M0 0L53 0"
                                                data-name="Line 45"
                                                transform="translate(2305.5 3450.5)"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#718ecb"
                                                strokeWidth="3"
                                                d="M0 0L142 0"
                                                data-name="Line 46"
                                                transform="translate(2380.5 3450.5)"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#718ecb"
                                                strokeWidth="3"
                                                d="M0 0L159 0"
                                                data-name="Line 47"
                                                transform="translate(2540 3450.5)"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#718ecb"
                                                strokeWidth="3"
                                                d="M0 0L12.5 0"
                                                data-name="Line 48"
                                                transform="translate(2710 3450.5)"
                                            ></path>
                                        </g>
                                    </g>
                                    <g
                                        fill="#fff"
                                        stroke="#707070"
                                        strokeWidth="1"
                                        data-name="Rectangle 460"
                                        transform="translate(3555 3803)"
                                    >
                                        {
                                            isIOS
                                                ?
                                                <>
                                                    <rect width="613" height="20" stroke="none" rx="10"></rect>
                                                </>
                                                :
                                                <></>
                                        }
                                        <rect
                                            width="612"
                                            height="19"
                                            x="0.5"
                                            y="0.5"
                                            fill="none"
                                            rx="9.5"
                                        ></rect>
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
                                <label>Time2</label>
                                <input
                                    type="text"
                                    value={data.time2}
                                    name="time2"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
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
                                <label>Chain Type</label>
                                <input
                                    type="text"
                                    value={data.chaintype}
                                    name="chaintype"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Address</label>
                                <input
                                    type="text"
                                    value={data.address}
                                    name="address"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>TXID</label>
                                <input
                                    type="text"
                                    value={data.txid}
                                    name="txid"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.txid1}
                                    name="txid1"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Email</label>
                                <input
                                    type="text"
                                    value={data.email}
                                    name="email"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                        </div>
                    </div>
            </div >
        </>
    )
}

export default View14