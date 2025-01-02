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

const View102 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 102";

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
                                viewBox="0 0 1736 3773"
                            >
                                <style>
                                    {
                                        HelveticaBaseEncoded
                                    }
                                </style>
                                <defs>
                                    <filter
                                        id="Path_277"
                                        width="1025.348"
                                        height="1025.347"
                                        x="355.326"
                                        y="200.9"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset></feOffset>
                                        <feGaussianBlur result="blur" stdDeviation="25"></feGaussianBlur>
                                        <feFlood floodColor="#ff4c00"></feFlood>
                                        <feComposite in2="blur" operator="in"></feComposite>
                                    </filter>
                                    <filter
                                        id="Path_277-2"
                                        width="1025.348"
                                        height="1025.347"
                                        x="355.326"
                                        y="200.9"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset></feOffset>
                                        <feGaussianBlur result="blur-2" stdDeviation="25"></feGaussianBlur>
                                        <feFlood floodColor="#ff4c00" result="color"></feFlood>
                                        <feComposite
                                            in="SourceGraphic"
                                            in2="blur-2"
                                            operator="out"
                                        ></feComposite>
                                        <feComposite in="color" operator="in"></feComposite>
                                        <feComposite in2="SourceGraphic" operator="in"></feComposite>
                                    </filter>
                                </defs>
                                <g id="bill_102" data-name="bill 102" transform="translate(-19443 -231)">
                                    <path
                                        id="Rectangle_75"
                                        d="M0 0h1736v3773H0z"
                                        data-name="Rectangle 75"
                                        transform="translate(19443 231)"
                                    ></path>
                                    <path
                                        id="Path_279"
                                        fill="#fff"
                                        d="m28.986 109.918 68.029-66.005H30.8V27.11h92.526v19.236l-68.029 66h69.651v16.81H28.986Zm99.2-8.505c0-22.674 19.437-28.954 36.642-31.173l31.99-4.055c7.694-1.005 9.92-4.45 9.92-9.109v-.2c0-9.115-7.9-15.791-25.1-15.791-16.6 0-25.918 6.273-27.54 16.8h-21.46c2.433-20.65 20.449-33.4 49.6-33.4 32.6 0 45.958 13.767 45.958 36.441v68.23h-20.437v-16.2c-8.713 12.554-24.3 18.834-41.917 18.834-23.284 0-37.654-11.743-37.654-30.375m78.552-18.42v-4.859a48 48 0 0 1-11.54 2.828l-25.509 3.445c-13.157 1.823-19.236 6.682-19.236 15.59 0 9.517 8.1 15.188 21.26 15.188 21.669 0 35.027-14.785 35.027-32.192M237.725 1.2h21.461v127.947h-21.461Zm28.545 100.213c0-22.674 19.437-28.954 36.642-31.173l31.99-4.055c7.694-1.005 9.92-4.45 9.92-9.109v-.2c0-9.115-7.9-15.791-25.107-15.791-16.6 0-25.911 6.273-27.533 16.8h-21.461c2.433-20.65 20.449-33.4 49.6-33.4 32.594 0 45.958 13.767 45.958 36.441v68.23h-20.438v-16.2c-8.713 12.554-24.3 18.834-41.917 18.834-23.284 0-37.654-11.743-37.654-30.375m78.552-18.418v-4.861a48 48 0 0 1-11.541 2.828l-25.509 3.445c-13.157 1.823-19.236 6.682-19.236 15.59 0 9.517 8.1 15.188 21.26 15.188 21.662 0 35.027-14.785 35.027-32.192m30.971-55.885h21.468v16.6c7.688-12.145 22.265-19.236 40.08-19.236 26.729 0 42.52 15.389 42.52 43.74v60.938H458.4V71.246c0-18.827-9.92-29.155-28.143-29.155-19.638 0-33 13.163-33 31.789v55.275h-21.463Zm111.159 50.617c0-33 22.875-53.25 50.207-53.25 16.4 0 30.576 5.871 39.075 18.023V1.2H597.7v127.947h-21.465v-15.583c-9.31 12.554-22.674 18.217-39.075 18.217-27.332 0-50.207-20.643-50.207-54.055m89.892.2c0-21.26-12.554-36.039-33.813-36.039-21.052 0-33.807 14.578-33.807 35.838 0 21.461 12.755 36.649 33.807 36.649 21.26 0 33.813-15.188 33.813-36.448m27.942 0c0-31.381 21.26-53.445 56.28-53.445 35.234 0 56.287 22.064 56.287 53.445s-21.052 53.86-56.287 53.86c-35.02 0-56.28-22.473-56.28-53.86m90.294 0c0-19.839-10.932-36.032-34.015-36.032S627.06 58.089 627.06 77.928c0 20.047 10.932 36.448 34.008 36.448s34.015-16.4 34.015-36.448"
                                        data-name="Path 279"
                                        transform="translate(19937.83 878.08)"
                                    ></path>
                                    <text
                                        id="Address_Account"
                                        fill="#fff"
                                        data-name="Address/Account"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="47"
                                        transform="translate(19695 1961)"
                                    >
                                        <tspan x="-182.871" y="0">
                                            Address/Account
                                        </tspan>
                                    </text>
                                    <text
                                        id="TjHbjW6WhcAwFJnmQHV4g2XVF"
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="60"
                                        transform="translate(21553 1962)"
                                    >
                                        <tspan x="-452.798" y="0" textAnchor="end">
                                            {data.address}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_7kNAKTEQS"
                                        fill="#fff"
                                        data-name="7kNAKTEQS"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="60"
                                        transform="translate(21265 2047)"
                                    >
                                        <tspan x="-165.454" y="0" textAnchor="end">
                                            {data.address2}
                                        </tspan>
                                    </text>
                                    <text
                                        id="TRC20"
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="60"
                                        transform="translate(21190 2239)"
                                    >
                                        <tspan x="-89.59" y="0" textAnchor="end">
                                            {data.network}
                                        </tspan>
                                    </text>
                                    <text
                                        id="Platform_Salary"
                                        fill="#fff"
                                        data-name="Platform Salary"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="60"
                                        transform="translate(21303 2449)"
                                    >
                                        <tspan x="-206.045" y="0" textAnchor="end">
                                            {data.remarks}
                                        </tspan>
                                    </text>
                                    <text
                                        id="Network"
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="47"
                                        transform="translate(19598 2235)"
                                    >
                                        <tspan x="-87.804" y="0">
                                            Network
                                        </tspan>
                                    </text>
                                    <text
                                        id="Remarks"
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="47"
                                        transform="translate(19601 2445)"
                                    >
                                        <tspan x="-92.279" y="0">
                                            Remarks
                                        </tspan>
                                    </text>
                                    <text
                                        id="_518.31_USDT"
                                        fill="#fff"
                                        data-name="518.31 USDT"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="169"
                                        transform="translate(20800 1747)"
                                    >
                                        <tspan x="-490.042" y="0" textAnchor="middle">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <path
                                        id="Rectangle_148"
                                        fill="#6f6f6f"
                                        d="M0 0h1593v6H0z"
                                        data-name="Rectangle 148"
                                        transform="translate(19510 1811)"
                                    ></path>
                                    <path
                                        id="Rectangle_147"
                                        fill="#6f6f6f"
                                        d="M0 0h1616v6H0z"
                                        data-name="Rectangle 147"
                                        transform="translate(19504 3749)"
                                    ></path>
                                    <text
                                        id="_2024_Zalando._All_rights_reserved."
                                        fill="#fff"
                                        data-name="© 2025 Zalando. All rights reserved."
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="58"
                                        transform="translate(20312 3840)"
                                    >
                                        <tspan x="-461.31" y="0">
                                            © 2025 Zalando. All rights reserved.
                                        </tspan>
                                    </text>
                                    <text
                                        id="Conditions_of_Use_-Privacy_Policy_-_Legal_Terms"
                                        fill="#fff"
                                        data-name="Conditions of Use -Privacy Policy - Legal Terms"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="58"
                                        transform="translate(20316 3919)"
                                    >
                                        <tspan x="-603.01" y="0">
                                            Conditions of Use -Privacy Policy - Legal Terms
                                        </tspan>
                                    </text>
                                    <text
                                        id="Estimated_completion_time_:_2023-8-26_15:30:35"
                                        fill="#fff"
                                        data-name="Estimated completion time : 2023-8-26 15:30:35"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="53"
                                        letterSpacing=".148em"
                                        transform="translate(21053 3141)"
                                    >
                                        <tspan x="-740.43" y="0" textAnchor="middle">
                                            Estimated completion time : {data.time}
                                        </tspan>
                                    </text>
                                    <text
                                        id="You_will_receive_your_payment_once"
                                        fill="#fff"
                                        data-name="You will receive your payment once"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="52"
                                        letterSpacing=".148em"
                                        transform="translate(20845 3265)"
                                    >
                                        <tspan x="-530.682" y="0" textAnchor="middle">
                                            You will receive your payment once
                                        </tspan>
                                    </text>
                                    <text
                                        id="withdrawal_is_completed"
                                        fill="#fff"
                                        data-name="withdrawal is completed"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="53"
                                        letterSpacing=".148em"
                                        transform="translate(20685 3352)"
                                    >
                                        <tspan x="-372.854" y="0" textAnchor="middle">
                                            withdrawal is completed
                                        </tspan>
                                    </text>
                                    <text
                                        id="Withdrawal_Processing"
                                        fill="#fff"
                                        data-name="Withdrawal Processing"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="58"
                                        letterSpacing=".1em"
                                        transform="translate(20665 1533)"
                                    >
                                        <tspan x="-353.494" y="0" textAnchor="middle">
                                            Withdrawal Processing
                                        </tspan>
                                    </text>
                                    <g data-type="innerShadowGroup">
                                        <g filter="url(#Path_277)" transform="translate(19443 231)">
                                            <g id="Path_277-3" fill="none" data-name="Path 277">
                                                <path d="M868.004 275.9c241.72 0 437.674 195.953 437.674 437.674s-195.954 437.673-437.674 437.673S430.33 955.294 430.33 713.574 626.283 275.9 868.004 275.9"></path>
                                                <path
                                                    fill="rgba(255,76,0,0.1)"
                                                    d="M868.004 290.9c-233.063 0-422.674 189.61-422.674 422.674s189.61 422.673 422.674 422.673 422.673-189.61 422.673-422.673S1101.067 290.9 868.004 290.9m0-15c241.72 0 437.673 195.953 437.673 437.674s-195.953 437.673-437.673 437.673S430.33 955.294 430.33 713.574 626.283 275.9 868.004 275.9"
                                                ></path>
                                            </g>
                                        </g>
                                        <g filter="url(#Path_277-2)" transform="translate(19443 231)">
                                            <g id="Path_277-4" fill="#fff" data-name="Path 277">
                                                <path d="M868.004 275.9c241.72 0 437.674 195.953 437.674 437.674s-195.954 437.673-437.674 437.673S430.33 955.294 430.33 713.574 626.283 275.9 868.004 275.9"></path>
                                                <path d="M868.004 290.9c-233.063 0-422.674 189.61-422.674 422.674s189.61 422.673 422.674 422.673 422.673-189.61 422.673-422.673S1101.067 290.9 868.004 290.9m0-15c241.72 0 437.673 195.953 437.673 437.674s-195.953 437.673-437.673 437.673S430.33 955.294 430.33 713.574 626.283 275.9 868.004 275.9"></path>
                                            </g>
                                        </g>
                                        <g id="Path_277-5" fill="none" data-name="Path 277">
                                            <path d="M20311 506.9c241.72 0 437.674 195.953 437.674 437.674s-195.954 437.673-437.674 437.673-437.674-195.953-437.674-437.673S20069.279 506.9 20311 506.9"></path>
                                            <path
                                                fill="rgba(255,76,0,0.1)"
                                                d="M20311 521.9c-233.063 0-422.674 189.61-422.674 422.674s189.61 422.673 422.674 422.673 422.673-189.61 422.673-422.673S20544.063 521.9 20311 521.9m0-15c241.72 0 437.673 195.953 437.673 437.674s-195.953 437.673-437.673 437.673-437.674-195.953-437.674-437.673S20069.279 506.9 20311 506.9"
                                            ></path>
                                        </g>
                                    </g>
                                    <g
                                        id="Rectangle_449"
                                        fill="none"
                                        stroke="#ff4c00"
                                        strokeWidth="10"
                                        data-name="Rectangle 449"
                                    >
                                        <path stroke="none" d="M19471 259h1680v3717h-1680z"></path>
                                        <path d="M19476 264h1670v3707h-1670z"></path>
                                    </g>
                                    <path
                                        id="Path_278"
                                        fill="rgba(255,76,0,0.13)"
                                        d="M1233.848 532.565c-95.638-119.406-229.532-235.248-404.737-339.771l-.679-.34C651.812 90.422 486.171 30.492 336.715 5.932 243.284-9.4 198.747 8.478 178.431 20.362c-20.259 11.884-57.779 42.217-91.394 132.083C33.275 296.412 1.415 472.127 0 678.74v.736c1.415 206.557 33.219 382.271 87.037 526.238 33.615 89.866 71.135 120.2 91.394 132.083s64.91 29.767 158.228 14.431c149.513-24.56 315.154-84.49 491.774-186.467l.679-.4c175.2-104.523 309.042-220.421 404.737-339.771 59.76-74.53 66.833-122.689 66.833-146.57 0-23.768-7.074-71.927-66.777-146.457"
                                        data-name="Path 278"
                                        transform="translate(19725.744 1433)"
                                    ></path>
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

export default View102