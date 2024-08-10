"use client";
import React from "react";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Button",
  },
];

const Buttons = () => {
  return (
    <>
      <BreadcrumbComp title="Button" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold mb-[0.875rem]">
              General Buttons pills
            </h4>
            <div className="flex gap-4 flex-wrap">
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
              <Button color="success">Success</Button>
              <Button color="info">Info</Button>
              <Button color="warning">Warning</Button>
              <Button color="error">Danger</Button>
              <Button color="lightgray">Light</Button>
              <Button color="dark">Dark</Button>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold mb-[0.875rem]">
              Light Buttons pills
            </h4>
            <div className="flex gap-4 flex-wrap">
              <Button gradientMonochrome="info">Primary</Button>
              <Button gradientMonochrome="success">Secondary</Button>
              <Button gradientMonochrome="cyan">Success</Button>
              <Button gradientMonochrome="teal">Info</Button>
              <Button gradientMonochrome="lime">Warning</Button>
              <Button gradientMonochrome="failure">Danger</Button>
              <Button gradientMonochrome="pink">Light</Button>
              <Button gradientMonochrome="purple">Dark</Button>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold mb-[0.875rem]">
              Rounded outlined Buttons
            </h4>
            <div className="flex gap-4 flex-wrap">
              <Button
                color="primary"
                className="border border-primary text-primary hover:bg-primary hover:text-white"
                pill
                outline
              >
                Primary
              </Button>
              <Button
                color="secondary"
                className="border border-secondary text-secondary hover:bg-secondary hover:text-white"
                pill
                outline
              >
                Secondary
              </Button>
              <Button
                color="success"
                className="border border-success text-success hover:bg-success hover:text-white"
                pill
                outline
              >
                Success
              </Button>
              <Button
                color="info"
                className="border border-info text-info hover:bg-info hover:text-white"
                pill
                outline
              >
                Info
              </Button>
              <Button
                color="warning"
                className="border border-warning text-warning hover:bg-warning hover:text-white"
                pill
                outline
              >
                Warning
              </Button>
              <Button
                color="error"
                className="border border-error text-error hover:bg-error hover:text-white"
                pill
                outline
              >
                Danger
              </Button>
              <Button
                color="lightgray"
                className="border border-white text-white hover:bg-white hover:text-dark"
                pill
                outline
              >
                Light
              </Button>
              <Button
                color="dark"
                className="border border-dark text-dark hover:bg-dark hover:text-white"
                pill
                outline
              >
                Dark
              </Button>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold mb-[0.875rem]">Button Tags</h4>
            <div className="flex gap-4 flex-wrap">
              <Button className="bg-primary">Link</Button>
              <Button className="bg-primary">Button</Button>
              <Button className="bg-primary">Input</Button>
              <Button className="bg-primary">Submit</Button>
              <Button className="bg-primary">Reset</Button>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Button className="bg-primary">Link</Button>
              <Button className="bg-primary">Button</Button>
              <Button className="bg-primary">Input</Button>
              <Button className="bg-primary">Submit</Button>
              <Button className="bg-primary">Reset</Button>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold mb-[0.875rem]">
              Button Sizes
            </h4>
            <div className="flex flex-wrap items-start gap-2">
              <Button size="xs" color={"primary"} className="rounded-md">
                Extra small
              </Button>
              <Button size="sm" color={"primary"} className="rounded-md">
                Small
              </Button>
              <Button size="md" color={"primary"} className="rounded-md">
                Base
              </Button>
              <Button size="lg" color={"primary"} className="rounded-md">
                Large
              </Button>
              <Button size="xl" color={"primary"} className="rounded-md">
                Extra large
              </Button>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold mb-[0.875rem]">
              Button Sizes with rounded
            </h4>
            <div className="flex flex-wrap items-start gap-2">
              <Button size="xs" color={"primary"}>
                Extra small
              </Button>
              <Button size="sm" color={"primary"}>
                Small
              </Button>
              <Button size="md" color={"primary"}>
                Base
              </Button>
              <Button size="lg" color={"primary"}>
                Large
              </Button>
              <Button size="xl" color={"primary"}>
                Extra large
              </Button>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold mb-[0.875rem]">
              Button with icon
            </h4>
            <div className="flex flex-wrap gap-2">
              <Button className="bg-primary">
                <HiShoppingCart className="mr-2 h-5 w-5" />
                Buy now
              </Button>
              <Button className="bg-primary">
                Choose plan
                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button className="bg-primary">
                <HiShoppingCart className="mr-2 h-5 w-5" />
                Buy now
              </Button>
              <Button className="bg-primary">
                Choose plan
                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold mb-[0.875rem]">
              Button with loading state
            </h4>
            <div className="flex flex-wrap items-start gap-2">
              <Button className="bg-primary" size="xs" isProcessing>
                Click me!
              </Button>
              <Button size="sm" isProcessing gradientDuoTone="purpleToBlue">
                Click me!
              </Button>
              <Button size="md" isProcessing color="red">
                Click me!
              </Button>
              <Button className="bg-primary" size="lg" isProcessing pill>
                Click me!
              </Button>
              <Button size="xl" isProcessing outline>
                Click me!
              </Button>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Buttons;
