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

const View41 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 41";

    const [data, setData] = useState({
        amount: "$74.00",
        best: "Best friends",
        bsb: "BSB 064171",
        account: "10456758",
        from: "ANZ Access Advantage",
        message: "id 0433993620",
        date: "13 Jan 2025",
        receipt: "661755",
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
                                viewBox="0 0 293 636"
                            >
                                <style>
                                    {
                                        InterBaseEncoded
                                    }
                                </style>
                                <g id="Group 10">
                                    <path
                                        id="photo_2025-04-18_19-04-41 1"
                                        fill="url(#pattern0_11_29)"
                                        d="M0 0h293v636H0z"
                                    ></path>
                                    <path
                                        id="Frame 2"
                                        fill="#000"
                                        d="M0 0h248v32H0z"
                                        transform="translate(33 9)"
                                    ></path>
                                    <g id="Group 9">
                                        <g id="Group 7">
                                            <path
                                                id="Frame 3"
                                                fill="#000"
                                                d="M0 0h219v96H0z"
                                                transform="translate(37 136)"
                                            ></path>
                                            <text
                                                xmlSpace="preserve"
                                                id="$74.00"
                                                fill="#fff"
                                                fontFamily="Inter"
                                                fontSize="23"
                                                fontWeight="bold"
                                                letterSpacing="-.01em"
                                                style={{ whiteSpace: "pre" }}
                                            >
                                                <tspan x="146.5" y="168.364" textAnchor="middle">
                                                    {data.amount}
                                                </tspan>
                                            </text>
                                            <text
                                                xmlSpace="preserve"
                                                id="Best friends"
                                                fill="#fff"
                                                fontFamily="Inter"
                                                fontSize="11.3"
                                                fontWeight="500"
                                                letterSpacing="-.02em"
                                                style={{ whiteSpace: "pre" }}
                                            >
                                                <tspan x="146.5" y="188.109" textAnchor="middle">
                                                    {data.best}
                                                </tspan>
                                            </text>
                                            <text
                                                xmlSpace="preserve"
                                                id="BSB 064171"
                                                fill="#838383"
                                                fontFamily="Inter"
                                                fontSize="10.3"
                                                letterSpacing="-.02em"
                                                style={{ whiteSpace: "pre" }}
                                            >
                                                <tspan x="146.5" y="204.745" textAnchor="middle">
                                                    {data.bsb}
                                                </tspan>
                                            </text>
                                            <text
                                                xmlSpace="preserve"
                                                id="Account 10456758"
                                                fill="#838383"
                                                fontFamily="Inter"
                                                fontSize="10.3"
                                                letterSpacing="-.02em"
                                                style={{ whiteSpace: "pre" }}
                                            >
                                                <tspan x="102" y="219.745">
                                                    Account {data.account}
                                                </tspan>
                                            </text>
                                        </g>
                                        <g id="Group 8">
                                            <path
                                                id="Frame 3_2"
                                                fill="#000"
                                                d="M0 0h137v18H0z"
                                                transform="translate(93 251)"
                                            ></path>
                                            <path
                                                id="Frame 4"
                                                fill="#000"
                                                d="M0 0h137v18H0z"
                                                transform="translate(93 285)"
                                            ></path>
                                            <path
                                                id="Frame 5"
                                                fill="#000"
                                                d="M0 0h137v18H0z"
                                                transform="translate(93 315)"
                                            ></path>
                                            <path
                                                id="Frame 6"
                                                fill="#000"
                                                d="M0 0h137v18H0z"
                                                transform="translate(93 345)"
                                            ></path>
                                            <text
                                                xmlSpace="preserve"
                                                id="ANZ Access Advantage"
                                                fill="#D6D6D6"
                                                fontFamily="Inter"
                                                fontSize="10"
                                                letterSpacing="-.01em"
                                                style={{ whiteSpace: "pre" }}
                                            >
                                                <tspan x="102" y="263.636">
                                                    {data.from}
                                                </tspan>
                                            </text>
                                            <text
                                                xmlSpace="preserve"
                                                id="Id 0433993620"
                                                fill="#D6D6D6"
                                                fontFamily="Inter"
                                                fontSize="10"
                                                letterSpacing="-.01em"
                                                style={{ whiteSpace: "pre" }}
                                            >
                                                <tspan x="102" y="295.636">
                                                    {data.message}
                                                </tspan>
                                            </text>
                                            <text
                                                xmlSpace="preserve"
                                                id="13 Jan 2025"
                                                fill="#D6D6D6"
                                                fontFamily="Inter"
                                                fontSize="10"
                                                letterSpacing="-.01em"
                                                style={{ whiteSpace: "pre" }}
                                            >
                                                <tspan x="102" y="327.636">
                                                    {data.date}
                                                </tspan>
                                            </text>
                                            <text
                                                xmlSpace="preserve"
                                                id="661755"
                                                fill="#D6D6D6"
                                                fontFamily="Inter"
                                                fontSize="10"
                                                letterSpacing="-.01em"
                                                style={{ whiteSpace: "pre" }}
                                            >
                                                <tspan x="102" y="359.636">
                                                    {data.receipt}
                                                </tspan>
                                            </text>
                                        </g>
                                    </g>
                                </g>
                                <defs>
                                    <pattern
                                        id="pattern0_11_29"
                                        width="1"
                                        height="1"
                                        patternContentUnits="objectBoundingBox"
                                    >
                                        <use
                                            xlinkHref="#image0_11_29"
                                            transform="matrix(.0017 0 0 .00078 0 0)"
                                        ></use>
                                    </pattern>
                                    <image
                                        xlinkHref="data:image/jpeg;base64,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gZXXtl4IPjNnDtW0jcWv71gkf0e4Cywxu6OdiLrbPdikve5TnvN3HMrAx/R7ARey22M7S98SLHydE52Fr/5kN6zOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOn6nMDS1u7EcSLucwv8Gn6NDyg+2xldYDtCqauCxjp+uO1StiLRs4nSG/cFtDXUsG+2GVxBUVSamCeOU2bs3Z/JSzz2wVDbtt2fkaeuktsp8h2j5Iq3GMMkpjw91vmxbcW2kYkb+yfpsuPc3YvvorwSyOf3OZZQUrGMY2RseM4d5XNdgzm+PBhwqqIY172VGFpIVNNHFEJZmnGcOdinCMYWkA2+gQwR9aR4aFXUYMPNTTiOAbVpOJmW7VVk8O57KqO4PbuO5VNdQj+h1NFMW/oOw72ounds6WEY539zVjDdnCwYYWfZaqaD4XOu/8AZ7VysJtkQHbeANlDrYd3/auT+aRROlqY9rJJIwO7eqqqtNIxraemMuxHVc8f7J0FXTQl7iNnIxgYWaJtIyTk1tJGGiSOXrv777lyjFSzwNmx2pZpm4m4VQv5Zp4GwnrSQ9ST9Lcpn4aKsp79GanABiUFOzOR4auU6a8PNzEBTBsoJuzLcm1kUUb6mecxhz24sDQFyZVbCNpbWOL2gdFx3dir63A11LFDtogRuOPqqlxN5PpGSdI7exdKO9fyhLYI3tgY10bXC4HSCdVzRRCppahrWPawNuD3rk2DAx21po32DBcu3rmda3k6KEscObMsXt6Pf3qnnpoo31FTI4OkezFhDexfyfxQMp+cyvEmAWv0lNT1s3JjaHpNa1nXZ3diNt/0hzgL4mFuvyNkthLWgbvBbbm8fOf7Tx70+E/E/HdQxkW2QsFtCLbgPoHOGMD3taQ2/Ye9R1EfEjdiVZC2BkbaqYSm3wqqgjAkiqGFrmns8VzKWgjnYX43OLyLrDT8nx0rr9ZryVUiNgL54jHi+yCo6mMBxbm09oQp6yijqoY3ExAuILL9l+5CrZHG2zNnsrdHB9lSQUVFHSNl4hBxEqN9ZQQVNTGLCVxO+3eO1TCro4alkrsR+Eg+BCpXR00LIKYWjgIxDfndTwUNHHSCfikOLr+CdMxgc/A5rb/DftUNRF143hyqY56Rk1LNJtNkXHou8CoaUQRwxQuLmBihoHMaBH8fa4b7D/VQc4ooZ6iBoayVx7BluXKLzE3+nNAd+jZTUWAYZZGvxd1lSXgYKmkwiObtsFzuDk+Bk7r43Yjvv/BSxRy0crdpc01Tu/5gVyYxs8clXS3c50PVbv3AJ8reTqdlVIN8uf3huX6rd6zOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOizOn6nNlFbFa6sc1C6W3tW3H0SKmhID5DYXRb3blFW4haSQsw+SZBTi73I1ENRBVxMNpDE7qJsFPbEcycgO9OoTaScOw9HtKeyOpppalgu6Br+kpJdpHTwR7nSymw8lE8uZPFNw5IzcOTYpKmmjq3i7adzukpIGgRmLfKX7gzzXOYZ4quAHC58R6p8UyonqIKSOTh7V3WTaIsxTvtgw/FdS7CqpqmWEXkiiddwRqZJ4aWnxYccpzPgooDaQzC8Tmbw+/cptnUU808LcUkLHXc0fUUrm5iFx/0UM2UMzdo/wt1lyfteq8v3fepG1D6QR4TgwZtUbaUwCb+sEozVQJ2Mp5f6sP3taVT4qeKUu7WZPVSJubHCzE0R5tVNsWMLpRic5zb/cqMmNrG7AvLexTCofS7m3j2eYP5Si/aP8A2lOrI4o5KmepdGHSMxYGhUUoibE41L8QZkTbNcrOZxBROw/7/wCi5XDupzJ1/wDZRspaWWSetAdK9rerH9lTShj48T7xO7/JNNO+X+dXghm2Hs8RC2PKLphTYzjEf2lyfNyd0uT4ZjYO6+0z3r+cm8oNbHI/aGKx2gP2Vy1R1D+bsqwBtPsuG/euWGc7ZVPdT79n1Rv3ffdAcsvqcDBaMM7vvTHyPaIXUBNK5nY21tU+koqeSlnwOMU22vit3plHG47Nl3b+rGO1y5Lp6bpU9I3ZxuPxGx36qC98Re7HobqQN6uI2+oXkC+Jhbqn0wAs459ypsHRdBkU7Z0kccj83Z6JrZqVkmDI3w6qSSoiZKJOzu8lDzeNsbI9+HO6kZBTMjErcJ6V01rTTzAHqS/Cqcse2R8TLPt1T4JwhpWRF2Zz0/KQ1QYJDGb4T2qanqqZtVTSPx4C7DZ3gVDSNp2QRQvLm4U2eIB3Y5pycO0KWm5Po20bJuKcZcXeHkhhqZgB2CQocoA4JA7Ext7hqNRS8mRQ1hylxkhp7w1SU1bTtradz9phc7CQ7vBUVPTQNpaaJ2JrGm/S7yU2pk5OidXN/rcZw378KmmnY2qFRumY/wCJOpaCkbRwvN5OmXF/3qGHlGhZWbEWjfjLTbuUNZE1kWxAbHG3qtb3KV3J3J7KWolbhdLjLreQ7E+kfQNmbI673bQtLvBQTcn0oonxHF0XlymkpaGOnrJmkPmDz252HZ+rfM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6LM6fqcwMIG693ImF8c1t5DHXPyBo7dydHJuc02P0JscDDJI7cGgKBtThxTNuAw3QjM9MKrPm5k6aLXixGYUVPF15XhoupIn9ZjsJ+Yxjqimjqni7Kdz+mU6nY3C9l8ePcGW70Khs0NVTl2HaRG9iojNU09NJNvijlfZzk+iOGKZl8WM7hZOl57SS2+GOS5+ppv7h/8FAYutjCq3Qxw4drYSS5DwCoZWiLHJ1sI6OanbM1mGHEQMr+am5w6mxgXjMefl9BxwvLHWtcLkMtvi5ubfvKKWolmPKRf0Npw8fZftU7anjB5x+a5P8A8Qz+K5Tlhp6d+GUjbVBGGPeuQ55W0z5ZanZy7DqO6QU/JbqOnbSuMjBaPpNz33+T+eOU5HGKF+IE5yvGTQuX6nKWTATbuLlyyH9QNjI/axLnnKUrhSU9sch7bZNCr6ysa9rJ4ntszx3KqfRUz6Oemj2m+XGHt+pi8s2gLS211ekpmQv+1fEQtjPCJmYsQ6VrFQYWNj2OVkKiOJrH/Hv3OTmQ0zY8WZvi0+hUAa3Zuo22a7v33XOncmRGtz2m0OHF34U+aU4pHm5Kink5PjfXQswtmxWHgcKqIa2AVcM7sbml2E4u+6oBHSxxMo5do1rTn4I8oCMFxc52C/er9ihZNySwtibhY0TusFNJDA3m8wLXwE7i3uXM6ClFHTl2J4x4i4+agppuSmujhG4bYj70+elpmMgkbgfATcFvcpqfkyiFIJuK4yYyfD9XW9ZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnRZnT9TmCMgGxO9OfG+OYN3kMfe3zXv2gBb8Pf8hEYuQMX5ZscQxPcbAJ7Y5qeWojF3wMf0wpJQ+OCCPc+SU2AKjxYJo5uHJGbtcoqiqDWNkdhDb7x5oWr6G57NsqqmfLCw0wvI9z+imv51TT3NrRSYlG6arpIS9gfhfLY2KfHia/CbXbkfquQE2Gxfv+5S1bJucbiyzW5X71A6Lm+OQYnGWyfI0MexsO0LGndi7k5ksMeP4HMGGyEDRS7Ebn4z0iq7ZWe1kjcDkGRU8WHA3FibnuVTHC0YDCXbxl0UXEAX7hZUZjijL3R3cXNvfeqibZjCyFsgZ2XKqDJGxskIxNcxtvyVOCbGzsPnhXM6dlRDUOuI6ra7y7xCoXVrHTe3k9k12G7/E+So+UuSnSQR7UjZF99m8b9yge9xc51c8knt6IU3KNQLxUYxNH2pPhC5SPKe0kfUYTZnxb75p9dyfE6mMMgZLE5+PPIgqPbU084MbGOk2mHBYW3NU1Nixhh3O7x9VucBfEwt1UjS3HHI3C4JsVTAJms6nSsQtrHGxothwDKydHT07YcfWN8Sa6opmyytFsWLPzCnjwD2rgfJN2kDZ8LG4Ti8E6oeA8uuHN8ETG3A0/DfJQNLbbJmHzW0wAjZ7NzD2hOhpodi1x6XSvdRhsQjwtsSPi/IxzwHDJGbhPnouTWQVr7+02lw3xDU+lr6fndM5+MDFhc13gVDBBCKakh6kYN/vJUdBg3MmMuL7lBRRx7ONji9xv13d6mingbU0046cZNtChR0FMKSmx43DHiLj4lRy13JraiqjAG02lg63eFJUT9eQ3P6wM1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1ms1n/+Pj6IuuE/RcJ+i4T9Fwn6LhP0XCfouE/RcJ+i4T9Fwn6LhP0XCfouE/RcJ+i4T9Fwn6LhP0XCfouE/RcJ+i4T9Fwn6LhP0XCfouE/RcJ+i4T9Fwn6LhP0XCfouE/RcJ+i4T9Fwn6LhO0XCfouE/RcJ+i4T9Fwn6LhP0XCfouE/RcJ+i4T9Fwn6LhP0XCfouE/RcJ+i4T9Fwn6LhP0XCfouE/RcJ+i4T9Fwn6LhP0XCfouE/RcJ+i4T9Fvjdp+RDBu71aJtvH8wSQMMnYUWuzHz5Xdu4fmG+3n8+bzH5hu8h8+bzH07DA3F/sscjAWd7SmVBIwvNvqN3kPnzeY+nQCLdtndJPDbOY8Wc05KkA7ZSEKd9Pt326b8VkIi4mFzNo0d6cJKJ9LIOoRvBUJNI+rkkGI9zVG6MFrZW3wns+nO8h8+XzH07mdY7Z2N439ye50rauUizWgbgqdjXe1ZLiIQqHVIgJ67CENo58cTWYGOCnjlq+eF4swWyUP9MNJJG3CRvsU1sUskwaOs85+X053kPny+Y/MM+Q+fN5j8w3eQ+eWP6r/AMwi55sAnyd/5DC7pt8VwPUuB61wPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwPUuB6lwD++t0PqVnGze4fqpcySBjsMbnX39iqPZsjtFu8N+ap8Do5hJ1e5CR8jI2uNm4kGXA32uqhxI9ibFS3wHc0nvF1W2YBhYy3grFzWeJULY5GvbM6zXJ7myseY+u0diawyx7R7QWN70HSSMhxGzQ7tUjZpGQ7PO6ezGwYWY733WVmuDx3qoxGKIR2xdyZ0g8PbiaQoC2zttuCeXzMYxr8GI9pU2Ij2YB87qANc3217fcrNka/dmFSbKQF8wH8VszNHf4vBRNjka4S3wu8ltI5GSDFhNuxOvKwvb1mdqJZKxzw3EWDuTC+VkZk6rXdqmkfIBIx9rKNvQYNkHE9w8VFs5GyNkfgDh2FPe2Vj9memB2KoDrcInf2KnMbo5myOsD2feto+RkTS7CL9qnkfI0PY6yjxSsY+Texju1OkkkZGGuwm/eoYwQdq3ED9RSF/wAUTm6hVAdm+PCNVSY7+ykcXKzpnNGLpMLMTSnOjGBpO4dyhvfAQdt5kWVX/wARzcP3Kqw39o1ob9yJm7W2BtfCVQMbIZHMl3ktsqjYuc58vRsW2wqKWV7g6NjDgw9bcmB8xgLScmYr33qYue5kjnXbIWYipiC44oMG8dvyVmG/tS3Cqdrc42WOqlkkBtH0oj+lkhDO8xlr8QdhvmpWOLmROjDGut3KkDS5zYcYcbd/yUTiSHQWDhbxupXyZOvhdhvY99lTXkdJsy+5w2zCljN7ue0pzXSOqCepiZvb96lwPIY+MtEYjy3d6hM73MdGzAQG3xKeJxLcRDmbroNdfZupxE7dkoGRuMjWyiRzsNlVj+06uqnx/HEWhUodf2c2Nyd7ZzLvuWYMQKqmb4myOuzdf7lDLK5zHxtALQ3rWRHxumL0XvBD97Ij4OzTNmSTbpX7Pqq4+Tf8+1930YXN7f55Ww07DJI7JoXuvrC919QXuvqC919QXuvqC919QXuvqC919QXuvqC919QXuvqC919QXuvqC919QXuvqC919QXuvqC919QXuvqC919QXuvqC919QXuvqC919QXu3rCL3UpIHcb/AFgyqwbQAWIXu1T/AKfivdqnRv4r3ap0b+K92qdG/ivdqnRv4r3ap0b+K92qdG/ivdqnRv4r3ap0b+K92qdG/ivdqnRv4r3ap0b+K92qdG/ivdqnRv4r3ap0b+K92qdG/ivdqnRv4r3ap0b+K92qdG/ivdqnRv4r3ap0b+K92qdG/ivdqnRv4r3ap0b+K92qdG/ijsKWYv8A0rAJ7zm43/OL/8QALhABAAIBAgQEBgIDAQEAAAAAAQARITFBUWFx8IGR0fEQIEBQobFgwTBwgOGw/9oACAEBAAE/If8AdAUB71+fwI5SLwVAdShLB8AVoyyqw/Zr5WmtSqadT4EG8sqHziw51qDymnwLt/SWntGewY9BoYDiOcABk+helbGw0lRCjlQxaVvLC41F4ezMwMO315LCbpyskNz8arZ8iOsrIh03OH4mCR4edi+f/n2OpuJIQ6pj2jR2L8Ybi1nmGJ+YilFoAnQgZmPSg2hbmcDg3ihBcYDgIILaw6sBjSA5BNR4xonCTiwIOBVZDJwlx1ljW3WEBLQA65ElFLXacH6AJKjvNZ+oNOLI59udHGhAQwto0VWSkIopql6/Ad+NjmbSiViRY6PxLMVrAO1uj9j0YmAQNjzgDgoiPHfqbLvWfkMUkoNjwYMpBm/+0aKLVPZuNoS8Q8YWkiXgwrOENxJZ83hcFFU2hmdr/BTSHCXMi0xL00YUBBzimcicPoEJLDqS10lt86y4NaS7MKSnBMGsFg1o8dYLIwmkGoAc8ATqh5GKuX7FYdu3HkmsK17OdTeB5vwRZWtWYt/BMrRRSMf89otXxGGOgU6BnfH9Tvj+pTDUWppLmU0HQ/4pBUPiVMWbfbLAEsQdtEPVWhwfq8riOUqXHmYTQ2RMpPyXKNvsn4T9wEXEHG36i2mlRqKXs2gAytpBaiCGiYeTWmMwowQ2OBBJx4dL4lZSonq1pTWBp08lKVfHSOVUMnM7weMirco51/U1+ntmYBe03iKyOSifprmkEapoZ1PsnZOMu3s0LsDnwjzWTRFVcj1nPnBbGje8ZQB2hqy5xVCwtUkdnEoa02/NouhFxn899ydyG8HrAbFuc0WUIq1V/n8QvUIoP1I7HnLqeh2BPxX7I6/YxqXJ03VwBogHAiU6dG0eEesrDqGY9vV3P5mjE45c5iqoYfU4AoKhoD1GaiYgozar+pUrKMYuOSq+me14uK9e9G46/wAGyaS3j+ILiy3i/wDcfQ5UyXjs0AHoTU44VM2TplAKP8DNcTIX7GIzjk1jmZjxGA6KZMcZBK+3Fscmka6fwEbYMxe7NcYwfPokFJY5eXqlP399RKDhYLpHPy1fwVN6tpkEQr79cHR2CIhuy9PiSlcR4HIo0mN/gS1oSnNNEfv3mL8Ebz8auEIGk0HePbtfzFv4WU2P7lFzcv3/AJjp/Uzn41h3DFxKMnFnBB1dmo/C50M/uYw2JNPvtXD01g6zh7fxZhsdJrtCMn5NuzfjObkP37XUVkDMEVOm/wAb+RgyK0Qgc6kV/wAAts2sTyim3zKqMqlEfjF4YJy/gWB7dSX8gywBvDp34RfN8IrdOdKWUPx0/gZBu7DMfhNsofX4QAwC1wJdv/DryAogw1ZSSvlC/lqU/Gt/vKKWAS18CV2VUt4kVpg5NekIqEGijJ6TneR6RIsnSj6QHRoJG9SoBD0IQGtY8ac05T8XrErnkc2X0LAbzOYDT0BfF6roeOPEDCUavghJoWGpx3ZbVyuM8wlOaw58E8Pu7eUsOTVMTriUmhECuLVRk4QFrACho1lxbAQXDYTtM8EzrEB7PrKVO3FvDhfF+/xr3uXIAf3FayAGwf8ArBgbMOYsmtgR5Jf7IcFC9VfQiSNV7YAiVWfhAwrq6lL7uOkGGtBwSNnJoycyUXhq+JopgnY3jzIKlsDizR5DiaW+hNTFAu6bHhLimV7WsMyaseA4RYA2d2lUZGodr4aSbvzv+5unvwJccTI70t6zYYXyUVtnnikHSlR0UB2rvxSKNoH6Y+73TYUjB26jFdvb1eFvaY/IzT54zT0KJVC581lvdYH4fKcnGedoipHnA8pXwuj4RBu7/qK4X3Kpib63RMHpCw71KxAKYP8A1GDUSOA0yS/T5j4LMrflI4fV3wh4bV7u1/vMnaAtXxEmQFWwAfqfr0QdfG/u4tEwkH9grGYaZR4rjvw1dJUNWOTaX7/IHQ82HtqopYEbIYQgJg04suppQ4FQ8YXMaFQ51FgNCrE2YcEO5LzZb+3R/D/oSvlr+CGsyj/ZQOQyj1wa3o0RntSKBcr1hxV8+8KjEWmggu2IQ7IeguIiBci23isZq5K3biuCpzn95TkM8VPCB6lDlPUjGGRoG0+MR1av1HQggfGN6mGpkcJBjEywMzcg5P3smecVg4Zmn4s5KkYXmajgq7EZh65twqcLLqszSAFEOSxqIyqbfLElLXoJQL0NRnl0K8E0a8jiuzCmujKJClAuEji4FiPLvRf4I0Jc0yoKPNj6ZajqLYdgnFtmjOEhbsZNxEt+9um4IovWA9WA1cUNZspxD6VjHNcrZcvk2i5rwDk2i8CvEU6u1NNgC+JLAwjmOkxrObMan7hBOE06h0VDpKAlH5Q7IxNWK6+cIGO+kRT9zLeJSoJFff4pTDyu6bjWv9DOA0tdBOkpwc6q8Vrd8Ki3QEqDdpMxeuBhyQ5APVgXLXDx3wjTRC4+WoaV0ky3oLWH6ix8HiMR8lW1NDNRgAUE1Z2uLcqhkPKWWMcSrpD0B2zF5PvowVlBpVfGGVVYqwrfJMxU0MUzQIwgFdDWnGICDQMUXbtpMHSPw4l3HyRiWcnG1RbjOWAqXUtq7uUsEdiNX7hChWOnql9JIG6s4z+PV8zHhEgHWm7fvvI75BYHCOFNDwrZwlC7ob09RWItuYV0U5TX7Z7t4qyiNwUYCZGcwsBF6aYI9F73rrmCas5qvXjLSHca7ko/TVWsQN+93W3nwitkTbBCCrN86V/BalfJX3lQobq6OF/MEJnFM6DXUJLVU3XnHuK2aoI8VfEKnDOUaBvNrabW+KBBSuy+ncioy2KZg8zI4N+BiUWJVC1sbRZI6HBurMTWMJGa7/BAA+DmhNZZwH9UVRChLLaq/iBtMJK8m8XMZ5zRdhG1IqIAtDXpMAqUOAMtEK0q6VE10+6Z5SnqxeGqtKpHN8bZrWAIddZ5zLmta88Lc6ylLAhZhnEErVN1d9/CLiK7UV+iHZEovLE3gO1ZtMiI0RqzdjlcM2tmpOXOwUa2pfmQCm5Ahk/mH2sAcDmuKwBKVy1hl51uQBpkYVlGHGABWhMi7yslWBTKyutc5XQymOMx4CU8YFGRxZou05iWnrBZZTTQuuI+6WZvdGkY5kVZUQRatAbkRtwuDoItuloBHNlzcZYC9GDEwiXyMzo0YCxij6OdiNJAhvgaSgIC2ql/9Dbkky9krCwcyYS3QCgciMfv0IeEGwMz9Y2ILzqIDjcML4lw+kBqMkQE203ZWNVsPwLnnTGbnCKMvErX/pA6EqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVISnH+m3FcaLAECaze2+ZK+FfREPS8I8Sl601C3cMuhLsIocsfZtqWfN/FTgY8g6stNXQ+FrNVzyPPMqVKlSrlSoawH7iF4Fm11Km2cFyhd/mVKlMqUzHmN3ZT+IkqVK+pzgoCC6ISW8UEVvvAFtqWQLbg+stNurq715yhLV3qh2mc1AKYGm3OFZIxoWD9B+bNBYp8JiCvG7uUxZP0QyKX8K82snpHvcnJsc3QjYkRdD0JYOCpwOV5DEvuPoCxQ3oJn+ayhYBZjBmNlXNjNa23JMrTVBuYZKgjvNGwLJSLtTEyOAS7y26ecMexgIj0Nauo/TygMu4AhyYJd+GF1lwqmrHbVyXcEI2ehNUmqsFdH6iMtmTDLfWr4oo11fxMAcAC54hadAI3h9FDoeMWjIxiWgGck0t8uQih1DlL/rN4CRALSs2wls5riqiNQMvA4cyfGKMYDBQRCBUTNsAJUHU3+oEXcxdhXwwLd20phlOpMnyNLlxd1pubqGtDIb23Ky21B4FfQFLvL1ivJcd+wleI3LLhUci8HnFemC0kqnOo2vWVva6gUEs3rlTAUZW51iS5ipgDFI+EMKL2izR+E0i0OelYcIuKC3EbC6EwVCYYKG+ox+6q/FSIDAgpWo63xmAcxUBml6EQFmElhVJXkib3p0jhbEq7cMy6s9GLNI2Ay9sUnTREFTuFbjS1AH0OO4OPKCtWu5Bx+YAhAK5agmjrGGpdtxmhhKQwmimoQix4cl7dxwqIsxLk2mUWGXeful/G/hcuX8l/Ncv4X/ACQ6EqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVISnH+m9XAhbWkYYA09ZS0xd5rn5ypVSpUr4V/lToZXRpf8AUdrVPkjGcvTIi7g5+KaANVgzyNmzxGsTU2bgi1TwhQASZ2aH5lk37viZNKWKFWKzXkMsATTlsbdYO1NjezA7DDrkp1TVUQiuoRNAOSX4f0b0gQaSKFYNCPCPjEchNXJmoKJ0uOOAMwtjiNBUMGCgp4a7Zr7EiNHnnGrAKuB6IUcVMtjR5EsONDBAxSAvBuHYK0l3SqUqoqEXAsHPHbSA7E0wctrBLjo9GKPIhWG5h4cZcIlXaUSK53jYZTHAZAo3I6/5LBF8yEF0Di1ZXKllVGBtE2wuXAU/sl9T1vxK/aNIUmmxY41bH0QUUsBlSxC8CjDUzbzg0HWoWuFpxcVfURAKXDk4SkOymulgqngNykX3WytgNlwzMN1XTDqQgtmWhejk6QfU5LnhzszMxDBNBaOMITL5ZfnLhEzU9m08+giGa8FMBGgPAX9hTQXd1oiGVgeodTxqAglzeu24rkCWNL4HBHuOhSfBrLFe5ZXJbaFuXRduSm15QctuUs82MntTAvjl3lxesNRb6M1AbTrrDq0/yVBhETRX9zIEhC42oSlqBbizTn1lKIEu0lJ1i00ECg7mq5JXaDokrhrH5F5EAaXtL3EIIG8wMFBlYJlIcjLScNXzDKykHlVKdGMKQxNoGC511G4SZ+lbQtWOUz8mhZ3IZIhgNmBw8MsXz4FS64owjtGGyo0mDf5sEbNekutEk/B2+1XL/wBFgdWvCdges7A9Z2B6zsD1nYHrOwPWdges7A9Z2B6zsD1nYHrOwPWdges7A9Z2B6zsD1nYHrOwPWdges7A9Z2B6zsD1nYHrOwPWdges7A9Z2B6zsD1nYHrOwPWdges7A9Z2B6zsD1nYHrOwPWdges7A9Z2B6zsD1nYHrOwPWdges7A9Z2B6zsD1nYHrOwPWdges7A9Z2B6zsD1nYHrOwPWdges7A9Z2B6zsD1nYHrOwPWdges7A9Z2B6zsD1nYHrOx/wColOP9N33Y2lAGsZZlB0dJUTMVg6wvMMc/onSTlSssi6TLNVLVWAoZZCq15RtC6TUeErUEPQK0TPUqjiMqVA2mlMOAJjahYDgqaoalS5UCsU6NhUBxIsC6aGLmRMeIIzmGFj9Y27FfZu68csE0FdYCGuaNzA4l24NEpwuokgVIGnL+WYp8IS2+guz6F4rNrTTrBr6o52mVeELsc3ccPS2mWYO02xN/2sK+zhWAMihKSjBRdNMp+PvYCN3Ul5zCOIMMBS815Athmw/ErLaHK8iUaiU5Hia1RCjbs6VoX/cRUaqE63gp+zVUpjRYkvE4ou6C9IovJYlRnM0Aitcq7jsoHUbTNjMPP2pGeLT6Is1DnVrSsCXfHR1fjEdpu3WEtJa4CkGFJWoNj0BMxiqdw29Zs9UxZTXxhrC7ZLhA9gQdAl43FlvF/crCPcHG6DBMHjEe3WgasQWBO+ZtrDg+CA70KYPtF/TX8bl/C/5sFqqVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkVIqRUipFSKkANM+H+m1II1dFGYOmaUhxqVKlSozVxT16ZTLmxroGZX+VpIxzKsRT25hWcbpHSsWXNustEFfCqg8Y1tSM6rw2g2ldUQLHqELcZjMaCZEAQkD2CakWtXzB+13ColF0YLMCMVBYYyh0Q9FNXgLii5dqq4uFwUJJQ6u9ajKVFADKZb1OVTBaHVwrvGVLOTem+0ok5hO5VsQZLSoeE4luZRWIAXpHdAxXC2B7yAvnIh/iq5TqtLKlhKtNGLYgA8pRg7a66rpXAlCGlWOs+EzliEVAX56NE/slsG3VLLhzolJamBLaA7ZIYbINbom+OWUjRMVKFn4ftdDLp7rRVxawmlrx8Jb4rbCLetaTJr1LJmSIEiyXeF6S4IC1BzUZgCQu0xhbVeMvxqqzZhrWDflTAoyS+7MZOi5g0UG9FxIX0IWEVmDBKczpoXUeVXa5Xq/4aJovrAHA1S3WlQwGm0GWXLqQh/XI7dUasqcAV8t0qoTAYrLbuhoQVhDWg4Q0ZTTDAeYUrThBh1m2uw10sWy8WMH3G/pb/nNHVrwle1K9qV7Ur2pXtSvale1K9qV7Ur2pXtSvale1K9qV7Ur2pXtSvale1K9qV7Ur2pXtSvale1K9qV7Ur2pXtSvale1K9qV7Ur2pXtSvale1K9qV7Ur2pXtSvale1K9qV7Ur2pXtSvale1K9qV7Ur2pXtSvale1K9qV7Ur2pXtSvale1K9qV7Ur2pXtSvajQ4z/APPifpFyJ7p+vr2ta1rWta1rWta1rWta1rWta99yz3LPcs9z/W1rWta1rWta1rWta1rWta1rWpKnDVvFKn57jzU1XAgEwrO7+AigDRNYZ1PT852/QZmf4DUKsqw/D5+5c/r9vsnauHz9y5/XaBLV0PFKnBqRqMMtBvfx4fYOxcPn7lz+t2zGIsyzXpiD/sgE1NxRXisd8Qs1ngS02lNPLc1r3BRzcEIuWlSzbFynbxqvh9d2rh8/Zuf1zdN+U3NOWTorCjr25C8QEsjl5tHEHcTN4f1PJcirNNIWsHRxUzs2MbPN9d2rh8/ZOf2HP2Ls3D5+wc/4E6xXR3B87Y1ht47TM0/gGpcazZwWnL5ql1AQBacEpxd+k53t0nO9+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k5zv0nOd+k53v0nYPSYam0xLwj/AFSRU+XDYXjKJHdk1ivK2X9eiRXWojUZ91lZTXS5eFi61koYDO9XSP8AjuN8AH9xPKJzmr85jKZV6IVRQlmeCOd4i9uS4acMzFnYVspjpDJiXFq86adYpZBV+/IIwQWbtnP5j46cEQfCMDvgso8DWWNsoaePSKakKeI6fma3YFiFwqaMLtOAqE84Ag6t07EFmaWLV7kON8hnK0vpMXrdrQr+2JD4DYWNM6RSoNllnTWvOU9rKFB5mYZ3/lUBbmqs4RBnrY4cdMQgmLrrfGONQ/YlcHF5pXTtY1wEesuawLeprWoroxHTkZl2k6HO9A5l8rOXSNdLrrBkqGVN/O6xAosyFi8aGLl0zSutC9DrBKCA9KfSpYGtPn9hsEoPG6BLTdk70f6lutAi8IV+oTyoEL02l8kWzRwhxwe5QJ8Ksge2NTWyaPKNNLTnJf6h2UJT8I06xAm3RLW3hKzcTUC7c224i7KItYNZsodGL1vQqVudG4EsQaqtE26yrIZaFNbEVB2ua+LeGxrLvLF5WbP9ysk+JZc93hFGSFSgLPxcykA4S+tQVYI13bZ4x1iXNbiB2GYT8+y2lmsddRvSoMRJ6ZDgXf7lLwikZudXhMYY2A3gNuYiFrDguqbwtxt+0alXh0rWUi0EtYze1zk+zI2DpFPeJo64D20jxambmtBtR6QeTogD6bMV4cIwV/6lsuXnApvF7yniMytBI4iVQq6LeFPnEFdiFW+yX8L+QSspHFMW4vUv51w0nQ2+N/JfxuX/AI0FoDFun/cqKrouWCcPJ9ScpLlJcpLlJcpLlJcpLlJcpLlJcpLlJcpLlJcpLlJcpLlJcpLlJcpLlJcpLk+znDnnaGvIgVSUn298zC7TTwhVmzp9TSJEiRIkSJEiRIkSJEiRIkSJEiRIkZy4wO51tgpgthxc/wAi/9oADAMBAAIAAwAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgQwAAAAAAAAAAAAAAAAAAQwQQwwwAAAAAAARzBAAgAAAAAAAAAAAAAAACBjggTDzQAAAAAABCDAAAAAAAAAAAAAAAAAAAADABADCCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAQAAwAAAAAAAAAAAASbcgAAAAAAAAAAAAAAABDTyDACgAAAAAAAAABQxGgAAAAAAAAAAAAAAAADDBCAAAAAAAAAAAABS+igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD50ZWcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3mARx1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAADdsA64TUAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQPVoR3QAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmogAD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWP608AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQgQwAAwQQAAAAAAAAAAAAAAAAAAAAAAAAAABAzTQzASBxiAAAAAAAAAAAAAAAAAAAAAAAAAAAARRxAxwSQgAAAAAAAAAAAAAAAAAAAAAAAAAABACAABBADACAAAAAAAAAAAAAAAAAAAAAAAAAAABgAyAwgQwAAAAAAAAAAAAAAAAAAAAAAAAAAAABRxwQiiSggAAAAAAAAAAAAAAAAAAAAAAAAAAAAQQwggwAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABSxAgAixgAAAAAAAAAAAAAAAAAAAAAAAAAAAQgAwQAzwxwQQAAAAAAAAAAAAAAAAAAAAAAAAADSxgQjhziRBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADByAAAAAAAASARTzTDzCTjDTiAAAAAAAAAAAADCBAAAAAAABCDDSCgwjQhCDzTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATTjzyQgAAAAQzBwBgxAhQgAAAAAAAAAAAAAABBBBCSiAAAAABBBBDABABCAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhAwAAAAAAABBBDhQyQAAAAAAAAAAAAAAAAABBQAAAAAAAABDQAwRBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABTBiTAAgAABDyBBwAAAAAAAAAAAAAAAAAAAABADBTjACAAABDAAiCAAAAAAAAAAAAAAAAAAAAAQwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmMIAAAAAAAAAAAAQPAAAAAAAAAAAAAABUAACCwIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIJAYAAIEAAAAAAAAAAAAASgcsAAAAAAAAAAAAAAR4ABIEAAAAAAAAAAAADK/0f8AAAAAAAAAAAABRYAAcEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAABQoAD7U8444444444444444444444444444443soAAAAAAAAAAAAAAAAAAAAA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"
                                        id="image0_11_29"
                                        width="590"
                                        height="1280"
                                        data-name="photo_2025-04-18_19-04-41.jpg"
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
                            <input
                                type="text"
                                value={data.best}
                                name="best"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>BSB</label>
                            <input
                                type="text"
                                value={data.bsb}
                                name="bsb"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.account}
                                name="account"
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
                                value={data.message}
                                name="message"
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
                            <input
                                type="text"
                                value={data.receipt}
                                name="receipt"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>

                    </div>
                </div>

            </div >
        </>
    )
}

export default View41