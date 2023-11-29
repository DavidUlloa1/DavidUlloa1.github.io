import React, { useState } from 'react';

import Link from 'next/link'

import styles from './styles/NavButton.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles)

const NavButton = (props:{
        text: string,
        a: string
    }
) => {
    const [hover, setHover] = useState(false);

    let style = cx({
        'container': true,
        'hover': hover,
    })

    function toggleHover(value: boolean) {
        return function() {
            setHover(value);
        }
    }

    return (
        <Link href={props.a}>
            <div className={style} onMouseEnter={toggleHover(true)} onMouseLeave={toggleHover(false)}>
                {props.text}
            </div>
        </Link>
    );
}

export default NavButton;