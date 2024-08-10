"use client";
import React from "react";
import { Card, Alert } from "flowbite-react";
import { HiInformationCircle, HiEye } from "react-icons/hi";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Notification",
  },
];

const Notification = () => {
  function ExampleAdditionalContent() {
    return (
      <>
        <div className="mb-4 mt-2 text-sm text-cyan-700 dark:text-cyan-800">
          More info about this info alert goes here. This example text is going
          to run a bit longer so that you can see how spacing within an alert
          works with this kind of content.
        </div>
        <div className="flex">
          <button
            type="button"
            className="mr-2 inline-flex items-center rounded-md bg-cyan-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-800 dark:hover:bg-cyan-900"
          >
            <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
            View more
          </button>
          <button
            type="button"
            className="rounded-md border border-cyan-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-cyan-700 hover:bg-cyan-800 hover:text-white focus:ring-4 focus:ring-cyan-300 dark:border-cyan-800 dark:text-cyan-800 dark:hover:text-white"
          >
            Dismiss
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <BreadcrumbComp title="Notification" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default alert</h4>
            <Alert color="primary" className="rounded-md">
              <span className="font-medium">Primary</span> - A simple primary
              alert
            </Alert>

            <Alert color="secondary" className="rounded-md">
              <span className="font-medium">Secondary</span> A simple Secondary
              alert
            </Alert>

            <Alert color="success" className="rounded-md">
              <span className="font-medium">Success</span> A simple Success
              alert
            </Alert>

            <Alert color="info" className="rounded-md">
              <span className="font-medium">Info</span> A simple Info alert
            </Alert>

            <Alert color="warning" className="rounded-md">
              <span className="font-medium">Warning</span> A simple Warning
              alert
            </Alert>

            <Alert color="error" className="rounded-md">
              <span className="font-medium">Error</span> A simple Error alert
            </Alert>

            <Alert color="dark" className="rounded-md">
              <span className="font-medium">Dark</span> A simple Dark alert
            </Alert>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Light Default alert</h4>
            <Alert color="lightprimary" className="rounded-md">
              <span className="font-medium">Primary</span> - A simple primary
              alert
            </Alert>

            <Alert color="lightsecondary" className="rounded-md">
              <span className="font-medium">Secondary</span> A simple Secondary
              alert
            </Alert>

            <Alert color="lightsuccess" className="rounded-md">
              <span className="font-medium">Success</span> A simple Success
              alert
            </Alert>

            <Alert color="lightinfo" className="rounded-md">
              <span className="font-medium">Info</span> A simple Info alert
            </Alert>

            <Alert color="lightwarning" className="rounded-md">
              <span className="font-medium">Warning</span> A simple Warning
              alert
            </Alert>

            <Alert color="lighterror" className="rounded-md">
              <span className="font-medium">Error</span> A simple Error alert
            </Alert>

            <Alert color="dark" className="rounded-md">
              <span className="font-medium">Dark</span> A simple Dark alert
            </Alert>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Alert with icon</h4>
            <Alert
              color="primary"
              icon={HiInformationCircle}
              className="rounded-md"
            >
              <span className="font-medium">Primary</span> - A simple primary
              alert
            </Alert>

            <Alert
              color="secondary"
              icon={HiInformationCircle}
              className="rounded-md"
            >
              <span className="font-medium">Secondary</span> - A simple
              secondary alert
            </Alert>

            <Alert
              color="success"
              icon={HiInformationCircle}
              className="rounded-md"
            >
              <span className="font-medium">Success</span> - A simple success
              alert
            </Alert>

            <Alert
              color="info"
              icon={HiInformationCircle}
              className="rounded-md"
            >
              <span className="font-medium">Info</span> - A simple Info alert
            </Alert>

            <Alert
              color="warning"
              icon={HiInformationCircle}
              className="rounded-md"
            >
              <span className="font-medium">Warning</span> - A simple warning
              alert
            </Alert>

            <Alert
              color="error"
              icon={HiInformationCircle}
              className="rounded-md"
            >
              <span className="font-medium">Danger</span> - A simple Danger
              alert
            </Alert>

            <Alert
              color="dark"
              icon={HiInformationCircle}
              className="rounded-md"
            >
              <span className="font-medium">Dark</span> - A simple Dark alert
            </Alert>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Light Alert with icon</h4>
            <Alert
              color="lightprimary"
              icon={HiInformationCircle}
              className="rounded-md"
            >
              <span className="font-medium">Primary</span> - A simple Primary
              alert
            </Alert>

            <Alert
              color="lightsecondary"
              icon={HiInformationCircle}
              className="rounded-md"
            >
              <span className="font-medium">Secondary</span> - A simple
              Secondary alert
            </Alert>

            <Alert
              color="lightsuccess"
              icon={HiInformationCircle}
              className="rounded-md"
            >
              <span className="font-medium">Success</span> - A simple Success
              alert
            </Alert>

            <Alert
              color="lightinfo"
              icon={HiInformationCircle}
              className="rounded-md"
            >
              <span className="font-medium">Info</span> - A simple Info alert
            </Alert>

            <Alert
              color="lightwarning"
              icon={HiInformationCircle}
              className="rounded-md"
            >
              <span className="font-medium">Warning</span> - A simple Warning
              alert
            </Alert>

            <Alert
              color="lighterror"
              icon={HiInformationCircle}
              className="rounded-md"
            >
              <span className="font-medium">Error</span> - A simple Error alert
            </Alert>

            <Alert
              color="dark"
              icon={HiInformationCircle}
              className="rounded-md"
            >
              <span className="font-medium">Dark</span> - A simple dark alert
            </Alert>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Dismissible alert</h4>
            <Alert
              color="primary"
              onDismiss={() => alert("Alert dismissed!")}
              className="rounded-md"
            >
              <span className="font-medium">Primary</span> - A simple Primary alert
            </Alert>

            <Alert
              color="secondary"
              onDismiss={() => alert("Alert dismissed!")}
              className="rounded-md"
            >
              <span className="font-medium">Secondary</span> - A simple
              Secondary alert
            </Alert>

            <Alert
              color="success"
              onDismiss={() => alert("Alert dismissed!")}
              className="rounded-md"
            >
              <span className="font-medium">Success</span> - A simple Success
              alert
            </Alert>

            <Alert
              color="info"
              onDismiss={() => alert("Alert dismissed!")}
              className="rounded-md"
            >
              <span className="font-medium">Info</span> - A simple Info alert
            </Alert>

            <Alert
              color="warning"
              onDismiss={() => alert("Alert dismissed!")}
              className="rounded-md"
            >
              <span className="font-medium">Warning</span> - A simple Warning
              alert
            </Alert>

            <Alert
              color="error"
              onDismiss={() => alert("Alert dismissed!")}
              className="rounded-md"
            >
              <span className="font-medium">Error</span> - A simple Error alert
            </Alert>

            <Alert
              color="dark"
              onDismiss={() => alert("Alert dismissed!")}
              className="rounded-md"
            >
              <span className="font-medium">Dark</span> - A simple Dark alert
            </Alert>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Light Dismissible alert</h4>
            <Alert
              color="lightprimary"
              onDismiss={() => alert("Alert dismissed!")}
              className="rounded-md"
            >
              <span className="font-medium">Primary</span> - A simple Primary
              alert
            </Alert>

            <Alert
              color="lightsecondary"
              onDismiss={() => alert("Alert dismissed!")}
              className="rounded-md"
            >
              <span className="font-medium">Secondary</span> - A simple
              Secondary alert
            </Alert>

            <Alert
              color="lightsuccess"
              onDismiss={() => alert("Alert dismissed!")}
              className="rounded-md"
            >
              <span className="font-medium">Success</span> - A simple Success
              alert
            </Alert>

            <Alert
              color="lightinfo"
              onDismiss={() => alert("Alert dismissed!")}
              className="rounded-md"
            >
              <span className="font-medium">Info</span> - A simple Info alert
            </Alert>

            <Alert
              color="lightwarning"
              onDismiss={() => alert("Alert dismissed!")}
              className="rounded-md"
            >
              <span className="font-medium">Warning</span> - A simple Warning
              alert
            </Alert>

            <Alert
              color="lighterror"
              onDismiss={() => alert("Alert dismissed!")}
              className="rounded-md"
            >
              <span className="font-medium">Error</span> - A simple Error alert
            </Alert>

            <Alert
              color="dark"
              onDismiss={() => alert("Alert dismissed!")}
              className="rounded-md"
            >
              <span className="font-medium">Dark</span> - A simple Dark alert
            </Alert>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Rounded alert</h4>
            <Alert color="primary" rounded>
              <span className="font-medium">Primary</span> - A simple Primary alert
            </Alert>

            <Alert color="secondary" rounded>
              <span className="font-medium">Secondary</span> - A simple
              Secondary alert
            </Alert>

            <Alert color="success" rounded>
              <span className="font-medium">Success</span> - A simple Success alert
            </Alert>

            <Alert color="info" rounded>
              <span className="font-medium">Info</span> - A simple Info alert
            </Alert>

            <Alert color="warning" rounded>
              <span className="font-medium">Warning</span> - A simple Warning alert
            </Alert>

            <Alert color="error" rounded>
              <span className="font-medium">Error</span> - A simple Error alert
            </Alert>

            <Alert color="dark" rounded>
              <span className="font-medium">Dark</span> - A simple Dark alert
            </Alert>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Light Rounded alert</h4>
            <Alert color="lightprimary" rounded>
              <span className="font-medium">Primary</span> - A simple Primary alert
            </Alert>

            <Alert color="lightsecondary" rounded>
              <span className="font-medium">Secondary</span> - A simple
              Secondary alert
            </Alert>

            <Alert color="lightsuccess" rounded>
              <span className="font-medium">Success</span> - A simple Success alert
            </Alert>

            <Alert color="lightinfo" rounded>
              <span className="font-medium">Info</span> - A simple Info alert
            </Alert>

            <Alert color="lightwarning" rounded>
              <span className="font-medium">Warning</span> - A simple Warning alert
            </Alert>

            <Alert color="lighterror" rounded>
              <span className="font-medium">Error</span> - A simple Error alert
            </Alert>

            <Alert color="dark" rounded>
              <span className="font-medium">Dark</span> - A simple Dark alert
            </Alert>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Light Border accent</h4>
            <Alert color="lightprimary" withBorderAccent>
              <span>
                <span className="font-medium">Primary</span> - A simple Primary alert
              </span>
            </Alert>

            <Alert color="lightsecondary" withBorderAccent>
              <span>
                <span className="font-medium">Secondary</span> - A simple Secondary alert
              </span>
            </Alert>

            <Alert color="lightsuccess" withBorderAccent>
              <span>
                <span className="font-medium">Success</span> - A simple Success alert
              </span>
            </Alert>

            <Alert color="lightinfo" withBorderAccent>
              <span>
                <span className="font-medium">Info</span> - A simple Info alert
              </span>
            </Alert>

            <Alert color="lightwarning" withBorderAccent>
              <span>
                <span className="font-medium">Warning</span> - A simple Warning alert
              </span>
            </Alert>

            <Alert color="lighterror" withBorderAccent>
              <span>
                <span className="font-medium">Error</span> - A simple Error alert
              </span>
            </Alert>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox className="mb-[1.875rem]">
            <h4 className="text-lg font-semibold">Additional content</h4>
            <Alert
              additionalContent={<ExampleAdditionalContent />}
              color="lightprimary"
              icon={HiInformationCircle}
              className="rounded-md"
            >
              <span className="font-medium">Info alert!</span> Change a few things
              up and try submitting again.
            </Alert>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">All options</h4>
            <Alert
              additionalContent={<ExampleAdditionalContent />}
              color="lightsuccess"
              icon={HiInformationCircle}
              onDismiss={() => alert("Alert dismissed!")}
              rounded
              className="rounded-md"
            >
              <span className="font-medium">Info alert!</span> Change a few things
              up and try submitting again.
            </Alert>
          </CardBox>
        </div>
      </div>


    </>
  );
};

export default Notification;
