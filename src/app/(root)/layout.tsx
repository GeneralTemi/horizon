"use client"
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { USER } from "@/constants";
import { useAppStore } from "@/constants/store";
import Image from "next/image";
import { redirect } from "next/navigation";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const loggedIn = await getLoggedInUser();

  const { isAuthenticated } = useAppStore();

  if (!isAuthenticated) {
    redirect("/sign-in")
  }

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={USER} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={USER} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
