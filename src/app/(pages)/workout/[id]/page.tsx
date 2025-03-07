import { WorkoutDetails } from "@/components/screens";
import React from "react";

interface Props {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Page = async ({ params, searchParams }: Props) => {
  const id = (await params).id;
  return (
    <>
      <WorkoutDetails id={id} />
    </>
  );
};

export default Page;
