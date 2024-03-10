import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import Image from "next/image";

// images
import plusBtn from "@/public/plusBtn.png";
import InvoiceForm from "./InvoiceForm";

const DrawerComponent = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="bg-01 p-1 flex rounded-full justify-start items-center gap-2 w-24 h-11 text-white font-bold">
        {" "}
        <Image src={plusBtn} alt="Plus button" />
        New
      </DrawerTrigger>
      <DrawerContent className="h-screen w-[44rem] px-4">
        <DrawerHeader>
          <DrawerTitle className="font-bold text-2xl">New Invoice</DrawerTitle>
        </DrawerHeader>
        <InvoiceForm />
        <DrawerFooter className="flex flex-row justify-end">
          {/* <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
export default DrawerComponent;
