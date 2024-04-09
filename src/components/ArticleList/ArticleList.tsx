'use client'

import React, { useState, useEffect, useContext } from 'react';

import styles from './styles/ArticleList.module.css';
import classNames from 'classnames/bind';

import { ModeContext, articleMetadata, articles } from '@/types/globals';

import ArticleBlock from './ArticleBlock';

let cx = classNames.bind(styles)

const ArticleList = (props:{
        id?: number,
        title?: string,
        maxCount?: number
    }
) => {
    const mode = useContext(ModeContext);

    const text:string = props.title != undefined ? props.title : "";
    const cutoff:number = props.maxCount != undefined ? props.maxCount : 0;

    function rollout() {
        if (props.id != undefined) {
            return <ArticleBlock key={props.id} mode={mode} metadata={articleMetadata[props.id]} />
        }

        return articleMetadata.slice(-cutoff).reverse().map((x:ArticleMetadata, i:number) => {
            if (x.active) {
                return (
                    <ArticleBlock key={i} mode={mode} metadata={x} />
                )
            }
        })
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>{text}</h2>
            {rollout()}
        </div>
    );
}

export default ArticleList;