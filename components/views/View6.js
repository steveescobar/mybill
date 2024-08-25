"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from '@/utils/getPicture';
import Image from "next/image";
import { RobotoBaseEncoded } from "@/utils/encodedFonts/RobotoBaseEncoded";

const View6 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 6";

    const [data, setData] = useState({

        amount: "1779 USDT",
        submitted: "2023-08-02 15:17:44",
        processing: "(≈ 2 minutes)",
        fee: "1.00 USDT",
        time: "2023-08-02 15:17:44",
        network: "TRC20",
        withdrawal_account: "Finding Account",
        remarks: "--",
        address_account: "TjHbjW6WhcAwFJnmQHVg2XVF",
        address: "7kNAKTEQS"
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
            0.2,
            0.2,
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
                                viewBox="0 0 475 1027"
                            >
                                  <style>
                                    {
                                        RobotoBaseEncoded
                                    }
                                </style>
                                <g data-name="Group 16" transform="translate(-862 -27)">
                                    <path
                                        fill="#121212"
                                        d="M0 0H475V1027H0z"
                                        data-name="Rectangle 5"
                                        transform="translate(862 27)"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        d="M.47 70.714a1.148 1.148 0 000 1.815l7.591 6.41a1.725 1.725 0 002.149 0 1.148 1.148 0 000-1.815L5.2 72.9h14.559a1.3 1.3 0 100-2.564H5.209l5-4.222a1.148 1.148 0 000-1.815 1.725 1.725 0 00-2.149 0L.465 70.71z"
                                        transform="translate(887.975 34.268)"
                                    ></path>
                                    <g data-name="Group 6" letterSpacing="-.03em">
                                        <text
                                            fill="#565656"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="17"
                                            fontWeight="500"
                                            transform="translate(1071 155)"
                                        >
                                            <tspan x="0" y="0">
                                                Amount
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#f2f2f2"
                                            data-name="1779 USDT"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="32.5"
                                            transform="translate(1100 194)"
                                        >
                                            <tspan x="0" y="0" textAnchor='middle'>
                                                {data.amount}
                                            </tspan>
                                        </text>
                                    </g>
                                    <g data-name="Group 5">
                                        <rect
                                            width="438"
                                            height="200"
                                            fill="#161616"
                                            data-name="Rectangle 6"
                                            rx="22"
                                            transform="translate(881 226)"
                                        ></rect>
                                        <g data-name="Group 4" transform="translate(786 4)">
                                            <g
                                                fill="none"
                                                stroke="#479b7a"
                                                strokeWidth="1.5"
                                                data-name="Ellipse 2"
                                                transform="translate(140 309)"
                                            >
                                                <circle cx="9" cy="9" r="9" stroke="none"></circle>
                                                <circle cx="9" cy="9" r="8.25"></circle>
                                            </g>
                                            <g
                                                fill="none"
                                                stroke="#353535"
                                                strokeWidth="1.5"
                                                data-name="Ellipse 4"
                                                transform="translate(141 376)"
                                            >
                                                <circle cx="8.5" cy="8.5" r="8.5" stroke="none"></circle>
                                                <circle cx="8.5" cy="8.5" r="7.75"></circle>
                                            </g>
                                            <g
                                                fill="none"
                                                stroke="#479b7a"
                                                strokeWidth="1.5"
                                                data-name="Ellipse 3"
                                                transform="translate(138 237)"
                                            >
                                                <circle cx="11" cy="11" r="11" stroke="none"></circle>
                                                <circle cx="11" cy="11" r="10.25"></circle>
                                            </g>
                                            <path
                                                fill="none"
                                                stroke="#479b7a"
                                                strokeWidth="1.5"
                                                d="M0 0L0 50.5"
                                                data-name="Line 1"
                                                transform="translate(148.5 259)"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#353535"
                                                strokeWidth="1.5"
                                                d="M0 0L0 49"
                                                data-name="Line 2"
                                                transform="translate(148.5 327)"
                                            ></path>
                                            <path
                                                fill="#479b7a"
                                                d="M10.025 96.235a.7.7 0 010 1.014l-5.894 5.733a.753.753 0 01-1.043 0l-2.947-2.866a.7.7 0 010-1.014.753.753 0 011.043 0l2.427 2.358 5.374-5.224a.753.753 0 011.043 0z"
                                                transform="translate(144.075 148.392)"
                                            ></path>
                                        </g>
                                        <text
                                            fill="#f2f2f2"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="17"
                                            fontWeight="500"
                                            transform="translate(980 263)"
                                        >
                                            <tspan x="0" y="0">
                                                Submitted
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#f2f2f2"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="17"
                                            fontWeight="500"
                                            transform="translate(980 325)"
                                        >
                                            <tspan x="0" y="0">
                                                Processing
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#575757"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="17"
                                            fontWeight="500"
                                            transform="translate(981 390)"
                                        >
                                            <tspan x="0" y="0">
                                                Completed
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#575757"
                                            data-name="(~ 2 minutes)"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="16"
                                            fontWeight="400"
                                            transform="translate(1067 325)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.processing}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#575757"
                                            data-name="2023-08-02 15:17:44"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="16"
                                            fontWeight="400"
                                            transform="translate(980 285)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.submitted}
                                            </tspan>
                                        </text>
                                    </g>
                                    <g
                                        data-name="Group 7"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="16"
                                        fontWeight="500"
                                    >
                                        <text fill="#575757" transform="translate(888 458)">
                                            <tspan x="0" y="0">
                                                Fee
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e7e7e7"
                                            data-name="1.00 USDT"
                                            transform="translate(1315 457)"
                                        >
                                            <tspan x="0" y="0" textAnchor='end'>
                                                {data.fee}
                                            </tspan>
                                        </text>
                                    </g>
                                    <g
                                        data-name="Group 9"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="16"
                                        fontWeight="500"
                                        transform="translate(0 89)"
                                    >
                                        <text fill="#575757" transform="translate(888 458)">
                                            <tspan x="0" y="0">
                                                Network
                                            </tspan>
                                        </text>
                                        <text fill="#e7e7e7" transform="translate(1315 457)">
                                            <tspan x="0" y="0" textAnchor='end'>
                                                {data.network}
                                            </tspan>
                                        </text>
                                    </g>
                                    <g data-name="Group 11" transform="translate(0 179)">
                                        <text
                                            fill="#575757"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="16"
                                            fontWeight="500"
                                            transform="translate(888 458)"
                                        >
                                            <tspan x="0" y="0">
                                                Remarks
                                            </tspan>
                                        </text>
                                        <text fill="#e7e7e7" transform="translate(1315 457)">
                                            <tspan x="0" y="0" textAnchor='end'>
                                                {data.remarks}
                                            </tspan>
                                        </text>
                                        <text fill="#e7e7e7" transform="translate(1315 457)">
                                            <tspan x="0" y="100" textAnchor='end'>
                                                --
                                            </tspan>
                                        </text>
                                    </g>
                                    <g
                                        data-name="Group 8"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="16"
                                        fontWeight="500"
                                        transform="translate(0 45)"
                                    >
                                        <text fill="#575757" transform="translate(888 458)">
                                            <tspan x="0" y="0">
                                                Time
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e7e7e7"
                                            data-name="2023-08-02 15:17:44"
                                            transform="translate(1315 457)"
                                        >
                                            <tspan x="0" y="0" textAnchor='end'>
                                                {data.time}
                                            </tspan>
                                        </text>
                                    </g>
                                    <g
                                        data-name="Group 10"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="16"
                                        fontWeight="500"
                                        transform="translate(0 134)"
                                    >
                                        <text
                                            fill="#575757"
                                            data-name="Withdrawal Account"
                                            transform="translate(888 458)"
                                        >
                                            <tspan x="0" y="0">
                                                Withdrawal Account
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e7e7e7"
                                            data-name="Finding Account"
                                            transform="translate(1315 457)"
                                        >
                                            <tspan x="0" y="0" textAnchor='end'>
                                                {data.withdrawal_account}
                                            </tspan>
                                        </text>
                                    </g>
                                    <g data-name="Group 14">
                                        <g data-name="Group 13" transform="translate(3 275)">
                                            <text
                                                fill="#575757"
                                                data-name="--"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="16"
                                                fontWeight="500"
                                                transform="translate(888 458)"
                                            >
                                                <tspan x="0" y="0">
                                                    --
                                                </tspan>
                                            </text>
                                        </g>
                                    </g>
                                    <g
                                        data-name="Group 12"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="16"
                                        fontWeight="500"
                                        transform="translate(0 225)"
                                    >
                                        <text
                                            fill="#575757"
                                            data-name="Address/ Account"
                                            transform="translate(888 458)"
                                        >
                                            <tspan x="0" y="0">
                                                Address/ Account
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e7e7e7"
                                            data-name="TjHbjW6WhcAwFJnmQHV4g2XVF"
                                            transform="translate(1295 458)"
                                        >
                                            <tspan x="0" y="0" textAnchor='end'>
                                                {data.address_account}
                                            </tspan>

                                            <tspan x="0" y="21" textAnchor='end'>
                                                {" "}
                                                {data.address}
                                            </tspan>
                                        </text>
                                    </g>

                                    <g
                                        fill="none"
                                        stroke="rgba(241,241,241,0.32)"
                                        strokeWidth="2"
                                        data-name="Group 15"
                                        transform="translate(764.534 -3)"
                                    >
                                        <g data-name="Rectangle 7" transform="translate(538 678)">
                                            <path stroke="none" d="M0 0H14V14H0z"></path>
                                            <path d="M1 1H13V13H1z"></path>
                                        </g>
                                        <path
                                            d="M554.4 681.463c.159 13.227 0 13.068 0 13.068h-12.913"
                                            data-name="Path 1"
                                        ></path>
                                    </g>
                                </g>
                             {
                                isIOS
                                ?
                                <>
                                   <rect
                                    width="180"
                                    height="6"
                                    fill="#fff"
                                    rx="3"
                                    x="0"
                                    y="0"
                                    transform="translate(150 1015)"
                                ></rect>
                                </>
                                :
                                <></>
                             }
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
                            <label>Submitted</label>
                            <input
                                type="text"
                                value={data.submitted}
                                name="submitted"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Processing</label>
                            <input
                                type="text"
                                value={data.processing}
                                name="processing"
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
                            <label>Time</label>
                            <input
                                type="text"
                                value={data.time}
                                name="time"
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
                            <label>Withdrawal Account</label>
                            <input
                                type="text"
                                value={data.withdrawal_account}
                                name="withdrawal_account"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Remarks</label>
                            <input
                                type="text"
                                value={data.remarks}
                                name="remarks"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Address/ Account</label>
                            <input
                                type="text"
                                value={data.address_account}
                                name="address_account"
                                onChange={(e) => onChangeHandler(e)}
                            />

                        </div>
                        <div className="global_form_inner">
                            <label>Address/ Account</label>
                            <input
                                type="text"
                                value={data.address}
                                name="address"
                                onChange={(e) => onChangeHandler(e)}
                            />

                        </div>


                    </div>
                </div>
            </div >
        </>
    )
}

export default View6