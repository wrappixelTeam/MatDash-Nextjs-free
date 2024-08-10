import React from "react";
import { Progress } from "flowbite-react";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Progress Bar",
  },
];

const ProgressBar = () => {
  return (
    <>
      <BreadcrumbComp title="Progress Bar" items={BCrumb} />
      <CardBox className="mb-[1.875rem]">
        <h4 className="text-lg font-semibold">Default Progress Bar</h4>
        <Progress progress={45} />
      </CardBox>

      <CardBox className="mb-[1.875rem]">
        <h4 className="text-lg font-semibold">Progress bar with labels</h4>
        <Progress
          progress={50}
          textLabel="Flowbite"
          size="lg"
          labelProgress
          labelText

        />
      </CardBox>

      <CardBox className="mb-[1.875rem]">
        <h4 className="text-lg font-semibold">
          Progress bar Label positioning
        </h4>
        <Progress
          progress={45}
          progressLabelPosition="inside"
          textLabel="Flowbite"
          textLabelPosition="outside"
          size="lg"
          labelProgress
          labelText
        />
      </CardBox>

      <CardBox className="mb-[1.875rem]">
        <h4 className="text-lg font-semibold">Progress Bar Sizing</h4>
        <div className="flex flex-col gap-2">
          <div className="text-base font-medium dark:text-white">Small</div>
          <Progress progress={45} size="sm" color="dark" />
          <div className="text-base font-medium dark:text-white">Default</div>
          <Progress progress={45} size="md" color="dark" />
          <div className="text-lg font-medium dark:text-white">Large</div>
          <Progress progress={45} size="lg" color="dark" />
          <div className="text-lg font-medium dark:text-white">Extra Large</div>
          <Progress progress={45} size="xl" color="dark" />
        </div>
      </CardBox>

      <CardBox className="mb-[1.875rem]">
        <h4 className="text-lg font-semibold">Progress Bar Color</h4>
        <div className="flex flex-col gap-2">
          <div className="text-base font-medium">Dark</div>
          <Progress progress={45} color="dark" />
          <div className="text-base font-medium text-blue-700">Blue</div>
          <Progress progress={45} color="blue" />
          <div className="text-base font-medium text-red-700">Red</div>
          <Progress progress={45} color="red" />
          <div className="text-base font-medium text-green-700">Green</div>
          <Progress progress={45} color="green" />
          <div className="text-base font-medium text-yellow-700">Yellow</div>
          <Progress progress={45} color="yellow" />
          <div className="text-base font-medium text-indigo-700">Indigo</div>
          <Progress progress={45} color="indigo" />
          <div className="text-base font-medium text-purple-700">Purple</div>
          <Progress progress={45} color="purple" />
          <div className="text-base font-medium text-cyan-700">Cyan</div>
          <Progress progress={45} color="cyan" />
          <div className="text-base font-medium text-gray-700">Gray</div>
          <Progress progress={45} color="gray" />
          <div className="text-base font-medium text-lime-700">Lime</div>
          <Progress progress={45} color="lime" />
          <div className="text-base font-medium text-pink-700">Pink</div>
          <Progress progress={45} color="pink" />
          <div className="text-base font-medium text-teal-700">Teal</div>
          <Progress progress={45} color="teal" />
        </div>
      </CardBox>
    </>
  );
};

export default ProgressBar;
