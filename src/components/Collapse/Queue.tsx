import React, { useContext, useState, useEffect } from 'react';

import { flipMode, emojiWave } from '@/types/globals';
import { parseBlockColor, parseBlockType, BlockType } from './CollapseData';

import styles from './styles/Queue.module.css';
import classNames from 'classnames/bind';

import { ModeContext } from '@/types/globals';
import { Grid } from './CollapseData';

let cx = classNames.bind(styles);

const Queue = (props:{
        game: Grid;
        period: number
    }
) => {
    const [visible, setVisible] = useState<number>(0);
    const intervalRef = React.useRef<NodeJS.Timeout>();

    useEffect(() => {
            intervalRef.current = setInterval(() => {
                if (!props.game.paused && !props.game.gameOver) {
                    setVisible((visible + 1) % (props.game.width + 1));
                    if (visible == props.game.width) {
                        if (props.game.pushQueue() == undefined) {
                            props.game.playSound(props.game.next_line);
                        }
                        props.game.didUpdate();
                    }
                    else {
                        props.game.playSound(props.game.next_block);
                    }
                }
            }, props.period);

        return () => clearInterval(intervalRef.current);
    }, [visible]);

    const mode = useContext(ModeContext);

    function advance() {
        if (props.game.pushQueue() == undefined) {
            props.game.playSound(props.game.next_line);
        }
        props.game.didUpdate();
        setVisible(0);
    }

    function preview() {
        const colStyle = {
            width: `calc(100% / ${props.game.width})`
        } as React.CSSProperties

        let emptyArr = Array.from({length: props.game.width}, (x, i) => i);
        return emptyArr.map((x:any, i:number) => {
            const block = props.game.queue.get([i]);
            const color = parseBlockColor(block);
            const style = {
                backgroundColor: color != 'none' ?  `var(--${color})` : `var(--${flipMode(mode)}-entry)`
            }
            return (
                <div className={styles.column} style={colStyle} key={i}>
                    {i < visible ? (
                        <div className={styles.segment} style={style}>
                            {parseBlockType(block)}
                        </div>
                    ) : null}
                </div>
            )
        })
    }

    return (
        <div className={styles.container} onClick={advance}>
            {preview()}
        </div>
    );
}

export default Queue;