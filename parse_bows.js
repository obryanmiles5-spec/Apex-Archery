const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('apex_bows.html', 'utf-8');
const $ = cheerio.load(html);

const scrapedBows = [];

$('.thumbnail').each((i, el) => {
  const title = $(el).find('h3 a').text().trim();
  let priceStr = $(el).find('[itemprop="price"]').attr('content') || $(el).find('[itemprop="price"]').text().replace(/[^0-9.]/g, '');
  let price = parseFloat(priceStr);
  
  // Try to get image from background-image url or fallback
  const bgStyle = $(el).find('.thumbnail-image').attr('style') || '';
  let imageMatch = bgStyle.match(/url\(['"]?(.*?)['"]?\)/);
  let image = imageMatch ? 'https://www.apexhunting.com.au' + imageMatch[1] : `https://placehold.co/800x800/111111/EA580C/png?text=${encodeURIComponent(title)}`;
  
  if (title && price) {
    let cat = 'Hunting'; // Default compound
    let titleLower = title.toLowerCase();
    
    // Categorization logic
    if (titleLower.includes('crossbow')) {
      cat = 'Crossbow';
    } else if (titleLower.includes('longbow')) {
      cat = 'Longbows';
    } else if (titleLower.includes('recurve')) {
      cat = 'Recurve bows';
    } else if (titleLower.includes('bowfishing') || titleLower.includes('bow fishing')) {
      cat = 'Bow fishing';
    } else if (titleLower.includes('youth') && (titleLower.includes('kit') || titleLower.includes('pack'))) {
      cat = 'Youth Kits';
    } else if (titleLower.includes('youth') || titleLower.includes('kid')) {
      cat = 'Youth';
    } else if (titleLower.includes('kit') || titleLower.includes('package') || titleLower.includes('bundle')) {
      cat = 'Kits';
    } else if (titleLower.includes('carbon')) {
      cat = 'Carbon';
    } else if (titleLower.includes('target')) {
      cat = 'Target';
    } else {
      cat = 'Hunting';
    }

    scrapedBows.push({
      title,
      priceAud: price,
      priceGbp: Math.round(price * 0.52),
      priceUsd: Math.round(price * 0.65),
      cat,
      speed: '300+ FPS', 
      weight: '4.0 lbs',
      ata: '32"',
      seoKw: titleLower,
      image
    });
  }
});

console.log(JSON.stringify(scrapedBows, null, 2));
