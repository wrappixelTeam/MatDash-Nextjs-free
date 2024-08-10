import React from "react";
import { Spinner, Button } from "flowbite-react";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Spinner",
  },
];

const Spinners = () => {
  return (
    <>
      <BreadcrumbComp title="Spinner" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default spinner</h4>
            <div>
              <Spinner aria-label="Default status example" />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Spinner colors</h4>
            <div className="flex flex-wrap gap-3">
              <Spinner color="info" aria-label="Info spinner example" />
              <Spinner color="success" aria-label="Success spinner example" />
              <Spinner color="failure" aria-label="Failure spinner example" />
              <Spinner color="warning" aria-label="Warning spinner example" />
              <Spinner color="pink" aria-label="Pink spinner example" />
              <Spinner color="purple" aria-label="Purple spinner example" />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Sizing options</h4>
            <div className="flex flex-wrap gap-3">
              <Spinner aria-label="Extra small spinner example" size="xs" />
              <Spinner aria-label="Small spinner example" size="sm" />
              <Spinner aria-label="Medium sized spinner example" size="md" />
              <Spinner aria-label="Large spinner example" size="lg" />
              <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
          </CardBox>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-[1.875rem] mt-[1.875rem]">
        <div className="lg:col-span-6 md:col-span-6 col-span-12 flex items-stretch">
          <CardBox>
            <h4 className="text-lg font-semibold">Alignment</h4>
            <div className="flex flex-wrap gap-2">
              <div className="text-left">
                <Spinner aria-label="Left-aligned spinner example" />
              </div>
              <div className="text-center">
                <Spinner aria-label="Center-aligned spinner example" />
              </div>
              <div className="text-right">
                <Spinner aria-label="Right-aligned spinner example" />
              </div>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Loading buttons</h4>
            <div className="flex flex-row gap-3">
              <Button color="primary">
                <Spinner aria-label="Spinner button example" size="sm" />
                <span className="pl-3">Loading...</span>
              </Button>
              <Button color="gray">
                <Spinner
                  aria-label="Alternate spinner button example"
                  size="sm"
                />
                <span className="pl-3">Loading...</span>
              </Button>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Spinners;
