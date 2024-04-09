import React from 'react';

import styles from '@/components/Article/ArticleHelper.module.css'
import { Title, Subtitle1, Subtitle2, Text, Img, Multi, Quote, Gap } from '@/components/Article/ArticleHelper';

import mk8 from '@/../public/article3/mk8.avif'

import green_shell from '@/../public/article3/greenshell.webp'
import red_shell from '@/../public/article3/redshell.webp'
import banana from '@/../public/article3/banana.webp'
import bob_omb from '@/../public/article3/bobomb.webp'
import triple_green from '@/../public/article3/triplegreen.webp'
import triple_red from '@/../public/article3/triplered.webp'
import triple_banana from '@/../public/article3/triplebanana.webp'
import spiny_shell from '@/../public/article3/spinyshell.webp'
import super_horn from '@/../public/article3/superhorn.webp'

const Article3 = (props:{
        mode: Mode,
        data: ArticleMetadata
    }
) => {
    return (
        <div className={styles.container}>
            <Title metadata={props.data} first={true}>How To Beat Your Friends At Mario Kart 8: Deluxe</Title>
            <Img img={mk8} />

            <Subtitle1 metadata={props.data}>Red Shell</Subtitle1>
            <Multi pattern={[2,1]}>
                <Quote mode={props.mode}>
                    These automatically lock onto and chase after the next Kart in front of the player. When hit, the Kart rolls over.
                </Quote>
                <Img img={red_shell} />
            </Multi>
            <Text mode={props.mode}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada lectus eget
                 augue accumsan, non finibus leo pulvinar. Aenean eleifend lorem et ultricies eleifend. 
                 In hac habitasse platea dictumst. Donec nec felis porttitor, accumsan purus quis, 
                 sollicitudin tellus. Etiam sit amet semper est. Suspendisse potenti. Maecenas 
                 condimentum nunc non nibh fermentum pretium. Fusce in ex vitae dui gravida laoreet a 
                 congue magna. Aliquam iaculis dapibus volutpat. Suspendisse mattis hendrerit maximus. 
                 Aenean ut viverra odio, sagittis rhoncus sem.
            </Text>

            <Subtitle1 metadata={props.data}>Banana</Subtitle1>
            <Multi pattern={[1,2]}>
                <Img img={banana} />
                <Quote mode={props.mode}>
                    This item will cause any karts that come in contact with it to spin out.
                </Quote>
            </Multi>
            <Text mode={props.mode}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada lectus eget
                 augue accumsan, non finibus leo pulvinar. Aenean eleifend lorem et ultricies eleifend. 
                 In hac habitasse platea dictumst. Donec nec felis porttitor, accumsan purus quis, 
                 sollicitudin tellus. Etiam sit amet semper est. Suspendisse potenti. Maecenas 
                 condimentum nunc non nibh fermentum pretium. Fusce in ex vitae dui gravida laoreet a 
                 congue magna. Aliquam iaculis dapibus volutpat. Suspendisse mattis hendrerit maximus. 
                 Aenean ut viverra odio, sagittis rhoncus sem.
            </Text>

            <Subtitle1 metadata={props.data}>Bob-omb</Subtitle1>
            <Multi pattern={[2,1]}>
                <Quote mode={props.mode}>
                    Explodes after a brief pause or when another Kart comes near it. Any Kart in the blast radius will be knocked over or spun around.
                </Quote>
                <Img img={bob_omb} />
            </Multi>
            <Text mode={props.mode}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada lectus eget
                 augue accumsan, non finibus leo pulvinar. Aenean eleifend lorem et ultricies eleifend. 
                 In hac habitasse platea dictumst. Donec nec felis porttitor, accumsan purus quis, 
                 sollicitudin tellus. Etiam sit amet semper est. Suspendisse potenti. Maecenas 
                 condimentum nunc non nibh fermentum pretium. Fusce in ex vitae dui gravida laoreet a 
                 congue magna. Aliquam iaculis dapibus volutpat. Suspendisse mattis hendrerit maximus. 
                 Aenean ut viverra odio, sagittis rhoncus sem.
            </Text>

            <Subtitle1 metadata={props.data}>Triple Items</Subtitle1>
            <Multi pattern={[1.5,1.5,1.5]}>
                <Img img={triple_green} />
                <Img img={triple_red} />
                <Img img={triple_banana} />
            </Multi>
            <Text mode={props.mode}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada lectus eget
                 augue accumsan, non finibus leo pulvinar. Aenean eleifend lorem et ultricies eleifend. 
                 In hac habitasse platea dictumst. Donec nec felis porttitor, accumsan purus quis, 
                 sollicitudin tellus. Etiam sit amet semper est. Suspendisse potenti. Maecenas 
                 condimentum nunc non nibh fermentum pretium. Fusce in ex vitae dui gravida laoreet a 
                 congue magna. Aliquam iaculis dapibus volutpat. Suspendisse mattis hendrerit maximus. 
                 Aenean ut viverra odio, sagittis rhoncus sem.
            </Text>

            <Subtitle1 metadata={props.data}>Spiny/Blue Shell</Subtitle1>
            <Multi pattern={[1,2]}>
                <Img img={spiny_shell} />
                <Quote mode={props.mode}>
                    This shell chases after the lead kart and blows up when it reaches its target. Any kart in the blast radius will be knocked over. Those that enter the explosion a bit later will be spun around.
                </Quote>
            </Multi>

            <Subtitle1 metadata={props.data}>Super Horn</Subtitle1>
            <Multi pattern={[2,1]}>
                <Quote mode={props.mode}>
                    It can be used to block incoming projectiles or to destroy other items, to blast opponents away, and even to destroy the Spiny Shell, which could not be directly blocked by an item in any previous game.
                </Quote>
                <Img img={super_horn} />
            </Multi>
        </div>
    );
}

export default Article3;