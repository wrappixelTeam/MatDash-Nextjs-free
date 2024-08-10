"use client";
import React from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Breadcrumb",
  },
];

const Breadcrumbs = () => {
  return (
    <>
      <BreadcrumbComp title="Breadcrumb" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-6 md:col-span-6 col-span-12 flex items-stretch">
          <CardBox>
            <h4 className="text-lg font-semibold">Default breadcrumb</h4>
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item href="#" icon={HiHome}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
              <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
            </Breadcrumb>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Background color</h4>
            <Breadcrumb
              aria-label="Solid background breadcrumb example"
              className="bg-muted px-5 py-3 dark:bg-darkmuted rounded-md"
            >
              <Breadcrumb.Item href="#" icon={HiHome}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
              <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
            </Breadcrumb>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
