import React from 'react';
import { FileText, CheckCircle, Phone, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { NewsTicker } from './NewsTicker';

interface HeroSectionProps {
  language: Language;
  onSectionChange: (section: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ language, onSectionChange }) => {
  const t = translations[language];

  const mainButtons = [
    {
      icon: FileText,
      label: t.viewSchemes,
      action: () => onSectionChange('schemes'),
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: CheckCircle,
      label: t.checkEligibility,
      action: () => onSectionChange('eligibility'),
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: Phone,
      label: t.contactAdmin,
      action: () => onSectionChange('contact'),
      color: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      icon: Globe,
      label: t.chooseLanguage,
      action: () => onSectionChange('profile'),
      color: 'bg-brown-500 hover:bg-brown-600'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-green-50 to-cream-50 py-8">
      <div className="container mx-auto px-4">
        <NewsTicker language={language} />
        
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🌾</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {t.appName}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {mainButtons.map((button, index) => (
            <button
              key={index}
              onClick={button.action}
              className={`${button.color} text-white p-6 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1`}
            >
              <button.icon size={32} className="mx-auto mb-3" />
              <span className="block font-semibold text-lg">{button.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};