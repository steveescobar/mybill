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
                                <g id="Group_386" data-name="Group 386" transform="translate(-810 -243)">
                                    <path
                                        id="Rectangle_75"
                                        fill="#fff"
                                        d="M0 0h1736v3773H0z"
                                        data-name="Rectangle 75"
                                        transform="translate(810 243)"
                                    ></path>
                                    <path
                                        id="Path_278"
                                        fill="#ff4c00"
                                        d="M185.3 79.98c-14.363-17.932-34.471-35.329-60.783-51.026l-.1-.051C97.888 13.58 73.013 4.579 50.567.891c-14.031-2.3-20.72.382-23.771 2.167S18.119 9.4 13.071 22.894C5 44.515.212 70.9 0 101.932v.11c.212 31.02 4.989 57.409 13.071 79.03 5.048 13.5 10.683 18.051 13.725 19.836s9.748 4.47 23.762 2.167c22.454-3.688 47.329-12.689 73.854-28l.1-.059c26.312-15.7 46.412-33.1 60.783-51.026 8.975-11.193 10.037-18.425 10.037-22.012 0-3.569-1.062-10.8-10.029-21.995"
                                        data-name="Path 278"
                                        transform="translate(1123.396 937.033)"
                                    ></path>
                                    <path
                                        id="Path_279"
                                        d="m28.986 139.057 86.262-83.7H31.289V34.055h117.325v24.391l-86.262 83.688h88.319v21.315H28.986Zm125.79-10.785c0-28.751 24.646-36.715 46.463-39.528L241.8 83.6c9.757-1.275 12.578-5.643 12.578-11.55v-.25c0-11.558-10.012-20.023-31.828-20.023-21.051 0-32.865 7.955-34.921 21.306h-27.21c3.085-26.185 25.93-42.358 62.9-42.358 41.338 0 58.276 17.456 58.276 46.208v86.517h-25.922v-20.543c-11.048 15.918-30.816 23.881-53.151 23.881-29.525 0-47.746-14.89-47.746-38.516m99.605-23.355v-6.161a61 61 0 0 1-14.635 3.586l-32.346 4.369c-16.683 2.312-24.391 8.473-24.391 19.768 0 12.068 10.275 19.258 26.958 19.258 27.476 0 44.414-18.748 44.414-40.819M293.671 1.2h27.213v162.24h-27.213Zm36.2 127.073c0-28.751 24.646-36.715 46.463-39.528l40.56-5.145c9.757-1.275 12.578-5.643 12.578-11.55v-.25c0-11.558-10.012-20.023-31.836-20.023-21.051 0-32.856 7.955-34.913 21.306H335.51c3.085-26.185 25.93-42.358 62.9-42.358 41.329 0 58.276 17.456 58.276 46.208v86.517h-25.922v-20.543c-11.048 15.918-30.816 23.881-53.151 23.881-29.525 0-47.746-14.89-47.746-38.516m99.605-23.355v-6.161a61 61 0 0 1-14.635 3.586l-32.346 4.368c-16.683 2.312-24.391 8.473-24.391 19.768 0 12.068 10.275 19.258 26.958 19.258 27.468 0 44.414-18.748 44.414-40.819m39.273-70.862h27.221v21.051c9.748-15.4 28.233-24.391 50.823-24.391 33.893 0 53.916 19.513 53.916 55.463v77.271h-27.213v-73.43c0-23.873-12.578-36.97-35.686-36.97-24.9 0-41.839 16.692-41.839 40.31v70.089h-27.222ZM609.7 98.238c0-41.848 29.006-67.522 63.664-67.522 20.8 0 38.771 7.445 49.548 22.853V1.2h27.213v162.24h-27.217v-19.76c-11.8 15.918-28.751 23.1-49.548 23.1-34.66 0-63.66-26.18-63.66-68.542m113.985.255c0-26.958-15.918-45.7-42.876-45.7-26.695 0-42.868 18.485-42.868 45.443 0 27.213 16.173 46.471 42.868 46.471 26.958 0 42.876-19.258 42.876-46.216m35.431 0c0-39.791 26.958-67.769 71.364-67.769 44.678 0 71.372 27.978 71.372 67.769s-26.695 68.3-71.372 68.3c-44.406 0-71.364-28.5-71.364-68.3m114.5 0c0-25.156-13.861-45.689-43.131-45.689s-43.123 20.533-43.123 45.689c0 25.42 13.862 46.216 43.123 46.216s43.131-20.8 43.131-46.216"
                                        data-name="Path 279"
                                        transform="translate(1340.755 946.023)"
                                    ></path>
                                    <text
                                        id="Address_Account"
                                        fill="#191919"
                                        data-name="Address/Account"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="49"
                                        transform="translate(1063 1951)"
                                    >
                                        <tspan x="-190.653" y="0">
                                            Address/Account
                                        </tspan>
                                    </text>
                                    <text
                                        id="TjHbjW6WhcAwFJnmQHV4g2XVF"
                                        fill="#191919"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="63"
                                        transform="translate(2980 1952)"
                                    >
                                        <tspan x="-475.438" y="0" textAnchor="end">
                                            {data.address}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_7kNAKTEQS"
                                        fill="#191919"
                                        data-name="7kNAKTEQS"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="63"
                                        transform="translate(2680 2040)"
                                    >
                                        <tspan x="-173.727" y="0" textAnchor="end">
                                            {data.address2}
                                        </tspan>
                                    </text>
                                    <text
                                        id="ERC20"
                                        fill="#191919"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="63"
                                        transform="translate(2600 2240)"
                                    >
                                        <tspan x="-94.069" y="0" textAnchor="end">
                                            {data.network}
                                        </tspan>
                                    </text>
                                    <text
                                        id="Platform_Salary"
                                        fill="#191919"
                                        data-name="Platform Salary"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="63"
                                        transform="translate(2720 2458)"
                                    >
                                        <tspan x="-216.347" y="0" textAnchor="end">
                                            {data.remarks}
                                        </tspan>
                                    </text>
                                    <text
                                        id="Network"
                                        fill="#191919"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="49"
                                        transform="translate(964 2235)"
                                    >
                                        <tspan x="-91.54" y="0">
                                            Network
                                        </tspan>
                                    </text>
                                    <text
                                        id="Remarks"
                                        fill="#191919"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="49"
                                        transform="translate(972 2453)"
                                    >
                                        <tspan x="-96.206" y="0">
                                            Remarks
                                        </tspan>
                                    </text>
                                    <text
                                        id="_518.31_USDT"
                                        fill="#191919"
                                        data-name="518.31 USDT"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="177"
                                        transform="translate(2189 1729)"
                                    >
                                        <tspan x="-513.24" y="0" textAnchor="middle">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <path
                                        id="Rectangle_148"
                                        fill="#6f6f6f"
                                        d="M0 0h1654v6H0z"
                                        data-name="Rectangle 148"
                                        transform="translate(852 1795)"
                                    ></path>
                                    <path
                                        id="Rectangle_147"
                                        fill="#6f6f6f"
                                        d="M0 0h1677v6H0z"
                                        data-name="Rectangle 147"
                                        transform="translate(840 3806)"
                                    ></path>
                                    <text
                                        id="_2024_Zalando._All_rights_reserved."
                                        fill="#142e0b"
                                        data-name="© 2024 Zalando. All rights reserved."
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="61"
                                        transform="translate(1677 3901)"
                                    >
                                        <tspan x="-485.17" y="0">
                                            © 2024 Zalando. All rights reserved.
                                        </tspan>
                                    </text>
                                    <text
                                        id="Conditions_of_Use_-Privacy_Policy_-_Legal_Terms"
                                        fill="#142e0b"
                                        data-name="Conditions of Use -Privacy Policy - Legal Terms"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="61"
                                        transform="translate(1683 3983)"
                                    >
                                        <tspan x="-634.2" y="0">
                                            Conditions of Use -Privacy Policy - Legal Terms
                                        </tspan>
                                    </text>
                                    <text
                                        id="Estimated_completion_time_:_2023-8-26_15:30:35"
                                        fill="#191919"
                                        data-name="Estimated completion time : 2023-8-26 15:30:35"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="55"
                                        letterSpacing=".148em"
                                        transform="translate(2450 3175)"
                                    >
                                        <tspan x="-768.371" y="0" textAnchor="middle">
                                            Estimated completion time : {data.time}
                                        </tspan>
                                    </text>
                                    <text
                                        id="You_will_receive_your_payment_once"
                                        fill="#191919"
                                        data-name="You will receive your payment once"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="55"
                                        letterSpacing=".148em"
                                        transform="translate(1709 3305)"
                                    >
                                        <tspan x="-561.299" y="0">
                                            You will receive your payment once
                                        </tspan>
                                    </text>
                                    <text
                                        id="withdrawal_is_completed"
                                        fill="#191919"
                                        data-name="withdrawal is completed"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="55"
                                        letterSpacing=".148em"
                                        transform="translate(1723 3394)"
                                    >
                                        <tspan x="-386.924" y="0">
                                            withdrawal is completed
                                        </tspan>
                                    </text>
                                    <text
                                        id="Withdrawal_Processing"
                                        fill="#191919"
                                        data-name="Withdrawal Processing"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="61"
                                        letterSpacing=".1em"
                                        transform="translate(1697 1507)"
                                    >
                                        <tspan x="-371.778" y="0">
                                            Withdrawal Processing
                                        </tspan>
                                    </text>
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
                                isDarkBg={true}
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