import { IconChevronDown } from "@tabler/icons-react";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
export const Navigation = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="horizontal-nav bg-transparent dark:bg-transparent sm:px-0"
    >
      <Navbar.Collapse>
        <ul className="flex items-center space-x-5">
          <li>
            <Link
              href="/"
              className="active py-2 px-3 rounded-full flex gap-2 items-center group-hover/nav:bg-lightprimary group-hover/nav:text-primary "
            >
              <Icon icon="solar:layers-line-duotone" height={18} />
              Dashboards
            </Link>
          </li>
          <li className="group/nav">
            <Link
              href=""
              id="dropdownmenu"
              data-dropdown-toggle="dropdownHoverMenu"
              data-dropdown-trigger="hover"
              className="bg-transparent flex gap-2 items-center py-2 px-3 rounded-full  group-hover/nav:bg-lightprimary group-hover/nav:text-primary "
              type="button"
            >
              <Icon icon="solar:widget-line-duotone" height={18} />
              Apps
              <IconChevronDown size={18} />
            </Link>

            <div
              id="dropdownHoverMenu"
              className="z-10 hidden dropdown rounded-lg shadow w-44 "
            >
              <ul className="py-2" aria-labelledby="dropdownmenu">
                <li>
                  <Link
                    href="#"
                    className="flex gap-2 items-center py-2 bg-hover px-6 text-dark dark:text-white hover:text-primary dark:hover:text-primary"
                  >
                    <Icon icon="solar:settings-outline" height={15} />
                    Apps 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex gap-2 items-center py-2 bg-hover px-6 text-dark dark:text-white hover:text-primary dark:hover:text-primary"
                  >
                    <Icon icon="solar:settings-outline" height={15} />
                    Apps 2
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex gap-2 items-center py-2 bg-hover px-6 text-dark dark:text-white hover:text-primary dark:hover:text-primary"
                  >
                    <Icon icon="solar:settings-outline" height={15} />
                    Apps 3
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
};
