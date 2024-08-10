"use client";
import React from "react";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import TitleCard from "@/app/components/shared/TitleBorderCard";
import BasicTable1 from "@/app/components/tables/basic/Table1";
import BasicTable2 from "@/app/components/tables/basic/Tabel2";
import BasicTable3 from "@/app/components/tables/basic/Table3";
import BasicTable5 from "@/app/components/tables/basic/Table5";
import BasicTable4 from "@/app/components/tables/basic/Table4";
const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Basic Tables",
  },
];

const BasicTables = () => {
  return (
    <>
      <BreadcrumbComp title="Basic Tables" items={BCrumb} />
      <TitleCard title="Basic Tables">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="col-span-12">
            <BasicTable1 />
          </div>
          <div className="col-span-12">
            <BasicTable2 />
          </div>
          <div className="col-span-12">
            <BasicTable3 />
          </div>
          <div className="col-span-12">
            <BasicTable4 />
          </div>
          <div className="col-span-12">
            <BasicTable5 />
          </div>
        </div>
      </TitleCard>
    </>
  );
};

export default BasicTables;
