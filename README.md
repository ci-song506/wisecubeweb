# WiseCube Technology - Enterprise Infrastructure Advisory Partner

A production-ready Next.js website for WiseCube Technology (Techcov) - a Singapore-based enterprise infrastructure advisory partner serving Asia Pacific.

## Overview

WiseCube Technology designs and delivers high-performance compute, AI infrastructure, and enterprise systems — engineered, tested, and optimised for real-world workloads across Asia Pacific.

## Features

- **Modern Design**: Professional, enterprise-grade UI with black + orange color scheme
- **Responsive Layout**: Mobile-first design that works seamlessly across all devices
- **Service Pages**: Dedicated pages for Storage, Service, and AI solutions
- **Contact Form**: PostgreSQL-backed form submissions with validation
- **Animations**: Smooth scroll-triggered animations using Framer Motion
- **Technology Partners**: Interactive logo showcase with hover effects
- **SEO Optimised**: Meta tags, Open Graph images, and semantic HTML

## Technology Stack

### Core Framework
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe development

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Database
- **PostgreSQL** - Relational database
- **Prisma** - Type-safe ORM

### UI Components
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications
- **next/image** - Optimised image loading

## Project Structure

```
nextjs_space/
├── app/
│   ├── api/
│   │   └── contact/          # Contact form API endpoint
│   ├── about/              # About Us page
│   ├── ai/                 # AI solutions page
│   ├── contact/            # Contact page with form
│   ├── service/            # Service solutions page
│   ├── storage/            # Storage solutions page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── home/               # Home page sections
│   ├── navbar.tsx          # Navigation component
│   ├── footer.tsx          # Footer component
│   ├── fade-in-section.tsx # Animation wrapper
│   └── ...                 # Other components
├── prisma/
│   └── schema.prisma       # Database schema
└── public/              # Static assets
```

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- Yarn package manager
- PostgreSQL database

### Installation

1. **Install dependencies**:
   ```bash
   cd nextjs_space
   yarn install
   ```

2. **Set up environment variables**:
   The `.env` file should already contain your `DATABASE_URL`. If not, create it:
   ```env
   DATABASE_URL="postgresql://..."
   ```

3. **Set up the database**:
   ```bash
   yarn prisma generate
   yarn prisma db push
   ```

### Development

Run the development server:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
yarn build
```

Start the production server:
```bash
yarn start
```

## Pages

### Home (`/`)
- Hero section with compelling headline
- Service pillars grid (Storage, Service, AI)
- Customer promises section
- Technology partners showcase

### Storage (`/storage`)
Dedicated page for storage solutions and distribution services.

### Service (`/service`)
Comprehensive information about high-performance server solutions.

### AI (`/ai`)
Details about AI solutions and computing rental services.

### About Us (`/about`)
Company information, mission, vision, and core values.

### Contact (`/contact`)
Consultation request form with database integration.

## Color Palette

### Core Colors
- **Jet Black**: `#0B0B0B` - Primary background
- **Charcoal**: `#121212` - Card backgrounds
- **Enterprise Orange**: `#F97316` - Primary accent
- **Highlight Orange**: `#FB923C` - Hover states

### Text Colors
- **White**: `#FFFFFF` - Headings
- **Light Grey**: `#D4D4D4` - Body text
- **Muted Grey**: `#9CA3AF` - Secondary text

### UI Accents
- **Borders**: `#262626`

## Key Features

### Contact Form
- Saves submissions to PostgreSQL database
- Comprehensive validation
- Toast notifications for user feedback
- No email integration (as specified)

### Animations
- Scroll-triggered entrance animations
- Smooth page transitions
- Hover effects on cards and buttons
- Sticky navbar with scroll behavior

### Partner Logos
- Grayscale display by default
- Color on hover
- Responsive grid layout
- All logos sourced from CDN

## Database Schema

### ContactSubmission Model
```prisma
model ContactSubmission {
  id                    String   @id @default(cuid())
  fullName              String
  companyName           String
  jobTitle              String
  email                 String
  phone                 String?
  primaryInterest       String
  currentChallenge      String?
  preferredContactMethod String
  howDidYouHear         String?
  createdAt             DateTime @default(now())
  updatedAt             DateTime @updatedAt
}
```

## Design Philosophy

**"Engineered Power"** - A bold, controlled aesthetic inspired by enterprise hardware and mission-critical systems. Dark, confident surfaces with high contrast typography. Orange used as signal, not decoration.

The website conveys:
- Professional credibility
- Technical expertise
- Trusted advisor relationship
- Enterprise-grade quality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The application is configured for deployment on Abacus.AI infrastructure with:
- Automatic environment variable loading
- PostgreSQL database integration
- Static asset optimization
- Production-ready build configuration

## Contact

**WiseCube Technology Pte Ltd**
- Email: admin@wise-cube.com.au
- Address: 231 Mountbatten Road, Block B #03-03A, Singapore 397999
- Locations: Singapore (HQ), Hong Kong, Sydney

## License

Copyright © 2026 WiseCube. All Rights Reserved.
