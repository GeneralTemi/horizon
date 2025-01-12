import AnimatedCounter from './AnimatedCounter';
import { Badge } from './ui/badge';



const TotalBalanceBox = ({
  accounts
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance  ">
      <div className='flex items-center gap-y-5 justify-between w-full px-2 md:pr-12  '>
        {
          accounts.map((account) => (
            <div key={account.id} className='flex'>

              <div className="flex flex-col gap-6 ">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <Badge className="total-balance-label   font-bold w-fit bg-blue-700">
                    {account.accountName}
                  </Badge>


                  <div className="total-balance-amount  flex-center gap-2">
                    <AnimatedCounter amount={account.availableBalance} />
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default TotalBalanceBox