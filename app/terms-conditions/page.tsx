"use client";

import React from "react";

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F8FAFC] font-sans pt-24 pb-32 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-slate-300 space-y-6">
        <h2 className="text-3xl font-black text-white uppercase tracking-widest mb-8">
          Terms of Service
        </h2>
        <p>
          By purchasing from Apex Archery, you confirm you are of legal age and
          compliant with your local, state, and national laws regarding the
          ownership and importation of archery equipment.
        </p>
        <p>
          We are not liable for customs seizures if you order restricted
          equipment into a jurisdiction that prohibits it.
        </p>
      </div>
    </main>
  );
}
