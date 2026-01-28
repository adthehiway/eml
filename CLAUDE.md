# EML Admin Panel - Claude Development Guide

## Project Overview

EML Admin Panel is a comprehensive business management system for Event Merchandising Limited, covering 4 business strands:
- **Retail** - Physical store sales via POS systems
- **E-Commerce** - Online sales primarily through Shopify
- **Live Events** - Tours, festivals, and venue merchandise
- **Food Traders** - Food vendor management at events

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives + custom components
- **State Management**: React Query for server state, Zustand for client state
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with role-based permissions
- **Charts**: Recharts for data visualization
- **Forms**: React Hook Form + Zod validation

## Design System

### Colors
- **Primary**: Indigo (#4F46E5) - Main actions, navigation highlights
- **Secondary**: Slate (#64748B) - Secondary text, borders
- **Success**: Emerald (#10B981) - Positive metrics, confirmations
- **Warning**: Amber (#F59E0B) - Alerts, pending states
- **Error**: Rose (#F43F5E) - Errors, negative metrics
- **Background**: White (#FFFFFF) / Slate-50 (#F8FAFC)

### Typography
- **Font**: Inter (Google Fonts) - Clean, highly legible
- **Headings**: Semibold (600)
- **Body**: Regular (400)
- **Monospace**: JetBrains Mono (for data/numbers)

### Spacing
- Use Tailwind's spacing scale consistently
- Cards: p-6, gap-6 between sections
- Form fields: gap-4

## Project Structure

```
/src
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Main dashboard layout
│   │   ├── dashboard/     # Overview dashboard
│   │   ├── admin/         # Admin & setup pages
│   │   ├── products/      # Product management
│   │   ├── inventory/     # Inventory management
│   │   ├── sales/         # Sales reporting
│   │   ├── live-events/   # Live events management
│   │   ├── food-traders/  # Food trader management
│   │   ├── customers/     # Customer data
│   │   ├── marketing/     # Marketing tools
│   │   ├── reports/       # Reporting center
│   │   ├── finance/       # Finance management
│   │   └── settings/      # System settings
│   └── api/               # API routes
├── components/
│   ├── ui/                # Base UI components
│   ├── dashboard/         # Dashboard-specific components
│   ├── forms/             # Form components
│   └── charts/            # Chart components
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript types
└── styles/                # Global styles
```

## Key Navigation Structure

Based on the information architecture, the main navigation sections are:
1. Dashboard
2. Admin / Setup
3. Products
4. Inventory
5. Sales
6. Live Events
7. Food Traders
8. Customers
9. Marketing
10. Reports
11. AI Assistant
12. Finance
13. Settings

## User Roles

- **Admin**: Full system access
- **Manager**: Most features, limited settings
- **Staff**: Operational access
- **Client (Gold)**: Read access to own data + live events
- **Client (Silver)**: Read access to own data only

## Development Guidelines

### Code Style
- Use TypeScript strict mode
- Prefer functional components with hooks
- Use descriptive variable names
- Keep components small and focused
- Extract reusable logic into custom hooks

### Component Patterns
- Use composition over props drilling
- Implement loading and error states
- Support keyboard navigation
- Follow accessibility best practices

### API Integration
- POS Systems: Shopify, NOQ, Square, AtVenu
- Finance: Xero
- Marketing: Google Analytics, Meta Ads
- Email: Klaviyo/Mailchimp

### Database Entities (Reference)
Key tables from the schema:
- COMPANIES, USERS, ROLES, LOCATIONS
- STORES, WAREHOUSES, VENUES
- PRODUCTS, PRODUCT_VARIANTS, CATEGORIES
- INVENTORY, INVENTORY_MOVEMENTS
- ORDERS, ORDER_ITEMS, TRANSACTIONS
- EVENTS, EVENT_DATES, EVENT_INVENTORY
- FOOD_TRADERS, MENUS, MENU_ITEMS
- MARKETING_CAMPAIGNS, MARKETING_SPEND
- INVOICES, SETTLEMENTS

## Phase 1 Focus

The initial build focuses on:
- Secure authentication with role-based access
- Sales analytics and reporting dashboards
- Retail vs E-commerce segmentation
- Live event reporting with manual Excel uploads
- Food trader reporting views
- Marketing spend tracking
- AI-powered natural language querying

## Commands

```bash
# Development (runs on port 3008)
npm run dev          # Start development server at localhost:3008
npm run build        # Production build
npm run start        # Start production server at localhost:3008
npm run lint         # Run ESLint

# Database
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema changes
npx prisma studio    # Open Prisma Studio
```

## Development Server

The development server always runs on **port 3008**:
- Local: http://localhost:3008

## Notes

- Prioritize Gold/Silver tier stores in E-commerce views (~20-30 stores)
- Live event data comes from manual Excel uploads (not automated in Phase 1)
- Client users have read-only access to their own data
- AI Assistant has department-specific access levels
