# Web Site Inventory

## Domain Overview

| Domain | Segment | Status | Tech Stack |
|--------|---------|--------|------------|
| www.scanalyticsinc.com | Platform | Active | Unknown |
| pt.scanalyticsinc.com | Physical Therapy | Active | React/Vite |
| seniorliving.scanalyticsinc.com | Senior Living | Active | React/Vite |
| facilities.scanalyticsinc.com | Facilities | Active | React/Vite |
| healthcare.scanalyticsinc.com | Healthcare | Active | React/Vite |
| sports.scanalyticsinc.com | Sports | Active | React/Vite |

---

## Page Inventory by Site

### www.scanalyticsinc.com (Main Platform)

| Page | ICP | Promise | Proof | CTA | Funnel Stage |
|------|-----|---------|-------|-----|--------------|
| Home | All | Smart flooring for building optimization | DOE-backed, patented, US-made | Contact | Awareness |
| How It Works | All | Technology explanation | Diagrams, process | Contact | Consideration |
| Solutions | Segment buyers | Use case overview | Per-segment benefits | Segment sites | Awareness |
| About | All | Company story | Team, history | Contact | Consideration |

### pt.scanalyticsinc.com

| Page/Section | ICP | Promise | Proof | CTA | Funnel Stage |
|--------------|-----|---------|-------|-----|--------------|
| Hero | Clinic owners | AI-powered gait analysis | Real-time indicator | Schedule Demo | Awareness |
| Features | Clinic owners, PTs | 4 key benefits | Millimeter accuracy claim | View Benefits | Consideration |
| How It Works | Technical buyers | Easy integration | Integration list | - | Consideration |
| Software Showcase | All | Platform demo | Live dashboard access | Demo | Consideration |
| FAQ | All | Objection handling | Technical answers | Contact | Decision |
| CTA | All | Demo request | Form | Submit | Conversion |

### seniorliving.scanalyticsinc.com

| Page/Section | ICP | Promise | Proof | CTA | Funnel Stage |
|--------------|-----|---------|-------|-----|--------------|
| Hero | Operators, DONs | Resident safety + ops | Monitoring indicator | Request Demo | Awareness |
| Features | Operators | 4 care benefits | Integration list | - | Consideration |
| Software (Care) | Care staff | Fall detection, mobility | Dashboard demos | Live Dashboard | Consideration |
| Software (Ops) | Operations | Facility optimization | Dashboard demos | Live Dashboard | Consideration |
| Pricing | Budget holders | Transparent pricing | Calculator | - | Decision |
| FAQ | All | Objection handling | Technical answers | Contact | Decision |
| CTA | All | Demo request | Form | Submit | Conversion |

### facilities.scanalyticsinc.com

| Page/Section | ICP | Promise | Proof | CTA | Funnel Stage |
|--------------|-----|---------|-------|-----|--------------|
| Hero | Facility managers | Smart space intelligence | Real-time indicator | Schedule Demo | Awareness |
| Features | FM, CRE | 4 operational benefits | <10% coverage claim | - | Consideration |
| Minimal Coverage | Budget holders | Strategic placement | Visual diagram | - | Consideration |
| FAQ | All | Objection handling | Technical answers | Contact | Decision |
| CTA | All | Demo request | Form | Submit | Conversion |

### healthcare.scanalyticsinc.com

| Page/Section | ICP | Promise | Proof | CTA | Funnel Stage |
|--------------|-----|---------|-------|-----|--------------|
| Hero | Administrators, CNOs | Patient safety | Monitoring indicator | Request Demo | Awareness |
| Features | Clinical buyers | 4 safety benefits | HIPAA compliance | - | Consideration |
| Integration | Technical buyers | EMR integration | Integration list | - | Consideration |
| FAQ | All | Objection handling | HIPAA, EMR answers | Contact | Decision |
| CTA | All | Demo request | Form | Submit | Conversion |

### sports.scanalyticsinc.com

| Page/Section | ICP | Promise | Proof | CTA | Funnel Stage |
|--------------|-----|---------|-------|-----|--------------|
| **ISSUE: Using PT content** | - | - | - | - | - |
| All sections | Wrong ICP | PT messaging | PT proof | Schedule Demo | Broken |

---

## Cross-Site Analysis

### Consistency Issues
1. **Sports site**: Uses PT content, needs complete rewrite
2. **Testimonials**: Senior Living testimonials appear on other sites
3. **Pricing**: Only on Senior Living site

### Coverage Gaps
1. **Case studies**: None on any site
2. **Customer logos**: None visible
3. **Video content**: Limited
4. **ROI calculators**: Only pricing, not ROI

### Messaging Alignment
| Element | Consistent? | Notes |
|---------|-------------|-------|
| Product name (SmartStep) | Yes | Used across segments |
| "No cameras/wearables" | Yes | Present everywhere |
| HIPAA claim | Partial | PT, Healthcare only |
| Pricing model | Unclear | Only on Senior Living |
| DOE-backed | Platform only | Not on segment sites |

---

## Technical Notes

### Shared Components (React)
- Navbar
- Hero pattern
- Features grid
- FAQ accordion
- CTA forms
- Footer

### Unique Components
- SeniorLiving: PricingCalculator, SoftwareShowcase (expanded)
- Facilities: MinimalCoverage section
- PT/Sports: Similar structure (Sports is clone of PT)

### Form Handling
- CTAForm component across sites
- ContactForm component across sites
- Fields: Name, Email, Phone, Company, Message
