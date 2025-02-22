
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

const View21 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 21";

    const [data, setData] = useState({
        amount: "-28 USDT",
        network: "TRX",
        address1: "TK5x1SsniHKCvApGZ2ccu1XA",
        address2: "y4mLgVHzzN",
        txid1: "Off-chain Transfer 2441796167",
        txid2: "75",
        withdrawalAmount: "331 USDT",
        networkFee: "0 USDT",
        withdrawalWallet: "Spot Wallet",
        time: "2025-02-21 16:59:13",
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
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 413 894"
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
                                        viewBox="0 0 79 65"
                                    >
                                        <image
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABBCAYAAACQPvn2AAAAAXNSR0IArs4c6QAAB6lJREFUeF7t2HtQVNcdB/DfvXthHy6PheWhsCqLEheUdOpSxAYrSEMK0cRqDIKZTJ2R2qZTp7HahGghqc2jWAygQRQ0RkB8BJCMMVoeJlGno0CEBHGkArryWGCXh/vi7t1zO/uHM23/YHc5MF2Ys//e8z27v89+98y9SwF5TVmAmnKSBIHgYZSA4BE8DAGMKGkewcMQwIiS5hE8DAGMKGkewcMQwIiS5hE8DAGMKGkewcMQwIiS5s1lPJ7nPVkbpHAcd9xkMvmOj40xFEWBUCgEmgIkEFCsv1yeSwN8QFGUGcPC5ajbNs9gMARbWJvmQVc387i3F2k0GjSo1TJ6nQ4QQkgiFtMCRgDKsMWwcJEClGFhKCgoeFzu7ydzWWGKAbfEs1qt73Xc69zzfXu7qKHxGvR0d8OjR484w5MnDG9DQNM0iMUi1sODoaVSKRMSsgCWR0fDqthV7MqVMTA/2D+EoqjhKZo4HXM7vIkJ9v4P7XeXXvryMly/fhPaO+4CZ7UiAU3boUAsEplooEQWi4WemLCAlbOCDdlMUi9vSXT0s5CUlAQxMWouYsmSr728JElOS0xhoVvhmUyWJ80tLdKai7VcQ+M1pru7B7y9vUAZpvzDiqiIosLCwon/nDEzs9iD5797raOjo7S9owMBUKwqMlKUmJgIG19+ifvxj1b4UBRlmoKLUxG3wbNa+Zy2tra3Kyor4WLtF55j408gODgIrX0uNriwsHBosmny8kr8rn19Wddy5zswGE3cM89EMBkZ29j0rVtH5TKvIKckprDILfB4np/X09M/WFVdLSkrL4eehw8t0c9Gi+LjVisPHNjf7cxc586d82v85saD+voG3yHdMKxd8zN4Ne1VSFqbHCqXS3qd2cPVNW6BZzBaa2/fblpfUnqC/erKFU+Znww2bHixPu9vf3XpzPq85ouNJSWllf+or6MXL1rMpKamQNZbWZ1BAb4RrsI4s94t8AYG9fyx46VQXl7BjoyOMgkJCfTrGZtFKSkp/3XGORqos7NT2H7vX7fe3P1mtMFgBB8fH1RcXEwnrlk9I3POyKaOhvzf67ea7tgKDh9hr1y5KpLLA2DLli3su/v3Cl3dx76+S9O37XdvvHGqtbWVtlo5eGffPnbXbzOntJej9/+/4/E8z3z5VZ01v/AwtLX9AOqVasjYlsElxK/3DQoCE0VRvKMhnl4fGh+PoHnqZHb2u6sbGxsMw8M6aXJyMvzqta0eCQkJnLP7OLvOHfCEZRXnTUeKiuju7ocQGRlliItbJQ0PDwPJPBGK/2lcUuj8+Y2OBmpuuWO8fvOmyF8eAJcuXUatrXeY0dERWKZSwf6jR8QJYWEWR3u4et0d8CRFxSfGTp0+zXR1dYN0nheIxCIkFgvZwEC5KCsrq3/N6tgFjgYrP1PJf/DhRygwMIge0unA/hhnNJogankUHMjeN2ebJ84/fNR0/kIVsj/DIhuizWYzLRBQaNmyCHr3H3cbNvwi2csR3umyCj5z506Qyfw5kVgMLMsyLDvBhYcvYd5/789zFk/6UW6+1n6P19ffD0KhmEM2juEBoRUrorjMX+/wXP9CssNfyIWqGuuOzEzw8ZExYokdzwo8z3MBgQH0h3/JEc7VM092MK9AX1F5ltNoHjNSqTdiGAFMTJhppXIx7N27B6Um/1wwWfN4nqfszf39rl0wT+rF8UAxZrMZCQQCWqFQwFxunuyT4uP6Tz89DTr9CIhFEsRaWQBAdECAP+RkZ6Pn162dFM8Oe+bMWes7+/Yz40Yjst/u8AC00WAEhSJ0TuOFflJ8/GFJ6Ulao+kFhvFENhtHSyQiFBoaAm/9aQ+3PuWFSe/TeJ4XfvxxgSX34EEL4ykU+fnLwWQyg06ns+OxJUcPy9Rq9bT/QeDwLHF0UONeHxgYCDv/+cWuC1XVrEbz2JPngeM4DqRSCaNQhMBvdu68vXFD6k8mex+9Xr+wqrr2QdHRItDpRxnOZgMBw4AHw7CRKpVnbfX5GZlzRjZ1FbSpudX2fftd2mS2ACMQIPt/dZSA0sr9/HIjwhcVqNVqq4Mzb8E/bzVp/p6XR9+4cRMZTSaIjY2l4+LiQBEaem/H9tdVrn4mZ9a7BR7P8zQACCiKmhTpUV9f8pBWe4RlWZ/AAHmjMky512g0eg9oh1qv1tVB6YkTqL+/n1apVLB9+/aD6Vs2v01R1LQ/WTyFdQs8Z77lu/fv19XU1KxrqK+DocEhtHDRQjr+uXgwmy3Q1NTMNbU0MyMjo1ziukRI35qWui0t7aoz++KsmTV4Dd98yx86dAhuXP+WY9kJRiwSc8rwcKa3tw/0+hE2MDiIiVHH0Gmbf6nYtGnTYxwUZ7OzBq/s7LmRgvx8X93wEMjlchjUatHY2DgdolBwS5YuHX3l5ZeWp6ena50dfDrWzRq8lpaWBWVnzp787LNTzw9rB5EqKlLz4iubV+Xm5AxMB8RU9pg1eE+Hy8nJ8e3r62OPHTs27fdtrgLOOjxXB5zJ9QQPQ5fgETwMAYwoaR7BwxDAiJLmETwMAYwoaR7BwxDAiJLmETwMAYwoaR7BwxDAiJLmETwMAYwoaR7BwxDAiJLmETwMAYwoaR7BwxDAiJLmYeD9GyQTEG+7e/wGAAAAAElFTkSuQmCC"
                                            width="79"
                                            height="65"
                                        ></image>
                                    </pattern>
                                </defs>
                                <g id="Group_107" data-name="Group 107" transform="translate(-593 -93)">
                                    <path
                                        id="Rectangle_87"
                                        fill="#fff"
                                        d="M0 0h413v894H0z"
                                        data-name="Rectangle 87"
                                        transform="translate(593 93)"
                                    ></path>
                                    <g id="Group_106" data-name="Group 106" transform="translate(471)">
                                        <g id="Group_8" data-name="Group 8" transform="translate(142 159.792)">
                                            <path
                                                id="Rectangle_2"
                                                d="M0 0h12.978v1.854H0Z"
                                                data-name="Rectangle 2"
                                                transform="translate(2.291 5.475)"
                                            ></path>
                                            <path
                                                id="Rectangle_3"
                                                d="M0 0h7.647v1.854H0Z"
                                                data-name="Rectangle 3"
                                                transform="rotate(47 -5.28 4.643)"
                                            ></path>
                                            <path
                                                id="Rectangle_4"
                                                d="M0 0h8.8v1.854H0Z"
                                                data-name="Rectangle 4"
                                                transform="rotate(-47 7.407 3.22)"
                                            ></path>
                                        </g>
                                        <text
                                            id="Withdrawal_Details"
                                            data-name="Withdrawal Details"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="17"
                                            fontWeight="700"
                                            letterSpacing=".053em"
                                            transform="translate(251 172)"
                                        >
                                            <tspan x="0" y="0">
                                                Withdrawal Details
                                            </tspan>
                                        </text>
                                        <g id="Group_104" data-name="Group 104">
                                            <text
                                                id="Completed"
                                                fill="#549d89"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="14"
                                                fontWeight="500"
                                                letterSpacing=".038em"
                                                transform="translate(305 279)"
                                            >
                                                <tspan x="0" y="0">
                                                    Completed
                                                </tspan>
                                            </text>
                                            <g id="Group_99" data-name="Group 99" transform="translate(9 -17.09)">
                                                <ellipse
                                                    id="Ellipse_30"
                                                    cx="7.273"
                                                    cy="7.7"
                                                    fill="#39bc88"
                                                    data-name="Ellipse 30"
                                                    rx="7.273"
                                                    ry="7.7"
                                                    transform="translate(273 283.09)"
                                                ></ellipse>
                                                <path
                                                    id="Path_49"
                                                    fill="#fff"
                                                    d="m10651.3-12519.592 1.12-1.119 2.4 2.4.882-.882 3.908-3.908 1.221 1.221-5.943 5.946Z"
                                                    data-name="Path 49"
                                                    transform="translate(-10375.69 12810.359)"
                                                ></path>
                                            </g>
                                            <text
                                                id="Crypto_transferred_out_of_Binance._Please_contact_the_recipient_platform"
                                                fill="#757b8b"
                                                data-name="Crypto transferred out of Binance. Please contact the recipient platform"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="13"
                                                letterSpacing="-.005em"
                                                transform="translate(151 307)"
                                            >
                                                <tspan x="0" y="0">
                                                    Crypto transferred out of Binance. Please contact the recipient
                                                </tspan>
                                            </text>
                                            <text
                                                id="for_your_transaction_receipt."
                                                fill="#757b8b"
                                                data-name="for your transaction receipt."
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="13"
                                                letterSpacing="-.005em"
                                                transform="translate(223 323)"
                                            >
                                                <tspan x="0" y="0">
                                                    platform for your transaction receipt.
                                                </tspan>
                                            </text>
                                            <text
                                                id="Why_hasn_t_my_withdrawal_arrived_"
                                                fill="#cba930"
                                                data-name="Why hasn't my withdrawal arrived?"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="13"
                                                fontWeight="500"
                                                letterSpacing=".012em"
                                                transform="translate(227 342)"
                                            >
                                                <tspan x="0" y="0">
                                                    Why hasn&apos;t my withdrawal arrived?
                                                </tspan>
                                            </text>
                                        </g>
                                        <g
                                            id="Group_100"
                                            fill="#8b8e93"
                                            data-name="Group 100"
                                            fontFamily="Roboto-Regular, Roboto"
                                        >
                                            <text id="Network" fontSize="15" transform="translate(138 423)">
                                                <tspan x="0" y="0">
                                                    Network
                                                </tspan>
                                            </text>
                                            <text
                                                id="Address"
                                                fontSize="14"
                                                letterSpacing=".029em"
                                                transform="translate(138 459)"
                                            >
                                                <tspan x="0" y="0">
                                                    Address
                                                </tspan>
                                            </text>
                                            <text id="Txid" fontSize="15" transform="translate(137 515)">
                                                <tspan x="0" y="0">
                                                    Txid
                                                </tspan>
                                            </text>
                                            <text
                                                id="Withdrawal_Amount"
                                                data-name="Withdrawal Amount"
                                                fontSize="14"
                                                letterSpacing=".038em"
                                                transform="translate(138 572)"
                                            >
                                                <tspan x="0" y="0">
                                                    Withdrawal Amount
                                                </tspan>
                                            </text>
                                            <text
                                                id="Network_fee"
                                                data-name="Network fee"
                                                fontSize="14"
                                                letterSpacing=".028em"
                                                transform="translate(139 612)"
                                            >
                                                <tspan x="0" y="0">
                                                    Network fee
                                                </tspan>
                                            </text>
                                            <text
                                                id="Withdrawal_Wallet"
                                                data-name="Withdrawal Wallet"
                                                fontSize="14"
                                                letterSpacing=".041em"
                                                transform="translate(138 652)"
                                            >
                                                <tspan x="0" y="0">
                                                    Withdrawal Wallet
                                                </tspan>
                                            </text>
                                            <text id="Date" fontSize="14" transform="translate(139 693)">
                                                <tspan x="0" y="0">
                                                    Date
                                                </tspan>
                                            </text>
                                        </g>
                                        <g id="Group_101" data-name="Group 101">
                                            <rect
                                                id="Rectangle_88"
                                                width="181"
                                                height="48"
                                                fill="#ebecf0"
                                                data-name="Rectangle 88"
                                                rx="9"
                                                transform="translate(139 890)"
                                            ></rect>
                                            <rect
                                                id="Rectangle_89"
                                                width="181"
                                                height="48"
                                                fill="#ebecf0"
                                                data-name="Rectangle 89"
                                                rx="9"
                                                transform="translate(337 890)"
                                            ></rect>
                                            <text
                                                id="Scam_Report"
                                                data-name="Scam Report"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="16"
                                                fontWeight="500"
                                                letterSpacing=".032em"
                                                transform="translate(180 919)"
                                            >
                                                <tspan x="0" y="0">
                                                    Scam Report
                                                </tspan>
                                            </text>
                                            <text
                                                id="Save_Address"
                                                data-name="Save Address"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="16"
                                                fontWeight="500"
                                                letterSpacing=".032em"
                                                transform="translate(376 919)"
                                            >
                                                <tspan x="0" y="0">
                                                    Save Address
                                                </tspan>
                                            </text>
                                        </g>
                                        <g id="Group_102" data-name="Group 102">
                                            <path
                                                id="Rectangle_91"
                                                fill="#fff"
                                                d="M0 0h156v18H0z"
                                                data-name="Rectangle 91"
                                                transform="translate(250 966)"
                                            ></path>

                                            {
                                                isIOS
                                                    ?
                                                    <>
                                                        <rect
                                                            id="Rectangle_90"
                                                            width="147"
                                                            height="5"
                                                            fill="#020202"
                                                            data-name="Rectangle 90"
                                                            rx="2.5"
                                                            transform="translate(255 973)"
                                                        ></rect>
                                                    </>
                                                    :
                                                    <></>
                                            }
                                        </g>
                                        <text
                                            id="_-37_USDT"
                                            data-name="-37 USDT"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="28"
                                            fontWeight="700"
                                            letterSpacing=".017em"
                                            transform="translate(328 242)"
                                        >
                                            <tspan x="0" y="0" textAnchor="middle">
                                                {data.amount}
                                            </tspan>
                                        </text>
                                        <path
                                            id="Rectangle_187"
                                            fill="#efefef"
                                            d="M0 0h413v1.861H0Z"
                                            data-name="Rectangle 187"
                                            transform="translate(122 373)"
                                        ></path>
                                        <g id="Group_105" data-name="Group 105">
                                            <text
                                                id="TRX"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="14"
                                                fontWeight="500"
                                                transform="translate(512 423)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.network}
                                                </tspan>
                                            </text>
                                            <text
                                                id="TK5x1SsniHKCvApGZ2ccu1XA"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="14"
                                                fontWeight="500"
                                                letterSpacing=".023em"
                                                transform="translate(499 459)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.address1}
                                                </tspan>
                                            </text>
                                            <text
                                                id="y4mLgVHzzN"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="14"
                                                fontWeight="500"
                                                letterSpacing=".019em"
                                                transform="translate(499 478)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.address2}
                                                </tspan>
                                            </text>
                                            <text
                                                id="Off-chain_Transfer_2441796167"
                                                data-name="Off-chain Transfer 2441796167"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="14"
                                                fontWeight="500"
                                                letterSpacing=".027em"
                                                transform="translate(499 515)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.txid1}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_75"
                                                data-name="75"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="14"
                                                fontWeight="500"
                                                letterSpacing=".027em"
                                                transform="translate(499 534)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.txid2}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_331_USDT"
                                                data-name="331 USDT"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="14"
                                                fontWeight="500"
                                                letterSpacing=".027em"
                                                transform="translate(520 572)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.withdrawalAmount}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_0_USDT"
                                                data-name="0 USDT"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="14"
                                                fontWeight="500"
                                                letterSpacing=".027em"
                                                transform="translate(520 612)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.networkFee}
                                                </tspan>
                                            </text>
                                            <text
                                                id="Spot_Wallet"
                                                data-name="Spot Wallet"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="14"
                                                fontWeight="500"
                                                letterSpacing=".027em"
                                                transform="translate(520 652)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.withdrawalWallet}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_2025-02-21_16:59:13"
                                                data-name="2025-02-21 16:59:13"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="14"
                                                fontWeight="500"
                                                letterSpacing=".03em"
                                                transform="translate(521 693)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.time}
                                                </tspan>
                                            </text>
                                            <path
                                                id="Rectangle_193"
                                                fill="#b4b4b4"
                                                d="M0 0h7.976v10.635H0Z"
                                                data-name="Rectangle 193"
                                                transform="translate(504.998 449.215)"
                                            ></path>
                                            <path
                                                id="Path_50"
                                                fill="#b4b4b4"
                                                d="M11989-7161.5h8.029v9.433h-2.309v-7.125h-5.72Z"
                                                data-name="Path 50"
                                                transform="translate(-11480.027 7607.5)"
                                            ></path>
                                            <path
                                                id="Rectangle_193-2"
                                                fill="#b4b4b4"
                                                d="M0 0h7.976v10.635H0Z"
                                                data-name="Rectangle 193"
                                                transform="translate(504.998 504.215)"
                                            ></path>
                                            <path
                                                id="Path_50-2"
                                                fill="#b4b4b4"
                                                d="M11989-7161.5h8.029v9.433h-2.309v-7.125h-5.72Z"
                                                data-name="Path 50"
                                                transform="translate(-11480.027 7662.5)"
                                            ></path>
                                        </g>
                                        <path
                                            id="Adobe_Express_-_file"
                                            fill="url(#pattern)"
                                            d="M0 0h51v42H0z"
                                            data-name="Adobe Express - file"
                                            transform="translate(478 147)"
                                        ></path>
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
                            <label>Network</label>
                            <input
                                type="text"
                                value={data.network}
                                name="network"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Address</label>
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
                            <label>Txid</label>
                            <input
                                type="text"
                                value={data.txid1}
                                name="txid1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.txid2}
                                name="txid2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Withdrawal Amount</label>
                            <input
                                type="text"
                                value={data.withdrawalAmount}
                                name="withdrawalAmount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Network fee</label>
                            <input
                                type="text"
                                value={data.networkFee}
                                name="networkFee"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Withdrawal Wallet</label>
                            <input
                                type="text"
                                value={data.withdrawalWallet}
                                name="withdrawalWallet"
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
                    </div>
                </div>

            </div>

        </>
    )
}

export default View21