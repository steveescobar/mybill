import React from 'react'

const Page93Icons = ({
    battery,
    isOption,
    time,
    network,
    net,
    isBattery,
    iconPadding,
    isDarkBg,
    isIOS
}) => {
    return (
        <>
            <div className="icon-master-manager-wrapper fontInter page93NewIcon" style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
            }}>

                {
                    isIOS
                        ?
                        <>
                            {
                                isOption
                                    ?
                                    <div className="icon-manager-parent" style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        width: "100%",
                                        padding: `${iconPadding}`
                                    }}>
                                        <div className="icon-manager-childs">
                                            <h3 style={{
                                                fontSize: "2.5rem",
                                                fontWeight: "400",
                                                color: isDarkBg ? "black" : "white"

                                            }}>{time}</h3>
                                        </div>
                                        <div className="icon-manager-childs" style={{
                                            display: "flex",
                                            alignItems: "center"
                                        }}>
                                            <div className="icon-manager-sub-childs" style={{
                                                marginRight: "1rem"
                                            }}>
                                                <div className="tower">
                                                    <ul style={{
                                                        display: "flex",
                                                        alignItems: "baseline",
                                                        listStyleType: "none",
                                                        gap: "0.4rem",
                                                        marginBottom: "0rem"
                                                    }}>
                                                        <li style={{
                                                            height: "0.6rem",
                                                            width: "0.5rem",
                                                            background: isDarkBg ? "black" : `white`,
                                                            borderRadius: "0.2rem",
                                                            opacity: `${network >= 1 ? "1" : "0.4"}`
                                                        }}>
                                                        </li>
                                                        <li style={{
                                                            height: "1.1rem",
                                                            width: "0.5rem",
                                                            background: isDarkBg ? "black" : `white`,
                                                            borderRadius: "0.2rem",
                                                            opacity: `${network >= 2 ? "1" : "0.4"}`
                                                        }}>
                                                        </li>
                                                        <li style={{
                                                            height: "1.6rem",
                                                            width: "0.5rem",
                                                            background: isDarkBg ? "black" : `white`,
                                                            borderRadius: "0.2rem",
                                                            opacity: `${network >= 3 ? "1" : "0.4"}`
                                                        }}>
                                                        </li>
                                                        <li style={{
                                                            height: "2.2rem",
                                                            width: "0.5rem",
                                                            background: isDarkBg ? "black" : `white`,
                                                            borderRadius: "0.2rem",
                                                            opacity: `${network === 4 ? "1" : "0.4"}`
                                                        }}>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="icon-manager-sub-childs" style={{
                                                marginRight: "1rem"
                                            }}>
                                                <div className="network">
                                                    {
                                                        net === "wifi"
                                                            ?
                                                            <>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="50"
                                                                    viewBox="0 0 431.506 308.009"
                                                                    fill={isDarkBg ? "black" : "white"}
                                                                >
                                                                    <g transform="translate(-63.895 -192)">
                                                                        <path
                                                                            d="M279.552 192c-78.446 0-156.892 32.341-213.2 84.991a7.67 7.67 0 00-.289 10.973l25.7 26.855a7.9 7.9 0 0011.165.289 258.584 258.584 0 01176.72-69.013 258.584 258.584 0 01176.72 69.013 7.9 7.9 0 0011.165-.289l25.7-26.855a7.674 7.674 0 00-.289-10.973C436.444 224.341 358 192 279.552 192z"
                                                                            data-name="Path 7"
                                                                        ></path>
                                                                        <path
                                                                            d="M223.884 486.216l27.528 27.24a7.891 7.891 0 0010.78.289 149.719 149.719 0 01198.088 0 7.891 7.891 0 0010.78-.289l27.528-27.24a7.688 7.688 0 00-.289-11.262 205.263 205.263 0 00-274.32 0 7.845 7.845 0 00-.1 11.262zm137.449 44.95a78.426 78.426 0 00-57.174 24.544 7.7 7.7 0 00.193 10.78l51.4 50.725a7.9 7.9 0 0011.165 0l51.4-50.725a7.7 7.7 0 00.193-10.78 78.8 78.8 0 00-57.178-24.544z"
                                                                            data-name="Path 8"
                                                                            transform="translate(-81.781 -119.517)"
                                                                        ></path>
                                                                    </g>
                                                                </svg>
                                                            </>
                                                            :
                                                            <>
                                                                <p style={{
                                                                    fontSize: "2.2rem",
                                                                    color: isDarkBg ? "black" : "white",
                                                                    fontWeight: "400",
                                                                    fontFamily: "Inter18pt-Medium, 'Inter \\31 8pt \\31 8pt'"
                                                                }}>{net}</p>
                                                            </>
                                                    }
                                                </div>
                                            </div>
                                            <div className="icon-manager-sub-childs">
                                                <div className="battery" style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    flexDirection: "row-reverse"
                                                }}>
                                                    <div className="battery-tip" style={{
                                                        height: "10px",
                                                        width: "4px",
                                                        background: isDarkBg ? "rgb(137 131 131)" : "rgb(96 96 96 / 44%)",
                                                        borderRadius: "0 12px 12px 0",
                                                        marginLeft: "1px",
                                                        opacity: "0.5"
                                                    }}></div>
                                                    <div className="battery-outer-box" style={{
                                                        height: "40px",
                                                        width: "80px",
                                                        background: isDarkBg ? "rgb(96 96 96 / 0%)" : "#ffffff70",
                                                        borderRadius: "15px",
                                                        position: "relative",
                                                        overflow: "hidden",
                                                        border: "3px solid #bdbdbd",
                                                    }}>
                                                        <div className="battery-progress" style={{
                                                            position: "absolute",
                                                            height: "100%",
                                                            width: `${battery}%`,
                                                            borderRadius: "13px",
                                                            border: "3px solid rgb(239 242 249)",
                                                            background: isBattery && parseFloat(battery) <= 20 ? "rgb(252 67 41)" : isDarkBg ? "black" : "white",

                                                        }}>
                                                        </div>
                                                        <p style={{
                                                            position: "absolute",
                                                            top: "50%",
                                                            left: "50%",
                                                            transform: "translate(-50%, -50%)",
                                                            fontSize: "1.4rem",
                                                            fontWeight: "600",
                                                            color: isDarkBg ? "#a5a5a5" : "rgb(0 0 0 / 70%)",
                                                        }}>
                                                            {
                                                                isBattery
                                                                    ?
                                                                    <>
                                                                        {battery}
                                                                    </>
                                                                    :
                                                                    <></>
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <></>
                            }
                        </>
                        :
                        <>
                            {
                                isOption
                                    ?
                                    <>
                                        {/*Android*/}
                                        <div className='android-top-parent'>
                                            <div className='android-top-child'>
                                                <div className="icon-manager-parent" style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    width: "100%",
                                                    padding: `${iconPadding}`
                                                }}>
                                                    <div className="icon-manager-childs">
                                                        <h3 style={{
                                                            fontSize: "2.5rem",
                                                            fontWeight: "400",
                                                            color: isDarkBg ? "black" : "white"

                                                        }}>{time}</h3>
                                                    </div>
                                                    <div className="icon-manager-childs" style={{
                                                        display: "flex",
                                                        alignItems: "center"
                                                    }}>
                                                        <div className="icon-manager-sub-childs" style={{
                                                            marginRight: "1rem"
                                                        }}>
                                                            <div className="tower">
                                                                <ul style={{
                                                                    display: "flex",
                                                                    alignItems: "baseline",
                                                                    listStyleType: "none",
                                                                    gap: "0.2rem",
                                                                    marginBottom: "0rem",

                                                                }}>
                                                                    <div className='wi-fi-parent'>
                                                                        <div className='wifi-child' >
                                                                            {
                                                                                net === "wifi"
                                                                                    ?
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="50"
                                                                                        viewBox="0 0 431.506 308.009"
                                                                                        fill={isDarkBg ? "black" : "white"}
                                                                                    >
                                                                                        <g transform="translate(-63.895 -192)">
                                                                                            <path
                                                                                                d="M279.552 192c-78.446 0-156.892 32.341-213.2 84.991a7.67 7.67 0 00-.289 10.973l25.7 26.855a7.9 7.9 0 0011.165.289 258.584 258.584 0 01176.72-69.013 258.584 258.584 0 01176.72 69.013 7.9 7.9 0 0011.165-.289l25.7-26.855a7.674 7.674 0 00-.289-10.973C436.444 224.341 358 192 279.552 192z"
                                                                                                data-name="Path 7"
                                                                                            ></path>
                                                                                            <path
                                                                                                d="M223.884 486.216l27.528 27.24a7.891 7.891 0 0010.78.289 149.719 149.719 0 01198.088 0 7.891 7.891 0 0010.78-.289l27.528-27.24a7.688 7.688 0 00-.289-11.262 205.263 205.263 0 00-274.32 0 7.845 7.845 0 00-.1 11.262zm137.449 44.95a78.426 78.426 0 00-57.174 24.544 7.7 7.7 0 00.193 10.78l51.4 50.725a7.9 7.9 0 0011.165 0l51.4-50.725a7.7 7.7 0 00.193-10.78 78.8 78.8 0 00-57.178-24.544z"
                                                                                                data-name="Path 8"
                                                                                                transform="translate(-81.781 -119.517)"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                    :
                                                                                    <></>
                                                                            }
                                                                        </div>
                                                                        <div className='wifi-child' style={{
                                                                            position: "absolute",
                                                                            top: "3.8rem",
                                                                            right: '16.8rem'
                                                                        }}>
                                                                        </div>
                                                                    </div>

                                                                    <div className='tower-parent' style={{
                                                                        position: "absolute",
                                                                        top: "2.7rem",
                                                                        right: "14.2rem",
                                                                    }}>
                                                                        {
                                                                            net === "wifi"
                                                                                ?
                                                                                <>
                                                                                </>
                                                                                :
                                                                                <>
                                                                                    <p style={{
                                                                                        fontWeight: "600",
                                                                                        color: isDarkBg ? "black" : "white"
                                                                                    }}>
                                                                                        {net}+
                                                                                    </p>
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="27.668"
                                                                                        height="12"
                                                                                        viewBox="0 0 27.668 26"
                                                                                    >
                                                                                        <g data-name="Group 5" transform="translate(-577.332 -379)">
                                                                                            <g data-name="Group 4">
                                                                                                <g data-name="Group 2">
                                                                                                    <g fill={isDarkBg ? "black" : "white"} data-name="Group 1" transform="translate(0 -2)">
                                                                                                        <path
                                                                                                            d="M0 0H5V26H0z"
                                                                                                            data-name="Rectangle 1"
                                                                                                            transform="translate(584 381)"
                                                                                                        ></path>
                                                                                                        <path
                                                                                                            d="M5 0l5 8H0z"
                                                                                                            data-name="Polygon 1"
                                                                                                            transform="rotate(-63 617.79 -269.382)"
                                                                                                        ></path>
                                                                                                    </g>
                                                                                                </g>
                                                                                                <g data-name="Group 3" transform="rotate(180 591.166 392)">
                                                                                                    <g fill={isDarkBg ? "black" : "white"} data-name="Group 1" transform="translate(0 -2)">
                                                                                                        <path
                                                                                                            d="M0 0H5V26H0z"
                                                                                                            data-name="Rectangle 1"
                                                                                                            transform="translate(584 381)"
                                                                                                        ></path>
                                                                                                        <path
                                                                                                            d="M5 0l5 8H0z"
                                                                                                            data-name="Polygon 1"
                                                                                                            transform="rotate(-63 617.79 -269.382)"
                                                                                                        ></path>
                                                                                                    </g>
                                                                                                </g>
                                                                                            </g>
                                                                                        </g>
                                                                                    </svg>
                                                                                </>
                                                                        }

                                                                    </div>
                                                                    <li style={{
                                                                        height: "0.6rem",
                                                                        width: "0.5rem",
                                                                        background: isDarkBg ? "black" : `white`,
                                                                        borderRadius: "0.5rem 0rem 0.1rem 0rem",
                                                                        marginLeft: "0.8rem",
                                                                        opacity: `${network >= 1 ? "1" : "0.4"}`
                                                                    }}>
                                                                    </li>

                                                                    <li style={{
                                                                        height: "1.1rem",
                                                                        width: "0.5rem",
                                                                        background: isDarkBg ? "black" : `white`,
                                                                        borderRadius: "0.5rem 0rem 0rem 0rem",
                                                                        opacity: `${network >= 2 ? "1" : "0.4"}`
                                                                    }}>
                                                                    </li>
                                                                    <li style={{
                                                                        height: "1.6rem",
                                                                        width: "0.5rem",
                                                                        background: isDarkBg ? "black" : `white`,
                                                                        borderRadius: "0.5rem 0rem 0rem 0rem",
                                                                        opacity: `${network >= 3 ? "1" : "0.4"}`
                                                                    }}>
                                                                    </li>
                                                                    <li style={{
                                                                        height: "2.1rem",
                                                                        width: "0.5rem",
                                                                        background: isDarkBg ? "black" : `white`,
                                                                        borderRadius: "0.5rem 0rem 0rem 0rem",
                                                                        opacity: `${network === 4 ? "1" : "0.4"}`
                                                                    }}>
                                                                    </li>
                                                                    <li style={{
                                                                        height: "2.6rem",
                                                                        width: "0.5rem",
                                                                        background: isDarkBg ? "black" : `white`,
                                                                        borderRadius: "0.5rem 0rem 0rem 0rem",
                                                                        opacity: `${network === 4 ? "1" : "0.4"}`
                                                                    }}>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="icon-manager-sub-childs" style={{
                                                            marginLeft: "0.2rem"
                                                        }}>
                                                        </div>
                                                        <div className="icon-manager-sub-childs">
                                                            <div className="battery" style={{
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                flexDirection: "row-reverse"
                                                            }}>
                                                                <div className="battery-tip" style={{
                                                                    height: "10px",
                                                                    width: "2px",
                                                                    background: isDarkBg ? "rgb(96 96 96 / 44%)" : "#ffffff70",
                                                                    borderRadius: "0 12px 12px 0",
                                                                    marginLeft: "1px",
                                                                    opacity: "0.5",
                                                                    border: isDarkBg ? "2px solid black" : "2px solid white",
                                                                }}></div>
                                                                <div className="battery-outer-box" style={{
                                                                    height: "40px",
                                                                    width: "80px",
                                                                    background: isDarkBg ? "rgb(96 96 96 / 44%)" : "#ffffff70",
                                                                    borderRadius: "5px",
                                                                    position: "relative",
                                                                    overflow: "hidden",
                                                                    border: isDarkBg ? "2px solid #0000001c" : "2px solid white",
                                                                    padding: "0.1rem"

                                                                }}>
                                                                    <div className="battery-progress" style={{
                                                                        height: "100%",
                                                                        alignItems: "center",
                                                                        width: `${battery}%`,
                                                                        background: isDarkBg ? "black" : "white",
                                                                        borderRadius: "5px",

                                                                    }}>
                                                                    </div>
                                                                    <p style={{
                                                                        position: "absolute",
                                                                        top: "50%",
                                                                        left: "50%",
                                                                        transform: "translate(-50%, -50%)",
                                                                        fontSize: "1.6rem",
                                                                        fontWeight: "600",
                                                                        color: isDarkBg ? "white" : "rgb(0 0 0 / 70%)",

                                                                    }}>
                                                                        {
                                                                            isBattery
                                                                                ?
                                                                                <>
                                                                                    {battery}
                                                                                </>
                                                                                :
                                                                                <></>
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* // Android*/}
                                    </>
                                    :
                                    <></>
                            }
                        </>
                }
            </div>
        </>
    )
}

export default Page93Icons