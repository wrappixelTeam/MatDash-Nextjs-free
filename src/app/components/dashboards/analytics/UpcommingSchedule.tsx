"use client";
import React from "react";
import CardBox from "../../shared/CardBox";
import { Badge, Dropdown, Timeline } from "flowbite-react";
import { IconDotsVertical } from "@tabler/icons-react";
import { Icon } from "@iconify/react";
import SimpleBar from "simplebar-react";
const UpcommingSchedule = () => {
  const dropdownItems = ["Action", "Another action", "Something else"];

  const UpcommingScheduleData = [
    {
      icon: "scooter-line-duotone",
      iconBg: "warning",
      title: "Scooter Freight",
      code: "#1245-456201",
      statustext: "All",
      statuscolor: "success",
      timeline: [
        {
          id: 1,
          timelineIcon: "soundwave-circle-bold-duotone",
          iconcolor: "warning",
          title: "Drainage",
          country: "United Kingdom",
        },
        {
          id: 2,
          timelineIcon: "soundwave-circle-bold-duotone",
          iconcolor: "warning",
          title: "The lowland zone",
          country: "United Kingdom",
        },
      ],
    },
    {
      icon: "bus-line-duotone",
      iconBg: "primary",
      title: "Bus Freight",
      code: "#9002-125423",
      statustext: "All",
      statuscolor: "success",
      timeline: [
        {
          id: 1,
          timelineIcon: "soundwave-circle-bold-duotone",
          iconcolor: "primary",
          title: "Messina Harbor",
          country: "Sicily, Italy",
        },
        {
          id: 2,
          timelineIcon: "map-point-bold-duotone",
          iconcolor: "primary",
          title: "Hektor Container Hotel",
          country: "Tallin, EST",
        },
      ],
    },
    {
      icon: "tram-linear",
      iconBg: "secondary",
      title: "Train Freight",
      code: "#1245-780652",
      statustext: "Delivered",
      statuscolor: "success",
      timeline: [
        {
          id: 1,
          timelineIcon: "soundwave-circle-bold-duotone",
          iconcolor: "secondary",
          title: "Messina Harbor",
          country: "Lester, United Kingdom",
        },
        {
          id: 2,
          timelineIcon: "map-point-bold-duotone",
          iconcolor: "secondary",
          title: "Laxmi Empire Hotel",
          country: "Mumbai, India",
        },
      ],
    },
  ];

  const DeliveredData = [
    {
      icon: "scooter-line-duotone",
      iconBg: "warning",
      title: "Scooter Freight",
      code: "#1245-456201",
      statustext: "Delivered",
      statuscolor: "success",
      timeline: [
        {
          id: 1,
          timelineIcon: "soundwave-circle-bold-duotone",
          iconcolor: "warning",
          title: "Drainage",
          country: "United Kingdom",
        },
        {
          id: 2,
          timelineIcon: "soundwave-circle-bold-duotone",
          iconcolor: "warning",
          title: "The lowland zone",
          country: "United Kingdom",
        },
      ],
    },
    {
      icon: "bus-line-duotone",
      iconBg: "primary",
      title: "Bus Freight",
      code: "#9002-125423",
      statustext: "All",
      statuscolor: "success",
      timeline: [
        {
          id: 1,
          timelineIcon: "soundwave-circle-bold-duotone",
          iconcolor: "primary",
          title: "Messina Harbor",
          country: "Sicily, Italy",
        },
        {
          id: 2,
          timelineIcon: "map-point-bold-duotone",
          iconcolor: "primary",
          title: "Hektor Container Hotel",
          country: "Tallin, EST",
        },
      ],
    },
    {
      icon: "tram-linear",
      iconBg: "secondary",
      title: "Train Freight",
      code: "#1245-780652",
      statustext: "Delivered",
      statuscolor: "success",
      timeline: [
        {
          id: 1,
          timelineIcon: "soundwave-circle-bold-duotone",
          iconcolor: "secondary",
          title: "Messina Harbor",
          country: "Lester, United Kingdom",
        },
        {
          id: 2,
          timelineIcon: "map-point-bold-duotone",
          iconcolor: "secondary",
          title: "Laxmi Empire Hotel",
          country: "Mumbai, India",
        },
      ],
    },
  ];



  const ShippingData = [
    {
        icon: 'tram-linear',
        iconBg: 'secondary',
        title: 'Train Freight',
        code: '#1245-780652',
        statustext: 'Shipping',
        statuscolor: 'primary',
        timeline: [
            {
                id: 1,
                timelineIcon: 'soundwave-circle-bold-duotone',
                iconcolor: 'secondary',
                title: 'Messina Harbor',
                country: 'Lester, United Kingdom'
            },
            {
                id: 2,
                timelineIcon: 'map-point-bold-duotone',
                iconcolor: 'secondary',
                title: 'Laxmi Empire Hotel',
                country: 'Mumbai, India'
            }
        ]
    },
    {
        icon: 'scooter-line-duotone',
        iconBg: 'warning',
        title: 'Scooter Freight',
        code: '#1245-456201',
        statustext: 'Shipping',
        statuscolor: 'primary',
        timeline: [
            {
                id: 1,
                timelineIcon: 'soundwave-circle-bold-duotone',
                iconcolor: 'warning',
                title: 'Drainage',
                country: 'United Kingdom'
            },
            {
                id: 2,
                timelineIcon: 'soundwave-circle-bold-duotone',
                iconcolor: 'warning',
                title: 'The lowland zone',
                country: 'United Kingdom'
            }
        ]
    },
    {
        icon: 'bus-line-duotone',
        iconBg: 'primary',
        title: 'Bus Freight',
        code: '#9002-125423',
        statustext: 'Shipping',
        statuscolor: 'primary',
        timeline: [
            {
                id: 1,
                timelineIcon: 'soundwave-circle-bold-duotone',
                iconcolor: 'primary',
                title: 'Messina Harbor',
                country: 'Sicily, Italy'
            },
            {
                id: 2,
                timelineIcon: 'map-point-bold-duotone',
                iconcolor: 'primary',
                title: 'Hektor Container Hotel',
                country: 'Tallin, EST'
            }
        ]
    }
];


  return (
    <>
      <CardBox>
        <div className="flex items-center justify-between">
          <div>
            <h5 className="card-title">Upcoming Schedules</h5>
            <p className="text-subtitle">Our corporate events</p>
          </div>

          <div>
            <Dropdown
              label=""
              dismissOnClick={false}
              renderTrigger={() => (
                <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                  <IconDotsVertical size={22} />
                </span>
              )}
            >
              {dropdownItems.map((items, index) => {
                return <Dropdown.Item key={index}>{items}</Dropdown.Item>;
              })}
            </Dropdown>
          </div>
        </div>

        <div className=" mt-5   ">
          <ul
            className="flex flex-wrap bg-muted dark:bg-dark p-1 rounded-full text-sm font-semibold text-center"
            id="default-styled-tab"
            data-tabs-toggle="#default-styled-tab-content"
            data-tabs-active-classes="text-dark bg-white dark:bg-darkgray dark:text-white"
            data-tabs-inactive-classes=""
            role="tablist"
          >
            <li role="presentation">
              <button
                className="py-2 px-4 rounded-full min-w-[100px] text-dark"
                id="profit-styled-tab"
                data-tabs-target="#styled-all"
                type="button"
                role="tab"
                aria-controls="all"
                aria-selected="false"
              >
                All
              </button>
            </li>
            <li role="presentation">
              <button
                className="py-2 px-4 rounded-full min-w-[100px] text-dark"
                id="delivered-styled-tab"
                data-tabs-target="#styled-delivered"
                type="button"
                role="tab"
                aria-controls="delivered"
                aria-selected="false"
              >
                Delivered
              </button>
            </li>
            <li role="presentation">
              <button
                className="py-2 px-4 rounded-full min-w-[100px] text-dark"
                id="shipping-styled-tab"
                data-tabs-target="#styled-shipping"
                type="button"
                role="tab"
                aria-controls="shipping"
                aria-selected="false"
              >
                Shipping
              </button>
            </li>
          </ul>
        </div>

        <div id="default-styled-tab-content">
          <div
            className="hidden"
            id="styled-all"
            role="tabpanel"
            aria-labelledby="all-tab"
          >
            <SimpleBar className="max-h-[378px]">
            <div className="timeline-tabs">
              {UpcommingScheduleData.map((item, index) => (
                <div className="mt-6 timeline-list" key={index}>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <div
                        className={`h-10 w-10 flex justify-center items-center rounded-md bg-${item.iconBg}`}
                      >
                        <Icon
                          icon={`solar:${item.icon}`}
                          className="text-white"
                          height="25"
                        ></Icon>
                      </div>
                      <div>
                        <p className="font-medium text-darktext">
                          {item.title}
                        </p>
                        <h6 className="text-body-1">{item.code}</h6>
                      </div>
                    </div>
                    <Badge color={`light${item.statuscolor}`}>
                      {item.statustext}
                    </Badge>
                  </div>

                  {item.timeline.map((time, i) => (
                    <div className="mt-5 timeline" key={i}>
                      <div className="flex gap-3 items-center mb-4">
                        <div className="timeline-icon">
                          <div className="h-10 w-10 border flex justify-center items-center border-ld rounded-full">
                            <Icon
                              icon={`solar:${time.timelineIcon}`}
                              className={`text-${time.iconcolor}`}
                              height="25"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-darklink">
                            {time.title}
                          </p>
                          <h6 className="text-sm">{time.country}</h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            </SimpleBar>
          </div>
          <div
            className="hidden"
            id="styled-delivered"
            role="tabpanel"
            aria-labelledby="delivered-tab"
          >
        
        <SimpleBar className="max-h-[378px]">
            <div className="timeline-tabs">
              {DeliveredData.map((item, index) => (
                <div className="mt-6 timeline-list" key={index}>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <div
                        className={`h-10 w-10 flex justify-center items-center rounded-md bg-${item.iconBg}`}
                      >
                        <Icon
                          icon={`solar:${item.icon}`}
                          className="text-white"
                          height="25"
                        ></Icon>
                      </div>
                      <div>
                        <p className="font-medium text-darktext">
                          {item.title}
                        </p>
                        <h6 className="text-body-1">{item.code}</h6>
                      </div>
                    </div>
                    <Badge color={`light${item.statuscolor}`}>
                      {item.statustext}
                    </Badge>
                  </div>

                  {item.timeline.map((time, i) => (
                    <div className="mt-5 timeline" key={i}>
                      <div className="flex gap-3 items-center mb-4">
                        <div className="timeline-icon">
                          <div className="h-10 w-10 border flex justify-center items-center border-ld rounded-full">
                            <Icon
                              icon={`solar:${time.timelineIcon}`}
                              className={`text-${time.iconcolor}`}
                              height="25"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-darklink">
                            {time.title}
                          </p>
                          <h6 className="text-sm">{time.country}</h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            </SimpleBar>     


          </div>
          <div
            className="hidden"
            id="styled-shipping"
            role="tabpanel"
            aria-labelledby="shipping-tab"
          >
                <SimpleBar className="max-h-[378px]">
            <div className="timeline-tabs">
              {ShippingData.map((item, index) => (
                <div className="mt-6 timeline-list" key={index}>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <div
                        className={`h-10 w-10 flex justify-center items-center rounded-md bg-${item.iconBg}`}
                      >
                        <Icon
                          icon={`solar:${item.icon}`}
                          className="text-white"
                          height="25"
                        ></Icon>
                      </div>
                      <div>
                        <p className="font-medium text-darktext">
                          {item.title}
                        </p>
                        <h6 className="text-body-1">{item.code}</h6>
                      </div>
                    </div>
                    <Badge color={`light${item.statuscolor}`}>
                      {item.statustext}
                    </Badge>
                  </div>

                  {item.timeline.map((time, i) => (
                    <div className="mt-5 timeline" key={i}>
                      <div className="flex gap-3 items-center mb-4">
                        <div className="timeline-icon">
                          <div className="h-10 w-10 border flex justify-center items-center border-ld rounded-full">
                            <Icon
                              icon={`solar:${time.timelineIcon}`}
                              className={`text-${time.iconcolor}`}
                              height="25"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-darklink">
                            {time.title}
                          </p>
                          <h6 className="text-sm">{time.country}</h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            </SimpleBar> 
          </div>
        </div>
      </CardBox>
    </>
  );
};

export default UpcommingSchedule;
