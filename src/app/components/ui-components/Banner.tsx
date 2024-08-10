import React from "react";
import { Banner, Button, Label, TextInput } from "flowbite-react";
import { FaBookOpen } from "react-icons/fa";
import { HiX, HiArrowRight } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import { MdPercent } from "react-icons/md";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import FullLogo from "@/app/(DashboardLayout)/layout/shared/logo/FullLogo";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Banner",
  },
];

const Bannercover = () => {
  return (
    <>
      <BreadcrumbComp title="Banner" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default sticky banner</h4>
            <Banner>
              <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 rounded-md">
                <div className="mx-auto flex items-center">
                  <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                    <MdAnnouncement className="mr-4 h-4 w-4" />
                    <span className="[&_p]:inline">
                      New brand identity has been launched for the&nbsp;
                      <a
                        href="https://flowbite.com"
                        className="inline font-medium text-primary underline decoration-solid underline-offset-2 hover:no-underline dark:text-primary"
                      >
                        Flowbite Library
                      </a>
                    </span>
                  </p>
                </div>
                <Banner.CollapseButton
                  color="gray"
                  className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
                >
                  <HiX className="h-4 w-4" />
                </Banner.CollapseButton>
              </div>
            </Banner>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Bottom banner position</h4>
            <Banner>
              <div className="flex w-full justify-between border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 rounded-md">
                <div className="mx-auto flex items-center">
                  <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                    <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 p-1 dark:bg-gray-600">
                      <MdPercent className="h-4 w-4" />
                    </span>
                    <span className="[&_p]:inline">
                      Get 5% commision per sale&nbsp;
                      <a
                        href="https://flowbite.com"
                        className="ml-0 flex items-center text-sm font-medium text-primary hover:underline dark:text-primary md:ml-1 md:inline-flex"
                      >
                        Become a partner
                        <HiArrowRight className="ml-2" />
                      </a>
                    </span>
                  </p>
                </div>
                <Banner.CollapseButton
                  color="gray"
                  className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
                >
                  <HiX className="h-4 w-4" />
                </Banner.CollapseButton>
              </div>
            </Banner>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Marketing CTA banner</h4>
            <Banner>
              <div className="flex w-[calc(100%-2rem)] flex-col justify-between rounded-md border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl">
                <div className="mb-3 mr-4 flex flex-col gap-7 items-start md:mb-0 md:flex-row md:items-center">
                  <FullLogo/>
                  <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                    Build websites even faster with components on top of
                    Tailwind CSS
                  </p>
                </div>
                <div className="flex shrink-0 items-center">
                  <Button href="#" color="primary">Sign up</Button>
                  <Banner.CollapseButton
                    color="gray"
                    className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
                  >
                    <HiX className="h-4 w-4" />
                  </Banner.CollapseButton>
                </div>
              </div>
            </Banner>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Newsletter sign-up banner</h4>
            <Banner>
              <div className="flex w-full items-center justify-between rounded-md border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                <div className="mx-auto flex w-full shrink-0 items-center sm:w-auto">
                  <form
                    action="#"
                    className="flex w-full flex-col items-center md:flex-row md:gap-x-3"
                  >
                    <Label
                      htmlFor="email"
                      className="mb-2 mr-auto shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:m-0 md:mb-0"
                    >
                      Sign up for our newsletter
                    </Label>
                    <TextInput
                      id="email"
                      placeholder="Enter your email"
                      required
                      type="email"
                    />
                    <Button type="submit" color="primary">Subscribe</Button>
                  </form>
                </div>
                <Banner.CollapseButton
                  color="gray"
                  className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
                >
                  <HiX className="h-4 w-4" />
                </Banner.CollapseButton>
              </div>
            </Banner>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Informational banner</h4>
            <Banner>
              <div className="flex w-full flex-col justify-between rounded-md border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 md:flex-row">
                <div className="mb-4 md:mb-0 md:mr-4">
                  <h2 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
                    Integration is the key
                  </h2>
                  <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                    You can integrate Flowbite with many tools to make your work
                    even more efficient and lightning fast based on Tailwind
                    CSS.
                  </p>
                </div>
                <div className="flex shrink-0 items-center">
                  <a
                    href="#"
                    className="mr-3 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    <FaBookOpen className="mr-2 h-4 w-4" />
                    Learn more
                  </a>
                  <a
                    href="#"
                    className="mr-2 inline-flex items-center justify-center rounded-lg bg-primary px-3 py-2 text-xs font-medium text-white hover:bg-primaryemphasis focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-primary dark:hover:bg-primary dark:focus:ring-cyan-800"
                  >
                    Get started
                    <HiArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <Banner.CollapseButton
                    color="gray"
                    className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
                  >
                    <HiX className="h-4 w-4" />
                  </Banner.CollapseButton>
                </div>
              </div>
            </Banner>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Bannercover;
