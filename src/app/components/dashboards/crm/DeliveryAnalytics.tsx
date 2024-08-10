"use client";
import { IconDotsVertical } from "@tabler/icons-react";
import React from "react";
import CardBox from "../../shared/CardBox";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Dropdown } from "flowbite-react";
import { Icon } from "@iconify/react";
const DeliveryAnalytics = () => {
  const dropdownItems = ["Action", "Another action", "Something else"];

  const ChartData: any = {
    chart: {
      fontFamily: "inherit",
      type: "radar",
      height: 350,
      toolbar: { show: !1 },
      foreColor: "#adb0bb",
    },
    series: [
      { name: "Sales", data: [32, 27, 27, 30, 25, 25] },
      { name: "Visits", data: [25, 35, 20, 20, 20, 20] },
    ],
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: "#90A4AE50",
          connectorColors: "#90A4AE50",
        },
      },
    },
    colors: ["var(--color-primary)", "var(--color-lighterror) "],
    legend: {
      show: false,
    },
    fill: {
      colors: ["var(--color-primary)", "var(--color-lighterror)"],
      opacity: [1, 0.4],
    },
    markers: { size: 0 },
    grid: {
      show: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        show: !0,
        style: {
          fontSize: "13px",
        },
      },
    },
    yaxis: { show: !1, min: 0, max: 40, tickAmount: 4 },
    // responsive: [{ breakpoint: 769, options: { chart: { height: 400 } } }],
    tooltip: {
      theme: "dark",
    },
  };

  const optionexpenses: any = {
    series: [
      {
        name: "This year",
        data: [9, 5, 3, 7, 5, 10, 3],
      },
      {
        name: "Last year ",
        data: [6, 3, 9, 5, 4, 6, 4],
      },
    ],

    chart: {
      fontFamily: "inherit",
      type: "bar",
      height: 350,
      offsetY: 10,
      offsetX: -18,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: "rgba(0,0,0,.1)",
    },
    colors: ["var(--color-primary)", "var(--color-secondary)"],
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: false,
        columnWidth: "30%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 5,
      colors: ["transparent"],
    },
    xaxis: {
      type: "category",
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#a1aab2",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#a1aab2",
        },
      },
      min: 0,
      max: 12,
      tickAmount: 4,
    },

    fill: {
      opacity: 1,
      colors: ["var(--color-primary)", "var(--color-secondary)"],
    },
    tooltip: {
      theme: "dark",
    },
    legend: {
      show: false,
    },

    // responsive: [
    //   {
    //     breakpoint: 767,
    //     options: {
    //       stroke: {
    //         show: false,
    //         width: 5,
    //         colors: ["transparent"],
    //       },
    //     },
    //   },
    // ],
  };

  return (
    <>
      <CardBox>
        <div className="flex items-center justify-between">
          <h5 className="card-title">Delivery Analytics</h5>
          <div className="flex items-center gap-3">
            <ul
              className="flex flex-wrap bg-muted dark:bg-dark p-1 rounded-full text-xs font-semibold text-center"
              id="default-styled-tab"
              data-tabs-toggle="#default-styled-tab-content"
              data-tabs-active-classes="text-dark bg-white dark:bg-darkgray dark:text-white"
              data-tabs-inactive-classes=""
              role="tablist"
            >
              <li role="presentation">
                <button
                  className="py-2 px-4 rounded-full min-w-[100px] text-dark"
                  id="email-styled-tab"
                  data-tabs-target="#styled-email"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Email
                </button>
              </li>
              <li role="presentation">
                <button
                  className="py-2 px-4 rounded-full min-w-[100px] text-dark"
                  id="lastweek-styled-tab"
                  data-tabs-target="#styled-lastweek"
                  type="button"
                  role="tab"
                  aria-controls="lastweek"
                  aria-selected="false"
                >
                  From last week
                </button>
              </li>
            </ul>
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

        <div id="default-styled-tab-content">
          <div
            className="hidden"
            id="styled-email"
            role="tabpanel"
            aria-labelledby="email-tab"
          >
            <div className="grid grid-cols-12 gap-[30px] items-center mt-4">
              <div className="lg:col-span-7 col-span-12">
                <Chart
                  options={ChartData}
                  series={ChartData.series}
                  type="radar"
                  height='350px'
                  width='100%'
                />
              </div>
              <div className="lg:col-span-5 col-span-12">
                <div className="bg-muted dark:bg-darkmuted rounded-md px-5 py-4">
                  <Icon
                    icon="material-symbols:rocket-launch-outline"
                    className="text-primary mb-2"
                    height="30"
                  ></Icon>
                  <h5 className="text-lg my-1">Welcome Emails!</h5>
                  <p className="text-dark opacity-80 dark:text-white text-sm font-medium">
                    Have great potential!
                  </p>
                </div>
                <div className="flex gap-3 items-center mt-6">
                  <span className="rounded-full w-[18px] h-[10px] bg-primary"></span>
                  <h6 className="text-base">22.3%</h6>
                  <p className="text-sm font-medium">Open Rate</p>
                </div>
                <div className="flex gap-3 items-center mt-4">
                  <span className="rounded-full w-[18px] h-[10px] bg-secondary"></span>
                  <h6 className="text-base">14.2%</h6>
                  <p className="text-sm font-medium">Click-through Rate</p>
                </div>
                <div className="flex gap-3 items-center mt-4">
                  <span className="rounded-full w-[18px] h-[10px] bg-error"></span>
                  <h6 className="text-base">11.6%</h6>
                  <p className="text-sm font-medium">Conversation Rate</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hidden"
            id="styled-lastweek"
            role="tabpanel"
            aria-labelledby="lastweek-tab"
          >
            <div className="-me-6">
              <Chart
                options={optionexpenses}
                series={optionexpenses.series}
                type="bar"
                height='350px'
                width='100%'
              />
            </div>
          </div>
        </div>
      </CardBox>
    </>
  );
};

export default DeliveryAnalytics;
