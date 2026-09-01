"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

import { Product, Currency } from "@/lib/types";

interface CartItem extends Product {
  quantity: number;

  selectedWeight?: string;

  selectedColor?: string;
}

interface CartContextType {
  items: CartItem[];

  addItem: (
    item: Product,
    quantity: number,
    options?: { weight?: string; color?: string },
  ) => void;

  removeItem: (id: string) => void;

  updateQuantity: (id: string, quantity: number) => void;

  isCartOpen: boolean;

  setIsCartOpen: (isOpen: boolean) => void;

  currency: Currency;

  setCurrency: (currency: Currency) => void;

  getConvertedPrice: (
    gbpPrice: number,
    audPrice: number,
    usdPrice: number,
  ) => string;

  cartTotalGbp: number;

  cartTotalAud: number;

  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [currency, setCurrency] = useState<Currency>("AUD");

  const addItem = (
    product: Product,
    quantity: number,
    options?: { weight?: string; color?: string },
  ) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) =>
          i.id === product.id &&
          i.selectedWeight === options?.weight &&
          i.selectedColor === options?.color,
      );

      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, quantity: i.quantity + quantity } : i,
        );
      }
      return [
        ...prev,
        {
          ...product,
          quantity,
          selectedWeight: options?.weight,
          selectedColor: options?.color,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i,
      ),
    );
  };

  const clearCart = () => setItems([]);

  const getConvertedPrice = (
    gbpPrice: number,
    audPrice: number,
    usdPrice: number,
  ) => {
    switch (currency) {
      case "GBP":
        return `£${gbpPrice.toFixed(2)}`;

      case "USD":
        return `$${usdPrice.toFixed(2)}`;

      case "AUD":
      default:
        return `$${audPrice.toFixed(2)} AUD`;
    }
  };

  const cartTotalGbp = items.reduce(
    (total, item) => total + item.price_gbp * item.quantity,
    0,
  );

  const cartTotalAud = items.reduce(
    (total, item) => total + item.price_aud * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        isCartOpen,
        setIsCartOpen,
        currency,
        setCurrency,
        getConvertedPrice,
        cartTotalGbp,
        cartTotalAud,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
