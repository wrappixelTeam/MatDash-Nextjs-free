"use client"
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import FollowerCard from "@/app/components/apps/userprofile/followers/FollowerCard";
import ProfileBanner from "@/app/components/apps/userprofile/profile/ProfileBanner";
import React from "react";
import { UserDataProvider } from '@/app/context/UserDataContext/index';

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Followers",
  },
];
const Followers = () => {
  return (
    <>
      <UserDataProvider>
        <BreadcrumbComp title="Followers" items={BCrumb} />
        <div className="grid grid-cols-12 gap-6">
          {/* Banner */}
          <div className="col-span-12">
            <ProfileBanner />
          </div>
          {/* FollowerCard */}
          <div className="col-span-12">
            <FollowerCard />
          </div>
        </div>
      </UserDataProvider>
    </>
  );
};

export default Followers;
