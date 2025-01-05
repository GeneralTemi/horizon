"use client"
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { cn, formatAmount } from '@/lib/utils'
import { BENEFICIARIES, CHARGES, generateRandomId, MYPIN } from '@/constants'
import { Separator } from './ui/separator'
import { Check, LoaderIcon, Wallet2Icon } from 'lucide-react'
import { Button } from './ui/button'
import VerificationInput from "react-verification-input"
import { useState } from 'react'
import { useAppStore } from '@/constants/store'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import useModalStore from '@/hooks/use-modal-store'




export const PreviewPopup = ({ amount, beneficiary, senderBank }: PreviewTransfer) => {

    const [pin, setPin] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const { accounts, transactionLimit, updateAccountBalance, addTransaction, incrementTransactionLimit } = useAppStore();
    const router = useRouter();
    const { closeModal } = useModalStore();


    const recipientDetails = BENEFICIARIES.filter((recipient) => recipient.id === beneficiary);
    const isPayable = accounts[0].availableBalance > (Number(amount) + CHARGES);

    const isDisabled = !isPayable;

    const handleComplete = (value: string) => {
        setIsPending(true);

        if (value !== MYPIN) {
            toast.error("Invalid Pin");
            setIsPending(false);
            return;
        }

        if (transactionLimit > 0) {
            toast.error("Transfer Blocked! Contact support");
            setIsPending(false);
            return;
        }

        updateAccountBalance(accounts[0].id, accounts[0].availableBalance - (Number(amount) + CHARGES));

        const randomId = generateRandomId(10);

        const newTransaction = {
            id: randomId,
            type: "debit",
            amount: Number(amount) + CHARGES,
            date: new Date(),
            receiverName: recipientDetails[0].name,
            pending: false,
            receiverBank: recipientDetails[0].bank,
            Note: "",
        };

        addTransaction(newTransaction);
        incrementTransactionLimit(1);

        // Add delay of 10 seconds (10,000 milliseconds) before navigating
        setTimeout(() => {
            closeModal();
            setPin(false);
            setIsPending(false);
            // Update state after delay
            router.push(`/receipt?id=${newTransaction.id}`); // Navigate to the receipt page
        }, 5000);
    };


    const requestPin = () => {
        if (!isPayable) return;
        setPin(true)
    }

    if (!!pin) {
        return (
            <Card className=' py-20'>
                <CardHeader className=' flex items-center justify-center'>
                    <CardTitle>
                        {
                            isPending ? ("Transaction in progress..") : (
                                "Input Transaction Pin"
                            )
                        }
                    </CardTitle>
                </CardHeader>
                <CardContent className=' flex items-center justify-center'>
                    {
                        isPending && !!pin ? (
                            <div className=' w-full h-full flex items-center justify-center'>
                                <LoaderIcon className=' animate-spin size-10' />
                            </div>
                        ) : (
                            <VerificationInput
                                onComplete={handleComplete}
                                length={4}
                                autoFocus
                                classNames={{
                                    container: cn("flex gap-x-2", isPending && "opacity-50 cursor-50 cursor-not-allowed"),
                                    character: "uppercase h-auto rounded-md border border-gray-300 flex items-center justify-center text-lg font-medium text-gray-500",
                                    characterInactive: "bg-muted",
                                    characterSelected: "bg-white text-black font-bold",
                                    characterFilled: "bg-white text-black font-bold"
                                }}
                            />
                        )
                    }

                </CardContent>
            </Card>
        )
    }


    return (
        <Card className='w-full h-full border-none shadow-none bg-[#F5F5F5]'>
            <CardHeader className=' flex items-center justify-center text-2xl font-bold'>
                <CardTitle>{formatAmount(Number(amount) + CHARGES)}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='grid grid-cols-2 justify-between'>
                    <div>
                        <p>Bank</p>
                        <p>Account Number</p>
                        <p>Name</p>
                        <p>Amount</p>
                        <p>Transaction Fee</p>
                    </div>
                    <div className=' text-end'>
                        <p>{recipientDetails[0].bank}</p>
                        <p>{recipientDetails[0].accountNumber}</p>
                        <p>{recipientDetails[0].name}</p>
                        <p>{formatAmount(Number(amount))}</p>
                        <p>{formatAmount(CHARGES)}</p>
                    </div>
                </div>
                <Separator orientation='horizontal' className='my-4' />
                <div className=' flex items-center justify-between border rounded-2xl shadow-md  p-3 bg-slate-300'>
                    <div className=' flex items-center justify-center gap-x-2'>
                        <Wallet2Icon className=' size-8 mr-3' />
                        <p className=' text-lg'>{senderBank}</p> <span> {formatAmount(Number(accounts[0].availableBalance))}</span>
                    </div>
                    <div>
                        {
                            !isDisabled && (<Check className=' size-8' />)
                        }

                    </div>
                </div>
                <div className=' w-full items-center justify-center mt-4'>
                    <Button size="lg" className='w-full rounded-full  py-5 bg-[#4893FF] hover:bg-[#4893FF] text-lg' onClick={requestPin} disabled={isDisabled}>
                        {
                            isDisabled ? ("Amount exceed your balance") : ("Pay")
                        }
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
