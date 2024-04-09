import React, { useState, useEffect, useContext } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/Article/ArticleHelper.module.css'
import { Title, Subtitle1, Subtitle2, Text, Img, Multi, Quote, Gap } from '@/components/Article/ArticleHelper';

import { emojiWave } from '@/types/globals';

import site_old from '@/../public/article1/site_old.png'
import site_new from '@/../public/article1/site_new.png'

const Article1 = (props:{
        mode: Mode,
        data: ArticleMetadata
    }
) => {
    return (
        <div className={styles.container}>
            <Title metadata={props.data} first={true}>About This Website</Title>
            <Quote mode={props.mode}>
                How did you make it?
            </Quote>
            <Text mode={props.mode}>
                I created the bulk of this website while I was living in Japan in late 2023. It was 
                built from scratch using Typescript and React. Specifically, it’s a static webpage 
                created with the Next.js framework using the /app router. By ‘from scratch’, I mean 
                this was not made by a website builder such as Wix or SquareSpace and there are no 
                external libraries that import components (at least, for the majority of the articles 
                and all the main pages). I wrote all the stylesheets and the styling logic was 
                handled using CSS modules and styled-components.
            </Text>
            <Quote mode={props.mode}>
                Why go through all this effort of making it from scratch when you could have just used 
                a website builder?
            </Quote>
            <Text mode={props.mode}>
                Well, firstly I wanted something to put on my portfolio. Despite having a lot of 
                experience with programming at the time of writing, I didn’t have many tangible 
                products to show for it. So, I figured this would be a good start. Secondly, I wanted 
                to brush up my front-end development skills since it had been a while and the 
                technology rapidly advances. Lastly, a website builder would never provide me with 
                the right look and features that I could want. Since the website is mostly about me, 
                I figured the style should reflect my own.
            </Text>
            <Subtitle2>Aesthetics</Subtitle2>
            <Text mode={props.mode}>
                Speaking of style, the site went through a few iterations before landing on a final 
                design. The basic layout and gray color palette is based off of the Hugo PaperMod 
                theme. That’s the main reason I included a light mode. From there, I knew I wanted 
                to throw in a splash of color so this was the solution I initially came up with (along 
                with the original filler text):
            </Text>
            <Img img={site_old} />
            <Text mode={props.mode}>
                However, I thought the colors looked a bit amateurish and they blended in too much 
                with the light mode background. So, I made the side bars all the same color and 
                instead created tags beside the title of the articles. The tags had the added bonus 
                of separating articles by topic for the—yet unimplemented—article search function. 
                Here is the most current design:
            </Text>
            <Img img={site_new} />
            <Subtitle2>Adding an article</Subtitle2>
            <Quote mode={props.mode}>
                What does the process of adding a new article look like from the tech stack? 
            </Quote>
            <Text mode={props.mode}>
                Once I’ve finished writing the piece, I create a little bit of JSON metadata for it; 
                it sets the internal id, the title, publication date and all the other info you see 
                on the Blog tab. Then, I transfer the text into a TypeScript file where I add them 
                to components that autoformat the text to the page that you see. All the components 
                were made from scratch—the text, the quotes, the images, etc. It’s nothing 
                too fancy but it makes the styling cohesive. I spent a lot of time making it 
                responsive, too, so you can read all of this on your phone comfortably. Then, all 
                I need to do is push the code to GitHub and it will automatically be served to you, 
                the reader.
            </Text>
            <Subtitle1 metadata={props.data}>Conclusion</Subtitle1>
            <Text mode={props.mode}>
                That’s all for the technology. I’m constantly trying to make changes to the site, add 
                components as I need them, and write new articles. If you see anything any errors or 
                typos, you have some (constructive) criticism, the site doesn’t work on your device, 
                or you just want to ask me a question, my email is <em>thedavidulloa@gmail.com</em>.
            </Text>
            <Text mode={props.mode}>
                Let me know if anything explodes. <span className={styles.emoji} onMouseDown={() => emojiWave('👍')}>👍</span>
            </Text>
        </div>
    );
}

export default Article1;