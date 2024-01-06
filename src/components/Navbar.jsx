import Dropdown from "../assets/icons/chevron-down-icon.svg?react";
import Profile from "../assets/icons/profile-icon.svg?react";
import Alert from "../assets/icons/alert-icon.svg?react";
import Help from "../assets/icons/help-icon.svg?react";

function Navbar() {
  return (
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
  );
}

export default Navbar;
