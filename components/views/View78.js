
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

const View78 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 78";

    const [data, setData] = useState({
        amount1: "-388 USDT",
        amount2: "≈ $388.05",
        date: "16 May 2024 at 16:10",
        status: "Completed",
        recipient: "TY1EfHv...jxnhvTY",
        netFee: "0 TRX ($0.00)",
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
        // Create a new Date object
        const date = new Date();

        // Format the date
        const formattedDate = date.toLocaleString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }).replace(',', ' at');

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
            0,
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
                                viewBox="0 0 491 743"
                            >

                                <style>
                                    {
                                        InterBaseEncoded
                                    }
                                </style>

                                <g data-name="Group 18" transform="translate(-1006 -169)">
                                    <g data-name="Group 17">
                                        <g data-name="Group 16">
                                            <path
                                                fill="#fff"
                                                d="M0 0H491V743H0z"
                                                data-name="Rectangle 1"
                                                transform="translate(1006 169)"
                                            ></path>
                                            <path
                                                fill="#828181"
                                                stroke="#828181"
                                                strokeWidth="0.8"
                                                d="M1048.782 251.082h-16.886l5.272-5.272-1.184-1.185-7.295 7.295 7.295 7.295 1.184-1.19-5.272-5.272h16.886z"
                                            ></path>
                                            <text
                                                fontFamily="Inter"
                                                fontSize="19"
                                                fontWeight="800"
                                                letterSpacing=".025em"
                                                transform="translate(1209 261)"
                                            >
                                                <tspan x="0" y="0">
                                                    Transfer
                                                </tspan>
                                            </text>
                                            <g transform="translate(1409.7 243)">
                                                <g data-name="Group 1" transform="translate(46.989)">
                                                    <path
                                                        fill="#828181"
                                                        d="M61.129 14.555a3.577 3.577 0 00-1.866.52l-5.445-3.64a3.194 3.194 0 000-1.839l5.3-3.542a3.57 3.57 0 002.013.615 3.41 3.41 0 003.482-3.334 3.485 3.485 0 00-6.963 0 3.209 3.209 0 00.08.708l-5.436 3.631a3.58 3.58 0 00-1.823-.494 3.41 3.41 0 00-3.482 3.334 3.41 3.41 0 003.482 3.334 3.58 3.58 0 001.823-.494l5.475 3.66a3.2 3.2 0 00-.121.873 3.485 3.485 0 103.482-3.334z"
                                                        data-name="Path 1"
                                                        transform="translate(-46.989)"
                                                    ></path>
                                                </g>
                                            </g>
                                            <g
                                                data-name="Group 3"
                                                fontFamily="Inter"
                                                transform="translate(583)"
                                            >
                                                <text
                                                    data-name="-388 USDT"
                                                    fontSize="25"
                                                    fontWeight="600"
                                                    letterSpacing="-.001em"
                                                    transform="translate(667 342)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="middle">
                                                        {data.amount1}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#828181"
                                                    data-name="≈ $388.05"
                                                    fontSize="17"
                                                    fontWeight="500"
                                                    letterSpacing="-.025em"
                                                    transform="translate(667 373)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="middle">
                                                        {data.amount2}
                                                    </tspan>
                                                </text>
                                            </g>
                                            <g data-name="Group 7" transform="translate(586)">
                                                <g data-name="Group 15" transform="translate(440 701)">
                                                    <g
                                                        fill="none"
                                                        stroke="#707070"
                                                        strokeDasharray="3"
                                                        strokeWidth="1"
                                                        data-name="Rectangle 3"
                                                    >
                                                        <rect width="452" height="54" stroke="none" rx="8"></rect>
                                                        <rect width="451" height="53" x="0.5" y="0.5" rx="7.5"></rect>
                                                    </g>
                                                    <text
                                                        fill="#4136c1"
                                                        data-name="View on block explorer"
                                                        fontFamily="Inter"
                                                        fontSize="12"
                                                        fontWeight="600"
                                                        letterSpacing=".009em"
                                                        transform="translate(154 31)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            View on block explorer
                                                        </tspan>
                                                    </text>
                                                </g>
                                            </g>
                                            <g data-name="Group 12" transform="translate(581 1)">
                                                <g data-name="Group 13" transform="translate(-584)">
                                                    <g data-name="Group 5" transform="translate(586 -1)">
                                                        <rect
                                                            width="459"
                                                            height="149"
                                                            fill="#f4f4f6"
                                                            data-name="Rectangle 2"
                                                            rx="8"
                                                            transform="translate(439 431)"
                                                        ></rect>
                                                    </g>
                                                    <g data-name="Group 9" transform="translate(-4 -1)">
                                                        <g
                                                            data-name="Group 4"
                                                            fontFamily="Inter"
                                                            fontSize="17"
                                                            fontWeight="500"
                                                            transform="translate(584)"
                                                        >
                                                            <text
                                                                fill="#828181"
                                                                letterSpacing="-.049em"
                                                                transform="translate(456 469)"
                                                            >
                                                                <tspan x="0" y="0">
                                                                    Date
                                                                </tspan>
                                                            </text>
                                                            <text
                                                                fill="#828181"
                                                                letterSpacing="-.049em"
                                                                transform="translate(456 512)"
                                                            >
                                                                <tspan x="0" y="0">
                                                                    Status
                                                                </tspan>
                                                            </text>
                                                            <text
                                                                fill="#828181"
                                                                letterSpacing="-.049em"
                                                                transform="translate(456 554)"
                                                            >
                                                                <tspan x="0" y="0">
                                                                    Recipient
                                                                </tspan>
                                                            </text>
                                                            <text
                                                                data-name="16 May 2024 at 16:10"
                                                                letterSpacing="-.046em"
                                                                transform="translate(894 469)"
                                                            >
                                                                <tspan x="0" y="0" textAnchor="end">
                                                                    {data.date}
                                                                </tspan>
                                                            </text>
                                                            <text
                                                                letterSpacing="-.055em"
                                                                transform="translate(894 511)"
                                                            >
                                                                <tspan x="0" y="0" textAnchor="end">
                                                                    {data.status}
                                                                </tspan>
                                                            </text>
                                                            <text
                                                                letterSpacing="-.064em"
                                                                transform="translate(894 555)"
                                                            >
                                                                <tspan x="0" y="0" textAnchor="end">
                                                                    {data.recipient}
                                                                </tspan>
                                                            </text>
                                                        </g>
                                                        <g transform="translate(1093 499.223)">
                                                            <path
                                                                fill="#858b91"
                                                                d="M11.7 2.01a6.85 6.85 0 10-.006 9.688A6.85 6.85 0 0011.7 2.01zM7.807 11.2a.191.191 0 01-.191.191H6.085a.191.191 0 01-.191-.191V5.516a.191.191 0 01.191-.191h1.53a.191.191 0 01.191.191zM6.85 4.531a1.109 1.109 0 111.11-1.109 1.111 1.111 0 01-1.11 1.109z"
                                                                data-name="Path 2"
                                                            ></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                            <g data-name="Group 14" transform="translate(-1)">
                                                <g data-name="Group 8">
                                                    <rect
                                                        width="459"
                                                        height="66"
                                                        fill="#f4f4f6"
                                                        data-name="Rectangle 2"
                                                        rx="8"
                                                        transform="translate(1023 604)"
                                                    ></rect>
                                                    <text
                                                        fill="#828181"
                                                        data-name="Network fee"
                                                        fontFamily="Inter"
                                                        fontSize="17"
                                                        fontWeight="500"
                                                        letterSpacing="-.049em"
                                                        transform="translate(1034 643)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            Network fee
                                                        </tspan>
                                                    </text>
                                                    <g data-name="Group 11">
                                                        <g data-name="Group 10">
                                                            <g
                                                                data-name="info-icon-svgrepo-com"
                                                                transform="translate(1131 630.15)"
                                                            >
                                                                <path
                                                                    fill="#858b91"
                                                                    d="M11.7 2.01a6.85 6.85 0 10-.006 9.688A6.85 6.85 0 0011.7 2.01zM7.807 11.2a.191.191 0 01-.191.191H6.085a.191.191 0 01-.191-.191V5.516a.191.191 0 01.191-.191h1.53a.191.191 0 01.191.191zM6.85 4.531a1.109 1.109 0 111.11-1.109 1.111 1.111 0 01-1.11 1.109z"
                                                                    data-name="Path 2"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                                <text
                                                    data-name="0 TRX ($0.00)"
                                                    fontFamily="Inter"
                                                    fontSize="17"
                                                    fontWeight="500"
                                                    letterSpacing="-.064em"
                                                    transform="translate(1472 643)"
                                                >
                                                    <tspan x="" y="0" textAnchor="end">
                                                        {data.netFee}
                                                    </tspan>
                                                </text>
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
                            <label>Amount 1</label>
                            <input
                                type="text"
                                value={data.amount1}
                                name="amount1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Amount 2</label>
                            <input
                                type="text"
                                value={data.amount2}
                                name="amount2"
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
                            <label>Status</label>
                            <input
                                type="text"
                                value={data.status}
                                name="status"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Recipient</label>
                            <input
                                type="text"
                                value={data.recipient}
                                name="recipient"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Network fee</label>
                            <input
                                type="text"
                                value={data.netFee}
                                name="netFee"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default View78;