"use client";
import Image from "next/image";
import React from "react";
import Bgimg from "/public/images/logos/logo-icon.svg";
import { Button } from "flowbite-react";

const LeftSidebarPart = () => {
  return (
    <>
      <div className="circle-top"></div>
      <div>
        <Image src={Bgimg} alt="materilm" className="circle-bottom" />
      </div>
      <div className="flex justify-center h-screen items-center z-10 relative">
        <div className="w-7/12">
          <h2 className="text-white text-[40px] font-bold leading-[normal]">
            Welcome to
            <br></br>
            MaterialM
          </h2>
          <p className="opacity-75 text-white my-4 text-base font-medium">
            MaterialM helps developers to build organized and well coded
            dashboards full of beautiful and rich modules.
          </p>
          <Button color={"primary"}>Learn More</Button>
        </div>
      </div>
    </>
  );
};

export default LeftSidebarPart;
