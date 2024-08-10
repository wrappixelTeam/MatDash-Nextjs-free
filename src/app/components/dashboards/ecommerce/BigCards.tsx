import { Icon } from "@iconify/react";
import { Progress } from "flowbite-react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BigCards = () => {
    const ChartData: ApexOptions = {
        series: [
            {
                name: "monthly earnings",
                color: "var(--color-secondary)",
                data: [25, 66, 20, 40, 12, 58, 20],
            },
        ],
        chart: {
            id: "total-income",
            type: "area",
            height: 70,
            sparkline: {
                enabled: true,
            },
            group: "sparklines",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 0,
                inverseColors: false,
                opacityFrom: 0,
                opacityTo: 0,
                stops: [20, 180],
            },
        },
        markers: {
            size: 0,
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: true,
                position: "right",
            },
            x: {
                show: false,
            },
        },
    };

    return (
        <div className="">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-lightsecondary text-secondary p-3 rounded-md">
                        <Icon icon="solar:football-outline" height={24} />
                    </div>
                    <p className="text-base text-dark">New Customers</p>
                </div>
                <div className="flex items-center justify-between mb-3">
                    <p className="text-sm text-dark">New goals</p>
                    <p className="text-sm text-dark">83%</p>
                </div>
                <Progress progress={83} color="secondary" />
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-lighterror text-error p-3 rounded-md">
                        <Icon icon="solar:box-linear" height={24} />
                    </div>
                    <p className="text-base text-dark">Total Income</p>
                </div>
                <div className="flex">
                    <div className="">
                        <p className="text-xl text-dark mb-2">$680</p>
                        <p className="text-success text-xs">+18%</p>
                    </div>
                    <div className="rounded-bars md:ps-7">
                        <Chart
                            options={ChartData}
                            series={ChartData.series}
                            type="area"
                            height="70px"
                            width="100%"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigCards;
