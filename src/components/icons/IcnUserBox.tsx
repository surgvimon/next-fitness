"use client";
import { SVGProps } from "react";
const IcnUserBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M17.796 20.706c-.342-1.063-1.096-2.003-2.143-2.673C14.605 17.363 13.32 17 12 17c-1.32 0-2.605.363-3.653 1.033-1.047.67-1.8 1.61-2.143 2.673"
    />
    <circle
      cx={12}
      cy={10}
      r={3}
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
    <rect
      width={18}
      height={18}
      x={3}
      y={3}
      stroke="currentColor"
      strokeWidth={2}
      rx={3}
    />
  </svg>
);
export default IcnUserBox;
