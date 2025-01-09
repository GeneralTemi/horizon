"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CHARGES, formatDateToString, USER } from "@/constants";
import { useAppStore } from "@/constants/store";
import { formatAmount } from "@/lib/utils";
import { CheckCircle2, Share2Icon } from "lucide-react";
import { useSearchParams } from "next/navigation";

const ReceiptPage = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const { transactions } = useAppStore();


    const transaction = transactions.filter((transact) => transact.id === id);

    return (
        <>
            <div className=" h-20 w-full bg-blue-800 flex flex-col items-center justify-center">
                <CheckCircle2 className=" size-10 text-white" />
                <p className="text-white">Transfer Successfull</p>
            </div>
            <div className=" flex items-center justify-center mt-10 mb-5 w-full">
                <Card className=" w-full mx-10 xl:mx-72">
                    <CardHeader>
                        <CardTitle className=" text-blue-600">
                            FLC Bank
                        </CardTitle>

                        <CardDescription>
                            POBox 12345
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <p className=" flex items-center justify-end">Transfer Date: <span>{formatDateToString(transaction[0].date)}</span></p>
                        <div className=" grid grid-cols-2 mt-10 ">
                            <div className=" space-y-2">
                                <p className=" font-bold text-blue-600">From</p>
                                <p>{USER.firstName} </p>
                                <p>{transaction[0].accountName} </p>

                            </div>
                            <div className=" space-y-2">
                                <p className=" font-bold text-blue-600">To</p>
                                <p>{transaction[0].receiverName} </p>
                                <p>{transaction[0].receiverBank} </p>
                            </div>


                        </div>
                        <div className=" mt-5 flex items-center justify-center text-blue-600 font-bold mb-5">
                            <p className="  "> Amounts </p>
                        </div>

                        <div className=" grid grid-cols-2 ">
                            <div className=" space-y-2">

                                <p>Transfer Amount </p>
                                <p>Transfer Fee </p>
                                <p>Total</p>

                            </div>
                            <div className=" space-y-2">

                                <p> {formatAmount(transaction[0].amount - CHARGES)} </p>
                                <p>{formatAmount(CHARGES)} </p>
                                <p> {formatAmount(transaction[0].amount)}</p>
                            </div>


                        </div>




                        <div className=" flex items-center justify-center  mt-4">
                            <Button className=" border rounded-lg  bg-blue-800 text-white">
                                <Share2Icon className=" size-10  mr-3" />
                                <p className="  text-sm">Share Receipt</p>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>


    );
};

export default ReceiptPage;