import React,{useEffect,useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Logo from "../public/JSLogo.png"
import { UilApps,UilInfoCircle,UilSmile ,UilCircuit } from '@iconscout/react-unicons'
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState(false);


  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
  
    if (prefersDark) {
      setDark(true);
    }
  }, []);

  function handleClick(){
    setActive(!active);
  };
  
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
            <Image src={Logo} alt='Jordan Samson' height={325} width={325} className={styles.logo} onClick={()=> handleClick()}/>
            <div className={clsx(styles.innerlink,styles.link1, active ? styles.active : styles.nonactive)}>
              <Link href={"/about"}>
                <UilInfoCircle  className={styles.icon} />
              </Link>
              About
            </div>

            <div className={clsx(styles.innerlink,styles.link2, active ? styles.active : styles.nonactive)}>
              <Link href={"/projects"}>
                <UilApps className={styles.icon} />
              </Link>
              Projects
            </div>

            <div className={clsx(styles.innerlink,styles.link3, active ? styles.active : styles.nonactive)}>
              <Link href={"/things"}>
                <UilSmile className={styles.icon} />
              </Link>
              Things
            </div>
 
            <div className={clsx(styles.innerlink, styles.link4, active ? styles.active : styles.nonactive)}>
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
