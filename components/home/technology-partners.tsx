'use client';

import { useState } from 'react';
import Image from 'next/image';
import FadeInSection from '@/components/fade-in-section';

export default function TechnologyPartners() {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  const partners = [
    {
      name: 'MemBlaze',
      logo: 'https://cdn.abacus.ai/images/b7e8dc02-abbe-4a4c-809e-73e58d361e19.png',
    },
    {
      name: 'Kaytus',
      logo: 'https://cdn.abacus.ai/images/a5e20f2b-a524-4ef2-9cf4-5fd75bd42aae.png',
    },
    {
      name: 'GIGABYTE',
      logo: 'https://cdn.abacus.ai/images/4ac8f552-6875-4de0-b4b5-3c357ba16417.png',
    },
    {
      name: 'SuperMicro',
      logo: 'https://cdn.abacus.ai/images/f641c317-4c77-4321-bc1f-21d11b7730d6.png',
    },
    {
      name: 'Dapustor',
      logo: 'https://cdn.abacus.ai/images/bcfd6b8f-1fbe-4979-959f-90cbd12005b3.png',
    },
    {
      name: 'xFusion',
      logo: 'https://mms.businesswire.com/media/20250612879566/en/2496560/5/xFusion_RGB_PNG.jpg?download=1',
    },
    {
      name: 'Dell Technologies',
      logo: 'https://cdn.abacus.ai/images/ad21dd1d-606f-435f-a006-6618ac6a436c.png',
    },
    {
      name: 'H3C',
      logo: 'https://cdn.abacus.ai/images/80191fb5-487a-45f3-8e77-cf35a36e2333.png',
    },
    {
      name: 'Bluechip',
      logo: 'https://cdn.abacus.ai/images/846aec69-3fd8-4345-aa80-08d4aa37fc75.png',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-content mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Vendor-Independent. Technology-Agnostic.
          </h2>
          <p className="text-xl text-center text-foreground mb-16">
            We recommend the right solution regardless of vendor relationship.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners?.map?.((partner, index) => (
            <FadeInSection key={partner?.name} delay={index * 0.1}>
              <div
                className="relative bg-card border border-secondary rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                onMouseEnter={() => setHoveredLogo(partner?.name ?? null)}
                onMouseLeave={() => setHoveredLogo(null)}
              >
                <div className="relative h-20 flex items-center justify-center">
                  <Image
                    src={partner?.logo ?? ''}
                    alt={`${partner?.name ?? 'Partner'} logo`}
                    fill
                    className={`object-contain transition-all duration-300 ${
                      hoveredLogo === partner?.name ? 'grayscale-0' : 'grayscale brightness-200'
                    }`}
                  />
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
