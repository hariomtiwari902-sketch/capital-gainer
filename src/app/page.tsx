import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Header } from "@/components/Header";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Trust } from "@/components/sections/Trust";
import { SITE } from "@/lib/site";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phoneTel,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.addressLines[0],
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452010",
    addressCountry: "IN",
  },
  areaServed: "IN",
  sameAs: [`https://wa.me/${SITE.whatsappE164}`],
};

export default function HomePage() {
  return (
    <>
      <Script
        id="ld-json-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Trust />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </>
  );
}
