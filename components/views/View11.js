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

const View11 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 11";

    const [data, setData] = useState({
        amount: "80.97 USDC",
        ca$: "CA$107.25",
        min: "10"
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
            0,
            1,
            0.3,
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
                                viewBox="0 0 501 1085"
                            >
                                <style>
                                    {
                                        RobotoBaseEncoded
                                    }
                                </style>
                                <g data-name="Group 19" transform="translate(-848 -46)">
                                    <path
                                        fill="#fff"
                                        d="M0 0H501V1085H0z"
                                        data-name="Rectangle 8"
                                        transform="translate(848 46)"
                                    ></path>
                                    <g data-name="Group 17">
                                        <circle
                                            cx="86"
                                            cy="86"
                                            r="86"
                                            fill="#0052fe"
                                            data-name="Ellipse 5"
                                            transform="translate(1013 187)"
                                        ></circle>
                                    </g>
                                    <text
                                        fill="#262626"
                                        data-name="Successfully sent"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="17"
                                        fontWeight="700"
                                        transform="translate(1033 415)"
                                    >
                                        <tspan x="0" y="0">
                                            Successfully sent
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2462eb"
                                        data-name="80.97 USDC"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="27"
                                        fontWeight="700"
                                        transform="translate(1102 471)"
                                    >
                                        <tspan x="0" y="0" textAnchor='middle'>
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#848484"
                                        data-name="CA$107.25"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="15"
                                        fontWeight="700"
                                        transform="translate(1106 505)"
                                    >
                                        <tspan x="0" y="0" textAnchor='middle'>
                                            {data.ca$}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#848484"
                                        data-name="This transaction usually takes less than 10 minutes"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="15"
                                        fontWeight="500"
                                        transform="translate(1100 564)"
                                    >
                                        <tspan x="0" y="0" textAnchor='middle'>
                                            This transaction usually takes less than {data.min} minutes
                                        </tspan>
                                    </text>
                                    <rect
                                        width="459"
                                        height="72"
                                        fill="#0052fe"
                                        data-name="Rectangle 9"
                                        rx="36"
                                        transform="translate(869 922)"
                                    ></rect>
                                    <rect
                                        width="459"
                                        height="72"
                                        fill="#eeeff4"
                                        data-name="Rectangle 10"
                                        rx="36"
                                        transform="translate(869 1014)"
                                    ></rect>
                                    <text
                                        fill="#b6d5ff"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="17"
                                        fontWeight="700"
                                        transform="translate(1079 964)"
                                    >
                                        <tspan x="0" y="0">
                                            Done
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#404143"
                                        data-name="View transaction"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="17"
                                        fontWeight="700"
                                        transform="translate(1035 1056)"
                                    >
                                        <tspan x="0" y="0">
                                            View transaction
                                        </tspan>
                                    </text>
                                    {
                                        isIOS
                                            ?
                                            <>
                                                <rect
                                                    width="184"
                                                    height="7"
                                                    fill="#070707"
                                                    data-name="Rectangle 11"
                                                    rx="5"
                                                    transform="translate(1009 1118)"
                                                ></rect>
                                            </>
                                            :
                                            <></>
                                    }
                                    <g
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="7"
                                        data-name="Group 18"
                                        transform="translate(631 -2.495)"
                                    >
                                        <path
                                            d="M0 0L21 21"
                                            data-name="Line 5"
                                            transform="translate(445.5 273.995)"
                                        ></path>
                                        <path
                                            d="M462.5 296l21.915-21.916L505 253.5"
                                            data-name="Path 2"
                                        ></path>
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
                                <label>Amount</label>
                                <input
                                    type="text"
                                    value={data.amount}
                                    name="amount"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>CA$</label>
                                <input
                                    type="text"
                                    value={data.ca$}
                                    name="ca$"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Min</label>
                                <input
                                    type="text"
                                    value={data.min}
                                    name="min"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                        </div>
                    </div>
            </div >
        </>
    )
}

export default View11;