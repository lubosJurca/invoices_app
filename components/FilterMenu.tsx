"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDown } from "lucide-react";

function FilterMenu() {
  const [position, setPosition] = React.useState("");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="font-bold text-base">
          Filter <ArrowDown className="text-01 h-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 h-32">
        <DropdownMenuRadioGroup
          className="h-full flex flex-col justify-evenly"
          value={position}
          onValueChange={setPosition}
        >
          <DropdownMenuCheckboxItem />
          <DropdownMenuRadioItem className="cursor-pointer" value="draft">
            Draft
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="cursor-pointer" value="pending">
            Pending
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="cursor-pointer" value="paid">
            Paid
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default FilterMenu;
