"use client";
import React, { useState, useEffect } from 'react';
import { ClipboardList, BrainCircuit, ShieldCheck, Briefcase } from 'lucide-react';
import { TypographyH2, TypographyP } from '@/components/typography';
import GradientChip from '@/components/ui/gradientChip';
import Image from "next/image";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export default function HowitWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const stepDuration = 5000; // 5 seconds per step
  const totalSteps = 3;

  const steps: Step[] = [
    {
      id: 1,
      title: "Define Your Hiring Requirements",
      description: "Define your job roles, candidate requirements, and key preferences. Our system integrates seamlessly with your existing hiring workflows.",
      icon: <ClipboardList  className="w-6 h-6" />,
      image: "illustration1"
    },
    {
      id: 2,
      title: "AI-Driven Screening & Shortlisting",
      description: "Our AI analyzes applications, evaluates candidate suitability, and ranks top talent based on data-driven insights, ensuring you get the best fit instantly.",
      icon: <BrainCircuit  className="w-6 h-6" />,
      image: "illustration2"
    },
    {
      id: 3,
      title: "Secure & Efficient Hiring Decisions",
      description: "Make confident hiring choices with AI-backed recommendations, ensuring data security, compliance, and a streamlined recruitment experience.",
      icon: <ShieldCheck  className="w-6 h-6" />,
      image: "illustration3"
    }
  ];

  // Effect to handle step cycling and progress
  useEffect(() => {
    // Reset progress when active step changes
    setProgress(0);
    
    // Create interval to update progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (stepDuration / 100));
      });
    }, 100);

    // Create interval to change active step
    const stepInterval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep % totalSteps) + 1);
    }, stepDuration);

    // Clean up intervals
    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [activeStep]);

  return (
    <div className="relative overflow-hidden p-6 rounded-[32px]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/5" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[128px] -z-10" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[128px] -z-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 flex flex-col gap-2">
            <GradientChip><Briefcase  className="w-4 h-4 mr-2 inline" />Smart Hiring Flow</GradientChip>
          <TypographyH2>Seamless Hiring in <span className=" bg-gradient-to-r from-foreground via-purple-500 to-pink-500 text-transparent bg-clip-text">Few Steps</span></TypographyH2>
          <TypographyP>Simplifies hiring with AI-driven efficiency, accuracy, and security. Here’s how it works</TypographyP>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Steps Column */}
          <div className="w-full lg:w-1/2 space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="flex">
                {/* Timeline with progress indicator */}
                <div className="mr-4 relative flex flex-col items-center">
                  {/* Vertical line */}
                  {step.id !== totalSteps && (
                    <div className="absolute top-12 w-1 bg-gray-200 dark:bg-gray-700 h-full -z-10"></div>
                  )}
                  
                  {/* Progress indicator */}
                  {step.id === activeStep && step.id !== totalSteps && (
                    <div 
                      className="absolute top-12 w-1 bg-red-500 dark:bg-red-400 -z-5 transition-all duration-100"
                      style={{ 
                        height: `${progress}%`,
                        maxHeight: 'calc(100% - 12px)'
                      }}
                    ></div>
                  )}
                  
                  {/* Step icon */}
                    <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                      step.id === activeStep 
                      ? 'bg-gradient-to-br from-background via-purple-500/30 to-pink-500 text-white shadow-lg'
                      : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-500 dark:text-gray-400'
                    }`}
                    >
                    {step.icon}
                  </div>
                </div>
                
                {/* Step content */}
                <div className={`pb-8 ${step.id === activeStep ? 'opacity-100' : 'opacity-60'}`}>
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 ${
                    step.id === activeStep 
                      ? 'text-pink-600 dark:text-pink-400'
                      : ''
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className={`transition-opacity duration-500 relative w-full h-full ${
                  step.id === activeStep ? 'flex' : 'hidden'
                  }`}
                >
                  <Image 
                  src={`/${step.image}.png`} 
                  alt={`Step ${step.id}`} 
                  width={900}
                  height={600}
                  
                  className="object-cover rounded-lg"
                  priority={step.id === 1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

