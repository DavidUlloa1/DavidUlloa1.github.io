import React, { useState, useEffect } from 'react';

import styles from './styles/LightningButton.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles)

const LightningButton = (props:{
        mode: Mode,
        setMode: any
    }
) => {
    const [hover, setHover] = useState(false);

    let hoverStyle = cx({
        'container': true,
        'hover': hover,
    })

    function toggleHover(value: boolean) {
        return function() {
            setHover(value);
        }
    }

    function switchMode() {
        props.setMode(props.mode == 'light' ? 'dark' : 'light');
    }

    function display() {
        if (props.mode == 'light') {
            return (
                <svg id="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke={`var(--light-primary)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={switchMode}>
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            )
        }
        else if (props.mode == 'dark') {
            return (
                <svg id="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke={`var(--dark-primary)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={switchMode}>
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
            )
        }
    }
    const style = {
        color: `var(--${props.mode}-primary)`
    } as React.CSSProperties

    return (
        <div className={hoverStyle} style={style} onMouseEnter={toggleHover(true)} onMouseLeave={toggleHover(false)}>
            {display()}
        </div>
    );
}

export default LightningButton;