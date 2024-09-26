import Metrics from "@/sections/metrics"
import {
  FeaturesItems,
  MetricsItems,
  PlanItems,
  TestimonialsItems,
} from "@/data"
import Features from "@/components/features"
import Prices from "@/sections/prices"
import Testimonials from "@/sections/testimonials"
import Suscription from "@/sections/suscription"
import Banner from "@/sections/banner"

export default function Home() {
  return (
    <>
      <Banner />
      <Metrics data={MetricsItems} />
      <Features id="features" data={FeaturesItems} />
      <Prices id="pricing" data={PlanItems} />
      <Testimonials id="testimonial" data={TestimonialsItems} />
      <Suscription />
    </>
  )
}
