'use client'

import React, { useState, useEffect, useContext } from 'react';
import { notFound } from 'next/navigation';

import styles from './page.module.css';
import classNames from 'classnames/bind';

import ArticleList from '@/components/ArticleList/ArticleList';
import { articleMetadata, articles, emptyArticleData, emojiWave } from '@/types/globals';
import { useSearchParams } from 'next/navigation';
import { Title, Subtitle1, Subtitle2, Text, Img, Multi, Quote, Empty, Items } from '@/components/Article/ArticleHelper';

import { ModeContext } from '@/types/globals';

let cx = classNames.bind(styles)

const Home = (props:{
    
    }
) => {
    const searchParams = useSearchParams();
    let idDefined = searchParams.has('id');
    const id = Number(searchParams.get('id'))
    
    const mode = useContext(ModeContext);
    const metadata = emptyArticleData('Japan & Anime');

    const data = articles[id-1];
    if (idDefined && data == undefined) {
        notFound();
    }
    
    if (idDefined) {
        return (
            articles[id-1]({mode: mode, data: articleMetadata[id-1]})
        );
    }
    else {
        return (
            <div className={styles.container}>
                <Title metadata={metadata}>Blog</Title>
                <Text mode={mode}>
                    Welcome to my blog! Here I try to have thoughtful discussions (rants) about all the things that I'm passionate about or that are happening in the world around me.<br></br><br></br>
                    Hopefully you find it at least somewhat amusing or thought-provoking.

                    The goal is to write one blog post a month, but you can be the judge of how well I stick to that timeline. <span className={styles.emoji} onMouseDown={() => emojiWave('✍️')}>✍️</span>
                </Text>
                <Subtitle1 metadata={metadata}>All Articles</Subtitle1>
                <ArticleList />
            </div>
        )
    }
}

export default Home;