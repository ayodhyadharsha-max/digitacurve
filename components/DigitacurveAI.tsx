'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';

interface Message {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
}

export default function DigitacurveAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'assistant',
      text: "Hey—I’m Digitacurve AI. Tell me your business goal and I’ll suggest the right service system. Hindi or English—both work.",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let replyText = "We recommend combining custom Next.js Web Development with Generative Engine Optimization (GEO) and Meta/Google Ads for maximum business growth.";

      const qLower = query.toLowerCase();
      if (qLower.includes('website') || qLower.includes('build') || qLower.includes('web')) {
        replyText = "For websites, we build high-speed Next.js applications engineered with GSAP animations, Lenis smooth scroll, and mobile optimization.";
      } else if (qLower.includes('lead') || qLower.includes('marketing') || qLower.includes('ads')) {
        replyText = "Our Lead Generation system connects Google Search Ads + Meta Ads directly with WhatsApp conversion paths and landing pages.";
      } else if (qLower.includes('brief') || qLower.includes('project')) {
        replyText = "Great! What is your primary project goal? (1) Build a new website (2) SEO & GEO Ranking (3) Paid Ads & Lead Gen. Send us a message on WhatsApp for instant onboarding!";
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: replyText,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <aside className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end">
      {/* AI Panel */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[520px] bg-slate-950/95 border border-cyan-500/30 rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden mb-4 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="p-4 bg-slate-900/80 border-b border-cyan-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                <Bot size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-wider text-white uppercase flex items-center gap-1.5">
                  DIGITACURVE AI <Sparkles size={12} className="text-cyan-400" />
                </h4>
                <span className="text-[10px] text-cyan-400/80 tracking-widest font-mono">
                  FREE · BRAND ASSISTANT
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-all"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Log */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <span className="text-[9px] font-mono text-slate-400 mb-1 uppercase tracking-wider">
                  {msg.sender === 'user' ? 'YOU' : 'DIGITACURVE AI'}
                </span>
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-br-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex flex-col items-start">
                <span className="text-[9px] font-mono text-slate-400 mb-1">DIGITACURVE AI</span>
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 text-xs">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Suggestions */}
          <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-900 flex flex-wrap gap-1.5">
            {[
              'Build my 60-sec brief',
              'Which service fits me?',
              'Build my website',
              'Get more leads',
            ].map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-cyan-500/20 text-slate-300 hover:border-cyan-400 hover:text-white transition-all flex items-center gap-1"
              >
                {prompt} <ArrowUpRight size={10} />
              </button>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Digitacurve AI (Hindi or English)..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-cyan-500 text-black font-bold disabled:opacity-40 hover:bg-cyan-400 transition-all"
            >
              <Send size={14} />
            </button>
          </form>

          {/* WhatsApp Direct Link Footer */}
          <div className="p-2 bg-slate-950 text-center border-t border-slate-900">
            <a
              href="https://wa.me/917572094201"
              target="_blank"
              rel="noreferrer"
              className="text-[10px] font-mono text-cyan-400 hover:underline inline-flex items-center gap-1 uppercase"
            >
              SEND CHAT TO WHATSAPP ↗
            </a>
          </div>
        </div>
      )}

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        data-cursor="CHAT"
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-950 border border-cyan-500/40 hover:border-cyan-400 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105"
      >
        <div className="w-6 h-6 rounded-full bg-cyan-400 text-black flex items-center justify-center font-bold text-xs">
          DC
        </div>
        <div className="flex flex-col items-start leading-none">
          <span className="text-[11px] font-black tracking-widest uppercase text-white">
            DIGITACURVE AI
          </span>
          <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-wider">
            ASK ANYTHING
          </span>
        </div>
        <Sparkles size={14} className="text-cyan-400 ml-1 group-hover:rotate-12 transition-transform" />
      </button>
    </aside>
  );
}
