
import React from 'react';
import { VERIFICATION_CHECKLIST } from '../../constants';

export const Security: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <i className="fas fa-shield-alt text-red-400"></i>
            Control de Alucinaciones
          </h3>
          <div className="space-y-4">
            <p className="text-sm text-zinc-400">
              Las alucinaciones son fallos lógicos donde la IA genera datos falsos con alta confianza. Técnicas para mitigarlas:
            </p>
            <div className="space-y-2">
              <div className="p-3 bg-zinc-800/50 rounded-lg flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-xs">1</span>
                <span className="text-sm">Self-Correction prompts (Pedirle que verifique su propia respuesta)</span>
              </div>
              <div className="p-3 bg-zinc-800/50 rounded-lg flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-xs">2</span>
                <span className="text-sm">Google Search Grounding (Uso de datos en tiempo real)</span>
              </div>
              <div className="p-3 bg-zinc-800/50 rounded-lg flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-xs">3</span>
                <span className="text-sm">Verificación manual de fuentes externas citadas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <i className="fas fa-balance-scale text-amber-400"></i>
            Marco de Ética IA
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 border border-zinc-800 rounded-xl">
              <span className="font-bold text-amber-400">Fairness (Equidad):</span>
              <p className="text-xs text-zinc-400 mt-1">Garantizar que los modelos no amplifiquen sesgos sociales o raciales.</p>
            </div>
            <div className="p-4 border border-zinc-800 rounded-xl">
              <span className="font-bold text-amber-400">Transparency (Transparencia):</span>
              <p className="text-xs text-zinc-400 mt-1">Uso de marcas de agua digitales como SynthID en contenido generado.</p>
            </div>
            <div className="p-4 border border-zinc-800 rounded-xl">
              <span className="font-bold text-amber-400">Accountability (Responsabilidad):</span>
              <p className="text-xs text-zinc-400 mt-1">Determinación de quién es el responsable legal del output de una IA.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
        <h3 className="font-bold mb-4 flex items-center gap-2 text-emerald-400">
            <i className="fas fa-check-circle"></i>
            Criterios de Verificación del Arquitecto
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {VERIFICATION_CHECKLIST.map((item, i) => (
                <div key={i} className="p-3 bg-black/30 rounded-lg">
                    <span className="block text-xs font-bold text-zinc-400 mb-1">{item.title}</span>
                    <p className="text-xs text-zinc-300 italic">"{item.check}"</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
