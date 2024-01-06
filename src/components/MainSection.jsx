import Banner from "./Banner";
import FinancialYear from "./FinancialYear";
import Declaration from "./Declaration";
import TaxRegime from "./TaxRegime";
import Deductions from "./Deductions";

function MainSection() {
  return (
    <main className="w-5/6 mx-auto pt-20 h-screen">
      <FinancialYear />
      <Banner />
      <Declaration />
      <TaxRegime />
      <Deductions />
    </main>
  );
}

export default MainSection;
