import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  description: string;
  capabilities: string[];
  icon: LucideIcon;
  href: string;
}

export default function ServiceCard({
  name,
  description,
  capabilities,
  icon: Icon,
  href,
}: ServiceCardProps) {
  return (
    <div className="group bg-card border border-secondary rounded-lg p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:border-primary/50">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-white">{name}</h3>
      </div>
      
      <p className="text-foreground mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-3 mb-6">
        {capabilities?.map?.((capability, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className="text-primary mt-1">•</span>
            <span className="text-foreground">{capability}</span>
          </li>
        ))}
      </ul>
      
      <Link
        href={href}
        className="inline-flex items-center text-primary hover:text-accent transition-colors group-hover:underline"
      >
        Learn More
        <svg
          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
}
