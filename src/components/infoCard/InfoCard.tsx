type Props = {
  text: string;
  icon: any;
  update: string;
  status: any;
  value: string;
  color?: string;
};

const InfoCard = ({ color, icon, status, text, value, update }: Props) => {
  return (
    <div className="w-full shadow  shadow-zinc-400 bg-white h-[8rem] rounded-xl p-4">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div>{text}</div>
            <div className="text-4xl font-bold">${value}K</div>
          </div>
          <div>
            <div
              className={`p-4 ${
                color ? color : "bg-red-600"
              } rounded-full text-white`}
            >
              {icon}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {status}

          <div className="text-stone-500 text-sm">{update}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
