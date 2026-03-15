"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = stored === "dark" || (!stored && prefersDark);
    setDark(shouldDark);
    document.documentElement.classList.toggle("dark", shouldDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", next ? "dark" : "light");
    }
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="/swiftrain_logo.jpg"
              alt="SwiftRail Logo"
              width={50}
              height={50}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-lg font-semibold tracking-tight">
              Swift<span className="text-primary-600">Rail</span>
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium text-slate-600 sm:flex dark:text-slate-200">
          <Link href="/search" className="hover:text-primary-600">
            Search
          </Link>
          <Link href="/account" className="hover:text-primary-600">
            My trips
          </Link>
          <Link href="/admin" className="hover:text-primary-600">
            Admin
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={toggleDark} className="btn-ghost" aria-label="Toggle dark mode">
            {dark ? "☾" : "☀"}
          </button>
          <Link href="/account" className="btn-primary text-xs sm:text-sm">
            Login / Signup
          </Link>
        </div>
      </div>
    </header>
  );
}

