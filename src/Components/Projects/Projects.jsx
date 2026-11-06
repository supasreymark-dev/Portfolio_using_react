import style from './Projects.module.css';
import portfolio2 from './../../assets/Portfolio2.png';
import fullstackWeb from './../../assets/fullstackWeb.png'
import SDBss from './../../assets/SDBss.png';
// import python from './../../../public/python.svg';
import python from './../../assets/python.svg';
import { FaReact, FaHtml5, FaGithub, FaGlobe } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { SiFastapi, SiPostgresql } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";

function Projects(){

    return(
        <main className={style.wrapper} id='projects'>
            <div className={style.projectsContainer}>
                <div className={style.projectHeader}>
                    <h2>Projects</h2>
                </div>

                <div className={style.container}>
                    <div className={`${style.portfolio2} ${style.projects}`}>
                        <span>Personal Portfolio</span>
                        <div className={style.Card}>
                            <div className={style.overlay}>
                                <img src={portfolio2} alt="Screenshot of portfolio2" />
                            </div>
                            <p>
                                A modern and responsive portfolio website designed to showcase my skills, projects, and services as a technology enthusiast. 
                                It provides visitors with an overview of my technical knowledge, featured projects, and an easy way to get in touch. 
                                The website emphasizes clean design, accessibility, and a user-friendly interface.
                            </p>

                            <div className={style.stacks}>
                                <span>Tech Stacks</span>
                                <div className={style.stacksLogo}>
                                    <div>
                                        <FaReact className={style.react}/>
                                    </div>
                                    <div>
                                        <IoLogoJavascript className={style.jsLogo}/>
                                    </div>
                                    <div>
                                        <FaHtml5 className={style.htmlLogo}/>
                                    </div>
                                    <div>    
                                        <IoLogoCss3 className={style.cssLogo}/>
                                    </div>
                                </div>

                                <div className={style.stacksName}>
                                    <span>React</span>
                                    <span>Javascript</span>
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                </div>
                            </div>

                            <div className={style.Links}>
                                <span>Links</span>
                                <div>
                                    <a href="https://marky-portfolio-flame.vercel.app/" target='_blank'>
                                        <div>
                                            <BsBoxArrowUpRight />
                                        </div>
                                        <span>
                                            Live Demo
                                        </span>
                                    </a>
                                    
                                    <a href="https://github.com/supasreymark-dev/Portfolio_using_react" target='_blank'>
                                        <div>
                                            <FaGithub /> 
                                        </div>
                                        <span>
                                            Source Code
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.projects}>
                        <span>Full-Stack User Management System</span>
                        <div className={style.Card}>
                            <div className={style.overlay}>
                                <img src={fullstackWeb} alt="Full-Stack Web Project image" />
                            </div>

                            <p>
                                A full-stack web application featuring user authentication, 
                                session management, and account management using React, 
                                FastAPI, and PostgreSQL.
                            </p>

                            <div className={style.stacks}>
                                <span>Tech Stacks</span>

                                <div className={style.stacksLogo}>
                                    <div>
                                        <FaReact className={style.react}/>
                                    </div>
                                    <div>
                                        <IoLogoJavascript className={style.jsLogo}/>
                                    </div>
                                    <div>
                                        <FaHtml5 className={style.htmlLogo}/>
                                    </div>
                                    <div>    
                                        <IoLogoCss3 className={style.cssLogo}/>
                                    </div>
                                    <div>
                                        <img src={python} alt="Python Logo" />
                                    </div>
                                    <div>
                                        <SiFastapi color='#009688'/>
                                    </div>
                                    <div>
                                        {/* <SiPostgresql className={style.PGlogo}/> */}
                                        {/* <DiPostgresql className={style.PGlogo}/> */}
                                        <BiLogoPostgresql color='#4169E1' className={style.PGlogo}/>
                                    </div>
                                </div>

                                <div className={style.stacksName}>
                                    <span>React</span>
                                    <span>Javascript</span>
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                    <span>Python</span>
                                    <span>FastAPI</span>
                                    <span>PostgreSQL</span>
                                </div>

                            </div>

                            <div className={style.Links}>
                                <span>Links</span>
                                <div>
                                    <a href="https://user-login-ocar.onrender.com/" target='_blank'>
                                        <div>
                                            <BsBoxArrowUpRight />
                                        </div>
                                        <span>
                                            Live Demo
                                        </span>
                                    </a>
                                    
                                    <a href="https://github.com/supasreymark-dev/First-Web-Project" target='_blank'>
                                        <div>
                                            <FaGithub /> 
                                        </div>
                                        <span>
                                            Source Code
                                        </span>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className={style.projects}>
                        <span>Security Event Monitoring and Detection Simulation</span>
                        <div className={style.Card}>
                            <div className={style.overlay}>
                                <img src={SDBss} alt="Security Monitoring Dashboard" />
                            </div>
                            <p>
                                A security monitoring system intended to simulate the
                                Security Information and Event Management (SIEM) that I embed to
                                the Full-Stack User Management project to monitor users event. I include some features
                                that simulate the real SIEM system such as, recording total events, recording 
                                total failed logins accross many users, counting suspicious IP addresses 
                                that attempt to DoS or DDoS attack the login dashboard, and counting 
                                critical alerts for IPs that being flagged as critical. It also have 
                                a separate table for displaying all IPs that make an event to the login dashboard including
                                their attempts(before successfully logging in) and severity(IPs level of alerts based on login 
                                failed attempt of the specific IP)
                            </p>

                            <div className={style.stacks}>
                                <span>Tech Stacks</span>
                                <div className={style.stacksLogo}>
                                    <div>
                                        <IoLogoJavascript className={style.jsLogo}/>
                                    </div>
                                    <div>
                                        <FaHtml5 className={style.htmlLogo}/>
                                    </div>
                                    <div>    
                                        <IoLogoCss3 className={style.cssLogo}/>
                                    </div>
                                    <div>
                                        <img src={python} alt="Python Logo" />
                                    </div>
                                    <div>
                                        <SiFastapi color='#009688'/>
                                    </div>
                                    <div>
                                        {/* <SiPostgresql className={style.PGlogo}/> */}
                                        {/* <DiPostgresql className={style.PGlogo}/> */}
                                        <BiLogoPostgresql color='#4169E1' className={style.PGlogo}/>
                                    </div>
                                </div>

                                <div className={style.stacksName}>
                                    <span>Javascript</span>
                                    <span>HTML5</span>
                                    <span>CSS3</span>
                                    <span>Python</span>
                                    <span>FastAPI</span>
                                    <span>PostgreSQL</span>
                                </div>
                            </div>

                            <div className={style.Links}>
                                <span>Links</span>
                                <div>
                                    <a href="https://admin-5ghb.onrender.com/" target='_blank'>
                                        <div>
                                            <BsBoxArrowUpRight />
                                        </div>
                                        <span>
                                            Live Demo
                                        </span>
                                    </a>
                                    
                                    <a href="https://github.com/supasreymark-dev/First-Web-Project/tree/main/frontEnd" target='_blank'>
                                        <div>
                                            <FaGithub /> 
                                        </div>
                                        <span>
                                            Source Code
                                        </span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={style.projects}>
                        {/* <span>Linkin Park</span> */}
                    </div>

                </div>

            </div>
        </main>
    );
}

export default Projects