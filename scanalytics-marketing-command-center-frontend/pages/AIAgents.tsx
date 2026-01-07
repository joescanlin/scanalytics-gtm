
import React from 'react';
import { 
  FileEdit, 
  Search, 
  Eye, 
  Activity, 
  BarChart3, 
  Info,
  ChevronRight
} from 'lucide-react';

const AgentCard: React.FC<{ icon: React.ReactNode, title: string, desc: string, color: string }> = ({ icon, title, desc, color }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-scanalytics-primary transition-all flex flex-col group">
    <div className={`p-4 rounded-xl w-fit mb-6 text-white ${color} group-hover:scale-110 transition-transform shadow-lg`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">{desc}</p>
    <button className="text-scanalytics-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
      Configure Preferences <ChevronRight size={16} />
    </button>
  </div>
);

const AIAgents: React.FC = () => {
  return (
    <div className="space-y-12 pb-20">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">AI Agent Reports</h1>
        <p className="text-xl text-gray-600">Specialized AI agents run on a schedule to handle repetitive marketing tasks.</p>
      </div>

      <div className="bg-scanalytics-primary/5 p-6 rounded-2xl border border-scanalytics-primary/10 flex items-start gap-4">
        <div className="p-2 bg-scanalytics-primary text-white rounded-full shrink-0">
          <Info size={20} />
        </div>
        <p className="text-sm text-scanalytics-primary font-medium leading-relaxed">
          These agents email you executive summaries at your preferred cadence. You review, approve what looks good, and keep moving.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AgentCard 
          icon={<FileEdit size={32} />} 
          title="Content Prep Agent" 
          desc="Prepares weekly content based on your calendar and the 90-day content engine. Drafts posts, suggests images, and queues content for your review."
          color="bg-indigo-600"
        />
        <AgentCard 
          icon={<Search size={32} />} 
          title="SEO Monitor Agent" 
          desc="Tracks keyword opportunities, monitors rankings, and identifies content gaps. Surfaces opportunities you should act on immediately."
          color="bg-emerald-600"
        />
        <AgentCard 
          icon={<Eye size={32} />} 
          title="Competitor Watch Agent" 
          desc="Reviews competitor websites, social media, and messaging. Alerts you to new positioning, features, or campaigns in our core markets."
          color="bg-rose-600"
        />
        <AgentCard 
          icon={<Activity size={32} />} 
          title="Website Health Agent" 
          desc="Checks all Scanalytics sites for issues: broken links, slow pages, outdated content, and messaging inconsistencies."
          color="bg-amber-600"
        />
        <AgentCard 
          icon={<BarChart3 size={32} />} 
          title="Metrics Aggregator Agent" 
          desc="Pulls together data from your connected platforms into a single weekly dashboard. No more logging into 5 different tools."
          color="bg-scanalytics-primary"
        />
      </div>

      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12 space-y-10">
        <h2 className="text-2xl font-bold">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {[
            { step: "1", text: "Agents run automatically on your schedule (daily, weekly, etc.)" },
            { step: "2", text: "Each agent performs its specialized task using proprietary data." },
            { step: "3", text: "Results are compiled into an executive summary." },
            { step: "4", text: "Summary is emailed to you at your preferred time." },
            { step: "5", text: "You review, approve what looks good, and move on." }
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-scanalytics-dark text-white flex items-center justify-center font-bold text-lg">
                {item.step}
              </div>
              <p className="text-sm font-medium text-gray-700 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200 text-center space-y-4">
        <h3 className="text-xl font-bold text-gray-900">Setup Coming Soon</h3>
        <p className="text-gray-600 max-w-xl mx-auto">
          Agent configuration and email preferences will be available once the backend is connected. 
          The engineering team is currently finishing the data connectors.
        </p>
        <button className="bg-gray-300 text-gray-500 cursor-not-allowed px-8 py-3 rounded-full font-bold">
          Check Back Soon
        </button>
      </div>
    </div>
  );
};

export default AIAgents;
