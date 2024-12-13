import { HeroSection } from "@/components/hero/hero-section";
import { SolutionsMatrix } from "@/components/solutions/solutions-matrix";
import { ProcessExpertise } from "@/components/process/process-expertise";
import { SuccessStories } from "@/components/success/success-stories";
import { GlobalPresenceSection } from "@/components/global/global-presence-section";
import { InnovationHubSection } from "@/components/innovation/innovation-hub-section";
import { WhyUsSection } from "@/components/why-us/why-us-section";
import { SmartContactSection } from "@/components/contact/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SolutionsMatrix />
      <ProcessExpertise />
      <SuccessStories />
      <GlobalPresenceSection />
      <InnovationHubSection />
      <WhyUsSection />
      <SmartContactSection />
    </main>
  );
}