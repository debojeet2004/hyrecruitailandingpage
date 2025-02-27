import { TypographyH2, TypographyP } from '@/components/typography'
import React from 'react'
import Container from './container'
import { Button } from '@/components/ui/button'

export default function Cta() {
    return (
        <Container className='rounded-[32px] overflow-hidden'>
            <div className='relative flex flex-col items-center justify-center space-y-4 h-[15rem] sm:h-[20rem] overflow-hidden p-4'>
                <div className='flex flex-col justify-center items-center gap-1 sm:gap-3 z-20'>
                    <TypographyH2 className='text-center '>Let AI Handle Screening You Focus on Hiring</TypographyH2>
                    <TypographyP className='max-w-xl sm:max-w-3xl text-center text-xs sm:text-base'>
                        Pre-screen candidates efficiently with AI, get instant insights, and find top talent faster. Transform your hiring process today!
                    </TypographyP>
                    <Button size="sm" className='sm:size-lg mt-2'>Book a Demo</Button>
                </div>
                <div className='absolute -bottom-[12rem] sm:-bottom-[18rem] -left-[8rem] sm:-left-[10rem] blur-[6rem] sm:blur-[8rem] w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] rounded-full bg-pink-600'/>
                <div className='absolute -top-[12rem] sm:-top-[18rem] -right-[8rem] sm:-right-[10rem] blur-[6rem] sm:blur-[10rem] w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] rounded-full bg-purple-600'/>
            </div>
        </Container>
    )
}

