"use client";

import React from "react";

import * as Dialog from "@radix-ui/react-dialog";

import { X, ShieldCheck, Zap, Crosshair } from "lucide-react";

import { Product } from "@/lib/types";

import Image from "next/image";

import { useCart } from "./CartContext";

interface QuickViewProps {
  product: Product | null;

  isOpen: boolean;

  onClose: () => void;
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewProps) {
  const { addItem, getConvertedPrice } = useCart();

  const [selectedWeight, setSelectedWeight] = React.useState("60 lbs");

  if (!product) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-md z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-[#1E293B] border border-slate-800 shadow-2xl z-50 overflow-hidden">
          <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
            {/* Image Section */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-[#0F172A] flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-slate-800">
              <Image
                src={product.image_url}
                alt={product.title}
                fill
                className="object-contain p-4 drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#EA580C] text-black text-[9px] font-bold px-2 py-0.5 uppercase tracking-widest">
                {product.category}
              </div>
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col relative overflow-y-auto">
              <Dialog.Close asChild>
                <button className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors hover:bg-slate-800 p-2">
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>

              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-50 pr-8">
                {product.title}
              </h2>
              <p className="text-3xl font-bold text-[#EA580C] mt-2">
                {getConvertedPrice(
                  product.price_gbp,
                  product.price_aud,
                  product.price_usd,
                )}
              </p>

              <p className="text-slate-400 mt-4 leading-relaxed text-sm">
                {product.full_seo_desc}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {product.specs.iboSpeed && (
                  <div className="bg-[#0A0A0A] border border-slate-800 p-3 flex items-center gap-3">
                    <Zap className="text-[#EA580C] w-5 h-5" />
                    <div>
                      <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">
                        IBO Speed
                      </p>
                      <p className="text-slate-200 font-semibold">
                        {product.specs.iboSpeed}
                      </p>
                    </div>
                  </div>
                )}
                {product.specs.axleToAxle && (
                  <div className="bg-[#0A0A0A] border border-slate-800 p-3 flex items-center gap-3">
                    <Crosshair className="text-[#EA580C] w-5 h-5" />
                    <div>
                      <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">
                        Axle-to-Axle
                      </p>
                      <p className="text-slate-200 font-semibold">
                        {product.specs.axleToAxle}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {product.category.includes("Bow") && (
                <div className="mt-8">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Select Draw Weight
                  </label>
                  <div className="flex gap-2">
                    {["50 lbs", "60 lbs", "70 lbs"].map((w) => (
                      <button
                        key={w}
                        onClick={() => setSelectedWeight(w)}
                        className={`px-4 py-2 border text-[10px] uppercase font-bold tracking-widest transition-colors ${selectedWeight === w ? "border-[#EA580C] bg-[#EA580C] text-black" : "border-slate-700 text-slate-300 hover:border-slate-500"}`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-10 flex gap-4 mt-auto pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    addItem(product, 1, {
                      weight: product.category.includes("Bow")
                        ? selectedWeight
                        : undefined,
                    });

                    onClose();
                  }}
                  className="flex-1 bg-[#EA580C] hover:bg-[#F97316] text-black font-bold py-4 transition-colors uppercase tracking-widest text-[11px] flex items-center justify-center gap-2"
                >
                  Add to Arsenal
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-slate-500 justify-center">
                <ShieldCheck className="w-4 h-4 text-[#4D7C0F]" /> Lifetime Limb
                Warranty Included
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
