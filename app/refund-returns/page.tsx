"use client";

import React from "react";

export default function RefundReturnsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F8FAFC] font-sans pt-24 pb-32 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-slate-300 space-y-6">
        <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-8">
          Refund & Returns (ACL Compliant)
        </h2>
        <p>
          In accordance with Australian Consumer Law, we offer refunds, repairs,
          or replacements for major faults. Our 100% Limb Guarantee covers
          structural failures under normal operating conditions.
        </p>
        <p>
          Change of mind returns are accepted within 30 days provided the
          equipment is un-fired, in original packaging, and in pristine
          condition.
        </p>
      </div>
    </main>
  );
}
