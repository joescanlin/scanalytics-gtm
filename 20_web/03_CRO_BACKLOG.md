# CRO Test Backlog

## Prioritization Framework
- **Impact**: Potential conversion lift (1-5)
- **Confidence**: Data/hypothesis quality (1-5)
- **Effort**: Implementation complexity (1-5, lower is easier)
- **Score**: Impact x Confidence / Effort

---

## Priority 1: Critical Fixes

### Test 1: Sports Site Content Fix
**Type**: Content replacement
**Hypothesis**: Sports site uses PT content, creating confusion and bounce
**Control**: Current PT-focused content
**Variant**: Sports-specific messaging and features
**Metric**: Bounce rate, demo requests
**Impact**: 5 | **Confidence**: 5 | **Effort**: 3 | **Score**: 8.3
**Status**: URGENT - Not a test, requires fix

### Test 2: Testimonial Relevance (PT)
**Type**: Social proof
**Hypothesis**: PT site shows Senior Living testimonials; segment-specific testimonials will increase trust
**Control**: Current family caregiver testimonials
**Variant**: PT clinic owner/therapist testimonials (or remove until available)
**Metric**: Time on page, demo requests
**Impact**: 4 | **Confidence**: 4 | **Effort**: 2 | **Score**: 8

---

## Priority 2: High Impact

### Test 3: Hero Headline - PT
**Type**: Copy test
**Hypothesis**: Leading with time savings (SOAP notes) may outperform leading with gait analysis
**Control**: "Transform Your PT Practice with AI-Powered Gait Analysis"
**Variant A**: "Save 5+ Hours Weekly with AI-Generated SOAP Notes"
**Variant B**: "Clinical-Grade Gait Analysis Without the Setup"
**Metric**: CTA click rate, demo requests
**Impact**: 4 | **Confidence**: 3 | **Effort**: 1 | **Score**: 12

### Test 4: Hero Headline - Senior Living
**Type**: Copy test
**Hypothesis**: Leading with fall detection may outperform "resident experience"
**Control**: "Enhance Resident Experience in Your Senior Living Community"
**Variant A**: "Reduce Falls with 24/7 Floor-Based Detection"
**Variant B**: "The Monitoring Families Trust, Without Cameras"
**Metric**: CTA click rate, demo requests
**Impact**: 4 | **Confidence**: 3 | **Effort**: 1 | **Score**: 12

### Test 5: CTA Button Text
**Type**: CTA test
**Hypothesis**: More specific CTAs will increase click-through
**Control**: "Schedule Demo" / "Request Facility Demo"
**Variant A**: "See It In Action"
**Variant B**: "Get Free Assessment"
**Variant C**: "Watch 2-Minute Demo"
**Metric**: CTA click rate
**Impact**: 4 | **Confidence**: 3 | **Effort**: 1 | **Score**: 12

### Test 6: Add Customer Logos
**Type**: Social proof
**Hypothesis**: Visible customer logos increase trust and conversion
**Control**: No logos
**Variant**: Logo bar with customer/partner logos
**Metric**: Demo request rate
**Impact**: 4 | **Confidence**: 4 | **Effort**: 2 | **Score**: 8
**Dependency**: Need approved customer logos

---

## Priority 3: Medium Impact

### Test 7: Pricing Calculator Visibility
**Type**: Feature test
**Hypothesis**: Adding pricing calculator to all segment sites (not just Senior Living) reduces friction
**Control**: Pricing only on Senior Living
**Variant**: Add pricing calculator to PT, Facilities, Healthcare
**Metric**: Demo requests, pricing page engagement
**Impact**: 3 | **Confidence**: 3 | **Effort**: 3 | **Score**: 3

### Test 8: Video in Hero
**Type**: Layout test
**Hypothesis**: Video thumbnail in hero increases engagement
**Control**: Static image
**Variant**: Video thumbnail with play button
**Metric**: Video plays, CTA clicks, bounce rate
**Impact**: 3 | **Confidence**: 3 | **Effort**: 2 | **Score**: 4.5

### Test 9: Form Length
**Type**: Form optimization
**Hypothesis**: Shorter forms increase submission rate
**Control**: Name, Email, Phone, Company, Message
**Variant A**: Name, Email, Company only
**Variant B**: Email only with progressive profiling
**Metric**: Form submission rate
**Impact**: 3 | **Confidence**: 4 | **Effort**: 2 | **Score**: 6

### Test 10: Proof Point Placement
**Type**: Layout test
**Hypothesis**: Moving "DOE-backed, patented, US-made" to hero increases trust
**Control**: Proof points in body content
**Variant**: Proof point badges in hero section
**Metric**: Scroll depth, CTA clicks
**Impact**: 3 | **Confidence**: 3 | **Effort**: 1 | **Score**: 9

---

## Priority 4: Exploration

### Test 11: ROI Calculator Lead Magnet
**Type**: Offer test
**Hypothesis**: Interactive ROI calculator generates more leads than demo request
**Control**: Demo request CTA
**Variant**: "Calculate Your ROI" CTA leading to calculator
**Metric**: Lead generation, lead quality
**Impact**: 3 | **Confidence**: 2 | **Effort**: 4 | **Score**: 1.5

### Test 12: Comparison Table
**Type**: Content test
**Hypothesis**: Comparison to alternatives (cameras, wearables) clarifies value
**Control**: Features only
**Variant**: Add comparison table section
**Metric**: Time on page, demo requests
**Impact**: 3 | **Confidence**: 2 | **Effort**: 3 | **Score**: 2

### Test 13: Chat Widget
**Type**: Feature test
**Hypothesis**: Live chat increases conversion by capturing immediate questions
**Control**: No chat
**Variant**: Chat widget (Intercom, Drift, etc.)
**Metric**: Chat engagement, demo requests
**Impact**: 3 | **Confidence**: 2 | **Effort**: 2 | **Score**: 3

### Test 14: Exit Intent Popup
**Type**: Capture test
**Hypothesis**: Exit intent offer captures abandoning visitors
**Control**: No popup
**Variant**: Exit popup with lead magnet offer
**Metric**: Lead capture rate, demo requests
**Impact**: 2 | **Confidence**: 3 | **Effort**: 2 | **Score**: 3

### Test 15: Mobile-First Redesign
**Type**: Layout test
**Hypothesis**: Mobile-optimized pages increase mobile conversion
**Control**: Current responsive design
**Variant**: Mobile-first redesign with simplified flow
**Metric**: Mobile conversion rate
**Impact**: 3 | **Confidence**: 2 | **Effort**: 5 | **Score**: 1.2

---

## Success Metrics

### Primary
- Demo request rate (leads / visitors)
- Form submission rate
- Cost per lead (when paid traffic)

### Secondary
- Bounce rate
- Time on page
- Scroll depth
- CTA click rate
- Pages per session

---

## Test Velocity Target
- 2 tests per month minimum
- 2-4 week test duration
- 95% statistical confidence before calling
