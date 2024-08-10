"use client";
import React from "react";
import Image from "next/image";
import { Avatar, Dropdown } from "flowbite-react";
// import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Avatar",
  },
];

const Profile = () => {
  return (
    <>
      <BreadcrumbComp title="Avatar" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
      <div className="lg:col-span-3 md:col-span-3 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default Avatar</h4>
            <div className="flex flex-wrap gap-2">
              <Avatar img="/images/profile/user-2.jpg" rounded />
              <Avatar img="/images/profile/user-3.jpg" />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-3 md:col-span-3 col-span-12">
          <CardBox className="lg:col-span-3 md:col-span-3 col-span-12">
            <h4 className="text-lg font-semibold">Avatar with border</h4>
            <div className="flex flex-wrap gap-2">
              <Avatar img="/images/profile/user-2.jpg" rounded bordered />
              <Avatar img="/images/profile/user-3.jpg" bordered />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-3 md:col-span-3 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Avatar placeholder</h4>
            <div className="flex flex-wrap gap-2">
              <Avatar />
              <Avatar rounded />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-3 md:col-span-3 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Placeholder initials</h4>
            <div className="flex flex-wrap gap-2">
              <Avatar placeholderInitials="RR" />
              <Avatar placeholderInitials="RR" rounded />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-3 md:col-span-3 col-span-12">
          <CardBox>
            <div>
              <h4 className="text-lg font-semibold">Dot indicator</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              <Avatar img="/images/profile/user-2.jpg" status="online" />
              <Avatar
                img="/images/profile/user-3.jpg"
                rounded
                status="busy"
                statusPosition="top-right"
              />
              <Avatar
                img="/images/profile/user-4.jpg"
                status="offline"
                statusPosition="bottom-left"
              />
              <Avatar
                img="/images/profile/user-5.jpg"
                rounded
                status="away"
                statusPosition="bottom-right"
              />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-3 md:col-span-3 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Override image element</h4>
            <div className="flex flex-wrap gap-2">
              <Avatar
                img={(props) => (
                  <Image
                    alt=""
                    height="48"
                    referrerPolicy="no-referrer"
                    src="/images/profile/user-2.jpg"
                    width="48"
                    {...props}
                  />
                )}
              />
              <Avatar
                img={(props) => (
                  <picture>
                    <source
                      media="(min-width: 900px)"
                      srcSet="/images/profile/user-2.jpg"
                    />
                    <source
                      media="(min-width: 480px)"
                      srcSet="/images/profile/user-1.jpg"
                    />
                    <Image
                      alt=""
                      height="48"
                      src="/images/profile/user-1.jpg"
                      width="48"
                      {...props}
                    />
                  </picture>
                )}
              />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-3 md:col-span-3 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Stacked layout</h4>
            <Avatar img="/images/profile/user-2.jpg" rounded>
              <div className="space-y-1 font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Joined in August 2014
                </div>
              </div>
            </Avatar>
          </CardBox>
        </div>
        <div className="lg:col-span-3 md:col-span-3 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Avatar dropdown</h4>
            <Dropdown
              label={
                <Avatar
                  alt="User settings"
                  img="/images/profile/user-2.jpg"
                  rounded
                />
              }
              arrowIcon={false}
              inline
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </CardBox>
        </div>
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Colors</h4>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                <Avatar
                  img="/images/profile/user-5.jpg"
                  rounded
                  bordered
                  color="gray"
                />
                <Avatar
                  img="/images/profile/user-5.jpg"
                  rounded
                  bordered
                  color="light"
                />
                <Avatar
                  img="/images/profile/user-5.jpg"
                  rounded
                  bordered
                  color="purple"
                />
                <Avatar
                  img="/images/profile/user-5.jpg"
                  rounded
                  bordered
                  color="success"
                />
                <Avatar
                  img="/images/profile/user-5.jpg"
                  rounded
                  bordered
                  color="pink"
                />
              </div>
              <div className="flex flex-wrap gap-2 pb-14">
                <Avatar img="/images/profile/user-5.jpg" bordered color="gray" />
                <Avatar img="/images/profile/user-5.jpg" bordered color="light" />
                <Avatar
                  img="/images/profile/user-5.jpg"
                  bordered
                  color="purple"
                />
                <Avatar
                  img="/images/profile/user-5.jpg"
                  bordered
                  color="success"
                />
                <Avatar img="/images/profile/user-5.jpg" bordered color="pink" />
              </div>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-5 md:col-span-5 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Sizes</h4>
            <div className="flex flex-wrap items-center gap-2">
              <Avatar img="/images/profile/user-5.jpg" size="xs" />
              <Avatar img="/images/profile/user-5.jpg" size="sm" />
              <Avatar img="/images/profile/user-5.jpg" size="md" />
              <Avatar img="/images/profile/user-5.jpg" size="lg" />
              <Avatar img="/images/profile/user-5.jpg" size="xl" />
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-3 md:col-span-3 col-span-12">
          <CardBox className="lg:col-span-3 md:col-span-3 col-span-12">
            <h4 className="text-lg font-semibold">Stacked layout</h4>
            <div className="flex flex-wrap gap-2 pb-14">
              <Avatar.Group>
                <Avatar img="/images/profile/user-2.jpg" rounded stacked />
                <Avatar img="/images/profile/user-3.jpg" rounded stacked />
                <Avatar img="/images/profile/user-4.jpg" rounded stacked />
                <Avatar img="/images/profile/user-5.jpg" rounded stacked />
                <Avatar img="/images/profile/user-6.jpg" rounded stacked />
              </Avatar.Group>
              <Avatar.Group>
                <Avatar img="/images/profile/user-2.jpg" rounded stacked />
                <Avatar img="/images/profile/user-3.jpg" rounded stacked />
                <Avatar img="/images/profile/user-4.jpg" rounded stacked />
                <Avatar img="/images/profile/user-5.jpg" rounded stacked />
                <Avatar.Counter total={99} href="#" />
              </Avatar.Group>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Profile;
