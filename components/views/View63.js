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

const View63 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 63";

    const [data, setData] = useState({
        amount: "195.2600000",
        amountType: "USDT",
        address1: "TTfA7G2Poyf9RUjruqWGUz6",
        address2: "NtrrQLiGaPy",
        transactionID: "1185119874964398080",
        date: "2024-06-13 13:09:50",
        fee: "-1.00000000 USDT"
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
                                viewBox="0 0 1656 3679"
                            >
                                <style>
                                    {
                                      RobotoBaseEncoded
                                    }
                                </style>
                                <g data-name="Group 344" transform="translate(-2046 -136)">
                                    <path
                                        fill="#fff"
                                        d="M0 0H1656V3679H0z"
                                        data-name="Rectangle 431"
                                        transform="translate(2046 136)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#131315"
                                        strokeWidth="7"
                                        d="M2181.112 352.807l-38.382 38.382 38.382 38.383"
                                        data-name="Path 175"
                                    ></path>
                                    <text
                                        fill="#101010"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="63"
                                        fontWeight="500"
                                        transform="translate(2808 665)"
                                    >
                                        <tspan x="0" y="0">
                                            Quantity
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#4d4d4d"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="56"
                                        transform="translate(2291 1080)"
                                    >
                                        <tspan x="0" y="0">
                                            Submitted
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#4d4d4d"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="56"
                                        transform="translate(2291 1254)"
                                    >
                                        <tspan x="0" y="0">
                                            Approved
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#03adc4"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="56"
                                        transform="translate(2291 1423)"
                                    >
                                        <tspan x="0" y="0">
                                            Processing
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#c8c8c8"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="56"
                                        transform="translate(2291 1597)"
                                    >
                                        <tspan x="0" y="0">
                                            Successful
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#909092"
                                        data-name="Withdrawal type"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(2149 1981)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal type
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#373737"
                                        data-name="Normal withdrawal"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="62"
                                        fontWeight="600"
                                        transform="translate(3093 1974)"
                                    >
                                        <tspan x="0" y="0">
                                            Normal withdrawal
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#373737"
                                        data-name="TRX(TRC20)"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="62"
                                        fontWeight="600"
                                        transform="translate(3270 2148)"
                                    >
                                        <tspan x="0" y="0">
                                            TRX(TRC20)
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#373737"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="62"
                                        fontWeight="600"
                                        transform="translate(2726 2322)"
                                    >
                                        <tspan x="800" y="0" textAnchor="end">
                                            {data.address1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#373737"
                                        data-name="2024-06-13 13:09:50"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="62"
                                        fontWeight="600"
                                        transform="translate(3045 2818)"
                                    >
                                        <tspan x="562" y="0" textAnchor="end">
                                            {data.date}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#373737"
                                        data-name="-1.00000000 USDT"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="62"
                                        fontWeight="600"
                                        transform="translate(3096 2990)"
                                    >
                                        <tspan x="515" y="0" textAnchor="end">
                                            {data.fee}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#373737"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="62"
                                        fontWeight="600"
                                        transform="translate(3179 2397)"
                                    >
                                        <tspan x="345" y="0" textAnchor="end">
                                            {data.address2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#373737"
                                        data-name="1185119874964398000"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="62"
                                        fontWeight="600"
                                        textDecoration="underline"
                                        transform="translate(2860 2647)"
                                    >
                                        <tspan x="660" y="0" textAnchor="end">
                                            {data.transactionID}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#06b0bf"
                                        data-name="Save address"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="62"
                                        fontWeight="600"
                                        transform="translate(3152 2479)"
                                    >
                                        <tspan x="0" y="0">
                                            Save address
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#909092"
                                        data-name="Withdrawal network"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(2149 2155)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal network
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#909092"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(2149 2329)"
                                    >
                                        <tspan x="0" y="0">
                                            Address
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#909092"
                                        data-name="Transaction ID"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(2144 2647)"
                                    >
                                        <tspan x="0" y="0">
                                            Transaction ID
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#909092"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(2146 2822)"
                                    >
                                        <tspan x="0" y="0">
                                            Time
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#909092"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(2149 2990)"
                                    >
                                        <tspan x="0" y="0">
                                            Fee
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#c8c8c8"
                                        data-name="Extimated arrival time: 5 min(s)"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="56"
                                        transform="translate(2291 1679)"
                                    >
                                        <tspan x="0" y="0">
                                            Extimated arrival time: 5 min(s)
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#101010"
                                        data-name="195.26000000 USDT"
                                        fontFamily="Roboto-Black, Roboto"
                                        fontSize="101"
                                        fontWeight="800"
                                        transform="translate(2397 834)"
                                    >
                                        <tspan x="500" y="0" textAnchor="middle">
                                            {data.amount} <tspan className="usdtType77">{data.amountType}</tspan>
                                        </tspan>
                                    </text>
                                    <circle
                                        cx="35"
                                        cy="35"
                                        r="35"
                                        fill="#26a17b"
                                        data-name="Ellipse 122"
                                        transform="translate(2704 608)"
                                    ></circle>
                                    <path
                                        fill="#fff"
                                        fillRule="evenodd"
                                        d="M31.723 28.74c-.241.017-1.481.092-4.248.092-2.209 0-3.765-.066-4.312-.092v.007c-8.505-.379-14.853-1.86-14.853-3.631s6.348-3.251 14.853-3.631v5.784c.556.039 2.148.133 4.349.133 2.64 0 3.964-.109 4.211-.131v-5.782c8.488.378 14.82 1.859 14.82 3.627s-6.333 3.248-14.82 3.625m0-7.853v-5.176h11.843V7.819H11.32v7.893h11.843v5.173C13.538 21.327 6.3 23.234 6.3 25.518s7.238 4.189 16.863 4.633v16.586h8.56v-16.59c9.61-.442 16.831-2.347 16.831-4.629s-7.221-4.187-16.831-4.631"
                                        data-name="Path 179"
                                        transform="translate(2711.48 617.285)"
                                    ></path>
                                    <circle
                                        cx="41"
                                        cy="41"
                                        r="41"
                                        fill="#06b0bf"
                                        data-name="Ellipse 123"
                                        transform="translate(2162 1016)"
                                    ></circle>
                                    <circle
                                        cx="41"
                                        cy="41"
                                        r="41"
                                        fill="#06b0bf"
                                        data-name="Ellipse 124"
                                        transform="translate(2162 1186)"
                                    ></circle>
                                    <g
                                        fill="none"
                                        stroke="#06b0bf"
                                        strokeWidth="4"
                                        data-name="Ellipse 125"
                                        transform="translate(2162 1356)"
                                    >
                                        <circle cx="41" cy="41" r="41" stroke="none"></circle>
                                        <circle cx="41" cy="41" r="39"></circle>
                                    </g>
                                    <g
                                        fill="none"
                                        stroke="#c2c2c2"
                                        strokeWidth="4"
                                        data-name="Ellipse 126"
                                        transform="translate(2162 1529)"
                                    >
                                        <circle cx="41" cy="41" r="41" stroke="none"></circle>
                                        <circle cx="41" cy="41" r="39"></circle>
                                    </g>
                                    <path
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="5"
                                        d="M2182.496 1052.119l15.082 17.6 26.215-26.215"
                                        data-name="Path 180"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="5"
                                        d="M2182.496 1222.119l15.082 17.6 26.215-26.215"
                                        data-name="Path 181"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#0daacb"
                                        strokeWidth="5"
                                        d="M0 0L0 73"
                                        data-name="Line 34"
                                        transform="translate(2210.5 1104.5)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#0daacb"
                                        strokeWidth="5"
                                        d="M0 0L0 73"
                                        data-name="Line 35"
                                        transform="translate(2210.5 1275.5)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#bebebe"
                                        strokeWidth="5"
                                        d="M0 0L0 73"
                                        data-name="Line 36"
                                        transform="translate(2210.5 1448.5)"
                                    ></path>
                                    <g
                                        fill="#fff"
                                        stroke="#ababab"
                                        strokeWidth="5"
                                        data-name="Rectangle 433"
                                        transform="translate(3555 2267)"
                                    >
                                        <rect width="44" height="44" stroke="none" rx="6"></rect>
                                        <rect
                                            width="39"
                                            height="39"
                                            x="2.5"
                                            y="2.5"
                                            fill="none"
                                            rx="3.5"
                                        ></rect>
                                    </g>
                                    <g
                                        fill="#fff"
                                        stroke="#ababab"
                                        strokeWidth="5"
                                        data-name="Rectangle 435"
                                        transform="translate(3555 2592)"
                                    >
                                        <rect width="44" height="44" stroke="none" rx="6"></rect>
                                        <rect
                                            width="39"
                                            height="39"
                                            x="2.5"
                                            y="2.5"
                                            fill="none"
                                            rx="3.5"
                                        ></rect>
                                    </g>
                                    <g
                                        fill="#fff"
                                        stroke="#ababab"
                                        strokeWidth="5"
                                        data-name="Rectangle 432"
                                        transform="translate(3572 2283)"
                                    >
                                        <rect width="44" height="44" stroke="none" rx="6"></rect>
                                        <rect
                                            width="39"
                                            height="39"
                                            x="2.5"
                                            y="2.5"
                                            fill="none"
                                            rx="3.5"
                                        ></rect>
                                    </g>
                                    <g
                                        fill="#fff"
                                        stroke="#ababab"
                                        strokeWidth="5"
                                        data-name="Rectangle 434"
                                        transform="translate(3572 2608)"
                                    >
                                        <rect width="44" height="44" stroke="none" rx="6"></rect>
                                        <rect
                                            width="39"
                                            height="39"
                                            x="2.5"
                                            y="2.5"
                                            fill="none"
                                            rx="3.5"
                                        ></rect>
                                    </g>
                                    {
                                        isIOS
                                            ?
                                            <>  <rect
                                            width="611"
                                            height="18"
                                            fill="#7a7a7a"
                                            data-name="Rectangle 436"
                                            rx="9"
                                            transform="translate(2595 3770)"
                                        ></rect>
                                            </>
                                            :
                                            <></>
                                    }
                                  
                                    <text
                                        fill="#373737"
                                        data-name="13:10"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="62"
                                        fontWeight="700"
                                        transform="translate(2181 248)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.time}
                                        </tspan>
                                    </text>
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
                            <input
                                type="text"
                                value={data.amountType}
                                name="amountType"
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
                            <label>Transaction ID</label>
                            <input
                                type="text"
                                value={data.transactionID}
                                name="transactionID"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Time</label>
                            <input
                                type="text"
                                value={data.date}
                                name="date"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <button className="dateTimeBtn" onClick={() => manageTimeDate()}>Current Date and Time</button>
                        </div>
                        <div className="global_form_inner">
                            <label>Fee</label>
                            <input
                                type="text"
                                value={data.fee}
                                name="fee"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
              
            </div>

        </>
    )
}

export default View63