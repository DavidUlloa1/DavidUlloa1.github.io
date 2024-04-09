'use client'

import React from 'react';
import JSConfetti from 'js-confetti';

function parseArticleMetadata(data: any): ArticleMetadata[] {
    return data.map((x:any, i:number) => {
        return {
            id: x["id"],
            headline: x["headline"],
            blurb: x["blurb"],
            publishDate: new Date(x["publishDate"]),
            readTime: x["readTime"],
            tags: x["tags"] as Category[],
            active: x["active"] != undefined ? x["active"] as boolean : true
        }
    })
}

export function emptyArticleData(cat: Category): ArticleMetadata {
    return {
        id: -1,
        headline: "",
        blurb: "",
        publishDate: new Date(0),
        readTime: 0,
        tags: [cat],
        active: true
    }
}

export function parseTagColor(cat: Category): DavidColor {
    switch(cat) {
        case 'Video Games': return 'gold';
        case 'Math & Science': return 'orange'
        case 'Climate': return 'green';
        case 'Urban Design': return 'silver';
        case 'Writing': return 'purple';
        case 'Movies': return 'pink';
        case 'Japan & Anime': return 'red';
        case 'Education': return 'light-blue';
        case 'Coding': return 'blue';
        case 'MIT': return 'sand';
        default: return 'none';
    }
}

export function emojiWave(emoji: string) {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
        emojis: [emoji],
    })
}

export function flipMode(mode: Mode) {
    return mode == 'light' ? 'dark' : 'light';
}

import metadata from '@/articles/article-metadata.json'
export const articleMetadata = parseArticleMetadata(metadata);

import Article1 from '@/articles/article1';
import Article2 from '@/articles/article2';
import Article3 from '@/articles/article3';

export const articles: ((props: {mode: Mode; data: ArticleMetadata;}) => React.JSX.Element)[] = [
    Article1,
    // Article2,
    // Article3
]

export const ModeContext = React.createContext<Mode>('dark');