import { ArrowUpIcon, DollarSignIcon } from "lucide-react";
type Props = {};

const InfoCard = ({}: Props) => {
  return (
    <div className="w-full shadow  shadow-zinc-400 bg-white h-[8rem] rounded-xl p-4">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div>Budget</div>
            <div className="text-4xl font-bold">$24K</div>
          </div>
          <div>
            <div className="p-4 bg-red-600 rounded-full text-white">
              <DollarSignIcon />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[yellowgreen] flex">
            <ArrowUpIcon />
            12%
          </div>
          <div className="text-stone-500 text-sm">Since last month</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
