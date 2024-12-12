"use client";
import React from "react";
import { TabMobileType } from "@/utils/type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { TAB_HEIGHT } from "@/utils/constants";

interface Props extends TabMobileType {
  baseColor: string;
  activeColor: string;
}

const Tab: React.FC<Props> = ({ to, icon, baseColor, activeColor }) => {
  // const [fullTo, setFullTo] = React.useState(to);
  const location = usePathname();
  const isActive = location.includes(to);

  const Icon = icon;

  return (
    <Link className={`tab-link h-tab54`} href={to}>
      <Icon />
      {isActive && (
        <motion.div className="tab-indicator" layoutId="tab-indicator" />
      )}
    </Link>
  );
};

export default Tab;
