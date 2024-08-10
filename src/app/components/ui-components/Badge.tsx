"use client";
import React from "react";
import { Badge } from "flowbite-react";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import { HiCheck, HiClock } from "react-icons/hi";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Badges",
  },
];

const Badges = () => {
  return (
    <>
      <BreadcrumbComp title="Badges" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default Badges</h4>
            <div className="flex flex-wrap gap-2">
              <Badge color="primary">Primary</Badge>
              <Badge color="secondary">Secondary</Badge>
              <Badge color="success">Success</Badge>
              <Badge color="info">Info</Badge>
              <Badge color="warning">Warning</Badge>
              <Badge color="error">Danger</Badge>
              <Badge color="lightgray">Light</Badge>
              <Badge color="dark">Dark</Badge>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default Badges</h4>
            <div className="flex flex-wrap gap-2">
              <Badge color="lightprimary">Primary</Badge>
              <Badge color="lightsecondary">Secondary</Badge>
              <Badge color="lightsuccess">Success</Badge>
              <Badge color="lightinfo">Info</Badge>
              <Badge color="lightwarning">Warning</Badge>
              <Badge color="lighterror">Danger</Badge>
              <Badge color="lightgray">Light</Badge>
              <Badge color="dark">Dark</Badge>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Badge as link</h4>
            <div className="flex flex-wrap gap-2">
              <div className="flex flex-wrap gap-2">
                <Badge href="#" color="primary">
                  Default
                </Badge>
                <Badge size="sm" href="#" color="primary">
                  Default
                </Badge>
              </div>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Badge with icon</h4>
            <div className="flex flex-wrap gap-2">
              <Badge icon={HiCheck} color="primary">
                2 minutes ago
              </Badge>
              <Badge color="gray" icon={HiClock}>
                3 days ago
              </Badge>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Badge with icon only</h4>
            <div className="flex flex-wrap gap-2">
              <Badge color="primary" icon={HiCheck} />
              <Badge color="gray" icon={HiCheck} />
              <Badge color="primary" size="sm" icon={HiCheck} />
              <Badge color="gray" size="sm" icon={HiCheck} />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge color="primary" icon={HiCheck} />
              <Badge color="gray" icon={HiCheck} />
              <Badge color="primary" size="sm" icon={HiCheck} />
              <Badge color="gray" size="sm" icon={HiCheck} />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Badge Sizes</h4>
            <div className="flex flex-wrap gap-2">
              <Badge color="primary" size="sm">
                Primary
              </Badge>
              <Badge color="secondary" size="sm">
                Secondary
              </Badge>
              <Badge color="success" size="sm">
                Success
              </Badge>
              <Badge color="info" size="sm">
                Info
              </Badge>
              <Badge color="warning" size="sm">
                Warning
              </Badge>
              <Badge color="error" size="sm">
                Danger
              </Badge>
              <Badge color="lightgray" size="sm">
                Light
              </Badge>
              <Badge color="dark" size="sm">
                Dark
              </Badge>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Badges;
