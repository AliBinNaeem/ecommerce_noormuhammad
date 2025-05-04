import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  // https://youtu.be/3hepJA56KF8?t=7917
  {
    title: "Youtube",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Slack className="w-5 h-5" />,
  },
];
const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link 
              href={item?.href}
              target="_blank"
              rel="nooperner noreferrer"
              className={cn("p-2 border rounded-full hover:text-white hover:border-white hoverEffect",iconClassName)}>
               {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-white text-darkColor font-semibold">
             {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;

// sidebar finish : https://youtu.be/3hepJA56KF8?t=8139
