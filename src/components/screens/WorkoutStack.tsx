"use client";
import React, { memo } from "react";
import { Fab, Text } from "../common";
import { TitledNavHeader } from "../navigation";
import WorkoutCard from "../WorkoutCard";
import Link from "next/link";
import { IcnPlus } from "../icons";
import { useRouter } from "next/navigation";
import { useSelector } from "@/store";

const WorkoutStack = () => {
  const router = useRouter();
  const { workouts } = useSelector((state: any) => state.workout);
  return (
    <>
      <TitledNavHeader title="Workout set" />
      <div className="stack w-[100%] flex flex-col gap-8 overflow-auto pb-8 px-4">
        {workouts.map((workout: any) => (
          <div
            key={workout.id}
            onClick={() => router.push(`workout/${workout.id}`)}
            className="w-full"
          >
            <WorkoutCard workout={workout} />
          </div>
          // <Link
          //   key={workout.id}
          //   id={workout.id}
          //   href={`workout/${workout.id}`}
          //   className="w-full overflow-auto "
          // >
          //   <WorkoutCard workout={workout} />
          // </Link>
        ))}
      </div>
      <Fab icon={IcnPlus} onClick={() => router.push("workout/create")} />
    </>
  );
};

export default memo(WorkoutStack);
// export default WorkoutStack;
