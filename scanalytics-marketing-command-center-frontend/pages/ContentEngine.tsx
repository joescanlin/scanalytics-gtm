
import React, { useState } from 'react';
// Added missing Bot icon
import { FileText, ChevronDown, ChevronUp, Copy, ExternalLink, Tag, Bot } from 'lucide-react';
import CopyButton from '../components/CopyButton';

type SegmentTab = 'PT' | 'Senior Living' | 'Facilities' | 'Healthcare' | 'Sports';

interface ContentItem {
  id: number;
  text: string;
  tags: string[];
}

const CONTENT_DATA: Record<SegmentTab, Record<string, { prompts: ContentItem[], longForm: string }>> = {
  PT: {
    'Week 1': {
      prompts: [
        { id: 1, text: "The average PT spends 5+ hours per week on documentation. That's 250+ hours a year not treating patients. We need to talk about this.", tags: ["BUYER", "AWARENESS"] },
        { id: 2, text: "Quick poll: How many hours do you spend on SOAP notes each week? A) 1-2, B) 3-5, C) 5+, D) I've stopped counting", tags: ["INFLUENCER", "AWARENESS"] },
        { id: 3, text: "Objective gait data shouldn't require a $100K motion capture lab. It should happen during every session, automatically.", tags: ["BUYER", "AWARENESS"] },
        { id: 4, text: "'I know improvement when I see it' isn't a payer-friendly answer anymore. We need data.", tags: ["INFLUENCER", "AWARENESS"] },
        { id: 5, text: "The PT burnout crisis has a documentation problem at its core. Here's what the data says...", tags: ["BUYER", "AWARENESS"] }
      ],
      longForm: "The Documentation Crisis in Physical Therapy: What It's Really Costing Your Clinic"
    },
    'Week 2': {
      prompts: [
        { id: 6, text: "Gait labs: Great data. Also: $100K, 30-min setup, scheduled appointments only. There's another way.", tags: ["BUYER", "AWARENESS"] },
        { id: 7, text: "The visual gait assessment: subjective, inconsistent, hard to document. We can do better.", tags: ["INFLUENCER", "AWARENESS"] },
        { id: 8, text: "Wearable gait sensors require compliance. Floor-based sensors don't. Think about that.", tags: ["BUYER", "AWARENESS"] },
        { id: 9, text: "What if gait analysis happened automatically during every session, not just during tests?", tags: ["BUYER", "AWARENESS"] },
        { id: 10, text: "The 'I can see improvement' approach worked until payers started asking for data.", tags: ["INFLUENCER", "AWARENESS"] }
      ],
      longForm: "Gait Analysis Options for PT Clinics: A Practical Comparison"
    }
  },
  'Senior Living': {
    'Week 1': {
      prompts: [
        { id: 1, text: "Average cost of a fall with injury in senior living: $40,000+. Average pendant compliance rate: 50%. The math doesn't work.", tags: ["BUYER", "AWARENESS"] },
        { id: 2, text: "We asked 50 DONs their #1 challenge. The answer wasn't surprising: staffing. But the solution might be.", tags: ["INFLUENCER", "AWARENESS"] },
        { id: 3, text: "Families ask: 'Is someone watching my mom?' What's your answer when the honest one is 'only when staff are nearby'?", tags: ["BUYER", "AWARENESS"] },
        { id: 4, text: "The 3am fall is the one nobody sees. Until now.", tags: ["BUYER", "AWARENESS"] },
        { id: 5, text: "Poll: What's your biggest fall prevention challenge? A) Pendant compliance, B) Staffing, C) Coverage gaps, D) All of the above", tags: ["INFLUENCER", "AWARENESS"] }
      ],
      longForm: "The $40,000 Fall: Understanding the True Cost of Senior Living Incidents"
    }
  },
  'Facilities': {
    'Week 1': {
      prompts: [
        { id: 1, text: "You're cleaning empty conference rooms on a schedule. Meanwhile, the break room is overflowing. This is 2024 facility management?", tags: ["BUYER", "AWARENESS"] },
        { id: 2, text: "Quick question: What's your actual space utilization? If you answered 'badge data says 40%' - that's swipe data, not reality.", tags: ["BUYER", "AWARENESS"] },
        { id: 3, text: "Energy bills up. Occupancy uncertain. ESG goals looming. Sound familiar?", tags: ["BUYER", "AWARENESS"] },
        { id: 4, text: "We're conditioning air in empty offices. Every. Single. Day. There has to be a better way.", tags: ["INFLUENCER", "AWARENESS"] },
        { id: 5, text: "The return-to-office question nobody can answer: How is the space actually being used?", tags: ["BUYER", "AWARENESS"] }
      ],
      longForm: "The Invisible Waste: How Facilities Are Losing Money Without Knowing It"
    }
  },
  'Healthcare': {
    'Week 1': {
      prompts: [
        { id: 1, text: "Inpatient falls cost hospitals $40,000+ per incident. CMS deducts for high rates. Yet bed alarms only work in bed. The gap is killing us.", tags: ["BUYER", "AWARENESS"] },
        { id: 2, text: "The patient fell on the way to the bathroom. The call button was by the bed. This story repeats every day.", tags: ["INFLUENCER", "AWARENESS"] },
        { id: 3, text: "Quality scores, liability, and patient safety all depend on fall prevention. Why are we still relying on 1990s technology?", tags: ["BUYER", "AWARENESS"] },
        { id: 4, text: "Poll: Where do most patient falls happen in your facility? A) Bathroom, B) Bedside, C) Hallway, D) Common areas", tags: ["INFLUENCER", "AWARENESS"] },
        { id: 5, text: "Zero harm is the goal. But you can't prevent what you can't see.", tags: ["BUYER", "AWARENESS"] }
      ],
      longForm: "Beyond the Bed Alarm: Why Hospital Fall Prevention Needs a New Approach"
    }
  },
  'Sports': {
    'Week 1': {
      prompts: [
        { id: 1, text: "Your star player is injured. Again. The movement pattern changes were there weeks ago. You just couldn't see them.", tags: ["BUYER", "AWARENESS"] },
        { id: 2, text: "Force plates give you a snapshot every few weeks. What happens between tests? That's where injuries develop.", tags: ["INFLUENCER", "AWARENESS"] },
        { id: 3, text: "GPS tells you how far. Wearables tell you how hard. Neither tells you how well they're moving.", tags: ["BUYER", "AWARENESS"] },
        { id: 4, text: "The return-to-play decision: 'How do you feel?' is still the primary data point. That's a problem.", tags: ["INFLUENCER", "AWARENESS"] },
        { id: 5, text: "Your athlete data stack has a movement quality gap. Here's why it matters.", tags: ["BUYER", "AWARENESS"] }
      ],
      longForm: "The Injury Prevention Gap: What Your Force Plates and Wearables Are Missing"
    }
  }
};

const TagBadge: React.FC<{ tag: string }> = ({ tag }) => {
  let colorClass = "bg-gray-100 text-gray-600";
  if (tag === "BUYER") colorClass = "bg-scanalytics-primary/10 text-scanalytics-primary";
  if (tag === "INFLUENCER") colorClass = "bg-indigo-100 text-indigo-600";
  if (tag === "AWARENESS") colorClass = "bg-orange-100 text-orange-600";
  if (tag === "TRUST") colorClass = "bg-scanalytics-secondary/10 text-scanalytics-secondary";
  if (tag === "CONVERSION") colorClass = "bg-red-100 text-red-600";

  return (
    <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full ${colorClass}`}>
      {tag}
    </span>
  );
};

const ContentEngine: React.FC = () => {
  const [activeMonth, setActiveMonth] = useState(1);
  const [activeSegment, setActiveSegment] = useState<SegmentTab>('PT');
  const [expandedWeeks, setExpandedWeeks] = useState<Set<string>>(new Set(['Week 1']));

  const toggleWeek = (week: string) => {
    const next = new Set(expandedWeeks);
    if (next.has(week)) next.delete(week);
    else next.add(week);
    setExpandedWeeks(next);
  };

  const segments: SegmentTab[] = ['PT', 'Senior Living', 'Facilities', 'Healthcare', 'Sports'];
  const weeks = activeMonth === 1 ? ['Week 1', 'Week 2', 'Week 3', 'Week 4'] : 
                activeMonth === 2 ? ['Week 5', 'Week 6', 'Week 7', 'Week 8'] : 
                ['Week 9', 'Week 10', 'Week 11', 'Week 12'];

  const getWeekTheme = (week: string) => {
    switch(week) {
      case 'Week 1': return "The Hidden Problem";
      case 'Week 2': return "The Alternative Landscape";
      case 'Week 3': return "The SmartStep Solution";
      case 'Week 4': return "Social Proof and Credibility";
      case 'Week 5': return "ROI and Business Case";
      case 'Week 6': return "Implementation Reality";
      case 'Week 7': return "Privacy and Trust";
      case 'Week 8': return "Integration and Workflow";
      case 'Week 9': return "Use Cases Deep Dive";
      case 'Week 10': return "Customer Voice";
      case 'Week 11': return "Overcoming Objections";
      case 'Week 12': return "Call to Action";
      default: return "Strategic Content Theme";
    }
  };

  const getWeekDesc = (week: string) => {
    switch(week) {
      case 'Week 1': return "Expose the problem your audience feels but may not have quantified.";
      case 'Week 2': return "Why existing solutions fall short (without bashing competitors).";
      case 'Week 3': return "Introduce how floor-based intelligence works.";
      case 'Week 4': return "Build trust with proof points and credibility signals.";
      default: return "Targeted messaging for " + week.toLowerCase();
    }
  };

  return (
    <div className="space-y-12 pb-20">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">90-Day Content Engine</h1>
        <p className="text-xl text-gray-600">12 weekly themes with ready-to-use content prompts, persona-tagged.</p>
      </div>

      <div className="flex bg-white p-1 rounded-xl border border-gray-200 shadow-sm w-fit">
        {[1, 2, 3].map(m => (
          <button 
            key={m}
            onClick={() => setActiveMonth(m)}
            className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${
              activeMonth === m ? 'bg-scanalytics-dark text-white shadow-md' : 'text-gray-500 hover:text-scanalytics-primary'
            }`}
          >
            Month {m}: {m === 1 ? 'Foundation' : m === 2 ? 'Depth' : 'Conversion'}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200 flex flex-wrap gap-2">
          {segments.map(s => (
            <button
              key={s}
              onClick={() => setActiveSegment(s)}
              className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${
                activeSegment === s ? 'bg-scanalytics-primary text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-scanalytics-primary'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="p-6 md:p-8 space-y-8">
          {weeks.map(week => {
            const isExpanded = expandedWeeks.has(week);
            const content = CONTENT_DATA[activeSegment]?.[week];
            const hasContent = !!content;

            return (
              <div key={week} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleWeek(week)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-extrabold text-scanalytics-primary uppercase tracking-widest">{week}</span>
                    <h3 className="text-xl font-bold">{getWeekTheme(week)}</h3>
                    <p className="text-sm text-gray-500">{getWeekDesc(week)}</p>
                  </div>
                  {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>

                {isExpanded && (
                  <div className="p-6 pt-0 bg-white border-t border-gray-50 space-y-6">
                    {hasContent ? (
                      <>
                        <div className="grid grid-cols-1 gap-4">
                          {content.prompts.map(p => (
                            <div key={p.id} className="group relative bg-gray-50 p-5 rounded-xl border border-transparent hover:border-scanalytics-primary/30 transition-all">
                              <div className="flex flex-wrap gap-2 mb-3">
                                {p.tags.map(t => <TagBadge key={t} tag={t} />)}
                                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                  <CopyButton text={p.text} />
                                </div>
                              </div>
                              <p className="text-gray-700 leading-relaxed italic pr-8">"{p.text}"</p>
                            </div>
                          ))}
                        </div>
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-indigo-600 text-white rounded-lg">
                              <FileText size={24} />
                            </div>
                            <div className="space-y-0.5">
                              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Long-Form Asset</span>
                              <h4 className="font-bold text-gray-900 leading-snug">{content.longForm}</h4>
                            </div>
                          </div>
                          <button className="bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-100 px-6 py-2.5 rounded-full font-bold text-sm shadow-sm transition-all flex items-center gap-2">
                            View Outline <ExternalLink size={14} />
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                        <div className="p-4 bg-gray-100 rounded-full text-gray-400">
                          <Bot size={40} />
                        </div>
                        <div>
                          <p className="text-gray-600 font-medium">Month {activeMonth} strategy details are coming soon.</p>
                          <p className="text-sm text-gray-400">The current content focus is Foundation (Month 1).</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <Tag className="text-scanalytics-primary" size={24} />
          <h2 className="text-2xl font-bold">Hashtag Quick Reference</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { label: "PT", tags: "#PhysicalTherapy #GaitAnalysis #PTLife #HealthcareInnovation" },
            { label: "Senior Living", tags: "#SeniorLiving #AgingInPlace #SeniorCare #AssistedLiving" },
            { label: "Facilities", tags: "#FacilityManagement #SmartBuildings #CRE #Sustainability" },
            { label: "Healthcare", tags: "#PatientSafety #HealthcareInnovation #NursingLeadership" },
            { label: "Sports", tags: "#SportsScience #PerformanceAnalytics #InjuryPrevention" }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <h4 className="font-bold text-sm text-gray-900">{item.label}</h4>
              <div className="p-3 bg-gray-50 rounded-lg text-xs text-scanalytics-primary font-medium leading-relaxed group relative border border-transparent hover:border-scanalytics-primary transition-colors">
                {item.tags}
                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CopyButton text={item.tags} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentEngine;
