import Container from "./components/container";
import { ScrollBasedVelocityDemo } from "./components/scrolldemo";
import Tag from "./components/tag";
import Feature from "./components/feature";
import Cta from "./components/cta";
import FaqSection from "./components/faq";
import { TypographyH1, TypographyP } from "@/components/typography";
import Testimonials from "./components/testimonials";
import HowitWorks from "./components/howitworks";
import Whyus from "./components/whyus";
import CtaButton from "./components/calCta";


export default function Home() {
  return (
    <div className="flex flex-col gap-[48px] overflow-hidden p-2 ">
      {/* HERO SECTION */}
      <Container className="flex flex-col justify-center items- gap-4 md:gap-12">
        <div className="z-30 flex flex-col justify-center items-center gap-4 mt-[10rem] ">
          <Tag iconVisible>✨  Ai Powered Hiring</Tag>
          <TypographyH1 className="text-center font-medium">Revolutionizing Hiring <br/>Process <span className=" bg-gradient-to-r from-foreground via-purple-500 to-pink-500 text-transparent bg-clip-text">with AI</span></TypographyH1>
          <TypographyP className="text-center max-w-4xl">We conduct AI-driven initial screenings tailored to specific roles. Our platform generates performance analytics and pre-evaluates candidates, giving companies a structured report to streamline hiring and make data-driven decisions efficiently.</TypographyP>
          <CtaButton/>
        </div>
        <div className="relative flex justify-center items-start  h-[40rem] w-full overflow-visible">
        <div className="z-10 absolute -top-20 translate-x-1 rounded-full w-[90rem] h-[20rem] blur-[180px] bg-gradient-to-r from-indigo-500/40 via-purple-600/40 to-teal-400/40" />
          <div className="w-full h-full bg-background z-20 flex justify-center items-center rounded-[32px] ">
            <h1>Illustration</h1>
          </div>
        </div>
      </Container>
      <ScrollBasedVelocityDemo />
      <Container>
        <Whyus/>
      </Container>
      <Container >
        <HowitWorks/>
      </Container>
      <Container>
        <Feature/>
      </Container>
      <Container >
        <Testimonials/>
      </Container>
      <Cta/>
      <Container className="rounded-[32px] ">
        <FaqSection/>
      </Container>
    </div>
  );
}
