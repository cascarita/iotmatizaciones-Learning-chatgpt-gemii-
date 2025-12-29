
import React from 'react';

export const Productivity: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800/50 transition-all">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <i className="fab fa-google text-2xl text-blue-400"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">Google Workspace</h3>
          <p className="text-sm text-zinc-400">
            Integración de Gemini en Docs y Gmail. Capacidad de agendar citas en Calendar y resumir hilos de correo complejos directamente desde el panel lateral.
          </p>
        </div>

        <div className="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800/50 transition-all">
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <i className="fab fa-microsoft text-2xl text-orange-400"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">Microsoft 365 Copilot</h3>
          <p className="text-sm text-zinc-400">
            Uso de Copilot en Excel para análisis predictivo y en Word para redacción de borradores, logrando reducir tareas administrativas hasta un 40%.
          </p>
        </div>

        <div className="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800/50 transition-all">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <i className="fas fa-notebook text-2xl text-emerald-400"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">NotebookLM</h3>
          <p className="text-sm text-zinc-400">
            Herramienta revolucionaria para crear guías de estudio personalizadas y podcasts interactivos (Audio Overviews) a partir de tus propias fuentes locales.
          </p>
        </div>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
        <h4 className="font-bold text-xl mb-6">Workflow Recomendado: El "Bucle de Productividad"</h4>
        <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="p-4 bg-zinc-800 rounded-xl border border-zinc-700 w-full md:w-48 text-center">
                <span className="text-xs text-zinc-500 font-bold block mb-1">Paso 1</span>
                <span className="text-sm">Captura en Keep</span>
            </div>
            <i className="fas fa-arrow-right text-zinc-700 hidden md:block"></i>
            <div className="p-4 bg-zinc-800 rounded-xl border border-zinc-700 w-full md:w-48 text-center">
                <span className="text-xs text-zinc-500 font-bold block mb-1">Paso 2</span>
                <span className="text-sm">Borrador en Docs (Gemini)</span>
            </div>
            <i className="fas fa-arrow-right text-zinc-700 hidden md:block"></i>
            <div className="p-4 bg-zinc-800 rounded-xl border border-zinc-700 w-full md:w-48 text-center">
                <span className="text-xs text-zinc-500 font-bold block mb-1">Paso 3</span>
                <span className="text-sm">Cita en Calendar</span>
            </div>
        </div>
      </div>
    </div>
  );
};
