"use client";
import {
  SanityImageCrop,
  SanityImageHotspot,
  internalGroqTypeReferenceTo,
} from "sanity/types";
import { motion, AnimatePresence } from "framer-motion";

import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
}

const ImageView = ({ images = [] }: Props) => {
  const [active, setActive] = useState(images[0]);
  return (
    <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={active?._key}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          // https://youtu.be/3hepJA56KF8?t=19832
          className="w-full max-h-[550px] min-h-[450px]] border border-darkColor/10  rounded-md group overflow-hidden"
        >
          <Image
            src={urlFor(active).url()}
            alt={"productImage"}
            width={500}
            height={500}
            priority
            className="w-full h-96 max-h-[550px] min-h-[550px] object-contain group-hover:scale-110 hoverEffect rounded-md"
          />
        </motion.div>
      </AnimatePresence>
      <div className="grid grid-cols-6 gap-2 h-20 md:h-28">
        {images?.map((image) => (
          <button
            key={image._key}
            className={`border rounded-md overflow-hidden ${active?._key === image?._key ? "ring-1 ring-darkColor" : ""}`}
            onClick={() => setActive(image)}
          >
            <Image
              src={urlFor(image).url()}
              alt={"productImage"}
              width={100}
              height={100}
              className="w-full h-auto object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageView;
// https://youtu.be/3hepJA56KF8?t=19401
