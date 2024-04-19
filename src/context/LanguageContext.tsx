import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

const LanguageContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageContextProvider };
