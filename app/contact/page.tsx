import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';
import FadeInSection from '@/components/fade-in-section';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <FadeInSection>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
              Let’s Talk Infrastructure
            </h1>
            <p className="text-xl text-foreground mb-12 text-center">
              Talk with our team.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="bg-card border border-secondary rounded-lg p-8 md:p-12">
              <ContactForm />
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
