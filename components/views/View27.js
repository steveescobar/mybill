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

const View27 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 27";

    const [data, setData] = useState({

        amount: "712 USDT",
        confirmations: "21 / 1",
        withdrawal_wallet: "Spot Wallet",
        network: "TRX",
        address: "TSg88Hr9RmY8V5mCMmwJkMF",
        address1: "NB6vuQm1PNR",
        txid: "8803c2153caf39c13f583de",
        txid1: "b753c85d5ff5b885dbad395",
        txid2: "eb2b916891c6156255",
        network_fee: "1 USDT",
        date: "2023-8-26 15:30:35"

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
        const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
        const finalRes = (`${now.getFullYear()}-${padL(now.getMonth() + 1)}-${padL(now.getDate())} ${padL(now.getHours())}:${padL(now.getMinutes())}:${padL(now.getSeconds())}`
        );
        return setData({
            ...data,
            date: finalRes
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
                                viewBox="0 0 1810 3926"
                            >
                                <style>
                                    {
                                        RobotoBaseEncoded
                                    }
                                </style>
                                <g data-name="Group 364" transform="translate(-2112 -66)">
                                    <path
                                        fill="#222430"
                                        d="M0 0H1810V3926H0z"
                                        data-name="Rectangle 196"
                                        transform="translate(2112 66)"
                                    ></path>
                                    <path
                                        fill="#858994"
                                        d="M40.5 63.142L10.8 34.687l30.534-29.7L35.727 0 0 34.687l11.71 11.03 24.017 22.62z"
                                        data-name="Path 15"
                                        transform="translate(2173.783 345.129)"
                                    ></path>
                                    <path
                                        fill="#858994"
                                        d="M0 0H69.565V7.609H0z"
                                        data-name="Rectangle 72"
                                        transform="translate(2182.326 376.321)"
                                    ></path>
                                    <text
                                        fill="#fff"
                                        data-name="Withdrawal Details"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="83"
                                        transform="translate(2680 415)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal Details
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#8d919d"
                                        d="M0 0H74V15H0z"
                                        data-name="Rectangle 199"
                                        transform="translate(3755 340)"
                                    ></path>
                                    <path
                                        fill="#8d919d"
                                        d="M0 0H15V15H0z"
                                        data-name="Rectangle 200"
                                        transform="rotate(90 1708.75 2061.25)"
                                    ></path>
                                    <path
                                        fill="#8d919d"
                                        d="M0 0H15V15H0z"
                                        data-name="Rectangle 201"
                                        transform="rotate(90 1738.25 2090.75)"
                                    ></path>
                                    <path
                                        fill="#8d919d"
                                        d="M0 0H74V15H0z"
                                        data-name="Rectangle 199"
                                        transform="rotate(180 1914.5 212.75)"
                                    ></path>
                                    <path
                                        fill="#8d919d"
                                        d="M0 0H15V15H0z"
                                        data-name="Rectangle 200"
                                        transform="matrix(0 -1 1 0 3814 413)"
                                    ></path>
                                    <path
                                        fill="#8d919d"
                                        d="M0 0H15V15H0z"
                                        data-name="Rectangle 201"
                                        transform="rotate(-90 2084 -1671)"
                                    ></path>
                                    <path
                                        fill="#8d919d"
                                        d="M11469-28.25h12.25v20.5h13.25l-19.5 20.5-19.5-20.5h13.5z"
                                        data-name="Path 52"
                                        transform="translate(-7682 392)"
                                    ></path>
                                    <text
                                        fill="#c4c4c4"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(2908 737)"
                                    >
                                        <tspan x="0" y="0">
                                            Amount
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="712 USDT"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="118"
                                        fontWeight="500"
                                        transform="translate(3040 913)"
                                    >
                                        <tspan x="0" y="0" textAnchor='middle'>
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#39bc88"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="78"
                                        transform="translate(2907 1090)"
                                    >
                                        <tspan x="0" y="0">
                                            Completed
                                        </tspan>
                                    </text>
                                    <ellipse
                                        cx="41"
                                        cy="40.5"
                                        fill="#39bc88"
                                        data-name="Ellipse 31"
                                        rx="41"
                                        ry="40.5"
                                        transform="translate(2792 1020)"
                                    ></ellipse>
                                    <path
                                        fill="#222631"
                                        d="M10651.25-12504.728l5.868-5.866 12.588 12.589 4.619-4.619 20.49-20.489 6.4 6.4-31.165 31.164z"
                                        data-name="Path 53"
                                        transform="translate(-7843.316 13564.419)"
                                    ></path>
                                    <text
                                        fill="#757b8b"
                                        data-name="Crypto transferred out of Binance. Please contact the recipient"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        transform="translate(2220 1319)"
                                    >
                                        <tspan x="0" y="0">
                                            Crypto transferred out of Binance. Please contact the recipient
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#757b8b"
                                        data-name="platform for your transaction receipt"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        transform="translate(2551 1389)"
                                    >
                                        <tspan x="0" y="0">
                                            platform for your transaction receipt
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#f5d659"
                                        data-name="Why hasn't my withdrawal arrived?"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        textDecoration="underline"
                                        transform="translate(2605 1501)"
                                    >
                                        <tspan x="0" y="0">
                                            Why hasn&apos;t my withdrawal arrived?
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#f5d659"
                                        data-name="Need help? View FAQs"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        textDecoration="underline"
                                        transform="translate(2781.035 3332)"
                                    >
                                        <tspan x="0" y="0">
                                            Need help? View FAQs
                                        </tspan>
                                    </text>
                                    <rect
                                        width="1654"
                                        height="234"
                                        fill="#f5d659"
                                        data-name="Rectangle 202"
                                        rx="19"
                                        transform="translate(2190 3531)"
                                    ></rect>
                                    <text
                                        data-name="Save Address"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="78"
                                        fontWeight="500"
                                        transform="translate(2779 3675)"
                                    >
                                        <tspan x="0" y="0">
                                            Save Address
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#2c303c"
                                        d="M0 0H1810V1568H0z"
                                        data-name="Rectangle 203"
                                        transform="translate(2112 1582)"
                                    ></path>
                                    <path
                                        fill="#7f7f8b"
                                        d="M0 0H58.758V80.454H0z"
                                        data-name="Rectangle 182"
                                        transform="translate(2699.717 3268.904)"
                                    ></path>
                                    <path
                                        fill="#7f7f8b"
                                        d="M0 0H13.56V11.752H0z"
                                        data-name="Rectangle 183"
                                        transform="translate(2687.965 3283.367)"
                                    ></path>
                                    <path
                                        fill="#7f7f8b"
                                        d="M0 0H13.56V11.752H0z"
                                        data-name="Rectangle 184"
                                        transform="translate(2687.965 3303.255)"
                                    ></path>
                                    <path
                                        fill="#7f7f8b"
                                        d="M0 0H13.56V11.752H0z"
                                        data-name="Rectangle 185"
                                        transform="translate(2687.965 3323.142)"
                                    ></path>
                                    <text
                                        fill="#222430"
                                        data-name="?"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="67"
                                        fontWeight="700"
                                        transform="translate(2712.372 3332)"
                                    >
                                        <tspan x="0" y="0">
                                            ?
                                        </tspan>
                                    </text>
                                    {
                                        isIOS
                                            ?
                                            <>
                                                <rect
                                                    width="645"
                                                    height="24"
                                                    fill="#fff"
                                                    data-name="Rectangle 204"
                                                    rx="12"
                                                    transform="translate(2695 3929)"
                                                ></rect>
                                            </>
                                            :
                                            <></>
                                    }
                                    <text
                                        fill="#858891"
                                        data-name="Withdrawal Wallet"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(2174 1926)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal Wallet
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858891"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(2174 1755)"
                                    >
                                        <tspan x="0" y="0">
                                            Confirmations
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="21 / 1"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(3870 1759)"
                                    >
                                        <tspan x="0" y="0" textAnchor='end'>
                                            {data.confirmations}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="Spot Wallet"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(3869 1926)"
                                    >
                                        <tspan x="0" y="0" textAnchor='end'>
                                            {data.withdrawal_wallet}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(3869 2093)"
                                    >
                                        <tspan x="0" y="0" textAnchor='end'>
                                            {data.network}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(3733 2264)"
                                    >
                                        <tspan x="0" y="0" textAnchor='end'>
                                            {data.address}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(3730 2346)"
                                    >
                                        <tspan x="0" y="0" textAnchor='end'>
                                            {data.address1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="8803c2153caf39c13f583de"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        textDecoration="underline"
                                        transform="translate(3736 2514)"
                                    >
                                        <tspan x="0" y="0" textAnchor='end'>
                                            {data.txid}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        textDecoration="underline"
                                        transform="translate(3738 2600)"
                                    >
                                        <tspan x="0" y="0" textAnchor='end'>
                                            {data.txid1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        textDecoration="underline"
                                        transform="translate(3737 2686)"
                                    >
                                        <tspan x="0" y="0" textAnchor='end'>
                                            {data.txid2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="1 USDT"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(3860 2854)"
                                    >
                                        <tspan x="0" y="0" textAnchor='end'>
                                            {data.network_fee}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="2023-12-25 19:51:20"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(3860 3022)"
                                    >
                                        <tspan x="0" y="0" textAnchor='end'>
                                            {data.date}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858891"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(2174 2097)"
                                    >
                                        <tspan x="0" y="0">
                                            Netwrok
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858891"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(2174 2304)"
                                    >
                                        <tspan x="0" y="0">
                                            Address
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858891"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(2174 2603)"
                                    >
                                        <tspan x="0" y="0">
                                            Txid
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858891"
                                        data-name="Netwrok fee"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(2174 2857)"
                                    >
                                        <tspan x="0" y="0">
                                            Netwrok fee
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858891"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(2174 3028)"
                                    >
                                        <tspan x="0" y="0">
                                            Date
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#525866"
                                        d="M0 0H53.237V70.54H0z"
                                        data-name="Rectangle 193"
                                        transform="translate(3779.144 2252.96)"
                                    ></path>
                                    <path
                                        fill="#525866"
                                        d="M11989-7161.5h53.237v62.555h-15.306v-47.248H11989z"
                                        data-name="Path 50"
                                        transform="translate(-8183.237 9392.5)"
                                    ></path>
                                    <path
                                        fill="#525866"
                                        d="M0 0H53.237V70.54H0z"
                                        data-name="Rectangle 193"
                                        transform="translate(3779.144 2552.46)"
                                    ></path>
                                    <path
                                        fill="#525866"
                                        d="M11989-7161.5h53.237v62.555h-15.306v-47.248H11989z"
                                        data-name="Path 50"
                                        transform="translate(-8183.237 9692)"
                                    ></path>
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
                                <label>Confirmations</label>
                                <input
                                    type="text"
                                    value={data.confirmations}
                                    name="confirmations"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Withdrawal Wallet</label>
                                <input
                                    type="text"
                                    value={data.withdrawal_wallet}
                                    name="withdrawal_wallet"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Netwrok</label>
                                <input
                                    type="text"
                                    value={data.network}
                                    name="network"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Address</label>
                                <input
                                    type="text"
                                    value={data.address}
                                    name="address"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.address1}
                                    name="address1"
                                    onChange={(e) => onChangeHandler(e)}
                                />

                            </div>
                            <div className="global_form_inner">
                                <label>Txid</label>
                                <input
                                    type="text"
                                    value={data.txid}
                                    name="txid"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.txid1}
                                    name="txid1"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.txid2}
                                    name="txid2"
                                    onChange={(e) => onChangeHandler(e)}
                                />

                            </div>
                            <div className="global_form_inner">
                                <label>Netwrok Fee</label>
                                <input
                                    type="text"
                                    value={data.network_fee}
                                    name="network_fee"
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
            </div>

        </>
    )
}

export default View27