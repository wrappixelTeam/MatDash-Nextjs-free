// NavItems.tsx
"use client";
import React from "react";
import { ChildItem } from "../Sidebaritems";
import { Sidebar } from "flowbite-react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemsProps {
  item: ChildItem;
}
const NavItems: React.FC<NavItemsProps> = ({ item }) => {
  const pathname = usePathname();
  return (
    <>
      <Sidebar.Item
        href={item.url}
        as={Link}
        className={`${item.url == pathname
          ? "text-white bg-primary"
          : "text-link bg-transparent group/link"
          } `}
      >
        <span className="flex gap-3 align-center items-center">
          {item.icon ? (
            <Icon icon={item.icon} className={`${item.color}`} height={18} />
          ) : (
            <span className="h-[6px] w-[6px] bg-darklink dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary"></span>
          )}
          {item.name}
        </span>
      </Sidebar.Item>
    </>
  );
};

export default NavItems;
