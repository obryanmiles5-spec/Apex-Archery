const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('apex_arrows.html', 'utf-8');
const $ = cheerio.load(html);

const scrapedArrows = [];

$('.thumbnail').each((i, el) => {
  const title = $(el).find('h3 a').text().trim();
  let priceStr = $(el).find('[itemprop="price"]').attr('content') || $(el).find('[itemprop="price"]').text().replace(/[^0-9.]/g, '');
  let price = parseFloat(priceStr);
  
  // Try to get image from background-image url or fallback
  const bgStyle = $(el).find('.thumbnail-image').attr('style') || '';
  let imageMatch = bgStyle.match(/url\(['"]?(.*?)['"]?\)/);
  let image = imageMatch ? 'https://www.apexhunting.com.au' + imageMatch[1] : `https://placehold.co/800x800/111111/EA580C/png?text=${encodeURIComponent(title)}`;
  
  if (title && price) {
    let cat = 'Fletched Arrows'; // Default
    let titleLower = title.toLowerCase();
    
    // Categorization logic
    if (titleLower.includes('broadhead') || titleLower.includes('point') || titleLower.includes('field point')) {
      cat = 'Broadhead & Specialty Points';
    } else if (titleLower.includes('bolt') || titleLower.includes('crossbow')) {
      cat = 'Crossbow Bolts & Arrows';
    } else if (titleLower.includes('shaft')) {
      cat = 'Arrow Shafts';
    } else if (titleLower.includes('custom')) {
      cat = 'Custom Arrows';
    } else if (titleLower.includes('jig') || titleLower.includes('fletching') || titleLower.includes('glue') || titleLower.includes('wrap') || titleLower.includes('repair')) {
      cat = 'Arrow Building & Repair';
    } else if (titleLower.includes('nock') || titleLower.includes('insert') || titleLower.includes('pin') || titleLower.includes('bushing')) {
      cat = 'Arrow Components';
    } else if (titleLower.includes('tube') || titleLower.includes('case')) {
      cat = 'Arrow Tubes & Cases';
    } else if (titleLower.includes('fishing')) {
      cat = 'Bowfishing Arrows';
    } else {
      cat = 'Fletched Arrows';
    }

    scrapedArrows.push({
      title,
      priceAud: price,
      priceGbp: Math.round(price * 0.52),
      priceUsd: Math.round(price * 0.65),
      cat,
      speed: null, 
      weight: null,
      ata: null,
      seoKw: titleLower,
      image
    });
  }
});

console.log(JSON.stringify(scrapedArrows, null, 2));
