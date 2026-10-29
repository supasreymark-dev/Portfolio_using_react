import style from './Projects.module.css';
import portfolio2 from './../../assets/Portfolio2.png';
import fullstackWeb from './../../assets/fullstackWeb.png'
import python from './../../../public/python.svg';
import { FaReact, FaHtml5, FaGithub, FaGlobe } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { BsBoxArrowUpRight } from "react-icons/bs";

function Projects(){

    return(
        <main className={style.wrapper}>
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
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className={style.projects}>
                        <span>Security Event Monitoring and Detection Simulation</span>
                    </div>

                </div>

            </div>
        </main>
    );
}

export default Projects