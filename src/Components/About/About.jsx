import style from './About.module.css';


function About(){

    return(
        <main className={style.wrapper}>
            <div className={style.container}>
                <div className={style.aboutHeader}>
                    <h2>About me</h2>
                </div>

                <div className={style.aboutParagraph}>
                    <p>I'm a fourth-year engineering student with a 
                        passion for embedded systems, electronics, 
                        and software development. I have hands-on 
                        experience with microcontrollers and hardware 
                        troubleshooting, along with developing applications 
                        using technologies such as 
                        React, JavaScript, Python, and FastAPI, I also have a basic knowledge 
                        in C++ programming language. As I 
                        continue to expand my technical knowledge, I'm also 
                        pursuing my interest in cybersecurity, with the goal 
                        of becoming a security engineer.</p>
                </div>
            </div>
        </main>
    );
}

export default About