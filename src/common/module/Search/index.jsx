"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/navigation";
import { Link } from "@/navigation";
import { searchContent, SEARCH_INDEX } from "@/common/constant/SearchIndex";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CATEGORY_COLORS = {
  Services: "#82C341",
  Solutions: "#3b82f6",
  About: "#f59e0b",
  Blog: "#ec4899",
  FAQ: "#8b5cf6",
  Contact: "#06b6d4",
  Enterprise: "#f97316",
};

const ALL_CATEGORIES = ["All", ...Array.from(new Set(SEARCH_INDEX.map((i) => i.category)))];

/* ── Highlighted text ── */
function Highlight({ text, query }) {
  if (!query) return <>{text}</>;
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
  return (
    <>
      {parts.map((p, i) =>
        p.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="bg-[#82C341]/25 text-[#4a7a1e] dark:text-[#a8e063] rounded px-0.5 font-bold not-italic">
            {p}
          </mark>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

/* ── Result Card ── */
function ResultCard({ item, query, index }) {
  const cardRef = useRef(null);
  const accentColor = CATEGORY_COLORS[item.category] || "#82C341";

  return (
    <Link
      href={item.href}
      data-card
      ref={cardRef}
      className="group flex items-start gap-4 p-5 rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/50 hover:border-[#82C341]/40 hover:shadow-lg hover:shadow-[#82C341]/8 transition-all duration-300 hover:-translate-y-0.5"
      style={{ backdropFilter: "blur(6px)" }}
    >
      {/* Category accent bar */}
      <div
        className="w-1 self-stretch rounded-full shrink-0"
        style={{ backgroundColor: accentColor, minHeight: 48 }}
      />

      <div className="flex flex-col gap-1.5 min-w-0 flex-1">
        {/* Category pill */}
        <span
          className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider w-fit px-2 py-0.5 rounded-full"
          style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
          {item.category}
        </span>

        <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-[#82C341] transition-colors duration-200 leading-snug">
          <Highlight text={item.title} query={query} />
        </h3>

        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2">
          <Highlight text={item.desc} query={query} />
        </p>

        {/* URL breadcrumb */}
        <span className="text-xs text-neutral-400 dark:text-neutral-600 font-medium mt-0.5">
          durianx.com{item.href}
        </span>
      </div>

      <svg
        className="w-5 h-5 text-neutral-300 dark:text-neutral-700 group-hover:text-[#82C341] shrink-0 mt-1 transition-colors duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

/* ════════════════════ Page ════════════════════ */
export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQ = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQ);
  const [inputVal, setInputVal] = useState(initialQ);
  const [activeCategory, setActiveCategory] = useState("All");
  const [results, setResults] = useState([]);

  /* refs */
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);
  const filtersRef = useRef(null);
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);

  /* ── run search ── */
  useEffect(() => {
    setResults(searchContent(query));
    setActiveCategory("All");
  }, [query]);

  /* ── filtered results ── */
  const filtered = activeCategory === "All"
    ? results
    : results.filter((r) => r.category === activeCategory);

  /* ── page entrance GSAP ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* glow pulse */
      gsap.to(glow1Ref.current, { scale: 1.3, opacity: 0.2, duration: 4, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(glow2Ref.current, { scale: 1.25, opacity: 0.15, duration: 5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1 });

      /* hero entrance */
      const tl = gsap.timeline({ delay: 0.05 });
      tl.fromTo(headlineRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      tl.fromTo(inputRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4");
      tl.fromTo(filtersRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.3");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  /* ── animate result cards ── */
  const animateCards = useCallback(() => {
    if (!resultsRef.current) return;
    const cards = resultsRef.current.querySelectorAll("[data-card]");
    gsap.fromTo(
      cards,
      { y: 24, opacity: 0, scale: 0.97 },
      { y: 0, opacity: 1, scale: 1, duration: 0.45, ease: "power3.out", stagger: { amount: 0.3 } }
    );
  }, []);

  useEffect(() => {
    const id = setTimeout(animateCards, 60);
    return () => clearTimeout(id);
  }, [filtered.length, activeCategory, animateCards]);

  /* ── submit ── */
  const handleSubmit = (e) => {
    e.preventDefault();
    const q = inputVal.trim();
    if (!q) return;
    setQuery(q);
    router.replace(`/search?q=${encodeURIComponent(q)}`, { scroll: false });
  };

  /* ── popular suggestions ── */
  const suggestions = ["Food Delivery", "Driver", "Merchant", "FAQ", "Corporate"];

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Glows */}
      <div ref={glow1Ref} className="fixed top-20 left-10 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #82C34122 0%, transparent 70%)", filter: "blur(80px)" }} />
      <div ref={glow2Ref} className="fixed bottom-20 right-10 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #3b82f622 0%, transparent 70%)", filter: "blur(90px)" }} />

      {/* ── Hero Search Bar ── */}
      <div className="relative pt-32 pb-10 px-6 md:px-12 max-w-4xl mx-auto">
        {/* Headline */}
        <div ref={headlineRef} className="mb-8 text-center">
          {query ? (
            <>
              <p className="text-sm font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2">Search Results</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-neutral-50">
                Results for{" "}
                <span className="text-[#82C341]">&ldquo;{query}&rdquo;</span>
              </h1>
              <p className="mt-3 text-base text-neutral-500 dark:text-neutral-400">
                {results.length > 0
                  ? `${results.length} result${results.length !== 1 ? "s" : ""} found`
                  : "No results found"}
              </p>
            </>
          ) : (
            <>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-900 dark:text-neutral-50 mb-3">
                What are you looking for?
              </h1>
              <p className="text-base text-neutral-500 dark:text-neutral-400">
                Search across all services, solutions, and content on DurianX.
              </p>
            </>
          )}
        </div>

        {/* Search input */}
        <form ref={inputRef} onSubmit={handleSubmit} className="relative">
          <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-xl focus-within:border-[#82C341] focus-within:ring-4 focus-within:ring-[#82C341]/15 transition-all duration-300">
            <svg className="w-5 h-5 text-neutral-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Search services, solutions, blog..."
              className="flex-1 bg-transparent text-base text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 outline-none"
              autoFocus
            />
            {inputVal && (
              <button type="button" onClick={() => { setInputVal(""); setQuery(""); setResults([]); }} className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            <button
              type="submit"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-[#82C341] hover:bg-[#6aaa2f] text-white text-sm font-bold transition-colors duration-200 shadow-sm"
            >
              Search
            </button>
          </div>
        </form>

        {/* Suggestions */}
        {!query && (
          <div className="flex flex-wrap gap-2 justify-center mt-5">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => { setInputVal(s); setQuery(s); router.replace(`/search?q=${encodeURIComponent(s)}`); }}
                className="text-sm px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-[#82C341] hover:text-[#82C341] transition-colors duration-200"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Results Area ── */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pb-24">

        {/* Category filter pills */}
        {results.length > 0 && (
          <div ref={filtersRef} className="flex flex-wrap gap-2 mb-8">
            {ALL_CATEGORIES.filter(
              (cat) => cat === "All" || results.some((r) => r.category === cat)
            ).map((cat) => {
              const isActive = activeCategory === cat;
              const color = CATEGORY_COLORS[cat] || "#82C341";
              const count = cat === "All" ? results.length : results.filter((r) => r.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full border transition-all duration-200"
                  style={
                    isActive
                      ? { backgroundColor: color, borderColor: color, color: "#fff" }
                      : { backgroundColor: "transparent", borderColor: "#e5e7eb", color: "#6b7280" }
                  }
                >
                  {cat}
                  <span
                    className="text-[10px] px-1.5 py-0.5 rounded-full font-black"
                    style={
                      isActive
                        ? { backgroundColor: "rgba(255,255,255,0.25)", color: "#fff" }
                        : { backgroundColor: "#f3f4f6", color: "#374151" }
                    }
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Cards */}
        {filtered.length > 0 ? (
          <div ref={resultsRef} className="flex flex-col gap-3">
            {filtered.map((item, i) => (
              <ResultCard key={`${item.href}-${i}`} item={item} query={query} index={i} />
            ))}
          </div>
        ) : query ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-neutral-700 dark:text-neutral-300">
              No results for &ldquo;{query}&rdquo;
            </h2>
            <p className="text-sm text-neutral-400 max-w-xs">
              Try different keywords, check your spelling, or explore our popular topics below.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => { setInputVal(s); setQuery(s); router.replace(`/search?q=${encodeURIComponent(s)}`); }}
                  className="text-sm px-4 py-1.5 rounded-full bg-[#82C341]/10 text-[#82C341] hover:bg-[#82C341]/20 font-semibold transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Empty / no query — show all categories */
          <div>
            <p className="text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-6">Browse by Category</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {ALL_CATEGORIES.filter(c => c !== "All").map((cat) => {
                const color = CATEGORY_COLORS[cat] || "#82C341";
                const count = SEARCH_INDEX.filter(i => i.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => { setInputVal(cat); setQuery(cat); router.replace(`/search?q=${encodeURIComponent(cat)}`); }}
                    className="group flex items-center gap-3 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-opacity-60 transition-all duration-200 text-left hover:shadow-md"
                    style={{ "--accent": color }}
                  >
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: color }} />
                    <div>
                      <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-[#82C341] transition-colors">{cat}</p>
                      <p className="text-xs text-neutral-400">{count} item{count !== 1 ? "s" : ""}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
