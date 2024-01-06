import CoinsStacked from "../assets/icons/coins-stacked-icon.svg?react";
import CoinsSingleStacked from "../assets/icons/coins-single-stacked-icon.svg?react";

function Declaration() {
  return (
    <div className="ml-10">
      <h2 className="mt-5 mb-2 text-2xl font-bold">Declaration</h2>
      <p className="mb-2 text-[#667085]">
        Upload proof for the declarations that you have done for the
        <span className="text-black">&nbsp;FY 2022-23</span>
      </p>
      <div className="flex items-center my-10 gap-12">
        <div className="flex items-center">
          <div className="w-14 h-14 bg-[#F2FFD6] rounded-full flex items-center justify-center">
            <CoinsStacked />
          </div>
          <div className="flex flex-col gap-2 ml-4">
            <p className="text-[#667085] text-base">Declared Amount</p>
            <span className="font-bold text-xl">67,987 INR</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-14 h-14 bg-[#D6EEFF] rounded-full flex items-center justify-center">
            <CoinsSingleStacked />
          </div>
          <div className="flex flex-col gap-2 ml-4">
            <p className="text-[#667085] text-base">Remaining to Declare</p>
            <span className="font-bold text-xl">67,987 INR</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Declaration;
