import Documents from "../assets/icons/documents-icon.svg?react";

function Banner() {
  return (
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
  );
}

export default Banner;
