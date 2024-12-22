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

const View49 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 49";

    const [data, setData] = useState({
        amount: "229.0031 USDT",
        fees: "1.6",
        network: "TRC20",
        date: "2024-05-10 17:16:48",
        walletAddress1: "TWz5p9aPr7rog61eW",
        walletAddress2: "QSoc2fFNRJWC21fCV",
        walletAddress3: "e76aefdb85482f39e2",
        walletAddress4: "ae5e3a6291945f0b61",
        walletAddress5: "1a7248e7f4a99e5590",
        walletAddress6: "54d0dda31",
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
            0.3,
            1,
            0.5,
            0.3
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
                                viewBox="0 0 1803 3932"

                            >
                                <style>
                                    {
                                        RobotoBaseEncoded
                                    }
                                </style>
                                <g data-name="Group 309" transform="translate(-2633 -95)">
                                    <g data-name="Group 308">
                                        <g
                                            fill="#100f14"
                                            stroke="#707070"
                                            strokeWidth="1"
                                            data-name="Rectangle 21"
                                            transform="translate(2633 95)"
                                        >
                                            <path stroke="none" d="M0 0H1803V3932H0z"></path>
                                            <path fill="none" d="M0.5 0.5H1802.5V3931.5H0.5z"></path>
                                        </g>
                                        <text
                                            fill="#fff"
                                            data-name="17:27"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="66"
                                            letterSpacing=".01em"
                                            transform="translate(2774.664 206.195)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.time}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="Withdrawal Details"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="80"
                                            letterSpacing=".04em"
                                            transform="translate(3176.029 436.078)"
                                        >
                                            <tspan x="0" y="0">
                                                Withdrawal Details
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#747379"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            letterSpacing=".01em"
                                            transform="translate(3421.529 702.238)"
                                        >
                                            <tspan x="0" y="0">
                                                Quantity
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fafafc"
                                            data-name="229.0031 USDT"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="88"
                                            letterSpacing=".02em"
                                            transform="translate(3216.004 845.713)"
                                        >
                                            <tspan x="320" y="0" textAnchor="middle" className="ibm">
                                                {data.amount}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#36a078"
                                            data-name="Withdrawal Completed"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="56"
                                            fontWeight="500"
                                            letterSpacing=".07em"
                                            transform="translate(3249.967 963.318)"
                                        >
                                            <tspan x="0" y="0">
                                                Withdrawal Completed
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#828282"
                                            data-name="Withdrawal Account"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".03em"
                                            transform="translate(2771.632 1274.576)"
                                        >
                                            <tspan x="-80" y="0">
                                                Withdrawal Account
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            data-name="Funding Account"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".04em"
                                            transform="translate(3903.699 1274.576)"
                                        >
                                            <tspan x="0" y="0">
                                                Funding Account
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            data-name="1.3"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="59"
                                            letterSpacing=".02em"
                                            transform="translate(4371 1420.164)"
                                        >
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.fees}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#828282"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            letterSpacing=".01em"
                                            transform="translate(2774.685 1418.164)"
                                        >
                                            <tspan x="-80" y="0">
                                                Fees
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#828282"
                                            data-name="Chain Type"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".01em"
                                            transform="translate(2775.227 1575.803)"
                                        >
                                            <tspan x="-80" y="0">
                                                Chain Type
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            letterSpacing=".02em"
                                            transform="translate(4371 1574.803)"
                                        >
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.network}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#828282"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".01em"
                                            transform="translate(2774.978 1720.391)"
                                        >
                                            <tspan x="-80" y="0">
                                                Time
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#828282"
                                            data-name="Withdrawal Address"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".02em"
                                            transform="translate(2773.094 1873.012)"
                                        >
                                            <tspan x="-80" y="0">
                                                Withdrawal Address
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".04em"
                                            transform="translate(3691.66 1864.979)"
                                        >
                                            <tspan x="605" y="0" textAnchor="end">
                                                {data.walletAddress1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            data-name="2024-05-10 17:16:48"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".04em"
                                            transform="translate(3800.863 1720.391)"
                                        >
                                            <tspan x="568" y="0" textAnchor="end">
                                                {data.date}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".04em"
                                            transform="translate(3674.5 1941.289)"
                                        >
                                            <tspan x="620" y="0" textAnchor="end">
                                                {data.walletAddress2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#828282"
                                            data-name="Transaction Hash"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".03em"
                                            transform="translate(2773.311 2105.959)"
                                        >
                                            <tspan x="-80" y="0">
                                                Transaction Hash
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".07em"
                                            transform="translate(3675.004 2097.926)"
                                        >
                                            <tspan x="622" y="0" textAnchor="end">
                                                {data.walletAddress3}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".07em"
                                            transform="translate(3665 2178)"
                                        >
                                            <tspan x="636" y="0" textAnchor="end">
                                                {data.walletAddress4}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            data-name="1a7248e7f4a99e5590"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".07em"
                                            transform="translate(3661.127 2258.58)"
                                        >
                                            <tspan x="638" y="0" textAnchor="end">
                                                {data.walletAddress5}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            data-name="54d0dda31"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".07em"
                                            transform="translate(3976.072 2338.906)"
                                        >
                                            <tspan x="324" y="0" textAnchor="end">
                                                {data.walletAddress6}
                                            </tspan>
                                        </text>
                                        <g
                                            fill="#132a22"
                                            stroke="#409a76"
                                            strokeWidth="1"
                                            data-name="Ellipse 1"
                                            opacity="0.54"
                                            transform="translate(3170.999 914)"
                                        >
                                            <ellipse
                                                cx="30"
                                                cy="30.5"
                                                stroke="none"
                                                rx="30"
                                                ry="30.5"
                                            ></ellipse>
                                            <ellipse cx="30" cy="30.5" fill="none" rx="29.5" ry="30"></ellipse>
                                        </g>
                                        <path
                                            fill="#2e946c"
                                            d="M27.837 96.619a2.1 2.1 0 010 2.928L11.546 116.1a2.008 2.008 0 01-2.884 0l-8.141-8.271a2.1 2.1 0 010-2.928 2.008 2.008 0 012.884 0l6.707 6.828 14.86-15.089a2.008 2.008 0 012.884 0z"
                                            transform="translate(3187.135 838.094)"
                                        ></path>
                                        <g
                                            fill="#16171b"
                                            stroke="#828282"
                                            strokeWidth="1"
                                            data-name="Rectangle 22"
                                            opacity="0.67"
                                            transform="translate(2701 3601)"
                                        >
                                            <rect width="1671" height="201" stroke="none" rx="9"></rect>
                                            <rect
                                                width="1670"
                                                height="200"
                                                x="0.5"
                                                y="0.5"
                                                fill="none"
                                                rx="8.5"
                                            ></rect>
                                        </g>
                                        <text
                                            fill="#d2d2d3"
                                            data-name="View in Blockchain Explorer"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="63"
                                            fontWeight="500"
                                            letterSpacing=".06em"
                                            transform="translate(3087.919 3725.529)"
                                        >
                                            <tspan x="0" y="0">
                                                View in Blockchain Explorer
                                            </tspan>
                                        </text>
                                        {
                                            isIOS
                                                ?
                                                <>
                                                    <rect
                                                        width="659"
                                                        height="16"
                                                        fill="#fff"
                                                        data-name="Rectangle 23"
                                                        rx="8"
                                                        transform="translate(3207 3979)"
                                                    ></rect>
                                                </>
                                                :
                                                <></>
                                        }

                                        <path
                                            d="M0 0H1791V48H0z"
                                            data-name="Rectangle 24"
                                            transform="translate(2637 1087)"
                                        ></path>
                                        <g
                                            fill="#d2c9c9"
                                            data-name="Group 304"
                                            transform="translate(-245.76 76)"
                                        >
                                            <path
                                                d="M37.968 59.189L10.125 32.516 38.747 4.673 33.49 0 0 32.516l10.977 10.339 22.513 21.2z"
                                                data-name="Path 15"
                                                transform="translate(2980.783 305)"
                                            ></path>
                                            <path
                                                d="M0 0H65.209V7.132H0z"
                                                data-name="Rectangle 72"
                                                transform="translate(2988.791 334.24)"
                                            ></path>
                                        </g>
                                        <g
                                            stroke="#707070"
                                            strokeWidth="3"
                                            data-name="Group 305"
                                            transform="translate(1878 -5)"
                                        >
                                            <g
                                                fill="none"
                                                data-name="Rectangle 408"
                                                transform="translate(2448 2067)"
                                            >
                                                <path stroke="none" d="M0 0H37V37H0z"></path>
                                                <path d="M1.5 1.5H35.5V35.5H1.5z"></path>
                                            </g>
                                            <g
                                                fill="#100f14"
                                                data-name="Rectangle 407"
                                                transform="translate(2458 2055)"
                                            >
                                                <path stroke="none" d="M0 0H37V37H0z"></path>
                                                <path fill="none" d="M1.5 1.5H35.5V35.5H1.5z"></path>
                                            </g>
                                        </g>
                                        <g
                                            stroke="#707070"
                                            strokeWidth="3"
                                            data-name="Group 306"
                                            transform="translate(1878 -234)"
                                        >
                                            <g
                                                fill="none"
                                                data-name="Rectangle 408"
                                                transform="translate(2448 2067)"
                                            >
                                                <path stroke="none" d="M0 0H37V37H0z"></path>
                                                <path d="M1.5 1.5H35.5V35.5H1.5z"></path>
                                            </g>
                                            <g
                                                fill="#100f14"
                                                data-name="Rectangle 407"
                                                transform="translate(2458 2055)"
                                            >
                                                <path stroke="none" d="M0 0H37V37H0z"></path>
                                                <path fill="none" d="M1.5 1.5H35.5V35.5H1.5z"></path>
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
                                // iconPadding={`2rem 4.5rem 0rem 6rem`}
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
                            <label>Amount</label>
                            <input
                                type="text"
                                value={data.amount}
                                name="amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Fees</label>
                            <input
                                type="text"
                                value={data.fees}
                                name="fees"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Chain Type</label>
                            <input
                                type="text"
                                value={data.network}
                                name="network"
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
                        </div>
                        <div className="global_form_inner">
                            <label>Withdrawal Address</label>
                            <input
                                type="text"
                                value={data.walletAddress1}
                                name="walletAddress1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.walletAddress2}
                                name="walletAddress2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Transaction Hash</label>
                            <input
                                type="text"
                                value={data.walletAddress3}
                                name="walletAddress3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.walletAddress4}
                                name="walletAddress4"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.walletAddress5}
                                name="walletAddress5"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.walletAddress6}
                                name="walletAddress6"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default View49