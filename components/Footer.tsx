export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-4 text-xs text-slate-500 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} SwiftRail. All rights reserved.</p>
        <p className="hidden sm:block">Built for speed, clarity, and comfort.</p>
      </div>
    </footer>
  );
}

