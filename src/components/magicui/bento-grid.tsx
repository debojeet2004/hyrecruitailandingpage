
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background?: ReactNode;
  Icon: React.ElementType;
  description: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 md:col-span-2 lg:col-span-1 flex flex-col justify-between overflow-hidden rounded-[16px]",
      // light styles
      "bg-gradient-to-br from-pink-50 to-purple-50/90 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-gradient-to-br dark:from-slate-900/50 dark:to-purple-900/20 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      // hover effects
      "transition-all duration-500 ease-out hover:shadow-lg hover:shadow-purple-200/50 dark:hover:shadow-purple-900/50",
      className,
    )}
    {...props}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-pink-100/50 dark:to-purple-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-4 sm:p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-8 w-8 sm:h-12 sm:w-12 origin-left transform-gpu text-purple-700 dark:text-purple-300 transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-lg sm:text-xl font-semibold text-purple-800 dark:text-purple-200">
        {name}
      </h3>
      <p className="text-sm sm:text-base max-w-lg text-purple-600 dark:text-purple-400">{description}</p>
    </div>
    
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-500 group-hover:bg-black/[.03] group-hover:dark:bg-purple-800/10 backdrop-blur-[1px]" />
  </div>
);

export { BentoCard, BentoGrid };
