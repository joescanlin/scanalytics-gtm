import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, MessageSquare, Plus, ChevronLeft, ChevronRight, Info, Loader2 } from 'lucide-react';
import OpenAI from 'openai';
import { SEGMENTS, UNIVERSAL_MESSAGE_PILLARS, UNIVERSAL_PROOF_POINTS } from '../constants';

const SUGGESTED_PROMPTS = [
  "Write a LinkedIn post about fall detection for senior living",
  "What's our response to 'we already have bed alarms'?",
  "Create a blog outline about PT documentation",
  "Summarize our facilities value proposition",
  "What claims can we make about accuracy?"
];

/**
 * Generates a system instruction for the AI based on the current selection context.
 * Injects Scanalytics brand dossiers and messaging rules.
 */
const getSystemInstruction = (context: string) => {
  const segment = Object.values(SEGMENTS).find(s => s.name === context);
  const segmentSpecifics = segment ? `
SPECIFIC DOSSIER FOR ${segment.name}:
- One-liner: ${segment.oneLiner}
- Primary Buyer: ${segment.icp.primaryBuyer}
- Key Influencer: ${segment.icp.keyInfluencer}
- Firmographics: ${segment.icp.firmographics}
- Core Problems: ${segment.problems.join(', ')}
- Strategic Outcomes: ${segment.outcomes.join(', ')}
- Approved Messages: ${segment.approvedMessages.join(' | ')}
- Objection Handlers: ${segment.objections.map(o => `${o.question}: ${o.response}`).join(' | ')}
` : "General Scanalytics brand awareness.";

  return `You are Scanalytics AI, the authoritative marketing assistant for Scanalytics SmartStep Smart Flooring.
Your goal is to help generate on-brand content, answer product questions, and handle objections using ONLY validated claims.

CORE TECHNOLOGY:
SmartStep is DOE-backed, USA-manufactured sensor technology that installs beneath any floor surface to capture movement patterns anonymously. No cameras, no wearables.

BRAND PILLARS:
${UNIVERSAL_MESSAGE_PILLARS.map(p => `- ${p.title}: ${p.text}`).join('\n')}

RESTRICTED TERMINOLOGY (CRITICAL COMPLIANCE):
- NEVER say "Saves 35% on energy". INSTEAD: "Enables occupancy-based energy control".
- NEVER say "Clinically validated". INSTEAD: "Millimeter-level accuracy".
- NEVER say "Prevents falls". INSTEAD: "Detects falls instantly".
- NEVER say "Thousands of customers". INSTEAD: "Trusted by facilities across core markets".
- NEVER say "Best fall detection". INSTEAD: "Comprehensive fall detection".
- NEVER say "Guarantees outcomes". INSTEAD: "Enables better outcomes".

${segmentSpecifics}

When generating content like LinkedIn posts or emails, use a professional, innovative, and data-driven tone. Always focus on the outcomes and the "invisible" nature of our floor sensors.`;
};

const AIChat: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'bot', content: string }>>([]);
  const [context, setContext] = useState("All Segments");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userText = input;
    setMessages(prev => [...prev, { role: 'user', content: userText }]);
    setInput("");
    setIsLoading(true);

    try {
      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey || apiKey === 'your_openai_api_key_here') {
        throw new Error('API key not configured');
      }
      
      const openai = new OpenAI({
        apiKey,
        dangerouslyAllowBrowser: true
      });
      
      const chatHistory = messages.map(m => ({
        role: m.role === 'user' ? 'user' as const : 'assistant' as const,
        content: m.content
      }));

      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: getSystemInstruction(context) },
          ...chatHistory,
          { role: 'user', content: userText }
        ],
        temperature: 0.7,
      });

      const botResponse = response.choices[0]?.message?.content || "I apologize, I'm unable to process that request right now. Please try again.";
      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    } catch (error) {
      console.error("AI Communication Error:", error);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        content: "I encountered an error connecting to the Scanalytics intelligence engine. Please ensure your environment is configured correctly and try again." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setInput("");
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
      {/* Context Sidebar */}
      <div className={`
        bg-gray-50 border-r border-gray-200 transition-all duration-300 flex flex-col
        ${sidebarOpen ? 'w-64' : 'w-0 border-none overflow-hidden'}
      `}>
        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          <button 
            onClick={handleNewChat}
            className="w-full flex items-center gap-2 bg-sc-dark text-white p-3 rounded-lg font-bold shadow-md hover:bg-black transition-colors"
          >
            <Plus size={18} /> New Chat
          </button>

          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase text-gray-400 tracking-widest">Chat Context</h4>
            <div className="space-y-1">
              {["All Segments", "Physical Therapy", "Senior Living", "Facilities", "Healthcare", "Sports"].map(s => (
                <button 
                  key={s}
                  onClick={() => setContext(s)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                    context === s ? 'bg-sc-primary text-white font-bold' : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase text-gray-400 tracking-widest">History</h4>
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-2 opacity-40">
              <MessageSquare size={32} className="text-gray-300" />
              <p className="text-xs font-medium">No previous chats</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative min-w-0">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 p-1 rounded-r-lg z-10 hover:text-sc-primary shadow-sm"
        >
          {sidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>

        {/* System Message */}
        <div className="bg-sc-primary/5 border-b border-sc-primary/10 p-4 flex items-start gap-3">
          <Info size={18} className="text-sc-primary mt-0.5 shrink-0" />
          <p className="text-xs text-sc-primary font-medium leading-relaxed">
            I am connected to Scanalytics' proprietary brand engine. I have access to all approved messaging, segment dossiers, and compliance rules for {context}.
          </p>
        </div>

        {/* Chat Feed */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center max-w-lg mx-auto text-center space-y-8">
              <div className="w-20 h-20 bg-sc-primary/10 rounded-full flex items-center justify-center text-sc-primary">
                <Bot size={48} />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">How can I help you today?</h2>
                <p className="text-gray-500 text-sm">Select a market context or start typing to generate on-brand copy instantly using our validated dossiers.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {SUGGESTED_PROMPTS.map((p, i) => (
                  <button 
                    key={i} 
                    onClick={() => setInput(p)}
                    className="bg-gray-50 border border-gray-200 hover:border-sc-primary hover:text-sc-primary px-4 py-2 rounded-full text-sm font-medium transition-all"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl ${
                    m.role === 'user' 
                      ? 'bg-sc-primary text-white rounded-tr-none shadow-lg shadow-sc-primary/20' 
                      : 'bg-gray-100 text-gray-800 rounded-tl-none border border-gray-200'
                  }`}>
                    {m.role === 'bot' && <div className="flex items-center gap-2 mb-2 text-sc-primary font-bold text-xs uppercase tracking-widest"><Bot size={14} /> Scanalytics AI</div>}
                    <div className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none border border-gray-200 flex items-center gap-3">
                    <Loader2 size={16} className="text-sc-primary animate-spin" />
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Generating Intelligence...</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-gray-100">
          <div className="max-w-4xl mx-auto flex items-end gap-3 bg-gray-50 border border-gray-200 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-sc-primary/20 focus-within:border-sc-primary transition-all">
            <textarea 
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { 
                if (e.key === 'Enter' && !e.shiftKey) { 
                  e.preventDefault(); 
                  handleSend(); 
                } 
              }}
              placeholder={`Ask about ${context}...`}
              className="flex-1 bg-transparent border-none focus:ring-0 p-3 text-sm resize-none"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-sc-primary text-white p-3 rounded-xl hover:bg-sc-primary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-[10px] text-gray-400 mt-3 text-center uppercase tracking-widest font-bold">
            Live AI Integration Active • Using {context} Strategy
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
