import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Layout2 from './layout2';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'David Ulloa',
  description: 'Personal website',
}

export default function RootLayout(props: any) {
  const style = {
    width: '100vw',
  } as React.CSSProperties;

  return (
    <html lang="en">
      <body className={inter.className} style={style}>
        <Layout2>
          {props.children}
        </Layout2>
      </body>
    </html>
  )
}
