"use client";
import React from "react";
import { Text } from "@/components/common";
import { TitledNavHeader } from "@/components/navigation";

const HomeStack = () => {
  return (
    <>
      <TitledNavHeader title="Treenaa" />
      <div className="stack w-[100%] flex flex-col gap-8 overflow-auto pb-8 px-4">
        <div className="empty-box" />
        <Text variant="title-2">Treenaa uudestaan</Text>
        <div className="w-full overflow-auto ">
          <div className="flex flex-row gap-10 pb-4">
            <div className="empty-box !w-[50vw]" />
            <div className="empty-box !w-[50vw]" />
            <div className="empty-box !w-[50vw]" />
            <div className="empty-box !w-[50vw]" />
          </div>
        </div>
        <div className="empty-box" />
        <div className="empty-box" />
        <div className="empty-box" />
        <div className="empty-box" />
        <div className="empty-box" />
        <div className="empty-box" />
      </div>
    </>
  );
};

export default HomeStack;
