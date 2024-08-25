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

const View51 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 51";

    const [data, setData] = useState({
        
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
            1,
            1,
            0.5,
            1
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
                                viewBox="0 0 1820 3940"
                              
                            >
                                <style>
                                    {
                                      RobotoBaseEncoded
                                    }
                                </style>
                                <defs>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="0.964"
                                        x2="0.27"
                                        y1="0.388"
                                        y2="0.5"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#ea3e58"></stop>
                                        <stop offset="1" stopColor="#392832"></stop>
                                    </linearGradient>
                                </defs>
                                <g data-name="Group 313" transform="translate(-2152 -106)">
                                    <g data-name="Group 312">
                                        <g data-name="Group 30" transform="translate(1561 58)">
                                            <g
                                                fill="#1f2630"
                                                stroke="#707070"
                                                strokeWidth="1"
                                                data-name="Rectangle 41"
                                                transform="translate(591 48)"
                                            >
                                                <path stroke="none" d="M0 0H1820V3940H0z"></path>
                                                <path fill="none" d="M0.5 0.5H1819.5V3939.5H0.5z"></path>
                                            </g>
                                            <text
                                                fill="#fff"
                                                data-name="Buy Crypto"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="75"
                                                fontWeight="500"
                                                letterSpacing=".06em"
                                                transform="translate(1280.252 383.021)"
                                            >
                                                <tspan x="0" y="0">
                                                    Buy Crypto
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#fff"
                                                data-name="1:29"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="75"
                                                fontWeight="500"
                                                letterSpacing=".06em"
                                                transform="translate(769.494 179.928)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.time}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#fff"
                                                data-name="Transaction Declined"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="75"
                                                fontWeight="500"
                                                transform="translate(1149 1459.412)"
                                            >
                                                <tspan x="0" y="0">
                                                    Transaction Declined
                                                </tspan>
                                            </text>
                                            <g
                                                fill="#6c727e"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="58"
                                                fontWeight="500"
                                                transform="translate(777 1591.505)"
                                            >
                                                <text
                                                    data-name="This transaction has been declined due to suspicious"
                                                    transform="translate(43.442 55)"
                                                >
                                                    <tspan x="0" y="0">
                                                        This transaction has been declined due to suspicious
                                                    </tspan>
                                                </text>
                                                <text
                                                    data-name="activity. Please check the email and submit an appeal to"
                                                    transform="translate(0 144.361)"
                                                >
                                                    <tspan x="0" y="0">
                                                        activity. Please check the email and submit an appeal to
                                                    </tspan>
                                                </text>
                                                <text
                                                    data-name="verify your cardholder identity with the relevant"
                                                    transform="translate(129.569 233.722)"
                                                >
                                                    <tspan x="0" y="0">
                                                        verify your cardholder identity with the relevant
                                                    </tspan>
                                                </text>
                                                <text transform="translate(582.569 323.082)">
                                                    <tspan x="0" y="0">
                                                        documents.
                                                    </tspan>
                                                </text>
                                            </g>
                                            <rect
                                                width="1702"
                                                height="240"
                                                fill="#fbd437"
                                                data-name="Rectangle 44"
                                                rx="30"
                                                ry="30"
                                                transform="translate(640 3529)"
                                            ></rect>
                                             {
                                        isIOS
                                            ?
                                            <> <rect
                                            width="666"
                                            height="29"
                                            fill="#fff"
                                            data-name="Rectangle 45"
                                            rx="20"
                                            ry="20"
                                            transform="translate(1168 3939)"
                                        ></rect>
                                            </>
                                            :
                                            <></>
                                    }
                                           
                                            <text
                                                fill="#1d1e20"
                                                data-name="Change Payment Method"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="77"
                                                fontWeight="500"
                                                letterSpacing=".05em"
                                                transform="translate(1024.298 3675.124)"
                                            >
                                                <tspan x="0" y="0">
                                                    Change Payment Method
                                                </tspan>
                                            </text>
                                            <g data-name="Group 29" transform="translate(1283.825 880.68)">
                                                <g data-name="Group 28">
                                                    <g data-name="Group 26">
                                                        <ellipse
                                                            cx="199"
                                                            cy="190.5"
                                                            fill="url(#linear-gradient)"
                                                            data-name="Ellipse 9"
                                                            rx="199"
                                                            ry="190.5"
                                                            transform="translate(.175 .319)"
                                                        ></ellipse>
                                                        <ellipse
                                                            cx="138"
                                                            cy="134"
                                                            fill="#ea3e58"
                                                            data-name="Ellipse 8"
                                                            rx="138"
                                                            ry="134"
                                                            transform="translate(61.175 57.319)"
                                                        ></ellipse>
                                                    </g>
                                                </g>
                                                <g
                                                    fill="#ffecf3"
                                                    data-name="Group 27"
                                                    transform="translate(136.97 122.837)"
                                                >
                                                    <path
                                                        d="M0 0H28.433V166.536H0z"
                                                        data-name="Rectangle 42"
                                                        transform="rotate(-45.97 24.518 9.26)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H28.433V166.536H0z"
                                                        data-name="Rectangle 43"
                                                        transform="rotate(45.97 59.898 141.206)"
                                                    ></path>
                                                </g>
                                            </g>
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
                </div>
              
            </div>

        </>
    )
}

export default View51