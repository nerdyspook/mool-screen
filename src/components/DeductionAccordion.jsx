/* eslint-disable react/prop-types */
import EachDeduction from "./EachDeduction";
import ChevronDownIcon from "../assets/icons/chevron-down-icon.svg?react";
import { useState } from "react";

function DeductionAccordion({
  deductionIcons,
  index,
  section,
  data,
  register,
  setFocus,
  errors,
}) {
  const [showData, setShowData] = useState(false);
  const Icon = deductionIcons[index !== -1 ? index : 0];
  const { modifiedData } = data;

  return (
    <div className="border border-[#E6E9EE] rounded-md mb-4">
      <div
        className="flex items-center justify-between p-5 bg-[#F4F6FA] rounded-md"
        onClick={() => setShowData((prev) => !prev)}
      >
        <div className="flex items-center">
          <Icon />
          <p>Section {section}</p>
        </div>
        <ChevronDownIcon
          className={`duration-500 ${showData ? "-rotate-90" : ""}`}
        />
      </div>

      <div className={`overflow-hidden ${showData ? "" : "max-h-0"}`}>
        <div className="border-[#E6E9EE] border-b flex items-center justify-between pt-4 pb-2">
          <p className="text-[#667085] ml-6">Item</p>
          <p className="text-[#667085] mr-16">Amount ( in INR)</p>
        </div>
        {modifiedData[section].map((deduction) => {
          return (
            <EachDeduction
              key={deduction.key}
              register={register}
              setFocus={setFocus}
              errors={errors}
              deductionKey={deduction.key}
              deductionLimit={deduction.limit}
              label={deduction.label}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DeductionAccordion;
