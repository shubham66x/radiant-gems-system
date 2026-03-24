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
          content="Radha Jewellers — Ludhiana's most trusted jeweller since 1985. Shop BIS hallmarked gold necklaces, bangles, earrings & bridal jewelry. 100% buyback guarantee. Visit our Chaura Bazar showroom."
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
              streetAddress: "Chaura Bazar, Near Ghumar Mandi",
              addressLocality: "Ludhiana",
              addressRegion: "Punjab",
              postalCode: "141008",
              addressCountry: "IN",
            },
            telephone: "+919876543210",
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
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
