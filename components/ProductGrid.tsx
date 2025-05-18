"use client";
import React, { useEffect, useState } from "react";
import HomeTabbar from "./HomeTabbar";
import { productType } from "@/constants";
import { client } from "@/sanity/lib/client";
import { Product } from "@/sanity.types";
import ProductCard from "./ProductCard";
import NoProductsAvailable from "./NoProductsAvailable";
import { motion, AnimatePresence } from "motion/react";
import { Loader2 } from "lucide-react";
// https://youtu.be/3hepJA56KF8?t=13691

const ProductGrid = () => {
  // set default first page active https://youtu.be/3hepJA56KF8?t=11866
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false); //https://youtu.be/3hepJA56KF8?t=11956

  // https://youtu.be/3hepJA56KF8?t=12169
  const safeVariant = selectedTab.toLowerCase().replace(/"/g, '\\"');
  const query = `*[_type == 'product' && variant == "${safeVariant}"] | order(name asc)`;

  const params = { variant: selectedTab.toLowerCase() };
  //https://youtu.be/3hepJA56KF8?t=12247
  useEffect(() => {
    console.log("Selected Tab", query);
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(await response); //https://youtu.be/3hepJA56KF8?t=12435
        console.log(await response);
      } catch (error) {
        console.log("Product fetching Error", error);
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, [selectedTab]);

  return (
    <>
      <div className="mt-10 flex flex-col items-center ">
        <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
        {loading ? (
          <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10">
            <div className="flex items-center space-x-2 text-blue-500">
              <Loader2 className=" animate-spin" />
              <span className="text-lg font-semibold">Products are loading</span>
            </div>
          </div>
        ) : (
          <>
            {products?.length ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 w-full">
                {" "}
                {/* https://youtu.be/3hepJA56KF8?t=13053 */}
                {products?.map((product: Product) => (
                  <div key={product?._id}>
                    <ProductCard product={product} />
                    {/* <p>{product?.name}</p> */}
                  </div>
                ))}
              </div>
            ) : (
              <NoProductsAvailable selectedTab={selectedTab} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ProductGrid;

//https://youtu.be/3hepJA56KF8?t=11866 set default link active
