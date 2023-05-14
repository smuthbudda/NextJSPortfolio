import styles from "../../styles/about.module.css"
import Logo from "../../public/jordanLogo.png"
import Image from 'next/image'
import clsx from "clsx"

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src={Logo} alt='hi' height={150} width={150} className={styles.photo} />
            </div>
            <div>
                <p className={styles.about}>
                    Hi, I'm Jordan!&#129304;&#127997;
                    <br />
                    <br />
                    I am a software developer currently based in Melbourne, VIC, Australia. In January 2022, I made the decision to move &#9996;&#127997; from my hometown of Calgary, Alberta, Canada, to accompany my partner on her three-year trip to Australia while she completes her post graduate degree. I am excited to explore new opportunities in this vibrant city and further develop my skills in the field.
                    <br />
                    <br />
                    During my Bachelor's degree at the University of Calgary, I pursued Economics as my major. However, a single class in Computer Science opened my eyes to the potential of programming, inspiring me to complete a minor in the field as well. After graduation, I realized that I wanted to enhance my programming skills and decided to pursue a career in software development. It is this drive that led me to my current role as a developer at SafeCode, where I can utilize my programming expertise to create innovative solutions for clients.
                </p>
                <hr />
                <div className={styles.experience_title}>
                    <div className={styles.title}>
                        <h4 >Tech Stack</h4>
                        <div className={clsx(styles.tech, styles.Proficient)}>Proficient</div>
                        <div className={clsx(styles.tech, styles.Competent)}>Competent</div>
                        <div className={clsx(styles.tech, styles.learning)}>Working on it</div>
                        <div className={styles.languages}>
                            <div className={clsx(styles.tech, styles.one)}>.NET Core</div>
                            <div className={clsx(styles.tech, styles.one)}>C#</div>
                            <div className={clsx(styles.tech, styles.one)}>REST API</div>
                            <div className={clsx(styles.tech, styles.one)}>Blazor</div>
                            <div className={clsx(styles.tech, styles.one)}>CSS</div>
                            <div className={clsx(styles.tech, styles.two)}>TypeScript</div>
                            <div className={clsx(styles.tech, styles.two)}>React</div>
                            <div className={clsx(styles.tech, styles.two)}>Node.js</div>
                            <div className={clsx(styles.tech, styles.three)}>SQL</div>
                            <div className={clsx(styles.tech, styles.three)}>Java</div>
                        </div>
                    </div>
                    <div>
                        <h4 className={styles.title}>Experience</h4>
                        <div className={styles.experience}>
                            <h4>SafeCode <br/><small>[ April 2022 - present ]</small></h4>
                            <p> According to all known laws of aviation, there is no way a bee should be able to fly. It's wings are too small to get its fat little body off the ground. The bee, of course, flies anyway, because bees don't care what humans think is impossible. </p>
                        </div>
                        <div className={styles.experience}>
                            <h4>LeasePlus <br/><small>[ February 2022 - April 2022 ]</small></h4>
                            <p> According to all known laws of aviation, there is no way a bee should be able to fly. It's wings are too small to get its fat little body off the ground. The bee, of course, flies anyway, because bees don't care what humans think is impossible. </p>
                            <div className={styles.tech}></div>
                        </div>          
                        <div className={styles.experience}>
                            <h4>YMCA <br/><small>[ September 2021 - January 2022 ]</small></h4>
                            <p> According to all known laws of aviation, there is no way a bee should be able to fly. It's wings are too small to get its fat little body off the ground. The bee, of course, flies anyway, because bees don't care what humans think is impossible. </p>
                            <div className={styles.tech}></div>
                        </div>
                        <div className={styles.experience}>
                            <h4>KG Properties (Property Management) <br/><small>[ May 2019 - August 2019 ]</small></h4>
                            <p> According to all known laws of aviation, there is no way a bee should be able to fly. It's wings are too small to get its fat little body off the ground. The bee, of course, flies anyway, because bees don't care what humans think is impossible. </p>
                            <div className={styles.tech}></div>
                        </div>
                        <div className={styles.experience}>
                            <h4>MRU Kids <br/><small>[ May 2019 - August 2019 ]</small></h4>
                            <p> According to all known laws of aviation, there is no way a bee should be able to fly. It's wings are too small to get its fat little body off the ground. The bee, of course, flies anyway, because bees don't care what humans think is impossible. </p>
                            <div className={styles.tech}></div>
                        </div>
                        <div className={styles.experience}>
                            <h4>Foundation Building Materials <br/><small>[ May 2020 - August 2020 ]</small></h4>
                            <p> According to all known laws of aviation, there is no way a bee should be able to fly. It's wings are too small to get its fat little body off the ground. The bee, of course, flies anyway, because bees don't care what humans think is impossible. </p>
                            <div className={styles.tech}></div>
                        </div>
                        
                    </div>
                </div>

            </div>

        </div>
    )
}