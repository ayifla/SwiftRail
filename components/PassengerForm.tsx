"use client";

type Passenger = {
  name: string;
  age: string;
  gender: string;
  seatPreference: string;
};

type PassengerFormProps = {
  value: Passenger;
  onChange: (next: Passenger) => void;
};

export default function PassengerForm({ value, onChange }: PassengerFormProps) {
  const update = (patch: Partial<Passenger>) => onChange({ ...value, ...patch });

  return (
    <div className="card space-y-4">
      <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50">Passenger details</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs font-medium uppercase tracking-wide text-slate-500">Name</label>
          <input
            value={value.name}
            onChange={(e) => update({ name: e.target.value })}
            placeholder="Full name"
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:border-slate-700 dark:bg-slate-900"
            required
          />
        </div>
        <div>
          <label className="text-xs font-medium uppercase tracking-wide text-slate-500">Age</label>
          <input
            type="number"
            min={1}
            max={120}
            value={value.age}
            onChange={(e) => update({ age: e.target.value })}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:border-slate-700 dark:bg-slate-900"
            required
          />
        </div>
        <div>
          <label className="text-xs font-medium uppercase tracking-wide text-slate-500">Gender</label>
          <select
            value={value.gender}
            onChange={(e) => update({ gender: e.target.value })}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:border-slate-700 dark:bg-slate-900"
            required
          >
            <option value="">Select</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-medium uppercase tracking-wide text-slate-500">Seat preference</label>
          <select
            value={value.seatPreference}
            onChange={(e) => update({ seatPreference: e.target.value })}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:border-slate-700 dark:bg-slate-900"
          >
            <option value="">No preference</option>
            <option value="LOWER">Lower berth</option>
            <option value="MIDDLE">Middle berth</option>
            <option value="UPPER">Upper berth</option>
            <option value="SIDE-LOWER">Side lower</option>
            <option value="SIDE-UPPER">Side upper</option>
            <option value="WINDOW">Window seat</option>
          </select>
        </div>
      </div>
    </div>
  );
}

