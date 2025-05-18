import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }: { product: Product }) => {
  // console.log("ProductCard", product)
  return (
    // <Image 
    // // src = {urlFor(product?.images[0]).url()} 
    //  src="https://cdn.sanity.io/images/jsofzl9p/production/54b2ed293c8b99c3ff4f7719634d0b476c1f6f05-1500x1500.png"
    // width={500}
    // height={500}
    // alt="productImage"
    // />
    <div className="group text-sm rounded-lg overflow-hidden" > 
      <div  className="bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 overflow-hidden relative">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}  // https://youtu.be/3hepJA56KF8?t=15643
          className="w-full h-full flex items-center justify-center">
            <Image 
              src={urlFor(product?.images[0]).url()}
              // src="https://cdn.sanity.io/images/jsofzl9p/production/54b2ed293c8b99c3ff4f7719634d0b476c1f6f05-1500x1500.png"
              width={500}
              height={500}
              alt="productImage"
              priority
              className={`w-full h-72 object-contain overflow-hidden hoverEffect ${product?.stock !== 0 && 'group-hover:scale-105 '} `}
            />
            </Link>
        )}
        {product?.stock === 0 && (
          <div className="absolute top-0 left-0 w-full h-full bg-darkColor/40 flex items-center justify-center">
           <p className="text-base text-white font-semibold">
            Out of Stock
            </p>
            </div>
        )

        }
        
      </div>
      <div className="py-3 px-2 flex flex-col gap-1.5 bg-zinc-50 border border-t-0 rounded-lg rounded-tl-none rounded-tr-none">
        <h2
        className="font-semibold line-clamp-1"
        >
          {product?.name }
          </h2>
          <p>
          {product?.intro} 
          </p>
          <PriceView 
          className="text-lg "
          price={product?.price} 
          discount={product?.discount}
           />
           <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
// https://youtu.be/3hepJA56KF8?t=14160 
// https://youtu.be/3hepJA56KF8?t=14274

