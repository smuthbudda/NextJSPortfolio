import styles from "../styles/Components/toolbars.module.css"
import React, { useEffect, useState } from "react";
import * as Unicons from '@iconscout/react-unicons';
import clsx from "clsx";


function Toolbars() {
    
    return (
        <>
            <div className={clsx(styles.toolbar, styles.left)}>
                <div className={styles.toolbar__icons} >
                    <a href="https://github.com/smuthbudda?tab=repositories" target="_blank">
                        <Unicons.UilGithubAlt size="1.5rem" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCACRIvYPVdscGnHulrqfZoQ" target="_blank">
                        <Unicons.UilYoutube size="1.5rem" />
                    </a>
                    <a href="https://www.linkedin.com/in/jordan-samson-51a800231/" target="_blank">
                        <Unicons.UilLinkedinAlt size="1.5rem" />
                    </a>
                    <a href="https://github.com/smuthbudda?tab=repositories" target="_blank">
                        <Unicons.UilInstagram size="1.5rem" />
                    </a>
                </div>
            </div>
            
            <div className={clsx(styles.toolbar, styles.right)}>
                <div className={styles.toolbar__contact} >
                    <a href="mailto: jkdsamson@outlook.com">jkdsamson@outlook.com</a>
                </div>
            </div>

        </>
    )

}

export default Toolbars;