"use client";

import { ContactForm } from "./contact-form";
import { DirectContactOptions } from "./direct-contact";
import { RegionalContacts } from "./regional-contacts";
import { CommunicationGuarantees } from "./communication-guarantees";
import { ContactFAQ } from "./contact-faq";
import { TrustSignals } from "./trust-signals";

export function SmartContactSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Transform Your Digital Future
          </h2>
          <p className="text-xl text-muted-foreground">
            Start your journey to digital excellence with us. Get expert consultation 
            and tailored solutions for your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <ContactForm />
          <div className="space-y-8">
            <DirectContactOptions />
            <RegionalContacts />
          </div>
        </div>

        <CommunicationGuarantees />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <ContactFAQ />
          <TrustSignals />
        </div>
      </div>
    </section>
  );
}