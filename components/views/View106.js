"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import getPicture from "@/utils/getPicture";
import Image from "next/image";
import { KrakenProductEncoded } from "@/utils/encodedFonts/KrakenProductEncoded";
import Page93Icons from "../options/Page93Icons";

const View106 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 106";

    const [data, setData] = useState({

        totalBalance: "1,059.70",
        caDollar: "1,059.70",
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
            0.7,
            0.6,
            0.8
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
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 462.4 1016.7"
                            >
                                <style>
                                    {
                                        KrakenProductEncoded
                                    }
                                </style>
                                <defs>
                                    <pattern
                                        id="pattern"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 156 172"
                                    >
                                        <image
                                            xlinkHref="data:image/png;base64,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"
                                            width="156"
                                            height="172"
                                        ></image>
                                    </pattern>
                                    <filter
                                        id="Path_10"
                                        width="462.4"
                                        height="118.4"
                                        x="0"
                                        y="898.3"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset></feOffset>
                                        <feGaussianBlur result="blur" stdDeviation="0.9"></feGaussianBlur>
                                        <feFlood floodColor="#fff"></feFlood>
                                        <feComposite in2="blur" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                </defs>
                                <g id="bill_-_106" data-name="bill - 106" transform="translate(-986.3 -33)">
                                    <path
                                        id="Rectangle_1"
                                        fill="#0a0711"
                                        d="M0 0h457v1014H0z"
                                        data-name="Rectangle 1"
                                        transform="translate(989 33)"
                                    ></path>
                                    <text
                                        id="Portfolio"
                                        fill="#fff"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="22"
                                        transform="translate(1174 134)"
                                    >
                                        <tspan x="0" y="0">
                                            Portfolio
                                        </tspan>
                                    </text>
                                    <path
                                        id="Path_2"
                                        fill="#fff"
                                        d="M21.148 11.668a9.48 9.48 0 1 1-9.48-9.48 9.48 9.48 0 0 1 9.48 9.48M0 11.668A11.668 11.668 0 1 0 11.668 0 11.67 11.67 0 0 0 0 11.668m10.574-6.2v6.2a1.1 1.1 0 0 0 .488.912l4.375 2.92a1.095 1.095 0 0 0 1.212-1.823l-3.888-2.589V5.469a1.094 1.094 0 0 0-2.188 0Z"
                                        data-name="Path 2"
                                        transform="translate(1407 114.664)"
                                    ></path>
                                    <rect
                                        id="Rectangle_2"
                                        width="438"
                                        height="523"
                                        fill="#161220"
                                        data-name="Rectangle 2"
                                        rx="25"
                                        transform="translate(999 161)"
                                    ></rect>

                                    <text
                                        id="CA_1_059.70"
                                        fill="#9d9aab"
                                        data-name="CA$1,059.70"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="14.5"
                                        transform="translate(1418 298)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            ↑ CA${data.totalBalance}
                                        </tspan>
                                    </text>
                                    <rect
                                        id="Rectangle_3"
                                        width="113"
                                        height="47"
                                        fill="#0a0711"
                                        data-name="Rectangle 3"
                                        rx="23.5"
                                        transform="translate(1301 185)"
                                    ></rect>
                                    <rect
                                        id="Rectangle_4"
                                        width="45"
                                        height="37"
                                        fill="#23232d"
                                        data-name="Rectangle 4"
                                        rx="18.5"
                                        transform="translate(1307 190)"
                                    ></rect>
                                    <path
                                        id="Path_5"
                                        fill="none"
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.7"
                                        d="m7.33 20.837 5.413-7.028a2.283 2.283 0 0 1 3.207-.409l4.162 2.275a2.3 2.3 0 0 0 3.207-.387l5.254-5.778"
                                        data-name="Path 5"
                                        transform="translate(1311.548 194.653)"
                                    ></path>
                                    <path
                                        id="pie-chart-svgrepo-com"
                                        fill="#9d9aab"
                                        d="M93.178 83.9H83.6v-9.576a.215.215 0 0 0-.214-.214h-.7a10.7 10.7 0 1 0 10.7 10.7v-.7a.215.215 0 0 0-.208-.21m-4.233 7.215a8.879 8.879 0 1 1-7.159-15.138v9.742h9.742a8.8 8.8 0 0 1-2.583 5.393Zm6.586-8.7-.07-.754a10.67 10.67 0 0 0-9.637-9.616l-.757-.07a.21.21 0 0 0-.233.211v10.267a.215.215 0 0 0 .214.214l10.268-.027a.214.214 0 0 0 .215-.23Zm-8.883-1.556v-6.867a8.85 8.85 0 0 1 6.852 6.843Z"
                                        transform="translate(1303.001 126.077)"
                                    ></path>
                                    <path
                                        id="Path_6"
                                        fill="none"
                                        stroke="#6e3dca"
                                        strokeWidth="3"
                                        d="M511.742 508.927s393.07.469 407.611 0 26.267-199.349 26.267-199.349"
                                        data-name="Path 6"
                                        transform="translate(489 -2.578)"
                                    ></path>
                                    <text
                                        id="_CA_0.00"
                                        fill="#9d9aab"
                                        data-name="CA$0.00"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="14.5"
                                        transform="translate(1014 512)"
                                    >
                                        <tspan xmlSpace="preserve" x="0" y="15">
                                            {" "}
                                            ↓ CA$0.00
                                        </tspan>
                                    </text>
                                    <text
                                        id="_1W"
                                        fill="#9d9aab"
                                        data-name="1W"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="17"
                                        transform="translate(1045 574)"
                                    >
                                        <tspan x="0" y="0">
                                            1W
                                        </tspan>
                                    </text>
                                    <text
                                        id="_3M"
                                        fill="#9d9aab"
                                        data-name="3M"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="17"
                                        transform="translate(1175 574)"
                                    >
                                        <tspan x="0" y="0">
                                            3M
                                        </tspan>
                                    </text>
                                    <text
                                        id="_6M"
                                        fill="#9d9aab"
                                        data-name="6M"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="17"
                                        transform="translate(1239 574)"
                                    >
                                        <tspan x="0" y="0">
                                            6M
                                        </tspan>
                                    </text>
                                    <rect
                                        id="Rectangle_5"
                                        width="51"
                                        height="41"
                                        fill="#1f1d2a"
                                        data-name="Rectangle 5"
                                        rx="20.5"
                                        transform="translate(1099 548)"
                                    ></rect>
                                    <text
                                        id="_1Y"
                                        fill="#9d9aab"
                                        data-name="1Y"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="17"
                                        transform="translate(1303 574)"
                                    >
                                        <tspan x="0" y="0">
                                            1Y
                                        </tspan>
                                    </text>
                                    <text
                                        id="ALL"
                                        fill="#9d9aab"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="17"
                                        transform="translate(1363 574)"
                                    >
                                        <tspan x="0" y="0">
                                            ALL
                                        </tspan>
                                    </text>
                                    <text
                                        id="_1M"
                                        fill="#fff"
                                        data-name="1M"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="17"
                                        transform="translate(1111 574)"
                                    >
                                        <tspan x="0" y="0">
                                            1M
                                        </tspan>
                                    </text>
                                    <rect
                                        id="Rectangle_6"
                                        width="184"
                                        height="47"
                                        fill="#261b3b"
                                        data-name="Rectangle 6"
                                        rx="23.5"
                                        transform="translate(1023 612)"
                                    ></rect>
                                    <path
                                        id="Vector"
                                        fill="none"
                                        stroke="#8066d4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 22.98h14.01M13 3v16.345m0 0 5.837-5.837M13 19.345l-5.833-5.838"
                                        transform="translate(1059 621.328)"
                                    ></path>
                                    <text
                                        id="Deposit"
                                        fill="#8066d4"
                                        fontFamily="KrakenProduct-Medium, Kraken Product"
                                        fontSize="19"
                                        fontWeight="500"
                                        transform="translate(1096 641)"
                                    >
                                        <tspan x="0" y="0">
                                            Deposit
                                        </tspan>
                                    </text>
                                    <rect
                                        id="Rectangle_6-2"
                                        width="184"
                                        height="47"
                                        fill="#261b3b"
                                        data-name="Rectangle 6"
                                        rx="23.5"
                                        transform="translate(1229 612)"
                                    ></rect>
                                    <path
                                        id="Vector-2"
                                        fill="none"
                                        stroke="#8066d4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 26h14.01m-7-3.02V6.635m0 0 5.837 5.837M13 6.635l-5.833 5.837"
                                        data-name="Vector"
                                        transform="translate(1255 618.5)"
                                    ></path>
                                    <text
                                        id="Withdraw"
                                        fill="#8066d4"
                                        fontFamily="KrakenProduct-Medium, Kraken Product"
                                        fontSize="19"
                                        fontWeight="500"
                                        transform="translate(1293 642)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdraw
                                        </tspan>
                                    </text>
                                    <text
                                        id="Portfolio_value"
                                        fill="#9d9aab"
                                        data-name="Portfolio value"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="17"
                                        transform="translate(1022 206)"
                                    >
                                        <tspan x="0" y="0">
                                            Portfolio value
                                        </tspan>
                                    </text>
                                    <text
                                        id="CA_1_059.70-2"
                                        fill="#9d9aab"
                                        data-name="CA$1,059.70"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="29"
                                        transform="translate(1022 211)"
                                    >
                                        <tspan x="0" y="29">
                                            CA$
                                        </tspan>
                                        <tspan y="29" fill="#fff" textAnchor="start">
                                            {data.totalBalance}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_0.00_CA_1_059.70_"
                                        fill="#9d9aab"
                                        data-name="0.00% (CA$1,059.70)"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="17"
                                        transform="translate(1022 265)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            0.00% (CA${data.totalBalance})
                                        </tspan>
                                    </text>
                                    <rect
                                        id="Rectangle_7"
                                        width="438"
                                        height="131"
                                        fill="#161220"
                                        data-name="Rectangle 7"
                                        rx="25"
                                        transform="translate(999 707)"
                                    ></rect>
                                    <text
                                        id="Cash_100.0_"
                                        fill="#fff"
                                        data-name="Cash 100.0%"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="19"
                                        transform="translate(1019 745)"
                                    >
                                        <tspan xmlSpace="preserve" x="0" y="0">
                                            Cash{" "}
                                        </tspan>
                                        <tspan y="0" fill="#9d9aab" fontSize="17.5">
                                            100.0%
                                        </tspan>
                                    </text>
                                    <text
                                        id="Canadian_Dollar"
                                        fill="#fff"
                                        data-name="Canadian Dollar"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="19.5"
                                        transform="translate(1075 791)"
                                    >
                                        <tspan x="0" y="0">
                                            Canadian Dollar
                                        </tspan>
                                    </text>
                                    <text
                                        id="CA_1_059.70-3"
                                        fill="#fff"
                                        data-name="CA$1,059.70"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="19"
                                        transform="translate(1417.5 745)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            CA${data.caDollar}
                                        </tspan>
                                    </text>
                                    <text
                                        id="CA_1_059.70-4"
                                        fill="rgba(255,255,255,0.75)"
                                        data-name="CA$1,059.70"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="19"
                                        transform="translate(1417.5 803)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            CA${data.caDollar}
                                        </tspan>
                                    </text>
                                    <text
                                        id="CAD"
                                        fill="#9d9aab"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="17"
                                        transform="translate(1075 815)"
                                    >
                                        <tspan x="0" y="0">
                                            CAD
                                        </tspan>
                                    </text>
                                    <rect
                                        id="Rectangle_7-2"
                                        width="438"
                                        height="131"
                                        fill="#161220"
                                        data-name="Rectangle 7"
                                        rx="25"
                                        transform="translate(999 862)"
                                    ></rect>
                                    <rect
                                        id="Rectangle_8"
                                        width="392"
                                        height="57"
                                        fill="#191523"
                                        data-name="Rectangle 8"
                                        rx="18"
                                        transform="translate(1021 920)"
                                    ></rect>
                                    <text
                                        id="Crypto"
                                        fill="#fff"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="19"
                                        transform="translate(1021 899)"
                                    >
                                        <tspan x="0" y="0">
                                            Crypto
                                        </tspan>
                                    </text>
                                    <text
                                        id="CA_0.00"
                                        fill="#fff"
                                        data-name="CA$0.00"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="19"
                                        transform="translate(1337 899)"
                                    >
                                        <tspan x="0" y="0">
                                            CA$0.00
                                        </tspan>
                                    </text>
                                    <g filter="url(#Path_10)" transform="translate(986.3 33)">
                                        <path
                                            id="Path_10-2"
                                            fill="#0a0711"
                                            d="M0 0h457v113H0Z"
                                            data-name="Path 10"
                                            transform="translate(2.7 901)"
                                        ></path>
                                    </g>
                                    <path
                                        id="Group_1"
                                        fill="url(#pattern)"
                                        d="M0 0h37v40H0z"
                                        data-name="Group 1"
                                        transform="translate(1020 775)"
                                    ></path>
                                    <path
                                        id="search-svgrepo-com_4_"
                                        fill="#b1b1b1"
                                        fillRule="evenodd"
                                        d="M21.413 19.613a11.459 11.459 0 1 0-1.8 1.8l7.213 7.214a1.273 1.273 0 0 0 1.8-1.8Zm-8.953 1.773a8.926 8.926 0 1 1 8.926-8.926 8.926 8.926 0 0 1-8.926 8.926"
                                        data-name="search-svgrepo-com (4)"
                                        transform="translate(1109 959.191)"
                                    ></path>
                                    <path
                                        id="Path_7"
                                        fill="#702fff"
                                        d="M29 0A29 29 0 1 1 0 29 29 29 0 0 1 29 0"
                                        data-name="Path 7"
                                        transform="translate(1185 953)"
                                    ></path>
                                    <path
                                        id="up-arrow-svgrepo-com"
                                        fill="#fff"
                                        fillRule="evenodd"
                                        d="M12 3a1 1 0 0 1 .707.293l7 7a1 1 0 1 1-1.414 1.414L13 6.414V18a1 1 0 0 1-2 0V6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l7-7A1 1 0 0 1 12 3"
                                        transform="rotate(44.03 -579.053 1980.728)"
                                    ></path>
                                    <path
                                        id="up-arrow-svgrepo-com-2"
                                        fill="#fff"
                                        fillRule="evenodd"
                                        d="M12 3a1 1 0 0 1 .707.293l7 7a1 1 0 1 1-1.414 1.414L13 6.414V18a1 1 0 0 1-2 0V6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l7-7A1 1 0 0 1 12 3"
                                        data-name="up-arrow-svgrepo-com"
                                        transform="rotate(-137 805.125 263.3)"
                                    ></path>
                                    <path
                                        id="wallet-2-svgrepo-com"
                                        fill="none"
                                        stroke="#8066d4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M23.905 9.226a2.613 2.613 0 0 1 2.613 2.613v10.453a2.613 2.613 0 0 1-2.613 2.613H6.92A3.92 3.92 0 0 1 3 20.985V7.92A3.92 3.92 0 0 1 6.92 4h14.4a2.61 2.61 0 0 1 2.589 2.613Zm0 0H3"
                                        transform="translate(1290.5 958.234)"
                                    ></path>
                                    <path
                                        id="Path_8"
                                        fill="none"
                                        stroke="#b1b1b1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M18.312 8.156A5.156 5.156 0 1 1 13.156 3a5.156 5.156 0 0 1 5.156 5.156"
                                        data-name="Path 8"
                                        transform="translate(1382.867 956.706)"
                                    ></path>
                                    <g
                                        id="Path_9"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        data-name="Path 9"
                                    >
                                        <path d="M1396.023 975.141c-5.054 0-9.154 3.477-9.154 7.767h18.309c0-4.29-4.099-7.767-9.155-7.767"></path>
                                        <path
                                            fill="#b1b1b1"
                                            d="M1396.023 975.141c-5.055 0-9.154 3.477-9.154 7.767h18.309c0-4.29-4.099-7.767-9.155-7.767m0-2c2.919 0 5.677.977 7.767 2.75a9.8 9.8 0 0 1 2.458 3.101 8.7 8.7 0 0 1 .93 3.916 2 2 0 0 1-2 2h-18.309a2 2 0 0 1-2-2c0-1.361.313-2.679.93-3.916a9.8 9.8 0 0 1 2.457-3.101c2.09-1.773 4.849-2.75 7.767-2.75"
                                        ></path>
                                    </g>
                                    <text
                                        id="Home"
                                        fill="#b1b1b1"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="14"
                                        transform="translate(1013 1006)"
                                    >
                                        <tspan x="0" y="0">
                                            Home
                                        </tspan>
                                    </text>
                                    <text
                                        id="Explore"
                                        fill="#b1b1b1"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="14"
                                        transform="translate(1098 1006)"
                                    >
                                        <tspan x="0" y="0">
                                            Explore
                                        </tspan>
                                    </text>
                                    <text
                                        id="Portfolio-2"
                                        fill="#8066d4"
                                        data-name="Portfolio"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="14"
                                        transform="translate(1276 1006)"
                                    >
                                        <tspan x="0" y="0">
                                            Portfolio
                                        </tspan>
                                    </text>
                                    <text
                                        id="Account"
                                        fill="#b1b1b1"
                                        fontFamily="KrakenProduct-Regular, Kraken Product"
                                        fontSize="14"
                                        transform="translate(1367 1006)"
                                    >
                                        <tspan x="0" y="0">
                                            Account
                                        </tspan>
                                    </text>
                                    <circle
                                        id="Ellipse_1"
                                        cx="1.75"
                                        cy="1.75"
                                        r="1.75"
                                        fill="#8066d4"
                                        data-name="Ellipse 1"
                                        transform="translate(1309 975)"
                                    ></circle>
                                    <path
                                        id="home-svgrepo-com_1_"
                                        fill="none"
                                        stroke="#b1b1b1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M11.522 29.269H8.261A3.234 3.234 0 0 1 5 26.062V14.711a3.18 3.18 0 0 1 1.139-2.435l8.153-6.871a3.3 3.3 0 0 1 4.245 0l8.153 6.871a3.18 3.18 0 0 1 1.139 2.435v11.351a3.234 3.234 0 0 1-3.261 3.206h-3.262m-9.783 0V20.65a1.617 1.617 0 0 1 1.631-1.6h6.522a1.617 1.617 0 0 1 1.631 1.6v8.619m-9.783 0h9.783"
                                        data-name="home-svgrepo-com (1)"
                                        transform="translate(1016.391 956.231)"
                                    ></path>
                                    {
                                        isIOS
                                            ?
                                            <rect
                                                id="Rectangle_9"
                                                width="165"
                                                height="5"
                                                fill="#fff"
                                                data-name="Rectangle 9"
                                                rx="2.5"
                                                transform="translate(1135 1037)"
                                            ></rect>
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
                            <label>Portfolio</label>
                            <input
                                type="text"
                                value={data.totalBalance}
                                name="totalBalance"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Cash</label>
                            <input
                                type="text"
                                value={data.caDollar}
                                name="caDollar"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default View106