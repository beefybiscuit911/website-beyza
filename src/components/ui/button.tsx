import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-soft hover:shadow-medium hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground rounded-xl",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-xl shadow-soft hover:shadow-teal hover:-translate-y-0.5",
        ghost: "hover:bg-muted hover:text-foreground rounded-xl",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground rounded-2xl shadow-coral hover:shadow-large hover:-translate-y-1 font-bold",
        heroOutline: "border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10 rounded-2xl font-bold",
        teal: "bg-secondary text-secondary-foreground rounded-2xl shadow-teal hover:shadow-large hover:-translate-y-1 font-bold",
        tealOutline: "border-2 border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-2xl font-bold",
        accent: "bg-accent text-accent-foreground rounded-2xl shadow-soft hover:shadow-medium hover:-translate-y-0.5 font-bold",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
