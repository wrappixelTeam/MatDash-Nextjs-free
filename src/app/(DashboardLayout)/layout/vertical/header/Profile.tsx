"use client";
import { Icon } from "@iconify/react";
import { Button } from "flowbite-react";
import React from "react";
import * as profileData from "./Data";
import Link from "next/link";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="relative group/menu">
      <span className="h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer">
        <Image
          src="/images/profile/user-1.jpg"
          alt="logo"
          height="35"
          width="35"
          className="rounded-full"
          id="dropdownProfileButton"
          data-dropdown-toggle="dropdownHover-profile"
          data-dropdown-trigger="hover"
        />
      </span>
      <div
        id="dropdownHover-profile"
        className="hidden bg-white dropdown w-full sm:w-[360px] py-6 z-[1] translate"
      >
        <div className=" px-7">
          <h3 className="mb-0 text-lg font-semibold text-dark dark:text-white">
            User Profile
          </h3>

          <div className="flex items-center gap-6 pb-5 border-b dark:border-darkborder mt-5 mb-3">
            <Image
              src="/images/profile/user-1.jpg"
              alt="logo"
              height="80"
              width="80"
              className="rounded-full"
            />
            <div>
              <h5 className="card-title">Jonathan Deo</h5>
              <span className="card-subtitle">Admin</span>
              <p className="card-subtitle mb-0 mt-1 flex items-center">
                <Icon
                  icon="solar:mailbox-line-duotone"
                  className="text-base me-1"
                />
                info@Materialm.com
              </p>
            </div>
          </div>
        </div>
        
        {profileData.profileDD.map((items, index) => (
          <Link
            href={items.url}
            className="py-3 flex justify-between items-center bg-hover px-6 group/link w-full"
            key={index}
          >
            <div className="flex items-center w-full">
              <div
                className={`h-11 w-11 flex-shrink-0 rounded-md flex justify-center items-center ${items.bgcolor}`}
              >
                <Icon
                    icon={items.icon}
                    height={20}
                    className={items.color}
                  />
              </div>
              <div className="ps-4 flex justify-between w-full">
                <div className="w-3/4 ">
                  <h5 className="mb-1 text-sm  group-hover/link:text-primary">
                    {items.title}
                  </h5>
                  <div className="text-xs  text-darklink">{items.subtitle}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}

        <div className="pt-3 px-6">
        <Button color={'primary'} as={Link} href="/auth/auth1/login" className="w-full">Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
