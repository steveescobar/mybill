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

const View30 = () => {

  const screenshotRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const pageName = "VIEW 30";

  const [data, setData] = useState({

    heading: "CAD Withdrawal (via E-transfer)",
    date: "Oct 24, 2023 02:52 PM",
    amount: "1,567.77",
    note1: "It takes 1 hour for processed funds to reflect in your",
    note2: "bank account.",
    currency: "CAD",
    email: "chef.roydiaz05@gmail.com",
    emailAlt: "R****** D***"

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
                viewBox="0 0 1686 3624"
              >
                <style>
                  {
                    RobotoBaseEncoded
                  }
                </style>
                <g data-name="Group 418" transform="translate(-2534 -44)">
                  <g data-name="Group 417">
                    <g data-name="Group 180" transform="translate(0 -4)">
                      <path
                        fill="#fff"
                        d="M0 0H1686V3490H0z"
                        data-name="Rectangle 257"
                        transform="translate(2534 182)"
                      ></path>
                      <path
                        fill="#162f58"
                        d="M0 0H1686V884H0z"
                        data-name="Rectangle 258"
                        transform="translate(2534 48)"
                      ></path>
                      <g
                        fill="#fff"
                        data-name="Group 178"
                        transform="translate(430.163 -90.831)"
                      >
                        <path
                          d="M34.794 54.24L9.278 29.8 35.507 4.282 30.69 0 0 29.8l10.059 9.475L30.69 58.7z"
                          data-name="Path 15"
                          transform="translate(2173.783 345.129)"
                        ></path>
                        <path
                          d="M0 0H59.756V6.536H0z"
                          data-name="Rectangle 72"
                          transform="translate(2181.122 371.923)"
                        ></path>
                      </g>
                      <text
                        fill="#fff"
                        data-name="CAD Withdrawal (via E-transfer)"
                        fontFamily="Roboto-Regular, Roboto"
                        fontSize="86"
                        transform="translate(3203 486)"
                      >
                        <tspan x="-599.375" y="0">
                          {data.heading}
                        </tspan>
                      </text>
                      <text
                        fill="#fff"
                        data-name="Oct 24, 2023 02:52 PM"
                        fontFamily="Roboto-Regular, Roboto"
                        fontSize="62"
                        transform="translate(2917 758)"
                      >
                        <tspan x="-312.649" y="0">
                          {data.date}
                        </tspan>
                      </text>
                      <text
                        data-name="1,567.77"
                        fontFamily="Roboto-Regular, Roboto"
                        fontSize="188"
                        transform="translate(3036 1259)"
                      >
                        <tspan x="-359.89" y="0">
                          {data.amount}
                        </tspan>
                        <tspan dx="15" y="-24" 
                          fontSize="100"
                          fill="#787878"
                        >
                          {data.currency}
                        </tspan>
                      </text>
                      <text
                        fill="#707070"
                        data-name="$"
                        fontFamily="Roboto-Regular, Roboto"
                        fontSize="99"
                        transform="translate(2632 1234)"
                      >
                        <tspan x="-27.795" y="0">
                          $
                        </tspan>
                      </text>
                      <text
                        fill="#929292"
                        data-name="It takes 1 hour for processed funds to reflect in your"
                        fontFamily="Roboto-Regular, Roboto"
                        fontSize="63"
                        transform="translate(3325 1466)"
                      >
                        <tspan x="-721.27" y="0">
                          {data.note1}
                        </tspan>
                      </text>
                      <text
                        fill="#555"
                        data-name="Transaction detail"
                        fontFamily="Roboto-Regular, Roboto"
                        fontSize="55"
                        transform="translate(2823 3263)"
                      >
                        <tspan x="-218.523" y="0">
                          Transaction detail
                        </tspan>
                      </text>
                      <text
                        fill="#292929"
                        data-name="chef.roydiaz05@gmail.com"
                        fontFamily="Roboto-Medium, Roboto"
                        fontSize="63"
                        fontWeight="500"
                        transform="translate(4508 3446)"
                      >
                        <tspan x="-385.921" y="0" textAnchor="end">
                          {data.email}
                        </tspan>
                      </text>
                      <text
                        fill="#292929"
                        fontFamily="Roboto-Regular, Roboto"
                        fontSize="63"
                        transform="translate(2734 3446)"
                      >
                        <tspan x="-129.891" y="0">
                          Recipient
                        </tspan>
                      </text>
                      <text
                        fill="#292929"
                        data-name="R****** D***"
                        fontFamily="Roboto-Medium, Roboto"
                        fontSize="63"
                        fontWeight="500"
                        transform="translate(4290 3522)"
                      >
                        <tspan x="-173.358" y="0" textAnchor="end">
                          {data.emailAlt}
                        </tspan>
                      </text>
                      <text
                        fill="#929292"
                        data-name="bank account."
                        fontFamily="Roboto-Regular, Roboto"
                        fontSize="63"
                        transform="translate(2801 1572)"
                      >
                        <tspan x="-197.352" y="0">
                          {data.note2}
                        </tspan>
                      </text>
                      <path
                        fill="#dcdcdc"
                        d="M0 0H1526V6H0z"
                        data-name="Rectangle 259"
                        transform="translate(2604 3314)"
                      ></path>
                    </g>
                  </g>
                  {
                    isIOS
                      ?
                      <>
                        <g
                          stroke="#707070"
                          strokeWidth="1"
                          data-name="Rectangle 477"
                          transform="translate(3051 3625)"
                        >
                          <rect width="652" height="24" stroke="none" rx="12"></rect>
                          <rect
                            width="651"
                            height="23"
                            x="0.5"
                            y="0.5"
                            fill="none"
                            rx="11.5"
                          ></rect>
                        </g>
                      </>
                      :
                      <></>
                  }
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
                <label>Heading</label>
                <input
                  type="text"
                  value={data.heading}
                  name="heading"
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
                  value={data.currency}
                  name="currency"
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
              <div className="global_form_inner">
                <label>Remark</label>
                <input
                  type="text"
                  value={data.note1}
                  name="note1"
                  onChange={(e) => onChangeHandler(e)}
                />
                <input
                  type="text"
                  value={data.note2}
                  name="note2"
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
              <div className="global_form_inner">
                <label>Email</label>
                <input
                  type="text"
                  value={data.email}
                  name="email"
                  onChange={(e) => onChangeHandler(e)}
                />
                <input
                  type="text"
                  value={data.emailAlt}
                  name="emailAlt"
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
            </div>
          </div>
      </div>

    </>
  )
}

export default View30