"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from "@/utils/getPicture";
import Image from "next/image";
import { InterBaseEncoded } from "@/utils/encodedFonts/InterBaseEncoded";

const View91 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 91";

    const [data, setData] = useState({
        name: "HERO SHOKA",
        currency: "$212.93(CAD)",
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
    const [isOption, setIsOption] = useState(false);
    const [isIOS, setIsIOS] = useState(true);
    const [preview, setPreview] = useState("");
    const [isPreview, setIsPreview] = useState(false);

    const fetchCurrentTime = async () => {
        const timeValue = await getCurrentTime();
        setTime(timeValue);
    }

    const manageTimeDate = () => {
        const date = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };

        const formattedDate = date.toLocaleString('en-US', options);

        return setData({
            ...data,
            date: formattedDate
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
            0.25,
            0.1
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
                                viewBox="0 0 646 458"
                            >
                                <style>
                                    {
                                        InterBaseEncoded
                                    }
                                </style>
                                <defs>
                                    <clipPath id="clip-path">
                                        <path
                                            fill="#fff"
                                            stroke="#707070"
                                            strokeWidth="1"
                                            d="M0 0H92V65H0z"
                                            data-name="Rectangle 21"
                                            transform="translate(-.247 -.134)"
                                        ></path>
                                    </clipPath>
                                </defs>
                                <g data-name="Group 5" transform="translate(-883 -183)">
                                    <path
                                        fill="#fff"
                                        d="M0 0H646V458H0z"
                                        data-name="Rectangle 2"
                                        transform="translate(883 183)"
                                    ></path>
                                    <g data-name="Group 4">
                                        <g data-name="Group 3">
                                            <g data-name="Group 2">
                                                <g data-name="Group 1">
                                                    <path
                                                        fill="#ebebeb"
                                                        d="M0 0H646V78H0z"
                                                        data-name="Rectangle 22"
                                                        transform="translate(883 183)"
                                                    ></path>
                                                    <text
                                                        fill="#698da3"
                                                        data-name="All Inboxes"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="23"
                                                        transform="translate(931 239)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            All Inboxes
                                                        </tspan>
                                                    </text>
                                                    <path
                                                        d="M0 0H577V97H0z"
                                                        data-name="Rectangle 23"
                                                        transform="translate(919 279)"
                                                    ></path>
                                                    <path
                                                        fill="#eaeaea"
                                                        d="M0 0H15V362H0z"
                                                        data-name="Rectangle 24"
                                                        transform="translate(1494 279)"
                                                    ></path>
                                                    <path
                                                        fill="#eaeaea"
                                                        d="M0 0H15V362H0z"
                                                        data-name="Rectangle 25"
                                                        transform="translate(904 279)"
                                                    ></path>
                                                    <g
                                                        clipPath="url(#clip-path)"
                                                        data-name="Mask Group 1"
                                                        transform="translate(930.247 296.134)"
                                                    >
                                                        <g transform="translate(12.589 -.393)">
                                                            <path
                                                                fill="#ffb92a"
                                                                d="M65.439 55.251a10.19 10.19 0 01-10.19 10.19h-45.14A10.107 10.107 0 010 55.331V9.744A9.744 9.744 0 019.744 0H55.7a9.744 9.744 0 019.744 9.743v45.508z"
                                                                data-name="Path 14"
                                                            ></path>
                                                            <path
                                                                d="M16.1 81.541v16.637l-2.968.665V82.206zm7.858 2.145A5.347 5.347 0 0021 86.158v-1.551l-2.88.629v9.922a3.143 3.143 0 012.868.308v-4.841c.022-2.319.687-3.675 2.076-3.993 1.221-.275 1.679.636 1.664 2.04v7.577l2.828-.637.02-7.552c.017-3.7-1.476-4.856-3.622-4.372zm4.279-.72l1.62-.364v-2.331l2.865-.637v2.329l2.04-.459-.028 2.516-2.043.459-.015 6.3c.013.769.148 1.244 1.01 1.051a6.238 6.238 0 00.913-.278v2.362a7.33 7.33 0 01-1.737.609c-1.639.379-3.053-.687-3.053-2.865l.01-6.533-1.622.364zm9.982 4.762a4.3 4.3 0 00.037.739c.215 1.276.842 2.268 2.131 1.978a2.288 2.288 0 001.805-1.922l2.995-.666a5.766 5.766 0 01-4.632 5.083c-2.94.665-4.717-1.038-5.2-3.938-.534-3.179.294-7.916 4.65-8.893 3.214-.72 4.718 1.181 5.133 3.64a9.208 9.208 0 01.1 2.411zm4.17-3.128a2.616 2.616 0 00-.047-.542c-.175-1.045-.75-1.855-2.018-1.571-1.311.294-1.958 1.4-2.078 3.041zm9.941-3.66c-2 .472-2.958 1.863-2.97 4.59l-.027 5.183-2.863.642V78.869l2.763-.619a22.421 22.421 0 01.1 2.246 3.442 3.442 0 012.995-2.845v3.3zm10.17 6.727h-.017l-2.875.649a5.646 5.646 0 01-.482-1.331 3.74 3.74 0 01-2.99 2.318 2.888 2.888 0 01-3.636-2.392c-.631-3.327 1.76-4.948 4.206-5.572.88-.225 1.62-.356 2.456-.567l-.042-.749c-.018-.912-.23-2.023-1.765-1.677a1.83 1.83 0 00-1.562 1.8l-2.926.657c.037-2.01.915-3.95 4.3-4.712 2.652-.6 4.858.191 4.838 3.452v5.928a13.076 13.076 0 00.185 1.481 1.865 1.865 0 00.3.717zm-3.376-4.873a15.7 15.7 0 00-1.872.542c-1.547.637-2.07 1.358-1.877 2.374a1.145 1.145 0 001.559.928c1.978-.444 2.151-2.316 2.184-3.649zm13.7-1.591a5.362 5.362 0 01-4.5 5.324c-2.758.619-4.547-.832-5.091-3.705-.657-3.471.333-8.2 4.377-9.111a3.853 3.853 0 015.09 3.328l-2.778.624c-.2-.92-.649-1.808-1.933-1.519-2.021.454-2.191 3.965-1.83 5.885.314 1.664 1.066 2.268 2.1 2.038.948-.213 1.5-.938 1.709-2.216zM25.8 102.445l-4.053-2.758v6.768a.374.374 0 01-.749 0l-.008-8.3a1.739 1.739 0 10-3.477 0v14.453a4.715 4.715 0 004.707 4.71h.311a4.617 4.617 0 004.614-4.635v-7.627a3.421 3.421 0 00-1.344-2.615zm-11.76-2.162a1.335 1.335 0 10.624 2.6l2.025-.486v-2.742zm0 3.54a1.335 1.335 0 00.624 2.6l2.031-.481V103.2zm-.987 5.158a1.331 1.331 0 001.61.987l2.025-.486v-2.743l-2.649.636a1.331 1.331 0 00-.98 1.612z"
                                                                data-name="Path 15"
                                                                transform="translate(-9.924 -56.071)"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                    <g
                                                        stroke="#fcfefd"
                                                        strokeWidth="3"
                                                        data-name="Ellipse 9"
                                                        transform="translate(1421 301)"
                                                    >
                                                        <circle cx="26.5" cy="26.5" r="26.5" stroke="none"></circle>
                                                        <circle cx="26.5" cy="26.5" r="25" fill="none"></circle>
                                                    </g>
                                                    <text
                                                        fill="#fcfefd"
                                                        data-name="View in browser"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="20"
                                                        transform="translate(1130 335)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            View in browser{" "}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#fcfefd"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="20"
                                                        transform="translate(1323 335)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            Français
                                                        </tspan>
                                                    </text>
                                                    <path
                                                        fill="none"
                                                        stroke="#fcfefd"
                                                        strokeWidth="1"
                                                        d="M0 0L0 18.301"
                                                        data-name="Line 9"
                                                        transform="translate(1299.755 318.594)"
                                                    ></path>
                                                    <text
                                                        fill="#fcfefd"
                                                        data-name="?"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="39"
                                                        transform="translate(1439 341)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            ?
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#000619"
                                                        data-name="Hi HERO SHOKA,"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="30"
                                                        fontWeight="700"
                                                        transform="translate(964 438)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            Hi {data.name},
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        data-name="Newton has sent you $212.93(CAD) and the money has been automatically deposited into your bank account at RBC Royal Bank."
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="21"
                                                        transform="translate(964 506)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            Newton has sent you {data.currency} and the
                                                        </tspan>
                                                        <tspan x="0" y="24">
                                                            money has been automatically deposited into{" "}
                                                        </tspan>
                                                        <tspan x="0" y="48">
                                                            your bank account at RBC Royal Bank.
                                                        </tspan>
                                                    </text>
                                                    <path
                                                        d="M0 0H235V7H0z"
                                                        data-name="Rectangle 26"
                                                        transform="translate(1088 625)"
                                                    ></path>
                                                    <path
                                                        fill="#36638e"
                                                        d="M13.727 17.388a2.6 2.6 0 003.669 0l12.96-12.96c1.012-1.012.012-1.657-1-2.669s-1.657-1.012-2.669 0L15.558 12.888 3.429.767c-1.013-1.012-1.657-.012-2.67 1s-1.012 1.657 0 2.669L13.719 17.4z"
                                                        data-name="svgviewer-output"
                                                        transform="rotate(90 350.099 566.049)"
                                                    ></path>
                                                    <path
                                                        fill="#bfbfbf"
                                                        d="M13.727 17.388a2.6 2.6 0 003.669 0l12.96-12.96c1.012-1.012.012-1.657-1-2.669s-1.657-1.012-2.669 0L15.558 12.888 3.429.767c-1.013-1.012-1.657-.012-2.67 1s-1.012 1.657 0 2.669L13.719 17.4z"
                                                        data-name="svgviewer-output"
                                                        transform="rotate(180 724.67 120.293)"
                                                    ></path>
                                                    <path
                                                        fill="#36638e"
                                                        d="M13.727.759a2.6 2.6 0 013.669 0l12.96 12.96c1.012 1.012.012 1.657-1 2.669s-1.657 1.012-2.669 0L15.558 5.259 3.429 17.38c-1.012 1.012-1.657.012-2.669-1s-1.012-1.657 0-2.669L13.719.751z"
                                                        data-name="svgviewer-output"
                                                        transform="rotate(180 758.559 120.12)"
                                                    ></path>
                                                </g>
                                            </g>
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
                            <label>Amount Requested</label>
                            <input
                                type="text"
                                value={data.name}
                                name="name"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Currency</label>
                            <input
                                type="text"
                                value={data.currency}
                                name="currency"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default View91;