import React from 'react';
import styles from './Header.module.scss'
import Input from "../../Input/Input";
const Header = () => {
    return (
        <div className={styles.header}>
            <Input placeholder='Поиск...'/>
            <div className={styles.header_info}>
                <p className={styles.header_info_name}>Петров В. А.</p>
                <div className={styles.header_info_logo}>В.А.</div>
            </div>
        </div>
    );
};

export default Header;