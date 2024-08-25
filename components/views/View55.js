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

const View55 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 55";

    const [data, setData] = useState({
        amount: "$8,407",
        best: "BEST EGG",
        best_price: "$2,251",
        best_price_alt: "$299/mo",
        upstart: "UPSTART/FINWISE",
        upstart_price: "$1,744",
        upstart_price_alt: "$109/mo",
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
            5,
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
                               
                                viewBox="0 0 2600 3657"
                                
                            >
                                <style>
                                    {
                                      RobotoBaseEncoded
                                    }
                                </style>
                                <g data-name="Group 326" transform="translate(-2951 -206)">
                                    <g data-name="Group 325">
                                        <path
                                            fill="#fff"
                                            d="M0 0H2600V3657H0z"
                                            data-name="Rectangle 69"
                                            transform="translate(2951 206)"
                                        ></path>
                                        <text
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            fontFamily="Roboto-Black, Roboto"
                                            fontSize="183"
                                            fontWeight="800"
                                            transform="translate(3040.314 726.893)"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                Loans
                                            </tspan>
                                        </text>
                                        <text
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="Loans"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="109"
                                            transform="translate(3449.523 961.991)"
                                            fontWeight="500"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                Loans
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#5a5a5a"
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="Find a loan"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="108"
                                            transform="translate(4552.412 960.991)"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                Find a loan
                                            </tspan>
                                        </text>
                                        <path
                                            fill="#008707"
                                            d="M0 0H1208V21H0z"
                                            data-name="Rectangle 70"
                                            transform="translate(3039 1046)"
                                        ></path>
                                        <path
                                            fill="#e3eaf0"
                                            d="M0 0H1204V21H0z"
                                            data-name="Rectangle 71"
                                            transform="translate(4242 1046)"
                                        ></path>
                                        <text
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="8:41"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="100"
                                            fontWeight="600"
                                            transform="translate(3228.523 415)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.time}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#010101"
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="Total reported balance"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="118"
                                            fontWeight="500"
                                            transform="translate(3038.529 1362.857)"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                Total reported balance
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#020202"
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="$8,407"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="372"
                                            fontWeight="700"
                                            transform="translate(3039.42 1821.188)"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                {data.amount}
                                            </tspan>
                                        </text>
                                        <g
                                            fill="#fff"
                                            stroke="#ccc"
                                            strokeWidth="7"
                                            data-name="Rectangle 72"
                                            transform="translate(3039 2118)"
                                        >
                                            <rect width="1943" height="218" stroke="none" rx="109"></rect>
                                            <rect
                                                width="1936"
                                                height="211"
                                                x="3.5"
                                                y="3.5"
                                                fill="none"
                                                rx="105.5"
                                            ></rect>
                                        </g>
                                        <text
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="Recommendations up to date"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="108"
                                            fontWeight="700"
                                            transform="translate(3253 2265)"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                Recommendations up to date
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#020202"
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="BEST EGG"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="121"
                                            fontWeight="700"
                                            transform="translate(3333.877 2661.48)"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                {data.best}
                                            </tspan>
                                        </text>
                                        <text
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="$299/mo"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="112"
                                            transform="translate(3333.766 2848.913)"
                                            fontWeight="500"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                {data.best_price_alt}
                                            </tspan>
                                        </text>
                                        <text
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="$6,663"
                                            fontFamily="Roboto-Black, Roboto"
                                            fontSize="125"
                                            fontWeight="800"
                                            transform="translate(5059.621 2665.48)"
                                        >
                                            <tspan x="380" y="0" className="ibm" textAnchor="end">
                                                {data.best_price}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#020202"
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="$1,744"
                                            fontFamily="Roboto-Black, Roboto"
                                            fontSize="125"
                                            fontWeight="800"
                                            transform="translate(5059.621 3359.265)"
                                        >
                                            <tspan x="385" y="0" className="ibm" textAnchor="end">
                                                {data.upstart_price}
                                            </tspan>
                                        </text>
                                        <text
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="UPSTART/FINWISE"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="121"
                                            fontWeight="700"
                                            transform="translate(3334.004 3359.444)"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                {data.upstart}
                                            </tspan>
                                        </text>
                                        <text
                                            stroke="rgba(0,0,0,0)"
                                            strokeWidth="1"
                                            data-name="$109/mo"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="112"
                                            transform="translate(3333.766 3538.519)"
                                            fontWeight="500"
                                        >
                                            <tspan x="0" y="0" className="ibm">
                                                {data.upstart_price_alt}
                                            </tspan>
                                        </text>
                                        <path
                                            fill="none"
                                            stroke="#e7e7e7"
                                            strokeWidth="9"
                                            d="M0 0L2403.171 0"
                                            data-name="Line 28"
                                            transform="translate(3049.217 3033.384)"
                                        ></path>
                                        <path
                                            fill="#f0f1f3"
                                            d="M0 0H2600V50H0z"
                                            data-name="Rectangle 73"
                                            transform="translate(2951 3767)"
                                        ></path>
                                        <rect
                                            width="17"
                                            height="2775"
                                            fill="#a8a8a8"
                                            data-name="Rectangle 74"
                                            rx="2"
                                            transform="translate(5521 1088)"
                                        ></rect>
                                        <g data-name="Group 322" transform="translate(2571 -8)">
                                            <rect
                                                width="88"
                                                height="95"
                                                fill="#008d00"
                                                data-name="Rectangle 416"
                                                rx="11"
                                                transform="translate(556 2188)"
                                            ></rect>
                                            <path
                                                fill="#fff"
                                                d="M1.862 53.152a2.862 2.862 0 000 5.363l14.027 5.263 5.263 14.027a2.862 2.862 0 005.363 0l5.263-14.027 14.027-5.263a2.862 2.862 0 000-5.363l-14.027-5.263-5.263-14.027a2.862 2.862 0 00-5.363 0l-5.263 14.027z"
                                                transform="translate(566 2169)"
                                            ></path>
                                            <path
                                                fill="#fff"
                                                d="M1.018 43.565a1.565 1.565 0 000 2.932l7.669 2.878 2.878 7.669a1.565 1.565 0 002.932 0l2.878-7.669 7.669-2.875a1.565 1.565 0 000-2.932l-7.669-2.878-2.875-7.672a1.565 1.565 0 00-2.932 0l-2.88 7.67z"
                                                data-name="wand-magic-sparkles-solid"
                                                transform="translate(604 2207)"
                                            ></path>
                                        </g>
                                        <g data-name="Group 323" transform="translate(3060 -33)">
                                            <circle
                                                cx="48"
                                                cy="48"
                                                r="48"
                                                fill="#040404"
                                                data-name="Ellipse 115"
                                                transform="translate(78 2597)"
                                            ></circle>
                                            <path
                                                d="M58.983 17.695H35.39L12.406 4.59A2.948 2.948 0 0114.857 0h64.658a2.948 2.948 0 012.451 4.59zm-23.593 5.9h23.593c.7.461 1.493.977 2.4 1.548 10.451 6.691 32.993 21.1 32.993 51.536a17.7 17.7 0 01-17.699 17.693H17.695A17.7 17.7 0 010 76.677c0-30.431 22.542-44.845 32.993-51.536.885-.571 1.7-1.087 2.4-1.548zm15.483 16.22a3.686 3.686 0 10-7.373 0v2.58a14.221 14.221 0 00-4.092 1.567 9.2 9.2 0 00-4.755 8.092 8.59 8.59 0 004.553 7.5 28.836 28.836 0 006.562 2.58l.313.092a22.787 22.787 0 015.16 1.974c.94.59 1.069 1 1.087 1.511a1.993 1.993 0 01-1.087 1.935 7.326 7.326 0 01-3.944.866 22.944 22.944 0 01-6.47-1.567q-.636-.221-1.327-.442a3.684 3.684 0 10-2.341 6.986c.35.111.737.24 1.124.387a42.8 42.8 0 005.2 1.548v2.728a3.686 3.686 0 007.373 0v-2.544a13.219 13.219 0 004.276-1.659 9.353 9.353 0 004.568-8.294 9 9 0 00-4.534-7.668 28.938 28.938 0 00-6.838-2.765l-.129-.037a25.738 25.738 0 01-5.216-1.935c-.958-.571-.977-.9-.977-1.235a1.84 1.84 0 011.143-1.715 8.024 8.024 0 013.963-.922 23.416 23.416 0 015.751.958 3.691 3.691 0 001.9-7.133 49.035 49.035 0 00-3.889-.866z"
                                                transform="translate(78.728 2568)"
                                            ></path>
                                            <text
                                                fill="#fff"
                                                stroke="rgba(0,0,0,0)"
                                                strokeWidth="1"
                                                data-name="$"
                                                fontFamily="Poppins-Regular, Poppins"
                                                fontSize="66"
                                                transform="translate(107 2665)"
                                            >
                                                <tspan x="0" y="0">
                                                    $
                                                </tspan>
                                            </text>
                                        </g>
                                        <g data-name="Group 324" transform="translate(3060 662)">
                                            <circle
                                                cx="48"
                                                cy="48"
                                                r="48"
                                                fill="#040404"
                                                data-name="Ellipse 115"
                                                transform="translate(78 2597)"
                                            ></circle>
                                            <path
                                                d="M58.983 17.695H35.39L12.406 4.59A2.948 2.948 0 0114.857 0h64.658a2.948 2.948 0 012.451 4.59zm-23.593 5.9h23.593c.7.461 1.493.977 2.4 1.548 10.451 6.691 32.993 21.1 32.993 51.536a17.7 17.7 0 01-17.699 17.693H17.695A17.7 17.7 0 010 76.677c0-30.431 22.542-44.845 32.993-51.536.885-.571 1.7-1.087 2.4-1.548zm15.483 16.22a3.686 3.686 0 10-7.373 0v2.58a14.221 14.221 0 00-4.092 1.567 9.2 9.2 0 00-4.755 8.092 8.59 8.59 0 004.553 7.5 28.836 28.836 0 006.562 2.58l.313.092a22.787 22.787 0 015.16 1.974c.94.59 1.069 1 1.087 1.511a1.993 1.993 0 01-1.087 1.935 7.326 7.326 0 01-3.944.866 22.944 22.944 0 01-6.47-1.567q-.636-.221-1.327-.442a3.684 3.684 0 10-2.341 6.986c.35.111.737.24 1.124.387a42.8 42.8 0 005.2 1.548v2.728a3.686 3.686 0 007.373 0v-2.544a13.219 13.219 0 004.276-1.659 9.353 9.353 0 004.568-8.294 9 9 0 00-4.534-7.668 28.938 28.938 0 00-6.838-2.765l-.129-.037a25.738 25.738 0 01-5.216-1.935c-.958-.571-.977-.9-.977-1.235a1.84 1.84 0 011.143-1.715 8.024 8.024 0 013.963-.922 23.416 23.416 0 015.751.958 3.691 3.691 0 001.9-7.133 49.035 49.035 0 00-3.889-.866z"
                                                data-name="sack-dollar-solid"
                                                transform="translate(78.728 2568)"
                                            ></path>
                                            <text
                                                fill="#fff"
                                                stroke="rgba(0,0,0,0)"
                                                strokeWidth="1"
                                                data-name="$"
                                                fontFamily="Poppins-Regular, Poppins"
                                                fontSize="66"
                                                transform="translate(107 2665)"
                                            >
                                                <tspan x="0" y="0">
                                                    $
                                                </tspan>
                                            </text>
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
                        <label>Best Egg</label>
                        <input
                            type="text"
                            value={data.best}
                            name="best"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.best_price}
                            name="best_price"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.best_price_alt}
                            name="best_price_alt"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Upstart</label>
                        <input
                            type="text"
                            value={data.upstart}
                            name="upstart"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.upstart_price}
                            name="upstart_price"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.upstart_price_alt}
                            name="upstart_price_alt"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                </div>
                </div>
             
            </div>

        </>
    )
}

export default View55