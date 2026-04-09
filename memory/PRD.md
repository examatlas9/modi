# Modi's Boutique - Website PRD

## Project Overview
**Business**: Modi's Boutique  
**Category**: Bridal Shop  
**Location**: Shaheed Chowk, opposite Ranchi University, Ranchi, Jharkhand 834001  
**Phone/WhatsApp**: 09709073187  
**Google Rating**: 4.6★ (991 reviews)  
**Date Built**: February 2026  

---

## User Personas
- **Primary**: Brides aged 18–35 in Ranchi, Jharkhand looking for bridal attire
- **Secondary**: Mothers of brides planning trousseau for daughters
- **Tertiary**: Women looking for occasion wear (sangeet, mehendi, reception)

---

## Core Requirements (Static)
- Full marketing website for bridal boutique in Ranchi
- Local SEO optimized for "bridal shop Ranchi", "bridal lehenga Ranchi"
- Conversion-focused with Call Now, WhatsApp, Book Appointment CTAs
- Elegant & Luxurious design: dark background (#0A0A0A) with gold (#D4AF37) and rose gold (#B76E79) accents
- Fonts: Playfair Display (headings) + Outfit (body)
- No backend required – static marketing site

---

## Architecture
- **Frontend**: React + Tailwind CSS + Framer Motion
- **Backend**: FastAPI (kept minimal, hello world only)
- **Database**: MongoDB (unused for this static site)
- **Routing**: Single-page with smooth scroll to sections

---

## What's Been Implemented (Feb 2026)

### Pages / Sections
1. **Hero Section** – Bridal background image, Google rating badge (4.6★, 991 reviews), headline, 3 CTAs (Call Now, WhatsApp Us, Book Appointment)
2. **About Section** – Brand story, dual images, stats (15+ years, 5000+ brides, 500+ designs, 4.6★)
3. **Collections Section** – Bento grid with 5 cards: Lehengas, Sarees, Gowns, Suits, Accessories
4. **Services Section** – 6 service cards: In-Store Shopping, In-Store Pickup, Home Delivery, On-Site Services, Bridal Consultation, Trousseau Planning + "Why Choose Us" highlights
5. **Testimonials Section** – 6 customer reviews with 4.6★ Google rating badge, pagination nav
6. **FAQ Section** – 10 questions with Shadcn Accordion component
7. **Contact Section** – Address, phone, map embed (Google Maps), WhatsApp booking form, Call & WhatsApp CTA buttons
8. **Footer** – Links, contact info, collections, copyright
9. **Floating WhatsApp Button** – Fixed bottom-right with pulse animation, popup with chat + call options
10. **Sticky Header** – Glassmorphism effect, mobile hamburger menu

### SEO
- Meta title: "Modi's Boutique | Best Bridal Shop in Ranchi, Jharkhand"
- Meta description optimized with local keywords
- OG tags for social sharing
- Semantic HTML structure

### Design
- Theme: Dark luxury (#0A0A0A, #1A0A0E backgrounds)
- Accent: Gold (#D4AF37), Rose Gold (#B76E79)
- Fonts: Playfair Display + Outfit (from Google Fonts)
- Animations: Framer Motion (fade-up on scroll, header slide-in)
- Responsive: Mobile-first design

---

## Prioritized Backlog

### P0 (Critical - Done)
- [x] All 7 website sections
- [x] Call Now + WhatsApp CTAs
- [x] Google rating badge
- [x] FAQ accordion
- [x] Contact form (WhatsApp-based)
- [x] Mobile responsive

### P1 (High - Next Phase)
- [ ] Add real product gallery/portfolio section with more images
- [ ] Add Instagram feed integration
- [ ] Testimonials from actual customers (replace generated ones)
- [ ] Google Analytics integration

### P2 (Nice to Have)
- [ ] WhatsApp catalog integration
- [ ] Blog section for bridal tips (SEO boost)
- [ ] Online appointment booking system
- [ ] Product inquiry form with email notifications

---

## Next Tasks
1. Add real photos from the boutique (replace stock images)
2. Add actual customer testimonials
3. Consider adding Google Analytics for tracking
4. Add Google Business Profile link to footer
