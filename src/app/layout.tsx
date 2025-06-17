import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";



export const metadata: Metadata = {
  title: "N.R. Portfolio",
  description: "Frontend Developper Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning 
      className="bg-[#0a0a0a] text-white"
      >
       <Navbar/>
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
