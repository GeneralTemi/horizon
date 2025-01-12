"use client"
import HeaderBox from '@/components/HeaderBox'

import TransactionsTable from '@/components/TransactionsTable';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/constants/store';

import { formatAmount } from '@/lib/utils';
import React from 'react'
import { toast } from 'sonner';

const TransactionHistory = () => {

  const { accounts, transactions } = useAppStore();

  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox
          title="Transaction History"
          subtext="See your bank details and transactions."
        />
      </div>

      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">{accounts[0].accountName}</h2>
            <p className="text-14 text-blue-25">
              {accounts[0].officialName}
            </p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● {"3444"}
            </p>
          </div>

          <div className='transactions-account-balance'>
            <p className="text-14">Current balance</p>
            <p className="text-24 text-center font-bold">{formatAmount(accounts[0].availableBalance)}</p>
          </div>
        </div>

        <section className="flex w-full flex-col gap-6">
          <TransactionsTable
            transactions={transactions}
          />
          <Button
            onClick={() =>
              toast("Error Loading Transactions", {
                description: "Cant load transaction beyond a certain period",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
            variant="outline"
            className=' ml-auto'>
            View more transactions
          </Button>
          {/* {totalPages > 1 && (
            <div className="my-4 w-full">
              <Pagination totalPages={totalPages} page={currentPage} />
            </div>
          )} */}
        </section>
      </div>
    </div>
  )
}

export default TransactionHistory