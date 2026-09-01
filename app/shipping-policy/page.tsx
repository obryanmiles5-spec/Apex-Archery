"use client";

import React from "react";

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-[#F8FAFC] font-sans pt-24 pb-32 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-slate-300 space-y-6">
        <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-8">
          Shipping Policy
        </h2>
        <p>
          We leverage verified global courier integrations to dispatch our
          equipment worldwide. Minimum order requirements apply for
          international freight.
        </p>
        <p>
          Dispatch occurs within 24-48 hours of order confirmation. Delivery
          times vary from 2-5 days domestically (Australia) to 7-14 days
          internationally.
        </p>
        <h3 className="text-xl font-bold text-white uppercase tracking-widest mt-8 mb-4">
          Minimum Orders
        </h3>
        <p>
          Due to the tactical nature of our logistics, a minimum order value of
          £100 / $200 AUD is strictly enforced to unlock checkout capabilities.
        </p>
      </div>
    </main>
  );
}
