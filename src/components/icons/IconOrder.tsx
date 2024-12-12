"use client";
import { SVGProps } from "react";
const IconOrder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect
      width={14}
      height={17}
      x={5}
      y={4}
      stroke="currentColor"
      strokeWidth={2}
      rx={2}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M9 9h6M9 13h6M9 17h4"
    />
  </svg>
);
export default IconOrder;
