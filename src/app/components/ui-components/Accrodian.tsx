"use client";
import React from "react";
import { Accordion } from "flowbite-react";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Accordion',
  },
];

const Accrodian = () => {
  return (
    <>
    <BreadcrumbComp title="Accordion" items={BCrumb}/>
    <div className="grid grid-cols-12 gap-[1.875rem]">
      <div className="lg:col-span-6 md:col-span-6 col-span-12">
        <CardBox>
          <div>
            <h4 className="text-lg font-semibold">Accordion</h4>
          </div>
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title className="focus:ring-0">
                Accordion Item #1
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature from
                  45 BC, making it over 2000 years old.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="focus:ring-0">
                Accordion Item #2
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature from
                  45 BC, making it over 2000 years old.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="focus:ring-0">
                Accordion Item #3
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature from
                  45 BC, making it over 2000 years old.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </CardBox>
      </div>
      <div className="lg:col-span-6 md:col-span-6 col-span-12">
      <CardBox>
        <div>
          <h4 className="text-lg font-semibold">Accordian Flush</h4>
        </div>
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0">
              Accordion Item #1
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0">
              Accordion Item #2
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0">
              Accordion Item #3
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </CardBox>
      </div>
    </div>
    </>
  );
};

export default Accrodian;
