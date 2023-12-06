'use client'

import React, { useState, useEffect, useContext } from 'react'
import { ModeContext } from '@/types/globals';

const quotes:string[] = [
    "It's dangerous to go alone! Take this. 🗡️",
    "But our princess is in another castle!",
    "Up. The suspect is goin' up",
    "Might as well call it dirt. Planet Dirt.",
    "No, it's necessary.",
    "You must construct additional pylons",
    "Hi! I like shorts! They're comfy and easy to wear!",
    "Justice rains from above!"
]

const subQuotes:[string, string][] = [
    ['The Legend of Zelda', ' | Nintendo 1986'],
    ['Super Mario Bros.', ' | Nintendo 1985'],
    ['Ghost Rider', ' | 2007'],
    ['Transformers', ' | 2007'],
    ['Interstellar', ' | 2014'],
    ["StarCraft", " | Blizzard 1998"],
    ["Pokemon Red and Green", " | Game Freak 1996"],
    ["Overwatch", " | Blizzard 2016"]
]

const Custom404 = () => {
    const [quote, setQuote] = useState<string>("");
    const [subQuote, setSubQuote] = useState<[string, string]>(["", ""]);

    const mode = useContext(ModeContext);

    const style = {
        padding: '16px',
        paddingTop: '20vh',
        textAlign: 'center'
    } as React.CSSProperties;

    const pStyle = {
        fontSize: '13px',
        color: `var(--${mode}-secondary)`
    } as React.CSSProperties;

    useEffect(() => {
        const i = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[i]);
        setSubQuote(subQuotes[i]);
    }, [quote, subQuote])

    return (
        <div style={style}>
            <h1>Error - 404</h1><br></br><br></br>
            <h2>{quote}</h2><br></br>
            <p style={pStyle}><em>{subQuote[0]}</em>{subQuote[1]}</p>
        </div>
    );
}

export default Custom404;