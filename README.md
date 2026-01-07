# Scanalytics GTM Operating System

A complete, modular Marketing Plan and Go-To-Market operating system for Scanalytics Smart Flooring technology.

## Quick Start

### For New Team Members
1. Read `/00_platform/01_EXEC_SUMMARY.md` for company overview
2. Read your segment's files in `/10_segments/<segment>/`
3. Review your agent brief in `/agents/`
4. Check `/30_execution/03_TWO_WEEK_EXECUTION_PLAN.md` for current priorities

### For Running Agent Tasks
Each agent has defined file ownership. Before editing, check the agent brief to ensure you're working within your lane.

---

## Repository Structure

```
scanalytics-gtm/
├── README.md                    # This file
├── 00_platform/                 # Umbrella narrative, proof, claims
│   ├── 01_EXEC_SUMMARY.md
│   ├── 02_PLATFORM_POSITIONING.md
│   ├── 03_PLATFORM_MESSAGING_LIBRARY.md
│   ├── 04_CLAIMS_AND_PROOF_RULES.md
│   ├── 05_COMPETITIVE_LANDSCAPE.md
│   └── 06_PRICING_PACKAGING_ASSUMPTIONS.md
│
├── 10_segments/                 # Segment-specific GTM materials
│   ├── pt/                      # Physical Therapy
│   ├── facilities/              # Facilities Management
│   ├── seniorliving/            # Senior Living
│   ├── healthcare/              # Healthcare
│   └── sports/                  # Sports Performance
│   Each contains:
│       ├── 01_ICP.md
│       ├── 02_MESSAGING.md
│       ├── 03_OFFERS.md
│       ├── 04_OBJECTIONS.md
│       ├── 05_LANDING_PAGE_OUTLINE.md
│       └── 06_SALES_ENABLEMENT.md
│
├── 20_web/                      # Web inventory, copy, CRO, SEO
│   ├── 01_SITE_INVENTORY.md
│   ├── 02_COPY_BLOCKS_LIBRARY.md
│   ├── 03_CRO_BACKLOG.md
│   └── 04_SEO_THEMES.md
│
├── 30_execution/                # Plans, metrics, pipeline
│   ├── 01_PIPELINE_MODEL.md
│   ├── 02_METRICS_AND_DASHBOARD_SPEC.md
│   └── 03_TWO_WEEK_EXECUTION_PLAN.md
│
├── agents/                      # Role-specific agent briefs
│   ├── platform_pmm.md
│   ├── segment_pmm_pt.md
│   ├── segment_pmm_facilities.md
│   ├── segment_pmm_seniorliving.md
│   ├── segment_pmm_healthcare.md
│   ├── segment_pmm_sports.md
│   ├── content_strategist.md
│   ├── demand_gen.md
│   ├── partnerships.md
│   ├── sales_enablement.md
│   ├── web_cro.md
│   └── revops_analytics.md
│
└── [Site Source Code Folders]   # Website source code
    ├── PT-page/
    ├── SeniorLivingOP/
    ├── fm-page/
    ├── healthcaresd/
    └── sportsperformance-page/
```

---

## Folder Purposes

| Folder | Purpose | Primary Owner |
|--------|---------|---------------|
| `/00_platform/` | Cross-segment strategy and claims | Platform PMM |
| `/10_segments/<segment>/` | Segment-specific GTM | Segment PMM |
| `/20_web/` | Website operations | Web CRO + Content |
| `/30_execution/` | Execution planning and metrics | RevOps + All |
| `/agents/` | Role definitions | GTM Lead |

---

## How to Use This Repo

### Adding Content
1. Check which agent owns the file (see agent briefs)
2. Follow the style guide in `/00_platform/03_PLATFORM_MESSAGING_LIBRARY.md`
3. Mark unverified claims with TODO
4. Propose cross-lane edits via review

### Conflict Resolution
- Each file has one owner (see agent briefs)
- Cross-segment conflicts escalate to Platform PMM
- Pricing/claims conflicts escalate to GTM Lead
- Never edit another agent's files without coordination

### Version Control
- Commit messages should reference the section/segment
- Major changes should be discussed before merging
- Keep files under 2 pages for readability

---

## Current Priorities

### URGENT
1. **Sports site content fix**: Uses PT content, needs complete rewrite
2. **Testimonial audit**: PT site uses wrong testimonials

### High Priority
3. Claims validation (see `/00_platform/04_CLAIMS_AND_PROOF_RULES.md`)
4. Analytics instrumentation
5. Sales deck v1 creation

### Medium Priority
6. Customer case study collection
7. First CRO test launch
8. Partner outreach initiation

See `/30_execution/03_TWO_WEEK_EXECUTION_PLAN.md` for detailed timeline.

---

## Agent Assignment

| Agent | Owner | Key Files |
|-------|-------|-----------|
| Platform PMM | TBD | `/00_platform/` |
| Segment PMM - PT | TBD | `/10_segments/pt/` |
| Segment PMM - Senior Living | TBD | `/10_segments/seniorliving/` |
| Segment PMM - Facilities | TBD | `/10_segments/facilities/` |
| Segment PMM - Healthcare | TBD | `/10_segments/healthcare/` |
| Segment PMM - Sports | TBD | `/10_segments/sports/` |
| Content Strategist | TBD | Copy library, case studies |
| Demand Gen | TBD | Campaigns, events |
| Partnerships | TBD | Integrations, channel |
| Sales Enablement | TBD | Decks, training |
| Web CRO | TBD | `/20_web/`, site optimization |
| RevOps/Analytics | TBD | `/30_execution/`, dashboards |

---

## Key Resources

### External Sites
- Main: https://www.scanalyticsinc.com/
- PT: https://pt.scanalyticsinc.com/
- Senior Living: https://seniorliving.scanalyticsinc.com/
- Facilities: https://facilities.scanalyticsinc.com/
- Healthcare: https://healthcare.scanalyticsinc.com/
- Sports: https://sports.scanalyticsinc.com/ (NEEDS FIX)

### Documentation Standards
- Keep files to 1-2 pages
- Use tables for structured data
- Mark assumptions explicitly
- Never invent proof points
- Quote claims from sites, note validation status

---

## Maintenance

- Review segment files quarterly
- Update claims validation status monthly
- Archive completed execution plans
- Refresh competitive intel quarterly
