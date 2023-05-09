import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { UnderLine } from "../steplineChart/steplineChart";

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
  },
};
const TimeFrameList = ["Daily", "Weekly", "Monthly", "Yearly"];

function getRandomColor(colors: string[]) {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
const Sales = ({ activeSeller }: any) => {
  const [series, setSeries] = useState<any[]>([]);
  const [chartTimeFrame, setChartTimeFrame] = useState<any>("Weekly");
  function generateSalesData(
    numOfBars: number,
    minSales: number,
    maxSales: number
  ) {
    const list: any = [];
    const temp = () => {
      let data = [];
      for (let i = 0; i < numOfBars; i++) {
        let sales = Math.floor(
          Math.random() * (maxSales - minSales + 1) + minSales
        );
        data.push(sales);
      }
      return data;
    };
    for (let i = 0; i < 5; i++) {
      list.push(temp());
    }
    setSeries(list);
  }

  const seriesObject = [
    {
      name: "series-1",
      type: "area",
      data: series[TimeFrameList.findIndex((a) => a == chartTimeFrame)],
      color: getRandomColor([
        "#f56565",
        "#48bb78",
        "#4299e1",
        "#9f7aea",
        "#f6e05e",
      ]),
    },
  ];
  const options: any = {
    chart: {
      id: "basic-bar",
    },
    stroke: {
      curve: "smooth",
      colors: ["#000000"],
    },
    fill: {
      type: "solid",
      opacity: [0.35, 1],
      colors: [
        "#DDEF7Bff",
        "#a1a1aa",
        "#f56565",
        "#48bb78",
        "#4299e1",
        "#9f7aea",
        "#f6e05e",
      ],
    },
    xaxis: {
      categories: chartData[chartTimeFrame].xaxis,
      title: {
        text: chartTimeFrame,
      },
    },
    yaxis: {
      title: {
        text: "Sales",
      },
    },
    dataLabels: {
      enabled: false,
    },
  };
  useEffect(() => {
    generateSalesData(10, 100, 250);
  }, [activeSeller]);
  return (
    <div className="p-4 flex flex-col gap-4">
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
      <div className="shadow-lg rounded">
        {
          ///@ts-ignore
          <Chart
            key={chartTimeFrame}
            options={options}
            series={seriesObject}
            type="line"
            height={350}
          />
        }
      </div>
    </div>
  );
};

export default Sales;
