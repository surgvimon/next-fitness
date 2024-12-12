"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/clsx";

export const TextVariants = cva("", {
  variants: {
    variant: {
      "title-1": "h1",
      "title-2": "h2",
      "title-3": "h3",
      link: "h2",
    },
  },
  defaultVariants: {
    variant: "title-1",
  },
});

export interface Props
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof TextVariants> {
  asChild?: boolean;
  children: React.ReactNode;
}

const Text = React.forwardRef<HTMLElement, Props>(
  ({ variant, className, children, ...props }, ref) => {
    // const Comp = variant ? variant : "button"
    let Comp: any = "h1";

    switch (variant) {
      case "title-1":
        Comp = "h1";
        break;
      case "title-2":
        Comp = "h2";
        break;
      case "title-3":
        Comp = "h3";
        break;
      default:
        Comp = "span";
        break;
    }
    return (
      <Comp
        ref={ref}
        className={cn(TextVariants({ variant, className }))}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Text.displayName = "Text";
export default Text;
