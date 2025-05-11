import { productType } from "@/constants";
import { Repeat } from "lucide-react";
import React from "react";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabbar = ({ selectedTab, onTabSelect }: Props) => {
  return (<div className="flex items-center gap-1.5 text-sm font-semibold">
    <div className="flex items-center gap-1.5">
    {productType?.map((item) => (
    <button key={item?.title}className="border border-darkColor px-4 py-1.5 md:px-6 md:py-2" >
        {item?.title}
        </button>
    ))}
    </div>
    <button>
      <Repeat/>
    </button>
    </div>
    );
};

export default HomeTabbar;

// /https://youtu.be/3hepJA56KF8?t=11474 props
// https://youtu.be/3hepJA56KF8?t=11688
