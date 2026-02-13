'use client';

import Image from 'next/image';
import FadeInSection from './fade-in-section';

interface ServicePageHeroProps {
  title: string;
  description: string[];
  backgroundImage: string;
}

export default function ServicePageHero({
  title,
  description,
  backgroundImage,
}: ServicePageHeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-gradient-to-b from-[#0B0B0B]/80 to-[#0B0B0B]">
          <Image
            src={backgroundImage ?? ''}
            alt={`${title ?? 'Service'} background`}
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6">
        <FadeInSection>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">{title}</h1>
          <div className="w-24 h-1 bg-primary mb-12"></div>
        </FadeInSection>

        <div className="max-w-4xl">
          {description?.map?.((paragraph, index) => {
            if (paragraph === '') {
              return <div key={index} className="h-6" />;
            }
            
            const isBold = paragraph?.includes?.('AI Solution') || 
                          paragraph?.includes?.('Computer Rental') || 
                          paragraph?.includes?.('CPU Support') || 
                          paragraph?.includes?.('Memory:') || 
                          paragraph?.includes?.('Expansion:') || 
                          paragraph?.includes?.('Power & Reliability');
            
            return (
              <FadeInSection key={index} delay={index * 0.1}>
                <p
                  className={`text-lg md:text-xl text-foreground mb-6 leading-relaxed ${
                    isBold ? 'font-semibold text-white' : ''
                  }`}
                >
                  {paragraph}
                </p>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
