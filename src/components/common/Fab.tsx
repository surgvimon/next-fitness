import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/clsx";

const buttonVariants = cva(
  `fixed bottom-[62px] right-0 inline-flex items-center justify-center whitespace-nowrap rounded-[50%] scale-0 animate-scaleandfadein animation-delay-500 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none`,
  {
    variants: {
      variant: {
        primary:
          "bg-secondary-dark-1 text-white hover:bg-secondary-dark-1 active:bg-secondary-light-1 disabled:bg-secondary-light-1",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: " w-[56px] h-[56px]",
        sm: "h-7 pxw-7",
        md: "h-8 w-8",
        lg: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface FabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon: React.JSXElementConstructor<any>;
  onClick: () => any;
}

const Fab = React.forwardRef<HTMLButtonElement, FabProps>(
  ({ className, variant, size, icon, onClick, ...props }, ref) => {
    const Comp = "button";
    const Icon = icon;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={onClick}
        {...props}
      >
        <Icon className="" />
      </Comp>
    );
  }
);
Fab.displayName = "Fab";

export default Fab;
