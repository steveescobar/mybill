
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

const View75 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 75";

    const [data, setData] = useState({
        amount: "-28 USDT",
        network: "TRX",
        address1: "TUqWghPracby1vAc1CsuUdoDhD",
        address2: "ayUw7RzY",
        txid1: "ecf9cb887dbba358269f0be76b0a",
        txid2: "f9aeda42ee1d2267dd1ab0177398",
        txid3: "b4bf77b",
        withdrawalAmount: "38 USDT",
        networkFee: "1 USDT",
        withdrawalWallet: "Spot Wallet",
        time: "2023-12-25 19:18:22",
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
                                viewBox="0 0 1855 3883"
                            >
                                <style>
                                    {
                                        RobotoBaseEncoded
                                    }
                                </style>
                                <g data-name="Group 16" transform="translate(-4661 -1005)">
                                    <path
                                        fill="#222631"
                                        d="M0 0H1855V3883H0z"
                                        data-name="Rectangle 1"
                                        transform="translate(4661 1005)"
                                    ></path>
                                    <g data-name="Group 15">
                                        <text
                                            fill="#eaeef1"
                                            data-name="-37 USDT"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="119"
                                            fontWeight="700"
                                            letterSpacing=".008em"
                                            transform="translate(5580 1623)"
                                        >
                                            <tspan x="0" y="0" textAnchor="middle">
                                                {data.amount}
                                            </tspan>
                                        </text>
                                        <g data-name="Group 5" transform="translate(2796 -145)">
                                            <text
                                                fill="#39bc88"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="64"
                                                transform="translate(2686 1924)"
                                            >
                                                <tspan x="0" y="0">
                                                    Completed
                                                </tspan>
                                            </text>
                                            <circle
                                                cx="34"
                                                cy="34"
                                                r="34"
                                                fill="#39bc88"
                                                data-name="Ellipse 30"
                                                transform="translate(2589 1866)"
                                            ></circle>
                                            <path
                                                fill="#222631"
                                                d="M10651.3-12507.7l4.921-4.92 10.556 10.555 3.874-3.872 17.182-17.183 5.368 5.369-26.133 26.133z"
                                                data-name="Path 49"
                                                transform="translate(-8048.899 14407.335)"
                                            ></path>
                                        </g>
                                        <g
                                            data-name="Group 10"
                                            fontFamily="Roboto-Regular, Roboto"
                                            transform="translate(-2019)"
                                        >
                                            <text
                                                fill="#757b8b"
                                                data-name="Crypto transferred out of Binance. Please contact the recipient platform"
                                                fontSize="53"
                                                letterSpacing=".013em"
                                                transform="translate(6745 1896)"
                                            >
                                                <tspan x="0" y="0">
                                                    Crypto transferred out of Binance. Please contact the recipient
                                                    platform
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#757b8b"
                                                data-name="for your transaction receipt."
                                                fontSize="53"
                                                letterSpacing=".013em"
                                                transform="translate(7274 1965)"
                                            >
                                                <tspan x="0" y="0">
                                                    for your transaction receipt.
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#cba930"
                                                data-name="Why hasn't my withdrawal arrived?"
                                                fontSize="56"
                                                letterSpacing=".006em"
                                                transform="translate(7177 2048)"
                                            >
                                                <tspan x="0" y="0">
                                                    Why hasn&apos;t my withdrawal arrived?
                                                </tspan>
                                            </text>
                                        </g>
                                        <path
                                            fill="#313541"
                                            d="M0 0H1855V7H0z"
                                            data-name="Rectangle 187"
                                            transform="translate(4661 2174)"
                                        ></path>
                                        <g data-name="Group 11" transform="translate(3010 -359)">
                                            <text
                                                fill="#757b8b"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="57"
                                                transform="translate(1753 2697)"
                                            >
                                                <tspan x="0" y="0">
                                                    Network
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#757b8b"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="57"
                                                transform="translate(1753 2846)"
                                            >
                                                <tspan x="0" y="0">
                                                    Address
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#757b8b"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="57"
                                                transform="translate(1753 3071)"
                                            >
                                                <tspan x="0" y="0">
                                                    Txid
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#757b8b"
                                                data-name="Withdrawal Amount"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="57"
                                                transform="translate(1751 3387)"
                                            >
                                                <tspan x="0" y="0">
                                                    Withdrawal Amount
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#757b8b"
                                                data-name="Network fee"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="57"
                                                transform="translate(1751 3552)"
                                            >
                                                <tspan x="0" y="0">
                                                    Network fee
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#757b8b"
                                                data-name="Withdrawal Wallet"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="57"
                                                transform="translate(1751 3716)"
                                            >
                                                <tspan x="0" y="0">
                                                    Withdrawal Wallet
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#757b8b"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="57"
                                                transform="translate(1754 3881)"
                                            >
                                                <tspan x="0" y="0">
                                                    Date
                                                </tspan>
                                            </text>
                                            {/* <g data-name="Group 121" transform="translate(3265.789 2636)">
                                                <rect
                                                className="green"
                                                    width="140"
                                                    height="84"
                                                    fill="#3b371e"
                                                    data-name="Rectangle 192"
                                                    rx="15"
                                                    transform="translate(.211)"
                                                ></rect>
                                                <text
                                                    fill="#e1b027"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="51"
                                                    transform="translate(70 59)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="middle">
                                                        {data.network}
                                                    </tspan>
                                                </text>
                                            </g> */}

                                            <text
                                                fill="#fefefe"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="56"
                                                textDecoration="underline"
                                                transform="translate(3315 3071)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.txid1}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#fefefe"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="56"
                                                textDecoration="underline"
                                                transform="translate(3315 3149)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.txid2}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#fefefe"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="56"
                                                textDecoration="underline"
                                                transform="translate(3315 3228)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.txid3}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#fefefe"
                                                data-name="38 USDT"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="56"
                                                transform="translate(3400 3387)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.withdrawalAmount}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#fefefe"
                                                data-name="1 USDT"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="56"
                                                transform="translate(3400 3552)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.networkFee}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#fefefe"
                                                data-name="Spot Wallet"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="56"
                                                transform="translate(3400 3716)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.withdrawalWallet}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#fefefe"
                                                data-name="2023-11-07 19:25:29"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="56"
                                                transform="translate(3400 3880)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.time}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#fefefe"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="56"
                                                transform="translate(3315 2922)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.address2}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#fefefe"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="56"
                                                transform="translate(3315 2848)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.address1}
                                                </tspan>
                                            </text>
                                            <g
                                                fill="#525866"
                                                data-name="Group 122"
                                                transform="translate(3347.319 2794.906)"
                                            >
                                                <path
                                                    d="M0 0H30V40H0z"
                                                    data-name="Rectangle 193"
                                                    transform="translate(-.318 12.094)"
                                                ></path>
                                                <path
                                                    d="M11989-7161.5h30.2v35.48h-8.682v-26.8H11989z"
                                                    data-name="Path 50"
                                                    transform="translate(-11974.363 7161.5)"
                                                ></path>
                                            </g>
                                            <g
                                                fill="#525866"
                                                data-name="Group 123"
                                                transform="translate(3347.319 3020.622)"
                                            >
                                                <path
                                                    d="M0 0H30V40H0z"
                                                    data-name="Rectangle 193"
                                                    transform="translate(-.318 12.378)"
                                                ></path>
                                                <path
                                                    d="M11989-7161.5h30.2v35.48h-8.682v-26.8H11989z"
                                                    data-name="Path 50"
                                                    transform="translate(-11974.363 7161.5)"
                                                ></path>
                                            </g>
                                        </g>
                                        <g data-name="Group 9" transform="translate(-2018.677)">
                                            <text
                                                fill="#fff"
                                                data-name="Withdrawal Details"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="95"
                                                fontWeight="500"
                                                letterSpacing=".007em"
                                                transform="translate(7211 1327)"
                                            >
                                                <tspan x="0" y="0">
                                                    Withdrawal Details
                                                </tspan>
                                            </text>
                                            <g data-name="Group 117" transform="translate(8372.693 1265.979)">
                                                <path
                                                    fill="#fff"
                                                    d="M0 0H47.697V65.308H0z"
                                                    data-name="Rectangle 182"
                                                    transform="translate(9.539 .734)"
                                                ></path>
                                                <path
                                                    fill="#fff"
                                                    d="M0 0H11.007V9.539H0z"
                                                    data-name="Rectangle 183"
                                                    transform="translate(0 12.475)"
                                                ></path>
                                                <path
                                                    fill="#fff"
                                                    d="M0 0H11.007V9.539H0z"
                                                    data-name="Rectangle 184"
                                                    transform="translate(0 28.618)"
                                                ></path>
                                                <path
                                                    fill="#fff"
                                                    d="M0 0H11.007V9.539H0z"
                                                    data-name="Rectangle 185"
                                                    transform="translate(0 44.762)"
                                                ></path>
                                                <text
                                                    data-name="?"
                                                    fontFamily="Roboto-Bold, Roboto"
                                                    fontSize="55"
                                                    fontWeight="700"
                                                    transform="translate(19.813 52)"
                                                >
                                                    <tspan x="0" y="0">
                                                        ?
                                                    </tspan>
                                                </text>
                                            </g>
                                            <g
                                                fill="#e1e6ec"
                                                data-name="Group 8"
                                                transform="translate(1796 80)"
                                            >
                                                <path
                                                    d="M0 0H56V8H0z"
                                                    data-name="Rectangle 2"
                                                    transform="translate(4998.307 1214)"
                                                ></path>
                                                <path
                                                    d="M0 0H33V8H0z"
                                                    data-name="Rectangle 3"
                                                    transform="rotate(47 1102.596 6351.519)"
                                                ></path>
                                                <path
                                                    d="M0 0H38V8H0z"
                                                    data-name="Rectangle 4"
                                                    transform="rotate(-47 3895.009 -5127.21)"
                                                ></path>
                                            </g>
                                        </g>

                                        {
                                            isIOS
                                                ?
                                                <>  <rect
                                                    width="637"
                                                    height="19"
                                                    fill="#fff"
                                                    data-name="Rectangle 5"
                                                    rx="9.5"
                                                    transform="translate(5270 4834)"
                                                ></rect>
                                                </>
                                                :
                                                <></>
                                        }

                                    </g>
                                </g>


                            </svg>
                            <foreignObject
                                width="100%"
                                height="100%">
                                <div className="yellow">
                                    <p>{data.network}</p>
                                </div>
                            </foreignObject>
                            <IOSOption
                                battery={battery}
                                isOption={isOption}
                                time={time}
                                network={network}
                                net={net}
                                isBattery={isBattery}
                                iconPadding={`2rem 5rem 0rem 7rem`}
                                isDarkBg={false}
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
                            <label>Network</label>
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
                        <div className="global_form_inner">
                            <label>Txid</label>
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
                            <input
                                type="text"
                                value={data.txid3}
                                name="txid3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Withdrawal Amount</label>
                            <input
                                type="text"
                                value={data.withdrawalAmount}
                                name="withdrawalAmount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Network fee</label>
                            <input
                                type="text"
                                value={data.networkFee}
                                name="networkFee"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Withdrawal Wallet</label>
                            <input
                                type="text"
                                value={data.withdrawalWallet}
                                name="withdrawalWallet"
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

export default View75