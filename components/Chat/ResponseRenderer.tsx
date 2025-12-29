
import React from 'react';
import { marked } from 'marked';

interface ChartData {
  type: 'bar' | 'pie';
  title: string;
  data: { label: string; value: number }[];
}

const SimpleBarChart: React.FC<{ chart: ChartData }> = ({ chart }) => {
  if (!chart.data || chart.data.length === 0) return null;
  
  const maxValue = Math.max(...chart.data.map(d => d.value), 1);
  
  return (
    <div className="my-4 p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-xl">
      <h4 className="text-[11px] font-bold text-zinc-500 mb-5 uppercase tracking-[0.2em] flex items-center gap-2">
        <i className="fas fa-chart-bar text-blue-500"></i>
        {chart.title}
      </h4>
      <div className="space-y-4">
        {chart.data.map((item, i) => (
          <div key={i} className="space-y-1.5">
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-zinc-300 font-semibold">{item.label}</span>
              <span className="text-blue-400 font-black">{item.value}%</span>
            </div>
            <div className="h-2.5 w-full bg-zinc-800/50 rounded-full overflow-hidden border border-white/5">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-400 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ResponseRenderer: React.FC<{ text: string, links?: { uri: string; title: string }[] }> = ({ text, links }) => {
  const chartRegex = /```chart\s*([\s\S]*?)\s*```/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = chartRegex.exec(text)) !== null) {
    const textBefore = text.substring(lastIndex, match.index);
    if (textBefore) {
      parts.push(
        <div 
          key={`text-${lastIndex}`}
          className="prose prose-invert max-w-none prose-sm"
          dangerouslySetInnerHTML={{ __html: marked.parse(textBefore) as string }} 
        />
      );
    }

    try {
      const chartData: ChartData = JSON.parse(match[1]);
      parts.push(<SimpleBarChart key={`chart-${match.index}`} chart={chartData} />);
    } catch (e) {
      parts.push(<pre key={`error-${match.index}`} className="text-[10px] text-red-400 p-2 bg-red-950/20 rounded">Error en formato de gráfico</pre>);
    }

    lastIndex = chartRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    const remainingText = text.substring(lastIndex);
    parts.push(
      <div 
        key={`text-${lastIndex}`}
        className="prose prose-invert max-w-none prose-sm"
        dangerouslySetInnerHTML={{ __html: marked.parse(remainingText) as string }} 
      />
    );
  }

  return (
    <div className="w-full">
      <div className="space-y-1">{parts}</div>
      
      {links && links.length > 0 && (
        <div className="mt-6 pt-4 border-t border-zinc-800/50">
          <h5 className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2">
            <i className="fas fa-globe text-blue-500/50"></i>
            Fuentes Verificadas
          </h5>
          <div className="flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <a 
                key={idx}
                href={link.uri}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-blue-400 hover:border-blue-500/50 transition-all flex items-center gap-2 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
              >
                <i className="fas fa-link text-[8px] opacity-50"></i>
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
