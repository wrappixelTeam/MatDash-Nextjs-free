"use client";
import React from "react";
import { ListGroup } from "flowbite-react";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from "react-icons/hi";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "List Group",
  },
];

const ListGroups = () => {
  return (
    <>
      <BreadcrumbComp title="List Group" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default list group</h4>
            <div>
              <ListGroup>
                <ListGroup.Item>Profile</ListGroup.Item>
                <ListGroup.Item>Settings</ListGroup.Item>
                <ListGroup.Item>Messages</ListGroup.Item>
                <ListGroup.Item disabled>Download</ListGroup.Item>
              </ListGroup>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">List items as links</h4>
            <div>
              <ListGroup>
                <ListGroup.Item href="#" active>
                  Profile
                </ListGroup.Item>
                <ListGroup.Item href="#">Settings</ListGroup.Item>
                <ListGroup.Item href="#">Messages</ListGroup.Item>
                <ListGroup.Item href="#">Download</ListGroup.Item>
              </ListGroup>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">List group with buttons</h4>
            <div>
              <ListGroup>
                <ListGroup.Item
                  onClick={() => alert("Profile clicked!")}
                  active
                >
                  Profile
                </ListGroup.Item>
                <ListGroup.Item>Settings</ListGroup.Item>
                <ListGroup.Item>Messages</ListGroup.Item>
                <ListGroup.Item>Download</ListGroup.Item>
              </ListGroup>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">List group with icons</h4>
            <div>
              <ListGroup>
                <ListGroup.Item icon={HiUserCircle} active>
                  Profile
                </ListGroup.Item>
                <ListGroup.Item icon={HiOutlineAdjustments}>
                  Settings
                </ListGroup.Item>
                <ListGroup.Item icon={HiInbox}>Messages</ListGroup.Item>
                <ListGroup.Item icon={HiCloudDownload}>Download</ListGroup.Item>
              </ListGroup>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default ListGroups;
