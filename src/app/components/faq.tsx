"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import GradientChip from '@/components/ui/gradientChip'
import { HelpCircle } from 'lucide-react'
import { motion } from "framer-motion"
import { TypographyH2, TypographyP } from "@/components/typography"

const faqData = [
    {
        question: "What is an AI interview platform?",
        answer: "An AI interview platform is a technology-driven solution that uses artificial intelligence to conduct and analyze job interviews. It simulates real interview scenarios, asks relevant questions, and provides feedback to help candidates prepare for actual interviews."
    },
    {
        question: "How does the AI interview process work?",
        answer: "The AI interview process typically involves logging into the platform, selecting an interview type or job role, and then engaging in a simulated interview with an AI-powered virtual interviewer. The AI asks questions, analyzes responses, and provides feedback on factors like communication skills, content, and body language (if video is used)."
    },
    {
        question: "How does HyRecruit AI ensure candidate authenticity?",
        answer: "Our AI-driven screening process includes role-specific tests and automated resume verification to filter out unqualified or fraudulent candidates."
    },
    {
        question: "Can I integrate HyRecruit AI with my existing ATS?",
        answer: "Yes! HyRecruit AI seamlessly integrates with most Applicant Tracking Systems (ATS) for a smooth hiring workflow."
    },
    {
        question: "How does AI-powered screening work?",
        answer: "Candidates go through an AI-driven assessment based on the job role, and our system generates performance reports for easy evaluation."
    },
    {
        question: "Is HyRecruit AI suitable for all industries?",
        answer: "Absolutely! Our AI-powered platform is designed to cater to diverse industries, from tech and finance to healthcare and beyond."
    },
    {
        question: "How does HyRecruit AI reduce hiring time?",
        answer: "We automate screening, shortlisting, and initial interviews, reducing manual work and helping you make faster hiring decisions."
    },
    {
        question: "Can I customize the hiring process based on my company's needs?",
        answer: "Yes! Our platform allows customization of hiring workflows, screening criteria, and interview structures."
    },
    {
        question: "Is candidate data secure on HyRecruit AI?",
        answer: "We prioritize data security with encrypted storage, compliance with global regulations, and strict access controls."
    },
    {
        question: "How do I get started with HyRecruit AI?",
        answer: "Simply sign up on our platform, define your hiring requirements, and let our AI handle the rest!"
    },
    {
        question: "Does HyRecruit AI support bulk hiring?",
        answer: "Yes! Our platform efficiently handles bulk hiring by screening and shortlisting multiple candidates simultaneously, saving time and effort."
    }
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
}

function FaqSection() {
    return (
        <section className="relative overflow-hidden p-2 md:p-8 w-full rounded-[32px]"> 
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[128px] -z-10" />
            {/* <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[128px] -z-10" /> */}

            <div className="container mx-auto max-w-7xl md:px-4  relative flex flex-col lg:flex-row justify-between  items-start rounded-[32px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='flex flex-col lg:items-start gap-6 mb-16 w-full lg:max-w-[40%] rounded-[32px]' 
                >
                    <GradientChip className='flex items-center justify-center gap-2'>
                        <HelpCircle className='size-4' />
                        <p>FAQ</p>
                    </GradientChip>
                    <TypographyH2 className="text-center lg:text-start rounded-[32px]">
                        Got Questions? We&apos;ve Got <span className=" bg-gradient-to-r from-foreground via-purple-500 to-pink-500 text-transparent bg-clip-text">Answers</span>
                    </TypographyH2>
                    <TypographyP className=" text-start text-muted-foreground ">
                        Everything you need to know about mastering your interview skills with AI. From technical
                        details to pricing questions, find expert answers to help you succeed.
                    </TypographyP>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="w-full lg:w-[55%]  rounded-[32px]"
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqData.map((faq, index) => (
                            <motion.div key={index} variants={item}>
                                <AccordionItem
                                    value={`item-${index + 1}`}
                                    className="border border-border/50 rounded-lg px-6 backdrop-blur-sm data-[state=open]:bg-primary/5"
                                >
                                    <AccordionTrigger className="text-lg font-medium text-start hover:no-underline group">
                                        <span className="group-hover:text-primary transition-colors">
                                            {faq.question}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        <div className="pt-2 pb-4">
                                            {faq.answer}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}

export default FaqSection