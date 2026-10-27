import style from './Header.module.css';
import { IoPersonCircleOutline, IoMenu } from 'react-icons/io5';
import { useState, useRef, useEffect } from 'react';



function showMenu(){
    alert("Hello world");
}

function Header(){

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
        setActive(!active);
    }
    function about(){
        console.log("about");
        setActive(!active);
    }
    function skills(){
        console.log("skills");
        setActive(!active);
    }
    function projects(){
        console.log("projects");
        setActive(!active);
    }
    function contact(){
        console.log("contact");
        setActive(!active);
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
                        <button onClick={home}>Home</button>
                        <hr />
                        <button onClick={about}>About</button>
                        <hr />
                        <button onClick={projects}>Projects</button>
                        <hr />
                        <button onClick={skills}>Skills</button>
                        <hr />
                        <button onClick={contact}>Contact</button>
                    </div>
                </div>

            </div>

        </main>
    );
}

export default Header