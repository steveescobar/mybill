"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from "@/utils/getPicture";
import { RobotoBaseEncoded } from "@/utils/encodedFonts/RobotoBaseEncoded";
import Image from "next/image";

const View34 = () => {

  const screenshotRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const pageName = "VIEW 34";

  const [data, setData] = useState({

    amount: "$162,862.70",
    address: "$43, 021",
    address_sub: "+1.05%",
    address2: "$1.00",
    address_sub2: "+0.02%",

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
                viewBox="0 0 423.25 913"
              >

                <style>
                  {
                    RobotoBaseEncoded
                  }
                </style>
                <g data-name="Group 52" transform="translate(-584 -78)">
                  <g data-name="Group 45" transform="translate(-57)">
                    <g data-name="Group 44" transform="translate(0 -1)">
                      <g data-name="Group 43" transform="translate(56)">
                        <path
                          fill="#fff"
                          d="M0 0H423V913H0z"
                          data-name="Rectangle 1"
                          transform="translate(585 79)"
                        ></path>
                        <g data-name="Group 49" transform="translate(6 -3)">
                          <circle
                            cx="25"
                            cy="25"
                            r="25"
                            fill="#0451eb"
                            data-name="Ellipse 2"
                            transform="translate(845 286)"
                          ></circle>
                          <g data-name="Group 48">
                            <circle
                              cx="25"
                              cy="25"
                              r="25"
                              fill="#0451eb"
                              data-name="Ellipse 1"
                              transform="translate(928 286)"
                            ></circle>
                            <circle
                              cx="25"
                              cy="25"
                              r="25"
                              fill="#0451eb"
                              data-name="Ellipse 3"
                              transform="translate(764 286)"
                            ></circle>
                            <circle
                              cx="25"
                              cy="25"
                              r="25"
                              fill="#0451eb"
                              data-name="Ellipse 4"
                              transform="translate(684 286)"
                            ></circle>
                            <circle
                              cx="25"
                              cy="25"
                              r="25"
                              fill="#0451eb"
                              data-name="Ellipse 5"
                              transform="translate(602 286)"
                            ></circle>
                            <text
                              fill="#fff"
                              data-name="+"
                              fontFamily="Roboto-Medium, Roboto"
                              fontSize="39"
                              fontWeight="500"
                              letterSpacing="-.007em"
                              transform="translate(616 325)"
                            >
                              <tspan x="0" y="0">
                                +
                              </tspan>
                            </text>
                            <text
                              fill="#fff"
                              data-name="_"
                              fontFamily="Roboto-Medium, Roboto"
                              fontSize="39"
                              fontWeight="500"
                              transform="translate(700 309)"
                            >
                              <tspan x="0" y="0">
                                _
                              </tspan>
                            </text>
                            <text
                              fill="#fff"
                              data-name="..."
                              fontFamily="Roboto-Medium, Roboto"
                              fontSize="32"
                              fontWeight="500"
                              letterSpacing="-.007em"
                              transform="translate(940 313)"
                            >
                              <tspan x="0" y="0">
                                ...
                              </tspan>
                            </text>
                            <path
                              fill="#fff"
                              d="M82.219 0L74.3 8.972h5.938v12.564H84.2V8.972h5.938z"
                              transform="translate(707.79 300.732)"
                            ></path>
                            <path
                              fill="#fff"
                              d="M82.219 21.536L74.3 12.564h5.938V0H84.2v12.564h5.938z"
                              data-name="up-arrow-1-svgrepo-com"
                              transform="translate(789.05 300.232)"
                            ></path>
                            <text
                              fill="#0c0c0c"
                              fontFamily="Roboto-Medium, Roboto"
                              fontSize="14"
                              fontWeight="500"
                              letterSpacing="-.007em"
                              transform="translate(615 359)"
                            >
                              <tspan x="0" y="0">
                                Buy
                              </tspan>
                            </text>
                            <text
                              fill="#0c0c0c"
                              fontFamily="Roboto-Medium, Roboto"
                              fontSize="14"
                              fontWeight="500"
                              letterSpacing="-.007em"
                              transform="translate(698 359)"
                            >
                              <tspan x="0" y="0">
                                Sell
                              </tspan>
                            </text>
                            <text
                              fill="#0c0c0c"
                              fontFamily="Roboto-Medium, Roboto"
                              fontSize="14"
                              fontWeight="500"
                              letterSpacing="-.007em"
                              transform="translate(774 359)"
                            >
                              <tspan x="0" y="0">
                                Send
                              </tspan>
                            </text>
                            <text
                              fill="#0c0c0c"
                              fontFamily="Roboto-Medium, Roboto"
                              fontSize="14"
                              fontWeight="500"
                              letterSpacing="-.007em"
                              transform="translate(847 359)"
                            >
                              <tspan x="0" y="0">
                                Receive
                              </tspan>
                            </text>
                            <text
                              fill="#0c0c0c"
                              fontFamily="Roboto-Medium, Roboto"
                              fontSize="14"
                              fontWeight="500"
                              letterSpacing="-.007em"
                              transform="translate(936 359)"
                            >
                              <tspan x="0" y="0">
                                More
                              </tspan>
                            </text>
                          </g>
                        </g>
                        <g data-name="Group 47" transform="translate(7)">
                          <path
                            fill="none"
                            stroke="#000"
                            strokeWidth="2.5"
                            d="M0 0L8 0"
                            data-name="Line 1"
                            transform="translate(960.7 175.702)"
                          ></path>
                          <g data-name="Group 46" transform="translate(1)">
                            <path
                              d="M0 65.5A1.489 1.489 0 011.484 64H19.29a1.5 1.5 0 010 2.994H1.484A1.489 1.489 0 010 65.5zm0 7.485a1.489 1.489 0 011.484-1.5H19.29a1.5 1.5 0 010 2.994H1.484A1.489 1.489 0 010 72.981zm20.773 7.485a1.489 1.489 0 01-1.484 1.5H1.484a1.5 1.5 0 010-2.994H19.29a1.489 1.489 0 011.483 1.49z"
                              data-name="Path 1"
                              transform="translate(602 92.369)"
                            ></path>
                            <text
                              fill="#585858"
                              data-name="Your balance"
                              fontFamily="Roboto-Medium, Roboto"
                              fontSize="17"
                              fontWeight="500"
                              letterSpacing="-.007em"
                              transform="translate(602 213)"
                            >
                              <tspan x="0" y="0">
                                Your balance
                              </tspan>
                            </text>
                            <text
                              fill="#323232"
                              stroke="rgba(0,0,0,0)"
                              strokeWidth="1"
                              data-name="$162,862.70"
                              fontFamily="Roboto-Medium, Roboto"
                              fontSize="29"
                              fontWeight="500"
                              letterSpacing=".04em"
                              transform="translate(602 243)"
                            >
                              <tspan x="0" y="0">
                                {data.amount}
                              </tspan>
                            </text>
                            <g fill="#fff" data-name="Path 3">
                              <path
                                d="M12.655 17.062h-16.09l1.826-3.221.163-.287v-6.53c0-3.184 2.746-5.774 6.123-5.774 3.376 0 6.123 2.59 6.123 5.774v6.509l.143.273 1.712 3.256z"
                                transform="translate(959.365 155)"
                              ></path>
                              <path
                                fill="#000"
                                d="M4.677 2.5C1.99 2.5-.196 4.53-.196 7.024v6.86l-1.094 1.928h11.876l-1.036-1.97V7.024C9.55 4.529 7.364 2.5 4.677 2.5m0-2.5c4.072 0 7.373 3.145 7.373 7.024v6.2l2.675 5.088H-5.581l2.885-5.088v-6.2C-2.696 3.144.604 0 4.677 0z"
                                transform="translate(959.365 155)"
                              ></path>
                            </g>
                            <g data-name="Group 5" transform="translate(473 -49)">
                              <g data-name="Group 4" transform="translate(1 3)">
                                <rect
                                  width="94"
                                  height="37"
                                  fill="#f7f7ff"
                                  data-name="Rectangle 4"
                                  rx="18.5"
                                  transform="translate(374 193)"
                                ></rect>
                              </g>
                              <text
                                fill="#3460c1"
                                data-name="Get $10"
                                fontFamily="Roboto-Medium, Roboto"
                                fontSize="16"
                                fontWeight="500"
                                letterSpacing="-.017em"
                                transform="translate(405 220)"
                              >
                                <tspan x="0" y="0">
                                  Get $10
                                </tspan>
                              </text>
                              <g
                                fill="none"
                                data-name="Group 2"
                                transform="translate(386 208)"
                              >
                                <g strokeLinecap="round" data-name="gift-svgrepo-com (1)">
                                  <path
                                    d="M12 7H8.464a1.947 1.947 0 01-1.389-.586 2.026 2.026 0 010-2.828A1.947 1.947 0 018.464 3C11.214 3 12 7 12 7zm0 0h3.536a1.947 1.947 0 001.389-.586 2.026 2.026 0 000-2.828A1.947 1.947 0 0015.536 3C12.786 3 12 7 12 7z"
                                    transform="translate(-5.5 -3)"
                                  ></path>
                                  <path
                                    fill="#3460c1"
                                    d="M15.536 7H12s.786-4 3.536-4c.52 0 1.02.21 1.389.586.368.375.575.884.575 1.414 0 .53-.207 1.04-.575 1.414a1.947 1.947 0 01-1.39.586zM12 7H8.464c-.52 0-1.02-.21-1.389-.586A2.019 2.019 0 016.5 5c0-.53.207-1.04.575-1.414A1.947 1.947 0 018.465 3C11.214 3 12 7 12 7z"
                                    transform="translate(-5.5 -3)"
                                  ></path>
                                </g>
                                <g
                                  stroke="#3460c1"
                                  strokeWidth="1"
                                  data-name="Group 1"
                                  transform="translate(0 4)"
                                >
                                  <g data-name="Rectangle 5">
                                    <path stroke="none" d="M0 0H13V9H0z"></path>
                                    <path d="M0.5 0.5H12.5V8.5H0.5z"></path>
                                  </g>
                                  <path d="M6.5.5h0v8.215" data-name="Path 4"></path>
                                </g>
                              </g>
                            </g>
                            <path
                              fill="none"
                              stroke="#4e699e"
                              strokeWidth="2"
                              d="M894.618 237.113h54.57a4.17 4.17 0 004.6-3.18 17.185 17.185 0 001.45-2.9c.692-3.543.927-2.25 1.45-6.63.276-2.336-.07-7.6 2.428-16.516 0 0 .645-.886 5.03-.886h9.944"
                              data-name="Path 5"
                            ></path>
                          </g>
                        </g>
                        <path
                          d="M49.781 98.917a1.7 1.7 0 000-2.479 1.908 1.908 0 00-2.6 0l-6.052 5.767-6.058-5.762a1.908 1.908 0 00-2.6 0 1.7 1.7 0 000 2.479l6.058 5.762-6.052 5.767a1.7 1.7 0 000 2.479 1.908 1.908 0 002.6 0l6.052-5.767 6.058 5.762a1.908 1.908 0 002.6 0 1.7 1.7 0 000-2.479l-6.058-5.762z"
                          data-name="Path 6"
                          transform="translate(942.164 304.707)"
                        ></path>
                        <g data-name="Group 42" transform="translate(-1 8)">
                          <g data-name="Group 41">
                            <g data-name="Group 40">
                              <g data-name="Group 39">
                                <g data-name="Group 38">
                                  <g data-name="Group 37">
                                    <g data-name="Group 8" transform="translate(6 -3)">
                                      <text
                                        fill="#545454"
                                        data-name="Get paid in crypto without trading fees"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="15"
                                        fontWeight="500"
                                        letterSpacing=".036em"
                                        transform="translate(606 487)"
                                      >
                                        <tspan x="0" y="0">
                                          Get paid in crypto without
                                        </tspan>
                                        <tspan x="0" y="23">
                                          trading fees
                                        </tspan>
                                      </text>
                                      <text
                                        data-name="Direct deposit"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="18"
                                        fontWeight="700"
                                        letterSpacing=".008em"
                                        transform="translate(606 458)"
                                      >
                                        <tspan x="0" y="0">
                                          Direct deposit
                                        </tspan>
                                      </text>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <path
                          fill="#dadada"
                          stroke="#dadada"
                          strokeWidth="1"
                          d="M1007.002 550.5H586.017"
                          data-name="Path 7"
                        ></path>
                        <g data-name="Group 51" transform="translate(-1 5)">
                          <g data-name="Group 50">
                            <g data-name="Group 27" transform="translate(479 -5)">
                              <g data-name="Group 26">
                                <g data-name="Group 25">
                                  <g data-name="Group 24">
                                    <g data-name="Group 23">
                                      <g data-name="Group 22">
                                        <g data-name="Group 21">
                                          <g data-name="Group 20">
                                            <text
                                              fontFamily="Roboto-Bold, Roboto"
                                              fontSize="23"
                                              fontWeight="700"
                                              letterSpacing=".036em"
                                              transform="translate(136 596)"
                                            >
                                              <tspan x="0" y="0">
                                                Watchlist
                                              </tspan>
                                            </text>
                                            <g transform="translate(133.987 638.656)">
                                              <path
                                                fill="#f7931a"
                                                d="M851.241 915.786a19 19 0 11-13.841-23.028 19 19 0 0113.837 23.028z"
                                                data-name="Path 8"
                                                transform="translate(-813.797 -892.188)"
                                              ></path>
                                              <path
                                                fill="#fff"
                                                d="M893.783 945.829c.385-2.5-1.573-3.849-4.25-4.746l.868-3.391-2.12-.514-.846 3.3a86.848 86.848 0 00-1.7-.389l.852-3.323-2.119-.514-.869 3.389c-.461-.1-.914-.2-1.354-.31v-.01l-2.924-.711-.564 2.2s1.573.351 1.54.373a1.1 1.1 0 01.988 1.2l-.989 3.863a1.754 1.754 0 01.22.069l-.224-.054-1.387 5.411a.774.774 0 01-.972.49c.021.03-1.541-.375-1.541-.375l-1.053 2.363 2.759.67c.513.125 1.016.256 1.512.38l-.877 3.43 2.118.514.869-3.393c.578.153 1.14.294 1.69.427l-.866 3.377 2.12.514.877-3.423c3.616.666 6.334.4 7.479-2.786.922-2.563-.046-4.042-1.948-5.006a3.327 3.327 0 002.707-3.031zm-4.845 6.613c-.655 2.563-5.088 1.178-6.526.83l1.164-4.544c1.437.349 6.047 1.041 5.362 3.713zm.656-6.65c-.6 2.331-4.287 1.147-5.484.857l1.056-4.121c1.196.29 5.05.832 4.428 3.264z"
                                                data-name="Path 9"
                                                transform="translate(-866.227 -929.517)"
                                              ></path>
                                            </g>
                                            <g
                                              data-name="Group 15"
                                              transform="translate(133.5 725.575)"
                                            >
                                              <g
                                                data-name="Group 14"
                                                transform="translate(.5 .7)"
                                              >
                                                <g data-name="Group 13">
                                                  <circle
                                                    cx="19"
                                                    cy="19"
                                                    r="19"
                                                    fill="#00a478"
                                                    data-name="Ellipse 6"
                                                  ></circle>
                                                  <path
                                                    fill="#fff"
                                                    d="M25.009 24.3v-5.382H17.9V14.2h19.867v4.784h-7.11V24.3z"
                                                    data-name="Path 10"
                                                    transform="translate(-8.482 -6.386)"
                                                  ></path>
                                                  <path
                                                    fill="#fff"
                                                    d="M24.061 25.932c6.245 0 9.479 2.06 9.869 2.724-.39.664-3.568 1.661-9.869 1.661-6.245 0-9.479-1-9.869-1.661.39-.731 3.624-2.724 9.869-2.724zm0-.532C18.1 25.4 13.3 26.862 13.3 28.656s4.8 3.256 10.761 3.256 10.761-1.462 10.761-3.256S30.027 25.4 24.061 25.4z"
                                                    data-name="Path 11"
                                                    transform="translate(-4.795 -10.889)"
                                                  ></path>
                                                  <g
                                                    data-name="Group 12"
                                                    transform="translate(16.559 14.224)"
                                                  >
                                                    <path
                                                      fill="#fff"
                                                      d="M6.248 3.954V.233C5.318.166 4.321.1 3.324.1 2.394.1 1.53.1.666.166v3.721c.8 0 1.728.066 2.658.066a21.458 21.458 0 002.924 0zm-2.99 2.192c-.93 0-1.794 0-2.658-.066v9.9h5.581V6.014c-.93.066-1.927.132-2.923.132z"
                                                      data-name="Path 12"
                                                      transform="translate(-.6 -.1)"
                                                    ></path>
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                            <g data-name="Group 19">
                                              <text
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="18"
                                                fontWeight="700"
                                                letterSpacing=".054em"
                                                transform="translate(190 650)"
                                              >
                                                <tspan x="0" y="0">
                                                  Bitcoin
                                                </tspan>
                                              </text>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <text
                                    fill="#141414"
                                    fontFamily="Roboto-Bold, Roboto"
                                    fontSize="18"
                                    fontWeight="700"
                                    letterSpacing=".045em"
                                    transform="translate(190 739)"
                                  >
                                    <tspan x="0" y="0">
                                      Tether
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                              <text
                                fill="#696969"
                                fontFamily="Roboto-Medium, Roboto"
                                fontSize="18"
                                fontWeight="500"
                                letterSpacing=".011em"
                                transform="translate(189 677)"
                              >
                                <tspan x="0" y="0">
                                  BTC
                                </tspan>
                              </text>
                              <text
                                data-name="$43,021"
                                fontFamily="Roboto-Bold, Roboto"
                                fontSize="17"
                                fontWeight="700"
                                letterSpacing=".067em"
                                transform="translate(507 649)"
                              >
                                <tspan x="0" y="0" textAnchor='end'>
                                  {data.address}
                                </tspan>
                              </text>
                              <text
                                fill="#197659"
                                data-name="1.05%"
                                fontFamily="Roboto-Medium, Roboto"
                                fontSize="17"
                                fontWeight="500"
                                letterSpacing=".043em"
                                transform="translate(504.5 676)"
                              >
                                <tspan x="0" y="0" textAnchor='end'>
                                  {data.address_sub}
                                </tspan>
                              </text>
                              <text
                                data-name="$1.00"
                                fontFamily="Roboto-Bold, Roboto"
                                fontSize="17"
                                fontWeight="700"
                                letterSpacing=".04em"
                                transform="translate(504 739)"
                              >
                                <tspan x="0" y="0" textAnchor='end'>
                                  {data.address2}
                                </tspan>
                              </text>
                              <text
                                fill="#197659"
                                data-name=".02%"
                                fontFamily="Roboto-Medium, Roboto"
                                fontSize="17"
                                fontWeight="500"
                                letterSpacing=".043em"
                                transform="translate(504 767)"
                              >
                                <tspan x="0" y="0" textAnchor='end'>
                                  {data.address_sub2}
                                </tspan>
                              </text>
                              <text
                                fill="#6a6a6c"
                                fontFamily="Roboto-Medium, Roboto"
                                fontSize="18"
                                fontWeight="500"
                                letterSpacing=".045em"
                                transform="translate(189 766)"
                              >
                                <tspan x="0" y="0">
                                  USDT
                                </tspan>
                              </text>
                            </g>
                          </g>
                          <path
                            fill="none"
                            stroke="#c47f26"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M792.566 652.427c2.167 1.912 1.784 2.039 1.784 2.039s1.529.159 1.529 0c0-.051.847-3.388 1.02-4.079.255-1.02.669-2.868.892-3.824s.765-4.079.765-4.079l.765-2.167.637-1.657 1.912 1.657c.478.414 1.4 3.441 1.4 3.441l1.275 3.951 1.784 3.441c.446.86 0 1.275 0 1.275l.765 1.275h4.334l.637 2.677.892 2.039.892 3.059 1.657 2.422s.159 1.561 1.02 1.4l1.4-.765 1.02-1.275 2.8-1.784 2.294-2.294 1.02-.765h3.7l2.294-2.677 2.167-3.314 3.186-4.716a29.115 29.115 0 001.912-5.226l1.784-2.167h2.549a6.012 6.012 0 011.912.765c.478.191 2.294-.574 3.059-.765"
                            data-name="Path 13"
                          ></path>
                        </g>
                        <path
                          fill="#dadada"
                          stroke="#dadada"
                          strokeWidth="1"
                          d="M1006.993 815.5H586.008"
                          data-name="Path 14"
                        ></path>
                        <text
                          data-name="Top movers"
                          fontFamily="Roboto-Bold, Roboto"
                          fontSize="23"
                          fontWeight="700"
                          letterSpacing=".02em"
                          transform="translate(614 858)"
                        >
                          <tspan x="0" y="0">
                            Top movers
                          </tspan>
                        </text>
                        <path
                          d="M17.453 9.629a7.824 7.824 0 10-7.824 7.824 7.824 7.824 0 007.824-7.824zM0 9.629a9.629 9.629 0 119.629 9.629A9.629 9.629 0 010 9.629z"
                          data-name="Path 19"
                          transform="translate(935.603 905.742)"
                        ></path>
                        <ellipse
                          cx="10"
                          cy="11.091"
                          data-name="Ellipse 8"
                          rx="10"
                          ry="11.091"
                          transform="rotate(-3 17746.379 -17482.898)"
                        ></ellipse>
                        <path
                          d="M0 0H20V22.182H0z"
                          data-name="Rectangle 8"
                          transform="rotate(-3 17749.378 -17368.329)"
                        ></path>
                        <ellipse
                          cx="8"
                          cy="8.873"
                          data-name="Ellipse 9"
                          rx="8"
                          ry="8.873"
                          transform="rotate(-3 17787.743 -17522.189)"
                        ></ellipse>
                        <g
                          fill="#fff"
                          stroke="#dadada"
                          strokeWidth="1"
                          data-name="Group 32"
                          transform="translate(477)"
                        >
                          <g data-name="Rectangle 12" transform="translate(136 874)">
                            <rect width="162" height="37" stroke="none" rx="6"></rect>
                            <rect
                              width="161"
                              height="36"
                              x="0.5"
                              y="0.5"
                              fill="none"
                              rx="5.5"
                            ></rect>
                          </g>
                          <g data-name="Rectangle 15" transform="translate(316 874)">
                            <rect width="162" height="37" stroke="none" rx="6"></rect>
                            <rect
                              width="161"
                              height="36"
                              x="0.5"
                              y="0.5"
                              fill="none"
                              rx="5.5"
                            ></rect>
                          </g>
                          <g data-name="Rectangle 16">
                            <path
                              stroke="none"
                              d="M6 0h27v37H6a6 6 0 01-6-6V6a6 6 0 016-6z"
                              transform="translate(498 874)"
                            ></path>
                            <path
                              fill="none"
                              d="M6 .5h26.5v36h0H6A5.5 5.5 0 01.5 31V6A5.5 5.5 0 016 .5z"
                              transform="translate(498 874)"
                            ></path>
                          </g>
                        </g>
                        <path
                          fill="#fff"
                          d="M0 0H421V103H0z"
                          data-name="Rectangle 11"
                          transform="translate(586 888)"
                        ></path>
                        <text
                          fill="#575757"
                          fontFamily="Roboto-Bold, Roboto"
                          fontSize="12"
                          fontWeight="700"
                          letterSpacing=".011em"
                          transform="translate(732 944)"
                        >
                          <tspan x="0" y="0">
                            Assets
                          </tspan>
                        </text>
                        <text
                          fill="#575757"
                          fontFamily="Roboto-Bold, Roboto"
                          fontSize="12"
                          fontWeight="700"
                          letterSpacing=".018em"
                          transform="translate(834 944)"
                        >
                          <tspan x="0" y="0">
                            Trade
                          </tspan>
                        </text>
                        <text
                          fill="#575757"
                          fontFamily="Roboto-Bold, Roboto"
                          fontSize="12"
                          fontWeight="700"
                          letterSpacing=".018em"
                          transform="translate(940 944)"
                        >
                          <tspan x="0" y="0">
                            Pay
                          </tspan>
                        </text>
                        <path
                          fill="#0751ce"
                          d="M19.942 31.077v-9.814h-5.07v9.814H6v-17l11.407-6.962 11.407 6.967v17z"
                          transform="translate(634.093 895.888)"
                        ></path>
                        <text
                          fill="#0751ce"
                          fontFamily="Roboto-Bold, Roboto"
                          fontSize="12"
                          fontWeight="700"
                          letterSpacing=".011em"
                          transform="translate(635 944)"
                        >
                          <tspan x="0" y="0">
                            Home
                          </tspan>
                        </text>
                        <path
                          fill="#dadada"
                          stroke="#dadada"
                          strokeWidth="2"
                          d="M1006.992 888H586"
                          data-name="Path 15"
                        ></path>
                        <g
                          stroke="#000"
                          strokeWidth="2"
                          data-name="Group 29"
                          transform="translate(2 -1)"
                        >
                          <g
                            fill="#fff"
                            data-name="Ellipse 7"
                            transform="translate(737 904)"
                          >
                            <circle cx="12" cy="12" r="12" stroke="none"></circle>
                            <circle cx="12" cy="12" r="11" fill="none"></circle>
                          </g>
                          <path
                            fill="none"
                            d="M746.644 904.532c-.005 11.875 0 12.318 0 12.318h12.044"
                            data-name="Path 16"
                            transform="translate(2 0)"
                          ></path>
                        </g>
                        <g data-name="Group 31" transform="translate(1.593 -1.944)">
                          <g fill="none" stroke="#000" data-name="Group 30">
                            <path
                              strokeWidth="2"
                              d="M0 0L22.342 0"
                              data-name="Line 6"
                              transform="translate(837.5 925)"
                            ></path>
                            <path
                              strokeLinecap="square"
                              strokeMiterlimit="10"
                              strokeWidth="1.7"
                              d="M852.62 908.398l4.195-.366.33 3.77h0"
                              data-name="Path 17"
                            ></path>
                            <path
                              strokeLinecap="square"
                              strokeMiterlimit="10"
                              strokeWidth="1.7"
                              d="M840.196 919.106l5.774-6.965 3.85 4.643 4.881-5.887 1.535-1.851"
                              data-name="Path 18"
                            ></path>
                          </g>
                        </g>
                        <g fill="#fff" data-name="Group 33" transform="translate(482 1)">
                          <g
                            stroke="#000"
                            strokeWidth="1.7"
                            data-name="Rectangle 17"
                            transform="translate(456 906)"
                          >
                            <rect width="20" height="20" stroke="none" rx="10"></rect>
                            <rect
                              width="18.3"
                              height="18.3"
                              x="0.85"
                              y="0.85"
                              fill="none"
                              rx="9.15"
                            ></rect>
                          </g>
                          <g
                            stroke="#000"
                            strokeWidth="1.7"
                            data-name="Rectangle 20"
                            transform="translate(456 906)"
                          >
                            <rect width="20" height="20" stroke="none" rx="10"></rect>
                            <rect
                              width="18.3"
                              height="18.3"
                              x="0.85"
                              y="0.85"
                              fill="none"
                              rx="9.15"
                            ></rect>
                          </g>
                          <g data-name="Subtraction 2">
                            <path
                              d="M12.7 17.324v-2.187a8 8 0 000-12.949V0a10 10 0 010 17.323z"
                              transform="translate(464.3 907.338)"
                            ></path>
                            <path
                              fill="#000"
                              d="M12.7 17.324v-2.187A8.03 8.03 0 0016 8.663a8.031 8.031 0 00-3.3-6.475V0a10.05 10.05 0 013.62 3.592 9.983 9.983 0 011.38 5.07 9.988 9.988 0 01-4.998 8.661l-.002.001z"
                              transform="translate(464.3 907.338)"
                            ></path>
                          </g>
                        </g>
                        <g data-name="Group 36" transform="translate(-1 18)">
                          <g data-name="Group 11" transform="translate(482 -19)">
                            <g data-name="Group 9">
                              <path
                                fill="#76a5ff"
                                d="M0 0H101V46H0z"
                                data-name="Rectangle 6"
                                transform="translate(371 488)"
                              ></path>
                              <path
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                d="M0 0L56 0"
                                data-name="Line 2"
                                transform="translate(379.5 500.5)"
                              ></path>
                              <path
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                d="M0 0L47 0"
                                data-name="Line 3"
                                transform="translate(379.5 509.5)"
                              ></path>
                              <path
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                d="M0 0L38 0"
                                data-name="Line 4"
                                transform="translate(379.5 523.5)"
                              ></path>
                              <path
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                d="M0 0L25 0"
                                data-name="Line 5"
                                transform="translate(438.5 523.5)"
                              ></path>
                              <path
                                fill="#fff"
                                d="M0 0H25V9H0z"
                                data-name="Rectangle 7"
                                transform="translate(443 494)"
                              ></path>
                            </g>
                            <g
                              data-name="Group 10"
                              fontFamily="Roboto-Bold, Roboto"
                              fontSize="20"
                              fontWeight="700"
                              letterSpacing=".008em"
                            >
                              <text data-name="+" transform="translate(379 453)">
                                <tspan x="0" y="0">
                                  +
                                </tspan>
                              </text>
                              <text data-name="+" transform="translate(453 481)">
                                <tspan x="0" y="0">
                                  +
                                </tspan>
                              </text>
                            </g>
                          </g>
                          <g data-name="Group 35">
                            <g data-name="Group 34" transform="translate(483 -19)">
                              <path
                                fill="#fed104"
                                d="M30.5 74a20.493 20.493 0 01-16.249-33h.822a20.5 20.5 0 0030.855 0h.822A20.5 20.5 0 0130.5 74z"
                                data-name="Subtraction 3"
                                transform="rotate(180 226 253)"
                              ></path>
                              <circle
                                cx="20.5"
                                cy="20.5"
                                r="20.5"
                                fill="#0a48eb"
                                data-name="Ellipse 15"
                                transform="translate(401 457)"
                              ></circle>
                              <path
                                fill="#d1cfdc"
                                d="M46.117 23H10.884a20.489 20.489 0 011.367-23h.822A20.5 20.5 0 0028.5 7a20.5 20.5 0 0015.427-7h.823a20.527 20.527 0 011.367 23z"
                                data-name="Subtraction 5"
                                transform="translate(393 465)"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                      {
                        isIOS
                          ?
                          <>
                            <rect
                              width="152"
                              height="5"
                              data-name="Rectangle 24"
                              rx="2.5"
                              transform="translate(779 980)"
                            ></rect>
                          </>
                          :
                          <></>
                      }
                    </g>
                    <path
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1.5"
                      d="M0 0L0 42"
                      data-name="Line 7"
                      transform="translate(1063.5 871.5)"
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
                // iconPadding={`2rem 4.5rem 0rem 6rem`}
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
                <label>Bitcoin</label>
                <input
                  type="text"
                  value={data.address}
                  name="address"
                  onChange={(e) => onChangeHandler(e)}
                />
                <input
                  type="text"
                  value={data.address_sub}
                  name="address_sub"
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
              <div className="global_form_inner">
                <label>Tether</label>
                <input
                  type="text"
                  value={data.address2}
                  name="address2"
                  onChange={(e) => onChangeHandler(e)}
                />
                <input
                  type="text"
                  value={data.address_sub2}
                  name="address_sub2"
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>

            </div>
          </div>
      </div>

    </>
  )
}

export default View34