'use client'

import React, { useContext } from 'react';
import styles from './page.module.css'

import Intro from '@/components/Intro/Intro'
import ArticleList from '@/components/ArticleList/ArticleList';
import ArticleBlock from '@/components/ArticleList/ArticleBlock';
import Footer from '@/components/Footer';

import { ModeContext } from '@/types/globals';

const Home = () => {
  const mode = useContext(ModeContext);

  const style = {
    backgroundColor: mode == 'light' ? `var(--light-code-bg)` : `var(--dark-theme)`,
    color: `var(--${mode}-primary)`
} as React.CSSProperties;

  return (
    <div className={styles.container} style={style}>
      <Intro mode={mode} />
      <ArticleList>
        <ArticleBlock mode={mode} color={'gold'}
          head="Article #1"
          detail="There is nothing in here"
          a="/fakeurl"
          metadata="January 20, 2021 · 3 min"/>
        <ArticleBlock mode={mode} color={'green'}
          head="Article #2"
          detail="There is nothing in here"
          a="/fakeurl"
          metadata="January 20, 2021 · 6 min"/>
        <ArticleBlock mode={mode} color={'pink'}
          head="Article #3"
          detail="There is nothing in here"
          a="/fakeurl"
          metadata="January 20, 2021 · 4 min"/>
        <ArticleBlock mode={mode} color={'light-blue'}
          head="Article #4"
          detail="There is nothing in here"
          a="/fakeurl"
          metadata="January 20, 2021 · 4 min"/>
        <ArticleBlock mode={mode} color={'orange'}
          head="Article #5"
          detail="There is nothing in here"
          a="/fakeurl"
          metadata="January 20, 2021 · 1 min"/>
        <ArticleBlock mode={mode} color={'none'}
          head="Article #6"
          detail="There might be something in here"
          a="/trolled"
          metadata="January 20, 2021 · 6 min"/>
      </ArticleList>
    </div>
  )
}

export default Home;