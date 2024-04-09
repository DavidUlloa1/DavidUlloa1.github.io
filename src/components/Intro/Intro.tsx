import React, { useState, useEffect } from 'react';

import { emojiWave } from '@/types/globals';

import styles from './Intro.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles)

const Intro = (props:{
        mode: Mode
    }
) => {
    const hStyle = {
        color: `var(--${props.mode}-primary)`,
        paddingTop: '20vh',
        textAlign: 'center'
    } as React.CSSProperties
    
    const pStyle = {
        color: `var(--${props.mode}-secondary)`
    } as React.CSSProperties

    return (
        <div className={styles.container}>
            {/* <h1 className={styles.h1} style={hStyle}>Personal Website</h1> */}
            {/* <p className={styles.p} style={pStyle}>
                Hello. Welcome to David's personal website.<br></br>
                There is nothing on here <strong>yet</strong> but hopefully I will use this in the future to house recruiter info and random things I do.<br></br>
                Currently I just have set up the main structure of the site and the basic theme. Feel free to look around, I hear there might be some <em>secrets</em> hidden.<br></br>
                Let me know if anything explodes. <span className={styles.emoji} onMouseDown={() => emojiWave('👍')}>👍</span></p> */}
            <h1 style={hStyle}>Landing Page <span className={styles.emoji} onMouseDown={() => emojiWave('🚀')}>🚀</span></h1>
        </div>
    );
}

export default Intro;