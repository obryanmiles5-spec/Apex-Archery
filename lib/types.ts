export type Currency = 'AUD' | 'GBP' | 'USD';

export interface Specs {
  drawWeight?: string;
  drawLength?: string;
  iboSpeed?: string;
  braceHeight?: string;
  weight?: string;
  [key: string]: string | undefined;
}

export interface Product {
  id: string;
  title: string;
  price_gbp: number;
  price_aud: number;
  price_usd: number;
  category: string;
  specs: Specs;
  short_desc: string;
  full_seo_desc: string;
  meta_title: string;
  meta_desc: string;
  in_stock: boolean;
  image_url: string;
}

export interface BlogPost {
  id: string;
  title: string;
  snippet: string;
  readingTime: string;
  targetKeywords: string[];
  imageUrl: string;
}

export interface Faq {
  question: string;
  answer: string;
}
