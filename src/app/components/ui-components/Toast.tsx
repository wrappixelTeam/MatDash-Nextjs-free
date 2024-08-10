"use client";
import { useState } from "react";
import { Toast, Button } from "flowbite-react";
import { HiFire, HiCheck, HiExclamation, HiX } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { MdLoop } from "react-icons/md";

import CardBox from "@/app/components/shared/CardBox";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Toast",
  },
];

const Toasts = () => {
    const [showToast, setShowToast] = useState(false);
  return (
    <>
      <BreadcrumbComp title="Toast" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default toast</h4>
            <Toast>
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                <HiFire className="h-5 w-5" />
              </div>
              <div className="ml-3 text-sm font-normal">Set yourself free.</div>
              <Toast.Toggle />
            </Toast>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Toast with button</h4>
            <Toast>
              <div className="text-sm font-normal">Conversation archived.</div>
              <div className="ml-auto flex items-center space-x-2">
                <a
                  href="#"
                  className="rounded-lg p-1.5 text-sm font-medium text-primary hover:bg-cyan-100 dark:text-primary dark:hover:bg-gray-700"
                >
                  Undo
                </a>
                <Toast.Toggle />
              </div>
            </Toast>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Interactive toast</h4>
            <Toast>
              <div className="flex items-start">
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-900 dark:text-cyan-300">
                  <MdLoop className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">
                  <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                    Update available
                  </span>
                  <div className="mb-2 text-sm font-normal">
                    A new software version is available for download.A new
                    software version is available for download.A new software
                    version is available for download.A new software version is
                    available for
                  </div>
                  <div className="flex gap-2">
                    <div className="w-auto">
                      <Button size="xs" color="primary">
                        Update
                      </Button>
                    </div>
                    <div className="w-auto">
                      <Button color="light" size="xs">
                        Not now
                      </Button>
                    </div>
                  </div>
                </div>
                <Toast.Toggle />
              </div>
            </Toast>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Toast colors</h4>
            <div className="flex flex-col gap-4">
              <Toast>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                  <HiCheck className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">
                  Item moved successfully.
                </div>
                <Toast.Toggle />
              </Toast>
              <Toast>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                  <HiX className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">
                  Item has been deleted.
                </div>
                <Toast.Toggle />
              </Toast>
              <Toast>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
                  <HiExclamation className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">
                  Improve password difficulty.
                </div>
                <Toast.Toggle />
              </Toast>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Feedback toast</h4>
            <Toast>
              <FaTelegramPlane className="h-5 w-5 text-primary dark:text-primary" />
              <div className="pl-4 text-sm font-normal">
                Message sent successfully.
              </div>
            </Toast>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Custom dismissal handling</h4>
            <div className="space-y-4">
              <Button onClick={() => setShowToast((state) => !state)} color="primary">
                Toggle toast
              </Button>
              {showToast && (
                <Toast>
                  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                    <HiFire className="h-5 w-5" />
                  </div>
                  <div className="ml-3 text-sm font-normal">
                    Set yourself free.
                  </div>
                  <Toast.Toggle onDismiss={() => setShowToast(false)} />
                </Toast>
              )}
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Toasts;
