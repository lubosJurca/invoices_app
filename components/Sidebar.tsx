import logo from "@/public/logo.png";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Moon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import avatar from "@/public/avatar.png";

type Props = {};
const Sidebar = (props: Props) => {
  return (
    <aside className="h-[72px] flex justify-between bg-bg-sidebar w-full pr-4">
      <Image src={logo} alt="logo" />

      <div className="flex gap-4 items-center">
        <Moon className="text-[#7E88C3]" />

        <Separator orientation="vertical" className="bg-[#494E6E]" />
        <Avatar className="w-">
          <AvatarImage src="@/public/avatar.png" />
          <AvatarFallback>LJ</AvatarFallback>
        </Avatar>
      </div>
    </aside>
  );
};
export default Sidebar;
