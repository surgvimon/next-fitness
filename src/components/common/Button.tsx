import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/clsx";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-[14px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[#0BA5EC] text-white hover:bg-[#026AA2] active:bg-[#0086C9] disabled:bg-[#B9E6FE]",
        "secondary-gray":
          "bg-[#F9FAFB] text-[#344054] hover:bg-[#F0F9FF] hover:text-[#026AA2] active:bg-[#F2F4F7] active:text-[#344054] disabled:text-white disabled:bg-[#EAECF0]",
        "secondary-color":
          "bg-[#F0F9FF] text-[#026AA2] hover:bg-[#0BA5EC] hover:text-white active:bg-[#F0F9FF] active:text-[#026AA2] disabled:text-[#D1D4DA] disabled:bg-white",
        "tertiary-gray":
          "bg-white text-[#344054] hover:bg-[#F2F4F7] hover:text-[#344054] active:bg-white disabled:text-[#EAECF0] disabled:bg-white disable:text-[#D1D4DA]",
        "tertiary-color":
          "bg-white border border-[#0B4A6F] text-[#0B4A6F] hover:bg-[#0BA5EC] hover:text-white hover:border-[#0BA5EC] active:bg-white active:border-[#D1D4DA] active:text-[#026AA2] disabled:bg-[#EAECF0] disabled:text-white disabled:border-[#EAECF0]",
        "tertiary-color-booking":
          "bg-white border border-[#D1D4DA] text-[#0B4A6F] hover:bg-[#0BA5EC] hover:text-white hover:border-[#0BA5EC] active:bg-white active:border-[#D1D4DA] active:text-[#026AA2] disabled:bg-[#EAECF0] disabled:text-white disabled:border-[#EAECF0]",
        "link-gray":
          "text-[#475467] underline-offset-4 disabled:text-[#D1D4DA]",
        "link-color":
          "text-[#0086C9] underline-offset-4 hover:text-[#026AA2] active:text-[#0086C9] disabled:text-[#D1D4DA]",
        "destructive-primary":
          "bg-[#D92D20] text-white hover:bg-[#B42318] active:bg-[#D92D20] disabled:bg-[#FECDCA]",
        "destructive-secondary-gray":
          "bg-[#FEF3F2] text-[#B42318] hover:bg-[#FEE4E2] hover:text-[#B42318] active:bg-[#FEF3F2] active:text-[#B42318] disabled:text-[#FDA29B] disabled:bg-[#FFFBFA]",
        "destructive-secondary-color":
          "bg-[#FEF3F2] text-[#B42318] hover:bg-[#FEE4E2] hover:text-[#B42318] active:bg-[#FEF3F2] active:text-[#B42318] disabled:text-[#FDA29B] disabled:bg-[#FFFBFA]",
        "destructive-tertiary-gray":
          "bg-white text-[#B42318] hover:bg-[#FEF3F2] hover:text-[#912018] active:bg-white disabled:text-[#EAECF0] disabled:bg-white disabled:text-[#FDA29B]",
        "destructive-tertiary-color":
          "bg-white text-[#B42318] hover:bg-[#FEF3F2] hover:text-[#912018] active:bg-white disabled:text-[#EAECF0] disabled:bg-white disabled:text-[#FDA29B]",
        "destructive-link-gray":
          "text-[#B42318] underline-offset-4 hover:text-[#912018] active:text-[#B42318] disabled:text-[#FDA29B]",
        "destructive-link-color":
          "text-[#B42318] underline-offset-4 hover:text-[#912018] active:text-[#B42318] disabled:text-[#FDA29B]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-8 h-8",
        sm: "h-7 px-7",
        md: "h-8  px-8",
        lg: "h-10 px-10",
        "icon-sm": "h-8 w-8",
        "icon-md": "h-10 w-10",
        "icon-lg": "h-12 w-12",
      },
      shape: {
        default: "rounded",
        round: "rounded-3xl",
        circle: "px-1 rounded-3xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      shape: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, shape, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "button" : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
