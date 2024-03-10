"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// shadcnUI
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DrawerClose, DrawerFooter } from "./ui/drawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

// form schema
const formSchema = z.object({
  streetAddress: z.string(),
  city: z.string(),
  postCode: z.string(),
  country: z.string(),
  clientsName: z.string(),
  clientsEmail: z.string().email(),
  clientsAddress: z.string(),
  clientsCity: z.string(),
  clientsPostCode: z.string(),
  clientsCountry: z.string(),
  description: z.string(),
  amount: z.string(),
  status: z.string(),
});

const InvoiceForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      streetAddress: "",
      city: "",
      postCode: "",
      country: "",
      clientsName: "",
      clientsEmail: "",
      clientsAddress: "",
      clientsCity: "",
      clientsPostCode: "",
      clientsCountry: "",
      description: "",
      amount: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("Submitted");

    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 px-4">
        <h5 className="text-01 font-bold -mb-4 ">Bill From</h5>
        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="input-label">Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="input-label">City</FormLabel>
                <FormControl>
                  <Input placeholder="City" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="input-label">Post Code</FormLabel>
                <FormControl>
                  <Input placeholder="Post Code" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="input-label">Country</FormLabel>
                <FormControl>
                  <Input placeholder="Country" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <h5 className="text-01 font-bold ">Bill To</h5>
        <FormField
          control={form.control}
          name="clientsName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="input-label">Clients Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="clientsEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="input-label">Clients Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="clientsAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="input-label">Clients Address</FormLabel>
              <FormControl>
                <Input placeholder="Address" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="clientsCity"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="input-label">City</FormLabel>
                <FormControl>
                  <Input placeholder="City" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="clientsPostCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="input-label">Post Code</FormLabel>
                <FormControl>
                  <Input placeholder="Post Code" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="clientsCountry"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="input-label">Country</FormLabel>
                <FormControl>
                  <Input placeholder="Country" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="input-label">Description</FormLabel>
              <FormControl>
                <Input placeholder="Description" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="input-label">Amount</FormLabel>
              <FormControl>
                <Input placeholder="Amount" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="input-label">Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Paid">Paid</SelectItem>
                  <SelectItem value="Draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <DrawerFooter className="flex flex-row justify-end">
          <DrawerClose>
            <Button
              variant="outline"
              className="rounded-full text-07 bg-[#F9FAFE] font-bold border-none px-6 py-4 "
            >
              Cancel
            </Button>
          </DrawerClose>
          <Button
            type="submit"
            className="rounded-full text-white bg-01 font-bold border-none px-6 py-4 "
          >
            Submit
          </Button>
        </DrawerFooter>
      </form>
    </Form>
  );
};
export default InvoiceForm;
