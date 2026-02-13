import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ServicePageHero from '@/components/service-page-hero';

export default function AIPage() {
  const content = {
    title: 'AI',
    description: [
      'AI Solution',
      'Our AI Solution service covers all aspects of AI applications, providing comprehensive, flexible, and efficient solutions:',
      '• Data Processing',
      '• Model Training',
      '• Model Optimisation',
      '• Model Deployment',
      '',
      'Computer Rental',
      'We offer a variety of high-performance computing resources rental services to meet diverse computational needs:',
      '• GPU Rental',
      '• CPU Rental',
      '• FPGA Rental',
      '• Cluster Rental',
    ],
    backgroundImage: 'https://cdn.abacus.ai/images/909b7f82-ebf3-420b-bbaa-c525e18875d3.png',
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicePageHero {...content} />
      <Footer />
    </main>
  );
}
