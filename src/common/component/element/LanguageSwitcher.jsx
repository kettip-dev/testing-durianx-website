"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/navigation";
import { useTransition, useState, useEffect, useRef } from "react";
import clsx from "clsx";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const languages = [
    { code: "en", label: "English" },
    { code: "km", label: "ភាសាខ្មែរ" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === localActive) || languages[0];
  const inactiveLanguages = languages.filter((lang) => lang.code !== localActive);

  const handleLanguageChange = (nextLocale) => {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left language-switcher-container" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={clsx(
          "inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 py-1.5 px-3 rounded-lg cursor-pointer focus:outline-none select-none",
          isOpen
            ? "text-neutral-900 dark:text-white bg-neutral-100/80 dark:bg-neutral-800/60"
            : "text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white hover:bg-neutral-100/50 dark:hover:bg-neutral-800/30"
        )}
      >
        {/* Globe Icon */}
        <svg
          className="w-4.5 h-4.5 text-neutral-600 dark:text-neutral-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-.91-8-2.465"
          />
        </svg>

        {/* Selected Language Label */}
        <span className={clsx("text-neutral-700 dark:text-neutral-300 font-medium", localActive === "km" && "translate-y-[0.5px]")}>
          {currentLanguage.label}
        </span>

        {/* Chevron Icon */}
        <svg
          className={clsx(
            "w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-32 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-xl rounded-xl py-1 z-[110] animate-in fade-in slide-in-from-top-2 duration-150">
          {inactiveLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="w-full text-left px-4 py-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-colors duration-150"
            >
              <span className={clsx(lang.code === "km" && "translate-y-[0.5px]")}>
                {lang.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
