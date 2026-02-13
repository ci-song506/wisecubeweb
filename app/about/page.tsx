import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FadeInSection from '@/components/fade-in-section';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card border border-secondary rounded-lg p-8 md:p-12">
              <FadeInSection>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">About Us</h1>
                <div className="w-24 h-1 bg-primary mb-8"></div>
              </FadeInSection>

              <div className="space-y-6">
                <FadeInSection delay={0.2}>
                  <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
                  <p className="text-foreground leading-relaxed">
                    WiseCube is a IT integrator that combines top-tier Chinese hardware—such as 
                    AI-optimised servers and distributed storage clusters—with localised consulting, 
                    deployment, and managed services. We help enterprises across Southeast Asia modernise 
                    their infrastructure with solutions that are cost-effective, scalable, and reliable.
                  </p>
                </FadeInSection>

                <FadeInSection delay={0.3}>
                  <h2 className="text-2xl font-bold text-white mb-4">What we do</h2>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-white">End-to-end delivery:</strong> Architecture design, hardware sourcing, deployment, and ongoing managed services.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-white">AI & Data Platforms:</strong> GPU server stacks compatible with mainstream AI frameworks; low-latency NVMe storage for real-time analytics.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-white">Distributed Storage:</strong> High availability and fault-tolerant clusters for finance, healthcare, and mission-critical workloads.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-white">Local Support:</strong> Singapore-led project management, compliance alignment, and multilingual technical support.</span>
                    </li>
                  </ul>
                </FadeInSection>

                <FadeInSection delay={0.4}>
                  <div className="pt-6">
                    <p className="text-foreground mb-2">
                      <strong className="text-white">Our mission:</strong> Empower businesses with affordable, scalable IT infrastructure.
                    </p>
                    <p className="text-foreground">
                      <strong className="text-white">Our vision:</strong> Become Southeast Asia’s leading IT integrator.
                    </p>
                  </div>
                </FadeInSection>
              </div>
            </div>

            <div className="bg-primary rounded-lg p-8 md:p-12">
              <FadeInSection delay={0.5}>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Why Wisecube</h1>
                <div className="w-24 h-1 bg-white mb-8"></div>
              </FadeInSection>

              <div className="space-y-6">
                <FadeInSection delay={0.6}>
                  <div className="space-y-6 text-white">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Honest</h3>
                      <p>Be open and honest in both life and business</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Respect For Time</h3>
                      <p>Value and respect our time as well as the time of others</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Reliability</h3>
                      <p>Be reliable at all levels – our partners, vendors, and coworkers count on us</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Embrace Challenges</h3>
                      <p>Challenge ourselves daily and welcome new opportunities for growth</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Enjoy life</h3>
                      <p>Stay invigorated and innovative, finding joy in the experiences of life</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Be Confident</h3>
                      <p>Make things happen and feel secure and confident in oneself.</p>
                    </div>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
