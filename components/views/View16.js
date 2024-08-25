"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from '@/utils/getPicture';
import Image from "next/image";

const View16 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 16";


    const [data, setData] = useState({
        amount_transfer_to_1: "-257.339415",
        amount_transfer_to_2: "-167.75",
        date_transfer_to_1: "2023-08-10 12:54:59",
        date_transfer_to_2: "2023-08-09 18:28:33",
        balance_transfer_to_1: "0",
        balance_transfer_to_2: "0",
        deposit_amount: "+257.339415",
        deposit_amount_2: "+167.75",
        p2p_amount: "-167.75",
        canceled_p2p_amount: "+167.75",
        p2p_amount_2: "-167.75",
        deposit_date: "2023-08-10 12:54:59",
        deposit_date_2: "2023-08-09 18:28:33",
        p2p_date: "2023-08-09 19:15:22",
        canceled_p2p_date: "2023-08-09 19:14:30",
        p2p_date_2: "2023-08-09 18:59:27",
        deposit_balance: "257.339415",
        deposit_balance_2: "167.75",
        p2p_balance: "0",
        canceled_p2p_balance: "167.75",
        p2p_balance_2: "0",
        amount_transfer_from: "+167.75",
        date_transfer_from: "2023-08-09 18:37:00",
        balance_transfer_from: "167.75",
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
            0,
            0.4,
            0.3
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
                                viewBox="0 0 1707.502 3698"
                                className="fontDin"
                            >
                                <g data-name="Group 401" transform="translate(-2713.498 -167)">
                                    <path
                                        fill="#100f14"
                                        d="M0 0H1707V3698H0z"
                                        data-name="Rectangle 28"
                                        transform="translate(2714 167)"
                                    ></path>
                                    <text
                                        fill="#f16262"
                                        data-name="-167.75"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="56"
                                        fontWeight="500"
                                        transform="translate(4446 1658)"
                                    >
                                        <tspan x="-96.578" y="0" textAnchor='end'>
                                            {data.p2p_amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#f16262"
                                        data-name="-167.75"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="56"
                                        fontWeight="500"
                                        transform="translate(4446 2225)"
                                    >
                                        <tspan x="-96.578" y="0" textAnchor='end'>
                                            {data.p2p_amount_2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#f16262"
                                        data-name="-167.75"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="56"
                                        fontWeight="500"
                                        transform="translate(4446 2790)"
                                    >
                                        <tspan x="-96.578" y="0" textAnchor='end'>
                                            {data.amount_transfer_to_2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#4fb46d"
                                        data-name="167.75"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="56"
                                        fontWeight="500"
                                        transform="translate(4446 1939)"
                                    >
                                        <tspan x="-102.99" y="0" textAnchor='end'>
                                            {data.canceled_p2p_amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#4fb46d"
                                        data-name="167.75"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="56"
                                        fontWeight="500"
                                        transform="translate(4446 2510)"
                                    >
                                        <tspan x="-102.99" y="0" textAnchor='end'>
                                            {data.amount_transfer_from}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#4fb46d"
                                        data-name="167.75"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="56"
                                        fontWeight="500"
                                        transform="translate(4446 3074)"
                                    >
                                        <tspan x="-102.99" y="0" textAnchor='end'>
                                            {data.deposit_amount_2}
                                        </tspan>
                                    </text>
                                    <g data-name="Group 400">
                                        <text
                                            fill="#fff"
                                            data-name="Transfer to Spot Account USDT"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(3169 1090)"
                                        >
                                            <tspan x="-389.43" y="0">
                                                Transfer to Spot Account USDT
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#f16262"
                                            data-name="-257.339"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(4508 1090)"
                                        >
                                            <tspan x="-160.234" y="0" textAnchor='end'>
                                                {data.amount_transfer_to_1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="2023-08-10 12:54:59"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3010 1172)"
                                        >
                                            <tspan x="-230.118" y="0">
                                                {data.date_transfer_to_1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Type Transfer out"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(2972 1238)"
                                        >
                                            <tspan x="-191.98" y="0">
                                                Type Transfer out
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Available Balance 0"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(4563 1238)"
                                        >
                                            <tspan x="-213.813" y="0" textAnchor='end'>
                                                Available Balance {data.balance_transfer_to_1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="Deposit USDT"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(2952 1373)"
                                        >
                                            <tspan x="-172.184" y="0">
                                                Deposit USDT
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="P2P Sale USDT"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(2970 1658)"
                                        >
                                            <tspan x="-189.15" y="0">
                                                P2P Sale USDT
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="P2P Sale USDT"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(2970 2224)"
                                        >
                                            <tspan x="-189.15" y="0">
                                                P2P Sale USDT
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="Canceled P2P Sale USDT"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(3096 1939)"
                                        >
                                            <tspan x="-312.785" y="0">
                                                Canceled P2P Sale USDT
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="Transfer from Spot Account USDT"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(3210 2510)"
                                        >
                                            <tspan x="-424.17" y="0">
                                                Transfer from Spot Account USDT
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="Transfer to Spot Account USDT"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(3170 2790)"
                                        >
                                            <tspan x="-389.43" y="0">
                                                Transfer to Spot Account USDT
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="Deposit USDT"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(2948 3074)"
                                        >
                                            <tspan x="-172.184" y="0">
                                                Deposit USDT
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#4fb46d"
                                            data-name="257.339"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(4515 1373)"
                                        >
                                            <tspan x="-166.646" y="0" textAnchor='end'>
                                                {data.deposit_amount}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="2023-08-10 12:54:59"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3013 1455)"
                                        >
                                            <tspan x="-230.118" y="0">
                                                {data.deposit_date}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="2023-08-09 19:15:22"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3009 1736)"
                                        >
                                            <tspan x="-230.118" y="0">
                                                {data.p2p_date}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="2023-08-09 18:59:27"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3012 2302)"
                                        >
                                            <tspan x="-230.118" y="0">
                                                {data.p2p_date_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="2023-08-09 19:14:30"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3015 2021)"
                                        >
                                            <tspan x="-230.118" y="0">
                                                {data.canceled_p2p_date}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="2023-08-09 18:37:00"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3016 2593)"
                                        >
                                            <tspan x="-230.118" y="0">
                                                {data.date_transfer_from}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="2023-08-09 18:28:33"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3010 2873)"
                                        >
                                            <tspan x="-230.118" y="0">
                                                {data.date_transfer_to_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="2023-08-09 18:28:33"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3010 3157)"
                                        >
                                            <tspan x="-230.118" y="0">
                                                {data.deposit_date_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Type Transfer in"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(2962 2659)"
                                        >
                                            <tspan x="-176.154" y="0">
                                                Type Transfer in
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Type Transfer out"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(2970 2939)"
                                        >
                                            <tspan x="-191.98" y="0">
                                                Type Transfer out
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Type Deposite"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(2935 3223)"
                                        >
                                            <tspan x="-155.948" y="0">
                                                Type Deposite
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Available Balance 257.339415"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(4680 1520)"
                                        >
                                            <tspan x="-332.054" y="0" textAnchor='end'>
                                                Available Balance {data.deposit_balance}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Available Balance 0"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(4561 1803)"
                                        >
                                            <tspan x="-213.813" y="0" textAnchor='end'>
                                                Available Balance {data.p2p_balance}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Available Balance 167.75"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(4623 2087)"
                                        >
                                            <tspan x="-276.355" y="0" textAnchor='end'>
                                                Available Balance {data.canceled_p2p_balance}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Available Balance 167.75"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(4623 2652)"
                                        >
                                            <tspan x="-276.355" y="0" textAnchor='end'>
                                                Available Balance {data.balance_transfer_from}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Available Balance 167.75"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(4623 3216)"
                                        >
                                            <tspan x="-276.355" y="0" textAnchor='end'>
                                                Available Balance {data.deposit_balance_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Available Balance 0"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(4561 2369)"
                                        >
                                            <tspan x="-213.813" y="0" textAnchor='end'>
                                                Available Balance {data.p2p_balance_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Available Balance 0"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(4561 2934)"
                                        >
                                            <tspan x="-213.813" y="0" textAnchor='end'>
                                                Available Balance {data.balance_transfer_to_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Type Deposite"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(2939 1520)"
                                        >
                                            <tspan x="-155.948" y="0">
                                                Type Deposite
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Type Fiat"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(2879 1803)"
                                        >
                                            <tspan x="-99.974" y="0">
                                                Type Fiat
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Type Fiat"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(2882 2369)"
                                        >
                                            <tspan x="-99.974" y="0">
                                                Type Fiat
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Type Fiat"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(2884 2087)"
                                        >
                                            <tspan x="-99.974" y="0">
                                                Type Fiat
                                            </tspan>
                                        </text>
                                        <g data-name="Group 399" transform="translate(1909)">
                                            <g data-name="Group 396" transform="translate(2 1)">
                                                <g fill="#b0afb4" data-name="Group 395" transform="translate(1)">
                                                    <path
                                                        d="M0 0H54V8H0z"
                                                        data-name="Rectangle 469"
                                                        transform="translate(893 466)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H45V8H0z"
                                                        data-name="Rectangle 470"
                                                        transform="rotate(46.99 -90.112 1254.643)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H45V8H0z"
                                                        data-name="Rectangle 471"
                                                        transform="rotate(-44.03 1021.57 -855.98)"
                                                    ></path>
                                                </g>
                                                <text
                                                    fill="#fdfdfd"
                                                    data-name="Funding Account History"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="77"
                                                    fontWeight="500"
                                                    letterSpacing=".01em"
                                                    transform="translate(1658 493)"
                                                >
                                                    <tspan x="-433.267" y="0">
                                                        Funding Account History
                                                    </tspan>
                                                </text>
                                            </g>
                                            <g data-name="Group 397" fontFamily="Bahnschrift">
                                                <text
                                                    fill="#e3e3e3"
                                                    data-name="All Transactions"
                                                    fontSize="58"
                                                    transform="translate(1077 691)"
                                                >
                                                    <tspan x="-208.891" y="0">
                                                        All Transactions
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#74757a"
                                                    fontSize="56"
                                                    transform="translate(1440 691)"
                                                >
                                                    <tspan x="-90.412" y="0">
                                                        History
                                                    </tspan>
                                                </text>
                                            </g>
                                            <g fill="#aaa9af" data-name="Group 398" transform="translate(1 -1)">
                                                <text
                                                    data-name="All Assets"
                                                    fontFamily="Bahnschrift"
                                                    fontSize="54"
                                                    transform="translate(990 906)"
                                                >
                                                    <tspan x="-123.135" y="0">
                                                        All Assets
                                                    </tspan>
                                                </text>
                                                <text
                                                    fontFamily="Bahnschrift"
                                                    fontSize="54"
                                                    transform="translate(1294 906)"
                                                >
                                                    <tspan x="-33.117" y="0">
                                                        All
                                                    </tspan>
                                                </text>
                                                <text
                                                    data-name="All Dates"
                                                    fontFamily="Bahnschrift"
                                                    fontSize="54"
                                                    transform="translate(1582 906)"
                                                >
                                                    <tspan x="-109.74" y="0">
                                                        All Dates
                                                    </tspan>
                                                </text>
                                                <path
                                                    d="M22.016 1.642a2 2 0 012.967 0l19 21.017A2 2 0 0142.5 26h-38a2 2 0 01-1.48-3.341z"
                                                    data-name="Polygon 10"
                                                    transform="rotate(-180 698.195 446.861) translate(0 -6)"
                                                ></path>
                                                <path
                                                    d="M22.016 1.642a2 2 0 012.967 0l19 21.017A2 2 0 0142.5 26h-38a2 2 0 01-1.48-3.341z"
                                                    data-name="Polygon 12"
                                                    transform="rotate(-180 592.703 447.758) translate(0 -6)"
                                                ></path>
                                                <path
                                                    d="M22.016 1.642a2 2 0 012.967 0l19 21.017A2 2 0 0142.5 26h-38a2 2 0 01-1.48-3.341z"
                                                    data-name="Polygon 11"
                                                    transform="rotate(-180 885.682 445.268) translate(0 -6)"
                                                ></path>
                                            </g>
                                            <path
                                                fill="none"
                                                stroke="#16151a"
                                                strokeWidth="2"
                                                d="M0 0L1703 4"
                                                data-name="Line 49"
                                                transform="translate(804.5 998.5)"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#16151a"
                                                strokeWidth="2"
                                                d="M0 0L1703 4"
                                                data-name="Line 50"
                                                transform="translate(804.5 765.5)"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#daab5b"
                                                strokeWidth="7"
                                                d="M0 0L417 0"
                                                data-name="Line 51"
                                                transform="translate(868 767.5)"
                                            ></path>
                                        </g>
                                        {
                                            isIOS
                                                ?
                                                <>
                                                    <rect
                                                        width="611"
                                                        height="21"
                                                        fill="#fff"
                                                        data-name="Rectangle 472"
                                                        rx="10.5"
                                                        transform="translate(3260 3810)"
                                                    ></rect>
                                                </>
                                                :
                                                <></>
                                        }
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
                                <label>Transfer to Spot Account USDT 1</label>
                                <input
                                    type="text"
                                    value={data.amount_transfer_to_1}
                                    name="amount_transfer_to_1"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.date_transfer_to_1}
                                    name="date_transfer_to_1"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.balance_transfer_to_1}
                                    name="balance_transfer_to_1"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Deposit USDT</label>
                                <input
                                    type="text"
                                    value={data.deposit_amount}
                                    name="deposit_amount"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.deposit_date}
                                    name="deposit_date"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.deposit_balance}
                                    name="deposit_balance"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>P2P Sale USDT</label>
                                <input
                                    type="text"
                                    value={data.p2p_amount}
                                    name="p2p_amount"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.p2p_date}
                                    name="p2p_date"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.p2p_balance}
                                    name="p2p_balance"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Canceled P2P Sale USDT</label>
                                <input
                                    type="text"
                                    value={data.canceled_p2p_amount}
                                    name="canceled_p2p_amount"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.canceled_p2p_date}
                                    name="canceled_p2p_date"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.canceled_p2p_balance}
                                    name="canceled_p2p_balance"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>P2P Sale USDT</label>
                                <input
                                    type="text"
                                    value={data.p2p_amount_2}
                                    name="p2p_amount_2"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.p2p_date_2}
                                    name="p2p_date_2"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.p2p_balance_2}
                                    name="p2p_balance_2"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Transfer from Spot Account USDT</label>
                                <input
                                    type="text"
                                    value={data.amount_transfer_from}
                                    name="amount_transfer_from"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.date_transfer_from}
                                    name="date_transfer_from"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.balance_transfer_from}
                                    name="balance_transfer_from"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Transfer to Spot Account USDT</label>
                                <input
                                    type="text"
                                    value={data.amount_transfer_to_2}
                                    name="amount_transfer_to_2"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.date_transfer_to_2}
                                    name="date_transfer_to_2"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.balance_transfer_to_2}
                                    name="balance_transfer_to_2"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Deposit USDT</label>
                                <input
                                    type="text"
                                    value={data.deposit_amount_2}
                                    name="deposit_amount_2"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.deposit_date_2}
                                    name="deposit_date_2"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.deposit_balance_2}
                                    name="deposit_balance_2"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                        </div>
                    </div>
            </div >
        </>
    )
}

export default View16