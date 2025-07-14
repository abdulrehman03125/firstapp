import { AnimatedPinDemo } from "@/components/AnimatedPinDemo/AnimatedPinDemo";
import { AnimatedTooltipPreview } from "@/components/AnimatedTooltipPreview/AnimatedTooltipPreview";
//import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo/AppleCardsCarouselDemo";

import Featurescard from "@/components/feturescard/Featurescard";
import Hero_Section from "@/components/heresection/Hero_Section";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards/InfiniteMovingCardsDemo";
import { StickyScrollRevealDemo } from "@/components/StickyScroll/StickyScrollRevealDemo";
 // import { SpotlightPreview } from "@/components/SpotlightNew/SpotlightPreview";
import Footer from "@/components/Footer";


export default function Home() {
  return (
   <div className="min-h-screen ">
    <Hero_Section/>
    {/* <AppleCardsCarouselDemo/> */}
    <Featurescard/>
    <StickyScrollRevealDemo/>
    <InfiniteMovingCardsDemo/>
    <AnimatedPinDemo/>
    <AnimatedTooltipPreview/>
    <Footer/>
    {/* <SpotlightPreview/> */}
   </div>
   
  );
}
