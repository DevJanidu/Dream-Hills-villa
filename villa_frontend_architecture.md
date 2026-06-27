# Frontend Page Architecture: Custom Villa Booking & Management Platform

This document outlines the comprehensive frontend page structure for the Villa Booking Platform. Assuming a modern component-based framework (like Next.js or React), the application should be divided into two primary routing groups: the **Customer-Facing Site** (public routes) and the **Admin Dashboard** (protected routes).

---

## 1. Customer-Facing Application (Guest UI)

The primary goal of the public-facing site is conversion. The UI must be highly visual, fast, mobile-responsive, and establish trust immediately.

### 1.1 Core Pages
* **Home Page (`/`)**
    * **Hero Section:** High-resolution video or image slider of the villa with a sticky "Check Availability" date picker overlay.
    * **Quick Highlights:** Icons and brief text for key amenities (e.g., Private Pool, Ocean View, Wi-Fi, Max Guests).
    * **Featured Spaces:** Short visual sections detailing the bedrooms, living areas, and outdoors.
    * **Testimonials/Reviews:** Social proof from previous guests.
    * **Footer:** Links to policies, contact info, and social media.
* **Villa Details & Gallery (`/villa`)**
    * **Interactive Media Grid:** A dynamic masonry grid of images that opens into a full-screen lightbox gallery.
    * **Comprehensive Description:** Expandable text sections detailing the architecture, history, and vibe of the villa.
    * **Full Amenities List:** Categorized list (Bathroom, Kitchen, Entertainment, Outdoor, etc.).
    * **Location & Map:** Interactive map (Google Maps or Mapbox integration) highlighting nearby attractions, airports, and restaurants.

### 1.2 The Booking Engine Flow
* **Availability & Date Selection (`/book`)**
    * **Interactive Calendar:** A 2-month or 3-month view calendar showing blocked, pending, and available dates.
    * **Dynamic Pricing Calculator:** Real-time updates showing base price, cleaning fees, taxes, and total cost based on the selected dates.
* **Guest Details & Add-ons (`/book/details`)**
    * **Primary Guest Form:** Name, email, phone number, and special requests/notes.
    * **Upsell/Add-on Selection:** Toggles for extra services (e.g., Airport Transfer, Private Chef, Daily Cleaning, Welcome Hamper).
* **Checkout & Payment (`/book/checkout`)**
    * **Order Summary:** A clear breakdown of all charges.
    * **Payment Gateway Integration:** Secure inputs for Credit Card details or local payment options.
    * **Policy Agreement:** Checkboxes for house rules, cancellation policies, and terms of service.
* **Booking Confirmation (`/book/success`)**
    * **Success Message & Booking ID:** Clear confirmation of the transaction.
    * **Next Steps:** Information on what to expect next (e.g., "We've emailed your receipt and arrival instructions").

### 1.3 Supporting Pages
* **About Us / Our Story (`/about`)**
* **Contact Us (`/contact`):** Standard contact form, WhatsApp quick-link, and direct email/phone details.
* **FAQ / House Rules (`/faq`):** Accordion-style list of common questions (Check-in times, pet policies, party rules).
* **Terms & Conditions / Privacy Policy (`/terms`, `/privacy`)**

---

## 2. Admin Dashboard (Admin UI)

The admin portal is a secure, role-restricted environment. It combines Content Management (CMS), Booking Operations, and Customer Relationship Management (CRM).

### 2.1 Authentication & Profile
* **Admin Login (`/admin/login`):** Secure email/password login, potentially with Two-Factor Authentication (2FA).
* **Password Reset (`/admin/forgot-password`)**
* **My Profile (`/admin/profile`):** Where staff can update their own details and passwords.

### 2.2 Core Operations
* **Main Dashboard Overview (`/admin/dashboard`)**
    * **At-a-Glance Metrics:** Today's check-ins/check-outs, monthly revenue, occupancy rate, pending inquiries.
    * **Action Center:** Alerts for new unread messages or unconfirmed bookings requiring approval.
* **Booking Management (`/admin/bookings`)**
    * **List/Data Table View:** Filterable and sortable list of all bookings (Filters: Status, Date Range, Guest Name).
    * **Calendar / Gantt View:** A horizontal timeline view showing the villa's occupancy across the month.
    * **Booking Details Modal/Page:** View a specific booking, update its status (e.g., Mark as Paid, Cancel, Check-in), issue refunds, or resend confirmation emails.

### 2.3 CRM (Customer Relationship Management)
* **Guest Directory (`/admin/guests`)**
    * Master list of all past and upcoming guests.
* **Guest Profile (`/admin/guests/[id]`)**
    * **Personal Info:** Contact details, total stays, total revenue generated.
    * **Interaction History:** Logs of all previous bookings, emails sent, and internal staff notes (e.g., "Guest prefers early check-in").

### 2.4 Content Management System (CMS)
* **Property Details (`/admin/cms/property`)**
    * Forms to dynamically edit the villa name, description, and house rules displayed on the frontend.
* **Media Manager (`/admin/cms/media`)**
    * Drag-and-drop interface to upload, delete, and reorder images for the frontend gallery.
* **Pricing & Availability Rules (`/admin/cms/pricing`)**
    * Set standard nightly rates.
    * **Surge/Seasonal Pricing:** Interface to select date ranges (e.g., Christmas week) and apply custom rates or minimum stay requirements.
    * **Manual Blocks:** Ability to block out dates for maintenance or personal use.
* **Add-ons Management (`/admin/cms/addons`)**
    * Create and price extra services (e.g., add a "Private Chef" option for $100/day).

### 2.5 System & Administration
* **User & Role Management (`/admin/users`) - *Super Admin Only***
    * List of all internal staff with access to the dashboard.
    * **RBAC Assignment:** Ability to invite new users and assign roles (Super Admin, Manager, Agent, Cleaners).
* **General Settings (`/admin/settings`)**
    * **Integrations:** Manage API keys (Payment gateways, Email providers like SendGrid).
    * **Notifications:** Toggle which actions trigger email/SMS alerts to the admin team.
    * **Tax & Fees:** Configure global tax rates and default cleaning fees.

---
*Generated for architectural planning and UI development.*
