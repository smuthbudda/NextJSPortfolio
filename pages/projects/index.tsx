'use client';
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import styles from "../../styles/projects.module.css"
import Image from "next/image";
import CodeImg from "../../public/codeimage.png";
import other from "../../public/reactwebsite.png";

type combination = {
  configuration: number;
  roundness: number;
}
// const Projects = ()=> {

//   const [domLoaded, setDomLoaded] = useState(false);

//   useEffect(() => {
//     setDomLoaded(true);
//     if (window && domLoaded) {
//       const wrapper = document.getElementsByClassName("wrapper")[0] as HTMLElement;

//       const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

//       const uniqueRand = (min: number, max: number, prev: number) => {
//         let next = prev;

//         while (prev === next) {
//           next = rand(min, max);
//         }

//         return next;
//       }

//       const combinations: combination[] = [
//         { configuration: 1, roundness: 1 },
//         { configuration: 1, roundness: 2 },
//         { configuration: 1, roundness: 4 },
//         //{ configuration: 2, roundness: 2 },
//          //{ configuration: 2, roundness: 3 },
//          //{ configuration: 3, roundness: 3 }
//       ];

//       let prev = 0;

//       setInterval(() => {
//         const index = uniqueRand(0, combinations.length - 1, prev),combination = combinations[index];
//         wrapper.dataset.configuration = combination.configuration + "";
//         wrapper.dataset.roundness = combination.roundness + "";
//         prev = index;
//       }, 3000);
//     }
//   })

//   return (
//     <div>
//       {domLoaded && (

//         <div className={styles.container}>
//           <div id={styles.wrapper} className="wrapper" data-configuration="1" data-roundness="1" >
//             <div className={styles.shape}></div>
//             <div className={styles.shape}>2</div>
//             <div className={styles.shape}><Image src={CodeImg} alt="Image Code" className={styles.codeImage}/></div>
//             <div className={styles.shape}></div>
//             <div className={styles.shape}></div>

//           </div>
//         </div>
//       )}
//     </div>

//   )
// }

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.one}>
        <Image src={other} alt="Image Code" className={styles.codeImage} height={400} />
      </div>

      <div className={styles.two}>
        <Image src={CodeImg} alt="Image Code" className={styles.codeImage} height={400} />
      </div>

      <div className={styles.thre}>
        <Image src={other} alt="Image Code" className={styles.codeImage} height={400} />
      </div>

      <div className={styles.four}>
        <Image src={CodeImg} alt="Image Code" className={styles.codeImage} height={400} />
      </div>

      <div className={styles.five}>
        <Image src={other} alt="Image Code" className={styles.codeImage} height={400} />
      </div>
      
    </div>
  );
}

export default Projects;
