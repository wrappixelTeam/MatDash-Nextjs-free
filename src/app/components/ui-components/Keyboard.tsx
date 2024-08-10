"use client";
import React from "react";
import { Kbd, Table } from "flowbite-react";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "KBD",
  },
];

const Keyboard = () => {
  return (
    <>
      <BreadcrumbComp title="KBD" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default KDB</h4>
            <div className="flex flex-wrap gap-1">
              <Kbd className="rounded-md">Shift</Kbd>
              <Kbd className="rounded-md">Ctrl</Kbd>
              <Kbd className="rounded-md">Tab</Kbd>
              <Kbd className="rounded-md">Caps Lock</Kbd>
              <Kbd className="rounded-md">Esc</Kbd>
              <Kbd className="rounded-md">Spacebar</Kbd>
              <Kbd className="rounded-md">Enter</Kbd>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">KBD inside text</h4>
            <div>
              Please press <Kbd className="rounded-md">Ctrl</Kbd> +{" "}
              <Kbd className="rounded-md">Shift</Kbd> +{" "}
              <Kbd className="rounded-md">R</Kbd> to re-render an MDN page.
            </div>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">KBD inside table</h4>
            <Table>
              <Table.Head>
                <Table.HeadCell>Key</Table.HeadCell>
                <Table.HeadCell>Description</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <Kbd className="rounded-md">Shift</Kbd> <span>or</span>{" "}
                    <Kbd className="rounded-md">Tab</Kbd>
                  </Table.Cell>
                  <Table.Cell>Navigate to interactive elements</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <Kbd className="rounded-md">Enter</Kbd> or{" "}
                    <Kbd className="rounded-md">Spacebar</Kbd>
                  </Table.Cell>
                  <Table.Cell>
                    Ensure elements with ARIA role="button" can be activated
                    with both key commands.
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <span className="inline-flex gap-1">
                      <Kbd icon={MdKeyboardArrowUp} />
                      <Kbd icon={MdKeyboardArrowDown} />
                    </span>
                    <span> or </span>
                    <span className="inline-flex gap-1">
                      <Kbd icon={MdKeyboardArrowLeft} />
                      <Kbd icon={MdKeyboardArrowRight} />
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    Choose and activate previous/next tab.
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </CardBox>
        </div>
        <div className="lg:col-span-3 md:col-span-3 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Arrow keys</h4>
            <div className="flex flex-wrap gap-1">
              <Kbd icon={MdKeyboardArrowUp} />
              <Kbd icon={MdKeyboardArrowDown} />
              <Kbd icon={MdKeyboardArrowLeft} />
              <Kbd icon={MdKeyboardArrowRight} />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-9 md:col-span-9 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Letter Keys</h4>
            <div className="flex flex-wrap gap-1">
              <Kbd>Q</Kbd>
              <Kbd>W</Kbd>
              <Kbd>E</Kbd>
              <Kbd>R</Kbd>
              <Kbd>T</Kbd>
              <Kbd>Y</Kbd>
              <Kbd>I</Kbd>
              <Kbd>O</Kbd>
              <Kbd>P</Kbd>
              <Kbd>A</Kbd>
              <Kbd>S</Kbd>
              <Kbd>D</Kbd>
              <Kbd>F</Kbd>
              <Kbd>G</Kbd>
              <Kbd>H</Kbd>
              <Kbd>J</Kbd>
              <Kbd>K</Kbd>
              <Kbd>L</Kbd>
              <Kbd>Z</Kbd>
              <Kbd>X</Kbd>
              <Kbd>C</Kbd>
              <Kbd>V</Kbd>
              <Kbd>B</Kbd>
              <Kbd>N</Kbd>
              <Kbd>M</Kbd>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Number Keys</h4>
            <div className="flex flex-wrap gap-1">
              <Kbd>1</Kbd>
              <Kbd>2</Kbd>
              <Kbd>3</Kbd>
              <Kbd>4</Kbd>
              <Kbd>5</Kbd>
              <Kbd>6</Kbd>
              <Kbd>7</Kbd>
              <Kbd>8</Kbd>
              <Kbd>9</Kbd>
              <Kbd>0</Kbd>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Function keys</h4>
            <div className="flex flex-wrap gap-1">
              <Kbd>F1</Kbd>
              <Kbd>F2</Kbd>
              <Kbd>F3</Kbd>
              <Kbd>F4</Kbd>
              <Kbd>F5</Kbd>
              <Kbd>F6</Kbd>
              <Kbd>F7</Kbd>
              <Kbd>F8</Kbd>
              <Kbd>F9</Kbd>
              <Kbd>F10</Kbd>
              <Kbd>F11</Kbd>
              <Kbd>F12</Kbd>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Keyboard;
