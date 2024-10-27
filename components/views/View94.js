"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from "@/utils/getPicture";
import { RobotoBaseEncoded } from "@/utils/encodedFonts/RobotoBaseEncoded";
import Image from "next/image";

const View94 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 94";

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
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 1736 3773"
                            >
                                <style>
                                    {
                                        RobotoBaseEncoded
                                    }
                                </style>
                                <defs>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="0.032"
                                        x2="0.75"
                                        y1="0.015"
                                        y2="0.35"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#949494"></stop>
                                        <stop offset="1" stopColor="#fff"></stop>
                                    </linearGradient>
                                </defs>
                                <g data-name="Group 366" transform="translate(-2184 -91)">
                                    <g data-name="Group 351" transform="translate(-102 -42)">
                                        <g data-name="Group 349">
                                            <path
                                                fill="url(#linear-gradient)"
                                                d="M0 0H1736V3773H0z"
                                                data-name="Rectangle 146"
                                                transform="translate(2286 133)"
                                            ></path>
                                            <text
                                                fill="#191919"
                                                data-name="Withdrawal Processing"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="61"
                                                letterSpacing=".1em"
                                                transform="translate(3154 1407)"
                                            >
                                                <tspan x="-371.778" y="0">
                                                    Withdrawal Processing
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#191919"
                                                data-name="Address/Account"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(2538 1850)"
                                            >
                                                <tspan x="-190.653" y="0">
                                                    Address/Account
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#191919"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(3502 1851)"
                                            >
                                                <tspan x="475.438" y="0" textAnchor="end">
                                                    {data.address}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#191919"
                                                data-name="7kNAKTEQS"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(3802 1939)"
                                            >
                                                <tspan x="173.727" y="0" textAnchor="end">
                                                    {data.address2}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#191919"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(3889 2139)"
                                            >
                                                <tspan x="94.069" y="0" textAnchor="end">
                                                    {data.network}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#191919"
                                                data-name="Platform Salary"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(3760 2357)"
                                            >
                                                <tspan x="216.347" y="0" textAnchor="end">
                                                    {data.remarks}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#191919"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(2439 2134)"
                                            >
                                                <tspan x="-91.54" y="0">
                                                    Network
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#191919"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(2447 2352)"
                                            >
                                                <tspan x="-96.206" y="0">
                                                    Remarks
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#191919"
                                                data-name="518.31 USDT"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="177"
                                                fontWeight="550"
                                                transform="translate(3154 1613)"
                                            >
                                                <tspan x="0" y="0" textAnchor="middle">
                                                    {data.amount}
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#6f6f6f"
                                                d="M0 0H1654V6H0z"
                                                data-name="Rectangle 148"
                                                transform="translate(2327 1694)"
                                            ></path>
                                            <path
                                                fill="#6f6f6f"
                                                d="M0 0H1677V6H0z"
                                                data-name="Rectangle 147"
                                                transform="translate(2315 3705)"
                                            ></path>
                                            <text
                                                fill="#000"
                                                data-name="©2024 Nordstrom, Inc."
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="61"
                                                transform="translate(3152 3800)"
                                            >
                                                <tspan x="-308.887" y="0">
                                                    ©2024 Nordstrom, Inc.
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#000"
                                                data-name="Conditions of Use -Privacy Policy - Legal Terms"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="61"
                                                transform="translate(3158 3882)"
                                            >
                                                <tspan x="-634.2" y="0">
                                                    Conditions of Use -Privacy Policy - Legal Terms
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#191919"
                                                data-name="Estimated completion time : 2023-8-26 15:30:35"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                letterSpacing=".148em"
                                                transform="translate(3158 3074)"
                                            >
                                                <tspan x="-768.371" y="0">
                                                    Estimated completion time : {data.time}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#191919"
                                                data-name="You will receive your payment once"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                letterSpacing=".148em"
                                                transform="translate(3184 3204)"
                                            >
                                                <tspan x="-561.299" y="0">
                                                    You will receive your payment once
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#191919"
                                                data-name="withdrawal is completed"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                letterSpacing=".148em"
                                                transform="translate(3198 3293)"
                                            >
                                                <tspan x="-386.924" y="0">
                                                    withdrawal is completed
                                                </tspan>
                                            </text>
                                        </g>
                                    </g>
                                    <image
                                        width="1348"
                                        height="232"
                                        transform="translate(2378 1007)"
                                        xlinkHref="data:image/png;base64,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"
                                    ></image>
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

export default View94