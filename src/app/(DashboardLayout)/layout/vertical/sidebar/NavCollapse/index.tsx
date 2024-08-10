

import { Sidebar } from "flowbite-react";
import React from "react";
import { ChildItem } from "../Sidebaritems";
import NavItems from "../NavItems";
import { Icon } from "@iconify/react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
interface NavCollapseProps {
  item: ChildItem;
}


const NavCollapse: React.FC<NavCollapseProps> = ({ item }) => {
  return (
    <>
      <Sidebar.Collapse
        label={item.name}
        icon={() => <Icon icon={item.icon} height={18} />}

        renderChevronIcon={(theme, open) => {
          const IconComponent = open
            ? HiOutlineChevronDown
            : HiOutlineChevronDown;

          return (
            <IconComponent
              aria-hidden
              className={ twMerge(theme.label.icon.open[open ? "on" : "off"])} 
            />
          );
        }}
      >
        {/* Render child items */}
        {item.children && (
          <Sidebar.ItemGroup className="sidebar-dropdown">
            {item.children.map((child) => (
              <React.Fragment key={child.id}>
                {/* Render NavItems for child items */}
                {child.children ? (
                  <NavCollapse item={child} /> // Recursive call for nested collapse
                ) : (
                  <NavItems item={child} />
                )}
              </React.Fragment>
            ))}
          </Sidebar.ItemGroup>
        )}
      </Sidebar.Collapse>
    </>
  );
};

export default NavCollapse;
