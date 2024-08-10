"use client";
import React from "react";
import Congratulations from "@/app/components/dashboards/analytics/Congratulations";
import LatestDeal from "@/app/components/dashboards/analytics/LatestDeal";
import Customer from "@/app/components/dashboards/analytics/Customer";
import Payments from "@/app/components/dashboards/analytics/Payments";
import Products from "@/app/components/dashboards/analytics/Products";
import PopularProducts from "@/app/components/dashboards/analytics/PopularProducts";
import UpcommingSchedule from "@/app/components/dashboards/analytics/UpcommingSchedule";
import LatestReview from "@/app/components/dashboards/analytics/LatestReview";
import VisitFromUsa from "@/app/components/dashboards/analytics/VisitFromUsa";
import CardBox from "@/app/components/shared/CardBox";

const Analytics = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-[30px]">
        <Congratulations />
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <LatestDeal />
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <Customer />
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <Payments />
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <Products />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <PopularProducts />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <UpcommingSchedule />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <LatestReview />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <VisitFromUsa />
        </div>
      </div>
    </>
  );
};

export default Analytics;
