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


const View26 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 26";

    const [data, setData] = useState({
        type: "Withdraw",
        quantity: "2,699",
        fees: "1.6",
        chainType: "TRC20",
        status: "Withdrawal Completed",
        transactionHash1: "da71acc30a8e2e2329",
        transactionHash2: "641f5d804ee9669cec",
        transactionHash3: "66ef8deff62bb32a31",
        transactionHash4: "d48eaab067",
        withdrawalAddress1: "TRyiRq659AiY17bXhQ8",
        withdrawalAddress2: "9cT2gRC9GG3pmF9",
        date: "2023-12-20 15:51:12",
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

        // Function to pad numbers with leading zeros
        const padL = (nr, len = 2, chr = '0') => `${nr}`.padStart(len, chr);

        // Construct the date and time string
        const finalRes = `${now.getFullYear()}-${padL(now.getMonth() + 1)}-${padL(now.getDate())} ${padL(now.getHours())}:${padL(now.getMinutes())}:${padL(now.getSeconds())}`;

        // Update the data with the new timestamp
        return setData({
            ...data,
            date: finalRes
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
                                viewBox="0 0 1801 3900"
                            >
                                <style>
                                    {
                                        RobotoBaseEncoded
                                    }
                                </style>
                                <g data-name="Group 416" transform="translate(-2203 -96)">
                                    <path
                                        fill="#100f14"
                                        d="M0 0H1801V3900H0z"
                                        data-name="Rectangle 29"
                                        transform="translate(2203 96)"
                                    ></path>
                                    <g data-name="Group 415" transform="translate(2070)">
                                        <text
                                            fill="#e3e3e3"
                                            data-name="9cT2gRC9GG3pmF9"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="65"
                                            letterSpacing=".01em"
                                            transform="translate(2091 2324)"
                                        >
                                            <tspan x="-300.557" y="0" textAnchor='end'>
                                                {data.withdrawalAddress2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="65"
                                            transform="translate(2129 2239)"
                                        >
                                            <tspan x="-338.108" y="0" textAnchor='end'>
                                                {data.withdrawalAddress1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            data-name="2023-12-20 15:51:12"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="65"
                                            letterSpacing=".037em"
                                            transform="translate(2179 2498)"
                                        >
                                            <tspan x="-318.858" y="0" textAnchor='end'>
                                                {data.date}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#9c9c9c"
                                            data-name="Withdrawal Address"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            letterSpacing=".019em"
                                            transform="translate(503 2239)"
                                        >
                                            <tspan x="-290.214" y="0">
                                                Withdrawal Address
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#9c9c9c"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(282 2496)"
                                        >
                                            <tspan x="-70.737" y="0">
                                                Time
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="65"
                                            transform="translate(1955 1463)"
                                        >
                                            <tspan x="-97.056" y="0" textAnchor='end'>
                                                {data.chainType}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            data-name="Withdrawal Completed"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="65"
                                            letterSpacing=".007em"
                                            transform="translate(2190 1637)"
                                        >
                                            <tspan x="-331.639" y="0" textAnchor='end'>
                                                {data.status}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="65"
                                            letterSpacing=".026em"
                                            transform="translate(2128 1818)"
                                        >
                                            <tspan x="-336.683" y="0" textAnchor='end'>
                                                {data.transactionHash1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            data-name="641f5d804ee9669cec"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="65"
                                            letterSpacing=".025em"
                                            transform="translate(2120 1902)"
                                        >
                                            <tspan x="-329.846" y="0" textAnchor='end'>
                                                {data.transactionHash2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            data-name="66ef8deff62bb32a31"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="65"
                                            letterSpacing=".024em"
                                            transform="translate(2118 1983)"
                                        >
                                            <tspan x="-318.265" y="0" textAnchor='end'>
                                                {data.transactionHash3}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="65"
                                            letterSpacing=".04em"
                                            transform="translate(1983 2066)"
                                        >
                                            <tspan x="-192.085" y="0" textAnchor='end'>
                                                {data.transactionHash4}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            data-name="1.6"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="65"
                                            transform="translate(1904 1289)"
                                        >
                                            <tspan x="-45.052" y="0" textAnchor='end'>
                                                {data.fees}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#9c9c9c"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            letterSpacing=".029em"
                                            transform="translate(283 935)"
                                        >
                                            <tspan x="-69.693" y="0">
                                                Type
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="65"
                                            transform="translate(1995 938)"
                                        >
                                            <tspan x="-136.03" y="0" textAnchor='end'>
                                                {data.type}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e3e3e3"
                                            data-name="2,699"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="65"
                                            transform="translate(1939 1112)"
                                        >
                                            <tspan x="-79.377" y="0" textAnchor='end'>
                                                {data.quantity}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#9c9c9c"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            letterSpacing=".028em"
                                            transform="translate(334 1111)"
                                        >
                                            <tspan x="-122.838" y="0">
                                                Quantity
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#9c9c9c"
                                            data-name="Chain Type"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            letterSpacing=".018em"
                                            transform="translate(371 1463)"
                                        >
                                            <tspan x="-159.25" y="0">
                                                Chain Type
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#9c9c9c"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(278 1288)"
                                        >
                                            <tspan x="-66.707" y="0">
                                                Fees
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#9c9c9c"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(302 1638)"
                                        >
                                            <tspan x="-90.009" y="0">
                                                Status
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#9c9c9c"
                                            data-name="Transaction Hash"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            letterSpacing=".01em"
                                            transform="translate(464 1813)"
                                        >
                                            <tspan x="-251.049" y="0">
                                                Transaction Hash
                                            </tspan>
                                        </text>
                                        <g
                                            fill="#100f14"
                                            stroke="#b1b1b1"
                                            strokeWidth="3"
                                            data-name="Group 124"
                                        >
                                            <g data-name="Rectangle 195" transform="translate(1808 1771)">
                                                <rect width="37" height="36" stroke="none" rx="5"></rect>
                                                <rect
                                                    width="34"
                                                    height="33"
                                                    x="1.5"
                                                    y="1.5"
                                                    fill="none"
                                                    rx="3.5"
                                                ></rect>
                                            </g>
                                            <g data-name="Rectangle 194" transform="translate(1821 1758)">
                                                <rect width="37" height="36" stroke="none" rx="5"></rect>
                                                <rect
                                                    width="34"
                                                    height="33"
                                                    x="1.5"
                                                    y="1.5"
                                                    fill="none"
                                                    rx="3.5"
                                                ></rect>
                                            </g>
                                        </g>
                                        <g
                                            fill="#100f14"
                                            stroke="#b1b1b1"
                                            strokeWidth="3"
                                            data-name="Group 125"
                                            transform="translate(-1 425)"
                                        >
                                            <g data-name="Rectangle 195" transform="translate(1808 1771)">
                                                <rect width="37" height="36" stroke="none" rx="5"></rect>
                                                <rect
                                                    width="34"
                                                    height="33"
                                                    x="1.5"
                                                    y="1.5"
                                                    fill="none"
                                                    rx="3.5"
                                                ></rect>
                                            </g>
                                            <g data-name="Rectangle 194" transform="translate(1821 1758)">
                                                <rect width="37" height="36" stroke="none" rx="5"></rect>
                                                <rect
                                                    width="34"
                                                    height="33"
                                                    x="1.5"
                                                    y="1.5"
                                                    fill="none"
                                                    rx="3.5"
                                                ></rect>
                                            </g>
                                        </g>
                                    </g>
                                    <g data-name="Group 414" transform="translate(2063)">
                                        <text
                                            fill="#e6e6e6"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="124"
                                            fontWeight="500"
                                            letterSpacing=".052em"
                                            transform="translate(377 679)"
                                        >
                                            <tspan x="-163.068" y="0">
                                                USDT
                                            </tspan>
                                        </text>
                                        <path
                                            fill="#707070"
                                            d="M33.446 92.809a5.953 5.953 0 000 7.721L57.7 127.8a4.489 4.489 0 006.868 0c1.9-2.13-.1-5.59-2-7.721L41.74 96.661l20.815-23.417c1.9-2.13 3.9-5.59 2-7.721a4.489 4.489 0 00-6.868 0L33.431 92.792z"
                                            data-name="Path 273"
                                            transform="translate(215.975 358.177)"
                                        ></path>
                                    </g>
                                    {
                                        isIOS
                                            ?
                                            <>
                                                <rect
                                                    width="640"
                                                    height="23"
                                                    fill="#fff"
                                                    data-name="Rectangle 476"
                                                    rx="11.5"
                                                    transform="translate(2784 3940)"
                                                ></rect>
                                            </>
                                            :
                                            <></>
                                    }
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
                                <label>Type</label>
                                <input
                                    type="text"
                                    value={data.type}
                                    name="type"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Quantity</label>
                                <input
                                    type="text"
                                    value={data.quantity}
                                    name="quantity"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Fees</label>
                                <input
                                    type="text"
                                    value={data.fees}
                                    name="fees"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Chain Type</label>
                                <input
                                    type="text"
                                    value={data.chainType}
                                    name="chainType"
                                    onChange={(e) => onChangeHandler(e)}
                                />
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
                                <label>Transaction Hash</label>
                                <input
                                    type="text"
                                    value={data.transactionHash1}
                                    name="transactionHash1"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.transactionHash2}
                                    name="transactionHash2"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.transactionHash3}
                                    name="transactionHash3"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.transactionHash4}
                                    name="transactionHash4"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Withdrawal Address</label>
                                <input
                                    type="text"
                                    value={data.withdrawalAddress1}
                                    name="withdrawalAddress1"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.withdrawalAddress2}
                                    name="withdrawalAddress2"
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
                        </div>
                    </div>
            </div >
        </>
    )
}

export default View26