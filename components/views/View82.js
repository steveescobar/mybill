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

const View82 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 82";

    const [data, setData] = useState({
        time: "10:37PM",
        amount: "0.00291 BTC",
        amount2: "0.00291 BTC",
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
    
        // Format time as 10:37PM
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert '0' hour to '12'
        minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero to minutes
        
        const formattedTime = hours + ':' + minutes + ampm;
        
        return setData({
            ...data,
            time: formattedTime
        });
    }


    const takeScreenshot = async () => {
        await getPicture(
            setPreview,
            setIsPreview,
            screenshotRef,
            setIsLoading,
            toast,
            1,
            2.5,
            0.2,
            2.5
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
                                viewBox="0 0 620 1293"

                            >

                                <style>
                                    {
                                        InterBaseEncoded
                                    }
                                </style>

                                <defs>
                                    <filter
                                        id="Path_1"
                                        x={0}
                                        y={0}
                                        width={620}
                                        height={206}
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset dy={2} input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation={5} result="blur" />
                                        <feFlood floodOpacity={0.478} />
                                        <feComposite operator="in" in2="blur" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                </defs>
                                <g id="Group_7" data-name="Group 7" transform="translate(-1624 -302)">
                                    <rect
                                        id="Rectangle_1"
                                        data-name="Rectangle 1"
                                        width={590}
                                        height={1280}
                                        transform="translate(1639 315)"
                                        fill="#202125"
                                    />
                                    <g transform="matrix(1, 0, 0, 1, 1624, 302)" filter="url(#Path_1)">
                                        <path
                                            id="Path_1-2"
                                            data-name="Path 1"
                                            d="M0,0H590V176H0Z"
                                            transform="translate(15 13)"
                                            fill="#2f3034"
                                        />
                                    </g>
                                    <path
                                        id="Exclusion_1"
                                        data-name="Exclusion 1"
                                        d="M1875,1358H1327V369h548v989ZM1386,442a30.034,30.034,0,0,0-30,30v726a30.034,30.034,0,0,0,30,30h430a30.034,30.034,0,0,0,30-30V472a30.034,30.034,0,0,0-30-30Z"
                                        transform="translate(333 228)"
                                        fill="#27282a"
                                    />
                                    <g id="Group_3" data-name="Group 3" transform="translate(661.63)">
                                        <g
                                            id="left-arrow-chevron-svgrepo-com"
                                            transform="translate(901.105 427.586)"
                                        >
                                            <g
                                                id="Group_1"
                                                data-name="Group 1"
                                                transform="translate(103.895 4.153)"
                                            >
                                                <path
                                                    id="Path_2"
                                                    data-name="Path 2"
                                                    d="M93.6,1.814,91.833,0,77.895,13.537,91.833,27.076,93.6,25.261,81.527,13.537Z"
                                                    transform="translate(-77.895)"
                                                    fill="#93969b"
                                                    stroke="#93969b"
                                                    strokeWidth={1.5}
                                                />
                                            </g>
                                        </g>
                                        <path
                                            id="archive-box-bold-svgrepo-com"
                                            d="M54.3,34.151s0-.007,0-.011c-.006-.051-.013-.1-.024-.151l0-.017c-.011-.047-.023-.094-.037-.14,0-.01-.007-.02-.011-.03-.014-.041-.029-.081-.046-.12l0-.009-2.1-4.736A1.579,1.579,0,0,0,50.629,28H31.684a1.579,1.579,0,0,0-1.443.937l-2.1,4.736,0,.009c-.017.039-.032.079-.046.12,0,.01-.008.02-.011.03-.015.046-.027.093-.038.14,0,.005,0,.011,0,.016-.01.05-.018.1-.024.151l0,.01a1.6,1.6,0,0,0-.009.164V51.681a2.634,2.634,0,0,0,2.631,2.631h21.05a2.634,2.634,0,0,0,2.631-2.631V34.315a1.6,1.6,0,0,0-.009-.164Zm-4.7-2.993.7,1.579h-18.3l.7-1.579Zm-18.445,20V35.894h20V51.155ZM45.994,43.16a1.579,1.579,0,0,1,0,2.233l-3.721,3.721-.008.007q-.052.051-.108.1c-.019.015-.038.029-.057.043s-.044.034-.067.049-.046.028-.069.042-.042.026-.064.038-.048.023-.071.034-.045.022-.069.032-.047.017-.071.026-.05.019-.075.026-.048.012-.071.018-.052.014-.078.019-.055.009-.083.013-.046.008-.07.01c-.052.005-.1.008-.156.008s-.1,0-.156-.008c-.024,0-.047-.007-.07-.01s-.055-.007-.083-.013-.052-.013-.078-.019-.048-.011-.071-.018-.05-.017-.075-.026-.047-.016-.071-.026-.046-.021-.069-.032-.048-.022-.071-.034-.042-.025-.064-.038-.047-.027-.069-.042-.045-.033-.067-.049-.039-.028-.057-.043q-.056-.046-.108-.1l-.008-.007-3.721-3.721a1.579,1.579,0,0,1,2.233-2.233l1.026,1.026V39.051a1.579,1.579,0,0,1,3.157,0v5.135l1.026-1.026a1.579,1.579,0,0,1,2.233,0Z"
                                            transform="translate(1271 404.502)"
                                            fill="#93969b"
                                        />
                                        <g id="trash-can-svgrepo-com" transform="translate(1368 428)">
                                            <rect
                                                id="Rectangle_4"
                                                data-name="Rectangle 4"
                                                width={2}
                                                height={12}
                                                transform="translate(12 12)"
                                                fill="#93969b"
                                            />
                                            <rect
                                                id="Rectangle_5"
                                                data-name="Rectangle 5"
                                                width={2}
                                                height={12}
                                                transform="translate(18 12)"
                                                fill="#93969b"
                                            />
                                            <path
                                                id="Path_3"
                                                data-name="Path 3"
                                                d="M4,6V8H6V28a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V8h2V6ZM8,28V8H24V28Z"
                                                fill="#93969b"
                                                stroke="#93969b"
                                                strokeWidth={1}
                                            />
                                            <rect
                                                id="Rectangle_6"
                                                data-name="Rectangle 6"
                                                width={8}
                                                height={2}
                                                transform="translate(12 4)"
                                                fill="#93969b"
                                                stroke="#93969b"
                                                strokeWidth={1}
                                            />
                                            <rect
                                                id="_Transparent_Rectangle_"
                                                data-name="&lt;Transparent Rectangle&gt;"
                                                width={32}
                                                height={32}
                                                fill="none"
                                            />
                                        </g>
                                        <g
                                            id="email-outline-badged-svgrepo-com"
                                            transform="translate(1450 412)"
                                        >
                                            <g id="Group_2" data-name="Group 2" transform="translate(-10 16.43)">
                                                <path
                                                    id="Path_4"
                                                    data-name="Path 4"
                                                    d="M28.692,12.733h0V26.92H3.779V9.347L14.839,17.11a1.7,1.7,0,0,0,2.509,0L25.2,12.761a6.4,6.4,0,0,1-1.779-.808L16.076,15.76,4.945,7.9h15.57A7.574,7.574,0,0,1,20.239,6H3.779A1.844,1.844,0,0,0,2,7.9V26.92a1.844,1.844,0,0,0,1.779,1.9H28.692a1.844,1.844,0,0,0,1.779-1.9V11.9a6.421,6.421,0,0,1-1.779.837Z"
                                                    transform="translate(0 -0.252)"
                                                    fill="#93969b"
                                                    stroke="#93969b"
                                                    strokeWidth={1}
                                                />
                                                <ellipse
                                                    id="Ellipse_2"
                                                    data-name="Ellipse 2"
                                                    cx={4.449}
                                                    cy={4.45}
                                                    rx={4.449}
                                                    ry={4.45}
                                                    transform="translate(22.464 1.86)"
                                                    fill="#93969b"
                                                />
                                            </g>
                                        </g>
                                        <g id="dots-horizontal-svgrepo-com" transform="translate(1516 437.065)">
                                            <path
                                                id="Path_5"
                                                data-name="Path 5"
                                                d="M5.935,8.968A2.968,2.968,0,1,1,2.968,6,2.968,2.968,0,0,1,5.935,8.968Z"
                                                fill="#93969b"
                                            />
                                            <path
                                                id="Path_6"
                                                data-name="Path 6"
                                                d="M11.935,8.968A2.968,2.968,0,1,1,8.968,6,2.968,2.968,0,0,1,11.935,8.968Z"
                                                transform="translate(2.903)"
                                                fill="#93969b"
                                            />
                                            <path
                                                id="Path_7"
                                                data-name="Path 7"
                                                d="M14.968,11.935A2.968,2.968,0,1,0,12,8.968,2.968,2.968,0,0,0,14.968,11.935Z"
                                                transform="translate(5.806)"
                                                fill="#93969b"
                                            />
                                        </g>
                                    </g>
                                    <g id="Group_4" data-name="Group 4" transform="translate(662.315)">
                                        <g
                                            id="dots-horizontal-svgrepo-com-2"
                                            data-name="dots-horizontal-svgrepo-com"
                                            transform="translate(1516.629 523.065)"
                                        >
                                            <path
                                                id="Path_5-2"
                                                data-name="Path 5"
                                                d="M5.935,8.968A2.968,2.968,0,1,1,2.968,6,2.968,2.968,0,0,1,5.935,8.968Z"
                                                fill="#93969b"
                                            />
                                            <path
                                                id="Path_6-2"
                                                data-name="Path 6"
                                                d="M11.935,8.968A2.968,2.968,0,1,1,8.968,6,2.968,2.968,0,0,1,11.935,8.968Z"
                                                transform="translate(2.903)"
                                                fill="#93969b"
                                            />
                                            <path
                                                id="Path_7-2"
                                                data-name="Path 7"
                                                d="M14.968,11.935A2.968,2.968,0,1,0,12,8.968,2.968,2.968,0,0,0,14.968,11.935Z"
                                                transform="translate(5.806)"
                                                fill="#93969b"
                                            />
                                        </g>
                                        <g id="forward-svgrepo-com" transform="translate(1451 523.905)">
                                            <path
                                                id="Path_8"
                                                data-name="Path 8"
                                                d="M22.14,21.279,15,14.14,22.14,7h0"
                                                transform="translate(-15 -7)"
                                                fill="none"
                                                stroke="#93969b"
                                                strokeWidth={3}
                                            />
                                            <path
                                                id="Path_9"
                                                data-name="Path 9"
                                                d="M26.847,20.568V17.712A5.712,5.712,0,0,0,21.135,12H4"
                                                transform="translate(-4 -4.86)"
                                                fill="none"
                                                stroke="#93969b"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                            />
                                        </g>
                                        <g id="smile-1-svgrepo-com" transform="translate(1366.358 499.977)">
                                            <path
                                                id="Path_10"
                                                data-name="Path 10"
                                                d="M250.6,304.769a2.169,2.169,0,1,0,2.169-2.169A2.179,2.179,0,0,0,250.6,304.769Zm7.677,12.994a8.64,8.64,0,0,0,8.571-6.428H249.706A8.64,8.64,0,0,0,258.277,317.764Z"
                                                transform="translate(-228.544 -276.703)"
                                                fill="#93969b"
                                            />
                                            <path
                                                id="Path_11"
                                                data-name="Path 11"
                                                d="M29.668,44.96A15.28,15.28,0,1,1,44.96,29.692,15.305,15.305,0,0,1,29.668,44.96Zm0-28.915A13.623,13.623,0,1,0,43.291,29.668,13.639,13.639,0,0,0,29.668,16.045Z"
                                                transform="translate(0 2.376)"
                                                fill="#93969b"
                                                stroke="#93969b"
                                                strokeWidth={1.5}
                                            />
                                            <path
                                                id="Path_12"
                                                data-name="Path 12"
                                                d="M641.2,305.769a2.169,2.169,0,1,0,2.169-2.169A2.179,2.179,0,0,0,641.2,305.769Z"
                                                transform="translate(-608.007 -277.703)"
                                                fill="#93969b"
                                            />
                                        </g>
                                        <circle
                                            id="Ellipse_3"
                                            data-name="Ellipse 3"
                                            cx={30.5}
                                            cy={30.5}
                                            r={30.5}
                                            transform="translate(1003 514)"
                                            fill="#30aa57"
                                        />
                                        <text
                                            id="C"
                                            transform="translate(1021 557)"
                                            fill="#fff"
                                            fontSize={35}
                                            fontFamily="Inter"
                                            fontWeight={500}
                                        >
                                            <tspan x={0} y={0}>
                                                {"C"}
                                            </tspan>
                                        </text>
                                        <text
                                            id="Cash_App"
                                            data-name="Cash App"
                                            transform="translate(1089 534)"
                                            fill="#fff"
                                            fontSize={20}
                                            fontFamily="Inter"
                                            fontWeight={500}
                                            letterSpacing="0.036em"
                                        >
                                            <tspan x={0} y={0}>
                                                {"Cash App"}
                                            </tspan>
                                        </text>
                                        <text
                                            id="_10:37PM"
                                            data-name="10:37PM"
                                            transform="translate(1201 533)"
                                            fill="#7f8084"
                                            fontSize={17}
                                            fontFamily="Inter"
                                            letterSpacing="0.051em"
                                        >
                                            <tspan x={0} y={0} textAnchor="start">
                                                {data.time}
                                            </tspan>
                                        </text>
                                        <text
                                            id="to_me"
                                            data-name="to me"
                                            transform="translate(1088 568)"
                                            fill="#7f8084"
                                            fontSize={18}
                                            fontFamily="Inter"
                                            letterSpacing="0.008em"
                                        >
                                            <tspan x={0} y={0}>
                                                {"to me"}
                                            </tspan>
                                        </text>
                                        <path
                                            id="down-arrow-5-svgrepo-com"
                                            d="M7,10l3.84,3.84L14.679,10"
                                            transform="translate(1139 551.16)"
                                            fill="none"
                                            stroke="#7f8084"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                        />
                                    </g>
                                    <g id="Group_5" data-name="Group 5" transform="translate(659)">
                                        <circle
                                            id="Ellipse_1"
                                            data-name="Ellipse 1"
                                            cx={42.5}
                                            cy={42.5}
                                            r={42.5}
                                            transform="translate(1233 734)"
                                            fill="#01c9fc"
                                        />
                                        <path
                                            id="Path_13"
                                            data-name="Path 13"
                                            d="M0,45"
                                            transform="translate(1270.5 754)"
                                            stroke="#fff"
                                            strokeWidth={7}
                                        />
                                        <g
                                            id="italic-svgrepo-com"
                                            transform="matrix(0.996, 0.087, -0.087, 0.996, 1218.373, 748.065)"
                                        >
                                            <path
                                                id="Path_14"
                                                data-name="Path 14"
                                                d="M59.363,46.783H51.856L58.416,0h7.507Z"
                                                transform="translate(0)"
                                                fill="#fff"
                                            />
                                        </g>
                                        <rect
                                            id="Rectangle_7"
                                            data-name="Rectangle 7"
                                            width={34}
                                            height={30}
                                            transform="translate(1258 760)"
                                            fill="#01c9fc"
                                        />
                                        <text
                                            id="B"
                                            transform="matrix(0.999, 0.035, -0.035, 0.999, 1258.464, 792.431)"
                                            fill="#fff"
                                            fontSize={48}
                                            fontFamily="Inter"
                                            fontWeight={700}
                                            fontStyle="italic"
                                        >
                                            <tspan x={0} y={0}>
                                                {"B"}
                                            </tspan>
                                        </text>
                                    </g>
                                    <text
                                        id="Bitcoin_Deposit"
                                        data-name="Bitcoin Deposit"
                                        transform="translate(1845 865)"
                                        fill="#d9d9d9"
                                        fontSize={25}
                                        fontFamily="Inter"
                                    >
                                        <tspan x={0} y={0}>
                                            {"Bitcoin Deposit"}
                                        </tspan>
                                    </text>
                                    <text
                                        id="_0.00291_BTC"
                                        data-name="0.00291 BTC"
                                        transform="translate(1933 1065)"
                                        fill="#e5e5e5"
                                        fontSize={68}
                                        fontFamily="Inter"
                                        letterSpacing="-0.008em"
                                    >
                                        <tspan x={0} y={0} textAnchor="middle">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <g id="Group_6" data-name="Group 6" transform="translate(659)">
                                        <circle
                                            id="Ellipse_4"
                                            data-name="Ellipse 4"
                                            cx={17.5}
                                            cy={17.5}
                                            r={17.5}
                                            transform="translate(1258 1208)"
                                            fill="#065880"
                                        />
                                        <path
                                            id="tick-svgrepo-com"
                                            d="M280.032,320.791l-1.991-1.991-8.507,8.5-3.543-3.539L264,325.756l5.534,5.534Z"
                                            transform="translate(1003.484 900.455)"
                                            fill="#fff"
                                        />
                                    </g>
                                    <text
                                        id="Deposited"
                                        transform="translate(1882 1280)"
                                        fill="#c3c4c8"
                                        fontSize={21}
                                        fontFamily="Inter"
                                        letterSpacing="0.022em"
                                    >
                                        <tspan x={0} y={0}>
                                            {"Deposited"}
                                        </tspan>
                                    </text>
                                    <text
                                        id="The_0.00291_BTC_deposit_is_now_available_in_your_Cash_App"
                                        data-name="The 0.00291 BTC deposit is now  available in your Cash App"
                                        transform="translate(2103 1334)"
                                        fill="#7d7e82"
                                        fontSize={21}
                                        fontFamily="Inter"
                                        letterSpacing="0.022em"
                                    >
                                        <tspan x={-169.501} y={0} textAnchor="middle">
                                            The {data.amount2} deposit is now
                                        </tspan>
                                        <tspan x={-169} y={34} textAnchor="middle">
                                            {"available in your Cash App"}
                                        </tspan>
                                    </text>
                                    <rect
                                        id="Rectangle_8"
                                        data-name="Rectangle 8"
                                        width={209}
                                        height={8}
                                        rx={4}
                                        transform="translate(1830 1575)"
                                        fill="#fff"
                                    />
                                </g>
                            </svg>
                            <IOSOption
                                battery={battery}
                                isOption={isOption}
                                time={time}
                                network={network}
                                net={net}
                                isBattery={isBattery}
                                iconPadding={`2.5rem 5rem 0rem 7rem`}
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
                            <label>Time</label>
                            <input
                                type="text"
                                value={data.time}
                                name="time"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <button className="dateTimeBtn" onClick={() => manageTimeDate()}>Current Date and Time</button>
                        </div>
                        <div className="global_form_inner">
                            <label>Amount-1</label>
                            <input
                                type="text"
                                value={data.amount}
                                name="amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Amount-2</label>
                            <input
                                type="text"
                                value={data.amount2}
                                name="amount2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default View82;