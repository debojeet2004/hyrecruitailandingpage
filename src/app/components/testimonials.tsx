"use client"
import { TypographyH2, TypographyP } from "@/components/typography";
import { useEffect, useState } from "react";
import GradientChip from "@/components/ui/gradientChip";
import { ChevronLeft, ChevronRight } from "lucide-react";



const testimonials = [
    {
        content: "HyRecruit AI has revolutionized our recruitment process. The AI's ability to screen and match candidates accurately has cut our hiring time in half. The platform's intelligent insights have helped us make better hiring decisions.",
        author: "Sarah Chen",
        role: "HR Director",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    },
    {
        content: "The platform's automated assessment and bias-free screening have transformed how we evaluate talent. We're now able to focus on quality conversations with pre-qualified candidates.",
        author: "James Miller",
        role: "Technical Recruiter",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
        content: "Since implementing HyRecruit AI, our recruitment efficiency has increased by 70%. The AI's ability to assess both technical skills and cultural fit is remarkable.",
        author: "Priya Sharma",
        role: "Talent Acquisition Lead",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
        content: "What sets HyRecruit AI apart is its sophisticated skill matching algorithm. We're consistently finding candidates who not only match the technical requirements but also align with our company culture.",
        author: "Michael Chang",
        role: "Engineering Manager",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
        content: "The analytics dashboard provides invaluable insights into our hiring funnel. We've optimized our entire recruitment strategy based on the data-driven recommendations.",
        author: "Emma Rodriguez",
        role: "Recruitment Operations Manager",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    },
    {
        content: "HyRecruit AI's automated screening has eliminated hours of manual resume review. The quality of candidates reaching the interview stage has improved significantly.",
        author: "Alex Thompson",
        role: "Senior Tech Recruiter",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);
    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(3);
            } else if (window.innerWidth >= 768) {
                setCardsToShow(2);
            } else {
                setCardsToShow(1);
            }
        };

        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    const next = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            return nextIndex >= testimonials.length ? 0 : nextIndex;
        });
    };

    const prev = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex - 1;
            return nextIndex < 0 ? testimonials.length - 1 : nextIndex;
        });
    };

    const getVisibleTestimonials = () => {
        const visibleCards = [];
        for (let i = 0; i < cardsToShow; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visibleCards.push(testimonials[index]);
        }
        return visibleCards;
    };
    return (
        <div className="flex flex-col gap-2 md:gap-4">
            <div className="w-full flex flex-col justify-center items-center gap-2">
                <GradientChip>Testimonials</GradientChip>
                <TypographyH2 className="max-w-2xl text-center">How we made an <span className=" bg-gradient-to-r from-foreground via-purple-500 to-pink-500 text-transparent bg-clip-text">Impact</span></TypographyH2>
                <TypographyP className="text-center max-w-2xl ">
                    Discover how HyRecruit AI transforms recruitment, saving time and improving hiring quality.
                </TypographyP>
            </div>
            {/* Testimonials Carousel */}
            <div className="relative overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto p-2">
                    {getVisibleTestimonials().map((testimonial, index) => (
                        <div
                            key={`${testimonial.author}-${index}`}
                            className="transform transition-all duration-500 hover:scale-105"
                            style={{
                                opacity: 1,
                                transform: 'translateX(0)'
                            }}
                        >
                            <div className="bg-gradient-to-br from-white/80 via-purple-50/30 to-purple-100/40 
                            dark:from-gray-900/80 dark:via-purple-900/30 dark:to-purple-800/40 rounded-3xl p-8 
                            min-h-[200px] xl:min-h-[320px] flex flex-col justify-between items-start 
                            shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(124,58,237,0.1)] 
                            dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 ease-in-out 
                            border border-purple-100/20 dark:border-purple-700/20 backdrop-blur-sm
                            h-full relative overflow-hidden group hover:bg-gradient-to-br 
                            hover:from-purple-50/60 hover:via-white/60 hover:to-purple-100/60
                            dark:hover:from-purple-900/60 dark:hover:via-gray-900/60 dark:hover:to-purple-800/60">
                                <div className="absolute top-4 right-4 opacity-10 text-purple-600 dark:text-purple-400 
                                text-6xl font-serif group-hover:opacity-20 group-hover:scale-110 transition-all duration-300">&quot;</div>
                                <TypographyP className="text-purple-600 dark:text-purple-300 mb-6 relative z-10 
                                group-hover:text-purple-700 dark:group-hover:text-purple-200 
                                transition-colors duration-300 group-hover:translate-x-1">{testimonial.content}</TypographyP>
                                <div className="flex items-center gap-4 relative z-10 group-hover:translate-x-1 
                                transition-transform duration-300">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400/90 to-purple-600/90 
                                    dark:from-purple-500/90 dark:to-purple-700/90 flex items-center justify-center text-white 
                                    font-bold text-lg group-hover:from-purple-500 group-hover:to-purple-700 
                                    transition-all duration-300 hover:scale-110">
                                        {testimonial.author[0]}
                                    </div>
                                    <div>
                                        <TypographyP className="font-semibold text-gray-900 dark:text-gray-100 
                                        group-hover:text-purple-900 dark:group-hover:text-purple-200 
                                        transition-colors duration-300">{testimonial.author}</TypographyP>
                                        <TypographyP className="text-purple-500 dark:text-purple-400 text-sm font-medium 
                                        group-hover:text-purple-600 dark:group-hover:text-purple-300 
                                        transition-colors duration-300">{testimonial.role}</TypographyP>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden w-full py-1 justify-between items-center">
                <div className="flex items-center justify-center gap-4 py-4 border border-foreground px-6 rounded-full">
                    <span className="text-2xl text-purple-600 dark:text-purple-400">❝</span>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        Great vision without great people is irrelevant
                    </p>
                    <span className="text-2xl text-purple-600 dark:text-purple-400">❞</span>
                </div>
                <div className="h-[2px] w-full bg-foreground"/>
                <div className="flex gap-2 ">
                    <button
                        onClick={prev}
                        className="p-3 rounded-full bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 
                        dark:from-purple-900/80 dark:via-purple-800/80 dark:to-purple-700/80 
                        text-purple-600 dark:text-purple-200 transition-all duration-300 
                        border border-purple-200/50 dark:border-purple-700/50
                        shadow-sm hover:shadow-md"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={next}
                        className="p-3 rounded-full bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 
                        dark:from-purple-900/80 dark:via-purple-800/80 dark:to-purple-700/80 
                        text-purple-600 dark:text-purple-200 transition-all duration-300 
                        border border-purple-200/50 dark:border-purple-700/50
                        shadow-sm hover:shadow-md"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}
