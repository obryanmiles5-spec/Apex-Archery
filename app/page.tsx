"use client";

import React, { useState } from "react";

import Image from "next/image";

import { ArrowRight, ShoppingCart } from "lucide-react";

import { useCart } from "@/components/CartContext";

import { products, blogPosts } from "@/lib/data";

import { QuickViewModal } from "@/components/QuickViewModal";

import { Product } from "@/lib/types";

import Link from "next/link";

export default function Home() {
  const { addItem, getConvertedPrice } = useCart();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const featuredProducts = products.slice(0, 8);

  const categories = [
    "Compound Bows",
    "Traditional Bows",
    "Recurve Bows",
    "Carbon Arrows",
    "Broadheads",
    "Sights & Optics",
    "Release Aids",
  ];

  return (
    <main className="bg-[#0A0A0A] text-[#F8FAFC] font-sans selection:bg-[#EA580C]/30">
      <QuickViewModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* 3. Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden bg-[#0A0A0A] border-b border-slate-800 flex justify-center text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#4D7C0F_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] z-10" />
          <Image
            src="https://drive.google.com/uc?export=view&id=1CEJrTAESL3K7T64CdRN6Cw0ED_047uac"
            alt="Hunter with recurve bow"
            fill
            className="object-cover opacity-[0.15] grayscale mix-blend-overlay"
            referrerPolicy="no-referrer"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="max-w-3xl flex flex-col items-center">
            <div className="text-[#EA580C] text-[10px] font-bold uppercase tracking-[0.4em] mb-6 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
              Precision Built Since 2008
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 uppercase text-center">
              Australian Precision. <br />
              <span className="text-[#EA580C]">Worldwide Lethality.</span>
            </h1>
            <p className="text-base text-slate-400 mb-10 max-w-xl leading-relaxed text-center mx-auto">
              Engineered for the outback. Built for the world. Equip yourself with competition-grade compound bows, micro-diameter carbon arrows, and terminal broadheads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="bg-[#EA580C] text-white font-bold uppercase text-[12px] px-10 py-5 tracking-widest hover:bg-[#C2410C] transition-colors flex items-center justify-center gap-2"
              >
                Shop Now <ShoppingCart className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Category Strip */}
      <section className="border-b border-slate-800 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex overflow-x-auto gap-8 scrollbar-hide snap-x">
            {categories.map((category) => (
              <Link
                href="/shop"
                key={category}
                className="snap-start flex-shrink-0 flex items-center gap-3 group cursor-pointer"
              >
                <span className="w-1.5 h-1.5 bg-slate-700 group-hover:bg-[#EA580C] transition-colors" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors whitespace-nowrap">
                  {category}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Products */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase mb-2">
                Featured <span className="text-[#EA580C]">Hardware</span>
              </h2>
              <p className="text-slate-400 text-sm">
                Top-tier equipment deployed globally.
              </p>
            </div>
            <Link
              href="/shop"
              className="hidden sm:flex text-[10px] font-bold uppercase tracking-widest text-slate-300 hover:text-white items-center gap-2 transition-colors group"
            >
              View Full Arsenal{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#0F172A] border border-slate-800 group hover:border-[#EA580C]/50 transition-colors flex flex-col"
              >
                <div
                  className="relative aspect-square w-full bg-[#1E293B] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <Image
                    src={product.image_url}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {!product.in_stock && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                      Out of Stock
                    </div>
                  )}
                  {product.in_stock && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();

                        setSelectedProduct(product);
                      }}
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm"
                    >
                      <span className="bg-white text-black font-bold uppercase tracking-widest text-[10px] px-6 py-3">
                        Quick View
                      </span>
                    </button>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-4 flex-1">
                    <div className="text-[#EA580C] text-[9px] font-bold uppercase tracking-widest mb-2">
                      {product.category}
                    </div>
                    <h3
                      className="text-sm font-bold text-slate-200 uppercase tracking-wide leading-snug cursor-pointer hover:text-white"
                      onClick={() => setSelectedProduct(product)}
                    >
                      {product.title}
                    </h3>
                  </div>

                  {product.specs.speed && (
                    <div className="flex items-center gap-2 mb-4 text-[10px] uppercase font-bold tracking-widest text-slate-500">
                      <span className="bg-[#1E293B] px-2 py-1">
                        {product.specs.speed}
                      </span>
                      <span className="bg-[#1E293B] px-2 py-1">
                        {product.specs.weight}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                    <span className="text-lg font-black text-white">
                      {getConvertedPrice(
                        product.price_gbp,
                        product.price_aud,
                        product.price_usd,
                      )}
                    </span>
                    <button
                      onClick={() => addItem(product, 1)}
                      disabled={!product.in_stock}
                      className="w-10 h-10 flex items-center justify-center bg-[#1E293B] text-white hover:bg-[#EA580C] disabled:opacity-50 disabled:hover:bg-[#1E293B] transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link
              href="/shop"
              className="w-full text-center block bg-[#1E293B] text-white font-bold uppercase tracking-widest text-[10px] py-4"
            >
              View Full Arsenal
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Featured Collaboration (Dialed x Apex) */}
      <section className="relative w-full bg-[#111111] overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://drive.google.com/uc?export=view&id=1s4rOMHvNqfluwC5UFuIMzQXan25j8Wi8"
            alt="Dialed Archery x Apex Hunting Collaboration"
            fill
            className="object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col justify-center min-h-[500px]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#EA580C] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                Exclusive Collaboration
              </span>
              <span className="text-slate-300 text-[10px] font-bold uppercase tracking-widest border border-slate-700 px-3 py-1">
                MFD in the USA
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
              Dialed Archery <span className="block text-[#EA580C]">x Apex Hunting</span>
            </h2>
            
            <p className="text-slate-300 md:text-lg mb-8 leading-relaxed max-w-xl">
              Precision meets performance. We&apos;ve partnered with Dialed Archery Equipment Co. to bring you an exclusive, premium sight collection. Engineered for absolute accuracy in the toughest environments, featuring the signature topographic aesthetic. 
            </p>
            
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-white text-black hover:bg-[#EA580C] hover:text-white px-8 py-4 font-black uppercase tracking-widest text-xs transition-colors group"
            >
              Shop The Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Blog Posts Preview */}
      <section className="py-24 bg-[#0A0A0A] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase mb-2">
                Outback <span className="text-[#EA580C]">Intel</span>
              </h2>
              <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">
                Field Notes & Tactics
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex text-[10px] font-bold uppercase tracking-widest text-slate-300 hover:text-white items-center gap-2 transition-colors group"
            >
              Read All Intel{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.slice(0, 4).map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="relative aspect-video w-full mb-4 overflow-hidden border border-slate-800 group-hover:border-[#EA580C]/50 transition-colors">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-[#1E293B] text-white text-[9px] font-bold px-2 py-1 uppercase tracking-widest">
                    {post.readingTime}
                  </div>
                </div>
                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wide leading-snug group-hover:text-[#EA580C] transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                  {post.snippet}
                </p>
                <Link
                  href="/blog"
                  className="text-[10px] font-black uppercase tracking-widest text-[#EA580C] hover:text-white transition-colors flex items-center gap-2"
                >
                  Read More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SEO Foundation Block */}
      <section className="bg-[#050505] py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6">
                Australia's Premier Archery Shop
              </h2>
              <div className="text-slate-400 text-sm leading-relaxed space-y-4">
                <p>
                  Whether you are searching for the <strong>best recurve bow for beginners</strong>, a high-performance <strong>compound hunting bow</strong>, or traditional <strong>longbows for sale</strong>, our <strong>archery shop</strong> is your ultimate destination. We proudly supply top-tier archery gear across <strong>Melbourne, Sydney, Brisbane, Perth, and Adelaide</strong>. Our extensive catalogue includes legendary brands like <strong>Bear Archery</strong>, <strong>Hoyt</strong>, <strong>Mathews</strong>, <strong>PSE</strong>, and the iconic <strong>Samick Sage takedown recurve bow</strong>.
                </p>
                <p>
                  From <strong>target archery recurve bows</strong> and <strong>wooden bows</strong> to high-penetration <strong>micro-diameter carbon arrows</strong>, we cover every discipline. Explore our range of <strong>youth compound bows</strong>, <strong>traditional archery bows</strong>, <strong>bowfishing kits</strong>, and premium <strong>archery accessories</strong>. If you are comparing a <strong>recurve vs compound bow</strong>, our expert staff and comprehensive guides will help you make the right choice.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6">
                Equip For The Outback
              </h2>
              <div className="text-slate-400 text-sm leading-relaxed space-y-4">
                <p>
                  We know Australian conditions demand rugged reliability. That's why we stock the <strong>best hunting recurve bows</strong> and durable <strong>compound bows for hunting</strong> feral game. Need to know <strong>how to string a recurve bow safely</strong>? We offer a massive selection of <strong>bow stringers</strong>, <strong>finger tabs</strong>, <strong>arrow rests</strong>, and <strong>custom recurve bow strings</strong> to ensure your setup is dialed in perfectly.
                </p>
                <p>
                  Looking for a <strong>cheap recurve bow</strong> to get started, or searching for <strong>used compound bows for sale</strong>? We cater to all budgets. Visit our <strong>archery store</strong> online to <strong>buy a bow and arrow</strong> with confidence. Fast shipping Australia-wide ensures you spend less time waiting and more time shooting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
