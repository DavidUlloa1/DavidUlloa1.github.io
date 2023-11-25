import React, { useState, useEffect } from 'react';

import styles from './styles/Button.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles)

const Button = (props:{
        primaryColor: string,
        secondaryColor?: string,
        height?: string,
        width?: string
        primary: boolean
    }
) => {
    const secondaryColor = props.secondaryColor ? props.secondaryColor : 'white';

    const style = {
        height: `${props.height ? props.height : "100px"}`,
        width: `${props.width ? props.width : "100px"}`,
        color: `var(--${props.primary ? secondaryColor : props.primaryColor})`,
        backgroundColor: `var(--${props.primary ? props.primaryColor : secondaryColor})`,
        border: `${props.primary ? `none` : `2px solid var(--${props.primaryColor})`}`
    } as React.CSSProperties;

    return (
        <div className={styles.container} style={style}>asdfdsQ</div>
    );
}

export default Button;