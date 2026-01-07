
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Target, 
  MessageSquare, 
  FileEdit, 
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Users,
  CheckCircle,
  Zap
} from 'lucide-react';

const QuickAction: React.FC<{ to: string, icon: React.ReactNode, label: string, color: string, sub: string }> = ({ to, icon, label, color, sub }) => (
  <Link 
    to={to} 
    className={`group relative flex flex-col p-8 rounded-3xl border border-gray-100 bg-white shadow-premium hover:shadow-2xl transition-premium hover:-translate-y-1 overflow-hidden`}
  >
    <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full opacity-5 group-hover:scale-150 transition-transform duration-700 ${color}`}></div>
    <div className={`w-14 h-14 rounded-2xl ${color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-gray-200`}>
      {icon}
    </div>
    <div className="space-y-1">
      <h3 className="font-bold text-xl text-sc-dark">{label}</h3>
      <p className="text-gray-500 text-xs font-medium leading-relaxed">{sub}</p>
    </div>
    <div className="mt-8 flex items-center gap-2 text-sc-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
      Launch <ChevronRight size={14} />
    </div>
  </Link>
);

const MetricCard: React.FC<{ label: string, value: string, icon: React.ReactNode, color: string }> = ({ label, value, icon, color }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-premium flex items-center gap-5">
    <div className={`p-3 rounded-xl ${color} bg-opacity-10 ${color.replace('bg-', 'text-')}`}>
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</span>
      <span className="text-xl font-black text-sc-dark">{value}</span>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] hero-gradient p-10 md:p-16 text-white shadow-2xl">
        <div className="relative z-10 max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] text-white">
            <div className="w-2 h-2 rounded-full bg-sc-primary animate-pulse shadow-[0_0_8px_rgba(0,168,107,0.8)]"></div>
            Marketing Intelligence Portal
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-[1.1]">
              Scanalytics Marketing <br/>
              <span className="text-sc-primary">Command Center</span>
            </h1>
            <p className="text-xl text-white/80 font-medium max-w-2xl leading-relaxed">
              The authoritative hub for SmartStep Smart Flooring. Access approved messaging, market segment dossiers, and AI-powered content generation.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              to="/start-here" 
              className="px-10 py-4 bg-white text-sc-dark rounded-full font-black shadow-2xl hover:bg-sc-primary hover:text-white transition-premium flex items-center gap-3 border border-transparent"
            >
              Get Started <ArrowRight size={20} />
            </Link>
            <Link 
              to="/chat" 
              className="px-10 py-4 bg-sc-dark/60 backdrop-blur-md text-white border border-white/30 rounded-full font-black hover:bg-sc-primary transition-premium flex items-center gap-2"
            >
              Launch AI Chat <Bot size={20} />
            </Link>
          </div>
        </div>
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[50%] h-full opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-10 right-10 w-96 h-96 border-[40px] border-sc-primary/30 rounded-full"></div>
          <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] border-[60px] border-white/10 rounded-full"></div>
        </div>
      </section>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard label="Market Segments" value="05 Verticals" icon={<Users size={20}/>} color="bg-sc-primary" />
        <MetricCard label="Content Health" value="94% Optimized" icon={<TrendingUp size={20}/>} color="bg-sc-primary" />
        <MetricCard label="Approved Messaging" value="120+ Blocks" icon={<CheckCircle size={20}/>} color="bg-sc-accent" />
        <MetricCard label="AI Agents Active" value="04 Running" icon={<Zap size={20}/>} color="bg-sc-primary" />
      </div>

      {/* Primary Actions Grid */}
      <section className="space-y-8">
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-sc-dark tracking-tight">Core Modules</h2>
            <p className="text-sm font-medium text-gray-500 font-semibold uppercase tracking-wider">Access the primary tools for your marketing workflow</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <QuickAction 
            to="/chat" 
            icon={<Bot size={28} />} 
            label="AI Content" 
            sub="Generate on-brand copy instantly using our LLM." 
            color="bg-sc-primary" 
          />
          <QuickAction 
            to="/segments" 
            icon={<Target size={28} />} 
            label="Segments" 
            sub="Deep dives into Physical Therapy, Healthcare & more." 
            color="bg-sc-secondary" 
          />
          <QuickAction 
            to="/messaging" 
            icon={<MessageSquare size={28} />} 
            label="Copy Blocks" 
            sub="Approved one-liners and value propositions." 
            color="bg-sc-accent" 
          />
          <QuickAction 
            to="/content" 
            icon={<FileEdit size={28} />} 
            label="Engine" 
            sub="12-week strategic content blueprint." 
            color="bg-sc-primary" 
          />
        </div>
      </section>

      {/* Footer Info */}
      <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-premium flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-black text-sc-dark">Authoritative Brand Source</h3>
          <p className="text-gray-500 leading-relaxed font-medium">
            This portal is the single source of truth for the Scanalytics Marketing team. All messaging found here has been vetted by legal and product teams. Do not use unvalidated claims found in legacy decks.
          </p>
          <div className="flex gap-4">
             <div className="flex items-center gap-2 text-xs font-bold text-sc-primary uppercase tracking-widest">
               <CheckCircle size={14} /> Validated 2024
             </div>
             <div className="flex items-center gap-2 text-xs font-bold text-sc-accent uppercase tracking-widest">
               <Zap size={14} /> AI Enhanced
             </div>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <Link to="/messaging" className="block text-center px-10 py-4 border-2 border-sc-dark rounded-full font-black text-sc-dark hover:bg-sc-dark hover:text-white transition-premium">
            Review Brand Standards
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
