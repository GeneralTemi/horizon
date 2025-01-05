import Link from 'next/link'

import TransactionsTable from './TransactionsTable'


const RecentTransactions = ({
  transactions,
}: RecentTransactionsProps) => {


  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Recent transactions</h2>
        <Link
          href={`/transaction-history`}
          className="view-all-btn"
        >
          View all
        </Link>
      </header>

      <TransactionsTable transactions={transactions} />
    </section>
  )
}

export default RecentTransactions