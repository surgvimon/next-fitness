"use client";
import React from "react";
import { TabMobilNavigator } from "@/components/navigation";
import {
  IconClock,
  IconHome,
  IconOrder,
  IcnUserBox,
  IcnBrokenHeart,
} from "@/components/icons";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { UseScrollContainer } from "@/components/navigation";

interface Props {
  children: React.ReactNode;
}
const MobileNavigator: React.FC<Props> = ({ children }) => {
  // const { scrollRef, hidden } = UseScrollContainer();

  return (
    <div className="wrapper">
      <div className={`tab-main bg-slate-200`}>{children}</div>
      <TabMobilNavigator
        tabs={[
          { to: "home", icon: IconHome },
          { to: "workout", icon: IcnBrokenHeart },
          { to: "catalog", icon: IconOrder },
          { to: "profile", icon: IcnUserBox },
        ]}
      />
    </div>
  );
};

export default MobileNavigator;
