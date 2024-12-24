"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import getPicture from "@/utils/getPicture";
import Image from "next/image";
import Page93Icons from "../options/Page93Icons";

const View111 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 111";

    const [data, setData] = useState({

        name: "Joel",
        edc: "2857",
        amount: "$13,819.78",
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
            1.1,
            1.4,
            1.1
        );
    }

    const manageTimeDate = () => {
        const now = new Date();
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-US', options);

        return setData({
            ...data,
            date: formattedDate
        });
    };


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
                                viewBox="0 0 1310 1176"
                                className="poppins"
                            >
                                <defs>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="0.5"
                                        x2="0.5"
                                        y2="0.317"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#b1d1f7"></stop>
                                        <stop offset="1" stopColor="#c6d5fc"></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="linear-gradient-2"
                                        x1="0.5"
                                        x2="0.5"
                                        y2="1"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#542a7c"></stop>
                                        <stop offset="1" stopColor="#851a68"></stop>
                                    </linearGradient>
                                    <filter
                                        id="Rectangle_12"
                                        width="1310"
                                        height="464"
                                        x="0"
                                        y="712"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset></feOffset>
                                        <feGaussianBlur result="blur" stdDeviation="5"></feGaussianBlur>
                                        <feFlood floodOpacity="0.031"></feFlood>
                                        <feComposite in2="blur" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                    <filter
                                        id="Path_3"
                                        width="1213"
                                        height="417"
                                        x="49"
                                        y="759"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset></feOffset>
                                        <feGaussianBlur result="blur-2" stdDeviation="5"></feGaussianBlur>
                                        <feFlood floodOpacity="0.102"></feFlood>
                                        <feComposite in2="blur-2" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                </defs>
                                <g id="Group_21" data-name="Group 21" transform="translate(-1488 -222)">
                                    <path
                                        id="Rectangle_1"
                                        fill="#fff"
                                        d="M0 0h1280v1161H0z"
                                        data-name="Rectangle 1"
                                        transform="translate(1503 222)"
                                    ></path>
                                    <path
                                        id="Rectangle_2"
                                        fill="url(#linear-gradient)"
                                        d="M12 0h1256a12 12 0 0 1 12 12v1149H0V12A12 12 0 0 1 12 0"
                                        data-name="Rectangle 2"
                                        transform="translate(1503 222)"
                                    ></path>
                                    <g id="Group_20" data-name="Group 20">
                                        <g
                                            id="Group_16"
                                            data-name="Group 16"
                                            fontFamily="Poppins-Light, Poppins"
                                            fontSize="102"
                                            fontWeight="300"
                                            transform="translate(1312)"
                                        >
                                            <text
                                                id="Good_evening_"
                                                data-name="Good evening,"
                                                transform="translate(240 690)"
                                            >
                                                <tspan x="0" y="0">
                                                    Good evening,
                                                </tspan>
                                            </text>
                                            <text id="Joel" transform="translate(240 838)">
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.name}
                                                </tspan>
                                            </text>
                                        </g>
                                        <g id="Group_15" data-name="Group 15" transform="translate(1313)">
                                            <g id="Group_10" data-name="Group 10">
                                                <g id="Group_4" data-name="Group 4">
                                                    <g
                                                        id="Rectangle_4"
                                                        fill="#fff"
                                                        stroke="#e2e4df"
                                                        strokeWidth="3"
                                                        data-name="Rectangle 4"
                                                        transform="translate(239 396)"
                                                    >
                                                        <rect width="551" height="103" stroke="none" rx="51.5"></rect>
                                                        <rect
                                                            width="548"
                                                            height="100"
                                                            x="1.5"
                                                            y="1.5"
                                                            fill="none"
                                                            rx="50"
                                                        ></rect>
                                                    </g>
                                                    <text
                                                        id="Need_help_"
                                                        fill="#393232"
                                                        data-name="Need help?"
                                                        fontFamily="Poppins-Regular, Poppins"
                                                        fontSize="51.5"
                                                        transform="translate(325 469)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            Need help?
                                                        </tspan>
                                                    </text>
                                                    <g
                                                        id="Group_3"
                                                        data-name="Group 3"
                                                        transform="translate(19.361 -120)"
                                                    >
                                                        <path
                                                            id="Rectangle_5"
                                                            fill="none"
                                                            d="M0 0h50v51H0z"
                                                            data-name="Rectangle 5"
                                                            transform="translate(242 546)"
                                                        ></path>
                                                        <g
                                                            id="Group_2"
                                                            data-name="Group 2"
                                                            transform="rotate(45 256.092 509.031)"
                                                        >
                                                            <g
                                                                id="search-svgrepo-com_6_"
                                                                data-name="search-svgrepo-com (6)"
                                                                transform="rotate(-45 796.855 -62.676)"
                                                            >
                                                                <g
                                                                    id="Group_1"
                                                                    data-name="Group 1"
                                                                    transform="translate(0 .05)"
                                                                >
                                                                    <path
                                                                        id="Path_1"
                                                                        fill="#292323"
                                                                        d="M0 14.624a14.566 14.566 0 0 0 24.236 10.9l9.288 9.288a.88.88 0 0 0 1.248-1.241l-9.3-9.288A14.571 14.571 0 1 0 0 14.624m27.392 0A12.817 12.817 0 1 1 14.574 1.807a12.835 12.835 0 0 1 12.818 12.817"
                                                                        data-name="Path 1"
                                                                        transform="translate(0 -.05)"
                                                                    ></path>
                                                                </g>
                                                            </g>
                                                            <path
                                                                id="Line_1"
                                                                fill="none"
                                                                stroke="#292323"
                                                                strokeLinecap="round"
                                                                strokeWidth="4"
                                                                d="M0 0h19.202"
                                                                data-name="Line 1"
                                                                transform="translate(318.298 545.137)"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                    <path
                                                        id="Line_2"
                                                        fill="none"
                                                        stroke="#e4e2e3"
                                                        strokeWidth="3"
                                                        d="M0 0v71"
                                                        data-name="Line 2"
                                                        transform="translate(686.5 412)"
                                                    ></path>
                                                </g>
                                                <g id="Group_9" data-name="Group 9" transform="translate(12 -109)">
                                                    <g id="Group_8" data-name="Group 8" transform="translate(-11 27)">
                                                        <path
                                                            id="Rectangle_6"
                                                            fill="url(#linear-gradient-2)"
                                                            d="M32.5 0A32.5 32.5 0 0 1 65 32.5 32.5 32.5 0 0 1 32.5 65H7.879A7.88 7.88 0 0 1 0 57.121V32.5A32.5 32.5 0 0 1 32.5 0"
                                                            data-name="Rectangle 6"
                                                            transform="translate(705 497)"
                                                        ></path>
                                                        <g id="Group_7" data-name="Group 7" transform="translate(0 4)">
                                                            <g id="Group_5" data-name="Group 5">
                                                                <path
                                                                    id="Polygon_1"
                                                                    fill="#fff"
                                                                    d="M8.5 0 17 8.592H0Z"
                                                                    data-name="Polygon 1"
                                                                    transform="rotate(90 95.546 630.046)"
                                                                ></path>
                                                            </g>
                                                            <g id="Group_6" fill="#fff" data-name="Group 6">
                                                                <rect
                                                                    id="Rectangle_7"
                                                                    width="41"
                                                                    height="15"
                                                                    data-name="Rectangle 7"
                                                                    rx="5"
                                                                    transform="translate(717 509.25)"
                                                                ></rect>
                                                                <rect
                                                                    id="Rectangle_8"
                                                                    width="31"
                                                                    height="15"
                                                                    data-name="Rectangle 8"
                                                                    rx="5"
                                                                    transform="translate(717 529.25)"
                                                                ></rect>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <g
                                                        id="Ellipse_1"
                                                        fill="#d71d28"
                                                        stroke="#fff"
                                                        strokeWidth="3"
                                                        data-name="Ellipse 1"
                                                        transform="translate(727 508)"
                                                    >
                                                        <circle cx="25.5" cy="25.5" r="25.5" stroke="none"></circle>
                                                        <circle cx="25.5" cy="25.5" r="24" fill="none"></circle>
                                                    </g>
                                                    <text
                                                        id="_7"
                                                        fill="rgba(255,255,255,0.65)"
                                                        data-name="7"
                                                        fontFamily="Poppins-Light, Poppins"
                                                        fontSize="51"
                                                        fontWeight="300"
                                                        transform="translate(739 553)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            7
                                                        </tspan>
                                                    </text>
                                                </g>
                                            </g>
                                            <g id="Group_14" data-name="Group 14" transform="translate(-15 -202)">
                                                <g id="Group_12" data-name="Group 12" transform="translate(15 9)">
                                                    <rect
                                                        id="Rectangle_3"
                                                        width="214"
                                                        height="181"
                                                        fill="rgba(0,0,0,0.09)"
                                                        data-name="Rectangle 3"
                                                        rx="33"
                                                        transform="translate(952 547)"
                                                    ></rect>
                                                    <g id="Group_11" data-name="Group 11">
                                                        <rect
                                                            id="Rectangle_9"
                                                            width="279"
                                                            height="181"
                                                            fill="rgba(0,0,0,0.09)"
                                                            data-name="Rectangle 9"
                                                            rx="33"
                                                            transform="translate(1143 547)"
                                                        ></rect>
                                                        <text
                                                            id="Sign_off"
                                                            data-name="Sign off"
                                                            fontFamily="Poppins-Regular, Poppins"
                                                            fontSize="45.8"
                                                            transform="translate(1213 654)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                Sign off
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    <rect
                                                        id="Rectangle_10"
                                                        width="71"
                                                        height="42"
                                                        fill="rgba(0,0,0,0.06)"
                                                        data-name="Rectangle 10"
                                                        rx="10"
                                                        transform="translate(1024 617)"
                                                    ></rect>
                                                </g>
                                                <g
                                                    id="Group_13"
                                                    fill="none"
                                                    stroke="#383f45"
                                                    strokeWidth="2.5"
                                                    data-name="Group 13"
                                                    transform="translate(17 60.5)"
                                                >
                                                    <path
                                                        id="Path_2"
                                                        strokeLinejoin="round"
                                                        d="M1026.37 534.585a80 80 0 0 1-4 11.905h47.13s-1.51-2.612-4-11.905 2.23-35-20.313-35-16.717 27.16-18.817 35Z"
                                                        data-name="Path 2"
                                                        transform="translate(11.768 63.675)"
                                                    ></path>
                                                    <path
                                                        id="Line_3"
                                                        d="M0 6V0"
                                                        data-name="Line 3"
                                                        transform="translate(1057.5 557.5)"
                                                    ></path>
                                                    <path
                                                        id="Line_4"
                                                        d="M0 0h10.795"
                                                        data-name="Line 4"
                                                        transform="translate(1052.705 614.5)"
                                                    ></path>
                                                </g>
                                                <g
                                                    id="Rectangle_11"
                                                    fill="#d71d28"
                                                    stroke="#fff"
                                                    strokeWidth="3"
                                                    data-name="Rectangle 11"
                                                    transform="translate(1077 591)"
                                                >
                                                    <rect width="83" height="54" stroke="none" rx="26"></rect>
                                                    <rect
                                                        width="80"
                                                        height="51"
                                                        x="1.5"
                                                        y="1.5"
                                                        fill="none"
                                                        rx="24.5"
                                                    ></rect>
                                                </g>
                                                <text
                                                    id="_9_"
                                                    fill="#fff"
                                                    data-name="9+"
                                                    fontFamily="Poppins-Light, Poppins"
                                                    fontSize="50"
                                                    fontWeight="300"
                                                    transform="translate(1087 636)"
                                                >
                                                    <tspan x="0" y="0">
                                                        9+
                                                    </tspan>
                                                </text>
                                            </g>
                                        </g>
                                        <g id="Group_19" data-name="Group 19" transform="translate(1313)">
                                            <g id="Group_17" data-name="Group 17">
                                                <g filter="url(#Rectangle_12)" transform="translate(175 222)">
                                                    <path
                                                        id="Rectangle_12-2"
                                                        fill="#f8f7f5"
                                                        d="M73 0h1134a73 73 0 0 1 73 73v361H0V73A73 73 0 0 1 73 0"
                                                        data-name="Rectangle 12"
                                                        transform="translate(15 727)"
                                                    ></path>
                                                </g>
                                                <g filter="url(#Path_3)" transform="translate(175 222)">
                                                    <path
                                                        id="Path_3-2"
                                                        fill="#fff"
                                                        d="M21 0h1141a21 21 0 0 1 21 21v366H0V21A21 21 0 0 1 21 0"
                                                        data-name="Path 3"
                                                        transform="translate(64 774)"
                                                    ></path>
                                                </g>
                                            </g>
                                            <g id="Group_18" data-name="Group 18">
                                                <text
                                                    id="EVERTDAY_CHECKING_...2857"
                                                    data-name="EVERTDAY CHECKING ...2857"
                                                    fontFamily="Poppins-SemiBold, Poppins"
                                                    fontSize="58"
                                                    fontWeight="600"
                                                    transform="translate(288 1104)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="start">
                                                        EVERYDAY CHECKING ...{data.edc}
                                                    </tspan>
                                                </text>
                                                <text
                                                    id="_13_819.78"
                                                    data-name="$13,819.78"
                                                    fontFamily="Poppins-Light, Poppins"
                                                    fontSize="100"
                                                    fontWeight="300"
                                                    letterSpacing=".122em"
                                                    transform="translate(288 1241)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="start">
                                                        {data.amount}
                                                    </tspan>
                                                </text>
                                                <text
                                                    id="Available_balance"
                                                    data-name="Available balance"
                                                    fontFamily="Poppins-Regular, Poppins"
                                                    fontSize="42.5"
                                                    transform="translate(287 1336)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Available balance
                                                    </tspan>
                                                </text>
                                            </g>
                                        </g>
                                        <rect
                                            id="Rectangle_13"
                                            width="75"
                                            height="41"
                                            fill="#e9e9eb"
                                            data-name="Rectangle 13"
                                            rx="10"
                                            transform="translate(2106 1115)"
                                        ></rect>
                                    </g>
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
                                isDarkBg={true}
                                isIOS={isIOS}
                                bgColor="#B1D1F7"
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
                            <label>Name</label>
                            <input
                                type="text"
                                value={data.name}
                                name="name"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Everyday Checking</label>
                            <input
                                type="text"
                                value={data.edc}
                                name="edc"
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
                    </div>
                </div>
            </div>

        </>
    )
}

export default View111