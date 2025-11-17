"use client";

import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ComponentPropsWithoutRef, forwardRef, useCallback, useId, useState } from "react";

export const buttonStyles = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-accent text-white shadow-soft hover:bg-accent/90 focus-visible:outline-accent",
        secondary: "bg-surface text-text border border-white/10 hover:border-accent focus-visible:outline-accent",
        ghost: "bg-transparent text-text border border-transparent hover:border-white/20 focus-visible:outline-accent-2",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonStyles> & {
    ripple?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, fullWidth, ripple = true, children, onPointerDown, type = "button", ...rest },
  ref
) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [showRipple, setShowRipple] = useState(false);
  const rippleId = useId();

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLButtonElement>) => {
      if (ripple) {
        const rect = event.currentTarget.getBoundingClientRect();
        setCoords({ x: event.clientX - rect.left, y: event.clientY - rect.top });
        setShowRipple(false);
        requestAnimationFrame(() => setShowRipple(true));
      }
      onPointerDown?.(event);
    },
    [onPointerDown, ripple]
  );

  return (
    <motion.button
      ref={ref}
      type={type}
      whileTap={{ scale: 0.98 }}
      className={clsx(buttonStyles({ variant, size, fullWidth }), className)}
      onPointerDown={handlePointerDown}
      {...rest}
    >
      {children}
      {ripple && showRipple && (
        <span
          key={rippleId}
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        >
          <span
            className="absolute h-32 w-32 animate-ripple rounded-full bg-white/40"
            style={{ top: coords.y - 64, left: coords.x - 64 }}
          />
        </span>
      )}
    </motion.button>
  );
});

