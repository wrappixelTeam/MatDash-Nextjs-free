"use client";
import { useState } from "react";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import {
  Button,
  Drawer,
  Sidebar,
  TextInput,
  Label,
  Textarea,
  theme,
  Avatar,
  Datepicker,
} from "flowbite-react";
import { HiEnvelope, HiBars2, HiSquaresPlus } from "react-icons/hi2";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
  HiCalendar,
  HiUserAdd,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Drawer",
  },
];

const Offcanvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  const [isNavigation, setIsNavigation] = useState(false);
  const navigationClose = () => setIsNavigation(false);

  const [isContact, setIsContact] = useState(false);
  const contactClose = () => setIsContact(false);

  const [isElement, setIsElement] = useState(false);
  const elementClose = () => setIsElement(false);

  const [isLeft, setIsLeft] = useState(false);
  const leftClose = () => setIsLeft(false);

  const [isRight, setIsRight] = useState(false);
  const rightClose = () => setIsRight(false);

  const [isTop, setIsTop] = useState(false);
  const topClose = () => setIsTop(false);

  const [isBottom, setIsBottom] = useState(false);
  const bottomClose = () => setIsBottom(false);

  const [isScrolling, setIsScrolling] = useState(false);
  const scrollClose = () => setIsScrolling(false);

  const [isEnable, setIsEnable] = useState(false);
  const enableClose = () => setIsEnable(false);

  const [isEnabledefa, setIsEnabledefa] = useState(false);
  const enabledefaClose = () => setIsEnabledefa(false);

  const [isDisable, setIsDisable] = useState(false);
  const disableClose = () => setIsDisable(false);

  const [isSwipeable, setIsSwipeable] = useState(false);
  const swipeableClose = () => setIsSwipeable(false);

  return (
    <>
      <BreadcrumbComp title="Drawer" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Drawer (Offcanvas)</h4>
            <div className="flex flex-wrap items-center gap-[1.875rem]">
              <div>
                <div>
                  <Button color="primary" onClick={() => setIsOpen(true)}>
                    Show drawer
                  </Button>
                </div>
                <Drawer open={isOpen} onClose={handleClose} className="p-4">
                  <Drawer.Header title="Drawer" />
                  <Drawer.Items>
                    <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                      Supercharge your hiring by taking advantage of our&nbsp;
                      <a
                        href="#"
                        className="text-cyan-600 underline hover:no-underline dark:text-cyan-500"
                      >
                        limited-time sale
                      </a>
                      &nbsp;for Flowbite Docs + Job Board. Unlimited access to
                      over 190K top-ranked candidates and the #1 design job
                      board.
                    </p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <a
                        href="#"
                        className="rounded-md border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        Learn more
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center rounded-md bg-primary hover:bg-primaryemphasis px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                      >
                        Get access&nbsp;
                        <svg
                          className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </Drawer.Items>
                </Drawer>
              </div>
              <div>
                <div>
                  <Button
                    color="secondary"
                    onClick={() => setIsNavigation(true)}
                  >
                    Show navigation
                  </Button>
                </div>
                <Drawer
                  open={isNavigation}
                  onClose={navigationClose}
                  className="p-4"
                >
                  <Drawer.Header title="MENU" titleIcon={() => <></>} />
                  <Drawer.Items>
                    <Sidebar
                      aria-label="Sidebar with multi-level dropdown example"
                      className="[&>div]:bg-transparent [&>div]:p-0"
                    >
                      <div className="flex h-full flex-col justify-between py-2">
                        <div>
                          <form className="pb-3 md:hidden">
                            <TextInput
                              icon={HiSearch}
                              type="search"
                              placeholder="Search"
                              required
                              size={32}
                            />
                          </form>
                          <Sidebar.Items>
                            <Sidebar.ItemGroup>
                              <Sidebar.Item href="/" icon={HiChartPie}>
                                Dashboard
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="/e-commerce/products"
                                icon={HiShoppingBag}
                              >
                                Products
                              </Sidebar.Item>
                              <Sidebar.Item href="/users/list" icon={HiUsers}>
                                Users list
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="/authentication/sign-in"
                                icon={HiLogin}
                              >
                                Sign in
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="/authentication/sign-up"
                                icon={HiPencil}
                              >
                                Sign up
                              </Sidebar.Item>
                            </Sidebar.ItemGroup>
                            <Sidebar.ItemGroup>
                              <Sidebar.Item
                                href="https://github.com/themesberg/flowbite-react/"
                                icon={HiClipboard}
                              >
                                Docs
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="https://flowbite-react.com/"
                                icon={HiCollection}
                              >
                                Components
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="https://github.com/themesberg/flowbite-react/issues"
                                icon={HiInformationCircle}
                              >
                                Help
                              </Sidebar.Item>
                            </Sidebar.ItemGroup>
                          </Sidebar.Items>
                        </div>
                      </div>
                    </Sidebar>
                  </Drawer.Items>
                </Drawer>
              </div>
              <div>
                <div>
                  <Button onClick={() => setIsContact(true)} color="success">
                    Show contact form
                  </Button>
                </div>
                <Drawer open={isContact} onClose={contactClose} className="p-4">
                  <Drawer.Header title="CONTACT US" titleIcon={HiEnvelope} />
                  <Drawer.Items>
                    <form action="#">
                      <div className="mb-6 mt-3">
                        <Label htmlFor="email" className="mb-2 block">
                          Your email
                        </Label>
                        <TextInput
                          id="email"
                          name="email"
                          placeholder="name@company.com"
                          type="email"
                        />
                      </div>
                      <div className="mb-6">
                        <Label htmlFor="subject" className="mb-2 block">
                          Subject
                        </Label>
                        <TextInput
                          id="subject"
                          name="subject"
                          placeholder="Let us know how we can help you"
                          className="form-control"
                        />
                      </div>
                      <div className="mb-6">
                        <Label htmlFor="message" className="mb-2 block">
                          Your message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message..."
                          rows={4}
                        />
                      </div>
                      <div className="mb-6">
                        <Button
                          type="submit"
                          className="w-full rounded-md"
                          color="primary"
                        >
                          Send message
                        </Button>
                      </div>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <a
                          href="mailto:info@company.com"
                          className="hover:underline"
                        >
                          info@company.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <a href="tel:2124567890" className="hover:underline">
                          212-456-7890
                        </a>
                      </p>
                    </form>
                  </Drawer.Items>
                </Drawer>
              </div>
              <div>
                <div>
                  <Button onClick={() => setIsElement(true)} color="info">
                    Form elements
                  </Button>
                </div>
                <Drawer open={isElement} onClose={elementClose} className="p-4">
                  <Drawer.Header title="NEW EVENT" titleIcon={HiCalendar} />
                  <Drawer.Items>
                    <form action="#">
                      <div className="mb-6 mt-3">
                        <Label htmlFor="title" className="mb-2 block">
                          Title
                        </Label>
                        <TextInput
                          id="title"
                          name="title"
                          placeholder="Apple Keynote"
                          className="form-control"
                        />
                      </div>
                      <div className="mb-6">
                        <Label htmlFor="description" className="mb-2 block">
                          Description
                        </Label>
                        <Textarea
                          id="description"
                          name="description"
                          placeholder="Write event description..."
                          rows={4}
                          className="form-control"
                        />
                      </div>
                      <div className="mb-6">
                        <Datepicker className="form-control" />
                      </div>
                      <div className="mb-6">
                        <TextInput
                          id="guests"
                          name="guests"
                          placeholder="Add guest email"
                          type="search"
                          className="form-control"
                          rightIcon={() => (
                            <Button
                              size="sm"
                              className="[&>span]:items-center [&>span]:px-2 [&>span]:py-0"
                              color="primary"
                            >
                              <HiUserAdd className="mr-2" />
                              Add
                            </Button>
                          )}
                          theme={{
                            field: {
                              rightIcon: {
                                base: twMerge(
                                  theme.textInput.field.rightIcon.base,
                                  "pointer-events-auto"
                                ),
                              },
                            },
                          }}
                        />
                      </div>
                      <Avatar.Group className="mb-6">
                        <Avatar
                          alt=""
                          img="/images/profile/user-2.jpg"
                          rounded
                          size="sm"
                          stacked
                        />
                        <Avatar
                          alt=""
                          img="/images/profile/user-3.jpg"
                          rounded
                          size="sm"
                          stacked
                        />
                        <Avatar
                          alt=""
                          img="/images/profile/user-4.jpg"
                          rounded
                          size="sm"
                          stacked
                        />
                        <Avatar
                          alt=""
                          img="/images/profile/user-5.jpg"
                          rounded
                          size="sm"
                          stacked
                        />
                      </Avatar.Group>
                      <Button className="w-full rounded-md" color="primary">
                        <HiCalendar className="mr-2" />
                        Create event
                      </Button>
                    </form>
                  </Drawer.Items>
                </Drawer>
              </div>
              <div>
                <div>
                  <Button onClick={() => setIsScrolling(true)} color="warning">
                    Body Scrolling
                  </Button>
                </div>
                <Drawer
                  open={isScrolling}
                  onClose={scrollClose}
                  className="p-4"
                >
                  <Drawer.Header title="MENU" titleIcon={() => <></>} />
                  <Drawer.Items>
                    <Sidebar
                      aria-label="Sidebar with multi-level dropdown example"
                      className="[&>div]:bg-transparent [&>div]:p-0"
                    >
                      <div className="flex h-full flex-col justify-between py-2">
                        <div>
                          <form className="pb-3 md:hidden">
                            <TextInput
                              icon={HiSearch}
                              type="search"
                              placeholder="Search"
                              required
                              size={32}
                            />
                          </form>
                          <Sidebar.Items>
                            <Sidebar.ItemGroup>
                              <Sidebar.Item href="/" icon={HiChartPie}>
                                Dashboard
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="/e-commerce/products"
                                icon={HiShoppingBag}
                              >
                                Products
                              </Sidebar.Item>
                              <Sidebar.Item href="/users/list" icon={HiUsers}>
                                Users list
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="/authentication/sign-in"
                                icon={HiLogin}
                              >
                                Sign in
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="/authentication/sign-up"
                                icon={HiPencil}
                              >
                                Sign up
                              </Sidebar.Item>
                            </Sidebar.ItemGroup>
                            <Sidebar.ItemGroup>
                              <Sidebar.Item
                                href="https://github.com/themesberg/flowbite-react/"
                                icon={HiClipboard}
                              >
                                Docs
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="https://flowbite-react.com/"
                                icon={HiCollection}
                              >
                                Components
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="https://github.com/themesberg/flowbite-react/issues"
                                icon={HiInformationCircle}
                              >
                                Help
                              </Sidebar.Item>
                            </Sidebar.ItemGroup>
                          </Sidebar.Items>
                        </div>
                      </div>
                    </Sidebar>
                  </Drawer.Items>
                </Drawer>
              </div>
              <div>
                <div>
                  <div className="flex flex-col items-center justify-center">
                    <Button onClick={() => setIsEnable(true)} color="error">
                      Enabled
                    </Button>
                  </div>
                  <Drawer open={isEnable} onClose={enableClose} className="p-4">
                    <Drawer.Header title="MENU" titleIcon={() => <></>} />
                    <Drawer.Items>
                      <Sidebar
                        aria-label="Sidebar with multi-level dropdown example"
                        className="[&>div]:bg-transparent [&>div]:p-0"
                      >
                        <div className="flex h-full flex-col justify-between py-2">
                          <div>
                            <form className="pb-3 md:hidden">
                              <TextInput
                                icon={HiSearch}
                                type="search"
                                placeholder="Search"
                                required
                                size={32}
                              />
                            </form>
                            <Sidebar.Items>
                              <Sidebar.ItemGroup>
                                <Sidebar.Item href="/" icon={HiChartPie}>
                                  Dashboard
                                </Sidebar.Item>
                                <Sidebar.Item
                                  href="/e-commerce/products"
                                  icon={HiShoppingBag}
                                >
                                  Products
                                </Sidebar.Item>
                                <Sidebar.Item href="/users/list" icon={HiUsers}>
                                  Users list
                                </Sidebar.Item>
                                <Sidebar.Item
                                  href="/authentication/sign-in"
                                  icon={HiLogin}
                                >
                                  Sign in
                                </Sidebar.Item>
                                <Sidebar.Item
                                  href="/authentication/sign-up"
                                  icon={HiPencil}
                                >
                                  Sign up
                                </Sidebar.Item>
                              </Sidebar.ItemGroup>
                              <Sidebar.ItemGroup>
                                <Sidebar.Item
                                  href="https://github.com/themesberg/flowbite-react/"
                                  icon={HiClipboard}
                                >
                                  Docs
                                </Sidebar.Item>
                                <Sidebar.Item
                                  href="https://flowbite-react.com/"
                                  icon={HiCollection}
                                >
                                  Components
                                </Sidebar.Item>
                                <Sidebar.Item
                                  href="https://github.com/themesberg/flowbite-react/issues"
                                  icon={HiInformationCircle}
                                >
                                  Help
                                </Sidebar.Item>
                              </Sidebar.ItemGroup>
                            </Sidebar.Items>
                          </div>
                        </div>
                      </Sidebar>
                    </Drawer.Items>
                  </Drawer>
                </div>
              </div>
              <div>
                <div>
                  <Button onClick={() => setIsOpen(true)} color="primary">
                    Backdrop Enable
                  </Button>
                </div>
                <Drawer open={isOpen} onClose={handleClose} className="p-4">
                  <Drawer.Header title="MENU" titleIcon={() => <></>} />
                  <Drawer.Items>
                    <Sidebar
                      aria-label="Sidebar with multi-level dropdown example"
                      className="[&>div]:bg-transparent [&>div]:p-0"
                    >
                      <div className="flex h-full flex-col justify-between py-2">
                        <div>
                          <form className="pb-3 md:hidden">
                            <TextInput
                              icon={HiSearch}
                              type="search"
                              placeholder="Search"
                              required
                              size={32}
                            />
                          </form>
                          <Sidebar.Items>
                            <Sidebar.ItemGroup>
                              <Sidebar.Item href="/" icon={HiChartPie}>
                                Dashboard
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="/e-commerce/products"
                                icon={HiShoppingBag}
                              >
                                Products
                              </Sidebar.Item>
                              <Sidebar.Item href="/users/list" icon={HiUsers}>
                                Users list
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="/authentication/sign-in"
                                icon={HiLogin}
                              >
                                Sign in
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="/authentication/sign-up"
                                icon={HiPencil}
                              >
                                Sign up
                              </Sidebar.Item>
                            </Sidebar.ItemGroup>
                            <Sidebar.ItemGroup>
                              <Sidebar.Item
                                href="https://github.com/themesberg/flowbite-react/"
                                icon={HiClipboard}
                              >
                                Docs
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="https://flowbite-react.com/"
                                icon={HiCollection}
                              >
                                Components
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="https://github.com/themesberg/flowbite-react/issues"
                                icon={HiInformationCircle}
                              >
                                Help
                              </Sidebar.Item>
                            </Sidebar.ItemGroup>
                          </Sidebar.Items>
                        </div>
                      </div>
                    </Sidebar>
                  </Drawer.Items>
                </Drawer>
              </div>
              <div>
                <div>
                  <Button
                    onClick={() => setIsEnabledefa(true)}
                    color="secondary"
                  >
                    Backdrop Enabled (default)
                  </Button>
                </div>
                <Drawer
                  open={isEnabledefa}
                  onClose={enabledefaClose}
                  className="p-4"
                >
                  <Drawer.Header title="MENU" titleIcon={() => <></>} />
                  <Drawer.Items>
                    <Sidebar
                      aria-label="Sidebar with multi-level dropdown example"
                      className="[&>div]:bg-transparent [&>div]:p-0"
                    >
                      <div className="flex h-full flex-col justify-between py-2">
                        <div>
                          <form className="pb-3 md:hidden">
                            <TextInput
                              icon={HiSearch}
                              type="search"
                              placeholder="Search"
                              required
                              size={32}
                            />
                          </form>
                          <Sidebar.Items>
                            <Sidebar.ItemGroup>
                              <Sidebar.Item href="/" icon={HiChartPie}>
                                Dashboard
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="/e-commerce/products"
                                icon={HiShoppingBag}
                              >
                                Products
                              </Sidebar.Item>
                              <Sidebar.Item href="/users/list" icon={HiUsers}>
                                Users list
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="/authentication/sign-in"
                                icon={HiLogin}
                              >
                                Sign in
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="/authentication/sign-up"
                                icon={HiPencil}
                              >
                                Sign up
                              </Sidebar.Item>
                            </Sidebar.ItemGroup>
                            <Sidebar.ItemGroup>
                              <Sidebar.Item
                                href="https://github.com/themesberg/flowbite-react/"
                                icon={HiClipboard}
                              >
                                Docs
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="https://flowbite-react.com/"
                                icon={HiCollection}
                              >
                                Components
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="https://github.com/themesberg/flowbite-react/issues"
                                icon={HiInformationCircle}
                              >
                                Help
                              </Sidebar.Item>
                            </Sidebar.ItemGroup>
                          </Sidebar.Items>
                        </div>
                      </div>
                    </Sidebar>
                  </Drawer.Items>
                </Drawer>
              </div>
              <div>
                <div>
                  <Button onClick={() => setIsDisable(true)} color="success">
                    Disabled
                  </Button>
                </div>
                <Drawer
                  backdrop={false}
                  open={isDisable}
                  onClose={disableClose}
                  className="p-4"
                >
                  <Drawer.Header title="MENU" titleIcon={() => <></>} />
                  <Drawer.Items>
                    <Sidebar
                      aria-label="Sidebar with multi-level dropdown example"
                      className="[&>div]:bg-transparent [&>div]:p-0"
                    >
                      <div className="flex h-full flex-col justify-between py-2">
                        <div>
                          <form className="pb-3 md:hidden">
                            <TextInput
                              icon={HiSearch}
                              type="search"
                              placeholder="Search"
                              required
                              size={32}
                            />
                          </form>
                          <Sidebar.Items>
                            <Sidebar.ItemGroup>
                              <Sidebar.Item href="/" icon={HiChartPie}>
                                Dashboard
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="/e-commerce/products"
                                icon={HiShoppingBag}
                              >
                                Products
                              </Sidebar.Item>
                              <Sidebar.Item href="/users/list" icon={HiUsers}>
                                Users list
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="/authentication/sign-in"
                                icon={HiLogin}
                              >
                                Sign in
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="/authentication/sign-up"
                                icon={HiPencil}
                              >
                                Sign up
                              </Sidebar.Item>
                            </Sidebar.ItemGroup>
                            <Sidebar.ItemGroup>
                              <Sidebar.Item
                                href="https://github.com/themesberg/flowbite-react/"
                                icon={HiClipboard}
                              >
                                Docs
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="https://flowbite-react.com/"
                                icon={HiCollection}
                              >
                                Components
                              </Sidebar.Item>
                              <Sidebar.Item
                                href="https://github.com/themesberg/flowbite-react/issues"
                                icon={HiInformationCircle}
                              >
                                Help
                              </Sidebar.Item>
                            </Sidebar.ItemGroup>
                          </Sidebar.Items>
                        </div>
                      </div>
                    </Sidebar>
                  </Drawer.Items>
                </Drawer>
              </div>
              <div>
                <div>
                  <Button onClick={() => setIsSwipeable(true)} color="info">
                    Swipeable drawer
                  </Button>
                </div>
                <Drawer
                  edge
                  open={isSwipeable}
                  onClose={swipeableClose}
                  position="bottom"
                  className="p-0"
                >
                  <Drawer.Header
                    closeIcon={HiBars2}
                    title="Add widget"
                    titleIcon={HiSquaresPlus}
                    onClick={() => setIsOpen(!isSwipeable)}
                    className="cursor-pointer px-4 pt-4 hover:bg-gray-50 dark:hover:bg-gray-700"
                  />
                  <Drawer.Items className="p-4">
                    <div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4">
                      <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                        <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                          <svg
                            className="inline h-5 w-5 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 21"
                          >
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                          </svg>
                        </div>
                        <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                          Chart
                        </div>
                      </div>
                      <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                        <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                          <svg
                            className="inline h-5 w-5 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 14"
                          >
                            <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM9 6v2H2V6h7Zm2 0h7v2h-7V6Zm-9 4h7v2H2v-2Zm9 2v-2h7v2h-7Z" />
                          </svg>
                        </div>
                        <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                          Table
                        </div>
                      </div>
                      <div className="hidden cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 lg:block dark:bg-gray-700 dark:hover:bg-gray-600">
                        <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                          <svg
                            className="inline h-5 w-5 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 14 20"
                          >
                            <path d="M13.383.076a1 1 0 0 0-1.09.217L11 1.586 9.707.293a1 1 0 0 0-1.414 0L7 1.586 5.707.293a1 1 0 0 0-1.414 0L3 1.586 1.707.293A1 1 0 0 0 0 1v18a1 1 0 0 0 1.707.707L3 18.414l1.293 1.293a1 1 0 0 0 1.414 0L7 18.414l1.293 1.293a1 1 0 0 0 1.414 0L11 18.414l1.293 1.293A1 1 0 0 0 14 19V1a1 1 0 0 0-.617-.924ZM10 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0-4H4a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2Zm0-4H4a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                          </svg>
                        </div>
                        <div className="hidden text-center font-medium text-gray-500 dark:text-gray-400">
                          Ticket
                        </div>
                      </div>
                      <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                        <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                          <svg
                            className="inline h-5 w-5 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 20"
                          >
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                          </svg>
                        </div>
                        <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                          List
                        </div>
                      </div>
                      <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                        <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                          <svg
                            className="inline h-5 w-5 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                            />
                          </svg>
                        </div>
                        <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                          Price
                        </div>
                      </div>
                      <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                        <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                          <svg
                            className="inline h-5 w-5 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 18"
                          >
                            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                          </svg>
                        </div>
                        <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                          Users
                        </div>
                      </div>
                      <div className="hidden cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 lg:block dark:bg-gray-700 dark:hover:bg-gray-600">
                        <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                          <svg
                            className="inline h-5 w-5 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 18"
                          >
                            <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-1.391 7.361.707-3.535a3 3 0 0 1 .82-1.533L7.929 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h4.259a2.975 2.975 0 0 1-.15-1.639ZM8.05 17.95a1 1 0 0 1-.981-1.2l.708-3.536a1 1 0 0 1 .274-.511l6.363-6.364a3.007 3.007 0 0 1 4.243 0 3.007 3.007 0 0 1 0 4.243l-6.365 6.363a1 1 0 0 1-.511.274l-3.536.708a1.07 1.07 0 0 1-.195.023Z" />
                          </svg>
                        </div>
                        <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                          Task
                        </div>
                      </div>
                      <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                        <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                          <svg
                            className="inline h-5 w-5 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                            />
                          </svg>
                        </div>
                        <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                          Custom
                        </div>
                      </div>
                    </div>
                  </Drawer.Items>
                </Drawer>
              </div>
            </div>
          </CardBox>
        </div>
        <div className="col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Placement Drawer</h4>
            <div className="flex items-center gap-[1.875rem]">
              <div>
                <div>
                  <div>
                    <Button onClick={() => setIsLeft(true)} color="primary">
                      Left Drawer
                    </Button>
                  </div>
                  <Drawer
                    open={isLeft}
                    onClose={leftClose}
                    position="left"
                    className="p-4"
                  >
                    <Drawer.Header title="Drawer" />
                    <Drawer.Items>
                      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                        Supercharge your hiring by taking advantage of our&nbsp;
                        <a
                          href="#"
                          className="text-primary underline hover:no-underline dark:text-primary"
                        >
                          limited-time sale
                        </a>
                        &nbsp;for Flowbite Docs + Job Board. Unlimited access to
                        over 190K top-ranked candidates and the #1 design job
                        board.
                      </p>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <a
                          href="#"
                          className="rounded-md border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                        >
                          Learn more
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center rounded-md bg-primary hover:bg-primaryemphasis px-4 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-primary dark:hover:bg-primaryemphasis dark:focus:ring-cyan-800"
                        >
                          Get access&nbsp;
                          <svg
                            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </a>
                      </div>
                    </Drawer.Items>
                  </Drawer>
                </div>
              </div>
              <div>
                <div>
                  <Button onClick={() => setIsRight(true)} color="secondary">
                    Right Drawer
                  </Button>
                </div>
                <Drawer
                  open={isRight}
                  onClose={rightClose}
                  position="right"
                  className="p-4"
                >
                  <Drawer.Header title="Drawer" />
                  <Drawer.Items>
                    <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                      Supercharge your hiring by taking advantage of our&nbsp;
                      <a
                        href="#"
                        className="text-primary underline hover:no-underline dark:text-primary"
                      >
                        limited-time sale
                      </a>
                      &nbsp;for Flowbite Docs + Job Board. Unlimited access to
                      over 190K top-ranked candidates and the #1 design job
                      board.
                    </p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <a
                        href="#"
                        className="rounded-md border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        Learn more
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center rounded-md bg-primary hover:bg-primaryemphasis px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-primary dark:hover:bg-primaryemphasis dark:focus:ring-primary"
                      >
                        Get access&nbsp;
                        <svg
                          className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </Drawer.Items>
                </Drawer>
              </div>
              <div>
                <div>
                  <Button onClick={() => setIsTop(true)} color="success">
                    Top Drawer
                  </Button>
                </div>
                <Drawer
                  open={isTop}
                  onClose={topClose}
                  position="top"
                  className="p-4"
                >
                  <Drawer.Header title="Drawer" />
                  <Drawer.Items>
                    <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                      Supercharge your hiring by taking advantage of our&nbsp;
                      <a
                        href="#"
                        className="text-primary underline hover:no-underline dark:text-primary"
                      >
                        limited-time sale
                      </a>
                      &nbsp;for Flowbite Docs + Job Board. Unlimited access to
                      over 190K top-ranked candidates and the #1 design job
                      board.
                    </p>
                    <div className="flex items-center gap-4">
                      <a
                        href="#"
                        className="rounded-md border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        Learn more
                      </a>
                      <a
                        href="#"
                        className="inline-flex justify-center items-center rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-white hover:bg-primaryemphasis focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-primary dark:hover:bg-primaryemphasis dark:focus:ring-primary"
                      >
                        Get access&nbsp;
                        <svg
                          className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </Drawer.Items>
                </Drawer>
              </div>
              <div>
                <div>
                  <Button onClick={() => setIsBottom(true)} color="info">
                    Bottom Drawer
                  </Button>
                </div>
                <Drawer
                  open={isBottom}
                  onClose={bottomClose}
                  position="bottom"
                  className="p-4"
                >
                  <Drawer.Header title="Drawer" />
                  <Drawer.Items>
                    <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                      Supercharge your hiring by taking advantage of our&nbsp;
                      <a
                        href="#"
                        className="text-primary underline hover:no-underline dark:text-primary"
                      >
                        limited-time sale
                      </a>
                      &nbsp;for Flowbite Docs + Job Board. Unlimited access to
                      over 190K top-ranked candidates and the #1 design job
                      board.
                    </p>
                    <div className="flex items-center gap-4">
                      <a
                        href="#"
                        className="rounded-md border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        Learn more
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-md bg-primary hover:bg-primaryemphasis px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-primary dark:hover:bg-primaryemphasis dark:focus:ring-primary"
                      >
                        Get access&nbsp;
                        <svg
                          className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </Drawer.Items>
                </Drawer>
              </div>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default Offcanvas;
