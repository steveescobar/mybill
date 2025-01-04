"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from '@/utils/getPicture';
import { RobotoBaseEncoded } from "@/utils/encodedFonts/RobotoBaseEncoded";
import Image from "next/image";

const View113 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 113";

    const [data, setData] = useState({
        amount: "$10,000",
        bitcoin: "$0.00",
        bitcoinAlt: "0 BTC",
        etherium: "$0.00",
        etheriumAlt: "0.00202429ETH",
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
            0.5,
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
                        isIOS={isIOS}
                        setIsIOS={setIsIOS}
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
                                viewBox="0 0 403 890"
                            >
                                <style>
                                    {
                                      RobotoBaseEncoded
                                    }
                                </style>
                                <g id="Group_20" data-name="Group 20" transform="translate(-839 -123)">
                                    <g id="Group_19" data-name="Group 19" transform="translate(134 48)">
                                        <g id="Group_18" data-name="Group 18" transform="translate(141 -20)">
                                            <path
                                                id="Rectangle_1"
                                                fill="#141414"
                                                d="M0 0h402v890H0z"
                                                data-name="Rectangle 1"
                                                transform="translate(564 95)"
                                            ></path>
                                            <g id="Group_17" data-name="Group 17" transform="translate(459.5)">
                                                <g id="Group_15" data-name="Group 15">
                                                    <text
                                                        id="Bitcoin"
                                                        fill="#f99a01"
                                                        fontFamily="SegoeUI-Semibold, Segoe UI"
                                                        fontSize="18"
                                                        fontWeight="600"
                                                        transform="translate(138 590)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            Bitcoin
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        id="_0.00"
                                                        fill="#fcfdff"
                                                        data-name="$0.00"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="25"
                                                        fontWeight="700"
                                                        letterSpacing=".027em"
                                                        transform="translate(138 632.975)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            {data.bitcoin}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        id="_0_BTC"
                                                        fill="#989898"
                                                        data-name="0 BTC"
                                                        fontFamily="SegoeUI-Semibold, Segoe UI"
                                                        fontSize="16"
                                                        fontWeight="600"
                                                        letterSpacing=".006em"
                                                        transform="translate(138 658)"
                                                    >
                                                        <tspan x="0" y="0">
                                                           {data.bitcoinAlt}
                                                        </tspan>
                                                    </text>
                                                    <ellipse
                                                        id="Ellipse_112"
                                                        cx="23.5"
                                                        cy="22.5"
                                                        fill="#fd9a00"
                                                        data-name="Ellipse 112"
                                                        rx="23.5"
                                                        ry="22.5"
                                                        transform="translate(430 601)"
                                                    ></ellipse>
                                                    <ellipse
                                                        id="Ellipse_113"
                                                        cx="15.5"
                                                        cy="15"
                                                        fill="#fff"
                                                        data-name="Ellipse 113"
                                                        rx="15.5"
                                                        ry="15"
                                                        transform="translate(438 608.5)"
                                                    ></ellipse>
                                                    <path
                                                        id="bitcoin-2"
                                                        fill="#fd9a00"
                                                        d="M35.225 17.612A17.612 17.612 0 1 1 17.612 0a17.61 17.61 0 0 1 17.613 17.612m-10.063-2.507c.348-2.343-1.434-3.6-3.878-4.446l.788-3.175L20.14 7l-.773 3.089q-.767-.189-1.549-.36l.774-3.11-1.931-.483-.795 3.175q-.63-.14-1.236-.292v-.006l-2.663-.668-.511 2.066s1.433.326 1.407.348a1.03 1.03 0 0 1 .9 1.124l-.9 3.615a2 2 0 0 1 .2.064c-.064-.014-.135-.035-.206-.049l-1.267 5.063a.71.71 0 0 1-.887.462c.021.028-1.406-.348-1.406-.348l-.959 2.205 2.514.627c.468.121.923.241 1.377.355l-.8 3.21 1.931.483.8-3.175q.768.207 1.541.4l-.788 3.163 1.931.483.8-3.2c3.3.625 5.771.369 6.82-2.607.838-2.4-.043-3.786-1.775-4.687a3.07 3.07 0 0 0 2.464-2.835ZM20.744 21.3c-.6 2.4-4.638 1.1-5.952.774l1.058-4.253c1.307.327 5.511.974 4.886 3.48Zm.6-6.228c-.547 2.179-3.906 1.072-5 .8l.958-3.856c1.095.269 4.6.781 4.035 3.054Z"
                                                        data-name="bitcoin"
                                                        transform="rotate(3 -11333.401 8643.504)"
                                                    ></path>
                                                    <g
                                                        id="Rectangle_5"
                                                        fill="none"
                                                        stroke="#323433"
                                                        strokeWidth="1.5"
                                                        data-name="Rectangle 5"
                                                        transform="translate(118 554)"
                                                    >
                                                        <rect width="378" height="128" stroke="none" rx="24"></rect>
                                                        <rect
                                                            width="376.5"
                                                            height="126.5"
                                                            x="0.75"
                                                            y="0.75"
                                                            rx="23.25"
                                                        ></rect>
                                                    </g>
                                                    <g
                                                        id="Rectangle_6"
                                                        fill="none"
                                                        stroke="#323433"
                                                        strokeWidth="1.5"
                                                        data-name="Rectangle 6"
                                                        transform="translate(119 703)"
                                                    >
                                                        <rect width="378" height="128" stroke="none" rx="24"></rect>
                                                        <rect
                                                            width="376.5"
                                                            height="126.5"
                                                            x="0.75"
                                                            y="0.75"
                                                            rx="23.25"
                                                        ></rect>
                                                    </g>
                                                    <text
                                                        id="Ethereum"
                                                        fill="#5067f8"
                                                        fontFamily="SegoeUI-Semibold, Segoe UI"
                                                        fontSize="18"
                                                        fontWeight="600"
                                                        transform="translate(138 739)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            Ethereum
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        id="_0.00-2"
                                                        fill="#f1f4f8"
                                                        data-name="$0.00"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="25"
                                                        fontWeight="700"
                                                        letterSpacing=".027em"
                                                        transform="translate(136 782)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            {data.etherium}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        id="_0_ETH"
                                                        fill="#989898"
                                                        data-name="0 ETH"
                                                        fontFamily="SegoeUI-Semibold, Segoe UI"
                                                        fontSize="16"
                                                        fontWeight="600"
                                                        letterSpacing=".006em"
                                                        transform="translate(139 807)"
                                                    >
                                                        <tspan xmlSpace="preserve" x="0" y="0">
                                                            {data.etheriumAlt}
                                                        </tspan>
                                                    </text>
                                                    <g
                                                        id="Group_3"
                                                        data-name="Group 3"
                                                        transform="translate(36.212 -60.93)"
                                                    >
                                                        <ellipse
                                                            id="Ellipse_18"
                                                            cx="23.5"
                                                            cy="22.5"
                                                            fill="#6482fc"
                                                            data-name="Ellipse 18"
                                                            rx="23.5"
                                                            ry="22.5"
                                                            transform="translate(393.788 809.93)"
                                                        ></ellipse>
                                                        <path
                                                            id="ethereum-2"
                                                            fill="#eefaff"
                                                            d="m21.8 12.386-6.9 4.407L8 12.386 14.9 0Zm-6.893 5.822L8 13.8l6.9 10.516L21.8 13.8Z"
                                                            data-name="ethereum"
                                                            transform="translate(402.297 820.06)"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g id="Group_13" data-name="Group 13">
                                                    <text
                                                        id="_10_000"
                                                        fill="#fcfdff"
                                                        data-name="$10,000"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="43"
                                                        fontWeight="700"
                                                        letterSpacing=".064em"
                                                        transform="translate(305 253)"
                                                    >
                                                        <tspan x="0" y="0" textAnchor="middle">
                                                            {data.amount}
                                                        </tspan>
                                                    </text>
                                                    <g
                                                        id="Group_3-2"
                                                        fill="#fff"
                                                        data-name="Group 3"
                                                        transform="translate(-5843.369 -4574.958)"
                                                    >
                                                        <path
                                                            id="Path_10"
                                                            d="m.954 0 7.985.026c.525 0 .963.311.963.692s-.424.688-.954.686L.963 1.379C.437 1.377 0 1.067 0 .686S.424 0 .954 0"
                                                            data-name="Path 10"
                                                            transform="rotate(135.97 2131.064 3686.196)"
                                                        ></path>
                                                        <path
                                                            id="Path_10-2"
                                                            d="m.954 0 7.985.026c.525 0 .963.311.963.692s-.424.688-.954.686L.963 1.379C.437 1.377 0 1.067 0 .686S.424 0 .954 0"
                                                            data-name="Path 10"
                                                            transform="rotate(44.973 -2747.206 9935.169)"
                                                        ></path>
                                                    </g>
                                                    <text
                                                        id="Cash_balance"
                                                        fill="#fcfdff"
                                                        data-name="Cash balance"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="16"
                                                        fontWeight="700"
                                                        letterSpacing=".05em"
                                                        transform="translate(259 285)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            Cash balance
                                                        </tspan>
                                                    </text>
                                                    <circle
                                                        id="Ellipse_2"
                                                        cx="10"
                                                        cy="10"
                                                        r="10"
                                                        fill="#e63d71"
                                                        data-name="Ellipse 2"
                                                        transform="translate(232 269)"
                                                    ></circle>
                                                    <path
                                                        id="Canadian-Maple-Leaf--Streamline-Font-Awesome"
                                                        fill="#fff"
                                                        d="M8.49 7.619c.054-.054 2.279-2 2.279-2l-.379-.162c-.217-.106-.16-.249-.108-.377.052-.165.435-1.458.435-1.458s-1.033.217-1.25.271c-.162.052-.217-.054-.271-.162s-.325-.7-.325-.7-1.139 1.3-1.194 1.35c-.217.162-.435 0-.381-.217 0-.217.6-2.808.6-2.808s-.652.377-.869.485c-.162.108-.273.108-.381-.108C6.534 1.566 5.719 0 5.719 0S4.907 1.566 4.8 1.729c-.108.217-.217.217-.381.108-.217-.108-.869-.485-.869-.485s.6 2.591.6 2.808c.054.217-.162.379-.381.217-.054-.054-1.194-1.35-1.194-1.35s-.271.591-.325.7-.108.214-.271.162c-.219-.054-1.25-.271-1.25-.271s.381 1.293.435 1.458c.052.13.108.271-.108.377l-.379.165s2.223 1.948 2.279 2c.11.108.217.162.11.487s-.219.76-.219.76 2.062-.435 2.281-.49c.188-.019.4.054.4.271S5.4 11.092 5.4 11.092h.65s-.126-2.225-.126-2.444.206-.29.4-.271c.217.054 2.279.49 2.279.49s-.108-.435-.217-.76 0-.379.108-.487Z"
                                                        transform="translate(236.057 273.954)"
                                                    ></path>
                                                </g>
                                                <g id="Group_12" data-name="Group 12">
                                                    <g
                                                        id="Group_1"
                                                        fill="#3c3c3c"
                                                        data-name="Group 1"
                                                        transform="translate(-1)"
                                                    >
                                                        <rect
                                                            id="Rectangle_3"
                                                            width="183"
                                                            height="55"
                                                            data-name="Rectangle 3"
                                                            rx="27.5"
                                                            transform="translate(119 329)"
                                                        ></rect>
                                                        <rect
                                                            id="Rectangle_4"
                                                            width="183"
                                                            height="55"
                                                            data-name="Rectangle 4"
                                                            rx="27.5"
                                                            transform="translate(313 329)"
                                                        ></rect>
                                                    </g>
                                                    <text
                                                        id="Add"
                                                        fill="#f1f4f8"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="16"
                                                        transform="translate(197 362)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            Add
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        id="Send"
                                                        fill="#f1f4f8"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="17"
                                                        transform="translate(385 362)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            Send
                                                        </tspan>
                                                    </text>
                                                </g>
                                                <g id="Group_14" data-name="Group 14">
                                                    <g
                                                        id="Group_1-2"
                                                        data-name="Group 1"
                                                        transform="translate(-5085 -4108.659)"
                                                    >
                                                        <circle
                                                            id="Ellipse_14"
                                                            cx="19"
                                                            cy="19"
                                                            r="19"
                                                            fill="#403c3b"
                                                            data-name="Ellipse 14"
                                                            transform="translate(5204 4239.659)"
                                                        ></circle>
                                                        <path
                                                            id="Path_1"
                                                            fill="#f3f7ff"
                                                            d="M8.557 8.942a4.694 4.694 0 0 0 4.889-4.472A4.694 4.694 0 0 0 8.557 0a4.694 4.694 0 0 0-4.89 4.47 4.694 4.694 0 0 0 4.89 4.472m-1.746 1.676C3.053 10.618 0 13.406 0 16.847a1.09 1.09 0 0 0 1.134 1.037h14.845a1.09 1.09 0 0 0 1.134-1.037c0-3.44-3.053-6.228-6.811-6.228Z"
                                                            data-name="Path 1"
                                                            transform="translate(5215.094 4247.495)"
                                                        ></path>
                                                    </g>
                                                    <g id="Group_6" data-name="Group 6">
                                                        <rect
                                                            id="Rectangle_2"
                                                            width="70"
                                                            height="40"
                                                            fill="#403c3b"
                                                            data-name="Rectangle 2"
                                                            rx="20"
                                                            transform="translate(426 130)"
                                                        ></rect>
                                                        <text
                                                            id="_0"
                                                            fill="#fcfdff"
                                                            data-name="0"
                                                            fontFamily="Roboto-Regular, Roboto"
                                                            fontSize="19"
                                                            transform="translate(471 157)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                0
                                                            </tspan>
                                                        </text>
                                                        <g id="Group_5" data-name="Group 5" transform="translate(-1 2)">
                                                            <g
                                                                id="Group_2"
                                                                data-name="Group 2"
                                                                transform="translate(-5755.585 -4067.31)"
                                                            >
                                                                <path
                                                                    id="Path_3"
                                                                    fill="#c6c3c3"
                                                                    d="M7.868.275a.98.98 0 0 1 1.368 0 40.5 40.5 0 0 1 3.838 4.26A18.4 18.4 0 0 1 14.9 2.367a.985.985 0 0 1 1.383 0 22 22 0 0 1 4.173 5.984 14.6 14.6 0 0 1 1.668 5.674c0 6.471-4.93 11.938-11.064 11.938C4.86 25.965 0 20.494 0 14.023a14.34 14.34 0 0 1 2.242-6.678A32.3 32.3 0 0 1 7.868.275M11.146 21.1c1.217.007 4.559-.477 4.509.943.094-.073-7.785.906-7.472.616 1.633-1.439-2.015-13.1 7.751-9.439l-.843 1.541-3.791 7.456a17 17 0 0 1 3.279-.461L13.578 14.6c-.152.183 2.136 7.033 1.9 7.028l-1.537.216-1.5 1.253c-1.033-1.35-1.057.6-2.093-.749-.143-.192 3.031-.068 2.791-.069s-1.693-.256-1.838-.065c-1.668 2.156-.4-1.47-.4.056-.062 1.5.094-.783 1.165.27s-2.423-1.361-.923-1.446Z"
                                                                    data-name="Path 3"
                                                                    transform="rotate(8 -26962.62 46375.94)"
                                                                ></path>
                                                            </g>
                                                            <g id="Path_1-2" fill="#c6c3c3" data-name="Path 1">
                                                                <path d="M445.448 164c-2.453 0-4.448-1.729-4.448-3.853 0-1.091.512-3.224 1.49-5.19.944-1.894 2.077-3.07 2.958-3.07s2.014 1.176 2.958 3.07c.978 1.966 1.49 4.099 1.49 5.19 0 2.124-1.995 3.853-4.448 3.853"></path>
                                                                <path
                                                                    fill="#403c3b"
                                                                    d="M445.448 152.886c-.16 0-1.032.448-2.062 2.517-.9 1.808-1.386 3.794-1.386 4.744 0 1.573 1.547 2.853 3.448 2.853s3.448-1.28 3.448-2.853c0-.95-.485-2.936-1.386-4.744-1.03-2.069-1.901-2.517-2.062-2.517m0-2c3.01 0 5.448 6.58 5.448 9.26 0 2.681-2.439 4.854-5.448 4.854S440 162.827 440 160.147s2.44-9.26 5.448-9.26"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                        <circle
                                                            id="Ellipse_1"
                                                            cx="6"
                                                            cy="6"
                                                            r="6"
                                                            fill="#f1551c"
                                                            data-name="Ellipse 1"
                                                            transform="translate(484 131)"
                                                        ></circle>
                                                    </g>
                                                </g>
                                                <g id="Group_16" data-name="Group 16">
                                                    <path
                                                        id="Path_4"
                                                        fill="#01a1fe"
                                                        d="M37.545 16.623a1.823 1.823 0 0 1-1.753 1.859zl.039 9.273a5 5 0 0 1-.027.469v.935a2.255 2.255 0 0 1-2.191 2.315h-.878a2 2 0 0 1-.181-.006q-.115.007-.23.006h-3.1A2.255 2.255 0 0 1 28.79 27.3v-5.1c0-.491-.174-4.367-.5-4.715s-1.74 0-2.205 0h-1.454c-.465 0-2.224-.348-2.553 0s-.3 4.223-.3 4.715v5.1a2.255 2.255 0 0 1-2.191 2.315h-3.064q-.123-.002-.247-.011a2 2 0 0 1-.2.011H15.2a2.255 2.255 0 0 1-2.189-2.315v-6.488a2 2 0 0 1 .006-.162v-4.028l1.724 1.86a1.69 1.69 0 0 1-1.248-.538 1.89 1.89 0 0 1-.506-1.32c-.009-.523.148-4.438.506-4.8L23.655 1.662c.322-.328 1.418-.033 1.863 0 .416-.008 1.142-.27 1.471 0l9.843 10.161c.412.324.751 4.257.714 4.8Z"
                                                        data-name="Path 4"
                                                        transform="translate(116.188 893.795)"
                                                    ></path>
                                                    <g
                                                        id="Group_7"
                                                        data-name="Group 7"
                                                        transform="translate(-5531.78 -6347.532)"
                                                    >
                                                        <ellipse
                                                            id="Ellipse_19"
                                                            cx="25.397"
                                                            cy="25.876"
                                                            fill="#079cf6"
                                                            data-name="Ellipse 19"
                                                            rx="25.397"
                                                            ry="25.876"
                                                            transform="translate(5812.383 7231.017)"
                                                        ></ellipse>
                                                        <path
                                                            id="Path_5"
                                                            fill="#fff"
                                                            d="M21.8 73.54a1.312 1.312 0 0 0 0-2l-4.551-4.567a1.735 1.735 0 0 0-2.252 0 1.312 1.312 0 0 0 0 2l1.843 2.149H1.592a1.426 1.426 0 1 0 0 2.834h15.246L15 75.625a1.312 1.312 0 0 0 0 2 1.735 1.735 0 0 0 2.252 0l4.557-4.086Z"
                                                            data-name="Path 5"
                                                            transform="translate(5827.716 7179.322)"
                                                        ></path>
                                                        <path
                                                            id="arrow-right-solid"
                                                            fill="#fff"
                                                            d="M21.8 6.985a1.312 1.312 0 0 0 0-2L17.247.415a1.735 1.735 0 0 0-2.252 0 1.312 1.312 0 0 0 0 2l1.843 2.148H1.587a1.426 1.426 0 1 0 0 2.834h15.246L14.995 9.07a1.312 1.312 0 0 0 0 2 1.735 1.735 0 0 0 2.252 0L21.8 6.99Z"
                                                            transform="rotate(180 2924.99 3633.954)"
                                                        ></path>
                                                    </g>
                                                    <text
                                                        id="_"
                                                        fill="#a7abae"
                                                        data-name="$"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="33"
                                                        transform="translate(379 921)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            $
                                                        </tspan>
                                                    </text>
                                                    <g
                                                        id="Group_4"
                                                        data-name="Group 4"
                                                        transform="translate(19 -12.153)"
                                                    >
                                                        <g
                                                            id="Group_8"
                                                            data-name="Group 8"
                                                            transform="translate(440.047 907.733)"
                                                        >
                                                            <path
                                                                id="Path_6"
                                                                fill="#a7abae"
                                                                d="M42.712 9.711a1.32 1.32 0 0 1-.373 1.434l-2.525 2.3a11 11 0 0 1 0 2.961l2.525 2.3a1.32 1.32 0 0 1 .373 1.434 14.5 14.5 0 0 1-.921 2l-.273.472a15 15 0 0 1-1.289 1.819 1.32 1.32 0 0 1-1.428.4l-3.248-1.041a11.2 11.2 0 0 1-2.565 1.48l-.729 3.33a1.32 1.32 0 0 1-1.059 1.034 15.1 15.1 0 0 1-4.955 0 1.32 1.32 0 0 1-1.063-1.034l-.731-3.328a11.2 11.2 0 0 1-2.565-1.481l-3.236 1.035a1.33 1.33 0 0 1-1.428-.4 15 15 0 0 1-1.289-1.818l-.273-.472a14.5 14.5 0 0 1-.921-2 1.32 1.32 0 0 1 .373-1.434l2.525-2.3a11 11 0 0 1-.1-1.485 11 11 0 0 1 .1-1.481l-2.525-2.3a1.32 1.32 0 0 1-.371-1.434 14.5 14.5 0 0 1 .921-2l.273-.472a15 15 0 0 1 1.287-1.82 1.32 1.32 0 0 1 1.428-.4l3.25 1.043a11.2 11.2 0 0 1 2.565-1.481l.731-3.328A1.32 1.32 0 0 1 26.252.209 14.5 14.5 0 0 1 28.729 0a15 15 0 0 1 2.477.209 1.32 1.32 0 0 1 1.061 1.038L33 4.575a11.2 11.2 0 0 1 2.565 1.481l3.246-1.032a1.33 1.33 0 0 1 1.428.4 15 15 0 0 1 1.287 1.816l.273.472a14.5 14.5 0 0 1 .921 2Zm-13.983 9.872a4.663 4.663 0 1 0-4.663-4.661 4.663 4.663 0 0 0 4.663 4.661"
                                                                data-name="Path 6"
                                                                transform="translate(-14.662)"
                                                            ></path>
                                                            <path
                                                                id="gear-solid"
                                                                d="M34.28 6.79a.92.92 0 0 1-.261 1L32.255 9.4a7.8 7.8 0 0 1 0 2.071l1.765 1.606a.92.92 0 0 1 .261 1 10 10 0 0 1-.644 1.4l-.191.33a10.4 10.4 0 0 1-.9 1.271.92.92 0 0 1-1 .277l-2.27-.721a7.8 7.8 0 0 1-1.793 1.035L26.971 20a.92.92 0 0 1-.742.726 10.6 10.6 0 0 1-3.464 0 .92.92 0 0 1-.742-.726l-.511-2.326a7.8 7.8 0 0 1-1.793-1.035l-2.263.726a.93.93 0 0 1-1-.277 10.4 10.4 0 0 1-.9-1.272l-.191-.33a10 10 0 0 1-.644-1.4.92.92 0 0 1 .261-1l1.765-1.606a8 8 0 0 1-.069-1.039 8 8 0 0 1 .07-1.035l-1.765-1.613a.92.92 0 0 1-.259-1 10 10 0 0 1 .644-1.4l.191-.33a10.4 10.4 0 0 1 .9-1.272.92.92 0 0 1 1-.277l2.27.721A7.8 7.8 0 0 1 21.52 3.2l.511-2.327a.92.92 0 0 1 .74-.727A10 10 0 0 1 24.5 0a10.5 10.5 0 0 1 1.731.146.92.92 0 0 1 .742.726l.513 2.328a7.8 7.8 0 0 1 1.793 1.035l2.27-.721a.93.93 0 0 1 1 .277 10.4 10.4 0 0 1 .9 1.272l.191.329a10 10 0 0 1 .644 1.4Zm-9.778 6.9a3.261 3.261 0 1 0-3.261-3.261 3.26 3.26 0 0 0 3.259 3.266Z"
                                                                transform="translate(-10.474 4.659)"
                                                            ></path>
                                                            <g
                                                                id="Ellipse_114"
                                                                stroke="#a7abae"
                                                                strokeWidth="1"
                                                                data-name="Ellipse 114"
                                                                transform="translate(10.7 10.883)"
                                                            >
                                                                <ellipse
                                                                    cx="3.364"
                                                                    cy="4.036"
                                                                    stroke="none"
                                                                    rx="3.364"
                                                                    ry="4.036"
                                                                ></ellipse>
                                                                <ellipse
                                                                    cx="3.364"
                                                                    cy="4.036"
                                                                    fill="none"
                                                                    rx="2.864"
                                                                    ry="3.536"
                                                                ></ellipse>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <g
                                                        id="Group_7-2"
                                                        fill="none"
                                                        stroke="#a7abae"
                                                        data-name="Group 7"
                                                        transform="translate(34.821 .647)"
                                                    >
                                                        <g
                                                            id="Rectangle_7"
                                                            strokeWidth="3"
                                                            data-name="Rectangle 7"
                                                            transform="translate(173.179 897.353)"
                                                        >
                                                            <rect width="32" height="25" stroke="none" rx="5"></rect>
                                                            <rect width="29" height="22" x="1.5" y="1.5" rx="3.5"></rect>
                                                        </g>
                                                        <path
                                                            id="Line_1"
                                                            strokeWidth="5"
                                                            d="M30.229 0H0"
                                                            data-name="Line 1"
                                                            transform="translate(174.463 907.239)"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <path
                                                    id="Line_2"
                                                    fill="none"
                                                    stroke="#323433"
                                                    strokeWidth="1"
                                                    d="M0 0h402"
                                                    data-name="Line 2"
                                                    transform="translate(105.5 875.5)"
                                                ></path>
                                                <g id="Group_11" data-name="Group 11">
                                                    <g
                                                        id="Rectangle_14"
                                                        fill="none"
                                                        stroke="#323433"
                                                        strokeWidth="1.5"
                                                        data-name="Rectangle 14"
                                                        transform="translate(118 413)"
                                                    >
                                                        <rect width="378" height="103" stroke="none" rx="24"></rect>
                                                        <rect
                                                            width="376.5"
                                                            height="101.5"
                                                            x="0.75"
                                                            y="0.75"
                                                            rx="23.25"
                                                        ></rect>
                                                    </g>
                                                    <text
                                                        id="Tap_here_to_learn_more"
                                                        fill="#7c7c7c"
                                                        data-name="Tap here to learn more"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="13"
                                                        fontWeight="500"
                                                        letterSpacing=".041em"
                                                        transform="translate(186 480)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            Tap here to learn more
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        id="A_giveaway_is_coming_soon_"
                                                        fill="#fff"
                                                        data-name="A giveaway is coming soon!"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="15"
                                                        fontWeight="500"
                                                        letterSpacing=".041em"
                                                        transform="translate(186 459)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            A giveaway is coming soon!
                                                        </tspan>
                                                    </text>
                                                    <g id="Group_10" fill="#fff" data-name="Group 10">
                                                        <g
                                                            id="Group_9"
                                                            data-name="Group 9"
                                                            transform="translate(-.561 .202)"
                                                        >
                                                            <g
                                                                id="Group_8-2"
                                                                data-name="Group 8"
                                                                transform="translate(-4.343 -23.34)"
                                                            >
                                                                <path
                                                                    id="Path_3-2"
                                                                    d="M8.627 0c-.612 0-2.215.336-2.215 1.225L7.52 0C4.993.743 3.09 3.986 3.09 7.871v.944a12.44 12.44 0 0 1-1.679 6.405l-.256.417c-.291.472-1.311 1.73-1.135 2.307s1.526.369 1.962.369h13.29c.436 0 2.4.209 2.584-.369s-1.466-1.836-1.756-2.308l-.256-.417a12.43 12.43 0 0 1-1.679-6.405v-.943c0-3.885-1.9-7.128-4.43-7.871l1.653 1.225C11.388.336 9.24 0 8.627 0"
                                                                    data-name="Path 3"
                                                                    transform="rotate(-90 317.273 179.48)"
                                                                ></path>
                                                                <path
                                                                    id="Path_4-2"
                                                                    d="m10.779 0 11.789 20.827L0 20.254Z"
                                                                    data-name="Path 4"
                                                                    transform="rotate(28 -870.879 534.145)"
                                                                ></path>
                                                            </g>
                                                            <path
                                                                id="Rectangle_9"
                                                                d="M0 0h6v13H0z"
                                                                data-name="Rectangle 9"
                                                                transform="translate(138 465)"
                                                            ></path>
                                                        </g>
                                                        <path
                                                            id="Rectangle_10"
                                                            d="M0 0a2.827 2.827 0 0 1 2.827 2.827v9.347A2.827 2.827 0 0 1 0 15z"
                                                            data-name="Rectangle 10"
                                                            transform="translate(156 457)"
                                                        ></path>
                                                        <rect
                                                            id="Rectangle_11"
                                                            width="9"
                                                            height="5"
                                                            data-name="Rectangle 11"
                                                            rx="2.5"
                                                            transform="rotate(-45 629.733 34.57)"
                                                        ></rect>
                                                        <rect
                                                            id="Rectangle_12"
                                                            width="9"
                                                            height="5"
                                                            data-name="Rectangle 12"
                                                            rx="2.5"
                                                            transform="rotate(2 -13147.604 4923.457)"
                                                        ></rect>
                                                        <rect
                                                            id="Rectangle_13"
                                                            width="9"
                                                            height="5"
                                                            data-name="Rectangle 13"
                                                            rx="2.5"
                                                            transform="rotate(40.98 -547.335 453.055)"
                                                        ></rect>
                                                    </g>
                                                </g>
                                            </g>
                                            {
                                                isIOS
                                                    ?
                                                    <>
                                                        <rect
                                                            id="Rectangle_15"
                                                            width="152"
                                                            height="8"
                                                            fill="#fff"
                                                            data-name="Rectangle 15"
                                                            rx="4"
                                                            transform="translate(689 962)"
                                                        ></rect>
                                                    </>
                                                    :
                                                    <></>
                                            }
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
                            <label>Bitcoin</label>
                            <input
                                type="text"
                                value={data.bitcoin}
                                name="bitcoin"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.bitcoinAlt}
                                name="bitcoinAlt"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Ethereum</label>
                            <input
                                type="text"
                                value={data.etherium}
                                name="etherium"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.etheriumAlt}
                                name="etheriumAlt"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default View113