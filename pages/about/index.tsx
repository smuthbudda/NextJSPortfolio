import styles from "../../styles/about.module.css"
import Logo from "../../public/jordanLogo.png"
import Image from 'next/image'

export default function About(){
    return(
        <div className={styles.container}>
            <Image src={Logo} alt='hi' height={150} width={150} className={styles.photo} />
            <p>

            </p>

        </div>
    )
}