
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/Components/header";
import Footer from "@/app/Components/footer"
import { HireProvider } from "./Components/HireContext";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  
});

export const metadata: Metadata = {
  title: "Potfolio Website",
  description: "Naseer's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <HireProvider>
         <Header/>
        {children}
        </HireProvider>
        <Footer />
      </body>
    </html>
  );
}
