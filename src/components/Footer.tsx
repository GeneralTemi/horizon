"use client"
import { useAppStore } from '@/constants/store';
import Image from 'next/image'

import React from 'react'

const Footer = ({ user, type = 'desktop' }: FooterProps) => {


  const { toggleAuthentication } = useAppStore();

  const handleLogOut = async () => {
    toggleAuthentication(false);
  }

  return (
    <footer className="footer mb-5">
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className="text-xl font-bold text-gray-700">
          {user.firstName[0]}
        </p>
      </div>

      <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {user.firstName}
        </h1>
        <p className=" flex text-14 truncate font-normal text-gray-600">
          {user.email}
        </p>
      </div>

      <div className="footer_image" onClick={handleLogOut}>
        <Image src="icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  )
}

export default Footer