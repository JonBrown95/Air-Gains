'use client'
import { Navbar } from './components/Navbar'
import './globals.css'
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      
      
      <body>
        <SessionProvider>
        <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}