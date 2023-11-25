import React, { useState, useEffect } from 'react';

import styles from './styles/ArticleBlock.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles)

function flipMode(mode: Mode) {
    return mode == 'light' ? 'dark' : 'light';
}

const ArticleBlock = (props:{
        mode: Mode,
        color: DavidColor,

        head: string,
        detail: string,
        metadata: string
    }
) => {
    const barStyle = {
        backgroundColor: props.color != 'none' ? `var(--${props.color})` : `var(--${flipMode(props.mode)}-entry)`
    }

    const style = {
        backgroundColor: `var(--${props.mode}-entry)`,
        border: props.mode == 'light' ? `0px solid var(--${props.color != 'none' ? props.color : 'dark-entry'})` : ``
    }

    const hStyle = {
        color: `var(--${props.mode}-primary)`
    } as React.CSSProperties
    
    const pStyle = {
        color: `var(--${props.mode}-secondary)`
    } as React.CSSProperties

    return (
        <div className={styles.container} style={style}>
            <div className={styles.colorBar} style={barStyle}></div>
            <div className={styles.textContainer}>
                <h1 className={styles.h1} style={hStyle}>{props.head}</h1>
                <p className={styles.p} style={pStyle}>{props.detail}</p>
                <p className={styles.p2} style={pStyle}>{props.metadata}</p>
            </div>
        </div>
    );
}

export default ArticleBlock;