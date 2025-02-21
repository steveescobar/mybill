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

const View20 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 20";

    const [data, setData] = useState({
        amount: " AUD$ 3,000",
        name: "RH",
        fullname: "RICH HEEREN",
        date: "Today, 13:51.",
        bank: "Transfer via Osko",
        fullname1: "Rick Heeren",
        amount1: "AU$ +3,000"
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
            1.2,
            0,
            1.2
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
                                viewBox="0 0 388 840.338"
                            >
                                <style>
                                    {
                                        InterBaseEncoded
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
                                        <stop offset="0" stopColor="#263ff4"></stop>
                                        <stop offset="0.046" stopColor="#3956fc"></stop>
                                        <stop offset="1" stopColor="#04062d"></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="linear-gradient-2"
                                        x1="1"
                                        x2="0"
                                        y1="0.65"
                                        y2="0.5"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#2b2b35"></stop>
                                        <stop offset="1" stopColor="#313237"></stop>
                                    </linearGradient>
                                </defs>
                                <g id="Group_98" data-name="Group 98" transform="translate(-631 -117)">
                                    <image
                                        xlinkHref="data:image/jpeg;base64,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"
                                        id="photo_2025-02-21_11-59-28"
                                        width="388"
                                        height="840.338"
                                        transform="translate(631 117)"
                                    ></image>
                                    <g id="Group_97" data-name="Group 97">
                                        <g id="Group_87" data-name="Group 87">
                                            <path
                                                id="Rectangle_62"
                                                fill="url(#linear-gradient)"
                                                d="M0 0h388v355H0z"
                                                data-name="Rectangle 62"
                                                transform="translate(631 117)"
                                            ></path>
                                            <g id="Group_85" data-name="Group 85">
                                                <g
                                                    id="Group_83"
                                                    data-name="Group 83"
                                                    transform="translate(448 -17.278)"
                                                >
                                                    <g
                                                        id="Group_72"
                                                        data-name="Group 72"
                                                        transform="translate(199 185)"
                                                    >
                                                        <circle
                                                            id="Ellipse_4"
                                                            cx="18"
                                                            cy="18"
                                                            r="18"
                                                            fill="#5c58e1"
                                                            data-name="Ellipse 4"
                                                            transform="translate(0 .278)"
                                                        ></circle>
                                                    </g>
                                                    <g
                                                        id="Group_73"
                                                        fill="#fff"
                                                        data-name="Group 73"
                                                        transform="translate(208.763 196.456)"
                                                    >
                                                        <path
                                                            id="Path_3"
                                                            d="m4.6 32.944-.321.9h-2.3A1.91 1.91 0 0 0 0 35.684v7.369A1.91 1.91 0 0 0 1.975 44.9h11.849a1.91 1.91 0 0 0 1.976-1.847v-7.369a1.91 1.91 0 0 0-1.975-1.843h-2.3l-.321-.9A1.47 1.47 0 0 0 9.794 32H6a1.47 1.47 0 0 0-1.4.944m3.3 3.661a2.769 2.769 0 1 1 0 5.527 2.769 2.769 0 1 1 0-5.527"
                                                            data-name="Path 3"
                                                            transform="translate(0 -32)"
                                                        ></path>
                                                        <g
                                                            id="Ellipse_7"
                                                            stroke="#5c58e1"
                                                            strokeWidth="1.5"
                                                            data-name="Ellipse 7"
                                                            transform="translate(4.237 3.822)"
                                                        >
                                                            <circle cx="4" cy="4" r="4" stroke="none"></circle>
                                                            <circle cx="4" cy="4" r="3.25" fill="none"></circle>
                                                        </g>
                                                    </g>
                                                </g>
                                                <rect
                                                    id="Rectangle_81"
                                                    width="230"
                                                    height="36"
                                                    fill="#434ab2"
                                                    data-name="Rectangle 81"
                                                    rx="18"
                                                    transform="translate(688 168)"
                                                ></rect>
                                                <g
                                                    id="Group_75"
                                                    data-name="Group 75"
                                                    transform="translate(441.695 -16.843)"
                                                >
                                                    <path
                                                        id="Path_4"
                                                        fill="#fff"
                                                        d="M14.74 7.369a7.35 7.35 0 0 1-1.417 4.345l4.485 4.491a1.135 1.135 0 0 1-1.6 1.6l-4.487-4.485a7.369 7.369 0 1 1 3.022-5.952Zm-7.368 5.1a5.1 5.1 0 1 0-5.1-5.1 5.1 5.1 0 0 0 5.1 5.1"
                                                        data-name="Path 4"
                                                        transform="rotate(-2 5688.771 -7318.977)"
                                                    ></path>
                                                </g>
                                                <text
                                                    id="To_search"
                                                    fill="#fff"
                                                    data-name="To search"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="10.3"
                                                    fontWeight="500"
                                                    letterSpacing=".019em"
                                                    transform="translate(728 190)"
                                                >
                                                    <tspan x="0" y="0">
                                                        To search
                                                    </tspan>
                                                </text>
                                                <g
                                                    id="Group_69"
                                                    data-name="Group 69"
                                                    transform="translate(458 -18)"
                                                >
                                                    <circle
                                                        id="Ellipse_4-2"
                                                        cx="18"
                                                        cy="18"
                                                        r="18"
                                                        fill="#434ab2"
                                                        data-name="Ellipse 4"
                                                        transform="translate(466 186)"
                                                    ></circle>
                                                    <g
                                                        id="Group_68"
                                                        fill="#fff"
                                                        data-name="Group 68"
                                                        transform="translate(474.526 193.579)"
                                                    >
                                                        <rect
                                                            id="Rectangle_75"
                                                            width="4"
                                                            height="7"
                                                            data-name="Rectangle 75"
                                                            rx="1"
                                                            transform="translate(.474 11.421)"
                                                        ></rect>
                                                        <rect
                                                            id="Rectangle_76"
                                                            width="5"
                                                            height="18"
                                                            data-name="Rectangle 76"
                                                            rx="1"
                                                            transform="translate(6.474 .421)"
                                                        ></rect>
                                                        <rect
                                                            id="Rectangle_77"
                                                            width="4"
                                                            height="12"
                                                            data-name="Rectangle 77"
                                                            rx="1"
                                                            transform="translate(14.474 6.421)"
                                                        ></rect>
                                                    </g>
                                                </g>
                                                <g
                                                    id="Group_71"
                                                    data-name="Group 71"
                                                    transform="translate(454 -17)"
                                                >
                                                    <circle
                                                        id="Ellipse_5"
                                                        cx="18"
                                                        cy="18"
                                                        r="18"
                                                        fill="#404ba7"
                                                        data-name="Ellipse 5"
                                                        transform="translate(514 185)"
                                                    ></circle>
                                                    <g
                                                        id="Group_70"
                                                        fill="#fff"
                                                        data-name="Group 70"
                                                        transform="translate(521.579 195.421)"
                                                    >
                                                        <path
                                                            id="Rectangle_78"
                                                            d="M0 0h19.895v6.632A1.9 1.9 0 0 1 18 8.526H1.895A1.9 1.9 0 0 1 0 6.632Z"
                                                            data-name="Rectangle 78"
                                                            transform="translate(0 5.684)"
                                                        ></path>
                                                        <path
                                                            id="Rectangle_79"
                                                            d="M1.895 0H18a1.9 1.9 0 0 1 1.895 1.895v.947H0v-.947A1.9 1.9 0 0 1 1.895 0"
                                                            data-name="Rectangle 79"
                                                        ></path>
                                                    </g>
                                                    <rect
                                                        id="Rectangle_80"
                                                        width="11"
                                                        height="2"
                                                        fill="#404ba7"
                                                        data-name="Rectangle 80"
                                                        rx="1"
                                                        transform="translate(523 206)"
                                                    ></rect>
                                                </g>
                                            </g>
                                            <g id="Group_86" data-name="Group 86">
                                                <g id="Group_84" data-name="Group 84">
                                                    <g
                                                        id="Group_67"
                                                        data-name="Group 67"
                                                        transform="translate(410 -53.597)"
                                                    >
                                                        <rect
                                                            id="Rectangle_74"
                                                            width="108"
                                                            height="39"
                                                            fill="#5b5f8c"
                                                            data-name="Rectangle 74"
                                                            rx="19.5"
                                                            transform="translate(361 415.597)"
                                                        ></rect>
                                                    </g>
                                                    <text
                                                        id="Bills"
                                                        fill="#fff"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="11"
                                                        fontWeight="500"
                                                        letterSpacing="-.008em"
                                                        transform="translate(815 387)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            Bills
                                                        </tspan>
                                                    </text>
                                                </g>
                                                <text
                                                    id="AU_0"
                                                    fill="#fff"
                                                    data-name="AU$0"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="34"
                                                    fontWeight="500"
                                                    letterSpacing=".045em"
                                                    transform="translate(823 337)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="middle">
                                                        {data.amount}
                                                    </tspan>
                                                </text>
                                                <text
                                                    id="Personal_AUD"
                                                    fill="#fff"
                                                    data-name="Personal AUD"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="11"
                                                    letterSpacing=".039em"
                                                    transform="translate(788 294)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Personal AUD
                                                    </tspan>
                                                </text>
                                            </g>
                                        </g>
                                        <g id="Group_95" data-name="Group 95">
                                            <path
                                                id="Rectangle_84"
                                                fill="#1d1e30"
                                                d="M14 0h326a14 14 0 0 1 14 14v80H0V14A14 14 0 0 1 14 0"
                                                data-name="Rectangle 84"
                                                transform="translate(648 776)"
                                            ></path>
                                            <g id="Group_90" data-name="Group 90">
                                                <g id="Group_89" data-name="Group 89">
                                                    <circle
                                                        id="Ellipse_8"
                                                        cx="19.5"
                                                        cy="19.5"
                                                        r="19.5"
                                                        fill="#825dfc"
                                                        data-name="Ellipse 8"
                                                        transform="translate(663 790)"
                                                    ></circle>
                                                    <text
                                                        id="RH"
                                                        fill="#fff"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="16"
                                                        fontWeight="500"
                                                        letterSpacing=".039em"
                                                        transform="translate(672 815)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            {data.name}
                                                        </tspan>
                                                    </text>
                                                </g>
                                                <g id="Group_88" data-name="Group 88" transform="translate(0 -36)">
                                                    <g
                                                        id="Ellipse_9"
                                                        fill="#fff"
                                                        stroke="#000"
                                                        strokeWidth="1"
                                                        data-name="Ellipse 9"
                                                        transform="translate(690 852)"
                                                    >
                                                        <circle cx="8" cy="8" r="8" stroke="none"></circle>
                                                        <circle cx="8" cy="8" r="7.5" fill="none"></circle>
                                                    </g>
                                                    <text
                                                        id="_"
                                                        data-name="+"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="18"
                                                        letterSpacing=".039em"
                                                        transform="translate(693 866)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            +
                                                        </tspan>
                                                    </text>
                                                </g>
                                            </g>
                                            <g id="Group_94" data-name="Group 94">
                                                <g id="Group_93" data-name="Group 93">
                                                    <g id="Group_91" data-name="Group 91">
                                                        <text
                                                            id="Today_13:51."
                                                            fill="#9797a1"
                                                            data-name="Today, 13:51."
                                                            fontFamily="Roboto-Regular, Roboto"
                                                            fontSize="13"
                                                            letterSpacing=".008em"
                                                            transform="translate(718 829)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                {data.date}
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    <g id="Group_92" data-name="Group 92" transform="translate(0 31)">
                                                        <text
                                                            id="Transfer_via_Osko"
                                                            fill="#9797a1"
                                                            data-name="Transfer via Osko"
                                                            fontFamily="Roboto-Regular, Roboto"
                                                            fontSize="13"
                                                            letterSpacing=".055em"
                                                            transform="translate(719 816)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                {data.bank}
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    <text
                                                        id="Rick_Heeren"
                                                        fill="#9797a1"
                                                        data-name="Rick Heeren"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="13"
                                                        letterSpacing=".055em"
                                                        transform="translate(719 867)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            {data.fullname1}
                                                        </tspan>
                                                    </text>
                                                </g>
                                                <text
                                                    id="AU_3_000"
                                                    fill="#fff"
                                                    data-name="AU$ +3,000"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="13"
                                                    fontWeight="500"
                                                    letterSpacing=".027em"
                                                    transform="translate(915 804)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.amount1}
                                                    </tspan>
                                                </text>
                                                <text
                                                    id="RICK_HEEREN-2"
                                                    fill="#fff"
                                                    data-name="RICK HEEREN"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="16"
                                                    fontWeight="500"
                                                    letterSpacing=".01em"
                                                    transform="translate(719 806)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.fullname}
                                                    </tspan>
                                                </text>
                                            </g>
                                        </g>
                                        <g id="Group_96" data-name="Group 96">
                                            <path
                                                id="Rectangle_86"
                                                fill="url(#linear-gradient-2)"
                                                d="M0 0h148v12H0z"
                                                data-name="Rectangle 86"
                                                transform="translate(751 941)"
                                            ></path>

                                            {
                                                isIOS
                                                    ?
                                                    <>
                                                        <rect
                                                            id="Rectangle_85"
                                                            width="138"
                                                            height="4"
                                                            fill="#fff"
                                                            data-name="Rectangle 85"
                                                            rx="2"
                                                            transform="translate(756 945)"
                                                        ></rect>
                                                    </>
                                                    :
                                                    <></>
                                            }
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
                            <label>UP</label>
                            <input
                                type="text"
                                value={data.amount}
                                name="amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>DOWN</label>
                            <input
                                type="text"
                                value={data.name}
                                name="name"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.fullname}
                                name="fullname"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.date}
                                name="date"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.bank}
                                name="bank"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.fullname1}
                                name="fullname1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount1}
                                name="amount1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>



                    </div>
                </div>

            </div >
        </>
    )
}

export default View20