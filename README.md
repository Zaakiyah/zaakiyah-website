# Zaakiyah Website

A modern, responsive website for Zaakiyah - an innovative platform designed to revolutionize how Muslims fulfill their Zakaat obligations with confidence, transparency, and Shariah compliance.

## 🚀 Features

### Core Functionality
- **Zakaat Calculator**: Tools and resources for accurate Zakaat calculations
- **Donation Platform**: Secure donation processing and distribution
- **Educational Content**: Blog posts and guides about Zakaat and Islamic giving
- **Help Center**: Comprehensive FAQ and support resources
- **Transparency**: Track donations and see impact

### Technical Features
- **Modern UI/UX**: Clean, sleek, and attention-catching design
- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Accessibility**: ARIA labels and keyboard navigation support
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Routing**: TanStack Router
- **Styling**: Tailwind CSS 4
- **Icons**: Hugeicons React
- **Code Quality**: ESLint + TypeScript

## 📁 Project Structure

```
src/
├── assets/              # Images and SVG assets
├── components/
│   ├── common/         # Reusable components
│   │   ├── BlogCard.tsx
│   │   ├── Button.tsx
│   │   ├── FAQ.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── PageHeader.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── SEO.tsx
│   │   ├── StepCard.tsx
│   │   └── TopBannerStats.tsx
│   ├── home/           # Homepage-specific components
│   │   ├── Hero.tsx
│   │   ├── WhyChooseZaakiyah.tsx
│   │   ├── HowZaakiyahSimplifiesGiving.tsx
│   │   ├── ImpactStories.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── FAQ.tsx
│   │   └── AppDownload.tsx
│   └── layout/         # Layout components
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── Layout.tsx
├── data/               # Data files (separated from components)
│   ├── aboutData.ts
│   ├── blogData.ts
│   ├── faqData.ts
│   ├── featuresData.ts
│   ├── navData.ts
│   ├── stepsData.ts
│   └── storiesData.ts
└── pages/              # Page components
    ├── Home.tsx
    ├── About.tsx
    ├── Blog.tsx
    ├── BlogPost.tsx
    ├── HelpCenter.tsx
    ├── PrivacyPolicy.tsx
    ├── TermsOfService.tsx
    ├── CookiePolicy.tsx
    └── NotFound.tsx
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zaakiyah-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
pnpm preview
```

## 📄 Pages

- **Home** (`/`) - Main landing page with hero, features, and call-to-action
- **About** (`/about`) - Company mission, vision, values, and story
- **Blog** (`/blog`) - Blog listing page with categories and search
- **Blog Post** (`/blog/:id`) - Individual blog post pages
- **Help Center** (`/help`) - FAQ, help categories, and support contact
- **Privacy Policy** (`/privacy`) - Privacy policy and data protection information
- **Terms of Service** (`/terms`) - Terms and conditions
- **Cookie Policy** (`/cookies`) - Cookie usage and management information
- **404** - Custom not found page

## 🎨 Design System

### Colors
- **Primary Dark**: `#002828`
- **Primary Teal**: `#00939D`
- **Light Teal**: `#E0F2F2`
- **White**: `#FFFFFF`

### Typography
- Headings: Bold, large sizes with gradient text effects
- Body: Medium weight, readable line heights
- Responsive text sizing with Tailwind breakpoints

### Components
- Reusable card components with hover effects
- Gradient backgrounds and borders
- Smooth transitions and animations
- Mobile-first responsive design

## 🔧 Key Features Implemented

### Navigation
- Modern navbar with scroll-based styling
- Active link indicators
- Mobile-responsive hamburger menu
- Smooth scroll to sections
- Download App button linking to home section

### Homepage Sections
- **Hero**: Transformative messaging with action buttons and key features
- **Why Choose Zaakiyah**: Feature highlights with icons
- **How Zaakiyah Simplifies Giving**: Step-by-step process
- **Impact Stories**: Testimonials and statistics
- **How It Works**: Clear process explanation
- **FAQ**: Frequently asked questions
- **App Download**: Mobile app showcase with screenshots

### Reusable Components
- `PageHeader`: Consistent page headers with background
- `SectionHeader`: Section titles with underlines
- `FeatureCard`: Feature display cards
- `StepCard`: Process step cards
- `BlogCard`: Blog post preview cards
- `FAQAccordion`: Expandable FAQ items
- `TopBannerStats`: Statistics banner component

### Data Organization
- All data separated into dedicated files in `src/data/`
- Easy to update content without touching components
- Type-safe data structures

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Touch-friendly buttons and interactions
- Optimized images and assets
- Responsive typography scaling

## 🔗 External Links

- **WhatsApp Support**: `https://wa.me/2348101424375`
- **Email Support**: `mailto:info@zaakiyah.com`
- **Social Media**: Links in footer (Facebook, Twitter, LinkedIn)

## 🧹 Code Quality

- TypeScript for type safety
- ESLint for code quality
- Consistent code formatting
- Reusable components to avoid duplication
- Clean separation of concerns (data, components, pages)

## 📝 Recent Updates

### Modernization & Cleanup
- ✅ Modernized entire homepage with clean, sleek design
- ✅ Redesigned navbar with scroll effects and mobile menu
- ✅ Created standalone 404 page with minimal navigation
- ✅ Separated data from components into dedicated files
- ✅ Created reusable components (FeatureCard, StepCard, BlogCard, etc.)
- ✅ Implemented global FAQ component with accordion
- ✅ Fixed mobile menu drawer scrolling issues
- ✅ Made TopBannerStats responsive
- ✅ Fixed share buttons overflow on blog post pages
- ✅ Updated favicon
- ✅ Created Privacy Policy, Terms of Service, and Cookie Policy pages
- ✅ Linked support buttons (WhatsApp and Email)
- ✅ Cleaned up unused imports

## 🚀 Deployment

The project is configured for deployment on Vercel. The `vercel.json` file contains deployment settings.

## 📄 License

Private project - All rights reserved.

## 👥 Contact

- **Email**: info@zaakiyah.com
- **WhatsApp**: +234 810 142 4375
- **Website**: https://zaakiyah.com

---

Built with ❤️ for the Muslim community
