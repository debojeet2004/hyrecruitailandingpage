import React from 'react'
import Image from 'next/image'
import { Body, Body2, Heading2, Heading3 } from './website-typography'
import { FileEdit, LayoutGrid, ListFilter, MessagesSquare, UserCircle } from 'lucide-react'
import GradientChip from '@/components/ui/gradientChip'


const data = {
    section1: [
        {
            icon: UserCircle,  
            body: "Create your profile with professional details and preferences for personalized experience",
        },
        {
            icon: FileEdit,  
            body: "Upload and update your resume to help our AI understand your background and experience",
        }
    ],
    section2: [
        {
            icon: LayoutGrid,  
            body: "Select from our extensive catalog of industry-specific and role-based interview scenarios",
        },
        {
            icon: MessagesSquare,  
            body: "Practice with our AI interviewer and get comprehensive feedback to enhance your performance",
        }
    ]
}

export default function UserJourney() {
    return (
        <div className='flex flex-col justify-center items-center gap-8 xl:gap-16'>
            <div className=' flex flex-col justify-center items-center gap-2'>
                <GradientChip >User Journey</GradientChip>
                <div className="flex flex-col justify-center items-center gap-1">
                    <Heading2 className='md:hidden text-center leading-none'>Master Every Step of Your Interview Journey</Heading2>
                    <Heading2 className='hidden md:flex text-center leading-none'>Master Every Step of Your</Heading2>
                    <Heading2 className='hidden md:flex text-center leading-none'>Interview Journey</Heading2>
                </div>
                <Body className='text-center'>Our AI-powered platform takes you from preparation to mastery with a structured, step-by-step<span className='hidden lg:flex h-0'><br/></span> approach. Get personalized guidance, industry-specific practice, and real-time feedback <span className='hidden lg:flex h-0'><br/></span> to enhance your confidence and performance.</Body>
            </div>
            <div className=' flex flex-col-reverse md:flex-row justify-between items-center w-full md:h-[240px] lg:min-h-[420px]'>
                <div className=' md:h-full w-full md:w-[50%] flex justify-start items-center'>
                    {/* <Image src='https://wsrv.nl/?url=https://cdn.hyrecruitai.com/website-assets/images/59b368e4-863a-4c17-850d-1dd7b3654ee7-MainuserJourney1.png' width={560} height={400} alt='Feature Image' /> */}
                </div>
                <div className=' w-full md:w-[50%] flex flex-col justify-start items-end p-1'>
                    <div className=" flex flex-col justify-center items-end gap-1">
                        <Heading3 className='text-right  xl:w-[65%]'>Build Your Profile & Update Your Resume</Heading3>
                        <Body2 className='text-right  lg:w-[75%]'>Lorem ipsum dolor sit amet consectetur. Orci ipsum diam integer etiam. Vel turpis ipsum.</Body2>
                    </div>
                    <div className="flex justify-end items-start flex-col md:flex-row gap-2 mt-4">
                        {data.section1.map((item, index) => (
                            <div key={index} className="flex flex-col items-end">
                                <div className='w-8 h-8 lg:w-12 lg:h-12 flex justify-end items-center rounded-sm'>
                                    <item.icon className="w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-purple-6" />
                                </div>
                                <Body2 className='text-right'>{item.body}</Body2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className=' flex flex-col md:flex-row justify-between items-center w-full md:h-[240px] lg:min-h-[420px] '>
                <div className=' w-full md:w-[50%] flex flex-col'>
                    <div className=" flex flex-col justify-center items-start gap-1">
                        <Heading3 className='text-left  xl:w-[65%]'>Select Your Interview & Practice to Improve</Heading3>
                        <Body2 className='text-left  lg:w-[75%]'>Lorem ipsum dolor sit amet consectetur. Orci ipsum diam integer etiam. Vel turpis ipsum.</Body2>
                    </div>
                    <div className="flex justify-start items-start  flex-col md:flex-row  gap-2">
                        {data.section2.map((item, index) => (
                            <div key={index} className="flex flex-col items-start">
                                <div className='w-8 h-8 lg:w-12 lg:h-12  flex justify-start items-center rounded-sm'>
                                    <item.icon className="w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-purple-6 font-bold" />
                                </div>
                                <Body2 className='text-left'>{item.body}</Body2>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=' md:h-full w-full md:w-[50%] flex justify-end items-center'>
                    {/* <Image src='https://wsrv.nl/?url=https://cdn.hyrecruitai.com/website-assets/images/64e9cb13-9b91-4614-91a4-a7da15eff4ab-catalogs.png' width={560} height={400} alt='Feature Image' /> */}
                </div>
            </div>
        </div>
    )
}