'use client'
import Head from "next/head";
import Image from 'next/image'
import styles from './page.module.css'
//import ManualHeader from '@/components/ManualHeader'
import Header from "@/components/Header";
import LotteryEntrace from "@/components/LotteryEntrace";
import { NotificationProvider } from "web3uikit"


export default function Home() {
  return (
    <main>
      <NotificationProvider>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ManualHeader/> */}
      <Header/>
      <LotteryEntrace/>
      <div>
      </div>
      </NotificationProvider>
    </main>
  )
}