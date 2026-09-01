const fs = require('fs');

const lancasterBows = [
  {
    title: "Mathews LIFT 33 Compound Bow",
    priceAud: 1950.00,
    priceGbp: 1010,
    priceUsd: 1350,
    cat: "Compound Bows",
    speed: "343 FPS",
    weight: "4.06 lbs",
    ata: "33\"",
    seoKw: "mathews lift 33 compound bow",
    image: "https://placehold.co/600x600/111111/EA580C/png?text=Mathews+LIFT+33"
  },
  {
    title: "Hoyt Alpha X 33 Compound Bow",
    priceAud: 1999.00,
    priceGbp: 1035,
    priceUsd: 1399,
    cat: "Compound Bows",
    speed: "334 FPS",
    weight: "4.75 lbs",
    ata: "33\"",
    seoKw: "hoyt alpha x 33 compound bow",
    image: "https://placehold.co/600x600/111111/EA580C/png?text=Hoyt+Alpha+X"
  },
  {
    title: "PSE Mach 34 Carbon Compound Bow",
    priceAud: 2450.00,
    priceGbp: 1265,
    priceUsd: 1799,
    cat: "Compound Bows",
    speed: "330 FPS",
    weight: "3.65 lbs",
    ata: "34\"",
    seoKw: "pse mach 34 carbon bow",
    image: "https://placehold.co/600x600/111111/EA580C/png?text=PSE+Mach+34"
  },
  {
    title: "Bowtech Core SR Compound Bow",
    priceAud: 1850.00,
    priceGbp: 960,
    priceUsd: 1299,
    cat: "Compound Bows",
    speed: "344 FPS",
    weight: "4.5 lbs",
    ata: "33\"",
    seoKw: "bowtech core sr compound bow",
    image: "https://placehold.co/600x600/111111/EA580C/png?text=Bowtech+Core+SR"
  },
  {
    title: "Bear Archery Alaskan XT Compound Bow",
    priceAud: 750.00,
    priceGbp: 390,
    priceUsd: 549,
    cat: "Compound Bows",
    speed: "335 FPS",
    weight: "4.3 lbs",
    ata: "32\"",
    seoKw: "bear archery alaskan xt",
    image: "https://placehold.co/600x600/111111/EA580C/png?text=Bear+Alaskan+XT"
  },
  {
    title: "Hoyt Grand Prix Xceed Recurve Riser",
    priceAud: 1250.00,
    priceGbp: 650,
    priceUsd: 879,
    cat: "Recurve Bows",
    speed: "N/A",
    weight: "2.8 lbs",
    ata: "25\"",
    seoKw: "hoyt grand prix xceed riser",
    image: "https://placehold.co/600x600/111111/EA580C/png?text=Hoyt+Xceed+Riser"
  },
  {
    title: "WNS Motive FX Recurve Riser",
    priceAud: 450.00,
    priceGbp: 235,
    priceUsd: 319,
    cat: "Recurve Bows",
    speed: "N/A",
    weight: "2.47 lbs",
    ata: "25\"",
    seoKw: "wns motive fx riser",
    image: "https://placehold.co/600x600/111111/EA580C/png?text=WNS+Motive+FX"
  },
  {
    title: "Galaxy Sage Takedown Recurve Bow",
    priceAud: 220.00,
    priceGbp: 115,
    priceUsd: 149,
    cat: "Recurve Bows",
    speed: "N/A",
    weight: "2.2 lbs",
    ata: "62\"",
    seoKw: "galaxy sage takedown recurve bow",
    image: "https://placehold.co/600x600/111111/EA580C/png?text=Galaxy+Sage"
  }
];

const lancasterArrows = [
  {
    title: "Easton 5mm Axis Carbon Arrows (Bare Shafts)",
    priceAud: 195.00,
    priceGbp: 100,
    priceUsd: 139.99,
    cat: "Carbon Arrows",
    speed: "N/A",
    weight: "9.5 gpi",
    ata: "N/A",
    seoKw: "easton axis 5mm arrows",
    image: "https://placehold.co/600x600/111111/EA580C/png?text=Easton+Axis"
  },
  {
    title: "Victory VAP TKO Micro-Diameter Arrows (Fletched)",
    priceAud: 265.00,
    priceGbp: 138,
    priceUsd: 189.99,
    cat: "Carbon Arrows",
    speed: "N/A",
    weight: "8.7 gpi",
    ata: "N/A",
    seoKw: "victory vap tko arrows",
    image: "https://placehold.co/600x600/111111/EA580C/png?text=Victory+VAP+TKO"
  },
  {
    title: "Gold Tip Hunter XT Carbon Arrows (Fletched)",
    priceAud: 145.00,
    priceGbp: 75,
    priceUsd: 99.99,
    cat: "Carbon Arrows",
    speed: "N/A",
    weight: "8.9 gpi",
    ata: "N/A",
    seoKw: "gold tip hunter xt",
    image: "https://placehold.co/600x600/111111/EA580C/png?text=Gold+Tip+XT"
  },
  {
    title: "Black Eagle Spartan Carbon Arrows",
    priceAud: 185.00,
    priceGbp: 95,
    priceUsd: 129.99,
    cat: "Carbon Arrows",
    speed: "N/A",
    weight: "9.0 gpi",
    ata: "N/A",
    seoKw: "black eagle spartan arrows",
    image: "https://placehold.co/600x600/111111/EA580C/png?text=Black+Eagle+Spartan"
  },
  {
    title: "Easton FMJ 4mm Full Metal Jacket Arrows",
    priceAud: 320.00,
    priceGbp: 165,
    priceUsd: 229.99,
    cat: "Carbon Arrows",
    speed: "N/A",
    weight: "11.0 gpi",
    ata: "N/A",
    seoKw: "easton fmj 4mm arrows",
    image: "https://placehold.co/600x600/111111/EA580C/png?text=Easton+FMJ+4mm"
  }
];

let content = fs.readFileSync('lib/data.ts', 'utf8');

// We will inject the processing of lancasterBows and lancasterArrows into generateProducts()
const newBowsStr = JSON.stringify(lancasterBows, null, 2);
const newArrowsStr = JSON.stringify(lancasterArrows, null, 2);

const injectionStr = `
  const lancasterBows = ${newBowsStr};
  const lancasterArrows = ${newArrowsStr};
  
  lancasterBows.forEach((b, i) => {
    products.push({
      id: \`lan-bow-\${i}\`,
      title: b.title,
      price_gbp: b.priceGbp,
      price_aud: b.priceAud,
      price_usd: b.priceUsd,
      category: b.cat,
      specs: { speed: b.speed, weight: b.weight, ata: b.ata },
      short_desc: 'Premium archery equipment from Lancaster Archery collection.',
      full_seo_desc: \`The \${b.title} is designed for peak accuracy and durability. Target keywords: \${b.seoKw}.\`,
      meta_title: \`\${b.title} - Apex Archery Australia\`,
      meta_desc: \`Buy the \${b.title} online. Fast global shipping from Australia.\`,
      in_stock: true,
      image_url: b.image
    });
  });

  lancasterArrows.forEach((a, i) => {
    products.push({
      id: \`lan-arrow-\${i}\`,
      title: a.title,
      price_gbp: a.priceGbp,
      price_aud: a.priceAud,
      price_usd: a.priceUsd,
      category: a.cat,
      specs: { speed: a.speed, weight: a.weight, ata: a.ata },
      short_desc: 'Premium carbon arrows from Lancaster Archery collection.',
      full_seo_desc: \`The \${a.title} is designed for ultimate penetration and accuracy. Target keywords: \${a.seoKw}.\`,
      meta_title: \`\${a.title} - Apex Archery Australia\`,
      meta_desc: \`Buy the \${a.title} online. Fast global shipping from Australia.\`,
      in_stock: true,
      image_url: a.image
    });
  });
`;

// Insert into generateProducts right before return products;
content = content.replace('return products;', injectionStr + '\n  return products;');

fs.writeFileSync('lib/data.ts', content);
console.log('Successfully injected Lancaster products into data.ts');
