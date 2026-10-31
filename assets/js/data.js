/* Design sample for the Saree Sansar online store (public name approved by the shop owner). Everything is placeholder: products, prices, ratings and AI-generated photos are demo content, not actual shop inventory. */
const SHOP = {
  name: "Saree Sansar",
  tagline: "Online saree store — design sample",
  whatsapp: "", // connect once the shop's public number is confirmed
  demo: true
};

const PRODUCTS = [
  {
    id: "p01", name: "Royal Maroon Banarasi Silk Saree", category: "Banarasi",
    fabric: "Banarasi Silk", color: "Maroon", price: 4999, mrp: 8999,
    rating: 4.7, ratings: 212, img: "assets/img/p01-banarasi-maroon.jpg",
    badge: "Bestseller",
    desc: "A rich Banarasi silk weave with intricate gold zari brocade. Woven on traditional looms, this saree carries the grandeur of Varanasi craftsmanship — made for weddings, receptions and festive evenings.",
    highlights: ["Pure Banarasi silk with gold zari work", "Includes unstitched blouse piece (80 cm)", "Length 6.3 m including pallu", "Dry clean only"]
  },
  {
    id: "p02", name: "Peacock Green Kanjivaram Silk Saree", category: "Silk",
    fabric: "Kanjivaram Silk", color: "Green", price: 7499, mrp: 12999,
    rating: 4.8, ratings: 164, img: "assets/img/p02-kanjivaram-green.jpg",
    badge: "Premium",
    desc: "Classic Kanjivaram pure silk in deep peacock green with a handwoven gold temple border. Heavy, lustrous and timeless — an heirloom drape for the most special occasions.",
    highlights: ["Pure Kanjivaram silk", "Contrast gold temple border", "Includes blouse piece", "Dry clean only"]
  },
  {
    id: "p03", name: "Dusty Rose Georgette Party Saree", category: "Georgette",
    fabric: "Georgette", color: "Pink", price: 2499, mrp: 4499,
    rating: 4.4, ratings: 388, img: "assets/img/p03-georgette-rose.jpg",
    badge: "Trending",
    desc: "Feather-light dusty rose georgette sprinkled with delicate sequins. Drapes beautifully and stays comfortable all evening — a party favourite.",
    highlights: ["Soft flowing georgette", "All-over sequin sparkle", "Includes blouse piece", "Easy drape, light weight"]
  },
  {
    id: "p04", name: "Ivory Handloom Cotton Saree", category: "Cotton",
    fabric: "Handloom Cotton", color: "White", price: 1499, mrp: 2499,
    rating: 4.5, ratings: 296, img: "assets/img/p04-cotton-ivory.jpg",
    badge: "",
    desc: "Breathable handloom cotton in elegant ivory with a maroon temple border. Perfect for daily elegance, office wear and summer functions.",
    highlights: ["100% handloom cotton", "Cool and breathable", "Includes blouse piece", "Gentle machine wash"]
  },
  {
    id: "p05", name: "Pastel Peach Chiffon Saree", category: "Chiffon",
    fabric: "Chiffon", color: "Peach", price: 1899, mrp: 3299,
    rating: 4.3, ratings: 151, img: "assets/img/p05-chiffon-peach.jpg",
    badge: "",
    desc: "Airy pastel peach chiffon with a subtle silver shimmer border. Light as a whisper, it falls in soft folds — graceful for daytime events and evenings alike.",
    highlights: ["Featherweight chiffon", "Silver shimmer border", "Includes blouse piece", "Quick to drape"]
  },
  {
    id: "p06", name: "Crimson Bridal Zardozi Saree", category: "Bridal",
    fabric: "Silk Blend", color: "Red", price: 11999, mrp: 19999,
    rating: 4.9, ratings: 98, img: "assets/img/p06-bridal-crimson.jpg",
    badge: "Bridal Pick",
    desc: "A show-stopping crimson bridal saree with heavy gold zardozi embroidery and hand-set sequins. Designed for the big day — regal, radiant and unforgettable.",
    highlights: ["Heavy zardozi hand embroidery", "Rich crimson bridal red", "Includes embroidered blouse piece", "Dry clean only"]
  },
  {
    id: "p07", name: "Lavender Floral Organza Saree", category: "Organza",
    fabric: "Organza", color: "Lavender", price: 3299, mrp: 5999,
    rating: 4.6, ratings: 176, img: "assets/img/p07-organza-lavender.jpg",
    badge: "New",
    desc: "Dreamy lavender organza with delicate pastel floral embroidery. Sheer, crisp and contemporary — the saree everyone's asking about this season.",
    highlights: ["Sheer premium organza", "Hand-finished floral embroidery", "Includes blouse piece", "Dry clean only"]
  },
  {
    id: "p08", name: "Mustard Tussar Silk Saree", category: "Silk",
    fabric: "Tussar Silk", color: "Mustard", price: 3899, mrp: 6499,
    rating: 4.5, ratings: 134, img: "assets/img/p08-tussar-mustard.jpg",
    badge: "",
    desc: "Earthy mustard Tussar silk with woven geometric motifs and a contrast rust border. Naturally textured with a soft gold glow — understated luxury.",
    highlights: ["Pure Tussar silk", "Woven geometric motifs", "Includes blouse piece", "Dry clean only"]
  },
  {
    id: "p09", name: "Rajasthani Bandhani Saree", category: "Bandhani",
    fabric: "Georgette", color: "Orange", price: 2199, mrp: 3999,
    rating: 4.4, ratings: 243, img: "assets/img/p09-bandhani-rust.jpg",
    badge: "Festive",
    desc: "Vibrant rust-orange Bandhani tie-dye with traditional white dots and a gold gota border. Brings instant festive energy to Navratri, puja and family functions.",
    highlights: ["Authentic tie-dye Bandhani", "Gold gota patti border", "Includes blouse piece", "Light and easy to carry"]
  },
  {
    id: "p10", name: "Powder Blue Chanderi Saree", category: "Chanderi",
    fabric: "Chanderi", color: "Blue", price: 2899, mrp: 4999,
    rating: 4.6, ratings: 118, img: "assets/img/p10-chanderi-blue.jpg",
    badge: "",
    desc: "Powder blue Chanderi with fine silver zari butis and a shimmering border. Feather-light with a gentle sheen — refined enough for functions, easy enough for every day.",
    highlights: ["Authentic Chanderi weave", "Silver zari buti work", "Includes blouse piece", "Soft and light"]
  },
  {
    id: "p11", name: "Midnight Black Net Party Saree", category: "Party Wear",
    fabric: "Net", color: "Black", price: 3499, mrp: 6999,
    rating: 4.7, ratings: 207, img: "assets/img/p11-net-black.jpg",
    badge: "Trending",
    desc: "Midnight black net with gold sequin embellishments and a plush velvet border. Made for cocktail evenings and reception nights — pure glamour.",
    highlights: ["Premium net fabric", "Gold sequin work", "Velvet border", "Includes blouse piece"]
  },
  {
    id: "p12", name: "Sage Green Linen Saree", category: "Linen",
    fabric: "Linen", color: "Green", price: 1799, mrp: 2999,
    rating: 4.3, ratings: 89, img: "assets/img/p12-linen-sage.jpg",
    badge: "New",
    desc: "Minimal sage green linen with a whisper of gold at the edge. Cool, crisp and effortlessly modern — for those who love quiet elegance.",
    highlights: ["Pure linen", "Minimal woven gold edge", "Includes blouse piece", "Breathable all-day comfort"]
  }
];

const CATEGORIES = ["All", "Silk", "Banarasi", "Bridal", "Georgette", "Cotton", "Organza", "Chiffon", "Bandhani", "Chanderi", "Party Wear", "Linen"];

const DEMO_REVIEWS = {
  p01: [["Priya S.", 5, "The zari work is stunning in person. Wore it to my sister's wedding."], ["Meena K.", 4, "Rich colour, exactly like the photos. Blouse piece included."]],
  p06: [["Anjali R.", 5, "Felt like a queen on my wedding day. Worth every rupee."], ["Kavita D.", 5, "Embroidery is heavy and gorgeous."]],
  p07: [["Sneha M.", 5, "So dreamy! Got compliments all evening."], ["Ritu P.", 4, "Beautiful colour, slightly sheer so wear a good petticoat."]]
};
