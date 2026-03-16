"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import BookingStepper from "../../components/BookingStepper";
import PassengerForm from "../../components/PassengerForm";

function BookingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(2);
  const [loading, setLoading] = useState(false);
  const [passenger, setPassenger] = useState({
    name: "",
    age: "",
    gender: "",
    seatPreference: "",
  });

  const trainId = searchParams.get("trainId");

  const handleConfirmPassenger = () => {
    setStep(3);
  };

  const handlePay = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000"}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trainId, passenger }),
      });
      const data = await res.json();
      router.push(`/tickets/${data.id ?? "sample-ticket"}`);
    } catch {
      router.push("/tickets/sample-ticket");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full space-y-4">
      <BookingStepper currentStep={step} />
      <div className="grid gap-4 md:grid-cols-[1.5fr,1fr]">
        {step === 2 && (
          <div>
            <PassengerForm value={passenger} onChange={setPassenger} />
            <div className="mt-4 flex justify-end">
              <button onClick={handleConfirmPassenger} className="btn-primary">
                Continue to payment
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="card space-y-4">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50">Payment</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              For demo purposes this is a one-tap payment. Integrate your preferred PSP (Razorpay, etc.) here.
            </p>
            <button onClick={handlePay} className="btn-primary w-full" disabled={loading}>
              {loading ? "Processing..." : "Pay & book ticket"}
            </button>
          </div>
        )}

        <aside className="space-y-3">
          <div className="card text-sm">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">Trip summary</h3>
            <p className="mt-1 text-xs text-slate-500">
              Train ID: {trainId ?? "Not selected"} · Date: {searchParams.get("date") ?? "—"}
            </p>
          </div>
          <div className="card text-xs text-slate-500">
            <p>All payments are secured with industry-standard encryption. You&apos;ll receive an SMS and email instantly.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="p-4 text-sm text-slate-500">Loading booking...</div>}>
      <BookingContent />
    </Suspense>
  );
}

