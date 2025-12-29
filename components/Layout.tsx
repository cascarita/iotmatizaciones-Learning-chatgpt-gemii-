
import React, { useState, useCallback, useEffect, useRef } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children, sidebar }) => {
  const [sidebarWidth, setSidebarWidth] = useState(384); // Default 384px (w-96)
  const [isResizing, setIsResizing] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const startResizing = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        const newWidth = e.clientX;
        // Constraints: min 300px, max 50% of window
        if (newWidth > 280 && newWidth < window.innerWidth * 0.5) {
          setSidebarWidth(newWidth);
        }
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      {/* Sidebar for the Tutor Chat */}
      <aside 
        ref={sidebarRef}
        className="relative border-r border-zinc-800 flex flex-col glass-panel flex-shrink-0"
        style={{ width: `${sidebarWidth}px` }}
      >
        {sidebar}
        
        {/* Resize Handle */}
        <div
          onMouseDown={startResizing}
          className={`absolute top-0 -right-1 w-2 h-full cursor-col-resize z-50 transition-colors hover:bg-blue-500/30 ${isResizing ? 'bg-blue-500/50' : ''}`}
        />
      </aside>

      {/* Main Dashboard Area */}
      <main className="flex-1 overflow-y-auto p-8 relative">
        <div className="max-w-6xl mx-auto space-y-8">
            <header className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                        Curso IA - ChatGPT y Gemini - Iotmatizaciones <span className="text-zinc-500 font-light ml-2">v2.5</span>
                    </h1>
                    <p className="text-zinc-400 mt-1">Centro de Comando de Aprendizaje Guiado</p>
                </div>
                <div className="flex gap-4">
                    <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs flex items-center gap-2 border border-zinc-700">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Sistema Online
                    </span>
                </div>
            </header>
            {children}
        </div>
      </main>
    </div>
  );
};
