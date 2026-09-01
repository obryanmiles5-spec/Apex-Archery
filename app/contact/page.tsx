"use client";

import React from "react";

import { Mail, MapPin, Clock, Phone, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F8FAFC] font-sans pt-12 pb-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">
            Establish Comms
          </h2>
          <p className="text-slate-400">
            Direct line to our Brisbane/Melbourne fulfillment centers.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-[2] bg-[#0F172A] border border-slate-800 p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-2">
                    Operative Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#1E293B] border border-slate-700 text-slate-200 py-3 px-4 text-sm outline-none focus:border-[#EA580C]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-2">
                    Email Designation
                  </label>
                  <input
                    type="email"
                    className="w-full bg-[#1E293B] border border-slate-700 text-slate-200 py-3 px-4 text-sm outline-none focus:border-[#EA580C]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-2">
                    Region / Country
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#1E293B] border border-slate-700 text-slate-200 py-3 px-4 text-sm outline-none focus:border-[#EA580C]"
                    placeholder="Australia"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-2">
                    Bow Model (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#1E293B] border border-slate-700 text-slate-200 py-3 px-4 text-sm outline-none focus:border-[#EA580C]"
                    placeholder="e.g. Outback Stealth"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-2">
                  Intelligence / Inquiry
                </label>
                <textarea
                  className="w-full bg-[#1E293B] border border-slate-700 text-slate-200 py-3 px-4 text-sm outline-none focus:border-[#EA580C] min-h-[150px]"
                  placeholder="Detail your requirements..."
                />
              </div>
              <button
                type="button"
                className="bg-[#EA580C] hover:bg-[#F97316] text-black font-bold py-4 px-8 uppercase tracking-widest text-[11px] transition-colors flex items-center justify-center gap-2"
              >
                Transmit Request <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
          <div className="flex-1 space-y-8">
            <div className="bg-[#1E293B] border border-slate-800 p-6 flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#EA580C] flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-[11px] mb-2">
                  HQ / Workshop
                </h4>
                <p className="text-slate-400 text-sm">
                  100 Precision Drive
                  <br />
                  Brisbane, QLD 4000
                  <br />
                  Australia
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  <strong>Main Business Location:</strong> VIC 3218
                </p>
              </div>
            </div>
            <div className="bg-[#1E293B] border border-slate-800 p-6 flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#EA580C] flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-[11px] mb-2">
                  Comms Line
                </h4>
                <p className="text-slate-400 text-sm">
                  support@apexarchery.com.au
                </p>
              </div>
            </div>
            <div className="bg-[#1E293B] border border-slate-800 p-6 flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#EA580C] flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-[11px] mb-2">
                  Operating Hours (AEST)
                </h4>
                <p className="text-slate-400 text-sm">
                  Mon - Fri: 09:00 - 17:00
                  <br />
                  Sat - Sun: Field Testing (Closed)
                </p>
              </div>
            </div>
            <div className="bg-[#1E293B] border border-slate-800 p-6 flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#EA580C] flex-shrink-0" />
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-[11px] mb-2">
                  Direct WhatsApp
                </h4>
                <p className="text-slate-400 text-sm">+61 400 000 000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
