import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition",
          variant === "default" &&
            "bg-[#D4AF37] text-[#0B1F3A] hover:opacity-90 shadow-md",
          variant === "outline" &&
            "border border-white/50 text-white hover:bg-white/10",
          variant === "ghost" && "text-[#0B1F3A] hover:bg-[#0B1F3A]/5",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
