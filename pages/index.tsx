import React,{useEffect,useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Logo from "../public/JSLogo.png"
import { UilApps,UilInfoCircle,UilSmile ,UilCircuit } from '@iconscout/react-unicons'
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
  
    if (prefersDark) {
      setDark(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Jordan Samson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/jordanLogo.png" />
        

      </Head>
      <main >
        <div className={styles.container}>
          <div className={styles.circle}>
            <Image src={Logo} alt='hi' height={325} width={325} className={styles.logo} />

            <div className={styles.innerlink}>
              <Link href={"/about"}>
                <UilInfoCircle  className={styles.icon} />
              </Link>
              About
            </div>

            <div className={styles.innerlink}>
              <Link href={"/projects"}>
                <UilApps className={styles.icon} />
              </Link>
              Projects
            </div>

            <div className={styles.innerlink}>
              <Link href={"/things"}>
                <UilSmile className={styles.icon} />
              </Link>
              Things
            </div>

            <div className={styles.innerlink}>
              <Link href={"/stuff/calculator"}>
                <UilCircuit  className={styles.icon} />
              </Link>
              Stuff
            </div>

          </div>
        </div>
        <Analytics />
      </main>
    </>
  )
}
