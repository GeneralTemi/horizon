"use client"
import AuthForm from '@/components/AuthForm'
import { initializeLocalStorage } from '@/constants/local';
import { useAppStore } from '@/constants/store';
import React from 'react';

const SignIn = () => {
  const { loadFromLocalStorage } =
    useAppStore();

  React.useEffect(() => {
    initializeLocalStorage();
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  )
}

export default SignIn