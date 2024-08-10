import React from "react";
import { Button } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";
import CardBox from "../shared/CardBox";
import BreadcrumbComp from "@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Button Group",
  },
];

const ButtonGroup = () => {
  return (
    <>
      <BreadcrumbComp title="Button Group" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[1.875rem]">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Default button group</h4>
            <Button.Group>
              <Button color="gray">Profile</Button>
              <Button color="gray">Settings</Button>
              <Button color="gray">Messages</Button>
            </Button.Group>
            <Button.Group>
              <Button color="gray">Profile</Button>
              <Button color="gray">Settings</Button>
              <Button color="gray">Messages</Button>
            </Button.Group>
            <Button.Group>
              <Button color="gray">Profile</Button>
              <Button color="gray">Settings</Button>
              <Button color="gray">Messages</Button>
            </Button.Group>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Outline button group</h4>
            <div className="flex flex-wrap gap-2">
              <Button.Group outline>
                <Button color="gray">Profile</Button>
                <Button color="gray">Settings</Button>
                <Button color="gray">Messages</Button>
              </Button.Group>
              <Button.Group outline>
                <Button gradientMonochrome="info">Profile</Button>
                <Button gradientMonochrome="info">Settings</Button>
                <Button gradientMonochrome="info">Messages</Button>
              </Button.Group>
              <Button.Group outline>
                <Button gradientDuoTone="cyanToBlue">Profile</Button>
                <Button gradientDuoTone="cyanToBlue">Settings</Button>
                <Button gradientDuoTone="cyanToBlue">Messages</Button>
              </Button.Group>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">Color options</h4>
            <div className="flex flex-wrap gap-2">
              <Button.Group>
                <Button color="primary">Profile</Button>
                <Button color="primary">Settings</Button>
                <Button color="primary">Messages</Button>
              </Button.Group>
              <Button.Group>
                <Button gradientMonochrome="info">Profile</Button>
                <Button gradientMonochrome="info">Settings</Button>
                <Button gradientMonochrome="info">Messages</Button>
              </Button.Group>
              <Button.Group>
                <Button gradientDuoTone="greenToBlue">Profile</Button>
                <Button gradientDuoTone="greenToBlue">Settings</Button>
                <Button gradientDuoTone="greenToBlue">Messages</Button>
              </Button.Group>
            </div>
          </CardBox>
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CardBox>
            <h4 className="text-lg font-semibold">
              Outline button group with icons
            </h4>
            <div className="flex flex-wrap gap-2">
              <Button.Group outline>
                <Button color="gray">
                  <HiUserCircle className="mr-3 h-4 w-4" />
                  Profile
                </Button>
                <Button color="gray">
                  <HiAdjustments className="mr-3 h-4 w-4" />
                  Settings
                </Button>
                <Button color="gray">
                  <HiCloudDownload className="mr-3 h-4 w-4" />
                  Messages
                </Button>
              </Button.Group>
              <Button.Group outline>
                <Button gradientMonochrome="info">
                  <HiUserCircle className="mr-3 h-4 w-4" />
                  Profile
                </Button>
                <Button gradientMonochrome="info">
                  <HiAdjustments className="mr-3 h-4 w-4" />
                  Settings
                </Button>
                <Button gradientMonochrome="info">
                  <HiCloudDownload className="mr-3 h-4 w-4" />
                  Messages
                </Button>
              </Button.Group>
              <Button.Group outline>
                <Button gradientDuoTone="cyanToBlue">
                  <HiUserCircle className="mr-3 h-4 w-4" />
                  Profile
                </Button>
                <Button gradientDuoTone="cyanToBlue">
                  <HiAdjustments className="mr-3 h-4 w-4" />
                  Settings
                </Button>
                <Button gradientDuoTone="cyanToBlue">
                  <HiCloudDownload className="mr-3 h-4 w-4" />
                  Messages
                </Button>
              </Button.Group>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  );
};

export default ButtonGroup;
