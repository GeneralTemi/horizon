"use client"
import { useAppStore } from '@/constants/store';
import { cn } from '@/lib/utils';
import Image from 'next/image'

import React from 'react'

const Footer = () => {


  const { toggleAuthentication } = useAppStore();

  const handleLogOut = async () => {
    toggleAuthentication(false);
  }

  return (
    <div
      onClick={handleLogOut}
      className={cn('sidebar-link cursor-pointer')}
    >
      <div className="relative size-6">
        <Image
          src="/icons/logout.svg"
          alt="logout"
          fill
          className=""
        />
      </div>
      <p className={cn("sidebar-label")}>
        Log Out
      </p>
    </div>
  )
}

export default Footer