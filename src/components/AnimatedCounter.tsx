'use client';

import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full text-blue-700 text-xs md:text-lg">
      <CountUp
        decimals={2}
        decimal="."
        prefix="$"
        end={amount}
      />
    </div>
  )
}

export default AnimatedCounter