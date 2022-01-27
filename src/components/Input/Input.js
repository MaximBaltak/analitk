import React from 'react';
import styles from './Input.module.scss'
const Input = ({placeholder}) => <input className={styles.input} type="text" placeholder={placeholder}/>;

export default Input;