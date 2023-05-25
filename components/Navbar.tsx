import React, { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css"
import ThemeToggle from "./ThemeToggle";
import JordanButton from "./Button";
import clsx from 'clsx';
import { UilBars, UilTimes } from '@iconscout/react-unicons'
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
    const backButton = () => {
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
            {backButton()}
            <ThemeToggle />
            <JordanButton title="CV" link={"../JordanSResume.pdf"} />
        </nav>
    );
};
export default Navbar;
