# Alberto Rodríguez Couture - Website

## Overview

This is a sophisticated, high-end luxury fashion website for Alberto Rodríguez Couture, a prestigious haute couture house founded in 1986 and based in Guadalajara, Mexico. The application features premium visual elements, responsive hamburger navigation, and video hero sections that replicate the luxury aesthetics of Louis Vuitton and Zuhair Murad. The site showcases collections, provides company information, and handles customer inquiries for custom wedding dresses and formal wear.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Updates (January 2025)

- **Enhanced Hamburger Menu**: Implemented premium animated hamburger navigation with slide-out sidebar, contact information, and social links
- **Video Hero Component**: Created immersive video hero section with custom controls and elegant overlays
- **Visual Effects**: Added sophisticated animations, scroll effects, and micro-interactions throughout
- **Netlify Configuration**: Complete setup for deployment including netlify.toml, _redirects, and manifest.json
- **SEO Optimization**: Enhanced meta tags, structured data, and Open Graph implementation
- **Documentation**: Comprehensive README.md with local development and Netlify CLI deployment instructions

## System Architecture

### Frontend Architecture
The client-side is built with **React 18** and **Vite** for fast development and building. The application uses:

- **Wouter** for lightweight client-side routing instead of React Router
- **Tailwind CSS** with custom luxury color scheme and typography variables
- **Framer Motion** for smooth animations and page transitions
- **shadcn/ui** component library with Radix UI primitives for accessible, high-quality components
- **TanStack Query (React Query)** for efficient data fetching and caching

The frontend follows a component-based architecture with:
- Page components for main routes (Home, Collections, About, Contact)
- Reusable UI components (CollectionCard, HeroSection, ServiceCard)
- Layout components (Header, Footer)
- A centralized styling system using CSS custom properties

### Backend Architecture
The server is built with **Express.js** and follows a RESTful API pattern:

- **TypeScript** throughout for type safety
- API routes organized in a separate routes module
- Storage abstraction layer with interfaces for data operations
- In-memory mock storage implementation for development
- Middleware for request logging and error handling

### Database Design
The application uses **Drizzle ORM** with PostgreSQL schema including:

- **Collections** table for fashion collections with metadata, images, and seasonal information
- **Projects** table for individual pieces linked to collections
- **Biography** table for company/designer information
- **Users** table for authentication
- **News** and **Contact** tables for content management

Tables include proper relationships, timestamps, and JSON fields for flexible data like image arrays and tags.

### UI/UX Architecture
The design system emphasizes luxury and minimalism:

- Custom color palette with luxury gold (#D4AF37) as the primary accent
- Typography hierarchy using Playfair Display (serif) and Inter (sans-serif)
- Responsive design optimized for both desktop and mobile experiences
- Smooth animations and hover effects for enhanced user experience
- Full-screen hero sections with immersive imagery

### Development Environment
The project is configured for modern development practices:

- **ESM modules** throughout the application
- **Vite** for fast hot module replacement during development
- **TypeScript** strict mode for enhanced code quality
- **Path aliases** for clean imports (@/ for client, @shared for shared types)
- **PostCSS** with Tailwind CSS and Autoprefixer

## External Dependencies

### Database
- **Neon Database** (@neondatabase/serverless) - Serverless PostgreSQL hosting
- **Drizzle ORM** - Type-safe SQL query builder and schema management
- **Drizzle Kit** - Database migration and schema management tools

### UI Libraries
- **shadcn/ui components** - Complete set of accessible UI primitives built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework with custom design tokens
- **Framer Motion** - Animation library for smooth transitions and interactions
- **Lucide React** - Icon library for consistent iconography

### Development Tools
- **Vite** - Fast build tool and development server
- **TypeScript** - Static type checking and enhanced developer experience
- **ESBuild** - Fast JavaScript bundler for production builds

### Routing and State Management
- **Wouter** - Lightweight routing library for React
- **TanStack Query** - Data fetching, caching, and synchronization
- **React Hook Form** with Zod validation - Form handling and validation

### Styling and Theming
- **Tailwind CSS** with custom configuration for luxury brand styling
- **CSS custom properties** for consistent theming
- **Google Fonts** integration for typography (Playfair Display, Inter)

The application is designed to be deployed on platforms like Netlify or Vercel, with the database hosted on Neon for scalability and performance.