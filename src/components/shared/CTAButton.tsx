"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
}

const variants = {
  primary:
    "bg-turquoise text-white hover:bg-turquoise-dark shadow-btn-cta hover:shadow-card-hover",
  secondary:
    "bg-blue-brand text-white hover:bg-blue-dark shadow-btn-cta hover:shadow-card-hover",
  outline:
    "border-2 border-turquoise text-turquoise hover:bg-turquoise hover:text-white",
  white:
    "bg-white text-blue-brand hover:bg-white/90 shadow-md",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm font-semibold",
  lg: "px-8 py-4 text-base font-semibold",
};

export default function CTAButton({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled = false,
  external = false,
}: CTAButtonProps) {
  const baseClass = cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-turquoise",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.04 },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link
          href={href}
          className={baseClass}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
    >
      {children}
    </motion.button>
  );
}
