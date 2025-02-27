'use client';
import Link from 'next/link';
import Container from './container';
import { ThemeToggle } from '../themeToggle';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
    return (
        <Container>
            <div className="w-full py-6 px-4 sm:px-6 lg:px-8 ">
                <div className="flex  justify-between items-center py-4 gap-4 sm:gap-0 ">
                    {/* Logo */}
                    <Link href="/" className="text-[18px] sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        HyRecruit AI
                    </Link>
                    {/* Get Started Button */}
                    <div className="flex items-center gap-2">
                        <ThemeToggle/>
                        <Button className="hidden md:flex group bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white shadow-md transition-all">
                            Book a Demo 
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;
