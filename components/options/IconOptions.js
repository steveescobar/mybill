import React from 'react'

const IconOptions = ({
    setImageDimension,
    setNetwork,
    setNet,
    setIsBattery,
    setBattery,
    setBgColor,
    setIsOption,
    setTime,
    battery,
    isOption,
    time,
    bgColor,
    imageDimension,
    fetchCurrentTime,
    isIOS,
    setIsIOS,
}) => {
    return (
        <>
            <div className="app-top-controls">
                {/* <ul className="app-tabs">
                <li>Remove <i className="fa fa-angle-right"></i></li>
                <li>VIEW 1 <p className="fa fa-times"></p></li>
                <li>VIEW 1</li>
                <li>VIEW 1</li>
                <li>VIEW 1</li>
            </ul> */}
                <div className="app-top-controls-childs">
                    <div className="battery-container">
                        <p>Battery:</p>
                        <div className="slidecontainer">
                            <input
                                type="range"
                                min="1"
                                max="100"
                                value={battery}
                                className="slider"
                                onChange={(e) => setBattery(e.target.value)}
                            />
                        </div>
                        <p>{battery}%</p>
                    </div>
                    <div className="battery-container mt1">
                        <p>Percent:</p>
                        <button className="app-action-btn" onClick={() => setIsBattery(true)}>SHOW</button>
                        <button className="app-action-btn" onClick={() => setIsBattery(false)}>HIDE</button>
                    </div>
                </div>
                <div className="app-top-controls-childs">
                    <div className="battery-container mt1">
                        <p>N/W:</p>
                        <button className="app-action-btn" onClick={() => setNetwork(1)}>1</button>
                        <button className="app-action-btn" onClick={() => setNetwork(2)}>2</button>
                        <button className="app-action-btn" onClick={() => setNetwork(3)}>3</button>
                        <button className="app-action-btn" onClick={() => setNetwork(4)}>4</button>
                    </div>
                    <div className="battery-container mt1">
                        <p>Data:</p>
                        <button className="app-action-btn" onClick={() => setNet("wifi")}><i className="fa fa-wifi"></i></button>
                        <button className="app-action-btn" onClick={() => setNet("5G")}>5G</button>
                        <button className="app-action-btn" onClick={() => setNet("4G")}>4G</button>
                    </div>
                </div>
                <div className="app-top-controls-childs">
                    <div className="battery-container mt1">
                        <p>Time:</p>
                        <input
                            className="myTimeInput"
                            placeholder="Enter time..."
                            name="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                        <button onClick={() => fetchCurrentTime()} className="app-action-btn"><i className="fa fa-clock"></i> Get Time</button>
                        <input
                            type="color"
                            value={bgColor}
                            name="bgColor"
                            onChange={(e) => setBgColor(e.target.value)}
                        />
                    </div>
                    <div className="battery-container mt1">
                        <p>Scale:</p>
                        <div className="slidecontainer">
                            <input
                                type="range"
                                min="1"
                                max="100"
                                value={imageDimension}
                                className="slider"
                                onChange={(e) => setImageDimension(e.target.value)}
                            />
                        </div>
                        <p>{imageDimension}%</p>
                    </div>
                </div>
                <div className="app-top-controls-childs">
                    <div className="battery-container mt1">
                        <p>Device:</p>
                        {
                            isIOS
                                ?
                                <button className="app-action-btn deviceIcon" onClick={() => setIsIOS(false)}>Android <i className="fa-brands fa-android"></i></button>
                                :
                                <button className="app-action-btn deviceIcon" onClick={() => setIsIOS(true)}>IOS <i className="fa-brands fa-apple"></i></button>
                        }
                    </div>
                    <div className="battery-container mt1">
                        <p>Option:</p>
                        <button className="app-action-btn deviceIcon" onClick={() => setIsOption(!isOption)}>
                            {
                                isOption
                                    ?
                                    <>
                                        <i className="fa fa-eye"></i>
                                    </>
                                    :
                                    <>
                                        <i className="fa fa-eye-slash"></i>
                                    </>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IconOptions