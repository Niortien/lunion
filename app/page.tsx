
import AboutSection from "@/components/home/AboutSection";
import Hero from "@/components/home/Hero";
import ITProjects from "@/components/home/ITProject";
import PartnerSection from "@/components/home/PartnerSection";
import ServiceServices from "@/components/home/ServiceSection";
import StatsSection from "@/components/home/StatSection";
import TeamSection from "@/components/home/TeamSection";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
export default function Home() {
  return (
    <div className="">
      < Hero/>
      <ServiceServices />
      <AboutSection />
      <WhyChooseUsSection />
      <StatsSection />
      <TeamSection/>
      <Testimonials />
      <ITProjects />
      <PartnerSection />
    </div>
  );
}
