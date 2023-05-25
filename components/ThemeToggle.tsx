import { useState, useEffect } from "react";
import React from "react";
import style from "../styles/Components/themeToggle.module.css"
import clsx from "clsx";


export default function ThemeToggle() {
    const [activeTheme, setActiveTheme] = useState("light");
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
      }, [activeTheme]);

    return (
        <div>
            <label className={style.switch}>
                <input type="checkbox" onClick={()=> setActiveTheme(inactiveTheme)}/>
                <span className={clsx(style.slider, style.round)}></span>
            </label>
        </div>
    );
}

