"use client";

import React, { useState } from "react";

import { useCart } from "@/components/CartContext";

import * as Dialog from "@radix-ui/react-dialog";

import { X, Minus, Plus, ShoppingCart } from "lucide-react";

import Image from "next/image";

import { CheckoutModal } from "./CheckoutModal";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    cartTotalGbp,
    getConvertedPrice,
    cartTotalAud,
  } = useCart();

  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const MIN_ORDER_GBP = 100;

  const handleCheckout = () => {
    setIsCheckoutModalOpen(true);

    setIsCartOpen(false);
  };

  const isCheckoutDisabled = cartTotalGbp < MIN_ORDER_GBP;

  const remainingGbp = MIN_ORDER_GBP - cartTotalGbp;

  const progressPercentage = Math.min(
    (cartTotalGbp / MIN_ORDER_GBP) * 100,
    100,
  );

  return (
    <>
      <Dialog.Root open={isCartOpen} onOpenChange={setIsCartOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity" />
          <Dialog.Content className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0A0A0A] border-l border-slate-800 p-6 shadow-2xl z-50 flex flex-col focus:outline-none focus:ring-0 overflow-y-auto duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <Dialog.Title className="text-xl font-black uppercase tracking-widest text-[#F8FAFC] flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-[#EA580C]" />
                Your Arsenal
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="text-slate-400 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                  <span className="sr-only">Close</span>
                </button>
              </Dialog.Close>
            </div>

            <div className="flex-1 overflow-y-auto py-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-500">
                  <ShoppingCart className="w-16 h-16 mb-4 opacity-20" />
                  <p className="text-[11px] font-bold uppercase tracking-widest">
                    Your cart is empty.
                  </p>
                  <Dialog.Close asChild>
                    <button className="mt-4 text-[#EA580C] text-[10px] uppercase font-bold tracking-widest hover:text-[#F97316]">
                      Continue Shopping
                    </button>
                  </Dialog.Close>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li
                      key={`${item.id}-${item.selectedWeight}`}
                      className="flex gap-4"
                    >
                      <div className="relative w-20 h-20 bg-[#0F172A] overflow-hidden flex-shrink-0 border border-slate-800">
                        <Image
                          src={item.image_url}
                          alt={item.title}
                          fill
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold uppercase text-slate-200 line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-widest">
                          {item.selectedWeight &&
                            `Draw Weight: ${item.selectedWeight}`}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2 bg-[#0F172A] border border-slate-700 p-1">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="text-slate-400 hover:text-[#EA580C] p-0.5"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs text-slate-200 w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="text-slate-400 hover:text-[#EA580C] p-0.5"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="text-sm font-bold text-[#EA580C]">
                            {getConvertedPrice(
                              item.price_gbp * item.quantity,
                              item.price_aud * item.quantity,
                              item.price_usd * item.quantity,
                            )}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-slate-800 pt-6 mt-auto">
              {items.length > 0 && (
                <>
                  <div className="flex justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      Subtotal
                    </span>
                    <span className="text-xl font-bold text-[#EA580C]">
                      {getConvertedPrice(
                        cartTotalGbp,
                        cartTotalAud,
                        cartTotalAud,
                      )}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest mb-1">
                      {isCheckoutDisabled ? (
                        <span className="text-red-400">
                          Add{" "}
                          {getConvertedPrice(
                            remainingGbp,
                            remainingGbp * 2,
                            remainingGbp * 1.5,
                          )}{" "}
                          to unlock
                        </span>
                      ) : (
                        <span className="text-[#4D7C0F]">✓ Target Reached</span>
                      )}
                      <span className="text-slate-500">
                        {Math.floor(progressPercentage)}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-[#0F172A] border border-slate-800 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${isCheckoutDisabled ? "bg-red-500/50" : "bg-[#4D7C0F]"}`}
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={isCheckoutDisabled}
                    className="w-full bg-[#EA580C] hover:bg-[#F97316] disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-4 transition-colors uppercase tracking-widest text-[11px] flex items-center justify-center gap-2"
                  >
                    Proceed to Checkout
                  </button>
                </>
              )}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
      />
    </>
  );
}
