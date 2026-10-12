'use client';

import { useState } from 'react';
import { X, Send, ArrowUpRight, MessageSquare } from 'lucide-react';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
}

export default function MeetAiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hey—I’m Digitacurve AI. Tell me your business goal and I’ll suggest the right service. Rishabh Jaiswal and our Noida studio team are here to help. Hindi or English—both work.",
    },
  ]);
  const [input, setInput] = useState('');

  const quickPrompts = [
    'Build my 60-second project brief',
    'Which service fits me?',
    'Build my website',
    'Get more leads',
    'Run Google or Meta Ads',
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Simulate AI response
    setTimeout(() => {
      let responseText = "Based on your request, our Digitacurve team led by Rishabh Jaiswal recommends starting with a comprehensive Website & Digital Readiness Audit. You can schedule a call or get your free report!";
      if (query.toLowerCase().includes('website') || query.toLowerCase().includes('build')) {
        responseText = "For website design & development, Digitacurve creates custom, high-converting React/Next.js sites focused on speed, clear messaging, and conversion paths.";
      } else if (query.toLowerCase().includes('lead') || query.toLowerCase().includes('ads')) {
        responseText = "Digitacurve engineers targeted Google & Meta ad campaigns connected directly to landing pages & WhatsApp conversion paths for maximum ROI.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: responseText,
        },
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[380px] h-[520px] liquid-glass rounded-3xl shadow-[0_25px_60px_rgba(37,99,235,0.2)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Drawer Header */}
          <div className="p-4 bg-white/60 backdrop-blur-xl border-b border-white/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-black text-xs text-white shadow-md">
                DC
              </div>
              <div>
                <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  DIGITACURVE AI
                  <span className="liquid-glass-pill text-blue-700 text-[9px] px-2 py-0.5 rounded-full font-mono font-bold">
                    FREE · ASSISTANT
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  ACTIVE · NOIDA BASE
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-500 hover:text-slate-900 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <span className="text-[9px] font-mono text-slate-400 mb-1">
                  {msg.sender === 'user' ? 'YOU' : 'DIGITACURVE AI'}
                </span>
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none shadow-md shadow-blue-600/20'
                      : 'liquid-glass text-slate-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Quick Prompt Chips */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="liquid-glass-pill hover:bg-blue-100/80 text-blue-700 text-[10px] px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-all"
                >
                  {prompt} <ArrowUpRight className="w-2.5 h-2.5" />
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white/60 backdrop-blur-xl border-t border-white/80 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              className="flex-1 bg-white/90 border border-slate-200 text-slate-900 text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="liquid-glass-button bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white p-2 rounded-xl transition-all"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Direct WhatsApp Footer */}
          <div className="px-3 py-2 bg-slate-50/80 backdrop-blur-md border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-mono">
            <span>RESPONSES BY DIGITACURVE AI</span>
            <a
              href="https://wa.me/917572094201"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-0.5 font-bold"
            >
              WHATSAPP ↗
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full liquid-glass-button border border-white/40 flex items-center gap-3 transition-all hover:scale-105 shadow-xl shadow-blue-600/30"
      >
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-black text-xs text-white">
          DC
        </div>
        <div className="hidden sm:flex flex-col items-start pr-2">
          <span className="text-xs font-black tracking-tight leading-none">
            DIGITACURVE AI
          </span>
          <span className="text-[9px] font-mono text-blue-100 uppercase">
            ASK ANYTHING
          </span>
        </div>
        <MessageSquare className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}
