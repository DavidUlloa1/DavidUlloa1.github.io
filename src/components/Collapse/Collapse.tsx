import React, { useState, useEffect, useContext, useRef } from 'react';
// import useSound from 'use-sound'

import { emojiWave } from '@/types/globals';
import { BlockType, Color, Block, Blocks } from './CollapseData';
import { ModeContext } from '@/types/globals';

import styles from './styles/Collapse.module.css';
import classNames from 'classnames/bind';

import Cell from './Cell';
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

export class Grid {
    public width: number;
    public height: number;
    public grid: Matrix;
    public queue: Matrix;

    private normals: any[];
    private specials: any[];

    private state: number;
    public updateFunc: any;
    public level: number;
    public period: number;
    public blocksTotal: number;

    public muted: boolean;
    public classic: any;
    public block_fall: any;
    public hit_good: any;
    public hit_bad: any;
    public blocks_near_top: any;
    public trophy_earned: any;
    public next_block: any;
    public next_line: any;
    public bomb_explode: any;
    public row_bomb: any;
    public coin_earned: any;
    public switcher: any;
    public you_lose: any;

    public paused: boolean;
    public active: boolean;
    public stunned: boolean;
    public gameOver: boolean;

    constructor(width: number, height: number, updateFunc: any) {
        this.width = width;
        this.height = height;
        this.normals = [Blocks.RED, Blocks.BLUE, Blocks.GREEN, Blocks.WHITE];
        this.specials = [Blocks.RED_BOMB, Blocks.BLUE_BOMB, Blocks.GREEN_BOMB, Blocks.WHITE_BOMB,
            Blocks.SUPER_BOMB, Blocks.RC_BOMB, Blocks.BLOCKER, Blocks.ROW_BOMB, Blocks.SCRAMBLER];
        this.updateFunc = updateFunc;

        this.grid = math.zeros(this.width, this.height);
        this.queue = math.zeros(this.width);
        this.state = 0;
        this.level = 1;
        this.period = 1000;
        this.blocksTotal = 0;

        this.muted = true;
        this.paused = false;
        this.active = true;
        this.stunned = false;
        this.gameOver = false;
    }

    public pushQueue(): boolean | undefined {
        for (let i = 0; i < this.width; i++) {
            if (this.grid.get([i, this.height-1]) != 0) {
                this.endGame();
                return true;
            }
        }

        for (let i = 0; i < this.width; i++) {
            for (let j = this.height-1; j > 0; j--) {
                this.grid.set([i, j], this.grid.get([i, j-1]));
            }
        }

        for (let i = 0; i < this.width; i++) {
            this.grid.set([i, 0], this.queue.get([i]));
        }

        for (let i = 0; i < this.width; i++) {
            if (this.grid.get([i, this.height-1]) != 0) {
                this.playSound(this.blocks_near_top);
            }
        }

        this.createQueue();
    }

    public gravity(doList: boolean = false): Block[] | undefined {
        let found = [];
        let foundFall = false;
        for (let i = 0; i < this.width; i++) {
            let head = 0;
            let foundEmpty = false;
            for (let j = 0; j < this.height; j++) {
                if (this.grid.get([i, j]) !== 0) {
                    found.push(this.grid.get([i, j]));
                    this.grid.set([i, head++], this.grid.get([i, j]));
                    if (foundEmpty) foundFall = true;
                }
                else {
                    foundEmpty = true;
                }
            }
            for (let j = head; j < this.height; j++) {
                this.grid.set([i, j], 0);
            }
        }

        if (foundFall) this.playSound(this.block_fall);

        if (found.length > 0) {
            let head = this.width / 2 - 1;
            for (let i = this.width/2 - 1; i >= 0; i--) {
                if (this.grid.get([i, 0]) !== 0) {
                    for (let j = 0; j < this.height; j++) {
                        this.grid.set([head, j], this.grid.get([i, j]));
                    }
                    head--;
                }
            }
            for (let i = head; i >= 0; i--) {
                for (let j = 0; j < this.height; j++) {
                    this.grid.set([i, j], 0);
                }
            }

            head = this.width / 2;
            for (let i = this.width/2; i < this.width; i++) {
                if (this.grid.get([i, 0]) !== 0) {
                    for (let j = 0; j < this.height; j++) {
                        this.grid.set([head, j], this.grid.get([i, j]));
                    }
                    head++;
                }
            }
            for (let i = head; i < this.width; i++) {
                for (let j = 0; j < this.height; j++) {
                    this.grid.set([i, j], 0);
                }
            }
        }
        else {
            this.playSound(this.trophy_earned);
            this.blocksTotal += 75;
        }

        if (doList) {
            return found;
        }
    }

    public clear(x:number, y:number): void {
        const value: Block = this.grid.get([x, y]);
        switch (value.type) {
            case BlockType.BLOCK: {
                const queue: [number, number][] = new Array<[number, number]>();
                const section: [number, number][] = new Array<[number, number]>();
                const seen: Set<number> = new Set<number>();

                queue.push([x, y]);
                seen.add(y * this.width + x);
                section.push([x, y]);

                while (queue.length > 0) {
                    const place = queue.shift()!;
                    for (let i of [-1, 0, 1]) {
                        for (let j of [-1, 0, 1]) {
                            if (i*j == 0 && i + j != 0) {
                                try {
                                    const shift:[number, number] = [place[0] + i, place[1] + j];
                                    const id = shift[1] * this.width + shift[0];
                                    if (!seen.has(id) && this.grid.get(shift) != 0 && this.grid.get(shift).color == value.color) {
                                        seen.add(id);
                                        queue.push(shift);
                                        section.push(shift);
                                    }
                                }
                                catch {}
                            }
                        }
                    }
                }

                if (section.length >= 3) {
                    for (let place of section) {
                        this.grid.set(place, 0);
                    }

                    this.gravity();
                    this.playSound(this.hit_good);
                    if (section.length >= 100) {
                        this.playSound(this.trophy_earned);
                        this.blocksTotal += section.length * 4;
                    }
                    else if (section.length >= 50) {
                        this.playSound(this.trophy_earned);
                        this.blocksTotal += section.length * 3;
                    }
                    else if (section.length >= 35) {
                        this.playSound(this.trophy_earned);
                        this.blocksTotal += section.length * 2;
                    }
                    else {
                        this.blocksTotal += section.length;
                    }
                    this.didUpdate();
                }
                else {
                    this.playSound(this.hit_bad);
                }
                break;}
            case BlockType.BOMB: {
                let total = 0;
                for (let i = 0; i < this.width; i++) {
                    for (let j = 0; j < this.height; j++) {
                        let check = this.grid.get([i, j]);
                        if (value.color != Color.NONE) {
                            if (check != 0 && (check.color == value.color || check == Blocks.SUPER_BOMB)) {
                                this.grid.set([i, j], 0);
                                total++;
                            }
                        }
                        else {
                            if (((i-x)**2 + (j-y)**2)**(0.5) < 4.4) {
                                if (check != 0 && check.type == BlockType.BLOCKER) {
                                    this.playSound(this.coin_earned);
                                    total += 4;
                                }
                                this.grid.set([i, j], 0);
                                total++;
                            }
                        }
                    }
                }

                this.blocksTotal += total;
                this.gravity();
                this.playSound(this.bomb_explode);
                this.didUpdate();
                break;}
            case BlockType.BLOCKER:
                this.playSound(this.hit_bad);
                break;
            case BlockType.ROW: {
                let total = 0;
                for (let i = 0; i < this.width; i++) {
                    if (this.grid.get([i, y]) != 0 && this.grid.get([i, y]).type == BlockType.BLOCKER) {
                        this.playSound(this.coin_earned);
                        total += 4;
                    }
                    this.grid.set([i, y], 0);
                    total++;
                }

                this.blocksTotal += total;
                this.gravity();
                this.playSound(this.row_bomb);
                this.playSound(this.bomb_explode);
                this.didUpdate();
                break;}
            case BlockType.RC: {
                let total = 0;
                for (let i = 0; i < this.width; i++) {
                    if (this.grid.get([i, y]) != 0 && this.grid.get([i, y]).type == BlockType.BLOCKER) {
                        this.playSound(this.coin_earned);
                        total += 4;
                    }
                    this.grid.set([i, y], 0);
                    total++;
                }
                for (let j = 0; j < this.height; j++) {
                    if (this.grid.get([x, j]) != 0 && this.grid.get([x, j]).type == BlockType.BLOCKER) {
                        this.playSound(this.coin_earned);
                        total += 4;
                    }
                    this.grid.set([x, j], 0);
                    total++;
                }
                total--;

                this.blocksTotal += total;
                this.gravity();
                this.playSound(this.row_bomb);
                this.playSound(this.bomb_explode);
                this.didUpdate();
                break;}
            case BlockType.SCRAMBLER:
                this.grid.set([x, y], 0);
                let found = this.gravity(true)!;

                for (let i = 0; i < found.length-1; i++) {
                    const j = Math.floor(Math.random()*(found.length - i)) + i;
                    [found[i], found[j]] = [found[j], found[i]];
                }

                let index = 0;
                for (let i = 0; i < this.width; i++) {
                    for (let j = 0; j < this.height; j++) {
                        if (this.grid.get([i, j]) != 0) {
                            this.grid.set([i, j], found[index++]);
                        }
                        else {
                            break;
                        }
                    }
                }

                this.blocksTotal++;
                this.playSound(this.switcher);
                this.didUpdate();
                break;
            default:
                break;
        }
    }

    public playSound(sound: React.MutableRefObject<HTMLAudioElement | undefined>, bg: boolean = false) {
        if (game.classic) {
            game.classic.loop = true;
        }

        if (!this.muted) {
            if (sound.current!.paused || bg) {
                sound.current!.play();
            }
            else {
                sound.current!.currentTime = 0;
            }
        }
    }

    public createQueue(): void {
        for (let i = 0; i < this.width; i++) {
            const seed = Math.random()*100;
            if (seed < 97.5) {
                this.queue.set([i], this.normals[Math.floor(Math.random()*this.normals.length)]);
            }
            else {
                this.queue.set([i], this.specials[Math.floor(Math.random()*this.specials.length)]);
            }
        }
    }

    public endGame(): void {
        this.gameOver = true;

        this.playSound(this.you_lose);
        this.classic.current!.pause();
        this.classic.current!.currentTime = 0;
        this.didUpdate();
    }

    public reset():void {
        this.grid = math.zeros(this.width, this.height);
        this.queue = math.zeros(this.width);
        this.level = 1;
        this.blocksTotal = 0;
        this.gameOver = false;
        this.period = 1000;
        this.playSound(this.classic);
        this.layer(5);

        this.didUpdate();
    }

    public didUpdate(): void {
        this.state = Math.random();
        this.updateFunc(this.state);
    }

    public set(x:number, y: number, value: any) {
        math.subset(this.grid, math.index(x, y));
        this.grid.set([x, y], value);
    }

    private visualizeColumn(ind: number): any {
        let emptyArr = Array.from({length: this.height}, (x, i) => i);
        return emptyArr.map((x:any, i: number) => {
            if (this.grid.get([ind, i]) != 0) {
                return (
                    <Cell key={i} block={this.grid.get([ind, i])} pos={[ind, i]} game={this} />
                )
            }
        })
    }

    public layer(n: number): void {
        this.createQueue();
        for (let i = 0; i < n; i++) {
            this.pushQueue();
        }
    }

    public visualize(): any {
        const colStyle = {
            width: `calc(100% / ${this.width})`
        } as React.CSSProperties

        let emptyArr = Array.from({length: this.width}, (x, i) => i);
        return emptyArr.map((x:any, i:number) => {
            return (
                <div key={i} className={styles.column} style={colStyle}>{this.visualizeColumn(i)}</div>
            )
        })
    }
}

const game = new Grid(12, 15, null);
game.layer(5);

const Collapse = (props:{

    }
) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);
    const [state, setState] = useState<number>(0);
    const [showStartButton, setShowStartButton] = useState<boolean>(false);
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
        game.reset();
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
                    <p className={styles.p}>Click to restart</p>
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