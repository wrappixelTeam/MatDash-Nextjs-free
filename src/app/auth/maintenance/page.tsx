"use client";
import Image from "next/image";
import React from "react";
import ErrorImg from "/public/images/backgrounds/maintenance.svg";
import { Button } from "flowbite-react";
import Link from "next/link";
const Maintenance = () => {
  return (
    <>
      <div className="h-screen flex items-center  justify-center">
        <div className="text-center">
          <Image src={ErrorImg} alt="error"  className="mb-4"/>
            <h1 className="text-dark dark:text-white text-4xl mb-6">Maintenance Mode!!!</h1>
            <h6 className="text-xl text-dark dark:text-white">Website is Under Construction. Check back later!</h6>
            <Button color={"primary"} as={Link} href="/" className="w-fit mt-6 mx-auto">
              Go Back to Home
            </Button>
        </div>
      </div>
    </>
  );
};

export default Maintenance;
