"use client";
import React from "react";
import dynamic from "next/dynamic";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import TitleCard from "@/app/components/shared/TitleBorderCard";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Chart Apex Area",
  },
];
const AreaChart = () => {
  const ChartData: any = {
    series: [
      {
        name: "Sales Summery 1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Sales Summery 2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
        id: 'area-chart',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        foreColor: '#adb0bb',
        zoom: {
          enabled: true,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0,
          inverseColors: false,
          opacityFrom: 0.2,
          opacity: 0.1,
          stops: [100]
        },
      },
      stroke: {
        width: '3',
        curve: 'smooth',
      },
      colors: ["var(--color-primary)", "var(--color-secondary)"],
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00',
          '2018-09-19T01:30:00',
          '2018-09-19T02:30:00',
          '2018-09-19T03:30:00',
          '2018-09-19T04:30:00',
          '2018-09-19T05:30:00',
          '2018-09-19T06:30:00',
        ],
         axisBorder: {
            color: "rgba(173,181,189,0.3)",
        },
      },
      yaxis: {
        opposite: false,
        labels: {
          show: true,
        },
       
      },
      legend: {
        show: true,
        position: 'bottom',
        width: '50px',
      },
      grid: {
        show: false,
      },
      tooltip: {
        theme: 'dark',
        fillSeriesColor: false,
      },
  };
  return (
    <>
      <BreadcrumbComp title="Chart Apex Area" items={BCrumb} />
      <TitleCard title="Area Chart">
        <Chart
          options={ChartData}
          series={ChartData.series}
          type="area"
          height="300px"
          width="100%"
        />
      </TitleCard>
    </>
  );
};

export default AreaChart;
