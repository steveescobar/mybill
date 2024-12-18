"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import getPicture from "@/utils/getPicture";
import Image from "next/image";
import Page93Icons from "../options/Page93Icons";
import { OpenSansEncoded } from "@/utils/encodedFonts/OpenSansEncoded";

const View110 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 110";

    const [data, setData] = useState({

        status1: "Pending",
        status2: "Pending",
        date1: "DEC 16 2024",
        date2: "DEC 16 2024",
        date3: "DEC 16 2024",
        date4: "DEC 13 2024",
        date5: "DEC 13 2024",
        date6: "DEC 13 2024",
        info1: "DBT HOLD - CRYPTO.COM",
        info2: "DBT HOLD - CRYPTO.COM",
        info3: "DBT PURCHASE ON 12/16 @",
        info4: "09:31 6051 crypto.com 1111",
        info5: "DBT PURCHASE ON 12/15 @",
        info6: "07:09 6051 CRYPTO.COM 251",
        info7: "POS PURCHASE ON 12/15 @",
        info8: "21:14 7299 CASH APP*WILLI",
        info9: "CJAR TFR TO SV#********1758",
        info10: "PAYMENT CREDIT P2P @ 236536",
        info11: "CASH APP*WILLI CASH",
        info12: "POS PURCHASE ON 12/13 @",
        info13: "16:14 7299 CASH APP*WILLI",
        amount1: "– $980.00",
        amount2: "– $700.00",
        amount3: "– $700.00",
        amount4: "$4,269.97",
        amount5: "– $300.00",
        amount6: "$4,569.97",
        amount7: "– $1,000.00",
        amount8: "$4,869.97",
        amount9: "– $1.00",
        amount10: "$5,869.97",
        amount11: "+ $239.62",
        amount12: "$4,869.97",
        amount13: "– $245.00",
        amount14: "$5,631.35",
    });

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const [imageDimension, setImageDimension] = useState("50");

    const [time, setTime] = useState("9:34");
    const [network, setNetwork] = useState(4);
    const [net, setNet] = useState("wifi");
    const [isBattery, setIsBattery] = useState(false);
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
            0,
            0.2,
            0
        );
    }

    const manageTimeDate = () => {
        const now = new Date();
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-US', options);

        return setData({
            ...data,
            date: formattedDate
        });
    };


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
                                viewBox="0 0 591 1280"
                            >
                                <style>
                                    {OpenSansEncoded}
                                </style>
                                <g id="Group_1" data-name="Group 1" transform="translate(-1404 -169)">
                                    <path
                                        id="Rectangle_1"
                                        fill="#fff"
                                        d="M0 0h591v1280H0z"
                                        data-name="Rectangle 1"
                                        transform="translate(1404 169)"
                                    ></path>
                                    <path
                                        id="Line_1"
                                        fill="none"
                                        stroke="rgba(112,112,112,0.35)"
                                        strokeWidth="1"
                                        d="M0 0h591"
                                        data-name="Line 1"
                                        transform="translate(1404 292.5)"
                                    ></path>
                                    <path
                                        id="Line_2"
                                        fill="none"
                                        stroke="#0979b2"
                                        strokeWidth="5"
                                        d="M0 0h138"
                                        data-name="Line 2"
                                        transform="translate(1414.5 289.5)"
                                    ></path>
                                    <text
                                        id="Transactions"
                                        fill="#0979b2"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="21"
                                        fontWeight="500"
                                        transform="translate(1421 265)"
                                    >
                                        <tspan x="0" y="0">
                                            Transactions
                                        </tspan>
                                    </text>
                                    <text
                                        id="Details_Settings"
                                        fill="#3b3b3b"
                                        data-name="Details &amp; Settings"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="21"
                                        fontWeight="500"
                                        transform="translate(1569 265)"
                                    >
                                        <tspan x="0" y="0">
                                            Details &amp; Settings
                                        </tspan>
                                    </text>
                                    <path
                                        id="Path_1"
                                        fill="#3b3b3b"
                                        stroke="#3b3b3b"
                                        strokeWidth="1"
                                        d="M0 13.559a13.5 13.5 0 0 0 22.465 10.106l8.61 8.61a.816.816 0 0 0 1.157-1.15l-8.616-8.61A13.507 13.507 0 1 0 0 13.559Zm25.39 0a11.881 11.881 0 1 1-11.881-11.88 11.9 11.9 0 0 1 11.881 11.88Z"
                                        data-name="Path 1"
                                        transform="translate(1798 325.945)"
                                    ></path>
                                    <path
                                        id="Path_2"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.1"
                                        d="M1235.826 326.981h31.039l-11.66 15.6v15.6h-7.062v-15.6Z"
                                        data-name="Path 2"
                                        transform="translate(634 -.355)"
                                    ></path>
                                    <path
                                        id="Path_3"
                                        fill="#3b3b3b"
                                        fillRule="evenodd"
                                        stroke="#3b3b3b"
                                        strokeLinecap="round"
                                        strokeWidth="1.5"
                                        d="M5.419 2.34V0h.688v2.34a6.4 6.4 0 0 1 1.515.254A4.36 4.36 0 0 1 9.66 3.873a5.4 5.4 0 0 1 1.246 3.52q.006.158.006.315h-.676a6 6 0 0 0-.17-1.478 4.34 4.34 0 0 0-1.037-1.944A4 4 0 0 0 6.75 3.077a6 6 0 0 0-1.019-.086 6 6 0 0 0-1.38.147 4.15 4.15 0 0 0-1.867.942 3.56 3.56 0 0 0-1.215 2.6v.213a6 6 0 0 0 .044.75 3.2 3.2 0 0 0 .363 1.19 3 3 0 0 0 .5.64 4.7 4.7 0 0 0 .852.655 13.3 13.3 0 0 0 2.5 1.116l.155.054q.4.139.807.286a18 18 0 0 1 1.821.759 7 7 0 0 1 .835.493 5 5 0 0 1 .679.565 4 4 0 0 1 .751 1.022q.079.155.143.316a4 4 0 0 1 .225.831 5.7 5.7 0 0 1 .069.908 5 5 0 0 1-.214 1.491A4 4 0 0 1 9.717 19.7a4.75 4.75 0 0 1-2.051 1.133 7 7 0 0 1-1.422.225v2.352h-.688v-2.34a8.4 8.4 0 0 1-1.673-.221 5.17 5.17 0 0 1-2.431-1.286 4.64 4.64 0 0 1-1.306-2.418A7 7 0 0 1 0 15.691h.676a5.7 5.7 0 0 0 .179 1.468 4.03 4.03 0 0 0 1.2 2A4.64 4.64 0 0 0 4.051 20.2a7 7 0 0 0 1.529.2h.239a5.6 5.6 0 0 0 1.509-.193 4.3 4.3 0 0 0 1.732-.933 3.8 3.8 0 0 0 .927-1.193 3.6 3.6 0 0 0 .35-1.585 5 5 0 0 0-.061-.8 3.4 3.4 0 0 0-.231-.807 3 3 0 0 0-.14-.278 4.1 4.1 0 0 0-1.458-1.37 16.4 16.4 0 0 0-3.034-1.32q-.528-.181-1.046-.388a10 10 0 0 1-1.913-.964 5 5 0 0 1-.805-.688 3.7 3.7 0 0 1-.96-1.871 5.4 5.4 0 0 1-.1-.945V6.92A5 5 0 0 1 .8 5.423a4 4 0 0 1 1.127-1.776 4.83 4.83 0 0 1 2.285-1.16 6.7 6.7 0 0 1 1.207-.147Z"
                                        data-name="Path 3"
                                        transform="translate(1944 330.532)"
                                    ></path>
                                    <path
                                        id="arrow-right-line-svgrepo-com"
                                        fill="#3b3b3b"
                                        stroke="#3b3b3b"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                        d="M17.061 11.169 11.892 6m5.169 5.169-5.169 5.169m5.169-5.169H5"
                                        transform="translate(1953.5 324.511)"
                                    ></path>
                                    <path
                                        id="arrow-right-line-svgrepo-com-2"
                                        fill="#3b3b3b"
                                        stroke="#3b3b3b"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                        d="M5 11.169 10.169 6M5 11.169l5.169 5.169M5 11.169h12.061"
                                        data-name="arrow-right-line-svgrepo-com"
                                        transform="translate(1953.5 337.606)"
                                    ></path>
                                    <path
                                        id="Rectangle_2"
                                        fill="#fff"
                                        d="M0 0h591v108.5H0z"
                                        data-name="Rectangle 2"
                                        transform="translate(1404 374)"
                                    ></path>
                                    <text
                                        id="Pending"
                                        fill="#c50b23"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="18.5"
                                        fontWeight="600"
                                        transform="translate(1411.5 402)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.status1}
                                        </tspan>
                                    </text>
                                    <text
                                        id="DBT_HOLD_-_CRYPTO.COM"
                                        fill="#6e6e6e"
                                        data-name="DBT HOLD - CRYPTO.COM"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="500"
                                        transform="translate(1411.5 448)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.info1}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_980.00"
                                        fill="#3b3b3b"
                                        data-name="– $980.00"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="600"
                                        transform="translate(1915 448)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.amount1}
                                        </tspan>
                                    </text>
                                    <path
                                        id="three-dots-vertical-svgrepo-com"
                                        fill="#3b3b3b"
                                        d="M13.344 27.735a3.422 3.422 0 1 1-3.422-3.422 3.42 3.42 0 0 1 3.422 3.422m0-11.406a3.422 3.422 0 1 1-3.422-3.422 3.42 3.42 0 0 1 3.422 3.421Zm0-11.406A3.422 3.422 0 1 1 9.922 1.5a3.42 3.42 0 0 1 3.422 3.422Z"
                                        transform="translate(1944 423.672)"
                                    ></path>
                                    <path
                                        id="Line_3"
                                        fill="none"
                                        stroke="#d1d1d1"
                                        strokeWidth="1.5"
                                        d="M0 0h591"
                                        data-name="Line 3"
                                        transform="translate(1404 482.5)"
                                    ></path>
                                    <path
                                        id="Rectangle_2-2"
                                        fill="#fff"
                                        d="M0 0h591v108.5H0z"
                                        data-name="Rectangle 2"
                                        transform="translate(1404 483.5)"
                                    ></path>
                                    <text
                                        id="Pending-2"
                                        fill="#c50b23"
                                        data-name="Pending"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="18.5"
                                        fontWeight="600"
                                        transform="translate(1411.5 511.5)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.status2}
                                        </tspan>
                                    </text>
                                    <text
                                        id="DBT_HOLD_-_CRYPTO.COM-2"
                                        fill="#6e6e6e"
                                        data-name="DBT HOLD - CRYPTO.COM"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="500"
                                        transform="translate(1411.5 557.5)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.info2}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_700.00"
                                        fill="#3b3b3b"
                                        data-name="– $700.00"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="600"
                                        transform="translate(1915 557.5)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.amount2}
                                        </tspan>
                                    </text>
                                    <path
                                        id="three-dots-vertical-svgrepo-com-2"
                                        fill="#3b3b3b"
                                        d="M13.344 27.735a3.422 3.422 0 1 1-3.422-3.422 3.42 3.42 0 0 1 3.422 3.422m0-11.406a3.422 3.422 0 1 1-3.422-3.422 3.42 3.42 0 0 1 3.422 3.421Zm0-11.406A3.422 3.422 0 1 1 9.922 1.5a3.42 3.42 0 0 1 3.422 3.422Z"
                                        data-name="three-dots-vertical-svgrepo-com"
                                        transform="translate(1944 533.172)"
                                    ></path>
                                    <path
                                        id="Line_3-2"
                                        fill="none"
                                        stroke="#d1d1d1"
                                        strokeWidth="1.5"
                                        d="M0 0h591"
                                        data-name="Line 3"
                                        transform="translate(1404 592)"
                                    ></path>
                                    <path
                                        id="Rectangle_2-3"
                                        fill="#fff"
                                        d="M0 0h591v108.5H0z"
                                        data-name="Rectangle 2"
                                        transform="translate(1404 809)"
                                    ></path>
                                    <text
                                        id="DEC_16_2024"
                                        fill="#3b3b3b"
                                        data-name="DEC 16 2024"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="18.5"
                                        fontWeight="600"
                                        transform="translate(1411.5 838)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.date3}
                                        </tspan>
                                    </text>
                                    <text
                                        id="POS_PURCHASE_ON_12_15_"
                                        fill="#6e6e6e"
                                        data-name="POS PURCHASE ON 12/15 @"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="500"
                                        transform="translate(1411.5 869)"
                                    >
                                        <tspan xmlSpace="preserve" x="0" y="0" textAnchor="start">
                                            {data.info7}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_21:14_7299_CASH_APP_WILLI"
                                        fill="#6e6e6e"
                                        data-name="21:14 7299 CASH APP*WILLI"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="500"
                                        transform="translate(1411.5 901)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.info8}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_1_000.00"
                                        fill="#3b3b3b"
                                        data-name="– $1,000.00"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="600"
                                        transform="translate(1915 869)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.amount7}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_4_869.97"
                                        fill="#6e6e6e"
                                        data-name="$4,869.97"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="18.5"
                                        fontWeight="500"
                                        transform="translate(1915 900)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.amount8}
                                        </tspan>
                                    </text>
                                    <path
                                        id="three-dots-vertical-svgrepo-com-3"
                                        fill="#3b3b3b"
                                        d="M13.344 27.735a3.422 3.422 0 1 1-3.422-3.422 3.42 3.42 0 0 1 3.422 3.422m0-11.406a3.422 3.422 0 1 1-3.422-3.422 3.42 3.42 0 0 1 3.422 3.421Zm0-11.406A3.422 3.422 0 1 1 9.922 1.5a3.42 3.42 0 0 1 3.422 3.422Z"
                                        data-name="three-dots-vertical-svgrepo-com"
                                        transform="translate(1944 858.672)"
                                    ></path>
                                    <path
                                        id="Line_3-3"
                                        fill="none"
                                        stroke="#d1d1d1"
                                        strokeWidth="1.5"
                                        d="M0 0h591"
                                        data-name="Line 3"
                                        transform="translate(1404 917.5)"
                                    ></path>
                                    <path
                                        id="Rectangle_2-4"
                                        fill="#fff"
                                        d="M0 0h591v108.5H0z"
                                        data-name="Rectangle 2"
                                        transform="translate(1404 1134.5)"
                                    ></path>
                                    <text
                                        id="DEC_13_2024"
                                        fill="#3b3b3b"
                                        data-name="DEC 13 2024"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="18.5"
                                        fontWeight="600"
                                        transform="translate(1411.5 1163.5)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.date6}
                                        </tspan>
                                    </text>
                                    <text
                                        id="POS_PURCHASE_ON_12_13_"
                                        fill="#6e6e6e"
                                        data-name="POS PURCHASE ON 12/13 @"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="500"
                                        transform="translate(1411.5 1194.5)"
                                    >
                                        <tspan xmlSpace="preserve" x="0" y="0" textAnchor="start">
                                            {data.info12}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_16:14_7299_CASH_APP_WILLI"
                                        fill="#6e6e6e"
                                        data-name="16:14 7299 CASH APP*WILLI"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="500"
                                        transform="translate(1411.5 1226.5)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.info13}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_245.00"
                                        fill="#3b3b3b"
                                        data-name="– $245.00"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="600"
                                        transform="translate(1915 1194.5)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.amount13}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_5_631.35"
                                        fill="#6e6e6e"
                                        data-name="$5,631.35"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="18.5"
                                        fontWeight="500"
                                        transform="translate(1915 1225.5)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.amount14}
                                        </tspan>
                                    </text>
                                    <path
                                        id="three-dots-vertical-svgrepo-com-4"
                                        fill="#3b3b3b"
                                        d="M13.344 27.735a3.422 3.422 0 1 1-3.422-3.422 3.42 3.42 0 0 1 3.422 3.422m0-11.406a3.422 3.422 0 1 1-3.422-3.422 3.42 3.42 0 0 1 3.422 3.421Zm0-11.406A3.422 3.422 0 1 1 9.922 1.5a3.42 3.42 0 0 1 3.422 3.422Z"
                                        data-name="three-dots-vertical-svgrepo-com"
                                        transform="translate(1944 1184.172)"
                                    ></path>
                                    <path
                                        id="Line_3-4"
                                        fill="none"
                                        stroke="#d1d1d1"
                                        strokeWidth="1.5"
                                        d="M0 0h591"
                                        data-name="Line 3"
                                        transform="translate(1404 1243)"
                                    ></path>
                                    <path
                                        id="Rectangle_2-5"
                                        fill="#fff"
                                        d="M0 0h591v108.5H0z"
                                        data-name="Rectangle 2"
                                        transform="translate(1404 1026)"
                                    ></path>
                                    <text
                                        id="DEC_13_2024-2"
                                        fill="#3b3b3b"
                                        data-name="DEC 13 2024"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="18.5"
                                        fontWeight="600"
                                        transform="translate(1411.5 1055)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.date5}
                                        </tspan>
                                    </text>
                                    <text
                                        id="PAYMENT_CREDIT_P2P_236536"
                                        fill="#6e6e6e"
                                        data-name="PAYMENT CREDIT P2P @ 236536"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="500"
                                        transform="translate(1411.5 1086)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.info10}
                                        </tspan>
                                    </text>
                                    <text
                                        id="CASH_APP_WILLI_CASH"
                                        fill="#6e6e6e"
                                        data-name="CASH APP*WILLI CASH"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="500"
                                        transform="translate(1411.5 1118)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.info11}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_239.62"
                                        fill="#218a13"
                                        data-name="+ $239.62"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="600"
                                        transform="translate(1915 1086)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.amount11}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_4_869.97-2"
                                        fill="#6e6e6e"
                                        data-name="$4,869.97"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="18.5"
                                        fontWeight="500"
                                        transform="translate(1915 1117)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.amount12}
                                        </tspan>
                                    </text>
                                    <path
                                        id="three-dots-vertical-svgrepo-com-5"
                                        fill="#3b3b3b"
                                        d="M13.344 27.735a3.422 3.422 0 1 1-3.422-3.422 3.42 3.42 0 0 1 3.422 3.422m0-11.406a3.422 3.422 0 1 1-3.422-3.422 3.42 3.42 0 0 1 3.422 3.421Zm0-11.406A3.422 3.422 0 1 1 9.922 1.5a3.42 3.42 0 0 1 3.422 3.422Z"
                                        data-name="three-dots-vertical-svgrepo-com"
                                        transform="translate(1944 1075.672)"
                                    ></path>
                                    <path
                                        id="Line_3-5"
                                        fill="none"
                                        stroke="#d1d1d1"
                                        strokeWidth="1.5"
                                        d="M0 0h591"
                                        data-name="Line 3"
                                        transform="translate(1404 1134.5)"
                                    ></path>
                                    <path
                                        id="Path_4"
                                        fill="rgba(255,255,255,0)"
                                        d="M0 0h591v108.5H0Z"
                                        data-name="Path 4"
                                        transform="translate(1404 917.5)"
                                    ></path>
                                    <text
                                        id="DEC_13_2024-3"
                                        fill="#3b3b3b"
                                        data-name="DEC 13 2024"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="18.5"
                                        fontWeight="600"
                                        transform="translate(1411.5 946.5)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.date4}
                                        </tspan>
                                    </text>
                                    <text
                                        id="CJAR_TFR_TO_SV_1758"
                                        fill="#6e6e6e"
                                        data-name="CJAR TFR TO SV#********1758"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="500"
                                        transform="translate(1411.5 988.5)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.info9}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_1.00"
                                        fill="#3b3b3b"
                                        data-name="– $1.00"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="600"
                                        transform="translate(1915 977.5)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.amount9}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_5_869.97"
                                        fill="#6e6e6e"
                                        data-name="$5,869.97"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="18.5"
                                        fontWeight="500"
                                        transform="translate(1915 1008.5)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.amount10}
                                        </tspan>
                                    </text>
                                    <path
                                        id="three-dots-vertical-svgrepo-com-6"
                                        fill="#3b3b3b"
                                        d="M13.344 27.735a3.422 3.422 0 1 1-3.422-3.422 3.42 3.42 0 0 1 3.422 3.422m0-11.406a3.422 3.422 0 1 1-3.422-3.422 3.42 3.42 0 0 1 3.422 3.421Zm0-11.406A3.422 3.422 0 1 1 9.922 1.5a3.42 3.42 0 0 1 3.422 3.422Z"
                                        data-name="three-dots-vertical-svgrepo-com"
                                        transform="translate(1944 967.172)"
                                    ></path>
                                    <path
                                        id="Line_3-6"
                                        fill="none"
                                        stroke="#d1d1d1"
                                        strokeWidth="1.5"
                                        d="M0 0h591"
                                        data-name="Line 3"
                                        transform="translate(1404 1026)"
                                    ></path>
                                    <path
                                        id="Line_3-7"
                                        fill="none"
                                        stroke="#d1d1d1"
                                        strokeWidth="1.5"
                                        d="M0 0h591"
                                        data-name="Line 3"
                                        transform="translate(1404 694.5)"
                                    ></path>
                                    <path
                                        id="Rectangle_2-6"
                                        fill="#f2f2f2"
                                        d="M0 0h591v108.5H0z"
                                        data-name="Rectangle 2"
                                        transform="translate(1404 593)"
                                    ></path>
                                    <text
                                        id="DEC_16_2024-2"
                                        fill="#3b3b3b"
                                        data-name="DEC 16 2024"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="18.5"
                                        fontWeight="600"
                                        transform="translate(1411.5 622)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.date1}
                                        </tspan>
                                    </text>
                                    <text
                                        id="DBT_PURCHASE_ON_12_16_"
                                        fill="#6e6e6e"
                                        data-name="DBT PURCHASE ON 12/16 @"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="500"
                                        transform="translate(1411.5 653)"
                                    >
                                        <tspan xmlSpace="preserve" x="0" y="0" textAnchor="start">
                                            {data.info3}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_09:31_6051_crypto.com_1111"
                                        fill="#6e6e6e"
                                        data-name="09:31 6051 crypto.com 1111"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="500"
                                        transform="translate(1411.5 685)"
                                    >
                                        <tspan xmlSpace="preserve" x="0" y="0" textAnchor="start">
                                            {data.info4}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_700.00-2"
                                        fill="#3b3b3b"
                                        data-name="– $700.00"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="600"
                                        transform="translate(1915 653)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.amount3}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_4_269.97"
                                        fill="#6e6e6e"
                                        data-name="$4,269.97"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="18.5"
                                        fontWeight="500"
                                        transform="translate(1915 684)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.amount4}
                                        </tspan>
                                    </text>
                                    <rect
                                        id="Rectangle_3"
                                        width="63"
                                        height="64"
                                        fill="#e6e6e6"
                                        data-name="Rectangle 3"
                                        rx="5"
                                        transform="translate(1923 628)"
                                    ></rect>
                                    <path
                                        id="three-dots-vertical-svgrepo-com-7"
                                        fill="#005581"
                                        d="M13.344 27.735a3.422 3.422 0 1 1-3.422-3.422 3.42 3.42 0 0 1 3.422 3.422m0-11.406a3.422 3.422 0 1 1-3.422-3.422 3.42 3.42 0 0 1 3.422 3.421Zm0-11.406A3.422 3.422 0 1 1 9.922 1.5a3.42 3.42 0 0 1 3.422 3.422Z"
                                        data-name="three-dots-vertical-svgrepo-com"
                                        transform="translate(1945 643.672)"
                                    ></path>
                                    <path
                                        id="Path_5"
                                        fill="none"
                                        stroke="#d1d1d1"
                                        strokeWidth="1.5"
                                        d="M0 0h591"
                                        data-name="Path 5"
                                        transform="translate(1404 700)"
                                    ></path>
                                    <path
                                        id="Rectangle_2-7"
                                        fill="#fff"
                                        d="M0 0h591v108.5H0z"
                                        data-name="Rectangle 2"
                                        transform="translate(1404 700.5)"
                                    ></path>
                                    <text
                                        id="DEC_16_2024-3"
                                        fill="#3b3b3b"
                                        data-name="DEC 16 2024"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="18.5"
                                        fontWeight="600"
                                        transform="translate(1411.5 729.5)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.date2}
                                        </tspan>
                                    </text>
                                    <text
                                        id="DBT_PURCHASE_ON_12_15_"
                                        fill="#6e6e6e"
                                        data-name="DBT PURCHASE ON 12/15 @"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="500"
                                        transform="translate(1411.5 760.5)"
                                    >
                                        <tspan xmlSpace="preserve" x="0" y="0" textAnchor="start">
                                            {data.info5}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_07:09_6051_CRYPTO.COM_251"
                                        fill="#6e6e6e"
                                        data-name="07:09 6051 CRYPTO.COM 251"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="500"
                                        transform="translate(1411.5 792.5)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.info6}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_300.00"
                                        fill="#3b3b3b"
                                        data-name="– $300.00"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="20.7"
                                        fontWeight="600"
                                        transform="translate(1915 760.5)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.amount5}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_4_569.97"
                                        fill="#6e6e6e"
                                        data-name="$4,569.97"
                                        fontFamily="OpenSans-Medium, Open Sans"
                                        fontSize="18.5"
                                        fontWeight="500"
                                        transform="translate(1915 791.5)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.amount6}
                                        </tspan>
                                    </text>
                                    <path
                                        id="three-dots-vertical-svgrepo-com-8"
                                        fill="#3b3b3b"
                                        d="M13.344 27.735a3.422 3.422 0 1 1-3.422-3.422 3.42 3.42 0 0 1 3.422 3.422m0-11.406a3.422 3.422 0 1 1-3.422-3.422 3.42 3.42 0 0 1 3.422 3.421Zm0-11.406A3.422 3.422 0 1 1 9.922 1.5a3.42 3.42 0 0 1 3.422 3.422Z"
                                        data-name="three-dots-vertical-svgrepo-com"
                                        transform="translate(1944 750.172)"
                                    ></path>
                                    <path
                                        id="Line_3-8"
                                        fill="none"
                                        stroke="#d1d1d1"
                                        strokeWidth="1.5"
                                        d="M0 0h591"
                                        data-name="Line 3"
                                        transform="translate(1404 809)"
                                    ></path>
                                    <path
                                        id="Rectangle_4"
                                        fill="#fff"
                                        d="M0 0h591v211H0z"
                                        data-name="Rectangle 4"
                                        transform="translate(1404 1238)"
                                    ></path>
                                    <path
                                        id="Line_4"
                                        fill="none"
                                        stroke="#c6c6c6"
                                        strokeWidth="2.5"
                                        d="M0 0h591"
                                        data-name="Line 4"
                                        transform="translate(1404 1238)"
                                    ></path>
                                    <path
                                        id="Rectangle_5"
                                        fill="#003970"
                                        d="M0 0h591v52H0z"
                                        data-name="Rectangle 5"
                                        transform="translate(1404 1397)"
                                    ></path>
                                    <rect
                                        id="Rectangle_6"
                                        width="209"
                                        height="7"
                                        fill="#fff"
                                        data-name="Rectangle 6"
                                        rx="3.5"
                                        transform="translate(1595 1430)"
                                    ></rect>
                                    <path
                                        id="Path_10"
                                        fill="rgba(255,255,255,0)"
                                        d="M0 0h30.916v30.916H0Z"
                                        data-name="Path 10"
                                        transform="translate(1448 1258.084)"
                                    ></path>
                                    <path
                                        id="Path_6"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeWidth="2"
                                        d="m851.344 1244.556 15.836-13.94 14.957 13.94"
                                        data-name="Path 6"
                                        transform="translate(596.717 27.965)"
                                    ></path>
                                    <path
                                        id="Path_7"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeWidth="2"
                                        d="M879 1242.066v18.572l-8.922-.156v-7.856h-5.918v7.856l-8.8-.118v-18.3"
                                        data-name="Path 7"
                                        transform="translate(596.286 27.242)"
                                    ></path>
                                    <path
                                        id="Path_8"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeWidth="2"
                                        d="M863.908 1244.358h5.735v4.552h-5.735Z"
                                        data-name="Path 8"
                                        transform="translate(596.682 26.908)"
                                    ></path>
                                    <path
                                        id="Path_9"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeWidth="2"
                                        d="M856.62 1241.909v-7.492h3.824v4.305"
                                        data-name="Path 9"
                                        transform="translate(596.206 26.255)"
                                    ></path>
                                    <path
                                        id="Path_10-2"
                                        fill="rgba(255,255,255,0)"
                                        d="M0 0h30.916v30.916H0Z"
                                        data-name="Path 10"
                                        transform="translate(1566.084 1258.084)"
                                    ></path>
                                    <path
                                        id="Path_3-2"
                                        fill="#3b3b3b"
                                        fillRule="evenodd"
                                        stroke="#3b3b3b"
                                        strokeLinecap="round"
                                        strokeWidth="0.945"
                                        d="M5.419 2.34V0h.688v2.34a6.4 6.4 0 0 1 1.515.254A4.36 4.36 0 0 1 9.66 3.873a5.4 5.4 0 0 1 1.246 3.52q.006.158.006.315h-.676a6 6 0 0 0-.17-1.478 4.34 4.34 0 0 0-1.037-1.944A4 4 0 0 0 6.75 3.077a6 6 0 0 0-1.019-.086 6 6 0 0 0-1.38.147 4.15 4.15 0 0 0-1.867.942 3.56 3.56 0 0 0-1.215 2.6v.213a6 6 0 0 0 .044.75 3.2 3.2 0 0 0 .363 1.19 3 3 0 0 0 .5.64 4.7 4.7 0 0 0 .852.655 13.3 13.3 0 0 0 2.5 1.116l.155.054q.4.139.807.286a18 18 0 0 1 1.821.759 7 7 0 0 1 .835.493 5 5 0 0 1 .679.565 4 4 0 0 1 .751 1.022q.079.155.143.316a4 4 0 0 1 .225.831 5.7 5.7 0 0 1 .069.908 5 5 0 0 1-.214 1.491A4 4 0 0 1 9.717 19.7a4.75 4.75 0 0 1-2.051 1.133 7 7 0 0 1-1.422.225v2.352h-.688v-2.34a8.4 8.4 0 0 1-1.673-.221 5.17 5.17 0 0 1-2.431-1.286 4.64 4.64 0 0 1-1.306-2.418A7 7 0 0 1 0 15.691h.676a5.7 5.7 0 0 0 .179 1.468 4.03 4.03 0 0 0 1.2 2A4.64 4.64 0 0 0 4.051 20.2a7 7 0 0 0 1.529.2h.239a5.6 5.6 0 0 0 1.509-.193 4.3 4.3 0 0 0 1.732-.933 3.8 3.8 0 0 0 .927-1.193 3.6 3.6 0 0 0 .35-1.585 5 5 0 0 0-.061-.8 3.4 3.4 0 0 0-.231-.807 3 3 0 0 0-.14-.278 4.1 4.1 0 0 0-1.458-1.37 16.4 16.4 0 0 0-3.034-1.32q-.528-.181-1.046-.388a10 10 0 0 1-1.913-.964 5 5 0 0 1-.805-.688 3.7 3.7 0 0 1-.96-1.871 5.4 5.4 0 0 1-.1-.945V6.92A5 5 0 0 1 .8 5.423a4 4 0 0 1 1.127-1.776 4.83 4.83 0 0 1 2.285-1.16 6.7 6.7 0 0 1 1.207-.147Z"
                                        data-name="Path 3"
                                        transform="translate(1568.261 1261.847)"
                                    ></path>
                                    <path
                                        id="arrow-right-line-svgrepo-com-3"
                                        fill="#3b3b3b"
                                        stroke="#3b3b3b"
                                        strokeLinecap="round"
                                        strokeWidth="1.5"
                                        d="M17.061 11.169 11.892 6m5.169 5.169-5.169 5.169m5.169-5.169H5"
                                        data-name="arrow-right-line-svgrepo-com"
                                        transform="translate(1577.761 1255.825)"
                                    ></path>
                                    <path
                                        id="arrow-right-line-svgrepo-com-4"
                                        fill="#3b3b3b"
                                        stroke="#3b3b3b"
                                        strokeLinecap="round"
                                        strokeWidth="1.5"
                                        d="M5 11.169 10.169 6M5 11.169l5.169 5.169M5 11.169h12.061"
                                        data-name="arrow-right-line-svgrepo-com"
                                        transform="translate(1577.761 1268.92)"
                                    ></path>
                                    <path
                                        id="Path_10-3"
                                        fill="rgba(255,255,255,0)"
                                        d="M0 0h30.916v30.916H0Z"
                                        data-name="Path 10"
                                        transform="translate(1566.084 1258.084)"
                                    ></path>
                                    <path
                                        id="Path_3-3"
                                        fill="#3b3b3b"
                                        fillRule="evenodd"
                                        stroke="#3b3b3b"
                                        strokeLinecap="round"
                                        strokeWidth="1.2"
                                        d="M5.419 2.34V0h.688v2.34a6.4 6.4 0 0 1 1.515.254A4.36 4.36 0 0 1 9.66 3.873a5.4 5.4 0 0 1 1.246 3.52q.006.158.006.315h-.676a6 6 0 0 0-.17-1.478 4.34 4.34 0 0 0-1.037-1.944A4 4 0 0 0 6.75 3.077a6 6 0 0 0-1.019-.086 6 6 0 0 0-1.38.147 4.15 4.15 0 0 0-1.867.942 3.56 3.56 0 0 0-1.215 2.6v.213a6 6 0 0 0 .044.75 3.2 3.2 0 0 0 .363 1.19 3 3 0 0 0 .5.64 4.7 4.7 0 0 0 .852.655 13.3 13.3 0 0 0 2.5 1.116l.155.054q.4.139.807.286a18 18 0 0 1 1.821.759 7 7 0 0 1 .835.493 5 5 0 0 1 .679.565 4 4 0 0 1 .751 1.022q.079.155.143.316a4 4 0 0 1 .225.831 5.7 5.7 0 0 1 .069.908 5 5 0 0 1-.214 1.491A4 4 0 0 1 9.717 19.7a4.75 4.75 0 0 1-2.051 1.133 7 7 0 0 1-1.422.225v2.352h-.688v-2.34a8.4 8.4 0 0 1-1.673-.221 5.17 5.17 0 0 1-2.431-1.286 4.64 4.64 0 0 1-1.306-2.418A7 7 0 0 1 0 15.691h.676a5.7 5.7 0 0 0 .179 1.468 4.03 4.03 0 0 0 1.2 2A4.64 4.64 0 0 0 4.051 20.2a7 7 0 0 0 1.529.2h.239a5.6 5.6 0 0 0 1.509-.193 4.3 4.3 0 0 0 1.732-.933 3.8 3.8 0 0 0 .927-1.193 3.6 3.6 0 0 0 .35-1.585 5 5 0 0 0-.061-.8 3.4 3.4 0 0 0-.231-.807 3 3 0 0 0-.14-.278 4.1 4.1 0 0 0-1.458-1.37 16.4 16.4 0 0 0-3.034-1.32q-.528-.181-1.046-.388a10 10 0 0 1-1.913-.964 5 5 0 0 1-.805-.688 3.7 3.7 0 0 1-.96-1.871 5.4 5.4 0 0 1-.1-.945V6.92A5 5 0 0 1 .8 5.423a4 4 0 0 1 1.127-1.776 4.83 4.83 0 0 1 2.285-1.16 6.7 6.7 0 0 1 1.207-.147Z"
                                        data-name="Path 3"
                                        transform="translate(1568.261 1261.847)"
                                    ></path>
                                    <path
                                        id="arrow-right-line-svgrepo-com-5"
                                        fill="#3b3b3b"
                                        stroke="#3b3b3b"
                                        strokeLinecap="round"
                                        strokeWidth="1.5"
                                        d="M17.061 11.169 11.892 6m5.169 5.169-5.169 5.169m5.169-5.169H5"
                                        data-name="arrow-right-line-svgrepo-com"
                                        transform="translate(1577.761 1255.825)"
                                    ></path>
                                    <path
                                        id="arrow-right-line-svgrepo-com-6"
                                        fill="#3b3b3b"
                                        stroke="#3b3b3b"
                                        strokeLinecap="round"
                                        strokeWidth="1.5"
                                        d="M5 11.169 10.169 6M5 11.169l5.169 5.169M5 11.169h12.061"
                                        data-name="arrow-right-line-svgrepo-com"
                                        transform="translate(1577.761 1268.92)"
                                    ></path>
                                    <path
                                        id="Path_10-4"
                                        fill="none"
                                        d="M0 0h30.916v30.916H0Z"
                                        data-name="Path 10"
                                        transform="translate(1684.168 1258.084)"
                                    ></path>
                                    <path
                                        id="Path_11"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1088.292 1238.731h8.843l3.887-3.978h7.385l2.915 3.978h6.317v21.288h-29.348Z"
                                        data-name="Path 11"
                                        transform="translate(596.66 26.156)"
                                    ></path>
                                    <path
                                        id="Path_12"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                        d="M1091.305 1235.322h3.79"
                                        data-name="Path 12"
                                        transform="translate(596.077 27.073)"
                                    ></path>
                                    <g
                                        id="Ellipse_1"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeWidth="2"
                                        data-name="Ellipse 1"
                                        transform="translate(1693.126 1269.042)"
                                    >
                                        <circle cx="7.5" cy="7.5" r="7.5" stroke="none"></circle>
                                        <circle cx="7.5" cy="7.5" r="6.5"></circle>
                                    </g>
                                    <g
                                        id="Ellipse_2"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeWidth="2"
                                        data-name="Ellipse 2"
                                        transform="translate(1687.077 1266.792)"
                                    >
                                        <circle cx="2.25" cy="2.25" r="2.25" stroke="none"></circle>
                                        <circle cx="2.25" cy="2.25" r="1.25"></circle>
                                    </g>
                                    <path
                                        id="Path_10-5"
                                        fill="none"
                                        d="M0 0h30.916v30.916H0Z"
                                        data-name="Path 10"
                                        transform="translate(1802.126 1258.084)"
                                    ></path>
                                    <path
                                        id="Path_13"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1240.758 1260.65v-28.6h24.5v28.6l-4.1-2.216-3.642 2.216-4.4-2.216-4.261 2.216-4.587-2.216Z"
                                        data-name="Path 13"
                                        transform="translate(564.578 27.19)"
                                    ></path>
                                    <path
                                        id="Path_3-4"
                                        fill="#3b3b3b"
                                        fillRule="evenodd"
                                        stroke="#3b3b3b"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                        d="M3.415 1.475V0h.434v1.475a4 4 0 0 1 .955.16 2.75 2.75 0 0 1 1.285.806 3.4 3.4 0 0 1 .785 2.219v.2h-.422a3.8 3.8 0 0 0-.107-.932A2.73 2.73 0 0 0 5.691 2.7a2.5 2.5 0 0 0-1.436-.762 3.6 3.6 0 0 0-.642-.054 4 4 0 0 0-.87.093 2.6 2.6 0 0 0-1.177.594A2.25 2.25 0 0 0 .8 4.211v.134a4 4 0 0 0 .028.472 2 2 0 0 0 .229.75 1.9 1.9 0 0 0 .315.4 3 3 0 0 0 .537.413 8.4 8.4 0 0 0 1.578.7l.1.034q.255.087.509.18a12 12 0 0 1 1.147.478 4 4 0 0 1 .527.311 3 3 0 0 1 .428.356 2.6 2.6 0 0 1 .474.644q.05.1.09.2a2.5 2.5 0 0 1 .142.524 3.6 3.6 0 0 1 .043.572 3.1 3.1 0 0 1-.135.94 2.5 2.5 0 0 1-.681 1.091 3 3 0 0 1-1.293.714 4.3 4.3 0 0 1-.9.142v1.483H3.5v-1.467a5.3 5.3 0 0 1-1.054-.14 3.26 3.26 0 0 1-1.532-.811 2.93 2.93 0 0 1-.823-1.524A4.4 4.4 0 0 1 0 9.89h.426a3.6 3.6 0 0 0 .113.925 2.54 2.54 0 0 0 .759 1.26 2.9 2.9 0 0 0 1.256.659 4.3 4.3 0 0 0 .964.128h.151a3.6 3.6 0 0 0 .951-.122 2.7 2.7 0 0 0 1.092-.588 2.4 2.4 0 0 0 .584-.752 2.26 2.26 0 0 0 .22-1 3 3 0 0 0-.038-.5 2.1 2.1 0 0 0-.146-.508 2 2 0 0 0-.088-.175 2.6 2.6 0 0 0-.919-.864 10.3 10.3 0 0 0-1.913-.833q-.333-.114-.659-.244a6.3 6.3 0 0 1-1.206-.607 3 3 0 0 1-.508-.434 2.34 2.34 0 0 1-.6-1.186 3.4 3.4 0 0 1-.062-.6v-.092a3.2 3.2 0 0 1 .134-.944A2.5 2.5 0 0 1 1.215 2.3a3.04 3.04 0 0 1 1.44-.732 4.2 4.2 0 0 1 .76-.092Z"
                                        data-name="Path 3"
                                        transform="translate(1809.74 1264.494)"
                                    ></path>
                                    <path
                                        id="Line_5"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeWidth="2"
                                        d="M0 0h7"
                                        data-name="Line 5"
                                        transform="translate(1819.063 1265.492)"
                                    ></path>
                                    <path
                                        id="Line_6"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeWidth="2"
                                        d="M0 0h7"
                                        data-name="Line 6"
                                        transform="translate(1819.063 1271.492)"
                                    ></path>
                                    <path
                                        id="Line_7"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeWidth="2"
                                        d="M0 0h7"
                                        data-name="Line 7"
                                        transform="translate(1819.063 1278.492)"
                                    ></path>
                                    <path
                                        id="Path_10-6"
                                        fill="none"
                                        d="M0 0h30.916v30.916H0Z"
                                        data-name="Path 10"
                                        transform="translate(1920.084 1258.084)"
                                    ></path>
                                    <g id="Path_14" fill="none" data-name="Path 14">
                                        <path d="M1929.132 1258.349"></path>
                                        <path fill="#3b3b3b" d="M1929.132 1258.349v7.596z"></path>
                                    </g>
                                    <g
                                        id="Rectangle_9"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeWidth="2"
                                        data-name="Rectangle 9"
                                    >
                                        <path stroke="none" d="M1921.536 1269.744h7.596v7.596h-7.596z"></path>
                                        <path d="M1922.536 1270.744h5.596v5.596h-5.596z"></path>
                                    </g>
                                    <g
                                        id="Rectangle_11"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeWidth="2"
                                        data-name="Rectangle 11"
                                    >
                                        <path stroke="none" d="M1921.536 1258.349h7.596v7.596h-7.596z"></path>
                                        <path d="M1922.536 1259.349h5.596v5.596h-5.596z"></path>
                                    </g>
                                    <g
                                        id="Rectangle_10"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeWidth="2"
                                        data-name="Rectangle 10"
                                    >
                                        <path stroke="none" d="M1921.536 1281.139h7.596v7.596h-7.596z"></path>
                                        <path d="M1922.536 1282.139h5.596v5.596h-5.596z"></path>
                                    </g>
                                    <path
                                        id="Line_10"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeWidth="2"
                                        d="M0 0h18.042"
                                        data-name="Line 10"
                                        transform="translate(1931.506 1273.067)"
                                    ></path>
                                    <path
                                        id="Line_12"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeWidth="2"
                                        d="M0 0h18.042"
                                        data-name="Line 12"
                                        transform="translate(1931.506 1262.147)"
                                    ></path>
                                    <path
                                        id="Line_11"
                                        fill="none"
                                        stroke="#3b3b3b"
                                        strokeWidth="2"
                                        d="M0 0h18.042"
                                        data-name="Line 11"
                                        transform="translate(1931.506 1284.462)"
                                    ></path>
                                    <text
                                        id="HOME"
                                        fill="#3b3b3b"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="15"
                                        fontWeight="600"
                                        transform="translate(1441 1315)"
                                    >
                                        <tspan x="0" y="0">
                                            HOME
                                        </tspan>
                                    </text>
                                    <text
                                        id="TRANSFER_PAY"
                                        fill="#3b3b3b"
                                        data-name="TRANSFER &amp; PAY"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="15"
                                        fontWeight="600"
                                        transform="translate(1581 1315)"
                                    >
                                        <tspan x="-44.447" y="0">
                                            TRANSFER &amp;
                                        </tspan>
                                        <tspan x="-14.008" y="16">
                                            PAY
                                        </tspan>
                                    </text>
                                    <text
                                        id="DEPOSIT_CHECK"
                                        fill="#3b3b3b"
                                        data-name="DEPOSIT CHECK"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="15"
                                        fontWeight="600"
                                        transform="translate(1700 1315)"
                                    >
                                        <tspan x="-30.846" y="0">
                                            DEPOSIT
                                        </tspan>
                                        <tspan x="-24.115" y="16">
                                            CHECK
                                        </tspan>
                                    </text>
                                    <text
                                        id="BILL_PAY-_MENT"
                                        fill="#3b3b3b"
                                        data-name="BILL PAY- MENT"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="15"
                                        fontWeight="600"
                                        transform="translate(1817 1315)"
                                    >
                                        <tspan x="-33.754" y="0">
                                            BILL PAY-
                                        </tspan>
                                        <tspan x="-21.207" y="16">
                                            MENT
                                        </tspan>
                                    </text>
                                    <text
                                        id="MENU"
                                        fill="#3b3b3b"
                                        fontFamily="OpenSans-SemiBold, Open Sans"
                                        fontSize="15"
                                        fontWeight="600"
                                        transform="translate(1936 1315)"
                                    >
                                        <tspan x="-22.54" y="0">
                                            MENU
                                        </tspan>
                                    </text>
                                </g>
                            </svg>
                            <Page93Icons
                                battery={battery}
                                isOption={isOption}
                                time={time}
                                network={network}
                                net={net}
                                isBattery={isBattery}
                                iconPadding={`2rem 5rem 0rem 7rem`}
                                isDarkBg={true}
                                isIOS={isIOS}
                                bgColor="#141a30"
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
                            <label>Transactions1</label>
                            <input
                                type="text"
                                value={data.status1}
                                name="status1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.info1}
                                name="info1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount1}
                                name="amount1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Transactions2</label>
                            <input
                                type="text"
                                value={data.status2}
                                name="status2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.info2}
                                name="info2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount2}
                                name="amount2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Transactions3</label>
                            <input
                                type="text"
                                value={data.date1}
                                name="date1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.info3}
                                name="info3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount3}
                                name="amount3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.info4}
                                name="info4"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount4}
                                name="amount4"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Transactions4</label>
                            <input
                                type="text"
                                value={data.date2}
                                name="date2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.info5}
                                name="info5"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount5}
                                name="amount5"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.info6}
                                name="info6"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount6}
                                name="amount6"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Transactions5</label>
                            <input
                                type="text"
                                value={data.date3}
                                name="date3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.info7}
                                name="info7"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount7}
                                name="amount7"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.info8}
                                name="info8"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount8}
                                name="amount8"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Transactions6</label>
                            <input
                                type="text"
                                value={data.date4}
                                name="date4"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.info9}
                                name="info9"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount9}
                                name="amount9"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount10}
                                name="amount10"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Transactions7</label>
                            <input
                                type="text"
                                value={data.date5}
                                name="date5"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.info10}
                                name="info10"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount11}
                                name="amount11"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.info11}
                                name="info11"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount12}
                                name="amount12"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Transactions8</label>
                            <input
                                type="text"
                                value={data.date6}
                                name="date6"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.info12}
                                name="info12"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount13}
                                name="amount13"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.info13}
                                name="info13"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amount14}
                                name="amount14"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default View110