'use client'

import React, { useContext } from 'react';
import styles from './page.module.css'

import Intro from '@/components/Intro/Intro'
import ArticleList from '@/components/ArticleList/ArticleList';

import { ModeContext } from '@/types/globals';

const Home = () => {
  const mode = useContext(ModeContext);

  const style = {
    // backgroundColor: mode == 'light' ? `var(--light-code-bg)` : `var(--dark-theme)`,
    color: `var(--${mode}-primary)`
  } as React.CSSProperties;

  return (
    <div className={styles.container} style={style}>
      <Intro mode={mode} />
    </div>
  )
}

export default Home;