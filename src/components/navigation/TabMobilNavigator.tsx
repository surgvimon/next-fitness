import React from "react";
import { TabMobileType } from "@/utils/type";
import { Tab } from "@/components/navigation";
import { LayoutGroup } from "framer-motion";

interface Props {
  tabs: TabMobileType[];
}
const TabMobilNavigator: React.FC<Props> = ({ tabs }) => {
  return (
    <nav className="tabs">
      <LayoutGroup>
        <div className="tabs-stack">
          {tabs.map((tab) => (
            <Tab
              {...tab}
              key={tab.to}
              baseColor={"black"}
              activeColor={"secondary-dark-1"}
            />
          ))}
        </div>
      </LayoutGroup>
    </nav>
  );
};

export default TabMobilNavigator;
