"use client";
import React, { useEffect } from "react";
// import "@/app/globals.css";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    // Define the initialization function
    const googleTranslateElementInit = () => {
      if (!window.google?.translate) return; // Check if the google translate object exists
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en", // Default language of your website
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    // Check if the script is already loaded or initialized
    if (!window.googleTranslateElementInit) {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      // Set the init function globally
      window.googleTranslateElementInit = googleTranslateElementInit;
    } else {
      // If script already loaded, just initialize the translate element
      googleTranslateElementInit();
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{ width: "auto", height: "auto" }}
    ></div>
  );
};

export default GoogleTranslate;
