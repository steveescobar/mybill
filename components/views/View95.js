"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from "@/utils/getPicture";
import Image from "next/image";
import { InterBaseEncoded } from "@/utils/encodedFonts/InterBaseEncoded";
import Page93Icons from "../options/Page93Icons";

const View95 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 95";

    const [data, setData] = useState({
        amount1: "0.002306 BTC",
        amount2: "$161.35",
        price: "$69,969.0",
        network: "Bitcoin",
        transaction_h1: "44b5b4...446ee",
        transaction_h2: "f",
        date: "6:24 PM — Oct 28, 2024",
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
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };

        // Format time first
        const formattedTime = date.toLocaleString('en-US', options);

        // Get month abbreviation
        const monthAbbreviation = date.toLocaleString('en-US', { month: 'short' });

        // Format full date as desired
        const formattedDate = `${formattedTime} — ${monthAbbreviation} ${date.getDate()}, ${date.getFullYear()}`;

        return setData({
            ...data,
            date: formattedDate
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
            0,
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
                                <g id="bill_96" data-name="bill 96" transform="translate(-1137.001 -153)">
                                    <path
                                        id="Rectangle_8"
                                        fill="#fff"
                                        d="M0 0h590v1280H0z"
                                        data-name="Rectangle 8"
                                        transform="translate(1138.001 153)"
                                    ></path>
                                    <path
                                        id="arrow-right-solid"
                                        d="M20.788 73.783a1.423 1.423 0 0 0 0-2.08l-7.712-7.349a1.6 1.6 0 0 0-2.184 0 1.423 1.423 0 0 0 0 2.08l5.086 4.84H1.189c-.854 0-.539.613-.539 1.425s-.314 1.514.539 1.514h14.783L10.9 79.054a1.423 1.423 0 0 0 0 2.08 1.6 1.6 0 0 0 2.184 0l7.712-7.347Z"
                                        transform="rotate(180 596.585 172.283)"
                                    ></path>
                                    <path
                                        id="Line_11"
                                        fill="none"
                                        stroke="#f6f6f6"
                                        strokeWidth="1"
                                        d="m0 0 468 1"
                                        data-name="Line 11"
                                        transform="translate(1138.001 422.5)"
                                    ></path>
                                    <text
                                        id="Received_BTC"
                                        data-name="Received BTC"
                                        fontFamily="CoinbaseSans-Medium, Coinbase Sans"
                                        fontSize="30"
                                        fontWeight="500"
                                        transform="translate(1333.001 283.073)"
                                    >
                                        <tspan x="0" y="0">
                                            Received BTC
                                        </tspan>
                                    </text>
                                    <text
                                        id="_0.002306_BTC"
                                        fill="#606069"
                                        data-name="0.002306 BTC"
                                        fontFamily="CoinbaseSans-Regular, Coinbase Sans"
                                        fontSize="30"
                                        transform="translate(1432 385)"
                                    >
                                        <tspan x="0" y="0" textAnchor="middle">
                                            {data.amount1}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_161.35"
                                        data-name="$161.35"
                                        fontFamily="CoinbaseText-Regular, Coinbase Text"
                                        fontSize="44"
                                        transform="translate(1432 436)"
                                    >
                                        <tspan x="0" y="0" textAnchor="middle">
                                            {data.amount2}
                                        </tspan>
                                    </text>
                                    <text
                                        id="Price"
                                        fontFamily="CoinbaseSans-Regular, Coinbase Sans"
                                        fontSize="30"
                                        transform="translate(1167 568)"
                                    >
                                        <tspan x="0" y="0">
                                            Price
                                        </tspan>
                                    </text>
                                    <text
                                        id="_69_969.02"
                                        fill="#606069"
                                        data-name="$69,969.02"
                                        fontFamily="CoinbaseSans-Regular, Coinbase Sans"
                                        fontSize="30"
                                        transform="translate(1695 568)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.price}
                                        </tspan>
                                    </text>
                                    <text
                                        id="Network"
                                        fill="#1f2024"
                                        fontFamily="CoinbaseSans-Regular, Coinbase Sans"
                                        fontSize="30"
                                        transform="translate(1167 650)"
                                    >
                                        <tspan x="0" y="0">
                                            Network
                                        </tspan>
                                    </text>
                                    <text
                                        id="Bitcoin"
                                        fill="#606069"
                                        fontFamily="CoinbaseSans-Regular, Coinbase Sans"
                                        fontSize="30"
                                        transform="translate(1695 650)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.network}
                                        </tspan>
                                    </text>
                                    <text
                                        id="Transaction_hash"
                                        fill="#1f2024"
                                        data-name="Transaction hash"
                                        fontFamily="CoinbaseSans-Regular, Coinbase Sans"
                                        fontSize="30"
                                        transform="translate(1167 732)"
                                    >
                                        <tspan x="0" y="0">
                                            Transaction hash
                                        </tspan>
                                    </text>
                                    <text
                                        id="_44b5b4...446ee"
                                        fill="#606069"
                                        data-name="44b5b4...446ee"
                                        fontFamily="CoinbaseSans-Regular, Coinbase Sans"
                                        fontSize="30"
                                        transform="translate(1695 732)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.transaction_h1}
                                        </tspan>
                                    </text>
                                    <text
                                        id="f"
                                        fill="#606069"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="30"
                                        transform="translate(1695 771)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.transaction_h2}
                                        </tspan>
                                    </text>
                                    <text
                                        id="Date"
                                        fill="#1f2024"
                                        fontFamily="CoinbaseSans-Regular, Coinbase Sans"
                                        fontSize="30"
                                        transform="translate(1167 854)"
                                    >
                                        <tspan x="0" y="0">
                                            Date
                                        </tspan>
                                    </text>
                                    <text
                                        id="_6:24_PM_-_Oct_28_2024"
                                        fill="#606069"
                                        data-name="6:24 PM - Oct 28, 2024"
                                        fontFamily="CoinbaseSans-Regular, Coinbase Sans"
                                        fontSize="30"
                                        transform="translate(1695 854)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            {data.date}
                                        </tspan>
                                    </text>
                                    <path
                                        id="Path_9"
                                        fill="#f7961b"
                                        d="M29.648 18.825A10.825 10.825 0 1 1 18.824 8a10.825 10.825 0 0 1 10.824 10.825m-6.185-1.54c.214-1.44-.882-2.213-2.386-2.732l.484-1.951-1.193-.3-.477 1.9q-.471-.118-.954-.223l.477-1.909-1.193-.3-.489 1.951q-.387-.087-.76-.179l-1.618-.415-.315 1.273s.882.2.864.214a.635.635 0 0 1 .555.69l-.558 2.219q.061.017.119.039c-.039-.008-.084-.021-.126-.031l-.773 3.115a.435.435 0 0 1-.545.284c.013.018-.864-.214-.864-.214l-.589 1.358 1.551.384q.43.112.847.218l-.49 1.974 1.193.3.489-1.95q.477.128.947.239l-.5 1.945 1.193.3.487-1.967c2.028.384 3.548.227 4.19-1.6a2.085 2.085 0 0 0-1.092-2.881 1.89 1.89 0 0 0 1.514-1.742Zm-2.715 3.805c-.366 1.476-2.85.676-3.658.477l.65-2.614c.8.2 3.387.6 3 2.139Zm.366-3.827c-.336 1.34-2.4.659-3.072.493l.589-2.369c.672.166 2.829.477 2.479 1.877Z"
                                        data-name="Path 9"
                                        transform="translate(1565 620.142)"
                                    ></path>
                                    <path
                                        id="arrow-right-solid-2"
                                        fill="#24654f"
                                        d="M14.365 7.082a1.03 1.03 0 0 0 0-1.5L8.881.309a1.13 1.13 0 0 0-1.552 0 1.03 1.03 0 0 0 0 1.5l3.581 3.845L.4 5.465c-.607 0-.349.254-.349.84s-.22 1.088.384 1.088h10.5l-3.604 3.478a1.03 1.03 0 0 0 0 1.5 1.13 1.13 0 0 0 1.552 0l5.482-5.28Z"
                                        data-name="arrow-right-solid"
                                        transform="rotate(90 42.317 1165.729)"
                                    ></path>
                                    <g
                                        id="Ellipse_6"
                                        fill="none"
                                        stroke="#24654f"
                                        strokeWidth="2"
                                        data-name="Ellipse 6"
                                        transform="translate(1177.592 1106)"
                                    >
                                        <ellipse cx="23" cy="23.5" stroke="none" rx="23" ry="23.5"></ellipse>
                                        <ellipse cx="23" cy="23.5" rx="22" ry="22.5"></ellipse>
                                    </g>
                                    <circle
                                        id="Ellipse_7"
                                        cx="12.725"
                                        cy="12.725"
                                        r="12.725"
                                        fill="#fff"
                                        data-name="Ellipse 7"
                                        transform="translate(1203.708 1134)"
                                    ></circle>
                                    <path
                                        id="Path_10"
                                        fill="#f98806"
                                        d="M33.385 20.693A12.693 12.693 0 1 1 20.693 8a12.693 12.693 0 0 1 12.692 12.693m-7.253-1.806c.254-1.689-1.034-2.594-2.792-3.2l.569-2.285-1.4-.348-.551 2.223a37 37 0 0 0-1.116-.261l.558-2.246-1.4-.348-.574 2.285c-.3-.066-.6-.138-.888-.209l-1.919-.481-.368 1.489s1.034.235 1.015.254a.744.744 0 0 1 .65.809l-.659 2.6a2 2 0 0 1 .143.046c-.046-.01-.1-.025-.149-.036l-.911 3.649a.51.51 0 0 1-.635.333c.015.02-1.015-.254-1.015-.254L14 24.5l1.811.451c.338.088.665.174.993.254l-.579 2.314 1.4.348.574-2.285q.553.15 1.111.287l-.569 2.277 1.4.348.579-2.309c2.375.451 4.161.267 4.913-1.879a2.446 2.446 0 0 0-1.279-3.378 2.214 2.214 0 0 0 1.777-2.042Zm-3.182 4.462c-.43 1.73-3.342.793-4.289.558l.762-3.065c.942.235 3.972.7 3.521 2.508Zm.43-4.488c-.393 1.571-2.815.773-3.6.579l.69-2.78c.788.194 3.317.564 2.907 2.2Z"
                                        data-name="Path 10"
                                        transform="translate(1196.098 1126)"
                                    ></path>
                                    <text
                                        id="Status"
                                        fill="#040507"
                                        fontFamily="CoinbaseSans-Regular, Coinbase Sans"
                                        fontSize="30"
                                        transform="translate(1246.872 1141)"
                                    >
                                        <tspan x="0" y="0">
                                            Status
                                        </tspan>
                                    </text>
                                    <text
                                        id="Completed"
                                        fill="#060709"
                                        fontFamily="CoinbaseSans-Regular, Coinbase Sans"
                                        fontSize="30"
                                        transform="translate(1695 1141)"
                                    >
                                        <tspan x="0" y="0" textAnchor="end">
                                            Completed
                                        </tspan>
                                    </text>
                                    <rect
                                        id="Rectangle_9"
                                        width="522"
                                        height="87"
                                        fill="#f0f1f6"
                                        data-name="Rectangle 9"
                                        rx="43.5"
                                        transform="translate(1171.501 1184)"
                                    ></rect>
                                    <text
                                        id="View_on_block_explorer"
                                        data-name="View on block explorer"
                                        fontFamily="CoinbaseSans-Medium, Coinbase Sans"
                                        fontSize="30.15"
                                        fontWeight="500"
                                        transform="translate(1265.501 1240.5)"
                                    >
                                        <tspan x="0" y="0">
                                            View on block explorer
                                        </tspan>
                                    </text>
                                    <path
                                        id="Path_5"
                                        fill="none"
                                        stroke="rgba(112,112,112,0.16)"
                                        strokeWidth="1"
                                        d="M0 0h591"
                                        data-name="Path 5"
                                        transform="translate(1137.001 1073.5)"
                                    ></path>

                                    {
                                        isIOS
                                            ?
                                            <path
                                                id="Rectangle_14"
                                                d="M3.133 0h203.03a3.1 3.1 0 0 1 3.137 3.07 3.1 3.1 0 0 1-3.133 3.07H3.133A3.1 3.1 0 0 1 0 3.07 3.1 3.1 0 0 1 3.133 0"
                                                data-name="Rectangle 14"
                                                transform="translate(1328.353 1415.397)"
                                            ></path>
                                            :
                                            <></>
                                    }
                                    <path
                                        id="Path_11"
                                        fill="none"
                                        stroke="#000"
                                        strokeWidth="2.5"
                                        d="M2277.366 1003.905h-8.476v-14.472l11.4-9.207 10.371 9.207v14.467h-8.476v-9.353h-4.818Z"
                                        data-name="Path 11"
                                        transform="translate(-1062.443 367.185)"
                                    ></path>
                                    <g
                                        id="Ellipse_8"
                                        fill="none"
                                        stroke="#000"
                                        strokeWidth="2.5"
                                        data-name="Ellipse 8"
                                        transform="translate(1311.556 1346)"
                                    >
                                        <circle cx="13" cy="13" r="13" stroke="none"></circle>
                                        <circle cx="13" cy="13" r="11.75"></circle>
                                    </g>
                                    <path
                                        id="Path_12"
                                        fill="none"
                                        stroke="#000"
                                        strokeWidth="2.5"
                                        d="M2363.5 980.227v12.378h11.659"
                                        data-name="Path 12"
                                        transform="translate(-1039.013 366.192)"
                                    ></path>
                                    <g
                                        id="Ellipse_9"
                                        fill="none"
                                        stroke="#000"
                                        strokeWidth="2.5"
                                        data-name="Ellipse 9"
                                        transform="translate(1632.556 1345)"
                                    >
                                        <circle cx="13.5" cy="13.5" r="13.5" stroke="none"></circle>
                                        <circle cx="13.5" cy="13.5" r="12.25"></circle>
                                    </g>
                                    <path
                                        id="Path_1"
                                        d="M6.181 4.559H0L3.09 0Z"
                                        data-name="Path 1"
                                        transform="rotate(45 -806.85 2665.643)"
                                    ></path>
                                    <path
                                        id="Path_2"
                                        d="m4.194 2.086-1.986 2.93h3.973zm0-2.086 4.195 6.187H0Z"
                                        data-name="Path 2"
                                        transform="rotate(45 -805.04 2664.832)"
                                    ></path>
                                    <path
                                        id="Path_3"
                                        d="M6.181 4.559H0L3.09 0Z"
                                        data-name="Path 3"
                                        transform="rotate(-135 1104.476 342.62)"
                                    ></path>
                                    <path
                                        id="Path_4"
                                        d="m4.194 2.086-1.986 2.93h3.973zm0-2.086 4.195 6.187H0Z"
                                        data-name="Path 4"
                                        transform="rotate(-135 1104.812 343.37)"
                                    ></path>
                                    <path
                                        id="Path_15"
                                        d="M28.407 0a1.7 1.7 0 0 1 .693.15l9.733 4.136a3.21 3.21 0 0 1 1.981 2.95c-.026 5.127-2.131 14.508-11.04 18.772a3.16 3.16 0 0 1-2.73 0C18.131 21.744 16.025 12.363 16 7.236a3.21 3.21 0 0 1 1.98-2.956L27.718.144A1.65 1.65 0 0 1 28.407 0m0 3.453-9.548 3.783v.073a19.8 19.8 0 0 0 2.425 8.929 23.95 23.95 0 0 0 7.124 6.756c7.132-3.458 9.05-11.1 9.1-15.687Z"
                                        data-name="Path 15"
                                        transform="translate(1403.19 1345.34)"
                                    ></path>
                                    <path
                                        id="Rectangle_15"
                                        d="M0 0h3v21H0z"
                                        data-name="Rectangle 15"
                                        transform="translate(1430.097 1347.999)"
                                    ></path>
                                    <circle
                                        id="Ellipse_1"
                                        cx="25.5"
                                        cy="25.5"
                                        r="25.5"
                                        fill="#f5f8fd"
                                        data-name="Ellipse 1"
                                        transform="translate(1512.556 1334)"
                                    ></circle>
                                    <path
                                        id="Path_13"
                                        fill="#0962fa"
                                        d="M.836.106a1.98 1.98 0 0 1 1.53.148l2.409 1.412L7.193.254a1.96 1.96 0 0 1 1.868 0l2.409 1.412L13.878.254a1.96 1.96 0 0 1 1.864 0l2.409 1.412L20.559.254A1.98 1.98 0 0 1 22.1.106a1.03 1.03 0 0 1 .836.89v18.938a1.03 1.03 0 0 1-.836.89 1.98 1.98 0 0 1-1.529-.147l-2.409-1.412-2.409 1.412a1.96 1.96 0 0 1-1.864 0l-2.419-1.41-2.409 1.41a1.96 1.96 0 0 1-1.864 0l-2.418-1.41-2.408 1.412a1.98 1.98 0 0 1-1.529.147A1.03 1.03 0 0 1 0 19.934V1A1.03 1.03 0 0 1 .836.106m4.9 5.788c-.525 0-.955.294-.955.653s.43.653.955.653H17.2c.525 0 .955-.294.955-.653s-.43-.653-.955-.653Zm-.955 8.487c0 .359.43.653.955.653H17.2c.525 0 .955-.294.955-.653s-.43-.653-.955-.653H5.735c-.525 0-.955.3-.955.655Zm.955-4.568c-.525 0-.955.294-.955.653s.43.658.955.658H17.2c.525 0 .955-.294.955-.653s-.43-.653-.955-.653Z"
                                        data-name="Path 13"
                                        transform="translate(1526.586 1349.769)"
                                    ></path>
                                    <path
                                        id="Rectangle_10"
                                        fill="#0962fa"
                                        d="M0 0h22.939v19.498H0z"
                                        data-name="Rectangle 10"
                                        transform="translate(1526.586 1348.316)"
                                    ></path>
                                    <path
                                        id="Path_14"
                                        fill="#fff"
                                        d="M0 0h12.616v2.294H0Z"
                                        data-name="Path 14"
                                        transform="translate(1531.174 1355.198)"
                                    ></path>
                                    <path
                                        id="Rectangle_13"
                                        fill="#fff"
                                        d="M0 0h8.029v2.294H0z"
                                        data-name="Rectangle 13"
                                        transform="translate(1531.174 1359.785)"
                                    ></path>
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
                            <label>Amount</label>
                            <input
                                type="text"
                                value={data.amount1}
                                name="amount1"
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
                            <label>Price</label>
                            <input
                                type="text"
                                value={data.price}
                                name="price"
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
                            <label>Transaction Hash</label>
                            <input
                                type="text"
                                value={data.transaction_h1}
                                name="transaction_h1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.transaction_h2}
                                name="transaction_h2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Date</label>
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

export default View95;