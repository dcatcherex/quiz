import { SectionHero } from "@/components/home/section-hero"
import { SectionFeature } from "@/components/home/section-feature"
import { SectionFooter} from "@/components/home/section-footer"
import { SectionCost } from "@/components/home/section-cost"
import { SectionTestimonial } from "@/components/home/section-testimonial"

const LandingPage = () => {
  return (
    <div className='h-full'>
        <SectionHero />
        <SectionFeature />
        <SectionTestimonial />
        <SectionCost />
        <SectionFooter />
    </div>
  )
}

export default LandingPage