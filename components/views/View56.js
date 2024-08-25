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

const View56 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 56";

    const [data, setData] = useState({
        
        depoite_date: "Thu, Apr 25, 2024",
        sender: "Eric Peter Bustamante",
        amount: "$220.57",
        recipient: "ERIC PETER AGUILAR",
        recipient2: "BUSTAMANTE",
        recipientEmail: "bustamanteeric571@gmail.com",
        deposited_to: "TD STUDENT",
        deposited_to2: "CHEQUING ACCOUNT",
        deposited_number: "6616674",
        message: "gratevalue",
        confirmation: "C1BXvf***tgc",
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
            0.1,
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
                                viewBox="0 0 1779 3852"
                            >
                                <style>
                                    {
                                      RobotoBaseEncoded
                                    }
                                </style>
                                <defs>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="0.5"
                                        x2="0.5"
                                        y2="1"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#237142"></stop>
                                        <stop offset="0" stopColor="#13482e"></stop>
                                        <stop offset="0.243" stopColor="#13482e"></stop>
                                        <stop offset="1" stopColor="#216e40"></stop>
                                    </linearGradient>
                                </defs>
                                <g data-name="Group 329" transform="translate(-2125 -127)">
                                    <path
                                        fill="#fff"
                                        d="M0 0H1779V3852H0z"
                                        data-name="Rectangle 75"
                                        transform="translate(2125 127)"
                                    ></path>
                                    <path
                                        fill="url(#linear-gradient)"
                                        d="M0 0H1779V977H0z"
                                        data-name="Rectangle 76"
                                        transform="translate(2125 127)"
                                    ></path>
                                    <path
                                        fill="#f4f2f7"
                                        d="M0 0H1779V78H0z"
                                        data-name="Rectangle 77"
                                        transform="translate(2125 1104)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#c1c1c1"
                                        strokeWidth="5"
                                        d="M0 0L1774.33 0"
                                        data-name="Line 29"
                                        transform="translate(2127.078 3710.98)"
                                    ></path>
                                    <text
                                        fill="#fff"
                                        data-name="12:41"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="73"
                                        fontWeight="700"
                                        transform="translate(2272.307 283.262)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.time}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="View Details"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="77"
                                        fontWeight="500"
                                        transform="translate(2796.279 490.874)"
                                    >
                                        <tspan x="0" y="0">
                                            View Details
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#5bcc5a"
                                        data-name="Money Received"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="146"
                                        fontWeight="500"
                                        transform="translate(2473.418 789.573)"
                                    >
                                        <tspan x="0" y="0">
                                            Money Received
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="Status: Autodeposited"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="69"
                                        fontWeight="500"
                                        opacity="0.82"
                                        transform="translate(2665.918 981.515)"
                                    >
                                        <tspan x="0" y="0">
                                            Status: Autodeposited
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#1e663c"
                                        data-name="Date Deposited"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="54"
                                        fontWeight="700"
                                        transform="translate(2201.674 1331.185)"
                                    >
                                        <tspan x="0" y="0">
                                            Date Deposited
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#131212"
                                        data-name="Thu, Apr 25, 2024"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="68"
                                        fontWeight="700"
                                        transform="translate(2761.016 1338.874)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.depoite_date}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#206c3f"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="54"
                                        fontWeight="700"
                                        transform="translate(2201.055 1604.437)"
                                    >
                                        <tspan x="0" y="0">
                                            Sender
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#131212"
                                        data-name="Eric Peter Bustamante"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="68"
                                        fontWeight="700"
                                        transform="translate(2765 1613)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.sender}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#131212"
                                        data-name="$220.57"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="68"
                                        fontWeight="700"
                                        transform="translate(2765.766 1874.912)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#206c3f"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="54"
                                        fontWeight="700"
                                        transform="translate(2204 1879)"
                                    >
                                        <tspan x="0" y="0">
                                            Amount
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#206c3f"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="54"
                                        fontWeight="700"
                                        transform="translate(2201.84 2240.204)"
                                    >
                                        <tspan x="0" y="0">
                                            Recipient
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#131212"
                                        data-name="ERIC PETER AGUILAR BUSTAMANTE"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="68"
                                        fontWeight="700"
                                        transform="translate(2765 2153)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.recipient}
                                        </tspan>
                                        <tspan x="0" y="82">
                                            {data.recipient2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6e6e6e"
                                        data-name="bustamanteeric571@gmail.com"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="55"
                                        fontWeight="600"
                                        transform="translate(2763.988 2323.311)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.recipientEmail}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#206c3f"
                                        data-name="Deposited To"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="54"
                                        fontWeight="700"
                                        transform="translate(2204.055 2701.446)"
                                    >
                                        <tspan x="0" y="0">
                                            Deposited To
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#131212"
                                        data-name="TD STUDENT CHEQUING ACCOUNT"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="68"
                                        fontWeight="700"
                                        transform="translate(2765 2623)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.deposited_to}
                                        </tspan>
                                        <tspan x="0" y="82">
                                            {data.deposited_to2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6e6e6e"
                                        data-name="6616674"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="55"
                                        fontWeight="600"
                                        transform="translate(2769.66 2797.02)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.deposited_number}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#206c3f"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="54"
                                        fontWeight="700"
                                        transform="translate(2205.613 3062.961)"
                                    >
                                        <tspan x="0" y="0">
                                            Message
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#131212"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="68"
                                        fontWeight="700"
                                        transform="translate(2765 3072)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.message}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#206c3f"
                                        data-name="Confirmation #"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="54"
                                        fontWeight="700"
                                        transform="translate(2205.064 3333.059)"
                                    >
                                        <tspan x="0" y="0">
                                            Confirmation #
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#131212"
                                        data-name="C1BXvf***tgc"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="68"
                                        fontWeight="700"
                                        transform="translate(2761.996 3341.748)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.confirmation}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#206c3f"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="52"
                                        fontWeight="700"
                                        transform="translate(2202.377 3604.155)"
                                    >
                                        <tspan x="0" y="0">
                                            Method
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#141414"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="67"
                                        fontWeight="700"
                                        transform="translate(2766.664 3610.845)"
                                    >
                                        <tspan x="0" y="0">
                                            Email
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#fff"
                                        d="M6.882 0l58.254 1.165a6.649 6.649 0 017.1 5.439c.062 2.909-3.021 5.24-6.881 5.161L7.1 10.6A6.649 6.649 0 010 5.163C-.057 2.229 3.018-.073 6.882 0z"
                                        data-name="Path 10"
                                        transform="rotate(-44.03 1677.317 -2497.552)"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        d="M6.882 0l58.254 1.165a6.649 6.649 0 017.1 5.439c.062 2.909-3.021 5.24-6.881 5.161L7.1 10.6A6.649 6.649 0 010 5.163C-.057 2.229 3.018-.073 6.882 0z"
                                        data-name="Path 14"
                                        transform="rotate(40 478.703 3267.948)"
                                    ></path>
                                    <path
                                        fill="#f3f2f7"
                                        d="M0 0H1779V266H0z"
                                        data-name="Rectangle 78"
                                        transform="translate(2125 3713)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#dfdfe1"
                                        strokeWidth="4"
                                        d="M0 0L1703.689 0"
                                        data-name="Line 30"
                                        transform="translate(2199.797 2903.845)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#dfdfe1"
                                        strokeWidth="4"
                                        d="M0 0L1703.689 0"
                                        data-name="Line 33"
                                        transform="translate(2199.797 2459.223)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#dfdfe1"
                                        strokeWidth="4"
                                        d="M0 0L1703.689 0"
                                        data-name="Line 34"
                                        transform="translate(2199.797 1989.67)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#dfdfe1"
                                        strokeWidth="4"
                                        d="M0 0L1703.689 0"
                                        data-name="Line 35"
                                        transform="translate(2199.797 1719.572)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#dfdfe1"
                                        strokeWidth="4"
                                        d="M0 0L1703.689 0"
                                        data-name="Line 36"
                                        transform="translate(2199.797 1445.32)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#dfdfe1"
                                        strokeWidth="4"
                                        d="M0 0L1703.689 0"
                                        data-name="Line 31"
                                        transform="translate(2199.797 3173.941)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#dfdfe1"
                                        strokeWidth="4"
                                        d="M0 0L1703.689 0"
                                        data-name="Line 32"
                                        transform="translate(2199.797 3448.194)"
                                    ></path>
                                                                      {
                                        isIOS
                                            ?
                                            <><rect
                                            width="640"
                                            height="24"
                                            fill="#010101"
                                            data-name="Rectangle 79"
                                            rx="12"
                                            transform="translate(2732 3913)"
                                        ></rect>
                                            </>
                                            :
                                            <></>
                                    }
                                    
                                    <path
                                        fill="none"
                                        stroke="#e2e1e6"
                                        strokeWidth="3"
                                        d="M0 0L0 2531"
                                        data-name="Line 28"
                                        transform="translate(2126.5 1181.5)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#e2e1e6"
                                        strokeWidth="3"
                                        d="M0 0L0 2531"
                                        data-name="Line 29"
                                        transform="translate(3902.5 1181.5)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#c1c1c1"
                                        strokeWidth="5"
                                        d="M0 0L1775.908 0.034"
                                        data-name="Line 29"
                                        transform="translate(2125.5 1184.5)"
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
                        <label>Deposited Date</label>
                        <input
                            type="text"
                            value={data.depoite_date}
                            name="depoite_date"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Sender</label>
                        <input
                            type="text"
                            value={data.sender}
                            name="sender"
                            onChange={(e) => onChangeHandler(e)}
                        />
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
                    <div className="global_form_inner">
                        <label>Recipient</label>
                        <input
                            type="text"
                            value={data.recipient}
                            name="recipient"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.recipient2}
                            name="recipient2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.recipientEmail}
                            name="recipientEmail"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Deposited To</label>
                        <input
                            type="text"
                            value={data.deposited_to}
                            name="deposited_to"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.deposited_to2}
                            name="deposited_to2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.deposited_number}
                            name="deposited_number"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Message</label>
                        <input
                            type="text"
                            value={data.message}
                            name="message"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Confirmation</label>
                        <input
                            type="text"
                            value={data.confirmation}
                            name="confirmation"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                </div>
                </div>
       
            </div>

        </>
    )
}

export default View56