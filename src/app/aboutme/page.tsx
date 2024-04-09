'use client'

import React, { useContext } from 'react';

import styles from './page.module.css'
import { Title, Subtitle1, Subtitle2, Text, Img, Multi, Quote, Empty, Items } from '@/components/Article/ArticleHelper';

import { ModeContext } from '@/types/globals';
import { parseTagColor, flipMode, emptyArticleData, emojiWave } from '@/types/globals';

import prof_photo from '@/../public/prof_photo.jpg'
import fresh_photo from '@/../public/fresh_photo.jpg'

const Home = () => {
    const style = {
        padding: '16px',
        paddingTop: '20vh',
        textAlign: 'center'
    } as React.CSSProperties;
    
    const mode = useContext(ModeContext);
    const data = emptyArticleData('Coding');

    // return (
    //     <div style={style}>
    //         <h1>Under Construction 🛠️</h1>
    //     </div>
    // );

    return (
        <div className={styles.container}>
            <Title metadata={data}>About Me</Title>
            <Multi>
                <>
                    <Quote mode={mode} removeStyle={true}>
                        Hi, my name is David Ulloa. I am a professional software developer, amateur human.<br></br><br></br>
                        I'm passionate about a lot of things--especially video games, movies, and math--and I'm hoping to break into the game development industry. <span className={styles.emoji} onMouseDown={() => emojiWave('👾')}>👾</span>
                    </Quote>
                    <Subtitle2>Favorite Things</Subtitle2>
                    <Items mode={mode}>
                        <><b>Color: </b>Orange</>
                        <><b>Movie(s): </b>Interstellar + I am Legend</>
                        <><b>Video Game: </b>Overwatch</>
                        <><b>Anime: </b>Steins;Gate</>
                        <><b>Sport: </b>Rock climbing</>
                        <><b>Food: </b>Okonomiyaki (お好み焼き)</>
                    </Items>
                    <Text mode={mode}></Text>
                </>
                <Img img={prof_photo} />
            </Multi>
        </div>
    )
}

export default Home;