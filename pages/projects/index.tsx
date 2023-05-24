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

type combination = {
  configuration: number;
  roundness: number;
}

const Projects = () => {
  return (
  <div>
    <h1 className={styles.pageTitle}>My Work</h1>

    <div className={styles.container}>
      <div className={clsx(styles.gallery__item, styles.gallery__item1)}>
        <Image src={EPhome} alt="Image Code" className={styles.gallery__img} />
        <h3 className={styles.headers}>Employer Portal</h3>
      </div>
      <div className={clsx(styles.gallery__item, styles.gallery__item2)}>
        <Image src={SalaryPackaging} alt="Image Code" className={styles.gallery__img} />
        <h3 className={styles.headers}>Salary Packaging Dashboard</h3>
      </div>
      <div className={clsx(styles.gallery__item, styles.gallery__item3)}>
        <Image src={other} alt="Image Code" className={styles.gallery__img} />
        <h3 className={styles.headers}>CEM Portal</h3>
      </div>
      <div className={clsx(styles.gallery__item, styles.gallery__item4)}>
        <Image src={CodeImg} alt="Image Code" className={styles.gallery__img} />
        <h3 className={styles.headers}>Salary Packaging Page</h3>
      </div>
      <div className={clsx(styles.gallery__item, styles.gallery__item5)}>
        <Image src={CodeImg} alt="Image Code" className={styles.gallery__img} />
        <h3 className={styles.headers}>IAAF Table Calculator</h3>
      </div>
    </div>
  </div>
  );
}

export default Projects;
