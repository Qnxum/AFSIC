import React from "react";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ObjectivesSection } from "./components/objectives-section";
import { AttendeeSection } from "./components/attendee-section";
import { TopicsSection } from "./components/topics-section";
import { OutcomesSection } from "./components/outcomes-section";
import { SpeakersSection } from "./components/speakers-section";
import { PricingSection } from "./components/pricing-section";
import { RegisterSection } from "./components/register-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ObjectivesSection />
        <AttendeeSection />
        <TopicsSection />
        <OutcomesSection />
        <SpeakersSection />
        <PricingSection />
        <RegisterSection />
      </main>
      <Footer />
    </div>
  );
}
