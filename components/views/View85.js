"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from "@/utils/getPicture";
import { HelveticaBaseEncoded } from "@/utils/encodedFonts/HelveticaWorld";
import Image from "next/image";

const View85 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 85";

    const [data, setData] = useState({

        amount: "518.31 USDT",
        address: "TjHbjW6WhcAwFJnmQHV4g2XVF",
        address2: "7kNAKTEQS",
        network: "TRC20",
        remarks: "Platform Salary",
        time: "2024-09-26 04:10:41"

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
            0.4,
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
                                viewBox="0 0 1736 3773"
                            >
                                <style>
                                    {
                                        HelveticaBaseEncoded
                                    }
                                </style>
                                <defs>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="0.5"
                                        x2="0.5"
                                        y2="1"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#514336"></stop>
                                        <stop offset="1" stopColor="#201611"></stop>
                                    </linearGradient>
                                </defs>
                                <g data-name="Group 363" transform="translate(-729 -209)">
                                    <g data-name="Group 188" transform="translate(168 64)">
                                        <g data-name="Group 187" transform="translate(8 -17)">
                                            <path
                                                fill="url(#linear-gradient)"
                                                d="M0 0H1736V3773H0z"
                                                data-name="Rectangle 75"
                                                transform="translate(553 162)"
                                            ></path>
                                            <text
                                                fill="#9d9d9d"
                                                data-name="Withdrawal Processing"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="61"
                                                letterSpacing=".1em"
                                                transform="translate(1421 1428)"
                                            >
                                                <tspan x="-371.778" y="0">
                                                    Withdrawal Processing
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#b8b8b8"
                                                data-name="Address/Account"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(801 1869)"
                                            >
                                                <tspan x="-190.653" y="0">
                                                    Address/Account
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#d6d6d6"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(2720 1870)"
                                            >
                                                <tspan x="-475.438" y="0" textAnchor="end">
                                                    {data.address}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#d6d6d6"
                                                data-name="7kNAKTEQS"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(2420 1958)"
                                            >
                                                <tspan x="-173.727" y="0" textAnchor="end">
                                                    {data.address2}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#d6d6d6"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(2338 2158)"
                                            >
                                                <tspan x="-94.069" y="0" textAnchor="end">
                                                    {data.network}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#d6d6d6"
                                                data-name="Platform Salary"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(2460 2376)"
                                            >
                                                <tspan x="-216.347" y="0" textAnchor="end">
                                                    {data.remarks}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#b8b8b8"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(702 2153)"
                                            >
                                                <tspan x="-91.54" y="0">
                                                    Network
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#b8b8b8"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(710 2371)"
                                            >
                                                <tspan x="-96.206" y="0">
                                                    Remarks
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#fff"
                                                data-name="518.31 USDT"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="177"
                                                transform="translate(1933 1650)"
                                            >
                                                <tspan x="-513.24" y="0" textAnchor="middle">
                                                    {data.amount}
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#6f6f6f"
                                                d="M0 0H1654V6H0z"
                                                data-name="Rectangle 76"
                                                transform="translate(590 1713)"
                                            ></path>
                                            <path
                                                fill="#6f6f6f"
                                                d="M0 0H1677V6H0z"
                                                data-name="Rectangle 77"
                                                transform="translate(578 3724)"
                                            ></path>
                                            <text
                                                fill="#efefef"
                                                data-name="© 2024 luxurylivinggroup. All rights reserved."
                                                fontFamily="Roboto-Light, Roboto"
                                                fontSize="61"
                                                fontWeight="300"
                                                transform="translate(1421 3819)"
                                            >
                                                <tspan x="-593.663" y="0">
                                                    © 2024 luxurylivinggroup. All rights reserved.
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#efefef"
                                                data-name="Conditions of Use -Privacy Policy - Legal Terms"
                                                fontFamily="Roboto-Light, Roboto"
                                                fontSize="61"
                                                fontWeight="300"
                                                transform="translate(1421 3901)"
                                            >
                                                <tspan x="-624.088" y="0">
                                                    Conditions of Use -Privacy Policy - Legal Terms
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#efefef"
                                                data-name="Estimated completion time : 2023-8-26 15:30:35"
                                                fontFamily="Roboto-Light, Roboto"
                                                fontSize="55"
                                                fontWeight="300"
                                                letterSpacing=".148em"
                                                transform="translate(2184 3093)"
                                            >
                                                <tspan x="-758.394" y="0" textAnchor="middle">
                                                    Estimated completion time : {data.time}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#efefef"
                                                data-name="You will receive your payment once"
                                                fontFamily="Roboto-Light, Roboto"
                                                fontSize="55"
                                                fontWeight="300"
                                                letterSpacing=".148em"
                                                transform="translate(1390 3223)"
                                            >
                                                <tspan x="-554.921" y="0">
                                                    You will receive your payment once
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#efefef"
                                                data-name="withdrawal is completed"
                                                fontFamily="Roboto-Light, Roboto"
                                                fontSize="55"
                                                fontWeight="300"
                                                letterSpacing=".148em"
                                                transform="translate(1400 3312)"
                                            >
                                                <tspan x="-382.05" y="0">
                                                    withdrawal is completed
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#0046d1"
                                                d="M0 0.892L1.15 0"
                                                data-name="Line 1"
                                                transform="translate(1184.7 722)"
                                            ></path>
                                            <path
                                                fill="#fff"
                                                fillRule="evenodd"
                                                d="M594.352 216.452h-34.41v4.337h95.7v52.131h-34.435v4.337h189.482v-67.928h-3.418q-7.109 29.469-22.633 46.53t-42.8 17.061h-55.2v-52.131h62.787V152.86h-3.418q-7.152 29.469-22.633 46.53-13.744 15.118-36.736 16.84V60.805h34.409v-4.337h-95.675V4.337h34.409V0h-99.839v4.337h34.409zm31.02-155.646v155.646h30.273V60.805zM0 220.1v-3.246h12.868v-80.279H0v-3.246h43v3.246H29.469v80.279H46.5c16.515 0 22.346-11.029 22.863-25.965h4.021l-1.293 29.239H0zm171.358-86.742v-.029l.029.029zm-29.728 0h29.728v3.217h-12.983v54.573c0 12.982-2.47 19.359-7.784 24.155s-13.5 6.75-25.19 6.75c-9.22 0-17.549-2.844-23.007-6.893-5.572-4.165-8.042-12.609-8.042-27.143v-51.442H81.485v-3.246h42.365v3.246h-12.867v47.564c0 1.3-.01 2.6-.02 3.869-.129 16.383-.236 29.909 21.591 29.909 15.194 0 21.685-9.622 21.685-23.9V136.6H141.63zm37.655-.029h41.446v3.246h-12.867l18.181 29.756 20.422-29.756h-14.706v-3.246h31.451v3.246h-12.351l-22.719 33.117 29.871 47.162h10v3.246h-42.48v-3.246h13.385L218.52 184.11l-23.007 32.744h15.338v3.246h-32.083v-3.246h12.207l25.075-36.1-26.884-44.175h-9.88zm186.178 3.246v-3.246l-.029.029h-29.756v3.242h12.609v57.42c0 14.275-6.491 23.9-21.685 23.9-21.826 0-21.72-13.526-21.591-29.909.009-1.274.02-2.565.02-3.869v-47.567H317.9v-3.246h-42.338v3.246h12.868v51.442c0 14.534 2.441 22.978 8.042 27.143 5.457 4.05 13.787 6.893 23.007 6.893 11.719 0 19.9-1.953 25.218-6.75s7.784-11.173 7.784-24.155v-54.573zm40.556 80.279h12.868v3.246H376.55v-3.246h12.868v-80.279H376.55v-3.246h43.514c14.16 0 31.049 1.695 31.049 19.761 0 14.677-15.453 19.761-27.545 21.053v.258c20.278 3.1 24.816 14.017 24.816 35.214 0 4.538.373 9.737 12.868 7.41v3.1a44.858 44.858 0 01-11.058 1.551c-13.126 0-19.991-6.635-19.991-19.876 0-10.771-1.81-18.842-5.2-21.685a18.186 18.186 0 00-11.834-4.682h-7.152zm0-44.692h10.656c11.69 0 16.487-5.6 16.487-17.291 0-14.562-4.28-18.325-15.855-18.325h-11.288v35.616zm80.049 44.692v3.246h44.692v-3.246h-14.274v-38.976l22.6-41.3h10.4v-3.246h-27.945v3.246h13.528l-20.939 37.278-22.2-37.282h13.385v-3.246h-42.224v3.246h9.478l27.286 44.175v36.1zm338.12 3.246v-3.246h12.868v-80.279h-12.868v-3.246h43v3.246h-13.5v80.279h17c16.487 0 22.346-11.029 22.863-25.965h4.021l-1.293 29.239h-72.091zm125.89-3.246h-12.839v-80.279h12.839v-3.246h-42.336v3.246h12.868v80.279h-12.868v3.246h42.337zm53.021 5.2h-3.906l-31.049-85.478h-10.655v-3.246h41.188v3.246h-13.385l22.088 60.805 21.973-60.805h-13.528v-3.246h28.205v3.246h-10.8zm90.705-5.2h-12.868v-80.279h12.868v-3.246h-42.364v3.246h12.868v80.279h-12.868v3.246h42.365zm85.736 4.94h-3.906l-55.061-82.634v77.694h12.727v3.246h-29.613v-3.246h12.724v-80.279h-12.724v-3.246h33.26l38.431 56.755v-53.51h-12.465v-3.246h29.641v3.246h-13.011zm67.584-87.172c14.045 0 21.829 11.546 24.558 23.122l.057.029h3.763V132.7h-2.872l-5.2 5.457c-7.008-4.682-12.724-6.75-21.829-6.75-11.834 0-20.939 4.8-28.464 13.758-7.669 9.22-12.092 19.761-12.092 31.709 0 10.254 2.47 21.053 9.22 29.1 9.335 11.173 17.923 16.113 32.6 16.113 18.44 0 32.744-11.173 33-30.273h9.076v-3.246h-40.671v3.246h13.13c0 1.27.02 2.543.037 3.806.178 12.045.345 23.222-16.007 23.222-21.792 0-21.542-21.608-21.346-38.416v-.007c.017-1.533.035-3.026.035-4.459v-2.496c-.052-18.518-.104-38.842 23.006-38.842zm47.651 15.137a16.833 16.833 0 1116.688 16.917 16.914 16.914 0 01-16.688-16.918zm31.939 0a15.079 15.079 0 10-15.223 15.165 15.141 15.141 0 0015.224-15.166zm-17.578 8.042h3.1v.689H1301.9v-.69h3.16v-16.974h-3.16v-.689h10.656c3.447 0 7.611.287 7.611 4.136 0 3.131-3.791 4.193-6.75 4.481v.115c4.94.632 6.06 2.93 6.06 7.41 0 .977.115 2.039 3.131 1.551v.632a9.3 9.3 0 01-2.7.4c-3.217 0-4.883-1.407-4.883-4.251 0-4.423-.747-5.6-5.917-5.6v8.789zm0-9.622c.419-.01.833-.012 1.229-.014 3.068-.014 5.406-.025 5.406-3.634 0-3.813-1.81-3.778-4.9-3.718-.54.011-1.12.022-1.738.013zm-468.26 221.593a22.353 22.353 0 016.692 16.171h.029a22.9 22.9 0 01-22.92 23.007h-7.525v21.25H807.9v-67.149h19.072a23.183 23.183 0 0113.904 6.721zm-6.576 25.879a13.094 13.094 0 004.021-9.708 12.95 12.95 0 00-4.021-9.622 13.1 13.1 0 00-9.651-3.992h-7.525v27.344h7.525a13.058 13.058 0 009.651-4.022zm-56.87 14.5a23.637 23.637 0 01-6.692 13.9 22.92 22.92 0 01-39.149-16.2v-44.772h9.249v44.778a13.729 13.729 0 0013.729 13.672 12.95 12.95 0 009.622-4.021 13.233 13.233 0 003.992-9.651v-44.778h9.249zm-73.989-13.614a34.421 34.421 0 11-10.082-24.3 33.265 33.265 0 0110.08 24.304zM686.78 414.32a25 25 0 10-17.75 7.382 24.088 24.088 0 0017.75-7.382zm-91.969-7.094l14.964 23.007H598.6l-13.614-21.255h-7.037v21.255H568.7v-67.154h19.072a23.183 23.183 0 0113.9 6.721 22.987 22.987 0 010 32.428 23.119 23.119 0 01-6.861 4.998zm-16.86-7.554h7.525a13.672 13.672 0 000-27.344h-7.525zm-37.281-26.224l-6.951 6.147v-.029l-.948-.833c-5.342-4.739-11.23-7.123-17.549-7.123a25.032 25.032 0 100 50.063 23.586 23.586 0 0014.591-4.6v-20.216H539v24.069l-.431.431a32.834 32.834 0 01-23.351 9.593 34.323 34.323 0 110-68.646c8.818 0 16.975 3.389 24.27 10.053z"
                                                transform="translate(756.781 788.05)"
                                            ></path>
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
                                // iconPadding={`2rem 4.5rem 0rem 6rem`}
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
                            <label>Amount</label>
                            <input
                                type="text"
                                value={data.amount}
                                name="amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Address/Account</label>
                            <input
                                type="text"
                                value={data.address}
                                name="address"
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
                            <label>Network</label>
                            <input
                                type="text"
                                value={data.network}
                                name="network"
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

export default View85