"use client";
import React from "react";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import SocialButtons from "../../authforms/SocialButtons";
import AuthRegister from "../../authforms/AuthRegister";
import LeftSidebarPart from "../LeftSidebarPart";
import Link from "next/link";
const Register = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen">
        <div className="grid grid-cols-12 gap-3 h-screen">
          <div className="xl:col-span-6 lg:col-span-6 col-span-12 bg-dark lg:block hidden relative overflow-hidden">
            <LeftSidebarPart />
          </div>
          <div className="xl:col-span-6 lg:col-span-6 col-span-12 sm:px-12 px-4">
            <div className="flex h-screen items-center px-3 max-w-[460px] ">
              <div className="w-full">
                <Logo />
                <h3 className="text-2xl font-bold my-3">Sign Up</h3>
                <p className="text-darklink text-sm font-medium">
                  Your Admin Dashboard
                </p>
                <SocialButtons title="or sign up with" />
                <AuthRegister />
                <div className="flex gap-2 text-base text-dark dark:text-white font-medium mt-6 items-center justify-start">
                  <p>Already have an Account?</p>
                  <Link
                    href={"/auth/auth1/login"}
                    className="text-primary text-sm font-medium"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
