"use client";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import React from "react";
import AppLinks from "../../vertical/header/AppLinks";
import Search from "../../vertical/header/Search";
import { Language } from "../../vertical/header/Language";
import { Cart } from "../../vertical/header/Cart";
import Messages from "../../vertical/header/Messages";
import Notifications from "../../vertical/header/Notifications";
import Profile from "../../vertical/header/Profile";
import { Icon } from "@iconify/react";
import FullLogo from "../../shared/logo/FullLogo";
import { Navigation } from "../navbar/Navigation";
const Horizontalheader = () => {
  return (
    <div className="border-b border-ld">
      <div className="container mx-auto">
        <Navbar
          fluid
          className="rounded-none bg-transparent dark:bg-transparent py-4 sm:px-0"
        >
          {/* Toggle Icon   */}
          <Navbar.Collapse>
            <div className="flex gap-3 items-center relative">
              <FullLogo />

              {/* Toggle Menu    */}
              <Navbar.Link className="text-darklink">
                <span className="h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer md:hidden">
                  <Icon icon="solar:hamburger-menu-line-duotone" height={24} />
                </span>
              </Navbar.Link>
              {/* App Link Dropwown   */}
              <AppLinks />

              <Navbar.Link>
                <Search />
              </Navbar.Link>
            </div>
          </Navbar.Collapse>

          <Navbar.Collapse>
            <div className="flex gap-3 items-center">
              {/* Search   */}

              {/* Theme Toggle */}
              <DarkThemeToggle className="h-10 w-10 hover:text-primary hover:bg-lightprimary dark:hover:bg-lightprimary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-darklink" />

              {/* Language Dropdown*/}
              <Language />

              {/* Shop cart */}
              <Cart />

              {/* Messages Dropdown */}
              <Messages />

              {/* Notification Dropdown */}
              <Notifications />

              {/* Profile Dropdown */}
              <Profile />
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>

      {/* Navigation  */}
      <div className="border-t py-2 border-ld">
        <div className="container mx-auto">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Horizontalheader;
