"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import getPicture from '@/utils/getPicture';
import { RobotoBaseEncoded } from "@/utils/encodedFonts/RobotoBaseEncoded";
import Image from "next/image";
import Page93Icons from "../options/Page93Icons";

const View89 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 41";

    const [data, setData] = useState({
        eth: "0.17076044102911098",
        time1: "10:50 PM",
        transaction: "Send ethereum",
        transaction1: "0x400B5CBF7fE",
        transaction2: "9850A938DAaf7",
        to: "C839",
        to1: "15d25F84Da46",
        quantity: "0.170760441029",
        quantity1: "11098 ETH",
        network: "Covered by",
        network1: "Shakepay",
        estimatedtime: "10 minutes",
        date: "Oct 1, 2024,",
        date1: "4:48 PM EDT",

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
            0.5,
            0.4,
            0.5
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
                                viewBox="0 0 591 1280"
                            >
                                <style>
                                    {
                                        RobotoBaseEncoded
                                    }
                                </style>
                                <g data-name="Group 28" transform="translate(-1021 -248)">
                                    <g data-name="Group 27" transform="translate(-9)">
                                        <path
                                            fill="#fff"
                                            d="M0 0H591V1280H0z"
                                            data-name="Rectangle 1"
                                            transform="translate(1030 248)"
                                        ></path>
                                        <g
                                            fill="none"
                                            stroke="#aaabad"
                                            strokeWidth="2"
                                            data-name="Group 11"
                                            transform="translate(722 -1)"
                                        >
                                            <path
                                                d="M864.083 463.515l14.134.322-12.306 7.255"
                                                data-name="Path 9"
                                            ></path>
                                            <path
                                                d="M856.458 470.916l-10.556-7.353 13.134.051 3.322-11.03 2.72 11.667"
                                                data-name="Path 10"
                                            ></path>
                                            <path
                                                d="M856 469.792l-3.425 11.557 7.487-5.551 1.6-1.187 10.01 6.738-5.228-11.344"
                                                data-name="Path 11"
                                            ></path>
                                        </g>
                                        <text
                                            fill="#212121"
                                            data-name="[In progress] Sending"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="33"
                                            letterSpacing=".014em"
                                            transform="translate(1059 446)"
                                        >
                                            <tspan x="0" y="0">
                                                [In progress] Sending
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#212121"
                                            data-name="0.17076044102911098 ETH"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="33"
                                            letterSpacing="-.02em"
                                            transform="translate(1058 494)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.eth}
                                            </tspan>
                                        </text>
                                        <g data-name="Group 12" transform="translate(721)">
                                            <rect
                                                width="60"
                                                height="29"
                                                fill="#f4f4f4"
                                                data-name="Rectangle 12"
                                                rx="4"
                                                transform="translate(744 470)"
                                            ></rect>
                                            <text
                                                fill="#212121"
                                                fontFamily="SegoeUI, Segoe UI"
                                                fontSize="19"
                                                letterSpacing="-.002em"
                                                transform="translate(752 490)"
                                            >
                                                <tspan x="0" y="0">
                                                    Inbox
                                                </tspan>
                                            </text>
                                        </g>
                                        <g fill="#626264" data-name="Group 1" transform="translate(718)">
                                            <rect
                                                width="21"
                                                height="4"
                                                data-name="Rectangle 2"
                                                rx="1"
                                                transform="rotate(138 111.155 242.91)"
                                            ></rect>
                                            <rect
                                                width="21"
                                                height="4"
                                                data-name="Rectangle 3"
                                                rx="1"
                                                transform="rotate(-133 257.827 111.22)"
                                            ></rect>
                                        </g>
                                        <g data-name="Group 4" transform="translate(718 .633)">
                                            <g fill="#636468" data-name="Group 2" transform="translate(-.167)">
                                                <path
                                                    d="M0 0H3V22H0z"
                                                    data-name="Rectangle 4"
                                                    transform="translate(631 353)"
                                                ></path>
                                                <path
                                                    d="M0 0H3V22H0z"
                                                    data-name="Rectangle 5"
                                                    transform="translate(655 353)"
                                                ></path>
                                                <path
                                                    d="M0 0H3V25H0z"
                                                    data-name="Rectangle 6"
                                                    transform="rotate(90 142.5 514.5)"
                                                ></path>
                                                <path
                                                    d="M0 0H3V25H0z"
                                                    data-name="Rectangle 7"
                                                    transform="rotate(90 151.5 504.5)"
                                                ></path>
                                                <path
                                                    d="M0 0H3V22H0z"
                                                    data-name="Rectangle 8"
                                                    transform="rotate(90 154.5 501.5)"
                                                ></path>
                                                <path
                                                    d="M0 0H3V6.323H0z"
                                                    data-name="Rectangle 9"
                                                    transform="rotate(161.99 301.086 228.626)"
                                                ></path>
                                                <path
                                                    d="M0 0H3V6.942H0z"
                                                    data-name="Rectangle 10"
                                                    transform="rotate(25.97 -435.233 1547.96)"
                                                ></path>
                                            </g>
                                            <g fill="none" stroke="#707070" strokeWidth="2" data-name="Group 3">
                                                <path
                                                    d="M639.56 363.192l5.017 5.6 4.595-5.6"
                                                    data-name="Path 1"
                                                ></path>
                                                <path d="M644.5 368.05v-9.95" data-name="Path 2"></path>
                                            </g>
                                        </g>
                                        <g fill="none" data-name="Group 5" transform="translate(718)">
                                            <g data-name="Path 3">
                                                <path
                                                    d="M2 0h16a1.833 1.833 0 012 1.6v21.554a1.833 1.833 0 01-2 1.6H2a1.833 1.833 0 01-2-1.6V1.6A1.833 1.833 0 012 0z"
                                                    transform="translate(707 350.628)"
                                                ></path>
                                                <path
                                                    fill="#636468"
                                                    d="M3 3v18.75h14V3H3M2 0h16c1.105 0 2 .715 2 1.597v21.557c0 .882-.895 1.597-2 1.597H2c-1.105 0-2-.715-2-1.597V1.597C0 .715.895 0 2 0z"
                                                    transform="translate(707 350.628)"
                                                ></path>
                                            </g>
                                            <path
                                                stroke="#636468"
                                                strokeWidth="3"
                                                d="M705.185 351.5h23.629"
                                                data-name="Path 4"
                                            ></path>
                                            <path
                                                stroke="#636468"
                                                strokeWidth="3"
                                                d="M714.339 356.086v13.079"
                                                data-name="Path 6"
                                            ></path>
                                            <path
                                                stroke="#636468"
                                                strokeWidth="3"
                                                d="M720.339 356.086v13.079"
                                                data-name="Path 7"
                                            ></path>
                                            <path
                                                stroke="#636468"
                                                strokeWidth="3"
                                                d="M712.409 349.5h9.183"
                                                data-name="Path 5"
                                            ></path>
                                        </g>
                                        <g data-name="Group 10" transform="translate(694 -56)">
                                            <g data-name="Group 9" transform="translate(3 9)">
                                                <g data-name="Group 8" transform="translate(-5 4)">
                                                    <g
                                                        fill="none"
                                                        stroke="#636468"
                                                        strokeWidth="3"
                                                        data-name="Group 7"
                                                        transform="translate(25 41)"
                                                    >
                                                        <g data-name="Rectangle 11" transform="translate(777 353)">
                                                            <rect width="28" height="22" stroke="none" rx="1"></rect>
                                                            <rect
                                                                width="25"
                                                                height="19"
                                                                x="1.5"
                                                                y="1.5"
                                                                rx="0.5"
                                                            ></rect>
                                                        </g>
                                                        <path
                                                            d="M778.083 354.353l13.087 10.084 13.107-10.439"
                                                            data-name="Path 8"
                                                        ></path>
                                                    </g>
                                                    <ellipse
                                                        cx="7"
                                                        cy="6.5"
                                                        fill="#fff"
                                                        data-name="Ellipse 1"
                                                        rx="7"
                                                        ry="6.5"
                                                        transform="translate(819 387)"
                                                    ></ellipse>
                                                    <ellipse
                                                        cx="4.5"
                                                        cy="4"
                                                        fill="#66656a"
                                                        data-name="Ellipse 2"
                                                        rx="4.5"
                                                        ry="4"
                                                        transform="translate(822 390)"
                                                    ></ellipse>
                                                </g>
                                            </g>
                                        </g>
                                        <g fill="#636468" data-name="Group 17" transform="translate(718)">
                                            <circle
                                                cx="3.5"
                                                cy="3.5"
                                                r="3.5"
                                                data-name="Ellipse 7"
                                                transform="translate(850 358)"
                                            ></circle>
                                            <circle
                                                cx="3.5"
                                                cy="3.5"
                                                r="3.5"
                                                data-name="Ellipse 8"
                                                transform="translate(859 358)"
                                            ></circle>
                                            <circle
                                                cx="3.5"
                                                cy="3.5"
                                                r="3.5"
                                                data-name="Ellipse 9"
                                                transform="translate(868 358)"
                                            ></circle>
                                        </g>
                                        <text
                                            fill="#404040"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="21"
                                            letterSpacing=".016em"
                                            transform="translate(1142 576)"
                                        >
                                            <tspan x="0" y="0">
                                                Shakepay
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#878787"
                                            data-name="to me"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="18"
                                            letterSpacing=".011em"
                                            transform="translate(1142 609)"
                                        >
                                            <tspan x="0" y="0">
                                                to me
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#878787"
                                            data-name="1:50 PM"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="19"
                                            letterSpacing="-.011em"
                                            transform="translate(1247 575)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.time1}
                                            </tspan>
                                        </text>
                                        <g data-name="Group 13" transform="translate(823 -21)">
                                            <circle
                                                cx="28.5"
                                                cy="28.5"
                                                r="28.5"
                                                fill="#34a853"
                                                data-name="Ellipse 3"
                                                transform="translate(235 579)"
                                            ></circle>
                                            <text
                                                fill="#d1e7d0"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="51"
                                                letterSpacing="-.02em"
                                                transform="translate(251 621)"
                                            >
                                                <tspan x="0" y="0">
                                                    s
                                                </tspan>
                                            </text>
                                        </g>
                                        <g
                                            fill="none"
                                            stroke="#616568"
                                            strokeWidth="2"
                                            data-name="Group 16"
                                            transform="translate(718)"
                                        >
                                            <path
                                                d="M792.507 563.828L783 572.41l9.506 9.137"
                                                data-name="Path 13"
                                            ></path>
                                            <path
                                                d="M783.529 572.437h21.778l1.537.4.569.766.37 1.611.171 8.873"
                                                data-name="Path 14"
                                            ></path>
                                        </g>
                                        <path
                                            fill="none"
                                            stroke="#878787"
                                            strokeWidth="2"
                                            d="M1198.184 601.345l4.909 5.444 4.907-5.444"
                                            data-name="Path 15"
                                        ></path>
                                        <g fill="#636468" data-name="Group 18" transform="translate(718 212)">
                                            <circle
                                                cx="3.5"
                                                cy="3.5"
                                                r="3.5"
                                                data-name="Ellipse 7"
                                                transform="translate(850 358)"
                                            ></circle>
                                            <circle
                                                cx="3.5"
                                                cy="3.5"
                                                r="3.5"
                                                data-name="Ellipse 8"
                                                transform="translate(859 358)"
                                            ></circle>
                                            <circle
                                                cx="3.5"
                                                cy="3.5"
                                                r="3.5"
                                                data-name="Ellipse 9"
                                                transform="translate(868 358)"
                                            ></circle>
                                        </g>
                                        <path
                                            fill="#f1f1f1"
                                            d="M0 0H540V223H0z"
                                            data-name="Rectangle 13"
                                            transform="translate(1060 640)"
                                        ></path>
                                        <rect
                                            width="671"
                                            height="5"
                                            fill="#a5a5a5"
                                            data-name="Rectangle 16"
                                            rx="2"
                                            transform="rotate(90 568.25 1048.25)"
                                        ></rect>
                                        <path
                                            fill="#009fff"
                                            d="M2 0h249a2 2 0 012 2v10H0V2a2 2 0 012-2z"
                                            data-name="Rectangle 15"
                                            transform="translate(1198 1516)"
                                        ></path>
                                        {
                                            isIOS
                                                ?
                                                <>
                                                    <rect
                                                        width="7"
                                                        height="210"
                                                        data-name="Rectangle 17"
                                                        rx="3.5"
                                                        transform="rotate(90 -38.75 1469.25)"
                                                    ></rect>
                                                </>
                                                :
                                                <></>
                                        }

                                        <path
                                            fill="#f1f1f1"
                                            d="M0 0H421V547H0z"
                                            data-name="Rectangle 14"
                                            transform="translate(1120 932)"
                                        ></path>
                                        <g
                                            fill="#697794"
                                            data-name="Group 23"
                                            fontSize="24"
                                            transform="translate(714)"
                                        >
                                            <text
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontWeight="700"
                                                letterSpacing=".006em"
                                                transform="translate(424 980)"
                                            >
                                                <tspan x="0" y="0">
                                                    Transaction
                                                </tspan>
                                            </text>
                                            <text
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontWeight="700"
                                                letterSpacing=".006em"
                                                transform="translate(424 1086)"
                                            >
                                                <tspan x="0" y="0">
                                                    To
                                                </tspan>
                                            </text>
                                            <text
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontWeight="700"
                                                letterSpacing=".043em"
                                                transform="translate(426 1213)"
                                            >
                                                <tspan x="0" y="0">
                                                    Quantity
                                                </tspan>
                                            </text>
                                            <text
                                                data-name="Network fee"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontWeight="700"
                                                letterSpacing=".054em"
                                                transform="translate(427 1296)"
                                            >
                                                <tspan x="0" y="0">
                                                    Network fee
                                                </tspan>
                                            </text>
                                            <text
                                                data-name="Estimated time"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontWeight="700"
                                                letterSpacing=".037em"
                                                transform="translate(425 1361)"
                                            >
                                                <tspan x="0" y="0">
                                                    Estimated time
                                                </tspan>
                                            </text>
                                            <text
                                                data-name="Date created"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontWeight="700"
                                                letterSpacing=".045em"
                                                transform="translate(425 1425)"
                                            >
                                                <tspan x="0" y="0">
                                                    Date created
                                                </tspan>
                                            </text>
                                            <text
                                                data-name="Send ethereum"
                                                fontFamily="Roboto-Regular, Roboto"
                                                letterSpacing=".034em"
                                                transform="translate(794 980)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.transaction}
                                                </tspan>
                                            </text>
                                            <text
                                                data-name="4401096554494"
                                                fontFamily="Roboto-Regular, Roboto"
                                                letterSpacing=".006em"
                                                transform="translate(794 1024)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.transaction1}
                                                </tspan>
                                            </text>
                                            <text
                                                data-name="9850A938DAaf7"
                                                fontFamily="Roboto-Regular, Roboto"
                                                letterSpacing=".006em"
                                                transform="translate(794 1065)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.transaction2}
                                                </tspan>
                                            </text>
                                            <text
                                                fontFamily="Roboto-Regular, Roboto"
                                                letterSpacing=".006em"
                                                transform="translate(794 1106)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.to}
                                                </tspan>
                                            </text>
                                            <text
                                                data-name="15d25F84Da46"
                                                fontFamily="Roboto-Regular, Roboto"
                                                letterSpacing=".006em"
                                                transform="translate(794 1147)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.to1}
                                                </tspan>
                                            </text>
                                            <text
                                                data-name="0.171"
                                                fontFamily="Roboto-Regular, Roboto"
                                                letterSpacing=".007em"
                                                transform="translate(794 1191)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.quantity}
                                                </tspan>
                                            </text>
                                            <text
                                                data-name="11098 ETH"
                                                fontFamily="Roboto-Regular, Roboto"
                                                letterSpacing=".007em"
                                                transform="translate(794 1231)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.quantity1}
                                                </tspan>
                                            </text>
                                            <text
                                                data-name="Covered by"
                                                fontFamily="Roboto-Regular, Roboto"
                                                letterSpacing=".013em"
                                                transform="translate(794 1276)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.network}
                                                </tspan>
                                            </text>
                                            <text
                                                data-name="Shakepay"
                                                fontFamily="Roboto-Regular, Roboto"
                                                letterSpacing=".007em"
                                                transform="translate(794 1317)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.network1}
                                                </tspan>
                                            </text>
                                            <text
                                                fontFamily="Roboto-Regular, Roboto"
                                                letterSpacing=".007em"
                                                transform="translate(647 1353)"
                                            >
                                                <tspan x="0" y="0"></tspan>
                                            </text>
                                            <text
                                                data-name="10 minutes"
                                                fontFamily="Roboto-Regular, Roboto"
                                                letterSpacing=".007em"
                                                transform="translate(794 1360)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.estimatedtime}
                                                </tspan>
                                            </text>
                                            <text
                                                data-name="Oct 1, 2024,"
                                                fontFamily="Roboto-Regular, Roboto"
                                                letterSpacing=".012em"
                                                transform="translate(794 1404)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.date}
                                                </tspan>
                                            </text>
                                            <text
                                                data-name="4:48 PM EDT"
                                                fontFamily="Roboto-Regular, Roboto"
                                                letterSpacing=".01em"
                                                transform="translate(794 1445)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.date1}
                                                </tspan>
                                            </text>
                                        </g>
                                        <text
                                            fill="#011d29"
                                            data-name="Shakepay"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="37"
                                            fontWeight="700"
                                            letterSpacing=".014em"
                                            transform="translate(1242 810)"
                                        >
                                            <tspan x="0" y="0">
                                                Shakepay
                                            </tspan>
                                        </text>
                                        <image
                                            width="94"
                                            height="94"
                                            transform="translate(1279 669)"
                                            xlinkHref="data:image/png;base64,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"
                                        ></image>
                                    </g>
                                    <path
                                        fill="#a6a7ab"
                                        d="M28.311 15.62A12.691 12.691 0 1015.62 28.311 12.691 12.691 0 0028.311 15.62zM0 15.62a15.62 15.62 0 1115.62 15.62A15.62 15.62 0 010 15.62zm7.975 3.533a1.262 1.262 0 011.3-1.58H22.24a1.264 1.264 0 011.3 1.58 8.145 8.145 0 01-15.565 0zm.836-7.438a1.952 1.952 0 111.952 1.952 1.952 1.952 0 01-1.953-1.952zm11.714-1.953a1.952 1.952 0 11-1.952 1.952 1.952 1.952 0 011.952-1.952z"
                                        data-name="Path 16"
                                        transform="translate(1422.44 557.91)"
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
                                iconPadding={`2.3rem 5rem 0rem 7rem`}
                                isDarkBg={true}
                                isIOS={isIOS}
                            /> */}
                            <Page93Icons
                                battery={battery}
                                isOption={isOption}
                                time={time}
                                network={network}
                                net={net}
                                isBattery={isBattery}
                                iconPadding={`2.3rem 5rem 0rem 7rem`}
                                isDarkBg={true}
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
                            <label>ETH Value</label>
                            <input
                                type="text"
                                value={data.eth}
                                name="eth"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Time</label>
                            <input
                                type="text"
                                value={data.time1}
                                name="time1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Transaction</label>
                            <input
                                type="text"
                                value={data.transaction}
                                name="transaction"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.transaction1}
                                name="transaction1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.transaction2}
                                name="transaction2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>To</label>
                            <input
                                type="text"
                                value={data.to}
                                name="to"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.to1}
                                name="to1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Quantity</label>
                            <input
                                type="text"
                                value={data.quantity}
                                name="quantity"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.quantity1}
                                name="quantity1"
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
                            <input
                                type="text"
                                value={data.network1}
                                name="network1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Estimated Time</label>
                            <input
                                type="text"
                                value={data.estimatedtime}
                                name="estimatedtime"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Date</label>
                            <input
                                type="text"
                                value={data.date}
                                name="date"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.date1}
                                name="date1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default View89