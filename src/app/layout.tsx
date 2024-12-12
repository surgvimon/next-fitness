import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import LayoutProvider from "@/components/LayoutProvider";
import MobileNavigator from "@/components/MobileNavigator";
// import BottomSheetProvider from "@/components/BottomSheet";

export const metadata: Metadata = {
  title: "Fitness - home page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LayoutProvider>
        {/* <BottomSheetProvider rootSelector="#root"> */}
        <MobileNavigator>{children}</MobileNavigator>
        {/* </BottomSheetProvider> */}
      </LayoutProvider>
    </>
  );
}
