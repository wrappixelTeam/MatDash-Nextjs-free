import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import CardBox from "@/app/components/shared/CardBox";
import React from "react";
import SocialButtons from "../../authforms/SocialButtons";
import Link from "next/link";
import AuthRegister from "../../authforms/AuthRegister";

const BoxedRegister = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen bg-muted dark:bg-dark">
        <div className="flex h-full justify-center items-center px-4">
          <CardBox className="md:w-[450px] w-full border-none">
            <div className="mx-auto">
              <Logo />
            </div>
            <SocialButtons title="or sign up with" />
            <AuthRegister />
            <div className="flex gap-2 text-base text-dark dark:text-white font-medium mt-6 items-center justify-start">
                  <p>Already have an Account?</p>
                  <Link
                    href={"/auth/auth2/login"}
                    className="text-primary text-sm font-medium"
                  >
                    Sign in
                  </Link>
                </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default BoxedRegister;
