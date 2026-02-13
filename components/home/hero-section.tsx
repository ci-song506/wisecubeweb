'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B] via-[#121212] to-[#0B0B0B]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Store your world with us
          </h1>
          <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto mb-10 leading-relaxed">
            WiseCube Technology designs and delivers high-performance compute, AI infrastructure, 
            and enterprise systems — engineered, tested, and optimised for real-world workloads.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-md hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20 group"
          >
            <span className="text-lg font-semibold">Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
