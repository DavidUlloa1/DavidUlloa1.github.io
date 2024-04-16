import React, { useContext, useState, useEffect } from 'react';

import { flipMode, emojiWave } from '@/types/globals';
import { pausedIcon, mutedIcon, IntervalTimer } from './CollapseData';

import styles from './styles/Controls.module.css';
import classNames from 'classnames/bind';

import { ModeContext } from '@/types/globals';
import { Grid } from './Collapse';

let cx = classNames.bind(styles);

const Controls = (props:{
        game: Grid;
        levelTimer: number;
    }
) => {
    const [level, setLevel] = useState<number>(1);
    const [muted, setMuted] = useState<boolean>(false);
    const [paused, setPaused] = useState<boolean>(props.game.paused);
    const [secsPassed, setSecsPassed] = useState<number>(0);

    const mode = useContext(ModeContext);

    const intervalRef = React.useRef<NodeJS.Timeout>();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (!props.game.paused && !props.game.gameOver) {
                if (secsPassed == props.levelTimer - 1) {
                    setLevel(++props.game.level);
                    props.game.period -= 24;
                }
                setSecsPassed((secsPassed + 1) % props.levelTimer);
            }
            else if (props.game.gameOver) {
                setSecsPassed(0);
            }
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, [secsPassed, level]);

    function muteToggle() {
        setMuted(!muted);
        props.game.muted = muted;
        if (!props.game.muted) {
            props.game.playSound(props.game.classic, true);
        }
        else {
            props.game.classic.current!.pause();
        }
    }

    function pausedToggle() {
        props.game.paused = !props.game.paused;
        if (props.game.paused) {
            props.game.classic.current!.pause();
        }
        props.game.didUpdate();
        setPaused(props.game.paused);
    }

    return (
        <div className={styles.container}>
            <div className={styles.textLeft}>Level: {props.game.level}</div>
            <div className={styles.console}>
                <div className={styles.icon} onClick={muteToggle}>{mutedIcon(muted, mode)}</div>
                <div id="pause" className={styles.icon} onClick={pausedToggle}>{pausedIcon(props.game.paused, mode)}</div>
            </div>
            <div className={styles.textRight}>{props.game.blocksTotal} blocks</div>
        </div>
    );
}

export default Controls;