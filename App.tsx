
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { TutorChat } from './components/Chat/TutorChat';
import { AppTab } from './types';
import { Architecture } from './components/Modules/Architecture';
import { Engineering } from './components/Modules/Engineering';
import { Productivity } from './components/Modules/Productivity';
import { Security } from './components/Modules/Security';
import { MediaLab } from './components/Media/MediaLab';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.ARCHITECTURE);

  const renderModule = () => {
    switch (activeTab) {
      case AppTab.ARCHITECTURE: return <Architecture />;
      case AppTab.ENGINEERING: return <Engineering />;
      case AppTab.PRODUCTIVITY: return <Productivity />;
      case AppTab.SECURITY: return <Security />;
      case AppTab.MEDIA: return <MediaLab />;
      default: return <Architecture />;
    }
  };

  const tabs = [
    { id: AppTab.ARCHITECTURE, icon: 'fa-layer-group' },
    { id: AppTab.ENGINEERING, icon: 'fa-code' },
    { id: AppTab.PRODUCTIVITY, icon: 'fa-bolt' },
    { id: AppTab.SECURITY, icon: 'fa-shield-halved' },
    { id: AppTab.MEDIA, icon: 'fa-wand-magic-sparkles' }
  ];

  return (
    <Layout sidebar={<TutorChat />}>
      {/* Tab Navigation - Responsive horizontal scroll on mobile */}
      <div className="flex w-full overflow-x-auto no-scrollbar pb-2 md:pb-0">
        <div className="flex gap-2 p-1 bg-zinc-900 border border-zinc-800 rounded-xl whitespace-nowrap min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 md:px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === tab.id 
                  ? 'bg-zinc-100 text-zinc-950 shadow-xl scale-[1.02]' 
                  : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <i className={`fas ${tab.icon} ${activeTab === tab.id ? 'text-blue-600' : ''}`}></i>
              <span>{tab.id}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Module Content */}
      <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out py-4">
        {renderModule()}
      </div>

      {/* Footer Info */}
      <footer className="mt-20 py-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] md:text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
        <div>Ecosistema IA 2025 • Arquitecto Senior Tutor</div>
        <div className="flex gap-6">
            <span className="hover:text-zinc-400 cursor-pointer transition-colors">Repositorio</span>
            <span className="hover:text-zinc-400 cursor-pointer transition-colors">API Status</span>
            <span className="hover:text-zinc-400 cursor-pointer transition-colors">Legal</span>
        </div>
      </footer>
    </Layout>
  );
};

export default App;
