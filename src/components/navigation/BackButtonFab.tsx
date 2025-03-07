import React from "react";
import Link from "next/link";
import { Text } from "../common";
import { IcnArrowLeft } from "../icons";

const BackButtonFab: React.FC = () => {
  return (
    <div className="z-[999] inline-flex absolute top-4 left-4 py-[2px] bg-white px-4 rounded-full shadow-md opacity-0 -translate-y-[100%] animate-slidedownandfadein animation-delay-500">
      <Link className="flex items-center" href=".">
        <IcnArrowLeft className="w-4 h-4 mr-2" />
        <Text variant="caption">Back</Text>
      </Link>
    </div>
  );
};

export default BackButtonFab;
