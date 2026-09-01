const fs = require('fs');
const cheerio = require('cheerio');

function parse(file, category) {
    const html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html);
    
    // Look for application/ld+json for products
    let productData = [];
    $('script[type="application/ld+json"]').each((i, el) => {
        try {
            const data = JSON.parse($(el).html());
            if (Array.isArray(data)) {
                data.forEach(item => {
                    if (item['@type'] === 'Product' || item['@type'] === 'ItemPage') {
                        productData.push(item);
                    } else if (item.itemListElement) {
                        item.itemListElement.forEach(li => {
                            if (li.item && li.item.name) {
                                productData.push(li.item);
                            }
                        });
                    }
                });
            } else if (data['@type'] === 'Product') {
                productData.push(data);
            } else if (data['@type'] === 'ItemList') {
                data.itemListElement.forEach(li => {
                     if (li.item && li.item.name) {
                         productData.push(li.item);
                     }
                });
            }
        } catch (e) {}
    });
    
    console.log(`LD JSON Found in ${file}:`, productData.length);
    if(productData.length > 0) {
        console.log(productData[0]);
    }

    // Try finding by generic product class in tailwind/custom
    const rawProducts = [];
    $('a[href*="/products/"]').each((i, el) => {
        const href = $(el).attr('href');
        const parent = $(el).parent().parent(); 
        const text = $(el).text().trim();
        const img = $(el).find('img').attr('src') || parent.find('img').attr('src');
        const priceText = parent.text().match(/\$[\d,]+\.\d{2}/);
        
        if (text && text.length > 5 && img && priceText) {
            rawProducts.push({
                title: text.replace(/\s+/g, ' ').trim(),
                image: img.startsWith('//') ? 'https:' + img : img,
                price: priceText[0],
                url: href
            });
        }
    });

    console.log(`Regex Parsed Products in ${file}:`, rawProducts.length);
    if(rawProducts.length > 0) {
        console.log(rawProducts[0]);
    }
}

parse('lancaster_arrows.html', 'Carbon Arrows');
parse('lancaster_bows.html', 'Compound Bows');
