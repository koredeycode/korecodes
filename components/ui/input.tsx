import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] rounded-md border border-border focus:border-accent font-light bg-transparent px-4 py-5 text-base text-foreground placeholder:text-muted outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Input };
