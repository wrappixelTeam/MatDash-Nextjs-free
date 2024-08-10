"use client";
import React from "react";
import { CustomFlowbiteTheme, Sidebar, SidebarCollapse } from "flowbite-react";
import SidebarContent from "./Sidebaritems";
import NavItems from "./NavItems";
import NavCollapse from "./NavCollapse";
import { useSidebarContext } from "../../../../context/SidbarContext";
import SimpleBar from "simplebar-react";

const SidebarTheme: CustomFlowbiteTheme["sidebar"] = {
  root: {
    inner: "bg-white dark:bg-transparent rounded-none",
  },
  item: {
    base: "flex items-center justify-center rounded-lg px-4 py-3 mb-1 text-[15px] leading-[normal] font-normal text-link hover:bg-lightprimary hover:text-primary dark:text-white dark:hover:text-primary",
    content: {
      base: "flex-1 whitespace-nowrap px-0",
    },
    active:
      "bg-lightprimary text-primary dark:bg-lightprimary dark:text-primary",
  },
  collapse: {
    button:
      "group flex items-center justify-center rounded-lg px-4 py-3 mb-1 text-[15px] leading-[normal] font-normal text-link hover:bg-lightprimary hover:text-primary dark:text-white w-full dark:hover:text-primary",
    icon: {
      base: "h-6 w-6 text-link text-base",
    },
  },
};

const SidebarLayout = () => {
  const { selectedIconId, setSelectedIconId } = useSidebarContext() || {};
  const selectedContent = SidebarContent.find(
    (data) => data.id === selectedIconId
  );
  return (
    <div>
      <Sidebar
        theme={SidebarTheme}
        className="fixed menu-sidebar pt-8 bg-white dark:bg-darkgray px-4"
        aria-label="Sidebar with multi-level dropdown example"
      >
        <SimpleBar className="h-[calc(100vh_-_85px)]">
          <Sidebar.Items>
            <Sidebar.ItemGroup className="sidebar-nav">
              {selectedContent &&
                selectedContent.items?.map((item, index) => (
                  <React.Fragment key={index}>
                    <h5 className="text-link font-semibold text-sm caption">
                      {item.heading}
                    </h5>
                    {item.children?.map((child, index) => (
                      <React.Fragment key={child.id && index}>
                        {child.children ? (
                          <NavCollapse item={child} />
                        ) : (
                          <NavItems item={child} />
                        )}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </SimpleBar>
      </Sidebar>
    </div>
  );
};

export default SidebarLayout;
