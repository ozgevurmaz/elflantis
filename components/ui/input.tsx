import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "h-12 w-full rounded-full border border-ink-900/10 bg-white px-5 text-[15px] text-ink-900 placeholder:text-ink-500/70",
          "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500 focus-visible:border-transparent",
          "disabled:cursor-not-allowed disabled:opacity-60",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
