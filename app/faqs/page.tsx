"use client";

import React from "react";

import { faqs } from "@/lib/data";

import * as Accordion from "@radix-ui/react-accordion";

import { ChevronRight } from "lucide-react";

export default function FaqsPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-[#F8FAFC] font-sans pt-12 pb-24 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400">
            Everything you need to know about our tactical archery gear.
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="bg-[#1E293B] border border-slate-800 overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left group">
                  <span className="font-bold uppercase tracking-widest text-slate-200 text-sm group-hover:text-[#EA580C] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-data-[state=open]:rotate-90 transition-transform" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 text-slate-400 text-sm leading-relaxed overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </main>
  );
}
