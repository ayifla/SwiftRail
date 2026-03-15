import Link from "next/link";

type TicketCardProps = {
  id: string;
  trainName: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  passengerName: string;
  seat: string;
};

export default function TicketCard({
  id,
  trainName,
  from,
  to,
  departure,
  arrival,
  passengerName,
  seat,
}: TicketCardProps) {
  return (
    <article className="card flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex-1">
        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">{trainName}</h3>
        <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
          {from} → {to}
        </p>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
          <span className="font-semibold">{passengerName}</span> · Seat {seat}
        </p>
        <p className="mt-1 text-xs text-slate-500">
          {departure} – {arrival}
        </p>
      </div>
      <div className="flex flex-col items-end gap-2 text-sm sm:w-32">
        <Link href={`/tickets/${id}`} className="btn-primary w-full sm:w-auto">
          View ticket
        </Link>
        <button className="btn-ghost text-xs">Download PDF</button>
      </div>
    </article>
  );
}

