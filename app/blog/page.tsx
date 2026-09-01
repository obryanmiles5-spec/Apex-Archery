"use client";

import React, { useState } from "react";

import { ChevronRight, X } from "lucide-react";

import { blogPosts } from "@/lib/data";

import * as Dialog from "@radix-ui/react-dialog";

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<any | null>(null);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F8FAFC] font-sans pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-slate-800 pb-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">
              Field <span className="text-[#EA580C]">Intelligence</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              Technical guides, hunting strategies, and equipment breakdowns for
              the modern archer.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer flex flex-col h-full bg-[#0F172A] border border-slate-800 hover:border-slate-600 transition-colors"
              onClick={() => setSelectedPost(post)}
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#EA580C] text-[9px] font-bold uppercase tracking-widest">
                    {post.targetKeywords?.[0] || "Field Guide"}
                  </span>
                  <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">
                    {post.readingTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white leading-tight mb-3 group-hover:text-[#EA580C] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-3 mb-6 flex-1">
                  {post.snippet}
                </p>
                <div className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 text-slate-300 group-hover:text-white mt-auto">
                  Read Transmission{" "}
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog.Root
        open={!!selectedPost}
        onOpenChange={(open) => !open && setSelectedPost(null)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-md z-50" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[90vh] bg-[#0A0A0A] border border-slate-800 shadow-2xl z-50 overflow-y-auto p-6 md:p-12">
            <div className="flex justify-end mb-4">
              <Dialog.Close className="text-slate-500 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </Dialog.Close>
            </div>
            {selectedPost && (
              <article className="max-w-2xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[#EA580C] text-[10px] font-bold uppercase tracking-widest">
                    {selectedPost.targetKeywords?.[0] || "Field Guide"}
                  </span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                    {selectedPost.readingTime}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-8">
                  {selectedPost.title}
                </h2>
                <div className="prose prose-invert prose-slate max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-a:text-[#EA580C]">
                  <p className="text-slate-300 leading-relaxed mb-6 text-xl border-l-4 border-[#EA580C] pl-4">
                    {selectedPost.snippet}
                  </p>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    This transmission is currently being decrypted. Full
                    tactical breakdown and specifications will be available
                    shortly.
                  </p>
                </div>
              </article>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  );
}
