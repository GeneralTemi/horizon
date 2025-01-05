import { Donut } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';


const TotalBalanceBox = ({
  totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <Donut className=' size-20 text-blue-600' />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">
            Account Balance
          </p>

          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox