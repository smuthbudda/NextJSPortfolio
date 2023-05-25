import { useState, useEffect } from "react";
import React from "react";
import style from "../styles/Components/themeToggle.module.css"
import clsx from "clsx";



const toggle = () => {
    const [activeTheme, setActiveTheme] = useState("light");
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
    }, [activeTheme]);

    return (

        <div className={style.switch}>
            <label >
                <input id={style.toggle} className={style.toggle_switch} type="checkbox" onClick={() => setActiveTheme(inactiveTheme)} />
                <div className={style.sun_moon}><div className={style.dots}></div></div>
                <div className={style.background}><div className={style.stars1}></div><div className={style.stars2}></div></div>
                <div className={style.fill}></div>
            </label>
        </div>
    );
}

export default toggle;