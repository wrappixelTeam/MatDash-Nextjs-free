import React from "react";
import Sidebar from "./layout/vertical/sidebar/Sidebar";
import Header from "./layout/vertical/header/Header";
import { Customizer } from "./layout/shared/customizer/Customizer";
import Horizontalheader from "./layout/horizontal/header/Horizontalheader";
import { SidebarProvider } from "../context/SidbarContext";
import { Flowbite } from "flowbite-react";
import customTheme from "@/utils/theme/custom-theme";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <div className="page-wrapper flex w-full">
          {/* Header/sidebar */}
          <Sidebar />
          <div className="body-wrapper w-full bg-lightgray dark:bg-dark">
            {/* Top Header  */}
            <Header />
            {/* <Horizontalheader/> */}
            {/* Body Content  */}
            <div className="container mx-auto  py-[30px]">{children}</div>
            <Customizer />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
