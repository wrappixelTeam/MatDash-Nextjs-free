"use client";
import { Icon } from "@iconify/react";
import { Badge, Button } from "flowbite-react";
import React from "react";
import * as Notification from "./Data";
import SimpleBar from "simplebar-react";
import Link from "next/link";




const Notifications = () => {
  return (
    <div className="relative group/menu">
      <div className="relative">
        <button
          id="dropdownNotificationButton"
          data-dropdown-toggle="dropdownHover-notification"
          data-dropdown-trigger="hover"
          className="h-10 w-10 hover:text-primary text-darklink hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary"
          type="button"
        >
          <Icon icon="solar:bell-bing-line-duotone" height={20} />
        </button>
        <span className="rounded-full absolute end-1 top-[4px] bg-error text-[10px] h-4 w-4 flex justify-center items-center text-white">
          5
        </span>
      </div>
      <div
        id="dropdownHover-notification"
        className="hidden bg-white dropdown w-full sm:w-[360px] py-6 z-[1] translate" 
      >
        <div className="flex items-center px-7 justify-between">
          <h3 className="mb-0 text-lg font-semibold text-dark dark:text-white">
            Notifications
          </h3>
          <Badge color={"primary"}>5 new</Badge>
        </div>

        <SimpleBar className="max-h-80 mt-3">
          {Notification.Notification.map((links, index) => (
            <Link
              href={"/"}
              className="py-3 flex justify-between items-center bg-hover px-6 group/link w-full"
              key={index}
            >
              <div className="flex items-center w-full">
                <div
                  className={`h-11 w-11 flex-shrink-0 rounded-full flex justify-center items-center ${links.bgcolor} `}
                >
                  <Icon
                    icon={links.icon}
                    height={20}
                    className={links.color}
                  />
                </div>
                <div className="ps-4 flex justify-between w-full">
                  <div className="w-3/4 ">
                    <h5 className="mb-1 text-sm  group-hover/link:text-primary">
                      {links.title}
                    </h5>
                    <div className="text-xs text-darklink">{links.subtitle}</div>
                  </div>

                  <div className="text-xs block self-start pt-1.5">
                    {links.time}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </SimpleBar>
        <div className="pt-5 px-6">
          <Button
            color={"primary"}
            className="w-full border border-primary text-primary hover:bg-primary hover:text-white"
            pill
            outline
          >
            See All Notifications
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
