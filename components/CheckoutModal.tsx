"use client";

import React, { useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";

import { X, CheckCircle, Mail, MapPin, User, ArrowRight } from "lucide-react";

import { useCart } from "@/components/CartContext";

export function CheckoutModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;

  onClose: () => void;
}) {
  const {
    items,
    cartTotalGbp,
    getConvertedPrice,
    currency,
    cartTotalAud,
    clearCart,
  } = useCart();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    address: "",
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    if (step < 3) setStep(step + 1);

    if (step === 3) {
      // Simulate dispatch
      setTimeout(() => {
        setStep(4);
      }, 800);
    }
  };

  const handleClose = () => {
    if (step === 4) {
      clearCart();
    }
    setStep(1);

    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-md z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-[#0A0A0A] border border-slate-800 shadow-2xl z-50 overflow-hidden flex flex-col max-h-[90vh]">
          <div className="flex items-center justify-between border-b border-slate-800 p-6 bg-[#0F172A]">
            <Dialog.Title className="text-lg font-black uppercase tracking-widest text-[#F8FAFC]">
              {step === 4 ? "Order Confirmed" : "Secure Checkout"}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-slate-500 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          <div className="p-8 overflow-y-auto">
            {step === 1 && (
              <form onSubmit={handleNext} className="space-y-6">
                <h3 className="text-[#EA580C] text-[10px] font-bold uppercase tracking-widest mb-4">
                  Step 1: Contact Intelligence
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-[#1E293B] border border-slate-700 text-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-[#EA580C]"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-[#1E293B] border border-slate-700 text-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-[#EA580C]"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#EA580C] text-black font-bold py-4 uppercase tracking-widest text-[11px] hover:bg-[#F97316] transition-colors flex justify-center items-center gap-2"
                >
                  Continue to Delivery <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleNext} className="space-y-6">
                <h3 className="text-[#EA580C] text-[10px] font-bold uppercase tracking-widest mb-4">
                  Step 2: Dispatch Coordinates
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-2">
                      Country / Region
                    </label>
                    <select
                      required
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="w-full bg-[#1E293B] border border-slate-700 text-slate-200 py-3 px-4 text-sm outline-none focus:border-[#EA580C]"
                    >
                      <option value="">Select Country</option>
                      <option value="AU">Australia</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="NZ">New Zealand</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-400 uppercase tracking-widest mb-2">
                      Full Street Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                      <textarea
                        required
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        className="w-full bg-[#1E293B] border border-slate-700 text-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-[#EA580C] min-h-[100px]"
                        placeholder="123 Target Lane, Brisbane QLD 4000..."
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 bg-transparent border border-slate-700 text-slate-300 font-bold py-4 uppercase tracking-widest text-[11px] hover:border-[#EA580C] transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-[2] bg-[#EA580C] text-black font-bold py-4 uppercase tracking-widest text-[11px] hover:bg-[#F97316] transition-colors flex justify-center items-center gap-2"
                  >
                    Review Order <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-[#EA580C] text-[10px] font-bold uppercase tracking-widest mb-4">
                  Step 3: Final Dispatch Summary
                </h3>
                <div className="bg-[#0F172A] border border-slate-800 p-6 space-y-4">
                  <div className="flex justify-between border-b border-slate-800 pb-4">
                    <span className="text-slate-400 text-sm">Recipient</span>
                    <span className="text-slate-200 font-medium">
                      {formData.name} ({formData.email})
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-4">
                    <span className="text-slate-400 text-sm">Destination</span>
                    <span className="text-slate-200 font-medium text-right max-w-[60%]">
                      {formData.address}, {formData.country}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-slate-400 text-sm uppercase tracking-widest font-bold">
                      Total Due
                    </span>
                    <span className="text-2xl font-black text-[#EA580C]">
                      {getConvertedPrice(
                        cartTotalGbp,
                        cartTotalAud,
                        cartTotalAud,
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 bg-transparent border border-slate-700 text-slate-300 font-bold py-4 uppercase tracking-widest text-[11px] hover:border-[#EA580C] transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex-[2] bg-[#4D7C0F] text-white font-bold py-4 uppercase tracking-widest text-[11px] hover:bg-green-600 transition-colors flex justify-center items-center gap-2"
                  >
                    Confirm & Send Invoice
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-20 h-20 text-[#4D7C0F] mb-6" />
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">
                  Invoice Dispatched
                </h3>
                <p className="text-slate-400 mb-8 max-w-sm">
                  We have secured your order in our system. An email invoice
                  with payment details has been sent to{" "}
                  <strong className="text-white">{formData.email}</strong>.
                </p>
                <button
                  onClick={handleClose}
                  className="bg-transparent border border-[#EA580C] text-[#EA580C] font-bold py-3 px-8 uppercase tracking-widest text-[11px] hover:bg-[#EA580C] hover:text-black transition-colors"
                >
                  Return to Base
                </button>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
