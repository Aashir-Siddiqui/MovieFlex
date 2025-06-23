"use client";

import type { Transition, Variants } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface ClapperExploreProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const transition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 10,
  mass: 0.8,
  repeat: Infinity,
  repeatType: "loop",
};

const variants: Variants = {
  animate: {
    rotate: [-45, 0],
    y: [-2, 0],
    transition,
  },
};

const ClapperExplore = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: ClapperExploreProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <div
      style={{
        paddingRight: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.g variants={variants} animate={controls}>
          <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
          <path d="m6.2 5.3 3.1 3.9" />
          <path d="m12.4 3.4 3.1 4" />
        </motion.g>
        <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
      </svg>
    </div>
  );
};

export { ClapperExplore };