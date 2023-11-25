import React, { useState, useEffect } from 'react';

import styles from './styles/Intro.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles)

const Intro = (props:{
        mode: Mode
    }
) => {
    const hStyle = {
        color: `var(--${props.mode}-primary)`
    } as React.CSSProperties
    
    const pStyle = {
        color: `var(--${props.mode}-secondary)`
    } as React.CSSProperties

    return (
        <div className={styles.container}>
            <h1 className={styles.h1} style={hStyle}>Personal Website</h1>
            <p className={styles.p} style={pStyle}>Welcome to demo of hugo&apos;'s theme PaperMod.<br></br><strong>PaperMod</strong> is 
            a simple but fast and responsive theme with useful feature-set that enhances UX.<br></br>Do give a 👍
            on Github!<br></br> PaperMod is based on theme <strong>Paper</strong>.</p>
        </div>
    );
}

export default Intro;