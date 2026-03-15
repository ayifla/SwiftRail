type BookingStepperProps = {
  currentStep: 1 | 2 | 3;
};

const steps = [
  { id: 1, label: "Select train" },
  { id: 2, label: "Passenger details" },
  { id: 3, label: "Payment" },
];

export default function BookingStepper({ currentStep }: BookingStepperProps) {
  return (
    <ol className="mb-4 flex items-center justify-between gap-2 text-xs sm:text-sm">
      {steps.map((step) => {
        const active = currentStep === step.id;
        const completed = currentStep > step.id;
        return (
          <li key={step.id} className="flex flex-1 items-center gap-2">
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold ${
                completed
                  ? "border-emerald-500 bg-emerald-500 text-white"
                  : active
                    ? "border-primary-500 bg-primary-500 text-white"
                    : "border-slate-300 bg-white text-slate-500 dark:border-slate-700 dark:bg-slate-900"
              }`}
            >
              {step.id}
            </div>
            <span
              className={`whitespace-nowrap text-[11px] font-medium uppercase tracking-wide ${
                active ? "text-primary-600" : "text-slate-500"
              }`}
            >
              {step.label}
            </span>
            {step.id !== steps.length && (
              <div className="hidden flex-1 border-t border-dashed border-slate-300 sm:block dark:border-slate-700" />
            )}
          </li>
        );
      })}
    </ol>
  );
}

