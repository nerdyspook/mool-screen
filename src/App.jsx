import Dropdown from "./assets/icons/chevron-down-icon.svg?react";
import Profile from "./assets/icons/profile-icon.svg?react";
import Alert from "./assets/icons/alert-icon.svg?react";
import Help from "./assets/icons/help-icon.svg?react";
import Calendar from "./assets/icons/calendar-icon.svg?react";
import Documents from "./assets/icons/documents-icon.svg?react";
import CoinsStacked from "./assets/icons/coins-stacked-icon.svg?react";
import CoinsSingleStacked from "./assets/icons/coins-single-stacked-icon.svg?react";
import SwitchHorizontal from "./assets/icons/switch-horizontal-icon.svg?react";
import InfoIcon from "./assets/icons/info-icon.svg?react";

function App() {
  return (
    <>
      {/* Navbar section */}
      <nav className="bg-white border border-gray-200 w-screen fixed">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
          <Help className="mr-2.5 cursor-pointer" />
          <Alert className="mr-2.5 cursor-pointer" />
          <div className="flex items-center justify-between gap-2 py-2 px-3 border border-slate-200 rounded-md cursor-pointer">
            <Profile />
            <p>Abhishek Mohanty</p>
            <Dropdown />
          </div>
        </div>
      </nav>

      {/* Main section */}
      <main className="w-5/6 mx-auto pt-20 h-screen">
        {/* First section */}
        <div className="flex items-center justify-between py-7">
          <p className="font-bold text-2xl ml-10">Chapter VI-A</p>
          <div className="flex items-center gap-2 mr-5">
            <p>Financial Year :</p>
            <button className="py-2.5 px-4 border border-slate-200 rounded-md cursor-pointer flex items-center gap-2">
              <Calendar />
              <p>2023-24</p>
            </button>
          </div>
        </div>

        {/* Second section */}
        <div className="py-2 bg-[#FAECEB] flex items-center">
          <Documents className="mx-6" />
          <div>
            <h2 className="text-lg text-[#96302A] font-bold">
              Amount Not Declared
            </h2>
            <p className="text-base text-[#C84038]">
              You will miss out on lot of tax benefits
            </p>
          </div>
        </div>

        {/* Third section */}
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

        {/* Fourth section */}
        <div className="bg-[url('./assets/images/banner.png')] w-full bg-cover pl-10 py-3">
          <div className="flex">
            <p>
              Tax Regime :<span className="font-semibold">Old</span>
            </p>
            <button className="flex items-center text-sm font-semibold text-[#405CD2] ml-3">
              <SwitchHorizontal className="mr-2" />
              Change
            </button>
          </div>
          <div className="flex items-center mt-3">
            <InfoIcon className="mr-3" />
            <p className="text-sm text-[#10AA64] max-w-[480px]">
              Considering your salary structure we feel that Old Regime suits
              you the best. Although you can move to other tax regime if you
              want
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
