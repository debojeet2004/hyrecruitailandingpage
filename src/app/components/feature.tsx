import { TypographyH2, TypographyP } from '@/components/typography'
import GradientChip from '@/components/ui/gradientChip'
import React from 'react'
import { SparkleIcon } from 'lucide-react'
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Brain, ChartArea, Globe, MessagesSquare} from "lucide-react";
const features = [
    {
      Icon: Brain ,
      name: "Role-Specific AI Interviews",
      description: "Conduct AI-driven interviews tailored to the job role, ensuring precise candidate evaluation.",
      href: "#",
      className: "col-span-3 lg:col-span-1",
      // background: (
      //   <Marquee
      //     pauseOnHover
      //     className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      //   >
      //     {files.map((f, idx) => (
      //       <figure
      //         key={idx}
      //         className={cn(
      //           "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
      //           "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      //           "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      //           "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
      //         )}
      //       >
      //         <div className="flex flex-row items-center gap-2">
      //           <div className="flex flex-col">
      //             <figcaption className="text-sm font-medium dark:text-white ">
      //               {f.name}
      //             </figcaption>
      //           </div>
      //         </div>
      //         <blockquote className="mt-2 text-xs">{f.body}</blockquote>
      //       </figure>
      //     ))}
      //   </Marquee>
      // ),
    },
    {
      Icon: ChartArea,
      name: "Data-Driven Insights & Reports",
      description: "Get in-depth analytics on candidate performance to make informed hiring decisions.",
      href: "#",
      className: "col-span-3 lg:col-span-2",
      // background: (
      //   <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
      // ),
    },
    {
      Icon: MessagesSquare,
      name: "AI-Powered Candidate Screening",
      description: "Automatically assess candidates through AI-driven tests and role-based evaluations.",
      href: "#",
      className: "col-span-3 lg:col-span-2",
      // background: (
      //   <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      // ),
    },
    {
      Icon: Globe ,
      name: "Global Talent Pool",
      description: "Access a diverse network of pre-vetted candidates from around the world, ensuring the best fit for your hiring needs.",
      className: "col-span-3 lg:col-span-1",
      href: "#",
      // background: (
      //   <Calendar
      //     mode="single"
      //     selected={new Date(2022, 4, 11, 0, 0, 0)}
      //     className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
      //   />
      // ),
    },
  ];

export default function Feature() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <GradientChip><SparkleIcon className='w-4 h-4 mr-2'/> Exciting Features</GradientChip>
                <TypographyH2 className='text-center'> AI-Driven Features for <span className=" bg-gradient-to-r from-foreground via-purple-500 to-pink-500 text-transparent bg-clip-text">Smarter Hiring</span></TypographyH2>
                <TypographyP className='text-center max-w-4xl'>transforms recruitment with intelligent automation, data-driven insights, and seamless candidate evaluation—making hiring faster, smarter, and effortless!</TypographyP>
            </div>
            <div className=' mt-8 flex justify-center items-center  border-foreground'>
            <BentoGrid>
                {features.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                ))}
            </BentoGrid>
            </div>
        </>
    )
}

