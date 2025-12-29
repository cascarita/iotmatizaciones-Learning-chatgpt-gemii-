
export enum AppTab {
  ARCHITECTURE = 'Arquitectura',
  ENGINEERING = 'Ingeniería',
  PRODUCTIVITY = 'Productividad',
  SECURITY = 'Seguridad',
  MEDIA = 'Laboratorio Multimedia'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  links?: { uri: string; title: string }[];
}

export interface ComparativeData {
  characteristic: string;
  chatGPT: string;
  gemini: string;
}

export interface VerificationCriteria {
  title: string;
  check: string;
}
