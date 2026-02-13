import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/home/hero-section';
import ServicePillars from '@/components/home/service-pillars';
import CustomerPromises from '@/components/home/customer-promises';
import TechnologyPartners from '@/components/home/technology-partners';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicePillars />
      <CustomerPromises />
      <TechnologyPartners />
      <Footer />
    </main>
  );
}
