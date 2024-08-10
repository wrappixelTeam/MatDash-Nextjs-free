"use client";
import React from "react";
import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import Link from "next/link";
import FullLogo from "@/app/(DashboardLayout)/layout/shared/logo/FullLogo";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Navbar",
  },
];

const NavBar = () => {
  return (
    <>
      <BreadcrumbComp title="Navbar" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default navbar</h4>
            <Navbar fluid className="rounded-md">
              <FullLogo/>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Navbar.Link href="#" active className="text-primary">
                  Home
                </Navbar.Link>
                <Navbar.Link as={Link} href="#">
                  About
                </Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
              </Navbar.Collapse>
            </Navbar>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Navbar with CTA button</h4>
            <Navbar fluid className="rounded-md">
            <FullLogo/>
              <div className="flex md:order-2">
                <Button color="primary">Get started</Button>
                <Navbar.Toggle />
              </div>
              <Navbar.Collapse>
                <Navbar.Link href="#" active className="text-primary">
                  Home
                </Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
              </Navbar.Collapse>
            </Navbar>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Navbar with dropdown</h4>
            <Navbar fluid className="rounded-md">
            <FullLogo/>
              <div className="flex md:order-2">
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar
                      alt="User settings"
                      img="/images/profile/user-2.jpg"
                      rounded
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block truncate text-sm font-medium">
                      name@flowbite.com
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
              </div>
              <Navbar.Collapse>
                <Navbar.Link href="#" active className="text-primary">
                  Home
                </Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
              </Navbar.Collapse>
            </Navbar>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default NavBar;
