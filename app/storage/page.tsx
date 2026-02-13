import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ServicePageHero from '@/components/service-page-hero';

export default function StoragePage() {
  const content = {
    title: 'STORAGE',
    description: [
      'WCT specialises in delivering top-notch distribution services tailored for IT data storage software and hardware solutions. Our dedicated focus is on serving customers located in the Australia, and Asia regions.',
      'Our operations are built around a broad partner ecosystem, including system integrators, managed and cloud service providers, telcos, and their partners, serving businesses from small enterprises to large corporations.',
      'Our commitment is to provide professional and comprehensive distribution solutions, ensuring that our clients have access to cutting-edge IT solutions through a seamless and efficient distribution process.',
    ],
    backgroundImage: 'https://cdn.abacus.ai/images/6fcc8579-dabf-44d2-ab0c-d64879a75d66.png',
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicePageHero {...content} />
      <Footer />
    </main>
  );
}
