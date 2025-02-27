import { cn } from "@/lib/utils"

export function TypographyH1({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h1 className={cn(`scroll-m-20 text-3xl md:text-4xl lg:text-7xl font-semibold tracking-tight`, className)}>
            {children}
        </h1>
    )
}

export function TypographyH2({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h2 aria-label={children as string} className={cn(`scroll-m-20 pb-2 text-2xl md:text-3xl lg:text-5xl tracking-tight first:mt-0`, className)}>
            {children}
        </h2>
    )
}

export function TypographyH3({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h3 className={cn(`scroll-m-20 text-xl md:text-2xl lg:text-3xl font-normal tracking-tight`, className)}>
            {children}
        </h3>
    )
}

export function TypographyH4({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h4 className={cn(`scroll-m-20 text-lg md:text-xl lg:text-2xl font-light tracking-tight`, className)}>
            {children}
        </h4>
    )
}

export function TypographyP({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={cn(`leading-relaxed text-base md:text-lg lg:text-xl`, className)}>
            {children}
        </p>
    )
}

export function TypographyBlockquote({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
            {children}
        </blockquote>
    )
}

export function TypographyInlineCode({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)}>
            {children}
        </code>
    )
}

export function TypographyLead({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={cn(`text-xl md:text-2xl text-muted-foreground`, className)}>
            {children}
        </p>
    )
}

export function TypographyLarge({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn(`text-lg md:text-xl font-semibold`, className)}>
            {children}
        </div>
    )
}

export function TypographySmall({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <small className={cn(`text-sm md:text-base font-medium leading-none`, className)}>
            {children}
        </small>
    )
}

export function TypographyMuted({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={cn("text-sm md:text-base text-muted-foreground", className)}>
            {children}
        </p>
    )
}

