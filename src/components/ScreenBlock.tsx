import React, { useState, useEffect } from 'react';

import styles from './styles/ScreenBlock.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles)

const ScreenBlock = (props:{
        mode: Mode,
        children?: any
    }
) => {
    const style = {
        backgroundColor: props.mode == 'light' ? `var(--light-code-bg)` : `var(--dark-theme)`,
        color: `var(--${props.mode}-primary)`
    } as React.CSSProperties;

    return (
        <div className={styles.container} style={style}>{props.children}</div>
    );
}

export default ScreenBlock;