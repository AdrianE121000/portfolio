import { useState } from 'react';
import { dictionary } from '../language/Dictionary';
import Context from './Context';

const Provider = ({ children }) => {
  const initialLang =
    window.navigator.language?.split('-')[0] === 'es' ? 'es' : 'en';
  const [language, setLanguage] = useState(initialLang);
  const [translations, setTranslations] = useState(dictionary[language]);

  const handleLang = {
    select: (e) => {
      setLanguage(e.target.value);
      setTranslations(dictionary[e.target.value]);
    },
    button: (language) => {
      const newLang = language === 'es' ? 'en' : 'es';
      setLanguage(newLang);
      setTranslations(dictionary[newLang]);
    },
  };
  return (
    <Context.Provider value={{ translations, handleLang, language }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
