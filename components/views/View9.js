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

const View9 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 9";

    const [data, setData] = useState({
        amount: "- 299.47 USDT",
        block_chain: "TRC20",
        type: "On-chain withdrawal",
        status: "sent",
        address_up: "ThyYHVBgFZCenF6a8vgLrebF",
        address_down: "GGbpGrASPg",
        transaction_id_1: "35b25f82b4740f8a7815274a14",
        transaction_id_2: "4f26afdc3929cf621afad032017",
        transaction_id_3: "30e05f5ac63",
        fee: "1 USDT",
        date_and_time: "08/04/2023, 14:56:25",
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

        // Function to pad numbers with leading zeros
        const padL = (nr, len = 2, chr = '0') => `${nr}`.padStart(len, chr);

        // Construct the date and time string
        const finalRes = `${padL(now.getMonth() + 1)}/${padL(now.getDate())}/${now.getFullYear()}, ${padL(now.getHours())}:${padL(now.getMinutes())}:${padL(now.getSeconds())}`;

        // Update the data with the new timestamp
        return setData({
            ...data,
            date_and_time: finalRes
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
                            className="artboard "
                            ref={screenshotRef}
                            style={{
                                transform: `scale(${imageDimension / 100})`,

                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 1765 3820"
                            >
                                  <style>
                                    {
                                        RobotoBaseEncoded
                                    }
                                </style>
                                <defs>
                                    <pattern
                                        id="pattern"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 269 89"
                                    >
                                        <image
                                            width="269"
                                            height="89"
                                            xlinkHref="data:image/png;base64,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"
                                        ></image>
                                    </pattern>
                                    <pattern
                                        id="pattern-2"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 109 100"
                                    >
                                        <image
                                            width="109"
                                            height="100"
                                            xlinkHref="data:image/png;base64,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"
                                        ></image>
                                    </pattern>
                                    <pattern
                                        id="pattern-3"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 955 154"
                                    >
                                        <image
                                            width="955"
                                            height="154"
                                            xlinkHref="data:image/png;base64,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cgvh89fqLv7PxTyuPCNvZ8W9Vj4+rghq1qxZSsG91gorrKBUuIIAt615P7jx4Pape/3M/T53rDt27KgU8u+cM2eOUpg3b55S6+Led50ChTrfU2npa3Xo0EGp+MIXvqAU3D6dNm2aUsjntRu7jts3wGdNPg/c+equlW5+zj/bpUsXpdC2bVul8NZbbymFfB101zK3DXlb3ba7c99dw/M1ye0b93NO/p3uvsWV9eTXX2211ZRC3WOWr11z585VCu666O5b8r533+O2CwtXdyz9X8vH1t1z1ZkjXNGZu/a7krQ8dt3Pufkg39tWVl55ZaXCld+9/vrrSsHdm+f7XbcNaJn/OaIAAAAAAFjM8bALAAAAAGgcHnYBAAAAAI3T6tfs/m37lEKnTp2UijZt2igFt24nr9F75513lIJbK+DWneT/l759+/ZKYZVVVlH6eDNmzFAq3nzzTaXg1l+4bc3rAJZZZhml0K1bN6XQuXNnpWL27NlKYerUqUqha9euSqFv375KhVuf+8ADDygF9/p1PkjcreWpswa57vqr/DvdOs5evXophQEDBiiF/H4effRRpXDDDTcotS5ujUzm9mndNWD5+9z3OMcdd5xS0a5dO6UwefJkpTB27Fil8PzzzysVddc9uX3j1tEBTZbPYXfuu6+59aW582DgwIFKYZNNNlEKbj3uWWedpVS4Nfzz589XCnXmJHfNcOqsVXTq/E63xtX1neQ1zltuuaVS2HnnnZXCu+++qxTGjRunVOT/rrh96rY1z59unWXd/YWi7rj8v5aPY917hjxG3L1nv379lIIbS7/73e+UiieffFIpuPXs2267rVLI55B79hg9erRSePzxx5VCvtfkHmLRqXc3CQAAAADAYoSHXQAAAABA4/CwCwAAAABoHB52AQAAAACN86kUVC3KD7PebLPNlMIZZ5yhVPTo0UMpuAXngwcPVipcOZArlfrTn/6kFPIHRx9//PFK4cADD1QKbsH58OHDlYrLLrtMKbgPqnYFBHlhv9t/Rx99tFLo3bu3UnHVVVcphTvuuEMp7Ljjjkrh29/+tlLhCgiGDRumFEaMGKG0cMsvv7xSWHvttZVCLsFw5VczZ85UCm4/1ylK6t+/v1K48MILlUL+8PJLLrlEKZx55plKIRd91C2fcO8nF64ttdRSSqHueMuv5QrEXHlTnQISd67kD3Cv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ypQpSuGcc85RCnfddZdSOO2005SK3XbbTSnkEp5KLsD67W9/qxRWXnllpeAKNfL7cdxC/z/+8Y9KYZdddlEq8gL+iitUyOUCkydPVgr33Xef0sebOHGiUuH2uysNcMcsl664MpXp06crhXzMXEGE24Z1111XKTz//PNKxSWXXKIUXEHZtttuqxRyQdkGG2ygFKZNm6YUxo0bpxTeeOMNpaJbt25KYdNNN1UKubzLFXw98MADSsGVt+UiK1fo4wrKXPFT3g5XePLcc88phbffflupyOOv4vapmwdzAZI7r13RnSsCy/u+f//+SsEV0uTil0svvVQp5Lm5csoppyiFPL5cEZQrmnJlPbm866CDDlIKbu53ZT2XX365UvHzn/9cKbjCkzzv7rTTTkrhscceUwruOpWLhVy5idsGV5TywgsvKBVf+tKXlMLuu++uFPL89utf/1opuHnRXZPatWunVLjCP3d+unMjX5NcQZUrLMzXdfc9jiuIyfOZK510c6wrLcpzST5eFXes8zb07NlTKbgytzwnVXIp2xVXXKEU/nZ/qRTcebbPPvsoFa6UzRX1Pfroo0ohH6PttttOKWy55ZZK4cknn1Qq8j1e5d1331UKG2+8sVLYfPPNlYo111xTKbg56aGHHlIKuZDKHR93nuVzas8991QK7l7NXT9zSae7V3Nli67QK88Ro0ePVgrDhw9XCnke3HXXXZWC+zn3fi666CKlIo/lirtXP/LII5VCHruu8DFfayrufmDHHXdUKvL9fGXFFVdUCg8++KBS4c6V5ZZbTin069dPKeT7KTe2XDFka8dfdgEAAAAAjcPDLgAAAACgcXjYBQAAAAA0Tqtfs7vkkksqhbx+xH1I+dFHH60UBg4cqFTk9XmV/EHcla5duyqFvG4vf1B25Sc/+YlScP+//bBhw5QK957zmrDKTTfdpBTyhz2vttpqSsF9YHdes+DWPbl1W+5DyfM63g8++EApuHV1N954o1LIa3d69+6tFNwHied1IW5fuTWBbq1VXjP1pz/9SSnstddeSuG4445TCnndhFsbecIJJyiFJ554Qqlo27atUnBr9Nx25e136wvd+qujjjpKKeQPVHfb9Ytf/EIpuA8qz+vO3Dqnb3zjG0ohr6NZdtlllYI71935mdfRuPVebr1Kly5dlMLMmTOViquvvlop3HzzzUrhrbfe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"
                                        ></image>
                                    </pattern>
                                </defs>
                                <g data-name="Group 398" transform="translate(-3393 -133)">
                                    <g data-name="Group 1" transform="translate(2305 33)">
                                        <path
                                            fill="#121212"
                                            d="M0 0H1765V3820H0z"
                                            data-name="Rectangle 1"
                                            transform="translate(1088 100)"
                                        ></path>
                                        <path
                                            fill="url(#pattern)"
                                            d="M0 0H380V126H0z"
                                            data-name="Image 1"
                                            transform="translate(2390 135)"
                                        ></path>
                                        <text
                                            fill="#b8b8b8"
                                            data-name="14:57"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="65"
                                            fontWeight="500"
                                            transform="translate(1210 228)"
                                        >
                                            <tspan x="0" y="0">
                                                14:57
                                            </tspan>
                                        </text>
                                        <path
                                            fill="#1b1b1b"
                                            d="M0 0H1765V7H0z"
                                            data-name="Rectangle 2"
                                            transform="translate(1088 488)"
                                        ></path>
                                        <text
                                            fill="#616161"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="60"
                                            fontWeight="500"
                                            transform="translate(1880 677)"
                                        >
                                            <tspan x="0" y="0">
                                                Amount
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="- 299.47 USDT"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="107"
                                            fontWeight="500"
                                            transform="translate(1965 830)"
                                        >
                                            <tspan x="0" y="0" textAnchor='middle'>
                                                {data.amount}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e6e0e0"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="59"
                                            fontWeight="500"
                                            transform="translate(1976 952)"
                                        >
                                            <tspan x="0" y="0">
                                                Sent
                                            </tspan>
                                        </text>
                                        <path
                                            fill="url(#pattern-2)"
                                            d="M0 0H151V139H0z"
                                            data-name="Image 2"
                                            transform="translate(1767 862)"
                                        ></path>
                                        <path
                                            fill="url(#pattern-3)"
                                            d="M0 0H735V119H0z"
                                            data-name="Image 3"
                                            transform="translate(1618 350)"
                                        ></path>
                                        <rect
                                            width="1608"
                                            height="273"
                                            fill="#1a1a1a"
                                            data-name="Rectangle 3"
                                            rx="21"
                                            transform="translate(1164 1134)"
                                        ></rect>
                                        <text
                                            fill="#e6e0e0"
                                            data-name="Crypto transferred out of OKX"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="57"
                                            fontWeight="500"
                                            transform="translate(1444 1256)"
                                        >
                                            <tspan x="0" y="0">
                                                Crypto transferred out of OKX
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#2680eb"
                                            data-name="Why hasn't my transaction arrived?"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="54"
                                            transform="translate(1444 1329)"
                                        >
                                            <tspan x="0" y="0">
                                                Why hasn&apos;t my transaction arrived?
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#888"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="57"
                                            fontWeight="500"
                                            transform="translate(1167 1595)"
                                        >
                                            <tspan x="0" y="0">
                                                TRC20
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(2765 1595)"
                                        >
                                            <tspan x="0" y="0" textAnchor='end'>
                                                {data.block_chain}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            data-name="On-chain withdrawal"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            transform="translate(2765 1751)"
                                        >
                                            <tspan x="0" y="0" textAnchor='end'>
                                                {data.type}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            data-name="Sent"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            transform="translate(2765 1908)"
                                        >
                                            <tspan x="0" y="0" textAnchor='end'>
                                                {data.status}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            transform="translate(2680 2066)"
                                        >
                                            <tspan x="0" y="0" textAnchor='end'>
                                                {data.address_up}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            data-name="35b25f82b4740f8a7815274a14"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            transform="translate(2680 2292)"
                                        >
                                            <tspan x="0" y="0" textAnchor='end'>
                                                {data.transaction_id_1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            data-name="4f26afdc3929cf621afad032017"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            transform="translate(2680 2360)"
                                        >
                                            <tspan x="0" y="0" textAnchor='end'>
                                                {data.transaction_id_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            data-name="30e05f5ac63"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            transform="translate(2680 2424)"
                                        >
                                            <tspan x="0" y="0" textAnchor='end'>
                                                {data.transaction_id_3}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            data-name="1 USDT"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            transform="translate(2765 2579)"
                                        >
                                            <tspan x="0" y="0" textAnchor='end'>
                                                {data.fee}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            data-name="08/04/2023, 14:56:25"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            transform="translate(2765 2734)"
                                        >
                                            <tspan x="0" y="0" textAnchor='end'>
                                                {data.date_and_time}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            transform="translate(2680 2129)"
                                        >
                                            <tspan x="0" y="0" textAnchor='end'>
                                                {data.address_down}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#888"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="57"
                                            fontWeight="500"
                                            transform="translate(1167 1749)"
                                        >
                                            <tspan x="0" y="0">
                                                Type
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#888"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="57"
                                            fontWeight="500"
                                            transform="translate(1167 1903)"
                                        >
                                            <tspan x="0" y="0">
                                                Status
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#888"
                                            data-name="Address/domain"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="57"
                                            fontWeight="500"
                                            transform="translate(1167 2057)"
                                        >
                                            <tspan x="0" y="0">
                                                Address/domain
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#888"
                                            data-name="Transaction ID"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="57"
                                            fontWeight="500"
                                            transform="translate(1167 2287)"
                                        >
                                            <tspan x="0" y="0">
                                                Transaction ID
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#888"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="57"
                                            fontWeight="500"
                                            transform="translate(1167 2581)"
                                        >
                                            <tspan x="0" y="0">
                                                Fee
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#888"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="57"
                                            fontWeight="500"
                                            transform="translate(1161 2735)"
                                        >
                                            <tspan x="0" y="0">
                                                Time
                                            </tspan>
                                        </text>
                                        <path
                                            fill="#fff"
                                            d="M33.53 92.862a5.722 5.722 0 000 7.735l25.684 27.319a4.93 4.93 0 007.272 0 5.722 5.722 0 000-7.735L44.43 96.72l22.04-23.46a5.722 5.722 0 000-7.735 4.93 4.93 0 00-7.272 0l-25.684 27.32z"
                                            data-name="Path 254"
                                            transform="translate(1142.009 295.791)"
                                        ></path>
                                        <path
                                            fill="#121212"
                                            d="M0 0H157V110H0z"
                                            data-name="Rectangle 463"
                                            transform="translate(1799 874)"
                                        ></path>
                                        <path
                                            fill="#0c8154"
                                            d="M32.52 6.1A26.422 26.422 0 116.1 32.52 26.422 26.422 0 0132.52 6.1zm0 58.942A32.52 32.52 0 100 32.52a32.52 32.52 0 0032.52 32.52zm14.354-38.49a3.045 3.045 0 00-4.306-4.306l-14.1 14.1-5.97-5.97a3.045 3.045 0 00-4.306 4.306l8.13 8.13a3.036 3.036 0 004.306 0z"
                                            data-name="Path 255"
                                            transform="translate(1875.5 899.96)"
                                        ></path>
                                    </g>
                                    <path
                                        fill="#121212"
                                        d="M0 0H1723V161H0z"
                                        data-name="Rectangle 461"
                                        transform="translate(3415 156)"
                                    ></path>
                                    <path
                                        fill="#121212"
                                        d="M0 0H991V155H0z"
                                        data-name="Rectangle 462"
                                        transform="translate(3818 350)"
                                    ></path>
                                    <text
                                        fill="#fff"
                                        data-name="Withdrawal details"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="77"
                                        fontWeight="500"
                                        letterSpacing=".004em"
                                        transform="translate(3955 455)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal details
                                        </tspan>
                                    </text>
                                    <path
                                        fill="none"
                                        stroke="#c5c5c5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="5"
                                        d="M5038.366 2055.503a6.018 6.018 0 00-3.042.543 4.75 4.75 0 00-1.889 2.206 9.282 9.282 0 00-.465 3.554m24.842-6.3a6.018 6.018 0 013.042.543 4.749 4.749 0 011.888 2.206 9.278 9.278 0 01.465 3.553m0 22.714a9.279 9.279 0 01-.465 3.554 4.749 4.749 0 01-1.888 2.206 6.016 6.016 0 01-3.042.543m5.4-20.184v5.048m-17.283-20.193h4.321m-23.336 50.477h16.422c2.42 0 3.63 0 4.555-.55a4.749 4.749 0 001.888-2.206c.471-1.08.471-2.493.471-5.32v-19.182c0-2.827 0-4.24-.471-5.32a4.749 4.749 0 00-1.888-2.206c-.924-.55-2.135-.55-4.555-.55h-16.422c-2.42 0-3.63 0-4.555.55a4.75 4.75 0 00-1.888 2.207c-.471 1.079-.471 2.492-.471 5.319v19.181c0 2.827 0 4.241.471 5.32a4.749 4.749 0 001.889 2.206c.924.551 2.134.551 4.554.551z"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#c5c5c5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="5"
                                        d="M5038.366 2282.269a6.018 6.018 0 00-3.042.543 4.75 4.75 0 00-1.889 2.206 9.282 9.282 0 00-.465 3.554m24.842-6.3a6.018 6.018 0 013.042.543 4.749 4.749 0 011.888 2.206 9.278 9.278 0 01.465 3.553m0 22.714a9.279 9.279 0 01-.465 3.554 4.749 4.749 0 01-1.888 2.206 6.016 6.016 0 01-3.042.543m5.4-20.184v5.048m-17.283-20.193h4.321m-23.336 50.477h16.422c2.42 0 3.63 0 4.555-.55a4.749 4.749 0 001.888-2.206c.471-1.08.471-2.493.471-5.32v-19.182c0-2.827 0-4.24-.471-5.32a4.749 4.749 0 00-1.888-2.206c-.924-.55-2.135-.55-4.555-.55h-16.422c-2.42 0-3.63 0-4.555.55a4.75 4.75 0 00-1.888 2.207c-.471 1.079-.471 2.492-.471 5.319v19.181c0 2.827 0 4.241.471 5.32a4.749 4.749 0 001.889 2.206c.924.551 2.134.551 4.554.551z"
                                        data-name="copy-07-svgrepo-com"
                                    ></path>
                                    <g data-name="Group 391" transform="translate(2353 -270)">
                                        <g data-name="Group 392" transform="translate(-19 273)">
                                            <path
                                                fill="#fff"
                                                d="M113.5 0h1406a113.5 113.5 0 010 227h-1406a113.5 113.5 0 010-227z"
                                                data-name="Path 256"
                                                transform="translate(1125 3582)"
                                            ></path>
                                            <text
                                                data-name="View on blockchain explorer"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="73"
                                                fontWeight="700"
                                                letterSpacing="-.005em"
                                                transform="translate(1485 3721)"
                                            >
                                                <tspan x="0" y="0">
                                                    View on blockchain explorer
                                                </tspan>
                                            </text>
                                        </g>
                                    </g>
                                    <g data-name="Group 397" transform="translate(2336 7)">
                                        <g
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="5"
                                            data-name="Group 395"
                                            transform="translate(30 211)"
                                        >
                                            <g data-name="Rectangle 468">
                                                <path
                                                    stroke="none"
                                                    d="M0 0h17a5 5 0 015 5v42a5 5 0 01-5 5H0V0z"
                                                    transform="translate(1188 1093)"
                                                ></path>
                                                <path
                                                    d="M2.5 2.5H17A2.5 2.5 0 0119.5 5v42a2.5 2.5 0 01-2.5 2.5H2.5h0v-47h0z"
                                                    transform="translate(1188 1093)"
                                                ></path>
                                            </g>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M1245.6 1107.744c13.263 9.576 9.791 1.953 21.463 4.652 7.623 1.766 16.472 8.162 25.729 3.857 22.632-10.523 19.107-3.473 19.463-2.994.246.33-9.018 8.174-19.463 17.752-4.507 3.283-8.549 7.57-15.457 7.662-22.283.3-67.155 0-67.155 0v-38.779s9.338.363 11.749-1.74 3.153-4.211 7.606-6.105 29.31 4 29.31 4 19.553 7.865 8.219 16.348"
                                                data-name="Path 257"
                                            ></path>
                                        </g>
                                        <path
                                            fill="none"
                                            stroke="#fff"
                                            strokeLinejoin="round"
                                            strokeWidth="4.002"
                                            d="M1251.903 1243.15l15.08 5.577s-10.347 2.201-17.173 7.21a34.525 34.525 0 00-10.13 12.815"
                                            data-name="Path 258"
                                        ></path>
                                        <g
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="5"
                                            data-name="Ellipse 134"
                                            transform="translate(1280 1235)"
                                        >
                                            <circle cx="31" cy="31" r="31" stroke="none"></circle>
                                            <circle cx="31" cy="31" r="28.5"></circle>
                                        </g>
                                        <text
                                            fill="#fff"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="30"
                                            letterSpacing=".021em"
                                            transform="translate(1302 1276)"
                                        >
                                            <tspan x="0" y="0">
                                                B
                                            </tspan>
                                        </text>
                                    </g>
                                </g>
                                {
                                    isIOS
                                        ?
                                        <>
                                            <rect
                                                x="0"
                                                y="0"
                                                width="662"
                                                height="21"
                                                fill="#fff"
                                                rx="12"
                                                transform="translate(565 3760)"
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
                                <label>Blockchain</label>
                                <input
                                    type="text"
                                    value={data.block_chain}
                                    name="block_chain"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Type</label>
                                <input
                                    type="text"
                                    value={data.type}
                                    name="type"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Status</label>
                                <input
                                    type="text"
                                    value={data.status}
                                    name="status"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Address/domain</label>
                                <input
                                    type="text"
                                    value={data.address_up}
                                    name="address_up"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.address_down}
                                    name="address_down"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Transation ID</label>
                                <input
                                    type="text"
                                    value={data.transaction_id_1}
                                    name="transaction_id_1"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.transaction_id_2}
                                    name="transaction_id_2"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.transaction_id_3}
                                    name="transaction_id_3"
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
                                    value={data.date_and_time}
                                    name="date_and_time"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <button className="dateTimeBtn" onClick={() => manageTimeDate()}>Current Date and Time</button>
                            </div>
                        </div>
                    </div>
            </div >
        </>
    )
}

export default View9