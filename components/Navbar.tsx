import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css"
import Image from 'next/image';
import Logo from '../public/jordanLogo.png'
import JordanButton from "./Button";
import clsx from 'clsx';
import { UilBars, UilTimes } from '@iconscout/react-unicons'
import Resume from "../public/JordanSamsonResume.pdf";
import BackButton from "./BackButton";

const Navbar = () => {
    const [navActive, SetnavActive] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [thebackButton, setBackButton] = useState(false)

    useEffect(() => setBackButton(true), []);

    var button;
    if (navActive) {
        button = <UilTimes size="2rem" />
    } else {
        button = <UilBars size="2rem" />
    }
    const backButton = () => { //if on the homepage then return an empty element
        if (thebackButton) {
            if (typeof window === "undefined")
                return <div></div>
            if (window.location.pathname != "/") {
                return <BackButton />
            }
        }
        return <div></div>;

    }

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <nav className={clsx(styles.nav__container, show ? styles.hide_nav : styles.show_nav)}>
            {/* <Link href="/">
                <Image src={Logo} width={70} height={70} alt="logo" />
            </Link>
            <div className={styles.nav__links}>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <div>
                </div>
            </div>
            <div className={styles.hambugermenu} onClick={() => SetnavActive(!navActive)}>
                {button}
            </div> */}
            {backButton()}

            <JordanButton title="CV" link={"../JordanSamsonResume.pdf"} />
            {/* <div className={clsx(styles.side_nav, navActive ? styles.active : styles.inactive)}>
                <Link href="/about"><div><span>01. </span>About</div></Link>
                <Link href="/projects"><div><span>02. </span>Projects</div></Link>
            </div> */}
        </nav>
    );
};
export default Navbar;
