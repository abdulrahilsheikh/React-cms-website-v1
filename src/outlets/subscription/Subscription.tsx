import { useState } from "react";
import * as Subscription from "../../../public/subscription.json";
import Modal from "../../components/modal/Modal";
type Props = {};

const Notifications = ({}: Props) => {
  const [isOpen, setIsopen] = useState(false);
  const tabs = ["Monthly", "Annual"];
  const [activeTab, setactiveTab] = useState<any>("Monthly");
  const list: any = Subscription;
  return (
    <div>
      <div className="flex min-h-screen pt-[30px] px-[40px]">
        <div className="min-w-full">
          <p className="text-[#00153B] text-[20px] leading-[40px] font-semibold">
            Your Subscription
          </p>

          <div>
            <p className="text-[#717F87] text-[15px] leading-[27px] font-medium">
              This page will show your current dashify subscription.
            </p>
          </div>

          <div className="mt-[30px] inline-flex border border-[#E1E3E5] shadow-[0px 1px 2px #E1E3E5] divide-[#E1E3E5] divide-x rounded-[5px] overflow-hidden">
            {tabs.map((tabName) => (
              <button
                onClick={() => setactiveTab(tabName)}
                className={` hover:bg-[#F6F6F7] hover:text-[#717F87]  leading-[16px] text-[13px]  font-bold py-[15px] px-[25px] ${
                  tabName == activeTab
                    ? "bg-blue-600 text-[#fff]"
                    : "text-[#0E1823] bg-white"
                }`}
              >
                {tabName}
              </button>
            ))}
          </div>

          <div className="mt-[20px] flex  w-full gap-8 items-stretch">
            {list[activeTab].map((item: any) => {
              return (
                <div className="bg-[#FFFBEC] rounded-xl flex-1 min-h-full">
                  <div className="flex flex-col  rounded-xl bg-white shadow-xl translate-x-4 translate-y-4  min-h-full">
                    <div className="w-full bg-[#fff] rounded-[10px] divide-y flex flex-col min-h-full flex-1">
                      <div className="pt-[15px] px-[25px] pb-[25px]">
                        <div className="flex justify-end">
                          <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                            <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                              {item.type}
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="text-[#00153B] text-[19px] leading-[24px] font-bold">
                            {item.name}
                          </p>
                          <p className="text-[#00153B] text-[50px] leading-[63px] font-bold">
                            {item.price}
                          </p>
                        </div>

                        <div>
                          {item.benefits.map((benefit: any) => (
                            <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                              {benefit}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="pt-[25px] px-[25px] pb-[35px] flex-1 flex flex-col">
                        <div className="flex-1">
                          {item.features.map((feat: any) => (
                            <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                              {feat}
                            </p>
                          ))}
                        </div>

                        <div className="mt-[25px] mb-0">
                          <button
                            className={` rounded-[5px] py-[15px] px-[25px]  text-[14px] leading-[17px] font-semibold ${
                              item.selected
                                ? "bg-gray-200 text-gray-600"
                                : "bg-[#006EF5] text-[#fff]"
                            }`}
                            onClick={() => {
                              if (!item.selected) {
                                setIsopen(true);
                              }
                            }}
                          >
                            {item.selected ? "Selected" : " Upgrade +"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {
        <Modal
          isOpen={isOpen}
          element={
            <div className="rounded-lg bg-white p-8 shadow-2xl z-40 overflow-hidden">
              <h2 className="text-lg font-bold">
                Are you sure you want to upgrade?
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Please read the terms and conditions before continuing.
              </p>

              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600 hover:bg-green-100"
                >
                  Yes, I'm sure
                </button>

                <button
                  type="button"
                  className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-red-100"
                >
                  No, go back
                </button>
              </div>
            </div>
          }
          onClose={() => setIsopen(false)}
        />
      }
    </div>
  );
};

export default Notifications;
