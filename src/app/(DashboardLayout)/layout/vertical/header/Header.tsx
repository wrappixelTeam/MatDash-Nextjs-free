"use client";
import "flowbite";
import React, { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import { Icon } from "@iconify/react";
import Notifications from "./Notifications";
import Profile from "./Profile";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`sticky top-0 z-[5] ${isSticky ? "bg-white shadow-md " : "bg-transparent"
        }`}
    >
      <Navbar
        fluid
        className="rounded-none bg-white py-4 sm:px-6 w-full"
      >
        {/* Notification Dropdown */}
        <Notifications />
        <Navbar.Collapse className="xl:block hidden w-full">
          <div className="flex gap-3 w-full items-center justify-between">
            <button className="text-white bg-primary py-2 px-4 rounded-md">
              Download Free
            </button>
            {/* Profile Dropdown */}
            <Profile />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
