"use client";
import { IconDotsVertical } from "@tabler/icons-react";
import { Checkbox, Dropdown, Table } from "flowbite-react";
import React from "react";
import CardBox from "../../shared/CardBox";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import user1 from "/public/images/profile/user-2.jpg";
import user2 from "/public/images/profile/user-3.jpg";
import user3 from "/public/images/profile/user-4.jpg";
import user4 from "/public/images/profile/user-5.jpg";
import user5 from "/public/images/profile/user-6.jpg";

import logo1 from "/public/images/svgs/icon-diamond.svg";
import logo2 from "/public/images/svgs/icon-figma.svg";
import logo3 from "/public/images/svgs/icon-react.svg";
import Image from "next/image";

import {
  AreaChartData1,
  AreaChartData2,
  AreaChartData3,
  AreaChartData4,
} from "./ChartData";

const RecentProjects = () => {
  const dropdownItems = ["Action", "Another action", "Something else"];

  const RecentProjectsData = [
    {
      logotext: "PS",
      logotextcolor: "primary",
      logoimg: "",
      name: "Photoshop",
      budgets: "$29,374.60",
      leader: "Erin",
      chart: "success",
      teams: [
        {
          id: 1,
          user: user1,
          count: "",
        },
        {
          id: 2,
          user: user2,
          count: "",
        },
        {
          id: 3,
          user: user3,
          count: "",
        },
        {
          id: 4,
          user: "",
          count: "+3",
        },
      ],
    },
    {
      logotext: "",
      logotextcolor: "warning",
      logoimg: logo1,
      name: "Website SEO",
      budgets: "$1,843.73",
      leader: "Timothy",
      chart: "error",
      teams: [
        {
          id: 1,
          user: user4,
          count: "",
        },
        {
          id: 2,
          user: user5,
          count: "",
        },
        {
          id: 3,
          user: user3,
          count: "",
        },
        {
          id: 4,
          user: "",
          count: "+3",
        },
      ],
    },
    {
      logotext: "WS",
      logotextcolor: "success",
      logoimg: "",
      name: "iOS Mobile App Design",
      budgets: "$0.9989",
      leader: "Tyler",
      chart: "primary",
      teams: [
        {
          id: 1,
          user: user1,
          count: "",
        },
        {
          id: 2,
          user: user2,
          count: "",
        },
        {
          id: 3,
          user: user3,
          count: "",
        },
        {
          id: 4,
          user: "",
          count: "+3",
        },
      ],
    },
    {
      logotext: "",
      logotextcolor: "secondary",
      logoimg: logo2,
      name: "Figma Components",
      budgets: "$238.61",
      leader: "Kristen",
      chart: "warning",
      teams: [
        {
          id: 1,
          user: user5,
          count: "",
        },
        {
          id: 2,
          user: user2,
          count: "",
        },
        {
          id: 3,
          user: user1,
          count: "",
        },
        {
          id: 4,
          user: "",
          count: "+3",
        },
      ],
    },
    {
      logotext: "",
      logotextcolor: "primary",
      logoimg: logo3,
      name: "Web App Design",
      budgets: "$0.629",
      leader: "Isabelle",
      chart: "success",
      teams: [
        {
          id: 1,
          user: user2,
          count: "",
        },
        {
          id: 2,
          user: user1,
          count: "",
        },
        {
          id: 3,
          user: user4,
          count: "",
        },
        {
          id: 4,
          user: "",
          count: "+3",
        },
      ],
    },
  ];

  return (
    <>
      <CardBox>
        <div className="flex items-center justify-between">
          <h5 className="card-title">Recent Projects</h5>
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
                  id="sass-styled-tab"
                  data-tabs-target="#styled-sass"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Sass
                </button>
              </li>
              <li role="presentation">
                <button
                  className="py-2 px-4 rounded-full min-w-[100px] text-dark"
                  id="mobile-styled-tab"
                  data-tabs-target="#styled-mobile"
                  type="button"
                  role="tab"
                  aria-controls="mobile"
                  aria-selected="false"
                >
                  Mobile
                </button>
              </li>
              <li role="presentation">
                <button
                  className="py-2 px-4 rounded-full min-w-[100px] text-dark"
                  id="other-styled-tab"
                  data-tabs-target="#styled-other"
                  type="button"
                  role="tab"
                  aria-controls="other"
                  aria-selected="false"
                >
                  Others
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
            id="styled-sass"
            role="tabpanel"
            aria-labelledby="sass-tab"
          >
            <Table className="mt-2">
              <Table.Head>
                <Table.HeadCell className="ps-0 text-base font-semibold pb-4">
                  #
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold">
                  Name
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold text-end">
                  Budget
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold text-end">
                  Team
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold text-end">
                  Leader
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold text-end">
                  Activity Log
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y divide-border dark:divide-darkborder ">
                {RecentProjectsData.map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell className="whitespace-nowrap ps-0">
                      <Checkbox className="checkbox" />
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap">
                      <div className="flex gap-5 items-center">
                        <span
                          className={`w-14 h-10 rounded-full flex items-center justify-center  bg-light${item.logotextcolor} dark:bg-dark${item.logotextcolor} text-${item.logotextcolor}`}
                        >
                          {item.logoimg ? (
                            <Image src={item.logoimg} alt="logo" />
                          ) : (
                            <p
                              className={`text-sm font-semibold text-${item.logotextcolor}`}
                            >
                              {item.logotext}
                            </p>
                          )}
                        </span>
                        <h6 className="text-base">{item.name}</h6>
                      </div>
                    </Table.Cell>
                    <Table.Cell className="text-end">
                      <h5 className="text-sm">{item.budgets}</h5>
                    </Table.Cell>
                    <Table.Cell
                      className="
                    text-end"
                    >
                      <div className="flex justify-end">
                        {item.teams.map((team, index) => (
                          <div className="-ms-2" key={index}>
                            {team.user ? (
                              <Image
                                src={team.user}
                                className="border-2 border-white dark:border-darkborder rounded-full"
                                alt="icon"
                                height={30}
                                width={30}
                              />
                            ) : (
                              <div className="bg-lightprimary border-2 border-white dark:border-darkborder  h-[30px] w-[30px] flex justify-center items-center text-sm font-semibold text-dark dark:text-white rounded-full dark:bg-darkprimary">
                                {team.count}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </Table.Cell>
                    <Table.Cell className="text-end">
                      <p className="text-darklink text-sm font-semibold">
                        {item.leader}
                      </p>
                    </Table.Cell>
                    <Table.Cell className="text-end">
                      <div className="flex justify-end">
                        {item.chart == "success" ? (
                          <Chart
                            options={AreaChartData1}
                            series={AreaChartData1.series}
                            type="area"
                            height='14px'
                            width='143px'
                          />
                        ) : item.chart == "error" ? (
                          <Chart
                            options={AreaChartData2}
                            series={AreaChartData2.series}
                            type="area"
                            height='14px'
                            width='143px'
                          />
                        ) : item.chart == "warning" ? (
                          <Chart
                            options={AreaChartData3}
                            series={AreaChartData3.series}
                            type="area"
                            height='14px'
                            width='143px'
                          />
                        ) : (
                          <Chart
                            options={AreaChartData4}
                            series={AreaChartData4.series}
                            type="area"
                            height='14px'
                            width='143px'
                          />
                        )}
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
          <div
            className="hidden"
            id="styled-mobile"
            role="tabpanel"
            aria-labelledby="mobile-tab"
          >
            <Table className="mt-2">
              <Table.Head>
                <Table.HeadCell className="ps-0 text-base font-semibold pb-4">
                  #
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold">
                  Name
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold text-end">
                  Budget
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold text-end">
                  Team
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold text-end">
                  Leader
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold text-end">
                  Activity Log
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y divide-border dark:divide-darkborder ">
                {RecentProjectsData.slice(0, 3).map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell className="whitespace-nowrap ps-0">
                      <Checkbox className="checkbox" />
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap">
                      <div className="flex gap-5 items-center">
                        <span
                          className={`w-14 h-10 rounded-full flex items-center justify-center  bg-light${item.logotextcolor} dark:bg-dark${item.logotextcolor} text-${item.logotextcolor}`}
                        >
                          {item.logoimg ? (
                            <Image src={item.logoimg} alt="logo" />
                          ) : (
                            <p
                              className={`text-sm font-semibold text-${item.logotextcolor}`}
                            >
                              {item.logotext}
                            </p>
                          )}
                        </span>
                        <h6 className="text-base">{item.name}</h6>
                      </div>
                    </Table.Cell>
                    <Table.Cell className="text-end">
                      <h5 className="text-sm">{item.budgets}</h5>
                    </Table.Cell>
                    <Table.Cell
                      className="
                    text-end"
                    >
                      <div className="flex justify-end">
                        {item.teams.map((team, index) => (
                          <div className="-ms-2" key={index}>
                            {team.user ? (
                              <Image
                                src={team.user}
                                className="border-2 border-white dark:border-darkborder rounded-full"
                                alt="icon"
                                height={30}
                                width={30}
                              />
                            ) : (
                              <div className="bg-lightprimary border-2 border-white dark:border-darkborder  h-[30px] w-[30px] flex justify-center items-center text-sm font-semibold text-dark dark:text-white rounded-full dark:bg-darkprimary">
                                {team.count}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </Table.Cell>
                    <Table.Cell className="text-end">
                      <p className="text-darklink text-sm font-semibold">
                        {item.leader}
                      </p>
                    </Table.Cell>
                    <Table.Cell className="text-end">
                      <div className="flex justify-end">
                        {item.chart == "success" ? (
                          <Chart
                            options={AreaChartData1}
                            series={AreaChartData1.series}
                            type="area"
                            height='14px'
                            width='143px'
                          />
                        ) : item.chart == "error" ? (
                          <Chart
                            options={AreaChartData2}
                            series={AreaChartData2.series}
                            type="area"
                            height='14px'
                            width='143px'
                          />
                        ) : item.chart == "warning" ? (
                          <Chart
                            options={AreaChartData3}
                            series={AreaChartData3.series}
                            type="area"
                            height='14px'
                            width='143px'
                          />
                        ) : (
                          <Chart
                            options={AreaChartData4}
                            series={AreaChartData4.series}
                            type="area"
                            height='14px'
                            width='143px'
                          />
                        )}
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
          <div
            className="hidden"
            id="styled-other"
            role="tabpanel"
            aria-labelledby="other-tab"
          >
            <Table className="mt-2">
              <Table.Head>
                <Table.HeadCell className="ps-0 text-base font-semibold pb-4">
                  #
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold">
                  Name
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold text-end">
                  Budget
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold text-end">
                  Team
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold text-end">
                  Leader
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold text-end">
                  Activity Log
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y divide-border dark:divide-darkborder ">
                {RecentProjectsData.slice(3, 5).map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell className="whitespace-nowrap ps-0">
                      <Checkbox className="checkbox" />
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap">
                      <div className="flex gap-5 items-center">
                        <span
                          className={`w-14 h-10 rounded-full flex items-center justify-center  bg-light${item.logotextcolor} dark:bg-dark${item.logotextcolor} text-${item.logotextcolor}`}
                        >
                          {item.logoimg ? (
                            <Image src={item.logoimg} alt="logo" />
                          ) : (
                            <p
                              className={`text-sm font-semibold text-${item.logotextcolor}`}
                            >
                              {item.logotext}
                            </p>
                          )}
                        </span>
                        <h6 className="text-base">{item.name}</h6>
                      </div>
                    </Table.Cell>
                    <Table.Cell className="text-end">
                      <h5 className="text-sm">{item.budgets}</h5>
                    </Table.Cell>
                    <Table.Cell
                      className="
                    text-end"
                    >
                      <div className="flex justify-end">
                        {item.teams.map((team, index) => (
                          <div className="-ms-2" key={index}>
                            {team.user ? (
                              <Image
                                src={team.user}
                                className="border-2 border-white dark:border-darkborder rounded-full"
                                alt="icon"
                                height={30}
                                width={30}
                              />
                            ) : (
                              <div className="bg-lightprimary border-2 border-white dark:border-darkborder  h-[30px] w-[30px] flex justify-center items-center text-sm font-semibold text-dark dark:text-white rounded-full dark:bg-darkprimary">
                                {team.count}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </Table.Cell>
                    <Table.Cell className="text-end">
                      <p className="text-darklink text-sm font-semibold">
                        {item.leader}
                      </p>
                    </Table.Cell>
                    <Table.Cell className="text-end">
                      <div className="flex justify-end">
                        {item.chart == "success" ? (
                          <Chart
                            options={AreaChartData1}
                            series={AreaChartData1.series}
                            type="area"
                            height='14px'
                            width='143px'
                          />
                        ) : item.chart == "error" ? (
                          <Chart
                            options={AreaChartData2}
                            series={AreaChartData2.series}
                            type="area"
                            height='14px'
                            width='143px'
                          />
                        ) : item.chart == "warning" ? (
                          <Chart
                            options={AreaChartData3}
                            series={AreaChartData3.series}
                            type="area"
                            height='14px'
                            width='143px'
                          />
                        ) : (
                          <Chart
                            options={AreaChartData4}
                            series={AreaChartData4.series}
                            type="area"
                            height='14px'
                            width='143px'
                          />
                        )}
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </CardBox>
    </>
  );
};

export default RecentProjects;
