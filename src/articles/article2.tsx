import React, { useState, useEffect, useContext } from 'react';

import classNames from 'classnames/bind';

import styles from '@/components/Article/ArticleHelper.module.css'
import { Title, Subtitle1, Subtitle2, Text, Img, Multi, Quote, Gap } from '@/components/Article/ArticleHelper';

import adMIT from '@/../public/article2/adMIT.png'

const Article2 = (props:{
        mode: Mode,
        data: ArticleMetadata
    }
) => {
    return (
        <div className={`${styles.container}`}>
            <Title metadata={props.data} first={true}>The Essays That Got Me Into MIT</Title>
            <Img img={adMIT} />
            
            <Subtitle1 metadata={props.data}>Essay #1</Subtitle1>
            <Subtitle2>We know you lead a busy life, full of activities, many of which are required of you. Tell us about something you do simply for the pleasure of it.</Subtitle2>
            <Quote mode={props.mode}>
                Almost every night, I love to curl up with a nice problem I’ve concocted and
                try to solve it. When I find one, I’ll grab my large whiteboard and sit cross-legged 
                on my bed with the board sprawled before me. Then I’ll go to work
                writing out my thoughts and plans on the whiteboard, constantly switching
                between the board and my computer as I delve further into research. After
                several hours, I start testing my ideas, either by programming or designing
                it, and then shove everything off my bed and go to sleep because it’s
                probably 2am at that point.
            </Quote>
            <Text mode={props.mode}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada lectus eget
                 augue accumsan, non finibus leo pulvinar. Aenean eleifend lorem et ultricies eleifend. 
                 In hac habitasse platea dictumst. Donec nec felis porttitor, accumsan purus quis, 
                 sollicitudin tellus. Etiam sit amet semper est. Suspendisse potenti. Maecenas 
                 condimentum nunc non nibh fermentum pretium. Fusce in ex vitae dui gravida laoreet a 
                 congue magna. Aliquam iaculis dapibus volutpat. Suspendisse mattis hendrerit maximus. 
                 Aenean ut viverra odio, sagittis rhoncus sem.
            </Text>
            
            <Subtitle1 metadata={props.data}>Essay #2</Subtitle1>
            <Subtitle2>Although you may not yet know what you want to major in, which department or program at MIT appeals to you and why?</Subtitle2>
            <Quote mode={props.mode}>
                MIT’s AeroAstro program provides awesome opportunities to match my insatiable
                desire to learn. Beyond the flexibility of the curriculum, which allows me to
                either take the primary course 16 or do a concentration of my choice in 16-ENG, 
                the curriculum itself has wide utility in its classes: I can take
                everything from structural dynamics to aerospace propulsion and gain quality
                knowledge and understanding that will be useful in my career. Even before I
                graduate, I can pursue my own ideas through UROP, an internship over the
                summer or IAP, or the many on-campus makerspaces (if I double-major).
            </Quote>
            <Text mode={props.mode}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada lectus eget
                 augue accumsan, non finibus leo pulvinar. Aenean eleifend lorem et ultricies eleifend. 
                 In hac habitasse platea dictumst. Donec nec felis porttitor, accumsan purus quis, 
                 sollicitudin tellus. Etiam sit amet semper est. Suspendisse potenti. Maecenas 
                 condimentum nunc non nibh fermentum pretium. Fusce in ex vitae dui gravida laoreet a 
                 congue magna. Aliquam iaculis dapibus volutpat. Suspendisse mattis hendrerit maximus. 
                 Aenean ut viverra odio, sagittis rhoncus sem.
            </Text>
            
            <Subtitle1 metadata={props.data}>Essay #3</Subtitle1>
            <Subtitle2>
                At MIT, we bring people together to better the lives of others. MIT students work to improve their communities in different ways,
                from tackling the world’s biggest challenges to being a good friend. Describe one way in which you have contributed to your
                community, whether in your family, the classroom, your neighborhood, etc. (200-250 words)
            </Subtitle2>
            <Quote mode={props.mode}>
                One afternoon after school, I was helping a classmate with her math homework.
                After struggling with a question for a bit, she politely asked me, “David, do
                you ever think we’re dumb for not knowing this stuff?” Of course, I could
                have been a jerk and answered ‘yes,’ but at that moment something tugged
                inside of me and I responded, “No. Keep in mind that at one point I didn’t
                understand this, either.” That was when I realized something: Everyone, at
                all times, is searching for a role model--something to aspire to.<br></br><br></br>

                At that moment, I was her role model.<br></br><br></br>

                But when I thought about it more, I realized that I had been trying to be a
                role model all throughout high school. Every day, I try to say hello to as
                many people as possible; building strong relationships with classmates makes
                the environment more conducive to learning. Whenever I work in a group,
                whether it be for a group test or project, I make sure everyone is on the
                same page and understands the concept before moving on (including myself).
                Most importantly, I love making the classroom more fun, whether it be by
                devouring an entire pizza, making jokes at my own expense, or challenging the
                teacher to a rap battle. (All of which have happened more than once)<br></br><br></br>

                Whenever I think of those moments, I remember the smiles on people’s faces.
                Not only that, but I remember how much I helped them grow, and I smile.
            </Quote>
            <Text mode={props.mode}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada lectus eget
                 augue accumsan, non finibus leo pulvinar. Aenean eleifend lorem et ultricies eleifend. 
                 In hac habitasse platea dictumst. Donec nec felis porttitor, accumsan purus quis, 
                 sollicitudin tellus. Etiam sit amet semper est. Suspendisse potenti. Maecenas 
                 condimentum nunc non nibh fermentum pretium. Fusce in ex vitae dui gravida laoreet a 
                 congue magna. Aliquam iaculis dapibus volutpat. Suspendisse mattis hendrerit maximus. 
                 Aenean ut viverra odio, sagittis rhoncus sem.
            </Text>
            
            <Subtitle1 metadata={props.data}>Essay #4</Subtitle1>
            <Subtitle2>
                Describe the world you come from; for example, your family, clubs, school, community, city, or town. How has that world shaped your
                 dreams and aspirations?
            </Subtitle2>
            <Quote mode={props.mode}>
                Growing up, my dad was my world. On weekdays after school and Saturday, I
                would return home to find my dad working in the backyard, lugging lumber or
                metal pipes around for his latest contraption, tinkering with some airconditioning parts for his job, or being eaten alive by a car, and go out to
                help him. Sweat would drip down his forehead and neck and soak his shirt. He
                didn’t complain. While we worked, our bodies would move in sync with the
                trumpets of the classical Spanish music on the radio.<br></br><br></br>

                When I was little, I settled for simply handing him a tool whenever he asked,
                but as he and I got older, I began to help him with big stuff he could no
                longer do alone. It was often back-breaking work, and together we’d go
                through four or five shirts before we were done. We didn’t complain. During
                our breaks, my dad would tell me stories of how much harder it was living
                with his family of nine in the Dominican Republic, immigrating to Puerto
                Rico, and dropping out of college to support his siblings.<br></br><br></br>

                Because of those times, I look at school assignments and problems I face each
                day, and I can’t think of anything simpler--not just because I’m smart, but
                because I know that everything I work for now will be worth it once I achieve
                my goals, no matter how many shirts it takes.
            </Quote>
            <Text mode={props.mode}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada lectus eget
                 augue accumsan, non finibus leo pulvinar. Aenean eleifend lorem et ultricies eleifend. 
                 In hac habitasse platea dictumst. Donec nec felis porttitor, accumsan purus quis, 
                 sollicitudin tellus. Etiam sit amet semper est. Suspendisse potenti. Maecenas 
                 condimentum nunc non nibh fermentum pretium. Fusce in ex vitae dui gravida laoreet a 
                 congue magna. Aliquam iaculis dapibus volutpat. Suspendisse mattis hendrerit maximus. 
                 Aenean ut viverra odio, sagittis rhoncus sem.
            </Text>
            
            <Subtitle1 metadata={props.data}>Essay #5</Subtitle1>
            <Subtitle2>
                Tell us about the most significant challenge you’ve faced or something important that didn’t go according to plan. How did you manage
                 the situation?
            </Subtitle2>
            <Quote mode={props.mode}>
                I walked into fourth-period physics full of motivation and optimism: I felt
                ready to take on anything. That was until I met my teacher. Because he was
                new to the school, he had my benefit of the doubt. For about a week.<br></br><br></br>

                Starting from the very first chapter, learning the content was hard; I
                struggled to take notes as the teacher blazed through the PowerPoints and
                distracted us with stories. The worksheets he gave us weren’t much better.
                Unlike my peers, who would often attempt the first few problems and give up,
                I took each assignment as a challenge, both intellectually and personally.<br></br><br></br>

                So, over the course of the school year, I made physics my priority. I would
                spend hours on each assignment, dissecting each question until I couldn’t get
                one wrong. I would eat a few cookies while pondering each question, pacing
                around the house, and have committed cookie genocide by the end. However, I
                noticed that my classmates didn’t have that same drive and were slowly giving
                up. So, I actively tried to help wherever I could: I would help in class,
                hold mini-teaching sessions after school, and I even made a quizlet for the
                whole class before the final exam.<br></br><br></br>

                When we got our exam results back in the fall, not only did I pass, but three
                other people whom I frequently helped also passed. Learning that I had such a
                positive impact on them will remain one of my favorite high school memories.
            </Quote>
            <Text mode={props.mode}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada lectus eget
                 augue accumsan, non finibus leo pulvinar. Aenean eleifend lorem et ultricies eleifend. 
                 In hac habitasse platea dictumst. Donec nec felis porttitor, accumsan purus quis, 
                 sollicitudin tellus. Etiam sit amet semper est. Suspendisse potenti. Maecenas 
                 condimentum nunc non nibh fermentum pretium. Fusce in ex vitae dui gravida laoreet a 
                 congue magna. Aliquam iaculis dapibus volutpat. Suspendisse mattis hendrerit maximus. 
                 Aenean ut viverra odio, sagittis rhoncus sem.
            </Text>

            <Subtitle1 metadata={props.data}>Conclusion</Subtitle1>
            <Text mode={props.mode}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada lectus eget
                 augue accumsan, non finibus leo pulvinar. Aenean eleifend lorem et ultricies eleifend. 
                 In hac habitasse platea dictumst. Donec nec felis porttitor, accumsan purus quis, 
                 sollicitudin tellus. Etiam sit amet semper est. Suspendisse potenti. Maecenas 
                 condimentum nunc non nibh fermentum pretium. Fusce in ex vitae dui gravida laoreet a 
                 congue magna. Aliquam iaculis dapibus volutpat. Suspendisse mattis hendrerit maximus. 
                 Aenean ut viverra odio, sagittis rhoncus sem.
            </Text>
        </div>
    );
}

export default Article2;