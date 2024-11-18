"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from "@/utils/getPicture";
import Image from "next/image";
import Page93Icons from "../options/Page93Icons";
import { InterBaseEncoded } from "@/utils/encodedFonts/InterBaseEncoded";

const View99 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 99";

    const [data, setData] = useState({
        from1: "Chequing",
        from2: "8484880",
        balance: "$17,950.04",
        network: "Bitcoin",
        to1: "Crypto.com",
        to2: "etransfer.payper@crypto.com",
        amount: "$2,999.00",
        date: "Oct 02,",
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

    const manageTimeDate = () => {
        const date = new Date();

        // Get month abbreviation
        const monthAbbreviation = date.toLocaleString('en-US', { month: 'short' });

        // Format full date as desired
        const formattedDate = `${monthAbbreviation} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;

        return setData({
            ...data,
            date: formattedDate
        });
    };



    const takeScreenshot = async () => {
        await getPicture(
            setPreview,
            setIsPreview,
            screenshotRef,
            setIsLoading,
            toast,
            0,
            0.06,
            0.15,
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
                                viewBox="0 0 591 1280"
                            >
                                <style>
                                    {
                                        InterBaseEncoded
                                    }
                                </style>
                                <defs>
                                    <filter
                                        id="Rectangle_6"
                                        width="591"
                                        height="443"
                                        x="0"
                                        y="141"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset></feOffset>
                                        <feGaussianBlur result="blur" stdDeviation="4"></feGaussianBlur>
                                        <feFlood floodOpacity="0.2"></feFlood>
                                        <feComposite in2="blur" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                    <filter
                                        id="Rectangle_7"
                                        width="591"
                                        height="133"
                                        x="0"
                                        y="577"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset></feOffset>
                                        <feGaussianBlur result="blur-2" stdDeviation="4"></feGaussianBlur>
                                        <feFlood floodOpacity="0.2"></feFlood>
                                        <feComposite in2="blur-2" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                    <filter
                                        id="Rectangle_9"
                                        width="591"
                                        height="133"
                                        x="0"
                                        y="1039"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset></feOffset>
                                        <feGaussianBlur result="blur-3" stdDeviation="4"></feGaussianBlur>
                                        <feFlood floodOpacity="0.2"></feFlood>
                                        <feComposite in2="blur-3" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                    <filter
                                        id="Rectangle_8"
                                        width="591"
                                        height="349"
                                        x="0"
                                        y="701"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset></feOffset>
                                        <feGaussianBlur result="blur-4" stdDeviation="4"></feGaussianBlur>
                                        <feFlood floodOpacity="0.2"></feFlood>
                                        <feComposite in2="blur-4" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                </defs>
                                <g id="bill-98" transform="translate(-1479 -92)">
                                    <path
                                        id="Path_1"
                                        fill="#ebebeb"
                                        d="M0 0h590v1280H0Z"
                                        data-name="Path 1"
                                        transform="translate(1479 92)"
                                    ></path>
                                    <path
                                        id="Rectangle_2"
                                        fill="#c41f3e"
                                        d="M0 0h590v134H0z"
                                        data-name="Rectangle 2"
                                        transform="translate(1479 92)"
                                    ></path>
                                    <path
                                        id="Line_2"
                                        fill="none"
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.613"
                                        strokeWidth="2"
                                        d="M0 0h21.568"
                                        data-name="Line 2"
                                        transform="translate(1526 196.002)"
                                    ></path>
                                    <path
                                        id="Line_3"
                                        fill="none"
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.613"
                                        strokeWidth="2"
                                        d="M0 0h21.568"
                                        data-name="Line 3"
                                        transform="translate(1526 205.098)"
                                    ></path>
                                    <path
                                        id="Line_1"
                                        fill="none"
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2.613"
                                        strokeWidth="2"
                                        d="M0 0h21.568"
                                        data-name="Line 1"
                                        transform="translate(1526 186.902)"
                                    ></path>
                                    <text
                                        id="Interac_e-Transfer_"
                                        fill="#fff"
                                        data-name="Interac e-Transfer®"
                                        fontFamily="Inter"
                                        fontSize="22"
                                        fontStyle="italic"
                                        transform="translate(1673 204)"
                                    >
                                        <tspan x="0" y="0">
                                            Interac
                                        </tspan>
                                        <tspan xmlSpace="preserve" y="0" fontStyle="normal">
                                            {" "}
                                            e-Transfer®
                                        </tspan>
                                    </text>
                                    <path
                                        id="search"
                                        fill="#fff"
                                        fillRule="evenodd"
                                        d="M265.325 1155.938a7.764 7.764 0 1 1 7.891-7.759 7.824 7.824 0 0 1-7.891 7.759m12.628 4.018-5.722-5.632a9.04 9.04 0 0 0 2.419-6.145 9.326 9.326 0 1 0-9.325 9.172 9.37 9.37 0 0 0 5.869-2.051l5.745 5.653a.723.723 0 0 0 1.014 0 .7.7 0 0 0 0-1Z"
                                        transform="translate(1743 -954.081)"
                                    ></path>
                                    <path
                                        id="path1009"
                                        fill="#fff"
                                        d="M162.015 102.968a.447.447 0 0 1-.447-.447 3.8 3.8 0 0 0-4.785-3.666.447.447 0 1 1-.233-.862 4.69 4.69 0 0 1 5.912 4.528.447.447 0 0 1-.447.447"
                                        transform="translate(1851 91.5)"
                                    ></path>
                                    <g filter="url(#Rectangle_6)" transform="translate(1479 92)">
                                        <rect
                                            id="Rectangle_6-2"
                                            width="567"
                                            height="419"
                                            fill="#fff"
                                            data-name="Rectangle 6"
                                            rx="8"
                                            transform="translate(12 153)"
                                        ></rect>
                                    </g>
                                    <g filter="url(#Rectangle_7)" transform="translate(1479 92)">
                                        <rect
                                            id="Rectangle_7-2"
                                            width="567"
                                            height="109"
                                            fill="#fff"
                                            data-name="Rectangle 7"
                                            rx="8"
                                            transform="translate(12 589)"
                                        ></rect>
                                    </g>
                                    <g filter="url(#Rectangle_9)" transform="translate(1479 92)">
                                        <path
                                            id="Rectangle_9-2"
                                            fill="#dfe8f7"
                                            d="M0 0h567v109H0z"
                                            data-name="Rectangle 9"
                                            transform="translate(12 1051)"
                                        ></path>
                                    </g>
                                    <text
                                        id="This_transfer_will_replace_any_transfer_that_was_already_scheduled_in_response_to_this_request._There_is_no_fee_to_fulfill_a_request.You_can_make_changes_to_a_future-_dated_transfer_until_6:00_am_ET_on_the_day_it_s"
                                        fill="rgba(0,0,0,0.66)"
                                        data-name="This transfer will replace any transfer that was already scheduled in response to this request. There is no fee to fulfill a request.You can make changes to a future- dated transfer until 6:00 am ET on the day it's"
                                        fontFamily="Inter"
                                        fontSize="17.5"
                                        transform="translate(1573.694 1171)"
                                    >
                                        <tspan x="0" y="0">
                                            This transfer will replace any transfer that was already
                                        </tspan>
                                        <tspan x="0" y="25">
                                            scheduled in response to this request. There is no fee{" "}
                                        </tspan>
                                        <tspan x="0" y="50">
                                            to fulfill a request.You can make changes to a future-{" "}
                                        </tspan>
                                        <tspan x="0" y="75">
                                            dated transfer until 6:00 am ET on the day it&apos;s
                                        </tspan>
                                    </text>
                                    <g filter="url(#Rectangle_8)" transform="translate(1479 92)">
                                        <rect
                                            id="Rectangle_8-2"
                                            width="567"
                                            height="325"
                                            fill="#fff"
                                            data-name="Rectangle 8"
                                            rx="8"
                                            transform="translate(12 713)"
                                        ></rect>
                                    </g>
                                    <path
                                        id="Rectangle_3"
                                        fill="#fff"
                                        d="M0 0h590v129H0z"
                                        data-name="Rectangle 3"
                                        transform="translate(1479 1243)"
                                    ></path>
                                    <g
                                        id="Rectangle_4"
                                        fill="none"
                                        stroke="#c41f3e"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        data-name="Rectangle 4"
                                        transform="translate(1490 1255)"
                                    >
                                        <rect width="277" height="58" stroke="none" rx="4"></rect>
                                        <rect width="276" height="57" x="0.5" y="0.5" rx="3.5"></rect>
                                    </g>
                                    <text
                                        id="Back"
                                        fill="#c41f3e"
                                        fontFamily="Inter"
                                        fontSize="21"
                                        transform="translate(1604 1292)"
                                    >
                                        <tspan x="0" y="0">
                                            Back
                                        </tspan>
                                    </text>
                                    <g
                                        id="Rectangle_4-2"
                                        fill="#c41f3e"
                                        stroke="#c41f3e"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        data-name="Rectangle 4"
                                        transform="translate(1781 1255)"
                                    >
                                        <rect width="277" height="58" stroke="none" rx="4"></rect>
                                        <rect
                                            width="276"
                                            height="57"
                                            x="0.5"
                                            y="0.5"
                                            fill="none"
                                            rx="3.5"
                                        ></rect>
                                    </g>
                                    <text
                                        id="Continue"
                                        fill="#fff"
                                        fontFamily="Inter"
                                        fontSize="21"
                                        transform="translate(1875 1292)"
                                    >
                                        <tspan x="0" y="0">
                                            Continue
                                        </tspan>
                                    </text>

                                    {
                                        isIOS
                                            ?
                                            <rect
                                                id="Rectangle_5"
                                                width="210"
                                                height="7"
                                                data-name="Rectangle 5"
                                                rx="3.5"
                                                transform="translate(1669 1354)"
                                            ></rect>
                                            :
                                            <>
                                            </>
                                    }
                                    <text
                                        id="_17_950.04"
                                        data-name="$17,950.04"
                                        fontFamily="Inter"
                                        fontSize="22.5"
                                        transform="translate(1988 356)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.balance}
                                        </tspan>
                                    </text>
                                    <text
                                        id="Accept_request"
                                        data-name="Accept request"
                                        fontFamily="Inter"
                                        fontSize="22"
                                        transform="translate(1512 278)"
                                    >
                                        <tspan x="0" y="0">
                                            Accept request
                                        </tspan>
                                    </text>
                                    <text
                                        id="From_account"
                                        data-name="From account"
                                        fontFamily="Inter"
                                        fontSize="17.5"
                                        transform="translate(1512 323)"
                                    >
                                        <tspan x="0" y="0">
                                            From account
                                        </tspan>
                                    </text>
                                    <text
                                        id="Chequing"
                                        fontFamily="Inter"
                                        fontSize="22"
                                        transform="translate(1512 355)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.from1}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_8484880"
                                        fill="rgba(0,0,0,0.72)"
                                        data-name="8484880"
                                        fontFamily="Inter"
                                        fontSize="18"
                                        transform="translate(1512 384)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.from2}
                                        </tspan>
                                    </text>
                                    <text
                                        id="To_contact"
                                        data-name="To contact"
                                        fontFamily="Inter"
                                        fontSize="17.5"
                                        transform="translate(1512 445)"
                                    >
                                        <tspan x="0" y="0">
                                            To contact
                                        </tspan>
                                    </text>
                                    <text
                                        id="Crypto.com"
                                        fontFamily="Inter"
                                        fontSize="22"
                                        transform="translate(1512 477)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.to1}
                                        </tspan>
                                    </text>
                                    <text
                                        id="etransfer.payper_crypto.com"
                                        fill="rgba(0,0,0,0.72)"
                                        data-name="etransfer.payper@crypto.com"
                                        fontFamily="Inter"
                                        fontSize="17.5"
                                        transform="translate(1512 506)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.to2}
                                        </tspan>
                                    </text>
                                    <text
                                        id="Amount"
                                        fontFamily="Inter"
                                        fontSize="16"
                                        transform="translate(1512 582)"
                                    >
                                        <tspan x="0" y="0">
                                            Amount
                                        </tspan>
                                    </text>
                                    <text
                                        id="_2_999.00"
                                        data-name="$2,999.00"
                                        fontFamily="Inter"
                                        fontSize="45.5"
                                        transform="translate(1512 637)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <g id="skip-track-svgrepo-com" fill="#c41f3e">
                                        <path d="m2028.9 347.06-8-11.148a34 34 0 0 0-3.632 0l7.926 11.148-7.926 12.115a34 34 0 0 0 3.632 0Z"></path>
                                        <path d="M2018.168 335.855c1.076 0 2.732.057 2.732.057l8 11.148-8 12.115s-3.726.128-3.632 0l7.926-12.115-7.926-11.148c-.032-.043.361-.057.9-.057"></path>
                                    </g>
                                    <text
                                        id="Transfer_date"
                                        fill="rgba(0,0,0,0.72)"
                                        data-name="Transfer date"
                                        fontFamily="Inter"
                                        fontSize="16"
                                        transform="translate(1512 723)"
                                    >
                                        <tspan x="0" y="0">
                                            Transfer date
                                        </tspan>
                                    </text>
                                    <text
                                        id="Oct_02_"
                                        data-name="Oct 02,"
                                        fontFamily="Inter"
                                        fontSize="23"
                                        transform="translate(1512 762)"
                                    >
                                        <tspan x="0" y="0" textAnchor="start">
                                            {data.date}
                                        </tspan>
                                    </text>
                                    <path
                                        id="Path_2"
                                        fill="none"
                                        stroke="rgba(0,0,0,0.72)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.3"
                                        d="M3 12.044h24.054M8.345 4v2.673M21.709 4v2.673m-2.7 12.38h4.345V23.4h-4.345ZM7.276 27.08h15.5a6.6 6.6 0 0 0 2.817-.291 2.67 2.67 0 0 0 1.168-1.168 6.6 6.6 0 0 0 .291-2.817V9.975a6.6 6.6 0 0 0-.291-2.817 2.67 2.67 0 0 0-1.166-1.168 6.6 6.6 0 0 0-2.817-.29H7.276a6.6 6.6 0 0 0-2.817.291 2.67 2.67 0 0 0-1.168 1.167A6.6 6.6 0 0 0 3 9.975V22.8a6.6 6.6 0 0 0 .291 2.817 2.67 2.67 0 0 0 1.168 1.168 6.6 6.6 0 0 0 2.817.295"
                                        data-name="Path 2"
                                        transform="translate(1996 719.343)"
                                    ></path>
                                    <text
                                        id="Message"
                                        fontFamily="Inter"
                                        fontSize="16"
                                        transform="translate(1512 835)"
                                    >
                                        <tspan x="0" y="0">
                                            {"Message ("}
                                        </tspan>
                                    </text>
                                    <g
                                        id="Rectangle_10"
                                        fill="none"
                                        stroke="#707070"
                                        strokeWidth="1"
                                        data-name="Rectangle 10"
                                        transform="translate(1501 850)"
                                    >
                                        <rect width="546" height="206" stroke="none" rx="9"></rect>
                                        <rect width="545" height="205" x="0.5" y="0.5" rx="8.5"></rect>
                                    </g>
                                    <text
                                        id="Enter_message"
                                        fill="rgba(0,0,0,0.5)"
                                        data-name="Enter message"
                                        fontFamily="Inter"
                                        fontSize="22"
                                        transform="translate(1508 883)"
                                    >
                                        <tspan x="0" y="0">
                                            Enter message
                                        </tspan>
                                    </text>
                                    <rect
                                        id="Rectangle_12"
                                        width="18"
                                        height="18"
                                        fill="#fff"
                                        data-name="Rectangle 12"
                                        rx="9"
                                        transform="translate(1503 1081)"
                                    ></rect>
                                    <path
                                        id="Path_3"
                                        fill="rgba(0,0,0,0.58)"
                                        d="M10.887 2a8.847 8.847 0 1 0 6.3 2.591A8.89 8.89 0 0 0 10.887 2m.813 12.927a.808.808 0 1 1-1.616 0v-4.848a.808.808 0 0 1 1.616 0Zm-.808-7.271a.808.808 0 1 1 .808-.808.81.81 0 0 1-.813.807Z"
                                        data-name="Path 3"
                                        transform="translate(1501.095 1079.095)"
                                    ></path>
                                    <text
                                        id="Don_t_disclose_your_security_answer_or_confidential_information._Offensive_messages_may_be_blocked."
                                        fill="#317095"
                                        data-name="Don't disclose your security answer or confidential information. Offensive messages may be blocked."
                                        fontFamily="Inter"
                                        fontSize="16.35"
                                        transform="translate(1534 1085)"
                                    >
                                        <tspan x="0" y="0">
                                            Don&apos;t disclose your security answer or confidential information.
                                        </tspan>
                                        <tspan x="0" y="22">
                                            Offensive messages may be blocked.
                                        </tspan>
                                    </text>
                                    <rect
                                        id="Rectangle_12-2"
                                        width="24"
                                        height="24"
                                        fill="#fff"
                                        data-name="Rectangle 12"
                                        rx="12"
                                        transform="translate(1525.694 1204)"
                                    ></rect>
                                    <path
                                        id="Path_3-2"
                                        fill="#004568"
                                        d="M15.1 2a13.039 13.039 0 1 0 9.28 3.819A13.1 13.1 0 0 0 15.1 2m1.191 19.053a1.191 1.191 0 1 1-2.382 0v-7.145a1.191 1.191 0 0 1 2.382 0ZM15.1 10.335a1.191 1.191 0 1 1 1.191-1.191 1.19 1.19 0 0 1-1.191 1.191"
                                        data-name="Path 3"
                                        transform="translate(1523.306 1201.613)"
                                    ></path>
                                    <path
                                        id="Rectangle_13"
                                        fill="rgba(0,0,0,0.2)"
                                        d="M0 0h590v1280H0z"
                                        data-name="Rectangle 13"
                                        transform="translate(1479 92)"
                                    ></path>
                                    <rect
                                        id="Rectangle_14"
                                        width="370"
                                        height="185"
                                        fill="#fbfbfb"
                                        data-name="Rectangle 14"
                                        rx="18"
                                        transform="translate(1588.75 657)"
                                    ></rect>
                                    <text
                                        id="The_transfer_amount_exceeds_the_maximum_transfer_limit._0159_"
                                        data-name="The transfer amount exceeds the maximum transfer limit. (0159)"
                                        fontFamily="Inter"
                                        fontSize="17.5"
                                        transform="translate(1775.75 727)"
                                    >
                                        <tspan x="-139.295" y="0">
                                            The transfer amount exceeds the{" "}
                                        </tspan>
                                        <tspan x="-125.081" y="22">
                                            maximum weekly limit. (0160)
                                        </tspan>
                                    </text>
                                    <path
                                        id="Path_4"
                                        fill="none"
                                        stroke="rgba(112,112,112,0.5)"
                                        strokeWidth="0.5"
                                        d="M0 0h370"
                                        data-name="Path 4"
                                        transform="translate(1589.25 781.5)"
                                    ></path>
                                    <text
                                        id="OK"
                                        fill="#1d7bc0"
                                        fontFamily="Inter"
                                        fontSize="22"
                                        transform="translate(1773.75 820)"
                                    >
                                        <tspan x="-15.802" y="0">
                                            OK
                                        </tspan>
                                    </text>
                                </g>
                            </svg>
                            {/* <IOSOption
                                battery={battery}
                                isOption={isOption}
                                time={time}
                                network={network}
                                net={net}
                                isBattery={isBattery}
                                iconPadding={`2rem 5rem 0rem 7rem`}
                                isDarkBg={true}
                                isIOS={isIOS}
                            /> */}
                            <Page93Icons
                                battery={battery}
                                isOption={isOption}
                                time={time}
                                network={network}
                                net={net}
                                isBattery={isBattery}
                                iconPadding={`2rem 5rem 0rem 7rem`}
                                isDarkBg={false}
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
                            <label>From Account</label>
                            <input
                                type="text"
                                value={data.from1}
                                name="from1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.from2}
                                name="from2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Balance</label>
                            <input
                                type="text"
                                value={data.balance}
                                name="balance"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>To Contact</label>
                            <input
                                type="text"
                                value={data.to1}
                                name="to1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.to2}
                                name="to2"
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
                            <label>Transfer Date</label>
                            <input
                                type="text"
                                value={data.date}
                                name="date"
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

export default View99;