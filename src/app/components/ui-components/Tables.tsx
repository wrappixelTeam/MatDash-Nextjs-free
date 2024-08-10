"use client";
import React from "react";
import { Table, Checkbox } from "flowbite-react";
import CardBox from "@/app/components/shared/CardBox";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Tables",
  },
];

const Tables = () => {
  return (
    <>
      <BreadcrumbComp title="Tables" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default table</h4>
            <div className="overflow-x-auto">
              <Table>
                <Table.Head>
                  <Table.HeadCell>Product name</Table.HeadCell>
                  <Table.HeadCell>Color</Table.HeadCell>
                  <Table.HeadCell>Category</Table.HeadCell>
                  <Table.HeadCell>Price</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {'Apple MacBook Pro 17"'}
                    </Table.Cell>
                    <Table.Cell>Sliver</Table.Cell>
                    <Table.Cell>Laptop</Table.Cell>
                    <Table.Cell>$2999</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-primary hover:underline dark:text-primary"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Microsoft Surface Pro
                    </Table.Cell>
                    <Table.Cell>White</Table.Cell>
                    <Table.Cell>Laptop PC</Table.Cell>
                    <Table.Cell>$1999</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-primary hover:underline dark:text-primary"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Magic Mouse 2
                    </Table.Cell>
                    <Table.Cell>Black</Table.Cell>
                    <Table.Cell>Accessories</Table.Cell>
                    <Table.Cell>$99</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-primary hover:underline dark:text-primary"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Striped rows</h4>
            <div className="overflow-x-auto">
              <Table striped>
                <Table.Head>
                  <Table.HeadCell>Product name</Table.HeadCell>
                  <Table.HeadCell>Color</Table.HeadCell>
                  <Table.HeadCell>Category</Table.HeadCell>
                  <Table.HeadCell>Price</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {'Apple MacBook Pro 17"'}
                    </Table.Cell>
                    <Table.Cell>Sliver</Table.Cell>
                    <Table.Cell>Laptop</Table.Cell>
                    <Table.Cell>$2999</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-primary hover:underline dark:text-primary"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Microsoft Surface Pro
                    </Table.Cell>
                    <Table.Cell>White</Table.Cell>
                    <Table.Cell>Laptop PC</Table.Cell>
                    <Table.Cell>$1999</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-primary hover:underline dark:text-primary"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Magic Mouse 2
                    </Table.Cell>
                    <Table.Cell>Black</Table.Cell>
                    <Table.Cell>Accessories</Table.Cell>
                    <Table.Cell>$99</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-primary hover:underline dark:text-primary"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Google Pixel Phone
                    </Table.Cell>
                    <Table.Cell>Gray</Table.Cell>
                    <Table.Cell>Phone</Table.Cell>
                    <Table.Cell>$799</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-primary hover:underline dark:text-primary"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Apple Watch 5
                    </Table.Cell>
                    <Table.Cell>Red</Table.Cell>
                    <Table.Cell>Wearables</Table.Cell>
                    <Table.Cell>$999</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-primary hover:underline dark:text-primary"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Table hover state</h4>
            <div className="overflow-x-auto">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>Product name</Table.HeadCell>
                  <Table.HeadCell>Color</Table.HeadCell>
                  <Table.HeadCell>Category</Table.HeadCell>
                  <Table.HeadCell>Price</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {'Apple MacBook Pro 17"'}
                    </Table.Cell>
                    <Table.Cell>Sliver</Table.Cell>
                    <Table.Cell>Laptop</Table.Cell>
                    <Table.Cell>$2999</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-primary hover:underline dark:text-primary"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Microsoft Surface Pro
                    </Table.Cell>
                    <Table.Cell>White</Table.Cell>
                    <Table.Cell>Laptop PC</Table.Cell>
                    <Table.Cell>$1999</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-primary hover:underline dark:text-primary"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Magic Mouse 2
                    </Table.Cell>
                    <Table.Cell>Black</Table.Cell>
                    <Table.Cell>Accessories</Table.Cell>
                    <Table.Cell>$99</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-primary hover:underline dark:text-primary"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Table with checkboxes</h4>
            <div className="overflow-x-auto">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell className="p-4">
                    <Checkbox />
                  </Table.HeadCell>
                  <Table.HeadCell>Product name</Table.HeadCell>
                  <Table.HeadCell>Color</Table.HeadCell>
                  <Table.HeadCell>Category</Table.HeadCell>
                  <Table.HeadCell>Price</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {'Apple MacBook Pro 17"'}
                    </Table.Cell>
                    <Table.Cell>Sliver</Table.Cell>
                    <Table.Cell>Laptop</Table.Cell>
                    <Table.Cell>$2999</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-primary hover:underline dark:text-primary"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Microsoft Surface Pro
                    </Table.Cell>
                    <Table.Cell>White</Table.Cell>
                    <Table.Cell>Laptop PC</Table.Cell>
                    <Table.Cell>$1999</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-primary hover:underline dark:text-primary"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Magic Mouse 2
                    </Table.Cell>
                    <Table.Cell>Black</Table.Cell>
                    <Table.Cell>Accessories</Table.Cell>
                    <Table.Cell>$99</Table.Cell>
                    <Table.Cell>
                      <a
                        href="#"
                        className="font-medium text-primary hover:underline dark:text-primary"
                      >
                        Edit
                      </a>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Tables;
