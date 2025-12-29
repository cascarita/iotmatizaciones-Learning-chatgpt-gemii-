
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

/**
 * Chat with the tutor using the chat interface and search grounding.
 * Creates a new instance of GoogleGenAI per call as per guidelines.
 */
export const chatWithTutor = async (history: { role: string; text: string }[], message: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      tools: [{ googleSearch: {} }],
    },
    history: history.map(h => ({
        role: h.role as 'user' | 'model',
        parts: [{ text: h.text }]
    }))
  });

  const result: GenerateContentResponse = await chat.sendMessage({ message });
  
  // Extract grounding links if search was used.
  const links: { uri: string; title: string }[] = [];
  const groundingChunks = result.candidates?.[0]?.groundingMetadata?.groundingChunks;
  
  if (groundingChunks) {
    groundingChunks.forEach((chunk: any) => {
      if (chunk.web && chunk.web.uri && chunk.web.title) {
        links.push({ uri: chunk.web.uri, title: chunk.web.title });
      }
    });
  }

  return {
    text: result.text || 'Sin respuesta',
    links: links.length > 0 ? links : undefined
  };
};

/**
 * Generate an image using the gemini-2.5-flash-image model.
 * Nano banana series models use generateContent for image tasks.
 */
export const generateImage = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [{ text: prompt }]
    }
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};

/**
 * Start a video generation operation using the Veo model.
 * Note: Users must have selected a paid API key via aistudio.openSelectKey.
 */
export const startVeoOperation = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const operation = await ai.models.generateVideos({
    model: 'veo-3.1-fast-generate-preview',
    prompt: prompt,
    config: {
      numberOfVideos: 1,
      resolution: '720p',
      aspectRatio: '16:9'
    }
  });
  return operation;
};

/**
 * Poll the status of a video generation operation.
 * Creates a new GoogleGenAI instance to ensure the latest API key is used.
 */
export const pollVeoOperation = async (operation: any) => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    return await ai.operations.getVideosOperation({ operation });
};
