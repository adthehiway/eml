# EML Admin Panel - Information Architecture & Database Structure

## Executive Summary
This document outlines the complete hierarchy, user flows, and database schema for the EML Event Merchandising admin panel covering all 4 business strands: Retail, E-Commerce, Live Events, and Food Traders.

---

## 1. NAVIGATION HIERARCHY

```
├── DASHBOARD
│   ├── Overview (all strands snapshot)
│   ├── Quick Actions
│   └── Alerts & Notifications
│
├── ADMIN / SETUP
│   ├── Companies / Clients
│   │   ├── Add/Edit Company
│   │   ├── Client Tiers (Gold, Silver, Bronze)
│   │   ├── Client Contracts
│   │   └── Client Portal Access
│   │
│   ├── Locations
│   │   ├── Stores
│   │   │   ├── Add/Edit Store
│   │   │   ├── Store Type (Flagship, Pop-up, Concession)
│   │   │   └── Assign POS System
│   │   ├── Warehouses
│   │   │   ├── Add/Edit Warehouse
│   │   │   ├── Warehouse Zones
│   │   │   └── Default Warehouse Rules
│   │   └── Venues (for Live Events)
│   │       ├── Venue Database
│   │       ├── Venue Contacts
│   │       └── Venue Terms/Fees
│   │
│   ├── POS Systems
│   │   ├── Shopify Connections
│   │   ├── NOQ Connections
│   │   ├── Square Connections
│   │   ├── AtVenu Connections
│   │   └── Manual Import Templates
│   │
│   ├── Integrations
│   │   ├── Xero (Finance)
│   │   ├── FileMaker Sync
│   │   ├── Shopify API
│   │   ├── Google Analytics
│   │   ├── Meta Ads
│   │   └── Email Platform (Mailchimp/Klaviyo)
│   │
│   └── System Settings
│       ├── Tax Rates
│       ├── Currency Settings
│       ├── Default Margins
│       └── Notification Rules
│
├── PRODUCTS
│   ├── Product Catalogue
│   │   ├── Add/Edit Product
│   │   ├── Product Categories
│   │   ├── Product Attributes (Size, Colour, etc.)
│   │   ├── Product Images
│   │   └── Product Status (Active/Discontinued)
│   │
│   ├── Pricing
│   │   ├── Base Pricing
│   │   ├── Client-Specific Pricing
│   │   ├── Event-Specific Pricing
│   │   ├── Promotional Pricing
│   │   └── Multi-Currency Pricing
│   │
│   ├── Suppliers
│   │   ├── Supplier Directory
│   │   ├── Supplier Products & Pricing
│   │   ├── Lead Times
│   │   └── Supplier Performance
│   │
│   ├── Purchase Orders
│   │   ├── Create PO
│   │   ├── PO Approval Workflow
│   │   ├── PO Tracking
│   │   ├── Goods Received
│   │   └── PO History
│   │
│   └── Product Bundles / Kits
│       ├── Bundle Creation
│       └── Bundle Pricing
│
├── INVENTORY
│   ├── Stock Overview
│   │   ├── By Warehouse
│   │   ├── By Store
│   │   ├── By Product
│   │   └── By Client/Company
│   │
│   ├── Stock Movements
│   │   ├── Transfers (Warehouse → Store)
│   │   ├── Transfers (Store → Store)
│   │   ├── Returns Processing
│   │   └── Write-offs / Adjustments
│   │
│   ├── Stock Takes
│   │   ├── Schedule Stock Take
│   │   ├── Stock Take Entry
│   │   ├── Variance Reports
│   │   └── Stock Take History
│   │
│   ├── Reorder Management
│   │   ├── Low Stock Alerts
│   │   ├── Reorder Points
│   │   ├── Auto-Reorder Rules
│   │   └── Suggested Orders
│   │
│   └── Consignment Stock
│       ├── Stock on Consignment
│       ├── Consignment Returns
│       └── Consignment Reconciliation
│
├── SALES
│   ├── Sales Dashboard
│   │   ├── Today's Sales
│   │   ├── Comparison (vs Yesterday, Last Week, Last Year)
│   │   └── Sales Velocity
│   │
│   ├── By Channel
│   │   ├── E-Commerce Sales
│   │   │   ├── By Store Tier (Gold / Silver / Other)
│   │   │   ├── By Store (Gold/Silver tier focus: ~20-30 stores)
│   │   │   ├── By Product
│   │   │   └── By Geography
│   │   ├── Retail Sales
│   │   │   ├── By Store
│   │   │   ├── By Staff Member
│   │   │   └── By Payment Method
│   │   ├── Live Event Sales
│   │   │   ├── By Tour/Festival
│   │   │   ├── By Venue
│   │   │   └── By Crew/Staff
│   │   └── Food Trader Sales
│   │       ├── By Trader
│   │       ├── By Event
│   │       └── By Menu Item
│   │
│   ├── By Platform
│   │   ├── Shopify
│   │   ├── NOQ
│   │   ├── Square
│   │   ├── AtVenu
│   │   └── Manual/Other
│   │
│   ├── By Product
│   │   ├── Product Performance
│   │   ├── Best Sellers
│   │   ├── Slow Movers
│   │   └── Product Comparison
│   │
│   ├── Orders
│   │   ├── Order List
│   │   ├── Order Details
│   │   ├── Order Status
│   │   └── Refunds & Returns
│   │
│   └── Transactions
│       ├── Transaction Log
│       ├── Payment Reconciliation
│       └── Failed Transactions
│
├── LIVE EVENTS
│   ├── Tours
│   │   ├── Active Tours
│   │   ├── Create Tour
│   │   ├── Tour Schedule (Venues/Dates)
│   │   ├── Tour Inventory Allocation
│   │   ├── Tour Staff Assignment
│   │   └── Tour Performance
│   │
│   ├── Festivals
│   │   ├── Festival Calendar
│   │   ├── Festival Setup
│   │   ├── Pitch/Stand Allocation
│   │   └── Festival Performance
│   │
│   ├── Snapshot Reporting
│   │   ├── By Tour (aggregate performance)
│   │   ├── By Venue (venue-level breakdown)
│   │   ├── By Date (daily performance)
│   │   └── Combined Filters
│   │
│   ├── Venues
│   │   ├── Venue Database
│   │   ├── Venue Contacts
│   │   ├── Venue Commission Rates
│   │   └── Venue Performance History
│   │
│   ├── Crew / Staff
│   │   ├── Staff Database
│   │   ├── Staff Scheduling
│   │   ├── Staff Performance
│   │   └── Staff Payments
│   │
│   ├── Event Reports
│   │   ├── Upload External Report (Excel/CSV)
│   │   │   ├── Arena Reports
│   │   │   ├── Theatre Reports
│   │   │   ├── Third-Party Venue Reports
│   │   │   └── Festival Reports
│   │   ├── Report Templates
│   │   ├── Report Mapping (map columns to system fields)
│   │   ├── Report Reconciliation
│   │   └── Report History
│   │
│   └── Settlements
│       ├── Venue Settlements
│       ├── Artist/Client Settlements
│       └── Commission Calculations
│
├── FOOD TRADERS
│   ├── Traders
│   │   ├── Trader Directory
│   │   ├── Trader Documents
│   │   ├── Trader Performance
│   │   └── Trader Payments
│   │
│   ├── Menus
│   │   ├── Menu Management
│   │   ├── Menu Upload
│   │   ├── Price Management
│   │   └── Menu Templates
│   │
│   ├── Sales Reporting
│   │   ├── By Trader
│   │   ├── By Event
│   │   ├── By Menu Item (item-level detail)
│   │   ├── By Category
│   │   └── Client-Facing Views
│   │
│   ├── Events
│   │   ├── Event Assignment
│   │   ├── Till Setup
│   │   └── Event Reporting
│   │
│   └── Settlements
│       ├── Trader Settlements
│       ├── Commission Reports
│       └── Payment History
│
├── CUSTOMERS
│   ├── Customer Database
│   │   ├── Customer List
│   │   ├── Customer Details
│   │   ├── Purchase History
│   │   └── Customer Segments
│   │
│   ├── Customer Analytics
│   │   ├── Lifetime Value
│   │   ├── Purchase Frequency
│   │   ├── Average Order Value
│   │   └── Cohort Analysis
│   │
│   └── Customer Export
│       ├── GDPR Compliance
│       └── Marketing Lists
│
├── MARKETING
│   ├── Overview Dashboard
│   │   ├── Spend vs Revenue
│   │   ├── ROAS by Channel
│   │   └── Campaign Performance
│   │
│   ├── By Company/Client
│   │   ├── Client Marketing Overview
│   │   ├── SEO Performance
│   │   ├── PPC (Google Ads)
│   │   ├── Social (Meta/TikTok)
│   │   └── Budget Tracking
│   │
│   ├── By Product
│   │   ├── Product Marketing Performance
│   │   ├── Product Ad Spend
│   │   └── Product Attribution
│   │
│   ├── By Platform
│   │   ├── Google Analytics
│   │   ├── Meta Ads Manager
│   │   ├── TikTok Ads
│   │   └── Other Platforms
│   │
│   ├── By Channel
│   │   ├── Organic Search
│   │   ├── Paid Search
│   │   ├── Social Organic
│   │   ├── Social Paid
│   │   ├── Email
│   │   ├── Affiliate
│   │   └── Direct
│   │
│   ├── Tools
│   │   ├── CRM
│   │   │   ├── Contacts
│   │   │   ├── Deals/Opportunities
│   │   │   ├── Tasks
│   │   │   └── Notes
│   │   ├── Email Marketing
│   │   │   ├── Campaign Builder
│   │   │   ├── Mailer Scheduler
│   │   │   │   ├── Schedule New Mailer
│   │   │   │   ├── Scheduled Queue
│   │   │   │   └── Sent History
│   │   │   ├── Templates
│   │   │   ├── Lists/Segments
│   │   │   ├── Automation Flows
│   │   │   └── Performance Tracking
│   │   └── Content Calendar
│   │       ├── Social Posts
│   │       ├── Email Schedule
│   │       └── Campaign Timeline
│   │
│   └── Attribution
│       ├── Multi-Touch Attribution
│       ├── First/Last Click
│       └── Custom Models
│
├── REPORTS
│   ├── Standard Reports
│   │   ├── Daily Report
│   │   ├── Weekly Report
│   │   ├── Monthly Report
│   │   ├── Quarterly Report
│   │   ├── Year on Year
│   │   ├── Month on Month (MoM)
│   │   └── Week on Week (WoW)
│   │
│   ├── Sales Reports
│   │   ├── Sales Summary
│   │   ├── Sales by Product
│   │   ├── Sales by Location
│   │   ├── Sales by Client
│   │   └── Sales Comparison
│   │
│   ├── Product Reports
│   │   ├── Product ROI Analysis (cost vs revenue)
│   │   ├── Product Margin Analysis
│   │   ├── Product Performance by Channel
│   │   ├── Best/Worst Performers
│   │   └── Product Lifecycle
│   │
│   ├── Inventory Reports
│   │   ├── Stock Valuation
│   │   ├── Stock Aging
│   │   ├── Dead Stock
│   │   └── Stock Turn
│   │
│   ├── Demand Planning
│   │   ├── Forecasting
│   │   ├── Seasonal Analysis
│   │   ├── Event-Based Planning
│   │   └── Reorder Recommendations
│   │
│   ├── Finance Reports
│   │   ├── Revenue Summary
│   │   │   ├── By Company
│   │   │   ├── By Outlet
│   │   │   └── By Product
│   │   ├── Profit & Loss
│   │   ├── Commission Reports
│   │   ├── Settlement Reports
│   │   ├── Tax Reports (VAT)
│   │   └── Xero Sync Status
│   │
│   ├── Marketing Reports
│   │   ├── Campaign ROI
│   │   ├── Channel Performance
│   │   └── Attribution Reports
│   │
│   ├── Custom Reports
│   │   ├── Report Builder
│   │   ├── Saved Reports
│   │   └── Scheduled Reports
│   │
│   └── Export Centre
│       ├── Export Queue
│       ├── Export History
│       └── Export Templates
│
├── AI ASSISTANT
│   ├── Query Interface
│   │   ├── Natural Language Search
│   │   ├── Query History
│   │   └── Saved Queries
│   │
│   ├── Department Access
│   │   ├── Sales AI (sales team queries)
│   │   ├── Marketing AI (marketing team queries)
│   │   ├── Operations AI (ops team queries)
│   │   ├── Finance AI (finance team queries)
│   │   └── Executive AI (full access queries)
│   │
│   ├── AI Reports
│   │   ├── Generate Summary
│   │   ├── Anomaly Detection
│   │   ├── Trend Analysis
│   │   └── Recommendations
│   │
│   └── AI Settings
│       ├── Training Data
│       ├── Response Configuration
│       └── Access Permissions
│
├── FINANCE
│   ├── Overview
│   │   ├── Cash Flow
│   │   ├── Outstanding Payments
│   │   └── Upcoming Settlements
│   │
│   ├── Invoicing
│   │   ├── Create Invoice
│   │   ├── Invoice List
│   │   ├── Invoice Status
│   │   └── Credit Notes
│   │
│   ├── Payments
│   │   ├── Incoming Payments
│   │   ├── Outgoing Payments
│   │   ├── Payment Reconciliation
│   │   └── Payment Methods
│   │
│   ├── Settlements
│   │   ├── Client Settlements
│   │   ├── Venue Settlements
│   │   ├── Trader Settlements
│   │   └── Staff Payments
│   │
│   ├── Commissions
│   │   ├── Commission Rules
│   │   ├── Commission Calculations
│   │   └── Commission Payments
│   │
│   └── Xero Integration
│       ├── Sync Status
│       ├── Account Mapping
│       ├── Manual Sync
│       └── Error Log
│
└── SETTINGS
    ├── User Management
    │   ├── Users
    │   │   ├── Internal Users (x20)
    │   │   ├── Client Users
    │   │   └── Staff/Crew Users
    │   ├── Roles & Permissions
    │   │   ├── Admin
    │   │   ├── Manager
    │   │   ├── Staff
    │   │   ├── Client (Limited)
    │   │   └── Custom Roles
    │   ├── User Activity Log
    │   └── Access Requests
    │
    ├── Company Settings
    │   ├── Company Profile
    │   ├── Branding
    │   ├── Email Templates
    │   └── Document Templates
    │
    ├── Integrations
    │   ├── Connected Apps
    │   ├── API Keys
    │   ├── Webhooks
    │   └── Integration Logs
    │
    ├── Notifications
    │   ├── Email Notifications
    │   ├── In-App Notifications
    │   ├── Alert Rules
    │   └── Digest Settings
    │
    ├── Data Management
    │   ├── Import Data
    │   ├── Export Data
    │   ├── Data Cleanup
    │   └── Archiving
    │
    ├── Security
    │   ├── Password Policies
    │   ├── Two-Factor Auth
    │   ├── Session Management
    │   ├── IP Whitelisting
    │   └── Audit Log
    │
    └── Backup & Recovery
        ├── Backup Schedule
        ├── Backup History
        ├── Restore Options
        └── Disaster Recovery

---

## 2. DATABASE SCHEMA

### Core Entities

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CORE ENTITIES                                  │
└─────────────────────────────────────────────────────────────────────────┘

COMPANIES (Clients)
├── id (PK)
├── name
├── tier (gold, silver, bronze)
├── status (active, inactive)
├── contract_start_date
├── contract_end_date
├── commission_rate
├── contact_name
├── contact_email
├── contact_phone
├── billing_address
├── vat_number
├── xero_contact_id
├── created_at
└── updated_at

USERS
├── id (PK)
├── email
├── password_hash
├── first_name
├── last_name
├── role_id (FK → ROLES)
├── company_id (FK → COMPANIES) [nullable for internal users]
├── user_type (internal, client, staff)
├── status (active, inactive, pending)
├── last_login
├── created_at
└── updated_at

ROLES
├── id (PK)
├── name
├── description
├── permissions (JSON)
├── is_system_role
└── created_at

LOCATIONS
├── id (PK)
├── type (warehouse, store, venue)
├── name
├── address_line_1
├── address_line_2
├── city
├── postcode
├── country
├── contact_name
├── contact_phone
├── contact_email
├── status (active, inactive)
├── created_at
└── updated_at

STORES (extends LOCATIONS)
├── id (PK)
├── location_id (FK → LOCATIONS)
├── company_id (FK → COMPANIES)
├── store_type (flagship, pop_up, concession, online)
├── store_tier (gold, silver, other) [for e-commerce prioritization]
├── pos_system_id (FK → POS_SYSTEMS)
├── shopify_store_id
├── default_warehouse_id (FK → WAREHOUSES)
└── commission_rate

WAREHOUSES (extends LOCATIONS)
├── id (PK)
├── location_id (FK → LOCATIONS)
├── capacity
├── is_default
└── zones (JSON)

VENUES (extends LOCATIONS)
├── id (PK)
├── location_id (FK → LOCATIONS)
├── venue_type (arena, theatre, festival_site, stadium)
├── capacity
├── commission_rate
├── payment_terms
├── notes
└── documents (JSON)

POS_SYSTEMS
├── id (PK)
├── name (shopify, noq, square, atvenu, manual)
├── api_key [encrypted]
├── api_secret [encrypted]
├── store_id
├── location_id (FK → LOCATIONS)
├── status (connected, disconnected, error)
├── last_sync
└── settings (JSON)
```

### Product Entities

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         PRODUCT ENTITIES                                 │
└─────────────────────────────────────────────────────────────────────────┘

PRODUCTS
├── id (PK)
├── sku
├── name
├── description
├── category_id (FK → CATEGORIES)
├── company_id (FK → COMPANIES) [nullable for EML products]
├── status (active, discontinued, draft)
├── base_cost
├── base_price
├── weight
├── dimensions (JSON)
├── images (JSON)
├── attributes (JSON) [size, colour, etc.]
├── filemaker_id [legacy sync]
├── created_at
└── updated_at

PRODUCT_VARIANTS
├── id (PK)
├── product_id (FK → PRODUCTS)
├── sku
├── name (e.g., "Large / Black")
├── attributes (JSON)
├── barcode
├── cost
├── price
├── weight
└── status

CATEGORIES
├── id (PK)
├── name
├── parent_id (FK → CATEGORIES) [self-referential]
├── description
├── sort_order
└── status

SUPPLIERS
├── id (PK)
├── name
├── contact_name
├── contact_email
├── contact_phone
├── address
├── payment_terms
├── lead_time_days
├── minimum_order_value
├── currency
├── status
├── notes
└── created_at

SUPPLIER_PRODUCTS
├── id (PK)
├── supplier_id (FK → SUPPLIERS)
├── product_id (FK → PRODUCTS)
├── supplier_sku
├── cost_price
├── currency
├── lead_time_days
├── minimum_order_qty
├── is_preferred
└── last_updated

PRODUCT_PRICING
├── id (PK)
├── product_variant_id (FK → PRODUCT_VARIANTS)
├── price_type (base, client, event, promotional)
├── company_id (FK → COMPANIES) [nullable]
├── event_id (FK → EVENTS) [nullable]
├── price
├── currency
├── valid_from
├── valid_to
└── created_at

PURCHASE_ORDERS
├── id (PK)
├── po_number
├── supplier_id (FK → SUPPLIERS)
├── warehouse_id (FK → WAREHOUSES)
├── status (draft, submitted, confirmed, shipped, received, cancelled)
├── order_date
├── expected_delivery
├── actual_delivery
├── subtotal
├── tax
├── total
├── currency
├── notes
├── created_by (FK → USERS)
├── approved_by (FK → USERS)
└── created_at

PURCHASE_ORDER_ITEMS
├── id (PK)
├── purchase_order_id (FK → PURCHASE_ORDERS)
├── product_variant_id (FK → PRODUCT_VARIANTS)
├── quantity_ordered
├── quantity_received
├── unit_cost
├── total_cost
└── notes
```

### Inventory Entities

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        INVENTORY ENTITIES                                │
└─────────────────────────────────────────────────────────────────────────┘

INVENTORY
├── id (PK)
├── product_variant_id (FK → PRODUCT_VARIANTS)
├── location_id (FK → LOCATIONS)
├── quantity_on_hand
├── quantity_reserved
├── quantity_available [calculated]
├── reorder_point
├── reorder_quantity
├── last_stock_take
└── updated_at

INVENTORY_MOVEMENTS
├── id (PK)
├── product_variant_id (FK → PRODUCT_VARIANTS)
├── from_location_id (FK → LOCATIONS) [nullable]
├── to_location_id (FK → LOCATIONS) [nullable]
├── movement_type (purchase, sale, transfer, adjustment, return, write_off)
├── quantity
├── reference_type (order, transfer, stock_take, etc.)
├── reference_id
├── notes
├── created_by (FK → USERS)
└── created_at

STOCK_TRANSFERS
├── id (PK)
├── transfer_number
├── from_location_id (FK → LOCATIONS)
├── to_location_id (FK → LOCATIONS)
├── status (draft, pending, in_transit, received, cancelled)
├── requested_date
├── shipped_date
├── received_date
├── notes
├── created_by (FK → USERS)
└── created_at

STOCK_TRANSFER_ITEMS
├── id (PK)
├── stock_transfer_id (FK → STOCK_TRANSFERS)
├── product_variant_id (FK → PRODUCT_VARIANTS)
├── quantity_requested
├── quantity_shipped
├── quantity_received
└── notes

STOCK_TAKES
├── id (PK)
├── location_id (FK → LOCATIONS)
├── status (scheduled, in_progress, completed, cancelled)
├── scheduled_date
├── started_at
├── completed_at
├── total_variance_value
├── notes
├── created_by (FK → USERS)
└── approved_by (FK → USERS)

STOCK_TAKE_ITEMS
├── id (PK)
├── stock_take_id (FK → STOCK_TAKES)
├── product_variant_id (FK → PRODUCT_VARIANTS)
├── expected_quantity
├── counted_quantity
├── variance
├── variance_value
├── notes
└── counted_by (FK → USERS)
```

### Sales & Orders Entities

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       SALES & ORDER ENTITIES                             │
└─────────────────────────────────────────────────────────────────────────┘

ORDERS
├── id (PK)
├── order_number
├── external_order_id [from POS]
├── channel (ecommerce, retail, live_event, food_trader)
├── source_platform (shopify, noq, square, atvenu, manual)
├── store_id (FK → STORES) [nullable]
├── event_id (FK → EVENTS) [nullable]
├── company_id (FK → COMPANIES)
├── customer_id (FK → CUSTOMERS) [nullable]
├── status (pending, processing, completed, refunded, cancelled)
├── order_date
├── subtotal
├── discount_amount
├── tax_amount
├── total
├── currency
├── payment_method
├── payment_status
├── shipping_address (JSON)
├── notes
├── pos_system_id (FK → POS_SYSTEMS)
├── raw_data (JSON) [original POS data]
└── created_at

ORDER_ITEMS
├── id (PK)
├── order_id (FK → ORDERS)
├── product_variant_id (FK → PRODUCT_VARIANTS)
├── quantity
├── unit_price
├── discount
├── tax
├── total
├── cost_price [for margin calculation]
└── notes

TRANSACTIONS
├── id (PK)
├── order_id (FK → ORDERS)
├── transaction_type (payment, refund)
├── amount
├── currency
├── payment_method
├── payment_reference
├── status (pending, completed, failed)
├── processed_at
├── gateway_response (JSON)
└── created_at

REFUNDS
├── id (PK)
├── order_id (FK → ORDERS)
├── refund_number
├── reason
├── amount
├── status
├── processed_by (FK → USERS)
├── processed_at
└── notes

CUSTOMERS
├── id (PK)
├── email
├── first_name
├── last_name
├── phone
├── address (JSON)
├── marketing_consent
├── source
├── total_orders
├── total_spent
├── first_order_date
├── last_order_date
├── tags (JSON)
├── notes
└── created_at
```

### Live Events Entities

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       LIVE EVENTS ENTITIES                               │
└─────────────────────────────────────────────────────────────────────────┘

EVENTS
├── id (PK)
├── event_type (tour, festival, one_off)
├── name
├── company_id (FK → COMPANIES)
├── status (planning, active, completed, cancelled)
├── start_date
├── end_date
├── description
├── budget
├── notes
├── created_by (FK → USERS)
└── created_at

EVENT_DATES (individual shows/days)
├── id (PK)
├── event_id (FK → EVENTS)
├── venue_id (FK → VENUES)
├── date
├── doors_time
├── start_time
├── end_time
├── expected_attendance
├── actual_attendance
├── status (scheduled, in_progress, completed, cancelled)
├── notes
└── weather_conditions

EVENT_INVENTORY
├── id (PK)
├── event_id (FK → EVENTS)
├── event_date_id (FK → EVENT_DATES) [nullable]
├── product_variant_id (FK → PRODUCT_VARIANTS)
├── quantity_allocated
├── quantity_sold
├── quantity_returned
├── quantity_damaged
├── source_warehouse_id (FK → WAREHOUSES)
└── notes

EVENT_STAFF
├── id (PK)
├── user_id (FK → USERS)
├── staff_type (crew, manager, sales)
├── day_rate
├── contact_phone
├── emergency_contact
├── documents (JSON) [certifications, etc.]
├── status
└── notes

EVENT_STAFF_ASSIGNMENTS
├── id (PK)
├── event_date_id (FK → EVENT_DATES)
├── event_staff_id (FK → EVENT_STAFF)
├── role
├── start_time
├── end_time
├── actual_hours
├── rate
├── expenses
├── status (scheduled, confirmed, completed, no_show)
└── notes

EVENT_REPORTS
├── id (PK)
├── event_date_id (FK → EVENT_DATES)
├── report_type (venue, internal)
├── file_path
├── file_name
├── uploaded_by (FK → USERS)
├── uploaded_at
├── status (pending, processed, reconciled, disputed)
├── reconciliation_notes
└── processed_at

EVENT_SETTLEMENTS
├── id (PK)
├── event_id (FK → EVENTS)
├── settlement_type (venue, artist, staff)
├── entity_id [venue_id, company_id, etc.]
├── gross_sales
├── commission_rate
├── commission_amount
├── deductions (JSON)
├── net_amount
├── status (pending, approved, paid)
├── due_date
├── paid_date
├── xero_invoice_id
└── notes
```

### Food Traders Entities

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       FOOD TRADERS ENTITIES                              │
└─────────────────────────────────────────────────────────────────────────┘

FOOD_TRADERS
├── id (PK)
├── name
├── contact_name
├── contact_email
├── contact_phone
├── address
├── cuisine_type
├── status (active, inactive, pending)
├── commission_rate
├── payment_terms
├── documents (JSON) [food hygiene certs, insurance, etc.]
├── rating
├── notes
└── created_at

MENUS
├── id (PK)
├── food_trader_id (FK → FOOD_TRADERS)
├── name
├── status (draft, active, archived)
├── valid_from
├── valid_to
└── created_at

MENU_ITEMS
├── id (PK)
├── menu_id (FK → MENUS)
├── name
├── description
├── category
├── price
├── cost [optional]
├── dietary_flags (JSON) [vegan, gf, etc.]
├── is_available
└── sort_order

TRADER_EVENT_ASSIGNMENTS
├── id (PK)
├── food_trader_id (FK → FOOD_TRADERS)
├── event_id (FK → EVENTS)
├── event_date_id (FK → EVENT_DATES) [nullable]
├── menu_id (FK → MENUS)
├── pitch_location
├── pos_system_id (FK → POS_SYSTEMS)
├── status
└── notes

TRADER_SETTLEMENTS
├── id (PK)
├── food_trader_id (FK → FOOD_TRADERS)
├── event_id (FK → EVENTS)
├── gross_sales
├── commission_rate
├── commission_amount
├── deductions (JSON)
├── net_amount
├── status (pending, approved, paid)
├── due_date
├── paid_date
└── notes
```

### Marketing Entities

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        MARKETING ENTITIES                                │
└─────────────────────────────────────────────────────────────────────────┘

MARKETING_CAMPAIGNS
├── id (PK)
├── name
├── company_id (FK → COMPANIES) [nullable]
├── campaign_type (brand, product, event)
├── channels (JSON) [seo, ppc, social, email]
├── status (draft, active, paused, completed)
├── start_date
├── end_date
├── budget
├── actual_spend
├── target_revenue
├── actual_revenue
├── notes
└── created_at

MARKETING_SPEND
├── id (PK)
├── campaign_id (FK → MARKETING_CAMPAIGNS) [nullable]
├── company_id (FK → COMPANIES) [nullable]
├── channel (google_ads, meta_ads, tiktok, seo, email, other)
├── platform_campaign_id
├── date
├── impressions
├── clicks
├── spend
├── conversions
├── revenue
├── currency
└── raw_data (JSON)

EMAIL_CAMPAIGNS
├── id (PK)
├── name
├── company_id (FK → COMPANIES) [nullable]
├── subject
├── content_html
├── content_text
├── segment_id (FK → CUSTOMER_SEGMENTS)
├── status (draft, scheduled, sent, cancelled)
├── scheduled_at
├── sent_at
├── recipients_count
├── opens
├── clicks
├── unsubscribes
├── bounces
└── created_at

CUSTOMER_SEGMENTS
├── id (PK)
├── name
├── description
├── rules (JSON)
├── customer_count
├── last_calculated
└── created_at

CRM_CONTACTS
├── id (PK)
├── company_id (FK → COMPANIES) [nullable]
├── first_name
├── last_name
├── email
├── phone
├── job_title
├── contact_type (prospect, client, vendor, other)
├── status (active, inactive)
├── source
├── notes
└── created_at

CRM_DEALS
├── id (PK)
├── name
├── contact_id (FK → CRM_CONTACTS)
├── company_id (FK → COMPANIES) [nullable]
├── stage (lead, qualified, proposal, negotiation, won, lost)
├── value
├── probability
├── expected_close_date
├── actual_close_date
├── assigned_to (FK → USERS)
├── notes
└── created_at

CRM_ACTIVITIES
├── id (PK)
├── contact_id (FK → CRM_CONTACTS) [nullable]
├── deal_id (FK → CRM_DEALS) [nullable]
├── activity_type (call, email, meeting, note, task)
├── subject
├── description
├── due_date
├── completed_at
├── assigned_to (FK → USERS)
└── created_at
```

### Finance Entities

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         FINANCE ENTITIES                                 │
└─────────────────────────────────────────────────────────────────────────┘

INVOICES
├── id (PK)
├── invoice_number
├── company_id (FK → COMPANIES)
├── invoice_type (sales, commission, settlement)
├── reference_type (event, period)
├── reference_id
├── issue_date
├── due_date
├── subtotal
├── tax_amount
├── total
├── currency
├── status (draft, sent, paid, overdue, cancelled)
├── paid_date
├── xero_invoice_id
├── notes
└── created_at

INVOICE_ITEMS
├── id (PK)
├── invoice_id (FK → INVOICES)
├── description
├── quantity
├── unit_price
├── tax_rate
├── tax_amount
├── total
└── xero_line_id

CREDIT_NOTES
├── id (PK)
├── credit_note_number
├── invoice_id (FK → INVOICES)
├── reason
├── amount
├── status
├── xero_credit_note_id
└── created_at

COMMISSION_RULES
├── id (PK)
├── name
├── entity_type (venue, company, trader)
├── entity_id [nullable, for specific entities]
├── commission_type (percentage, fixed)
├── rate
├── applies_to (gross, net)
├── valid_from
├── valid_to
└── notes

XERO_SYNC_LOG
├── id (PK)
├── sync_type (invoice, payment, contact)
├── direction (push, pull)
├── entity_type
├── entity_id
├── xero_id
├── status (success, error)
├── error_message
├── request_data (JSON)
├── response_data (JSON)
└── created_at
```

### System Entities

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          SYSTEM ENTITIES                                 │
└─────────────────────────────────────────────────────────────────────────┘

AI_QUERIES
├── id (PK)
├── user_id (FK → USERS)
├── query_text
├── query_type (natural_language, structured)
├── department_context (sales, marketing, operations, finance, executive)
├── response_text
├── data_sources_used (JSON)
├── execution_time_ms
├── feedback_rating
├── created_at
└── session_id

AI_SAVED_QUERIES
├── id (PK)
├── user_id (FK → USERS)
├── name
├── query_text
├── department
├── is_shared
├── usage_count
└── created_at

AI_TRAINING_DATA
├── id (PK)
├── data_type (terminology, business_rules, examples)
├── content (JSON)
├── department
├── created_by (FK → USERS)
├── status (active, archived)
└── created_at

AUDIT_LOG
├── id (PK)
├── user_id (FK → USERS)
├── action (create, update, delete, login, logout, export)
├── entity_type
├── entity_id
├── old_values (JSON)
├── new_values (JSON)
├── ip_address
├── user_agent
└── created_at

NOTIFICATIONS
├── id (PK)
├── user_id (FK → USERS)
├── type (alert, info, warning)
├── title
├── message
├── link
├── read_at
├── created_at
└── expires_at

SCHEDULED_REPORTS
├── id (PK)
├── name
├── report_type
├── parameters (JSON)
├── schedule (cron expression)
├── recipients (JSON)
├── format (pdf, excel, csv)
├── last_run
├── next_run
├── status
└── created_by (FK → USERS)

IMPORT_JOBS
├── id (PK)
├── import_type (products, inventory, orders, customers)
├── source (file, api, pos)
├── file_path
├── status (pending, processing, completed, failed)
├── total_rows
├── processed_rows
├── error_rows
├── errors (JSON)
├── started_at
├── completed_at
└── created_by (FK → USERS)

SETTINGS
├── id (PK)
├── category
├── key
├── value (JSON)
├── description
└── updated_at
```

---

## 3. KEY RELATIONSHIPS DIAGRAM

```
                                    ┌──────────────┐
                                    │   COMPANIES  │
                                    │   (Clients)  │
                                    └──────┬───────┘
                                           │
           ┌───────────────┬───────────────┼───────────────┬───────────────┐
           │               │               │               │               │
           ▼               ▼               ▼               ▼               ▼
    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
    │  STORES  │    │ PRODUCTS │    │  EVENTS  │    │MARKETING │    │ INVOICES │
    └────┬─────┘    └────┬─────┘    └────┬─────┘    │ CAMPAIGNS│    └──────────┘
         │               │               │          └──────────┘
         │               │               │
         ▼               ▼               ▼
    ┌──────────┐    ┌──────────┐    ┌──────────┐
    │  ORDERS  │◄───│INVENTORY │    │  EVENT   │
    │          │    │          │    │  DATES   │
    └────┬─────┘    └────┬─────┘    └────┬─────┘
         │               │               │
         │               │               │
         ▼               ▼               ▼
    ┌──────────┐    ┌──────────┐    ┌──────────┐
    │ ORDER    │    │ STOCK    │    │ EVENT    │
    │ ITEMS    │    │ MOVEMENTS│    │ STAFF    │
    └──────────┘    └──────────┘    └──────────┘


    POS INTEGRATIONS:
    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
    │ SHOPIFY  │    │   NOQ    │    │  SQUARE  │    │  ATVENU  │
    └────┬─────┘    └────┬─────┘    └────┬─────┘    └────┬─────┘
         │               │               │               │
         └───────────────┴───────────────┴───────────────┘
                                   │
                                   ▼
                           ┌──────────────┐
                           │ POS_SYSTEMS  │
                           │   (unified)  │
                           └──────────────┘
```

---

## 4. USER ACCESS MATRIX

| Feature                    | Admin | Manager | Staff | Client (Gold) | Client (Silver) |
|---------------------------|-------|---------|-------|---------------|-----------------|
| Dashboard - Full          | ✅    | ✅      | ❌    | ❌            | ❌              |
| Dashboard - Client View   | ✅    | ✅      | ✅    | ✅            | ✅              |
| Admin / Setup             | ✅    | ❌      | ❌    | ❌            | ❌              |
| Products - View           | ✅    | ✅      | ✅    | ✅            | ✅              |
| Products - Edit           | ✅    | ✅      | ❌    | ❌            | ❌              |
| Inventory - View          | ✅    | ✅      | ✅    | ⚠️ Own only   | ⚠️ Own only     |
| Inventory - Manage        | ✅    | ✅      | ✅    | ❌            | ❌              |
| Sales - All               | ✅    | ✅      | ✅    | ❌            | ❌              |
| Sales - Own Client        | ✅    | ✅      | ✅    | ✅            | ✅              |
| Live Events - All         | ✅    | ✅      | ✅    | ❌            | ❌              |
| Live Events - Own         | ✅    | ✅      | ✅    | ✅            | ❌              |
| Food Traders              | ✅    | ✅      | ✅    | ❌            | ❌              |
| Customers - All           | ✅    | ✅      | ❌    | ❌            | ❌              |
| Marketing - All           | ✅    | ✅      | ❌    | ❌            | ❌              |
| Marketing - Own Client    | ✅    | ✅      | ❌    | ✅            | ❌              |
| Reports - All             | ✅    | ✅      | ⚠️    | ❌            | ❌              |
| Reports - Own Client      | ✅    | ✅      | ✅    | ✅            | ✅              |
| Finance - All             | ✅    | ⚠️      | ❌    | ❌            | ❌              |
| Finance - Own Settlements | ✅    | ✅      | ❌    | ✅            | ❌              |
| AI Assistant - Full       | ✅    | ✅      | ❌    | ❌            | ❌              |
| AI Assistant - Dept Only  | ✅    | ✅      | ✅    | ❌            | ❌              |
| AI Assistant - Client     | ✅    | ✅      | ✅    | ✅            | ❌              |
| Settings                  | ✅    | ⚠️      | ❌    | ❌            | ❌              |

Legend: ✅ Full Access | ⚠️ Limited Access | ❌ No Access

---

## 5. PHASE 1 SCOPE ALIGNMENT (Per Hatch-House Agreement)

### ✅ IN SCOPE - Phase 1 (£32,000)

**Platform & Security**
- Secure, password-protected access
- Role-based permissions
- Up to 20 internal users
- Client users with restricted, read-only access
- Data backups and secure hosting

**Core Reporting**
- Daily / Weekly / Monthly / Quarterly / Year-on-Year views
- Month-on-Month (MoM) and Week-on-Week (WoW) comparisons
- Real-time filtered reports

**Retail (Bricks & Mortar)**
- POS integrations: Shopify, NOQ, Square, AtVenu
- Consolidated reporting with platform-specific detail
- Store and location-level performance comparisons

**E-Commerce**
- Shopify-based reporting
- Gold and Silver stores focus (~20-30 stores)
- Additional stores via filtering

**Live Event Merchandising**
- Tours and festivals reporting
- Manual Excel upload for third-party venue reports
- Snapshot reporting by tour, venue, and date

**Food Traders**
- NOQ and Square reporting views
- Menu-level sales reporting
- Client-facing dashboard prototype

**Marketing & Customer Data**
- Sales analytics and customer data views
- SEO performance tracking
- Google advertising spend
- Meta advertising spend
- Mailer scheduling and performance

**Production & Product Data**
- Initial FileMaker integration (where technically feasible)
- ROI at product level

**AI Functionality**
- Natural language querying of data
- Department-specific AI access (Sales, Marketing, Ops, Finance, Executive)
- AI configuration and training

**Finance (Optional Extension)**
- Xero integration exploration (subject to technical feasibility)

---

### ❌ OUT OF SCOPE - Phase 2+ (Separate Agreement)

- Full CRM or FileMaker replacement
- SKU-level production linkage (current system limitation)
- Automated live event data ingestion (manual upload only in Phase 1)
- Full Xero reconciliation
- White-labelled client dashboards
- Ongoing support and maintenance retainer
- Purchase order management
- Inventory management (stock takes, transfers, reordering)
- Invoicing and settlements
- Supplier management
- Staff/crew management and scheduling
- Full customer CRM
- Email campaign builder (scheduling only in Phase 1)

---

## 6. WHAT YOU MIGHT BE MISSING

Based on the original email and typical event merchandising operations, consider adding:

### Operations
- **Shipping & Fulfilment** - For e-commerce orders
- **Returns Management** - RMA process, return reasons, restocking
- **Quality Control** - Product QC on receipt, defect tracking

### Compliance & Legal
- **GDPR / Data Privacy** - Customer data requests, deletion logs
- **Contract Management** - Client agreements, venue contracts, supplier terms
- **Insurance Tracking** - Event insurance, liability documents

### Communication
- **Internal Messaging** - Team chat, announcements
- **Client Communication Log** - Email/call history with clients
- **Support Tickets** - Issue tracking for clients

### Analytics & BI
- **Custom Dashboards** - User-configurable dashboard widgets
- **Saved Views** - Custom filtered views for repeat use
- **Benchmark Comparisons** - Industry benchmarks, competitor analysis

### Automation
- **Workflow Builder** - Automated actions (low stock → PO)
- **Alert Rules** - Configurable notifications
- **Scheduled Tasks** - Automated reports, data syncs

### Mobile
- **Mobile App Considerations** - Which features need mobile access?
- **Offline Mode** - For live events with poor connectivity

---

## 7. RECOMMENDED PHASED APPROACH

### Phase 0: Discovery & Lockdown (Week 0-1)
**Objectives:** Lock scope, confirm data sources, prevent scope creep

**Inputs Required from EML:**
- Shopify stores access
- POS systems access or exports (NOQ, Square, AtVenu)
- Sample live event Excel reports
- FileMaker schema overview / demo
- Marketing platform access (SEO tools, Google Ads, Meta Ads)
- Xero access (if approved)
- Current internal reporting spreadsheet

**Outputs:**
- Final data architecture
- Confirmed Phase 1 feature list
- Phase 2 backlog defined

### Phase 1: Core Platform Build (Weeks 1-3)
**Infrastructure:**
- Central database
- Secure authentication
- User roles and permissions (20 internal + client access)

**Dashboards:**
- Sales analytics core
- Retail vs E-commerce segmentation
- Live event reporting with manual uploads
- Year-on-year, MoM, WoW comparison views
- ROI at product level

**Reporting (Real-time with filters):**
- Daily / Weekly / Monthly / Quarterly / Year-on-Year

### Phase 1B: Extended Reporting & AI (Weeks 3-4)
**Marketing:**
- SEO tracking integration
- Google and Meta spend ingestion
- Mailer scheduling workflows

**Food Traders:**
- NOQ and Square reporting views
- Client-facing dashboard prototype

**AI Layer:**
- Natural language querying
- Department-specific AI access
- Initial training and configuration

**Phase 1 Delivery:**
- Live internal dashboard
- Client access prototype
- Documentation
- Walkthrough with senior team

### Phase 2+ (Separate Scope - Future Agreement)
- Full CRM or FileMaker replacement
- SKU-level production linkage
- Automated live event ingestion
- Xero reconciliation
- White-labelled client dashboards
- Inventory management
- Purchase orders & supplier management
- Ongoing support and maintenance retainer

---

## 8. TECHNICAL CONSIDERATIONS

### Integrations Required
1. **Shopify** - REST API / GraphQL
2. **NOQ** - API (check availability)
3. **Square** - Square API
4. **AtVenu** - API or manual import
5. **Xero** - Xero API (OAuth 2.0)
6. **Google Analytics** - GA4 API
7. **Meta Ads** - Marketing API
8. **Email Platform** - Klaviyo/Mailchimp API

### Data Sync Strategy
- Real-time for sales transactions
- Hourly for inventory
- Daily for marketing/analytics data
- On-demand for reports

### Backup & Recovery
- Daily automated backups
- 30-day retention
- Point-in-time recovery capability
- Geo-redundant storage

---

*Document Version: 1.0*
*Last Updated: January 2026*
