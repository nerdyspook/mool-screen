/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import EditIcon from "../assets/icons/edit-icon.svg?react";

// eslint-disable-next-line react/prop-types
function EachDeduction({
  deductionKey,
  deductionLimit,
  label,
  register,
  setFocus,
  errors,
}) {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!isDisabled) setFocus(deductionKey);
  }, [isDisabled, deductionKey, setFocus]);

  return (
    <div className="py-2 my-2 rounded flex items-center justify-between">
      <label htmlFor={deductionKey} className="ml-6">
        {label}
      </label>
      <div>
        <div className="flex items-center mr-16 ">
          <input
            {...register(deductionKey, {
              disabled: isDisabled,
              min: 0,
              max: deductionLimit > 0 ? deductionLimit : null,
            })}
            type="number"
            name={deductionKey}
            id={deductionKey}
            className="text-end disabled:bg-white"
          />
          <EditIcon
            className={`cursor-pointer w-5 h-5 ml-1 ${
              isDisabled ? "" : "p-1 bg-slate-400 rounded"
            }`}
            onClick={() => setIsDisabled((prev) => !prev)}
          />
        </div>
        {errors[deductionKey]?.type === "max" ? (
          <p className="text-xs text-red-600 mt-2">
            Deduction max limit is : {deductionLimit} INR
          </p>
        ) : (
          ""
        )}
        {errors[deductionKey]?.type === "min" ? (
          <p className="text-xs text-red-600 mt-2">
            Minimum Deduction cannot be less than 0
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default EachDeduction;
