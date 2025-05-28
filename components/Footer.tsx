import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { quickLinkData } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t ">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo>Tulos</Logo>
            <p className="text-gray-500 text-sm">
              Some para text about the company. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="text-darkColor/60 hover:text-darkColor hover:border-dtarkColor"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <h3 className="font-semibold text-darkColor mb-4">Quick link</h3>
            <div className="flex flex-col gap-3">
              {quickLinkData?.map((item)=>(
                <Link
                  key={item?.title}
                  href={item?.href}
                  className="text-gray-600 hover:text-darkColor text-sm font-medium hoverEffect"
                  >
                    {item?.title}
                  </Link>
              ))}
            </div>
          </div>
          <div>
             <h3 className="font-semibold text-darkColor mb-4">Categories</h3>
            <div className="flex flex-col gap-3">
              {/* https://youtu.be/3hepJA56KF8?t=17876 */}
              {quickLinkData?.map((item)=>(
                <Link
                  key={item?.title}
                  href={item?.href}
                  className="text-gray-600 hover:text-darkColor text-sm font-medium hoverEffect"
                  >
                    {item?.title}
                  </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-darkColor mb-4">Newsletter</h3>
            <p className="text-grey-600 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button
                type="submit"
                // className="bg-darkColor text-white rounded-md p-2 hover:bg-darkColor/80 transition-colors"
                className="w-full bg-darkColor text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

// https://youtu.be/3hepJA56KF8?t=17554
