"use client"
import AuthForm from '@/components/AuthForm'
import { initializeLocalStorage } from '@/constants/local';
import { useAppStore } from '@/constants/store';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';

const SignIn = () => {
  const { isAuthenticated, loadFromLocalStorage } =
    useAppStore();



  useEffect(() => {
    initializeLocalStorage();
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);



  if (isAuthenticated) {
    redirect("/account")
  }

  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  )
}

export default SignIn