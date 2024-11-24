"use client";

import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import Loader from '../loader/Loader';
import getCurrentTime from '@/utils/getCorrentTime';
import IconOptions from '../options/IconOptions';
import IOSOption from '../options/IOSOption';
import getPicture from '@/utils/getPicture';
import Image from "next/image";
import Page93Icons from "../options/Page93Icons";
import { InterBaseEncoded } from "@/utils/encodedFonts/InterBaseEncoded";

const View104 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 104";

    const [data, setData] = useState({
        welcome: "Hey, Danusiya.",
        price: "$1,128.21",
        canadiandollar: "$0.660000",
        usdcoin1: "$1,108.10",
        usdcoin2: "796.45 USDC",

    });

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const [imageDimension, setImageDimension] = useState("50");

    const [time, setTime] = useState("9:34");
    const [network, setNetwork] = useState(4);
    const [net, setNet] = useState("wifi");
    const [isBattery, setIsBattery] = useState(false);
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
            0.1,
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
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 1932 4183"
                            >


                                <defs>
                                    <pattern
                                        id="pattern"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 129 126"
                                    >


                                        <style>
                                            {
                                                InterBaseEncoded
                                            }
                                        </style>
                                        <image
                                            xlinkHref="data:image/png;base64,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"
                                            width="129"
                                            height="126"
                                        ></image>
                                    </pattern>
                                    <pattern
                                        id="pattern-2"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 205 41"
                                    >
                                        <image
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAAApCAYAAACWaa39AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACwgSURBVHhe7Zxpd1ZHdu9LI5IQGhgEQkggJGYwtA12jy+Sdfs6vdbt1c5d6az+OP19su6b3H6RrE7bsePYGGPAmFGAATMLTQjNY/6//z71PI+EsN227OQFG4pzTp2qXbv2XHXqoaqv5+fLy1VJUJWWVJbjVlCt5yVu/FjtN377IwGjmpAfDX7M2ZUh+PrjzvQVfB+oLq4rYKV5xFP8eQWv4BVUv8zFOfqUyitzeQWvIEN1NocXzeKVobyCV7AWOD3DPHIpQ/H04ov/RsjEfF35NrBWv8ryXWEtXLkAL6v/Jlir3zeVvwbW6v+y8n1gLXyrSyWs9f6byg8PNprKTGxt+Pq3Py6sxahc/lr4vv2/DazG+03PXweZzq8r3xXWwlVZ1gvWwk35Olir/Vrlx4Gqvp6febRl2c+S7IK1jHfRChthOVMymeViN614t7z8ckKr1KhoFlNy28r2+W3lXbltVZWWWyquK41DfVyj17Le8ZyBugJb5fhuQ1v6q76EI/fPmxy8KO+NGENGAqix/6ixq3ltfNXGHe/zjqPw0AgGGnkgqvL6UPx18wp+ZoYXlGQAP7C8vMi/1ER7Q/GOehAWz3kO5flmHMVYvo9xyrji2Sj0LmOjWbltyAR81C0tZXlkmqK+EqinjhJzjzraMibNGc28dn/epVRTE+MsLS0WfaN+NZRG803gWA15/usF1dVM3JTG8CUi8iQ0YHV1jUuZIIQSE4RxS0tLnhiFSVKgs1oTZ/LVdJPQl2HAYlyTi5RG/RnUmLldXEqL8wu6kRlXl4UfzEPJgoFlPjA2pfyeP0AVNFuhU1rUOIsae4k29I0pqOWi3i3o3bzGiHGX1XZ5MXBAAyXG492SSKf9gq4xz9pa2vBedEAncwvX46HcVfe0qTE+8ZSxwQUPYijTScn8BGhbUwOvxRdw2ygLHghfHpd5mQdGFjxhvkBNTY3au6GgbEQlkDJTZfpQ1gJnEMa482nB/GG+Vam+vk5ta4Qf+jWimoE/5BV6UZBvoN/Cwrx5Br9Nt9WJvpJJ5qfacaWAi3Ggq+QwMLpcTF9lARf0oH9l/v0QUI3BlI0mWJ6/21SW8ARAZnowpxKyLLi6gA0ldZHSqBKhoDgUxuOdlV7MpzvKhKIwRozDINFmpeFE4R5Foj6PG0YWCmmjzvMDHe+L9giQ+6pq0VYbtHlsRnRfBCqBFbRb2U0b44SQeMc8MRTagz2UOdrF/Hgng/RYzLF4p7b0zwDdZWEHzTEWd8w7Cvc2fp6NB4j5BV/iOePLRpIdHCXjdeGdDS6PUYxt5Y6+Zf6HIWYeZ3JzFAJiXN6V52JelXAX99BajJH5BQ04sHjvnq4r0wbeeOZNab6FLuSx8tx/CKjZ2rLrjyZOI+dSUBEtMhSMAHIECCIDqMtKF55ZoVV9FhfkXdQPlHV1dWnDhgZfiUIwHe/JlUnboGpr5WFq/T6wlxlRyegqjVNmoNrokb6MjYcF74LGzgqCYGrr8LiBy9FFbZhKnTxaY0PQhVdGOebnw7OG14v51dXVOqpAZ/AnhMYY8/Nz9si1agP9dRqL99TjpcFDv1oV0++36s8fPYSAwZf5p0eemWcxBsB72jI3AH7na06d3EfoQJllAU/o42ikF+Z1QQsGE5EgO6WyvGprI8OgT0RqUa0mOcqAPyJZ0OE2WaaCqA+ZhXFAVxgoNNdKZnV19ZYd9JhO8cv9NBC0ub/lFnzgmnXK8/W8M88EFfV+LL1YH7DREFmWhPhlRlO+C6FGiWcmQYEZle8WVedQWygubWEwJfqUBQVDgvkxSRgyr34onCUE8xCEBSLB6x7GZ/wu4CkotdcUY/VPEblUeFUoH++NR1fGhjb+8K6kHKY5Sp4rgi4ZKcV9uYu5QiNKxjxQCJ7nMCbjYyw1VsGTLsgomSMpWk1NrfHEmKHoxi+IsXkXHj6/i7bQGn2ASJXKhcFIo1BqgLrgc+HZLTPqlywLeME7cIdTWbChUTJP1NM4AWQNPq4AeDJdkEk148Af81L4kd38/KzHiykGN+MfcITswMkb81slxg8H7B5qEwYcvGVc5r8WZPrWC2q2fEOkyXeIKpgUjEImeTKVXi+/m1+QhxVjmFBMHAYEE0IQUhwV6sLrsW7C0yykubnZNDs7q+uMxhYDhRuDsbIJL8KEWYvgkPLNqY7IkMF91IkUEJo9HY0bzC0zX5V+hg7Ggy7oIfWhD4InlUJI9KEd9LmvFID5mrgCD4phZfSAKHHuE+PSjr55fjgFxquvr3efhQUMq9zfFxXThMKqIrw6b8Ng5uYKryygP2MFn8GjyCYPTslRiHs7J3UJZ6X5iSbmxT3RGD7Mib6Z2Zk0MzPjOYQxaHwZTODLtMTY4MiFKmRJZOG+9E48QHazkuuc5BXzCifFfQZwBl0x99CxIhJifLwQ7dBMfcw7ZJf7A5ln0LKeULWv6y2fPVsSYqLNIpN0WIuBvN5RycqblSIEEwYD0Zs2bVRpTptaNlkJUIjJiedpZHjEExMS/wW4MJHGxsbUvDH6IAgMYGRkND19OigvSCpTk7Zs2ZJa9L7a3pK0ZF59ZRB+hjSiEp5xWWlWvfrUqTYYjkCmp6fTxPOJND0zpfup1LSxKW1s3piam5uUKtZLMXj/PI2OjsowUaLa1NbWntrbNjs9Ya7j48/SuNpMTU7qOQnHxtSyaZPmK7pEDGne40eP0rNnY6arobFBNLekhiIVpVMINHgAz4jE1eJzjeitr28Qr6bS0NCIjABnIyckpWAs8KPcKAW0ZIUFUWtrq8ZpDRpkQM+ePUsTE5N2IBGB4GEYDTqflQjxLi+jZHl9EkrX0tqStm7dXIxZZVroUyOe1NTWpbra+vT8+WR6Ojhk+i1IA/QE0B4nw0sW8o0NG8TvJvO9WmtH5sL84AeGPDs7l56PT/iaHQDFeKxjy5LThrR5c3va0KA0zlGynLEwT/XQnGTMmitsnpmZFZ0T4se42sgpi/6AMp3fB6r6d73lqVcajajWP+WQzo4XntoOSu8gODgWHpA22zq2ph07tqeuri4rOV7hyeMnaeDatTQ1NemUCGFSwAEjOjs7086dO31FsOPj4+nWrVvp+vXrYVDNzamvr9dtNkpRaYMxMryVRwYMzM7JcMW8UCgp0EJ4YYTz9OnTdO/evTQ8PCylHEo7uzrTru6utGvXztTa1mJFf/DgQbp582aanpphmqm/b1/at29/acw7d+6k+/fvpcHBJ+b71q1bPU/owkEwzvnz59TutueGMXV3d6eOjg6XbHzM3QZjz5rUd4Pq2YVK6dGDx+nGjZtWfPiQjYZ0j75hNHmdQbSoSYcOHUoHDx70XKenZ9Ldu3fTo0eP3Z/nRTmTiDA5M8hOD8mRTkILeOUspIw9Pd3pwIH9pp+C0UCrDVvrDoz71q0v08cff+IIhNzlYSWBctQJRcYpLEp+G6Xsm4W3K3Xt6hTtNSqx7gRwtkNDw+n27Tu+4mChFVyMCy5g27at6cSJ46l9c5vehcHQhveUSEHlHETn7Oy8ZD6UvvrqK8njro2xWjy24NbLaPq6f4r2lwyGbzV4KIpveYtHkjbB7EqA2a5T2bu3N/X396WjR49KmTotnKtXrqT//8//bC8OIhg9K8/OBDEI2h45ckSCOpAatBAfHBxM586dk1A+spBoc+rNk+mo2qB8eCwEyZg1UiYW5QgCg8GjwHCIYSdufn5RxjqbBgZuprOfnRMT71r5jx47ko69djQdPnwwbd/RkR4+uJ+uiM5PznySxp89t8H99Kc/S7/4xS8Ubdo9zmfqf+nSF+6PsPbu3Su6D4vugzaaWaUxf/rTn2w4zG379o507NhRGXxf6uvvT02KPPAD5cZDO4URpdA+P7+kcWdFw/X0yekz6cHDB6LpoaMBfcCPkpDSwUPGx4NvkAd/++2309v/+20byOjomMa/YIeD4eBl5+VM0GuU2UJSCaUjIigaFVvJjIMyM6dTp06m3bt3p917eixfxlyUYhCFF1U+/uh0+qd/+n+OaOEwwSq8GLIQYyysMRdkOESt3Xt2p9dfP5Fee+2YnFBjamxS9K0lb1EWMDUvg7mbzp79LH355ZcyyNs2Fuh1FBbvm5oa5RwOpHfe+T92rpF2RrHRCg/8sSGpjCvC3P7yfrpw4aL48XkaG3umDIaImnnw/aFmc1uxEaAHr2dKACv0r5mi4ncRLqNgRGE0eCk8796+vekn8ghMEm8+PT2ZPr9wXsYyJaHUybPMWcHA0yCh79vXL8M5ko6fOKb+O91meGRIHvOOd7SaGjek48dfs5c5cKA/9fbuSVvkuYhqeJ+dO7crYmxPnYpwnZ3bFem2pR3bt/mZ96RZGKqVaHwsDQ0/Tfv370uvyXBOnHgt7d/X5zmQfmFUc/JKwImfnEi/lNH07t3t6Dk0NGiDHh0dEd31dhAYxU/UjsjVpjQJZSWioeRbNfahQwfttZlfT8+uiHCKbrt2dSkK7ZLn3Sn6O+yJGxo2Oe3BYJ4/H1eKOhx8lRJEVKl2hMqel+hDqvKrX/0q/d1v/i61t7c7FYxoOmwcU1NTjjRZXkAol+Rqo5FBsQaTE3Yapci+Z88eR6/9B/aJ7sOiE5o707at2zTGZmcQg0+epC+++MLKDT5kyYLc6qHCNQw+pc1b2oWjq8Qr+EDpksx2yGG1trbb2Y2MjDidgr9hiNIt9WeejHnw4L70m9/82jzt6NhhXQGv+alr184dkn+HnNU2GWaTeAXO0fT48aM0I4dCRCu0WOX7QzWRpYiwKwBfAEOwGhgdi/WC6WqbmcSiGYHaQ6g96wQ8SlPTBjGl2cwh8qAkW+R5mvQOI5tfmFVftmGTlKZWHkgpwAZCN7tLrJNY3M95TBS1rp4QuyBDnLAS37v/ldORu3fvS+HvS2Ef+N7P9x6mhw8fOzUbGxuVVyRdmTI+5oQw6uqIUuF1GQ9jZoHKuESwmEO9lJOt70V7enDM6opA8fSs4/CE9RuUfqkuL/xnZqZtiMPDQ6LjgQ1ubGxM488KN+0WhWtaQh1K95WWDWoNB52TWjPliBJGU/BZz153OJ3SAlp/iDgoLe8tG9Gct45jTSN58P2pJLvYRaNdjepoy6KfqNjT02NHsEVKTj20Q/ejR0/SkydP0xPRzzqT+TBez27a77ETwzk1KXowDnTCt46ObWlP7247B9YiGAF9wUGK+/jxU+EetFI/01jQ19bWKiPYZXpatbZibmyWwCeixb37DyXX++nho4fugyOA5zU1y3IQ08I9qhT6sfTgkfj51I6DNVJ2NOsJ1RhMLjYcCkLLt1x1EwIML8UzVxgF8QgoFpUsxuu0EN5g42lvb3XKdvDgAXsLvMyWLXjWDW4buTRpSqRZ3BPzFkgbpLwUxuXbB9e5+RlFi8F0+86X6ZK83fkLF9I5pSSE4QvnLyq1u6BU6ryvn1/8Il3TeoqoNTT0VIbz3AqFAO3BJahaLyqZJXMIhUQxWWziyTEGaIMmjHx2bnqF4bHgx0sjdNOt/hgeAnvy5JFSjy+Vdl3WWuWG1k0PVf/choXxEREGbtzS+2vpltZTD5QmYjhExpx+OLqLR0SE2CbHcOAz29SxWIf/YRg1hSxinYKy8J7vXWyq0Mb4TH2kD3hlosvhw4fSEUVElB3nAS0XL36ePv/8c/P24sWL6dJl8fP6Ne+o5QhKweOj5Jaf2NAq5e/Z3e13RHWMCpzw4tr1q8YF3s8/v5guX74s43nguTA26SF9MDZoY770hVeXL191ykUfIvqEHAyyQJ6jckg4y6tXB5RGX1Gqd8uOCj6TJq431LQqPSvuBcFUQCwu7iprxWwJBqEhBBTHIhDhHaRFCpOkXDDKrdW2UYq1U/WkJfSBCQiVfnij3fJaXX5XnYbkiW7cHJCyXzFOds8OKl2gTUNDo5RuUky5JOZhHOfEpKtKi66lgev0uZ6uXLospl5x/YAUFYNhY+GuFoTjYiyea29vb+qVonRpEc8OGOuthw8eKA/+0u9RKNZZFNZZpA9Xr16XIG7LEJ5YOUhF9yhXZ7HPHCcnJ7QO+9i0ECkiKk07XXr48KE9NwbZ1NSkslF4Bk3XmTNnNJ/Lou8r4b8jZbjvtCoMIYwitryJ5rFFS11Op0h7oBMDwdhu3ryV7ivi4plZ+yEf5BhGp38xOgxKBlhXX+s052c/e8vKinNDPhg7tH322VmnYSg5V3hKPTuUr7/+EznAbvMQxWX+04quGDgRCHysY5xya5wng4/TtatX0pWrl2Us54UvlB98ExMTqbWlVenrTs9lyxYiV6OdHCkbgM4QPVhTkkbjpGPnEh2sl1O6ZRovyBgvyhhv376tCP7AKdrCPFvp6ClaXNbk7wNr/p6m0khgeTYMmE1EiSMcEWnCeUUbCnV4aurZZsQTofQYzdZtW9KmlmZ56HpNlpQhPD1tUQjwg4N6ruFVQ1GgijSQnSF25e6KgXjoGwM3vPN169ZNX/HqrC8oN2/Ig9+/7x0yKxEpjXExH8Zk/CJtoUhRKdCCkiIcFr+OTE7pYufHtEpRI//O9IGPwobHrFND0kc2GVjksqPDgp2mKPjw8IiFe13REJpJh1Ag5hi7gOCC515tmj5oiKgW29aV40fk4U1ZFqYrSNNjrBVcjK9aitfs1Ky/v1/ru36nUtBG2nQVJVeUpFy7dlW8veHdQVJMHAZG1te/N23Xmq9ZaSrOBJykWd3dOxWN+pS+dft5amoi3bw1IBwDaWBgIF0WzsuXL2neA07ZMKwdSssOHz4gvHvtlNgEEqtt5Gz3Yyy0z9kD6R6RhHlitKy10IHrA9dsXKwL+VbIXNcbIj3TTS7wOPM5IAzGRUJCkfFYGA910QtASOSYlDAchFyvNI00p1ZpDu/pm/tnYaOIYTxFH3mznG5Em1DYOMYSW5tZcSM1zAqiInLYoSKvR3nJa3nPGMZrhYwZco2xwxDoz/cg5oXRsICkHiUm6rBNzpGPGF9DGS+0kcZFYRuZHbS5uQV7SqINV3bOoJ/Iyxygm3RtVCnZ6NiI1zOMCx9QQEiE18Fj6sAdfAFK6xY1zDykT6W8KoHtedaSXtMIB01xXDgxFuxbtm5xShSp6Jwjh08s6Bm8FGgjtW5rb1Pq3SaDaHNUCJkEP4mAbW0tyjbaU/vmFq934CVKnNeDGALRg2jMHMDZovXv1q1tXgfDZ4A5ztt5xdqEZyIQzoXNJfSI9JmxoZV3sYbF+cyb38huvUFTCI4wYd1FqbwvlMMKYmOItIHnFQqra/Z8+msPSVqC92frmbSJ7zVsChw7diz9/Bc/91qHXJZ0g35A9I/7UIQYD4CZO3bsVL9D6eTJU+mtt37qwv0bb7yR3jx1yrl088aNDst4TRTfe/hiHlcblRQYAG0YHlFD41JiaEGMmZ+hKbfj2wqKx9dxgG3q+N9JiAKUMCra852AqABEFI734GFbHKOmYCAYIHM2CF2wFdyF07IhQFA4qKCJaBhysONRd3DFuiYidUDwlX6OtvzVWBgiSsvGDUYErfOKyvnEAoqKgnOlGwaCMuZ+2YnBx3CGQQeOkvc4GwB8FCJ+GAMnP4I39K+TfBqVgYA78wAe5flRaGteOb0P/sQ1DMe0C7dmKjrgz4vOYz2gSM8wmuyt4GZQw78UIgzMQPHweLTjGSKDSezcxDPbfaQ0KOtjpVEf/edH6d13303vvfeuP9zxTebXv/5f6Q9/+EP65S9/qdRtjxnLAhkvB+NhJnhRTPbrl5dIzZZkNI2pr69f/X6V/v7v/2/6/e//Mf3DP/w+vfPOO+m3v/1t+t3vfpf+5m/+VmnGFjGPBTdHYxYLDx0nBWwk3oKMLXPu2cf3dwgLCSbjjeNDKcB8iBxELoQCTXxIgxcYGoYBHuQDHq4YFF+iAwcFQwpjQhlEhmrEcxkgLoprpGVBo+sKefDMfCgoDwBvUAgUG75TT3tKVrBsNIgTflY+Z9mCX12EjyeO5cz5iIsVWwVFZ51FVIB2ekEPimldoZeeKYwZa7qIDNCSoyPjczQHXIyB4oe+BO3MpUDnvgD4nd3ofZTQQ5wLeOGrqos5BK88prIBrtD/Q2wEiF3lqGLQwH4uroDv9QDTIDrXZc+YCQaYvJmoCWIkXlso2vCtBAFgIHxX2L59u7+sk/PmlCXGiXQMioJ3kU7U6T2eiKMjfOhke5Jt0gMH9qUD+/mCv0/Pfarv9hGYxkaObfDVODx6RIhQYF+XhV8MjzHieArGgHBgdng0hMnunryqDJbUi/4YIynA+PhzzYkjQsw9cGcegdfGISPiGpEo+JbPb5WiX4nTQBhW3IEzA5XFC0HmE4Yb6VkoTEQC4WeNocgR2QHvgrelsXQBG3PEscAjHJOVEqdQG+mgU1Jds0HTEf5VaIfHhZZy1MHJsPNVHLoV2HjgMc5Ec4YHtGU8j6+xxXbzjXrGY2zkyMn40LWI1KFvUeJjZ+gfOofzYk6BQ2OWjtCsH1RK5aUAAXmCoQDUQjwTCcMJFvKOIqNRIWe/rcUjW4TkmngYmEHey9ksCgu+yjAfgg8B+Tc2uoZy1Ehx+QbUZMPB4PiI2dPNx8JuXbuV+u1ULt2h/BhDbHK/EGCsT7KASa9gNgJiLoyRxwyjIefGg9OnMJqGxrShvgEM9rrs5I2NPVf0QSmyMYZSgTO8b0RdsUIDhZpRnC4qUqGY0KiO5lsZeC5aF8YWEHUxTkSbMJqyQkVdef2XlSyXgsT4R2NyEDYbTURZzUTt6kTbBjmJ8loujgLRNR9LgWbw0R7+MR/umffsLEZDpCobDTh9Fg6jUUF3AMZdmF9pNIyXjaZRvGde1Mcc8iSimC4VxmUuyBCPkMdbb5CpFncsXvyQSzAQuiA0TzCMIrcJ5YDISG0ivXEqIUWlXYMmzoSJMo8fP/buB/v0bBkPDNxwBJqY4MNjKFkomnAU6RBMYAwfNxmf8kfML764lD5U2veXd99P//Kvf0n/9pf30rvvfZDef/8/jJedqkgRRL68EIcNSfY5bvNkcChdVfT75NPP0senP01f3r5j2vf270snT71ZpHebvbMFLo6NjD8b11pqR3rzzTe1hnor9fTsFv6FdP3aDX8TOitcw0MjUiYMT3xaJpJFgW+uE6uXnGYm90WZKEFn8BK2lvlbAHpRUpC1IQw90ikWwBEpZ72mYz3CPd+QchbAMRfqkEmkfGJU4bGhl/EX3Eb0SfF5Tz/qFjQWDjGTuJpmjCciFE6hbBTMGVlSuKdQ70hhNQylzw6LnUY+WuKgoNOGIAgnDd5ob90THk4/+OoSmUXJ8awzyD9VwArDCWBK2ZJfEKiAZwvd1eU2PgUrgIEsOBEAW8VXr17zGamzZ88qdRsojGZSzAxBUMIQowQQAZbVbtrfIS5fumJlfu/f309//rd3bTz//v4H6YMPP0znzofRYHQoAqeWMRpOwWIcT4eG03UZ66dnz6XTZzCau1KClPr37U9vnDzp9dKmTS3+hsCZKA4n8t2DlPD119/whkNX1y4bNB8mz356Lp0RHsZE6WwsKIEFhhKGR82pRAg6BJsFHvNW+2L+q8GiL2SgvyuA56zQrFlCYbhGaoQB8cEWxLTFcDx+ocDch6iCV0QLaKWe6IMSe51WyIUSGyZRl+WdSzipyAxi06PsWJl7paIz32yoXruqP++hKzsBnApXjyse0Z4CvWpe4Ay+5cKzquO5QpfXC2JWAuzFpXjOwESYJELxWSYRhOfEqzJZpxpiNPk+55+ILBx74Z46BAHTZ7QOwECuXL4iZQwPfvnS5XT/Pt8n2G5l4R/rCiaNsfEBi5PGpEZEO7wO0er6wED67Nxn6aOPPlJ0eT99+OF/+P706dP+yMVZJmjmJAHpBf1JscDBOovvJ0S7Tz/91PcI4ciRo+n48ROJU8PQwm7fp2fOpE8++cQfQFtb23z26eCBg1qHtavumY3/PxXxPvjgQ3+YxEOGcsC5UIachuGBI2LH4UjydNJU5+soQSHksgS4UsIIy8/5vWqFqzIFCy8fGxR5vBhrg4/9cMohfgm6lOotJ9IeomPgJ53h4yv1dnaqh6ZI/Yr0y/IJI7BOFFeiAZGNQnSan5PeLBQO1bRm+tghi1KvuTN/9CTSSehl162xoIG0PaI30UgmI3qCJ6SI1j/zOH79SZ/GhmINpPehsxGh1hNsNA4wa0CWYfYAXKmAcXi93IB7mGKlL+XQ2buGMqBIk5OcERp2tOB0qw9SjsUZIeNVP3WyJ6M/DA6mhbfiV5Cxnhi3ImMcHPcf1pV76vgmwreWxqamktGhNHHcJRj5fHzcX+oxGD5CEhV3bN9RrIm2MSmfkeKrMj8bIEpyzJ3Dmx3bO+wQpianbPDgYM3GqeJIJc0U88Q8AsyD8PSUUKAQuueMMsBoitsW936Oq5WmhJMSOIkcgTvWAZw64JAjGyx8L+FbChsvHHXhN0SMS/swqhor+fNxvm88S7OSA4ra3LzJBzRZOxJ1N23iCi+bnTWwAcJHZtasyCOneBgQERgnOCa5cuKYZ/Qi8ETBAbm0tFnJoYd28BB88BHVxOGgQzHvgk/ooXURBsCFAN7HBgvrmFh/EXHzh/j1hJXp2RoAXRBkq9bkY9EZoZQPT6QAKJXXMVLI2DUpvj/I41BQgsbGjaUCHowgDJHt2WJhSO6vtggA5Z4V7snpKZ8zmpZw1Tpt3LTRX6HZOcPzHz9+3N99jhw9mg4oSuw7sF+p1j6tUfpSz54en4hmdy48XJ2MqdE/IsOw2FqdkpBm5CX901krbEgCejAOjA5FJGLFR8dy5KVEROTsFVugsWmRF63MMVKMzCPSkkgpwMGpavOH6G1DKAokmIwwkqwwUQIgEx6zHiTCQTe0kkZynmz//v3p8OHDPlfGqXO+4vNNjDOB0IUMWdfcufOV0syrPgvGTxKQwbZt29WPo0T8hCJ+usFWf0/3buuBv7wrtebYDj+cQ/YYITxgHfLw4SPvmvLbG86NEb34GQU/lejd05v27zvg597eXhsmjo6zYxcuXEoD12+mx3KmU3KwlofWgctKeWNdGL9uZbzgP4ZaXgdl4w1Di3Q4+Li+UNPa2v1HyaVSHgWoIo+pBjCZghABh2gRjrCYHKdTd3Z2+njF1q1b3IYfAp0+/Ym9cq0Ulr60ZeIwGeHy25Q4W9YgT/Pc54gQIoPTBsHz246mjSg+3rFKQmi09+T8E/0RBj9LYBetu6dH+HZ7N62zc6dSkganDigvXsypTA3Mn/c9P2xifMYBL3O+eSOO4rAYZc68w0g7OjZr3vy4bsjKxvyYC/PKhhLXcCq8Y5wdnTusIL29/NSgw16dE8ScOxsaHLZwczEBGYQvjIY6+IzbiMU2yn/s2Gt2GCJR49Kfs36N3lnk0CM/4IMX8IVIQT+iBL9AZRuZ1BkleyZ6ng49ddRBDvxaFtlwirlXxraru0dReJf5ydyIrBgGyu1oPfhUjo2fIvCFvt4OgSjE8SWOuvCx2SeYO7anzp1dqU+8BHdnZ5cdDuvPMaW7ZCCcWAf3o0ePTKujjiZNFIEfAH0PHTqSNkt2LZua0z1H/HuWCefNvC7TH3QNepFh8LWCt98Datrauv/oNPcFfFGBwMoGQyl7Sqw9FKVaDOi0cPjdCwbEUX7OfZ05fUZp2VT0cx+FTF3x0P39+2xkvb27rASjo+P2XhgNeBEAv+tA+Js381Pcdh8G5SDgHnks1h/2iEflTQ8fkHfVmkN1R44cKk7L9hgHqQQf1YaHn4r/RLj4mEaOz/ciDA+PzHY259M4H3Xt6rU06R9aLQvXASt8R8cWz2N4iN/fxC8DiSDwAoWkhIBiR8vpgZzLrq4u/xK0r49t8a1SpgmtzQbTpS8ue2OC1GulQLnHWIL/XHMahgYxDlHzjTdeTydPnhTd/EyhUV67Xfi7xNN+zeegDOqQD9Du2bPXqRW0kcLCD9aZOIWR4dH0RKkop4JJYzmLRmR589Sb4v2hdER83bs3cOCI2PD485//4gOsWcE5ZTwrg0O2szNzfn70iFPd46Yf/r7xxinxcK9xnzjBQdNDGqtXetCYBp8MWulZZ969+5XXrSg/9MG/DKSGnBwgkzhx4oT0QSleW5Mi5OP01d0HponI5rWXjIxlBNcybyt5/N2hOm8A2IWtgKhEUNlAHF3kmfJE8KoID2Zzj4KxNx9bhRy9kFFZieTZvRMTuzsYn72BruCbnuKkLItI9vQVSUjjlBKRSqExpH3zGJtIwkP6N/rK2fkew/8vUMqVVUcEYsuYw4dt7a1ei2CQRBfGRsmJPHwpRhljh4ecOrY38bbMldn7vJZK9CPNivSKuZK+obwA7ymZPxT4hsBwDrTn/fT0nBR2WvyJYymZd2XBZseUowv+Mq6ORL6KWjEC/NDJfOyN9Q5crGf4XQxnyeCFeaSUFj5EqhnfXZAL8sGAMJwhrTVZi4CHdQ38bNFapqWF9ZBKC3haTR+/EkU5MSBSq9iWjnUvPBzTe9aKHEoNh1mt8Zu9jgnZbPZPRLiyfiL1gu/gBDcfjuElOgKtOfVFKODiIyZrIH6ZOzlJFhHzD2cCv7UOFk9p636lsj5QWtOsRBsGkwGBI2QK9wgMgiz0Bj5AcWiPUL/oHJtF4Nio0gApB0KnfWwdRh6a+zLE7My82k+l0ZGJNPFcQpNyxEIRg5B3rK3y2mZKBjUppZtmnSQl4XzV/OJ8muF7hPJZvj6XfqnoPwImZL5JoPLU8zIUhDOllIHzVQgZ7wvdkU7E7/MxKojLX+5JsTgFMDUlJdUr6Kc+Gw3KS8nrF+4BFt2spxiD+rFnk/LozxxRcyqEIrNFa0MxwasKlwyaFOsfG47+QXGgd2KCw49ybJoHc63xf3yIkRWyE/1EWBwEfPcGiwwZHDg5HBzKzQ5npJRR5ub4voLTLPiqgvyIJvx/CjhH5AofIRTDZm3BGUP+MxMOoTJP5A7N8MEKjUNQW38OUAkZ8P8cxDcZxqYdesV6KHgYjID3jMkG0ugI/3HLlMYLGurqYkeQ/wDE6dwLEXx9oKq35+fxK2fhXxbDmb5n6JvwbBAEwyJfpzEv3cBXqjbLc5CvcwiTnJoj5KQw58+dS+NSRpQm+oKP3LfOYZucm10rFJBfN3Ksm4UmBoEC8NPjfq1XvBCvJzpBXtATIFWTp/JWKPVSKnt80YwgSB/4iMouGwUBgYNvF2xzxi8Xu50msl3OtPixFd+T+Kks+DmeA50sshlrdGTMOFkMo5Th0TJd9IgIBjeZK/0Yg5/nEgGePeOnuE+E42YaGxlXa86wEdGMxX9MiIrINR/ipG+kfEROdsL44dgRrbfgC9vrpL209c6cJgk97AzimTleT0RhS560ygtrKS4KGrxc9hzZXCFKU+IjZhyrgWnwlo/TbLPjIOIbVERGvguFQyULid08/k+H9rY2pVP9Wsf02Tn45xmeE/iqlYYhc3YgH1j2bB8TXQxWl6BNzS1Xxo0fzh32ziBrNdI55nRLqf2IItXGpmZ3pi2Q9W69YE2jMRO5MdVR+JMVLpQjGJq/OJP+IEy2bBsbNzjEzuld/H9lUfAeKBM7YXj6+FFWFKcLqsM78fNkosGsDI8FJNunjMGRdQwYJoAnmFEU0YuReAdP3lMIRU+DGQct0I6hciQDBWOBOif8/PSXaOmcX/hQSnZueA9+DCLozg4jlAfPTDqD0EhliC4oYKaPnTbmDH/oyxdyjgvx2xHmglcd19qGnaFNze2io0594W3BfyYkeYSHRfmZe6SA4DLP4pV5DwuYKwccw4YjXcKAmDdzoA7lZCNi06Y2OQnO50X6Ce+btagmpYvDlKTZU54Tco1vJvxvL0S351Z+UuXMlxxhQy6sJQq8yhIwAubOvJCRd/tEG5s0tIfOWUXNSUUu5MPcwEX//B9/UAffcKw4UDIRIiaHM9kFJVoSfeAP6SQATUCkv2sA/PsOULVHRoNcfOqjMBr/4xsAzGE0oTQYTDQIJsSXaF7xjYZQCiNhOgYTW7kyMDEmeyXWE3i/nOJQqGdxCpPyVjaM4/8o2yDmkI7BECEzSUFLUAdIVU0PCu12eo+iZO9Ee8anzgJFKCiYEEBvpgFMKApjZ8CgeRev9Y9I4D0GSg5NYX552xpeMQaemv/cGyVGOfLByfitf2zPw/i6mkbhrhWOPBugEIBkwrjxA0DVCSd8ZkHsFpkfemKuoqA0D/7gCMx3FdrilEjJSGXw6rQFLzJkh5PzZsiLuUAj70h1QnblA62s96iPsYLnzNd8CoIKvJEWwmOR4zqne/qTDY566iItC1lgSOGYJcuirWUp3eA9dEID/a03kgVpG8B/NQVAKzzKNFZCpvHbg7ltqNq9O4yGSLNUYTRVKEdxH0PEswWXz6UZeHaj4qripvxT1LuPwMQX9UVVCYp3/lf/hBCcr6wBdF6NAChwCMFajPL7NbpFFf/qvfvqyZW58RqdKsayIRXPK4F+KlUhePNNPA7+cUWRYDxXvKHuDRlP0b8EK5+RRUhsdbuYQ4znipXgppne3DbwlSEMvIwAJc7vy33WFyrHA2JejIs+wOuSofHG9bz3o+vjHY6gYj4vITbjybBy/gHlNkEL5GUp/ZWwmoj8zBWUlOLeCpXrKup9zaXyfWUhpcjKVFmoW/tdJePKZTVUvqvEuRJXlNwmt8/wsueXFaDymu+BQiAuqyG3paymDZozLxQ1KPnQ6Ir3+Vn8oTh/o1TiXl1EjchZq6zdfj3KWkA9NGMs8cESGmRDLkEP8BI8hT6sVb4rwLlvBxCXGYYhuBTPK4gVQcWflR4YgVW8KwmtQph+znViUqn+a4oYWS65vzCtYIyua9IbZSVO6l6mUEDlPbD6/usKsPq5ACKQo1BlWQvoFzzjvkx3KNULpfSeEuNSH3i4z7S8WMoKKWp0XzaYfP0hSiVEHTTm9BCI6FIulX3LdAb4jf6pLNGURlHyn8q6KEDlfUBQ8a1Bo60whNWlLIy167lWtqmsX12X71cX6jNUtg8oG0qGSjzcry4/FnzT2JXC+rpShuwYctE/xRtgrTGiT1zL9xlWP/9PAoyGAmAorFdI2QLK/MkbVGFMAqbkUm7j8oKDyilzRVnTiaX0Xyv8uMuPRLsyAAAAAElFTkSuQmCC"
                                            width="205"
                                            height="41"
                                        ></image>
                                    </pattern>
                                </defs>
                                <g id="Group_20" data-name="Group 20" transform="translate(-5727 -436)">
                                    <path
                                        id="Rectangle_336"
                                        fill="#141831"
                                        d="M0 0h1932v4183H0z"
                                        data-name="Rectangle 336"
                                        transform="translate(5727 436)"
                                    ></path>
                                    <text
                                        id="Good_evening_Ziphora"
                                        fill="#9196aa"
                                        data-name="Good evening, Ziphora"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="70"
                                        fontWeight="500"
                                        letterSpacing=".14em"
                                        transform="translate(5875.504 755)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.welcome}
                                        </tspan>
                                    </text>
                                    <text
                                        id="Total_portfolio_value"
                                        fill="#2ee1b9"
                                        data-name="Total portfolio value"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="78"
                                        transform="translate(5876.237 1092)"
                                    >
                                        <tspan x="0" y="0">
                                            Total portfolio value
                                        </tspan>
                                    </text>
                                    <text
                                        id="_7_993.16"
                                        fill="#fff"
                                        data-name="$7,993.16"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="112"
                                        fontWeight="700"
                                        transform="translate(5880.156 1254)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.price}
                                        </tspan>
                                    </text>
                                    <circle
                                        id="Ellipse_59"
                                        cx="116.5"
                                        cy="116.5"
                                        r="116.5"
                                        fill="#172c3f"
                                        data-name="Ellipse 59"
                                        transform="translate(5998 1449)"
                                    ></circle>
                                    <circle
                                        id="Ellipse_60"
                                        cx="116.5"
                                        cy="116.5"
                                        r="116.5"
                                        fill="#172c3f"
                                        data-name="Ellipse 60"
                                        transform="translate(6387 1449)"
                                    ></circle>
                                    <circle
                                        id="Ellipse_65"
                                        cx="116.5"
                                        cy="116.5"
                                        r="116.5"
                                        fill="#172c3f"
                                        data-name="Ellipse 65"
                                        transform="translate(6777 1449)"
                                    ></circle>
                                    <circle
                                        id="Ellipse_66"
                                        cx="116.5"
                                        cy="116.5"
                                        r="116.5"
                                        fill="#172c3f"
                                        data-name="Ellipse 66"
                                        transform="translate(7169 1449)"
                                    ></circle>
                                    <g
                                        id="Rectangle_337"
                                        fill="none"
                                        data-name="Rectangle 337"
                                        transform="translate(6073.5 1569.25)"
                                    >
                                        <path
                                            id="Path_1"
                                            d="M0 0h82v29a12 12 0 0 1-12 12H12A12 12 0 0 1 0 29Z"
                                            data-name="Path 1"
                                        ></path>
                                        <path
                                            id="Path_2"
                                            stroke="#2ac7a7"
                                            strokeWidth="7"
                                            d="M3.5 3.5h75V29a8.5 8.5 0 0 1-8.5 8.5H12A8.5 8.5 0 0 1 3.5 29Z"
                                            data-name="Path 2"
                                        ></path>
                                    </g>
                                    <path
                                        id="Rectangle_338"
                                        fill="#172c3f"
                                        d="M0 0h68v19H0z"
                                        data-name="Rectangle 338"
                                        transform="translate(6080.5 1559.25)"
                                    ></path>
                                    <path
                                        id="Path_15"
                                        fill="#2ac7a7"
                                        d="M32.231 4.134 8.6 26.776l24.3 23.635-4.463 3.967L0 26.776 9.318 18 28.429 0Z"
                                        data-name="Path 15"
                                        transform="rotate(-90 3831.015 -2256.766)"
                                    ></path>
                                    <path
                                        id="Rectangle_72"
                                        fill="#2ac7a7"
                                        d="M0 0h46.702v6.054H0z"
                                        data-name="Rectangle 72"
                                        transform="rotate(-90 3839.368 -2271.916)"
                                    ></path>
                                    <g
                                        id="Ellipse_61"
                                        fill="none"
                                        stroke="#2ac7a7"
                                        strokeWidth="6"
                                        data-name="Ellipse 61"
                                        transform="translate(6451 1512)"
                                    >
                                        <circle cx="52.5" cy="52.5" r="52.5" stroke="none"></circle>
                                        <circle cx="52.5" cy="52.5" r="49.5"></circle>
                                    </g>
                                    <text
                                        id="_"
                                        fill="#2ee1b9"
                                        data-name="+"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="89"
                                        transform="translate(6478.773 1596)"
                                    >
                                        <tspan x="0" y="0">
                                            +
                                        </tspan>
                                    </text>
                                    <rect
                                        id="Rectangle_339"
                                        width="82"
                                        height="83"
                                        fill="#172c3f"
                                        data-name="Rectangle 339"
                                        rx="24"
                                        transform="translate(6508 1480)"
                                    ></rect>
                                    <circle
                                        id="Ellipse_62"
                                        cx="5"
                                        cy="5"
                                        r="5"
                                        fill="#2ac7a7"
                                        data-name="Ellipse 62"
                                        transform="translate(6548 1544)"
                                    ></circle>
                                    <circle
                                        id="Ellipse_63"
                                        cx="5"
                                        cy="5"
                                        r="5"
                                        fill="#2ac7a7"
                                        data-name="Ellipse 63"
                                        transform="translate(6539 1523)"
                                    ></circle>
                                    <path
                                        id="Rectangle_340"
                                        fill="#172c3f"
                                        d="M0 0h18v29H0z"
                                        data-name="Rectangle 340"
                                        transform="translate(6493 1496)"
                                    ></path>
                                    <circle
                                        id="Ellipse_64"
                                        cx="5"
                                        cy="5"
                                        r="5"
                                        fill="#2ac7a7"
                                        data-name="Ellipse 64"
                                        transform="translate(6520 1511)"
                                    ></circle>
                                    <path
                                        id="Polygon_5"
                                        fill="#2ac7a7"
                                        d="m11.559 0 11.56 19.816H0Z"
                                        data-name="Polygon 5"
                                        transform="rotate(-31.02 5964.052 -10923.256)"
                                    ></path>
                                    <path
                                        id="Path_15-2"
                                        fill="#2ac7a7"
                                        d="M32.231 4.134 8.6 26.776l24.3 23.635-4.463 3.967L0 26.776 9.318 18 28.429 0Z"
                                        data-name="Path 15"
                                        transform="rotate(-90 3831.015 -2256.766)"
                                    ></path>
                                    <path
                                        id="Rectangle_72-2"
                                        fill="#2ac7a7"
                                        d="M0 0h46.702v6.054H0z"
                                        data-name="Rectangle 72"
                                        transform="rotate(-90 3839.368 -2271.916)"
                                    ></path>
                                    <path
                                        id="Path_15-3"
                                        fill="#2ac7a7"
                                        d="M32.231 4.134 8.6 26.776l24.3 23.635-4.463 3.967L0 26.776 9.318 18 28.429 0Z"
                                        data-name="Path 15"
                                        transform="rotate(180 3471.36 785.19)"
                                    ></path>
                                    <path
                                        id="Rectangle_72-3"
                                        fill="#2ac7a7"
                                        d="M0 0h53.723v6.054H0z"
                                        data-name="Rectangle 72"
                                        transform="rotate(180 3467.961 773.438)"
                                    ></path>
                                    <path
                                        id="Path_15-4"
                                        fill="#2ac7a7"
                                        d="M32.231 50.244 8.6 27.6 32.9 3.965 28.429 0 0 27.6l9.318 8.777 19.111 18Z"
                                        data-name="Path 15"
                                        transform="translate(6849.201 1561)"
                                    ></path>
                                    <path
                                        id="Rectangle_72-4"
                                        fill="#2ac7a7"
                                        d="M0 0h53.723v6.054H0z"
                                        data-name="Rectangle 72"
                                        transform="translate(6855.999 1585.82)"
                                    ></path>
                                    <g
                                        id="Ellipse_67"
                                        fill="none"
                                        stroke="#c8cacf"
                                        strokeWidth="6"
                                        data-name="Ellipse 67"
                                        transform="translate(7467 702)"
                                    >
                                        <circle cx="20" cy="20" r="20" stroke="none"></circle>
                                        <circle cx="20" cy="20" r="17"></circle>
                                    </g>
                                    <g
                                        id="Rectangle_341"
                                        fill="none"
                                        data-name="Rectangle 341"
                                        transform="translate(7449 749)"
                                    >
                                        <path
                                            id="Path_3"
                                            d="M16 0h46a16 16 0 0 1 16 16v24H0V16A16 16 0 0 1 16 0"
                                            data-name="Path 3"
                                        ></path>
                                        <path
                                            id="Path_4"
                                            stroke="#c8cacf"
                                            strokeWidth="6"
                                            d="M16 3h46a13 13 0 0 1 13 13v21H3V16A13 13 0 0 1 16 3Z"
                                            data-name="Path 4"
                                        ></path>
                                    </g>
                                    <path
                                        id="Rectangle_342"
                                        fill="#141831"
                                        d="M0 0h92v17H0z"
                                        data-name="Rectangle 342"
                                        transform="translate(7443 781)"
                                    ></path>
                                    <circle
                                        id="Ellipse_68"
                                        cx="13.5"
                                        cy="13.5"
                                        r="13.5"
                                        fill="#8c8cbe"
                                        data-name="Ellipse 68"
                                        transform="translate(7524 680)"
                                    ></circle>
                                    <text
                                        id="_2"
                                        fill="#2ee1b9"
                                        data-name="+"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="89"
                                        transform="translate(6478.773 1596)"
                                    >
                                        <tspan x="0" y="0">
                                            +
                                        </tspan>
                                    </text>
                                    <g
                                        id="Rectangle_343"
                                        fill="none"
                                        data-name="Rectangle 343"
                                        transform="translate(7259 1529.25)"
                                    >
                                        <path
                                            id="Path_5"
                                            d="M26 0a26 26 0 0 1 26 26v39H0V26A26 26 0 0 1 26 0"
                                            data-name="Path 5"
                                        ></path>
                                        <path
                                            id="Path_6"
                                            stroke="#2ac7a7"
                                            strokeWidth="7"
                                            d="M26 3.5A22.5 22.5 0 0 1 48.5 26v35.5h-45V26A22.5 22.5 0 0 1 26 3.5Z"
                                            data-name="Path 6"
                                        ></path>
                                    </g>
                                    <circle
                                        id="Ellipse_70"
                                        cx="29"
                                        cy="29"
                                        r="29"
                                        fill="#172c3f"
                                        data-name="Ellipse 70"
                                        transform="translate(7294 1526.25)"
                                    ></circle>
                                    <path
                                        id="Line_19"
                                        fill="none"
                                        stroke="#2ac7a7"
                                        strokeWidth="7"
                                        d="M0 0h63"
                                        data-name="Line 19"
                                        transform="translate(7253 1592.25)"
                                    ></path>
                                    <rect
                                        id="Rectangle_344"
                                        width="14"
                                        height="13"
                                        fill="#2ac7a7"
                                        data-name="Rectangle 344"
                                        rx="4"
                                        transform="translate(7278 1522.25)"
                                    ></rect>
                                    <circle
                                        id="Ellipse_69"
                                        cx="6.5"
                                        cy="6.5"
                                        r="6.5"
                                        fill="#2ac7a7"
                                        data-name="Ellipse 69"
                                        transform="translate(7278 1597.25)"
                                    ></circle>
                                    <text
                                        id="_3"
                                        fill="#2ee1b9"
                                        data-name="+"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(7305.426 1574.25)"
                                    >
                                        <tspan x="0" y="0">
                                            +
                                        </tspan>
                                    </text>
                                    <text
                                        id="Fund_via"
                                        fill="rgba(46,225,185,0.73)"
                                        data-name="Fund via"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(6004.446 1785)"
                                    >
                                        <tspan x="0" y="0">
                                            Fund via
                                        </tspan>
                                    </text>
                                    <text
                                        id="Place_a"
                                        fill="rgba(46,225,185,0.73)"
                                        data-name="Place a"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(6794.872 1785)"
                                    >
                                        <tspan x="0" y="0">
                                            Place a
                                        </tspan>
                                    </text>
                                    <text
                                        id="Create_a"
                                        fill="rgba(46,225,185,0.73)"
                                        data-name="Create a"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(7166.249 1785)"
                                    >
                                        <tspan x="0" y="0">
                                            Create a
                                        </tspan>
                                    </text>
                                    <text
                                        id="Recurring"
                                        fill="rgba(46,225,185,0.73)"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(6372.174 1785)"
                                    >
                                        <tspan x="0" y="0">
                                            Recurring
                                        </tspan>
                                    </text>
                                    <text
                                        id="trade"
                                        fill="rgba(46,225,185,0.73)"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(6823.221 1867)"
                                    >
                                        <tspan x="0" y="0">
                                            trade
                                        </tspan>
                                    </text>
                                    <text
                                        id="price_alert"
                                        fill="rgba(46,225,185,0.73)"
                                        data-name="price alert"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(7148.089 1869)"
                                    >
                                        <tspan x="0" y="0">
                                            price alert
                                        </tspan>
                                    </text>
                                    <text
                                        id="buy"
                                        fill="rgba(46,225,185,0.73)"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(6454.851 1867)"
                                    >
                                        <tspan x="0" y="0">
                                            buy
                                        </tspan>
                                    </text>
                                    <text
                                        id="e-Transfer"
                                        fill="rgba(46,225,185,0.73)"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(5975.515 1867)"
                                    >
                                        <tspan x="0" y="0">
                                            e-Transfer
                                        </tspan>
                                    </text>
                                    <rect
                                        id="Rectangle_345"
                                        width="1680"
                                        height="424"
                                        fill="#20203a"
                                        data-name="Rectangle 345"
                                        rx="43"
                                        transform="translate(5853 2016)"
                                    ></rect>
                                    <path
                                        id="Rectangle_346"
                                        fill="#20203a"
                                        d="M51 0h39v422H51c-28.167 0-51-24.394-51-54.486V54.486C0 24.394 22.833 0 51 0"
                                        data-name="Rectangle 346"
                                        transform="translate(7569 2018)"
                                    ></path>
                                    <g id="Group_18" data-name="Group 18" transform="translate(-2 31)">
                                        <rect
                                            id="Rectangle_347"
                                            width="66"
                                            height="23"
                                            fill="#2ac7a7"
                                            data-name="Rectangle 347"
                                            rx="10"
                                            transform="translate(6541 2497)"
                                        ></rect>
                                        <circle
                                            id="Ellipse_71"
                                            cx="13"
                                            cy="13"
                                            r="13"
                                            fill="#7b8094"
                                            data-name="Ellipse 71"
                                            transform="translate(6642 2497)"
                                        ></circle>
                                        <circle
                                            id="Ellipse_72"
                                            cx="13"
                                            cy="13"
                                            r="13"
                                            fill="#7b8094"
                                            data-name="Ellipse 72"
                                            transform="translate(6700 2497)"
                                        ></circle>
                                        <circle
                                            id="Ellipse_73"
                                            cx="13"
                                            cy="13"
                                            r="13"
                                            fill="#7b8094"
                                            data-name="Ellipse 73"
                                            transform="translate(6758 2497)"
                                        ></circle>
                                        <circle
                                            id="Ellipse_74"
                                            cx="13"
                                            cy="13"
                                            r="13"
                                            fill="#7b8094"
                                            data-name="Ellipse 74"
                                            transform="translate(6819 2497)"
                                        ></circle>
                                    </g>
                                    <path
                                        id="Path_107"
                                        fill="#2ac7a7"
                                        d="M-11312.3 11882.3v-43h-5.7v-5.666l36.5-31.167 37 31.167v5.666h-5.167v43Z"
                                        data-name="Path 107"
                                        transform="translate(17192 -7553)"
                                    ></path>
                                    <path
                                        id="Rectangle_348"
                                        fill="#9297ab"
                                        d="M0 0h8v71H0z"
                                        data-name="Rectangle 348"
                                        transform="translate(6336 4258)"
                                    ></path>
                                    <path
                                        id="Rectangle_349"
                                        fill="#9297ab"
                                        d="M0 0h8v51H0z"
                                        data-name="Rectangle 349"
                                        transform="translate(6309 4278)"
                                    ></path>
                                    <path
                                        id="Rectangle_350"
                                        fill="#9297ab"
                                        d="M0 0h8v36H0z"
                                        data-name="Rectangle 350"
                                        transform="translate(6282 4293)"
                                    ></path>
                                    <text
                                        id="Home"
                                        fill="#35ddb9"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="60"
                                        transform="translate(5835.559 4410)"
                                    >
                                        <tspan x="0" y="0">
                                            Home
                                        </tspan>
                                    </text>
                                    <text
                                        id="Market"
                                        fill="#9297ab"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="60"
                                        transform="translate(6224.298 4410)"
                                    >
                                        <tspan x="0" y="0">
                                            Market
                                        </tspan>
                                    </text>
                                    <text
                                        id="Earn"
                                        fill="#9297ab"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="60"
                                        transform="translate(6977.917 4410)"
                                    >
                                        <tspan x="0" y="0">
                                            Earn
                                        </tspan>
                                    </text>
                                    <text
                                        id="Transfer"
                                        fill="#9297ab"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="60"
                                        transform="translate(7323.409 4410)"
                                    >
                                        <tspan x="0" y="0">
                                            Transfer
                                        </tspan>
                                    </text>
                                    <circle
                                        id="Ellipse_75"
                                        cx="117.5"
                                        cy="117.5"
                                        r="117.5"
                                        fill="#2ac7a7"
                                        data-name="Ellipse 75"
                                        transform="translate(6558 4186)"
                                    ></circle>
                                    <path
                                        id="Path_15-5"
                                        fill="#333"
                                        d="M29.587 3.8 7.89 24.58l22.3 21.7-4.1 3.641L0 24.58l8.554-8.057L26.1 0Z"
                                        data-name="Path 15"
                                        transform="rotate(180 3363.729 2155.403)"
                                    ></path>
                                    <path
                                        id="Rectangle_72-5"
                                        fill="#333"
                                        d="M0 0h49.316v5.558H0z"
                                        data-name="Rectangle 72"
                                        transform="rotate(180 3360.608 2144.615)"
                                    ></path>
                                    <path
                                        id="Path_15-6"
                                        fill="#9297ab"
                                        d="M29.587 3.8 7.89 24.58l22.3 21.7-4.1 3.641L0 24.58l8.554-8.057L26.1 0Z"
                                        data-name="Path 15"
                                        transform="rotate(132 2799.44 3807.04)"
                                    ></path>
                                    <path
                                        id="Rectangle_72-6"
                                        fill="#9297ab"
                                        d="M0 0h49.316v5.558H0z"
                                        data-name="Rectangle 72"
                                        transform="rotate(132 2791.518 3797.642)"
                                    ></path>
                                    <path
                                        id="Path_15-7"
                                        fill="#9297ab"
                                        d="M29.587 46.123 7.89 25.338l22.3-21.7L26.1 0 0 25.338 8.554 33.4 26.1 49.918Z"
                                        data-name="Path 15"
                                        transform="rotate(-49 8409.3 -5945.455)"
                                    ></path>
                                    <path
                                        id="Rectangle_72-7"
                                        fill="#9297ab"
                                        d="M0 0h49.316v5.558H0z"
                                        data-name="Rectangle 72"
                                        transform="rotate(-49 8431.17 -5963.69)"
                                    ></path>
                                    <path
                                        id="Path_15-8"
                                        fill="#333"
                                        d="M29.587 46.122 7.89 25.337l22.3-21.7L26.1 0 0 25.337l8.554 8.057L26.1 49.917Z"
                                        data-name="Path 15"
                                        transform="translate(6622.723 4292.5)"
                                    ></path>
                                    <path
                                        id="Rectangle_72-8"
                                        fill="#333"
                                        d="M0 0h49.316v5.558H0z"
                                        data-name="Rectangle 72"
                                        transform="translate(6628.963 4315.285)"
                                    ></path>
                                    <g id="Group_11" strokeWidth="6" data-name="Group 11">
                                        <g
                                            id="Ellipse_78"
                                            fill="none"
                                            stroke="#9297ab"
                                            data-name="Ellipse 78"
                                            transform="translate(7000 4285)"
                                        >
                                            <circle cx="25.5" cy="25.5" r="25.5" stroke="none"></circle>
                                            <circle cx="25.5" cy="25.5" r="22.5"></circle>
                                        </g>
                                        <g
                                            id="Ellipse_77"
                                            fill="#141831"
                                            stroke="#141831"
                                            data-name="Ellipse 77"
                                            transform="translate(7019 4245)"
                                        >
                                            <circle cx="36.5" cy="36.5" r="36.5" stroke="none"></circle>
                                            <circle cx="36.5" cy="36.5" r="33.5" fill="none"></circle>
                                        </g>
                                        <g
                                            id="Ellipse_76"
                                            fill="none"
                                            stroke="#9297ab"
                                            data-name="Ellipse 76"
                                            transform="translate(7022 4249)"
                                        >
                                            <circle cx="33" cy="33" r="33" stroke="none"></circle>
                                            <circle cx="33" cy="33" r="30"></circle>
                                        </g>
                                    </g>


                                    {
                                        isIOS
                                            ?
                                            <rect
                                                id="Rectangle_351"
                                                width="683"
                                                height="24"
                                                fill="#fff"
                                                data-name="Rectangle 351"
                                                rx="12"
                                                transform="translate(6336 4570)"
                                            ></rect>
                                            :
                                            <></>
                                    }

                                    <g
                                        id="Group_2"
                                        data-name="Group 2"
                                        transform="translate(2898.923 511.843)"
                                    >
                                        <text
                                            id="Watchlist"
                                            fill="rgba(121,124,143,0.13)"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="74"
                                            fontWeight="700"
                                            transform="translate(2989.688 3631)"
                                        >
                                            <tspan x="0" y="0">
                                                Watchlist
                                            </tspan>
                                        </text>
                                        <path
                                            id="Path_116"
                                            fill="none"
                                            stroke="rgba(48,48,77,0.55)"
                                            strokeWidth="6"
                                            d="m-9768 11456 28 27-28 31"
                                            data-name="Path 116"
                                            transform="translate(14347 -7883)"
                                        ></path>
                                    </g>
                                    <text
                                        id="Your_holdings"
                                        fill="#797c8f"
                                        data-name="Your holdings"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="75"
                                        fontWeight="500"
                                        transform="translate(5860 2725.376)"
                                    >
                                        <tspan x="0" y="0">
                                            Your holdings
                                        </tspan>
                                    </text>
                                    <g id="Group_17" data-name="Group 17" transform="translate(0 -73.309)">
                                        <g id="Group_12" data-name="Group 12" transform="translate(6411 2947)">
                                            <g
                                                id="Ellipse_78-2"
                                                fill="none"
                                                stroke="#fcffff"
                                                strokeWidth="8"
                                                data-name="Ellipse 78"
                                                transform="translate(0 40.309)"
                                            >
                                                <circle cx="25.5" cy="25.5" r="25.5" stroke="none"></circle>
                                                <circle cx="25.5" cy="25.5" r="21.5"></circle>
                                            </g>
                                            <g
                                                id="Ellipse_77-2"
                                                fill="none"
                                                stroke="#141831"
                                                strokeWidth="6"
                                                data-name="Ellipse 77"
                                                transform="translate(10 .309)"
                                            >
                                                <circle cx="36.5" cy="36.5" r="36.5" stroke="none"></circle>
                                                <circle cx="36.5" cy="36.5" r="33.5"></circle>
                                            </g>
                                            <g
                                                id="Ellipse_76-2"
                                                fill="#141831"
                                                stroke="#fcffff"
                                                strokeWidth="8"
                                                data-name="Ellipse 76"
                                                transform="translate(13 4.309)"
                                            >
                                                <circle cx="33" cy="33" r="33" stroke="none"></circle>
                                                <circle cx="33" cy="33" r="29" fill="none"></circle>
                                            </g>
                                        </g>
                                        <g
                                            id="Rectangle_352"
                                            fill="none"
                                            stroke="#30304d"
                                            strokeWidth="5"
                                            data-name="Rectangle 352"
                                            transform="translate(5867 2890.309)"
                                        >
                                            <rect width="1652" height="1074" stroke="none" rx="33"></rect>
                                            <rect width="1647" height="1069" x="2.5" y="2.5" rx="30.5"></rect>
                                        </g>
                                        <path
                                            id="Rectangle_353"
                                            fill="#30304d"
                                            d="M0 0h1648v6H0z"
                                            data-name="Rectangle 353"
                                            transform="translate(5871 3463.309)"
                                        ></path>
                                        <path
                                            id="Rectangle_354"
                                            fill="#30304d"
                                            d="M0 0h1648v6H0z"
                                            data-name="Rectangle 354"
                                            transform="translate(5871 3123.309)"
                                        ></path>
                                        <path
                                            id="Rectangle_355"
                                            fill="#2ac7a7"
                                            d="M0 0h346v13H0z"
                                            data-name="Rectangle 355"
                                            transform="translate(5872 3115.309)"
                                        ></path>
                                        <path
                                            id="Path_109"
                                            fill="none"
                                            stroke="#2ac7a7"
                                            strokeWidth="7"
                                            d="M-11152.417 10421.857c-.256 0-2.152 9.328 10.022 9.328h60.127v45.789s1.028 9.609-12.848 9.045-60.642 0-60.642 0-10.792.564-10.792-14.7v-55.4s-1.028-12.437 10.792-11.873 56.017 0 56.017 0v30.244"
                                            data-name="Path 109"
                                            transform="translate(17165.605 -7448.48)"
                                        ></path>
                                        <path
                                            id="Rectangle_356"
                                            fill="#141831"
                                            d="M0 0h13.362v10.175H0z"
                                            data-name="Rectangle 356"
                                            transform="translate(6042.845 2964.956)"
                                        ></path>
                                        <g
                                            id="Group_5"
                                            fill="none"
                                            stroke="#fcffff"
                                            strokeWidth="8"
                                            data-name="Group 5"
                                            transform="translate(6712.636 2969.859)"
                                        >
                                            <path
                                                id="Path_110"
                                                d="M-10757.3 10469.045c2.056-2.638 29.464-32.409 29.464-32.409l19.186 20.351 33.234-37.687"
                                                data-name="Path 110"
                                                transform="translate(10757.3 -10416.555)"
                                            ></path>
                                            <path
                                                id="Path_111"
                                                d="M-10695.8 10417.4h22.407v24.872"
                                                data-name="Path 111"
                                                transform="translate(10757.173 -10417.4)"
                                            ></path>
                                        </g>
                                        <path
                                            id="Path_112"
                                            fill="none"
                                            stroke="#fcffff"
                                            strokeWidth="8"
                                            d="M-10353.7 10443.99h16.789l14.731-40.609 22.611 78.764 14.048-38.154h19.529"
                                            data-name="Path 112"
                                            transform="translate(17390.189 -7447.416)"
                                        ></path>
                                        <text
                                            id="Ethereum"
                                            fill="#fefefe"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="64"
                                            transform="translate(6025.026 3778.259)"
                                        >
                                            <tspan x="0" y="0">
                                                USD Coin
                                            </tspan>
                                        </text>
                                        <text
                                            id="Canadian_Dollars"
                                            fill="#fefefe"
                                            data-name="Canadian Dollars"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="64"
                                            transform="translate(6027.902 3286.917)"
                                        >
                                            <tspan x="0" y="0">
                                                Canadian Dollars
                                            </tspan>
                                        </text>
                                        <text
                                            id="_0.660000"
                                            fill="#fefefe"
                                            data-name="$0.660000"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(7179.181 3279.927)"
                                        >
                                            <tspan x="265" y="0" textAnchor="end">
                                                {data.canadiandollar}
                                            </tspan>
                                        </text>
                                        <text
                                            id="_3.14"
                                            fill="#fefefe"
                                            data-name="+$3.14"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(7202.705 3776.758)"
                                        >
                                            <tspan x="245" y="0" textAnchor="end">
                                                {data.usdcoin1}
                                            </tspan>
                                        </text>
                                        <text
                                            id="ETH"
                                            fill="#9297ab"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="64"
                                            transform="translate(6027.066 3887.75)"
                                        >
                                            <tspan x="0" y="0">
                                                USDC
                                            </tspan>
                                        </text>
                                        <text
                                            id="ETH-2"
                                            fill="#9297ab"
                                            data-name="ETH"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="64"
                                            transform="translate(7083.476 3892.419)"
                                        >
                                            <tspan x="365" y="0" textAnchor="end">
                                                {data.usdcoin2}
                                            </tspan>
                                        </text>
                                        <text
                                            id="CAD"
                                            fill="#9297ab"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="64"
                                            transform="translate(6026.777 3384.751)"
                                        >
                                            <tspan x="0" y="0">
                                                CAD
                                            </tspan>
                                        </text>
                                        <text
                                            id="Coin"
                                            fill="#9297ab"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="52"
                                            transform="translate(6027.066 3609.731)"
                                        >
                                            <tspan x="0" y="0">
                                                Coin
                                            </tspan>
                                        </text>
                                        <text
                                            id="Holdings"
                                            fill="#9297ab"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="54"
                                            transform="translate(7238.366 3608.303)"
                                        >
                                            <tspan x="0" y="0">
                                                Holdings
                                            </tspan>
                                        </text>
                                        <g
                                            id="Group_4"
                                            data-name="Group 4"
                                            transform="translate(7072.283 3329.49)"
                                        >
                                            <path
                                                id="Path_106"
                                                fill="none"
                                                stroke="#2ac7a7"
                                                strokeWidth="5"
                                                d="m-9780.4 9733.4 20.278 21.445-20.278 19.842"
                                                data-name="Path 106"
                                                transform="translate(10137.193 -9715.6)"
                                            ></path>
                                            <text
                                                id="Tap_to_add_funds"
                                                fill="#2ac7a7"
                                                data-name="Tap to add funds"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="57"
                                                transform="translate(0 54)"
                                            >
                                                <tspan x="0" y="0">
                                                    Your balance
                                                </tspan>
                                            </text>
                                        </g>
                                        <g id="Group_9" data-name="Group 9" transform="translate(7319 2949)">
                                            <g
                                                id="Ellipse_1"
                                                fill="none"
                                                stroke="#fcffff"
                                                strokeWidth="9"
                                                data-name="Ellipse 1"
                                                transform="translate(0 .309)"
                                            >
                                                <circle cx="55" cy="55" r="55" stroke="none"></circle>
                                                <circle cx="55" cy="55" r="50.5"></circle>
                                            </g>
                                            <path
                                                id="Path_115"
                                                fill="#141831"
                                                stroke="#141831"
                                                strokeWidth="6"
                                                d="M66.469 51.465C65.76 4.735 0 0 0 0l.361 51.233Z"
                                                data-name="Path 115"
                                                transform="rotate(3 32.831 1253.765)"
                                            ></path>
                                            <path
                                                id="Path_113"
                                                fill="none"
                                                stroke="#fcffff"
                                                strokeWidth="8"
                                                d="M32.888 37.255c-.157-17.887-9.317-27.272-18.143-32.266A42.2 42.2 0 0 0 0 0l.12 37.142Z"
                                                data-name="Path 113"
                                                transform="rotate(1 -404.299 4077.408)"
                                            ></path>
                                        </g>
                                        <g
                                            id="Group_10"
                                            data-name="Group 10"
                                            transform="translate(5786 3230.847)"
                                        >
                                            <circle
                                                id="Ellipse_4"
                                                cx="88.5"
                                                cy="88.5"
                                                r="88.5"
                                                fill="#f7b219"
                                                data-name="Ellipse 4"
                                                transform="translate(0 .462)"
                                            ></circle>
                                            <text
                                                id="_4"
                                                fill="#fff"
                                                data-name="$"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="77"
                                                fontWeight="700"
                                                transform="translate(66 116.462)"
                                            >
                                                <tspan x="0" y="0">
                                                    $
                                                </tspan>
                                            </text>
                                        </g>
                                        <circle
                                            id="Ellipse_5"
                                            cx="76"
                                            cy="76"
                                            r="76"
                                            fill="#0074d7"
                                            data-name="Ellipse 5"
                                            transform="translate(5799 3750.309)"
                                        ></circle>
                                        <g
                                            id="Group_14"
                                            data-name="Group 14"
                                            transform="translate(5832.611 3783.585)"
                                        >
                                            <path
                                                id="Path_7"
                                                fill="#fff"
                                                d="M42.724 85.448A42.724 42.724 0 1 0 0 42.724a42.62 42.62 0 0 0 42.724 42.724"
                                                data-name="Path 7"
                                            ></path>
                                            <g
                                                id="Group_13"
                                                data-name="Group 13"
                                                transform="translate(33.287 24.852)"
                                            >
                                                <path
                                                    id="Path_8"
                                                    fill="#787a7b"
                                                    d="M736.544 531.466c0-5.191-3.115-6.97-9.344-7.712-4.449-.593-5.339-1.78-5.339-3.856s1.483-3.411 4.449-3.411c2.67 0 4.153.89 4.894 3.115a1.115 1.115 0 0 0 1.038.741h2.373a1.014 1.014 0 0 0 1.038-1.038v-.148a7.41 7.41 0 0 0-6.674-6.081v-3.559c0-.593-.445-1.038-1.186-1.187h-2.225c-.593 0-1.038.445-1.187 1.187v3.411c-4.449.593-7.267 3.56-7.267 7.267 0 4.894 2.966 6.822 9.2 7.564 4.153.741 5.488 1.631 5.488 4s-2.077 4-4.894 4c-3.856 0-5.191-1.632-5.636-3.856a1.08 1.08 0 0 0-1.038-.89h-2.522a1.014 1.014 0 0 0-1.038 1.038v.149c.593 3.707 2.966 6.377 7.86 7.119v3.559c0 .593.445 1.038 1.186 1.186h2.225c.593 0 1.038-.445 1.187-1.186v-3.559c4.446-.734 7.412-3.848 7.412-7.853"
                                                    data-name="Path 8"
                                                    transform="translate(-716.67 -508.33)"
                                                ></path>
                                            </g>
                                            <path
                                                id="Path_9"
                                                fill="#787a7b"
                                                d="M265.846 334.89a20.663 20.663 0 0 1 0-38.8 1.39 1.39 0 0 0 .829-1.381v-1.933a1.05 1.05 0 0 0-.829-1.1.83.83 0 0 0-.552.138 24.849 24.849 0 0 0 0 47.363.84.84 0 0 0 1.243-.552c.138-.138.138-.276.138-.552v-1.933a1.84 1.84 0 0 0-.829-1.25m14.637-43.083a.84.84 0 0 0-1.243.552c-.138.138-.138.276-.138.552v1.933a1.83 1.83 0 0 0 .829 1.381 20.663 20.663 0 0 1 0 38.8 1.39 1.39 0 0 0-.829 1.381v1.933a1.05 1.05 0 0 0 .829 1.1.83.83 0 0 0 .552-.138 24.955 24.955 0 0 0 0-47.5Z"
                                                data-name="Path 9"
                                                transform="translate(-229.665 -272.834)"
                                            ></path>
                                        </g>
                                    </g>
                                    <g id="Group_16" data-name="Group 16" transform="translate(3003 -146)">
                                        <g
                                            id="Rectangle_1"
                                            fill="none"
                                            stroke="rgba(42,199,167,0.11)"
                                            strokeWidth="7"
                                            data-name="Rectangle 1"
                                            transform="translate(4184 1152)"
                                        >
                                            <rect width="346" height="132" stroke="none" rx="66"></rect>
                                            <rect width="339" height="125" x="3.5" y="3.5" rx="62.5"></rect>
                                        </g>
                                        <text
                                            id="price_alert-2"
                                            fill="rgba(46,225,185,0.78)"
                                            data-name="price alert"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="38"
                                            fontWeight="700"
                                            letterSpacing=".1em"
                                            transform="translate(4243 1233)"
                                        >
                                            <tspan x="0" y="0">
                                                HIDE
                                            </tspan>
                                        </text>
                                        <g
                                            id="Group_15"
                                            data-name="Group 15"
                                            transform="translate(-900.75 -542.25)"
                                        >
                                            <path
                                                id="svgviewer-output_2_"
                                                fill="rgba(43,222,183,0.97)"
                                                d="M95.964 31.861a98.3 98.3 0 0 0-22.722-19.607A46.85 46.85 0 0 0 49.405 6a46.94 46.94 0 0 0-23.846 6.254A98.2 98.2 0 0 0 2.847 31.861a3.534 3.534 0 0 0 0 4.589 98.2 98.2 0 0 0 22.712 19.606 47 47 0 0 0 23.846 6.25 46.85 46.85 0 0 0 23.836-6.254 98.3 98.3 0 0 0 22.723-19.606 3.52 3.52 0 0 0 0-4.585M49.405 48.23c-9.169 0-16.592-6.314-16.592-14.077 0-7.778 7.424-14.077 16.592-14.077 9.15 0 16.592 6.3 16.592 14.077C66 41.915 58.555 48.23 49.405 48.23m9.481-14.077c0 4.432-4.257 8.044-9.481 8.044s-9.481-3.612-9.481-8.044 4.243-8.044 9.481-8.044 9.482 3.6 9.482 8.044Z"
                                                data-name="svgviewer-output (2)"
                                                transform="translate(5283.151 1727.611)"
                                            ></path>
                                            <path
                                                id="Line_1"
                                                fill="none"
                                                stroke="#2bdeb7"
                                                strokeWidth="6"
                                                d="m0 0 61.098 61.25"
                                                data-name="Line 1"
                                                transform="translate(5302.01 1733.611)"
                                            ></path>
                                            <path
                                                id="Path_10"
                                                fill="none"
                                                stroke="#141831"
                                                strokeWidth="6"
                                                d="m0 0 43.094 23.737 68.341 37.643"
                                                data-name="Path 10"
                                                transform="rotate(16 -3444.555 19604.082)"
                                            ></path>
                                        </g>
                                    </g>
                                    <g id="Group_19" data-name="Group 19" transform="translate(5.611 6)">
                                        <text
                                            id="See_detailed_performance"
                                            fill="#d6d6d6"
                                            data-name="See detailed performance"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            transform="translate(6186.614 2293.5)"
                                        >
                                            <tspan x="0" y="0">
                                                Tap to play. Earn crypto rewards!
                                            </tspan>
                                        </text>
                                        <path
                                            id="Screenshot_2024-11-24_082158"
                                            fill="url(#pattern)"
                                            d="M0 0h290v284H0z"
                                            data-name="Screenshot 2024-11-24 082158"
                                            transform="translate(5883 2086)"
                                        ></path>
                                        <path
                                            id="Screenshot_2024-11-24_082230"
                                            fill="url(#pattern-2)"
                                            d="M0 0h449v90H0z"
                                            data-name="Screenshot 2024-11-24 082230"
                                            transform="translate(6152 2128)"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                            <Page93Icons
                                battery={battery}
                                isOption={isOption}
                                time={time}
                                network={network}
                                net={net}
                                isBattery={isBattery}
                                iconPadding={`2rem 5rem 0rem 7rem`}
                                isDarkBg={false}
                                isIOS={isIOS}
                                bgColor="#141a30"
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
                            <label>Username</label>
                            <input
                                type="text"
                                value={data.welcome}
                                name="welcome"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Title</label>
                            <input
                                type="text"
                                value={data.price}
                                name="price"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>CAD</label>
                            <input
                                type="text"
                                value={data.canadiandollar}
                                name="canadiandollar"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>USDC</label>
                            <input
                                type="text"
                                value={data.usdcoin1}
                                name="usdcoin1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.usdcoin2}
                                name="usdcoin2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default View104