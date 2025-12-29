
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../../types';
import { chatWithTutor } from '../../services/gemini';
import { ResponseRenderer } from './ResponseRenderer';

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-1.5 rounded-lg bg-zinc-900/50 hover:bg-zinc-700/50 text-zinc-400 hover:text-white transition-all border border-white/5 opacity-0 group-hover:opacity-100"
      title="Copiar respuesta"
    >
      <i className={`fas ${copied ? 'fa-check text-emerald-400' : 'fa-copy'}`}></i>
    </button>
  );
};

export const TutorChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: 'Hola, soy tu Arquitecto Tutor. ¿Qué área del ecosistema 2025 te gustaría explorar hoy? Recuerda que el conocimiento real nace de las preguntas correctas. Ahora tengo acceso a la web en tiempo real para resolver dudas sobre eventos actuales.' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const response = await chatWithTutor(history, userMessage);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: response.text,
        links: response.links
      }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'Error de conexión. Inténtalo de nuevo.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-zinc-950/40">
      <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center shadow-lg shadow-blue-900/20">
              <i className="fas fa-robot text-white"></i>
          </div>
          <div>
              <h2 className="font-bold text-sm">Tutor Socrático</h2>
              <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
                Arquitecto Senior
              </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
           <i className="fas fa-search text-[10px] text-zinc-600" title="Búsqueda Web Habilitada"></i>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-zinc-800 select-text">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`group relative max-w-[95%] p-4 rounded-2xl text-sm leading-relaxed ${
              m.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none shadow-lg' 
                : 'bg-zinc-800/80 text-zinc-100 rounded-bl-none border border-zinc-700 shadow-xl'
            }`}>
              <ResponseRenderer text={m.text} links={m.links} />
              <CopyButton text={m.text} />
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-zinc-800/80 p-3 rounded-2xl border border-zinc-700 rounded-bl-none flex flex-col gap-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-200"></div>
              </div>
              <span className="text-[9px] text-zinc-500 uppercase tracking-tighter">Consultando fuentes...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-zinc-800 bg-zinc-900/50">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Pregunta al tutor..."
            className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 pr-12 transition-all"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-2 top-1.5 w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors disabled:opacity-50"
          >
            <i className="fas fa-paper-plane text-xs"></i>
          </button>
        </div>
        <div className="flex justify-between items-center mt-2 px-1">
           <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
            Modo Aprendizaje Guiado v25.1
          </p>
          <span className="text-[9px] text-zinc-600 italic">Google Search Grounding On</span>
        </div>
      </div>
    </div>
  );
};
