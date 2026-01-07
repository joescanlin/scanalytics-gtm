
import React from 'react';
import { ShieldCheck, Cpu, Wrench, Zap, Network, AlertTriangle, ChevronRight, CheckCircle2 } from 'lucide-react';
import { UNIVERSAL_MESSAGE_PILLARS, CTA_LIBRARY } from '../constants';
import CopyButton from '../components/CopyButton';

const SectionHeader: React.FC<{ title: string, subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-6 space-y-1">
    <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
    {subtitle && <p className="text-gray-500 font-medium">{subtitle}</p>}
  </div>
);

const CopyCard: React.FC<{ label: string, text: string }> = ({ label, text }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative group hover:border-scanalytics-primary transition-colors">
    <div className="flex items-center justify-between mb-4">
      <span className="text-xs font-bold text-scanalytics-primary uppercase tracking-widest px-2 py-1 bg-scanalytics-primary/5 rounded">{label}</span>
      <CopyButton text={text} />
    </div>
    <p className="text-gray-700 leading-relaxed text-sm pr-4 italic">"{text}"</p>
  </div>
);

const MessagingLibrary: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Messaging Library</h1>
        <p className="text-xl text-gray-600">The authorized source of truth for all Scanalytics copy.</p>
      </div>

      <section>
        <SectionHeader title="What We Do" subtitle="Standardized descriptions in three lengths." />
        <div className="grid grid-cols-1 gap-6">
          <CopyCard 
            label="Short (25 words)" 
            text="Scanalytics' patented Smart Flooring captures 100% of foot traffic anonymously, delivering real-time occupancy and movement insights without cameras or wearables." 
          />
          <CopyCard 
            label="Medium (50 words)" 
            text="Scanalytics' DOE-backed Smart Flooring system turns any floor into an intelligent sensor that captures occupancy and movement patterns anonymously. Our patented technology installs beneath existing flooring, requires no visible sensors or cameras, and integrates with building management systems to deliver actionable insights." 
          />
          <CopyCard 
            label="Long (100 words)" 
            text="Scanalytics transforms how buildings understand human movement with patented Smart Flooring technology. Our DOE-backed sensor system installs invisibly beneath any flooring surface to capture 100% of foot traffic with millimeter-level accuracy. Unlike cameras or wearables, our anonymous data collection preserves privacy while delivering comprehensive movement analytics. From fall detection in senior living to gait analysis in PT clinics to occupancy optimization in commercial facilities, Smart Flooring transforms raw movement data into actionable insights. 100% US manufactured, enterprise-grade security, and seamless integration with existing building systems make Scanalytics the foundation for intelligent buildings." 
          />
        </div>
      </section>

      <section>
        <SectionHeader title="Universal Message Pillars" subtitle="The foundational arguments for Scanalytics." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UNIVERSAL_MESSAGE_PILLARS.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-scanalytics-primary transition-all relative group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-scanalytics-primary/10 rounded-lg text-scanalytics-primary">
                  {p.icon}
                </div>
                <h4 className="font-bold text-gray-900">{p.title}</h4>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <CopyButton text={p.text} />
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="CTA Library by Funnel Stage" subtitle="Conversion copy for every touchpoint." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(Object.keys(CTA_LIBRARY) as Array<keyof typeof CTA_LIBRARY>).map((stage) => (
            <div key={stage} className="space-y-4">
              <h4 className="font-extrabold uppercase text-xs text-gray-400 tracking-[0.2em]">{stage}</h4>
              <div className="space-y-2">
                {CTA_LIBRARY[stage].map((cta, i) => (
                  <div key={i} className="bg-white px-4 py-3 rounded-lg border border-gray-200 flex items-center justify-between group hover:border-scanalytics-primary transition-all shadow-sm">
                    <span className="font-bold text-sm text-gray-700">{cta}</span>
                    <CopyButton text={cta} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Do Not Say" subtitle="Avoid these unvalidated or problematic claims." />
        <div className="bg-white rounded-xl border-2 border-red-100 shadow-xl overflow-hidden">
          <div className="bg-red-50 px-6 py-4 flex items-center gap-2 text-red-700 font-bold border-b border-red-100">
            <AlertTriangle size={20} />
            RESTRICTED TERMINOLOGY
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600 font-bold uppercase text-xs">
                <tr>
                  <th className="px-6 py-4 border-r border-gray-100 text-left">Avoid This</th>
                  <th className="px-6 py-4 border-r border-gray-100 text-left">Why</th>
                  <th className="px-6 py-4 text-left">Say This Instead</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { avoid: '"Saves 35% on energy"', why: "Unvalidated claim", say: '"Enables occupancy-based energy control"' },
                  { avoid: '"Clinically validated"', why: "No published study cited", say: '"Millimeter-level accuracy"' },
                  { avoid: '"Prevents falls"', why: "Cannot guarantee prevention", say: '"Detects falls instantly"' },
                  { avoid: '"Thousands of customers"', why: "Unverified count", say: '"Trusted by facilities across [markets]"' },
                  { avoid: '"Best fall detection"', why: "Comparative claim", say: '"Comprehensive fall detection"' },
                  { avoid: "Specific customer names", why: "Without permission", say: '"A leading [segment] operator"' },
                  { avoid: '"Guarantees outcomes"', why: "Cannot guarantee", say: '"Enables better outcomes"' },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="px-6 py-4 font-bold text-red-600 bg-red-50/20 border-r border-gray-100">{row.avoid}</td>
                    <td className="px-6 py-4 text-gray-500 italic border-r border-gray-100">{row.why}</td>
                    <td className="px-6 py-4 font-bold text-scanalytics-secondary flex items-center gap-2">
                      <CheckCircle2 size={16} />
                      {row.say}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MessagingLibrary;
