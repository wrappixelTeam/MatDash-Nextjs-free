"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Select } from "flowbite-react";
import { ApexOptions } from "apexcharts";

// Dynamically import the Chart component
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RevenueForecast = () => {
  // State for selected period
  const [selectedPeriod, setSelectedPeriod] = useState<string>("This Week");

  // Chart configuration
  const optionsBarChart: ApexOptions = {
    chart: {
      offsetX: 0,
      offsetY: 10,
      animations: {
        speed: 500,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["var(--color-primary)", "var(--color-error)"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: "#90A4AE50",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '30%',
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: -4,
      max: 4,
      tickAmount: 4,
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: "dark",
    },
  };

  const barChartData = {
    series: [
      {
        name: "This Year",
        data: [1.2, 2.7, 1.0, 3.6, 2.1, 2.7, 2.2, 1.3, 2.5],
      },
      {
        name: "Last Year",
        data: [-2.8, -1.1, -2.5, -1.5, -2.3, -1.9, -1.0, -2.1, -1.3],
      },
    ],
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPeriod(event.target.value);
  };

  return (
    <div className="rounded-lg dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
      <div className="flex justify-between items-center">
        <h5 className="card-title">Revenue Forecast</h5>
        <Select
          id="periods"
          className="select-md"
          value={selectedPeriod}
          onChange={handleSelectChange}
          required
        >
          <option value="This Week">This Week</option>
          <option value="April 2024">April 2024</option>
          <option value="May 2024">May 2024</option>
          <option value="June 2024">June 2024</option>
        </Select>
      </div>

      <div className="-ms-4 -me-3 mt-2">
        <Chart
          options={optionsBarChart}
          series={barChartData.series}
          type="bar"
          height="315px"
          width="100%"
        />
      </div>
    </div>
  );
};

export default RevenueForecast;
