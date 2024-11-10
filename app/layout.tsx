import type { Metadata } from "next";
import Image from 'next/image'
import styles from './components/Header.module.css'


import "./globals.css";
import { DM_Sans, Darker_Grotesque } from "next/font/google";
import Header from "./components/Header";



const DMSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: "400",





})

const Grotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
  weight: "300",

})

export const metadata: Metadata = {
  title: "Usman Faisal",
  description: "Usman Faisal's Portfolio website project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden ${DMSans.variable} ${Grotesque.variable}`}
      >
        <Image
          src={'Ellipse 6.svg'}
          alt={'Ellipse 6'}
          width={0}
          height={0}
          className={`w-full absolute -z-50 flex self-center rounded-b-full top-16 ${styles.fadeIn}`}
        />
        <Header />

        {children}

      </body>
    </html>
  );
}
