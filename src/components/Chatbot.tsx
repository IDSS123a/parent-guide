import React, { useState, useRef, useEffect, useMemo } from 'react';
import { MessageCircle, X, Send, Loader2, User } from 'lucide-react';
import DOMPurify from 'dompurify';
import { guideContent } from '../data/guideContent';
import { extractTextFromNode } from '../utils/textUtils';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Hello! I am the IDSS Parent Guide Assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Generate system instruction from guide content
  const systemInstruction = useMemo(() => {
    let text = `You are a helpful, knowledgeable, and polite assistant for the Internationale Deutsche Schule Sarajevo (IDSS). You have deep and full understanding of all details related to the elementary school.

Your knowledge base includes publicly available information about the IDSS school, such as their mission, vision, values, and general contact information, as found on their official website (https://idss.edu.ba/), as well as the complete Parent Guide for 2026/2027.

CRITICAL INSTRUCTIONS FOR YOUR OUTPUT:
1. You MUST render your response EXCLUSIVELY in HTML format.
2. Markdown (#, *, _, >...) is STRICTLY FORBIDDEN. Do not use any markdown formatting.
3. Your answers must be precise, clear, and professional.
4. If you do not know the answer, you MUST direct the user to contact the school using exactly this HTML snippet: <a href='mailto:info@idss.ba'>info@idss.ba</a> ili +387 33 560 520.
5. If your answer includes a list, use <ul> and <li> tags. For emphasis, use <strong> or <em>.
6. Ensure your HTML is safe, valid, and does not break the layout. Do not include <html>, <head>, or <body> tags, just the content elements.

Here is the complete Parent Guide for 2026/2027 (which includes Mission, Vision, Values, and Contact info):

`;
    
    guideContent.forEach(section => {
      text += `--- ${section.title} ---\n`;
      text += extractTextFromNode(section.content) + '\n\n';
    });
    
    return text;
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setInput('');
    
    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: userMessage
    };
    
    setMessages(prev => [...prev, newUserMsg]);
    setIsLoading(true);
    
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMessage,
          systemInstruction: systemInstruction
        })
      });
      
      const data = await res.json();
      
      const newModelMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: data.html || '<p>I am sorry, I could not generate a response.</p>'
      };
      
      setMessages(prev => [...prev, newModelMsg]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: '<p>Došlo je do greške. Kontakt: <a href="mailto:info@idss.ba">info@idss.ba</a> ili +387 33 560 520</p>'
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-idss-blue text-white rounded-full shadow-lg hover:bg-idss-blue-hover transition-all transform hover:scale-105 z-40 print:hidden ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open chat"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 w-[380px] h-[600px] max-h-[80vh] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 transition-all duration-300 origin-bottom-right print:hidden ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-idss-blue text-white p-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="bg-white rounded-full p-1 flex items-center justify-center w-10 h-10">
              <img src="https://i.postimg.cc/KcJxyzT5/IDSS-Logo-RGB-Primarna-verzija.png" alt="IDSS Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h3 className="font-bold">IDSS Assistant</h3>
              <p className="text-white/80 text-xs">Ask me anything about the school</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/10 rounded-md transition-colors"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center overflow-hidden ${msg.role === 'user' ? 'bg-blue-50 text-idss-blue ml-2' : 'bg-gray-100 mr-2 p-1 border border-gray-200'}`}>
                  {msg.role === 'user' ? (
                    <User size={16} />
                  ) : (
                    <img src="https://i.postimg.cc/053vV796/idss-logo.png" alt="IDSS Bot" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  )}
                </div>
                <div 
                  className={`p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-idss-blue text-white rounded-tr-none' 
                      : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.role === 'user' ? (
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                  ) : (
                    <div 
                      className="[&>*:last-child]:mb-0 [&_a]:underline" 
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(msg.text) }} 
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex max-w-[85%] flex-row">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 border border-gray-200 mr-2 p-1 flex items-center justify-center overflow-hidden">
                  <img src="https://i.postimg.cc/053vV796/idss-logo.png" alt="IDSS Bot" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div className="p-4 rounded-2xl bg-white border border-gray-200 rounded-tl-none shadow-sm flex items-center space-x-2">
                  <Loader2 size={16} className="animate-spin text-idss-blue" />
                  <span className="text-sm text-gray-500">Thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200 flex-shrink-0">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              aria-label="Type your question"
              className="flex-1 p-3 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-idss-blue focus:ring-2 focus:ring-blue-200 transition-all outline-none text-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              className="p-3 bg-idss-blue text-white rounded-xl hover:bg-idss-blue-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
