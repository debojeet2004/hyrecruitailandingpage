'use client'


import { ThemeProvider } from 'next-themes'
import React from 'react'

function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
                    {children}
            </ThemeProvider>
        </>

    )
}

export default AppProvider