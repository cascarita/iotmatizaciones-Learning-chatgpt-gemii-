
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
      {/* Tab Navigation */}
      <div className="flex gap-2 p-1 bg-zinc-900 border border-zinc-800 rounded-xl inline-flex mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === tab.id 
                ? 'bg-zinc-100 text-zinc-950 shadow-lg' 
                : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
            }`}
          >
            <i className={`fas ${tab.icon}`}></i>
            <span className="hidden md:inline">{tab.id}</span>
          </button>
        ))}
      </div>

      {/* Module Content */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {renderModule()}
      </div>

      {/* Footer Info */}
      <footer className="mt-20 pt-10 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
        <div>Ecosistema IA 2025 v2.5.0</div>
        <div className="flex gap-4">
            <span className="hover:text-zinc-400 cursor-help">Docs</span>
            <span className="hover:text-zinc-400 cursor-help">API Status</span>
            <span className="hover:text-zinc-400 cursor-help">Terms</span>
        </div>
      </footer>
    </Layout>
  );
};

export default App;
