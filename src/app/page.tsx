'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './page.module.css'

import ScreenBlock from '@/components/ScreenBlock'
import Button from '@/components/Button'

import Header from '@/components/Header/Header'
import NavButton from '@/components/Header/NavButton';
import Intro from '@/components/Intro/Intro'
import ArticleList from '@/components/ArticleList/ArticleList';
import ArticleBlock from '@/components/ArticleList/ArticleBlock';
import Footer from '@/components/Footer';

import logo from '../../public/images/clover.jpg'

export default function Home() {
  const [mode, setMode] = useState<Mode>('dark');

  return (
    <div className={styles.container}>
      <ScreenBlock mode={mode}>
        <Header text="thedavid" mode={mode} setMode={setMode}>
          <NavButton text='About Me' a='www.google.com' />
          <NavButton text='Resume' a='www.google.com' />
          <NavButton text='Portfolio' a='www.google.com' />
          <NavButton text='Articles' a='www.google.com' />
          <NavButton text='Tutoring' a='www.google.com' />
        </Header>
        <Intro mode={mode} />
        <ArticleList>
          <ArticleBlock mode={mode} color={'gold'}
            head="Installation | Update"
            detail="Read Install and Update instructions here"
            metadata="January 20, 2021 · 3 min"/>
          <ArticleBlock mode={mode} color={'green'}
            head="Features"
            detail="Learn About All Features in PaperMod"
            metadata="January 20, 2021 · 6 min"/>
          <ArticleBlock mode={mode} color={'pink'}
            head="FAQs"
            detail="Frequently Asked Questions"
            metadata="January 20, 2021 · 4 min"/>
          <ArticleBlock mode={mode} color={'light-blue'}
            head="FAQs"
            detail="Frequently Asked Questions"
            metadata="January 20, 2021 · 4 min"/>
          <ArticleBlock mode={mode} color={'orange'}
            head="Icons"
            detail="List of all Icons supported by PaperMod"
            metadata="January 20, 2021 · 1 min"/>
          <ArticleBlock mode={mode} color={'none'}
            head="Variables | Front Matter"
            detail="List of Front Matter variables used by PaperMod"
            metadata="January 20, 2021 · 6 min"/>
        </ArticleList>
        <Footer text="David Ulloa · 2023" mode={mode} />
      </ScreenBlock>
    </div>
  )
}
