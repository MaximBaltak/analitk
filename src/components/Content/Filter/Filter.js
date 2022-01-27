import React, {useState} from 'react';
import styles from './Filter.module.scss'
import icon from './../../../img/open.svg'
import Input from "../../Input/Input";
import {useTransition, animated} from "react-spring";
const Filter = () => {
    const [open, setOpen]=useState(false)
    const ani= useTransition(open,{
        from:{opacity:0,},
        enter:{opacity:1},
        leave:{opacity:0},
        config:{duration:100},
        reset:true,
    })
    return (
        <div className={styles.filterBlock}>
            <div className={styles.filterBlock_wraapper}>
                <h2 className={styles.filterBlock_wraapper_title}>FILTER BLOCK</h2>
                <button onClick={()=>setOpen(prev=>!prev)} className={styles.filterBlock_wraapper_button}>
                    <img src={icon} alt="button"/>
                </button>
            </div>
            {ani((style,open)=>
            open ? <animated.div style={style} className={styles.filter}>
                            <Input placeholder='Дата от'/>
                            <Input placeholder='Дата до'/>
                            <Input placeholder='Дата от'/>
                            <Input placeholder='Дата до'/>
                            <Input placeholder='Имя клиента'/>
                            <Input placeholder='Телефон'/>
                            <Input placeholder='Имя клиента'/>
                            <Input placeholder='Телефон'/>
                        </animated.div> :null
            )}
        </div>
    );
};

export default Filter;