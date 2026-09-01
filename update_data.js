const fs = require('fs');

const scrapedBows = JSON.parse(fs.readFileSync('bows_output.json', 'utf-8'));
const scrapedArrows = JSON.parse(fs.readFileSync('arrows_output.json', 'utf-8'));

let out = `import { Product, BlogPost, Faq } from './types';

const baseBows = ${JSON.stringify(scrapedBows, null, 2)};
const baseArrows = ${JSON.stringify(scrapedArrows, null, 2)};

const generateProducts = (): Product[] => {
  const products: Product[] = [];
  
  baseBows.forEach((b, i) => {
    products.push({
      id: \`bow-\${i}\`,
      title: b.title,
      price_gbp: b.priceGbp,
      price_aud: b.priceAud,
      price_usd: b.priceUsd,
      category: b.cat,
      specs: { speed: b.speed, weight: b.weight, ata: b.ata },
      short_desc: 'High performance archery equipment for the serious shooter.',
      full_seo_desc: \`The \${b.title} is precision engineered for maximum performance. Featuring top tier materials and our latest technology. Target keywords: \${b.seoKw}.\`,
      meta_title: \`\${b.title} - Apex Archery Australia\`,
      meta_desc: \`Buy the \${b.title} online. Fast global shipping from Australia.\`,
      in_stock: true,
      image_url: b.image
    });
  });

  baseArrows.forEach((a, i) => {
    products.push({
      id: \`arrow-\${i}\`,
      title: a.title,
      price_gbp: a.priceGbp,
      price_aud: a.priceAud,
      price_usd: a.priceUsd,
      category: a.cat,
      specs: { },
      short_desc: 'Precision grade archery arrows and components.',
      full_seo_desc: \`\${a.title} - engineered for straightness, durability and performance. Target keywords: \${a.seoKw}.\`,
      meta_title: \`\${a.title} - Apex Archery Australia\`,
      meta_desc: \`Buy the \${a.title} online. Fast global shipping from Australia.\`,
      in_stock: true,
      image_url: a.image
    });
  });

  return products;
};

export const products = generateProducts();
`;

const dataTsOriginal = fs.readFileSync('lib/data.ts', 'utf-8');
const blogFaqs = dataTsOriginal.substring(dataTsOriginal.indexOf('export const blogPosts: BlogPost[] = ['));

fs.writeFileSync('lib/data.ts', out + '\n' + blogFaqs);
