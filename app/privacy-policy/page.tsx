"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-[#F8FAFC] font-sans pt-24 pb-32 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-slate-300 space-y-6">
        <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-8">
          Privacy Policy
        </h2>
        <p>
          Your intelligence is secure. We collect only necessary operational
          data (name, email, shipping address) to fulfill orders and communicate
          regarding your arsenal.
        </p>
        <p>
          Payment processing is handled via secure, encrypted third-party
          gateways. We do not store credit card information on our servers.
        </p>
      </div>
    </main>
  );
}
