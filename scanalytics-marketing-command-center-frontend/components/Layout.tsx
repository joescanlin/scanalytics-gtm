
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Target, 
  MessageSquare, 
  FileEdit, 
  Bot, 
  RefreshCcw, 
  ChevronRight, 
  Menu, 
  X, 
  Search,
  ChevronDown,
  Layers
} from 'lucide-react';
import { SEGMENTS } from '../constants';

const SidebarLink: React.FC<{ to: string, icon: React.ReactNode, label: string, active: boolean, onClick?: () => void }> = ({ to, icon, label, active, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-premium mb-1.5 ${
      active 
        ? "bg-sc-primary text-white shadow-lg shadow-blue-900/20" 
        : "text-gray-400 hover:text-white hover:bg-white/5"
    }`}
  >
    <span className={active ? "text-white" : "text-gray-500"}>{icon}</span>
    <span className="font-semibold text-sm">{label}</span>
    {active && <ChevronRight size={14} className="ml-auto opacity-50" />}
  </Link>
);

const Logo: React.FC = () => (
  <div className="flex items-center gap-2.5">
    <div className="relative flex items-center justify-center">
      <div className="w-8 h-8 bg-sc-primary rounded-lg flex items-center justify-center text-white font-black shadow-lg">
        <Layers size={18} />
      </div>
      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-sc-secondary rounded-full border-2 border-sc-dark"></div>
    </div>
    <div className="flex flex-col -space-y-1">
      <span className="text-lg font-extrabold tracking-tighter text-white">SCANALYTICS</span>
      <span className="text-[10px] font-bold text-sc-primary tracking-widest uppercase opacity-80">Command Center</span>
    </div>
  </div>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [segmentsExpanded, setSegmentsExpanded] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path.includes('/segments')) setSegmentsExpanded(true);
  }, [path]);

  const breadcrumbs = path.split('/').filter(Boolean);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-sc-dark/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 w-72 sidebar-gradient border-r border-white/5 text-white z-50 transform transition-transform duration-300 lg:translate-x-0 lg:static
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full px-6 py-8">
          <div className="flex items-center justify-between mb-10">
            <Link to="/" onClick={() => setSidebarOpen(false)}>
              <Logo />
            </Link>
            <button className="lg:hidden p-2 text-gray-400 hover:text-white" onClick={() => setSidebarOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto no-scrollbar">
            <div className="space-y-1 mb-8">
              <p className="px-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">Main Portal</p>
              <SidebarLink to="/" icon={<LayoutDashboard size={18} />} label="Dashboard" active={path === '/'} onClick={() => setSidebarOpen(false)} />
              <SidebarLink to="/start-here" icon={<BookOpen size={18} />} label="Start Here" active={path === '/start-here'} onClick={() => setSidebarOpen(false)} />
            </div>
            
            <div className="mb-8">
              <p className="px-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">Strategy</p>
              <button 
                onClick={() => setSegmentsExpanded(!segmentsExpanded)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-premium ${
                  path.includes('/segments') ? "text-sc-primary font-bold" : "text-gray-400 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3 text-sm">
                  <Target size={18} className={path.includes('/segments') ? "text-sc-primary" : "text-gray-500"} />
                  <span className="font-semibold">Segments</span>
                </div>
                <ChevronDown size={14} className={`transition-transform duration-300 ${segmentsExpanded ? 'rotate-180' : ''}`} />
              </button>
              
              {segmentsExpanded && (
                <div className="ml-9 mt-2 space-y-1 border-l border-white/10 pl-2">
                  <Link to="/segments" onClick={() => setSidebarOpen(false)} className={`block px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${path === '/segments' ? 'text-white' : 'text-gray-500 hover:text-white'}`}>Overview</Link>
                  {Object.values(SEGMENTS).map(s => (
                    <Link 
                      key={s.id} 
                      to={`/segments/${s.id}`} 
                      onClick={() => setSidebarOpen(false)}
                      className={`block px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${path === `/segments/${s.id}` ? 'text-sc-primary' : 'text-gray-500 hover:text-white'}`}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-1 mb-8">
              <p className="px-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">Resources</p>
              <SidebarLink to="/messaging" icon={<MessageSquare size={18} />} label="Messaging Library" active={path === '/messaging'} onClick={() => setSidebarOpen(false)} />
              <SidebarLink to="/content" icon={<FileEdit size={18} />} label="Content Engine" active={path === '/content'} onClick={() => setSidebarOpen(false)} />
            </div>

            <div className="space-y-1">
              <p className="px-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">AI Intelligence</p>
              <SidebarLink to="/chat" icon={<Bot size={18} />} label="AI Chat" active={path === '/chat'} onClick={() => setSidebarOpen(false)} />
              <SidebarLink to="/agents" icon={<RefreshCcw size={18} />} label="AI Agents" active={path === '/agents'} onClick={() => setSidebarOpen(false)} />
            </div>
          </nav>

          <div className="pt-6 border-t border-white/5 mt-auto">
            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-white border border-white/10 uppercase tracking-tighter">
                VP
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">VP Marketing</span>
                <span className="text-[10px] text-gray-500 font-medium">Internal Portal Access</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#FBFBFE]">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 h-20 flex items-center px-6 md:px-10 shrink-0">
          <button className="lg:hidden p-2 -ml-2 text-sc-dark mr-4" onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          
          <div className="flex-1 flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest border-r border-gray-200 pr-6">
              <Layers size={14} className="text-sc-primary" />
              Scanalytics GTM
            </div>
            <div className="relative max-w-lg w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
              <input 
                type="text" 
                placeholder="Search segments, messaging, or prompts..." 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-2.5 pl-11 pr-4 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-sc-primary/5 focus:border-sc-primary transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-sc-secondary animate-pulse"></div>
             </div>
             <span className="hidden sm:inline text-xs font-bold text-gray-500 uppercase tracking-widest">System Active</span>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto overflow-x-hidden no-scrollbar">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <Link to="/" className="hover:text-sc-primary transition-colors">Portal</Link>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                <ChevronRight size={10} className="shrink-0 text-gray-300" />
                <span className={` ${i === breadcrumbs.length - 1 ? 'text-sc-dark' : 'hover:text-sc-primary transition-colors cursor-pointer'}`}>
                  {crumb.replace('-', ' ')}
                </span>
              </React.Fragment>
            ))}
          </nav>

          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
