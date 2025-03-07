import React from "react";
import { motion } from "framer-motion";
import { Text } from "../components/common";
import { Workout } from "@/store/workoutReducer";
import { IcnStopwatch } from "./icons";
import Image from "next/image";

interface Props {
  workout: Workout;
}

const WorkoutCard: React.FC<Props> = ({ workout }) => {
  return (
    <div className="card-stack">
      <motion.div
        className="duotone w-full h-[200px] bg-primary-light-1 mix-blend-color-burn"
        layoutId={`workout-image-${workout.id}`}
      >
        {/* <motion.img
          className="block w-full h-full"
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

      <div className="details-stack">
        <div className="meta-info-stack flex justify-between">
          <Text variant="overline" color="secondary">
            {workout.sets} kierrosta
          </Text>
        </div>

        <Text variant="title-2">{workout.name}</Text>
      </div>

      {workout.duration && (
        <div className="duration-stack space-x-2 text-center">
          <IcnStopwatch className="w-[16px] h-[16px]" />
          <Text variant="caption" color="primary-dark-3">
            {workout.duration}
          </Text>
        </div>
      )}
    </div>
  );
};

export default WorkoutCard;
