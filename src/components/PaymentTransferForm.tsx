"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { BENEFICIARIES } from "@/constants";
import AmountInput from "./amount-input";
import useModalStore from "@/hooks/use-modal-store";
import { PreviewModal } from "./preview-modal";
import { formatAmount } from "@/lib/utils";

const formSchema = z.object({
  beneficiary: z.string().min(1, "Beneficiary required"),
  name: z.string().optional(),
  amount: z.string().min(4, "Amount is too short"),
  senderBank: z.string().min(4, "Please select a valid bank account"),
});

const PaymentTransferForm = ({ accounts }: PaymentTransferFormProps) => {
  // const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { openModal } = useModalStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      beneficiary: "",
      amount: "",
      senderBank: "",
      // sharableId: "",
    },
  });

  const submit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    console.log({ ...data })

    openModal({ ...data });

    setIsLoading(false);
  };

  return (
    <>
      <PreviewModal />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)} className="flex flex-col">
          <FormField
            control={form.control}
            name="senderBank"
            render={({ field }) => (
              <FormItem className="border-t border-gray-200">
                <div className="payment-transfer_form-item pb-6 pt-5">
                  <div className="payment-transfer_form-content">
                    <FormLabel className=" text-lg font-bold text-gray-700">
                      From
                    </FormLabel>
                    <FormDescription className="text-12 font-normal text-gray-600">
                      Select source account
                    </FormDescription>
                  </div>
                  <div className="flex w-full flex-col">
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a bank account" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {
                          accounts.map((account) => (
                            <SelectItem key={account.id} value={`${account.accountName}-${formatAmount(account.availableBalance)}`}>
                              {`${account.accountName}-${formatAmount(account.availableBalance)}`}


                            </SelectItem>
                          ))
                        }

                      </SelectContent>
                    </Select>
                    <FormMessage className="text-12 text-red-500" />
                  </div>
                </div>
              </FormItem>
            )}
          />



          <div className="payment-transfer_form-details">
            <h2 className="text-18 font-semibold text-gray-900">
              To
            </h2>
            <p className="text-16 font-normal text-gray-600">
              Enter recipient details
            </p>
          </div>

          <FormField
            control={form.control}
            name="beneficiary"
            render={({ field }) => (
              <FormItem className="border-t border-gray-200">
                <div className="payment-transfer_form-item py-5">
                  <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                    Recipient&apos;s(Beneficiary)
                  </FormLabel>
                  <div className="flex w-full flex-col">
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select from beneficiary" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {
                          BENEFICIARIES.map((beneficiary) => (
                            <SelectItem key={beneficiary.id} value={beneficiary.id}>{`${beneficiary.name}-${beneficiary.accountNumber}-${beneficiary.bank}`}</SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-12 text-red-500" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          {/* <FormField
          control={form.control}
          name="sharableId"
          render={({ field }) => (
            <FormItem className="border-t border-gray-200">
              <div className="payment-transfer_form-item pb-5 pt-6">
                <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                  Receiver&apos;s Plaid Sharable Id
                </FormLabel>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <Input
                      placeholder="Enter the public account number"
                      className="input-class"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        /> */}

          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="border-y border-gray-200">
                <div className="payment-transfer_form-item py-5">
                  <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                    Amount
                  </FormLabel>
                  <div className="flex w-full flex-col">
                    <FormControl>
                      <AmountInput
                        {...field}
                        disabled={false}
                        placeholder="0.00"

                      />
                    </FormControl>
                    <FormMessage className="text-12 text-red-500" />
                  </div>
                </div>
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="border-t border-gray-200">
                <div className="payment-transfer_form-item pb-6 pt-5">
                  <div className="payment-transfer_form-content">
                    <FormLabel className="text-14 font-medium text-gray-700">
                      Transfer Note (Optional)
                    </FormLabel>
                    <FormDescription className="text-12 font-normal text-gray-600">
                      Please provide any additional information or instructions
                      related to the transfer
                    </FormDescription>
                  </div>
                  <div className="flex w-full flex-col">
                    <FormControl>
                      <Textarea
                        placeholder="Write a short note here"
                        className="input-class"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-12 text-red-500" />
                  </div>
                </div>
              </FormItem>
            )}
          />

          <div className="payment-transfer_btn-box">
            <Button type="submit" className="payment-transfer_btn">
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> &nbsp; Sending...
                </>
              ) : (
                "Transfer Funds"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </>

  );
};

export default PaymentTransferForm;
