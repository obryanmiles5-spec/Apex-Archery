'use client';
import React from 'react';
import { ShieldCheck, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-[#F8FAFC] font-sans pt-12 pb-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6">Born in the Outback. <br/><span className="text-[#EA580C]">Forged for the World.</span></h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Apex Archery was founded on a singular principle: equipment must not fail when you are days away from civilization. Our origin story is written in the harsh, unforgiving environments of the Australian outback, where extreme temperatures and rugged terrain break inferior gear.
            </p>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Every compound bow, carbon arrow, and broadhead we supply undergoes rigorous endurance testing. From precision cam engineering designed to deliver maximum kinetic energy, to our worldwide fulfillment standards, we ensure that when you draw back, your equipment performs flawlessly.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-[#0A0A0A] p-4 border border-slate-800 flex flex-col items-center text-center">
                <ShieldCheck className="w-8 h-8 text-[#EA580C] mb-3" />
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">100% Limb Guarantee</span>
              </div>
              <div className="bg-[#0A0A0A] p-4 border border-slate-800 flex flex-col items-center text-center">
                <span className="text-2xl font-black text-[#EA580C] mb-1">ABN</span>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">47 331 567 925</span>
              </div>
              <div className="bg-[#0A0A0A] p-4 border border-slate-800 flex flex-col items-center text-center">
                <MapPin className="w-8 h-8 text-[#EA580C] mb-3" />
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Verified Global Courier</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative w-full h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent z-10" />
            <Image 
              src="https://drive.google.com/uc?export=view&id=1CEJrTAESL3K7T64CdRN6Cw0ED_047uac" 
              alt="Archery in the outback" 
              fill
              className="object-cover grayscale opacity-50 border border-slate-800" 
            />
          </div>
        </div>
      </div>
    </main>
  );
}
