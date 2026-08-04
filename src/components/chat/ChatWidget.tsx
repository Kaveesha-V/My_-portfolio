import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send } from 'lucide-react';
import type { ChatMessage } from '../../types';
import { STARTER_QUESTIONS } from '../../data/mockData';
import { sendChatMessage } from '../../lib/supabase';

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: "👋 Hi! I'm Kaveesha's AI Assistant. Ask me anything about his technical background, projects, full-stack skills, or experience!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: STARTER_QUESTIONS,
    },
  ]);

  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, typing, isOpen]);

  const handleSend = async (userText?: string) => {
    const query = userText || input;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!userText) setInput('');
    setTyping(true);

    try {
      const responseText = await sendChatMessage(query, messages);

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: `ai-err-${Date.now()}`,
        sender: 'assistant',
        text: "I experienced an error retrieving that information. Please feel free to ask again or drop an email!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[540px] max-h-[85vh] glass-card rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl"
        >
          {/* Widget Header */}
          <div className="p-4 bg-gradient-to-r from-[#0e0e1c] to-[#16162a] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#0a0a12] rounded-[11px] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-cyan-400 animate-pulse" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm flex items-center gap-1.5">
                  <span>Kaveesha AI Agent</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </h3>
                <span className="text-[10px] font-mono-code text-cyan-400/80">Context-Aware RAG Engine</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Chat Window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#0a0a14]/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-medium rounded-br-none shadow-md'
                      : 'bg-[#141426] border border-white/10 text-slate-200 rounded-bl-none shadow-lg'
                    }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                <span className="text-[9px] font-mono-code text-slate-400 mt-1 px-1">
                  {msg.timestamp}
                </span>

                {/* Suggested prompt chips */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {msg.suggestions.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(q)}
                        className="text-[10px] font-mono-code bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 px-3 py-1.5 rounded-xl hover:bg-cyan-900/60 hover:border-cyan-400 transition-all text-left"
                      >
                        💡 {q}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {typing && (
              <div className="flex items-center gap-2 bg-[#141426] border border-white/10 text-cyan-400 px-4 py-2.5 rounded-2xl rounded-bl-none w-fit">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-[#0d0d1a] border-t border-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, tech stack..."
                className="flex-1 px-4 py-2.5 rounded-xl glass-input text-xs font-mono-code focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-black disabled:opacity-40 hover:scale-105 active:scale-95 transition-all shadow-md"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
