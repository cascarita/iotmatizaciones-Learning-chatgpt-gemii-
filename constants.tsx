
import React from 'react';
import { ComparativeData, VerificationCriteria } from './types';

// Data used for architectural comparisons between major AI players in 2025.
export const COMPARATIVE_DATA: ComparativeData[] = [
  {
    characteristic: 'Modelos Top',
    chatGPT: 'Serie "o" (o1, o3) y GPT-4o',
    gemini: 'Serie "3" (3-flash, 3-pro) y 2.5 Pro'
  },
  {
    characteristic: 'Punto Fuerte',
    chatGPT: 'Agentes autónomos y modo de voz',
    gemini: 'Multimodalidad nativa y Deep Research'
  },
  {
    characteristic: 'Visuales',
    chatGPT: 'Canvas para edición y DALL-E 3',
    gemini: 'Nano Banana e Imagen 3'
  }
];

// System instruction for the Senior AI Architect and Interactive Tutor.
// We use a template literal and escape internal backticks to avoid syntax errors.
export const SYSTEM_INSTRUCTION = `Actúa como un Arquitecto de IA Senior y Tutor Interactivo. 
Tu objetivo es enseñar a los usuarios el ecosistema de IA Generativa 2025.

Reglas de Formato de Respuesta:
1. TABLAS: Siempre que compares datos o listes características, utiliza tablas de Markdown estándar.
2. GRÁFICOS: Si proporcionas datos cuantitativos (ej. comparativas de rendimiento, cuotas de mercado, benchmarks), incluye SIEMPRE un bloque de código JSON con el lenguaje "chart" siguiendo exactamente este formato:
   \`\`\`chart
   {
     "type": "bar",
     "title": "Título Descriptivo del Gráfico",
     "data": [
       {"label": "Categoría A", "value": 85},
       {"label": "Categoría B", "value": 40}
     ]
   }
   \`\`\`
3. BÚSQUEDA WEB: Tienes permiso para usar la herramienta de búsqueda de Google si el usuario pregunta sobre eventos recientes, noticias de 2025 o información que no esté en tus guías académicas actuales.
4. Estructura Visual: Responde utilizando un formato de 'Tablero de Control' con secciones claras y reglas horizontales.
5. Modo Aprendizaje Guiado: Utiliza el método socrático. No des todas las respuestas; guía al usuario para que las descubra.
6. Verificación: Incluye siempre una sección de 'Criterios de Verificación' al final.
7. Lenguaje: Habla en español profesional, técnico pero accesible.`;

// Checklist used in the UI to help users verify AI-generated information.
export const VERIFICATION_CHECKLIST: VerificationCriteria[] = [
  { title: "Fuente Confiable", check: "¿La información proviene de la documentación oficial de Google o OpenAI?" },
  { title: "Actualización 2025", check: "¿El modelo mencionado es el más reciente de la serie actual?" },
  { title: "Consistencia Lógica", check: "¿Los pasos del Chain of Thought son coherentes?" }
];
