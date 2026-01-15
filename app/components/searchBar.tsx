"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

export const SearchBar = ({ onSearch }: { onSearch: (search: string) => void }) => {
    const [search, setSearch] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
        onSearch(value);
    };

    return (
        <div className="w-full h-10 sm:h-12 flex items-center justify-center px-2 sm:px-4 mt-2 sm:mt-4">
            <div className="relative w-full max-w-2xl h-full">
                <Icon 
                    icon="mdi:search" 
                    className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    width={18}
                    height={18}
                />
                <input 
                    type="text" 
                    placeholder="Busca en nuestra tienda" 
                    className="w-full h-full pl-8 sm:pl-10 pr-3 sm:pr-4 text-sm sm:text-base border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    value={search}
                    onChange={handleSearch}
                />
            </div>
        </div>
    );
};

export default SearchBar;