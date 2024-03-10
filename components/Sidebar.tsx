import logo from "@/public/logo.png";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Moon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import avatar from "@/public/avatar.png";

type Props = {};
const Sidebar = (props: Props) => {
  return (
    <aside className="h-[72px] sm:h-screen flex sm:flex-col justify-between bg-bg-sidebar w-full sm:w-[72px] pr-4 z-50 relative">
      <Image src={logo} alt="logo" />

      <div className="flex gap-4 items-center">
        <Moon className="text-07" />

        <Separator orientation="vertical" className="bg-[#494E6E]" />
        <Avatar>
          <AvatarImage src="@/public/avatar.png" />
          <AvatarFallback className="bg-10 text-white">LJ</AvatarFallback>
        </Avatar>
      </div>
    </aside>
  );
};
export default Sidebar;
