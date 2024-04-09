import React, { useState, useEffect } from 'react';

import Link from 'next/link'

import styles from './styles/ArticleBlock.module.css';
import classNames from 'classnames/bind';

import { parseTagColor, flipMode } from '@/types/globals';

let cx = classNames.bind(styles)

const dateOptions = { year: 'numeric' as yearType, month: 'long' as monthType, day: 'numeric' as dayType };

const Tag = (props:{mode:Mode, cat:Category}) => {
    const color = parseTagColor(props.cat);
    const style = {
        color: color == 'none' && props.mode == 'light' ? 'white' : 'black',
        backgroundColor: color != 'none' ?  `var(--${parseTagColor(props.cat)})` : `var(--${flipMode(props.mode)}-entry)`
    }
    return <div className={styles.tag} style={style}>{props.cat}</div>
}

const ArticleBlock = (props:{
        mode: Mode,
        metadata: ArticleMetadata
    }
) => {
    const barStyle = {
        backgroundColor: `var(--${flipMode(props.mode)}-entry)`
    }

    const style = {
        backgroundColor: `var(--${props.mode}-entry)`,
        // border: props.mode == 'light' ? `0px solid var(--${props.color != 'none' ? props.color : 'dark-entry'})` : ``
    }

    const hStyle = {
        color: `var(--${props.mode}-primary)`
    } as React.CSSProperties
    
    const pStyle = {
        color: `var(--${props.mode}-secondary)`
    } as React.CSSProperties

    function displayTags() {
        return props.metadata.tags.map((x:Category, i:number) => {
            return <Tag key={i} mode={props.mode} cat={x} />
        })
    }

    return (
        <Link href={{
            pathname: '/articles',
            query: { id: JSON.stringify(props.metadata.id)}
        }}>
        <div className={styles.container} style={style}>
            <div className={styles.colorBar} style={barStyle}></div>
            <div className={styles.textContainer}>
                <div className={styles.tagHolder}>
                    <h1 className={styles.h1} style={hStyle}>{props.metadata.headline}</h1>
                    {displayTags()}
                </div>
                <p className={styles.p} style={pStyle}>{props.metadata.blurb}</p>
                <p className={styles.p2} style={pStyle}>{`${props.metadata.publishDate.toLocaleDateString('en-us', dateOptions)} · ${props.metadata.readTime} mins`}</p>
            </div>
        </div>
        </Link>
    );
}

export default ArticleBlock;