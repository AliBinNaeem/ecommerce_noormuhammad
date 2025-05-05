import type { Metadata } from "next";

import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from 'next/font/local'

const raleway = localFont({
src: "../fonts/Raleway.woff2",
variable: "--font-relaway",
weight: "100 900",
// https://youtu.be/3hepJA56KF8?t=6337
});

export const metadata: Metadata = {
  title: "SMAli Ecommerce App for Shoppers",
  description: "An app for education purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
     <html lang="en">
      <body
        className={`${raleway.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
        {/* https://youtu.be/3hepJA56KF8?t=2545 */}
      </body>
    </html>
   </ClerkProvider>
  );
}
