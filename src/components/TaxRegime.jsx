import SwitchHorizontal from "../assets/icons/switch-horizontal-icon.svg?react";
import InfoIcon from "../assets/icons/info-icon.svg?react";

function TaxRegime() {
  return (
    <div className="bg-[url('./assets/images/banner.png')] bg-[#F4F6FA] w-full bg-cover pl-10 py-3">
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
          Considering your salary structure we feel that Old Regime suits you
          the best. Although you can move to other tax regime if you want
        </p>
      </div>
    </div>
  );
}

export default TaxRegime;
