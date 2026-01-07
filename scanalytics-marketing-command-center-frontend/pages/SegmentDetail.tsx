
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SEGMENTS } from '../constants';
import { 
  Stethoscope, 
  Heart, 
  Building2, 
  Hospital, 
  Activity, 
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ChevronRight,
  ShieldAlert,
  Target,
  FileText,
  Users,
  Bot
} from 'lucide-react';
import CopyButton from '../components/CopyButton';

const IconWrapper: React.FC<{ name: string, className?: string }> = ({ name, className = "" }) => {
  switch (name) {
    case 'Stethoscope': return <Stethoscope size={40} className={className} />;
    case 'Heart': return <Heart size={40} className={className} />;
    case 'Building2': return <Building2 size={40} className={className} />;
    case 'Hospital': return <Hospital size={40} className={className} />;
    case 'Activity': return <Activity size={40} className={className} />;
    default: return null;
  }
};

const SectionHeader: React.FC<{ title: string, icon: React.ReactNode }> = ({ title, icon }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-10 h-10 rounded-xl bg-sc-primary/10 text-sc-primary flex items-center justify-center shadow-sm">
      {icon}
    </div>
    <h2 className="text-xl font-black text-sc-dark tracking-tight uppercase">{title}</h2>
  </div>
);

const DossierCard: React.FC<{ title: string, icon?: React.ReactNode, children: React.ReactNode, bg?: string }> = ({ title, icon, children, bg = "bg-white" }) => (
  <div className={`${bg} rounded-3xl border border-gray-100 shadow-premium overflow-hidden transition-premium hover:shadow-xl`}>
    <div className="px-8 py-5 border-b border-gray-50 flex items-center justify-between">
      <h3 className="font-black text-xs uppercase tracking-[0.2em] text-gray-400">{title}</h3>
      {icon && <div className="text-sc-primary opacity-40">{icon}</div>}
    </div>
    <div className="p-8">
      {children}
    </div>
  </div>
);

const SegmentDetail: React.FC = () => {
  const { segmentId } = useParams<{ segmentId: string }>();
  const data = segmentId ? SEGMENTS[segmentId] : null;

  if (!data) return <Navigate to="/segments" />;

  return (
    <div className="space-y-12 pb-32">
      {/* Sports Alert Banner */}
      {data.id === 'sports' && (
        <div className="bg-red-50 border border-red-100 p-6 rounded-3xl flex items-center gap-5 text-red-900 shadow-lg shadow-red-900/5">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg shrink-0">
            <ShieldAlert size={24} />
          </div>
          <div>
            <span className="font-black uppercase text-[10px] tracking-widest text-red-600 block mb-1">Critical Marketing Blocker</span>
            <p className="font-bold text-lg leading-snug">The sports website currently displays Physical Therapy content. This must be corrected before activation.</p>
          </div>
        </div>
      )}

      {/* Executive Hero */}
      <div className="relative overflow-hidden bg-sc-dark rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl flex flex-col md:flex-row items-center gap-12 border border-white/5 sidebar-gradient">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sc-primary opacity-20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="p-8 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl relative group">
           <IconWrapper name={data.icon} className="text-white group-hover:scale-110 transition-transform duration-500" />
           <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-sc-primary rounded-full border-4 border-sc-dark"></div>
        </div>
        <div className="flex-1 text-center md:text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sc-primary/20 rounded-full border border-sc-primary/30 text-[10px] font-black uppercase tracking-widest text-sc-primary">
            Market Dossier v1.2
          </div>
          <h1 className="text-5xl font-black tracking-tighter leading-none">{data.name}</h1>
          <p className="text-xl text-gray-300 font-medium leading-relaxed max-w-2xl">{data.oneLiner}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ICP Summary */}
        <div className="lg:col-span-2">
          <DossierCard title="Ideal Customer Profile" icon={<Users size={16} />}>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-sc-primary">Primary Buyer</span>
                  <p className="text-lg font-bold text-sc-dark">{data.icp.primaryBuyer}</p>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-sc-secondary">Key Influencer</span>
                  <p className="text-lg font-bold text-sc-dark">{data.icp.keyInfluencer}</p>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-50">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-3">Firmographics</span>
                <p className="text-sm font-medium text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100 italic">
                  "{data.icp.firmographics}"
                </p>
              </div>
            </div>
          </DossierCard>
        </div>

        {/* Proof Status */}
        <DossierCard title="Proof Status" icon={<CheckCircle2 size={16} />} bg="bg-gray-50/50">
          <div className="space-y-4">
            {data.proofStatus.map((p, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                {p.status === 'success' && <div className="w-5 h-5 rounded-full bg-sc-primary flex items-center justify-center text-white shrink-0"><CheckCircle2 size={12} /></div>}
                {p.status === 'warning' && <div className="w-5 h-5 rounded-full bg-orange-400 flex items-center justify-center text-white shrink-0"><AlertTriangle size={12} /></div>}
                {p.status === 'error' && <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white shrink-0"><XCircle size={12} /></div>}
                <span className="text-xs font-bold text-gray-700 leading-tight">{p.label}</span>
              </div>
            ))}
          </div>
        </DossierCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <DossierCard title="Voice of the Customer: Pain Points" icon={<AlertTriangle size={16} />}>
          <div className="space-y-4">
            {data.problems.map((p, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-red-50/30 border border-red-100/30 group hover:bg-red-50 transition-colors">
                <span className="text-sm font-black text-red-200 group-hover:text-red-300">0{i+1}</span>
                <p className="text-sm font-bold text-gray-700 leading-relaxed italic">"{p}"</p>
              </div>
            ))}
          </div>
        </DossierCard>
        <DossierCard title="Strategic Outcomes" icon={<Target size={16} />}>
          <div className="space-y-4">
            {data.outcomes.map((o, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-green-50/30 border border-green-100/30 group hover:bg-green-50 transition-colors">
                <span className="text-sm font-black text-green-200 group-hover:text-green-300">0{i+1}</span>
                <p className="text-sm font-bold text-gray-700 leading-relaxed">{o}</p>
              </div>
            ))}
          </div>
        </DossierCard>
      </div>

      {/* Approved Messages Section */}
      <section className="space-y-6">
        <SectionHeader title="Validated Messaging" icon={<FileText size={20} />} />
        <div className="grid grid-cols-1 gap-6">
          {data.approvedMessages.map((m, i) => (
            <div key={i} className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-premium hover:border-sc-primary transition-premium">
              <div className="absolute top-6 right-8 flex items-center gap-3">
                <span className="text-[10px] font-black text-sc-primary uppercase tracking-[0.2em] opacity-40">Message {i+1}</span>
                <CopyButton text={m} />
              </div>
              <p className="text-lg font-bold text-sc-dark leading-relaxed pr-24 italic">"{m}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Objection Handling */}
      <section className="space-y-6">
        <SectionHeader title="Objection Handlers" icon={<ShieldAlert size={20} />} />
        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-premium overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400 w-1/3">The Hesitation</th>
                <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-gray-400">The Authorized Response</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data.objections.map((obj, i) => (
                <tr key={i} className="group hover:bg-gray-50 transition-colors">
                  <td className="px-10 py-8 align-top">
                    <span className="text-lg font-black text-sc-dark">{obj.question}</span>
                  </td>
                  <td className="px-10 py-8 relative">
                    <p className="text-sm font-medium text-gray-600 leading-relaxed pr-16 italic">"{obj.response}"</p>
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <CopyButton text={obj.response} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Footer Section */}
      <div className="relative overflow-hidden bg-sc-primary rounded-[2.5rem] p-12 text-white shadow-2xl shadow-sc-primary/20 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="space-y-3 text-center md:text-left relative z-10">
          <h3 className="text-3xl font-black tracking-tight leading-none">Activate {data.name} Content</h3>
          <p className="text-white opacity-80 font-medium">Our proprietary AI has been trained on the dossiers above.</p>
        </div>
        <Link to="/chat" className="relative z-10 px-12 py-5 bg-sc-dark text-white rounded-full font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-black transition-premium flex items-center gap-3">
          Launch Content AI <Bot size={20} className="text-sc-primary" />
        </Link>
      </div>
    </div>
  );
};

export default SegmentDetail;
