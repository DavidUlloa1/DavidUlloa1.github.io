import React, { useState, useEffect, useContext, useRef } from 'react';
// import useSound from 'use-sound'

import { emojiWave } from '@/types/globals';
import { BlockType, Color, Block, Blocks } from './CollapseData';
import { ModeContext } from '@/types/globals';

import styles from './styles/Collapse.module.css';
import classNames from 'classnames/bind';

import { Grid } from './CollapseData';
import Queue from './Queue';
import Controls from './Controls';

import { Matrix, sec, sqrt } from 'mathjs';
const math = require('mathjs');

import classic from '@/../public/collapse/classic.mp3';
import block_fall from '@/../public/collapse/block_fall.ogg';
import hit_good from '@/../public/collapse/hit_good.ogg';
import hit_bad from '@/../public/collapse/hit_bad.ogg';
import blocks_near_top from '@/../public/collapse/blocks_near_top.ogg'
import trophy_earned from '@/../public/collapse/trophy_earned.ogg'
import next_block from '@/../public/collapse/next_block.ogg'
import next_line from '@/../public/collapse/next_line.ogg'
import bomb_explode from '@/../public/collapse/bomb_explode.ogg'
import row_bomb from '@/../public/collapse/row_bomb.ogg'
import coin_earned from '@/../public/collapse/coin_earned.ogg'
import switcher from '@/../public/collapse/switcher.ogg'
import you_lose from '@/../public/collapse/you_lose.ogg'

let cx = classNames.bind(styles);

const game = new Grid(12, 15, null);
game.layer(5);

const Collapse = (props:{

    }
) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);
    const [state, setState] = useState<number>(0);
    const [showStartButton, setShowStartButton] = useState<boolean>(false);
    const [gameOverStall, setGameOverStall] = useState<boolean>(false);
    const mode = useContext(ModeContext);
    
    // [game.classic] = useSound(classic);
    game.classic = useRef<HTMLAudioElement | undefined>(typeof Audio !== "undefined" ? new Audio(classic) : undefined);
    game.block_fall = useRef<HTMLAudioElement | undefined>(typeof Audio !== "undefined" ? new Audio(block_fall) : undefined);
    game.hit_good = useRef<HTMLAudioElement | undefined>(typeof Audio !== "undefined" ? new Audio(hit_good) : undefined);
    game.hit_bad = useRef<HTMLAudioElement | undefined>(typeof Audio !== "undefined" ? new Audio(hit_bad) : undefined);
    game.blocks_near_top = useRef<HTMLAudioElement | undefined>(typeof Audio !== "undefined" ? new Audio(blocks_near_top) : undefined);
    game.trophy_earned = useRef<HTMLAudioElement | undefined>(typeof Audio !== "undefined" ? new Audio(trophy_earned) : undefined);
    game.next_block = useRef<HTMLAudioElement | undefined>(typeof Audio !== "undefined" ? new Audio(next_block) : undefined);
    game.next_line = useRef<HTMLAudioElement | undefined>(typeof Audio !== "undefined" ? new Audio(next_line) : undefined);
    game.bomb_explode = useRef<HTMLAudioElement | undefined>(typeof Audio !== "undefined" ? new Audio(bomb_explode) : undefined);
    game.row_bomb = useRef<HTMLAudioElement | undefined>(typeof Audio !== "undefined" ? new Audio(row_bomb) : undefined);
    game.coin_earned = useRef<HTMLAudioElement | undefined>(typeof Audio !== "undefined" ? new Audio(coin_earned) : undefined);
    game.switcher = useRef<HTMLAudioElement | undefined>(typeof Audio !== "undefined" ? new Audio(switcher) : undefined);
    game.you_lose = useRef<HTMLAudioElement | undefined>(typeof Audio !== "undefined" ? new Audio(you_lose) : undefined);

    useEffect(() => {
        setIsMounted(true);
        setTimeout(() => {
            setShowStartButton(true);
        }, 5000);
    }, []);

    if (!isMounted) {
        return null;
    }

    game.updateFunc = setState;

    function unpause() {
        if (game.paused) {
            game.paused = false;
            game.playSound(game.classic, true);
            game.didUpdate();
        }
    }
    
    function reset() {
        if (gameOverStall) {
            setGameOverStall(false);
            game.reset();
        }
        else {
            setTimeout(() => {
                setGameOverStall(true);
            }, 5000);
        }
    }

    function screen() {
        if (game.paused) {
            return (
                <div className={styles.screen} onClick={unpause}>
                    <h1>Paused</h1>
                    <p className={styles.p}>Click to resume</p>
                </div>
            )
        }
        else if (game.gameOver) {
            return (
                <div className={styles.screen} onClick={reset}>
                    <h1>Game Over!</h1>
                    {gameOverStall ? <p className={styles.p}>Click to restart</p> : null}
                </div>
            )
        }
    }

    const pointerEvent = {
        pointerEvents: `${game.paused || game.gameOver ? "none" : "all"}`,
    } as React.CSSProperties;

    function arrival() {
        const style = {
            backgroundColor: `var(--${mode}-entry)`,
            color: `var(--${mode}-primary)`
        } as React.CSSProperties;

        return (
            <div className={styles.flavor}>
                <h1>Hello, internet traveler</h1><br></br>
                <p color={`var(--${mode}-secondary)`}>Welcome to my little corner of the internet.</p><br></br><br></br>
                {showStartButton ? (
                    <div className={styles.startButton} style={style} onClick={() => setActive(true)}>
                        <h2>Start</h2>
                    </div>
                ) : null}
            </div>
        )
    }

    function main() {
        return (
            <div className={styles.outerContainer}>
                {screen()}
                <div className={styles.container} style={pointerEvent}>
                    <audio preload="auto"></audio>
                    <div className={styles.top}></div>
                    <div className={styles.innerContainer}>
                        {game.active ? game.visualize() : null}
                    </div>
                    <Queue game={game} period={game.period} />
                    <Controls game={game} levelTimer={4} />
                </div>
            </div>
        )
    }


    return (
        <>{active ? main() : arrival()}</>
    );
}

export default Collapse;