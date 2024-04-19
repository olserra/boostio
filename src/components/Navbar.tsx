import React, { useCallback } from "react";
import Logo from "./Logo";
import { useTranslation } from "next-i18next"; // Import useTranslation hook
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const { t } = useTranslation("common"); // Load translations from common.json
  const { language, setLanguage } = useLanguage(); // Load current language and language switching function

  const LandingMenuItems = [
    {
      label: t("navbar.careers"),
      href: `https://www.linkedin.com/company/boostio-ai/`,
    },
    {
      label: t("navbar.faq"),
      href: `/faq`,
    },
  ];

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // You may want to redirect to the corresponding language version of your page here
  };

  const TabItems = () => (
    <div className="flex lg:flex-row pr-4 lg:pl-52">
      <div className="flex flex-row items-center justify-between text-gray-200 gap-4">
        {LandingMenuItems.map((item, index) => (
          <a
            key={index}
            target={item.href === "Careers" ? "_blank" : "_self"}
            rel="noreferrer"
            href={item.href}
            className="lg:mt-4 lg:pr-6"
          >
            {item.label}
          </a>
        ))}
        <div className="md:mt-4 border p-2 rounded">
          <button onClick={() => handleLanguageChange("en")}>EN</button>
          <span> | </span>
          <button onClick={() => handleLanguageChange("pt")}>PT</button>
        </div>
      </div>
    </div>
  );

  const renderContent = useCallback(
    () => (
      <>
        <div className="flex flex-row items-center justify-between lg:justify-between lg:px-16 xl:px-36 px-4 py-2">
          <div className="pl-2">
            <Logo />
          </div>
          <div>
            <TabItems />
          </div>
        </div>
      </>
    ),
    [TabItems]
  );

  return renderContent();
};

export default Navbar;
