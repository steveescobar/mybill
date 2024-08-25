"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import arrow from "@/public/arrow.png";
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from '@/utils/getPicture';
import Image from "next/image";

const View69 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 69";

    const [data, setData] = useState({
        withdraw: "Withdraw USDC (ERC20)",
        withdrawAlt: "",
        status: "Pending",
        date: "Aug 1, 2023 at 1:50:15 PM",
        amount: "1,651.5",
        amountCda: "2,150.81",
        amountCdaType: "CAD",
        sending: "1,636.5 USDC",
        withdraw1: "0xEcE28Be9fdF1Ed725f8a4E",
        withdraw2: "Dd1Cf5bCF591343908",
        fee: "15 USDT",
        networkType: "ERC20",
        note: "jatmohitku",
        total: "1,651.5 USDC",
        type: "USDC",
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

        // Get the current date and time
        const now = new Date();

        // Define the options for formatting
        const options = {
            month: 'short',   // "Aug"
            day: '2-digit',   // "03"
            year: 'numeric',  // "2023"
            // hour: 'numeric',  // "10"
            // minute: 'numeric',// "39"
            hour12: true      // "p.m."
        };

        // Format the date part
        const datePart = now.toLocaleDateString('en-US', options);

        // Format the time part
        const timePart = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });

        // Combine the date and time parts
        const formattedDateTime = `${datePart} at ${timePart.toUpperCase()}`;


        // Update the data with the new timestamp
        return setData({
            ...data,
            date: formattedDateTime
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
            0,
            1
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
                                maxWidth: "1020px"
                            }}
                        >
                            <div className="view2_mobile fontInter">
                                <div className="arrow-icons3">
                                    <h3>{data.time}</h3>
                                </div>
                                <div className="header_mob_2">
                                    <Image
                                        src={arrow}
                                        alt="arrow"
                                        height={100}
                                        width={100}
                                    />
                                    <h3>{data.withdraw}</h3>
                                    <h3 className="heading_breaklink">{data.withdrawAlt}</h3>
                                    <h4>{data.status}</h4>
                                    <p>{data.date}</p>
                                </div>
                                <div className="view2-info-wrapper">
                                    <div className="mob_2_amount">
                                        <h3>{data.amount}</h3>
                                        <p>{data.type}</p>
                                    </div>
                                    <div className="mob_2_amount2">
                                        <div className="mob_2_amount2_wrapper">
                                            <span className="font_change_mob_2">$</span>{data.amountCda} <span>{data.amountCdaType}</span>
                                        </div>
                                    </div>~
                                    <div className="withdraw_details">
                                        <h3>Withdrawal details</h3>
                                        <div className="line-break"></div>
                                    </div>
                                    <div className="mob_2_details">
                                        <div className="mob_2_details_childs">
                                            <p>Sending</p>
                                        </div>
                                        <div className="mob_2_details_childs">
                                            <p>{data.sending}</p>
                                        </div>
                                    </div>
                                    <div className="mob_2_details">
                                        <div className="mob_2_details_childs">
                                            <p>Withdraw to</p>
                                        </div>
                                        <div className="mob_2_details_childs mob_2_details_childs_fixes">
                                            <p>{data.withdraw1}</p>
                                            <p>{data.withdraw2}</p>
                                        </div>
                                    </div>
                                    <div className="mob_2_details">
                                        <div className="mob_2_details_childs">
                                            <p>Network Type</p>
                                        </div>
                                        <div className="mob_2_details_childs mob_2_details_childs_fixes">
                                            <p>{data.networkType}</p>
                                        </div>
                                    </div>
                                    <div className="mob_2_details">
                                        <div className="mob_2_details_childs">
                                            <p>Note</p>
                                        </div>
                                        <div className="mob_2_details_childs mob_2_details_childs_fixes">
                                            <p>{data.note}</p>
                                        </div>
                                    </div>
                                    <div className="mob_2_details">
                                        <div className="mob_2_details_childs">
                                            <p>Fee</p>
                                        </div>
                                        <div className="mob_2_details_childs mob_2_details_childs_fixes">
                                            <p>{data.fee}</p>
                                        </div>
                                    </div>
                                    <div className="mob_2_details">
                                        <div className="mob_2_details_childs">
                                            <p>Total</p>
                                        </div>
                                        <div className="mob_2_details_childs mob_2_details_childs_fixes">
                                            <p>{data.total}</p>
                                        </div>
                                    </div>
                                    <div className="footer-navigation">
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                            <IOSOption
                                battery={battery}
                                isOption={isOption}
                                time={time}
                                network={network}
                                net={net}
                                isBattery={isBattery}
                                iconPadding={`2.5rem 4rem 0rem 5.5rem`}
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
                                <label>Title</label>
                                <input
                                    type="text"
                                    value={data.withdraw}
                                    name="withdraw"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.withdrawAlt}
                                    name="withdrawAlt"
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
                                <label>Date</label>
                                <input
                                    type="text"
                                    value={data.date}
                                    name="date"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <button className="dateTimeBtn" onClick={() => manageTimeDate()}>Current Date and Time</button>
                            </div>
                            <div className="global_form_inner">
                                <label>Amount</label>
                                <input
                                    type="text"
                                    value={data.amount}
                                    name="amount"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.type}
                                    name="type"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.amountCda}
                                    name="amountCda"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.amountCdaType}
                                    name="amountCdaType"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Sending</label>
                                <input
                                    type="text"
                                    value={data.sending}
                                    name="sending"
                                    onChange={(e) => onChangeHandler(e)}
                                />

                            </div>
                            <div className="global_form_inner">
                                <label>Withdrawal to</label>
                                <input
                                    type="text"
                                    value={data.withdraw1}
                                    name="withdraw1"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <input
                                    type="text"
                                    value={data.withdraw2}
                                    name="withdraw2"
                                    onChange={(e) => onChangeHandler(e)}
                                />

                            </div>
                            <div className="global_form_inner">
                                <label>Network Type</label>
                                <input
                                    type="text"
                                    value={data.networkType}
                                    name="networkType"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global_form_inner">
                                <label>Note</label>
                                <input
                                    type="text"
                                    value={data.note}
                                    name="note"
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
                                <label>Total</label>
                                <input
                                    type="text"
                                    value={data.total}
                                    name="total"
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                        </div>
                    </div>
               
            </div >
        </>
    )
}

export default View69