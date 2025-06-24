"use client"

import { useState, useEffect } from "react"

export type Language = "fr" | "en" | "es" | "ar"

interface Translations {
  [key: string]: string
}

const translations: Record<Language, Translations> = {
  fr: require("../locales/fr.json"),
  en: require("../locales/en.json"),
  es: require("../locales/es.json"),
  ar: require("../locales/ar.json"),
}

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("fr")
  const [isRTL, setIsRTL] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("cagnotte-language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage)
      setIsRTL(savedLanguage === "ar")
    }
  }, [])

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language)
    setIsRTL(language === "ar")
    localStorage.setItem("cagnotte-language", language)
  }

  const t = (key: string, params?: Record<string, string | number>) => {
    let translation = translations[currentLanguage][key] || key

    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        translation = translation.replace(`{{${paramKey}}}`, String(value))
      })
    }

    return translation
  }

  return {
    currentLanguage,
    changeLanguage,
    t,
    isRTL,
  }
}
