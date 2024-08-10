"use client";
import React from "react";
import { Button, MegaMenu, Navbar } from "flowbite-react";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import { HiChevronDown, HiArrowRight } from "react-icons/hi";
import FullLogo from "@/app/(DashboardLayout)/layout/shared/logo/FullLogo";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Mega Menu",
  },
];

const MegaMenus = () => {
  return (
    <>
      <BreadcrumbComp title="Mega Menu" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default mega menu</h4>
            <MegaMenu className="rounded-md">
              <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:space-x-8">
                <FullLogo/>
                <div className="order-2 hidden items-center md:flex">
                  <a
                    href="#"
                    className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
                  >
                    Login
                  </a>
                  <Button href="#" color="primary">
                    Sign up
                  </Button>
                </div>
                <Navbar.Toggle />
                <Navbar.Collapse>
                  <Navbar.Link href="#">Home</Navbar.Link>
                  <Navbar.Link>
                    <MegaMenu.Dropdown toggle={<>Company</>}>
                      <ul className="grid grid-cols-3">
                        <div className="space-y-4 p-4">
                          <li>
                            <a
                              href="#"
                              className="hover:text-primary-600 dark:hover:text-primary-500"
                            >
                              About Us
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="hover:text-primary-600 dark:hover:text-primary-500"
                            >
                              Library
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="hover:text-primary-600 dark:hover:text-primary-500"
                            >
                              Resources
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="hover:text-primary-600 dark:hover:text-primary-500"
                            >
                              Pro Version
                            </a>
                          </li>
                        </div>
                        <div className="space-y-4 p-4">
                          <li>
                            <a
                              href="#"
                              className="hover:text-primary-600 dark:hover:text-primary-500"
                            >
                              Contact Us
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="hover:text-primary-600 dark:hover:text-primary-500"
                            >
                              Support Center
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="hover:text-primary-600 dark:hover:text-primary-500"
                            >
                              Terms
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="hover:text-primary-600 dark:hover:text-primary-500"
                            >
                              Blog
                            </a>
                          </li>
                        </div>
                        <div className="space-y-4 p-4">
                          <li>
                            <a
                              href="#"
                              className="hover:text-primary-600 dark:hover:text-primary-500"
                            >
                              Newsletter
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="hover:text-primary-600 dark:hover:text-primary-500"
                            >
                              Playground
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="hover:text-primary-600 dark:hover:text-primary-500"
                            >
                              License
                            </a>
                          </li>
                        </div>
                      </ul>
                    </MegaMenu.Dropdown>
                  </Navbar.Link>
                  <Navbar.Link href="#">Team</Navbar.Link>
                  <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
              </div>
            </MegaMenu>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Mega menu with icons</h4>
            <MegaMenu className="rounded-md">
              <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:space-x-8">
                <FullLogo/>
                <div className="order-2 hidden items-center md:flex">
                  <a
                    href="#"
                    className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
                  >
                    Login
                  </a>
                  <Button href="#" color="primary">
                    Sign up
                  </Button>
                </div>
                <Navbar.Toggle />
                <Navbar.Collapse>
                  <Navbar.Link href="#">Home</Navbar.Link>
                  <MegaMenu.Dropdown toggle={<>Company</>}>
                    <ul className="grid grid-cols-3">
                      <div className="space-y-4 p-4">
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            About Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Library
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Resources
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Pro Version
                          </a>
                        </li>
                      </div>
                      <div className="space-y-4 p-4">
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Support Center
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Terms
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Blog
                          </a>
                        </li>
                      </div>
                      <div className="space-y-4 p-4">
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Newsletter
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            Playground
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-primary-600 dark:hover:text-primary-500"
                          >
                            License
                          </a>
                        </li>
                      </div>
                    </ul>
                  </MegaMenu.Dropdown>
                  <Navbar.Link href="#">Team</Navbar.Link>
                </Navbar.Collapse>
              </div>
            </MegaMenu>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Full width dropdown</h4>
            <MegaMenu className="rounded-md">
              <FullLogo/>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Navbar.Link href="/">Home</Navbar.Link>
                <Navbar.Link>
                  <MegaMenu.DropdownToggle>
                    Company
                    <HiChevronDown className="ml-2" />
                  </MegaMenu.DropdownToggle>
                </Navbar.Link>
                <Navbar.Link href="/">Marketplace</Navbar.Link>
                <Navbar.Link href="/">Resources</Navbar.Link>
                <Navbar.Link href="/">Contact</Navbar.Link>
              </Navbar.Collapse>
              <MegaMenu.Dropdown>
                <ul className="mx-auto mt-6 grid max-w-screen-xl border-y border-gray-200 px-4 py-5 sm:grid-cols-2 md:grid-cols-3 md:px-6">
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="font-semibold">Online Stores</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Connect with third-party tools that you're already
                        using.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="font-semibold">Segmentation</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Connect with third-party tools that you're already
                        using.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="font-semibold">Marketing CRM</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Connect with third-party tools that you're already
                        using.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="font-semibold">Online Stores</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Connect with third-party tools that you're already
                        using.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="font-semibold">Segmentation</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Connect with third-party tools that you're already
                        using.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="font-semibold">Marketing CRM</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Connect with third-party tools that you're already
                        using.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="font-semibold">Audience Management</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Connect with third-party tools that you're already
                        using.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="font-semibold">Creative Tools</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Connect with third-party tools that you're already
                        using.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="font-semibold">Marketing Automation</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Connect with third-party tools that you're already
                        using.
                      </span>
                    </a>
                  </li>
                </ul>
              </MegaMenu.Dropdown>
            </MegaMenu>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Full width with CTA</h4>
            <MegaMenu className="rounded-md">
              <FullLogo/>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Navbar.Link href="/">Home</Navbar.Link>
                <MegaMenu.DropdownToggle>
                  Company
                  <HiChevronDown className="ml-2" />
                </MegaMenu.DropdownToggle>
                <Navbar.Link href="/">Marketplace</Navbar.Link>
                <Navbar.Link href="/">Resources</Navbar.Link>
                <Navbar.Link href="/">Contact</Navbar.Link>
              </Navbar.Collapse>
              <MegaMenu.Dropdown>
                <div className="mx-auto mt-6 grid max-w-screen-xl border-y border-gray-200 px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
                  <ul className="space-y-4 sm:mb-4 md:mb-0">
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Online Stores
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Segmentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Marketing CRM
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Online Stores
                      </a>
                    </li>
                  </ul>
                  <ul className="mb-4 hidden space-y-4 sm:block md:mb-0">
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Our Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        License
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Resources
                      </a>
                    </li>
                  </ul>
                  <div className="mt-4 md:mt-0">
                    <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
                      Our brands
                    </h2>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      At Flowbite, we have a portfolio of brands that cater to a
                      variety of preferences.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primaryemphasis dark:text-primary dark:hover:text-primaryemphasis"
                    >
                      Explore our brands
                      <span className="sr-only">Explore our brands</span>
                      <HiArrowRight className="ml-2" />
                    </a>
                  </div>
                </div>
              </MegaMenu.Dropdown>
            </MegaMenu>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Full width with image</h4>
            <MegaMenu className="rounded-md">
              <FullLogo/>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Navbar.Link href="/">Home</Navbar.Link>
                <Navbar.Link href="/">Company</Navbar.Link>
                <MegaMenu.DropdownToggle>
                  Marketplace
                  <HiChevronDown className="ml-2" />
                </MegaMenu.DropdownToggle>
                <Navbar.Link href="/">Resources</Navbar.Link>
                <Navbar.Link href="/">Contact</Navbar.Link>
              </Navbar.Collapse>
              <MegaMenu.Dropdown>
                <div className="mt-6 border-y border-gray-200 bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800">
                  <div className="mx-auto grid max-w-screen-xl px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
                    <ul
                      className="mb-4 hidden space-y-4 md:mb-0 md:block"
                      aria-labelledby="mega-menu-full-image-button"
                    >
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Online Stores
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Segmentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Marketing CRM
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Online Stores
                        </a>
                      </li>
                    </ul>
                    <ul className="mb-4 space-y-4 md:mb-0">
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Our Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          License
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-primary-600 dark:hover:text-primary-500"
                        >
                          Resources
                        </a>
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="rounded-lg bg-gray-500 p-8 text-left"
                    >
                      <p className="mb-5 max-w-xl font-extrabold leading-tight tracking-tight text-white">
                        Preview the new Flowbite dashboard navigation.
                      </p>
                      <button
                        type="button"
                        className="inline-flex items-center rounded-lg border border-white px-2.5 py-1.5 text-center text-xs font-medium text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-700"
                      >
                        Get started
                        <HiArrowRight className="ml-2" />
                      </button>
                    </a>
                  </div>
                </div>
              </MegaMenu.Dropdown>
            </MegaMenu>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default MegaMenus;
