// next
import Image from "next/image";
import Link from "next/link";

// components
import FilterMenu from "./FilterMenu";
import DrawerComponent from "./Drawer";

const Header = () => {
  return (
    <header className="flex justify-between h-[44px] relative">
      <div>
        <h1 className="text-2xl font-bold tracking-tighter">Invoices</h1>
        <p className="text-[#888EB0] text-sm">7 invoices</p>
      </div>

      <div className="flex">
        <FilterMenu />
        <DrawerComponent />
      </div>
    </header>
  );
};
export default Header;
