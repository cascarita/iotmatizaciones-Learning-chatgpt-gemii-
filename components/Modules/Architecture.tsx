
import React from 'react';
import { COMPARATIVE_DATA } from '../../constants';

export const Architecture: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <i className="fas fa-microchip text-blue-500"></i>
            Ecosistema OpenAI
          </h3>
          <p className="text-zinc-400 text-sm mb-4">
            Basado en la integración de razonamiento lógico profundo (o1) y procesamiento rápido de lenguaje multimodal.
          </p>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>• Foco en Agentes Autónomos</li>
            <li>• Edición visual en tiempo real</li>
            <li>• Integración profunda con Microsoft</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 transition-all">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <i className="fas fa-brain text-emerald-500"></i>
            Ecosistema Google
          </h3>
          <p className="text-zinc-400 text-sm mb-4">
            Pionero en multimodalidad nativa (Gemini) y video generativo de alta fidelidad (Veo).
          </p>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>• Deep Research & Search Grounding</li>
            <li>• Capacidades de video con Veo</li>
            <li>• Ecosistema integrado Workspace</li>
          </ul>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-800 glass-panel">
        <table className="w-full text-left border-collapse">
          <thead className="bg-zinc-800/50">
            <tr>
              <th className="p-4 border-b border-zinc-800 text-zinc-400 font-medium">Característica</th>
              <th className="p-4 border-b border-zinc-800 text-blue-400 font-bold">ChatGPT (OpenAI)</th>
              <th className="p-4 border-b border-zinc-800 text-emerald-400 font-bold">Google Gemini</th>
            </tr>
          </thead>
          <tbody>
            {COMPARATIVE_DATA.map((row, idx) => (
              <tr key={idx} className="hover:bg-zinc-800/30 transition-colors">
                <td className="p-4 border-b border-zinc-800 text-zinc-300 font-medium">{row.characteristic}</td>
                <td className="p-4 border-b border-zinc-800 text-zinc-400">{row.chatGPT}</td>
                <td className="p-4 border-b border-zinc-800 text-zinc-400">{row.gemini}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
        <h4 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-2">Desafío del Arquitecto</h4>
        <p className="text-sm text-zinc-300">
          ¿Por qué crees que Google apostó por la "multimodalidad nativa" desde el inicio de Gemini en lugar de añadir modelos de visión sobre un modelo de texto previo?
        </p>
      </div>
    </div>
  );
};
