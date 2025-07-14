import { AnimatedPinDemo } from "@/components/AnimatedPinDemo/AnimatedPinDemo";
import { AnimatedTooltipPreview } from "@/components/AnimatedTooltipPreview/AnimatedTooltipPreview";
import Featurescard from "@/components/feturescard/Featurescard";
import Hero_Section from "@/components/heresection/Hero_Section";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards/InfiniteMovingCardsDemo";
import { StickyScrollRevealDemo } from "@/components/StickyScroll/StickyScrollRevealDemo";
import Footer from "@/components/Footer";


export default function Home() {
  return (
   <div className="min-h-screen ">
    <Hero_Section/>
    <Featurescard/>
    <StickyScrollRevealDemo/>
    <InfiniteMovingCardsDemo/>
    <AnimatedPinDemo/>
    <AnimatedTooltipPreview/>
    <Footer/>
   </div>
   
  );
}
