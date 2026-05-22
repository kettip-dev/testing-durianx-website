/**
 * Centralized search index — all searchable content on the site.
 * Each entry: { title, desc, category, href, tags[] }
 */
export const SEARCH_INDEX = [

  // ── HOME ──────────────────────────────────────────────────
  {
    title: "Home",
    desc: "DurianX — Cambodia's leading super-app for food delivery, transport, parcels, and more. One app for everything.",
    category: "Home",
    href: "/",
    tags: ["home", "durian", "super app", "cambodia", "main"],
  },

  // ── SERVICES ──────────────────────────────────────────────
  {
    title: "All Services",
    desc: "Explore the full range of DurianX services: food, grocery, express delivery, transport, and more.",
    category: "Services",
    href: "/services",
    tags: ["services", "all", "overview"],
  },
  {
    title: "Food Delivery",
    desc: "Satisfy your hunger anytime, anywhere. Local street eats and restaurant favorites delivered to your door.",
    category: "Services",
    href: "/services#food",
    tags: ["food", "delivery", "restaurant", "eat", "meal", "hungry", "order"],
  },
  {
    title: "Grocery Delivery",
    desc: "Shop smart, get fresh. Fast delivery of daily essentials and fresh produce from local markets.",
    category: "Services",
    href: "/services#grocery",
    tags: ["grocery", "fresh", "market", "shop", "vegetable", "fruit", "daily"],
  },
  {
    title: "Express Parcel Services",
    desc: "Quick, hassle-free city-wide package delivery for personal or business needs.",
    category: "Services",
    href: "/services#express",
    tags: ["parcel", "express", "package", "shipping", "delivery", "courier"],
  },
  {
    title: "Transport & Rides",
    desc: "Book rides easily and get to your destination with reliable local drivers across Cambodia.",
    category: "Services",
    href: "/services#transport",
    tags: ["transport", "ride", "car", "taxi", "driver", "book", "trip"],
  },
  {
    title: "DurianX Super-App",
    desc: "One app, many services. Food, grocery, parcel, transport — all in one place, built for Cambodia.",
    category: "Services",
    href: "/services",
    tags: ["super app", "all in one", "cambodia", "app", "platform"],
  },

  // ── SOLUTIONS ─────────────────────────────────────────────
  {
    title: "Solutions Overview",
    desc: "Discover how DurianX empowers drivers, merchants, and enterprises with technology-driven solutions.",
    category: "Solutions",
    href: "/solution",
    tags: ["solutions", "overview", "platform", "technology"],
  },
  {
    title: "Drive & Deliver",
    desc: "Earn with flexible working hours delivering meals and packages across the city as a DurianX partner.",
    category: "Solutions",
    href: "/solution#partners",
    tags: ["driver", "deliver", "earn", "partner", "flexible", "income", "job"],
  },
  {
    title: "Driver Support & Benefits",
    desc: "24/7 support, insurance, and benefits for all DurianX driver partners.",
    category: "Solutions",
    href: "/solution#support",
    tags: ["driver", "support", "insurance", "benefit", "help"],
  },
  {
    title: "Merchant Partner",
    desc: "Grow your store sales with our digital platform, competitive commissions, and daily payouts.",
    category: "Solutions",
    href: "/solution#partners",
    tags: ["merchant", "store", "business", "partner", "revenue", "sell", "shop"],
  },
  {
    title: "Food Business",
    desc: "List your restaurant or food stall on DurianX and reach thousands of hungry customers daily.",
    category: "Solutions",
    href: "/services#food",
    tags: ["food", "business", "restaurant", "list", "merchant"],
  },
  {
    title: "Advertising & Promotions",
    desc: "Boost your brand visibility with DurianX in-app advertising and promotional campaigns.",
    category: "Solutions",
    href: "/solution#tracking",
    tags: ["advertising", "promotion", "brand", "marketing", "campaign"],
  },
  {
    title: "Real-Time Tracking",
    desc: "Stay informed with accurate real-time GPS tracking for all your deliveries and rides.",
    category: "Solutions",
    href: "/solution#tracking",
    tags: ["tracking", "real time", "location", "map", "gps", "live"],
  },
  {
    title: "Trust & Safety",
    desc: "Everything DurianX does to ensure your safety, security, and trust on every journey.",
    category: "Solutions",
    href: "/solution",
    tags: ["safety", "trust", "secure", "insurance", "verified"],
  },
  {
    title: "Corporate Commute",
    desc: "Manage employee travel and transport efficiently with our enterprise commute solution.",
    category: "Solutions",
    href: "/solution",
    tags: ["corporate", "enterprise", "commute", "employee", "business", "company"],
  },
  {
    title: "Gift Cards",
    desc: "Reward employees and partners with DurianX gift cards redeemable across all services.",
    category: "Solutions",
    href: "/solution",
    tags: ["gift", "card", "reward", "voucher", "corporate", "employee"],
  },
  {
    title: "Map API",
    desc: "Advanced mapping and location services APIs for enterprise logistics and delivery systems.",
    category: "Solutions",
    href: "/solution#tracking",
    tags: ["map", "api", "location", "gps", "developer", "logistics", "enterprise"],
  },

  // ── ABOUT ─────────────────────────────────────────────────
  {
    title: "About DurianX",
    desc: "Empowering Cambodia's vibrant digital economy by connecting people, services, and communities.",
    category: "About",
    href: "/about",
    tags: ["about", "company", "durian", "cambodia", "mission", "vision"],
  },
  {
    title: "Company Story",
    desc: "Learn how DurianX started and grew to become Cambodia's leading super-app platform.",
    category: "About",
    href: "/about",
    tags: ["story", "history", "founding", "company", "origin"],
  },
  {
    title: "Careers at DurianX",
    desc: "Join our mission to move Cambodia forward. Explore open roles across engineering, operations, and more.",
    category: "About",
    href: "/about",
    tags: ["career", "job", "hiring", "work", "team", "vacancy", "recruit"],
  },
  {
    title: "DurianX Foundation",
    desc: "Our foundation helping elevate Cambodian communities through education, environment, and social impact.",
    category: "About",
    href: "/about",
    tags: ["foundation", "community", "social", "impact", "ngo", "csr", "charity"],
  },
  {
    title: "Investors",
    desc: "DurianX investor relations — learn about our growth story and funding journey.",
    category: "About",
    href: "/about",
    tags: ["investor", "funding", "raise", "series", "vc", "venture"],
  },
  {
    title: "DurianX Locations",
    desc: "Find DurianX service areas and office locations across Cambodia.",
    category: "About",
    href: "/about",
    tags: ["location", "office", "phnom penh", "city", "cambodia", "coverage"],
  },
  {
    title: "Social Impact",
    desc: "How DurianX contributes to economic growth and community development across Cambodia.",
    category: "About",
    href: "/about",
    tags: ["impact", "social", "community", "sustainable", "csr"],
  },
  {
    title: "Newsroom",
    desc: "Latest press releases, announcements and media coverage about DurianX.",
    category: "About",
    href: "/blog",
    tags: ["news", "press", "media", "announcement", "coverage"],
  },

  // ── BLOG ─────────────────────────────────────────────────
  {
    title: "Blog & Insights",
    desc: "Essential insights from technology, AI, logistics, and the world of super-app development.",
    category: "Blog",
    href: "/blog",
    tags: ["blog", "news", "tech", "ai", "article", "insight", "read"],
  },
  {
    title: "Technology Articles",
    desc: "Deep dives into the tech powering DurianX — from real-time routing to AI recommendations.",
    category: "Blog",
    href: "/blog",
    tags: ["tech", "technology", "ai", "algorithm", "engineering", "software"],
  },
  {
    title: "Driver Stories",
    desc: "Real stories from DurianX driver partners and how they are building a better life.",
    category: "Blog",
    href: "/blog",
    tags: ["driver", "story", "partner", "life", "earn"],
  },
  {
    title: "Business Growth Tips",
    desc: "Advice for merchants on how to grow their business with DurianX's platform.",
    category: "Blog",
    href: "/blog",
    tags: ["business", "merchant", "tips", "grow", "revenue", "sales"],
  },

  // ── FAQ ───────────────────────────────────────────────────
  {
    title: "FAQ & Help Center",
    desc: "Answers to the most common questions about DurianX services, accounts, payments, and deliveries.",
    category: "FAQ",
    href: "/faq",
    tags: ["faq", "help", "question", "answer", "support", "common"],
  },
  {
    title: "API Documentation",
    desc: "DurianX provides developers complete access to our knowledge base, APIs, and integration docs.",
    category: "FAQ",
    href: "/faq",
    tags: ["api", "docs", "documentation", "developer", "integrate", "sdk"],
  },
  {
    title: "Payment & Billing",
    desc: "How to pay, manage your wallet, and understand billing on DurianX.",
    category: "FAQ",
    href: "/faq",
    tags: ["payment", "billing", "wallet", "money", "pay", "refund", "charge"],
  },
  {
    title: "Account & Profile",
    desc: "Manage your DurianX account, update profile details, and handle security settings.",
    category: "FAQ",
    href: "/faq",
    tags: ["account", "profile", "login", "password", "security", "settings"],
  },
  {
    title: "Delivery Issues",
    desc: "What to do if your order is late, incorrect, or if you have other delivery problems.",
    category: "FAQ",
    href: "/faq",
    tags: ["delivery", "late", "issue", "problem", "wrong", "missing", "order"],
  },

  // ── CONTACT ───────────────────────────────────────────────
  {
    title: "Contact Us",
    desc: "Reach our support and partnership team. We're here to help you grow with DurianX.",
    category: "Contact",
    href: "/contact",
    tags: ["contact", "email", "phone", "reach", "touch", "message", "support"],
  },
  {
    title: "Business Partnership",
    desc: "Interested in partnering with DurianX? Get in touch with our partnerships team.",
    category: "Contact",
    href: "/contact",
    tags: ["partnership", "business", "collaborate", "deal", "b2b"],
  },
  {
    title: "Customer Support",
    desc: "24/7 customer support via in-app chat, email, and phone for all DurianX users.",
    category: "Contact",
    href: "/contact",
    tags: ["support", "customer", "help", "24/7", "chat", "call"],
  },
];

/**
 * Search the index. Returns results scored by relevance.
 * @param {string} query
 * @returns {Array}
 */
export function searchContent(query) {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  const tokens = q.split(/\s+/);

  const scored = SEARCH_INDEX.map((item) => {
    let score = 0;
    for (const token of tokens) {
      if (item.title.toLowerCase().includes(token))    score += 10;
      if (item.category.toLowerCase().includes(token)) score += 5;
      if ((item.tags || []).some((t) => t.includes(token))) score += 4;
      if (item.desc.toLowerCase().includes(token))     score += 2;
    }
    return { ...item, score };
  });

  return scored
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);
}
