import { useEffect, useMemo, useState } from "react";
import * as NotifictionList from "../../../public/messages_list.json";
import { useGenerateRandoListFromJson } from "../../hooks/useGeneratedMockData";
type Props = {};

function getRandomColor(colors: string[]) {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
const dates = [
  "10 minutes ago",
  "1 hour ago",
  "3 hours ago",
  "Yesterday",
  "2 days ago",
  "April 12, 2023, 8:05 AM",
  "April 13, 2023, 4:32 PM",
  "April 15, 2023, 12:50 PM",
  "2 months ago",
  "3 months ago",
  "4 months ago",
  "5 months ago",
  "6 months ago",
  "7 months ago",
  "8 months ago",
  "9 months ago",
  "10 months ago",
  "11 months ago",
  "1 year ago",
  "2 year ago",
];
function Message({}: Props) {
  const [list, generateList] = useGenerateRandoListFromJson(
    NotifictionList.cardData,
    15
  );
  const [sideList, setSideList] = useState([]);
  const [activeMessage, setActiveMesaage] = useState(-1);
  const [messageList, setMessageList] = useState<any[]>([[]]);

  console.log(messageList);
  useEffect(() => {
    const masterTemp: any = [];

    for (let i = 0; i < 15; i++) {
      const temp = [];
      for (let i = 0; i < Math.random() * 20; i++) {
        const tempObj: any = generateList(NotifictionList.messageContent, temp);
        tempObj["date"] = dates[i];
        temp.push(tempObj);
      }
      masterTemp.push(temp);
    }
    setMessageList(masterTemp);
  }, []);

  useEffect(() => {
    if (messageList.length) {
      const tempList = list.map((item: any, index: number) => ({
        ...item,
        title: messageList[index][0].taskContents.title,
        date: messageList[index][0].date,
        severities: messageList[index][0].severities,
      }));
      setSideList(tempList);
    }
  }, [messageList]);
  const severityColors: any = {
    Low: "bg-green-500",
    Medium: "bg-yellow-500",
    High: "bg-orange-500",
    Critical: "bg-red-500",
  };
  const Notifications = useMemo(() => {
    return sideList.map((item: any, idx: number) => (
      <div
        className="flex max-w-md h-fit bg-white shadow-lg  rounded "
        onClick={() => setActiveMesaage(idx)}
      >
        <div
          className={`w-2 ${getRandomColor([
            "bg-blue-300",
            "bg-red-300",
            "bg-yellow-300",
            "bg-green-300",
          ])}`}
        ></div>
        <div className="flex items-center px-2 py-3">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={item.profilePic}
          />
          <div className="mx-3">
            <h2 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h2>
            <div className="flex gap-2">
              <p className="text-gray-600">{item.date} </p>
              <p className="text-gray-600 flex items-center gap-2">
                <div
                  className={`p-1.5 aspect-square rounded-full ${
                    severityColors[item.severities]
                  }`}
                ></div>
                {item.severities}
              </p>
            </div>
          </div>
        </div>
      </div>
    ));
  }, [sideList, messageList]);
  return (
    <div className="flex flex-col items-center justify-center flex-1 h-full p-10">
      <div className="w-full px-4 py-2 text-2xl">Messages</div>
      <div className="flex w-full h-full">
        <div className="flex flex-col gap-4 bg-gray-200 p-4 overflow-auto">
          {Notifications}
        </div>
        <div className="flex-1 bg-gray-100 p-4 overflow-auto flex  gap-4 flex-col-reverse">
          {activeMessage >= 0 &&
            messageList[activeMessage].reverse().map((item: any) => (
              <div className="flex items-center">
                <svg
                  className=" h-full"
                  width="9px"
                  height="16px"
                  viewBox="0 0 9 16"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  //   stroke="#002937"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Tooltips-"
                      transform="translate(-874.000000, -1029.000000)"
                      fill="#002937"
                    >
                      <g
                        id="Group-3-Copy-16"
                        transform="translate(850.000000, 975.000000)"
                      >
                        <g
                          id="Group-2"
                          transform="translate(24.000000, 0.000000)"
                        >
                          <polygon
                            id="Triangle"
                            transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                            points="4.5 57.5 12.5 66.5 -3.5 66.5"
                          ></polygon>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>

                <div className="z-20  flex-1 transition duration-150 ease-in-out  shadow-lg bg-gray-800 p-4 rounded">
                  <p className="text-sm font-bold text-gray-400 pb-1">
                    {item.date}
                  </p>
                  <p className="text-sm font-bold text-white pb-1">
                    {item.taskContents.title}
                  </p>
                  <p className="text-xs leading-4 text-white pb-3">
                    {item.taskContents.content}
                  </p>

                  <div className="flex gap-2 text-sm font-bold text-gray-400 items-center">
                    Severity :{" "}
                    <div
                      className={`p-1.5 aspect-square rounded-full ${
                        severityColors[item.severities]
                      }`}
                    ></div>
                    {item.severities}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Message;
