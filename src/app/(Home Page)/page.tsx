import AboutSection6 from "@/components/about/AboutSection6";
import BannerSection8 from "@/components/banner/BannerSection8";
import CtaSection from "@/components/cta/CtaSection";
import FooterSection8 from "@/components/footer/FooterSection8";
import HeaderSection7 from "@/components/header/HeaderSection7";
import CaseStudySection from "@/components/project/CaseStudySection";
import ServiceSection6 from "@/components/service/ServiceSection6";
import StatSection from "@/components/stats/StatSection";

import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main className="rv-4-body">
      <HeaderSection7 />
      <BannerSection8 />
      <ServiceSection6 />
      <AboutSection6 />
      <StatSection />
      <CtaSection />
      <CaseStudySection />
      <ContactSection innerPage />
      <FooterSection8 />
    </main>
  );
}
