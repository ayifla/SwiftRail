"use client";

import { useEffect, useState } from "react";
import TicketCard from "../../components/TicketCard";

export default function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : null;
    setIsLoggedIn(Boolean(token));
  }, []);

  const handleAuth = () => {
    if (!isLoggedIn) {
      setIsLoggedIn(true);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("token", "demo-token");
      }
    } else {
      setIsLoggedIn(false);
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("token");
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          {isLoggedIn ? "My trips" : "Login / Signup"}
        </h1>
        <button className="btn-primary" onClick={handleAuth}>
          {isLoggedIn ? "Logout" : "Continue with demo account"}
        </button>
      </div>

      {!isLoggedIn && (
        <p className="text-sm text-slate-600 dark:text-slate-300">
          In a real app this section connects to the backend auth API (email/OTP, etc.). For now, use the demo account
          to preview the flow.
        </p>
      )}

      {isLoggedIn && (
        <div className="space-y-3">
          <TicketCard
            id="sample-ticket"
            trainName="Swift Express 101"
            from="New Delhi"
            to="Mumbai Central"
            departure="06:30"
            arrival="11:45"
            passengerName="Alex Passenger"
            seat="B1-32"
          />
        </div>
      )}
    </div>
  );
}

