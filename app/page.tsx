import SearchForm from "../components/SearchForm";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col gap-8 pt-4 sm:pt-8">
      <section className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
            Book train tickets in{" "}
            <span className="bg-gradient-to-r from-primary-500 to-emerald-500 bg-clip-text text-transparent">
              3 simple steps
            </span>
            .
          </h1>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
            No clutter, no confusion. Search trains, check live seat availability, and book in under a minute on mobile
            or desktop.
          </p>
          <ul className="flex flex-wrap gap-2 text-xs text-slate-600 sm:text-sm dark:text-slate-300">
            <li className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">Smart station suggestions</li>
            <li className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">Real-time seat status</li>
            <li className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">Mobile-first design</li>
          </ul>
        </div>

        <div className="relative">
          <div className="card relative overflow-hidden">
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-500/10" />
            <div className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-3xl bg-emerald-500/10" />
            <div className="relative space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Step 1: Search</span>
                <span>Step 2: Passenger</span>
                <span>Step 3: Pay</span>
              </div>
              <div className="h-1 rounded-full bg-slate-100 dark:bg-slate-800">
                <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-primary-500 to-emerald-500" />
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-200">
                Designed to stay usable even on low bandwidth and small screens.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SearchForm />
      </section>
    </div>
  );
}

