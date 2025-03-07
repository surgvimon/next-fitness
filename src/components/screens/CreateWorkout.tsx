"use client";
import React from "react";
import { BackButtonFab } from "../navigation";
import { Text } from "../common";
import Button from "../common/Button";
import { IcnFiImage } from "../icons";
import Image from "next/image";
import { useBottomSheet } from "../BottomSheet";
import PhotoSelector from "./PhotoSelector";

const CreateWorkout: React.FC = () => {
  const bottomSheet = useBottomSheet();
  return (
    <>
      <BackButtonFab />
      <div
        className="relative w-full cursor-pointer"
        onClick={() => bottomSheet.open(<PhotoSelector />)}
      >
        <div className="w-full">
          {false ? (
            <div className="duotone relative image-wrapper w-full h-[200px] bg-primary-light-1 mix-blend-color-burn">
              aaa
              {/* <Image
                src={"workout.image.urls.regular"}
                fill
                quality={10}
                priority={true}
                sizes="(max-width:768px) 100vw, 50vw"
                alt={"workout.image.alt"}
                className=" object-cover mix-blend-multiply"
              /> */}
            </div>
          ) : (
            <div className="h-[200px] w-full bg-gray-50 flex flex-col items-center justify-center text-center">
              <IcnFiImage className="text-gray-300 w-12 h-12" />
              <Text variant="caption" color="grey-60" className="text-gray-400">
                Choose image
              </Text>
            </div>
          )}
        </div>
        <div className="stack w-[100%] flex flex-col gap-8 overflow-auto pb-8 px-4 mt-4">
          <Text variant="title-2">{"workout.news"}</Text>
          <div className="empty-box" />
          <div className="empty-box" />
        </div>
      </div>
    </>
  );
};

export default CreateWorkout;
