import { Server, Database, Cpu } from 'lucide-react';
import ServiceCard from '@/components/service-card';
import FadeInSection from '@/components/fade-in-section';

export default function ServicePillars() {
  const services = [
    {
      name: 'Service',
      description: 'WCT offer a diverse range of computing solutions, including GPU and server sales. Collaborating with leading GPU manufacturers and server suppliers globally, WCT deliver cutting-edge products for high-performance computing.',
      capabilities: [
        'GPU & Server Sales',
        'Global Partnerships',
        'High-Performance Computing',
      ],
      icon: Server,
      href: '/service',
    },
    {
      name: 'Storage',
      description: 'WCT specialises in delivering top-notch distribution services tailored for IT data storage software and hardware solutions.',
      capabilities: [
        'Data Storage Solutions',
        'Software & Hardware',
        'Distribution Services',
      ],
      icon: Database,
      href: '/storage',
    },
    {
      name: 'AI',
      description: 'Our AI Solution service covers all aspects of AI applications, providing comprehensive, flexible, and efficient solutions. We also offer a variety of high-performance computing resources rental services to meet diverse computational needs.',
      capabilities: [
        'AI Applications',
        'Model Training & Deployment',
        'GPU/CPU Rental Services',
      ],
      icon: Cpu,
      href: '/ai',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-content mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Solutions</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services?.map?.((service, index) => (
            <FadeInSection key={service?.name} delay={index * 0.2}>
              <ServiceCard {...service} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
