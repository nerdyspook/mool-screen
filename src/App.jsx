import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <MainSection />
    </>
  );
}

export default App;
