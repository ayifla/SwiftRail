"use client";

import { QRCodeCanvas } from "qrcode.react";

type TicketViewProps = {
  id: string;
};

export default function TicketView({ id }: TicketViewProps) {
  const ticketData = {
    id,
    trainName: "Swift Express 101",
    from: "New Delhi",
    to: "Mumbai Central",
    departure: "06:30, 20 Mar 2026",
    arrival: "11:45, 20 Mar 2026",
    passengerName: "Alex Passenger",
    age: 28,
    gender: "M",
    seat: "B1-32 (Lower)",
    coach: "B1",
  };

  return (
    <div className="w-full space-y-4">
      <div className="card flex flex-col gap-4 md:flex-row md:items-start">
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Ticket ID</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{ticketData.id}</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
              Confirmed
            </span>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Train</p>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{ticketData.trainName}</p>
          </div>

          <div className="grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">From</p>
              <p className="font-semibold text-slate-900 dark:text-slate-50">{ticketData.from}</p>
              <p className="text-xs text-slate-500">{ticketData.departure}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">To</p>
              <p className="font-semibold text-slate-900 dark:text-slate-50">{ticketData.to}</p>
              <p className="text-xs text-slate-500">{ticketData.arrival}</p>
            </div>
          </div>

          <div className="grid gap-4 text-sm sm:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Passenger</p>
              <p className="font-semibold text-slate-900 dark:text-slate-50">{ticketData.passengerName}</p>
              <p className="text-xs text-slate-500">
                {ticketData.age} yrs · {ticketData.gender}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Coach</p>
              <p className="font-semibold text-slate-900 dark:text-slate-50">{ticketData.coach}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Seat</p>
              <p className="font-semibold text-slate-900 dark:text-slate-50">{ticketData.seat}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-xs text-slate-500 dark:border-slate-700 dark:bg-slate-900">
          <QRCodeCanvas value={JSON.stringify(ticketData)} size={120} />
          <p className="text-center">
            Scan at station gates or inside the coach for quick verification. Keep a soft copy handy.
          </p>
          <button className="btn-ghost text-xs">Download PDF</button>
        </div>
      </div>
    </div>
  );
}

