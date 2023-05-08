import React from "react";
import Link from "next/link";
import styles from "../styles/backButton.module.css"
import { UilAngleLeft } from '@iconscout/react-unicons'

export default function backButton() {
    return (
        <div>
            <div className={styles.container}>
                <Link href="/" className={styles.backButton}>
                    <UilAngleLeft size="50">
                    </UilAngleLeft>
                </Link>
            </div>
        </div>
    );
}