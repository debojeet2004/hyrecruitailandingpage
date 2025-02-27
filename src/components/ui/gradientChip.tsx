"use client";
import React from "react";
import { HoverBorderGradient } from "./hover-border-gradient";
import { cn } from "@/lib/utils";

export default function GradientChip({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className="flex justify-center text-center">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className={cn("dark:bg-black bg-white text-black dark:text-white flex items-center ", className)}
            >
                {children}
            </HoverBorderGradient>
        </div>
    );
}