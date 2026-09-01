"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "motion/react";

import { ShoppingCart, Menu, X } from "lucide-react";

import { useCart } from "@/components/CartContext";

import Link from "next/link";

export function Header() {
  const { items, setIsCartOpen, currency, setCurrency } = useCart();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {/* 1. Top Mini Announcement Ticker */}
      <div className="bg-[#EA580C] text-black text-[10px] font-bold uppercase tracking-widest py-2 flex justify-center items-center overflow-hidden whitespace-nowrap border-b border-black/20">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="inline-block flex gap-6"
        >
          <span>Entity name: MILLER-STAWYSKYJ, DAMON PETER</span> <span>•</span>
          <span>ABN status: Active from 18 Apr 2026</span> <span>•</span>
          <span>Main business location: VIC 3218</span> <span>•</span>
          <span>ABN Number: 47 331 567 925</span> <span>•</span>
          <span>Entity name: MILLER-STAWYSKYJ, DAMON PETER</span> <span>•</span>
          <span>ABN status: Active from 18 Apr 2026</span> <span>•</span>
          <span>Main business location: VIC 3218</span> <span>•</span>
          <span>ABN Number: 47 331 567 925</span> <span>•</span>
          <span>Entity name: MILLER-STAWYSKYJ, DAMON PETER</span> <span>•</span>
          <span>ABN status: Active from 18 Apr 2026</span> <span>•</span>
          <span>Main business location: VIC 3218</span> <span>•</span>
          <span>ABN Number: 47 331 567 925</span>
        </motion.div>
      </div>

      {/* 2. Sticky Main Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0F172A]/90 border-b border-slate-800 transition-all px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <svg 
                width="28" 
                height="28" 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transform group-hover:scale-110 transition-transform"
              >
                <path d="M16 2L2 30H10L16 18L22 30H30L16 2Z" fill="#EA580C"/>
                <path d="M16 22L12 30H20L16 22Z" fill="#F8FAFC"/>
              </svg>
              <span className="text-xl font-black text-white tracking-tighter uppercase">
                APEX<span className="text-[#EA580C] font-normal ml-1">ARCHERY</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {[
                { name: "Home", path: "/" },
                { name: "Shop", path: "/shop" },
                { name: "About", path: "/about" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
                { name: "Shipping Policy", path: "/shipping-policy" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-[11px] font-bold text-slate-400 hover:text-[#EA580C] transition-colors uppercase tracking-[0.1em]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as any)}
                className="hidden sm:block bg-transparent text-slate-300 text-[11px] font-bold uppercase outline-none focus:text-[#EA580C] cursor-pointer"
              >
                <option value="AUD">AUD</option>
                <option value="GBP">GBP</option>
                <option value="USD">USD</option>
              </select>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-slate-300 hover:text-[#EA580C] transition-colors group p-1"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#EA580C] text-black text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-[#0A0A0A]">
                    {cartItemCount}
                  </span>
                )}
              </button>

              <Link
                href="/shop"
                className="hidden md:block bg-[#EA580C] hover:bg-[#F97316] text-black font-bold uppercase text-[11px] px-6 py-2.5 rounded-sm tracking-widest transition-colors"
              >
                Order Now
              </Link>
              <button
                className="md:hidden p-2 text-slate-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                {[
                  { name: "Home", path: "/" },
                  { name: "Shop", path: "/shop" },
                  { name: "About", path: "/about" },
                  { name: "Blog", path: "/blog" },
                  { name: "Contact", path: "/contact" },
                  { name: "Shipping Policy", path: "/shipping-policy" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-bold text-slate-300 hover:text-[#EA580C] transition-colors uppercase tracking-[0.1em] block py-2 border-b border-slate-800/50"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
