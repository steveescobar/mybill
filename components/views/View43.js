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

const View43 = () => {

    const screenshotRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const pageName = "VIEW 43";

    const [data, setData] = useState({
        amount: "$276",
        amountsub: ".40",
        moneyvia: "5520",
        visatime: "Today, 9:06 pm",
        visaamount: "+$265",
        onlyamount: "$16"
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
                                viewBox="0 0 387.344 840.34"
                            >
                                <style>
                                    {
                                        InterBaseEncoded
                                    }
                                </style>
                                <defs>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="0.5"
                                        x2="0.5"
                                        y2="1"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#263ff4"></stop>
                                        <stop offset="0.93" stopColor="#040965"></stop>
                                        <stop offset="1" stopColor="#02054b"></stop>
                                    </linearGradient>
                                </defs>
                                <g
                                    id="Group_192"
                                    data-name="Group 192"
                                    transform="translate(-1027 -119.83)"
                                >
                                    <image
                                        xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAQDAwQDAwQEAwQFBAQFBgoHBgYGBg0JCggKDw0QEA8NDw4RExgUERIXEg4PFRwVFxkZGxsbEBQdHx0aHxgaGxr/2wBDAQQFBQYFBgwHBwwaEQ8RGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhr/wgARCAUAAk4DASIAAhEBAxEB/8QAHAABAQACAwEBAAAAAAAAAAAAAAECBQMEBgcI/8QAGwEBAQEBAQEBAQAAAAAAAAAAAAECAwQFBgf/2gAMAwEAAhADEAAAAcddhP6Z8POYztMpjKymM0zmEM5jKyYDJhNM5jDOYysmMM2ErNgM5gMmCs2ErkcY5HGORxl5HGjkcZORxq5XGOS4SOS8aXkYE5HHY5GAzuCOS8aOS8djO4DkvHTkYI5XHllyOOxn6Hzl4a42D1ZymMrLGQymKrJKymPLm8bCaZzk48Ey4duRhj0mbAZzAZMDWcwGbCVmwGbAZsBmwGbBJmwGbBXIwGd46cjjsZ3jpnlxDlcff43qsZ0nItiXjJyt5s/n9PI31uorVOfrevnncLXIwpyOOxxsZtlMYZTGVnMIZzCW7n13gPpX5306vrdnh4672s5Okes+Tey8V9HnnMZ9rhnMYucxFYwzYDNxjkmAzcY5HGORxq5HHTNgM2A5HHTO8aOS8Y5GEOTv+63XwO/m/R18P0fKpj1f2Xh97bn+e9PjOLg5P0Pm/TXyb6v82/nn0vW/N/W+Q+ly2Phva+G/QeaXjv1uGdxRncRxzGauUxhlMZZnjjFymMMtrp5zuTGdG31/XnO8uGLpKxmmcxhnMYZzGVmwGTGGbAZMVZMRkxGVwGbCmTEZXAZsKZsLGVwtd50XHXfdEnIwdJy5cTLkYNTfbHyTx79ZrtLU7nBx3055MuK6cl48pM7hY4WEtzxmJlMYZ45cctYNspjjGbGGRYxmQxmSsVVhcosxzhiyGLKEURRFpioiiKIyLiyIWmFyLFMwxORx2uRgrNjnlbxq5WCOS8drkuGWGV47qcl46vJlxWTixkXKTs4dr0fLl+P04e5w+S+V1Hv/ABn6XPS7XV9p7t8Hcb34Pp0c9R5nncR1iSgIFsSwJbRAAAAAAAUQVEluNLKp1uy08trPdeO+xw6/d6nt9zh7b1f530+Q0fpeL1Y8Ldlqv0Pl5PQcHqfmdutntnxu3nPO+/030Ofkbi+95s7gOKYyXPf+d9B856P6R83+rfhPT1nDs/L6vkvn/Qef/R/N1XrfI+s+137W7877L4PfyHouTlxfHpPo49ZqNj3vl78/ns+xWjm71emczR52x9LFRVQAAALBUFQVBQALFUDz3ofO+rnwer8l63UfX/Iev/Levxml995nrPBeU9X5L9l4vcey8X9C/O+jcptPznp0nzn7f8Q+py8l0u50f3fzeS8d6uGSZt7nSmH0jseF9V+O1tOPg4PHebw3Y0n6bPJ7nwPc92/cuh3vi989759x2J0lgABCFoWAAAAAAAAALBUFATrWdnxHZ0/2ePZ95882Gp9p4/Ddz8x6fSa7T+e9WeLT4v1Hj9H635j6b5fb3LR5/G7bPScPlfoc+Bhf0HnzuFOJgxbJCpidjhxZVJtljAzwkvNl15HYnXHYdcdidcvYdaL2p1ydh1xzuAc7rjsOuOw647DrjsutU7DrVexesXszrjsutU7Dr1OxOva5MIrK4XTJCZcvCyzmNtzYtTO4Dk5OC4ZXDLUyY2s7gOFi56rEVIVIViKkMpBWIyxgqCpCoKkayYpMmKsmJcmJnJiMmIyYioMmNKiqgtxpUGVwGbC1kgtxpbirK4VM2NLcaZXC1lcLGdxWcJjy3lILGJbItkVYBJGTEWIWELBYAAhWNKgqCpDJjSoLAqWgoC3EmUgyuFMmNpZUAyYjNjaoi3GamaDNjTJjTjknLeUgELILEKgEKiFkMmIykhkxFQVBUFQVBUFQW4ioKAKAyYjJiLYqorJBbiTJBbFluNLcVZXGluNM2KzjknHdQVAQViUiSwFhBFqIqCoAUAAQogLAAAaWGaiqBYVYSsVZXGlJVQZQMkVbiS2LMmOQyxVlcKcbFx1kxhYAAi1EWQVBYAAAgsRUoQVBULUJUFFtQAlQVBUFsFRZUFRVsFuKskFuNq3EW42rcVmbGpxxOOqhqyEsSFgrGxUUAsZXGgiKgqCoKgqCoKgqCoKgqUClgqNKQqUWKqCosoKlpYLcVZMchYqg4kcrYkVBUZVAAAARFQVBUAAKAEgAUsFgALBUFS1UFQVFW42qiqlFiqllDWaiqgyY2rcacQ4UQqCogAiWoKlCCoKgqIAEMoABKLAAsFQVBUVUFSpUFRVQUUsFSlRVRVGlRZbBUtcQ8+hIqKsIILCKirCLEKjKoKiqgqCoAKigFiKiqiLAyhSwVFVBbBUFFAVFVKlRVRWSKtxtVLbxQ4KgsiKiKgqIsQqIqUIipDJC1BYFe20fm1pHfy6Z112HXrrzs9s1d7PdjUu109smXqcXyjdWTSPZ6vGtAT1YyY2qQqKqKyRVsFRVRFsVSWW42qlqscl4ocAABEVEAtiFRFQVBZLBFZMRlIk+k5/P+L5vX3fV0+rl990dP0cX0u18Jx6nq934O871p0uP6fP2G8+fzy69LdJlLteTpahOml+lzAqCosqUWKqNKCoq3GlSgaVKgVxDz6AEyqKrGykIAsFhAhUFQVObN4n1j5T59Yo9Waz3HO6Rnx7lc/Ph0XeR0XP1+kq7rF0jm4NzKGgCwUhkxVklFiypDJFZMbVJVsVUtVBUtnGk8+qgqAFEkqCoUMrAAIKg99+ivHab8h7PqGv+RcHO+Hx9D2P0Hn+7db5f8Y+T2/YH5i+6+Rjh+w/jqfQ5fsbvfjz9c/E9HyX496T2X3OH0fe+Z/Nfyev65/NHo+l68fOx+k8oLUaLCUUsFQZMaVFUUsVUtlQWxpUHGjhagsIJZQCIsASKAQqIpF+n/oD8jvh9/wBQ/KPV+r+T2/JvH9r+JfqPLlvux+mPHvk/Ne/+Ycrbjsfs8Pr/AKz2H5j/AC3r8h+jfzl+i/qcvQ46z80fN6fsr85+x9Rm/mlM/wBX48X6Y+OfO6+LfoLXZvw5H1uVCWFVFW40rG1biTJjaooVAqorjRw1UFhBEtRJYBEVC1BYAAH6k1Hw37V+Y9V9V2Pn/k3x/OPPe6+5w/Qng8p8Pv8ANtH9l8N9bj8p+4/Ef0D3m3/MnqvK9I+o/Lr6cfrn8++o91+f9PP5ri+Jdc9X63p+h9Hn9L0/b8n87pl7jj1B8bsfpPNUtixVRVuNKjSoS2KqUAqKtizjR59gEsIFgBAAAKJFSiWFgvp/MxzB0gFgLABUFQVKBYAAqVUFIZIKjUoqgDRUsqWlgtxtcQ8+gAgASKiWoABCoKiKgsAAduOo9rs/Lv5xPptxfmL6ck+Y36Za+ZPpo+ZT6bD5nfouo28i5OL14sqqgqNSpQAKqCpSo1LYqoqpaqLLYrjR5t2EAAERUFgAEsELUJUS1BUHN9A83635/Qd3xb6Ta66OMz1cHLxkZZpxNh0pcFmprPCfTfCe7nrR78AlQVFUCxZRQUsFSiyamQpZaCuOHm0sAAktQlgBAKJFQVBYCwVEet9H472HzOt9h4/u+Xfp75fY8NbTWdLOz0t0vQzdvuvK9avY6jVZp2vO9/od8zx/sPAe3HQS/S5glQUUFAWLVRVRZUtAVLVQlsacaPPuoAyAEKiVYBCpYRVIKgqCwjP3/wA95eN+lvNbLxb2d6Ny7d6Y7rpjuOlTuOnjHemr1G2w8Xcffio7YqVViyoLYKl0IS2KpKtgqXUAWKtxtcaPPqwioKgElsJbAALIJQQqCoqoioUACoRYABUBQAApYKi5oqoqpRYKl1FiqlpYKl1ArjR5t1EtgCFRFQVC2AGQUECVSRUsIAlUQBWNqyWKlolpKAApYSoKirYLCzJirJjbMmNKizJJWSWliuNHm6WGQBBUFQVBWIohLCoKgqCoAgFsAlAhY0WEAqCoKSrYKgqCjUsCoqpSosqXRYRlisyQcaPP0qQyQWItJCy5EtCFY0qIqAAFCrCCIoogoACEqUsCoqpDJBUtgAaUhkxGTG1lIstxpUVbBWN1OOx5d2ShC1CVC1BURUJYi1KCQsFQVBUFgVAABYCwVBSFS0IZIKirBKQtxtVFlQWxVRWTG0sFRWBPPqwAFkKBCKlBCoKkjKASxUoY1agqAQyQALCAAWFVFVBbiKgtiqlCKqVFgqWgKirLLMpBgjhqoWoKgqJKhagqCxCojKAQLEVBUFQtRYsCwtQluKKgtwtZMRlIrJBUFQlRVuNKircRUVUGbEmTFWSDjRw3UFQVBUoShBUFQWASqEAAAVBUFgALAAAFBAWVBUFBZBbiKlsqWlxGSQyYjK4qyY0wScd5MaVBUFSGTEVLC4jKIVBbiLAqIqCoKgqCoKgqCoKgqCpaEMmNKigKgqEqKqEqCpSsbVQVBgOOhCgAEFiWhBKoCFoQgqIqUCUKEKgqCpUAIWoijQlQAACwAAgAKAqCoKjSI42oKgqdmHqtv2+F6+fKxdP5b6DjXy1udL6M1GlQtQlQXkx9/wA7qt53HC8XQ2g8LpfqnjurziO0qCoKhKljL0uw3vHXR7XI5Nf5z2avlk9f4/0ZqNqgqCoKnrcun6PYvNrj63dHk/M/UtN0nhUnomSCoKgxHOgoD2fjPpnOdocdXsc/r8PAM8Nur82+pfPek1g7AAAT1HrtTtvPrObb1XF892/qfQx8ew7nV6vmfW3+g9OQ1QAG70ntMT0R2fNrh9N9M2nJ+d59u+K7vF88+ieT7Z8qO8AAA2H0XyfreFHczem7kjqCvD6H2/iO+Q2AWAiWoKgv0/5f73k3Xa6l4X3+++TbjFaI3HgPefMuk4kehUFQUH0PZec9H5rd7ht+Ta6zyvu8357hz8HWeL89sNf6IRtUFQX2/h/Tc3sU5uF9td9eN8/4P6x8n1HmPT+F7zSI9CoKgqI9X6zwXveB6ryjnfV8Pmhz8JWj8L6jy/eB0gAEGKAA2mrR9Uz8F7Pje0iDDzZPI5Y9oGgAAHb+i/L9nzfQ70O9ztJF0WHjNuMdoAAA5eIfS+5809vyuzS8xNPXP895+t1gbAAAZfQfnnYy+nNLueNtiL1et4nbg4DtAAAAAAAGeCNnnqUc3CUFAAAAAXYa5G36XVQGgAAAACwd7s6hl3OmUFAAAAAXtdRG36/QRYaAAAABAD6x87+s8Xyv1Xo+jLpNF9P+cVsel7nXR5Xi9fvz5n2th74+M4+/83XjR2gAD6j8u+k8mp5vazF+e9H1++r59ofsHga8kO0AAAes8n7nDZ+Z9btOV8Xy+g7h4D1+02WXzHzf135j1agdYAAA3Wl9Blu9v6DVcL5bqfRNBp53R/V/F14wdoAAAEAWBbilykJYHJhBcsC+p8zgkDQABYFiMpBnjAFAAALBbijJiM8YrPAgKAAAWCojPAM8YAoAAAgqZRHa5ToNgNe2A112A17YDXtgNe2A17YDXtgNe2A17YDXtgNe2A17YDXtgNddgNe2A17YDXtgNe2A17YDXtgNe2A17YDXtgNe2A17YDXtgNe2A17YDXtgNfNiNe7/AAHXJVQBDZdDbAQACAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAHS6e11QFoJy7TV7TNGSc/0LY/Ovf5PoV+SM36B4HY7Hzd/ODn0S/WsvkmXsdzHzPP2/AeNnudufL77fw+le41Eeee038fLMvp2lPEvf6OvOPoXiq6TeZGhfQ/JRqRoAAAAAAAAAAAAAABjqNvqKCwSObZ6zZy31Plfe9+PV6PT5cXX7zf9by9fP8AHufOacPU2Wt2n1X5X2ctx9d+BbCPX5+Ep9Xz+adDN9v8+7PW1PsHa+XarF+s6rxvX1Pc4+HHt/Y/FO1HvfH+1+cL77m+d0+j63i8GmA7JQAAAAAAAllAJQAEKACafbakEsDLm2es2cr1Xlct49l1/X/PPT595odS8Pr9J1+ltDT9Q0WbuNI3fXNY7vaNQ7/Oam7Omrm76R0XaxOCd7smou56h0Z3uI61m1NU7/GdS7HrHWvJ3jWt30Dpzu9s07uYHWu56p0HYhwTZjWtzqjjm85jzt5+2axzbs89ezmdJtewaJKWFY6nbagCwJebZ6zZwB2d75l0wHPey10QFPQ+e5o7ew1HJl63RaYes4NNZdnsvGdut5h53kja8OtbnpNd0ODL0nH5/nX1nD5MbDe+N2Fmx2vleON1svMdyNR6XzHe23k85yZeimk5zY6/oYG25NLzGzabnrd9rX6uPTeL5Zpump48vca3zXZOL0Xldhb6Xo+c5ZPS63o8B1xsBjqNvqANAjm2es2cAAAAADdS6Xtb7WZdPi9MPKvUdOtG3nYPPYel6hpXqfLWBaCAAAAAAAAAoAIAAAAAAABjqNvqAKCObZ6zZwAAAAA32hR6PS9Ybfk0iPZ6jRq9Bz+YRvNt40bzRlBQAAAAAAAAAAAAAAAAAAAGOo2+oAoDm2es2cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY6jb6gCgrm2es2cANv7v9D8n547X6HnK/nh+hx+eH6HH54focfnh+hx+eH6HH54focfnh+hx+eH6HH54focfnh+hx+eH6HH54focfnh+hx+eH6HH54focfnh+hx+eH6HH54focfnh+hx+eH6HH54focfnh+hx+eH6HH54focfnh+hx+eH6HH54focfnjWfpqH4n637J/MPaeUHRjqNvqAKA5tnrNnDf6D7Dh967Evm0AAAAAAAAAxy+Yn01877x7Z4ron0N4vUH0t86757Z857h7t4v1B3Hge4exfNe0fQGh0J71570IAAAAAAAAA816VH4fw9V5X15x1G31GgaBHNs9Zs4fYvjvosP2BeDn82gAAAAAAAAHyn6tifP8AQ/XB+fvdfSh8r859u058z6P3vA+RdD7fifGvp+1zPgvN9xHxx9mxPjGX2XzB5z6ZMgAAAAAAAAAnn4/NHlOTj9ecdRt9RoGgRzbPV7SAPrX6B/Em+5P2I/PPa5X74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+Bj74+B6s+9/mPzvQ7A6THUbjTgaAXb6fsZbFKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjMNby8QGgAFz42XK4hyuIcriHK4hyuIcriHK4hyuIcriHK4hyuIcriHK4hyuIcriHK4hyuIcriHK4hyuIcriHK4hyuIcriHK4hyuIcriHK4hyuIcriHK4hycZQUAAOaOG7TONRduNQ241DbjUNuNQ241DbjUNuNQ241DbjUNuNQ241DbjUNuNQ241DbjUNuNQ241DbjUNuNQ241DbjUNuNQ241DbjUNuNQ241DbjUNuNQ241DbjUTcDTNxwmtZY0FBF2mu2sADljiex4o8ms0AAAAAAAAAAAAAAAAAAAAAAAAAAAAA62v2+oA0CObZ6zZwNnHpP0j2th5qVm+Z/NH688/p+PXNw+nLeaP7fm/EN76D00nxx9P5l+VPpnCfOX0/qnzptd3qePv0vOPBcP1TCX5TwfUafLdn7XsHy96bcanmNR7bb5vzJ6Lp6mp9toPoOb889P0fTx8+3HU9PXkr6kfOh0gAAAA3MaTf+v6eLpMN95dOrvNttF+eb/ZcNeDWamOo2+ooNAjm2es2cPrfyP7Pze96vp/j0nvNT0tH35/S9r833ifLPBfSPm/Ls9t4lp9Y1vzlm/Ueb5Qj2u2+aK9t7T4xv0879R+XSvq3F8uZv1nH5QPqXU+ck+mdf52tz+r/JSe59Z8ZsvsPJ8bc5fffPIe423zKZv0LY/LB9By+egNwAAAAI2voPFU+nvmOOLvvTfO5Z7fv/ADqHLxmmOo2+ooNAjm2es2cPV+UR+3+L4r9x8t6+Hb8vL4XtbnyWp8+8X+o/y32l5eL0e2g498y0OW57deZeg6Vax3+sY8XutBlqMPSbA8fx+28vXRej4DRvS6WuoKAAAAAAAAAAAAAAAAAx1G31AGgRzbPWbOAJ7bxTL7vrfjTL7x9H/H/dy+3fBZdmz1k23Pd81MvR9vyUj3PT8n3TLo8vDp67R61Hoefy1PUa/T88ej1uoxrdcWrlUUAAAAAAAAAAAAAAAABjqNvqANAjm2es2cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY6jb6gDQI5tnrNnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGOo2+oA0CObZ6zZwAT32b4J9p4fN3+OPYeP8ATwDUACAoAAAAAAAAAAAAAAAAAAAAAAAADHUbfUAaBHNs9Zs4Hr8vf7XZcH4n9Rodh9Tz9XL594D7Lz+nwfj1uNP+k+W9h4/6Lm8ng9z9Ek+Sej3uK/OOX7FpD516rX+wT5b3vpe6X5N0vcds+YcP0b5zqBoAAAAAAAAAAAAAAA9J5v6Bl3NV7rzvN5Db+1zt+IO70ukx1G31FBoEc2z1mzh9j+OfV+WvX/QfC+y/C/od5wc8/Zfn/mOw2Pgfzn3vM/NvZeN/W/n3ofPNT3ug0KN9yedV9b8HoZl6/XaFp7HY/PWXo+LQq3uiKCgAAAAAAAAAAAAAAG90SPofjtay22/8U0CsdRt9QBpndxeN1ex5acOx61P0hrPguX576X6h1/5uvv8AN67v+DezhvPJ7B0z0O/Jpj0++HQ746HP2FcfU74y48kdDYQZcHKOg746DvjoO+OHrd8dB36a/ZYw5ej2adHl7UNe2A6nFsIcPW79rX9nmpr3fJ0HfkvRd6V0ndh03bHUdqHWdmHXc8ODVbpGlbjGsrLhlljVyyxpllhlGw9r5v2OGg8f92+QVqEaBQIBYyD6Lxx5TT+98CUUsFQVBUDdbz2uXxvh9n4uqloQqCwLvNF9ejwGh+weBjzqNKglQELENt0vsvnMvLee/R/wg0ks0ksMQYy4GdlLlKZXDNbcco9b9X+O7jD6f+ePsPyeusNAsAAFPZd7LLK/OfdeEKNFgqCoL6Pzn0aPMan3/ljz9ASqgqCoH1D5f9Qjk8z7L5adEUABAJYfR9NudHl6n5/7z5wdSWaSWGIMZYVKZXGmWWORV9rL4u/QtNHlr7/rJ4l6rylCVUFQLu+xHnG+7p5R6nkryVuJUFSh67GPJ31nUPPPTZ15aerxjyz1OhOoSqgrH1B5mei65pXqOePIN70q15CoLHZOs2/qI+f31/WPLvSDzT2GtrQSwxISWCylsplljS7PWjfc/m0ekvmqbTVlAAAd3l1o33U1g2vb8+M8YKBZTu568eg5vM2O/wB3Rq2/FrRuOp0UQUIXb6cbrsedHo+vpBuul0gAA5OMbvHS03M0w2uw81DddLowksJLCY5YlSmSUysplcaWwW40AAAAAAWCpRYKCgqUAEBABAELAAAAAAAELEGOWIlxEDGXEtxyLccjK40tgysFsFQVBUFQVBU5zhexseNeyHjnsh42+xR46+xp417IeNezHjHsh4x7OV42ezkeNnsh417IeNey4a8miqgqCoKgsAgsQuNgxuIlhjKJdzpTK45FyxpbKUFSiwLAsFQLA3+gH6Cy/PbL9CPz3T9Bvz4P0Hfz3T9Bvz5T9BPz6P0E/Po/QT8+j9BT8+j9BPz7D9Bvz4P0Ffz2P0H1vgo5eI0AWBYAFgELELEGIMbiQ9nH/8QAORAAAQQBAgQFAgMHBAMBAQAAAwECBAUABhMQERIXFBUWIDAyUCFAYCIjJCUxNDUHMzZBJnCgRoD/2gAIAQEAAQUCmTCTDezn7+fyc/uNfamhfkuf3Pn945/YueIIjm8NonQiOdm2/wB3P38/zUeHIl4v4LiMc7FG5OMSmlzB+mZ+emp+LVnRTRyA/JVgWSJ8+5lxbK6iR41pAixZl0O+MS0lyTUc+FbSUrfsgYciS2hpwWANKN6GS/7oLmNyNSz5bZNJPitK9jsF+0T8Ai8f4pHzvC1kZxvGTmI+KUahf83PhHRXSDEtt67eGRZVRI8C8DTSW3Nl/NLvUEhrX/Y6Criza7Sn4V+lf7fSy5L/ALpF5LAmHuTT5R6QyuVyjd0ka5sgIgS64LKIyw2xjtnz39EUhVK/4+fubaTGDVc54tpMUQjPA9zlcv2MUowWClGA0UowMFKMDOfBHK1XOVy8IttMhs9R2GeorHPMpK4U5DLx5/fefs5/kefHn9858eft58efDod7/wAc6HZ0Pzbfm2/Nt+dD86H50PzofnQ/Nt+bb86H50Pzbfm2/Nt+bb8235tvzofm2/Nt+bb8235tvzbfm2/Nt+bb8235tvzofnQ/Oh+dD86H50Ozkvv6He9PxzpXjz+CPFU2MEwaY8TCJKhqLiACncOMMf2l4BkyTFUPGPHcdRx2CTHMa9JELp9keCnJGo1MLGYXDCcF3t58AC3ionJM2SdPCWLYK1OtwhoJmRawkga0/W1zVav2ZfxSQLZKNm48bEGzIdIsqORiiJk4W2/K8PPBBIZ3lczPK5eFgyBNMJDDX8F91YnCDCjeD8wJ0SIcU0TLRP3cFOqRgGbp7kqulCK4JLtib3A6uis20mSSw+kTISOaKA8j2Q9x4Ym3KJX9RPztkmVyczcKb/GirVny50RYR56c4+RU6Y9T4rP5tn82wqWm1kxOmR7qx3CGxDVbSSxhUXhq3LV37uA7lIxrlY4oGXCBpnDdegJucBxZYlaUSTDb4Y7Q9GH/ANyM3xEKPFdFlQV/mn52zfla7kdP6lolFGpv8dUf7+oP7+e7pj5Fd1R6F+2zzaRkOWSTkj8AZMd1SPdGNsFReaMMQaeKPjpBXpk2Rvma9WOERCs4K9XZGtXgj/ZlXkkku8Ub9t4iIRpb7diwrvwkaFbeFJOmeNPPPuEyuPywJyAd5rMzzWZhbCSVhioEau6l98ScsfBHYVMIVgklz93jHkujuFLEVPtBJAxZKmqbjGlOjqKSMyY57WJKsOpOCZGsW8muR6YaUMKHkOkO+LeJi+7qXN1+bxM3iZvEzeJm8TN4mbxc3iZvEzeJm8TN4mbxM3y5vFzfLm+XN4ubxc3i5vFzeLm8TN4ubxM3iZvEzeJm8TN4mbxM3iZvEzeJm8TN4mbr863L791+Kqr7kcrcUj19nP8A+ec8OrhssYHgzyIMmK3wMnbHAlFCCOWU80cwC+WzOgEY0p4ID/MJQkBJxjFI+6qWV2GhMHVxITDwXw62LFn17AB+8WTq9ra2YyfZjmxfCX0gvSyQyaZ+9Dpetx6ckyR6uCHZARRvWx/v5L4zm6dEzxqABJrJCK/TdenTSXP9q5ix9OfeJEosnAmfHLJuZckUiSSSo72YMcWxkQ3SrGRLKs4yzI9rJjKW4lnIQilJjJRRx4skkM0KykwVm2cmegr2aEMmWaaX9fjEQzp9CjNPOY4buDBuK7yew5PG4TsGAps8DKzwUnPBSsIAoeCfiraewe0oiAd9301Q+cGjxQQRb4kbPrI1mK6q3VE2nrH202DXRqwKXlduzq6NZCuqt1RN0NICBPMImeYxMGRhW6/+mLGJMkU1DGqBEmxxPlQ488WoKV1NL+7aOa1tHrpZHgrb/htLrBsCFqS+j3TdJ28OpzUeqI06vzRxyHpdfo3nwhRHzpcWOyFG1LZ+Z2eg4SPLqi0dWVrAHlOqdSSKONfalHdRvu2lNQsrVa4ckU6niz4djoYg2kG8ROFRUnt5UWOGsh6jtvNrHhoer5N1XaeXVuaHb001tTttT+d1EJXsBOBqai8okfdm1M57WHm1RS3x4Gnqe2FcRNdwGI3KWkPcHhQo9TE1NqZbBeEGI+fMix2Qo2pbPzSzzQxOun1hMJEqM0FLe5NZCR9HjWq91JTRa+NPgeL1LPnV+lWXFfEuab7hpac2bUak0w62fNo5UrT1FTpSwteTGoChpH3UmJDDBBqODbWeeirTLTT8ypFmhqvpZqy08vreGirNsWbb1rLaCTSVqMum6LyaPrmwayLmjqlCOpizJuoo4Xi1rrbn51pr9nSv3CrtZFSeJrmEVp7qHHgz9dAY2VKLNPpS7jU7vW9Znresz1vWZqjUEO3iMROuNq+pig1Bb+cWHBFVFqdbuCxusalUsNdBYyTJJMPU+TeUVupplXFo9XkkyrvURT2kiVSalFeXsOPWfcpN2aTWf+4AR3yHCrRDRBMbnJPh6UxwBvw9Yx6EG4TvvIhqV4QoAfzTIySB/eakfN/CHGWXJsIfgZCDe5E/HHMcxUG9Woi8uleW0/IkJ8xeh3U5FYvCePblfeKj/b4U4umPNjo+rsJh4MqI5zWpKPMHJmnBbOE0TQJ/I5c44rmK5Q2NfNRB2jTdPC2/uPvFUXoLwdKe6MCU8Ax2xmDFOOE8mwJJG25OiRp5opTWZjiLNIaU2wMyWOyIN0qYSXxml3ZP3hrlY6LJSSP5p8vZZ96GVwnhtk5JPjrniwZ4oOeKDnig54oOeKBnig54oOeLDnjAY6xjtw9qqoqq5f8A57RBedwKljcbHGzFGxcLWgJkmCSP8jGOI6PUpjIwR5ttXCwAEyTXPB8iJzWPVKqDiBFnQ3CQgEyTVuH8saseXBwQDzbbhIoSZIqsVFavzhE4xI8dscfsVEVJ8Pw7vha1XOhxGxWe2xhbfxwISAb7bGF1p8VdC5J7Z8NDs+epD0j4f1WRGLFfwkCQ4lTpX4KkPN2NY56uarFxlZILDxzUe049kvwVgN2RwYxxXO09OaBUVq8JwdiR8EMO/I99oDbN80dvQDE/FQRy7+qBPfOcxzOM9vTL+Cub0xMr7EtcRNQilCroUaHCFqGK2FIL4g+WzeUn4Kdv7jI7RvOFK+qEsyO0EwVdZRn8kflw34adn7XB8UwxNimeEEY0nF/Bctm84/zCXmLI0h0U49US3kurk9dJsbU1lxsV5y/ggLzicK2rNPPao+zlN05IfEcxWOy4X9/8FQv8Nwv/AO0k/wDGIH/HeFyv7PwUy8Zl4+XBjXj41fVXDqtCkUxctf7X5q0u5G4Md0PtbHzKRwc5GIV+4T4KgvMeVtk6tJK1HLkMDILHeLUzhwSlccuTS7sn4KgvJ+CVu6a1p5DXW9Q8HmlQ2LwtC7kj4K0u3J99uXm75oUnwxUVHJ7bSX+HwxzKAoyNKz22MrZH8I3qN8c7ZA/bMlJGEq81+BPwyFKSQL2yDJHGUilJ88Oe6NgZAzpwc5GJLtE5KvP44sx8VwJQ5CcP+pVmwaPer3fFHkPjvjzhyE4ybAYEMZx3/EIrgvjWIzeyRNFHyTJfJf8AkUVWq2fIZi2UlceV5F+Zk6QPFspOEOQvzjlmFnmUjCSTF+cckos8yk4SYcn6ajUUd9JX1p7Mx6TwVFC01KeS5AyLaN0tYPwun5oYsOhlTQgpJh5M6jlQAB03OOJa47YUiAaLG99FTR7Ok07WssLKZSPNdEoJYpAKqRIlRKGVMBJjkiH+HTkUU23jeT2kkNLKPKHQGbYT6AoraZSyYIUrBEkxdPzJQCieAnw1IWSLPVFWOtsLSljwNO+mZ+3CopU8EaglSWy4hYJ/kr4iz5h7+sj3Y6/ZISGWt0tLrzzNQah/zkl3/lEBf4yXAPdwFkMfYwF/8XktfNmVxvNZupJDS2XvrJLoenLFY8BklPGSJTSU9DbFFHrkb5jXaiO+RZ/DpH/Pw9PyINhBlss4s8pYqlqUJqWYJwdNSP8AJV4DzYdkIQZ/w0f+ZjJHsjvsPFVK10h2pJZkLpwH8fSakMQs/wCfmuc15cUcqcepUSrtGVeKquX4eeKqquI5U+VF5Z/XOa4rufDmqfN1LyxHKn/qFPxxA5spmy3NpubTc2m5tNzabm03NpubTc2m5tNzabm03NpubTc2m5tNzabm03NpubTc2m5tNzabm03NpubTc2m5tNzabm03NpubTc2m5tNzabm03NpubTc2m5tNzabm03NpubTc2m5tNzabm03NpubTc2m5tNzabm03NpubTc2m5tNzabm03NlubKY4Sp8A2dKfoIrPc38XfoN30+0f18QRySSRaAIWrKrI+IWsl5YUQ2jVFavtVFaucl5fDyXp+0L7hfXwa1XujhDTQptkac7gGaUbZAkkD41so8HS025sJyTqiZZ3yaac8A2yvTTdOdKadgEFLdpxVi43TfS0NLJPYH0//DgpoRNOVdRDkUO3JZp5+l9h8mklR7L0r1HmxlhSiVjhVbqtzawulfCmsa41ZK+wL7hfXwoAbs3UUnrkRaSRJBLilhHSiO6ZNqXwhQCZJZ0G4Q5p4GkpFvMsn/8A7DRy/wA1H/w9ymM+vhDrbTSX9ymOcYz6yKCvtIcg8dIoXyNIU43n04NvTo/V/wDeEOwOpK2knx9Q3v8AmPCln6TnxSQ9M6trZciz1Z+7f9g/69ovr4aZ/rbc/MYjwPfZRCTdRNuBstjxoU2rg/707/e4eJLsf0zzCVvgkFiv8SXYFbzgCHKMFQyCxlwNtOjiQj2kkWk2WyNNkQ1jzDxXulneM8gslzZPiJAT18aTNk+Mlxp0mFizDkS6vXus3vcV/wBgX3C+vhQH2puoYqskR7xWRgXivm11iWtLMt3SY8Af4SH9ZvvK+4X18GuVjo5hXMKfWlgO4AjOLkgqAHxAEI4z/CnAGvkHYOKYj1q5SK+EYZ1rZKD2W+XMrZJBw690oYoZjEPHLGcABJD5EMsZK2L4uVIjvLLPCNHxIZnSGgI/P64+tkjYCEaS10UzDmgnjtJHIIpRuCQUA52RK10hgoZjPJEMIvlcrpBFLJw8ckZ8OA6WIUIxnHjkjPCF8ghYEgLQwJB2Qq90oxBqJ/lr/AvrXkG4BGmNXyI7AtR5ZFWbdBHJIeeIWOr66Swba1zoHsX3C+viCQSMSbcvmx+DZjmDVVcvFzHSaxsJ6gsWPe8i8js5+Th+oAz+cu6PAS3C8wGu6WNt+VyyIsKCFr2G6PKKn/I1/RtPIxIDn9AJ/IEasVqTxvYKYwQ2Q5KkHNeERYoOkzHuV7mq0rBhUb4235XuJ0kEfzzdbk+Ogsr06guarqmTzZW1/N4I4ijq5ig5jepbblyzpVaiwVfDt5eaiIMbI/8AcSRH87RQuYpf4RRsmGROqo9i+4X1/IIrwuNJLIUUw4GoV7c3HdEWRtyCzjvTcdtsnSBjGV4nsklGQpySHCK8DyyjGRj3DcwjhvNKNJzcftuK96Y6dJeMMo8dFOVzjSzyEfIEOHg5sgLBleJ7JJRkbKe+UeeZzwyCx1KV5niK8LxyjCIQrzPiuG0hpQ2xxTDx2oR7XkI4zxnIJriOejive4s2QdiLyXx0noGV4XmklkK+bIIMRyBT2L7hfX8v9cNGLHwccpkeN4l9nQvT9tX3C+v5BxwCjCjhFLsnsfLhsOSrkoZlcsKOBxICMG2Cjxtjw5BUH1whRGPsovh0rvta+4X1/I1wpURZIWGkuQkhh2trSyGSIb5niXx5TGzSTmssReEin8U1Iw3wxz4pBOj/AGtfcL6/0GvuF9f6DX3C+v8AQa+4X1+yDVy7FwtB2D07fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzc7fzckaJswNkRyxScV9wvr46Z0v5lgQjAP71YVsazDe0ZaWTwX3C+vhS1y2lkMbQs++Xda21r3sVjsX3C+vh/p+FHS/wArYFlW10GtsKudL1CwMouo4rKldVhaaFqAcp7dXhJHtJyvnS9QNBKtNQfyAF6g6eHfsPKkSGRgRtSNMSbfMjSrLUSuox6gUFPPs2QCm1KMcyqthWoPyupQpHvcX3C+vh/p8XlK/KzSrQX4dQ+Zz4NgHT82SEnpq7/y8v8A5TVX0WJplsUkNiIOssGw2ek55G2VJD8BPs7BGeAizkjGO1lddsijLpqxkMs9KWNyC2nR7MFZqTTfOVN/K6mMh73F9wvr4Udj5XZMehG/lOWI1ExWo7ice6GorvLK/litR3DliNRvBGpzVqLnLOXLOSZCqvDWP5W3sG1cAj3Efi+4f18dL6p8GjHtI371NnArw6gvn3UjgvuH9fsr7mbV4LX0tqdwjZ3CNncI2dwjZ3CNncI2dwjZ3CNncI2dwjZ3CNncI2dwjZ3CNncI2dwjZ3CNncI2dwjZ3CNncI2dwjZ3CNncI2dwjZ3CNncI2dwjZ3CNncI2dwjZ3CNncI2dwjZ3CNncI2dwjZ3CNncI2dwjZ3CNncI2dwjZ3CNncI2dwjZ3CNncI2dwjZ3CNncI2dwjZ3CNncI2dwjZ3CNkjXc8qS5sicTiv9Pcn4p+giryb7hk6cRef6Bc9G493Wvwdbs3HZuOzcdm47Nx2bjs3HZuOzcdm47Nx2bjs3HZuOzcdm47Nx2bjs3HZuOzcdm47Nx2bjs3HZuOzcdm47Nx2bjs3HZuOzcdm47Nx2bjs3HZuOzcdm47Nx2bjs3HZuOzcdm47Nx2bjs3HZuOzcdm47Nx2bjs3HZuOzcdm47Nx2bjs3HZuOzrX9Lcs5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5LnJc5fExnXiMRv6A5Y4SLip0r7mt6U/QRW809rPq9gxPK8WlrYyH0zax0c1WO+9u/p7R/Xx0/p0t0SBWRa0XLOWWlHDtmXVKelkcRVMo1flhUSqtvwonNZ8E1bIixiTJBwujm4FgGBD4eXE8t9g9K2JRSq80OWukLJqirpBpkzTs2ECuqZVo6xqJVWvy1tVIs32tJIrHQ6WTNDMhmgGj6emyBMgnfNfpuWNOC+4X18K6E+xmxIo4Uf2W9aO1hFE4BeGnZTI9DWU/Rf6g6rvDPpYk6FQxw2sQVZcxqyrEKrl10VgC0TPU9moFn1Xg9i0o2OSX5NCm21alnq2qk1J7oNWOXYnrBT69wK+lr7/Y9P0DIxrOqqBpZPiR3abhDgky9gMrLOPWSJUR9acUKy8nspDq/ye8lQ6u5sxyJVHIp2uq6qT/DaRr18RpX44Nes7NQVCIeokRpUG7iz4K7sq0Wx2yz7iHCfbDe+BqdKqBZOVFRcX3C+vhoCP12GoZ86qj2+oHxYDLmV53Hu7S2fc2xq2NST3WUDWMdAXnDxYvS9jeRzU0m0EEB4dXLsI92CTZaalBikrbBkmot3sHFFPYmnMr5Qy0c+0jghTY9XLmyruODVUKLVVtrDtwNly1bGhkdCva+7kwnU7Xqx91bxC1jJgE0xPlhln1PJFLuEI9rdx3S6uqJ2W1pFm2woFSCbFLBtry2jx7M1fIi2FPMPFq6j5LGc6xkVQIMoVoWPWhrhxItZJjtrTS40G2lS58KddQo8GnlEfuExfcL6+H+nxUSRdRfG1emRvtbCulMZdSnRXzSyJE+60k9w81wVCXfwsd0PsrktkP7Mqq5fevuF9fDTtilZa/1xgmDxAsbjQiFiyZl/K9FxeeoaWXWH4IJ6o4b2cVRU9u2/pxrHP4KxyN+0r7hfXx0rqhvRw1EVwKWnclXpzzl/qK1clpp3hUyjeL6pFhI8LGkNbFjiDYjb1+FjHYeL0NmBbHkB6d5xJvmchkePIMZ8KI0STZKul5DAkmU2HFKQUUHhCQ4YXSQeGkfZF9wvr9lZqmwrEF/qCLlZa3FMi6P1ALw/lv831fqASRuFcRop0WQwUsLRQMcgpoCHi+LSR0NrCM8OMLpDU/q1w2YsgZX/up0bxw48oDAQTVf+REOPGlEM19fMKx+WJGlm/ZF9wvr+DxUjb+FZT/DoVzR+4BVjlX8V+zr7hfX+g19wvr/AEGvuF9f6DX3C+v9Br7hfX+g19wvr9ldpObNY3SlULCaVqyZZ6am1rfva+4X18dP0Yq6NLmEkqPqKqR0yO10bNSULGi41NSGRGDX09wvg5GSIMmKk2oayv2n7qxTb8iFIiLaUaiKQbxPfWzBiisAtayulkUongf9iq4ApA7OLWSXUlVDlvi1vi7NoqWYv/eL7hfXw0zXpZWtidTng13jXjEwSOY16OgftokdEtYXl1hwN+90dp4byXQZWyyvlnn6fsZDotV4IfqKulvSr85mmgajspURLYciXaVT+dvCRG6fvJ8iJW6ocp4/2Kh6I4bGpq7U1JWwhW1RCgDnx0r7J8wLI0nF9wvr4aBanWv4rAYjIuFftMNbmkuj/hmuGI264VdwarV+pUEKJaOiwYVmsOFIsCWUWxOer0zV2xKt0u8QkO0s1s1fqE3iQ6mFEkjt3DhWNotgGfZunx/sVdaOgZP1CLK+YsCaCwLGn+fCE3gvuF9fDQshGTSs2yVpesHC2dXgwepa4ZNUWArK197nK9fuK+zpXOlcG1evOWQJZIEyVKiSwx7AQXMu4/KZqIIhCclgTzAfRZxI+3yXOWAi7rZEZQO5ZJiLGTkuclwI0IRY/wC55ZGipIaeO0WclxYapFBE3WSI7o7+S5yzkuclzkuclwsfaby4clzkueFY2M6KNgjC2yNb+0UaDJyXOS4wTnphY6ibyXgYGzw5LnJc5cOXv5Zy4cuHSudLs6XfpOHFJOk+i7TJmmbKEP40RXKqK1YlaeaL5K+tLZYYT45PigVZZ6NqTOgfHDgPm4cD4xWUc4gVRWr+QoxOkWl7IsqqbpKdYzH2zGDs/hT+rp8SlD5vBsRy5r5sb46+7BDi1lqGct/ZAmv+LTstxoUG4kS5V6IYbL4tPf4rUbmssGEY8duUZ7H8hpn/ADs6wHA1XquznVwfiT+rKvwFsSuFNvqZm3G+KspjWKzKo8eSQJQfJpb8I8PUJ5MzUUdsef8AFUUe9GtKd0WX6WbljD8BL/IUUkcS11XPj2NjVagiSaqQxgjfCi/tTrCMS3BYRm31dOAIfxU180TJmpSCk2Nuayb8dHcCZFbqEToMyWScf4qnUIo8W4t/HmBqhnhJMh8o/wCmYMRJVGSq3IRIEQoDU0AREomHm2lT4IHvqGo+aGFG2nV37DKpj3JUIkuLFjNku5dXtrGl8BKAI0t1SxDArmvzwcPYZUfv1qmMKKJH8QyCCRKkjaI3t3fL4Y2BsZHhRGAtfHYsWFH8a2NH6JkZIpfbH/uLBOViPojSQ1G8MFYx4WCjeVrXM3PA+MSfX+FF8rZrmwB2hRBNbNeItu8pW3JGklyhHb74klYpvGL0AtHgkgmbY0ls3fNHeJcqK72tkq2JEleFf4vxJJVl/NPFL4ZbJXl8d0uSa5g1mjU0uU6Wb2hnIwK2T1LVHbFWHKYyMtk7xDZzW5KkulF9o37b5M4UhSWLiPZPbtxpzY+JOXaNJQdU2yezJB2FT/8AkUACSS+lbbPSltnpS2z0pbZ6Uts9K22elbbPSttnpW2z0rbZ6Uts9K22elbbPSttnpW2z0rbZ6Uts9KW2elLbPSttnpS2z0pbZ6Uts9KW2elLbCaZtRM+301l5TOTXkHPXkDPXkDPXkDPXkDPXkHPXcHPXkHPXkHPXcHPXcHPXcHPXcHPXcHPXkHPXkHPXkDPXkDPXkDPXcHPXkDPXkDPXkHPXkDPXkDC68idBSKUn5e0qz1cr9EUum5Fzn/xAAuEQACAQIFAwIFBAMAAAAAAAAAARECIQMQEiAxMEBBUFEEEyJgcQVhgIEUMnD/2gAIAQMBAT8Bu3M+iUt0u26JLkOeBpp8dmk3++z5dT8Hy6l4Lpx0cL/W1rjjX4iR6ofvNjFbcKeOyowZiXyiilKB8v8AJ9DUwWbK5sV6nDgxYOOgm1w8pb8nPZS7X4Jdr8ZXjLXUlyzW3yy7fS5Lly5cuXLly5cuXLl/YhkMuQy5fO7OM7xt5IIjxlRTLNK9iIy4LELpWIXsW9i3sf0QmuCumGUUyxUT4HSn4HKZRQmaWvBXQmuI24ENs5Tyw+BXTIapfnKzRCksnBaF16+CnhFCaZUkkYkSjChtXLTyYiiB8vNClMlvzlTVDJT8ib5T7OyK602UVQzW2+SqtpDlsoqjyam/JVXbOCCCCCMv7JfuS/cuXLl/cuX9y5cuSy5cuXJZfONsj3QQQQQQQQRlycZQQQQQQQR0II2R3vG2CPQLFt0djx2Ny/Shd7H/ACPQ0Q/Yh+xDZDZdENohyaWu8sarjqTNSZqVjUjySoLTJKv3cNlVDTyhvhFyGyH7F0Q34Lrspyg430xTSrGtcMhairEVMQVw6ZgpxYXBTU6vBausqqVFoK6qakLOCM46EEEbYIIIyVbSIVRVTDKKGzErng5KmqaUYfJXXpasOKqTkdDSX7mi3PYwQRupqTUM+lMlVVE0xyOmlKzMOE7mJVLFZj01RcqqSUIphOZG1HJZNuecntjKOjBBG5tvosjcyM3tgggjpcmhmg0Gk0mk0M4zggjZBGcEdemILsvJcuXLxlVG6CNkdkuCyZY/slEwiUcsq6MbI33Ll96lEosWLFixY5yv0WRs57jnpQR6fBBBBBG6COnCIW6MoIIygggjowQQQQR07kEZRsjfBBBBHRggg5III3RsggggggjoQQQQQRtgggeUEEd3BBBGyCCPtuCCOzggjOM4ygjKxG2CMoIyggjOC2dixHXt0LbY7iV90W327G32pPomqrFbi0HyF7sopaV3PQ5OO5xpVDMKFSvRK6dSZhVpfQ7R6LoTat9wc/bHn+FHklyOprkVbdZx6L59F5+7IbP8bFidLj8ENP0Lk+EwcH4TCWNi8lf6w27Uwj4qujH+pK559Bp8fk/UJqwKWuBC+J+HeDppUHLfoWH8a6MP5dSk+Zhpy6Tls5IXZ8lv4G//xAA1EQACAQMCBQIFAwQBBQEAAAAAARECEiEDMQQQIEFREzAFFEBhcVCBkSIyofCxI0JgweHx/9oACAECAQE/AaNOnTpVNKx1bEEe/D6Y5R1aujRrU21qTHKObqVO7MCrpfcTT29vBjrrrp01NThCzlEryYK+O4WhtOtFHG8PqTbUimpVKV0xz2PiFNK4hXQ8bNx+5Q9T5Td3Wv8AET/yaVPD+r/RFlufH2n7nw3Qpppq1Yi7t9u3sQQQQQQQRz4n4qtOmtULNLjJxutqanrKp4TRppvRX4R6nGLX9KVPiHEfkdLWk0cLb/Vdvjx++5wS0V6iTn/9wcDdH25R116dGp/ck48kJFOjp0ppJJPfG4kkkl0YMGDHs4Nj0dNzNKHo6bmaVnfBhLBbTMxk7FXB8PU26qF/BTwmhR/bSl+xTSqVCUdWEhVJvdMydzC7ly8ouU7ovXlF9PlF9PlF9PlF9PlF9PlF9PlF9PlF9PlF9PlF9PlF9PlF9PlF9PlF9PlF9PlF1PlEp9+cpdzD53Jd0duiutaadT7HE8Zqa9TzC7CraeH/AJPh/GPW/or3OJ1vSX5NXiLFNbKNanV/te37EkySSSZJJJJJJJMmSSTJdUnucLr+orWzitd6SUPc1uIWmprfc0teqhppzJp1rUpT8nF8VbNKcRuz5jTf/cv5OG4vOHKMPK5/EJ+XZxEwjY4CXxFJxs+ojWap1aa6toj8Hq6dXEU2v8vz9jsKr0/7cv8A3c9eu2JPVrh1TGy/mB11XNqrZfybr3uFn1kcbK1P2ON1qNbSVvk4fWrfEWTiP/RwU+kz4hKoqx/P5G6qVLpX+/ufD6nXdiDRl6a/BHKuhV0ul9zieDr0W8SuwtJtqFP7Hw/g3pf9StROxxOh6qx2KqGt0VaNNdMNd5MkfYjGxGNiMbGTJkyZMmTJkyZMmS1trBwug9NXVdzitD1VgfAaamhpmhwSepfSoexp0LTpVJxfC3S0pndHy2mn/b/g4XhM4UGEujDRYk9lzwy1eEWU+EWU+EWU+EWrwi1eEWrwiynwiynwiynwiynwiynwiynwiynwiynwixeEWrwiynwi2ldkJJducJ9pNudqb2F9dJJJv0z+gbE9M9eTPTj6GX0ZMmevBJJJgwSSSSSSSSYMEkkmCeWPakkkkkkkn2tujbnPKSSSfYknlL5S+WPf36exJJJJPVkyZ6ZJNiSSeUk8pJJJJ555Z5bcsEmSeqSTfon28Ek8sE8p6JRsb8pJJJMk9EsyZM+3uSyXzkkknlPu55SSSSbIo4impwpU7Ttg9ShqZUHqUZcrB6lCSlqGPVopmWsKRNNLO5Vq001KicvY9elJvw4/fYo4qiqpKGpn8SjK5ZfsT0bG3LJnlkkknlkyZg+VnTanOfwpNLhqlUnV/uBcNqJuI3mPJ8s3lxlP9myrhtWqrt/qgVEJZ2/g1dCvUqepMNRH7Ho6qmjETM/5KdLVhUuEk2577zykzzz1zyknlJPRjouSWXBo8TRrptOMxHJ6lCeWkSmt5HXSnukerR5X8kpreSrUpp3aQmmsOemSSTfliOiRE+5xGpXxXE+m33gp4PVtv0uzg9TXXCXNO/Y4f4dVrp16zaOBrr0eJej22Nf4atfVdd25xnDLhWlMtmnVVwfBJveP+TQ4Wri09XUqj8nB6XE6GtG9H+5MmemeU9Uv2MkslkknEcFRr1urTqU+CivieGV1LxJw2uuI01XszjOOWirKNz4fwjofram72KqlSm24jJoKrjuKdb23Pik+hjycJwb4rS/qeFskaDr4Pi/TnvBKSfY0uPp1a2ohLv5KfiEtN0wnszc26ZJ5T1ZJJ5SSSTy1uG1+G1vU0clK4nXpsSxJ6WpwvCOmjco0eJoqvtyaGvxj1Eq6cPfB8Qeo9OzTT+7OC4f0NJSsvc19Ja+m6PJp/OcHNNKOF4TW1db1tZGu9TiKKtPTUPv+CnS1/UqotjEH9WrpUaCpcp5wIz1zykkkk39uiimhRSozPvY5YMdU++6kluPiUntJ819j5r7HzUdj5r7HzX2KeJTe0Caa9iTt708tiSSTiK23aSkn9hVJpNMxO5jySl3JUtTsYZw9bbtO/tT15J5STyyZMmTY1pVb+5qUupJLvuenUn5SLHO3/wAPTqjxH+T06m5aHpvP4RQmqUmcPN345SZJ68mTPTjpldWpQq0enUuxa/BFXgtfgtfgtq8C0qn2gooVC6MEk8sdU/W7k8p68dcoklEkkkkkowSSYJJMdeESjfpkkkknp26MIx09uqTYk2J6569vZnp39rJJJPRJJJJPKSSSSeUkkkkkkkkk8pJJ5ST0ZJZkkn29/c265JJJJ5SvbwY5SZMmSSSSSSTBPuySST9Vkkkkkn2ssyZMmTJJJJJJJJJJJJkyZX0Mk9c/QYJJJJJJJ6JRVW2ZFW0yZXTVXCLm2S13KK5578pRVW5MvuKtplNSa6XUki9sz5KdRoldMkleEdicolFOGySSSSrLJa7F77IRTlEkkleEMdb8FLnsUYZPKeVWWYRjybooyjBgx0V5RhlqlYMJFO/S9zL7ENRBkowuivKOxnwUzOxS5fTVhmH2IXjlRhde6IfKJYsLpZlMyJPp3NiTLKVjpcGU+UNmy9jchGF14ZC9iEKF17kL2K25Rc2Utt7iqZc2XMlt9Fcwi5zJcympt9NWxlFzkubZS23HS5gluPsXNlLbfTJPLBhduULlCkkkkw2YIRBJJJPKEQjHgxJJJJPL9iEjEkkkk8pJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ5z0R9ft0ZcFtGglepbPmX4Rq101PCjk20XeS5eR1qJE0y5eS9Fy2Lk3uJp7MlMlNxP0U8+Hh6iNepup52ZLaN0dhqYHT4LcljyQ02WPJayNy3CKZmSGilPH2ML6Dv0addlSZxGlMV05kwuxsbcpRKJUkolcpSJTRK5YXKYRKJRuTylEpkolHclEqPY9RpWzyxy3MsgyQyJMwbIhsjJlshmVHKGyMmUzudiHApRBGTdkZIaO3t7MltkqSSUSb/Uvq3RsYZCMQQjC+m35v9C26aq0ti9l7L2XsvZey9l7L2XsvZey9l7L2XsvZey9l7L2XsvZey9l7L2XsvZTWnvzhD25VYT/QN0ub25VZT+v3Nkub251US8FjLGWMsZYyxljLGWMsZYyxljLGWMsZYyxljLGWMsZYyxljLGWMsZYymhJ9O3/hWxv+gbdG/KS5eTf9Ae3LCRVU2+VNTTNyqUXQ0XIuRcTCkukucFyLsolIuJUDcEvBLRL36tkTKkzG5c8GZFze3KuYZppOmfBTppvC7FekqdH7op2RhliRaWpkTA0mkWx3LfuW/ciGNJssTMJDSZb4Zbnctz1bkYLcEfcj7m3N7ct0OU+VzRRVKMwbEmCSWS0dmSb/AEr25wmWJFkvAkkjchMj7kctmYNp5bfSvb9Fe36K9udVSpWXB83ozFyE01hzzn617cm4TOK4nW47iPR09hfB0lvk4P1uGqtrePub/uOcGU/JLbLsGcF2ES5FlT9C9icE5MNc3ty1ZdD/AAz4RUqOKqpq3OxrcLxL1ZmUUSqV+DDRCRC3IwQkQvBCTML6HchIw+3Rcy5l0zg1vhVOpq+rQ4/AtDVj++SISLmi9lzLmXMuZLRc2Sy9lzLmXMuZc2XNFzLmXMvLy8uZcy5ksllzLmXMufTlMy3179Xfq2O/V3Mv2e4sdPYyZXubnfqzJlexsYMG/TjqwSjHVg36NuWDf2MGDb2tzb2IRt+uSiUY8kolEolEon7kolEolfU2otRai1FqLUWotRai1FqLUWr3Nj//xABQEAACAQMBAwcHBwkFBgYDAQABAgMABBESEyExBRAiMjRBURQwM2FxkaIgI0JQUoGTFUBgYnKSobHRJENzgsEGU3B0svFEY3WgwuElNYDw/9oACAEBAAY/Ai8hPqHh+hJCnUpHA93/AAg1LGxXx08+vQ2jxxXRBNdRvd9Tt5NGz6eOKwePNuFbxz64o+h4scZrgn71cE/erGB76+cGPzKCOXqM2+jDCoWNDpEenrVA0oKwS73C1ptwfJl6WDWxbT5Kz7PRiriGyIVGOrhVxeXrAr1Y1xjJ+pWaCFpFXiRUz3GrKtgb6vF8JMVP+2aJbeaDgLAh+3RfCzqPscaGnjSA95rduCrTz3F/JbuW+bROCj10s0jiZ8dEr9I06zsSSuceFSUVbj+YxhHEbatzHupYvJ4nk4C4C1a28sumOJdLvWiKXXC3RD0MxnZLLq192KZLffltGaisbf0VuMf5vqSWS4TU4YjOeG6rn/FP8qvP8U1f/wCLU37ZrNLb3N4YAo3BNxejDa3jTal6r79FEscmlbwNAqcq61c2a2RnEhOlxw++rNDcbJ4Ol1c76ZncsB9PHGn9e6izcfzLZpcSBfbWebZm4k0eGa1QuUbxFEsck9/1IVildFbiAeNFYZXjDcQDREMrpq44PGjsZXTVxwePOCu40SxyT38+iCYhfCvTfDXpvhre/wDCsyNn/hF1T8vhXVPurqt7q6je6uo3urqt7q6re6uq3urqt7q6re6uo3urqt7q6re6uo3urqN7q6je6uq3urqt7q6re6uq3urqt7q6re6uq3urqt7q6re6uq3urqt7q6re6uq3urqN7q6je6uq3urqt7q6re6uq3urqt7q6re6uq3urqn3VwPy+qfl7t9cCPN5bcldBcc2HUGtSb1/lz7tw8a4ZPifqnpKK1LvTn8F8a6I+/mw4BrVFv8AV8jM37tdEY5uGD41hvf5gLWBu5tWzbHjjnwOqd4oKOJoKObayOsEX2mom0uUnI7qIYYI+pyDRXupVHfQVe7mEpl0auA00yHipxzal4NzbVu7hWmJS59VegavQNRaSFgtFTWD8uQ/dzJJLGDkZJNbRLU+T+OaeWONR0NQI5kPrxQ5o0P0mArZcEi3KKV4zhlqKUDBljyeePyaBHg051lNWaxbLs1Iyc91GSGVZlXrY7qQvPHGz9UVMpZUMXWzT6Jk2ScZO6rY6lmid8ZFSiOaMyDJ2Y/Pkb7qJ8Bzw+yrnp6Ar+FbNm1bs5onw5k9lSeR6PXqrjDXGGm17HTjfzN7/lyL9/MkeesmK8n8ny2NIfPRpo850xnfzIvroevmDDcRvoTW7KtxjDoaD3zpFGPXxpZhvhxgY7ucNYSF4zvyD/OpkXZ6pItP6papdpDBAG6PrNRG2hiaIgFpX31yp7BUsCek1agPGrUzEKxfqeFH2t+fIv30R4jmaXbZYLnGmoavv8Sv8lH18yH1VckDWQM4HfX/AOvl99NtLdoMfa76k/Z5m9W75YbuoEbxWEkZR6jXpn/eNYeR2HrbmJHVG4UGHdQZefpMTTwOolQ7hnu+p8ndRbu7qDDupXSjHscMy4J1UImi16e/NTM0eoSHJ38K2mnTuxitK9VeYxN91aoWKN6q9O1enaiskzFTRY0SfMaX3p/KsowPNmRgK0Rbk/nz7t48K3Ng+B+qem4FaU3J/Pn8V8K6DfdzZYgCisPv591BZ9x+1WVOebect4Cstw8PN9dvf8vcTXXb311299ekb316RvfXpG99ekb311299ekb316RvfXpG99ddvfXpG99ekb316RvfXpG99ekb316RvfXpG99ekb316RvfXpG99ekb316RvfXpG99ekb316RvfXpG99ekb316RvfXpG99ekb316RvfXpG99ekb316RvfXpG99ekb311299byT8vrsPvrefldE4rexP3/+3rthdG6Mk0IkymnAzUawvto5kDxHHEGg1zBJEp72WmfYSaFXUTjgKM0VvI8X2gtaLeNpX8FFbOeNo5PskU7+TS6U6x08K0W0bSv4KKgtbtHhMjqpBG/fUsa7wrleZUTixxULW8hlRsq58HHEVa3YJ1yuykeyr24YnVAF0+vJq0e7N1tLiLX83pwKjubSXb20m4EjBU+B+ubDy5LhpPJUxs2AGN9GTRsVt7Vlt1XpFcf61eos97dbSPg8e4N3NVjCHYR+SIdOatEE9xyfeoixounKHwq50HExvCk7L7KspLklpFu9MRPEru/1pV2raNuExndpq9kku3tbTyjZ6Y1yWNf7PPEZXG3wGl6xGoVdf4rVD5KjowX5zUeLUbm4OmG1XaMfA91X0EV6LqbPlKjZlfbVky71Sdw3qrlRzuVtCg+JzXJP/K/60Fm3Ge41ID4AcfrmPbHOzTQvspZYWKSLvBFNG7Kiv19CBdXtpDMc6E0Lu7qVQ6kqMK5QFh99O0T52nXDDUGqOSZvR9QAYAryzV8/r15x31LoKssp1OrrqBNQPLJkwNqj3cKZ36zHJ5pIEOI5CCw8cUJbc6XFN5O+FfrKRkH7qVZ3GheCKNIFRxKyaYxhcxg4raXUhkf1/wDADEKNI3gozVrLBZt5Zu2mB0qKupVh3Hn0xqXbwFZ8jnx+xWmRSjeBHMdlG0n7IzXZ5v3DXZ5f3DXZ5v3DQ2sbx5+0uObAGTWpbOfH7FaZkaM+DDH1w0k+RbR9b9b1VogjSGMeFK21XS3VOeNaLuMP6+8UYWOpDvRvEUsCnC8XbwFaLaMRr3nx9tbPyyHX4aqKXUYkHj3imgJ1JxRvEVebaREzpxqbHjXaYfxBXaYfxBQaNg6nvFWXtao4IBl5DgUNKh5vpSGtEs8SP4F6MdzGsiGtK9KB98bf6fW8RXvZiagEWrYavncfwrk/2r/rQgvUlmZT0WB7qg2MLxtHne1XLXhIZ8BcLRgsHbU56W7HR5k2pzpcqp9VWR+l0ueK3hHSkbFRwxDCRrinZD81H0Eq4u2+h0FpmhOJpOgh8KJjjkmbvIBNG2vrWVxnoaujili8maJlbUG1Z+tza3hxA7ZDfZNZQrLGw9oNC1kXREu9Qm7FF+Tptrj6D8aZJVKOu4g93OIoRhfpv9mlij6MMS8TRkT0KDTH/Xnkv5Rx6EdMiH56foL6vHmJ+1Kx/lVr5Qf7PDlmXxoW63EMendpXgKw4SeFx7QaV4OzS9X9U+H1uGS0mKnv0caKo81q/wBnhVlesBPJJgPq7628IK78Op7jUN4gw+dDevm0x9GEdeTwrZwgRxrvYnv9Zo2tkcWv0j9v/wCueK3i60jY9lRwxbkjXFOyn5qPoR8zL3pMf9KIiODK2jPNc2zHKL019VSMeKMpHMFQZY7qiguY45LqQa21LmpbSEBA82nd3VDbQWglkYZNflOwjEUqrqwO/wAfrGHB6cPQcULi1cJOq6SDwarOxQLtoyNWW4Vsde0dm1OagtQemW1keqiurRCm+Q0sFsuiNa2FoEjte/p73rhF+/SyXYTSx09FuZ7+Ub26EVMiH56foL6vHne2lOFuOr+1Uls5053qfA1oEGv9YHdTbUhp5Ovju9VR2SnpyNqb1DmblGcZSHqDxNTXNzBJFFsysepeAovLGyo7toJHHdXq2S4q5MnV+c+sdran9pTwNf2tHgb94Ul5JIdhJ1TjjRXk+FpH+0+4U09y2uRu+rnyzV85jGkZr++/cr+9/cr++/cqKO016lfV0loazhe81HBEJgiDHUoyrkQqNMYPOCDvFCLlJDIB/eLxrO2YerRRXk6IyP8AafcBTTXDa5G4mrn8o9r36fHhuxQt7cRlM56Qpl5UeGGLTnPCkeFkaO2l1RFe+opLyfyeZO7OCK/JnI51qRpLDuH1nDye6IIouBHH/jDhB99dP5w+utyKPurh5ngK3xqfurMPQPhRVxg/XQVeJoInn/1xw+unfw3c8cIONXf4Vsw2tSNSt40SqkjxxWBvrDqVPrrUFbT44okDdWcHHjR6DbuO7hT7P6K6q06Tq8MVhgQfXzt4Hf8AXMn7XPdXBdY92zRm8ahIlSVoDpYofomooLVtEaIulR9KuULnZiO4Ubhjq5pIrkbSPaj5w91C3i3RKwUR9xFcsJF1Rj+dSf8AMCoo430x5TI8c1yjHESqBHbAq4E8rxSS4+fAzioHlmW4TGEkHf7edf2Prlk+1zpb7tmpz99TImNMo0tmkXTHJo6jMuSKaZWy7dbPfQj0pHHx0oMUOjG0ijAkKdIU0iHJfr6u+jEwQR6s4C4xS3DY1jH8Ka5XGtuPgakwkZSTe0ZXo0uvCqvVVRgDncjhw+uQy8RWR1u8efKIemf4fXYaM4NYmXB8RXpMV6Va9Kvvr0qe+vSr769Knvr0q++vSr769Knvr0i++vSrXXz7KxAuPWay28/+3u0xjJrMx1nwroRqPureqn7q3DQfVWesnj5zSgyazcHPqFdGNa6o91dTSfEVqTpp5zArM5x6hXRjFdUe6t6AeytUJ1jw7/O6pToWtyA+2uqPdXSjFarc59RrBGD+YBF4mtKe/wAfk4IrUno24erzQVd5Nfr95+VtYh0e8eHmw7j5w/w+UZYh0h1h5sTSjf8ARHytSekH8fzAyHi3OAK0XCFG44POyHvog+ZaU924c2EBb2VhgRzeVRrqjB7uPMVbgaZD3eZ1Hgm/nCxqWY9wraaAf1M76IYYbw52UcOI8yq93E+Y1jg/n41/V5sCo/mn64+jUZRGb5vuFdNSvtHPJ7/Mp69/MzwhTqGOlTx8o2ytu3EV+UOUF1Z6iUZNIjbOBEKkk0hNRzpHdzA+K+ZZvFuaNZ20Rk9I+FIVZIg/BjxahM0q7I/Sp53ZSicZF7qYIcrnjzRt93mZG9WOdZZI2WNuDU0yRsYl4tij5PG0mOOKweYN4N59D+rzJNHjUhzvpFKRb2xSxwqhUpnpVHtgo0fZ55PMx86jSRFnptS2VjvS3X+NGXqzf7s0VcYYd3Mg8E8yR4Nz8nf4f9Ktv2/61f8A7X9OeIeZl51tjEF4ZbPHFG0EYPEBs1IFjEgf108jcWOeb/N58DvTdzq32Tmlk2ezwunGeck8BTN4nzLR9438zOkayahjfRRAsI/V41rgco/iKxINpdZO/uppJTl23nmdu7h5loz9LfzJtepq6XspVmGsJ1cpwoQMvzQ+joqS3jBWN+ICc+kcE3eZAPBt3mEjHtPn8nqHjWRw+VsU/wA3mg4oOh3H5WhT02/h5oOvEUGX3fKJ+kerWT5ndX644/KLtRduJ/MNLdJP5VmNs8+WOBWm3/e85u3p4V0G3+HPmisPTbx8KLNvPm9Se7xrjpbwPyCF6b+AovId/m9SHBoB/m3+RvOW+yKy/u/MsjdXpDXXxXzjFvP9GQ11/wCFfOOW8/0JDXX/AIV05CfP9CQiuv8AwrpSH9GsOP8A8lLE08f7K91GO1UHAyxJwFHrqee4VWmE6hJEfUCtWrzqmiRlOzL9Mr7Ku4YBpjSTCigAItTpqQGQZf2U9w6piPfIgcal9ooTJso42OEMkmnV7KntljxPCNTqaW4k2bwk4LRvqwaR1EYaQao42kAdh6hTXZHzay7NvENVtPKAEuBlN+/zF67L/aw+mFs9+nOKAut1vENUtXlrycgEcLfSbco9Zq3iOzbyg4jdXyp++prZABJCGL6jwxQmXZRxscIZZNOr2U8NwpSRNxB81BBdLribOR91eReRNZSO2mOVZdW/11PAgUeTnEjs2lV++ra3uiipNvEgfosPUaNnZFZsk6MPkgevwoTvs5odWnXE+oA+FX63NokBisNoio+RnHGo5V2UYl9GJJApf2U0co0upwR5q0ilGUklVWH31/Y+zSjMf8iKtpdP9tLjaHwyM4rViPaadWx2g149lGeLQsSvoYu+NNM6mFIw+gO8mkMfVTQ3KaJF4jzsFuvGRwtK62sha3+ZWQS9HSN3DFcucl27ATTaWg/XXjip4rvGvypW2WerVvynbupsndGEurcvqq+/xTXIu/8AuYf5V/tJv/uZf+quTH5MAlEMOzkQHqNXKWykDmLkzZtIO9gK5Tz3TRVBe8n8nW9xEQrLO0hGjHjv7q5VsJTGPLekujq618KMMR+ZtVEKf5fMPPH1o79G/hUXkTAnlS4SX9lN2731/tDYwEC5mlVkH2wO6o7a6Oi8N1tkjzvQAVc8pQkbTlVFXA7vt1yc1lyfDf7KLZvqcgxn305mEQdVCfNNkbvNW3+b/pNJecq6LW2hk2mWfecHO6uVEit47meW52whdsalrkqC6treyRJ9oI0ckrv76vDeKSsweW3RXxtvVmrtZLOOxO3Q7NWyfvrlP/0kf9NWKXVjFfWuMLMkmloh6zU8dtJtYlfCv4+asP8AHX+dXlveuFFjdNcDPemektPeT7weVA+PVihyrrXyDXtvKNW7T4f6VePFuSTlHP8ACuTxZ2EV+0AKyIz4ZTmlWdYUeKJUxE2oD8xxnd8jccc+M08iWyyXX93KW6n3Vk8T5vJ4824+d3c+/fzbjjz2M7ubdu/4Rbz+gO7f5j1/oHkfKH6CH5Q+QEhXUa1XTbQ+4CtI2P3LmtPzJ+7FNLatpx9E1hhg/KwwwfXzZwcePmtWDp8fq8c4VRljuos/H6Z8TXTOlO5RzhGYtF9nNak63yNtZIGl8pI6mqoorpVjGsEHZad9TW1zcI1wsWrWE3GpWtr23nuIl1SQrxFSMsy+S+UY2enfmoReX0FrPMMpE3GuVbWQAyi2ZfvqaW0vYLp4RqkjTu5oheX8FrPMMpE3Gmsl07ROu2eiB41LLY3sN7sRmRU4itq91Akhl9MV6v6lXcktxCJMj5wr6Kp9FwjWYutOnRvb15qMXV/BAsiAoW76WwwHlfqEcD66W3i5Qt5LjOHjH0amt2OoxtpzUN/tAVlcpoxwqC+2g0yyaNOOFaLvlC3g1dQt9KjBcYzxBHAj6nHPqPCMZpYB1UGT7aWcvDbxucIZX06vZTQ3K6JFpbVXj2mx2rZOAvtraNcW0m/GI5NRpkPtph9/PtbR9nJ5VjNQrezGUK+RV5/yv/xpv8F6m/5yrW25a5J8qJVVS4iO/TXLUFu5dEtWwfCrz/lX5ra25a5J8qJUKlxEd+muV7CDFwWh+bVj1v1auZLbkNLbTGRI7uy7vvqZLdDIy3WdKj1CuVooVMkmtDpFThhgi8xVn/yaf61yQZjjVZKuT476jeeJkRJdRlPVNXv+KathaIZminbWq7zXJ8c66ZPKMkeFRyQRPMjxKo0jOK5Pgc5mhtgJPqcc9z/l/wBanz40i8sNc7BR82Eq1R9JimCGMr/u65SuJYXmjmVo+geAqW8sIGtXt3CuhfUDmvur7ufYbRtjnVo7s1mmn8ok2zDBfVvIrXbyNE3DK0YNo2xzq0Z3ZrZQ3cqR+AanMUrqZBhyD1qYwSNGWGDjv5tlDdSpH4BqEgYiTOdWd9aLm5kkTwLU3kszxauOk8aL20zxOe9TTRtK5jZ9TLni3jSm4kaRgMAseAqE8pPLLEuF3HeF9VRXL8rz3EELa47cqc1PcYxtHLYpvJZ5IdXHSeNKk0zvHr1YJ76eXkq6kSNo1B07s0XkYsx4k9/1OOfQeEgxSzgdF91RQXVrBeJF6MycVqa8u/SiApCqjctF4grhl0uj8GFC2gt4rS3zqKRfSPrpn+6mP6ADnDKcEb6Kydb6Y8D410+lGeDc+TuStCcf5fI8puwXBOlEBxmneFfJ5U+iWyGoPGnRPDJxmnREOtOstKNnx787qWFk+cbq+ui+y3Df662309rpz6sUHWPcd437zUzcNA3b++mSNcletv4UFmXHePXWiFdRoGVeifpA5pFbqfS31soYFRsdVDml2q4DbgQd1eThPnfs1JgejGX9XMXaPcN538KLRL0R3k4FCEodr4VqkXo8Mg5xWydcP4UySDDLuNB0Tonhk8anJ6LRjhnvpkjXJXrb+FLG64Zur66J2XDuzvptkudPE+FaZl0njUz5xoHR304jXOjrHO4VomXSaCQrqamZ06K79WaDxp0e7J406P0NIOaKP1hQuARnPDPdVu1snWjyxJ762JQ7TONNa5E6I7weFIp4FgKm2MfzYY6RnfWiJdRobVcauBG/NF2j4byM7xXlA46uGe7zY+QHhbS1CFogviecKB99ZPH5EOxGpoGIcD11JM/zaL9r6VW5iBMZiUR4q6/3gtcP7amHdthXI/3/APVWWB3SZdv1aJHU8r/hQItpnfIKFZOPhiuUzo0loz0Pvpw8byYl6YVtNQIlvJGmslGds1cO7PoRN6pxaiYoWiXbfSbOag9tXwKNI2OqpwSKlWG2lSNnHSd+Br8oDrNEE/zf9hUrL/4tww/Z/wC9QGXhqpylpOZhnVmSo5JhLKHc6Y0O4VZGCHpiD0ZPtqeW3EsGjGtGPRNQXzf+HQh/avVos28nfVrHeQSA4xFJGe6uUotW0YR8fGnDxvJiXphGxViiQPEm2yjO2azhtW1zn1VdgwGW0aXipxg1AyM5R0yqvxWr4DedjUYjBwsp2g/lVqsvXyxX9mrxIvTMnRHiO+r3aAonR3H21bk280i7MaGR91SaozE2yI0k5+jWCMGlwM4nP8qsR/5WaXV1jbDT6zpq52VnMOgQ+qThUX7Yo4DatplW9Vco6UaUbXOEbHRpFtraRF2uUZ3zvqfoS2tzpLPv6NHSM4n/APj5sed1RMUbxFAzyNJjxorFKyL4CmwxGrc3ropnoZzirdpSTHE3up0ErbIk9HNaNXQznTWzSZwnhmtcTFW8RRlSRlc94rVM5c+utUTFG8RREsrPnxoMh0sO+g6MVbxFDbyM+PGtnqOjOdNKHYkLuX1c2zeZynhmiIZWQHwpWaRiy9U+FATys4Hca8nt2Zi7apCd33c2iKZ1XwzWuNyr/aoyJIyue+oprh2fS4OTUoimcQsx6NEwSMhPhWuVi7eJoPExRvEUXjlZXbifGtUrF28TWZi6eDJ9GpUWeS5klx0mGMCtMMrIvgDWsMQ/HVReUlmPeaYRuVVuI8aUOSdIwPVQZmOR31olmZ18CaBHEUy7Z9LcRmtUTFG8RQM0jOR41s3mcp4ZphE5QNuOO/zY8+u3Qpq4ZomKN3HqFYkUofWPkhsHSe/60HnUmu9bbQ9BF3VaSLqkhlPQ8Qak2YYdM6tRzUotdWvbDq+ytF+fntp82G6wpYZ1nZz1nXgtXQz89A3vWrVQfnpyfuWjbwGUScEc8GNWcb7s3BB/hXk5zo1kVc7SNjh11YP1kPOxRSyiGSHOCw3EVZxxtmKBsl/HfvqVlPRLk1JFqxIZdWPVUe0b+0QnA/WWhML97cfTj37vZTGRmMMmVctxxSTRDMUXRUfq15StxtAvSSPG/wC+rffmRJi5FeV+UZDHOnTw9tXMEsmz1kMrY8PrIfoUP0KH6FD5OLOBpPX3CsySwR/ea7Vb/FXarf4q7Vb/ABV2q3+Ku1W/xV2q3+Ku1W/xV2q3+Ku1W/xV2q3+Ku1W/wAVdqt/irtVv8Vdqt/irtVv8Vdqt/irtVv8Vdqt/irtVv8AFXarf4q7Vb/FXarf4q7Vb/FXarf4q7Vb/FXarf4q7Vb/ABV2q3+Ku1W/xV2q3+Ku1W/xV2q3+Ku1W/xV2q3+Ku1W/wAVdqt/irtVv8Vdqt/irtVv8Vdqt/irtVv8Vdqt/irtVv8AFXarf4q7Vb/FXarf4q7Vb/FXarf4q7Vb/FXarf4q7Vb/ABV2q3+Ku1W/xV2q3+Ku1W/xV2q3+Kspsp/2Wox3MbROPosPND5Aur8EW30V+3QSFAijuA+u9ldxhx494rQenC3o38yOeG3+iTlz6qWOMaUUYA+vZbdutjKHwamVuIOPMDnu5e9EC+//ALfmzcmWtw1rbwIHnePrHPdUPktzLeWUm6VJmyU9YqS2tbWe9ki9Lsh1a/KSBni1aSveDQjmtLqLaD5klPSeyriKW3mtp4E1mOQbytLcxWV09t/eSBdyVyE1pK2xnm36T1hipLe1tZ714vS7IdWnvuS1ds7s49H7aS85QilhbcukjfIfVSW1zaz2c0gzGJR1qkmmOI411Mag12VzDDcHEUrLuNG1t7We9mQZdYh1amvOTUk1jKndviPrFQ3l7bTJllTBx0s99WkcisxuZdmuO6rmzhtbi4uIfoxjjTSQhkZG0ujjep/Nr1F4a9Xv3+YHPeRd7Ip93/f82lv5o2NjdRhXkUZ2bDxqCHkdNtBxnmZSAo9XrrlOHlUmPazmaN8dcGuULh0Ma3V6JY0PcuRXIH+Mf+mrr/03+tLazqwuDEypHp9Jnwr/AGWhn3Osu8eG6uUI+U7+6sdpLtI2j6rr/WuUfIVuW2+qT54dJuG/+Fcm3Fo0jJZSpt9mOkuBvqz2F9fcoPE2sZ6qe3dVxtomnj2Z1IvFhVlHyBfT3IdwrWcq50L7e6uUPyle3Nglw4kiePgw91crPYC6k8oy2Zh0n9YqN7LMvk7R7QAb+jxrkU2et0W6Us2ncPVXLD3mUjYoNpjhu4VypyiilLe4kGyyOtjv/Nr1l3jXp927zA54Z/oZw/soMhyp3g/m24VvAPPInDUpFQWrMJDEOtp5t4zz7hjmzit4z8i/uncOLrT0NPDH5tNcP9EdEeJpnfezHJ8wPkCz5Qb5n+7f7NBo2DKe8fXZmupAiCt3Qt06if6+ZHyf7JOVX7B3ivnbWKQ+IOK7DH+LXYY/xa7DH+LXYY/xa7DH+LXYY/xa7DH+LXYY/wAWuwx/i12GP8Wuwx/i12GP8Wuwx/i12GP8Wuwx/i12GP8AFrsMf4tdhj/FrsMf4tdhj/FrsMf4tdhj/FrsMf4tdhj/ABa7DH+LXYY/xa7DH+LXYY/xa7DH+LXYY/xa7DH+LXYY/wAWuwx/i12GP8Wuwx/i12GP8Wuwx/i12GP8Wuwx/i12GP8AFrsMf4tdhj/FrsMf4tdhj/FrsMf4tdhj/FrsMf4tdhj/ABa7DH+LXYY/xa7DH+LXYY/xa7DH+LXYY/xa7DH+LXYY/wAT/wCqxBHFB6+tW0u5Wlb9b5B/RHfwrd+gO/zXGuNca41xrjXGuNca41xrjXGuNca41xrjXGuNca41xrjXGuNca41xrjXGuNca41xrjXGuNca41xrjXGuNca41xrjXGuNca41xrjXGuNca41xrjXGuNca4/wDB7h+gPhWD8vH6B5+UPkhIkZ3P0VFbrRl/aOKy9o5H6u+irgg+B+vD8ofI1MTFar1n8fUK0WcQQd57zzkXMY19zjiK2cvTjbqSePyHvo1Bt03Mc80JvFC7UZXf5oDxowXQAkxncajgg9JIcLTxSbnQ6TzwXTgbGbIQ55/LtabPXo06t/yUkCxBXGoZkoWsoXa7uqc8awRCD/iijaQptJwcYFGZ1SSNeuY31afbTC1TIXrMThRS+VINL9V1OVPnvmV+bU9NzuAosRrt9elZAc1tk2ccWcBpH06vZRhuU0OP40kgEaa+orvpLeyhZ6MTl9Ok0dUltu/89fMjnhtouLtjPhUcEAxGgwPkyW8vf1T4GnjkGHQ6TzxJcDMNxdGJ/wDNTw3PorQmSQ/qrXImjom51fdvFfk9rEyIG2b3G06WfGuUrW9+cihgLo3h66u4razNpNDEZEfXq1Y8aF/PZycoSStpjiXgB4mrXlLyJ7SPbaLi3f8AmKSzjH9mch/8nGp/I0EcOvCAUxeyl5Qu9W6MdUD7q5NktoGsnu32bwtv01+T/I2bQQr3OveG9lbBziPZqXI8AKt4bWzNuUk+bl151e2uVru5jeeK3kPzScXarqZOTZOTZ7ddYznDirVr218tublNeC+kKtclm0yIS7FQe71VFDfIHjm6HsPdV6OUF1W9kjM48aN4IwsxutOfBfCoIrXkie9RsCSdsj3VNbxElF3rmp7qJQYYOuc1FeuAIJGwpzVuZeUWTEKxqEj3D21bx3jjZLIj7TuK541Ns+Uj5TO/Q+a6Hsq7gTCSEGJ938qvb67OlLiIxRRn6Z8as0j3eUSs0nrrlOKTeIHV09XnGxcQQ6f96+nNNNHPaoqwr83qwxwvhUfJ9xN5NItwJUYjot6jV4QQ1lcS5YodQ499Wloo2hQaIlArkzk/XtfJwsUj+JzUv5Q5QaKcthFRNSxD6OajflibOy37XHHo9GpByffNJeb2CPFpD+ysHzA57iY/3cePfXlNs0bx6sFWThVlJZhWnusaVO+lsX2ehY9Upx3431I3JUUIijPBjvqDQqtdS9386SaXGvOGxU2nhIobnW3Eg2/lOvT6q1QkflC6RY5/YtcgvA4kktcl18K/KH5SSO3Z9o8RHT9lcrXMrCFJbZo4tXf4VeG4kEeu2ZVz3mksDenk64hfKSZ3MKSH8py385OXw3QFDlFu1xxG0Q80dra8oJybcI5Murdr++uSvJrryuW2n1OTxNflIcoKsTHW8Onp58KF5G21tigRivsqK7/KUcsWvKIBvHtrla3e4MEV0+qO4T6JqYT8tyXkzbo0ic6fvqz2t4lndWybNhJ9Ja5PtrGba7Fjnx9tKy7mU5FO1m48qvtPlAHdgUtuXBm8r17P9Wo7iLlgQWIC/wBnXIYerFTS2ziSMhekPZTKrEK3Fc8aVCxKA5053VHPbXyWUePnInGSPZUD7MyWUCrHjgWUUl6nKSeTI+0WHT0/ZU93ynIIIM6gjfSozSctW2FGI4wh6I8K/Jt7OLaSN9cMjcPZT8nWVwLuad9Usi9UerzomdQh0KuB6qhV5ha3scudT9WQeFcqQLcC4nvJOovCPf8Azr+zcoW8N9OPnHfPQX7IqGSC8hujq1fN91G+HKEVukvSljfrL7KV7hWNiEEQ8cAdavLjyhFciLJijjG9j66ZzxY58wOe+j72VT7s/wBauou8puq3af0VjHurle/l3xwjG72//VQyf7PNKJ2beoG6nuLSDykW40YzV5bSDSyPnT4VgfQiUeaVtIbBzg99RxbOOCCPqxxDA+psjdRLHJPnhzwyufmm6L+w83zaBPYKOlFGeO7jRKRpH44GKlt+RmFnZRnDzqN7V2658o46te+tpdSm5R+E39efIRiPZWWVh7Rz7x8nVpOnxxzdBS3s5tRUhfHH1gPkJY8oPpI3RSH+XPevHubZ4zVs8MLznRqKx8Tmhc/k+5z5Pp2enpceNXTzQPAdBbTJxGOe3i2rbPV1c0YZJm0Ak7+6pPI3k2iDVhx1hUT3jvqk3qqDgKsk2g0bIdP7zUvkjS6o11ZYbmq3aIlhMvxU0aEtp3E+uk2nU1DNbJQ2x1Y0/R0VdxurEg4jx3VapbsYy67R2HfVhK4yZEJcfa01NmeO46J1wZ4VFExwGOKa3imfyjuOOiTXlFy7j5zTpWo9pLKVmGUwOA9dSRE50nGfqsfJCK+2i+xJ/Wvn7Jwf1HzU1ulkxWRdPSkpbC7cJInoye8V+UNp/c7PRimsLRw8j+kKnqjngeQ6VDcacyejfUpPqNSS+UJK2krGqevxqA7dIXiXQwfvFWXS2kMcek1ceUXqSaomCIvCpNtv8mO1Sp5mbGjpH10M7xQIvj5IN+yz0vZVw88ZZ5Opv6tQq0ywyw9Hp/SFWoiJeKBdOrxzxo3PlKygdRV4mrf9ujc+UKUQllT6RPhQXPzm3Laas9LZ0xAN6qmeM6lJ4/VY8zs9vLo+zrPmhANKp6hx9tNGD0Wxn5ayJ1l30T4/Vw/QofoUP0KH6FD9Ch8naTYtYfGTj7qxPfSyH9UYr+z8oSRn9dc1tCong/3kf6BD5C8ocorqmbfFGfo1mU4XwroKT7K+cTHtr5ht3eh4GjyhyemhP72P7Pr+RLe8oymGziOOjxY+ApoOS3ntrrGUWXeHqXELnZHS+B1aVrmCSIHgWXFcmSWiu890G1Dj7q2Wk7TOnT35rYbJ9t9jG+gLqB4c/aXGatU5OillMlssj/SwTRSVSjjuNbWS1mWP7RSrtpLaaSUY0Sr1U9tKEtpWLjUuE4iikyGNx9Fh9R3Fzesy21sAX0cTnuplhLWlwturprPRfo8PbUHl1xvnbTHDHx9pp7ZG0RqzFnPcopoLczW0mDomlfot7fMjniRxmNOm9H7K7q1S+iT+NARqFFYYZroHC00B6evc1XFv9h93s57fZcI7g7SrMRjeJM/dX+01xbYyHGk1ywl7I0+zCshffiv9np4+tHqb+VflL/wmw8rzXLPKkfa2cDV9kGprW4zcxMc6n6RSuTY7WVoR5KrHScZrkaS1VTdy26tluHtNFbnljyyR9QeBUOiuXgOAlX+dcjpaytFqgySvE1yTcyellg6Z8fqOSd72KOJuhLDJCzKR66VLe62F5sVbAGV0geHsq0eLlWKZ1fcgiIzXKBN8k+uN9cYQjA76Nm9xZyJICI1ityrL99SRRTCdF+mBjPmBz3794RR/OjUfv5i2C2O4Ciq/NJ4d9ZoH7USnncIqywybnjfg1OnJdhDYu4wzqcmr212evyrGWzwxV7bCMOLpQCc8KsLFYd8HRQg9bNQ2F3gXUpxp71SpNKLNDKMSRvwNNaWFpHYwOcvpOS1W5aMR7GIR7jxqwnjjWNrSPZjf1q29nyZDFIeudec1fWuyBF0+onPVqziaMR+TR6M541ZwmIILZNOc8fqOVDGs9vLukjfgaI5MtkhZ4VRpeJAx1RUFyq7QxNnHjRu4Oi+onHt7qkaw5PitLiQYMobOPZ5kc9zCf72PI+6mXwNBe9efXeyrA+M57zWku5T7WimltjqiCBVPy8jdWWJJ9f1t1TXVPuobjzw3EQ3o2ceNJdQTx9IcC4zWRPH+/XSli+5xTGFkJA+1T3/KkgY/RQngKzsBsfav8qE9my+ta4Vwou8qQoO9qXpLIG3hl5o+mr61z0Tw5uFKrtswfpHuoyhwenpx/rzOzzJCF+130NEyzfs91cK25dd5xo+lReSVIV4dKtOQ4xkMtcObhXCuFcKjOoNrXVu7ufhXChI82Hbqxhf51GzTjaPv0heFMqNtFH0h30Ad3rplRtoo+kO+uFcKYjHRGeaM6g2tdW7u516QfUmrd3c3CuHn+qa4H3VwPu/RNIIMbR+Ga6sX79GSSIMo46DnHnMKMmsMMVJJEo0J3nzsghKjQM7++jHKpRx3ebkMZChBnf31JdkhVQ9U8fOMQdCL9LBNNHKMMtbUQ7uOM76IYYI/MbeNJWhZm668RS28PKFxNlNVTi+1yQAbmcd9XawejEpx5oDOKEfJ+m4nPGSh+VIdMi9600PJMLLaxDpnziwyWuth9LxqXZw7HQMmlS3GrR/eebaPT6DcPXQhlsyiH6XhUiwjA4483FjxP86snk3gcffQkRgUIzqqd4epn3/mNn+1URn3LJb6M+G+l8kVRDJu2vep82BVlHKyyh+lwqeF+gmNXQrlZBv0jH8/N6vRw/b/AKVJHDFJIg4Npr51Hjz4jzlyfWKSBrYaWbGR3VlP7xdXm1mnlkXXwVDioUWUyJMcKzd1AeVPo+kPGng1awOB/Mbaa4bTGhyTSy2j7RNnjNPZcttjA0hvEU6xSCVAei/j5oVYTJIDGg6Z8KnnMoETJjVXKm0fTtc6PXx82ltd9FRuV/61IlusTxg7j40iyqqhfDzhhm0xbFeJPWqS4wqyruERbjRmm4nu8PNrBdhuhuDDvqPYAqkfV9tfPITcDuHBqeaU9Jv0an6UUbeUr05Dj6Ncl20bxNJLO42ib/CppLCaVtg4EgkUb894q9j8on1WfSfoDePVUKW0jmCWDb716QHhUU6CZEdtOiYdIHzADAEaG/lVq08kgNxleiBu302zYtKk+yYfyNXDKZZYon2fQHSJqWJ2YhU1qo6zVcJKspAhLYZcEUdGcev5VwbVFaXaLxAqFG3SbP50QLq6VQrmRNsjaA3EMKtVlZledzu8FrbbWbQJNmw0jjVyuXdIcdQdJqcSO6x7Ha8N/sqxdS7wTPjDcc1dCPa6Y+EYxqNMiasfrjB+VbGFVMk4LM7Ln7qdmXycLFrfR34qWS1Lko4GG8DV1rlfTb6eHfVoelJBOpKg/wCtS3EjSCAPoRR1jQVW1oyhkPq+VF+2KnC7htK5RZ2cyxoOmAN3Co2k2xabflV6K+2meQyuQ5UiIZ0+s1M7hzIJcaqLa28n2G11f6e+rBF6P9nLPgbzvqOVBIqscaZBvHnntNI0tIH1VaJEAptpC6t45p47a1S2ErapMMTnFX77Jf7YuDv6tW7bNcRQ7Eqfpr//AI0i29qluq+B1E/f5jaqurcRj7qtV0j+znPt35qeZUB2u/HgaeOWMTRsdWCcb6dmtoyjbtA3YoS7JdIj2ej9WiQMDw+U8GNzsGzTHTrVk0sKtUQJbLCcqc0LiIApHuQUYdO4ybTNTtJErJNjUmal2cKxq8ez0irZVUfMPqB8aldrVSH36dXA+2to4xuxj5QhuIFuI1OUycYp30KNUWyCjgoqWeR10hMaD9I91Xu3CyNJjon6W+oJY41RYNyJUiNbq0Dtq0auB9ta2AXdgAdw+UrcdJzTt5Iqysc6tZq6bQB5Quk+qo1nt1maIYRiaU7BWdW1K2dNXCSxhxM2rwwaitdau7HO76K+HvqHoKRFGY8faFKIoFhA9ec//wAjLFAhkkbgorsp/eFdl+IV2X4hXZfiFdl+IV2X4hXZfiFdl+IV2X4hXZfiFdm+IV2X4hXZfiFdl+IV2X4hXZfiFdl+IV2X4hXZfiFdl+IV2X4hXZfiFdl+IV2X4hXZfiFF2tWwPAj6wS50bQcCK3wXH8P616C4/h/WvQXHuFeguPcP616C49wr0Fx7h/WvQXHuFeguPcK9Bce4V6C49wr0Fx7hXoLj3CvQXHuFeguPcK9Bce4V6C49wr0Fx7h/WvQXH8P616C49w/rXoLj3CvQXHuFeguPcP616C49wr0Fx/D+teguP4f1o7K3mL/rYFO54sc/nDwzqcZ6DdzD9CWbfFCBucjia//EACwQAQACAQIFBAICAwEBAQAAAAEAESEQMSBBUWFxMJHR8YGhQLFQwfBg4XD/2gAIAQEAAT8hfeF38CXLlsV0XLly5cvRcuXLly5cuXLl6Lly5cuXLly5cuXLly5cuXLly5cuXLly5cuXL0uXLly5cuXLly5ctly5dyxzGNiL1uXLly5cuXLly5cuXouXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXouXLluly5cuXLlkvS5ZFly5cuXLly5cuXLly5cuXL0vS5cuXLly5cuXLly5cuXL0XLly9LlyyXpcGXpely5cuXLlkuXLly5cUlkuXoWkvJYly4hYXVdf1UvcJvQswf2zdS5cuXouXLly5ei5cuXLly5cuXLly5cuXLly5cuXLly4bs1sQNTQW5c3ZTxNzZcGpuzNtAfq3nSK0c90Vqs7N3mXLly5cuXLly5cuXLly5c6TwdQLqAGPSYf/YdVelPOX4DTbmuWe8zlU3JLqF5ABDVkojSkYl3ly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXGLRg3C226pWIQeSp+CJ/695QGnbFwmsWbFlDFZts9piSuc225QGyhHwsCqNk7ATISWZUwI52x2b1DV21Q19bthLnEAEtKTyTZrVk6S5cvS5ZLl6XLly5ei4kwCxVuX7hbJBsM63yqVlE565hCqzq1R7wRLtrZb3jdtIbsBliQUNd4uXLl6XLly5cuXLly5cuXLly5cuXLly5cuXLly5ctlI8ezCkr2H9GM/5NoVZf9uL/v5spBhErybMGfXcA7wwql5Sdm5eUFV8w0tjXwMKniHzFbrPME6ukydLSht8QtIZoDPaoNtpoPLM2br2ly5cuXLly5cuXouXLlxZUySg5TpcsVOVbzeec8pYLpX/ANd5j32FrEsYNVO8uXLly5cuXLly5cuXLlkslkslkslkuXL0vS5cuXLl6dHcR4dJy5JHf4hxb2OL/wBZOFLltVvnl0YJFER5+YvV6qesvSkL7MGvef8AMT/qIsXKrfcwUuuxyly5ei5ZLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cvS5cuXouXL0XLly5cuXLly5cuXLly9Fy9Fy5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXouXouXLl6Ll6LvBvOb+WmZGnDLvnLly5cpbJ/Cy35U+6agB9sn3TSn3SfdJ92n2yfZJ92n3b0CEIQhKfZPRIQhCEIT7JPsk++T75Pvk++T7pKd/fSncPIzeXLly5csyKeGNjTh7lQbly5cuB2LdKiOU3cZcvRcuXLlkslz3yucrwdTu+8tjAB1rMBW68XLiQxd1sQejrckoMBUtjwXL1v+FcvhuXL0zN4A3r51Uyzd7kuXLSNDmCxa9WWXW0oBHtKDhG65EslwtaC7aDvADMu0EAAbUVoE2OgwzdQO3ZLlyyXL0XGssbvYIRBQMV00FoWq5XHmtEu7LszL3/gMRdwAH5nITMvV5uijkB/bygHE5JT/bLCibKpE1eLOtfwalSpUqVK4AZgJnuMbzAeoxOap+DmzDkCXN56bjA1vccS0p5WOgiVe0MuA6LFXlzZidt0Nif8Z8z/AJz5g8tu4a9pzANno8oFgpFvyS5cuXLlwG3cofnOh3nT9wzpJiu061LTQgqdtBebF7iDY5Cy4aShB7LHpwgPiWRgIxNIAq562IYoFtc3lFzBgeCGW5aZxhr2w4UlubHbPeURn8PWZSBListit7hinwDn4ZYAbYKL2vrrcuX6Ny5cuX6F8FeLOVDc59eXGv7L+2UzfL3dZsSQKcvEHqET30Gqb2fzDd7dYvapUNSuF5NA5VN/9TAyhr3EuXLly5c8w0DsY02FFaQTj8QwrDLixZ/B0AtZU/gJkzsQ8w2iC2QeRsYStXHnEBHmVfMfp8vQFLlNV9AwEWBXteXhioldhVvQFj4+GVOsZj5/2S4IVtaqb0vSc2idb3YagDPn83Npf8K+O9QPzKAhi+vI3AoDmlfmUwWXpV5n6b/bP+3zNjx/tlD5sD3uXCKzVXyRU8Qb27af8D4jBwyrfCLsRX7S9oVPo9hLly5cuWTmPsQ6MDMQwm1TsxZQ/Tpc2adxG/xcsMrVbvQICCx/AbsQGlieSK3h37PM0FGxpNkaZVfklYUcMuv6ONbcg4dzS1pW6lpgcO+mZlz/ADgsKBnpRKe7R2I+/mP45kyBCCeTlKzyCf8AxLjFagS7XlFxscUhndNBbp1YQPdtvdlwkihV8+ZMHIzblPqCfQEwJkTB/U3xgwdXpEyBVvyyyXpcuXLmArmO5mF1X40Vdi3v+Ip8kxZLloNu/UQEhzFqXe2R/wAHfBkgWWOQ2+xL0ut18tLlbC9zb9wEhbumtEXdpqcgaZe8t3ZZEibESnxEYA25HzKAg7IiaLMZslzaMNhyJcuXLly5ely0pGpgwJ0tEu+Xqy5cuXoDsvCkr2H8tXr+3x/+jn2uff59hn2ufb9H/e597n3ufY59zn2OfY59zn3Ofc59zn3Ofa59xn3vRf3ufe59vn2+fe59rn2ufe597n3uX/Oj+wysuXpcuXzgJjtBRS7HqtsvS5cuJWi6jUBryyZcu5ei5cuXGXLly9bl63pely5euZfp3Lly+C5cuZmZbLeO5el6XoaXLly9Lly9bly5ZpfBZLJejrcuXLly5fDZLly5cuXLly5cuXL1rjuXpcuXL4rlyyXrZpcuWS5cubS5cslkuXLJZLJet8Vy5elkuXLly5fBcvS9a0vXbivS5ZL1slkvS9Lly9Lly7l6XLZc3ly9LlyyXL0vW5cuXLly5ety9bly5cuXw3pcvivW5cuXLl8O8uXL0vS5cuXLlul6Xpel63pcuXL47ly5cvTPHmZ47ly9L4rl63Ll63pcuXL0uEvS5csJcvW9Lly+O5cuXwXLly5cuXLly5cuXL1uXLly5ety5cuXwXLluly5fBehwXL4rl3rfDcuVNpet1Lly/SvguXLl3618F8Ny70uXpdcN1Ll67aXLly5fDcuXLl8N+vbrcvS+I4b0uXLl63L4bly+C5ety+K5fr3/AuXpelw4Lly9bly9CXLly5ely5cuXL47l8Ny5cuXLl8F+jcuXL1uX6Ny5cvhv0bly5el63xXL9e5ety9Lly/wCTely/WupfBcvguXxXL1uXLly5cuXLly5cuXLly9L4rly+C6ly/QuXL4r1vguXw3wXLly5cv8AkXLly5fpXLl8Fy+C+C5cvXGu+ly/XuXLly5cuXLly5cvW5cuXxXLly/RviuXL0uXL0uXpZL/AMVfoX/Etl8Fy/VuXLl/wrly/QuX6F63pet+lcv1bqXLly5cuXLl6XLly9Lly5cuXLly5cv0rly+K5cvivguXL9DfSyXLl6X61y9bly+Opety/QuXLl8N6V/nbJfHfq3LJcviuXLl8Vy5ety5cuXrcuX6F8F1wXL47l+hfBcv0Lly5cv1r4lg0vAGaeUtkM2jiBXXE2RIoD3mM1Db15wYMG8WjduXXAXMxMqsKpLcqZfpdyN5jBm4aOuImuhIojMsHGF5goOhUWUnVWq08QTCGao2rogOzoKrAY6sB2yGqpi6VtH3k8dy5cvguXx3L1uXrcuX/BvguXLlzvQfVUFY73iAIbl4clgLWt3t1ZeMwVpoCBWxajDVBsHJyuAJ3m0gYZNi5l+Rd0bZ5w6i4WrYCVETmlTfIWbFSwWW2n9E/4PVmIcbt8EeNfSP4HOmBHzsATvW7IItlOpzE3aOxTmEXt/7wpOW9dVp59O+K5fFfp3Wt3rZ6ty9FcmFQGOxHkKLUjFeUOUe4g6WVQKN1t5hbrnz6FZjdGG8obgI1qDFHkEKqxAq/SXoxC7pdQoC+CDeVdCsRN7e3dc6YTrFnydJTtCGBEeVSlbYN/XQWxsWrrUclPdw6XUx64BWx2Oml8N/wAu5fFiX6j/ABrmNbZcvguXpet8d8dy+C9L9c11uL9gZZy9waU3ZN4EgIn4dSj44G1/BKv3xEg5uofZ0sFdvbS/BP8Aiv8AU/77/U/6r/U5ghVlq330CSkcAWr4lgBmMpSHeZX7m/oXLly5cvXPFfBcuXrcvhuX/BygcwwqKKgzSsHNf9y9RaqdLzzYkPI1X8o7kp2CR6YrE6Zod3yRFKX5G/S4hSGKinUZYwCRzu/Fcsf9x/vR2xsFOI/klKY1nN+b8c5aMwplr26QIkbGG/EvDIFg14eUIsnUHv8AhL9a5crjvhuX/J/vI7cBkR22bFGD/g5Qz1AE7SjMcGu1GzyxEw7Yzgu5Qfszw2ImM2zLXaG5r+uNcawF6HN9pXcAcsVMvB+cHL7wH7Sdq8ssQHyBvG/pbNt7wMDtdh6ZINidR8v8FfoXL9TtOG/Px0hTlLIB/TLF6ES82qdnSVe4jJgRqscq1VMKYLB/t6EWwzSGxu333Z/ZRRefyl6bwuL25sxJA9QO7Qfo8ETOcRS0wTJuqBXYsKi/EhgJ1h2HJToarqXrf85ly5fFfBel6l2UQJowoJpbPL0cMzR6iqI22bQNXeaKrls0w+TlLuA72mLb0OrDxjUjKspEcgnJvBoQ9i7A7sCCkHg5xbeu6FDl/LoPJzfFKNKNQ5DdzxKJjO4XJCk9ybCXG+JAHNdiJ2pQeXJwTAUECgc2uxOUh6DWyrlVmfMAAobE663L9C5cuXCX6dy+O5c3m2ly5fEZ4I5yz/5OU+ob55MKh5eADcuizVatTp0ol07soBCHHC8zXIPMI2Sg5+/N6sZRWrbj/RpwViuyZqYnQZTtzZg9F7B3aXKn6Mnkl5LSjdeRiCrvB4Z7uK2dEXmCF0dLXqedTuylroYLJinCoLnGENd0F8AWK9Knc4Npfq3pcv8AgX6eCG6NkwMc34gA9Vl7roqOKo1gfxux7b7V+g7HIibhPbVzvx7s+7Fyq9YSqqJtESgujrUDkMnSRqODAY5td3WlEgj0TnA16VXidSWN3BXEFUaLyq3Yk19p/XYh2gtmvCEkdZVu2ClNRGzc6FD7fMqtTKJHctKSD+ZVDm55r/KuXL/jXKGM52zbd9S5cuX6dy9Ll/wr9e5cuXrcv+LcuXL9S5ety5foX6ty5fqXLly5cuXfD+JXaUzPSfiZl8NS5fp3L4L9Cz+cWrVuuRClO7ge0rvxAgWwPBK4a0oeUV3byDNih7CJEp2Wz8Shs7nbrLv+OcV6X6N+lcuXLly9A/yTlQb9V5vr4mULb/UpFvFOTW5cv1b0uX/AuX/DBUuoPLrkBOaXQ3fwTZD9CqMIrdwk94FUWXAF5gBUMBRfeIkhvYh+YpAirQWr7m0trQtNGreVy/G8m7h17SidDJRyHK6d4PS/QS34iwz3Aj7OpUcCD88Vy5fDfq3L1uXpcuXL/iXEV86f1reFrRoEWt9plCbtkiIqwMPnZzgvB84zZaekUlmTtK5Liy1mmTRtMQlsDkbogvJp70EdOpCHKu+sHawSgTZiyKpm0YorDpF5LZdNoh6oL95trfFcuXpUv1b0qV/AuXxEdAVaqV5NXHVZApVzuCk64LK5Pki5QaDGbF9pnImhsPROkSI7gxfWWfSCqK6wD5qAsPiOUAJrDYo2JVGdgFF7MfiVCXa1YJkp5RDewC2rGIgQTVEHsag2sIfB6dfw7l8dy9b4r9F0KUTyTYkPxPC+kViG3nY7voXwXw3wXL/gXx3L9WrK8yJCfI/qVNDsRINt7s+lT6zPpemfqc+lz6zKfjSj5LnUDoFirM/91HCWOVznS5cviv0b4Ll8O3Det8F/xbvT88FzMr0bl+tfo7/4C+K/8jfAb+jfDZLlyyWSyX6JxXwXL1vW5fDcuXwXLl+tcuXwXpet8F8Ny5ely5cuXL0uX6ly5ety/wCHcuXLl8FejcubyvRrR9G/4d6XL0u+K5fGbaX/AAzW+K6l/wAO5d8Jx3L0uXLl+lcv0Ll8d6XLl8Ny5fBety5cvS5cuX6dy/XzpfBcuXLly5fBcvW9b4bly9b9K5cuXLl6MuXwZl8e2ty5cuXLly+Lf0b1uXLl6XL9K5f8C5cuXwWaXL/h3XFfBfpXLvS5d+lcuXfBcv1Lly5cuXqS5fFcvhuXwXLl63qb+lel8Fy/SuXL4L0v+LtL1eB0vW5ely5el/wDS9Lly+G5cv0r4r4rl8F6WSyVw2S71uXLJcs0s0uWa3Lly5et+hjguXLly5el63L474bl63rz/hY4q470uXrcv0rl3L4b9G9Ll63pdcd63wXLl/wr9C5ety6ly5fDf8K5cuXwXpel6XLly5cuXLl6XLly9Ll6X/BvS5cuWy2Wy5ety5vrcuXLl63xXpX8u9L479PaXLl6XfDfoXrcuXpc3l6XLly5cuXLly5cvW5cuXpcuXrcviuXLJZLly+K5cuXLl63UvhuXLJfBet1w3Ll+hd6XLly9bl6Xpfp3Xp3LuXLly5cuXpcuXLl6VpcuXpcvW5fFcuXLly+O5fDZwXLly5cuXLly+C5v/D7hJ2ICdUjATlYeU2dO4m4vX+MZV2CeoAQrgIAzXWr9zZJ3Qf2x3T9kTqYiUpVu1k/HqJUWrQb3MC/80/bVLf3L/jQHOdRUsuoeRKRRwnp7wwxrBWUlDaHPNlOx/hLfP7FPuRQwX/WYwUDSS5cuXLly5foZFU/UDF56nCitCZssplHkT8nT0iQsUeYA5s/+RKOE1jLa5vSLaDK7SwsXTZ88WNQLA5dZn0LlwrAXsdeJUVHjs6eYlWOEZfoXfEJ7NR4PnUEBaoB1VxLOEA6GvJFtPRNmOApFHjvT/75miBMGQK1+JZG9ER9mb94xvYIrob46aEJZonZIuSXae3o4Jsrd3kavE3AK3MgzdGEjlgW0U2dTSh36TZA/Y0vS9b0svb7BAAAKAwcdHhO06Jv65hch7pegQyKlAXawNohbbxSQANUypdsWBd2GL99LlNMCnuz6OOb3Xvo6oBUXA3ygI6+9LrBTaX1GKqd5y8csO6xYkNMVrbaqm6P6tFuUuUByl87ejTzSe1aUA9KbRzYKKS3YVdwguur4VYMOG3mncgqBKqVYOHTNz6V6N3NgGu7huEG9o+XGhIVFigbBuiBQERyONA5gXs+vV2RH9aBIqAFypqJNOy+YKxToubTkkpR7aAmfKuuNcq/r0bGchPZ0y4C33gIOFolBud7h1id5oobTPAVs6sO8SA1FFIm5GWE5F+/og9Q37GrDuL+oXgf9o9v/pq/KH0dh4dac0bpTZiiocvTBqG1xWZRFbGDZs2DcMSnuuSudFSOor1zW3FeOWqAlojvTtKZW6Lc11QuhVexFd5z6Iv7tPGlKyUXKp3uKA4i2abOXad92H6jhGMQAOTiXbKpVZZtKYzang9EccpTyaFy6jDuz+pSdWCYSyBt2YlRZNoCpGra6405iB7ufo7UB93DvvqXIQ+vc9KQ/wC4IyoKranhuAN7Xd/r0sr9bnUlyA8du3EO1t25PSw6vZHTy79D04tzBoOd/wDyK2RVX0UocEcTMmjA/wC/zwGnJpMHNeUyavb/AAEKc+3PwgAXUXt+JcuIBBurRALOu/wiK3Lz9PnJbuYYHOsOqgk0G97RUf0vlExVcvp2Jxz5BBgdW1fcutLM5iwnITA92WQF+j0xjhhCTmW4fzL9nnpcEcHsmf8A5LVUG3QfwhC2OYzZmDrmf6CKl6U7vrClJhIBVLvmI3p+E/bk+taSmAhyWyX8nsmFK6XR61zYq6XZKjZ7JYjx3Bolrl/8yPfu/wA7k7xIg9WzmnaHZFEkM0mHMsiUlEuXn2l/UrnKKkAFQJeHNi1JCEbz5MepYSt5lt5bXNOsD/8AZgIzM9Jqd89sylzDxjivZbJEDQLkGLrjJXGRzQURkjblYOX5Yh1NtB+pKvqvr+nLMVHjA72427shacrbxYLdGfSrwnNS6bFZW9ocoBCWq0woNZW0ergJyc8tYqzeADk6jLA9RJsywhixVpfvMq5YgOjnHOrO5J6WRfsVY0gQPJzsn6CTKgbdzQp4qWHOV/kfPMUsCFVeb2i/3Bh2qbvFvNyfr1Vrq0dDmxRMlRElQVGfVK0PhjwgOBUVs9LqUPifoK/F5TKMzuAp7XFl1r/MxQpNEqW1vrLh3o4qFGdQCghmFy1RyisJZhlVXui3eXovBQpfe/QfejnepXEC1yVfsZkFLIXLSsp0nQJjONrYAmD7G/ckUfAKwN1QMO9xZEobG69fSz7oIMMbYHCAFrtL0QTvawiZIJg5A03mtXPAgCD+SVrKnU9brFWXoeyBUm6D5INqeU3T0qiO2WEWDuWQ/kSHRVrsmj2IJ8Hi494Jlak6jjCNnNEt1CWMXgJUA2F659W0yS4NbYRxFsqquZzhldS73zLZaTe7qpqX0lpBAIHcHeCV1SjLiY2u8cPaZXr6Fy2WG9m4oS1zu5dywsLKaal+laS4jtUmzcVSray6rdtomasuVblwxEDuDLv0hps3ly05zmDLa8S5uNwzTUu//wAgCqMsVNrxK97Z5PeeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeT3l+1k6CehQLu/8AB0fu4j+RxWSz/Om/C8X705a3NH8Udb5QJWTJcVsgTcL9gZspHax+9ExIm1bE8xxQNx5cC1vLHZjhRbgRz2ZczcS00cPS9LNuGyXpcggaaO/S+svgwb/4TY+H0Ut5IDqrQRg7qPMTYjRyOUmH+2VK7S9PjJJN8QLE3TmcAxnyRgk3KZ9AcN0XAY7SAAEKIqFVmgbl7YiDkhq94ZuUr9NVDtaYLgD/AECJYw3HCDy6TennLgB3zVQ7WmC4RxVsCLe0os1CoZu0ygAyo3EJHtdpyqnzLg4lYJRubXKa7ZpbyD+2WK8WcLtFjbmxs83vUEi8gJtzpj2BCwUc7jwd5utXvcqDpKiLTpdlbXLkhB++qH/A7Hxxg2NAY7X+bgibEQd0ZGQHabgd5b8OS7KSxvncWEYRipaLsQANRR2POiWCNqHhwwCChQeHUc24wDhgGbCgUqDsQsc6/wCkRvvN0Gz0f0S3D4VFgVN6jDB9xSXV9p73+uC6rtLJPRUWy1hqHDtDcC2xN4HeB3MKWBsq0KG5RFE0J2pEoYUOEQIrK7r9rFGyRgpYRgh8KC4L53FUfCvcaDwTNePcrQejMAugjNzEYOLYbbXBrf8AAvgv0nd4nPh/ahsSrn5NUj8S14rECG58ULkp2PEpmlFp/LN0QYnTBahvmrCK01YXYig3LGG17lK103rT5dPyVBUDCJVb3KeYHGBtfSWCEUlKO5AQGrt51V1hUgMNKOnaPcewEPJeYxgS2dIdz86DAww0A6doYOUhAbu73lbv55ImNjekB0HKBSLdFcUm9IMTbBQ2M8i4VokZC7CekCKpHCbFrWJcndhQthLBUMHPYQUMyt35c9Y0w2TcHRjzvVK2edv+B5vE58P7WlwmSli+ptLhQ2a5nySyMNVodyxLiS7DtEoOwDEPGIt+4kNsqo4dlKrUQRzw8GWVRsNHgl67S5cuXpYa3L471vhvW+C9Ll8V8BL1vh5vE68P7WtkJgTkmzKosAByG0YGsYz9dtanEOWbcGYDkd3gtQnlybt8qgpJRatXNKCV0mVqNgsOgpcXKBswlNbMQlgtAorcsaGUT6aWIFobMMWeCosaG7V3U5LS3nIGqlkMUEAHOltljcuiBS7ZcFM5k0qBTG61HQtNwQdbMMsRrVDajnbglGpWgBTcsUglrCIoWHKVYzCkod7tL6zciKIp6WKRjaK3Y5EAd9yLVBgWALVK8uxKCQ0AUdaG5dJcEljytogByQN93s97gmqkQAnYUumbhCButar3uWhEhd0kvpK3AubgKLMm5UgWUsR2Jmfm1AA1duJerJuEs4bMJcp6tuiwbtXaTbGBcgB7tEyCIDmI7NmGGXI7BaJjLgp3mTaJQE7q1LIVBLpEdmzCRIj3QdDfxUpLkIBKXqLeZaRS2AUdBS5mGVlgiChTyUlXxTdIme5Lrou6aqWPntLHNZELri13o2iQsjFzdiIarFgbPWlqAbajuWXBs7hBgO9LaRM8RXkUbtuxC2tugOyyxlCAOAQ60NhLJFlSIVyu+/bh5vEd+H9rgQIO2dzpXMl9DRuW62xy1CqIYtseI4W1vwKlBStBCNG8LvHqiWXYjDfgqWFJjmMZI4KdoX+YxYbX+zErvXLsQCtqMHnVb8RojN1+BCoOLAAbFNSmM8WFEClm8ZrJtsCsLhuEAYhuJk2ELhJIrtAtV0DrA1HNFnDLkKmXl/1LmwGzBzTT+ZeQIIg9qMoykWhb0LSwIFXgALfxaVeBPgXb9zE5iFKSlbMlMwzvRUTdp3lm4NoWhCW0uJZGWQKtBdDY9oMrhH83uuIfbU9VcwAdNmu97c8xspk3OKW1FeffaQrC4bJcJpJ3tLNiszBMEKO16+IgJPXCThsHkwPZRAA1UpDa6KtwjGtKcLbQEwhNVxwj293aDJQKNwRHfEtVmIpaG2mKQLCNgyVTkYnLXgSnUVdxTsBuUjFNmRourOYq1gIOjbFdu4Q0rhl2uADS1gDzpDIwXzPkjWQyA68N7AEEVoV42y2DgdyALAQQryBDeYAtQskMmQS5y2JaLoaDw83iO/D+16tL85iMTACi9ntGrxylFxh1FS8hykBKxB8ihQxxsiG9LtxMAX1lUric1daxdVdTBGmgjDyg4vukTeLzJtqW97hUnMLtCDDwwlNQcUhRKKGIjdOBhuByLhKyzth1rC5ZahRtspSwnjoLYHlpcZAG1sOT1Ipb7RULCOCWLsbKYiXsKtMZA0DuCimbp3dGCXeCKuDyVcFHO+YlMWw053lsNpFQEuKOELJhbg9EyurDtED7uqsFHbpKcy3cFDTZuPHzdVlFdTbyuTWLCVhkKgbYUqqsaNjlBCJ40sjfW48F8pcDfNE0DxAglWt06RoIwLZowF9oQNa3BiIxpBE3syMBCaORSrmVDzZKYFZMKWviYcmWk2ECFCKqjyrh5vEeH9r1gVQWrg3cxuzi6KUhQ05XaejUxH2wYa/PCikkQQmTcubzlf8AjObxHh/a9UE7QSJDC3mUf3yQGgjuIMsnjCbI74CiC6xddMECkKCwQpF60wKLFOmS9kbrmxEpFdYt51ypigB4twLhr8XMkQpiA2oyDyhDEdrChlpt9jmgxFyY4S22tzHeYzX+L5vEeH9r1WzJaF+as2plQvq6WbKuVBiWhhD1HNwYVMZCgy3Emi9ItmT8jASSHUAzhhGAP1XbZQvcmAROoBXumYMnRsRrsJwVP1s/KV71N2Lm8WmbbUTJI0JLS7HUYgLWc/4vm8Tnw/tfxa/x/N4jw/tf+E5vEeH9r/wnN4nPh/a4aNscgr8jRLKHop/RP+L4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4T6D4TuH/ADtHB0cqn2Qm7lhB7Xvwc3iPD+1wb5B/y6QFn4rB/m3bCY5nqPKXJbbRVnR7mvN4jw/tagmyuN65YdMI2ADl/Fs9pf8Ahw0LLoDaYO3M6I505vEeH9rVx7G7W/jET7NS7A8oytD5mKUsYaSduecHAoAVe2TtMvcPboOcR448UNymGAxh3qX1hZStgLcEgBbGmnba7xlRhBzXNLDwgIS0KSPOKl0eKnRGWaI6QC5hzz5d2wbXKyRdNXa1l5IWyB60ZMVaFDB7Qpon5jzY4FQQtK3teUbDiuH5J/GwCIg6UNHN4jw/tai1gT+T/GKa1QNk9jHZxXk0gneG6LmkFgEOVQIfwUUAa5LUOyYPbgUoc39xdj9e8wKMZuDpb9ZNql0r2KUdxwiKsRBDOVDqWJt/zFWWCtyKyWNRc8TmMFAI7QZCb8GdfzsxJfqRdc8LbJLBSqQhWIrDX6nJJ6gaUqF6nlCcsuc3pEEiMFXWPblaqCsYfxUSoHsGjm8R4f2tXdtOF14hXCgGxP4tG7PMHoA7EpsZ1JRtKJSrhLW1lTGf8xc7vnUpKqqji5UCXQEvqsrcc9AIAXdqB4h3JSBwCrlBg/UVddW5Kq3zAoowH8V+i0zVfsERixTqrnTm8R9GFv1D+m9obxbEsf8AM2aBaTF7r0CFqK3N7rrrzeI8P7PCtvXP9Cyn9aGfvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPvnxPtsO7Njcv3Og/1XQ8q2ODDsDxDSMVCbP/AIO1Obtx2KygNyz/AMCBlnoOYqLj0BrbEo2fvO5nfTvp3076d9O+nfTvp3076d9O+nfTvp3076d9O+nfTvp3076d9O+nfTvp3076d9O+nfTvp3076d9O+nfTvp3076d9O+nfTvp3076d9O+nfTvp3076d9O+nfTvp3076d9O+0Fu7/8AK1e0t0fadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfadh9p2H2nYfaW6TPoosYDebd+TmYNv8AP0dwZZIWjpucW8oR5f8AwfeRxGyevCmZMIV/BDCY9KUAdu1/rAgtyCI+H/OC+8PF+5wOHCFGVC1TGAy93nqYC5h1+ac8KoKD0eicCjZaG8JbWlwXqA4Kso2S/SozdAeVghIEA4TGSVvJbmi/MybmN3SNNOpxi0BbN8cteod9ZDeuBhDh05YljTFpG1BK7CyJBjcSZZ1NqII5b2x1jbjwHgBAFDw13vEmlYL8w9WxybTbIYWFXq/olyqW4vIXkwpc0eCGkTvKDSHe6OyJhvkygh7LH1C2jLBDjyXpcWS1bMhW5VzbTIfEeH9rXCIZbqbr+CV97DhBYEr7ey+MI9xp1ChYboKibj4HcH8x88FXoaGUOeQy1LpVYZbNsQIQTuQlqE56BtCCo24DoDGGaWlKeYgxGAVpauWzDUCmFKOdvWEOeACdfdlYUUyDYuG2IWPVdzdxpqWOnuxDhI2mkDgPWVqdrbzgs2IsjdxHymQyR5FtQlttBQGWRb5U9pYFYW1buuWbApTDBFDjN1sLIABBIouGhYBFOEWLoQagChLAb9CLbtUXfc6QKtfFUu1PdhNsjSMrhoRbLlaWUfFGjmqIYWJlh9katpXOhfiJvFPm6lnqXOxl0ZOk2wOqjIg3uWCLBVa2NnoxzJwNokOhJygCtQudvdZXZp7m3IvnV1AgOUEdiXplCADVELBtagiHoXkjKK7IiCkUTo6c3iPD+1qBbaHl/BChIMst3GYZugikO/VlAWcKvdpBkNKVysMFaSMbLM4QYi0G0SIwyvymdURsulRwwxr3sYst/MFvoajkYfJEwNkYEbYD2MdAr8oLCWcwbR+crwfuKQppNgkbFNqwBq7uVw32NLUSca3ZpMg3XIo2ubadiNg/urjKPMCDl4Yc/aMm6K8vN7URAv7DCtOKcweM3ZR3b8pgS8KgbIksLg3K7qchZgTBDcRsYlj1a3x+WBrlnNQJYMXrQ3IoblP/AOWxQXKotVIKNmBpl6bwSou+LouYHfvlm9udzIJTKmbYM0awyGyUW/txgLPdgXjqNHYRI5Zy1eaoVSRtAbD1LqAVVsXAAbetQMnTYpbMNkmUSQ2ovau8bBY5JtxBpebAPMZXIRMobxJqgLeBYDDaYixZAUNQ92agA5J10QAgAXEwZKDYVvTm8R4f2tOTETsfwoGCWx8jMHSwHmuJZGhkt5NozFjsC5jq8xBvefNxilq7q+ogzr/lV4qla3IAlsUdscmJFeqFju61W2tautSuOufBXrCiJYcI1SRwim1by7tu6689KvXm8R4f2tamSdo5n4YNBGxhNWVXUS79AgflD0isjjH4/wBU6JUBZlliL96h5H012pyts6hlzZGj+QgQNXFh+0NaBQsxZVjz4bKX76vfbRlwZaFcfiIi3itxKzLYZskD+f8AFc3iPD+1wH3ERwnJd4Z0cqhAcrxEmIB2mX+40ivt9jLDpDvYR02V6jILBRVTLGDZahLtrsSkrXRAeVE2ogMZoBbN1evSFeTzxoGhomZtyGEb7ZO0EOdV70aSHvCIrIMmOQwIVS8EXLCESoV3nfpVRRElYCvne5EjiRpSoF9CpTFICrLn3YiyW40Fcigx2jBj0m5FIQo2L5dToMEKGmA3Qc3aucodJVmbe3R5EbIDGyzk/wCF5vEeH9rhoRdVc0dOaOHfw/2qK3mkjc6Axjpc+jpW8yZjke+XdzFoW8LMnnWgCS8lRvsY3czXaZHe4G0VdgoOkZALYGTCJv4gL6EqXSLmuyxRG3RspjAAdiX7B5xSq/LmYHKKlqXaMENCXTuXmIOVC04ZK7b85YPVRUS71zlhS1FgVsbDl0ioBnSlpt+8QIGWk3o0I7VeY8nURAjIDR2RsZ5xDGyuYE3gFLCXMKpKsJ1yVX+F5vEeH9r0KuH9RR7XXpPACl1izZW7Ur1OjW9XWlaVrTfaCyy4rgym/K3rVf4Xm8R4f2v/AAnN4jw/tf8AhObxHh/a/wDCc3iPD+1/4Tm8R4f2v/Cc3iPD+1wdoeuRYWRAXVmr5QFOU6h/qICE5qB1Tf8AznN4jw/tcFIEgGzljrHuaYO3/wBhpV+9F/qKoZPRUatTnNlzO1ytAbfN0cAjvNE4MAulQF1LEb2qivBjvN1j52elso26rklUCVDL7R3Kqt94GwC03tulbzkYLdg87wt+kCkI+DEVLeTRHpTMAhuwFdYr4brExR/CJ5PEW7eUCfh/wY6WoC6oF7W7sqSrxVSuykX3HZBpYryBIG6nQv5e6BDGuqFA2BVXEpG9LebMac3iPD+1rslnckEo/LCLtiWuDldf/wAg0bsBtKAAnMlRqX3JWgAnvZ0YqORr92R1DuNZOrzjWkTrkN4iUK0WCWXLUJ4yLnLE0qk/DGz4H5wZPNzDCd3MigATFQO48rjJ89mNgU5FRm0EBsZglCNSbGy1oqCHVH4JpyO7VFUX0JS6t7od/wDBiygqwOBCAvKCsrCdutqajcYAWglWsyDugu3kxEmy3rce9c7iwtocFWcPRxpzeI8P7WquXX+VTKO65lZcz3abL3eUvghst1I/tFQG+IAcWvumoOsB7Ii6NpK3kNEBJAKMbnNA3ct0gUVL5QgQ6wVsrCAZIqi1BELeZTxHbmHpGKtNhUNpTXdEaDvkKu4sKfIQ87EKuBHq5i6qaxC8LWZg3VVmBAHITXrkKinpEJq1ntt/gwwdLak2bMlQN/bWkrk2Da5iwhbVqTfNbynJU7ik33CNRaKaNh3qlFy13tXdcunN4jw/ta754dxXwyxt2h9dBNKuBXshsA6dYQDEMhiYAMQl83jFEyBw7I9ZZGt1K+7rQTxjSv8AGc3iOv1mmA2FnoynpoRImWynM/JD/wCtSAPU5ShhfQTcp3+VFW6dr+riW+tE0dv6JTyJ+LrncUFjVaFjs1uTuPaW6vaX9GDYqvKjLKELWN46VuV0Zd5PtLI29utzGuc7D7TuPaWlVkFB1ojAGERdtGKd5fpKRB3VW3YmZ83dEw8hvO49pse0BunWuRiGa1rkq+DP5lhPBCynZ7TuPaW6fqdx7TuPadx7TuPaJytTJzcPRxLdP1Kej7TuPadx7TEomwVB5hxKyTAxAtWo4reoAqjAIDrTEUKqChaFq/xLykwCA60zuPadx7QVQXbdy6wO8peXTlMC1U7jjzOw+0p6fqMjhHNy5eSU9H2nce07j2lun6lPSX6Snp+pT0lPSU9P1Kekp6aPCU9NCNOOU+s4aUrS5c57aVN9N3S9KN5txVpV8HfnKDbHo2y5et8F6dSUS9NtpbpfDvwZmZejMpK0zrehpegzJWiosOs+kwT72rY61LvW5cuXLl62AJsBaxohlWIm/ZqDOGqtFhk7uly5foXziDYau5OxiLKHKPRrStYkly5GIwQQgiCrfUx1MtEu6CgVZfdCPeuedyCMqUQEeJeUSIlUm5o6M20eAhwqaRQCtOcylAjULtUqiVppxHhc5ESzah29IiyhQVyAu8q4EWb/AH/QSkXLBrY98JMUV5QpL6emUFrYS7PcZt4dFKp/BtCG2t9Xbv6VxyVwqWy2ywpl5YA9QKYQhQQ5KWnpmn5rfMBpTEvQMHhYWNvPKZRWaTmCl/KaOjq7x4CHB+7/AKjZUXTdnMrt1YvtOn5lqq5t3ed+kLBzSozcJhTnVUyyQjgDNQmVGN74J5cFy5fABWNyi17DmxSn4G2J1JXFbauLOO5cuXomququ9DChLFVRteZt1CZd5XPpO0E3broDYbhVps2paS5XWNWkC3KbHCNFWJY1o6OvPW9SXL0sqaoWioAsy8jIsxZWgvFj8kWuSgQHJp4Lly5cuXCFdhL94KE9PMqxQVhlVgQOFWWG7lP7l7S/RGkCdj0E5mR20iCpUC5Urn6nIjyjvbl1tNheh2GmVn1AAoBsVLly5cvhYEglFsHIqBdHVO9neDVcgbh1vlLMT29Ox4rR0fQ3hrc663Ll8d8O2t8FhviDfFcu+K5dab6X6FyyMu9N7ZdS9WbaX6I7X0CxtZcdNxqGk5jepTmrBVUOLRfJlouhbb0KyM27sSdAIJMNBBbKITepnAAjYo36CQlugmGxD+gECKDl2ztESwAGEX9jBpQASMtcoAQosgQJ2KWhOcGseE0LcO9ckndC1hdctufEgrKr1CNmZkYCkWLdAYFN+RGCWoQ2IasbjZftKwYHJzZgJFEBaFI2gSx68FajkKWijeGTzFmoOUCkHZpSClpMYRuWIFUKdUQvFEtQlKKazZOpxKD6oYjRRGjGZdK+gIhlBqh6SoWOR0hx3lZ07pFbufh2gUVxIImE8K3I0FoAUS3LgAlxM1MqMY7cQEEu7DqLBBZIAAAPSCp2gqHcCUMJMGklCtLUVd2oZIzNZyFtHtBADkAb3WHIYyQNwJNC2zHReyAFVtjQHyxa7EBAmxCVY2Yb0Zy1uuE1sHLbOEKqpevviq3FdqhAqvc0oZ2BdiKsKjE0Eb77QJK9hRVUelwoRW1UvVcjkegCAy6aMouW7mQ27xTttFgzU1yOH8Mq3ekIHOzZTDBnQAjh2RLTuy9CNuVtiJe953lgKWrXQ7F8+IBlSWpEHFRaq1dSx3yZJkJtDTKN27tkBTqZAID7WtyqgyVmxqqmQm5QWbNmRJRDzsOzztywoBZzdluq7VEyWIMQbUGS3ciIjoQrQFBbvHhQJAmbdyze96iTEtoJKPNQvNQsXdw7MVEG7pklyZEgDVUVSm7Lcq3lhxgg0JG4MzAnHbyKDPEg5YQOzSMyvbFKVFw4jAUQWtRG+61BIMMii1BBpBZeDsFq3NY3B2IiyYtu7pK87Q0PrzW2y3XckYqyKVHcj03idvbpNPd6ciOrHW9LhwX/AA746v0HW+Cv4LtLjqx0vUl1L0P4t6nqv8djw3/4RjwO858B6Ny5cuXLly5cuXLly/49y5cuXLly5cuXLl8bHVjpeprcv+AgKKDdsuqR3Uu5l3Eu8l3ku8l3ku9l3ku7l3ku8l3ku8l3su4l3GkLvJdxLuJdxLu5d3JlYlbDXgZVYSkcj6ly+C5cvRl8Ny9TguXpel8F6XFxgG/TTu3FmE+HHS9uX/A/70hf8D/vTF/3P+5/yP8Auf8AMf7n/Y/7n/Y/7n/Y/wC5/wBj/uf9j/uf8x/uf8x/vQF0E/GlC/7n/c/4H/ekL/mf9zrB+JdL2pGx6awPe5gNW65K2kuXLl6XpcuXxseB30BXLtEA4zqfyD16/ksdXR4zkIukT//aAAwDAQACAAMAAAAQecQwMQqu2QAEoYMc8Mc888MkEEcAiGCQAUII4QASKyMmi8EgIgAE8gQwyywAgIgAGEY+LGRiQIgacIM8hV7wUQEgMYuOe6y2amEUi+pPWXPtc2CAAQAAWgxCEAGCCyCAAAAIwgACyQD2iUB5AMgQkQ8UoWkhxPNtFN1NNNNNdhNBhZLKAHOSgcUokUApZJCKICKCCiCCCCCCCCCCCCSQ6QOChAmtyU0CTRVnPrGtlLTiAAAAAgAAAAAgAVPKX6E+xhCQzPQqCE4GCCCCCCCCCCCCCCCGCOWWy8tG4pyoBRlhBBgxxBBsxwh9BBVZ5gQJBBmgxz6AADbQAwoEhJBBBZBBxgAAABBBBBBhBAACKCqCpBgIeh0IQgMQgA0cgQwgAAAAAAQQwwEMIAxwOCyFxA6AAgIEAQyAAEACAAAAAAAMAAQAAgQAEABAEQgBUMAAAOyiCCCCCCCCCCCCCCCCiiMKAgQAERRkICGSCCCCCAAAAgAAEAEMAAAAAGCCCSiAAAAgEBCCQEsIAgAQAAAAAAAAAAAAQgAEYACCSCCEIgQIQwCAAAACCCCCCCCCCCCCCCAACQgAIACCCCIAAAACCOMIICAAAAQgAAwACCOMaCACAgQAAgACCCCASgCAAEAAAAAAAAAAAAEAAAwiCCCCKAAAIAwAAAAAUOICGCCSB6iSnCMJpGIAAAAAEOCCAAIAAAKCwGCCCCIABtBzvGJZspASCAIAAAAgCCCAyiCCCiAgCEMMJNAJNHPFBNAgACCCiGAIAAQGaGABAFBAwAAAAOCks4+MAqTRwAhBgCLGAAAEAQNBRoAAQDDDDCtgmR2pmReGPWWAAQEIICCCSAAAAAKDDLCGayAfs4MJGqWuHqFjDDAAAABADSCiCCqQABBBAAAAACAAAAQAAABBAAAGCDTAAlIgCwxBBFAAAEAAAAACJTzJDJGOAABBBwACDBAYBBAAAAAAAAKAKCCCBGCKGOOKvCAAAABBAgKHAgAAAACCSiSGAAAgAHE6yC8ighYSCCAAAABAwADAAACCCAAgAAAAAAkEGsCKKTiAAgCCCOCAABBACAAAAAAAAAIEIIAAwwAgwwAAAAAEAACCCAAABRAAAkMMAACSiCCCSCCCCSCCSiwgMsAACACGGAACSyqCAAIABBBBBBAAIAABRBAECCCCSAIAIAkCAEBEFhJAJBBxwwQCAAAAphRBFNZgAgCSWqAgIjbqnCCCDGCGKCKDDDDDCCCCKGCCDzpBFBBAy2AAhEAcJFJFZ5BIAAUAQhxxRBBNMAACDjTzAVdRAwABAAAQCCKCCKCCCCKCCOKUAABBhBAAMBBDCCOOIAAAAQ4gAgQAAAQgAgwwwAAAOOqCCCCAAEIAAEICCCCCCCCCCCCCCCCGKGCAgAAQw0wIAAwwwwgwwQwwwAAIAAAAggAEQgQAQwQyyyyyCOeBBBDTB3LBABBPzxlAAABDphjPBBBBHzB0BBBBTCCFEeIHCCCTIePApyyyVCpiXDDzSbAEIpyyiAAAGSUyXAAAAQSqqoAAAdG823AAAApa2CpBBBAAAQoACCAAAAyAGUAAAAQJKM6AAAAgmAUAAAAAAAACiAAAAAAAwjAAAAAAAigAAAAAAQiAAAAAAAlMA0sJBAAAXUdcAAAASEA6uAAAAXKFUAAAACCQyiSCSSCCCCyiCCCCCACSiyCCCCCCyiCCCCIKKKCiCCCCCCCCCCCiCCCCCCCCCCCCCCCGGAMCYAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqyAoHQhaAUwAUsAAUIEIEAAAAAAAAAAAAAAAA8CFoGIOaAwmiGqGOiCW6WAAAAAAAAAAAAAEAAYFzoCLSSAgEESMIMaqMqWsKMYuKAcKMIKAWoQszAoARAyASiqa6eqKeGyGy2WsyqaYW+e6KWCA8AApAAAAACy+GOOGAAAAAAAAAAAAAAAAAAAAA8AAqAAAAASCyCCyCAAAAAAAAAAAAAAAAAAAAA+AAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AAoAQmyyyyyyyyyyyyyyyyyyyyyyyyyyymkA8AAoDIAAAAAAAAAQw40w0IM04AAAAAAAAAASC8AAoSoAAAAAAAAAQYwAwsUEg4QAAAAAAAAAOi8AAAAw++++++++++++++++++++++++++++WwA0AAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQwIAAYACGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAIGeAaKSMCOKCWgqWOuOeKiSAAAAACyigaC8AAoPdIniCCCiEG+eCiiaCG2+mAAAAASiC2Gi8AAoCM6StWOGGOaOCCCAAAAAAAAAAAAAAAAAA8AAoAyCIqEmGWYi6mGmAAAAAAAAAAAAAAAAAA8AAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAoAKICAACAAAAAAAAAAAAAAAAAAAAAAAAAA8AAoG11ZDCMOOiYoCAAAAAAAAAAAAAAAAS8YK8AAoABFloCCS6CKCiAAAAAAAAAAAAAAAASiSA8AmEUTjygQQQQQQAQSAAwgAYgAkwQAUQAAMAA68QEEYSGAAAAAAGAAAAAWoAAAAOGAAggECmoAoEQgY4SawgAAQWGAAAEQcgEMAAmWwAAAA6KoAoIEM4yuKCAAAIGAIAIAmAaAAAIIGAAAEAk6AAgAQ0EwSiAAAAQwgAAgEKQwgAAAwIAAAQYggU8oUUc0MAIwwwwwwgAEQQIAAAAAAQwwwwwAAE00ogAoA0AAAAAAAEEMMOCKCCGOOOMIAAAAQAEUUgwcIkwwIAAAAAQiSSqCCCCyySqygAAAAAAEAYcO/8QAJBEAAwACAgICAwEBAQAAAAAAAAERECAhMDFAQVFQYGFxgZH/2gAIAQMBAT8QbqdiEIQhMwhCYZCE6KravgJ8jxBygQhCEIQhCdPCLBogvGD8oNUNJlY+EHkoHnshEnVCEIQhyXEFijzkEvix8HwL4PA9gJsTTD+j8wP1UIfANCmIGIboeITMJiEEEEEEEEEEEEEEEyVMJoTKA/tmcmJiZH5mIeSF4EGbRA+sTAQIEDkMcgjyB4iHEsLAcwxAfIDEII/wR8gawcQjnGEwJAJ6I9zgqcAgBLgWGfE0PQh5glzFsQpO1vkZAI8kc4Ilj0YBcofK8jJ0AXKS/YoobC/bBfsX7F+2K/YoouFflo52J3gBheuABCE9aEGiDX4YQQNdaYpCEJrAyEIMhMPdkE0QhO0uaXaEJu1gkT3ITovYh+lCD3gvThCE3hCEJ7cITadkIQeAGgfQERoFYR4g+kQml2RCEITR/wCB4AYPgYG6EqC8wfMxB9EHrCZhCEIQXiHIsIhB8TEa8mImCawm87QjZVhf+MglFHcEPOwhqH4OA0fQ30hCE9EBPNcD45wRzr8COHgJeCEMvONEnIWsS8EPQP4uS6Z6IO275ObfgfC8C05BLHwb8yOeeB9KgjMMCNdIaJ3jyGYQhO8E7ghCEC2AMGvWAITE0RKwQIIIJgTyJ6QhCdMmCihA8CbwGQhPQIIIEtnwVFFFFDYbEIJpCdAkIQS6oTE/pCE1YhCZhNSCU1hCEIQnRCEITWEzNUQhPSAHmEJpMg0QhCeyAANEITMITE98ABNQhPQAJo16wACYRCEIQhCYhMQhCEIQa6wEIQhCEIQXfCEIQmIQhCEIQhCEIQhCEIQhCEIQhCEIQhCZhCEITaZQ1rCDgVDjKVITaEJpCaCCWDRNQkTA1sJTJNBETCCEIJgmViYekzMHosJYMhMl4xMPpuH2iFhj1WLhkIT1k/evspLWBpaLE3Qm6yi/dn+kZxD/AGiWzIQmIQQQhCenMOyQsLWlLilKXFL6UJiGPnF0J6M0mk0bQ+WsHoh5RCCIQmIQg8weyKUpS7vFKUpSlKXNKUpSlKXqpSlKX9BQhCEIQhCEIQhCEIQhCEIQhCExNl+FL8NSlKUpSlKUpSlKUpSlKUpSlKUo3+7z8GiawhCCIQmETEIQmyIQhB6oNEYh/IjWFKUoilLhFwilLvSiL0REHhCExCEIT2aUbwpS4pSlL+xLioQkOU/wqgLxMK8IQhMv0YQm0Wh/LIeOvk5Ic5/o/AKUpSlL6dLpCE+ji1i8pRuhjXqCCaprfYQ9oTsvooeyL1MQ/Yv65CEIQhCEIQhPZpSlKUpSlKUvb//EACcRAAMAAgMAAgIBBQEBAAAAAAABERAhIDFBMFFAYVBgcYHB8JHh/9oACAECAQE/EJhkEhISIJEG2CRCEIJEIQmYTBCDRMGsINEGiGnAQJYJCQv6v74Iqk1+zv8ASEJhIhCEIQQQhCEISG/ZgN8DCa5ohGoUzUNDRFlCEDhlvwBtfHf8OhPSNt/cBRd+rpMEIT5gCytZvGxI8cFfQkQf7kyH9SGa19e0aBSjYFt/zwawaZBcJ65YQzgABIgggnwoF9B7QXb17ggEwEE6DapsV9oNGTDQ1m0MnkwQJBvs/EYhEREREREREREXUF8w+4E+gayj7DQ1jopwCK+3D6b9M0q7wC/fGB9R+uS/AAUXITCrIeohAbh7LCcYElHRIDuOwuEWQ6MdJdMTtNdiw+xcAZi1+wB9jbf94v8AQe2Ca6AbJgLs+bqB9joPh+hXNAPsDtdt4OCW6P7B2L7ydVITzCWlw7KA2HcaclbrBMLyHkPIQQQQQQQQQQQQQJMWx6gG/wC57ZqftZAkh0WAe0KqOMSgXB9gVZBSjXd+EiImIiIiIiZmLCI67J9wEsto+BSl4UpSlKXFKUpSlKUpSifzgvGlKUpSlKUpc0pRMpcXAnxUpSlKUUUpSlFKUpSlKUTKUomUuBMuKKLhSlKUvAKL8IAovALgpRSiZRMpRMvwgFKUpSlKUbFKUopcE+IUomXFLkbwXFSilKUpSlKUpSlL6KUpS8gKUpRsooopeJeAN5E+QEylCZRRMJlwXAmXNyXmUpSlKUpeAvAUTLgTCfIFwUv0XA2KKKUpSlKUpS+MhRPiCeFKJlKUpcUpSi8Qb2PBgAsYmS4wigD0WgZ4D6VwBQAUKJ4KUTwmJ4JlLhRRsXC8AbKKGw/xTYE26YAFd/8AEQb5oG47chJAQhFIAopRMUTLhMTwuRvI2UpRSlHWkNEICk8YryCebGGK0sHxdSFKUT4BMUTBMTLwFKUbKUpSlKauUgedzbA+qIGcRj+uhqDCY/UYAhJGYkn/AKC+CiiZck8kylLgpSlKUpeKhfd7H1IWJh3ofBiQbA2hrhS2aiHZBA3B6CJwaFD24FCwpS5E8ExMo2UbyG+INjZqM7D47Qnc9/sQckXXUJAI5wTYKZqAhMWPt6PcAv8AUVDBMUuKUWCfEGxRspSlGylLhQF50RRFKUJlCYpRMRcKUpSlKUpSlKUsmJRA8YszoRhcIpSlKUTwTFExMuKUpSlKXK8AkXQ3R9YSC6GL4DIWIBYBsUpSlEylE8EylKUpcDeRsoooobCssJs1wN/7BbwLXaI/tg0F25LgTEyiZSlFFFy2UNlKXBSlKNn7QPkyiQ1YSBSiZchMTFKJlE8GylKUpSlKUuHi8aUpSlEyieBPBMpRYpRSlKUvxSBXIuRRSiZSif2J4KhMTKXkClKUopcjYpSlExSlKXC4LgpSlEy4UbKUpSil4XFwpSlKKUpSiZSlE+AUpeQG+QG/jABPgE8lKUuBcilKUpSlKUopSlKUpSlKUUpRMonyBcFKUpSlKUpRQ3hRReYBPBSlKUTKUpSifEGylKUpSlKUpSlKUpSlKUpRPkAmUpSlKUpQoooovyAAUUUKUomUpSiZSlKUpcf3KUpSlxpSlKUpSlKUpSlDK5QUpcXSF7YgtwpSlNF6MJdQdBlKUXFpEXAtRFKUpZDHQ0DxUpS5H0DYeosDwcQbsH1AwG+xtnAMDeniwZtGFwo2gb7ChQbsKKKKUp3B+hsAlAj2KUuFDepBjLgKUuQTTQ7DGwKUpcFrswy+hgpSlKUa0DV2QWoLoKUpRb0PsH6HuxSlGGsCQQFKUorDWAu4IKUvFrCS5EGviKTmNfCphDBU4HzDFSHw6A6QaTYOLdi9GzsMYlQ4+QUwLSIl/AQToGj9BoSq4D0EH6OYP0H6MHpxCmggen9HAAAAAAAuZAhNQLy1FPJje4H4DQDpBdvABGkwRSH4ZcLVHMwdQJgnlEfYhATguAroHYH+IbR4FKUpSlKUpSlKUTFKN4F8qBIH0RQ2LNRYqjIsRX7KFO4LFXxjeNKuEyUomUeVHaYmDXga7MGsJkloEsEXsNUYmoBrxYjJLQGuyGgiLgew0C9sRcDeKUpSjYLUcYiYpSlKUpSlKUpSlKUpS4b+A0CQmCmCS/GF/CiwaxDQ/nOqqqqqqqqr0InEGo/PWtidHESBfnpVBKD+DGKqqqqqqqqqaUT74vKlKUpSlKUpSlKUpSlKUpSlKX4H/ALg2H/AExcMv8MAN8AICYbah6DgBkLwyDoIeoz7HcPMMj2FzDeweoE8AN8wFXxCf6FNenthNZAewPUFgfRkCJUHYEoDpMBgXtyaD8jweJkvHEa0MWITdlHoI7Ib6BP1gngXsdxiex4J/kB9w7Q9wTSH4HiTxSCCaBIS/KE5T+ggpifaxdfwUF4xqZq5o1PE6k+wcLEg5GBsH0BaiG/BHsImSfECQg7jtGvGi67QlLsNQMXUGBdTzJuBLo/Ba6MRGuQB6DG+2NQ4CkIXYH8AAQT8PiAAAKKK+YCgBuBCcD5UT5GFxbC5L0E/gINDyJyFxHhcWguSAvgGxRQnwUovClwKLxovBRSi/AggnxGEspyJxQn8xV/GKqKhfwoAAAA2P//EACsQAAIBAwMDAwMFAQAAAAAAAAABERAhMSBBUTBhcUCBkVCh8WCxwdHw4f/aAAgBAQABPxBq8ntgkqXXJ1bLLpvUW9WD6Qjvpz+WrBaaSKkqxVyK0YT1D1SK4MnYmSTSyy616ROqegH6k1//APrXrWgFQVQtAKiqCoIEyA0odJhhAkdQQGXQaENRHrwSQJqQIECBAgQIENZCqFSbe1EBUMiQRRKEwmWCoIrQB0mXpkGWjwborEn3VXtpyvnQQpjX++aT0Y9AOsfpGAAFaIVJtpb1IIfWVRXZpq0NU3zmgSzF5rSsssNp4SL/AJs/rIWM1dkILOPwPQCK0ay6bpukyzCjAT8OAXVLUDQjuW2NDiJxHMA8uAgRLYsNhZFSHupEhNn+SFEts67pv1mQw/sKmpkCjkSRYRO88HGwPgYiAf6mMGOBCakZkk94SbLyIpkfBoTVvszk7n7IvwFBKyEAkWLKDNoBgCG83BLaImQoWREXYRCD2bEQfeENlKYqaEioHQmqwwy6MoBXEluccC99wmTlDf7FaNkZVuNqsBOLk8Ggw7ZROssvCjszFLtIT68Tv4ZVbWKVA1DIvwKKZbtD9MdW2OtgFKOFu8OQi9wptgDgDp8t3H7ypwFTrR3TSEhBdpCUAS/sqrfO7QSPFaihMxafcsHaJnsUKUFpQ6DpMMuk6BOgsvsAa628ZyNsmSG8qU91wwik8JFIc2nGm7u23UhQ9EQqQIdQAABmSBNSGgyZbqQpIXQzxAtfNDFca5eSDs0rPcPbc0M7mEkBHTzSXTQlbcabe50SbIvE+KDblRn2mt7KWQYk8jCiFCEKEBl0mWXSZZda6TrHWvTJ1j9LABAFSRm8zQqxBViCrVpmirdBZdN0WXRZde9O3ohtQ9Ub9BADCrVpoqxaIRVegiqlBU1SdQxJgWsITswLVQwyvteBsKdF+Un5SOkV3570Iosgtssvzk/OT85Pzk/OT85Pz2m35yfnJ+cn5yfnJ+cn5yfnPR22miiiihmWEgtIEn3AK1r4KBKoRtb+AFfdgSCCCpKg6BAv8+Jl4Fj3kFBzJ0BhLaPJuIUKzhRT7zCVhJ0yH6sE8h8hTcIyCVubz90hRjK7+oXB8uEsg5cxBffd53YFQRbzdwDdDWwvJig4qGp59li2EElBUGGZkt+BOuGTZRjXpqUC1WJAjrqVi5Ek2IBnutAuxSJsmDsZRVH/AEICAWkTioZHQTeGatIBIlmIC/TWrKLgXKQllAqvQEWvQCwhEgABlyPpAQDzcQhdMQFQVWy0S/kir+bg49qZXZxMv5rhM9KHhi145yQES242C5DEqxiK9/1G5IOw5PMP4JntxCE+CU0sNssDiZEt7CSWQTOFmwUoYXJKHSNhkFiTEZplMLxmEsmUMIIXUC6gFpLGDfaWgAz3Shtfbb2Sh7VglCWG6r7KEiz/AOjBpxKFyI6BvU3zw8hsCUv5iAqSpOgqf5CCh5OwiblCLNH3aDBK27jXUFuhStCSmBieABTQ0MlN0T+SzVvtRGlPuCNnQxHcAqVssrQd300yYEUlbKMtPEBDe7ibhzlwoL/KP28fF9+QkJuAmQ1u2lvsJHBKPtnroKN8GBQgDULoBPCq0KEmk9CdG6qgnBz38GDZPxqYD8jN1DTSXewW27BisDj1IBYPuo4N3UtmKnq8CuJniHuBouIuAe4bR0BUkRdMCm1sgB0wONJvTlPkqdwKBIYMEhI2FPK45L3PPrm5eWZ4Bf0MPt+agawgkGSMlqKVDaQTu7LULjLA+9jfsskIFrCGy6y+kxiehsnB1Ag5OjsG22Dji5YwIIUdKAzcj754nuZoUExnld4B/U97zQMO2+8HLj6BIksB1f0AqsGFkECXbnAmj8bFYc6FMVOfMiJkNhnPFIQNd5BwDZWgBAzeYUhS3hD4qDUi0YyzI2E6wYxfCUNZd6IDM0uQRgvzU/MdUSqKqp0qi/NfQddRBRBBRRRRRVHRfmPTiiii6iiKKiedWtxC0NNIiagKXcwKhaBEZIWriiFQLWAYYdT6gC4xLXJNZEiRImk6gLWE0LSJ1QqFqCFLoQpOgIdOQxJJPQAS6gBOmBDoAughVEICCFEBh1B1B6gDofRA6yHqgAQQqtAFUWmkENKuokegDEkqy0aRKpJIwuuAMSJJJJJIVgLSGSSaLQMiroKpVBidQknoAkkn1wAEkkk9AEki0gtITpAYnohJJPpAABDqAC0gqp6wAkXSDqPqAP0YBAXohLSqiXQD0g6j0TJNZeuAEiaT0KqLUCoROkSSTrCSfpIDoz0wJ1QQnWA/RgCPoIAJJ6SSBDWJesAnQJJF1F1RdFPQDqlqHpbeqAAASTrC6AKkiWoqp6Akkkf0kACSeuCRdEGJJH9PAAAAkn0ALQIVP6WF1BdRfQQAh6pJ6gXRFUtIvRCSSSSaT6wAAAAkkkkn6CAEkj+kgABJJP0cB+q29GC6C0QH1AB9YBCsCBCsk9A9z6WABJJJOl60pKLVyoKQLokRVtjgYyZO5e4T7sI+0O+GNAWOGoBAn4O8N3BkUQe2QmNHqwS3DwZLclvIERQq8ugmOKzPrAC4xwtq9iBKqZ1HBIIkVaRwsctzKxxnyMIkneHb9bMd6ST1QJJJ6IXUCSfQgccokYQAj6Fey2rIYRs3V2QSPYU/1Oc2A3zy5tQZI01MALlo7XcZjYqO9nETYIrbaNTEiLul/WVGKBiw2i1opihEi1lQlQ5mOEPaT3JNrW5ECngseIC/KqHipIux4REgBCEXNs6yAnB6E9cT6A9YD6L1DGXaYkuCl/GcSFti9RuimzZVogU8AkHN3eGpJIX+SLfRtEZf08aYhZJCediWi5TDpm2jV3aiRyTjmEnDsEDbzScyKF3V9LJhPAT8+zUGGzZTQ1fvypOpEvg3EEKkpOylyJBg6YkLIwsC6IXpJJJ6A9A/oFdICeqC0F6QJJJJJJp5wwCsuWOB/cTD6VI6tnfiUATxzbVBIp/k700Gb92/ieWRAkj1+7cCQUZoGN9O3RdMF0AnohCfQBJPRnIlu6KRlx6SJX5F5DW9JxXGUoYLsxW0gx51VjyD+ccaUGWK99Pi1ljg2DEB4eloAbZ6t60hKG5EIoOv8x/JhP2tuAyQmLF54b3dsgnvCwrcRm6Cm8jQlw0iJ75mPlawIe9CSSaxoXowQo+g+vmm7ht0+QkXYwIod0RpAT+lzfthlqYAYLuPHNGxaC8b2MgYszgTycELg8gnAfZQXG54kSWx1nAdvkFjyUAgvcvybhqO63PZklEycCle7VDUPHWMcOuqroLpEPWPpvk84haXKZMK1PY3QMwAjAIW9W47vBTLSmNwqbDcf3OwG9oQixLQFP7UW4Wflap2WBzgfhbpFFGMN/hg3eFYBiZwhfJaggAnYDkwtjM29MzlVRqynqT1lpkn08BTHr9cJo5PxNJJsiE4EdaAyBhoe7lFIC1U++Q7oKYmKkgFdwYhoCLoKZSv2DEl2Yh5A8ITE252Lt3ZaEFURJofKZUzNtflBIbUWTsCBWL35UrMAyewQS1Fy+xTAFiQ+9jED3M2VzoAyPo2ylrNOgSTS/qwAYWkJJJqj3wRYfkJEUs6uLMBbv8AEShETiQ4EihcAKOMh4FHd3c+DyIkMnk929wF9vCi5zRnk7RTmo3zJzifnywJRVJALLQJf3UwTAAW2spFMRMypYRGgYbI4yq56EjGe6jKQictn9GIHfgimBrGgXXCqT0Hqekh6oXbKJ4TRxb9BAOEhjAEl0B0fs0Z6NgLU2uX6I1r5zUmgK1DU4num6KTENRCtxoJbs5VHtlzuGxKQX/QIHK78mFh5PBQT+OVLXAT9/FBcA/MeMRhqUNUPPGX/ILFaxwEBES59sxetAOs+iYnsNvi5S6YvUAC0rQugn6mAE9QEk6kkkk+uABfhl+GX4ZcJuVDyEOfQAST1AusPoPqRs3ZCcjNQDkLiEaHEUmERNEEaJ5AI/3mn2BfWSALBTLx3FSWzddD1EwGaMsoPQgVS0i9ITonp7sEwqrzCAWqEOkMZnfHkJ78JIGJsKBQYXzvmAs4/Yd4CZ/9IKAFCSg86lwFyiC8IzBLlH3STCYVB5oSLFYQejBNb9AgQ6ISTWejtrSAv4Ha6sAs621KykcKsuwUtyBsR9alkvAITPGqYSS2dzjgG6S1U+5wOUTA0bEvFCrcxFwFwIHp3WrI2fkgKftTkAqvyAAITRayHSEk+oD6YRGjRFTv1NCMHhiNqANvfSigCllqB9lrIu4Fu+bljOnSgpBQGctTWsyFUPXOIAbaFW1A/Cae0BgIVRQigyHi7evip9oExBfSgH1klxGCe/B3+sUR/UQ1EL6qAOVEPBq4CHSZGr815+P6LvHmLn/GAUCY/T717B9mWvj6wJJ6wn14M2GwRcSyXzSR5ECPqYOqHR+tF6tdU7D6JdIAC15pIxaC9WACSSSSfVAD64ASSST0ReoqTovokkkn6KACvQJ6au6QPoD9IF14LqrQXoSDEuoSSSSSTR9ISHQVV0AYtAWkFQxaFrL6JpNZ9YAAfRCEkk9UBVpaFQmsk+rACHQB3ehEkk9FVCEkk1HQdduk9CHoF6QBVF0RaRDpLpiWJdIkkXSBDQsVJJJJovQgqiEk6EqLoTWSSayTRhCerh+hCSSSfRQEkk0mqSawPoB+hABChDWAsW0guiT9BAAOt0vU+ktSQxVXoQIt0AfogEkkk6CpIXQDFoVJJLEkk9dLrAJJJJJ6gX0QAAAkkkkn9CAAAAHrSSSSSSTVaQYLWYtD6AF6cAAAkGlUg+uAD6MEjEECSSSR0EECR0gSTQkkfoQJawRCs6JJJogkkkkkkkkkkh9ABAABehAJ9IAAWtJJJPRWXs/DkbGd8v5aEaSfshbBBKmQns8zLzx1ITmhIbHZheQojuBAXwuCSOU7RYxpgHyeoTm4wqTC09/qNiZXZg1ocfBPnnOCt0m7f8MaMdASTRSHGmyFlw2pLQm4tCRO5GDsxm3vYTlnOzT9AAIX3bZbmzyqvOkWrjkkAiy2Hd0g3QkX3CShTW9qBw8FbkXbpK1DAF6GV8jZaiUhuxumDPULNuTUlLMNwbg50bI0Q6D1HwVl/wByr/SZOACHyzgYdUXigQ1mHDXQSIXbfJZdJkrKOAEfB4BdmD+cipdBYMasXJsdJJJJJJohFmw8VCOsR0Aoc7GRdjSOKA0GsApd+5WhIkkkM3yH3RltkGsUg/ABUSSSST0cTFKCdWuSgDvYAwSudGNGnqtFClv7GOiR/bBoXpaUGwBq5PmM5gACzMgcAbl0tRFiIz7ZjASj+LhDYXQRtyexKOMJ1Bj+LnOACIaxxwsUpDd8EaC1MgR0URDX90L17/8ASxBeFg8nyJUZRCmNcFXcAuqxb9JaLV46D8kT5qxhB99BYSAEbL2ZGzIDoqY2fjolvgoi54Qgwb0jMY5B5WCODBbJ/KuEdxJh4hSl4/mG6Mpr/NaCFKBL74HYYnmz9Hd71of/AFfaIB/vNbzAJYIpRuIAK6o7jIUX/ur1iuPS/lFVE8GYyBFZovNww69g+TBnn+Z6LGfvVS/xUZeQQ7OATyAfP7N3ckMLbpOQb4WTAYVaoEb1oe/YUR1XZ3OIH34YTMMXz4yzYX6R2pQXM/2Z0S3/AOGtijrhU0mfEG7LrtTP4DbeweanRsmoZe7RsukzaMc5lCi8x/I1P1jHcb9FuR1kA/wbXA39UmIvuwngP1bYct9FrVyYR3/URg9Jstu9rBDRvQBJDrRHuVdeQgOgq8xmhy2V4DC1tcs8t9PcG333XDF99sFqtNlAUCwiSN9N6a1es3sGKy8iPYOhYaFMLAA1j8fgXTc+X2a4Zix1PiRCE6gtl74vcNi5Lx6KeH4yYsS7SQtj4Me5MrrPWXuEKXaf9wlhPci+O+38dZARfkagNQZZ/v4hdcoj/XRMUR7t4R/8CmBsfpgkdp8VEF5kEy2K5FakFW7WWWOASBqT/YZWC5cuThC2Ih5HuuGNQUrZByIfCx9AQ9fgZIK3I8pq713cMdF7yuYSHnbLFaXDFgE3JnybYn0CzEuVQgF5tj3OyXawd5RQb2F4AmOqSxkPkZc6hvB0kaQDd48t0qU4jHZXQgMGVG7wkNkeoZJRK2kM23prIviFDboAacurOqQuUeYQhJFB3EDgHKd1N3GQzs7UNdLZjYp7It6Kljn+7Fmbkc+xU4WfMRbxkC2W1GXI3wEhEvdABQckmE8qWT3TWH1fJefD+whSj090uwJS321ViGWAD8r2OQRZgcRVt9gRH4DGBbZA4U8K9r0myhFfTk3RxC4nH1gXmyWiJGe5GUpY3s2DdfAf7gdC9h6fAkGv5luSosJ1sILfRRQ5PJyDJaFcgJRaJ07NFAIfOaNvPKYfSWH/ANIL9ch1RTDYnrjcFQvAJYAoeikAEkE8pw12PH9IRUQRYsIpXy7uO1WiZ7mIt5b36W0x9lNtwlhgBMXCC+BCmzuIap8vA8vjLQTrXobTTR7gIa21yq6pMBPkeybXBhw5YGbmWfOgWklkE24t4IGp1RKku8E1QNgVYLyQ9y2GQauCQNtvneNtl9CVJRxu4GJ855BuGfdYBEukgTmRFexiDQ+k9du7Y7g/tDNtSkkZIXvKsEmPpDyE5FvBd3yV67wTiBm29cGvENv06fqH9ImkiUmQmHiXCylLu38zt/M7fzO38zt/M7fzO38zt/M7fzO38zt/M7fzO38zt/M7fzO38zt/M7fzO38zt/M7fzO38zt/M7fzO38zt/M7fzO38zt/M7fzO38zt/M7fzO38zt/M7fzO38zt/M7fzO38zt/M7fzO38zt/M7fzO38zt/M7fzO38zt/M7fzO38zt/M7fzO38zt/M7fzO38zt/M7fzpzyhLW3rSToWlfoNxO2KfgmsK5/QgI9rKVbj1/w5mwXeeUnFhBB/tOrx+APrP7XGD7PfjQXkQsQMcHmHcEDx0EMnkpcUie+h1CxAgguTSG/ooY8vUVhVmqTAIF+wQkcxxoFyUHiEgJYY8CjH73iNF9gXUkHESUEASLIAxEtj8B4hkYkmhoWESsQjYDiZR7w4iBOyqvwgFJRERsBwb9kgx3iI2tkZJyIvKASxXIln5AE8KeFQsC4gkD0T8BqBz+wUjXwZS8UZwgkVcfD4AULH28kLdSF0hITPo7WItAEZyUw8cZ/QieX0UmGoDc/NKnnrlsAtt02wBsCYDPELDegAWkAH12kFQgGPb6yYKHxd5AHCBnpR1nj4sisATTDmRhpE5CcOwjIdwZrVI7AwjYIlKdzTkoyqJEiKEPjktsIjwLMHQD6k2yxAFCDFENTe8FYZA2VEhNXzYOAcEU95AIzyPtzJETbpBeP0IE3dWex7VZOAh/qJF4/5gIiocYDQKe/C2hVp2BqB163SLbKAGD6V1PwoFncFZ/pH3uD322NgQ9ocoKQOg2hgPG+PrmEVaiw4Ayec6hiG/wASn2O1EBcnHCD5632lALe/yAjgojvkRdsd/QPOeTex5GHOktJoGYf5AM2vThWAfLUegPLOit8wtWhOy9yCa96yHcg0Ahk3D1gtOAPInsexJOhisfuIQdq4dCIAWMjxMANgfiRNUCQETRuxXAAAlAoLpaYesD0CGgh6DqYtYxUhpFoh0JoKqMAeRJOpnHO8mALh8RRkgtnrc+7lV7N8w+BYxlokL5cXeQbAfL3hRRAC3SzjUEDSIgABTXkBgCDi4cwAsA3FANSRFrLwmKD1GymmCF/zGkRcAKRfNZhE5d72CAI+y5DcWARhQOZYACWkul2SS7UG/wBHMAYxBHsAdfTO4A4+mEBA6NoIsvAHm4K0iIQpKmdXkAKBye7aOAUaypKhASXey0QIN6mAXfQHaAgWHZP9ACCnPPMgAeitxYIgAcgPgaAA7uEc+wBIn4gkLAL9SybzAALbS1Ikdh7DCACefb3QfALfWUti0gEN5hakE97O4lAAXz9odAzNqYwQXRyDCOAA3CRQYCjSZxLCDDyS8iBLyhJmIANnlxmQA+ylHMkAxLCvmQQJWPAYAC0YFk6LZv8A5WcgDuEl+0lSKtZoDx2cehoPjBFhA7lBO0hDV5QQIABt6HfAyFupSbMuBjAs+XgXA4FZ6agRGe55jaQe72sCmBiP643agfu4ARCAB7Ug4gDdKJ0cAH+K3k2V93qQdpuCrAgashjDa4idviT3VqQC+88AYFQQWQhYHMBpVllXJkAbCsd4B5ABLyY1lo/YTyMDIBOZ4KYyOaaZCOz7SSbBtLo4lFBMj+ARKMAdgoEUiewyNkq2kFgYcz/gsPYa1otyBLVEjghXxP8AnGwDtnDPS5B17csQAJjDbTASIMJl47TkBv8A3KAd7XudAJYeOQcNtuyhDIE+IN++AhiP/CLT4QFgALoFF3KAAhc4EYN0dleHQAPlHMIAacCyeiZPKHGPKJTwJq1gw4Gc4AFP9MyDxv5KwJZW80AMlQhb+4nFsC+pcYHGvDyIy9PCgRwyBCDIZ8AJ7XLcE5N04QO32TMGpwTgEGZysYkKSOsVSgD9AaCiLkqIE/ASkCIFz3ZHAoGLpxnYG1sPLAH9nJs5BjIYUlQEjMcpMEfEXmUqNIqDAIBIMRz5BmQGpSrJFQWpn/ooACatZOEJcoJE11E4ZxZMeK47+1qlAwHGeWBQhUOH/sc5YA8KRngBWIZEfM3tJFu/CM5BBtia3jSwLJ+jZbehEXAvIAYBENkvdQMiCoV+M4PABfTVgWT9Ezo1f7TLBXTLQkIQGWjhp3bAD7BaOAztJ4rEC1UtVqwCNjjiLCG4Gx2rjDfcHPGcIwQIyhTkCN/dAFCV/SZ5iYGX0swLJ+iZeEPOgmQD1rgomrbAHcexYaBxxRtgoLhLUBBMxa5dAARzG0RjQP8AvNJAaUED8agA+/MmIE+SZsGAFwHsrlDAKJvpZgTy9U0Pp+BZP9EtgWT/AES2BPLpMwQNe/shX+s5fkECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIMKhQApl9ub50DAsn0Weih8RjAGooU8Igjv9YhcGN2Cj5CEpd2M+1VMCyfQZgm1SCrcZPBoSelzX7iHJK5JXJK5JXJK5JXJK5JXJK50yuSVySuSfTc1FzUlxDE6fAUYFk+gyr58kkr03bLgv/acIK7IpFdxnubKQuhCtrBvYYQ9WzGezyZCesTRST2E7hPGGuwHjipIwJ8mKlJSmQko+PhguOBDyuGSNgSnYo4GEQlzFxad9HLGJNFd6CWNqFLqrZukSl8HJS45rBCXIC1YuJkHBuo5QTcnytJqgkhva/nY9ImTYWFQUdgWT6DQZdzZqc+lcc/uDCCBEF4VdkSC9bJ3aygDzc6TIUB7RARB6xEDbYkJJg0LLfIQf4U8ZaTlgp7DvDCjASYXytJshqvu2NpagRikZCmHdoazyhIyxMLZtAgeBvfV4HjyQyAk55mojkb/iIndyK/IPJvWkcMKO3o95sGHp8gL2BZPoNYfG+SJHHyiUpp+ldsLhBS20BmgJUDhlqyw3bEdrv2UnS+4hooUuttAmw7Bu3yCYZDgyZL2QoRM7CE8iFwYFVlz8kazyJLnYFTTS5pFoSl2FgS3G7HJBakrYL0k2Hxiq6WRvKdUgowLJ6usKrP3+gdyisxMRe6aJXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5JXJK5oSuTMyI/dJtjKVQ7/AKZ1wLJ6W0iOXu+tDs4u9+/fv379+/fv379+/fv379+/fv379+/fv379+/fv379+/fv379+/fv379+/fv379/tqCCCG3hIW0aBewPT2sYv8AQdhPbHW3LPsJ5V+gSQkCyU2XQa8uwvr0JCIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIu/GIv8ASibA/ryKUpSlKUpSlKUpSlKUpSlKUpSlKUpSlKUpSlKUpSlKUpSlKUpSlO6GtyE46HnpDHUgjAX19lRSFrgs1K5IUifoMVbalWmCJQLxL1PMje5yIBDu/i+uCFwPVywq4viULJKS+L5zM4gQMbYKPDCnLIRaaAJVNCK6AoBiQ9yDpAP/AG7gBFl87dAQkticbkLcSHoKgC4w5cbqpZf6ksVpzSu85QAu2ZSSQo3JGe4GoBwARb6AEJBFu5gcvgG8GPVEQPa++vIABR9JmjTBC/A2X0ANoQTY4hCgHwf4QMMfFS7g1QMGAHUbJ9BuOoAZWCwHiH3fdkRWxvsSKpG6bxf1hxXYIVwtH53MVkSVuLwQcYOCBK2AS9imuCBKfN8CN866c7iOVDmnFAPGHdAAx8DRDA5nKnIEgKNlHbYglcLhYxkQwm7XIGbgkQ57OuEM7I3liCKbhxcCFxLKGMDIVA4m5Bf/AIPwMQiZ14XRTXdLFIPQBFEgN1wyBMMMtoPRAxgzBFBfIqMhCjrYextFpxycltPY3mS/GAWCTOHPaH7H5yhEmezZZGI6vUBhb6Dgircw2KL+oKQIa8UUmfIipQSAmC7bCNr2AYr2iwAgMYjSTFgvnoFEvADcTZsopgWT6DfDjyFbcI3Fg0WTO9EpCEk2UIL4kyLCMn2rT0mSy8vUMlCahP1xBMD7ZkIVRzhEJNm8Y5oC68rUGREgo/UpkBAla3kdj07KIZzZL+jduTs1QIuwcqCEPKg3rMbBgpoLwggAA5s+2QQbFGylECJbZD2KB7Qv/EACe0tsoEh0xMIkhemfKAcgwbIDwwPht0DkXL+gOi4UiBGUKIBDnO8sgALhz6ehcA6gx0fqF5ojI4c9MaJ73mKToGxKSxtTpvOUzoMa+oNqQhIFeDQIHAICQtBD+QdQlNv/AEwACWhZySACMWjPRWCG/wCdE4JUqXlgIRqqDADAsnrZ0LgovtBj/Ahi+XzGZZQOAaqkxlHucuwmj25sYDNO91eTQc7rAjQqrl5o0kBUACLzNIoIIPZqwMtMVIIok6z30tIAPMaTx5CoIz0mBZPoNPMh+LFLsCs4pNYaH1KsJWOYJIlp+3BXLygJVS5aSoEy7dCqWkWBgMMkG8dX7XdnAEJBjLKglvXeIDSnZLpIrntgICmVtuAgnfbWofSmBZPosgpH4ChmhJHI3Ln4K6d/cRHli/yF8jcpCiwrybXBVM8EopNxntgC7ipWyqAsMJhjIwXQKyRaCe9lWI7IHFHIwPxv0HJAQbgv2QIfBFepBRSYRIlPEAQABJO80EAx+9hY0A+1s2MFlBf8RAS61/Ji2QDGmTUbDuAJt36LgDAsn0WYu7BRHiYjtII/whihG+NwCC7yUf2gNMN/stkZ54gcpeVVynj4B7LeHUaIZtO4FIBEz8gXIYOZG8/kuEgx3tFAkAET3/hk7IS4xWi4DuUI3AGW2HzIAZgCLmSBWPGIITIBZwhWBMGIO4xBggHmyopd7MQOFpzBHkY6NAXSel5QfRcCyfVZpRkuIrFFSKPRoFIAKrUb2Qo9Bv0wetpyAEUX0UwLJ/olsCyf6JbAsn+iWwLJ/olsCyf6JbAsn0W3sGizoHeI8nKJ/wBqSO08nrEnsxPrmBZPosu33hAZ8o0Sm72h5EmO+LCH9r+9YJh4RQ/7XonzlRpLQNq4IMmdspM5MWOSKHiAxeENoP8AI55IwzW8JPIDstsj2qGhauOggMy51wNn5tvIWErRbAJqX6O3EFaHmX+iHlPYa8BBZ8v6NoswDqBINa5IDG0A8dvNXgE+0MhDgKYFk+g3u0oDAJFOV+Plkwm+k0tvx4GPoLpB6w+TEYvRf4FySATSxihhPQkO3rJ9p2uZIY87nNMxoTgYool6Tq2lgfeVJoalR4RsQY8u4+9qk5bNIZO9BRv5EA9t8kvYn/3o04AAhJEIywUI1GA7rmyqhvomVFlpIBP0tmLMIZuCXzAAEKP1xooLfBlyzVUDfL6gBgWT6DRnXsIRPJQ/JigVZ3kYIynGIQJCiQXeY5usbCx02jLvbjGcgmI5lATdrvhIADI0rcdaUFSMQqEmAFpMuUDpmFqfGMieYIF7y/LTncASLI2WoDSpN/uDrI6rL3MSAziQ95ADhRW2Yl9DOJ9sSC4Ccg4q0YAFNpZ6WA0kE+nJvyiAW1taJSibLb0AGBZPotpuGvwsh8n8aVEf2YCAESfJUG3ndAWsc65ZfgAw6IigCoQ+mYFk6/nJ+ZDrQC78nwzxtaAmh39M/YDlkJ62DCTn+tMTqErx+EDvOiENJ351fYBP8BtYCot7t9QUIIXloqD5Mig2ftaBDLWQ7judADf5dMxPAd+RhNt2BArf7yvVAspm4oBOeGeBsQJM25f8gpbv9K1rW9q1OAB3+hq1mhZsgkAHn8BMmMAg/q48QGpl6BcAK9wXHiVLWwvgu/IATs4uHeNxrCVFu/GbwOxydB61u/Hfnfnfjvzvzvx3535PhkuZ35Phmfw5X+5PyY/JqIQQgmFuyoqjyaFwLSfmq5pFgOkJVLQ96u5Ue70geh1Oh6gTHQhaFCRKwLMgvQNCRZrkidQAXCcwvhOMICecFmkI6gHYElujgQEJ8F+6a1zeRsAgDtUMI1RSdG/WC8gAA5pxq4AH6vZtEH8Zp5kA9E7Oj0KibZGOJAskHMADAnJbXGIMIDFYDpKfliAWOwMPdALEjGHEQE/wu8EJI6beNklS4FypJTrwA/qO8rh0nYLfpMkBh4zx8gAMXvNYQdJi92qHdEcwHQhsEIAN7WxugQA9FtTEZUQqqEI/weZ3XHUKMXwFkfYiawGyTaTcCSSdbcyUGLunWUgWoruBB5trMkMWPSExUIUQR2g0gg0YVl0gknUkwfMsEiQF2fAGOIST0TfsU6kCKQEJBgJ/2GikHbtTycAei2o61oUFQvrezAoQHldgmEZadNudiSCe6RDADOmQLBp4RA0MA7oMPf8A2gIBWdAmiCXBwgIPYdOAH80AkknVltSfXkKZHSCAfzxzxjpgeTUwiQObMxcluHFAHjQ/tkdgei2o9KooQroLeVN56QfUG4IewFpfSAfSGLFKgpZgYO7QdlHUhCFW2S8JgJ327iyADyyDm8ADGTDgAiE4XThSIBSLVSnsCHQWxCRApHjf5sAcANVCXQSKz4CAYiHcTUALz3LBkyAP8BMHoFRHBhrOgKHJJAYbEAB2mThYWA/e+IVQCkySKlwYMG49ZBAAY+i3sSwEMWxqi4CN3ClQQg53TIJEMcyngSVQAaFvODwwCmgOMd08i/l0WmNYHNTqUsIL7lKNwADbMJrJpctRapEWbAL9q2dCA3enEjRBeu8dSAAAMMFvAwBikcqHMAHB2JSBJ5DZjioITUbqZMAKjrdBCFUjIESJmS3sYIWTgDxOopU4wPbKDSJ1GDxOIVLJvHRujAofyNOw5y3EBDE5cnE9wVY8bqUQA79XpSGAOKZz5wBCTfzRkBUtzbYKBNjaXdkuAo3vnF1AP82NAuABAPqAdm60QhAsYFFtzcC2NJwCboB6QAiHATzbjgGOyUEwwAYVJPuAOLkSZkLVgGHCACHgZpkMABFbQpEGQmO3aw1EN6CAC6SeABHcHWgSgxSYOghCLHicyAAvpKCgQdHCcwKETXT6FMAywJ3Zm1QWOq6KhUF6wQ+uGUm/SnWOix1XQq0C1kkkkkkkkkkkkk9FXoEkkkkkkkkkk63XY6OpCFRCFVejWleveiY6rqWghfVgAAAA+hMdd1LQQXoFzwTAkm3oRtFF9999xdNdVVdl5Yb3mt9tFFlhtsRLwDZ2xAdcE0YYdV1KiCoVMk9YD2SDsYEF8AQL3h6CxQsUrFSp+oUKFCp05x6pocixQuVE0RC4TFUGJLSW4ejAAC6SYqIwTXEYQQq1pXpC9Afo3p3Sy9DvqkpP2Ln/2Q=="
                                        id="photo_2025-04-26_08-47-22"
                                        width="387.344"
                                        height="840.34"
                                        transform="translate(1027 119.83)"
                                    ></image>
                                    <path
                                        id="Rectangle_62"
                                        fill="url(#linear-gradient)"
                                        d="M0 0h387.34v388.172H0z"
                                        data-name="Rectangle 62"
                                        transform="translate(1027.004 119.83)"
                                    ></path>
                                    <g id="Group_85" data-name="Group 85" transform="translate(395 1)">
                                        <g
                                            id="Group_83"
                                            data-name="Group 83"
                                            transform="translate(448 -17.278)"
                                        >
                                            <g id="Group_72" data-name="Group 72" transform="translate(199 185)">
                                                <circle
                                                    id="Ellipse_4"
                                                    cx="18"
                                                    cy="18"
                                                    r="18"
                                                    fill="#5c58e1"
                                                    data-name="Ellipse 4"
                                                    transform="translate(0 .278)"
                                                ></circle>
                                            </g>
                                            <g
                                                id="Group_73"
                                                fill="#fff"
                                                data-name="Group 73"
                                                transform="translate(208.763 196.456)"
                                            >
                                                <path
                                                    id="Path_3"
                                                    d="m4.6 32.944-.321.9h-2.3A1.91 1.91 0 0 0 0 35.684v7.369A1.91 1.91 0 0 0 1.975 44.9h11.849a1.91 1.91 0 0 0 1.976-1.847v-7.369a1.91 1.91 0 0 0-1.975-1.843h-2.3l-.321-.9A1.47 1.47 0 0 0 9.794 32H6a1.47 1.47 0 0 0-1.4.944m3.3 3.661a2.769 2.769 0 1 1 0 5.527 2.769 2.769 0 1 1 0-5.527"
                                                    data-name="Path 3"
                                                    transform="translate(0 -32)"
                                                ></path>
                                                <g
                                                    id="Ellipse_7"
                                                    stroke="#5c58e1"
                                                    strokeWidth="1.5"
                                                    data-name="Ellipse 7"
                                                    transform="translate(4.237 3.822)"
                                                >
                                                    <circle cx="4" cy="4" r="4" stroke="none"></circle>
                                                    <circle cx="4" cy="4" r="3.25" fill="none"></circle>
                                                </g>
                                            </g>
                                        </g>
                                        <rect
                                            id="Rectangle_81"
                                            width="232"
                                            height="36"
                                            fill="#434ab2"
                                            data-name="Rectangle 81"
                                            rx="18"
                                            transform="translate(688 168)"
                                        ></rect>
                                        <g
                                            id="Group_75"
                                            data-name="Group 75"
                                            transform="translate(441.695 -16.843)"
                                        >
                                            <path
                                                id="Path_4"
                                                fill="#fff"
                                                d="M14.74 7.369a7.35 7.35 0 0 1-1.417 4.345l4.485 4.491a1.135 1.135 0 0 1-1.6 1.6l-4.487-4.485a7.369 7.369 0 1 1 3.022-5.952Zm-7.368 5.1a5.1 5.1 0 1 0-5.1-5.1 5.1 5.1 0 0 0 5.1 5.1"
                                                data-name="Path 4"
                                                transform="rotate(-2 5688.771 -7318.977)"
                                            ></path>
                                        </g>
                                        <text
                                            id="Search"
                                            fill="#fff"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="16"
                                            fontWeight="500"
                                            letterSpacing=".019em"
                                            transform="translate(726 192)"
                                        >
                                            <tspan x="0" y="0">
                                                Search
                                            </tspan>
                                        </text>
                                        <g id="Group_69" data-name="Group 69" transform="translate(458 -18)">
                                            <circle
                                                id="Ellipse_4-2"
                                                cx="18"
                                                cy="18"
                                                r="18"
                                                fill="#434ab2"
                                                data-name="Ellipse 4"
                                                transform="translate(466 186)"
                                            ></circle>
                                            <g
                                                id="Group_68"
                                                fill="#fff"
                                                data-name="Group 68"
                                                transform="translate(474.526 193.579)"
                                            >
                                                <rect
                                                    id="Rectangle_75"
                                                    width="4"
                                                    height="7"
                                                    data-name="Rectangle 75"
                                                    rx="1"
                                                    transform="translate(.474 11.421)"
                                                ></rect>
                                                <rect
                                                    id="Rectangle_76"
                                                    width="5"
                                                    height="18"
                                                    data-name="Rectangle 76"
                                                    rx="1"
                                                    transform="translate(6.474 .421)"
                                                ></rect>
                                                <rect
                                                    id="Rectangle_77"
                                                    width="4"
                                                    height="12"
                                                    data-name="Rectangle 77"
                                                    rx="1"
                                                    transform="translate(14.474 6.421)"
                                                ></rect>
                                            </g>
                                        </g>
                                        <g id="Group_71" data-name="Group 71" transform="translate(454 -17)">
                                            <circle
                                                id="Ellipse_5"
                                                cx="18"
                                                cy="18"
                                                r="18"
                                                fill="#404ba7"
                                                data-name="Ellipse 5"
                                                transform="translate(514 185)"
                                            ></circle>
                                            <g
                                                id="Group_70"
                                                fill="#fff"
                                                data-name="Group 70"
                                                transform="translate(521.579 195.421)"
                                            >
                                                <path
                                                    id="Rectangle_78"
                                                    d="M0 0h19.895v6.632A1.9 1.9 0 0 1 18 8.526H1.895A1.9 1.9 0 0 1 0 6.632Z"
                                                    data-name="Rectangle 78"
                                                    transform="translate(0 5.684)"
                                                ></path>
                                                <path
                                                    id="Rectangle_79"
                                                    d="M1.895 0H18a1.9 1.9 0 0 1 1.895 1.895v.947H0v-.947A1.9 1.9 0 0 1 1.895 0"
                                                    data-name="Rectangle 79"
                                                ></path>
                                            </g>
                                            <rect
                                                id="Rectangle_80"
                                                width="11"
                                                height="2"
                                                fill="#404ba7"
                                                data-name="Rectangle 80"
                                                rx="1"
                                                transform="translate(523 206)"
                                            ></rect>
                                        </g>
                                    </g>
                                    <g id="Group_188" data-name="Group 188">
                                        <rect
                                            id="Rectangle_74"
                                            width="88.063"
                                            height="32.365"
                                            fill="#5c60a7"
                                            data-name="Rectangle 74"
                                            rx="16.183"
                                            transform="translate(1176.969 389.317)"
                                        ></rect>
                                        <text
                                            id="Accounts"
                                            fill="#fff"
                                            fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                            fontSize="14"
                                            letterSpacing="-.011em"
                                            transform="translate(1191 411)"
                                        >
                                            <tspan x="0" y="0">
                                                Accounts
                                            </tspan>
                                        </text>
                                    </g>
                                    <g
                                        id="Group_189"
                                        fill="#fff"
                                        data-name="Group 189"
                                        fontFamily="Inter18pt-Bold, 'Inter \\31 8pt \\31 8pt'"
                                        fontWeight="700"
                                    >
                                        <text
                                            id="AU_0"
                                            data-name="AU$0"
                                            fontSize="41"
                                            letterSpacing=".032em"
                                            transform="translate(1222 370)"
                                        >
                                            <tspan x="0" y="0" textAnchor="middle" >
                                                {data.amount}
                                            </tspan>
                                            <tspan fontSize="19"
                                                letterSpacing="-.011em"
                                                transform="translate(1259 371)">
                                                {data.amountsub}
                                            </tspan>
                                        </text>
                                    </g>
                                    <text
                                        id="Personal_AUD"
                                        fill="#fff"
                                        data-name="Personal AUD"
                                        fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                        fontSize="13.5"
                                        letterSpacing=".009em"
                                        transform="translate(1173 326)"
                                    >
                                        <tspan xmlSpace="preserve" x="0" y="0">
                                            Personal AUD
                                        </tspan>
                                    </text>
                                    <g id="Group_191" data-name="Group 191">
                                        <path
                                            id="Rectangle_150"
                                            fill="#191931"
                                            d="M0 0h296v101H0z"
                                            data-name="Rectangle 150"
                                            transform="translate(1096 773)"
                                        ></path>
                                        <g id="Group_190" data-name="Group 190">
                                            <text
                                                id="Money_added_via"
                                                fill="#fff"
                                                data-name="Money added via"
                                                fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                                fontSize="15"
                                                letterSpacing=".004em"
                                                transform="translate(1106 796)"
                                            >
                                                <tspan x="0" y="0">
                                                    Money added via
                                                </tspan>
                                            </text>
                                            <text
                                                id="Onlychain"
                                                fill="#fff"
                                                fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                                fontSize="15"
                                                letterSpacing="-.001em"
                                                transform="translate(1106 868)"
                                            >
                                                <tspan x="0" y="0">
                                                    Onlychain
                                                </tspan>
                                            </text>
                                            <text
                                                id="Today_9:06_pm"
                                                fill="#a1a1ad"
                                                data-name="Today, 9:06 pm"
                                                fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                                fontSize="13"
                                                letterSpacing=".011em"
                                                transform="translate(1107 817)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.visatime}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_5520"
                                                fill="#fff"
                                                data-name="5520"
                                                fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                                fontSize="15"
                                                letterSpacing=".01em"
                                                transform="translate(1241 796)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.moneyvia}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_265"
                                                fill="#fff"
                                                data-name="+$265"
                                                fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                                fontSize="15"
                                                letterSpacing=".01em"
                                                transform="translate(1385 796)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.visaamount}
                                                </tspan>
                                            </text>
                                            <text
                                                id="_16"
                                                fill="#fff"
                                                data-name="$16"
                                                fontFamily="Inter18pt-Regular, 'Inter \\31 8pt \\31 8pt'"
                                                fontSize="15"
                                                letterSpacing=".01em"
                                                transform="translate(1385 868)"
                                                style={{ textDecoration: 'line-through' }}
                                            >

                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.onlyamount}
                                                </tspan>

                                            </text>
                                            <text
                                                id="_.."
                                                fill="#fff"
                                                data-name=".."
                                                fontFamily="Inter18pt-SemiBold, 'Inter \\31 8pt \\31 8pt'"
                                                fontSize="15"
                                                fontWeight="600"
                                                letterSpacing=".004em"
                                                transform="translate(1233 793)"
                                            >
                                                <tspan x="0" y="0">
                                                    ..
                                                </tspan>
                                            </text>
                                        </g>
                                    </g>
                                    <g id="Group_96" data-name="Group 96" transform="translate(395.672 3.34)">
                                        <path
                                            id="Rectangle_86"
                                            fill="#252531"
                                            d="M0 0h148v12H0z"
                                            data-name="Rectangle 86"
                                            transform="translate(751 941)"
                                        ></path>

                                        {
                                            isIOS
                                                ?
                                                <>
                                                    <rect
                                                        id="Rectangle_85"
                                                        width="138"
                                                        height="4"
                                                        fill="#fff"
                                                        data-name="Rectangle 85"
                                                        rx="2"
                                                        transform="translate(756 945)"
                                                    ></rect>
                                                </>
                                                :
                                                <></>
                                        }
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
                            <label>Edit</label>
                            <input
                                type="text"
                                value={data.amount}
                                name="amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amountsub}
                                name="amountsub"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>VISA</label>
                            <input
                                type="text"
                                value={data.moneyvia}
                                name="moneyvia"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.visatime}
                                name="visatime"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.visaamount}
                                name="visaamount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>ONLYCHAIN</label>
                            <input
                                type="text"
                                value={data.onlyamount}
                                name="onlyamount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>



                    </div>
                </div>

            </div >
        </>
    )
}

export default View43