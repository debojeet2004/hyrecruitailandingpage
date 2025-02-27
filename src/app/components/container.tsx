import { cn } from '@/lib/utils'
import React from 'react'

export default function Container({className, children} : {className?: string, children: React.ReactNode}) {
    return (
        // <div className='p-2 sm:p-4 md:p-6 max-w-[85rem] w-[95%] sm:w-[90%] mx-auto border border-white'>
        // </div>
            <div className={cn(className,`mx-auto max-w-7xl w-full  border-foreground `)}>{children}</div>
    )
}
