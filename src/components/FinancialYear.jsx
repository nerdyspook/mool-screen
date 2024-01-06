import Calendar from "../assets/icons/calendar-icon.svg?react";

function FinancialYear() {
  return (
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
  );
}

export default FinancialYear;
