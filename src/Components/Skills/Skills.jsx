import style from './Skills.module.css';

function Skills(){

    return (
        <main className={style.wrapper} id='skills'>
            <div className={style.container}>
                <div className={style.skillsHeader}>
                    <h2>Skills</h2>
                </div>

                <div className={style.skillsDetail}>
                    <div className={style.technicalSkillsHeader}>
                        <h3>Technical Skills</h3>
                    </div>

                    <div className={style.skillsWrapper}>
                        <div className={style.skillsDiv}>
                            <h3>Programming Languages</h3>
                            <span>Python</span>
                            <span>JavaScript</span>
                            <span>Basic C++</span>
                        </div>
                    
                        <div className={style.skillsDiv}>
                            <h3>Frontend Development</h3>
                            <span>JavaScript</span>
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>React</span>
                        </div>

                        <div className={style.skillsDiv}>
                            <h3>Backend Development</h3>
                            <span>Python</span>
                            <span>FastAPI</span>
                            <span>SQLAlchemy</span>
                        </div>

                        <div className={style.skillsDiv}>
                            <h3>Database</h3>
                            <span>PostgreSQL</span>
                        </div>
                        
                        <div className={style.skillsDiv}>
                            <h3>Computer Hardware</h3>
                            <span>Computer TroubleShooting</span>
                        </div>

                        <div className={style.skillsDiv}>
                            <h3>Electronics</h3>
                            <span>Basic Electronics</span>
                            <span>Microcontroller Programming</span>
                            <span>Logic Gates</span>
                        </div>
                    
                    </div>

                </div>

                <div className={style.skillsDetail}>
                    <div className={style.softSkillsHeader}>
                        <h3>Soft Skills</h3>
                    </div>

                    <div className={style.skillsWrapper}>
                        <div className={style.skillsDiv}>
                            <h3>Problem-Solving</h3>

                        </div>

                        <div className={style.skillsDiv}>
                            <h3>Written Communication</h3>
                        </div>

                        <div className={style.skillsDiv}>
                            <h3>Adaptability</h3>
                        </div>

                        <div className={style.skillsDiv}>
                            <h3>Teamwork</h3>
                        </div>

                        <div className={style.skillsDiv}>
                            <h3>Critical Thinking</h3>
                        </div>

                        <div className={style.skillsDiv}>
                            <h3>Continuous Learning</h3>
                        </div>
                    </div>
                </div>

            </div>

        </main>
    );
}

export default Skills