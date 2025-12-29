
import React, { useState } from 'react';
import { generateImage, startVeoOperation, pollVeoOperation } from '../../services/gemini';

export const MediaLab: React.FC = () => {
  const [imagePrompt, setImagePrompt] = useState('');
  const [generatedImg, setGeneratedImg] = useState<string | null>(null);
  const [isImgLoading, setIsImgLoading] = useState(false);

  const [videoPrompt, setVideoPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [videoStatus, setVideoStatus] = useState('');

  const handleGenImage = async () => {
    if (!imagePrompt) return;
    setIsImgLoading(true);
    setGeneratedImg(null);
    try {
      const res = await generateImage(imagePrompt);
      setGeneratedImg(res);
    } catch (e) {
      console.error(e);
    } finally {
      setIsImgLoading(false);
    }
  };

  const handleGenVideo = async () => {
    if (!videoPrompt) return;
    
    // Check if key is selected for Veo
    if (!(window as any).aistudio?.hasSelectedApiKey()) {
        await (window as any).aistudio?.openSelectKey();
        // Proceed as per instructions
    }

    setIsVideoLoading(true);
    setVideoStatus('Iniciando operación Veo (3.1 Fast)...');
    try {
      let op = await startVeoOperation(videoPrompt);
      while (!op.done) {
        setVideoStatus('Generando video cinematográfico... Esto puede tardar unos minutos.');
        await new Promise(resolve => setTimeout(resolve, 10000));
        op = await pollVeoOperation(op);
      }
      const downloadLink = op.response?.generatedVideos?.[0]?.video?.uri;
      const res = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
      const blob = await res.blob();
      setVideoUrl(URL.createObjectURL(blob));
    } catch (e) {
      console.error(e);
      setVideoStatus('Error al generar el video. Verifique su API Key.');
    } finally {
      setIsVideoLoading(false);
    }
  };

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Nano Banana (Imagen) */}
        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <i className="fas fa-image text-blue-400"></i>
            Generación con Nano Banana
          </h3>
          <p className="text-xs text-zinc-400">
            Modelos ligeros optimizados para iteraciones rápidas de imagen.
          </p>
          <textarea
            value={imagePrompt}
            onChange={(e) => setImagePrompt(e.target.value)}
            className="w-full h-24 bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm focus:outline-none focus:border-blue-500"
            placeholder="Describe tu imagen..."
          />
          <button 
            onClick={handleGenImage}
            disabled={isImgLoading}
            className="w-full py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-colors disabled:opacity-50"
          >
            {isImgLoading ? 'Procesando...' : 'Generar Imagen'}
          </button>
          
          {generatedImg && (
            <div className="mt-4 rounded-xl overflow-hidden border border-zinc-800">
              <img src={generatedImg} alt="Generated" className="w-full h-auto" />
            </div>
          )}
        </div>

        {/* Veo (Video) */}
        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <i className="fas fa-film text-emerald-400"></i>
            Producción con Veo (3.1)
          </h3>
          <p className="text-xs text-zinc-400">
            Generación de video cinematográfico de alta calidad (1080p).
          </p>
          <textarea
            value={videoPrompt}
            onChange={(e) => setVideoPrompt(e.target.value)}
            className="w-full h-24 bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm focus:outline-none focus:border-emerald-500"
            placeholder="Describe tu escena cinematográfica..."
          />
          <button 
            onClick={handleGenVideo}
            disabled={isVideoLoading}
            className="w-full py-3 bg-emerald-600 rounded-xl font-bold hover:bg-emerald-500 transition-colors disabled:opacity-50"
          >
            {isVideoLoading ? 'Generando...' : 'Producir Video'}
          </button>

          {isVideoLoading && (
            <div className="flex flex-col items-center gap-4 py-8">
              <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs text-emerald-400 text-center animate-pulse">{videoStatus}</p>
            </div>
          )}

          {videoUrl && (
            <div className="mt-4 rounded-xl overflow-hidden border border-zinc-800">
              <video src={videoUrl} controls className="w-full h-auto" />
            </div>
          )}
        </div>
      </div>

      <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl text-center">
        <p className="text-xs text-zinc-500 font-mono">
            Sugerencia del Tutor: "Prueba prompts que incluyan iluminación dinámica como 'Cinematic lighting' o 'Volumetric fog' para Veo".
        </p>
      </div>
    </div>
  );
};
