# Claims and Proof Rules

## Claim Categories

### Tier 1: Verified Claims (Can use freely)
These claims have supporting evidence on the website or are factual statements.

| Claim | Evidence |
|-------|----------|
| DOE-backed technology | Stated on main site |
| Patented technology | Stated on main site |
| 100% US manufactured | Stated on main site |
| Partnerships with world's largest flooring companies | Stated on main site |
| No cameras or wearables required | Product design fact |
| Works beneath existing flooring | Product design fact |
| Battery and cellular backup available | Stated in FAQ |
| HIPAA-compliant security architecture | Stated on PT/Healthcare sites |

### Tier 2: Claimed but Needs Validation
These appear on the sites but need supporting documentation.

| Claim | Location | Validation Needed |
|-------|----------|-------------------|
| "Captures up to 100% of foot traffic" | Main site | Methodology documentation |
| "35% energy reduction through HVAC" | Main site | Case study with measurements |
| "Millimeter-level accuracy" | PT site | Technical specification or validation study |
| "Validated against gold-standard motion capture" | PT FAQ | Citation to study or testing results |
| "Clinical-grade gait analysis" | PT site | Clinical validation documentation |
| "Less than 10% building coverage required" | FM site | Technical explanation of how this works |

### Tier 3: Marketing Claims (Soften or Remove)
These are aspirational or unverified and should be treated carefully.

| Claim | Location | Issue |
|-------|----------|-------|
| "94% greater peace of mind" | Testimonials | No survey methodology provided |
| "87% feel more confident" | Testimonials | No survey methodology provided |
| "Join thousands of families who trust SmartStep" | Testimonials | Customer count not verified |
| "More accurate than motion sensors and less invasive than cameras" | Main site | Comparative claim needs testing |

---

## Messaging Conflicts Across Segments

### Issue 1: Sports Site Uses PT Messaging
**Problem**: The sportsperformance-page Hero.tsx uses identical headline to PT page:
- "Transform Your PT Practice with AI-Powered Gait Analysis"

**Resolution**: Create unique sports-specific headline. Suggested:
- "Elevate Athletic Performance with Precision Movement Analytics"
- "Train Smarter with AI-Powered Performance Flooring"

### Issue 2: Testimonials Don't Match Segments
**Problem**: PT and Senior Living sites share identical testimonials from "Sarah Johnson," "Michael Chen," and "Eleanor Thompson" - all positioned as family caregivers of aging adults.

**Resolution**:
- PT site needs PT-specific testimonials (clinic owners, therapists, patients)
- Use placeholder until real testimonials available
- Mark as TODO in segment files

### Issue 3: Pricing Only on Senior Living Site
**Problem**: Pricing calculator only exists on SeniorLivingOP site, but same model likely applies to other segments.

**Resolution**:
- Clarify if pricing is universal or segment-specific
- Document in 06_PRICING_PACKAGING_ASSUMPTIONS.md
- Either add to all segment sites or keep centralized

---

## Proof Requirements by Claim Type

### Clinical/Health Claims (PT, Healthcare, Senior Living)
- Requires: Published study, clinical validation, or third-party testing
- Example: "Gait analysis validated against Vicon motion capture system"
- Never claim: Diagnostic capability, disease detection, or treatment efficacy without FDA clearance

### Performance Claims (Energy, Efficiency)
- Requires: Case study with before/after measurements
- Example: "Customer X reduced HVAC costs by Y% over Z months"
- Acceptable soft claim: "Can reduce energy usage" (not "will reduce")

### Comparative Claims
- Requires: Head-to-head testing methodology
- Example: "In controlled testing, SmartStep detected 95% of falls vs. 72% for PIR sensors"
- Never claim superiority without documented comparison

### Customer Count/Scale Claims
- Requires: Verifiable customer list or audit
- Example: "Deployed in 50+ facilities across 12 states"
- Soft alternative: "Trusted by leading healthcare facilities"

---

## Approval Process for New Claims

1. **Draft claim** with source/rationale
2. **Categorize** (Tier 1, 2, or 3)
3. **Validation plan** if Tier 2
4. **Legal review** for clinical, comparative, or performance claims
5. **Add to this document** once approved

---

## Red Lines (Never Claim)

- FDA clearance or medical device status (unless obtained)
- Specific disease detection or diagnosis capability
- Guaranteed outcomes (falls prevented, lives saved)
- Competitor disparagement by name
- Customer names without permission
- Revenue or growth figures without verification
- Clinical study results that don't exist
