import RNS from './../../assets/Reymark2.jpg';
import style from './Home.module.css';
import { FaArrowDown } from "react-icons/fa";


function Home(){

    return(
        <main className={style.home}>
            <div className={style.headerGap}>

            </div>

            <div className={style.homeContent}>
                <div className={style.imgContainer}>
                    <img src={RNS} alt="DevProfile"/>
                </div>

                <div className={style.introContainer}>
                    <div className={style.textContainer}>
                        <h2>Hi, I'm Reymark.</h2>
                        <p>A computer engineering student passionate about embedded
                            systems and software development, and aspiring to become
                            a cybersecurity engineer.
                        </p>
                    </div>
                </div>
            </div>

            <span>
                Explore my work
                <FaArrowDown className={style.arrowIcon}/> 
            </span>
        </main>
    );
}


export default Home