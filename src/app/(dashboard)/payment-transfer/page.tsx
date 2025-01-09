"use client"
import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { useAppStore } from '@/constants/store'
import React from 'react'

const Transfer = () => {

  const { accounts } = useAppStore();

  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Make a Transfer"
        subtext=""
      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accounts} />
      </section>
    </section>
  )
}

export default Transfer