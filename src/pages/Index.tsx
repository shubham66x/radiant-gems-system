import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import StorySection from "@/components/StorySection";
import CollectionsSection from "@/components/CollectionsSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import BranchesSection from "@/components/BranchesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Radha Jewellers Ludhiana | BIS Hallmarked Gold & Diamond Jewelry</title>
        <meta
          name="description"
          content="Radha Jewellers — Ludhiana's most trusted jeweller since 1970. Shop BIS hallmarked 22K gold, 925 silver & diamond jewellery. Old gold buyback. 3 showrooms in Ludhiana."
        />
        <meta name="keywords" content="gold jewellers ludhiana, bridal jewelry ludhiana, hallmarked gold jewelry, radha jewellers, punjab wedding jewelry, gold necklace ludhiana" />
        <link rel="canonical" href="https://radhajewellers.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JewelryStore",
            name: "Radha Jewellers",
            image: "https://radhajewellers.com/hero-jewelry.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Haibowal Main Rd, Near UCO Bank, Durga Puri",
              addressLocality: "Ludhiana",
              addressRegion: "Punjab",
              postalCode: "141001",
              addressCountry: "IN",
            },
            telephone: "+919855080128",
            openingHours: "Mo-Sa 10:00-20:00",
            priceRange: "₹₹₹",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "1250",
            },
          })}
        </script>
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <StorySection />
        <CollectionsSection />
        <BenefitsSection />
        <TestimonialsSection />
        <OfferSection />
        <BranchesSection />
        <ContactSection />
      </main>
      <Footer />
      <AIChatbot />
    </>
  );
};

export default Index;
