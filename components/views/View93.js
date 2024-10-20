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

const View93 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 93";

    const [data, setData] = useState({
        from: '0.076174290143983859 ETH',
        to: '0.075964290143983859 ETH',
        date: 'October 11, 2024, 9:20:15 PM',
        address1: '0x0A0DD91a39e0a55d2053D9ea3Ce50CA9Eb0c',
        address2: 'aD11',
        networkFee1: '0.00021 ETH',
        networkFee2: '$ 0.51',
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
        const date = new Date();
        const optionsDate = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        const optionsTime = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
        };

        // Format the date and time separately
        const formattedDate = date.toLocaleString('en-US', optionsDate);
        const formattedTime = date.toLocaleString('en-US', optionsTime);

        // Combine the date and time
        const finalFormattedDate = `${formattedDate}, ${formattedTime}`;

        return setData({
            ...data,
            date: finalFormattedDate
        });
    };




    const takeScreenshot = async () => {
        await getPicture(
            setPreview,
            setIsPreview,
            screenshotRef,
            setIsLoading,
            toast,
            0,
            0,
            0.1,
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
                                viewBox="0 0 453 983"
                            >
                                <style>
                                    {
                                        InterBaseEncoded
                                    }
                                </style>
                                <g data-name="Group 16" transform="translate(-708 -56)">
                                    <g data-name="Group 15">
                                        <g data-name="Group 14">
                                            <path
                                                fill="#eff2f9"
                                                d="M0 0H453V983H0z"
                                                data-name="Rectangle 1"
                                                transform="translate(708 56)"
                                            ></path>
                                            <path
                                                fill="#eff2f9"
                                                d="M0 0H453V907H0z"
                                                data-name="Rectangle 3"
                                                transform="translate(708 132)"
                                            ></path>
                                            <rect
                                                width="414"
                                                height="190"
                                                fill="#fff"
                                                data-name="Rectangle 2"
                                                rx="16"
                                                transform="translate(728 241)"
                                            ></rect>
                                            <rect
                                                width="414"
                                                height="314"
                                                fill="#fff"
                                                data-name="Rectangle 4"
                                                rx="16"
                                                transform="translate(728 453)"
                                            ></rect>
                                            <g data-name="Group 5" transform="translate(507)">
                                                <g data-name="Group 2" transform="translate(-61 28)">
                                                    <circle
                                                        cx="17.5"
                                                        cy="17.5"
                                                        r="17.5"
                                                        fill="#252525"
                                                        data-name="Ellipse 1"
                                                        transform="translate(304 342)"
                                                    ></circle>
                                                    <path
                                                        fill="#fff"
                                                        d="M21.048 11.379l-6.522 4.049L8 11.379 14.526 0zm-6.522 5.349L8 12.679l6.526 9.66 6.526-9.66z"
                                                        transform="translate(306.974 348.33)"
                                                    ></path>
                                                </g>
                                            </g>
                                            <circle
                                                cx="4.5"
                                                cy="4.5"
                                                r="4.5"
                                                fill="#a6afcc"
                                                data-name="Ellipse 2"
                                                transform="translate(764 332)"
                                            ></circle>
                                            <path
                                                fill="none"
                                                stroke="#707070"
                                                strokeWidth="1.2"
                                                d="M0 0L0 4"
                                                data-name="Line 1"
                                                transform="translate(768.5 297.5)"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#707070"
                                                strokeWidth="1.2"
                                                d="M0 0L0 4"
                                                data-name="Line 3"
                                                transform="translate(768.5 289.5)"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#707070"
                                                strokeWidth="1.2"
                                                d="M0 0L0 4"
                                                data-name="Line 4"
                                                transform="translate(768.5 304.5)"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#707070"
                                                strokeWidth="1.2"
                                                d="M0 0L0 4"
                                                data-name="Line 2"
                                                transform="translate(768.5 327.5)"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#707070"
                                                strokeWidth="1.2"
                                                d="M0 0L0 4"
                                                data-name="Line 7"
                                                transform="translate(768.5 319.5)"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#707070"
                                                strokeWidth="1.2"
                                                d="M0 0L0 4"
                                                data-name="Line 8"
                                                transform="translate(768.5 311.5)"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#707070"
                                                strokeWidth="1.2"
                                                d="M0 0L0 4"
                                                data-name="Line 5"
                                                transform="translate(768.5 341.5)"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#707070"
                                                strokeWidth="1.2"
                                                d="M0 0L0 4"
                                                data-name="Line 6"
                                                transform="translate(768.5 348.5)"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#707070"
                                                strokeWidth="1.2"
                                                d="M0 0L0 4"
                                                data-name="Line 9"
                                                transform="translate(768.5 356.5)"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#707070"
                                                strokeWidth="1.2"
                                                d="M0 0L0 4"
                                                data-name="Line 10"
                                                transform="translate(768.5 363.5)"
                                            ></path>
                                            <g data-name="Group 4" transform="translate(507)">
                                                <g data-name="Group 3" transform="translate(-61 -86)">
                                                    <circle
                                                        cx="17.5"
                                                        cy="17.5"
                                                        r="17.5"
                                                        fill="#252525"
                                                        data-name="Ellipse 1"
                                                        transform="translate(304 342)"
                                                    ></circle>
                                                    <path
                                                        fill="#fff"
                                                        d="M21.048 11.379l-6.522 4.049L8 11.379 14.526 0zm-6.522 5.349L8 12.679l6.526 9.66 6.526-9.66z"
                                                        data-name="ethereum-brands-solid"
                                                        transform="translate(306.974 348.33)"
                                                    ></path>
                                                </g>
                                            </g>
                                            <text
                                                fill="#555861"
                                                data-name="From ETH account"
                                                fontFamily="Inter"
                                                fontSize="11"
                                                transform="translate(802 268)"
                                            >
                                                <tspan x="0" y="0">
                                                    From ETH account
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#14191f"
                                                data-name="0.076174290143983859 ETH"
                                                fontFamily="Inter"
                                                fontSize="18"
                                                fontWeight="700"
                                                transform="translate(802 293)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.from}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#555861"
                                                data-name="Network fee"
                                                fontFamily="Inter"
                                                fontSize="11"
                                                transform="translate(802 329)"
                                            >
                                                <tspan x="0" y="0">
                                                    Network fee
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#1f2024"
                                                data-name="0.00021 ETH = $ 0.51"
                                                fontFamily="Inter"
                                                fontSize="12"
                                                fontWeight="700"
                                                transform="translate(802 348)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.networkFee1} ≈ {data.networkFee2}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#707070"
                                                data-name="To Ether via Ethereum network"
                                                fontFamily="Inter"
                                                fontSize="11"
                                                transform="translate(802 382)"
                                            >
                                                <tspan x="0" y="0">
                                                    To Ether via Ethereum network
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#1f2024"
                                                data-name="0.075964290143983859 ETH"
                                                fontFamily="Inter"
                                                fontSize="18"
                                                fontWeight="700"
                                                transform="translate(802 407)"
                                            >
                                                <tspan x="0" y="0" textAnchor="start">
                                                    {data.to}
                                                </tspan>
                                            </text>
                                            <path
                                                fill="none"
                                                stroke="#707070"
                                                strokeWidth="1"
                                                d="M742 505.5h385"
                                                data-name="Path 1"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#707070"
                                                strokeWidth="1"
                                                d="M742 551.5h385"
                                                data-name="Path 2"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#707070"
                                                strokeWidth="1"
                                                d="M742 597.5h385"
                                                data-name="Path 3"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#707070"
                                                strokeWidth="1"
                                                d="M742 663.5h385"
                                                data-name="Path 4"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#707070"
                                                strokeWidth="1"
                                                d="M743 710.5h385"
                                                data-name="Path 5"
                                            ></path>
                                            <text
                                                fill="#1f2024"
                                                fontFamily="Inter"
                                                fontSize="13"
                                                transform="translate(742 486)"
                                            >
                                                <tspan x="0" y="0">
                                                    Transaction
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#3ac95f"
                                                data-name="Reservechain transaction ID"
                                                fontFamily="Inter"
                                                fontSize="13"
                                                transform="translate(955 486)"
                                            >
                                                <tspan x="0" y="0">
                                                    Reservechain transaction ID
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#1f2024"
                                                fontFamily="Inter"
                                                fontSize="13"
                                                transform="translate(742 533)"
                                            >
                                                <tspan x="0" y="0">
                                                    Date
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#1f2024"
                                                data-name="October 11, 2024, 9:20:15 PM"
                                                fontFamily="Inter"
                                                fontSize="13"
                                                fontWeight="700"
                                                transform="translate(1126.7 532)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.date}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#1f2024"
                                                data-name="Settlement time"
                                                fontFamily="Inter"
                                                fontSize="13"
                                                transform="translate(742 579)"
                                            >
                                                <tspan x="0" y="0">
                                                    Settlement time
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#1f2024"
                                                data-name="15 second"
                                                fontFamily="Inter"
                                                fontSize="13"
                                                fontWeight="700"
                                                transform="translate(1063 579)"
                                            >
                                                <tspan x="0" y="0">
                                                    15 second
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#1f2024"
                                                fontFamily="Inter"
                                                fontSize="13"
                                                transform="translate(742 625)"
                                            >
                                                <tspan x="0" y="0">
                                                    Address
                                                </tspan>
                                            </text>
                                            <g transform="translate(-26)">
                                                <text
                                                    fill="#1f2024"
                                                    data-name="8.75835108736274e+41"
                                                    fontFamily="Inter"
                                                    fontSize="12"
                                                    fontWeight="700"
                                                    transform="translate(1152.5 626)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="end">
                                                        {data.address1}
                                                    </tspan>
                                                </text>
                                            </g>
                                            <g data-name="Group 1" transform="translate(8 19)">
                                                <text
                                                    fill="#1f2024"
                                                    fontFamily="Inter"
                                                    fontSize="12"
                                                    fontWeight="700"
                                                    transform="translate(1118.5 626)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="end">
                                                        {data.address2}
                                                    </tspan>
                                                </text>
                                            </g>
                                            <text
                                                fill="#1f2024"
                                                data-name="Blockchain transaction ID"
                                                fontFamily="Inter"
                                                fontSize="13"
                                                transform="translate(742.007 692)"
                                            >
                                                <tspan x="0" y="0">
                                                    Blockchain transaction ID
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#3ac95f"
                                                fontFamily="Inter"
                                                fontSize="13"
                                                transform="translate(1094.798 691)"
                                            >
                                                <tspan x="0" y="0">
                                                    Hash
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#1f2024"
                                                fontFamily="Inter"
                                                fontSize="13"
                                                transform="translate(741.854 738)"
                                            >
                                                <tspan x="0" y="0">
                                                    Status
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#1f2024"
                                                fontFamily="Inter"
                                                fontSize="13"
                                                fontWeight="700"
                                                transform="translate(1057.1 738)"
                                            >
                                                <tspan x="0" y="0">
                                                    Completed
                                                </tspan>
                                            </text>
                                            <circle
                                                cx="9"
                                                cy="9"
                                                r="9"
                                                fill="#3ac95f"
                                                data-name="Ellipse 3"
                                                transform="translate(1035 724)"
                                            ></circle>
                                            <path
                                                fill="#fff"
                                                d="M7.283 96.224a.812.812 0 010 .96l-4.294 5.428a.463.463 0 01-.76 0L.082 99.9a.812.812 0 010-.96.462.462 0 01.76 0l1.768 2.23 3.915-4.946a.463.463 0 01.76 0z"
                                                data-name="Path 6"
                                                transform="translate(1040.075 634.324)"
                                            ></path>
                                            {
                                                isIOS
                                                    ?
                                                    <rect
                                                        width="163"
                                                        height="6"
                                                        fill="#000002"
                                                        data-name="Rectangle 5"
                                                        rx="3"
                                                        transform="translate(853 1025)"
                                                    ></rect>
                                                    :
                                                    <></>
                                            }
                                            <circle
                                                cx="21.5"
                                                cy="21.5"
                                                r="21.5"
                                                fill="#e5e7f3"
                                                data-name="Ellipse 4"
                                                transform="translate(728 117)"
                                            ></circle>
                                            <path
                                                d="M15.03 70.4a.885.885 0 000-1.367l-5.514-4.825a1.218 1.218 0 00-1.561 0 .885.885 0 000 1.367l3.636 3.181H1.019c-.61 0-.386.4-.386.937s-.224 1 .386 1h10.568l-3.628 3.176a.885.885 0 000 1.367 1.218 1.218 0 001.561 0l5.514-4.829z"
                                                transform="rotate(180 378.736 104.361)"
                                            ></path>
                                            <circle
                                                cx="21.5"
                                                cy="21.5"
                                                r="21.5"
                                                fill="#e4e6f5"
                                                data-name="Ellipse 5"
                                                transform="translate(1096 117)"
                                            ></circle>
                                            <g data-name="Group 13" transform="translate(-109.5 -.188)">
                                                <g data-name="Group 12" transform="translate(1218 130)">
                                                    <g data-name="Group 11">
                                                        <g data-name="Group 10">
                                                            <g data-name="Group 8">
                                                                <g data-name="Group 7">
                                                                    <g data-name="Group 6">
                                                                        <g
                                                                            fill="#e2e8f6"
                                                                            stroke="#000"
                                                                            strokeWidth="1.5"
                                                                            data-name="Rectangle 6"
                                                                            transform="translate(0 .188)"
                                                                        >
                                                                            <rect
                                                                                width="18"
                                                                                height="14"
                                                                                stroke="none"
                                                                                rx="4"
                                                                            ></rect>
                                                                            <rect
                                                                                width="16.5"
                                                                                height="12.5"
                                                                                x="0.75"
                                                                                y="0.75"
                                                                                fill="none"
                                                                                rx="3.25"
                                                                            ></rect>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <path
                                                        fill="none"
                                                        stroke="#000"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M17.163 3.46l-2.662 1.856-5.325 3.715L1.188 3.46"
                                                        data-name="Path 8"
                                                    ></path>
                                                    <rect
                                                        width="10"
                                                        height="8"
                                                        fill="#e5e7f3"
                                                        data-name="Rectangle 7"
                                                        rx="2"
                                                        transform="translate(10 9.188)"
                                                    ></rect>
                                                    <path
                                                        d="M6.922 66.869a.412.412 0 000-.621L4.5 64.054a.52.52 0 00-.685 0 .412.412 0 000 .621l1.594 1.449H.779c-.267 0-.169.183-.169.426s-.101.45.169.45h4.634l-1.59 1.441a.412.412 0 000 .621.52.52 0 00.685 0l2.418-2.194z"
                                                        data-name="arrow-right-solid"
                                                        transform="translate(11.141 -53.208)"
                                                    ></path>
                                                </g>
                                            </g>
                                            <text
                                                fill="#1f2024"
                                                data-name="Transaction details"
                                                fontFamily="Inter"
                                                fontSize="25"
                                                fontWeight="700"
                                                transform="translate(727.875 203)"
                                            >
                                                <tspan x="0" y="0">
                                                    Transaction details
                                                </tspan>
                                            </text>
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
                                iconPadding={`2rem 5rem 0rem 5rem`}
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
                            <label>From</label>
                            <input
                                type="text"
                                value={data.from}
                                name="from"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Network Fee</label>
                            <input
                                type="text"
                                value={data.networkFee1}
                                name="networkFee1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.networkFee2}
                                name="networkFee2"
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
                        </div>
                        <div className="global_form_inner">
                            <label>Date</label>
                            <input
                                type="text"
                                value={data.date}
                                name="date"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <button className="dateTimeBtn" onClick={() => manageTimeDate()}>Current Date and Time</button>
                        </div>
                        <div className="global_form_inner">
                            <label>Address</label>
                            <input
                                type="text"
                                value={data.address1}
                                name="address1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.address2}
                                name="address2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default View93;