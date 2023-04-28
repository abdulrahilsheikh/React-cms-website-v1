import { useState } from "react";
import Chart from "react-apexcharts";
import { UnderScore } from "../underScore/UnderScore";
type Props = {};
const TimeFrameList = ["Daily", "Weekly", "Monthly", "Yearly"];
const UnderLine = () => (
  <UnderScore
    className="absolute bottom-0 w-full h-0.5"
    style={{ backgroundColor: "black", borderRadius: "5px" }}
    layoutId="timeframe-id"
  />
);

const chartData: any = {
  Monthly: {
    xaxis: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
    ],
    yaxis: [30, 40, 45, 50, 49, 60, 70, 91, 80, 55],
  },
  Weekly: {
    xaxis: [
      "1st",
      "2nd",
      "3rd",
      "4th",
      "5th",
      "6th",
      "7th",
      "8th",
      "9th",
      "10th",
    ],
    yaxis: [30, 70, 91, 80, 55, 40, 45, 50, 49, 60],
  },
  Yearly: {
    xaxis: [
      "2000",
      "2002",
      "2004",
      "2006",
      "2008",
      "2010",
      "2012",
      "2014",
      "2016",
      "2018",
    ],
    yaxis: [30, 55, 40, 45, 70, 91, 80, 50, 49, 60],
  },
  Daily: {
    xaxis: [
      "1st",
      "2nd",
      "3rd",
      "4th",
      "5th",
      "6th",
      "7th",
      "8th",
      "9th",
      "10th",
    ],
    yaxis: [30, 55, 40, 45, 70, 91, 80, 50, 49, 60],
  },
};

const StepLineChart = ({}: Props) => {
  const [chartTimeFrame, setChartTimeFrame] = useState<any>("Weekly");

  const series = [
    {
      name: "series-1",
      type: "area",
      data: chartData[chartTimeFrame].yaxis,
      color: "#00D8FF",
    },
  ];
  const options = {
    chart: {
      id: "basic-bar",
    },
    stroke: {
      curve: "stepline",
    },
    fill: {
      type: "solid",
      opacity: [0.35, 1],
      color: ["#cccc"],
    },

    xaxis: {
      categories: chartData[chartTimeFrame].xaxis,
      title: {
        text: chartTimeFrame,
      },
    },
    yaxis: {
      title: {
        text: "Invested",
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <div className="p-2 shadow rounded-xl shadow-zinc-400">
      <div className="px-4 flex justify-between mb-4 mt-2">
        <div className="text-xl font-bold">Balance Overview</div>
        <div>
          last updated <span className="text-gray-600">Today</span>
        </div>
      </div>
      <div className="flex px-4 gap-6 font-semibold ">
        {TimeFrameList.map((a) => (
          <div
            className={`relative pb-2 w-12 flex justify-center ${
              a == chartTimeFrame ? "text-black" : "text-gray-600"
            }`}
            onClick={() => setChartTimeFrame(a)}
          >
            {a} {a == chartTimeFrame && <UnderLine />}
          </div>
        ))}
      </div>

      {
        ///@ts-ignore
        <Chart
          key={chartTimeFrame}
          options={options}
          series={series}
          type="area"
          height={350}
        />
      }
    </div>
  );
};

export default StepLineChart;
