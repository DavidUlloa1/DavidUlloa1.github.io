import React, { useState, useEffect, useContext } from 'react';

import styles from './ArticleHelper.module.css';
import classNames from 'classnames/bind';

import { ModeContext, parseTagColor, flipMode } from '@/types/globals';
import { StaticImageData } from 'next/image';

let cx = classNames.bind(styles)

export const Title = (props:{metadata: ArticleMetadata, first?:boolean, children?: any}) => {
    const hStyle = {
        marginTop: '32px',
        borderColor: `var(--${parseTagColor(props.metadata.tags[0])})`,
    } as React.CSSProperties
    return (
        <h1 className={styles.title} style={hStyle}>{props.children}</h1>
    )
}

export const Subtitle1 = (props:{metadata: ArticleMetadata, children?: any}) => {
    const hStyle = {
        borderColor: `var(--${parseTagColor(props.metadata.tags[0])})`,
    } as React.CSSProperties
    return (
        <h2 className={styles.subtitle1} style={hStyle}>{props.children}</h2>
    )
}

export const Subtitle2 = (props:{children?: any}) => {
    return (
        <h3 className={styles.subtitle2}><i>{props.children}</i></h3>
    )
}

export const Text = (props:{mode: Mode, children?: any}) => {
    const pStyle = {
        color: `var(--${props.mode}-secondary)`
    } as React.CSSProperties
    return (
        <p className={styles.text} style={pStyle}>{props.children}</p>
    )
}

export const Items = (props:{mode: Mode, children?: any}) => {
    const ulStyle = {
        color: `var(--${props.mode}-secondary)`
    } as React.CSSProperties

    function wrapper() {
        try {
            return props.children.map((x:any, i: number) => {
                if (React.isValidElement(x) && x.type === Items) return <>{x}</>
                else {
                    return (
                        <li key={i} style={ulStyle} className={styles.li}>{x}</li>
                    )
                }
            })
        }
        catch {
            return <li style={ulStyle}>{props.children}</li>
        }
    }
    return (
        <ul className={`${styles.ul}`}>
            {wrapper()}
        </ul>
    )
}

export const Img = (props: {img: StaticImageData, doPadding?:boolean}) => {
    let style = cx({
        'maxDiv': props.doPadding != false,
    })
    return (
        <div className={style}>
            <img src={props.img.src} className={styles.img} />
        </div>
    )
}

export const Multi = (props: {pattern?: number[], forceHorizontal?: boolean, children: any}) => {
    const pattern = props.pattern ? props.pattern : new Array(props.children.length).fill(props.children.length);
    function wrapper(children: any) {
        return children.map((x:any, i:number) => {
            const style = {
                width: `calc(100% / ${props.children.length} * ${pattern[i]})`,
            } as React.CSSProperties

            return (
                <div key={i} className={styles.multiContainer} style={style}>
                    {x}
                </div>
            )
        })
    }
    return (
        <div className={styles.multiDivWrapper}>
            <div className={styles.multiDiv}>
                {wrapper(props.children)}
            </div>
        </div>
    )
}

export const Quote = (props:{mode: Mode, removeStyle?: boolean, children?: any}) => {
    const style = {
        color: `var(--${props.mode}-primary)`,
        backgroundColor: `var(--${props.mode}-entry)`
    }
    return (
        <div className={`${styles.maxDiv} ${styles.left}`}>
            <div className={styles.quote} style={style}>
                {props.removeStyle ? props.children : <i>"{props.children}"</i>}
            </div>
        </div>
    )
}

export const Gap = (props:{px: number}) => {
    const style = {
        height: `${props.px}px`
    }
    return (
        <div className={styles.gap} style={style}></div>
    )
}

export const Empty = (props:{children?: any}) => {
    return (
        <div className={styles.maxDiv}>
            {props.children}
        </div>
    )
}