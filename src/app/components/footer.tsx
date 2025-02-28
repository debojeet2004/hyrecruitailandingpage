import { Body, Body2 } from "@/components/typography"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
interface FooterLinkProps {
    href: string
    children: React.ReactNode
    title?: string
}

function FooterLink({ href, children, title }: FooterLinkProps) {
    return (
        <Link
            href={href}
            className="text-muted-foreground hover:text-primary transition-colors"
            title={title}
        >
            {children}
        </Link>
    )
}

interface FooterColumnProps {
    title: string
    links: {
        label: string
        href: string
        title?: string
    }[]
}

function FooterColumn({ title, links }: FooterColumnProps) {
    return (
        <div className="space-y-4">
            <Body className="font-bold xl:text-[22px] ">{title}</Body>
            <ul className="space-y-3">
                {links.map((link) => (
                    <Body2 key={link.href}>
                        <FooterLink href={link.href} title={link.title}>{link.label}</FooterLink>
                    </Body2>
                ))}
            </ul>
        </div>
    )
}

function Footer() {
    const columns: FooterColumnProps[] = [
        // {
        //     title: "Product",
        //     links: [
        //         { label: "Features", href: "#features", title: "Explore PrepVerse Features" },
        //         { label: "Pricing", href: "#pricing", title: "Explore PrepVerse Pricing" },
        //         { label: "Testimonials", href: "#testimonials", title: "Explore PrepVerse Testimonials" },
        //         { label: "FAQ", href: "#faq", title: "Explore PrepVerse FAQ" },
        //     ],
        // },
        // {
        //     title: "Company",
        //     links: [
        //         { label: "About Us", href: "/about" },
        //         { label: "Careers", href: "/careers" },
        //         { label: "Blog", href: "#blog" },
        //         { label: "Contact", href: "/contact" },
        //     ],
        // },
        {
            title: "Legal",
            links: [
                { label: "Privacy Policy", href: "/privacy", title: "PrepVerse Privacy Policy" },
                { label: "Terms of Service", href: "/terms", title: "PrepVerse Terms of Service" },
                { label: "Cookie Policy", href: "/cookies", title: "PrepVerse Cookie Policy" },
                { label: "Contact Us", href: "/contact", title: "PrepVerse Contact Us" },
            ],
        },
    ]

    return (
        <div className='container mx-auto py-8 p-4'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
                {/* Brand Section */}
                <div className='md:col-span-4 space-y-4'>
                    <p className='text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent'>HyRecruit AI</p>
                    <Body2 className='text-muted-foreground'>
                    Transforming recruitment with AI-powered talent assessment and intelligent hiring solutions.
                    </Body2>
                    <div className="flex gap-3">
                    <Link href="https://www.linkedin.com/company/prepverse"
                        title="Check out PrepVerse LinkedIn"
                        target="_blank" 
                        className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-md"
                    >
                        <Linkedin className="h-4 w-4" />
                    </Link>
                    <Link href="https://facebook.com" 
                        className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-md">
                        <Facebook className="h-4 w-4" />
                    </Link>
                    <Link href="https://twitter.com" 
                        className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-md">
                        <Twitter className="h-4 w-4" />
                    </Link>
                    <Link href="https://instagram.com" 
                        className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-md">
                        <Instagram className="w-4 h-4" />
                    </Link>
                    </div>
                </div>
                {/* Navigation Columns */}
                <div className='md:col-span-8'>
                    <div className='flex justify-start md:justify-end items-center gap-4'>
                    {columns.map((column) => (
                        <FooterColumn key={column.title} {...column} />
                    ))}
                    </div>
                </div>
            </div>
            {/* Bottom Section */}
            <div className='mt-12 pt-4 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground'>
            <Body2>© {new Date().getFullYear()} HyRecruit AI. All rights reserved.</Body2>
            <Body2>Made with ❤️ in India 🇮🇳</Body2>
            </div>
        </div>
    )
}

export default Footer