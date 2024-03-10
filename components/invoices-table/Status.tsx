"use client";

import { Dot } from "lucide-react";

type StatusProps = {
  status: "Draft" | "Pending" | "Paid";
};

const Status = ({ status }: StatusProps) => {
  const getColor = (status: string) => {
    let color;

    switch (status.toLowerCase()) {
      case "draft":
        color = "text-bg-sidebar bg-[#979797]/10";
        break;
      case "pending":
        color = "text-[#FF8F00] bg-[#FF8F00]/10";
        break;
      case "paid":
        color = "text-[#33D69F] bg-[#33D69F]/10";
        break;
    }

    return color;
  };

  getColor(status);

  return (
    <div
      className={`flex items-center justify-center w-28 font-bold py-3 pr-4 rounded ${getColor(
        status
      )}`}
    >
      <Dot />
      <p className="text-base">{status}</p>
    </div>
  );
};
export default Status;
