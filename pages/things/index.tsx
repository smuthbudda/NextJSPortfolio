import { ReactNode } from "react";
import React from "react";
import style from "../../styles/things.module.css"
import { title } from "process";
import trackSpikes from "../../public/trackSpikes.jpeg";
import Image from "next/image";

interface Props {
    children: JSX.Element[] | JSX.Element
}

export default function things() {
    return (
        <div className={style.container}>
            <h1>Blog... Maybe... probably</h1>

            <Blogitem title="2022/2023 Athletics Season Report"
                bodyText="Eventually I'll write more stuff here " children={
                    <div><Image width={300} src={trackSpikes} alt="spikes" /></div>
                } />

            <Blogitem title="What its like being a Jr. Dev"
                bodyText="Eventually I'll write more stuff here" children={
                    <div><Image width={300} src={trackSpikes} alt="spikes" /></div>
                } />
        </div>
    )
}

const Blogitem = (props: { title: string, bodyText: string, children: ReactNode }) => {
    return (
        <div className={style.blogContainer}>
            <h2>{props.title}</h2>
            <div className={style.description}>
                <p>{props.bodyText}</p>
                {props.children}
            </div>
        </div>
    );
}