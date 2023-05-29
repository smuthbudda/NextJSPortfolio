'use client';
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import styles from "../../styles/Pages/projects.module.css"
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { CaretLeftFill, CaretRightFill, ArrowsAngleExpand, ArrowsCollapse} from "react-bootstrap-icons";

interface GalleryItem {
	imageSRC: StaticImageData[];
	header: string;
	summary: string;
	link: string;
}

const GalleryItem = (props: GalleryItem) => {

	const [active, setActive] = useState(false);
	const [index, setIndex] = useState<number>(0);
	let length = props.imageSRC.length;

	let expandbutton;
	if (active)
		expandbutton = <ArrowsCollapse className={styles.expand} size={20}
			onClick={() => setActive(!active)} />
	else
		expandbutton = <ArrowsAngleExpand className={styles.expand} size={20}
			onClick={() => setActive(!active)} />
	const changeImageLeft = () => {
		if (index > 0)
			setIndex(index - 1);
		else
			setIndex(length - 1);
	}

	const changeImageRight = () => {
		if (index < length - 1)
			setIndex(index + 1);
		else
			setIndex(0);
	}


	return (
		<div className={clsx(styles.gallery__item, active ? styles.active : styles.inactive)} >
			<CaretLeftFill className={clsx(styles.arrow, styles.left)} size={50} onClick={() => changeImageLeft()} />
			<CaretRightFill className={clsx(styles.arrow, styles.right)} size={50} onClick={() => changeImageRight()} />
			{expandbutton}
			<Image src={props.imageSRC[index]} alt="Image Code" className={clsx(styles.gallery__img)}  />
			<div className={styles.headers}>
				<h3>{props.header}</h3>
				<p>{props.summary}</p>
			</div>
		</div>
	)
}

type combination = {
	configuration: number;
	roundness: number;
}

const Projects = () => {
	let calculatorImages: StaticImageData[] = [calc, CodeImg];
	let employerPortalImages: StaticImageData[] = [EPhome, about, balance, contact, table];
	let salaryPackagingImages: StaticImageData[] = [SalaryPackaging];
	let other: StaticImageData[] = [thing];


	return (
		<div className={styles.pageContainer}>
			<h1 className={styles.pageTitle}>My Work</h1>
			<p>Here are some examples of my most recent work for both my job and some personal projects</p>
			<div className={styles.container}>
				<GalleryItem
					header="IAAF Calulator"
					summary="Custom calculator to compare information between world athletics approved events"
					imageSRC={calculatorImages}
					link="" />
				<GalleryItem
					header="Employer Portal"
					summary="An admin site for salary packaging employers. Displays employee stats and revenue numbers."
					imageSRC={employerPortalImages}
					link="" />
				<GalleryItem
					header="MySalPack Admin"
					summary="A system designed to streamline admin tasks for salary packaging. "
					imageSRC={salaryPackagingImages}
					link="" />
				<GalleryItem
					header="React Portfolio Website"
					summary="My original portfolio website."
					imageSRC={other}
					link="" />
				<GalleryItem
					header="CEM Portal"
					summary="Agent management system to track agent stats and allow them to record their schedule."
					imageSRC={employerPortalImages}
					link="" />
			</div>
		</div>
	);
}
export default Projects;


import SalaryPackaging from "../../public/SalaryPacakging.png";
import thing from "../../public/reactwebsite.png";

import CodeImg from "../../public/codeimage.png";
import calc from "../../public/ProjectImages/Calculator/calc.png";

import EPhome from "../../public/ProjectImages/EmployerPortal/homePage.png"
import about from "../../public/ProjectImages/EmployerPortal/about.png"
import balance from "../../public/ProjectImages/EmployerPortal/balancePage.png"
import contact from "../../public/ProjectImages/EmployerPortal/contact.png"
import table from "../../public/ProjectImages/EmployerPortal/TablePage.png"




