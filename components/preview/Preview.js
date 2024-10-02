"use client";
import { appData } from "@/appData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const Preview = () => {

    const scrollContainerRef = useRef(null);

    const [allData, setAllData] = useState(appData);
    const [filteredData, setFilteredData] = useState(appData);
    const [searchQuery, setSearchQuery] = useState("");
    // addeded

    const router = useRouter();

    const search = (query) => {
        setSearchQuery(query);

        if (query === "") {
            setFilteredData(allData);
        } else {
            const results = allData.filter(item =>
                item.viewName.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredData(results);
        }
    };

    const resetSearch = () => {
        setFilteredData(appData);
        setSearchQuery("");
    }

    const pageManager = (data) => {
        router.replace(`/dashboard/views/view1?pageName=${data?.id}`);
    }


    return (
        <div className="preview-wrapper" ref={scrollContainerRef}>
            <div className="search-bill-wrapper">
                <div className="search-bill">
                    <input
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => search(e.target.value)}
                    />
                    <button onClick={() => resetSearch()}><i className="fa fa-refresh"></i></button>
                </div>
            </div>
            <ul>
                {
                    filteredData?.length === 0
                        ?
                        <h3 className="no_search_data">No Data</h3>
                        :
                        <>
                            {
                                filteredData?.map((data, index) => (
                                    <li key={index} onClick={() => pageManager(data)}>
                                        <p><i className="fa fa-circle"></i> {data?.viewName}</p>
                                        <Image
                                            src={data?.viewImageSrc}
                                            alt="view"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                    </li>
                                ))
                            }
                        </>
                }
            </ul>
        </div >
    )
}

export default Preview;