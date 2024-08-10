import React from "react";
import { Datepicker } from "flowbite-react";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Datepicker",
  },
];

const Datepick = () => {
  return (
    <>
      <BreadcrumbComp title="Datepicker" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default Datepicker</h4>
            <Datepicker className="form-control" />
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Localization</h4>
            <Datepicker
              language="pt-BR"
              labelTodayButton="Hoje"
              labelClearButton="Limpar"
              className="form-control"
            />
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Limit the date</h4>
            <Datepicker
              minDate={new Date(2023, 0, 1)}
              maxDate={new Date(2023, 3, 30)}
              className="form-control"
            />
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Week start</h4>
            <Datepicker
              weekStart={1} // Monday
              className="form-control"
            />
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Autohide</h4>
            <Datepicker autoHide={false} className="form-control" />
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Title</h4>
                <Datepicker title="Flowbite Datepicker" className="form-control" />
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Datepick;
