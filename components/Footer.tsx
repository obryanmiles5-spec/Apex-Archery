"use client";

import React from "react";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-24 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <svg
                width="32"
                height="32"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="#EA580C"
                  fillOpacity="0.1"
                />
                <path
                  d="M 50 5 A 45 45 0 0 1 95 50"
                  stroke="#EA580C"
                  strokeWidth="4"
                />
                <path
                  d="M50 20 L75 80 L50 65 L25 80 Z"
                  fill="#0F172A"
                  stroke="#EA580C"
                  strokeWidth="4"
                />
                <line
                  x1="50"
                  y1="20"
                  x2="50"
                  y2="85"
                  stroke="#EA580C"
                  strokeWidth="4"
                />
              </svg>
              <span className="text-2xl font-black text-white tracking-tighter uppercase">
                APEX<span className="text-[#EA580C]">Archery</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Engineered for the extremes of the Australian outback. We supply
              uncompromising tactical archery equipment to hunters and
              competitive shooters worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-[11px] mb-6">
              Equipment
            </h4>
            <ul className="space-y-4">
              {[
                "Compound Bows",
                "Traditional Bows",
                "Recurve Bows",
                "Carbon Arrows",
                "Broadheads",
                "Accessories",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="/shop"
                    className="text-slate-400 hover:text-[#EA580C] text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-[11px] mb-6">
              Headquarters
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>100 Precision Drive</li>
              <li>Brisbane, QLD 4000</li>
              <li>Australia</li>
              <li className="pt-2 text-[#EA580C]">
                support@apexarchery.com.au
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-[11px] mb-6">
              Secure Comms
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Join our operative list for early access to prototype releases.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="ENTER EMAIL"
                className="bg-[#1E293B] border border-slate-800 text-white px-4 py-3 text-sm flex-1 outline-none focus:border-[#EA580C]"
              />
              <button
                type="submit"
                className="bg-[#EA580C] text-black px-4 py-3 font-bold uppercase tracking-widest text-[10px] hover:bg-[#F97316] transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-[10px] uppercase tracking-widest">
            &copy;
            {new Date().getFullYear()} Apex Archery Australia. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-[10px] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Global Network Online
          </div>
        </div>
      </div>
    </footer>
  );
}
