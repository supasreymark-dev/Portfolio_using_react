import style from './Projects.module.css';
import portfolio2 from './../../assets/Portfolio2.png';

function Projects(){

    return(
        <main className={style.wrapper}>
            <div className={style.projectsContainer}>
                <div className={style.projectHeader}>
                    <h2>Projects</h2>
                </div>

                <div className={style.container}>
                    <div className={style.portfolio2}>
                        <span>My first portfolio</span>
                        <div className={style.firstCard}>
                            <img src={portfolio2} alt="Screenshot of portfolio2" />
                            <p>

                            </p>
                        </div>
                    </div>

                    <div>
                        <span>My second portfolio</span>
                    </div>

                    <div>
                        <span>Simple CRUD Website</span>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Projects