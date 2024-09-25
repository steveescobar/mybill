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

                                <g data-name="Group 363" transform="translate(-553 -162)">
                                    <g data-name="Group 188">
                                        <g data-name="Group 187">
                                            <g data-name="Group 185" transform="translate(0 -27)">
                                                <g data-name="Group 126" transform="translate(0 45)">
                                                    <g data-name="Group 96">
                                                        <g data-name="Group 87" transform="translate(-2172 -23)">
                                                            <g data-name="Group 85" transform="translate(-10 59)">
                                                                <path
                                                                    d="M0 0H1736V3773H0z"
                                                                    data-name="Rectangle 75"
                                                                    transform="translate(2735 108)"
                                                                ></path>
                                                                <text
                                                                    fill="#9d9d9d"
                                                                    data-name="Withdrawal Processing"
                                                                    fontFamily="Roboto-Regular, Roboto"
                                                                    fontSize="61"
                                                                    letterSpacing=".1em"
                                                                    transform="translate(3603 1374)"
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
                                                                    transform="translate(2983 1815)"
                                                                >
                                                                    <tspan x="-190.653" y="0">
                                                                        Address/Account
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    fill="#d6d6d6"
                                                                    fontFamily="Roboto-Regular, Roboto"
                                                                    fontSize="63"
                                                                    transform="translate(4925 1816)"
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
                                                                    transform="translate(4625 1904)"
                                                                >
                                                                    <tspan x="-173.727" y="0" textAnchor="end">
                                                                        {data.address2}
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    fill="#d6d6d6"
                                                                    fontFamily="Roboto-Regular, Roboto"
                                                                    fontSize="63"
                                                                    transform="translate(4547 2104)"
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
                                                                    transform="translate(4672 2322)"
                                                                >
                                                                    <tspan x="-216.347" y="0" textAnchor="end">
                                                                        {data.remarks}
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    fill="#b8b8b8"
                                                                    fontFamily="Roboto-Regular, Roboto"
                                                                    fontSize="49"
                                                                    transform="translate(2884 2099)"
                                                                >
                                                                    <tspan x="-91.54" y="0">
                                                                        Network
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    fill="#b8b8b8"
                                                                    fontFamily="Roboto-Regular, Roboto"
                                                                    fontSize="49"
                                                                    transform="translate(2892 2317)"
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
                                                                    transform="translate(4115.5 1596)"
                                                                >
                                                                    <tspan x="-513.24" y="0" textAnchor="middle">
                                                                        {data.amount}
                                                                    </tspan>
                                                                </text>
                                                                <path
                                                                    fill="#6f6f6f"
                                                                    d="M0 0H1654V6H0z"
                                                                    data-name="Rectangle 76"
                                                                    transform="translate(2772 1659)"
                                                                ></path>
                                                                <path
                                                                    fill="#6f6f6f"
                                                                    d="M0 0H1677V6H0z"
                                                                    data-name="Rectangle 77"
                                                                    transform="translate(2760 3670)"
                                                                ></path>
                                                                <text
                                                                    fill="#efefef"
                                                                    data-name="© 2024 Luxury Living Group. All rights reserved."
                                                                    fontFamily="Roboto-Light, Roboto"
                                                                    fontSize="61"
                                                                    fontWeight="300"
                                                                    transform="translate(3603 3765)"
                                                                >
                                                                    <tspan x="-637.656" y="0">
                                                                        © 2024 Luxury Living Group. All rights reserved.
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    fill="#efefef"
                                                                    data-name="Conditions of Use -Privacy Policy - Legal Terms"
                                                                    fontFamily="Roboto-Light, Roboto"
                                                                    fontSize="61"
                                                                    fontWeight="300"
                                                                    transform="translate(3590 3847)"
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
                                                                    transform="translate(5160 3039)"
                                                                >
                                                                    <tspan x="-758.394" y="0" textAnchor="end">
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
                                                                    transform="translate(3629 3169)"
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
                                                                    transform="translate(3643 3258)"
                                                                >
                                                                    <tspan x="-382.05" y="0">
                                                                        withdrawal is completed
                                                                    </tspan>
                                                                </text>
                                                            </g>
                                                        </g>
                                                        <path
                                                            fill="#0046d1"
                                                            d="M0 0.892L1.15 0"
                                                            data-name="Line 1"
                                                            transform="translate(1184.7 704)"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                            <path
                                                fill="#fff"
                                                fillRule="evenodd"
                                                d="M512.521 186.65h-29.672v3.74h82.526v44.954h-29.7v3.74h163.397v-58.576h-2.947q-6.13 25.412-19.517 40.124t-36.9 14.712H592.1V190.39h54.143v-58.576H643.3q-6.167 25.412-19.517 40.124-11.851 13.037-31.678 14.521V52.434h29.672v-3.74h-82.5V3.74h29.672V0h-86.1v3.74h29.672zM539.27 52.434V186.65h26.105V52.434zM0 189.8V187h11.1v-69.229H0v-2.8h37.077v2.8H25.412V187H40.1c14.242 0 19.269-9.511 19.715-22.39h3.467l-1.115 25.214H0zM147.765 115v-.025l.025.025zm-25.635 0h25.635v2.774h-11.2v47.056c0 11.2-2.13 16.693-6.712 20.83s-11.641 5.82-21.721 5.82c-7.95 0-15.133-2.452-19.839-5.944-4.8-3.591-6.935-10.873-6.935-23.406v-44.359h-11.1v-2.8H106.8v2.8H95.7v41.016c0 1.124-.009 2.238-.017 3.336-.111 14.127-.2 25.791 18.618 25.791 13.1 0 18.7-8.3 18.7-20.607V117.8H122.13zm32.471-.025h35.74v2.8h-11.1l15.678 25.659 17.61-25.659h-12.677v-2.8h27.121v2.8h-10.65l-19.591 28.557L222.49 187h8.619v2.8h-36.632V187h11.542l-17.585-28.235L168.595 187h13.226v2.8h-27.666V187h10.526l21.619-31.136-23.183-38.093H154.6zm160.545 2.8v-2.8l-.025.025h-25.66v2.8h10.873v49.511c0 12.31-5.6 20.607-18.7 20.607-18.821 0-18.729-11.663-18.618-25.791.007-1.1.017-2.212.017-3.336v-41.02h11.1v-2.8h-36.51v2.8h11.1v44.359c0 12.533 2.105 19.814 6.935 23.406 4.706 3.492 11.889 5.944 19.839 5.944 10.105 0 17.164-1.684 21.746-5.82s6.712-9.635 6.712-20.83v-47.059zM350.118 187h11.1v2.8h-36.512V187h11.1v-69.229h-11.1v-2.8h37.524c12.21 0 26.774 1.461 26.774 17.04 0 12.656-13.325 17.04-23.752 18.155v.223c17.486 2.675 21.4 12.087 21.4 30.365 0 3.913.322 8.4 11.1 6.39v2.675a38.683 38.683 0 01-9.536 1.337c-11.319 0-17.238-5.721-17.238-17.139 0-9.288-1.56-16.248-4.483-18.7a15.682 15.682 0 00-10.2-4.037h-6.167zm0-38.539h9.189c10.081 0 14.217-4.83 14.217-14.91 0-12.557-3.69-15.8-13.672-15.8h-9.734v30.712zM419.146 187v2.8h38.539V187h-12.31v-33.61l19.492-35.616h8.966v-2.8h-24.1v2.8H461.4l-18.056 32.146-19.144-32.149h11.542v-2.8h-36.41v2.8h8.173l23.529 38.093V187zm291.567 2.8V187h11.1v-69.229h-11.1v-2.8h37.077v2.8h-11.64V187h14.663c14.217 0 19.269-9.511 19.715-22.39h3.467l-1.115 25.214h-62.167zm108.558-2.8H808.2v-69.229h11.071v-2.8h-36.508v2.8h11.1V187h-11.1v2.8h36.508zm45.721 4.483h-3.368l-26.774-73.709h-9.189v-2.8h35.517v2.8h-11.542l19.046 52.426 18.947-52.433h-11.665v-2.8h24.322v2.8h-9.313zM943.209 187h-11.1v-69.229h11.1v-2.8h-36.533v2.8h11.1V187h-11.1v2.8h36.533zm73.932 4.26h-3.368L966.293 120v67h10.972v2.8h-25.536V187H962.7v-69.229h-10.971v-2.8h28.681l33.139 48.941v-46.141H1002.8v-2.8h25.56v2.8h-11.22zm58.279-75.17c12.111 0 18.824 9.957 21.177 19.938l.05.025h3.245v-21.626h-2.477l-4.483 4.706c-6.043-4.037-10.972-5.82-18.824-5.82-10.2 0-18.056 4.136-24.545 11.864-6.613 7.95-10.427 17.04-10.427 27.344 0 8.842 2.13 18.155 7.951 25.09 8.049 9.635 15.455 13.895 28.111 13.895 15.9 0 28.235-9.635 28.458-26.105h7.826v-2.8h-35.072v2.8h11.319c0 1.1.017 2.193.032 3.282.153 10.387.3 20.025-13.8 20.025-18.792 0-18.576-18.633-18.407-33.127v-.006c.015-1.322.03-2.61.03-3.845V149.577c-.048-15.964-.093-33.49 19.836-33.49zm41.09 13.053a14.515 14.515 0 1114.39 14.588 14.585 14.585 0 01-14.391-14.592zm27.542 0a13 13 0 10-13.127 13.077 13.057 13.057 0 0013.126-13.081zm-15.158 6.935h2.675v.594h-8.916v-.594h2.725v-14.641h-2.725v-.594h9.189c2.972 0 6.563.248 6.563 3.567 0 2.7-3.269 3.616-5.82 3.864v.1c4.26.545 5.226 2.526 5.226 6.39 0 .842.1 1.759 2.7 1.337v.545a8.023 8.023 0 01-2.328.347c-2.774 0-4.211-1.214-4.211-3.666 0-3.814-.644-4.83-5.1-4.83v7.579zm0-8.3c.361-.009.718-.01 1.06-.012 2.645-.012 4.661-.022 4.661-3.134 0-3.288-1.561-3.258-4.223-3.206-.466.009-.966.019-1.5.011zM725.1 318.861a19.276 19.276 0 015.771 13.944h.025a19.746 19.746 0 01-19.765 19.839h-6.489v18.328h-7.972v-57.907h16.446a19.992 19.992 0 0111.984 5.796zm-5.672 22.316a11.292 11.292 0 003.467-8.372 11.167 11.167 0 00-3.467-8.3 11.293 11.293 0 00-8.322-3.443h-6.486v23.579h6.489a11.261 11.261 0 008.322-3.464zm-49.04 12.508a20.382 20.382 0 01-5.771 11.988 19.765 19.765 0 01-33.755-13.973v-38.61h7.975v38.61a11.839 11.839 0 0011.839 11.789 11.167 11.167 0 008.3-3.467 11.412 11.412 0 003.443-8.322v-38.61h7.975zm-63.8-11.74a29.681 29.681 0 11-8.693-20.954 28.685 28.685 0 018.694 20.954zm-14.365 15.331a21.556 21.556 0 10-15.307 6.365 20.772 20.772 0 0015.308-6.365zm-79.307-6.118L525.821 371h-9.635l-11.74-18.328h-6.068V371H490.4v-57.91h16.446a19.991 19.991 0 0111.988 5.8 19.822 19.822 0 010 27.963 19.935 19.935 0 01-5.917 4.305zm-14.539-6.514h6.489a11.789 11.789 0 000-23.579h-6.489zm-32.147-22.613l-5.994 5.3v-.025l-.817-.718c-4.607-4.087-9.684-6.142-15.133-6.142a21.585 21.585 0 100 43.17 20.339 20.339 0 0012.582-3.963v-17.436h7.926v20.755l-.372.371a28.314 28.314 0 01-20.136 8.272 29.6 29.6 0 110-59.2c7.6 0 14.638 2.923 20.929 8.669z"
                                                transform="translate(848.231 847.449)"
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