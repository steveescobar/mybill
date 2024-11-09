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
import { RobotoBaseEncoded } from "@/utils/encodedFonts/RobotoBaseEncoded";

const View96 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 96";

    const [data, setData] = useState({
        date: "6:08PM Nov 08, 2024",
        amount: "$218.73",
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
        const date = new Date();
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };
    
        // Format time first (e.g., "6:08 PM")
        const formattedTime = date.toLocaleString('en-US', options).replace(" ", ""); // Remove space between time and AM/PM
    
        // Get month abbreviation
        const monthAbbreviation = date.toLocaleString('en-US', { month: 'short' });
    
        // Format day with leading zero if needed
        const day = date.getDate().toString().padStart(2, '0');
    
        // Format full date as desired (e.g., "6:08PM Nov 08, 2024")
        const formattedDate = `${formattedTime} ${monthAbbreviation} ${day}, ${date.getFullYear()}`;
    
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
            1,
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
                                viewBox="0 0 1179 379"
                            >
                                <style>
                                    {
                                        RobotoBaseEncoded
                                    }
                                </style>
                                <g id="recept" transform="translate(-1479 -351)">
                                    <path
                                        id="Rectangle_1"
                                        fill="#141831"
                                        d="M0 0h1179v379H0z"
                                        data-name="Rectangle 1"
                                        transform="translate(1479 351)"
                                    ></path>
                                    <text
                                        id="Withdrawal_processing"
                                        fill="#fff"
                                        data-name="Withdrawal processing"
                                        fontFamily="Inter"
                                        fontSize="40"
                                        transform="translate(1672 461)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal processing
                                        </tspan>
                                    </text>
                                    <text
                                        id="_6:08PM_Nov_08_2024"
                                        fill="#8f90a2"
                                        data-name="6:08PM Nov 08, 2024"
                                        fontFamily="Inter"
                                        fontSize="39"
                                        transform="translate(1671 528)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.date}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_218.73"
                                        fill="#8f90a2"
                                        data-name="$218.73"
                                        fontFamily="Inter"
                                        fontSize="39"
                                        transform="translate(2560 528)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <path
                                        id="Line_1"
                                        fill="none"
                                        stroke="#232740"
                                        strokeWidth="2.5"
                                        d="m0 0 985 1"
                                        data-name="Line 1"
                                        transform="translate(1577 370.5)"
                                    ></path>
                                    <path
                                        id="Line_2"
                                        fill="none"
                                        stroke="#232740"
                                        strokeWidth="2.5"
                                        d="m0 0 914.5 1"
                                        data-name="Line 2"
                                        transform="translate(1647.5 601.5)"
                                    ></path>
                                    <circle
                                        id="Ellipse_1"
                                        cx="48"
                                        cy="48"
                                        r="48"
                                        fill="#24243e"
                                        data-name="Ellipse 1"
                                        transform="translate(1528 420)"
                                    ></circle>
                                    <path
                                        id="Path_1"
                                        fill="#e1527e"
                                        d="M28.863 207.506a2.79 2.79 0 0 0-2.512 3.006v8.6H5.082v-8.6a2.79 2.79 0 0 0-2.512-3.006 2.79 2.79 0 0 0-2.512 3.006v9.762c0 1.66 2.045 3.926 3.432 3.926h24.453c1.387 0 3.432-2.266 3.432-3.926v-9.762a2.79 2.79 0 0 0-2.512-3.006"
                                        data-name="Path 1"
                                        transform="translate(1560.284 259.915)"
                                    ></path>
                                    <path
                                        id="Path_2"
                                        fill="#e1527e"
                                        d="m76.645 11.381 2.8-2.8v9.359a2.512 2.512 0 1 0 5.024 0V8.577l2.8 2.8a2.512 2.512 0 0 0 3.561-3.549L83.738.736a2.51 2.51 0 0 0-3.553 0l-7.092 7.093a2.512 2.512 0 0 0 3.553 3.553Z"
                                        data-name="Path 2"
                                        transform="translate(1494.039 451.885)"
                                    ></path>
                                    <circle
                                        id="Ellipse_2"
                                        cx="28.5"
                                        cy="28.5"
                                        r="28.5"
                                        fill="#141831"
                                        data-name="Ellipse 2"
                                        transform="translate(1585 477)"
                                    ></circle>
                                    <path
                                        id="clock"
                                        fill="none"
                                        stroke="#7a7bb4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="4"
                                        d="M20.305 12.614v7.691l5.768 5.768m11.537-5.768A17.305 17.305 0 1 1 20.305 3 17.305 17.305 0 0 1 37.61 20.305"
                                        transform="translate(1593.195 485.195)"
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
                                iconPadding={`2rem 5rem 0rem 7rem`}
                                isDarkBg={true}
                                isIOS={isIOS}
                            /> */}
                            {/* <Page93Icons
                                battery={battery}
                                isOption={isOption}
                                time={time}
                                network={network}
                                net={net}
                                isBattery={isBattery}
                                iconPadding={`2rem 5rem 0rem 7rem`}
                                isDarkBg={true}
                                isIOS={isIOS}
                                bgColor="#141a30"
                            /> */}
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

export default View96;