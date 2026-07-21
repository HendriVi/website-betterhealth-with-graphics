import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      solid: "btn-solid",
      ghost: "btn-ghost",
      onPetrol: "btn-onpetrol",
      ghostLight: "btn-ghost-light",
    },
  },
  defaultVariants: { variant: "solid" },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant }), className)} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

interface ClinicalPlateProps {
  figure: string;
  status?: string;
  children: React.ReactNode;
  className?: string;
}

export function ClinicalPlate({ figure, status, children, className }: ClinicalPlateProps) {
  return (
    <section className={cn("plate", className)}>
      <div className="plate-bar">
        <span>{figure}</span>
        {status ? <span>{status}</span> : null}
      </div>
      <div className="specimen">{children}</div>
    </section>
  );
}
