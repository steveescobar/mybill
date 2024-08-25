"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {

    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const handleSearch = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams);

        params.set("page", 1);

        if (e.target.value) {
            params.set("q", e.target.value);
        } else {
            params.delete("q");
        }

        replace(`${pathname}?${params}`);
    }, 100)

    const handleReset = () => {
        const params = new URLSearchParams(searchParams);
        params.delete("q");
        replace(`${pathname}?${params}`);
    }

    return (
        <div className="search-box">
            <input
                type="text"
                placeholder="Search..."
                onChange={handleSearch}
            />
            <button onClick={() => handleReset()}>Reset</button>
        </div>

    )
}

export default Search