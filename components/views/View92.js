"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
// import IOSOption from '../options/IOSOption';
import getPicture from "@/utils/getPicture";
import { HelveticaBaseEncoded } from "@/utils/encodedFonts/HelveticaWorld";
import Image from "next/image";
import Page93Icons from "../options/Page93Icons";

const View92 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 92";

    const [data, setData] = useState({

        amount: "518.31 USDT",
        address: "TjHbjW6WhcAwFJnmQHV4g2XVF",
        address2: "7kNAKTEQS",
        network: "TRC20",
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
                                xmlnsXlink="http://www.w3.org/1999/xlink"
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
                                        x1="0.488"
                                        x2="0.5"
                                        y2="1"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#27294c" stopOpacity="0.89"></stop>
                                        <stop offset="1" stopColor="#212340"></stop>
                                    </linearGradient>
                                    <pattern
                                        id="pattern"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 474 70"
                                    >
                                        <image
                                            width="474"
                                            height="70"
                                            xlinkHref="data:image/png;base64,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"
                                        ></image>
                                    </pattern>
                                </defs>
                                <g data-name="Group 369" transform="translate(-731 -209)">
                                    <g data-name="Group 188" transform="translate(168 64)">
                                        <g data-name="Group 187" transform="translate(10 -17)">
                                            <path
                                                fill="url(#linear-gradient)"
                                                d="M0 0h1736v3773H0z"
                                                data-name="Path 232"
                                                transform="translate(553 162)"
                                            ></path>
                                            <text
                                                fill="#9d9d9d"
                                                data-name="Withdrawal Processing"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="61"
                                                letterSpacing=".1em"
                                                transform="translate(1421 1428)"
                                            >
                                                <tspan x="-371.778" y="0">
                                                    Withdrawal Processing
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#b8b8b8"
                                                data-name="Address/Account"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(801 1869)"
                                            >
                                                <tspan x="-190.653" y="0">
                                                    Address/Account
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#d6d6d6"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(2720 1870)"
                                            >
                                                <tspan x="-475.438" y="0" textAnchor="end">
                                                    {data.address}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#d6d6d6"
                                                data-name="7kNAKTEQS"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(2420 1958)"
                                            >
                                                <tspan x="-173.727" y="0" textAnchor="end">
                                                    {data.address2}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#d6d6d6"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(2338 2158)"
                                            >
                                                <tspan x="-94.069" y="0" textAnchor="end">
                                                    {data.network}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#d6d6d6"
                                                data-name="Platform Salary"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(2460 2376)"
                                            >
                                                <tspan x="-216.347" y="0" textAnchor="end">
                                                    {data.remarks}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#b8b8b8"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(702 2153)"
                                            >
                                                <tspan x="-91.54" y="0">
                                                    Network
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#b8b8b8"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(710 2371)"
                                            >
                                                <tspan x="-96.206" y="0">
                                                    Remarks
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#fff"
                                                data-name="518.31 USDT"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="177"
                                                transform="translate(1933 1650)"
                                            >
                                                <tspan x="-513.24" y="0" textAnchor="middle">
                                                    {data.amount}
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#6f6f6f"
                                                d="M0 0H1654V6H0z"
                                                data-name="Rectangle 76"
                                                transform="translate(590 1713)"
                                            ></path>
                                            <path
                                                fill="#6f6f6f"
                                                d="M0 0H1677V6H0z"
                                                data-name="Rectangle 77"
                                                transform="translate(578 3724)"
                                            ></path>
                                            <text
                                                fill="#efefef"
                                                data-name="© 2025 Travala.com. All rights reserved."
                                                fontFamily="Roboto-Light, Roboto"
                                                fontSize="61"
                                                fontWeight="300"
                                                transform="translate(1421 3819)"
                                            >
                                                <tspan x="-530.34" y="0">
                                                    © 2025 Travala.com. All rights reserved.
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#efefef"
                                                data-name="Conditions of Use -Privacy Policy - Legal Terms"
                                                fontFamily="Roboto-Light, Roboto"
                                                fontSize="61"
                                                fontWeight="300"
                                                transform="translate(1421 3901)"
                                            >
                                                <tspan x="-624.088" y="0">
                                                    Conditions of Use -Privacy Policy - Legal Terms
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#efefef"
                                                data-name="Estimated completion time : 2023-8-26 15:30:35"
                                                fontFamily="Roboto-Light, Roboto"
                                                fontSize="55"
                                                fontWeight="300"
                                                letterSpacing=".148em"
                                                transform="translate(2184 3093)"
                                            >
                                                <tspan x="-758.394" y="0" textAnchor="middle">
                                                    Estimated completion time : {data.time}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#efefef"
                                                data-name="You will receive your payment once"
                                                fontFamily="Roboto-Light, Roboto"
                                                fontSize="55"
                                                fontWeight="300"
                                                letterSpacing=".148em"
                                                transform="translate(1447 3223)"
                                            >
                                                <tspan x="-554.921" y="0">
                                                    You will receive your payment once
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#efefef"
                                                data-name="withdrawal is completed"
                                                fontFamily="Roboto-Light, Roboto"
                                                fontSize="55"
                                                fontWeight="300"
                                                letterSpacing=".148em"
                                                transform="translate(1461 3312)"
                                            >
                                                <tspan x="-382.05" y="0">
                                                    withdrawal is completed
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#0046d1"
                                                d="M0 0.892L1.15 0"
                                                data-name="Line 1"
                                                transform="translate(1184.7 722)"
                                            ></path>
                                            <path
                                                fill="url(#pattern)"
                                                d="M0 0H1194V176H0z"
                                                data-name="logo@2x"
                                                transform="translate(820 852)"
                                            ></path>
                                        </g>
                                    </g>
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

export default View92