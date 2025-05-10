import React, { forwardRef, HTMLAttributes } from "react";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const paragraphVariants = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);
interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, className }))}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph"; //! ye Line Debug karne mein help - React DevTools mein component ka actual name dikhta hai. Agar aap displayName set nahi karte, aur agar aapka code minified ho ya higher-order components use kiye ho, to React DevTools mein cryptic names dikha sakta hai (jaise "Anonymous" ya minified names).

export default Paragraph;

/* FC ka matlab hai Functional Component
Ye ek TypeScript type hai jo React functional components ke liye use hota hai
Generic syntax <ParagraphProps> se hum specify karte hain ki is component 
ko kis type ke props chahiye
FC use karna optional hai, direct function annotation bhi use kar sakte hain
*/
