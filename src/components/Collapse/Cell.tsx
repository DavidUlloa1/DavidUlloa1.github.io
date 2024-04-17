import React, { useContext } from 'react';

import { flipMode } from '@/types/globals';
import { parseBlockColor, Block, parseBlockType } from './CollapseData';

import styles from './styles/Cell.module.css';
import classNames from 'classnames/bind';

import { ModeContext } from '@/types/globals';

let cx = classNames.bind(styles);

const Cell = (props:{
        pos: [number, number];
        block: Block;
        game: any;
    }
) => {
    const mode = useContext(ModeContext);
    const color = parseBlockColor(props.block);

    const style = {
        backgroundColor: color != 'none' ?  `var(--${color})` : `var(--${flipMode(mode)}-entry)`
    }

    return (
        <div className={styles.container} onMouseDown={() => props.game.clear(props.pos[0], props.pos[1])}>
            <div className={styles.visible} style={style}>
                {parseBlockType(props.block)}
            </div>
        </div>
    );
}

export default Cell;