"use client";
import React from "react";
import { Rating } from "flowbite-react";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Rating",
  },
];

const Ratings = () => {
  return (
    <>
      <BreadcrumbComp title="Rating" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default rating</h4>
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
            </Rating>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Rating with text</h4>
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
              <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                4.95 out of 5
              </p>
            </Rating>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Rating count</h4>
            <Rating>
              <Rating.Star />
              <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                4.95
              </p>
              <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
              <a
                href="#"
                className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
              >
                73 reviews
              </a>
            </Rating>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Star sizing</h4>
            <div className="flex flex-col gap-2">
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
              </Rating>
              <Rating size="md">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
              </Rating>
              <Rating size="lg">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
              </Rating>
              <Rating size="lg">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
              </Rating>
              <Rating size="lg">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
              </Rating>
              <Rating size="lg">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
              </Rating>
              <Rating size="lg">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
              </Rating>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Advanced rating</h4>
            <Rating className="mb-2">
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
              <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                4.95 out of 5
              </p>
            </Rating>
            <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
              1,745 global ratings
            </p>
            <Rating.Advanced percentFilled={70} className="mb-2">
              5 star
            </Rating.Advanced>
            <Rating.Advanced percentFilled={17} className="mb-2">
              4 star
            </Rating.Advanced>
            <Rating.Advanced percentFilled={8} className="mb-2">
              3 star
            </Rating.Advanced>
            <Rating.Advanced percentFilled={4} className="mb-2">
              2 star
            </Rating.Advanced>
            <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Ratings;
