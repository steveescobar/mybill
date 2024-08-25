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

const View1 = () => {

  const screenshotRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const pageName = "VIEW 1";

  const [data, setData] = useState({
    refNo: "REF #: 104660554169",
    amount: "$ 16.36",
    fromAccountAmount: "$521.76",
    fromAccountAmount1: "Chequing",
    fromAccountAmount2: "6438997",
    to: "One-time contacts",
    email: "jasonseeweng0411@gmail.com",
    transfer_date: "Aug 01, 2023",
    expiry_date: "Aug 31, 2023",
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
                viewBox="0 0 1868 3960"
              >
                <style>
                  {
                    InterBaseEncoded
                  }
                </style>
                <defs>
                  <filter
                    id="Rectangle_153"
                    width="1868"
                    height="109"
                    x="0"
                    y="3529.5"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dy="-2"></feOffset>
                    <feGaussianBlur result="blur" stdDeviation="11.5"></feGaussianBlur>
                    <feFlood floodOpacity="0.169"></feFlood>
                    <feComposite in2="blur" operator="in"></feComposite>
                    <feComposite in="SourceGraphic"></feComposite>
                  </filter>
                </defs>
                <g data-name="Group 369" transform="translate(-5071.5 -50)">
                  <path
                    fill="#fff"
                    d="M0 0H1825V3960H0z"
                    data-name="Rectangle 448"
                    transform="translate(5093 50)"
                  ></path>
                  <path
                    fill="#b13a49"
                    d="M0 0H1825V414H0z"
                    data-name="Rectangle 449"
                    transform="translate(5093 50)"
                  ></path>
                  <path
                    fill="#fff"
                    d="M0 69.5A5.494 5.494 0 015.5 64h66a5.5 5.5 0 010 11h-66A5.494 5.494 0 010 69.5zM0 97a5.494 5.494 0 015.5-5.5h66a5.5 5.5 0 010 11h-66A5.494 5.494 0 010 97zm77 27.5a5.494 5.494 0 01-5.5 5.5h-66a5.5 5.5 0 110-11h66a5.494 5.494 0 015.5 5.5z"
                    transform="translate(5191.457 272)"
                  ></path>
                  <text
                    fill="#eee"
                    data-name="Send Money"
                    fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="69"
                    transform="translate(5800 401)"
                  >
                    <tspan x="0" y="0">
                      Send Money
                    </tspan>
                  </text>
                  <g
                    fill="none"
                    stroke="#fff"
                    strokeWidth="4"
                    data-name="Ellipse 22"
                    transform="translate(6754.934 343.783)"
                  >
                    <circle cx="27.5" cy="27.5" r="27.5" stroke="none"></circle>
                    <circle cx="27.5" cy="27.5" r="25.5"></circle>
                  </g>
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeWidth="4"
                    d="M6757.934 378.283l-4.25 22.75 15.5-8.25"
                    data-name="Path 44"
                  ></path>
                  <g
                    fill="#b53242"
                    stroke="#b53242"
                    strokeWidth="1"
                    data-name="Rectangle 155"
                    transform="rotate(10 1239.821 38823.732)"
                  >
                    <path stroke="none" d="M0 0H6V17H0z"></path>
                    <path fill="none" d="M0.5 0.5H5.5V16.5H0.5z"></path>
                  </g>
                  <g
                    fill="#b53242"
                    stroke="#b53242"
                    strokeWidth="1"
                    data-name="Rectangle 156"
                    transform="rotate(62.03 3064.333 5820.63)"
                  >
                    <path stroke="none" d="M0 0H6V8.312H0z"></path>
                    <path fill="none" d="M0.5 0.5H5.5V7.812H0.5z"></path>
                  </g>
                  <g
                    fill="#b13a49"
                    stroke="#b13a49"
                    strokeWidth="1"
                    data-name="Rectangle 157"
                    transform="rotate(22 2377.834 17716.283)"
                  >
                    <path stroke="none" d="M0 0H9V5H0z"></path>
                    <path fill="none" d="M0.5 0.5H8.5V4.5H0.5z"></path>
                  </g>
                  <g
                    fill="#b13a49"
                    stroke="#b13a49"
                    strokeWidth="1"
                    data-name="Rectangle 158"
                    transform="rotate(-14.98 4879.902 -25649.075)"
                  >
                    <path stroke="none" d="M0 0H7.236V13.624H0z"></path>
                    <path fill="none" d="M0.5 0.5H6.736V13.124H0.5z"></path>
                  </g>
                  <g
                    fill="#b53242"
                    stroke="#fff"
                    strokeWidth="4"
                    data-name="Ellipse 22"
                    transform="translate(6768.266 361.783)"
                  >
                    <ellipse
                      cx="24.561"
                      cy="24.561"
                      stroke="none"
                      rx="24.561"
                      ry="24.561"
                    ></ellipse>
                    <ellipse
                      cx="24.561"
                      cy="24.561"
                      fill="none"
                      rx="22.561"
                      ry="22.561"
                    ></ellipse>
                  </g>
                  <path
                    fill="#b53242"
                    stroke="#fff"
                    strokeWidth="4"
                    d="M6814.708 392.596l3.795 20.32-13.842-7.369"
                    data-name="Path 44"
                  ></path>
                  <g
                    fill="#b53242"
                    stroke="#b53242"
                    strokeWidth="1"
                    data-name="Rectangle 155"
                    transform="scale(-1) rotate(-10.02 -5711.91 38666.309)"
                  >
                    <path stroke="none" d="M0 0H5.359V15.183H0z"></path>
                    <path fill="none" d="M0.5 0.5H4.859V14.683H0.5z"></path>
                  </g>
                  <g
                    fill="#b53242"
                    stroke="#b53242"
                    strokeWidth="1"
                    data-name="Rectangle 156"
                    transform="rotate(117.97 3286.245 2249.005)"
                  >
                    <path stroke="none" d="M0 0H5.359V7.424H0z"></path>
                    <path fill="none" d="M0.5 0.5H4.859V6.924H0.5z"></path>
                  </g>
                  <path
                    fill="#fafafa"
                    d="M0 0H1825V682H0z"
                    data-name="Rectangle 450"
                    transform="translate(5093 464)"
                  ></path>
                  <text
                    fill="#515151"
                    fontFamily="Inter18pt-Medium, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="88"
                    fontWeight="500"
                    transform="translate(5740 634)"
                  >
                    <tspan x="0" y="0">
                      Confirmation
                    </tspan>
                  </text>
                  <text
                    fill="#6a6969"
                    data-name="Your transfer has been sent!"
                    fontFamily="Inter18pt-Medium, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="63"
                    fontWeight="500"
                    transform="translate(5610 778)"
                  >
                    <tspan x="0" y="0">
                      Your transfer has been sent!
                    </tspan>
                  </text>
                  <text
                    fill="#6b6868"
                    data-name="REF #: 104660554169"
                    fontFamily="Inter18pt-Medium, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="55"
                    fontWeight="500"
                    transform="translate(6000 931)"
                  >
                    <tspan x="0" y="0" textAnchor="middle">
                      {data.refNo}
                    </tspan>
                  </text>
                  <ellipse
                    cx="120.5"
                    cy="119.5"
                    fill="#619c70"
                    data-name="Ellipse 2"
                    rx="120.5"
                    ry="119.5"
                    transform="translate(5885 1032)"
                  ></ellipse>
                  <path
                    fill="#fff"
                    d="M5839.667 1369.333l13.7-13.7 30 30 79.3-93.633 14.333 14.667L5883.372 1414z"
                    data-name="Path 1"
                    transform="translate(97.166 -201.5)"
                  ></path>
                  <text
                    fill="#585858"
                    fontFamily="Inter18pt-Medium, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="55"
                    fontWeight="500"
                    transform="translate(5209 1407)"
                  >
                    <tspan x="0" y="0">
                      Amount
                    </tspan>
                  </text>
                  <text
                    fill="#585858"
                    fontFamily="Inter18pt-Medium, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="55"
                    fontWeight="500"
                    transform="translate(5206 2239)"
                  >
                    <tspan x="0" y="0">
                      To
                    </tspan>
                  </text>
                  <text
                    fill="#656565"
                    data-name="Transfer date"
                    fontFamily="Inter18pt-Medium, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="55"
                    fontWeight="500"
                    transform="translate(5207 2886)"
                  >
                    <tspan x="0" y="0">
                      Transfer date
                    </tspan>
                  </text>
                  <text
                    fill="#707070"
                    data-name="Expiry date"
                    fontFamily="Inter18pt-Medium, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="55"
                    fontWeight="500"
                    transform="translate(5208 3188)"
                  >
                    <tspan x="0" y="0">
                      Expiry date
                    </tspan>
                  </text>
                  <text
                    fill="#585858"
                    data-name="From account"
                    fontFamily="Inter18pt-Medium, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="55"
                    fontWeight="500"
                    transform="translate(5206 1811)"
                  >
                    <tspan x="0" y="0">
                      From account
                    </tspan>
                  </text>
                  <text
                    fill="#3d3d3d"
                    fontFamily="Inter18pt-Medium, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="72"
                    fontWeight="500"
                    transform="translate(5204 1928)"
                  >
                    <tspan x="0" y="0">
                      {data.fromAccountAmount1}
                    </tspan>
                  </text>
                  <text
                    fill="#3d3d3d"
                    data-name="One-time contact"
                    fontFamily="Inter18pt-Medium, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="72"
                    fontWeight="500"
                    transform="translate(5205 2358)"
                  >
                    <tspan x="0" y="0">
                      {data.to}
                    </tspan>
                  </text>
                  <text
                    fill="#3d3d3d"
                    data-name="Aug 01, 2023"
                    fontFamily="Inter18pt-Medium, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="72"
                    fontWeight="500"
                    transform="translate(5208 3016)"
                  >
                    <tspan x="0" y="0">
                      {data.transfer_date}
                    </tspan>
                  </text>
                  <text
                    fill="#3d3d3d"
                    data-name="Aug 31, 2023"
                    fontFamily="Inter18pt-Medium, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="72"
                    fontWeight="500"
                    transform="translate(5208 3314)"
                  >
                    <tspan x="0" y="0">
                      {data.expiry_date}
                    </tspan>
                  </text>
                  <text
                    fill="#727272"
                    data-name="6438997"
                    fontFamily="Inter18pt-Medium, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="59"
                    fontWeight="500"
                    transform="translate(5204 2038)"
                  >
                    <tspan x="0" y="0">
                      {data.fromAccountAmount2}
                    </tspan>
                  </text>
                  <text
                    fill="#8f8f8f"
                    data-name="jasonseeweng0411@gmail.com"
                    fontFamily="Inter18pt-Medium, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="56"
                    fontWeight="500"
                    transform="translate(5206 2464)"
                  >
                    <tspan x="0" y="0">
                      {data.email}
                    </tspan>
                  </text>
                  <text
                    fill="#5e5c5c"
                    data-name="$521.76"
                    fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="71"
                    transform="translate(6750 1927)"
                  >
                    <tspan x="0" y="0" textAnchor="end">
                      {data.fromAccountAmount}
                    </tspan>
                  </text>
                  <text
                    fill="#585858"
                    data-name="$16.36"
                    fontFamily="Inter18pt-Regular, 'sans-serif '"
                    fontSize="151"
                    transform="translate(5202 1608)"
                  >
                    <tspan x="0" y="0">
                      {data.amount}
                    </tspan>
                  </text>
                  <text
                    fill="#b53242"
                    data-name="Save to My contacts"
                    fontFamily="Inter18pt-Medium, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="65"
                    fontWeight="500"
                    textDecoration="underline"
                    transform="translate(5341 2726)"
                  >
                    <tspan x="0" y="0">
                      Save to My contacts
                    </tspan>
                  </text>
                  <image
                    width="113"
                    height="113"
                    data-name="Image 4"
                    transform="translate(5205 2650)"
                    xlinkHref="data:image/png;base64,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"
                  ></image>
                  <path
                    fill="#fff"
                    d="M0 0H143V116H0z"
                    data-name="Rectangle 154"
                    transform="translate(5187 2654)"
                  ></path>
                  <g
                    fill="#fff"
                    stroke="#b53242"
                    strokeWidth="4"
                    data-name="Ellipse 20"
                    transform="translate(5245 2669)"
                  >
                    <circle cx="17.5" cy="17.5" r="17.5" stroke="none"></circle>
                    <circle cx="17.5" cy="17.5" r="15.5" fill="none"></circle>
                  </g>
                  <g
                    fill="#fff"
                    stroke="#b53242"
                    strokeWidth="4"
                    data-name="Ellipse 21"
                    transform="translate(5271 2712)"
                  >
                    <circle cx="15.5" cy="15.5" r="15.5" stroke="none"></circle>
                    <circle cx="15.5" cy="15.5" r="13.5" fill="none"></circle>
                  </g>
                  <path
                    fill="none"
                    stroke="#b53242"
                    strokeWidth="4"
                    d="M5273.2 2710.8h-27.4s-17 4.2-16.8 14 0 12.8 0 12.8h36.6"
                    data-name="Path 42"
                  ></path>
                  <text
                    fill="#b53242"
                    data-name="+"
                    fontFamily="SegoeUI, Segoe UI"
                    fontSize="29"
                    transform="translate(5278 2735)"
                  >
                    <tspan x="0" y="0">
                      +
                    </tspan>
                  </text>
                  <text
                    fill="#3d3d3d"
                    data-name="Track this transfer"
                    fontFamily="Inter18pt-Bold, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="71"
                    fontWeight="700"
                    transform="translate(5197 3539)"
                  >
                    <tspan x="0" y="0">
                      Track this transfer
                    </tspan>
                  </text>
                  <path
                    fill="#efeeee"
                    d="M0 0H1693V6H0z"
                    data-name="Rectangle 4"
                    transform="translate(5159 3419)"
                  ></path>
                  <g filter="url(#Rectangle_153)" transform="translate(5071.5 50)">
                    <path
                      fill="#fff"
                      d="M0 0H1799V40H0z"
                      data-name="Rectangle 153"
                      transform="translate(34.5 3566)"
                    ></path>
                  </g>
                  <path
                    fill="#fff"
                    d="M0 0H1825V270H0z"
                    data-name="Rectangle 152"
                    transform="translate(5093 3616)"
                  ></path>
                  <g
                    fill="#b53242"
                    stroke="#b53242"
                    strokeWidth="5"
                    data-name="Rectangle 6"
                    transform="translate(6024 3643)"
                  >
                    <rect width="860" height="185" stroke="none" rx="12"></rect>
                    <rect
                      width="855"
                      height="180"
                      x="2.5"
                      y="2.5"
                      fill="none"
                      rx="9.5"
                    ></rect>
                  </g>
                  <text
                    fill="#fff"
                    data-name="New transfer"
                    fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="65"
                    transform="translate(6263 3765)"
                  >
                    <tspan x="0" y="0">
                      New transfer
                    </tspan>
                  </text>
                  <g
                    fill="none"
                    stroke="#b53242"
                    strokeWidth="5"
                    data-name="Rectangle 5"
                    transform="translate(5128 3643)"
                  >
                    <rect width="860" height="185" stroke="none" rx="12"></rect>
                    <rect width="855" height="180" x="2.5" y="2.5" rx="9.5"></rect>
                  </g>
                  <text
                    fill="#b53242"
                    data-name="My Accounts"
                    fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                    fontSize="65"
                    transform="translate(5358 3765)"
                  >
                    <tspan x="0" y="0">
                      My Accounts
                    </tspan>
                  </text>
                  {
                    isIOS
                      ?
                      <>
                        <rect
                          width="662"
                          height="21"
                          fill="#383838"
                          data-name="Rectangle 11"
                          rx="10.5"
                          transform="translate(5680 3954)"
                        ></rect>
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
                <label>Reference No.</label>
                <input
                  type="text"
                  value={data.refNo}
                  name="refNo"
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
                <label>From Account</label>
                <input
                  type="text"
                  value={data.fromAccountAmount}
                  name="fromAccountAmount"
                  onChange={(e) => onChangeHandler(e)}
                />
                <input
                  type="text"
                  value={data.fromAccountAmount1}
                  name="fromAccountAmount1"
                  onChange={(e) => onChangeHandler(e)}
                />
                <input
                  type="text"
                  value={data.fromAccountAmount2}
                  name="fromAccountAmount2"
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
              <div className="global_form_inner">
                <label>To</label>
                <input
                  type="text"
                  value={data.to}
                  name="to"
                  onChange={(e) => onChangeHandler(e)}
                />
                <input
                  type="text"
                  value={data.email}
                  name="email"
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
              <div className="global_form_inner">
                <label>Transfer date</label>
                <input
                  type="text"
                  value={data.transfer_date}
                  name="transfer_date"
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
              <div className="global_form_inner">
                <label>Expiry date</label>
                <input
                  type="text"
                  value={data.expiry_date}
                  name="expiry_date"
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
            </div>
          </div>
 
      </div >
    </>
  )
}

export default View1