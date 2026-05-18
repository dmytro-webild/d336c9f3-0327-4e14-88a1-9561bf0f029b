"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLarge"
        background="grid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Services", id: "features" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Village Dental NYC"
      className="text-foreground"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Village Dental NYC"
      description="Premium Dental Care, Redefined for NYC. Experience dentistry designed for comfort and confidence. From routine cleanings to advanced cosmetic solutions, Village Dental NYC combines luxury wellness with expert clinical care."
      buttons={[
        { text: "Schedule Your Smile", href: "#contact" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/full-equiped-medical-cabinet_1303-23916.jpg"
      imageAlt="Luxurious Dental Clinic Interior"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Excellence in Dental Wellness"
      description="We blend expert clinical precision with an uncompromising luxury experience. Our mission is to restore comfort and confidence, one smile at a time, within a serene environment designed for the modern patient."
      metrics={[
        { value: "15+", title: "Years Experience" },
        { value: "10k+", title: "Smiles Transformed" },
        { value: "98%", title: "Patient Retention" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-smiley-nurses-work_23-2149341556.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { title: "Cosmetic Dentistry", description: "Achieve your perfect smile with our advanced whitening and cosmetic alignment solutions.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-young-successful-woman-giving-two-thumbs-up-gesture_273609-13742.jpg", imageAlt: "Cosmetic Result" },
        { title: "Family Care", description: "Gentle, comfort-focused care for patients of all ages, ensuring positive long-term oral health.", imageSrc: "http://img.b2bpic.net/free-photo/doctor-doing-their-work-pediatrics-office_23-2149224181.jpg", imageAlt: "Family Smiling" },
        { title: "Advanced Clinical Tech", description: "State-of-the-art diagnostic and treatment technology for efficient, pain-free dental experiences.", imageSrc: "http://img.b2bpic.net/free-photo/dental-equipment-placed-table_1150-19617.jpg", imageAlt: "Dental Equipment" },
      ]}
      title="Comprehensive Dental Services"
      description="Tailored treatments for your unique needs, from cosmetic enhancements to preventive pediatric care."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="blur-reveal"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Sarah Johnson", handle: "@sarahj", testimonial: "The best dental experience I've ever had. Truly luxurious.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-feminine-tender-sensual-redhead-woman-with-curly-hair-with-messy-bun-embrace-her-neck-white_176420-41935.jpg" },
        { id: "2", name: "Michael Chen", handle: "@mchen", testimonial: "Efficient, expert, and incredibly comfortable.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/contemplated-serious-young-man-looking-camera_23-2148130297.jpg" },
        { id: "3", name: "Emily Rodriguez", handle: "@emilyrod", testimonial: "My kids actually enjoy visiting the dentist now!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-redhead-non-binary-person_23-2148760579.jpg" },
        { id: "4", name: "David Kim", handle: "@dkim", testimonial: "Professional results and a fantastic aesthetic.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-serious-concentrated-man-white-shirt_171337-17406.jpg" },
        { id: "5", name: "Jessica Lee", handle: "@jlee", testimonial: "Village Dental is my new go-to for all dental needs.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg" },
      ]}
      showRating={true}
      title="Voices of Village Dental"
      description="Experience excellence through the eyes of our satisfied patients."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="depth-3d"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "99.9%", description: "Patient Satisfaction Rate" },
        { id: "m2", value: "12min", description: "Average Wait Time" },
        { id: "m3", value: "24/7", description: "Emergency Consultations" },
      ]}
      title="Clinical Performance Metrics"
      description="Our commitment to excellence quantified."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      faqsAnimation="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        { id: "f1", title: "Do you accept new patients?", content: "Yes, we are currently accepting new adult and pediatric patients." },
        { id: "f2", title: "What payment options do you offer?", content: "We offer transparent pricing and work with major insurance providers." },
        { id: "f3", title: "How do I schedule an appointment?", content: "You can schedule through our online portal or call us directly." },
      ]}
      title="Frequently Asked Questions"
      description="Answers to your most common questions about our services."
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Dental Insights"
      description="Tips, advice, and updates from the clinic."
      blogs={[
        { id: "b1", category: "Health", title: "Keeping Your Smile Bright", excerpt: "Essential daily habits for your dental health.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-caucasian-girl-with-bun-brunette-hair-tattoo-her-shoulder-stripped-top-attractive-female-smiling-with-all-her-white-teeth-putting-her-hand-chest-endless-joy_273609-5710.jpg", authorName: "Dr. Smith", authorAvatar: "http://img.b2bpic.net/free-photo/caucasian-woman-smiling-face-expression-headshot-portrait_53876-65110.jpg", date: "Jan 12, 2024" },
        { id: "b2", category: "Cosmetic", title: "Whitening Options Explained", excerpt: "The truth about home vs professional whitening.", imageSrc: "http://img.b2bpic.net/free-photo/woman-working-as-dentist-with-green-screen-smartphone-oral-care-office-dentist-holding-mobile-phone-with-mockup-template-isolated-background-teethcare-dentistry_482257-39884.jpg", authorName: "Dr. Doe", authorAvatar: "http://img.b2bpic.net/free-photo/smiling-man-leaning-fist-looking-camera_23-2148179009.jpg", date: "Feb 05, 2024" },
        { id: "b3", category: "Tips", title: "Kids and Dentistry", excerpt: "How to make dental visits fun for children.", imageSrc: "http://img.b2bpic.net/free-photo/family-sitting-sofa-smiling_1098-1328.jpg", authorName: "Dr. Adams", authorAvatar: "http://img.b2bpic.net/free-photo/smiling-businesswoman-city-with-blurred-background_1139-257.jpg", date: "Mar 20, 2024" },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Book Your Appointment"
      description="We are ready to provide you with the premium care you deserve."
      inputs={[
        { name: "fullName", type: "text", placeholder: "Full Name", required: true },
        { name: "email", type: "email", placeholder: "Email Address", required: true },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/happy-young-lady-listening-music_171337-14087.jpg"
      buttonText="Schedule Now"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Village Dental NYC"
      leftLink={{ text: "Privacy Policy", href: "#" }}
      rightLink={{ text: "Terms of Service", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
