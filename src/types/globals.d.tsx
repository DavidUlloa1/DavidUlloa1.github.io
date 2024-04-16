declare type Mode = 'light' | 'dark';
declare type DavidColor = 'gold' | 'yellow' | 'pink' | 'light-blue' | 'orange' | 'green' | 'purple' | 'red' | 'silver' | 'blue' | 'sand' | 'none';
declare type Category = 'Video Games' | 'Movies' | 'Urban Design' | 'Climate' | 'Education' | 'Math & Science' | 'Japan & Anime' | 'Writing' | 'Coding' | 'MIT' | 'Misc'

declare type ArticleBlockType = 'title' | 'subtitle1' | 'subtitle2' | 'text' | 'text-left' | 'text-right' | 'img';

declare type ArticleMetadata = {
    id: number,
    headline: string;
    blurb: string;
    publishDate: Date;
    readTime: number;
    tags: Category[];
    active: true;
}

declare type yearType = 'numeric' | '2-digit' | undefined;
declare type monthType = 'numeric' | '2-digit' | 'short' | 'long' | 'narrow' | undefined;
declare type dayType = 'numeric' | '2-digit' | undefined;

declare module "*.pdf";
declare module "*.mp3" {
    const content: string;
    export default content;
}
declare module "*.ogg" {
    const content: string;
    export default content;
}

declare module 'use-sound' {
    export default function useSound(sound: any, options?: any): any;
}