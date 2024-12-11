"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from "@/utils/getPicture";
import Image from "next/image";
import Page93Icons from "../options/Page93Icons";
import { HelveticaBaseEncoded } from "@/utils/encodedFonts/HelveticaWorld";

const View109 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 109";

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
                                <g id="bill_109" data-name="bill 109" transform="translate(-637 -89)">
                                    <g id="Group_377" data-name="Group 377" transform="translate(-941 -1031)">
                                        <g id="Group_370" data-name="Group 370" transform="translate(141 -174)">
                                            <g
                                                id="Group_363"
                                                data-name="Group 363"
                                                transform="translate(706 1085)"
                                            >
                                                <g
                                                    id="Group_188"
                                                    data-name="Group 188"
                                                    transform="translate(168 64)"
                                                >
                                                    <g
                                                        id="Group_187"
                                                        data-name="Group 187"
                                                        transform="translate(10 -17)"
                                                    >
                                                        <path
                                                            id="Rectangle_75"
                                                            fill="#141414"
                                                            d="M0 0h1736v3773H0z"
                                                            data-name="Rectangle 75"
                                                            transform="translate(553 162)"
                                                        ></path>
                                                        <text
                                                            id="Withdrawal_Processing"
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
                                                            id="Address_Account"
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
                                                            id="TjHbjW6WhcAwFJnmQHV4g2XVF"
                                                            fill="#d6d6d6"
                                                            fontFamily="Roboto-Regular, Roboto"
                                                            fontSize="63"
                                                            transform="translate(2725 1870)"
                                                        >
                                                            <tspan x="-475.438" y="0" textAnchor="end">
                                                                {data.address}
                                                            </tspan>
                                                        </text>
                                                        <text
                                                            id="_7kNAKTEQS"
                                                            fill="#d6d6d6"
                                                            data-name="7kNAKTEQS"
                                                            fontFamily="Roboto-Regular, Roboto"
                                                            fontSize="63"
                                                            transform="translate(2425 1958)"
                                                        >
                                                            <tspan x="-173.727" y="0" textAnchor="end">
                                                                {data.address2}
                                                            </tspan>
                                                        </text>
                                                        <text
                                                            id="TRC20"
                                                            fill="#d6d6d6"
                                                            fontFamily="Roboto-Regular, Roboto"
                                                            fontSize="63"
                                                            transform="translate(2344 2158)"
                                                        >
                                                            <tspan x="-94.069" y="0" textAnchor="end">
                                                                {data.network}
                                                            </tspan>
                                                        </text>
                                                        <text
                                                            id="Platform_Salary"
                                                            fill="#d6d6d6"
                                                            data-name="Platform Salary"
                                                            fontFamily="Roboto-Regular, Roboto"
                                                            fontSize="63"
                                                            transform="translate(2465 2376)"
                                                        >
                                                            <tspan x="-216.347" y="0" textAnchor="end">
                                                                {data.remarks}
                                                            </tspan>
                                                        </text>
                                                        <text
                                                            id="Network"
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
                                                            id="Remarks"
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
                                                            id="_518.31_USDT"
                                                            fill="#fff"
                                                            data-name="518.31 USDT"
                                                            fontFamily="Roboto-Regular, Roboto"
                                                            fontSize="177"
                                                            transform="translate(1934 1650)"
                                                        >
                                                            <tspan x="-513.24" y="0" textAnchor="middle">
                                                                {data.amount}
                                                            </tspan>
                                                        </text>
                                                        <path
                                                            id="Rectangle_76"
                                                            fill="#6f6f6f"
                                                            d="M0 0h1654v6H0z"
                                                            data-name="Rectangle 76"
                                                            transform="translate(590 1713)"
                                                        ></path>
                                                        <path
                                                            id="Rectangle_77"
                                                            fill="#6f6f6f"
                                                            d="M0 0h1677v6H0z"
                                                            data-name="Rectangle 77"
                                                            transform="translate(578 3724)"
                                                        ></path>
                                                        <text
                                                            id="_2024_Epic_Games_Inc._All_rights_reserved."
                                                            fill="#efefef"
                                                            data-name="© 2024 Epic Games, Inc. All rights reserved."
                                                            fontFamily="Roboto-Light, Roboto"
                                                            fontSize="61"
                                                            fontWeight="300"
                                                            transform="translate(1421 3819)"
                                                        >
                                                            <tspan x="-580.468" y="0">
                                                                © 2024 Epic Games, Inc. All rights reserved.
                                                            </tspan>
                                                        </text>
                                                        <text
                                                            id="Conditions_of_Use_-Privacy_Policy_-_Legal_Terms"
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
                                                            id="Estimated_completion_time_:_2023-8-26_15:30:35"
                                                            fill="#efefef"
                                                            data-name="Estimated completion time : 2023-8-26 15:30:35"
                                                            fontFamily="Roboto-Light, Roboto"
                                                            fontSize="55"
                                                            fontWeight="300"
                                                            letterSpacing=".148em"
                                                            transform="translate(2182 3093)"
                                                        >
                                                            <tspan x="-758.394" y="0" textAnchor="middle">
                                                                Estimated completion time : {data.time}
                                                            </tspan>
                                                        </text>
                                                        <text
                                                            id="You_will_receive_your_payment_once"
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
                                                            id="withdrawal_is_completed"
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
                                                            id="Line_1"
                                                            fill="#0046d1"
                                                            d="M0 .892 1.15 0"
                                                            data-name="Line 1"
                                                            transform="translate(1184.7 722)"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <image
                                        xlinkHref="data:image/png;base64,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"
                                        id="NoPath"
                                        width="576"
                                        height="662"
                                        transform="translate(1217 392)"
                                    ></image>
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

export default View109