
import React from 'react';
import { COMPARATIVE_DATA } from '../../constants';

export const Architecture: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/30 transition-all group">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <i className="fas fa-microchip text-blue-500"></i>
            </div>
            Ecosistema OpenAI
          </h3>
          <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
            Estructura optimizada para razonamiento lógico complejo y agentes de ejecución autónoma.
          </p>
          <ul className="space-y-3 text-xs text-zinc-300">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Agentes Autónomos</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Edición visual nativa</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Integración Microsoft</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/30 transition-all group">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <i className="fas fa-brain text-emerald-500"></i>
            </div>
            Ecosistema Google
          </h3>
          <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
            Plataforma escalable basada en multimodalidad nativa y procesamiento de video cinemático.
          </p>
          <ul className="space-y-3 text-xs text-zinc-300">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Deep Research Grounding</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Generación de Video Veo</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Workspace AI Integrado</li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800 glass-panel overflow-hidden">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead className="bg-zinc-800/50">
              <tr>
                <th className="p-4 border-b border-zinc-800 text-zinc-500 text-[10px] uppercase tracking-wider font-bold">Característica</th>
                <th className="p-4 border-b border-zinc-800 text-blue-400 text-[10px] uppercase tracking-wider font-bold">ChatGPT (OpenAI)</th>
                <th className="p-4 border-b border-zinc-800 text-emerald-400 text-[10px] uppercase tracking-wider font-bold">Google Gemini</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {COMPARATIVE_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-800/20 transition-colors">
                  <td className="p-4 text-xs md:text-sm text-zinc-300 font-semibold">{row.characteristic}</td>
                  <td className="p-4 text-xs md:text-sm text-zinc-400">{row.chatGPT}</td>
                  <td className="p-4 text-xs md:text-sm text-zinc-400">{row.gemini}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="w-10 h-10 shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
            <i className="fas fa-question text-lg"></i>
        </div>
        <div>
          <h4 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Desafío del Arquitecto</h4>
          <p className="text-xs md:text-sm text-zinc-400 italic">
            "¿Por qué crees que Google apostó por la 'multimodalidad nativa' desde el inicio de Gemini?"
          </p>
        </div>
      </div>
    </div>
  );
};
