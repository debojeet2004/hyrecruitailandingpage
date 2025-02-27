import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from 'lucide-react'
import React from 'react'

export default function Tag({className, children, iconVisible = false} : {className?: string, children: string, iconVisible?: boolean}) {
    return (
        <div
        className={cn(
            className,
            "group rounded-full border border-foreground/20 bg-gradient-to-r from-violet-200/80 to-pink-200/80 text-xs lg:text-sm transition-all ease-in hover:cursor-pointer hover:from-foreground/10 hover:to-pink-300/80 dark:border-foreground/20 dark:from-violet-950/30 dark:to-pink-950/30 dark:hover:from-card-foreground/30 dark:hover:to-pink-900/30",
            )}
        >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-neutral-800 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white">
            <span>{children}</span>
            {iconVisible && <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />}
            </AnimatedShinyText>
        </div>
    )
}
