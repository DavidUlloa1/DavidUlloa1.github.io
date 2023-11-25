import React, { useState, useEffect } from 'react';

import styles from './styles/Footer.module.css'
import classNames from 'classnames/bind';

let cx = classNames.bind(styles)

const Footer = (props:{
        mode: Mode,
        text?: any
    }
) => {
    const style = {
        color: `var(--${props.mode}-secondary)`
    } as React.CSSProperties;
    
    return (
        <div className={styles.container} style={style}>{props.text}</div>
    );
}

export default Footer;