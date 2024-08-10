"use client";
import { useState } from "react";
import { Popover, Button, Label, TextInput, Checkbox } from "flowbite-react";
import { BiCaretDown } from "react-icons/bi";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Popover",
  },
];

const Popovers = () => {
  const content = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Popover title
        </h3>
      </div>
      <div className="px-3 py-2">
        <p>And here's some amazing content. It's very engaging. Right?</p>
      </div>
    </div>
  );

  const contentdata = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Popover title
        </h3>
      </div>
      <div className="px-3 py-2">
        <p>And here's some amazing content. It's very engaging. Right?</p>
      </div>
    </div>
  );
  const [open, setOpen] = useState(false);
  return (
    <>
      <BreadcrumbComp title="Popover" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-3 md:col-span-3 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default popover</h4>
            <Popover
              aria-labelledby="default-popover"
              content={
                <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
                  <div className="border-b rounded-t-3xl border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                    <h3
                      id="default-popover"
                      className="font-semibold text-gray-900 dark:text-white"
                    >
                      Popover title
                    </h3>
                  </div>
                  <div className="px-3 py-2">
                    <p>
                      And here's some amazing content. It's very engaging.
                      Right?
                    </p>
                  </div>
                </div>
              }
            >
              <Button color="primary">Default popover</Button>
            </Popover>
          </CardBox>
        </div>
        <div className="lg:col-span-3 md:col-span-3 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Company profile</h4>
            <Popover
              aria-labelledby="profile-popover"
              content={
                <div className="w-64 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <a href="#">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="/images/profile/user-3.jpg"
                        alt="Jese Leos"
                      />
                    </a>
                    <div>
                      <button
                        type="button"
                        className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primaryemphasis dark:focus:ring-blue-600"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                  <p
                    id="profile-popover"
                    className="text-base font-semibold leading-none text-gray-900 dark:text-white"
                  >
                    <a href="#">Jese Leos</a>
                  </p>
                  <p className="mb-3 text-sm font-normal">
                    <a href="#" className="hover:underline">
                      @jeseleos
                    </a>
                  </p>
                  <p className="mb-4 text-sm">
                    Open-source contributor. Building{" "}
                    <a
                      href="#"
                      className="text-primary hover:underline dark:text-primary"
                    >
                      flowbite.com
                    </a>
                    .
                  </p>
                  <ul className="flex text-sm">
                    <li className="me-2">
                      <a href="#" className="hover:underline">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          799
                        </span>
                        <span>Following</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          3,758
                        </span>
                        <span>Followers</span>
                      </a>
                    </li>
                  </ul>
                </div>
              }
            >
              <Button color="primary">Company profile</Button>
            </Popover>
          </CardBox>
        </div>
        <div className="lg:col-span-3 md:col-span-3 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Controlled</h4>
            <Popover
              aria-labelledby="area-popover"
              open={open}
              onOpenChange={setOpen}
              content={
                <div className="flex w-64 flex-col gap-4 p-4 text-sm text-gray-500 dark:text-gray-400">
                  <div>
                    <h2 id="area-popover" className="text-base text-gray-500">
                      Area (sqft)
                    </h2>
                    <div className="mb-2 block">
                      <Label htmlFor="minsqft" value="Minimum sqft" />
                    </div>
                    <TextInput id="minsqft" type="number" />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="maxsqft" value="Maximum sqft" />
                    </div>
                    <TextInput id="maxsqft" type="number" />
                  </div>
                  <div className="flex gap-2">
                    <Button color="gray">Reset</Button>
                    <Button color="primary" onClick={() => setOpen(false)}>
                      Save
                    </Button>
                  </div>
                </div>
              }
            >
              <Button color="primary">
                Area <BiCaretDown className="ml-2" />
              </Button>
            </Popover>
          </CardBox>
        </div>
        <div className="lg:col-span-3 md:col-span-3 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Disable arrow</h4>
            <Popover
              aria-labelledby="default-popover"
              content={
                <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
                  <div className="border-b rounded-t-3xl border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                    <h3
                      id="default-popover"
                      className="font-semibold text-gray-900 dark:text-white"
                    >
                      Popover title
                    </h3>
                  </div>
                  <div className="px-3 py-2">
                    <p>
                      And here's some amazing content. It's very engaging.
                      Right?
                    </p>
                  </div>
                </div>
              }
              arrow={false}
            >
              <Button color="primary">No Arrow Popover</Button>
            </Popover>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Image popover</h4>
            <p className="text-gray-500 dark:text-gray-400">
              Due to its central geographic location in Southern Europe,{" "}
              <Popover
                trigger="hover"
                content={
                  <div className="w-96 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                    <div className="grid grid-cols-5">
                      <div className="col-span-3 p-3">
                        <div className="space-y-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            About Italy
                          </h3>
                          <p>
                            Italy is located in the middle of the Mediterranean
                            Sea, in Southern Europe it is also considered part
                            of Western Europe. A unitary parliamentary republic
                            with Rome as its capital and largest city.
                          </p>
                          <a
                            href="#"
                            className="flex items-center font-medium text-primary hover:text-primary hover:underline dark:text-primary dark:hover:text-primary"
                          >
                            Read more{" "}
                            <svg
                              className="ms-1.5 h-2 w-2 rtl:rotate-180"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 6 10"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <img
                        src="https://flowbite.com/docs/images/popovers/italy.png"
                        className="col-span-2 h-full"
                        alt="Italy map"
                      />
                    </div>
                  </div>
                }
              >
                <a
                  href="#"
                  className="text-primary underline hover:no-underline dark:text-primary"
                >
                  Italy
                </a>
              </Popover>{" "}
              has historically been home to myriad peoples and cultures. In
              addition to the various ancient peoples dispersed throughout what
              is now modern-day Italy, the most predominant being the
              Indo-European Italic peoples who gave the peninsula its name,
              beginning from the classical era, Phoenicians and Carthaginians
              founded colonies mostly in insular Italy the most predominant being the
              Indo-European Italic peoples who gave the peninsula its name,
              beginning from the classical era, Phoenicians and Carthaginians
              founded colonies mostly in insular Italy the most predominant being the
              Indo-European Italic peoples who gave the peninsula its name,
              beginning from the classical era, Phoenicians and Carthaginians
              founded colonies mostly in insular Italy Phoenicians and Carthaginians
              founded colonies mostly in insular Italy
            </p>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Password strength</h4>
            <form className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="name@flowbite.com"
                  className="form-control"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Your password" />
                </div>
                <Popover
                  trigger="hover"
                  content={
                    <div className="space-y-2 p-3">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Must have at least 6 characters
                      </h3>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
                        <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
                        <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
                        <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
                      </div>
                      <p>It’s better to have:</p>
                      <ul>
                        <li className="mb-1 flex items-center">
                          <svg
                            className="me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 12"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5.917 5.724 10.5 15 1.5"
                            />
                          </svg>
                          Upper & lower case letters
                        </li>
                        <li className="mb-1 flex items-center">
                          <svg
                            className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          A symbol (#$&)
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          A longer password (min. 12 chars.)
                        </li>
                      </ul>
                    </div>
                  }
                >
                  <TextInput id="password1" type="password" required className="form-control" />
                </Popover>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Button type="submit" color="primary">Submit</Button>
            </form>
          </CardBox>
        </div>
        <div className="lg:col-span-8 md:col-span-8 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Placement</h4>
            <div className="flex gap-2">
              <Popover content={content} placement="top">
                <Button color="primary">Popover top</Button>
              </Popover>
              <Popover content={content} placement="right">
                <Button color="primary">Popover right</Button>
              </Popover>
              <Popover content={content} placement="bottom">
                <Button color="primary">Popover bottom</Button>
              </Popover>
              <Popover content={content} placement="left">
                <Button color="primary">Popover left</Button>
              </Popover>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Trigger type</h4>
            <div className="flex gap-2">
              <Popover content={contentdata} trigger="hover">
                <Button color="primary">Popover hover</Button>
              </Popover>
              <Popover content={contentdata} trigger="click">
                <Button color="primary">Popover click</Button>
              </Popover>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Popovers;
