import styles from "../../styles/about.module.css"
import Logo from "../../public/JSLogo.png"
import Image from 'next/image'
import clsx from "clsx"

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src={Logo} alt='hi' height={200} width={200} className={styles.photo} />
            </div>
            <div>
                <p className={styles.about}>
                    Hi, I'm Jordan!
                    <br />
                    <br />
                    I am a software developer currently based in Melbourne, VIC, Australia. In January 2022, I made the decision to move  from my hometown of Calgary, Alberta, Canada, to accompany my partner on her three-year trip to Australia while she completes her post graduate degree. I am excited to explore new opportunities in this vibrant city and further develop my skills in the field.
                    <br />
                    <br />
                    During my Bachelor's degree at the University of Calgary, I pursued Economics as my major. However, a single class in Computer Science opened my eyes to the potential of programming, inspiring me to complete a minor in the field. After graduation, I realized that I wanted to enhance my programming skills and decided to pursue a career in software development. It is this drive that led me to my current role as a developer at SafeCode, where I utilize my programming to create innovative solutions for clients.
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
                        <h3 className={styles.title}>Experience</h3>
                        <div className={styles.experience}>
                            <h4>SafeCode <br /><small>April 2022 - present</small></h4>
                            <ul>
                                <li>
                                    Experience in both front-end and back-end technologies such as HTML/CSS/SCSS, C# and JavaScript, as well as some exposure to SQL.
                                </li>
                                <li>
                                    Frameworks: .Net Core, Blazor, Entity Framework Core, MVC etc.
                                </li>
                                <li>
                                    Communicate and collaborate with multi-disciplinary teams of engineers, designers,
                                    producers, and clients daily.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.experience}>
                            <h4>LeasePlus <br /><small>February 2022 - April 2022 </small></h4>
                            <ul>
                                <li>
                                    Performed financial and administrative tasks dealing with large sums of customer funds.
                                </li>
                                <li>
                                    Replied to customer questions and complaints through emails and phone calls.
                                </li>
                            </ul>
                            <div className={styles.tech}></div>
                        </div>
                        <div className={styles.experience}>
                            <h4>YMCA <br /><small>September 2021 - January 2022</small></h4>
                            <ul>
                                <li>
                                    Ensured smooth operation of the world’s largest YMCA during strenuous times such as swim meets and COVID19 protests
                                </li>
                                <li>
                                    Consistently dealt with difficult customers calmly and logically to ensure customer satisfaction.
                                </li>
                                <li>
                                    A first responder to all first aid situations in the facility, including those involving ambulances and the fire department.
                                </li>
                            </ul>
                            <div className={styles.tech}></div>
                        </div>
                        <div className={styles.experience}>
                            <h4>KG Properties (Property Management) <br /><small>May 2019 - August 2019</small></h4>
                            <ul>
                                <li>
                                    Held showings of rental properties for future tenants.
                                </li>
                                <li>
                                    Performed maintenance of properties, including painting, drywalling, and showing the rentals
                                </li>
                            </ul>
                            <div className={styles.tech}></div>
                        </div>
                        <div className={styles.experience}>
                            <h4>MRU Kids <br /><small>May 2019 - August 2019</small></h4>
                            <ul>
                                <li>
                                    Managed large groups of children ranging from 20-30 in size.
                                </li>
                                <li>
                                    Made accommodations for kids unfamiliar with English and/or learning difficulties.
                                </li>
                            </ul>
                            <div className={styles.tech}></div>
                        </div>
                        <div className={styles.experience}>
                            <h4>Foundation Building Materials <br /><small>May 2020 - August 2020</small></h4>
                            <ul>
                                <li>
                                    In charge of operating heavy machinery such as forklift and drywall delivery trucks.
                                </li>
                                <li>
                                    Oversaw the operation of a stucco tinting facility where we would exceed the expectations set out for us daily
                                </li>
                                <li>
                                    Received and filled out advanced orders from customers to complete and deliver on time.
                                </li>
                            </ul>
                            <div className={styles.tech}></div>
                        </div>

                    </div>
                </div>

            </div>

        </div >
    )
}