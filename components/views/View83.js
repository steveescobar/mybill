
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

const View83 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 83";

    const [data, setData] = useState({
        amount: "$167.62",
        time: "Sep 14 at 07:29 AM",
        bitcoin_amount: "0.00291BTC",
        sale_amount: "$167.62",
        fee: "$3.35",
        total:"$164.27",
        exchange_rate:'$57,601.41'
        
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

        // Get the current date and time
        const now = new Date();

        // Define the options for formatting
        const options = {
            month: 'short',   // "Aug"
            day: '2-digit',   // "03"
            // hour: 'numeric',  // "10"
            // minute: 'numeric',// "39"
            hour12: true      // "p.m."
        };

        // Format the date part
        const datePart = now.toLocaleDateString('en-US', options);

        // Format the time part
        const timePart = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        // Combine the date and time parts
        const formattedDateTime = `${datePart} at ${timePart.toUpperCase()}`;


        // Update the data with the new timestamp
        return setData({
            ...data,
            time: formattedDateTime
        });
    }

    const takeScreenshot = async () => {
        await getPicture(
            setPreview,
            setIsPreview,
            screenshotRef,
            setIsLoading,
            toast,
            0.8,
            1.5,
            1.6
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
                                viewBox="0 0 608 1288"
                            >
                                  <style>
                                    {
                                        InterBaseEncoded
                                    }
                                </style>
                                <defs>
                                    <filter id="Rectangle_3">
                                        <feOffset dy="1"></feOffset>
                                        <feGaussianBlur result="blur"></feGaussianBlur>
                                        <feFlood floodOpacity="0.8" result="color"></feFlood>
                                        <feComposite
                                            in="SourceGraphic"
                                            in2="blur"
                                            operator="out"
                                        ></feComposite>
                                        <feComposite in="color" operator="in"></feComposite>
                                        <feComposite in2="SourceGraphic" operator="in"></feComposite>
                                    </filter>
                                    <filter
                                        id="Rectangle_2"
                                        width="608"
                                        height="183"
                                        x="0"
                                        y="0"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset dy="1"></feOffset>
                                        <feGaussianBlur result="blur-2" stdDeviation="3"></feGaussianBlur>
                                        <feFlood floodOpacity="0.812"></feFlood>
                                        <feComposite in2="blur-2" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                    <clipPath id="clip-path">
                                        <path fill="none" d="M0 0H489V1072H0z"></path>
                                    </clipPath>
                                </defs>
                                <g data-name="Group 17" transform="translate(-1199 -46)">
                                    <path
                                        fill="#fff"
                                        d="M0 0H590V1280H0z"
                                        data-name="Rectangle 1"
                                        transform="translate(1208 54)"
                                    ></path>
                                    <g data-type="innerShadowGroup">
                                        <path
                                            fill="#202125"
                                            d="M0 0H590V1115H0z"
                                            data-name="Rectangle 3"
                                            transform="translate(1208 219)"
                                        ></path>
                                        <g filter="url(#Rectangle_3)" transform="translate(1199 46)">
                                            <path
                                                fill="#fff"
                                                d="M0 0H590V1115H0z"
                                                data-name="Rectangle 3"
                                                transform="translate(9 173)"
                                            ></path>
                                        </g>
                                    </g>
                                    <path
                                        fill="#27282a"
                                        d="M0 0H544V1115H0z"
                                        data-name="Rectangle 4"
                                        transform="translate(1231 219)"
                                    ></path>
                                    <g filter="url(#Rectangle_2)" transform="translate(1199 46)">
                                        <path
                                            fill="#2f3034"
                                            d="M0 0H590V165H0z"
                                            data-name="Rectangle 2"
                                            transform="translate(9 8)"
                                        ></path>
                                    </g>
                                    <g
                                        clipPath="url(#clip-path)"
                                        data-name="Repeat Grid 1"
                                        transform="translate(1259 262)"
                                    >
                                        <g transform="translate(-1259 -243)">
                                            <rect
                                                width="489"
                                                height="1098"
                                                fill="#202125"
                                                data-name="Rectangle 5"
                                                rx="36"
                                                transform="translate(1259 243)"
                                            ></rect>
                                        </g>
                                    </g>
                                    <g data-name="Group 8" transform="translate(-4.652 1)">
                                        <path
                                            fill="none"
                                            stroke="#989ba0"
                                            strokeWidth="3.5"
                                            d="M1259 168.985l-13.7 13.87 13.7 13.188"
                                            data-name="Path 1"
                                        ></path>
                                        <g data-name="Group 7" transform="translate(797 15.044)">
                                            <g stroke="#989ba0" data-name="Group 6">
                                                <g
                                                    fill="none"
                                                    strokeWidth="2.5"
                                                    data-name="Rectangle 6"
                                                    transform="translate(732 158)"
                                                >
                                                    <rect width="27" height="22" stroke="none" rx="2"></rect>
                                                    <rect
                                                        width="24.5"
                                                        height="19.5"
                                                        x="1.25"
                                                        y="1.25"
                                                        rx="0.75"
                                                    ></rect>
                                                </g>
                                                <path
                                                    fill="none"
                                                    strokeWidth="2.5"
                                                    d="M733.876 159.889l3.017-5.091h17.833l2.469 5.091"
                                                    data-name="Path 2"
                                                ></path>
                                                <path
                                                    fill="#989ba0"
                                                    fillRule="evenodd"
                                                    strokeWidth="1"
                                                    d="M745.758 164.47a.547.547 0 01.529.608v6.311l3.113-3.376a.555.555 0 01.831 0 .679.679 0 010 .9l-4.116 4.474a.555.555 0 01-.831 0l-4.112-4.471a.679.679 0 010-.9.555.555 0 01.831 0l3.109 3.38v-6.318a.641.641 0 01.646-.608z"
                                                ></path>
                                            </g>
                                        </g>
                                        <g data-name="Group 9" transform="translate(797 15.044)">
                                            <g stroke="#989ba0" data-name="Group 6">
                                                <g
                                                    fill="none"
                                                    strokeWidth="2.5"
                                                    data-name="Rectangle 6"
                                                    transform="translate(732 158)"
                                                >
                                                    <rect width="27" height="22" stroke="none" rx="2"></rect>
                                                    <rect
                                                        width="24.5"
                                                        height="19.5"
                                                        x="1.25"
                                                        y="1.25"
                                                        rx="0.75"
                                                    ></rect>
                                                </g>
                                                <path
                                                    fill="none"
                                                    strokeWidth="2.5"
                                                    d="M733.876 159.889l3.017-5.091h17.833l2.469 5.091"
                                                    data-name="Path 2"
                                                ></path>
                                                <path
                                                    fill="#989ba0"
                                                    fillRule="evenodd"
                                                    strokeWidth="1"
                                                    d="M745.758 164.47a.547.547 0 01.529.608v6.311l3.113-3.376a.555.555 0 01.831 0 .679.679 0 010 .9l-4.116 4.474a.555.555 0 01-.831 0l-4.112-4.471a.679.679 0 010-.9.555.555 0 01.831 0l3.109 3.38v-6.318a.641.641 0 01.646-.608z"
                                                    data-name="down-arrow-svgrepo-com"
                                                ></path>
                                            </g>
                                        </g>
                                        <g
                                            stroke="#a0a3a8"
                                            data-name="Group 3"
                                            transform="translate(784 -41)"
                                        >
                                            <g
                                                fill="none"
                                                strokeWidth="3"
                                                data-name="Rectangle 7"
                                                transform="translate(821 211)"
                                            >
                                                <rect width="20" height="25" stroke="none" rx="3"></rect>
                                                <rect width="17" height="22" x="1.5" y="1.5" rx="1.5"></rect>
                                            </g>
                                            <g
                                                fill="#a0a3a8"
                                                strokeWidth="1"
                                                data-name="Rectangle 8"
                                                transform="translate(819 211)"
                                            >
                                                <path stroke="none" d="M0 0H24V3H0z"></path>
                                                <path fill="none" d="M0.5 0.5H23.5V2.5H0.5z"></path>
                                            </g>
                                            <g
                                                fill="#a0a3a8"
                                                strokeWidth="1"
                                                data-name="Rectangle 9"
                                                transform="translate(827 217)"
                                            >
                                                <path stroke="none" d="M0 0H3V14H0z"></path>
                                                <path fill="none" d="M0.5 0.5H2.5V13.5H0.5z"></path>
                                            </g>
                                            <g
                                                fill="#a0a3a8"
                                                strokeWidth="1"
                                                data-name="Rectangle 10"
                                                transform="translate(832 217)"
                                            >
                                                <path stroke="none" d="M0 0H3V14H0z"></path>
                                                <path fill="none" d="M0.5 0.5H2.5V13.5H0.5z"></path>
                                            </g>
                                            <g
                                                fill="#a0a3a8"
                                                strokeWidth="1"
                                                data-name="Rectangle 11"
                                                transform="translate(827 208)"
                                            >
                                                <path stroke="none" d="M0 0H8V3H0z"></path>
                                                <path fill="none" d="M0.5 0.5H7.5V2.5H0.5z"></path>
                                            </g>
                                        </g>
                                        <g data-name="Group 4" transform="translate(799 -34)">
                                            <g
                                                fill="none"
                                                stroke="#a0a3a8"
                                                strokeWidth="3"
                                                data-name="Rectangle 12"
                                                transform="translate(870 204)"
                                            >
                                                <rect width="30" height="24" stroke="none" rx="3"></rect>
                                                <rect width="27" height="21" x="1.5" y="1.5" rx="1.5"></rect>
                                            </g>
                                            <g
                                                fill="#a0a3a8"
                                                stroke="#303135"
                                                strokeWidth="2"
                                                data-name="Ellipse 1"
                                                transform="translate(891 201)"
                                            >
                                                <circle cx="6" cy="6" r="6" stroke="none"></circle>
                                                <circle cx="6" cy="6" r="5" fill="none"></circle>
                                            </g>
                                            <path
                                                fill="none"
                                                stroke="#a0a3a8"
                                                strokeWidth="3"
                                                d="M872 207.951L885.108 216l4.694-2.88 2.544-1.561"
                                                data-name="Path 3"
                                            ></path>
                                        </g>
                                        <g fill="#a0a3a8" data-name="Group 5" transform="translate(774 -2)">
                                            <circle
                                                cx="3.5"
                                                cy="3.5"
                                                r="3.5"
                                                data-name="Ellipse 2"
                                                transform="translate(968 181)"
                                            ></circle>
                                            <circle
                                                cx="3.5"
                                                cy="3.5"
                                                r="3.5"
                                                data-name="Ellipse 3"
                                                transform="translate(978 181)"
                                            ></circle>
                                            <circle
                                                cx="3.5"
                                                cy="3.5"
                                                r="3.5"
                                                data-name="Ellipse 4"
                                                transform="translate(989 181)"
                                            ></circle>
                                        </g>
                                    </g>
                                    <g data-name="Group 10" transform="translate(637 2)">
                                        <circle
                                            cx="42"
                                            cy="42"
                                            r="42"
                                            fill="#00c9f9"
                                            data-name="Ellipse 5"
                                            transform="translate(824 328)"
                                        ></circle>
                                        <path
                                            fill="none"
                                            stroke="#fffcec"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="6"
                                            d="M866.373 355.938v-7.032m0 42.188v-7.03M856.558 370h13.084a6.8 6.8 0 006.543-7.036 6.8 6.8 0 00-6.542-7.031h-13.085zm0 0h16.355a7.05 7.05 0 010 14.063h-16.355z"
                                        ></path>
                                    </g>
                                    <text
                                        fill="#dedfe3"
                                        fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                        fontSize="24.5"
                                        transform="translate(1465 462)"
                                    >
                                        <tspan x="0" y="0">
                                            Bitcoin
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#696d70"
                                        data-name="Market Sell Order"
                                        fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                        fontSize="23"
                                        transform="translate(1411 502)"
                                    >
                                        <tspan x="0" y="0">
                                            Market Sell Order
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#696d70"
                                        data-name="Sep 12 at 10:54 PM"
                                        fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                        fontSize="23"
                                        transform="translate(1503 757)"
                                    >
                                        <tspan x="0" y="0" textAnchor="middle">
                                           {data.time}
                                        </tspan>
                                    </text>
                                    <g
                                        fill="#696d70"
                                        data-name="Group 12"
                                        fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                        fontSize="20"
                                        transform="translate(0 -5)"
                                    >
                                        <text data-name="Bitcoin Amount" transform="translate(1318 1152)">
                                            <tspan x="0" y="0">
                                                Bitcoin Amount
                                            </tspan>
                                        </text>
                                        <text data-name="0.00291 BTC" transform="translate(1683 1152)">
                                            <tspan x="0" y="0" textAnchor="end">
                                               {data.bitcoin_amount}
                                            </tspan>
                                        </text>
                                    </g>
                                    <g
                                        fill="#696d70"
                                        data-name="Group 13"
                                        fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                        fontSize="20"
                                        transform="translate(0 -8)"
                                    >
                                        <text data-name="Exchange Rate" transform="translate(1318 1188)">
                                            <tspan x="0" y="0">
                                                Exchange Rate
                                            </tspan>
                                        </text>
                                        <text data-name="$57,601.43" transform="translate(1682 1188)">
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.exchange_rate}
                                            </tspan>
                                        </text>
                                    </g>
                                    <g
                                        fill="#696d70"
                                        data-name="Group 14"
                                        fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                        fontSize="20"
                                        transform="translate(0 -9)"
                                    >
                                        <text data-name="Total Sale Amount" transform="translate(1318 1224)">
                                            <tspan x="0" y="0">
                                                Total Sale Amount
                                            </tspan>
                                        </text>
                                        <text data-name="$167.62" transform="translate(1683 1224)">
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.sale_amount}
                                            </tspan>
                                        </text>
                                    </g>
                                    <g
                                        fill="#696d70"
                                        data-name="Group 15"
                                        fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                        fontSize="20"
                                        transform="translate(0 -11)"
                                    >
                                        <text transform="translate(1318 1260)">
                                            <tspan x="0" y="0">
                                                Fee
                                            </tspan>
                                        </text>
                                        <text data-name="$3.35" transform="translate(1683 1260)">
                                            <tspan x="0" y="0" textAnchor="end"> 
                                                {data.fee}
                                            </tspan>
                                        </text>
                                    </g>
                                    <g
                                        fill="#696d70"
                                        data-name="Group 16"
                                        fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                        fontSize="20"
                                        transform="translate(0 -14)"
                                    >
                                        <text transform="translate(1318 1296)">
                                            <tspan x="0" y="0">
                                                Total
                                            </tspan>
                                        </text>
                                        <text data-name="$164.27" transform="translate(1683 1296)">
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.total}
                                            </tspan>
                                        </text>
                                    </g>
                                    <text
                                        fill="#d9dade"
                                        fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                        fontSize="23"
                                        transform="translate(1450 961)"
                                    >
                                        <tspan x="0" y="0">
                                            Completed
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#cfd1d0"
                                        data-name="$167.62"
                                        fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                        fontSize="89"
                                        transform="translate(1500 702)"
                                    >
                                        <tspan x="0" y="0" textAnchor="middle">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <g data-name="Group 11" transform="translate(740 -2)">
                                        <circle
                                            cx="17"
                                            cy="17"
                                            r="17"
                                            fill="#0e597b"
                                            data-name="Ellipse 6"
                                            transform="translate(751 892)"
                                        ></circle>
                                        <path
                                            fill="#e2ffff"
                                            d="M17.23 96.395a1.264 1.264 0 010 1.787l-10.1 10.1a1.264 1.264 0 01-1.787 0l-5.048-5.051a1.264 1.264 0 011.787-1.787L6.24 105.6l9.207-9.2a1.264 1.264 0 011.787 0z"
                                            transform="translate(759.475 806.446)"
                                        ></path>
                                    </g>
                                    <path
                                        fill="none"
                                        stroke="#27282a"
                                        strokeWidth="2"
                                        d="M0 1L490 0"
                                        data-name="Line 1"
                                        transform="translate(1258.5 1073.5)"
                                    ></path>
                                    <rect
                                        width="211"
                                        height="8"
                                        fill="#fff"
                                        data-name="Rectangle 13"
                                        rx="4"
                                        transform="translate(1426 1317)"
                                    ></rect>
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
                            <label>Date</label>
                            <input
                                type="text"
                                value={data.time}
                                name="time"
                                onChange={(e) => onChangeHandler(e)}
                            />
                              <button className="dateTimeBtn" onClick={() => manageTimeDate()}>Current Date and Time</button>
                        </div>
                        <div className="global_form_inner">
                            <label>Bitcoin Amount</label>
                            <input
                                type="text"
                                value={data.bitcoin_amount}
                                name="bitcoin_amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        {/* <div className="global_form_inner">
                            <label>Exchange Rate</label>
                            <input
                                type="text"
                                value={data.exchange_rate}
                                name="exchane_rate"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div> */}
                          <div className="global_form_inner">
                            <label>Exchange Rate</label>
                            <input
                                type="text"
                                value={data.exchange_rate}
                                name="exchange_rate"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Total Sale Amount</label>
                            <input
                                type="text"
                                value={data.sale_amount}
                                name="sale_amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                          
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
                        <div className="global_form_inner">
                            <label>Total</label>
                            <input
                                type="text"
                                value={data.total}
                                name="total"
                                onChange={(e) => onChangeHandler(e)}
                            />
                          
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default View83;