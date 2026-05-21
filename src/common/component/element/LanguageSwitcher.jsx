"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <select
        defaultValue={localActive}
        className="bg-transparent text-sm font-medium focus:outline-none appearance-none cursor-pointer pr-4"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en" className="dark:bg-black">EN</option>
        <option value="km" className="dark:bg-black">KM</option>
      </select>
      <div className="absolute right-0 pointer-events-none">
        <svg
          className="w-4 h-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </label>
  );
}
