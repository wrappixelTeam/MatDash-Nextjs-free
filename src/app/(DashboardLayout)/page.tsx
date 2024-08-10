"use client";
import React from "react";
import RevenueForcast from "../components/dashboards/ecommerce/RevenueForcast";
import BigCards from "../components/dashboards/ecommerce/BigCards";
import SalesProfit from "../components/dashboards/ecommerce/SalesProfit";
import ProductSales from "../components/dashboards/ecommerce/ProductSales";
import MarketingReport from "../components/dashboards/ecommerce/MarketingReport";
import Payments from "../components/dashboards/ecommerce/Payments";
import AnnualProfit from "../components/dashboards/ecommerce/AnnualProfit";
import RecentTransaction from "../components/dashboards/ecommerce/RecentTransaction";
import TopProducts from "../components/dashboards/ecommerce/TopProducts";


const page = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="lg:col-span-8 col-span-12">
          <RevenueForcast />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <BigCards />
        </div>
        <div className="md:col-span-8 col-span-12">
          <SalesProfit />
        </div>
        <div className="md:col-span-4 col-span-12">
          <ProductSales />
        </div>
        <div className="lg:col-span-5 col-span-12">
          <MarketingReport />
        </div>
        <div className="lg:col-span-3 col-span-12">
          <Payments />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <AnnualProfit />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <TopProducts />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <RecentTransaction />
        </div>
      </div>
     
    </>
  );
};

export default page;
