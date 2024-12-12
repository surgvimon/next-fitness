import React from "react";
import { TabType } from "@/utils/type";
import { LayoutGroup } from "framer-motion";
import { TabRoute, Tab } from "@/components/navigation";

interface Props {
  tabs: TabType[];
}
const TabNavigator: React.FC<Props> = ({ tabs }) => {
  return (
    <div className="wrapper">
      <div className="tab-main">
        {/* <Routes>
          {tabs.map((tab) => (
            <Route
              key={tab.to}
              path={`${tab.to}/*`}
              element={<TabRoute {...tab} />}
            />
          ))}

          <Route path="*" element={<RedirectToHome />} />
        </Routes> */}
      </div>
      <nav className="tabs">
        <LayoutGroup>
          <div className="tabs-stack">
            {tabs.map((tab) => (
              <Tab
                {...tab}
                key={tab.to}
                baseColor={"black"}
                activeColor={"secondary-dark-1"}
                location={location}
              />
            ))}
          </div>
        </LayoutGroup>
      </nav>
    </div>
  );
};

export default TabNavigator;
