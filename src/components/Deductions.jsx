import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

import WalletIcon from "../assets/icons/wallet-icon.svg?react";
import ShieldPlusIcon from "../assets/icons/shield-plus-icon.svg?react";
import FileIcon from "../assets/icons/file-icon.svg?react";

import DeductionAccordion from "./DeductionAccordion";
import toast from "react-hot-toast";

const deductionIcons = [WalletIcon, ShieldPlusIcon, FileIcon];

function Deductions() {
  const [data, setData] = useState({ modifiedData: {}, originalData: {} });

  async function getData() {
    const response = await axios
      .get(import.meta.env.VITE_API_URL)
      .catch((err) => {
        toast.error(err.message);
        toast.error(err?.response?.data?.message ?? "Something went wrong !");
      });

    if (!response) return;

    const sections = {};
    const defaultData = {};
    const deductions = Object.values(response.data?.record);

    deductions?.map((deduction) => {
      const section = deduction.section;
      sections[section] = [...(sections[section] || []), deduction];

      if (!Object.keys(defaultData).includes(deduction.key)) {
        defaultData[deduction.key] = deduction.amount;
      }
    });

    setData({ modifiedData: sections, originalData: response.data });

    return defaultData;
  }

  const {
    setFocus,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: getData,
  });

  function onSubmit(updatedData) {
    const payload = JSON.parse(JSON.stringify(data.originalData));
    Object.entries(updatedData).forEach(([key, amountToUpdate]) => {
      const recordKey = Object.keys(payload.record).find(
        (recordKey) => payload.record[recordKey].key === key
      );
      if (recordKey !== undefined && amountToUpdate) {
        payload.record[recordKey].amount = Number(amountToUpdate);
      }
    });

    console.log(payload);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-14">
      {Object.keys(data.modifiedData).map((section, index) => (
        <DeductionAccordion
          key={section}
          register={register}
          setFocus={setFocus}
          errors={errors}
          deductionIcons={deductionIcons}
          index={index}
          section={section}
          data={data}
        />
      ))}

      {Object.keys(data.modifiedData).length > 0 ? (
        <button
          type="submit"
          className="my-[70px] py-2.5 px-4 rounded bg-[#405CD2] text-white"
        >
          Save
        </button>
      ) : (
        ""
      )}
    </form>
  );
}

export default Deductions;
