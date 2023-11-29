'use client'

import React, { useState, useEffect, createServerContext, useContext } from 'react';
import styles from './page.module.css'
import { ModeContext } from '@/types/globals';

import Header from '@/components/Header/Header'
import NavButton from '@/components/Header/NavButton';
import Footer from '@/components/Footer';

const Layout2 = (props:{
        children: any
    }
) =>  {
    const [mode, setMode] = useState<Mode>('dark');
    
    const style = {
        height: '100%',
        width: '100vw',
        minHeight: 'calc(100vh)',
        backgroundColor: mode == 'light' ? `var(--light-code-bg)` : `var(--dark-theme)`,
        color: `var(--${mode}-primary)`,
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center'
    } as React.CSSProperties;

    function setModeParam(mode: Mode) {
        setMode(mode);
    }

    return (
        <ModeContext.Provider value={mode}>
        <div style={style}>
            <Header text="thedavid" mode={mode} setMode={setModeParam}>
                <NavButton text='About Me' a='/aboutme' />
                <NavButton text='Resume' a='/resume' />
                <NavButton text='Portfolio' a='/portfolio' />
                <NavButton text='Articles' a='/articles' />
                <NavButton text='Tutoring' a='/tutoring' />
            </Header>
            {props.children}
            <Footer text="David Ulloa · 2023" mode={mode} />
        </div>
        </ModeContext.Provider>
    )
}

export default Layout2;