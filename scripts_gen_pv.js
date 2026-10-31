// Generates static deep-link product pages pv-<id>.html with og:image meta
// so WhatsApp link previews render the real product photo.
const fs = require('fs');
const code = fs.readFileSync('assets/js/data.js', 'utf8');
const w = {};
new Function('window', code + ';window.P=PRODUCTS;')(w);
const tpl = fs.readFileSync('product.html', 'utf8');
const SITE = 'https://akash991833.github.io/saree-store-sample/';
for (const p of w.P) {
  const imgAbs = SITE + p.img;
  let html = tpl.replace('<meta charset="UTF-8">',
`<meta charset="UTF-8">
<meta property="og:type" content="product">
<meta property="og:site_name" content="Saree Sansar (design sample)">
<meta property="og:title" content="${p.name.replace(/"/g,'&quot;')} — demo price ₹${p.price.toLocaleString('en-IN')}">
<meta property="og:description" content="Design sample product page. AI-generated demo photo and demo price - not actual shop inventory. Code: ${p.id}">
<meta property="og:image" content="${imgAbs}">
<meta property="og:image:width" content="1086">
<meta property="og:image:height" content="1448">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${imgAbs}">
<script>window.PID=${JSON.stringify(p.id)};</script>`);
  fs.writeFileSync(`pv-${p.id}.html`, html);
}
console.log('generated', w.P.length, 'pv pages');
