import React from "react";
import { Button, Tooltip } from "flowbite-react";
import CardBox from "@/app/components/shared/CardBox";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Tooltips",
  },
];

const Tooltips = () => {
  return (
    <>
     <BreadcrumbComp title="Tooltips" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Tooltip styles</h4>
            <div className="flex gap-2">
              <Tooltip content="Tooltip content" style="light">
                <Button className="bg-primary hover:bg-primaryemphasis">
                  Light tooltip
                </Button>
              </Tooltip>
              <Tooltip content="Tooltip content" style="dark">
                <Button className="bg-primary hover:bg-primaryemphasis">
                  Dark tooltip
                </Button>
              </Tooltip>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Trigger type</h4>
            <div className="flex gap-2">
              <Tooltip content="Tooltip content" trigger="hover">
                <Button className="bg-primary hover:bg-primaryemphasis">
                  Tooltip hover
                </Button>
              </Tooltip>
              <Tooltip content="Tooltip content" trigger="click">
                <Button className="bg-primary hover:bg-primaryemphasis">
                  Tooltip click
                </Button>
              </Tooltip>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Disable Tooltip</h4>
            <Tooltip content="Tooltip content" arrow={false}>
              <Button className="bg-primary hover:bg-primaryemphasis">Default tooltip</Button>
            </Tooltip>
          </CardBox>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-[1.875rem] my-[1.875rem]">
        <div className="lg:col-span-8 md:col-span-8 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Animation Tooltip</h4>
            <div className="flex flex-wrap gap-2">
              <Tooltip content="Tooltip content" animation={false}>
                <Button className="bg-primary hover:bg-primaryemphasis">Not animated tooltip</Button>
              </Tooltip>
              <Tooltip content="Tooltip content" animation="duration-150">
                <Button className="bg-primary hover:bg-primaryemphasis">Fast animation</Button>
              </Tooltip>
              <Tooltip content="Tooltip content" animation="duration-300">
                <Button className="bg-primary hover:bg-primaryemphasis">Normal speed animation</Button>
              </Tooltip>
              <Tooltip content="Tooltip content" animation="duration-500">
                <Button className="bg-primary hover:bg-primaryemphasis">Slow animation</Button>
              </Tooltip>
              <Tooltip content="Tooltip content" animation="duration-1000">
                <Button className="bg-primary hover:bg-primaryemphasis">Really slow animation</Button>
              </Tooltip>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Tooltip Placement</h4>
            <div className="flex flex-wrap gap-2">
              <Tooltip content="Tooltip content" placement="top">
                <Button color={"primary"}>
                  Tooltip top
                </Button>
              </Tooltip>
              <Tooltip content="Tooltip content" placement="right">
                <Button className="bg-primary hover:bg-primaryemphasis">
                  Tooltip right
                </Button>
              </Tooltip>
              <Tooltip content="Tooltip content" placement="bottom">
                <Button className="bg-primary hover:bg-primaryemphasis">
                  Tooltip bottom
                </Button>
              </Tooltip>
              <Tooltip content="Tooltip content" placement="left">
                <Button className="bg-primary hover:bg-primaryemphasis">
                  Tooltip left
                </Button>
              </Tooltip>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Tooltips;
