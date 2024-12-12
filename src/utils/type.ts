
// import * as React from "react";
// export interface IconTree {
//     tag: string;
//     attr: {
//         [key: string]: string;
//     };
//     child: IconTree[];
// }

import { ReactElement } from "react";
import { SVGProps } from "react";

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
}
export type IconType = (props: IconBaseProps) => React.JSX.Element;
export declare function IconBase(props: IconBaseProps & {
    attr?: Record<string, string>;
}): React.JSX.Element;

export type TabType = {
    to: string;
    icon: IconType;
    iconProps?: IconBaseProps;
    component: React.LazyExoticComponent<() => React.JSX.Element>;
  };

  export type TabMobileType = {
    to: string;
    icon: React.JSXElementConstructor<any>;

  }