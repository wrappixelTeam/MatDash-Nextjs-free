import React from "react";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import FollowersChart from "@/app/components/widgets/charts/FollowersChart";
import ViewsChart from "@/app/components/widgets/charts/ViewsChart";
import EarnedChart from "@/app/components/widgets/charts/EarnedChart";
import TotalEarningChart from "@/app/components/widgets/charts/TotalEarnigs";
import CurrentValue from "@/app/components/widgets/charts/CurrentValue";
import YarlyBreakup from "@/app/components/widgets/charts/YarlyBreakup";
import MonthlyEarning from "@/app/components/widgets/charts/MonthlyEarcning";
import MostVisited from "@/app/components/widgets/charts/MostVisited";
import YearlySales from "@/app/components/widgets/charts/YearlySales";
import PageImpression from "@/app/components/widgets/charts/PageImpression";
import Customers from "@/app/components/widgets/charts/Customers";
import Projects from "@/app/components/widgets/charts/Projects";
import RevenueUpdates from "@/app/components/widgets/charts/RevenueUpdates";
import SalesOverview from "@/app/components/widgets/charts/SalesOverview";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Charts",
  },
];
const Charts = () => {
  return (
    <>
      <BreadcrumbComp title="Charts" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="md:col-span-3 col-span-12">
          <FollowersChart />
        </div>
        <div className="md:col-span-3 col-span-12">
          <ViewsChart />
        </div>
        <div className="md:col-span-3 col-span-12">
          <EarnedChart />
        </div>
        <div className="md:col-span-3 col-span-12">
          <TotalEarningChart />
        </div>
        <div className="col-span-12">
          <CurrentValue />
        </div>
        <div className="md:col-span-4 col-span-12">
          <YarlyBreakup />
          <MonthlyEarning />
          <MostVisited />
        </div>
        <div className="md:col-span-4 col-span-12">
          <YearlySales />
          <PageImpression />
          <div className="grid grid-cols-12 gap-[30px] mt-[30px]">
            <div className="sm:col-span-6 col-span-12">
              <Customers />
            </div>
            <div className="sm:col-span-6 col-span-12">
              <Projects />
            </div>
          </div>
        </div>
        <div className="md:col-span-4 col-span-12">
          <RevenueUpdates />
          <SalesOverview />
        </div>
      </div>
    </>
  );
};

export default Charts;
