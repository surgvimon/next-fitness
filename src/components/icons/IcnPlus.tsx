import { SVGProps } from "react";
const IcnPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 5.51v14.4m7.2-7.2H4.8"
    />
  </svg>
);

export default IcnPlus;
