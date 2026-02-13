'use client';

import { useState } from 'react';
import { Mail, Phone, Briefcase, User, MessageSquare } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    jobTitle: '',
    email: '',
    phone: '',
    primaryInterest: '',
    currentChallenge: '',
    preferredContactMethod: 'Email',
    howDidYouHear: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e?.target ?? {};
    setFormData((prev) => ({ ...prev, [name ?? '']: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, preferredContactMethod: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response?.ok) {
        toast.success(
          'Thank you. A Techcov consultant will contact you within one business day.',
          {
            duration: 5000,
            style: {
              background: '#121212',
              color: '#D4D4D4',
              border: '1px solid #F97316',
            },
          }
        );
        setFormData({
          fullName: '',
          companyName: '',
          jobTitle: '',
          email: '',
          phone: '',
          primaryInterest: '',
          currentChallenge: '',
          preferredContactMethod: 'Email',
          howDidYouHear: '',
        });
      } else {
        toast.error('Failed to submit form. Please try again.', {
          duration: 4000,
          style: {
            background: '#121212',
            color: '#D4D4D4',
            border: '1px solid #EF4444',
          },
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred. Please try again.', {
        duration: 4000,
        style: {
          background: '#121212',
          color: '#D4D4D4',
          border: '1px solid #EF4444',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-white font-medium mb-2">
              Full Name <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData?.fullName}
                onChange={handleChange}
                required
                className="w-full bg-background border border-secondary rounded-md pl-11 pr-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="companyName" className="block text-white font-medium mb-2">
              Company Name <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData?.companyName}
                onChange={handleChange}
                required
                className="w-full bg-background border border-secondary rounded-md pl-11 pr-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="jobTitle" className="block text-white font-medium mb-2">
              Job Title <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData?.jobTitle}
                onChange={handleChange}
                required
                className="w-full bg-background border border-secondary rounded-md pl-11 pr-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-white font-medium mb-2">
              Email <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData?.email}
                onChange={handleChange}
                required
                className="w-full bg-background border border-secondary rounded-md pl-11 pr-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-white font-medium mb-2">
            Phone
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData?.phone}
              onChange={handleChange}
              className="w-full bg-background border border-secondary rounded-md pl-11 pr-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="primaryInterest" className="block text-white font-medium mb-2">
            Primary Interest <span className="text-primary">*</span>
          </label>
          <select
            id="primaryInterest"
            name="primaryInterest"
            value={formData?.primaryInterest}
            onChange={handleChange}
            required
            className="w-full bg-background border border-secondary rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          >
            <option value="">Select an option</option>
            <option value="Infrastructure Modernisation">Infrastructure Modernisation</option>
            <option value="Cyber Resilience">Cyber Resilience</option>
            <option value="Hybrid Architecture">Hybrid Architecture</option>
            <option value="AI Enablement">AI Enablement</option>
            <option value="Not Sure Yet">Not Sure Yet</option>
          </select>
        </div>

        <div>
          <label htmlFor="currentChallenge" className="block text-white font-medium mb-2">
            Current Challenge
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <textarea
              id="currentChallenge"
              name="currentChallenge"
              value={formData?.currentChallenge}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your current infrastructure challenges..."
              className="w-full bg-background border border-secondary rounded-md pl-11 pr-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-white font-medium mb-3">
            Preferred Contact Method <span className="text-primary">*</span>
          </label>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            {['Email', 'Phone', 'Video Call']?.map?.((method) => (
              <label key={method} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContactMethod"
                  value={method}
                  checked={formData?.preferredContactMethod === method}
                  onChange={() => handleRadioChange(method)}
                  className="w-4 h-4 text-primary bg-background border-secondary focus:ring-primary focus:ring-2"
                />
                <span className="text-foreground">{method}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="howDidYouHear" className="block text-white font-medium mb-2">
            How did you hear about us?
          </label>
          <select
            id="howDidYouHear"
            name="howDidYouHear"
            value={formData?.howDidYouHear}
            onChange={handleChange}
            className="w-full bg-background border border-secondary rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          >
            <option value="">Select an option</option>
            <option value="Search Engine">Search Engine</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Referral">Referral</option>
            <option value="Conference/Event">Conference/Event</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white font-semibold px-8 py-4 rounded-md hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Request Consultation'}
        </button>
      </form>
    </>
  );
}
