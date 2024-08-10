"use client";
import React from "react";
import { Blockquote, Avatar, Rating, List } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Typography",
  },
];

const Typography = () => {
  return (
    <>
      <BreadcrumbComp title="Typography" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default blockquote</h4>
            <Blockquote>
              "Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </Blockquote>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Solid background</h4>
            <p className="text-gray-500 dark:text-gray-400">
              Does your user know how to exit out of screens? Can they follow
              your intended user journey and buy something from the site you’ve
              designed? By running a usability test, you’ll be able to see how
              users will interact with your design once it’s live.
            </p>
            <Blockquote className="my-4 border-l-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
              "Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </Blockquote>
            First of all you need to understand how Flowbite works. This library
            is not another framework. Rather, it is a set of components based on
            Tailwind CSS that you can just copy-paste from the documentation.
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Blockquote icon</h4>
            <Blockquote>
              <svg
                className="mb-4 h-8 w-8 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              "Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </Blockquote>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Paragraph context</h4>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Track work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                Track work across the enterprise through an open, collaborative
                platform. Link issues across Jira and ingest data from other
                software development tools, so your IT support and operations
                teams have richer contextual information to rapidly respond to
                requests, incidents, and changes.
              </p>
              <Blockquote className="mb-3">
                <p className="text-xl font-semibold italic text-gray-900 dark:text-white">
                  " Flowbite is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application. "
                </p>
              </Blockquote>
            </div>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease, with a complete
              audit trail for every change.
            </p>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">User testimonial</h4>
            <figure className="mx-auto max-w-screen-md text-center">
              <svg
                className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <Blockquote>
                <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
                  "Flowbite is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application."
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-3">
                <Avatar
                  rounded
                  size="xs"
                  img="/images/profile/user-2.jpg"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                    Micheal Gough
                  </cite>
                  <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    CEO at Google
                  </cite>
                </div>
              </figcaption>
            </figure>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">User Review</h4>
            <figure className="max-w-screen-md">
              <div className="mb-4 flex items-center">
                <Rating size="md">
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                </Rating>
              </div>
              <Blockquote>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  "Flowbite is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application."
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center space-x-3">
                <Avatar
                  rounded
                  size="xs"
                  img="/images/profile/user-3.jpg"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                    Bonnie Green
                  </cite>
                  <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    CTO at Flowbite
                  </cite>
                </div>
              </figcaption>
            </figure>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Alignment Left</h4>
            <Blockquote>
              "Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </Blockquote>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Alignment Center</h4>
            <Blockquote className="text-center">
              "Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </Blockquote>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Alignment Right</h4>
            <Blockquote className="text-right">
              "Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </Blockquote>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Sizes Small</h4>
            <Blockquote className="text-lg">
              "Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </Blockquote>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Sizes Medium</h4>
            <Blockquote className="text-xl">
              "Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </Blockquote>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Sizes Large</h4>
            <Blockquote className="text-2xl">
              "Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </Blockquote>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default list</h4>
            <List>
              <List.Item>
                At least 10 characters (and up to 100 characters)
              </List.Item>
              <List.Item>At least one lowercase character</List.Item>
              <List.Item>
                Inclusion of at least one special character, e.g., ! @ # ?
              </List.Item>
            </List>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Icons</h4>
            <List>
              <List.Item icon={HiCheckCircle}>
                At least 10 characters (and up to 100 characters)
              </List.Item>
              <List.Item icon={HiCheckCircle}>
                At least one lowercase character
              </List.Item>
              <List.Item icon={HiCheckCircle}>
                Inclusion of at least one special character, e.g., ! @ # ?
              </List.Item>
            </List>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Nested</h4>
            <List>
              <List.Item>
                List item one
                <List ordered nested>
                  <List.Item>
                    You might feel like you are being really "organized" o
                  </List.Item>
                  <List.Item>
                    Nested navigation in UIs is a bad idea too, keep things as
                    flat as possible.
                  </List.Item>
                  <List.Item>
                    Nesting tons of folders in your source code is also not
                    helpful.
                  </List.Item>
                </List>
              </List.Item>
              <List.Item>
                List item two
                <List ordered nested>
                  <List.Item>
                    I'm not sure if we'll bother styling more than two levels
                    deep.
                  </List.Item>
                  <List.Item>
                    Two is already too much, three is guaranteed to be a bad
                    idea.
                  </List.Item>
                  <List.Item>
                    If you nest four levels deep you belong in prison.
                  </List.Item>
                </List>
              </List.Item>
              <List.Item>
                List item three
                <List ordered nested>
                  <List.Item>
                    Again please don't nest lists if you want
                  </List.Item>
                  <List.Item>Nobody wants to look at this.</List.Item>
                  <List.Item>
                    I'm upset that we even have to bother styling this.
                  </List.Item>
                </List>
              </List.Item>
            </List>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Unstyled</h4>
            <List unstyled>
              <List.Item>
                At least 10 characters (and up to 100 characters)
              </List.Item>
              <List.Item>At least one lowercase character</List.Item>
              <List.Item>
                Inclusion of at least one special character, e.g., ! @ # ?
              </List.Item>
            </List>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Ordered list</h4>
            <List ordered>
              <List.Item>
                At least 10 characters (and up to 100 characters)
              </List.Item>
              <List.Item>At least one lowercase character</List.Item>
              <List.Item>
                Inclusion of at least one special character, e.g., ! @ # ?
              </List.Item>
            </List>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Horizontal list</h4>
            <List horizontal>
              <List.Item>About</List.Item>
              <List.Item>Premium</List.Item>
              <List.Item>Campaigns</List.Item>
              <List.Item>Blog</List.Item>
              <List.Item>Affiliate Program</List.Item>
              <List.Item>FAQs</List.Item>
              <List.Item>Contact</List.Item>
            </List>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Typography;
