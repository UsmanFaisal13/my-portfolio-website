import type { Metadata } from "next";
import Image from 'next/image'
import styles from './components/Header.module.css'
import Footer from "./components/Footer";


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
        className={` ${DMSans.variable} ${Grotesque.variable} font-DM_Sans`}
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


        <footer className='m-0 flex-col items-center gap-4 w-full flex lg:hidden '>

          <p className='py-4 text-white -z-50'>  copyright &copy; by Usman Faisal </p>
        </footer>


      </body>
    </html>
  );
}
