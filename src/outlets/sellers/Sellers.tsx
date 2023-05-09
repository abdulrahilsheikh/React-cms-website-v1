import { useState } from "react";
import Sales from "../../components/sales/Sales";
import SellersList from "../../components/sellerslist/SellersList";

type Props = {};

const Sellers = ({}: Props) => {
  const [activeSeller, setActiveSeller] = useState<number>(-1);
  return (
    <div className="flex w-full max-h-full">
      <div className=" w-[20rem] flex flex-col">
        <div className="overflow-auto ">
          <SellersList setActive={setActiveSeller} />
        </div>
      </div>
      <div className="h-full flex-1">
        {activeSeller >= 0 ? (
          <Sales activeSeller={activeSeller} />
        ) : (
          <div className="w-full flex items-center justify-center p-10 h-10 font-bold text-2xl">
            Select a seller
          </div>
        )}
      </div>
    </div>
  );
};

export default Sellers;
