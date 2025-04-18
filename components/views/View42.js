"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from '@/utils/getPicture';
import Image from "next/image";
import { InterBaseEncoded } from "@/utils/encodedFonts/InterBaseEncoded";

const View42 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 42";

    const [data, setData] = useState({
        tr: "710881",
        date1: "08/04/2025",
        rn: "08 April 2025 (Sydney time)",
        amount: "$76.00",
        from: "Kerry Elaine Brown",
        bsb: "BSB: 923100",
        acc: "Acc: 30557330",
        bsb1: "BSB: 064171",
        acc1: "acc: 10456758",
        rn1: "08 April 2025 (Sydney time)",


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
            1.2,
            0,
            1.2
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
                                fill="none"
                                viewBox="0 0 293 634"
                            >
                                <g id="Group 15">
                                    <path
                                        id="photo_2025-04-18_20-51-25 1"
                                        fill="url(#pattern0_13_55)"
                                        d="M0 0h293v634H0z"
                                    ></path>
                                    <path
                                        id="Frame 7"
                                        fill="#FBFAFF"
                                        d="M0 0h267v28H0z"
                                        transform="translate(16 5)"
                                    ></path>
                                    <path
                                        id="Frame 8"
                                        fill="#FBFBFD"
                                        d="M0 0h200v21H0z"
                                        transform="translate(8 40)"
                                    ></path>
                                    <text
                                        xmlSpace="preserve"
                                        id="TransactionReceipt _710881"
                                        fill="#040404"
                                        fontFamily="Roboto"
                                        fontSize="15"
                                        fontWeight="bold"
                                        letterSpacing="0em"
                                        style={{ whiteSpace: "pre" }}
                                    >
                                        <tspan x="14" y="54.127">
                                            TransactionReceipt _{data.tr}
                                        </tspan>
                                    </text>
                                    <g id="Group 14">
                                        <path
                                            id="Frame 9"
                                            fill="#fff"
                                            d="M0 0h40v16H0z"
                                            transform="translate(0 86)"
                                        ></path>
                                        <text
                                            xmlSpace="preserve"
                                            id="08/04/2025"
                                            fill="#545454"
                                            fontFamily="Roboto"
                                            fontSize="5"
                                            fontWeight="500"
                                            letterSpacing="-.01em"
                                            style={{ whiteSpace: "pre" }}
                                        >
                                            <tspan x="0" y="95.709">
                                                {data.date1}
                                            </tspan>
                                        </text>
                                    </g>
                                    <g id="Frame 10">
                                        <path fill="#fff" d="M153 162h122v160H153z"></path>
                                        <g id="Group 13" fontFamily="Roboto">
                                            <text
                                                xmlSpace="preserve"
                                                id="08 April 2025 (Sydney time)"
                                                fill="#4B4B4B"
                                                fontSize="7"
                                                fontWeight="500"
                                                letterSpacing="-.01em"
                                                style={{ whiteSpace: "pre" }}
                                            >
                                                <tspan x="167" y="180.393">
                                                    {data.rn}
                                                </tspan>
                                            </text>
                                            <g id="Group 12" fill="#4B4B4B" fontWeight="500">
                                                <text
                                                    xmlSpace="preserve"
                                                    id="08 April 2025 (Sydney time)_2"
                                                    fontSize="7"
                                                    letterSpacing="-.01em"
                                                    style={{ whiteSpace: "pre" }}
                                                >
                                                    <tspan x="167" y="290.393">
                                                        {data.rn1}
                                                    </tspan>
                                                </text>
                                                <text
                                                    xmlSpace="preserve"
                                                    id="710881"
                                                    fontSize="6.5"
                                                    letterSpacing="0em"
                                                    style={{ whiteSpace: "pre" }}
                                                >
                                                    <tspan x="167" y="311.222">
                                                        {data.tr}
                                                    </tspan>
                                                </text>
                                            </g>
                                            <g
                                                id="Group 11"
                                                fill="#4B4B4B"
                                                fontSize="7"
                                                fontWeight="500"
                                                letterSpacing="-.01em"
                                            >
                                                <text
                                                    xmlSpace="preserve"
                                                    id="BSB:923100"
                                                    style={{ whiteSpace: "pre" }}
                                                >
                                                    <tspan x="167" y="223.393">
                                                        {data.bsb}
                                                    </tspan>
                                                </text>
                                                <text
                                                    xmlSpace="preserve"
                                                    id="BSB:064171"
                                                    style={{ whiteSpace: "pre" }}
                                                >
                                                    <tspan x="168" y="258.393">
                                                        {data.bsb1}
                                                    </tspan>
                                                </text>
                                                <text
                                                    xmlSpace="preserve"
                                                    id="ACC:10456758"
                                                    style={{ whiteSpace: "pre" }}
                                                >
                                                    <tspan x="168" y="268.393">
                                                        {data.acc1}
                                                    </tspan>
                                                </text>
                                                <text
                                                    xmlSpace="preserve"
                                                    id="ACC:30557330"
                                                    style={{ whiteSpace: "pre" }}
                                                >
                                                    <tspan x="168" y="233.393">
                                                        {data.acc}
                                                    </tspan>
                                                </text>
                                            </g>
                                            <text
                                                xmlSpace="preserve"
                                                id="$76.00"
                                                fill="#282828"
                                                fontSize="7"
                                                fontWeight="bold"
                                                letterSpacing="-.01em"
                                                style={{ whiteSpace: "pre" }}
                                            >
                                                <tspan x="167" y="192.393">
                                                    {data.amount}
                                                </tspan>
                                            </text>
                                            <text
                                                xmlSpace="preserve"
                                                id="Kerry Elaine Brown"
                                                fill="#282828"
                                                fontSize="7"
                                                fontWeight="bold"
                                                letterSpacing="0em"
                                                style={{ whiteSpace: "pre" }}
                                            >
                                                <tspan x="168" y="213.393">
                                                    {data.from}
                                                </tspan>
                                            </text>
                                        </g>
                                    </g>
                                </g>
                                <defs>
                                    <pattern
                                        id="pattern0_13_55"
                                        width="1"
                                        height="1"
                                        patternContentUnits="objectBoundingBox"
                                    >
                                        <use
                                            xlinkHref="#image0_13_55"
                                            transform="matrix(.0017 0 0 .00078 0 0)"
                                        ></use>
                                    </pattern>
                                    <image
                                        xlinkHref="data:image/jpeg;base64,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643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643XG643/u5zZCHRByG3je1vigOoYGgIiG7d2KlfAWPWwjG6eIwiI3xZnHcBO+50RYxC8REJX/E7dzJo5WaEHe1iB9uzx3fdC0+PuujKQMAha0vjqfustMgMJNtxfuttTjEB2YWe7ts2q+Em0nYfjberxgZRNxSM2xkOUUrEdsBtxXUEUUZaZuTZv32RRibOY728EG0JGcyYgYH6LN33WLiQvdmf81zlmJwVwikOzORW7rJ3fLY73/JYPDLrXtp96Bul3Zfw3VoGF30iLb8LK+m2TRPmHgd2Zc3qZYjLG/Ra1vv4FkZ6fVs78KciuY7X0y4WunOIMHd77PJaLSyuDWcbvufxUZDLKJhfpM/e/ehkKSQsSyxctl/uswPe0xZP8HV3kk1L3c77XTtDfbZtvwQMzkLg7uzs/iui5sD8QX2OgJyMyC2OT7rdyGUSPoO7iN9jXTuzNd08IXwe/8AipY4CK8gtHcn3Mhp3uwDa1vgpNplqC7Pd/FVBzN0ZAaNmbw8UMjkckjPfIn+Fkxg5D4t4ptW+wXHZ8Ucxi+UkemW3eyCYpZZTBrDmX9wGlKileIjks656deE0Y2dxUPKFWYwCbdK60qWpEpPDcpQpZWkOLjbwUtNBKxzRcY+CI5HYQHa7umiGrHJ1FHVTDGUvDfvXN4KoSl/zRUYSs9SO8E1FqtznfgtKpqRaTvZttkVYEwlTi13NkDlVh09rLnGqOha+d9iaGCrFz7vj+2qP+1f/JDDV8oR83e2yy5OoJITqiF/sgyxv81ySVVSwUREbYhC/wAe9VEpdGCqicv/AN/NT103WVR3/JTPXMRxPsxF7XVPL/J9PR012wdiuZL/AIcjl2tIDMX+C5IKjiGF3k/D82XJ/KbbAkfCRcrcrNtxuESrZq2MZp3ksWe2y/4kp6d/+VENnmpagoReZwIs7bVRAzvgU7sSpxago6TC2Eoy7XUOt1mDZfP9sxR1EhxtGV+ihHwayj1DKKSPgMVDNLWVElRE99QnvdUtBTMRVonbd3OoacOGMWZHTVF8X727k0NVW1EzD1d3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AAAAEMEAAAAAAAAAAAAAAEEAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAABCMBPCAADAAAAAAAAAAIAIAAAAAAAAAAAAAAABOOHNGAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAEKEGPFACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFCLEHDNCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAAAAAAAABBACCBAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAFBKPEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAENCHPJMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAADAAAAAAAAAAAAAAADABAAACACDAAAAAAAGOPBIMAAAAAAAAAAAABFDIGHHLDCNEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMPONIMJAAAAAAAAAAABPPNAAAAAAAAAAAAAAALHDPLPKAAAAAAAAAAAAHDPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAACAAAAAAAAAAOPFKMCOJANEGDDHFPNBLIFFPNOPANFHHJDAAABNHABDCDLDDDCGNCFIDBLJEBCCAAAAAAAAAAAAEMIIAIEIAEIEEAIMAMIEAEMIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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"
                                        id="image0_13_55"
                                        width="591"
                                        height="1280"
                                        data-name="photo_2025-04-18_20-51-25.jpg"
                                        preserveAspectRatio="none"
                                    ></image>
                                </defs>
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
                            <label>TransactionReceipt</label>
                            <input
                                type="text"
                                value={data.tr}
                                name="tr"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Date1</label>
                            <input
                                type="text"
                                value={data.date1}
                                name="date1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Requested on</label>
                            <input
                                type="text"
                                value={data.rn}
                                name="rn"
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
                            <label>From</label>
                            <input
                                type="text"
                                value={data.from}
                                name="from"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.bsb}
                                name="bsb"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.acc}
                                name="acc"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>To</label>
                            <input
                                type="text"
                                value={data.bsb1}
                                name="bsb1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.acc1}
                                name="acc1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Payment Date </label>
                            <input
                                type="text"
                                value={data.rn1}
                                name="rn1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default View42