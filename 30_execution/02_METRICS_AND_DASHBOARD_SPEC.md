# Metrics & Dashboard Specification

## North Star Metric
**Monthly Recurring Revenue (MRR)** or **Annual Recurring Revenue (ARR)**

Why: SaaS business with subscription model; ARR captures customer value and retention.

---

## Leading Indicators

### Marketing Metrics

| Metric | Definition | Target | Frequency |
|--------|------------|--------|-----------|
| Website Visitors | Unique visitors by segment site | 8,600/month | Weekly |
| Lead Volume | Demo requests + form fills | 215/month | Weekly |
| Lead Quality (MQL Rate) | % of leads meeting ICP criteria | 50% | Weekly |
| Cost Per Lead | Total spend / leads | <$200 avg | Monthly |
| Lead Source Mix | % from organic, paid, events, referral | Diversified | Monthly |

### Sales Metrics

| Metric | Definition | Target | Frequency |
|--------|------------|--------|-----------|
| SQL Volume | Leads accepted by sales | 100/month | Weekly |
| Pipeline Created | New opportunity value | $500K/month | Weekly |
| Pipeline Velocity | Avg days in stage | <90 days | Monthly |
| Win Rate | Closed won / total opportunities | 25% | Monthly |
| Average Deal Size | ARR per closed deal | Varies by segment | Monthly |

### Customer Metrics

| Metric | Definition | Target | Frequency |
|--------|------------|--------|-----------|
| New ARR | Revenue from new customers | Growth target | Monthly |
| Expansion ARR | Revenue from existing customers | 20% of new | Monthly |
| Churn Rate | Lost ARR / total ARR | <5% annual | Monthly |
| Net Revenue Retention | (ARR + expansion - churn) / ARR | >100% | Quarterly |

---

## Dashboard Views

### Executive Dashboard (Weekly)
1. ARR trend (actual vs. target)
2. Pipeline value by stage
3. Win/loss trend
4. New customers this period
5. Top deals in progress

### Marketing Dashboard (Weekly)
1. Visitors by segment site
2. Leads by source
3. MQL conversion rate
4. Cost per lead trend
5. Top performing content/pages

### Sales Dashboard (Weekly)
1. Pipeline by stage and segment
2. SQL volume and acceptance rate
3. Deals closing this month
4. Win rate trend
5. Sales activity metrics

### Segment Dashboards (Monthly)
- Same metrics as above, filtered by segment
- Segment-specific benchmarks
- Competitive insights

---

## Instrumentation Checklist

### Website Analytics (All Sites)

| Element | Tool | Status |
|---------|------|--------|
| Page views | Google Analytics / Segment | [ ] TODO |
| Unique visitors | Google Analytics / Segment | [ ] TODO |
| Session duration | Google Analytics | [ ] TODO |
| Bounce rate | Google Analytics | [ ] TODO |
| Scroll depth | GA enhanced | [ ] TODO |
| Form submissions | Event tracking | [ ] TODO |
| CTA clicks | Event tracking | [ ] TODO |
| Video plays | Event tracking | [ ] TODO |
| Cross-domain tracking | GA4 | [ ] TODO |

### Form/Lead Tracking

| Element | Tool | Status |
|---------|------|--------|
| Form submissions | HubSpot / Marketo / etc. | [ ] TODO |
| Lead source | UTM parameters | [ ] TODO |
| Lead scoring | Marketing automation | [ ] TODO |
| Lead to MQL conversion | CRM | [ ] TODO |

### CRM/Sales Tracking

| Element | Tool | Status |
|---------|------|--------|
| Lead to opportunity | CRM (Salesforce/HubSpot) | [ ] TODO |
| Stage progression | CRM | [ ] TODO |
| Win/loss reasons | CRM | [ ] TODO |
| Deal value | CRM | [ ] TODO |
| Sales activities | CRM | [ ] TODO |

### Attribution

| Element | Tool | Status |
|---------|------|--------|
| First touch attribution | Marketing automation | [ ] TODO |
| Multi-touch attribution | Attribution platform | [ ] TODO |
| Channel ROI | Reporting | [ ] TODO |

---

## Reporting Cadence

| Report | Audience | Frequency | Owner |
|--------|----------|-----------|-------|
| GTM Metrics | Leadership | Weekly | Marketing |
| Pipeline Review | Sales + Marketing | Weekly | Sales |
| Campaign Performance | Marketing | Weekly | Demand Gen |
| Segment Deep Dive | All | Monthly | Segment PMM |
| Quarterly Business Review | Exec | Quarterly | Marketing Lead |

---

## Data Quality Standards

### Lead Data
- Required: Name, Email, Company
- Desired: Phone, Title, Segment
- Enrichment: Company size, industry (via Clearbit, ZoomInfo)

### Opportunity Data
- Required: Value, Stage, Close Date, Segment
- Desired: Source, Competition, Use Case
- Quality: Weekly pipeline hygiene review

### Customer Data
- Required: Contract value, Start date, Segment
- Desired: Implementation status, Usage metrics
- Health: NPS or satisfaction scores
