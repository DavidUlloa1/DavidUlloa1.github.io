import React, { useState, useEffect } from 'react';

import styles from './styles/Header.module.css';
import classNames from 'classnames/bind';

import LightningButton from './LightningButton';

let cx = classNames.bind(styles)

const Header = (props:{
        text: string,
        mode: Mode,
        setMode: any,
        children?: any
    }
) => {
    const style = {
        color: `var(--${props.mode}-primary)`
    } as React.CSSProperties

    return (
        <div className={styles.container} style={style}>
            <div className={styles.headerText}>
                <div>{props.text}</div>
                <LightningButton mode={props.mode} setMode={props.setMode} />
            </div>
            <div className={styles.navContainer}>
                {props.children}
            </div>
        </div>
    );
}

export default Header;