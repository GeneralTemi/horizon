"use client"

import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // const { isAuthenticated } = useAppStore();

  // if (isAuthenticated) {
  //   redirect("/account")
  // }
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="https://www.floridacapitalbank.com/wp-content/uploads/2021/02/img_home_0000_GettyImages-1187832715_2.jpg"
            alt="Auth image"
            width={800}
            height={800}
            className="rounded-l-xl object-contain"
          />
        </div>
      </div>
    </main>
  );
}
