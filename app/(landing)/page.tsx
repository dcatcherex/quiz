import { LandingHero } from "@/components/landing-hero"
import { LandingContent } from "@/components/landing-content"
import { LandingFooter} from "@/components/landing-footer"
import { LandingCost } from "@/components/landing-cost"
import { LandingTestimonial } from "@/components/landing-testimonial"

const LandingPage = () => {
  return (
    <div className='h-full'>
        <LandingHero />
        <LandingContent />
        <LandingTestimonial />
        <LandingCost />
        <LandingFooter />
    </div>
  )
}

export default LandingPage