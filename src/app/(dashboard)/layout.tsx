"use client"
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
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
      <Sidebar />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image className=" print:hidden" src="https://www.floridacapitalbank.com/wp-content/uploads/2019/08/logo_flcb_main.png" width={150} height={150} alt="logo" />
          <div>
            <MobileNav />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
