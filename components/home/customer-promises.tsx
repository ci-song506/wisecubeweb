import { Shield, Award, TrendingUp, Handshake } from 'lucide-react';
import FadeInSection from '@/components/fade-in-section';

export default function CustomerPromises() {
  const promises = [
    {
      icon: Shield,
      title: 'Honest Assessment',
      description: 'We tell you what you need to hear, not what you want to hear.',
    },
    {
      icon: Award,
      title: 'Validated Solutions',
      description: 'Every recommendation tested in environments like yours.',
    },
    {
      icon: TrendingUp,
      title: 'Quantified ROI',
      description: 'Documented business value, not just technical specifications.',
    },
    {
      icon: Handshake,
      title: 'Enduring Partnership',
      description: 'Accountability beyond the purchase order. Covenant over contract.',
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-content mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            The WiseCube Technology Covenant
          </h2>
          <p className="text-xl text-center text-foreground mb-16">
            When enterprises partner with us, they receive:
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises?.map?.((promise, index) => {
            const Icon = promise?.icon;
            return (
              <FadeInSection key={promise?.title} delay={index * 0.15}>
                <div className="bg-background border border-secondary rounded-lg p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-primary/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{promise?.title}</h3>
                  <p className="text-foreground leading-relaxed">{promise?.description}</p>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
