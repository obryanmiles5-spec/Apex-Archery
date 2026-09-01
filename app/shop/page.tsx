"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { products } from "@/lib/data";
import { shopSchema } from "@/lib/categories";
import { QuickViewModal } from "@/components/QuickViewModal";
import { Product } from "@/lib/types";

export default function ShopPage() {
  const { addItem, getConvertedPrice } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const isProductInCategory = (productCategory: string, selectedCat: string) => {
    if (selectedCat === "All") return true;
    if (productCategory === selectedCat) return true;
    
    // Check if selectedCat is a parent of productCategory
    for (const main of shopSchema) {
      if (main.name === selectedCat) {
        for (const sub of main.subcategories) {
          if (sub.name === productCategory) return true;
          if (sub.subcategories?.includes(productCategory)) return true;
        }
      }
      for (const sub of main.subcategories) {
        if (sub.name === selectedCat) {
          if (sub.subcategories?.includes(productCategory)) return true;
        }
      }
    }
    return false;
  };

  const filteredProducts = products.filter((p) => isProductInCategory(p.category, activeCategory));

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F8FAFC] font-sans pt-12 pb-24">
      <QuickViewModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-slate-800 pb-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">
              Complete <span className="text-[#EA580C]">Arsenal</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              Browse our full collection of competition-grade equipment,
              engineered for ultimate precision and endurance.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#EA580C] mb-6">Categories</h3>
              <ul className="space-y-4">
                <li>
                  <button 
                    onClick={() => setActiveCategory("All")}
                    className={`text-sm font-bold uppercase tracking-widest transition-colors ${activeCategory === "All" ? "text-white" : "text-slate-500 hover:text-slate-300"}`}
                  >
                    All Products
                  </button>
                </li>
                {shopSchema.map((mainCat) => (
                  <li key={mainCat.name} className="pt-2">
                    <button 
                      onClick={() => setActiveCategory(mainCat.name)}
                      className={`text-sm font-bold uppercase tracking-widest transition-colors mb-2 text-left ${activeCategory === mainCat.name ? "text-white" : "text-slate-400 hover:text-slate-300"}`}
                    >
                      {mainCat.name}
                    </button>
                    {mainCat.subcategories.length > 0 && (
                      <ul className="pl-4 space-y-3 border-l border-slate-800 mt-2">
                        {mainCat.subcategories.map((subCat) => (
                          <li key={subCat.name}>
                            <button 
                              onClick={() => setActiveCategory(subCat.name)}
                              className={`text-xs font-bold uppercase tracking-widest transition-colors text-left ${activeCategory === subCat.name ? "text-[#EA580C]" : "text-slate-500 hover:text-slate-300"}`}
                            >
                              {subCat.name}
                            </button>
                            {subCat.subcategories && subCat.subcategories.length > 0 && (
                              <ul className="pl-4 space-y-2 border-l border-slate-800/50 mt-2 mb-4">
                                {subCat.subcategories.map((leafCat) => (
                                  <li key={leafCat}>
                                    <button 
                                      onClick={() => setActiveCategory(leafCat)}
                                      className={`text-[10px] font-bold uppercase tracking-widest transition-colors text-left ${activeCategory === leafCat ? "text-[#EA580C]" : "text-slate-600 hover:text-slate-400"}`}
                                    >
                                      {leafCat}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 text-slate-500 uppercase tracking-widest text-sm font-bold border border-slate-800 border-dashed">
                No products found in this category.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
