"use client";
import React from "react";
import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Dropdown",
  },
];

const Dropdownmenu = () => {
  return (
    <>
      <BreadcrumbComp title="Dropdown" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-4 md:col-span-4 col-span-12 flex items-stretch">
          <CardBox>
            <h4 className="text-lg font-semibold">Dropdown header</h4>
            <Dropdown
              label="Dropdown button"
              dismissOnClick={false}
              className="flex-wrap"
              color="primary"
            >
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>

            <Dropdown label="Dropdown button" color="primary">
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  bonnie@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
          <h4 className="text-lg font-semibold">Dropdown items with icon</h4>
            <Dropdown label="Dropdown" color="primary">
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  bonnie@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
              <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
              <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
            </Dropdown>

            <h4 className="text-lg font-semibold">Inline dropdown</h4>
            <Dropdown label="Dropdown" inline>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12 flex items-stretch">
          <CardBox>
          <h4 className="text-lg font-semibold">Dropdown sizes</h4>
            <div className="flex flex-wrap items-center gap-4">
              <Dropdown label="Small dropdown" size="sm" color="primary">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
              <Dropdown label="Large dropdown" size="lg" color="primary">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
            </div>
          </CardBox>
        </div>
      </div>
      <div className="mt-[1.875rem]">
        <CardBox>
        <h4 className="text-lg font-semibold">Placement options</h4>
          <div className="flex flex-wrap gap-4">
            <Dropdown label="Dropdown top" placement="top" color="primary">
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Dropdown label="Dropdown right" placement="right" color="primary">
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Dropdown label="Dropdown bottom" placement="bottom" color="primary">
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Dropdown label="Dropdown left" placement="left" color="primary">
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Dropdown label="Dropdown left start" placement="left-start" color="primary">
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Dropdown label="Dropdown right start" placement="right-start" color="primary">
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
        </CardBox>
      </div>
    </>
  );
};

export default Dropdownmenu;
