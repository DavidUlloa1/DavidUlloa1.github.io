'use client'

import React, { useContext } from 'react';
import { Document } from 'react-pdf';

import styles from './page.module.css'
import { Title, Subtitle1, Subtitle2, Text, Img, Multi, Quote, Empty, Items } from '@/components/Article/ArticleHelper';
import ArticleList from '@/components/ArticleList/ArticleList';

import { ModeContext } from '@/types/globals';
import { parseTagColor, flipMode, emptyArticleData, emojiWave } from '@/types/globals';

import lightmotif from '@/../public/portfolio/Lightmotif poster.png'
import lightmotif_gif from '@/../public/portfolio/Lightmotif.gif'

import unprocessed_map from '@/../public/portfolio/map/unprocessed_image.jpg'
import post_mask from '@/../public/portfolio/map/post_mask.jpg'
import preview from '@/../public/portfolio/map/preview.jpg'
import gis_view from '@/../public/portfolio/map/GIS View.png'

const Home = () => {
    const mode = useContext(ModeContext);
    const data = emptyArticleData('Video Games');

    return (
        <div className={styles.container}>
            <Title metadata={data} first={true}>Portfolio</Title>
            <Subtitle1 metadata={data}>Games & Apps</Subtitle1>
            <Subtitle2>Lightmotif</Subtitle2>
            <Img img={lightmotif} />
            <Text mode={mode}>
                Lightmotif is a top-down rhythm-based shooter. Fire bullets and collect powerups to defeat enemies that spawn in time with the music and reach the end of the song to win.
                The game was made entirely in Python with one other person over the course of about a month. I was responsible for the main game screen: the game mechanics and the graphics.
                My partner did all the UI, the tutorial, and the graphic above.
            </Text>
            <Multi>
                <Text mode={mode}>Here you can see some of the gameplay in action. The screen gets dimmer and the music gets quieter if you allow red spikes to be on the screen too long.</Text>
                <Img img={lightmotif_gif} />
            </Multi>
            <Text mode={mode}>If you want to see it in action, <a href="https://vimeo.com/861366336" target="_blank"><b>here</b></a> is a video of me and my partner presenting the game.</Text>
            <Subtitle2>Physical Map to GIS Converter</Subtitle2>
            <Text mode={mode}>
                In January 2023, I worked at the Department of Planning & Development for the City of Tucson, AZ. 
                I was given this task: As part of their data collection project, I needed to create a program that could take a picture 
                of a large map with stickers on it and convert that into data that could be imported into GIS. Here's what I created:
            </Text>
            <Multi>
                <Img img={unprocessed_map} />
                <Img img={post_mask} />
                <Img img={preview} />
                <Img img={gis_view} />
            </Multi>
            <Text mode={mode}>
                Here, the points represent roughly the houses of community members who attended our event.
            </Text>
            <Text mode={mode}>
                Using Python and computer vision libraries, the program processes the crude image of the map and outputs a GIS shape file which then visualize or analyze however you want. 
                The pictures above outline the steps the program takes from start to finish, but it's all done automatically.
                This shortens a process that would normally take 2-3 hours of tedious work and shortens it to just 10 minutes.
            </Text>
            <Subtitle2>Piano Player</Subtitle2>
            <Multi>
                <iframe width="400" height="225" src="https://www.youtube.com/embed/4uveRySK_k0?si=UhgVDiOcivIv4EHw&amp;start=8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <Text mode={mode}>A small piano game. Play on your own, follow the guide to learn a piece, or import a MIDI file and play it back in chiptune.</Text>
            </Multi>


            <Subtitle1 metadata={data}>Game Design</Subtitle1>
            <Multi>
                <Text mode={mode}>This is a level design lecture I gave at an MIT hackathon called Blueprint.</Text>
                <iframe width="400px" height="242" src="https://www.youtube.com/embed/8fIAELn8UWc?si=t2Bmd3zMZWxfCQ7s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Multi>
            <Multi>
                <iframe src="https://onedrive.live.com/embed?resid=5EDAC9291E75E3A4%21110&amp;authkey=!AMMCLf2jzSR6JRI&amp;em=2&amp;wdAr=1.7777777777777777" width="400px" height="242px"></iframe>
                <Text mode={mode}>I gave a 2-hour workshop on game ideation and planning for high-schoolers.</Text>
            </Multi>
            <Multi>
                <Text mode={mode}>A fun lecture I gave walking through the different eras of video games. I gave some game trivia in-between slides.</Text>
                <iframe src="https://onedrive.live.com/embed?resid=5EDAC9291E75E3A4%21111&amp;authkey=!ALto0n_ADsrTmjA&amp;em=2&amp;wdAr=1.7777777777777777" width="400px" height="242px"></iframe>
            </Multi>


            <Subtitle1 metadata={data}>Web Development</Subtitle1>
            <Subtitle2>Personal Website</Subtitle2>
            <Text mode={mode}>
                I created this website from scratch to house my blog and portfolio. You can read more about its development in the article I wrote here:
            </Text>
            <ArticleList id={0} />


            <Subtitle1 metadata={data}>Writing</Subtitle1>
            <Text mode={mode}>
                Here is a collection of some of my best technical and creative writing pieces for you to browse. It will give you a good idea of the types of topics I've tackled over the years:
            </Text>
            <Subtitle2>Technical Writing</Subtitle2>
            <Items mode={mode}>
                <a href="https://drive.google.com/file/d/1k0rq4j3oxiTT-tAVdf4aoZEvJEgc0Edg/view?usp=sharing" target="_blank"><b>Analysis of the Hindmarsh-Rose Neuron Model</b></a>
                <a href="https://drive.google.com/file/d/1WKkhoAzhtZ1Mvxnc5OLnRoiglNhv68s5/view?usp=sharing" target="_blank"><b>Wall-Following Robot with Safety Controller</b></a>
                <a href="https://drive.google.com/file/d/1gYFVwfIVmgwLRbq5dQm0obvHsUkZDoMG/view?usp=sharing" target="_blank"><b>Knowledge Consistency of Moving Objects</b></a>
                <a href="https://drive.google.com/file/d/1PgPNcEydOh-7YVab4vYJZIGpVm_OG5UH/view?usp=sharing" target="_blank"><b>Traffic Flow on a Roundabout</b></a>
                <a href="https://docs.google.com/presentation/d/1qy7HbG9sQclukobgTUTDBSZz6fkjdOAg/edit?usp=sharing&ouid=103016882254787993144&rtpof=true&sd=true" target="_blank"><b>Continuous Attractor Model of Head Direction Cells</b></a>
                <a href="https://docs.google.com/presentation/d/10vMn96uc6a4L8sMK521u_y54ycLyiN0n/edit?usp=sharing&ouid=103016882254787993144&rtpof=true&sd=true" target="_blank"><b>Racing Lines</b></a>
                <a href="https://docs.google.com/presentation/d/1VSDqf65e3_KigL3p7skwDueI3WuXDAZd/edit?usp=sharing&ouid=103016882254787993144&rtpof=true&sd=true" target="_blank"><b>Human Vision</b></a>
                <a href="https://docs.google.com/presentation/d/1TWpAPq24ua6L_v7Xq23orPHxpG7wETb4/edit?usp=sharing&ouid=103016882254787993144&rtpof=true&sd=true" target="_blank"><b>Hodgkin-Huxley Neuron Model</b></a>
            </Items>
            <Subtitle2>Creative Writing</Subtitle2>
            <Items mode={mode}>
                <a href="https://drive.google.com/file/d/1HitXSej0y_cfGDFIHgw-bACelgtBTlRU/view?usp=sharing" target="_blank"><b>How Video Games Changed Society</b></a>
                <>And everything that's written here, of course! <span className={styles.emoji} onMouseDown={() => emojiWave('😉')}>😉</span></>
            </Items>
        </div>
    );
}

export default Home;