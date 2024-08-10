"use client"
import React from "react";
import { Carousel } from "flowbite-react";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Carousel",
  },
];

const Carousels = () => {
  return (
    <>
      <BreadcrumbComp title="Carousel" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default carousel</h4>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel>
                <img
                  src="/images/blog/blog-img1.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img2.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img3.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img4.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img5.jpg"
                  alt="..."
                />
              </Carousel>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Static Carousel</h4>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel slide={false}>
              <img
                  src="/images/blog/blog-img1.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img2.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img3.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img4.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img5.jpg"
                  alt="..."
                />
              </Carousel>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Sliding interval</h4>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel slideInterval={5000}>
              <img
                  src="/images/blog/blog-img1.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img2.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img3.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img4.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img5.jpg"
                  alt="..."
                />
              </Carousel>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Custom controls</h4>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel leftControl="left" rightControl="right">
              <img
                  src="/images/blog/blog-img1.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img2.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img3.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img4.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img5.jpg"
                  alt="..."
                />
              </Carousel>
            </div>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Indicators</h4>
            <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel>
              <img
                  src="/images/blog/blog-img1.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img2.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img3.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img4.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img5.jpg"
                  alt="..."
                />
              </Carousel>
              <Carousel indicators={false}>
              <img
                  src="/images/blog/blog-img1.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img2.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img3.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img4.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img5.jpg"
                  alt="..."
                />
              </Carousel>
            </div>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Pause On Hover</h4>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel pauseOnHover>
              <img
                  src="/images/blog/blog-img1.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img2.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img3.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img4.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img5.jpg"
                  alt="..."
                />
              </Carousel>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Slider content</h4>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel>
              <img
                  src="/images/blog/blog-img1.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img2.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img3.jpg"
                  alt="..."
                />
              </Carousel>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">
              Handle onSlideChanged event
            </h4>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel
                onSlideChange={(index) => console.log("onSlideChange()", index)}
              >
                <img
                  src="/images/blog/blog-img1.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img2.jpg"
                  alt="..."
                />
                <img
                  src="/images/blog/blog-img3.jpg"
                  alt="..."
                />
              </Carousel>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Carousels;
