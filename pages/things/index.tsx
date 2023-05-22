import React from "react";
import style from "../../styles/things.module.css"
import { title } from "process";

export default function things() {
    return (
        <div className={style.container}>
            <h1>Blog... Maybe... probably</h1>
            <Blogitem title="2022/2023 Athletics Season Report" bodyText="Eventually I'll write more stuff here "/>
        </div>
    )
}

const Blogitem = (props: {title: string, bodyText: string})=>{
    return(
        <div className={style.blogContainer}>
            <h2>{props.title}</h2>
            <p>{props.bodyText}</p>
        </div>
    );
}