"use client"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { CHARGES } from "@/constants";
import { useAppStore } from "@/constants/store";
import { formatAmount } from "@/lib/utils";
import { CheckCircle2, Send, Share2Icon } from "lucide-react";
import { useSearchParams } from "next/navigation";

const ReceiptPage = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const { transactions } = useAppStore();

    const transaction = transactions.filter((transact) => transact.id === id);

    return (
        <div className=" flex items-center justify-center mt-10">
            <Card className=" flex items-center justify-center p-2 flex-col mx-10">
                <CardHeader>
                    <CheckCircle2 className=" size-20 text-emerald-700" />
                </CardHeader>
                <CardDescription>
                    Transfer successful
                </CardDescription>
                <CardContent>
                    <div className=" text-center max-w-xl py-3">
                        <h1 className=" font-bold my-2 text-emerald-700 text-xl">{formatAmount(Number(transaction[0].amount) - CHARGES)}</h1>
                        <p className=" text-blue-600">The recipient account is expected to be credited within 5 minutes, subject to notification by the bank</p>
                    </div>

                    <div className=" flex items-center justify-center gap-x-4 mt-4">
                        <div className=" border rounded-lg flex flex-col items-center justify-center px-5 py-2 gap-y-1">
                            <Share2Icon className=" size-10 text-emerald-800" />
                            <p className=" text-blue-600 text-sm">Share Receipt</p>
                        </div>

                        <div className=" border rounded-lg flex flex-col items-center justify-center px-5 py-2 gap-y-1">
                            <Send className=" size-10 text-emerald-800" />
                            <p className=" text-blue-600 text-sm">Make Transfer</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

    );
};

export default ReceiptPage;
