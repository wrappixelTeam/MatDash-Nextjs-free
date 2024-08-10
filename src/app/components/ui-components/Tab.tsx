"use client";
import React from "react";
import { Tabs, TabsRef, Button } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { useRef, useState } from "react";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Tab",
  },
];

const Tab = () => {
  const tabsRef = useRef<TabsRef>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <BreadcrumbComp title="Tab" items={BCrumb} />
      <div>
        <CardBox className="mb-[1.875rem]">
          <h4 className="text-lg font-semibold">Default Tab</h4>
          <div>
            <Tabs aria-label="Default tabs">
              <Tabs.Item active title="Profile" icon={HiUserCircle}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Dashboard" icon={MdDashboard}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Dashboard tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Settings" icon={HiAdjustments}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Settings tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Contacts" icon={HiClipboardList}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Contacts tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item disabled title="Disabled">
                Disabled content
              </Tabs.Item>
            </Tabs>
          </div>
        </CardBox>
        <CardBox className="mb-[1.875rem]">
          <h4 className="text-lg font-semibold">Tabs with underline</h4>
          <div>
            <Tabs aria-label="Tabs with underline" >
              <Tabs.Item active title="Profile" icon={HiUserCircle}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Dashboard" icon={MdDashboard}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Dashboard tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Settings" icon={HiAdjustments}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Settings tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Contacts" icon={HiClipboardList}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Contacts tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item disabled title="Disabled">
                Disabled content
              </Tabs.Item>
            </Tabs>
          </div>
        </CardBox>
        <CardBox className="mb-[1.875rem]">
          <h4 className="text-lg font-semibold">Tabs with icons</h4>
          <div>
            <Tabs aria-label="Tabs with icons" >
              <Tabs.Item active title="Profile" icon={HiUserCircle}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Dashboard" icon={MdDashboard}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Dashboard tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Settings" icon={HiAdjustments}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Settings tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Contacts" icon={HiClipboardList}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Contacts tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item disabled title="Disabled">
                Disabled content
              </Tabs.Item>
            </Tabs>
          </div>
        </CardBox>
        <CardBox className="mb-[1.875rem]">
          <h4 className="text-lg font-semibold">Tabs with pills</h4>
          <div>
            <Tabs aria-label="Pills" >
              <Tabs.Item active title="Tab 1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Content 1
                </p>
              </Tabs.Item>
              <Tabs.Item title="Tab 2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Content 2
                </p>
              </Tabs.Item>
              <Tabs.Item title="Tab 3">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Content 3
                </p>
              </Tabs.Item>
              <Tabs.Item title="Tab 4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Content 4
                </p>
              </Tabs.Item>
              <Tabs.Item disabled title="Tab 5">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Content 5
                </p>
              </Tabs.Item>
            </Tabs>
          </div>
        </CardBox>
        <CardBox className="mb-[1.875rem]">
          <h4 className="text-lg font-semibold">Full width tabs</h4>
          <div className="overflow-x-auto">
            <Tabs aria-label="Full width tabs" >
              <Tabs.Item active title="Profile" icon={HiUserCircle}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Dashboard" icon={MdDashboard}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Dashboard tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Settings" icon={HiAdjustments}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Settings tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Contacts" icon={HiClipboardList}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Contacts tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item disabled title="Disabled">
                Disabled content
              </Tabs.Item>
            </Tabs>
          </div>
        </CardBox>
        <CardBox className="mb-[1.875rem]">
          <h4 className="text-lg font-semibold">React state options</h4>
          <div className="flex flex-col gap-3">
            <Tabs
              aria-label="Default tabs"
         
              ref={tabsRef}
              onActiveTabChange={(tab) => setActiveTab(tab)}
            >
              <Tabs.Item active title="Profile" icon={HiUserCircle}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Dashboard" icon={MdDashboard}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Dashboard tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Settings" icon={HiAdjustments}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Settings tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Contacts" icon={HiClipboardList}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Contacts tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item disabled title="Disabled">
                Disabled content
              </Tabs.Item>
            </Tabs>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Active tab: {activeTab}
            </div>
            <Button.Group>
              <Button
                color="gray"
                onClick={() => tabsRef.current?.setActiveTab(0)}
              >
                Profile
              </Button>
              <Button
                color="gray"
                onClick={() => tabsRef.current?.setActiveTab(1)}
              >
                Dashboard
              </Button>
              <Button
                color="gray"
                onClick={() => tabsRef.current?.setActiveTab(2)}
              >
                Settings
              </Button>
              <Button
                color="gray"
                onClick={() => tabsRef.current?.setActiveTab(3)}
              >
                Contacts
              </Button>
            </Button.Group>
          </div>
        </CardBox>
      </div>
    </>
  );
};

export default Tab;
