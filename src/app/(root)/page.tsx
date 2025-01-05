"use client"
import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { USER } from '@/constants';
import { initializeLocalStorage } from '@/constants/local';
import { useAppStore } from '@/constants/store';
import { ArrowBigRightDash, PlusCircle } from 'lucide-react';
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
      .slice(0, 2);
  };

  const recentTransaction = getRecentTransactions(transactions);


  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={USER.firstName}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={accounts}
            totalBanks={accounts.length}
            totalCurrentBalance={accounts[0].availableBalance}
          />
        </header>

        <div className=' flex items-center md:justify-start justify-center gap-x-2 '>

          <div className=' flex items-center justify-center text-xl font-bold rounded-full bg-[#4893FF] text-white p-3 px-5 border-2 border-blue-600'>
            <Link href="/payment-transfer" className='flex items-center justify-center'>
              <ArrowBigRightDash className=' size-8 mr-1 text-white' />
              Transfer
            </Link>


          </div>
          <div className=' flex items-center justify-center text-lg font-bold rounded-full bg-[#4893FF] text-white p-3 border-2 border-blue-600'>
            <Link href="/transaction-history" className='flex items-center justify-center'>
              <PlusCircle className=' size-8 mr-1 text-white' />
              Transactions
            </Link>


          </div>

        </div>

        <RecentTransactions
          accounts={accounts}
          transactions={recentTransaction}
        />
      </div>

      <RightSidebar
        user={USER}
        transactions={[]}

      />
    </section>
  )
}

export default Home