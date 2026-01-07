
import React from 'react';
import { 
  Stethoscope, 
  Heart, 
  Building2, 
  Hospital, 
  Activity, 
  CheckCircle2,
  ArrowRight,
  Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { UNIVERSAL_PROOF_POINTS } from '../constants';

const SegmentSmallCard: React.FC<{ to: string, icon: React.ReactNode, title: string, text: string }> = ({ to, icon, title, text }) => (
  <Link to={to} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-sc-primary transition-all group shadow-sm">
    <div className="p-3 bg-gray-50 rounded-lg w-fit mb-4 text-sc-primary group-hover:bg-sc-primary/10 transition-colors">
      {icon}
    </div>
    <h3 className="font-bold mb-2 group-hover:text-sc-primary transition-colors">{title}</h3>
    <p className="text-sm text-gray-600 leading-snug">{text}</p>
  </Link>
);

const StartHere: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-sc-dark">Scanalytics GTM Command Center</h1>
        <p className="text-xl text-gray-600">The authoritative guide to our technology and market presence.</p>
      </div>

      <div className="bg-white rounded-3xl border border-gray-200 shadow-premium overflow-hidden">
        <div className="p-8 md:p-12 sidebar-gradient text-white">
          <h2 className="text-3xl font-black mb-6 tracking-tight">60-Second Overview</h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              Scanalytics makes <span className="text-sc-primary font-black">Smart Flooring</span> - sensor systems that install beneath any floor surface to capture movement patterns anonymously.
            </p>
            <p>
              One technology platform. Five market segments. Each segment has different buyers, different problems, and different messaging.
            </p>
            <p>
              This portal contains everything you need to market Scanalytics: approved messaging, content templates, objection responses, and AI tools to generate on-brand content instantly.
            </p>
          </div>
        </div>
      </div>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-sc-dark">The 5 Segments</h2>
          <Link to="/segments" className="text-sc-primary font-bold flex items-center gap-1 hover:underline text-sm uppercase tracking-widest">
            View Comparison <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <SegmentSmallCard 
            to="/segments/physical-therapy"
            icon={<Stethoscope size={24} />} 
            title="Physical Therapy" 
            text="AI-powered gait analysis and documentation" 
          />
          <SegmentSmallCard 
            to="/segments/senior-living"
            icon={<Heart size={24} />} 
            title="Senior Living" 
            text="Fall detection without cameras or wearables" 
          />
          <SegmentSmallCard 
            to="/segments/facilities"
            icon={<Building2 size={24} />} 
            title="Facilities" 
            text="Occupancy intelligence for smarter buildings" 
          />
          <SegmentSmallCard 
            to="/segments/healthcare"
            icon={<Hospital size={24} />} 
            title="Healthcare" 
            text="Hospital-wide fall detection, HIPAA-compliant" 
          />
          <SegmentSmallCard 
            to="/segments/sports"
            icon={<Activity size={24} />} 
            title="Sports" 
            text="Continuous movement analytics for performance" 
          />
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-sc-dark">Universal Proof Points</h2>
          <div className="space-y-3">
            {UNIVERSAL_PROOF_POINTS.map((point, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-premium group hover:border-sc-primary transition-colors">
                <CheckCircle2 size={20} className="text-sc-primary shrink-0" />
                <span className="font-semibold text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-[2rem] border border-gray-200 shadow-premium space-y-6">
          <h2 className="text-2xl font-black text-sc-dark">Strategic Shortcuts</h2>
          <p className="text-gray-600 font-medium">Ready to start creating? Use these paths to dive deeper into our content and messaging strategy.</p>
          <div className="grid grid-cols-1 gap-4">
            <Link to="/messaging" className="flex items-center justify-between p-5 bg-white rounded-2xl shadow-sm hover:shadow-md hover:border-sc-primary border border-transparent transition-all group">
              <span className="font-bold text-sc-dark">Authoritative Messaging</span>
              <ArrowRight size={18} className="text-gray-300 group-hover:text-sc-primary transition-colors" />
            </Link>
            <Link to="/content" className="flex items-center justify-between p-5 bg-white rounded-2xl shadow-sm hover:shadow-md hover:border-sc-primary border border-transparent transition-all group">
              <span className="font-bold text-sc-dark">90-Day Content Plan</span>
              <ArrowRight size={18} className="text-gray-300 group-hover:text-sc-primary transition-colors" />
            </Link>
            <Link to="/chat" className="flex items-center justify-between p-5 bg-sc-primary text-white rounded-2xl shadow-lg hover:shadow-sc-primary/30 transition-all group">
              <span className="font-black uppercase tracking-widest text-sm">Launch Content AI</span>
              <Bot size={20} className="text-white group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartHere;
