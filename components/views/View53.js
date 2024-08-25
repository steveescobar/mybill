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

const View53 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 53";

    const [data, setData] = useState({
        amountType: "USDT",
        chainName: "TRC20(Tron)",
        address1: "TWGXYLqtHGiDczsJmPhR6oV",
        address2: "Uiya2Nb96oP",
        amount: "35.9977",
        applicationTime: "2024-05-07 15:10:00",
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
        const finalRes = (`${now.getFullYear()}-${padL(now.getMonth() + 1)}-${padL(now.getDate())}  ${padL(now.getHours())}:${padL(now.getMinutes())}:${padL(now.getSeconds())}`
        );
        return setData({
            ...data,
            applicationTime: finalRes
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
                                viewBox="0 0 1807 3940"
                               
                            >
                                <style>
                                    {
                                      RobotoBaseEncoded
                                    }
                                </style>
                                <g data-name="Group 320" transform="translate(-2186 -65)">
                                    <path
                                        fill="#151517"
                                        d="M0 0H1807V3940H0z"
                                        data-name="Rectangle 411"
                                        transform="translate(2186 65)"
                                    ></path>
                                    <text
                                        fill="#fff"
                                        data-name="15:10"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="68"
                                        transform="translate(2371 189)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.time}
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#fff"
                                        d="M1868.21-12621.308l-36.063-34.549 37.072-36.063-6.809-6.052-43.376 42.115 43.376 40.857z"
                                        data-name="Path 20"
                                        transform="translate(462.814 13035.002)"
                                    ></path>
                                    <circle
                                        cx="145.5"
                                        cy="145.5"
                                        r="145.5"
                                        fill="#132c26"
                                        data-name="Ellipse 110"
                                        opacity="0.8"
                                        transform="translate(2944 526)"
                                    ></circle>
                                    <circle
                                        cx="114"
                                        cy="114"
                                        r="114"
                                        fill="#3eda77"
                                        data-name="Ellipse 111"
                                        transform="translate(2976 558)"
                                    ></circle>
                                    <path
                                        fill="#fff"
                                        d="M109.213 98.361a7.984 7.984 0 010 11.286l-63.778 63.777a7.984 7.984 0 01-11.286 0L2.261 141.535a7.98 7.98 0 0111.286-11.286L39.8 156.483l58.152-58.122a7.984 7.984 0 0111.286 0z"
                                        transform="translate(3033.762 534.048)"
                                    ></path>
                                    <text
                                        fill="#fff"
                                        data-name="Withdrawal order submitted"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="117"
                                        fontWeight="500"
                                        transform="translate(2365 1028)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal order submitted
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858585"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(2246 1319)"
                                    >
                                        <tspan x="0" y="0">
                                            Coin
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e1e1e1"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(3762 1319)"
                                    >
                                        <tspan x="162" y="0" textAnchor="end">
                                            {data.amountType}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e1e1e1"
                                        data-name="TRC20(Tron)"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(3551 1492)"
                                    >
                                        <tspan x="372" y="0" textAnchor="end">
                                            {data.chainName}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e1e1e1"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(3025 1665)"
                                    >
                                        <tspan x="900" y="0" textAnchor="end">
                                            {data.address1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e1e1e1"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(3526 1754)"
                                    >
                                        <tspan x="400" y="0" textAnchor="end">
                                            {data.address2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e1e1e1"
                                        data-name="35.998"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(3686 1927)"
                                    >
                                        <tspan x="240" y="0" textAnchor="end">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e1e1e1"
                                        data-name="2024-05-07 15:10:00"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(3322 2096)"
                                    >
                                        <tspan x="600" y="0" textAnchor="end">
                                            {data.applicationTime}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858585"
                                        data-name="Chain name"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(2246 1492)"
                                    >
                                        <tspan x="0" y="0">
                                            Chain name
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858585"
                                        data-name="Withdrawal address"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(2246 1665)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal address
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858585"
                                        data-name="Amount received"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(2246 1923)"
                                    >
                                        <tspan x="0" y="0">
                                            Amount received
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858585"
                                        data-name="Application time"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(2246 2096)"
                                    >
                                        <tspan x="0" y="0">
                                            Application time
                                        </tspan>
                                    </text>
                                    <g data-name="Group 319" transform="translate(1934 362)">
                                        <rect
                                            width="802"
                                            height="198"
                                            fill="#242424"
                                            data-name="Rectangle 412"
                                            rx="99"
                                            transform="translate(322 3300)"
                                        ></rect>
                                        <text
                                            fill="#f3f3f3"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="82"
                                            transform="translate(633 3428)"
                                        >
                                            <tspan x="0" y="0">
                                                Back
                                            </tspan>
                                        </text>
                                        <g data-name="Group 318" transform="translate(21)">
                                            <rect
                                                width="802"
                                                height="198"
                                                fill="#fff"
                                                data-name="Rectangle 413"
                                                rx="99"
                                                transform="translate(1158 3300)"
                                            ></rect>
                                            <text
                                                data-name="View status"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="78"
                                                fontWeight="500"
                                                transform="translate(1355 3426)"
                                            >
                                                <tspan x="0" y="0">
                                                    View status
                                                </tspan>
                                            </text>
                                        </g>
                                    </g>
                                    {
                                        isIOS
                                            ?
                                            <>  <rect
                                            width="652"
                                            height="25"
                                            fill="#fff"
                                            data-name="Rectangle 414"
                                            rx="12.5"
                                            transform="translate(2764 3956)"
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
                                // iconPadding={`2rem 4.5rem 0rem 6rem`}
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
                        <label>Coin</label>
                        <input
                            type="text"
                            value={data.amountType}
                            name="amountType"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Chain name</label>
                        <input
                            type="text"
                            value={data.chainName}
                            name="chainName"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Withdrawal address</label>
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
                        <label>Amount received</label>
                        <input
                            type="text"
                            value={data.amount}
                            name="amount"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Application time</label>
                        <input
                            type="text"
                            value={data.applicationTime}
                            name="applicationTime"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <button className="dateTimeBtn" onClick={() => manageTimeDate()}>Pick Current Date and Time <i className="fa fa-clock"></i></button>
                    </div>
                    </div>
                </div>
          
            </div>

        </>
    )
}

export default View53
