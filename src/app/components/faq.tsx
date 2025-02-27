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
        question: "How does the feedback system work?",
        answer: "Our AI provides real-time feedback on your responses, analyzing factors like clarity, relevance, and completeness. After each session, you receive detailed analytics and specific improvement suggestions."
    },
    {
        question: "Can I practice unlimited times?",
        answer: "Yes, depending on your subscription plan. Pro and Enterprise users get unlimited interview sessions, while Basic plan users have a monthly limit of practice sessions."
    },
    {
        question: "What types of interviews can I practice?",
        answer: "We offer behavioral, technical, and role-specific interviews across various industries. You can practice everything from software engineering technical interviews to management behavioral assessments."
    },
    {
        question: "How realistic are the AI interviews?",
        answer: "Our AI uses advanced natural language processing to create dynamic, context-aware conversations. The interview adapts to your responses just like a human interviewer would, providing a highly realistic experience backed by industry-standard interview patterns."
    },
    {
        question: "What are the benefits of using an AI interview platform?",
        answer: "AI interview platforms offer several benefits, including 24/7 availability for practice, consistent and unbiased evaluations, immediate feedback, and the ability to improve interview skills in a low-pressure environment. They also help candidates become more comfortable with interview scenarios and identify areas for improvement."
    },
    {
        question: "Is my data secure on the AI interview platform?",
        answer: "Yes, we take data security very seriously. All user data is encrypted and stored securely. We comply with data protection regulations and do not share personal information with third parties without explicit consent. Users can also request to have their data deleted at any time."
    },
    {
        question: "Can I use the AI interview platform on mobile devices?",
        answer: "Yes, our AI interview platform is fully responsive and can be accessed on various devices, including smartphones and tablets. This allows you to practice interviews anytime, anywhere, as long as you have an internet connection."
    },
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