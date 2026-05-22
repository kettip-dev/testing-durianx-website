"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "@/navigation";
import { searchContent } from "@/common/constant/SearchIndex";
import { gsap } from "gsap";

const CATEGORY_COLORS = {
  Services: "#82C341",
  Solutions: "#3b82f6",
  About: "#f59e0b",
  Blog: "#ec4899",
  FAQ: "#8b5cf6",
  Contact: "#06b6d4",
  Enterprise: "#f97316",
};

export default function SearchBar({ onClose }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [focused, setFocused] = useState(false);
  const router = useRouter();

  /* refs */
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const containerRef = useRef(null);

  /* auto-focus */
  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 80);
  }, []);

  /* animate dropdown in */
  useEffect(() => {
    if (results.length > 0 && dropdownRef.current) {
      const items = dropdownRef.current.querySelectorAll("[data-item]");
      gsap.fromTo(
        items,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out", stagger: 0.045 }
      );
    }
  }, [results]);

  /* search handler */
  const handleChange = useCallback((e) => {
    const val = e.target.value;
    setQuery(val);
    setResults(searchContent(val).slice(0, 7));
  }, []);

  /* go to full results page */
  const goToSearch = (q = query) => {
    if (!q.trim()) return;
    onClose?.();
    router.push(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") goToSearch();
    if (e.key === "Escape") onClose?.();
  };

  const handleResultClick = (href) => {
    onClose?.();
    router.push(href);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto">
      {/* Input */}
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-lg focus-within:border-[#82C341] focus-within:ring-2 focus-within:ring-[#82C341]/20 transition-all duration-200">
        <svg
          className="w-5 h-5 text-neutral-400 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Search services, solutions, blog..."
          className="flex-1 bg-transparent text-sm text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 outline-none"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setResults([]); inputRef.current?.focus(); }}
            className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        {query && (
          <button
            onClick={() => goToSearch()}
            className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg bg-[#82C341] text-white hover:bg-[#6aaa2f] transition-colors"
          >
            Search
          </button>
        )}
      </div>

      {/* Dropdown */}
      {focused && results.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl z-[200] overflow-hidden"
        >
          {results.map((item, i) => (
            <button
              key={i}
              data-item
              onMouseDown={() => handleResultClick(item.href)}
              className="w-full flex items-start gap-3 px-4 py-3 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition-colors border-b border-neutral-100/50 dark:border-neutral-800/50 last:border-b-0 group"
            >
              {/* Category dot */}
              <span
                className="mt-1 w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: CATEGORY_COLORS[item.category] || "#82C341" }}
              />
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100 group-hover:text-[#82C341] transition-colors truncate">
                  {item.title}
                </span>
                <span className="text-xs text-neutral-400 dark:text-neutral-500 truncate mt-0.5">
                  {item.category} · {item.desc.slice(0, 60)}…
                </span>
              </div>
              <svg className="ml-auto w-4 h-4 text-neutral-300 group-hover:text-[#82C341] shrink-0 mt-0.5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}

          {/* View all */}
          <button
            onMouseDown={() => goToSearch()}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-[#82C341] hover:bg-[#82C341]/5 transition-colors"
          >
            View all results for &quot;{query}&quot;
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* No results */}
      {focused && query.trim().length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xl z-[200] px-6 py-8 text-center">
          <p className="text-sm text-neutral-400">No results for <strong className="text-neutral-600 dark:text-neutral-300">&quot;{query}&quot;</strong></p>
          <p className="text-xs text-neutral-400 mt-1">Try different keywords</p>
        </div>
      )}
    </div>
  );
}
