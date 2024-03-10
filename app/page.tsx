import Heading from "@/components/Heading";
import InvoicesTable from "@/components/invoices-table/InvoicesTable";

export default function Dashboard() {
  return (
    <div className="py-9 px-6  min-h-screen min-w-fit w-[80rem] flex flex-col mx-auto text-08">
      <Heading />
      <main>
        <InvoicesTable />
      </main>
    </div>
  );
}
