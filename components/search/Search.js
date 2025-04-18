"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";
import { FaTimes, FaSearch } from 'react-icons/fa';  // Make sure you have react-icons installed

const Search = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  
  const [query, setQuery] = useState('');

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1); // Reset to page 1 on every new search.

    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }

    replace(`${pathname}?${params}`);
  }, 300);  // 300ms debounce

  const handleReset = () => {
    setQuery('');
    const params = new URLSearchParams(searchParams);
    params.delete("q");
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="search-box">
      <div className="search-input-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            handleSearch(e);
          }}
        />
        {query && (
          <FaTimes className="clear-icon" onClick={handleReset} />
        )}
      </div>
    </div>
  );
};

export default Search;
