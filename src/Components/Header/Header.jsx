import style from './Header.module.css';
import { IoPersonCircleOutline, IoMenu } from 'react-icons/io5';
import { useState, useRef, useEffect } from 'react';



function showMenu(){
    alert("Hello world");
}

function Header({homeRef, aboutRef, projectRef, skillRef, contactRef}){

    const menuRef = useRef(null);
    const showRed = useRef(null);
    const [active, setActive] = useState(false);

    function toggleRed(){
        showRed.current.classList.toggle("red");
    }

    function showActive(){
        setActive(!active);
    }

    function home(){
        console.log("home");
        setActive(false);
    }
    function about(){
        console.log("about");
        setActive(false);
    }
    function skills(){
        console.log("skills");
        setActive(false);
    }
    function projects(){
        console.log("projects");
        setActive(false);
    }
    function contact(){
        console.log("contact");
        setActive(false);
    }

    useEffect(() => {
        function handleClickOutside(event){
            if(menuRef.current && !menuRef.current.contains(event.target)){
                setActive(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);


    function scrollIntoSection(ref){
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    return(
        <main className={style.header}>

            <div className={style.wrapper}>

                <div className={style.profile}>
                    <IoPersonCircleOutline className={style.icon}/>
                    <span className={style.name}>REYMARK NAWAGAS SUPAS</span>
                </div>

                <div className={style.desktopView} ref={menuRef}>
                    <button className={ style.menuBtn} onClick={showActive}><IoMenu/></button>

                    <div className={`${style.buttons} ${active ? style.isActive : ""}`}>
                        <button onClick={() => {home(), scrollIntoSection(homeRef)}}>Home</button>
                        <hr />
                        <button onClick={() => {about(), scrollIntoSection(aboutRef)}}>About</button>
                        <hr />
                        <button onClick={() => {projects(), scrollIntoSection(projectRef)}}>Projects</button>
                        <hr />
                        <button onClick={() => {skills(), scrollIntoSection(skillRef)}}>Skills</button>
                        <hr />
                        <button onClick={() => {contact(), scrollIntoSection(contactRef)}}>Contact</button>
                    </div>
                </div>

            </div>

        </main>
    );
}

export default Header