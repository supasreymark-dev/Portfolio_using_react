import style from './Contact.module.css';
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFacebookMessenger } from "react-icons/fa";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiMessageSquareDetail } from "react-icons/bi";


function Contact(){

    return(
        <main className={style.wrapper} id='contact'>
            <div className={style.contactContainer}>
                <div className={style.contactHeader}>
                    <h2>Contact me</h2>
                </div>

                <div className={style.contactContent}>
                    <div className={style.container}>

                        <div>
                            <a href="mailto:supasreymark@gmail.com" target='_blank'>
                                <MdOutlineEmail />
                                <span>Email</span>
                            </a>
                        </div>

                        <div>
                            <a href="https://www.linkedin.com/in/reymark-supas-550a1232b/" target='_blank'>
                                <FaLinkedin />
                                <span>LinkedIn</span>
                            </a>
                        </div>

                        <div>
                            <a href="https://github.com/supasreymark-dev" target='_blank'>
                                <FaGithub />
                                <span>GitHub</span>
                            </a>
                        </div>

                        <div>
                            <a href="https://m.me/reymark.nawagas" target='_blank'>
                                <FaFacebookMessenger />
                                <span>Messenger</span>
                            </a>
                        </div>

                        <div>
                            <a href="tel:09308528018" target='_blank'>
                                <BsFillTelephoneFill /> 
                                <span>0930 852 8018</span>
                            </a>
                        </div>
                    </div>

                    <div className={style.sendMessage}>
                        <p>Or send me a message directly:</p>
                        <a href="#" target='_blank'><BiMessageSquareDetail /></a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact