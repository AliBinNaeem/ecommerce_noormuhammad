"use client";
// import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog'
import { Search, X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
} from "./ui/dialog";
import { Input } from "./ui/input";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const fetchProducts = useCallback(async () => {
    if (!search) {
      setProducts([]);
      return;
    }
    setLoading(true);
    try {
      const query = `*[_type == 'product' && name match $search] | order(name asc)`;
      const params = {search: `${search}*`}
      const response = await client.fetch(query, params);
      console.log("Fetched products:", response);
      // https://youtu.be/3hepJA56KF8?t=22228
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(()=>{});

  return (
    <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)}>
      <DialogTrigger onClick={() => setShowSearch(!showSearch)}>
        <Search className="w-5 h-5 hover:text-darkColor hoverEffect" />
      </DialogTrigger>
      <DialogContent className="bg-white max-w-5xl h-[90vh] flex flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle className="mb-1"> Product Searchbar</DialogTitle>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <Input
              placeholder="Search your product here...."
              className="flex-1 rounded-md py-5"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              // https://youtu.be/3hepJA56KF8?t=21459
            />
            {search && (
              <X
                onClick={() => setSearch("")}
                className="w-4 h-4 absolute top-3 right-11 hover:text-red-600 hoverEffect"
              />
              // https://youtu.be/3hepJA56KF8?t=21682 <X></X>
            )}
            <button
              type="submit"
              // https://youtu.be/3hepJA56KF8?t=21639
              className={`absolute right-0 top-0  w-10 h-full flex items-center justify-center rounded-tr-md rounded-br-md hover:bg-darkColor hover:text-white hoverEffect ${search ? "bg-darkColor text-white" : "bg-darkColor/10"}`}
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </DialogHeader>
        {/* https://youtu.be/3hepJA56KF8?t=21790 */}
        <div className="w-full h-full overflow-y-scroll border border-darkColor/20 rounded-md">
          <p>Searching on progress</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;

// https://youtu.be/3hepJA56KF8?t=21250 DialogTitle
// https://youtu.be/3hepJA56KF8?t=21529 seach && <x ...
