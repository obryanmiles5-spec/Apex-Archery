const fs = require('fs');
const scrapedBows = JSON.parse(fs.readFileSync('bows_output.json', 'utf-8'));

let out = `import { Product, BlogPost, Faq } from './types';

// Scraped bows
const baseBows = ${JSON.stringify(scrapedBows, null, 2)};

const generateProducts = (): Product[] => {
  const products: Product[] = baseBows.map((b, i) => ({
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
  }));

  // Add more dynamic products to fill out the arrow categories
  for (let i = 0; i < 11; i++) {
    const arrowCats = ['Arrow Shafts', 'Fletched Arrows', 'Custom Arrows', 'Broadhead & Specialty Points', 'Arrow Building & Repair', 'Arrow Components', 'Crossbow Bolts & Arrows', 'Arrow Tubes & Cases', 'Bowfishing Arrows'];
    const cat = arrowCats[i % arrowCats.length];
    
    products.push({
      id: \`prod-\${i + 100}\`,
      title: \`Apex Pro Arrow Component \${i}\`,
      price_gbp: 40 + (i*10),
      price_aud: 80 + (i*20),
      price_usd: 50 + (i*15),
      category: cat,
      specs: { spine: '300-500', straightness: '±.001"' },
      short_desc: 'Competition grade carbon arrows and components.',
      full_seo_desc: 'Maximize your accuracy with our premium grade archery equipment. Tested in the harshest conditions.',
      meta_title: \`Pro Arrow Component \${i}\`,
      meta_desc: 'Premium archery gear for target and hunting.',
      in_stock: true,
      image_url: \`https://placehold.co/800x800/111111/EA580C/png?text=Apex+Arrow+\${i}\`
    });
  }

  return products;
};

export const products = generateProducts();
`;

const dataTsOriginal = fs.readFileSync('lib/data.ts', 'utf-8');
const blogFaqs = dataTsOriginal.substring(dataTsOriginal.indexOf('export const blogPosts: BlogPost[] = ['));

fs.writeFileSync('lib/data.ts', out + '\n' + blogFaqs);
