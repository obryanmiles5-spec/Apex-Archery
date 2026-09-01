const fs = require('fs');

const productsToFix = [
  "Mathews LIFT 33 Compound Bow",
  "Hoyt Alpha X 33 Compound Bow",
  "PSE Mach 34 Carbon Compound Bow",
  "Bowtech Core SR Compound Bow",
  "Bear Archery Alaskan XT Compound Bow",
  "Hoyt Grand Prix Xceed Recurve Riser",
  "WNS Motive FX Recurve Riser",
  "Galaxy Sage Takedown Recurve Bow",
  "Easton 5mm Axis Carbon Arrows (Bare Shafts)",
  "Victory VAP TKO Micro-Diameter Arrows (Fletched)",
  "Gold Tip Hunter XT Carbon Arrows (Fletched)",
  "Black Eagle Spartan Carbon Arrows",
  "Easton FMJ 4mm Full Metal Jacket Arrows"
];

let content = fs.readFileSync('lib/data.ts', 'utf8');

// The objects are stored as JSON inside data.ts, but let's just do string replacement
// to be safe and precise.

productsToFix.forEach(title => {
    // Find the block for this product.
    // It looks something like:
    // "title": "Mathews LIFT 33 Compound Bow",
    // "priceAud": 1950,
    // ...
    // "image": "https://placehold.co/600x600/111111/EA580C/png?text=Mathews+LIFT+33"
    
    // Let's use a regex to find the title and replace the image attribute nearby
    // For stringification in javascript/json:
    const regex = new RegExp(`("title":\\s*"${title.replace(/([()])/g, '\\$1')}"[\\s\\S]*?"image":\\s*")https://placehold.co/[^"]+(")`, 'g');
    
    const seed = encodeURIComponent(title.replace(/\s+/g, ''));
    content = content.replace(regex, `$1https://picsum.photos/seed/${seed}/600/600$2`);
});

fs.writeFileSync('lib/data.ts', content);
console.log('Fixed image URLs in data.ts');
