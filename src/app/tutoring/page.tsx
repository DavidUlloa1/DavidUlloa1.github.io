'use client'

import React, { useContext } from 'react';

import styles from './page.module.css'
import { Title } from '@/components/Article/ArticleHelper';

import { emptyArticleData, emojiWave } from '@/types/globals';

const Home = () => {
    const style = {
        paddingTop: '20vh',
        textAlign: 'center'
    } as React.CSSProperties;

    const data = emptyArticleData('Climate');

    return (
        // <div style={style}>
        //     <h1>Under Construction <span className={styles.emoji} onMouseDown={() => emojiWave('🛠️')}>🛠️</span></h1>
        // </div>
        <div className={styles.container}>
            <Title metadata={data}>Tutoring</Title>
            <h1 style={style}>Under Construction <span className={styles.emoji} onMouseDown={() => emojiWave('🛠️')}>🛠️</span></h1>
        </div>
    );
}

export default Home;