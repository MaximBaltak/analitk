import React from 'react';
import styles from './Content.module.scss'
import Header from "./Header/Header";
import Filter from "./Filter/Filter";
import MainContent from "./MainContent/MainContent";
const Content = () => {
    return (
        <div className={styles.content}>
            <Header/>
            <Filter/>
            <MainContent/>
        </div>
    );
};

export default Content;