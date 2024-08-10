import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import CardBox from "@/app/components/shared/CardBox";
import React from "react";
import Link from "next/link";
import AuthForgotPassword from "../../authforms/AuthForgotPassword";
import { Button } from "flowbite-react";

const BoxedForgotpwd = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen bg-muted dark:bg-dark">
        <div className="flex h-full justify-center items-center px-4">
          <CardBox className="md:w-[450px] w-full border-none">
            <div className="mx-auto pt-3">
              <Logo />
            </div>
            <p className="text-darklink text-sm text-center my-4">Please enter the email address associated with your account and We will email you a link to reset your password.</p>
            <AuthForgotPassword />
            <Button
                  color={"lightprimary"}
                  as={Link}
                  href="/auth/auth2/login"
                  className="rounded-md w-full mt-3"
                >
                  Back to Login
                </Button>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default BoxedForgotpwd;
