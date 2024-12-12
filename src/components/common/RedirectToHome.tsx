"use client";
import React from "react";
import { useRouter } from "next/navigation";

const RedirectToHome = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/home");
  }, []);
  return null;
};

export default RedirectToHome;
