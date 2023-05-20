'use client';
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import styles from "../../styles/projects.module.css"
import Image from "next/image";
import CodeImg from "../../public/codeimage.png";
import SalaryPackaging from "../../public/SalaryPacakging.png";
import other from "../../public/reactwebsite.png";
import clsx from "clsx";

type combination = {
  configuration: number;
  roundness: number;
}

const Projects = () => {
  return (
    <div className={styles.container}>
      <figure className={clsx(styles.gallery__item, styles.gallery__item1)}>
        <h3 className={styles.headers}>Employer Portal</h3>
        <Image src={other} alt="Image Code" className={styles.gallery__img} />
      </figure>
      <figure className={clsx(styles.gallery__item, styles.gallery__item2)}>
        <h3 className={styles.headers}>Salary Packaging Dashboard</h3>
        <Image src={SalaryPackaging} alt="Image Code" className={styles.gallery__img} />
      </figure>
      <figure className={clsx(styles.gallery__item, styles.gallery__item3)}>
        <h3 className={styles.headers}>CEM Portal</h3>
        <Image src={other} alt="Image Code" className={styles.gallery__img} />
      </figure>
      <figure className={clsx(styles.gallery__item, styles.gallery__item4)}>
        <h3 className={styles.headers}>Salary Packaging Page</h3>
        <Image src={CodeImg} alt="Image Code" className={styles.gallery__img} />
      </figure>
      <figure className={clsx(styles.gallery__item, styles.gallery__item5)}>
        <h3 className={styles.headers}>IAAF Table Calculator</h3>
        <Image src={CodeImg} alt="Image Code" className={styles.gallery__img} />
      </figure>
    </div>
  );
}

export default Projects;
