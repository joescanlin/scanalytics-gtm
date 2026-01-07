import React from 'react';
import { Link } from 'react-router-dom';
import { SEGMENTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const SegmentsOverview: React.FC = () => {
  const segments = Object.values(SEGMENTS);
  const aspects = [
    { label: "One-Liner", key: "oneLiner" },
    { label: "Primary Buyer", subKey: "primaryBuyer" },
    { label: "Key Influencer", subKey: "keyInfluencer" },
    { label: "Top Problem", listKey: "problems" },
    { label: "Primary Outcome", listKey: "outcomes" },
    { label: "Deal Size", custom: true },
    { label: "Sales Cycle", custom: true },
    { label: "Readiness", custom: true }
  ];

  // Manual data for the "custom" rows as they are specific to the table in the prompt
  const customData: Record<string, Record<string, string>> = {
    "Deal Size": {
      "physical-therapy": "$1,000-$2,500/month",
      "senior-living": "$2,000-$5,000/month",
      "facilities": "$1,000-$3,000/month",
      "healthcare": "$8,000-$25,000/month",
      "sports": "$2,000-$5,000/month"
    },
    "Sales Cycle": {
      "physical-therapy": "2-4 weeks",
      "senior-living": "4-8 weeks",
      "facilities": "4-8 weeks",
      "healthcare": "3-6 months",
      "sports": "4-8 weeks"
    },
    "Readiness": {
      "physical-therapy": "Website live, needs testimonials",
      "senior-living": "Website live, most complete",
      "facilities": "Website live, needs case studies",
      "healthcare": "Website live, needs HIPAA proof",
      "sports": "BLOCKED: Wrong website content"
    }
  };

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Segments at a Glance</h1>
        <p className="text-xl text-gray-600">A side-by-side comparison of our core market verticals.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 font-bold text-gray-900 border-r border-gray-200 w-48">Aspect</th>
                {segments.map(s => (
                  <th key={s.id} className="px-6 py-4 font-bold text-scanalytics-primary uppercase tracking-wider text-sm">
                    {s.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {aspects.map((aspect, i) => (
                <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <td className="px-6 py-4 font-semibold text-gray-700 border-r border-gray-200 bg-gray-50/30">{aspect.label}</td>
                  {segments.map(s => {
                    let content = "";
                    if (aspect.key) content = (s as any)[aspect.key];
                    else if (aspect.subKey) content = (s.icp as any)[aspect.subKey];
                    else if (aspect.listKey) content = (s as any)[aspect.listKey][0];
                    else if (aspect.custom) content = customData[aspect.label][s.id];

                    return (
                      <td key={s.id} className="px-6 py-4 text-sm text-gray-600 align-top">
                        {aspect.label === "Readiness" && content.includes("BLOCKED") ? (
                          <span className="text-red-600 font-bold">{content}</span>
                        ) : content}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {segments.map(s => (
          <Link key={s.id} to={`/segments/${s.id}`} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-scanalytics-primary shadow-sm hover:shadow-md transition-all group">
            <h3 className="text-xl font-bold mb-2 flex items-center justify-between group-hover:text-scanalytics-primary transition-colors">
              {s.name}
              <ArrowRight size={18} className="text-gray-300 group-hover:text-scanalytics-primary group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{s.description}</p>
            <div className="text-xs font-bold text-scanalytics-primary uppercase tracking-widest bg-scanalytics-primary/5 px-3 py-1 rounded-full w-fit">
              Explore Details
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SegmentsOverview;
