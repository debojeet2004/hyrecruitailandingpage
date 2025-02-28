'use client';
import Link from 'next/link';
import Container from './container';
import { ThemeToggle } from '../themeToggle';
import CtaButton from './calCta';

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
                        <CtaButton/>
                        
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;
