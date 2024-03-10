"use client";

// next
import Link from "next/link";

// shadcn UI
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

// lucide react
import { ArrowRight } from "lucide-react";

// components
import Status from "./Status";

// typescript
type StatusType = "Paid" | "Pending" | "Draft";

type EXAMPLE_TYPES = {
  id: string;
  date: string;
  money: number;
  name: string;
  status: StatusType;
};

const InvoicesTable = () => {
  const EXAMPLE: EXAMPLE_TYPES[] = [
    {
      id: "INV001",
      date: "Due 19 Aug 2021",
      money: 250,
      name: "Anthony Martial",
      status: "Pending",
    },
    {
      id: "INV001",
      date: "Due 19 Aug 2021",
      money: 50,
      name: "Anthony Martial",
      status: "Draft",
    },
    {
      id: "INV001",
      date: "Due 19 Aug 2021",
      money: 350,
      name: "Anthony Martial",
      status: "Paid",
    },
  ];

  return (
    <Table className="mt-16  ">
      <TableBody className="flex flex-col gap-1 ">
        {EXAMPLE.map((item, index) => (
          <TableRow
            key={index}
            className="bg-white drop-shadow-2xl flex sm:flex-row flex-col w-full items-center justify-between  "
          >
            <TableCell className="font-bold">
              <span className="text-07">#</span>
              {item.id}
            </TableCell>
            <TableCell className="text-07">{item.date}</TableCell>
            <TableCell className="text-07">{item.name}</TableCell>
            <TableCell className="font-bold">${item.money}</TableCell>
            <TableCell>
              <Status status={item.status} />
            </TableCell>
            <TableCell>
              <ArrowRight className="cursor-pointer" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default InvoicesTable;
