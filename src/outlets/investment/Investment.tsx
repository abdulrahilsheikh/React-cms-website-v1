import { lazy, Suspense } from "react";
import InfoCard from "../../components/infoCard/InfoCard";

const StepLineChart = lazy(
  ///@ts-ignore
  () => import("../../components/steplineChart/steplineChart")
);
type Props = {};
const activityList = [
  {
    icon: <i className="fa-brands fa-windows"></i>,
    lable: "Windows",
    sublable: "WIND",
    price: "$120",
    change: "0.05%",
  },
  {
    icon: <i className="fa-brands fa-apple"></i>,
    lable: "Apple",
    sublable: "AAPL",
    price: "$130",
    change: "0.05%",
  },

  {
    icon: <i className="fa-brands fa-linkedin"></i>,
    lable: "Windows",
    sublable: "WIND",
    price: "$20",
    change: "0.05%",
  },
  {
    icon: <i className="fa-brands fa-facebook"></i>,
    lable: "Facebook",
    sublable: "META",
    price: "$60",
    change: "0.05%",
  },
  {
    icon: <i className="fa-brands fa-twitter"></i>,
    lable: "Twitter",
    sublable: "TWIT",
    price: "$100",
    change: "0.05%",
  },
  {
    icon: <i className="fa-brands fa-instagram"></i>,
    lable: "Apple",
    sublable: "AAPL",
    price: "$120",
    change: "0.05%",
  },
];

const obigationList = [
  { progress: 50, lable: "Metals", end: "End at 13 JUL 2023" },
  { progress: 70, lable: "Oil", end: "End at 15 JUL 2023" },
  { progress: 65, lable: "Gold", end: "End at 15 JUL 2023" },
  { progress: 44, lable: "Coal", end: "End at 15 JUL 2023" },
];

const CircularProgress = ({ progress }: { progress: number }) => (
  <div className="relative items-center justify-center h-fit">
    <svg className="h-fit" height={60} width={60}>
      <circle
        cx="30"
        cy="30"
        r="25"
        fill="none  "
        stroke="#ccc"
        strokeWidth="4"
      />
      <circle
        cx="30"
        cy="30"
        r="25"
        fill="none"
        stroke="black"
        strokeLinecap="round"
        strokeDasharray={6.24 * 25}
        strokeDashoffset={(6.24 * 25 * (100 - progress)) / 100}
        strokeWidth="4"
      />
    </svg>
    <div className="absolute translate-x-[-50%] translate-y-[-50%]  z-10 left-[50%] top-[50%]">
      {progress}%
    </div>
  </div>
);

const Investment = ({}: Props) => {
  return (
    <div className="flex-1 h-full  grid grid-cols-[1fr_auto]">
      <div>
        <div className="flex justify-between gap-2 px-2 py-4 ">
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
        <div className="px-2 py-4 ">
          <Suspense fallback={<div>Loading...</div>}>
            <StepLineChart />
          </Suspense>
        </div>
      </div>
      <div className="bg-slate-200 w-[20rem] h-full">
        <div className="p-4 ">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">Activity</div>
              <div className="font-bold text-sm cursor-pointer underline underline-offset-4">
                more
              </div>
            </div>
            <div className="flex flex-col">
              {activityList.map((a) => (
                <div className="flex gap-4 p-2 rounded items-center hover:bg-slate-300">
                  <div className="p-2 w-10 flex justify-center items-center h-10 rounded-full bg-white text-lg">
                    {a.icon}
                  </div>
                  <div>
                    <div className="font-bold ">{a.lable}</div>
                    <div className="text-xs font-mono">{a.sublable}</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-bold ">{a.price}</div>
                    <div className="text-xs font-mono">{a.change}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded shadow p-4 bg-white">
              <div className="flex justify-between items-center">
                <div className="font-bold text-xl">Obligation</div>
                <div className="font-bold text-sm cursor-pointer underline underline-offset-4">
                  more
                </div>
              </div>
              {obigationList.map((a) => (
                <div className="flex gap-4 p-2 rounded items-center hover:bg-slate-300">
                  <CircularProgress progress={a.progress} />
                  <div>
                    <div className="font-bold">{a.lable}</div>
                    <div className="font-mono text-xs text-gray-500">
                      {a.end}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
