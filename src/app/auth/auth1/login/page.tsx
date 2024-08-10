"use client";
import React from "react";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import SocialButtons from "../../authforms/SocialButtons";
import AuthLogin from "../../authforms/AuthLogin";
import LeftSidebarPart from "../LeftSidebarPart";
import Link from "next/link";
const Login = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen">
        <div className="grid grid-cols-12 gap-3 h-screen">
          <div className="xl:col-span-6 lg:col-span-6 col-span-12 bg-dark lg:block hidden relative overflow-hidden">
            <LeftSidebarPart />
          </div>
          <div className="xl:col-span-6 lg:col-span-6 col-span-12 sm:px-12 px-4">
            <div className="flex h-screen items-center px-3 lg:justify-start justify-center">
              <div className="max-w-[420px] w-full ">
                <Logo />
                <h3 className="text-2xl font-bold my-3">Sign In</h3>
                <p className="text-darklink text-sm font-medium">
                  Your Admin Dashboard
                </p>
                <SocialButtons title="or sign in with" />
                <AuthLogin />
                <div className="flex gap-2 text-base text-dark dark:text-white font-medium mt-6 items-center justify-center">
                  <p>New to MaterialM?</p>
                  <Link
                    href={"/auth/auth1/register"}
                    className="text-primary text-sm font-medium"
                  >
                    Create an account
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

export default Login;
