
import { cn } from "@/lib/utils"
import { Great_Vibes,Poppins } from 'next/font/google';

const greatVibes = Great_Vibes({ weight: "400", subsets: ['latin'] });
const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  });

export function Heading1({ children, className }: {
children: React.ReactNode,
className?: string
}) {
    return (
        <div
            className={cn("font- text-[22px] md:text-[24px] font-medium tracking-tight lg:text-[64px] xl:text-[72px]",poppins.className, className)}
        >
            {children}
        </div>
    )
}
export function Heading1_Great_Vibes({ children, className }: {
children: React.ReactNode,
className?: string
}) {
    return (
        <div
            className={cn(greatVibes.className,"text-[22px] md:text-[24px] font-semibold tracking-tight lg:text-[64px]", className)}
        >
            {children}
        </div>
    )
}
export function Heading2({ children, className}: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <div
            className={cn("text-[22px] md:text-[28px] font-medium tracking-tight leading-none lg:text-[48px] xl:text-[64px]",poppins.className, className)}
        >
            {children}
        </div>
    )
}
export function Heading2_Great_Vibes({ children, className}: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <div
            className={cn(greatVibes.className,"text-[22px] md:text-[28px] font-semibold tracking-tight leading-none lg:text-[48px]", className)}
        >
            {children}
        </div>
    )
}
export function Heading3({ children, className}: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <div
            className={cn("text-[20px] md:text-[24px] font-medium tracking-tight leading-none lg:text-[38px] xl:text-[42px]",poppins.className, className)}
        >
            {children}
        </div>
    )
}
export function Body({ children, className }: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <div
            className={cn("text-[12px] md:text-[14px] font-normal tracking-tight lg:text-[20px]",poppins.className, className)}
        >
            {children}
        </div>
    )
}
export function Body2({ children, className }: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <div
            className={cn("text-[10px] md:text-[12px] font-normal tracking-tight lg:text-[16px] xl:text-[18px]",poppins.className, className)}
        >
            {children}
        </div>
    )
}
export function TagText({ children, className }: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <div
            className={cn("text-[10px] md:text-[14px] font-normal tracking-tight lg:text-[16px]",poppins.className, className)}
        >
            {children}
        </div>
    )
}
