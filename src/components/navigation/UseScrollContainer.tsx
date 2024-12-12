import React from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const UseScrollContainer = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: scrollRef });
  const [hidden, setHidden] = React.useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > 0) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });
  return { scrollRef, hidden };
};

export default UseScrollContainer;
