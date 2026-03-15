type TrainCardProps = {
  id: string;
  name: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  seatsAvailable: number;
  price: number;
  className?: string;
  onBook?: () => void;
};

export default function TrainCard({
  name,
  from,
  to,
  departure,
  arrival,
  duration,
  seatsAvailable,
  price,
  className,
  onBook,
}: TrainCardProps) {
  return (
    <article className={`card flex flex-col gap-4 ${className ?? ""}`}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">{name}</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {from} → {to}
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            <span className="font-medium">{departure}</span>
            <span className="mx-2 text-slate-400">|</span>
            <span className="font-medium">{arrival}</span>
          </p>
          <p className="mt-1 text-xs text-slate-500">Duration: {duration}</p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1 text-sm">
          <p className={`font-semibold ${seatsAvailable > 20 ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"}`}>
            {seatsAvailable > 0 ? `${seatsAvailable} seats available` : "Waitlist"}
          </p>
          <p className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            ₹{price.toLocaleString("en-IN")}
          </p>
        </div>
      </div>
      <div className="border-t border-slate-200 pt-3 dark:border-slate-700">
        <button type="button" onClick={onBook} className="btn-primary w-full sm:w-auto">
          Book Ticket
        </button>
      </div>
    </article>
  );
}
