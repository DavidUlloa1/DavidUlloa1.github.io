import { Matrix } from 'mathjs';
const math = require('mathjs');

import { parseTagColor } from '@/types/globals';
import Cell from './Cell';

import styles from './styles/Cell.module.css';

export enum BlockType {
    BLOCK,
    BOMB,
    ROW,
    RC,
    BLOCKER,
    SCRAMBLER,
}

export enum Color {
    RED,
    BLUE,
    GREEN,
    WHITE,
    YELLOW,
    PURPLE,
    NONE
}

export interface Block {
    type: BlockType;
    color: Color;
}

export const Blocks = {
    RED: {type: BlockType.BLOCK, color: Color.RED} as Block,
    BLUE: {type: BlockType.BLOCK, color: Color.BLUE} as Block,
    GREEN: {type: BlockType.BLOCK, color: Color.GREEN} as Block,
    WHITE: {type: BlockType.BLOCK, color: Color.WHITE} as Block,
    YELLOW: {type: BlockType.BLOCK, color: Color.YELLOW} as Block,
    PURPLE: {type: BlockType.BLOCK, color: Color.PURPLE} as Block,
    
    RED_BOMB: {type: BlockType.BOMB, color: Color.RED} as Block,
    BLUE_BOMB: {type: BlockType.BOMB, color: Color.BLUE} as Block,
    GREEN_BOMB: {type: BlockType.BOMB, color: Color.GREEN} as Block,
    WHITE_BOMB: {type: BlockType.BOMB, color: Color.WHITE} as Block,
    YELLOW_BOMB: {type: BlockType.BOMB, color: Color.YELLOW} as Block,
    PURPLE_BOMB: {type: BlockType.BOMB, color: Color.PURPLE} as Block,

    SUPER_BOMB: {type: BlockType.BOMB, color: Color.NONE} as Block,
    ROW_BOMB: {type: BlockType.ROW, color: Color.NONE} as Block,
    RC_BOMB: {type: BlockType.RC, color: Color.NONE} as Block,
    BLOCKER: {type: BlockType.BLOCKER, color: Color.NONE} as Block,
    SCRAMBLER: {type: BlockType.SCRAMBLER, color: Color.NONE} as Block
} as const;

export function parseBlockColor(block: Block): DavidColor | undefined {
    switch (block.type) {
        case BlockType.BLOCK:
            switch (block.color) {
                case Color.RED:
                    return parseTagColor("Japan & Anime");
                case Color.BLUE:
                    return parseTagColor("Coding");
                case Color.GREEN:
                    return parseTagColor("Climate");
                case Color.WHITE:
                    return parseTagColor("Misc");
                case Color.YELLOW:
                    return "yellow";
                case Color.PURPLE:
                    return parseTagColor("Writing");
            }
        case BlockType.BOMB:
            switch (block.color) {
                case Color.RED:
                    return parseTagColor("Japan & Anime");
                case Color.BLUE:
                    return parseTagColor("Coding");
                case Color.GREEN:
                    return parseTagColor("Climate");
                case Color.WHITE:
                    return parseTagColor("Misc");
                case Color.YELLOW:
                    return "yellow";
                case Color.PURPLE:
                    return parseTagColor("Writing");
                case Color.NONE:
                    return parseTagColor("Urban Design");
            }
        case BlockType.RC:
            return parseTagColor("MIT");
        case BlockType.ROW:
            return parseTagColor("MIT");
        case BlockType.SCRAMBLER:
            return parseTagColor("Movies");
        case BlockType.BLOCKER:
            return parseTagColor("Urban Design");
        default:
            return parseTagColor("Video Games");
    }
}

const bomb = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 32 32" version="1.1" className={styles.icon}>
        <title>bomb</title>
        <path d="M8.934 10.163c-2.921 1.656-4.861 4.743-4.864 8.284v0c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0c0.002-2.608 1.431-4.881 3.548-6.082l0.035-0.018c0.385-0.218 0.641-0.625 0.641-1.092 0-0.691-0.56-1.25-1.25-1.25-0.224 0-0.434 0.059-0.616 0.162l0.006-0.003zM28.514 3.579h-1.082v-1.082c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 1.082h-1.082c-0 0-0 0-0.001 0-0.69 0-1.249 0.559-1.249 1.249 0 0.513 0.309 0.953 0.751 1.146l0.008 0.003-0.584 0.603-1.73-1.543c-0.22-0.197-0.512-0.318-0.832-0.318-0.407 0-0.769 0.195-0.997 0.497l-0.002 0.003-0.98 1.306c-1.377-0.558-2.974-0.882-4.648-0.882-0.011 0-0.023 0-0.034 0h0.002c-7.063 0.005-12.787 5.731-12.787 12.795 0 7.066 5.728 12.795 12.795 12.795s12.795-5.728 12.795-12.795c0-2.099-0.505-4.079-1.401-5.827l0.034 0.072 1.26-1.18c0.243-0.229 0.395-0.552 0.395-0.912 0-0.37-0.161-0.703-0.417-0.932l-0.001-0.001-1.583-1.412 0.467-0.483c0.211 0.385 0.612 0.642 1.072 0.647h0.001c0.69-0 1.25-0.56 1.25-1.25v-1.082h1.082c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM13.553 28.75c-0.004 0-0.009 0-0.014 0-5.69 0-10.303-4.613-10.303-10.303s4.613-10.303 10.303-10.303c0.005 0 0.010 0 0.015 0h-0.001c0.008-0 0.018-0 0.028-0 1.641 0 3.191 0.387 4.565 1.075l-0.059-0.027c0.161 0.081 0.351 0.129 0.552 0.129 0.407 0 0.769-0.195 0.997-0.498l0.002-0.003 0.76-1.011 3.145 2.805-0.975 0.913c-0.243 0.229-0.394 0.552-0.394 0.912 0 0.241 0.068 0.466 0.186 0.657l-0.003-0.005c0.942 1.525 1.5 3.375 1.5 5.354 0 5.691-4.612 10.304-10.303 10.305h-0z"/>
    </svg>
)

const blocker = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" className={styles.icon}>
        <path d="M4 4L20 20M20 4L4 20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const row = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" className={styles.icon}>
        <path d="M3 12H21M3 12L7 8M3 12L7 16M21 12L17 16M21 12L17 8" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const rc = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" className={styles.icon}>
        <path d="M12 3V21M12 3L9 6M12 3L15 6M12 21L15 18M12 21L9 18M3 12H21M3 12L6 15M3 12L6 9M21 12L18 9M21 12L18 15" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const scrambler = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={styles.icon}>
        <path d="M21 3V8M21 8H16M21 8L18 5.29168C16.4077 3.86656 14.3051 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.2832 21 19.8675 18.008 20.777 14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export const pausedIcon = (paused: boolean, mode: Mode): JSX.Element => {
    if (paused) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={styles.icon}>
                <path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" stroke={mode == 'light' ? "#000000" : "#ffffff"} strokeWidth="2" strokeLinejoin="round"/>
            </svg>
        )
    }
    else {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={styles.icon}>
                <path d="M8 5V19M16 5V19" stroke={mode == 'light' ? "#000000" : "#ffffff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }
}

export const mutedIcon = (muted: boolean, mode: Mode): JSX.Element => {
    if (!muted) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={styles.icon}>
                <path d="M16 9.50009L21 14.5001M21 9.50009L16 14.5001M4.6 9.00009H5.5012C6.05213 9.00009 6.32759 9.00009 6.58285 8.93141C6.80903 8.87056 7.02275 8.77046 7.21429 8.63566C7.43047 8.48353 7.60681 8.27191 7.95951 7.84868L10.5854 4.69758C11.0211 4.17476 11.2389 3.91335 11.4292 3.88614C11.594 3.86258 11.7597 3.92258 11.8712 4.04617C12 4.18889 12 4.52917 12 5.20973V18.7904C12 19.471 12 19.8113 11.8712 19.954C11.7597 20.0776 11.594 20.1376 11.4292 20.114C11.239 20.0868 11.0211 19.8254 10.5854 19.3026L7.95951 16.1515C7.60681 15.7283 7.43047 15.5166 7.21429 15.3645C7.02275 15.2297 6.80903 15.1296 6.58285 15.0688C6.32759 15.0001 6.05213 15.0001 5.5012 15.0001H4.6C4.03995 15.0001 3.75992 15.0001 3.54601 14.8911C3.35785 14.7952 3.20487 14.6422 3.10899 14.4541C3 14.2402 3 13.9601 3 13.4001V10.6001C3 10.04 3 9.76001 3.10899 9.54609C3.20487 9.35793 3.35785 9.20495 3.54601 9.10908C3.75992 9.00009 4.03995 9.00009 4.6 9.00009Z" stroke={mode == 'light' ? "#000000" : "#ffffff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }
    else {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={styles.icon}>
                <path d="M16.0004 9.00009C16.6281 9.83575 17 10.8745 17 12.0001C17 13.1257 16.6281 14.1644 16.0004 15.0001M18 5.29177C19.8412 6.93973 21 9.33459 21 12.0001C21 14.6656 19.8412 17.0604 18 18.7084M4.6 9.00009H5.5012C6.05213 9.00009 6.32759 9.00009 6.58285 8.93141C6.80903 8.87056 7.02275 8.77046 7.21429 8.63566C7.43047 8.48353 7.60681 8.27191 7.95951 7.84868L10.5854 4.69758C11.0211 4.17476 11.2389 3.91335 11.4292 3.88614C11.594 3.86258 11.7597 3.92258 11.8712 4.04617C12 4.18889 12 4.52917 12 5.20973V18.7904C12 19.471 12 19.8113 11.8712 19.954C11.7597 20.0776 11.594 20.1376 11.4292 20.114C11.239 20.0868 11.0211 19.8254 10.5854 19.3026L7.95951 16.1515C7.60681 15.7283 7.43047 15.5166 7.21429 15.3645C7.02275 15.2297 6.80903 15.1296 6.58285 15.0688C6.32759 15.0001 6.05213 15.0001 5.5012 15.0001H4.6C4.03995 15.0001 3.75992 15.0001 3.54601 14.8911C3.35785 14.7952 3.20487 14.6422 3.10899 14.4541C3 14.2402 3 13.9601 3 13.4001V10.6001C3 10.04 3 9.76001 3.10899 9.54609C3.20487 9.35793 3.35785 9.20495 3.54601 9.10908C3.75992 9.00009 4.03995 9.00009 4.6 9.00009Z" stroke={mode == 'light' ? "#000000" : "#ffffff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }
}

export function parseBlockType(block: Block): React.JSX.Element | null {
    switch (block.type) {
        case BlockType.BOMB: return bomb;
        case BlockType.BLOCKER: return blocker;
        case BlockType.RC: return rc;
        case BlockType.ROW: return row;
        case BlockType.SCRAMBLER: return scrambler;
        default: return null;
    }
}

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

    public playSound(sound: any) {
        if (!this.muted && sound != undefined) {
            sound[0]();
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
        this.classic[1].stop();
        // this.classic.current!.currentTime = 0;
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