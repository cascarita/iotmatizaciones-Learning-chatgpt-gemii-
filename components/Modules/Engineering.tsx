
import React from 'react';

export const Engineering: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Nivel Básico */}
        <div className="p-6 rounded-2xl bg-zinc-900 border-l-4 border-l-blue-500 border-zinc-800">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-lg">Zero-Shot</h3>
            <span className="text-[10px] px-2 py-1 rounded bg-blue-500/20 text-blue-400">Básico</span>
          </div>
          <p className="text-sm text-zinc-400 mb-4">
            Instrucciones directas sin contexto adicional ni ejemplos previos.
          </p>
          <div className="p-3 bg-black/50 rounded-lg text-xs font-mono text-emerald-400">
            "Escribe un correo de bienvenida para un nuevo desarrollador."
          </div>
        </div>

        {/* Nivel Intermedio */}
        <div className="p-6 rounded-2xl bg-zinc-900 border-l-4 border-l-purple-500 border-zinc-800">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-lg">Few-Shot</h3>
            <span className="text-[10px] px-2 py-1 rounded bg-purple-500/20 text-purple-400">Intermedio</span>
          </div>
          <p className="text-sm text-zinc-400 mb-4">
            Proporcionar ejemplos de formato, tono y estructura para que el modelo replique el patrón.
          </p>
          <div className="p-3 bg-black/50 rounded-lg text-xs font-mono text-emerald-400">
            "Ejemplo 1: [Pregunta] -> [Respuesta formal]<br/>
            Ejemplo 2: [Pregunta] -> [Respuesta formal]<br/>
            Tarea: Responde a..."
          </div>
        </div>

        {/* Nivel Experto */}
        <div className="p-6 rounded-2xl bg-zinc-900 border-l-4 border-l-red-500 border-zinc-800">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-lg">Chain of Thought</h3>
            <span className="text-[10px] px-2 py-1 rounded bg-red-500/20 text-red-400">Experto</span>
          </div>
          <p className="text-sm text-zinc-400 mb-4">
            Forzar al modelo a razonar paso a paso. Ideal para problemas complejos.
          </p>
          <div className="p-3 bg-black/50 rounded-lg text-xs font-mono text-emerald-400">
            "Piensa paso a paso: Primero analiza los datos, luego calcula la desviación, finalmente justifica..."
          </div>
        </div>
      </div>

      <div className="p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 shadow-2xl">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <i className="fas fa-vial text-purple-400"></i>
          Laboratorio de Prompting Dinámico
        </h3>
        <div className="space-y-4">
          <p className="text-zinc-300">
            Un buen arquitecto sabe que la calidad del output depende de la arquitectura del input.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-zinc-800/30 rounded-xl border border-zinc-700">
                <span className="text-xs text-zinc-500 block mb-2 font-bold uppercase">Prompt Débil</span>
                <p className="text-sm text-zinc-400 italic">"Haz un resumen de este texto."</p>
            </div>
            <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
                <span className="text-xs text-emerald-500 block mb-2 font-bold uppercase">Prompt de Arquitecto</span>
                <p className="text-sm text-zinc-300">"Actúa como un editor senior. Resume los 3 puntos clave del texto adjunto, manteniendo un tono ejecutivo y limitando el output a 150 palabras."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
