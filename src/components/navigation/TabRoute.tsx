import React from "react";
import { TabType } from "@/utils/type";

const TabRoute = (tab: TabType) => {
  return (
    <div className="tab-screen">
      <React.Suspense fallback={null}>{<tab.component />}</React.Suspense>
    </div>
  );
};

export default TabRoute;
