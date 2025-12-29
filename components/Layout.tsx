
import React, { useState, useCallback, useEffect, useRef } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children, sidebar }) => {
  const [sidebarWidth, setSidebarWidth] = useState(384);
  const [isResizing, setIsResizing] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
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
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsMobileSidebarOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white shadow-2xl z-[60] flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
      >
        <i className="fas fa-comments text-xl"></i>
      </button>

      {/* Sidebar Overlay for Mobile */}
      {isMobileSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Tutor Chat */}
      <aside 
        ref={sidebarRef}
        className={`
          fixed lg:relative inset-y-0 left-0 z-[80] lg:z-10
          flex flex-col border-r border-zinc-800 glass-panel bg-zinc-950
          transition-transform duration-300 ease-in-out
          ${isMobileSidebarOpen ? 'translate-x-0 w-[85%] sm:w-[400px]' : '-translate-x-full lg:translate-x-0'}
          flex-shrink-0
        `}
        style={{ width: window.innerWidth >= 1024 ? `${sidebarWidth}px` : undefined }}
      >
        <div className="flex items-center justify-between p-4 lg:hidden border-b border-zinc-800">
          <span className="font-bold text-sm">Tutor de IA</span>
          <button onClick={() => setIsMobileSidebarOpen(false)} className="p-2 text-zinc-400">
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        {sidebar}
        
        {/* Resize Handle (Desktop Only) */}
        <div
          onMouseDown={startResizing}
          className="hidden lg:block absolute top-0 -right-1 w-2 h-full cursor-col-resize z-50 transition-colors hover:bg-blue-500/30"
        />
      </aside>

      {/* Main Dashboard Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 relative scroll-smooth">
        <div className="max-w-6xl mx-auto space-y-8">
            <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8 md:mb-12">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                        IA Architect 2025 <span className="text-zinc-500 font-light ml-2 text-base md:text-xl">v2.5</span>
                    </h1>
                    <p className="text-zinc-500 text-xs md:text-sm mt-1 uppercase tracking-widest font-medium">Panel de Comando Estratégico</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="px-3 py-1.5 rounded-full bg-zinc-900 text-[10px] md:text-xs flex items-center gap-2 border border-zinc-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Status: Activo
                    </span>
                </div>
            </header>
            {children}
        </div>
      </main>
    </div>
  );
};
