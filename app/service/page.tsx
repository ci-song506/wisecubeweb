import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ServicePageHero from '@/components/service-page-hero';

export default function ServicePage() {
  const content = {
    title: 'SERVICE',
    description: [
      'WCT delivers a comprehensive portfolio of high-performance server solutions tailored for AI training, high-frequency trading, enterprise data analysis, and cloud computing.',
      'Our server range includes 1U–4U rack servers and GPU-optimised platforms such as 4U 8-GPU PCIe 5.0 systems, ensuring maximum computing density and flexibility.',
      'CPU Support: Latest Intel® Xeon® Scalable (6500/6700 series, 4th Gen) and AMD EPYC™ 9004/9005 processors with up to 192 cores.',
      'Memory: DDR5 configuration with high-frequency support for intensive workloads.',
      'Expansion: Multiple PCIe 5.0 slots for GPU and accelerator cards, NVMe storage, and RAID options.',
      'Power & Reliability: CRPS redundant power supply, advanced cooling, and enterprise-grade stability.',
      'Whether you are an enterprise, cloud provider, or research institution, WCT works with leading partners to deliver scalable, future-ready server infrastructures. With end-to-end support and system integration, we ensure both performance and reliability for your mission-critical applications.',
    ],
    backgroundImage: 'https://cdn.abacus.ai/images/16c07495-8f80-4bcd-b278-37daead89eb5.png',
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicePageHero {...content} />
      <Footer />
    </main>
  );
}
