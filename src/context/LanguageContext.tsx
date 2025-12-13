"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import * as enData from '@/data/mockData';
import * as deData from '@/data/mockDataDe';
import * as roData from '@/data/mockDataRo';
import * as frData from '@/data/mockDataFr';

export type Language = 'en' | 'de' | 'ro' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  data: typeof enData;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const dataMap = {
  en: enData,
  de: deData,
  ro: roData,
  fr: frData
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    "getInTouch": "Get In Touch",
    "contactIntro": "Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!",
    "name": "Name",
    "email": "Email",
    "subject": "Subject",
    "message": "Message",
    "sendMessage": "Send Message",
    "sending": "Sending...",
    "projects": "Projects",
    "experience": "Work Experience",
    "education": "Education",
    "about": "About Me",
    "contact": "Contact Me",
    "explorer": "Explorer",
    "search": "Search",
    "searchPlaceholder": "Search (Ctrl+K)",
    "clearSearch": "Clear Search",
    "noResults": "No results found for",
    "githubStats": "GitHub Stats",
    "linkedinProfile": "LinkedIn Profile",
    "resume": "Resume",
    "viewResume": "View Resume",
    "downloadResume": "Download Resume",
    "allRightsReserved": "All rights reserved",
    "builtWith": "Built with",
    "and": "and",
  },
  de: {
    "getInTouch": "Kontakt aufnehmen",
    "contactIntro": "Ob Sie eine Frage haben, einen Projektvorschlag oder einfach nur Hallo sagen wollen, ich werde mein Bestes geben, um Ihnen zu antworten!",
    "name": "Name",
    "email": "E-Mail",
    "subject": "Betreff",
    "message": "Nachricht",
    "sendMessage": "Nachricht senden",
    "sending": "Senden...",
    "projects": "Projekte",
    "experience": "Berufserfahrung",
    "education": "Ausbildung",
    "about": "Über mich",
    "contact": "Kontakt",
    "explorer": "Explorer",
    "search": "Suche",
    "searchPlaceholder": "Suchen (Ctrl+K)",
    "clearSearch": "Suche löschen",
    "noResults": "Keine Ergebnisse gefunden für",
    "githubStats": "GitHub-Statistiken",
    "linkedinProfile": "LinkedIn-Profil",
    "resume": "Lebenslauf",
    "viewResume": "Lebenslauf ansehen",
    "downloadResume": "Lebenslauf herunterladen",
    "allRightsReserved": "Alle Rechte vorbehalten",
    "builtWith": "Erstellt mit",
    "and": "und",
  },
  ro: {
    "getInTouch": "Contactează-mă",
    "contactIntro": "Fie că ai o întrebare, o propunere de proiect sau vrei doar să saluți, voi încerca să-ți răspund cât mai repede!",
    "name": "Nume",
    "email": "Email",
    "subject": "Subiect",
    "message": "Mesaj",
    "sendMessage": "Trimite Mesaj",
    "sending": "Se trimite...",
    "projects": "Proiecte",
    "experience": "Experiență Profesională",
    "education": "Educație",
    "about": "Despre Mine",
    "contact": "Contact",
    "explorer": "Explorator",
    "search": "Căutare",
    "searchPlaceholder": "Caută (Ctrl+K)",
    "clearSearch": "Șterge Căutarea",
    "noResults": "Niciun rezultat pentru",
    "githubStats": "Statistici GitHub",
    "linkedinProfile": "Profil LinkedIn",
    "resume": "CV",
    "viewResume": "Vezi CV",
    "downloadResume": "Descarcă CV",
    "allRightsReserved": "Toate drepturile rezervate",
    "builtWith": "Construit cu",
    "and": "și",
  },
  fr: {
    "getInTouch": "Contactez-moi",
    "contactIntro": "Que vous ayez une question, une proposition de projet ou juste pour dire bonjour, je ferai de mon mieux pour vous répondre !",
    "name": "Nom",
    "email": "Email",
    "subject": "Sujet",
    "message": "Message",
    "sendMessage": "Envoyer le message",
    "sending": "Envoi...",
    "projects": "Projets",
    "experience": "Expérience Professionnelle",
    "education": "Éducation",
    "about": "À Propos",
    "contact": "Contact",
    "explorer": "Explorateur",
    "search": "Recherche",
    "searchPlaceholder": "Rechercher (Ctrl+K)",
    "clearSearch": "Effacer la recherche",
    "noResults": "Aucun résultat pour",
    "githubStats": "Stats GitHub",
    "linkedinProfile": "Profil LinkedIn",
    "resume": "CV",
    "viewResume": "Voir CV",
    "downloadResume": "Télécharger CV",
    "allRightsReserved": "Tous droits réservés",
    "builtWith": "Construit avec",
    "and": "et",
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, data: dataMap[language], t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
