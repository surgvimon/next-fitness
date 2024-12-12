"use client";
import React from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Text } from "@/components/common";

interface Props {
  title: string;
}

const TitledNavHeader: React.FC<Props> = ({ title }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > 50) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.15, ease: "easeInOut" }}
        className={`title-wrapper bg-white border-b fixed top-0 left-0 right-0 text-center py-3`}
      >
        <motion.span
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="inline-block px-4"
        >
          {title}
        </motion.span>
      </motion.div>

      <Text variant="title-1" className="mb-3 px-4">
        {title}
      </Text>
    </>
  );
};

export default TitledNavHeader;
