/* Design sample for the Saree Sansar online store (public name approved by the shop owner). Everything is placeholder: products, prices, ratings and AI-generated photos are demo content, not actual shop inventory. */
const SHOP = {
  name: "Saree Sansar",
  tagline: "Sarees · Kids · Cosmetics — design sample",
  whatsapp: "919918331262", // booking destination supplied by the shop owner for this store; orders open the customer's own WhatsApp - nothing sends until they press send
  demo: true
};

const PRODUCTS = [
  {
    id: "p01", name: "Royal Maroon Banarasi Silk Saree", category: "Banarasi",
    stock: "in",
    options: { label: "Colour", choices: ["Maroon", "Wine", "Rani Pink"] },
    fabric: "Banarasi Silk", color: "Maroon", price: 4999,
    rating: 4.7, ratings: 212, img: "assets/img/p01-banarasi-maroon.jpg",
    badge: "Bestseller",
    desc: "A rich Banarasi silk weave with intricate gold zari brocade. Woven on traditional looms, this saree carries the grandeur of Varanasi craftsmanship — made for weddings, receptions and festive evenings.",
    highlights: ["Pure Banarasi silk with gold zari work", "Includes unstitched blouse piece (80 cm)", "Length 6.3 m including pallu", "Dry clean only"]
  },
  {
    id: "p02", name: "Peacock Green Kanjivaram Silk Saree", category: "Silk",
    stock: "in",
    fabric: "Kanjivaram Silk", color: "Green", price: 7499,
    rating: 4.8, ratings: 164, img: "assets/img/p02-kanjivaram-green.jpg",
    badge: "Premium",
    desc: "Classic Kanjivaram pure silk in deep peacock green with a handwoven gold temple border. Heavy, lustrous and timeless — an heirloom drape for the most special occasions.",
    highlights: ["Pure Kanjivaram silk", "Contrast gold temple border", "Includes blouse piece", "Dry clean only"]
  },
  {
    id: "p03", name: "Dusty Rose Georgette Party Saree", category: "Georgette",
    stock: "in",
    options: { label: "Colour", choices: ["Dusty Rose", "Peach", "Lavender"] },
    fabric: "Georgette", color: "Pink", price: 2499,
    rating: 4.4, ratings: 388, img: "assets/img/p03-georgette-rose.jpg",
    badge: "Trending",
    desc: "Feather-light dusty rose georgette sprinkled with delicate sequins. Drapes beautifully and stays comfortable all evening — a party favourite.",
    highlights: ["Soft flowing georgette", "All-over sequin sparkle", "Includes blouse piece", "Easy drape, light weight"]
  },
  {
    id: "p04", name: "Ivory Handloom Cotton Saree", category: "Cotton",
    stock: "low",
    fabric: "Handloom Cotton", color: "White", price: 1499,
    rating: 4.5, ratings: 296, img: "assets/img/p04-cotton-ivory.jpg",
    badge: "",
    desc: "Breathable handloom cotton in elegant ivory with a maroon temple border. Perfect for daily elegance, office wear and summer functions.",
    highlights: ["100% handloom cotton", "Cool and breathable", "Includes blouse piece", "Gentle machine wash"]
  },
  {
    id: "p05", name: "Pastel Peach Chiffon Saree", category: "Chiffon",
    stock: "in",
    fabric: "Chiffon", color: "Peach", price: 1899,
    rating: 4.3, ratings: 151, img: "assets/img/p05-chiffon-peach.jpg",
    badge: "",
    desc: "Airy pastel peach chiffon with a subtle silver shimmer border. Light as a whisper, it falls in soft folds — graceful for daytime events and evenings alike.",
    highlights: ["Featherweight chiffon", "Silver shimmer border", "Includes blouse piece", "Quick to drape"]
  },
  {
    id: "p06", name: "Crimson Bridal Zardozi Saree", category: "Bridal",
    stock: "in",
    options: { label: "Colour", choices: ["Crimson", "Deep Maroon"] },
    fabric: "Silk Blend", color: "Red", price: 11999,
    rating: 4.9, ratings: 98, img: "assets/img/p06-bridal-crimson.jpg",
    badge: "Bridal Pick",
    desc: "A show-stopping crimson bridal saree with heavy gold zardozi embroidery and hand-set sequins. Designed for the big day — regal, radiant and unforgettable.",
    highlights: ["Heavy zardozi hand embroidery", "Rich crimson bridal red", "Includes embroidered blouse piece", "Dry clean only"]
  },
  {
    id: "p07", name: "Lavender Floral Organza Saree", category: "Organza",
    stock: "out",
    fabric: "Organza", color: "Lavender", price: 3299,
    rating: 4.6, ratings: 176, img: "assets/img/p07-organza-lavender.jpg",
    badge: "New",
    desc: "Dreamy lavender organza with delicate pastel floral embroidery. Sheer, crisp and contemporary — the saree everyone's asking about this season.",
    highlights: ["Sheer premium organza", "Hand-finished floral embroidery", "Includes blouse piece", "Dry clean only"]
  },
  {
    id: "p08", name: "Mustard Tussar Silk Saree", category: "Silk",
    stock: "in",
    fabric: "Tussar Silk", color: "Mustard", price: 3899,
    rating: 4.5, ratings: 134, img: "assets/img/p08-tussar-mustard.jpg",
    badge: "",
    desc: "Earthy mustard Tussar silk with woven geometric motifs and a contrast rust border. Naturally textured with a soft gold glow — understated luxury.",
    highlights: ["Pure Tussar silk", "Woven geometric motifs", "Includes blouse piece", "Dry clean only"]
  },
  {
    id: "p09", name: "Rajasthani Bandhani Saree", category: "Bandhani",
    stock: "low",
    fabric: "Georgette", color: "Orange", price: 2199,
    rating: 4.4, ratings: 243, img: "assets/img/p09-bandhani-rust.jpg",
    badge: "Festive",
    desc: "Vibrant rust-orange Bandhani tie-dye with traditional white dots and a gold gota border. Brings instant festive energy to Navratri, puja and family functions.",
    highlights: ["Authentic tie-dye Bandhani", "Gold gota patti border", "Includes blouse piece", "Light and easy to carry"]
  },
  {
    id: "p10", name: "Powder Blue Chanderi Saree", category: "Chanderi",
    stock: "in",
    fabric: "Chanderi", color: "Blue", price: 2899,
    rating: 4.6, ratings: 118, img: "assets/img/p10-chanderi-blue.jpg",
    badge: "",
    desc: "Powder blue Chanderi with fine silver zari butis and a shimmering border. Feather-light with a gentle sheen — refined enough for functions, easy enough for every day.",
    highlights: ["Authentic Chanderi weave", "Silver zari buti work", "Includes blouse piece", "Soft and light"]
  },
  {
    id: "p11", name: "Midnight Black Net Party Saree", category: "Party Wear",
    stock: "in",
    options: { label: "Colour", choices: ["Black", "Midnight Navy"] },
    fabric: "Net", color: "Black", price: 3499,
    rating: 4.7, ratings: 207, img: "assets/img/p11-net-black.jpg",
    badge: "Trending",
    desc: "Midnight black net with gold sequin embellishments and a plush velvet border. Made for cocktail evenings and reception nights — pure glamour.",
    highlights: ["Premium net fabric", "Gold sequin work", "Velvet border", "Includes blouse piece"]
  },
  {
    id: "p12", name: "Sage Green Linen Saree", category: "Linen",
    stock: "in",
    fabric: "Linen", color: "Green", price: 1799,
    rating: 4.3, ratings: 89, img: "assets/img/p12-linen-sage.jpg",
    badge: "New",
    desc: "Minimal sage green linen with a whisper of gold at the edge. Cool, crisp and effortlessly modern — for those who love quiet elegance.",
    highlights: ["Pure linen", "Minimal woven gold edge", "Includes blouse piece", "Breathable all-day comfort"]
  }
,
  {
    id: "k01", name: "Pink & Gold Festive Lehenga Choli (Girls)", category: "Kids' Wear",
    stock: "in",
    options: { label: "Size", choices: ["4-5 yrs", "6-7 yrs", "8-10 yrs"] },
    fabric: "Net & satin", color: "Pink", price: 1299,
    rating: 4.5, ratings: 96, img: "assets/img/k01-lehenga-pink.jpg",
    badge: "New",
    desc: "A twirl-ready festive lehenga choli in bright pink with gold accents and a matching dupatta. Made for weddings, Diwali and school functions.",
    highlights: ["Three-piece set: lehenga, choli, dupatta", "Size range 4-10 years", "Soft inner lining for comfort", "Dry clean only"],
    specs: [["Size range","4-10 years"],["Care","Dry clean only"]]
  },
  {
    id: "k02", name: "Sky Blue Cotton Kurta Pajama (Boys)", category: "Kids' Wear",
    stock: "in",
    options: { label: "Size", choices: ["1-2 yrs", "3-4 yrs", "5-6 yrs", "7-8 yrs"] },
    fabric: "Cotton", color: "Blue", price: 699,
    rating: 4.3, ratings: 58, img: "assets/img/k02-kurta-blue.jpg",
    desc: "A breezy cotton kurta pajama in sky blue with small printed motifs. Easy everyday ethnic wear for boys.",
    highlights: ["Two-piece set: kurta + pajama", "Size range 1-8 years", "Breathable pure cotton", "Machine wash"],
    specs: [["Size range","1-8 years"],["Care","Machine wash"]]
  },
  {
    id: "k03", name: "Yellow Floral Cotton Frock", category: "Kids' Wear",
    stock: "in",
    options: { label: "Size", choices: ["2-3 yrs", "4-5 yrs", "5-6 yrs"] },
    fabric: "Cotton", color: "Yellow", price: 549,
    rating: 4.6, ratings: 143, img: "assets/img/k03-frock-yellow.jpg",
    badge: "Trending",
    desc: "A sunny yellow frock in soft floral cotton with frill sleeves. Light, playful and made for all-day wear.",
    highlights: ["Size range 2-6 years", "Soft floral cotton", "Frill sleeves, back button closure", "Machine wash"],
    specs: [["Size range","2-6 years"],["Care","Machine wash"]]
  },
  {
    id: "k04", name: "Boys Denim & Checked Shirt Set", category: "Kids' Wear",
    stock: "low",
    options: { label: "Size", choices: ["3-4 yrs", "5-6 yrs", "7-8 yrs", "9-10 yrs", "11-12 yrs"] },
    fabric: "Denim & cotton", color: "Blue", price: 899,
    rating: 4.4, ratings: 77, img: "assets/img/k04-denim-set.jpg",
    desc: "A smart casual combo: checked cotton shirt with stretchy denim jeans. Ready for birthdays and outings.",
    highlights: ["Two-piece set: shirt + jeans", "Size range 3-12 years", "Elastic waist jeans", "Machine wash"],
    specs: [["Size range","3-12 years"],["Care","Machine wash"]]
  },
  {
    id: "c01", name: "Rose Gold Lipstick & Compact Set", category: "Cosmetics",
    stock: "in",
    options: { label: "Shade", choices: ["Rose", "Coral", "Classic Red"] },
    fabric: "Makeup combo", color: "Rose", price: 499,
    rating: 4.5, ratings: 210, img: "assets/img/c01-lipstick-set.jpg",
    badge: "Bestseller",
    desc: "An everyday makeup duo: a creamy lipstick with a pressed compact in rose gold packaging.",
    highlights: ["Lipstick + pressed compact", "Assorted shades available", "Check shade availability in chat"],
    specs: [["Contents","Lipstick + compact"],["Shade","Assorted"]]
  },
  {
    id: "c02", name: "Kajal & Eyeliner Duo", category: "Cosmetics",
    stock: "in",
    options: { label: "Shade", choices: ["Black", "Dark Brown"] },
    fabric: "Eye makeup", color: "Black", price: 199,
    rating: 4.6, ratings: 342, img: "assets/img/c02-kajal.jpg",
    badge: "New",
    desc: "A smudge-friendly kajal and eyeliner duo for everyday definition. Compact and travel-ready.",
    highlights: ["Kajal pencil + liquid eyeliner", "Deep black", "Check availability in chat"],
    specs: [["Contents","Kajal + eyeliner"],["Shade","Black"]]
  },
  {
    id: "c03", name: "Assorted Nail Polish Set (6 Shades)", category: "Cosmetics",
    stock: "in",
    options: { label: "Set", choices: ["Bright set", "Pastel set"] },
    fabric: "Nail enamel", color: "Multi", price: 299,
    rating: 4.2, ratings: 88, img: "assets/img/c03-nailpolish.jpg",
    desc: "Six bright nail enamel shades in one gift-ready set. Quick-dry glossy finish.",
    highlights: ["Set of 6 assorted shades", "Quick-dry glossy finish", "Gift-ready box", "Check shades in chat"],
    specs: [["Contents","6 nail polishes"],["Shades","Assorted"]]
  },
  {
    id: "c04", name: "Face Cream & Serum Combo", category: "Cosmetics",
    stock: "in",
    fabric: "Skincare combo", color: "Pastel", price: 649,
    rating: 4.7, ratings: 156, img: "assets/img/c04-skincare.jpg",
    badge: "Premium",
    desc: "A daily skincare pairing: a light face cream with a hydrating serum in pastel packaging.",
    highlights: ["Face cream + hydrating serum", "Daily use combo", "Check availability in chat"],
    specs: [["Contents","Cream + serum"]]
  }
];

const CATEGORIES = ["All", "Silk", "Banarasi", "Bridal", "Georgette", "Cotton", "Organza", "Chiffon", "Bandhani", "Chanderi", "Party Wear", "Linen", "Kids' Wear", "Cosmetics"];

const DEMO_REVIEWS = {
  p01: [["Priya S.", 5, "The zari work is stunning in person. Wore it to my sister's wedding."], ["Meena K.", 4, "Rich colour, exactly like the photos. Blouse piece included."]],
  p06: [["Anjali R.", 5, "Felt like a queen on my wedding day. Worth every rupee."], ["Kavita D.", 5, "Embroidery is heavy and gorgeous."]],
  p07: [["Sneha M.", 5, "So dreamy! Got compliments all evening."], ["Ritu P.", 4, "Beautiful colour, slightly sheer so wear a good petticoat."]]
};
