"use client";

import { useEffect, useState } from "react";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import { FlowerItem } from "./components/flowerItem";
import { useFlowers } from "./hooks/useFlowers";
import { Flower } from "./types/flower";

export default function Home() {
  const { flowers, getFlowers } = useFlowers();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getFlowers();
  }, []);

  const handleSearch = (search: string) => {
    setSearchTerm(search);
  };

  const filteredFlowers = searchTerm.trim() === "" 
    ? flowers 
    : flowers.filter((flower) =>
        flower.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flower.binomialName.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="flex min-h-screen flex-col font-sans dark:bg-black" style={{ backgroundColor: 'whitesmoke' }}>
      <Header />
      <main className="flex w-full flex-col py-8 bg-white dark:bg-black" style={{ backgroundColor: 'whitesmoke', minHeight: 'calc(100vh - 4rem)' }}>
        <SearchBar onSearch={handleSearch} />
        <div className="flowers-grid mt-12 mb-12">
          {filteredFlowers.map((flower) => (
            <FlowerItem key={flower.id} flower={flower} />
          ))}
        </div>
      </main>
    </div>
  );
}
