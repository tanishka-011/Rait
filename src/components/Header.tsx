import React from 'react';
import { Globe, Mic } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeaderProps {
  language: Language;
  onLanguageToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ language, onLanguageToggle }) => {
  const t = translations[language];

  return (
    <header className="bg-white shadow-sm border-b-2 border-green-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">🌾</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{t.appName}</h1>
              <p className="text-sm text-gray-600">{t.tagline}</p>
            </div>
          </div>
          
          <button
            onClick={onLanguageToggle}
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Globe size={20} />
            <span className="font-medium">{language === 'en' ? 'हिंदी' : 'English'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};