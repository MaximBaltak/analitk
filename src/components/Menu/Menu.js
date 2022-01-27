import React, {useEffect, useState} from 'react';
import styles from './Menu.module.scss'
import {animated, useSpring} from "react-spring";
const Menu = () => {
    const [focus,setFocus]=useState()
    const [tablet,setTablet]=useState()
    useEffect(()=>{
        setInterval(()=>{
            if(window.innerWidth<769){
                setTablet(true)
            }else {
                setTablet(false)
            }
        },100)
    },[])
    const ani=useSpring({
        to:{
            width:focus?`${300}px`:`${80}px`
        },
        config:{duration:100}
    })
    const aniFont=useSpring({
        to:{
            opacity:focus?1:0
        },
        config:{duration:100},

    })
    return (
        !tablet?  <animated.div style={ani} onMouseOver={()=>setFocus(prev=>!prev)} onMouseOut={()=>setFocus(prev=>!prev)}  className={styles.menu}>
            <div className={styles.menu_wrapper}>
                <div className={styles.menu_wrapper_logo}>LOGO</div>
                <animated.h1 style={aniFont} className={styles.menu_wrapper_title}>NAME COMPANY</animated.h1>
            </div>
            <ul className={styles.menu_list}>
                <li className={styles.menu_list_el}>
                    <div className={styles.menu_list_el_logo}>LOGO</div>
                    <animated.p  style={aniFont} className={styles.menu_list_el_title}>Главная</animated.p>
                </li>
                <li className={styles.menu_list_el}>
                    <div className={styles.menu_list_el_logo}>LOGO</div>
                    <animated.p  style={aniFont} className={styles.menu_list_el_title}>Клиенты</animated.p>
                </li>
                <li className={styles.menu_list_el}>
                    <div className={styles.menu_list_el_logo}>LOGO</div>
                    <animated.p  style={aniFont} className={styles.menu_list_el_title}>Сотрудники</animated.p>
                </li>
                <li className={styles.menu_list_el}>
                    <div className={styles.menu_list_el_logo}>LOGO</div>
                    <animated.p  style={aniFont} className={styles.menu_list_el_title}>Аналитика</animated.p>
                </li>
            </ul>
        </animated.div>:
            <div   className={styles.menu}>
                <div className={styles.menu_wrapper}>
                    <div className={styles.menu_wrapper_logo}>LOGO</div>
                    <h1 className={styles.menu_wrapper_title}>NAME COMPANY</h1>
                </div>
                <ul className={styles.menu_list}>
                    <li className={styles.menu_list_el}>
                        <div className={styles.menu_list_el_logo}>LOGO</div>
                        <p  className={styles.menu_list_el_title}>Главная</p>
                    </li>
                    <li className={styles.menu_list_el}>
                        <div className={styles.menu_list_el_logo}>LOGO</div>
                        <p  className={styles.menu_list_el_title}>Клиенты</p>
                    </li>
                    <li className={styles.menu_list_el}>
                        <div className={styles.menu_list_el_logo}>LOGO</div>
                        <p  className={styles.menu_list_el_title}>Сотрудники</p>
                    </li>
                    <li className={styles.menu_list_el}>
                        <div className={styles.menu_list_el_logo}>LOGO</div>
                        <p  className={styles.menu_list_el_title}>Аналитика</p>
                    </li>
                </ul>
            </div>
    );
};

export default Menu;