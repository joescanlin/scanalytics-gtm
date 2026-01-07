import React from 'react';
import { 
  Stethoscope, 
  Heart, 
  Building2, 
  Hospital, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Wrench, 
  Zap, 
  Network 
} from 'lucide-react';
import { SegmentData } from './types';

export const COLORS = {
  primary: '#00A86B', // Green
  secondary: '#007A4D', // Dark Green
  accent: '#FF6B35',
  dark: '#1A1A2E',
  light: '#F8F9FA',
  text: '#333333'
};

export const SEGMENTS: Record<string, SegmentData> = {
  'physical-therapy': {
    id: 'physical-therapy',
    name: 'Physical Therapy',
    oneLiner: 'AI gait analysis + auto SOAP notes',
    icon: 'Stethoscope',
    description: 'AI-powered gait analysis and documentation',
    icp: {
      firmographics: 'Multi-location PT/rehab clinics, outpatient focus, 3+ treating therapists, $1M+ revenue',
      primaryBuyer: 'Clinic Owner, Practice Manager, Regional Director',
      keyInfluencer: 'Physical Therapist, Clinic Director'
    },
    problems: [
      "I spend more time on documentation than treating patients",
      "I can't objectively prove patient progress to payers",
      "Gait labs are too expensive and impractical",
      "My therapists are burning out from admin work",
      "We're leaving money on the table with poor documentation"
    ],
    outcomes: [
      "Cut documentation time by 50%+",
      "Objective gait data for every patient, every session",
      "AI-generated SOAP notes they review, not write",
      "Better reimbursement rates from data-backed claims",
      "Technology that differentiates from competitors"
    ],
    approvedMessages: [
      "\"Save 5+ hours per therapist per week.\" SmartStep captures gait data automatically and generates AI-powered SOAP notes. Your therapists review and finalize - they don't start from scratch.",
      "\"Clinical-grade gait analysis, every session.\" Step length, velocity, cadence, symmetry - captured during normal treatment without dedicated assessment time.",
      "\"Objective data for payers.\" No more \"I can see improvement.\" SmartStep documents measurable progress that supports your reimbursement claims.",
      "\"No equipment, no setup, no wearables.\" Sensors beneath the floor capture data automatically. Nothing for therapists or patients to manage.",
      "\"Integrates with your EMR.\" Gait data and AI-generated notes flow directly into your existing documentation system."
    ],
    objections: [
      { question: "Too expensive", response: "At $1,000-2,500/month, most clinics see ROI within 90 days. One hour saved per therapist per day more than covers the cost." },
      { question: "We have a gait lab", response: "Gait labs are great for detailed assessments. SmartStep captures data during every session - it's continuous monitoring, not periodic testing." },
      { question: "Will therapists actually use it?", response: "There's nothing to use. The floor captures data automatically. Therapists review AI-generated notes instead of writing from scratch." },
      { question: "EMR integration?", response: "We integrate with major PT EMR systems. Our API handles the data transfer - your notes appear where they always do." },
      { question: "How accurate?", response: "Millimeter-level accuracy, validated against gold-standard motion capture systems." }
    ],
    contentAngles: [
      "The Documentation Crisis - Burnout, time, and what it costs clinics",
      "Beyond the Gait Lab - Affordable, continuous gait analysis",
      "The AI Scribe - How AI-generated SOAP notes actually work",
      "Payer-Ready Data - Objective outcomes for reimbursement",
      "The Invisible Assessment - Gait data without dedicated time",
      "PT Differentiation - Standing out with technology",
      "The Compliance Angle - HIPAA, no cameras, no concerns",
      "ROI Math - Hours saved × therapist cost = obvious win",
      "The Integration Story - Works with existing EMR/workflows",
      "Future of PT - Where the industry is heading"
    ],
    proofStatus: [
      { label: "Millimeter accuracy claim (validated)", status: "success" },
      { label: "No wearables/cameras (on website)", status: "success" },
      { label: "EMR integration capability (on website)", status: "success" },
      { label: "\"5+ hours saved\" - needs customer validation", status: "warning" },
      { label: "PT-specific testimonials - currently showing wrong segment", status: "warning" },
      { label: "Published clinical study - not yet available", status: "error" }
    ]
  },
  'senior-living': {
    id: 'senior-living',
    name: 'Senior Living',
    oneLiner: 'Fall detection without wearables',
    icon: 'Heart',
    description: 'Fall detection without cameras or wearables',
    icp: {
      firmographics: '50+ units, assisted living/memory care/CCRC, dedicated care staff',
      primaryBuyer: 'Executive Director, Administrator, Owner/Operator',
      keyInfluencer: 'DON, Wellness Director, Risk Manager'
    },
    problems: [
      "Residents don't wear their pendants consistently",
      "Falls at night go undetected until morning rounds",
      "Families ask if someone is watching - I can't say yes honestly",
      "Staff can't be everywhere at once",
      "One bad fall with injury costs us $40,000+"
    ],
    outcomes: [
      "Detect 100% of falls without relying on resident compliance",
      "Instant alerts with exact location",
      "Give families peace of mind without cameras in private spaces",
      "Extend staff capabilities with intelligent monitoring",
      "Reduce liability exposure and insurance costs"
    ],
    approvedMessages: [
      "\"Detect 100% of falls without wearables.\" SmartStep sensors beneath the floor detect falls the moment they happen - no pendant required, no compliance issues.",
      "\"Staff alerted in under 2 minutes.\" When a fall occurs, the system immediately alerts staff with the exact room and location. No searching, no delays.",
      "\"Privacy families can trust.\" No cameras in private spaces. No wearables to manage. Anonymous monitoring that preserves resident dignity.",
      "\"See mobility changes before they become falls.\" Track walking patterns over time to identify residents at increasing fall risk - intervene before incidents happen.",
      "\"Battery + cellular backup.\" When power goes out or WiFi fails, protection continues. Your residents are never unmonitored."
    ],
    objections: [
      { question: "We have pendants", response: "Pendants work when worn. SmartStep works 100% of the time - residents can't forget it, remove it, or leave it by the bed." },
      { question: "Too expensive", response: "One fall with injury costs $40,000+ in care, liability, and family trust. SmartStep pays for itself with the first prevented serious incident." },
      { question: "Installation disruption", response: "Sensors install beneath existing flooring with minimal disruption. Most communities complete installation in 1-2 days, often during off-hours." },
      { question: "Staff won't use another system", response: "Alerts go to devices staff already carry. There's no new app to learn - we integrate with your existing nurse call system." },
      { question: "Privacy concerns from families", response: "This is why families choose us over cameras. We capture anonymous floor vibrations - we never record video, audio, or identify individuals." }
    ],
    contentAngles: [
      "The $40,000 Fall - True cost of fall incidents",
      "The 3am Problem - Undetected falls overnight",
      "Beyond Pendants - Why wearables aren't enough",
      "Dignity + Safety - Monitoring without surveillance",
      "The Family Conversation - How to explain monitoring",
      "Staff Augmentation - Extending capabilities without headcount",
      "Memory Care Specific - Wander management + fall detection",
      "The Liability Angle - Risk reduction and insurance",
      "Mobility Trends - Predictive fall risk identification",
      "The Always-On Promise - Backup systems and reliability"
    ],
    proofStatus: [
      { label: "No cameras/wearables (on website)", status: "success" },
      { label: "Instant fall detection (on website)", status: "success" },
      { label: "Battery + cellular backup (on website)", status: "success" },
      { label: "Nurse call integration (on website)", status: "success" },
      { label: "$40,000 fall cost - needs source citation", status: "warning" },
      { label: "Response time data - needs customer validation", status: "warning" },
      { label: "Fall reduction case study - not yet available", status: "error" }
    ]
  },
  'facilities': {
    id: 'facilities',
    name: 'Facilities',
    oneLiner: 'Occupancy data without cameras',
    icon: 'Building2',
    description: 'Occupancy intelligence for smarter buildings',
    icp: {
      firmographics: '50,000-500,000+ sq ft, corporate/commercial/education/hospitality, dedicated facilities team',
      primaryBuyer: 'Facility Manager, VP of Real Estate, Director of Operations',
      keyInfluencer: 'Sustainability Lead, Ops Manager'
    },
    problems: [
      "We clean empty offices on a schedule, not based on need",
      "I have no idea how our space is actually being used",
      "Leadership wants occupancy data and I can't give it to them",
      "Energy costs are up and we're conditioning empty spaces",
      "Badge data tells me who swiped in, not where they actually went"
    ],
    outcomes: [
      "Clean based on traffic, save 15-25% on cleaning labor",
      "Accurate space utilization data for real estate decisions",
      "Dashboards leadership can actually use",
      "Reduce energy waste with occupancy-based HVAC control",
      "Real data, not surveys or badge swipes"
    ],
    approvedMessages: [
      "\"Know how your space is actually used.\" SmartStep captures real traffic patterns - not badge swipes or surveys. See which areas are busy, which are empty, and when.",
      "\"Clean smarter, not more.\" Traffic-based cleaning schedules mean high-traffic areas get attention while empty spaces get skipped. Typical savings: 15-25% on cleaning labor.",
      "\"Less than 10% coverage for full-building insights.\" Strategic sensor placement at entrances, corridors, and key zones gives you comprehensive data without instrumenting every room.",
      "\"No cameras, no privacy concerns.\" Anonymous foot traffic data gives you what you need without employee surveillance concerns or union pushback.",
      "\"Integrates with your BMS.\" API connection to building management systems enables occupancy-based HVAC, lighting, and more."
    ],
    objections: [
      { question: "We have occupancy sensors", response: "Ceiling sensors give room-level presence. SmartStep gives you actual traffic flow, patterns, and zone-level precision - the full picture." },
      { question: "Need the whole building?", response: "No - less than 10% coverage in strategic locations gives you comprehensive insights. Start small, expand based on results." },
      { question: "Employee privacy concerns", response: "No cameras, no identification, no tracking individuals. We capture anonymous foot traffic patterns - HR and legal teams approve this approach." },
      { question: "BMS integration?", response: "Yes, our API connects with major building management systems for automated HVAC and lighting control based on real occupancy." },
      { question: "How do we prove ROI?", response: "Start with cleaning optimization - it's the fastest, most measurable win. Most facilities see 15-25% reduction in cleaning costs within 90 days." }
    ],
    contentAngles: [
      "The Invisible Waste - Cleaning and conditioning empty spaces",
      "Beyond Badge Data - Why swipe data lies",
      "The <10% Solution - Strategic coverage, full insights",
      "Return-to-Office Reality - Actual vs. expected utilization",
      "Cleaning 2.0 - Traffic-based, not schedule-based",
      "The ESG Angle - Measurable energy reduction",
      "Space Rationalization - Data for portfolio decisions",
      "Privacy-First Occupancy - Tracking without surveillance",
      "Predictive Maintenance - High-traffic areas need more attention",
      "The Smart Building Floor - Adding intelligence to any building"
    ],
    proofStatus: [
      { label: "<10% coverage claim (on website)", status: "success" },
      { label: "BMS integration capability (on website)", status: "success" },
      { label: "Anonymous data collection (on website)", status: "success" },
      { label: "15-25% cleaning savings - needs customer validation", status: "warning" },
      { label: "Energy savings data - needs validation", status: "warning" },
      { label: "Named corporate case study - not yet available", status: "error" }
    ]
  },
  'healthcare': {
    id: 'healthcare',
    name: 'Healthcare',
    oneLiner: 'Hospital-wide fall detection',
    icon: 'Hospital',
    description: 'Hospital-wide fall detection, HIPAA-compliant',
    icp: {
      firmographics: '100+ beds, acute care/rehab/LTAC, 100,000-1,000,000+ sq ft',
      primaryBuyer: 'Hospital Administrator, CNO, CFO',
      keyInfluencer: 'VP of Quality/Patient Safety, Nurse Managers'
    },
    problems: [
      "Falls happen even with bed alarms and call buttons",
      "Our fall rate affects CMS reimbursement",
      "Liability from fall injuries is a major cost center",
      "We can't put cameras in patient rooms",
      "Documentation of fall prevention efforts is burdensome"
    ],
    outcomes: [
      "Detect falls instantly, anywhere in the facility",
      "Improve CMS quality scores",
      "Reduce fall-related liability and litigation costs",
      "Monitor without cameras or HIPAA concerns",
      "Automated documentation for compliance"
    ],
    approvedMessages: [
      "\"Hospital-wide fall detection, HIPAA-compliant.\" SmartStep detects falls the moment they happen and alerts staff with precise location - without collecting protected health information.",
      "\"Beyond the bed alarm.\" Bed alarms only work in bed. Call buttons only work when pressed. SmartStep monitors the entire patient journey - bathroom, hallway, room - 24/7.",
      "\"Improve quality scores with data.\" Track fall rates, response times, and mobility patterns to support quality improvement initiatives and CMS reporting.",
      "\"Integrates with your EMR.\" Fall events and mobility data flow directly into Epic, Cerner, and other EMR systems for seamless documentation.",
      "\"Battery and cellular backup.\" System stays operational during power outages and network failures. Your patients are always protected."
    ],
    objections: [
      { question: "Is it HIPAA compliant?", response: "Yes. We collect no PHI - floor sensors detect movement patterns, not identities. All data stored in HIPAA-compliant infrastructure." },
      { question: "Installation disruption", response: "We work off-hours and phase by unit. Sensors go beneath existing flooring with minimal disruption to patient care." },
      { question: "EMR integration?", response: "We integrate with Epic, Cerner, and other major systems via API. Fall events flow directly to patient records." },
      { question: "We have bed alarms", response: "Bed alarms only work in bed. We monitor the whole patient journey - the bathroom trip at 3am, the hallway walk, everywhere." },
      { question: "Budget constraints", response: "One prevented fall with injury can cost $40,000+ in care and liability. CMS also penalizes high fall rates. SmartStep addresses both." }
    ],
    contentAngles: [
      "The Fall You Didn't See Coming - Gaps in current solutions",
      "HIPAA Without Cameras - Privacy-compliant monitoring",
      "Quality Scores and Falls - CMS measures that matter",
      "The $40,000 Incident - True cost of inpatient falls",
      "Beyond the Hospital Bed - Monitoring the whole journey",
      "The 3am Fall - 24/7 protection without 24/7 staffing",
      "Documentation Automation - Compliance simplified",
      "Mobility as Vital Sign - Gait changes as early warning",
      "Zero Harm Goals - Technology that makes it possible",
      "The HIPAA-Compliant Floor - How floor sensors protect privacy"
    ],
    proofStatus: [
      { label: "No cameras/wearables (on website)", status: "success" },
      { label: "EMR integration capability (on website)", status: "success" },
      { label: "Battery + cellular backup (on website)", status: "success" },
      { label: "HIPAA compliance - needs formal audit/certification", status: "warning" },
      { label: "$40,000 fall cost - needs source citation", status: "warning" },
      { label: "Hospital case study with metrics - not yet available", status: "error" }
    ]
  },
  'sports': {
    id: 'sports',
    name: 'Sports',
    oneLiner: 'Continuous movement analytics',
    icon: 'Activity',
    description: 'Continuous movement analytics for performance',
    icp: {
      firmographics: 'Professional teams, elite college programs, national federations, dedicated training facility',
      primaryBuyer: 'Director of Performance/Sports Science, Head Coach, GM',
      keyInfluencer: 'Athletic Trainer, Team Physician, Strength Coach'
    },
    problems: [
      "We don't see injury risks until it's too late",
      "Force plate testing is periodic - we miss what happens between tests",
      "Return-to-play decisions are based on feel, not data",
      "Our competitors have better performance technology",
      "Wearables give us load data, not movement quality"
    ],
    outcomes: [
      "Continuous movement monitoring during actual training",
      "Early detection of asymmetries and injury risk",
      "Objective return-to-play criteria",
      "Competitive edge through better data",
      "Movement quality data to complement load data"
    ],
    approvedMessages: [
      "\"Continuous movement capture during actual training.\" Unlike periodic force plate testing, SmartStep captures every step, jump, and cut during real training sessions.",
      "\"See injury risks before they become injuries.\" AI analysis detects movement asymmetries and pattern changes that precede soft tissue injuries.",
      "\"Objective return-to-play data.\" Compare post-injury movement patterns to pre-injury baselines for data-driven return-to-play decisions.",
      "\"No wearables, no setup.\" The floor captures data automatically - athletes train naturally while you get comprehensive movement analytics.",
      "\"Integrates with your performance platform.\" API connection to existing sports analytics systems means movement data joins your load, wellness, and GPS data."
    ],
    objections: [
      { question: "We have force plates", response: "Force plates give you testing snapshots. SmartStep gives you continuous data during actual training - the movie, not just photos." },
      { question: "Our athletes wear GPS", response: "GPS tells you how far and how fast. We tell you how well - movement quality, ground contact asymmetries, force distribution." },
      { question: "Integration?", response: "API integration with major sports performance platforms. Your movement data joins your existing load, wellness, and GPS analytics." },
      { question: "How accurate?", response: "Millimeter-level accuracy, validated against gold-standard motion capture systems." },
      { question: "Overkill for us", response: "Start with key training zones - weight room, turf, court. Strategic placement gives you most of the value at lower cost." }
    ],
    contentAngles: [
      "The Injury You Could Have Prevented - Movement changes precede injuries",
      "Beyond Force Plates - Continuous vs. periodic testing",
      "The Return-to-Play Decision - Objective data, not just feel",
      "What Wearables Miss - Movement quality vs. just load",
      "Training Ground Truth - Real training, not just lab tests",
      "The Competitive Edge - Better data than the competition",
      "Protecting Your Investment - Million-dollar athletes, comprehensive data",
      "Asymmetry Detection - Early warning system",
      "The Invisible Sensor - No athlete burden, no compliance",
      "Sports Science Evolution - From periodic to continuous monitoring"
    ],
    proofStatus: [
      { label: "Millimeter accuracy (validated)", status: "success" },
      { label: "No wearables required (on website)", status: "success" },
      { label: "API integration capability (on website)", status: "success" },
      { label: "Sports-specific website content - BLOCKED (shows PT content)", status: "error" },
      { label: "Professional team case study - not yet available", status: "error" },
      { label: "Injury prevention outcome data - not yet available", status: "error" }
    ]
  }
};

export const UNIVERSAL_MESSAGE_PILLARS = [
  { 
    title: 'Privacy', 
    text: 'No cameras, no wearables, no microphones. Anonymous monitoring that preserves dignity and privacy.',
    icon: <ShieldCheck size={20} className="text-sc-primary" />
  },
  { 
    title: 'Technology Credibility', 
    text: 'DOE-backed, patented technology. 100% manufactured in the USA.',
    icon: <Cpu size={20} className="text-sc-primary" />
  },
  { 
    title: 'Ease of Implementation', 
    text: 'Installs beneath existing flooring. Works with any floor type. Minimal disruption.',
    icon: <Wrench size={20} className="text-sc-primary" />
  },
  { 
    title: 'Reliability', 
    text: 'Battery backup for power outages. Cellular backup for network failures. Always-on protection.',
    icon: <Zap size={20} className="text-sc-primary" />
  },
  { 
    title: 'Integration', 
    text: 'API integration with EMR, nurse call, and BMS systems. Works with your existing workflows.',
    icon: <Network size={20} className="text-sc-primary" />
  }
];

export const CTA_LIBRARY = {
  awareness: ["Learn More", "See How It Works", "Explore Solutions", "Watch Overview Video"],
  consideration: ["Schedule Demo", "Request Facility Demo", "Get Free Assessment", "Calculate Your ROI"],
  decision: ["Start Pilot", "Get Pricing", "Talk to Sales", "Request Proposal"]
};

export const UNIVERSAL_PROOF_POINTS = [
  "DOE-backed technology (government R&D validation)",
  "100% manufactured in the USA",
  "Patented floor sensor technology",
  "No cameras, no wearables, no privacy concerns",
  "Battery + cellular backup for reliability"
];
