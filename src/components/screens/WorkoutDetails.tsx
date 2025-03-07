"use client";
import React from "react";
import { Text } from "../common";
import { BackButtonFab } from "../navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSelector } from "@/store";

interface Props {
  id: string;
}
const WorkoutDetails: React.FC<Props> = ({ id }) => {
  const workout = useSelector((state: any) =>
    state.workout.workouts.find((item: any) => item.id === id)
  );
  if (!workout) {
    return <Text variant="body">Workout not found</Text>;
  }
  return (
    <div>
      <div className="w-full relative">
        <motion.div
          layoutId={`workout-image-${workout.id}`}
          className="duotone relative image-wrapper w-full h-[200px] bg-primary-light-1 mix-blend-color-burn"
        >
          {/* <motion.img
            className="block object-cover"
            src={workout.image.urls.regular}
            alt={workout.image.alt}
          /> */}
          <Image
            src={workout.image.urls.regular}
            fill
            quality={10}
            priority={true}
            sizes="(max-width:768px) 100vw, 50vw"
            alt={workout.image.alt}
            className=" object-cover mix-blend-multiply"
          />
        </motion.div>
        <BackButtonFab />
      </div>
      <div className="stack w-[100%] flex flex-col gap-8 overflow-auto pb-8 px-4 mt-4">
        <Text variant="title-2">{workout.name}</Text>
        <div className="empty-box" />
        <div className="empty-box" />
        <div className="empty-box" />
      </div>
    </div>
  );
};

export default WorkoutDetails;
