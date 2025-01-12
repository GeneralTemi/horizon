"use client"
import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { Button } from '@/components/ui/button';
import { USER } from '@/constants';
import { initializeLocalStorage } from '@/constants/local';
import { useAppStore } from '@/constants/store';
import { CreditCard, DollarSign, HomeIcon, Receipt, Save, WalletCards } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Home = () => {


  const { loadFromLocalStorage, accounts, transactions } =
    useAppStore();

  React.useEffect(() => {
    initializeLocalStorage();
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);

  const getRecentTransactions = (transactions: Transaction[]): Transaction[] => {
    return transactions
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 4);
  };

  const recentTransaction = getRecentTransactions(transactions);


  return (
    <section className="home max-w-screen-lg mr-auto">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={USER.firstName}
            subtext="Wire transfer,Pay bill,Offer/deals,Spending & budgeting goals."
          />

          <TotalBalanceBox
            accounts={accounts}
            totalBanks={accounts.length}
          />
        </header>

        <div className=' grid grid-cols-3 lg:grid-cols-6 gap-4 py-5'>

          <Link href="/account" className=' flex flex-col items-center justify-center gap-y-2' >
            <Button variant="outline" size="icon" className=' rounded-full text-center border-2 border-blue-600 shadow-md' >

              <HomeIcon className=' size-20 text-blue-700' />

            </Button>

            <p className=' text-sm text-gray-400'>My Account</p>
          </Link>

          <Link href="/payment-transfer" className=' flex flex-col items-center justify-center gap-y-2' >
            <Button variant="outline" size="icon" className=' rounded-full text-center border-2 border-blue-600 shadow-md' >

              <CreditCard className=' size-20 text-blue-700' />

            </Button>

            <p className=' text-sm text-gray-400'>My Card</p>
          </Link>

          <Link href="/payment-transfer" className=' flex flex-col items-center justify-center gap-y-2' >
            <Button variant="outline" size="icon" className=' rounded-full text-center border-2 border-blue-600 shadow-md' >

              <Receipt className=' size-20 text-blue-700' />

            </Button>

            <p className=' text-sm text-gray-400'>Move Money</p>
          </Link>


          <Link href="/payment-transfer" className=' flex flex-col items-center justify-center gap-y-2' >
            <Button variant="outline" size="icon" className=' rounded-full text-center border-2 border-blue-600 shadow-md' >

              <WalletCards className=' size-20 text-blue-700' />

            </Button>

            <p className=' text-sm text-gray-400'>Transfer</p>
          </Link>


          <Link href="/payment-transfer" className=' flex flex-col items-center justify-center gap-y-2' >
            <Button variant="outline" size="icon" className=' rounded-full text-center border-2 border-blue-600 shadow-md' >

              <DollarSign className=' size-20 text-blue-700' />

            </Button>

            <p className=' text-sm text-gray-400'>Pay Bills</p>
          </Link>


          <Link href="/payment-transfer" className=' flex flex-col items-center justify-center gap-y-2' >
            <Button variant="outline" size="icon" className=' rounded-full text-center border-2 border-blue-600 shadow-md' >

              <Save className=' size-20 text-blue-700' />

            </Button>

            <p className=' text-sm text-gray-400'>Deposit</p>
          </Link>



        </div>

        <RecentTransactions
          accounts={accounts}
          transactions={recentTransaction}
        />
      </div>

      {/* <RightSidebar
        user={USER}
        transactions={[]}

      /> */}
    </section>
  )
}

export default Home