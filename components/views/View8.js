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


const View8 = () => {

  const screenshotRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const pageName = "VIEW 8";

  const [data, setData] = useState({
    date: "Aug 12, 2024 at 1:17 p.m. EDT",
    from: "Chequing (1131)",
    newbalance: "800.38",
    to: "ahmed",
    amount: "800",
    email: "afn.9993@gmail.com",
    notifyrecipientby: "email",
    Confirmation: "V92AH5"
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
    const timePart = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });

    const formatTimeSuffix = (time) => {
      const lastTwoChars = time.slice(-2).toUpperCase();
      switch (lastTwoChars) {
        case 'AM':
          return 'a.m.';
        case 'PM':
          return 'p.m.';
        default:
          return '';
      }
    };

    const lastTwoChars = formatTimeSuffix(timePart);
    const timeOnly = timePart.slice(0, -2)

    const formattedDateTime = `${datePart} at ${timeOnly} ${lastTwoChars} EDT`;

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
                viewBox="0 0 1753 3796"
              >
                <style>
                  {
                    RobotoBaseEncoded
                  }
                </style>
                <defs>
                  <filter
                    id="Rectangle_50"
                    width="75"
                    height="77"
                    x="1461"
                    y="70"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dy="3"></feOffset>
                    <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
                    <feFlood floodOpacity="0.161"></feFlood>
                    <feComposite in2="blur" operator="in"></feComposite>
                    <feComposite in="SourceGraphic"></feComposite>
                  </filter>
                  <filter id="Rectangle_59">
                    <feOffset dy="3"></feOffset>
                    <feGaussianBlur result="blur-2" stdDeviation="3"></feGaussianBlur>
                    <feFlood floodOpacity="0.09" result="color"></feFlood>
                    <feComposite
                      in="SourceGraphic"
                      in2="blur-2"
                      operator="out"
                    ></feComposite>
                    <feComposite in="color" operator="in"></feComposite>
                    <feComposite in2="SourceGraphic" operator="in"></feComposite>
                  </filter>
                  <filter id="Ellipse_7">
                    <feOffset dy="3"></feOffset>
                    <feGaussianBlur result="blur-3" stdDeviation="3"></feGaussianBlur>
                    <feFlood floodOpacity="0.161" result="color-2"></feFlood>
                    <feComposite
                      in="SourceGraphic"
                      in2="blur-3"
                      operator="out"
                    ></feComposite>
                    <feComposite in="color-2" operator="in"></feComposite>
                    <feComposite in2="SourceGraphic" operator="in"></feComposite>
                  </filter>
                </defs>
                <g data-name="Group 1" transform="translate(-3185 -723)">
                  <path
                    fill="#fff"
                    d="M0 0H1753V3796H0z"
                    data-name="Rectangle 47"
                    transform="translate(3185 723)"
                  ></path>
                  <path
                    fill="#f3f7f8"
                    d="M0 0H1748V381H0z"
                    data-name="Rectangle 60"
                    transform="translate(3188 3788)"
                  ></path>
                  <path
                    fill="#105e9f"
                    d="M0 0H1753V377H0z"
                    data-name="Rectangle 48"
                    transform="translate(3185 723)"
                  ></path>
                  <rect
                    width="113"
                    height="59"
                    fill="#fff"
                    data-name="Rectangle 49"
                    opacity="0.4"
                    rx="16"
                    transform="translate(4655 799)"
                  ></rect>
                  <path
                    fill="#709fc6"
                    d="M0 0a5 5 0 015 5v9a5 5 0 01-5 5z"
                    data-name="Rectangle 51"
                    opacity="0.67"
                    transform="translate(4774 820)"
                  ></path>
                  <g filter="url(#Rectangle_50)" transform="translate(3185 723)">
                    <path
                      fill="#fff"
                      d="M16 0h41v59H16A16 16 0 010 43V16A16 16 0 0116 0z"
                      data-name="Rectangle 50"
                      transform="translate(1470 76)"
                    ></path>
                  </g>
                  <path
                    fill="#fff"
                    d="M104.688 192a60.188 60.188 0 00-40.328 16.077 1.451 1.451 0 00-.055 2.076l4.861 5.08a1.5 1.5 0 002.112.055 49.327 49.327 0 0166.856 0 1.5 1.5 0 002.112-.055l4.861-5.08a1.452 1.452 0 00-.055-2.076A60.35 60.35 0 00104.688 192z"
                    data-name="Path 7"
                    transform="translate(4476.605 606.5)"
                  ></path>
                  <path
                    fill="#fff"
                    d="M221.991 434.471l5.207 5.153a1.493 1.493 0 002.039.055 28.32 28.32 0 0137.47 0 1.493 1.493 0 002.039-.055l5.207-5.153a1.454 1.454 0 00-.055-2.13 38.827 38.827 0 00-51.89 0 1.484 1.484 0 00-.017 2.13zm26 8.5a14.835 14.835 0 00-10.815 4.643 1.456 1.456 0 00.036 2.039l9.722 9.6a1.494 1.494 0 002.112 0l9.722-9.6a1.456 1.456 0 00.036-2.039 14.905 14.905 0 00-10.814-4.64z"
                    data-name="Path 8"
                    transform="translate(4333.305 397.074)"
                  ></path>
                  <rect
                    width="14"
                    height="55"
                    fill="#fff"
                    data-name="Rectangle 38"
                    rx="2"
                    transform="translate(4497 800)"
                  ></rect>
                  <rect
                    width="14"
                    height="41"
                    fill="#fff"
                    data-name="Rectangle 52"
                    rx="2"
                    transform="translate(4472 814)"
                  ></rect>
                  <rect
                    width="14"
                    height="28"
                    fill="#fff"
                    data-name="Rectangle 53"
                    rx="2"
                    transform="translate(4447 827)"
                  ></rect>
                  <rect
                    width="14"
                    height="17"
                    fill="#fff"
                    data-name="Rectangle 54"
                    rx="2"
                    transform="translate(4422 838)"
                  ></rect>
                  <text
                    fill="#fff"
                    data-name="7:18"
                    fontFamily="Roboto-Black, Roboto"
                    fontSize="71"
                    fontWeight="800"
                    transform="translate(3401.665 856)"
                  >
                    <tspan x="0" y="0">
                      7:18
                    </tspan>
                  </text>
                  <text
                    fill="#fff"
                    data-name="Send Money"
                    fontFamily="Roboto-Bold, Roboto"
                    fontSize="66"
                    fontWeight="400"
                    transform="translate(3900 1039)"
                  >
                    <tspan x="0" y="0">
                      Send Money
                    </tspan>
                  </text>
                  <circle
                    cx="42"
                    cy="42"
                    r="42"
                    fill="#fff"
                    data-name="Ellipse 5"
                    transform="translate(4754 964)"
                  ></circle>
                  <text
                    fill="#105e9f"
                    data-name="?"
                    fontFamily="Roboto-Black, Roboto"
                    fontSize="55"
                    fontWeight="800"
                    transform="translate(4781.995 1027)"
                  >
                    <tspan x="0" y="0">
                      ?
                    </tspan>
                  </text>
                  <path
                    fill="#fff"
                    d="M15.132 1.519a1 1 0 011.736 0L31.145 26.5a1 1 0 01-.868 1.5H1.723a1 1 0 01-.868-1.5z"
                    data-name="Polygon 1"
                    transform="rotate(-34 4077.574 -7257.128)"
                  ></path>
                  <ellipse
                    cx="56"
                    cy="55.5"
                    fill="#30ba31"
                    data-name="Ellipse 6"
                    rx="56"
                    ry="55.5"
                    transform="translate(4006 1193)"
                  ></ellipse>
                  <path
                    fill="#fff"
                    d="M5839.67 1327.91l6.363-6.363 13.931 13.931L5896.78 1292l6.655 6.81-43.474 49.838z"
                    data-name="Path 9"
                    transform="translate(-1809.598 -65.836)"
                  ></path>
                  <text
                    fill="#343434"
                    data-name="Money Sent!"
                    fontFamily="Roboto-Bold, Roboto"
                    fontSize="81"
                    fontWeight="390"
                    transform="translate(3851 1441)"
                  >
                    <tspan x="0" y="0">
                      Money Sent!
                    </tspan>
                  </text>
                  <text
                    fill="#515151"
                    data-name="Aug 1, 2023 at 7:18 p.m. ET"
                    fontFamily="Roboto-Regular, Roboto"
                    fontSize="59"
                    fontWeight="300"
                    transform="translate(4100 1567)"
                  >
                    <tspan x="0" y="0" textAnchor='middle'>
                      {data.date}
                    </tspan>
                  </text>
                  <text
                    fill="#515151"
                    data-name="Made a mistake? Cancel or edit an Interac e-"
                    fontFamily="Roboto-Medium, Roboto"
                    fontSize="60"
                    fontWeight="400"
                    transform="translate(3444.872 1792)"
                  >
                    <tspan x="0" y="0">
                      Made a mistake? Cancel or edit an Interac e-
                    </tspan>
                  </text>
                  <text
                    fill="#515151"
                    data-name="Transfer in the History tab until it's accepted."
                    fontFamily="Roboto-Medium, Roboto"
                    fontSize="60"
                    fontWeight="400"
                    transform="translate(3454.128 1864)"
                  >
                    <tspan x="0" y="0">
                      Transfer in the{" "}
                    </tspan>
                    <tspan y="0" fill="#232323" fontWeight="600">
                      History tab
                    </tspan>
                    <tspan y="0" fontWeight="400"> until it&apos;s accepted.</tspan>
                  </text>
                  <text
                    fill="#00579c"
                    data-name="Cancel or edit an e-transfer"
                    fontFamily="Roboto-Regular, Roboto"
                    fontSize="60"
                    fontWeight="400"
                    transform="translate(3690 2056)"
                  >
                    <tspan x="0" y="0">
                      Cancel or edit an e-transfer
                    </tspan>
                  </text>
                  <text
                    fill="#393939"
                    fontFamily="Roboto-Medium, Roboto"
                    fontSize="68"
                    fontWeight="400"
                    transform="translate(3268.176 2317)"
                  >
                    <tspan x="0" y="0">
                      From
                    </tspan>
                  </text>
                  <text
                    fill="#393939"
                    fontFamily="Roboto-Medium, Roboto"
                    fontSize="68"
                    fontWeight="400"
                    transform="translate(3267.24 2773)"
                  >
                    <tspan x="0" y="0">
                      Amount
                    </tspan>
                  </text>
                  <text
                    fill="#393939"
                    fontFamily="Roboto-Medium, Roboto"
                    fontSize="68"
                    fontWeight="400"
                    transform="translate(3268.929 3002)"
                  >
                    <tspan x="0" y="0">
                      To
                    </tspan>
                  </text>
                  <text
                    fill="#393939"
                    fontFamily="Roboto-Medium, Roboto"
                    fontSize="68"
                    fontWeight="400"
                    transform="translate(3266.95 3231)"
                  >
                    <tspan x="0" y="0">
                      Email
                    </tspan>
                  </text>
                  <text
                    fill="#393939"
                    data-name="Notify Recipient By"
                    fontFamily="Roboto-Medium, Roboto"
                    fontSize="68"
                    fontWeight="400"
                    transform="translate(3257.061 3458)"
                  >
                    <tspan x="0" y="0">
                      Notify Recipient By
                    </tspan>
                  </text>
                  <text
                    fill="#393939"
                    data-name="New Balance"
                    fontFamily="Roboto-Medium, Roboto"
                    fontSize="68"
                    fontWeight="400"
                    transform="translate(3266.744 2542)"
                  >
                    <tspan x="0" y="0">
                      New Balance
                    </tspan>
                  </text>
                  <text
                    fill="#393939"
                    data-name="Confirmation #"
                    fontFamily="Roboto-Medium, Roboto"
                    fontSize="68"
                    fontWeight="400"
                    transform="translate(3264.085 3685)"
                  >
                    <tspan x="0" y="0">
                      Confirmation #
                    </tspan>
                  </text>
                  <text
                    fill="#5e5d5d"
                    data-name="Chequing (9040)"
                    fontFamily="Roboto-Regular, Roboto"
                    fontSize="64"
                    transform="translate(4898 2314)"
                  >
                    <tspan x="0" y="0" textAnchor='end'>
                      {data.from}
                    </tspan>
                  </text>
                  <text
                    fill="#5e5d5d"
                    data-name="109.98"
                    fontFamily="Roboto-Regular, Roboto"
                    fontSize="64"
                    transform="translate(4898 2543)"
                  >
                    <tspan x="0" y="0" textAnchor='end'>
                      {data.newbalance}
                    </tspan>
                  </text>
                  <text
                    fill="#5e5d5d"
                    data-name="68"
                    fontFamily="Roboto-Regular, Roboto"
                    fontSize="64"
                    transform="translate(4898 2774)"
                  >
                    <tspan x="0" y="0" textAnchor='end'>
                      {data.amount}
                    </tspan>
                  </text>
                  <text
                    fill="#5e5d5d"
                    data-name="tang see weng"
                    fontFamily="Roboto-Regular, Roboto"
                    fontSize="64"
                    transform="translate(4898 3002)"
                  >
                    <tspan x="0" y="0" textAnchor='end'>
                      {data.to}
                    </tspan>
                  </text>
                  <text
                    fill="#5e5d5d"
                    data-name="jasonseeweng0411@gmail.com"
                    fontFamily="Roboto-Regular, Roboto"
                    fontSize="64"
                    transform="translate(4898 3232)"
                  >
                    <tspan x="0" y="0" textAnchor='end'>
                      {data.email}
                    </tspan>
                  </text>
                  <text
                    fill="#5e5d5d"
                    data-name="Email"
                    fontFamily="Roboto-Regular, Roboto"
                    fontSize="64"
                    transform="translate(4898 3457)"
                  >
                    <tspan x="0" y="0" textAnchor='end'>
                      {data.notifyrecipientby}
                    </tspan>
                  </text>
                  <text
                    fill="#5e5d5d"
                    fontFamily="Roboto-Regular, Roboto"
                    fontSize="64"
                    transform="translate(4898 3686)"
                  >
                    <tspan x="0" y="0" textAnchor='end'>
                      {data.Confirmation}
                    </tspan>
                  </text>
                  <path
                    fill="#0069c4"
                    d="M0 0H1596V247H0z"
                    data-name="Rectangle 55"
                    transform="translate(3264 3867)"
                  ></path>
                  <text
                    fill="#fff"
                    data-name="Send More Money"
                    fontFamily="Roboto-Regular, Roboto"
                    fontSize="66"
                    transform="translate(3791.232 4014)"
                  >
                    <tspan x="0" y="0">
                      Send More Money
                    </tspan>
                  </text>
                  <g data-type="innerShadowGroup">
                    <path
                      fill="#fff"
                      d="M0 0H1748V339H0z"
                      data-name="Rectangle 59"
                      transform="translate(3188 4169)"
                    ></path>
                    <g filter="url(#Rectangle_59)" transform="translate(3185 723)">
                      <path
                        fill="#fff"
                        d="M0 0H1748V339H0z"
                        data-name="Rectangle 59"
                        transform="translate(3 3446)"
                      ></path>
                    </g>
                  </g>
                  <g
                    fill="#fff"
                    stroke="#5d5d5d"
                    strokeWidth="4"
                    data-name="Rectangle 56"
                    transform="translate(3671 4219)"
                  >
                    <rect width="108" height="72" stroke="none" rx="4"></rect>
                    <rect width="104" height="68" x="2" y="2" fill="none" rx="2"></rect>
                  </g>
                  <path
                    fill="none"
                    stroke="#5d5d5d"
                    strokeWidth="4"
                    d="M0 0L107.5 0"
                    data-name="Line 1"
                    transform="translate(3671 4230.5)"
                  ></path>
                  <path
                    fill="none"
                    stroke="#5d5d5d"
                    strokeWidth="4"
                    d="M0 0L107.5 0"
                    data-name="Line 2"
                    transform="translate(3671 4244.5)"
                  ></path>
                  <text
                    fill="#7a7a7a"
                    fontFamily="Roboto-Regular, Roboto"
                    fontSize="48"
                    transform="translate(3621.637 4364)"
                  >
                    <tspan x="0" y="0">
                      Accounts
                    </tspan>
                  </text>
                  <text
                    fill="#8a8989"
                    fontFamily="Roboto-Regular, Roboto"
                    fontSize="48"
                    transform="translate(3328.922 4364)"
                  >
                    <tspan x="0" y="0">
                      Home
                    </tspan>
                  </text>
                  <text
                    fill="#8d8282"
                    fontFamily="Roboto-Regular, Roboto"
                    fontSize="48"
                    transform="translate(4717.551 4364.251)"
                  >
                    <tspan x="0" y="0">
                      More
                    </tspan>
                  </text>
                  <path
                    fill="none"
                    stroke="#707070"
                    strokeWidth="3"
                    d="M0 0L81 0"
                    data-name="Line 3"
                    transform="translate(4731.5 4223.889)"
                  ></path>
                  <path
                    fill="none"
                    stroke="#707070"
                    strokeWidth="3"
                    d="M0 0L81 0"
                    data-name="Line 4"
                    transform="translate(4731.5 4249.889)"
                  ></path>
                  <path
                    fill="none"
                    stroke="#707070"
                    strokeWidth="3"
                    d="M0 0L81 0"
                    data-name="Line 5"
                    transform="translate(4731.5 4275.889)"
                  ></path>
                  <text
                    fill="#005aa8"
                    data-name="Move Money"
                    fontFamily="Roboto-Regular, Roboto"
                    fontSize="48"
                    transform="translate(4279.98 4367.001)"
                  >
                    <tspan x="0" y="0">
                      Move Money
                    </tspan>
                  </text>
                  <rect
                    width="108"
                    height="67"
                    fill="#0069c4"
                    data-name="Rectangle 57"
                    rx="2"
                    transform="translate(4355 4221.139)"
                  ></rect>
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeWidth="3"
                    d="M0 0L53.933 32.171"
                    data-name="Line 6"
                    transform="translate(4355.473 4221.612)"
                  ></path>
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeWidth="3"
                    d="M53.933 0L0 32.171"
                    data-name="Line 7"
                    transform="translate(4409.406 4221.612)"
                  ></path>
                  <g
                    fill="#fff"
                    stroke="#fff"
                    strokeWidth="1"
                    data-name="Ellipse 9"
                    transform="translate(4408 4253.139)"
                  >
                    <ellipse cx="1.5" cy="1" stroke="none" rx="1.5" ry="1"></ellipse>
                    <ellipse cx="1.5" cy="1" fill="none" rx="1" ry="0.5"></ellipse>
                  </g>
                  <g
                    fill="#0069c4"
                    stroke="#fff"
                    strokeWidth="4"
                    data-name="Ellipse 10"
                    transform="translate(4439 4248)"
                  >
                    <circle cx="22" cy="22" r="22" stroke="none"></circle>
                    <circle cx="22" cy="22" r="20" fill="none"></circle>
                  </g>
                  <text
                    fill="#fff"
                    data-name="$"
                    fontFamily="Roboto-Black, Roboto"
                    fontSize="27"
                    fontWeight="800"
                    transform="translate(4453.182 4280)"
                  >
                    <tspan x="0" y="0">
                      $
                    </tspan>
                  </text>
                  <path
                    fill="#0069c4"
                    d="M0 0H1589V4H0z"
                    data-name="Rectangle 58"
                    transform="translate(3271 4179)"
                  ></path>
                  <path
                    fill="#ebebeb"
                    d="M0 0H1585V5H0z"
                    data-name="Rectangle 61"
                    transform="translate(3268 3553)"
                  ></path>
                  <path
                    fill="#ebebeb"
                    d="M0 0H1585V4H0z"
                    data-name="Rectangle 62"
                    transform="translate(3266 3326)"
                  ></path>
                  <path
                    fill="#ebebeb"
                    d="M0 0H1585V4H0z"
                    data-name="Rectangle 63"
                    transform="translate(3266 3096)"
                  ></path>
                  <path
                    fill="#ebebeb"
                    d="M0 0H1585V4H0z"
                    data-name="Rectangle 64"
                    transform="translate(3266 2866)"
                  ></path>
                  <path
                    fill="#ebebeb"
                    d="M0 0H1585V4H0z"
                    data-name="Rectangle 65"
                    transform="translate(3266 2636)"
                  ></path>
                  <path
                    fill="#ebebeb"
                    d="M0 0H1585V4H0z"
                    data-name="Rectangle 66"
                    transform="translate(3266 2406)"
                  ></path>
                  <path
                    fill="#ebebeb"
                    d="M0 0H1585V4H0z"
                    data-name="Rectangle 69"
                    transform="translate(3256 1644)"
                  ></path>
                  <path
                    fill="#ebebeb"
                    d="M0 0H1736V4H0z"
                    data-name="Rectangle 67"
                    transform="translate(3193 2188)"
                  ></path>
                  <path
                    fill="#ebebeb"
                    d="M0 0H1737V4H0z"
                    data-name="Rectangle 68"
                    transform="translate(3192 3784)"
                  ></path>
                  {
                    isIOS
                      ?
                      <>
                        <rect
                          width="624"
                          height="24"
                          fill="#0c0c0c"
                          data-name="Rectangle 70"
                          rx="12"
                          transform="translate(3750 4466)"
                        ></rect>
                      </>
                      :
                      <></>
                  }
                  <g data-type="innerShadowGroup">
                    <circle
                      cx="148"
                      cy="148"
                      r="148"
                      fill="#fff"
                      data-name="Ellipse 7"
                      transform="translate(3913 4096)"
                    ></circle>
                    <g filter="url(#Ellipse_7)" transform="translate(3185 723)">
                      <circle
                        cx="148"
                        cy="148"
                        r="148"
                        fill="#fff"
                        data-name="Ellipse 7"
                        transform="translate(728 3373)"
                      ></circle>
                    </g>
                  </g>
                  <circle
                    cx="119"
                    cy="119"
                    r="119"
                    fill="#fede00"
                    data-name="Ellipse 8"
                    transform="translate(3942 4125)"
                  ></circle>
                  <path
                    fill="#171717"
                    d="M53.831 83.918L14.355 46.1l40.58-39.475L47.482 0 0 46.1l15.563 14.66 31.919 30.062z"
                    data-name="Path 11"
                    transform="rotate(89 -92.025 4197.099)"
                  ></path>
                  <path
                    fill="none"
                    stroke="#707070"
                    strokeWidth="4"
                    d="M3393.7 4269.93h-9.324v30.639h-33.562v-45.859h-9.115l52-49.616"
                    data-name="Path 13"
                  ></path>
                  <path
                    fill="none"
                    stroke="#707070"
                    strokeWidth="4"
                    d="M3391.702 4269.93h9.324v30.639h33.563v-45.859h9.115l-52-49.616"
                    data-name="Path 14"
                  ></path>
                  <path
                    fill="#105e9f"
                    d="M0 0H1509V147H0z"
                    data-name="Rectangle 1"
                    transform="translate(3329 765)"
                  ></path>
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
                <label>From</label>
                <input
                  type="text"
                  value={data.from}
                  name="from"
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
              <div className="global_form_inner">
                <label>New balance</label>
                <input
                  type="text"
                  value={data.newbalance}
                  name="newbalance"
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
                <label>To</label>
                <input
                  type="text"
                  value={data.to}
                  name="to"
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
              </div>
              <div className="global_form_inner">
                <label>Notify Reciepient By</label>
                <input
                  type="text"
                  value={data.notifyrecipientby}
                  name="notifyrecipientby"
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
              <div className="global_form_inner">
                <label>Confirmation</label>
                <input
                  type="text"
                  value={data.Confirmation}
                  name="Confirmation"
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
            </div>
          </div>
      </div >
    </>
  )
}

export default View8