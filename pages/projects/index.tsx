'use client';
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import styles from "../../styles/projects.module.css"
import Image from "next/image";
import CodeImg from "../../public/codeimage.png";
import SalaryPackaging from "../../public/SalaryPacakging.png";
import other from "../../public/reactwebsite.png";
import clsx from "clsx";
import EPhome from "../../public/ProjectImages/EmployerPortal/homePage.png"
import CEM1 from "../../public/ProjectImages/CEMPortal/CEM1.png"

type combination = {
  configuration: number;
  roundness: number;
}

const Projects = () => {
  return (
  <div className={styles.pageContainer}>
    <h1 className={styles.pageTitle}>My Work</h1>
    <p>Here are some examples of my most recent work for both my job and some personal projects</p>
    <div className={styles.container}>
      <div className={clsx(styles.gallery__item, styles.gallery__item5)}>
        <Image src={CodeImg} alt="Image Code" className={styles.gallery__img} />
        <div className={styles.headers}><h3>IAAF Calulator</h3><p>Custom calculator to compare information between world athletics approved events</p></div>
      </div>
      <div className={clsx(styles.gallery__item, styles.gallery__item1)}>
        <Image src={EPhome} alt="Image Code" className={styles.gallery__img} />
        <div className={styles.headers}><h3>Employer Portal</h3><p>An admin site for salary packaging employers. Displays employee stats and revenue numbers.</p></div>
      </div>
      <div className={clsx(styles.gallery__item, styles.gallery__item2)}>
        <Image src={SalaryPackaging} alt="Image Code" className={styles.gallery__img} />
        <div className={styles.headers}><h3>MySalPack Admin</h3><p>A system designed to streamline admin tasks for salary packaging. </p></div>
      </div>
      <div className={clsx(styles.gallery__item, styles.gallery__item4)}>
        <Image src={other} alt="Image Code" className={styles.gallery__img} />
        <div className={styles.headers}><h3>React Portfolio Website</h3><p>My original portfolio website.</p></div>
      </div>
      <div className={clsx(styles.gallery__item, styles.gallery__item3)}>
        <Image src={CEM1} alt="Image Code" className={styles.gallery__img} />
        <div className={styles.headers}><h3>CEM Portal</h3><p>Agent management system to track agent stats and allow them to record their schedule.</p></div>
      </div>
    </div>
  </div>
  );
}

export default Projects;
