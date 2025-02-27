"use client";

import { MagicCard } from '@/components/magicui/magic-card';
import { TypographyH2, TypographyP } from '@/components/typography';
import GradientChip from '@/components/ui/gradientChip';
import { BadgeCheck, BrainCircuit, ChartArea, Scale, Zap } from 'lucide-react'
import { useTheme } from 'next-themes';
import React from 'react'

export default function Whyus() {  
    const { theme } = useTheme();
    return (
        <div className="">
            {/* Problem Section */}
            <div className="container mx-auto px-4 py-8 md:py-16">
                <div className="flex flex-col items-center gap-2 mb-8 md:mb-16">
                    <GradientChip><BadgeCheck className="w-4 h-4 mr-1" />Why Us</GradientChip>
                    <TypographyH2 className='text-center'>
                        Solving Hiring Challenges with <span className=" bg-gradient-to-r from-foreground via-purple-500 to-pink-500 text-transparent bg-clip-text">Smart Solutions</span>
                    </TypographyH2>
                    <TypographyP className='max-w-4xl text-center'>
                    Hiring today is complex, slow, and unreliable. HyRecruit AI eliminates these challenges with AI-powered candidate screening, faster decision-making, and secure data handling—giving you access to pre-evaluated, high-quality talent effortlessly.
                    </TypographyP>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {/* Card 1 */}
                    <MagicCard className='p-2' gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                    <div className="rounded-xl overflow-hidden shadow-lg shadow-pink-200 dark:shadow-pink-900/20 h-full 
                        transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-pink-300 dark:hover:shadow-pink-800/30">
                        <div className="p-4 md:p-6 h-full flex flex-col bg-gradient-to-br from-white via-white to-pink-100 
                            dark:from-gray-800 dark:via-gray-800 dark:to-pink-900 transition-colors duration-300">
                            <div className="w-12 md:w-14 h-12 md:h-14 rounded-full flex items-center justify-center mb-4 
                                bg-pink-100 dark:bg-pink-900/30 transform transition-all duration-500 ease-out group">
                                <BrainCircuit className="w-5 md:w-6 h-5 md:h-6 text-pink-500 dark:text-pink-300 transition-all duration-500 group-hover:scale-125" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-2 transition-colors duration-500">AI-Powered Screening</h3>
                            <p className="text-gray-600 dark:text-gray-300 flex-grow text-sm md:text-base transition-colors duration-500">
                            Our AI evaluates candidates based on role-specific criteria, ensuring only the most qualified individuals move forward—saving you time and effort.
                            </p>
                        </div>
                    </div>
                    </MagicCard>
                    {/* Card 2 */}
                    <MagicCard className='p-2' gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                        <div className="rounded-xl overflow-hidden shadow-lg shadow-blue-200 dark:shadow-blue-900/20 h-full
                            transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-300 dark:hover:shadow-blue-800/30">
                            <div className="p-4 md:p-6 h-full flex flex-col bg-gradient-to-br from-white via-white to-blue-100 
                                dark:from-gray-800 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300">
                                <div className="w-12 md:w-14 h-12 md:h-14 rounded-full flex items-center justify-center mb-4 
                                    bg-blue-100 dark:bg-blue-900/30 transform transition-all duration-500 ease-out group">
                                    <Zap className="w-5 md:w-6 h-5 md:h-6 text-blue-500 dark:text-blue-300 transition-all duration-500 group-hover:scale-125" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-2 transition-colors duration-500">Faster Hiring Process</h3>
                                <p className="text-gray-600 dark:text-gray-300 flex-grow text-sm md:text-base transition-colors duration-500">
                                Reduce hiring timelines with automated assessments and instant candidate analytics, helping you make quick, data-driven decisions.
                                </p>
                            </div>
                        </div>
                    </MagicCard>

                    {/* Card 3 */}
                    <MagicCard className='p-2' gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                        <div className="rounded-xl overflow-hidden shadow-lg shadow-green-200 dark:shadow-green-900/20 h-full
                            transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-green-300 dark:hover:shadow-green-800/30">
                            <div className="p-4 md:p-6 h-full flex flex-col bg-gradient-to-br from-white via-white to-green-100 
                                dark:from-gray-800 dark:via-gray-800 dark:to-green-900 transition-colors duration-300">
                                <div className="w-12 md:w-14 h-12 md:h-14 rounded-full flex items-center justify-center mb-4 
                                    bg-green-100 dark:bg-green-900/30 transform transition-all duration-500 ease-out group">
                                    <Scale className="w-5 md:w-6 h-5 md:h-6 text-green-500 dark:text-green-300 transition-all duration-500 group-hover:scale-125" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-2 transition-colors duration-500">Bias-Free Evaluations</h3>
                                <p className="text-gray-600 dark:text-gray-300 flex-grow text-sm md:text-base transition-colors duration-500">
                                HyRecruit AI ensures fair assessments by focusing on skills and performance, eliminating unconscious biases from the hiring process.
                                </p>
                            </div>
                        </div>
                    </MagicCard>
                    {/* Card 4 */}
                    <MagicCard className='p-2' gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                        <div className="rounded-xl overflow-hidden shadow-lg shadow-yellow-200 dark:shadow-yellow-900/20 h-full
                            transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-300 dark:hover:shadow-yellow-800/30">
                            <div className="p-4 md:p-6 h-full flex flex-col bg-gradient-to-br from-white via-white to-yellow-100 
                                dark:from-gray-800 dark:via-gray-800 dark:to-yellow-900 transition-colors duration-300">
                                <div className="w-12 md:w-14 h-12 md:h-14 rounded-full flex items-center justify-center mb-4 
                                    bg-yellow-100 dark:bg-yellow-900/30 transform transition-all duration-500 ease-out group">
                                    <ChartArea className="w-5 md:w-6 h-5 md:h-6 text-yellow-500 dark:text-yellow-300 transition-all duration-500 group-hover:scale-125" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-2 transition-colors duration-500">Data-Driven Insights</h3>
                                <p className="text-gray-600 dark:text-gray-300 flex-grow text-sm md:text-base transition-colors duration-500">
                                Get detailed performance reports for every candidate, giving you valuable insights to refine your hiring strategies and make informed decisions.
                                </p>
                            </div>
                        </div>
                    </MagicCard>
                    
                </div>
            </div>
        </div>
    )
}


