/* Shared shell + cart store for the Saree Studio design sample */
(function(){
  const SVG = {
    cart:'<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/><path d="M3 3h2l2.4 12.2a1.6 1.6 0 0 0 1.6 1.3h7.7a1.6 1.6 0 0 0 1.6-1.3L20 7H6"/></svg>',
    heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.5-1.4 3-3.2 3-5.5A4.5 4.5 0 0 0 17.5 4c-1.7 0-3.2.9-4.5 2.6C11.7 4.9 10.2 4 8.5 4A4.5 4.5 0 0 0 4 8.5c0 2.3 1.5 4.1 3 5.5l6 6z"/></svg>',
    home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>',
    grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/></svg>',
    box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v8"/></svg>',
    truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="1.5" y="4.5" width="13" height="11" rx="1"/><path d="M14.5 8.5h4l3.5 3.5v3.5h-7.5z"/><circle cx="6" cy="18.5" r="1.8"/><circle cx="17.5" cy="18.5" r="1.8"/></svg>',
    shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z"/><path d="m8.5 11.5 2.5 2.5 4.5-4.5"/></svg>',
    swap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h13l-3-3"/><path d="M20 17H7l3 3"/></svg>',
    gem:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l3 6-9 12L3 9z"/><path d="M3 9h18"/><path d="M9 3l3 6 3-6"/><path d="m12 21-3-12"/><path d="m12 21 3-12"/></svg>'
  };

  window.SS = {
    svg: SVG,
    fmt: n => "₹" + n.toLocaleString("en-IN"),
    off: p => Math.round((1 - p.price / p.mrp) * 100),
    prod: id => PRODUCTS.find(p => p.id === id),
    stars: r => {
      const f = Math.round(r);
      return "★".repeat(f) + "☆".repeat(5 - f);
    },
    getCart(){ try { return JSON.parse(localStorage.getItem("ss_cart") || "[]"); } catch(e){ return []; } },
    setCart(c){ localStorage.setItem("ss_cart", JSON.stringify(c)); SS.badge(); },
    addToCart(id, qty){
      const c = SS.getCart();
      const line = c.find(l => l.id === id);
      if (line) line.qty = Math.min(10, line.qty + (qty || 1));
      else c.push({ id, qty: qty || 1 });
      SS.setCart(c);
      SS.toast("Added to cart");
    },
    getWish(){ try { return JSON.parse(localStorage.getItem("ss_wish") || "[]"); } catch(e){ return []; } },
    toggleWish(id, el){
      let w = SS.getWish();
      if (w.includes(id)) { w = w.filter(x => x !== id); SS.toast("Removed from wishlist"); }
      else { w.push(id); SS.toast("Saved to wishlist"); }
      localStorage.setItem("ss_wish", JSON.stringify(w));
      if (el) el.classList.toggle("on", w.includes(id));
    },
    badge(){
      const n = SS.getCart().reduce((s, l) => s + l.qty, 0);
      document.querySelectorAll(".cart-count").forEach(b => { b.textContent = n; b.style.display = n ? "flex" : "none"; });
    },
    toast(msg){
      let t = document.querySelector(".toast");
      if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
      t.textContent = msg; t.classList.add("show");
      clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2200);
    },
    whatsappOrder(text){
      if (SHOP.whatsapp) return "https://wa.me/" + SHOP.whatsapp + "?text=" + encodeURIComponent(text);
      return null;
    }
  };

  function cardHTML(p){
    const wished = SS.getWish().includes(p.id) ? " on" : "";
    return `<a class="pcard reveal" href="product.html?id=${p.id}">
      <div class="pimg">
        <img loading="lazy" src="${p.img}" alt="${p.name}">
        ${p.badge ? `<span class="pbadge">${p.badge}</span>` : ""}
        <span class="poff">Demo price</span>
        <button class="wish${wished}" aria-label="wishlist" onclick="event.preventDefault();SS.toggleWish('${p.id}',this)">${SVG.heart}</button>
      </div>
      <div class="pbody">
        <div class="pname">${p.name}</div>
        <div class="prate"><span class="stars">${SS.stars(p.rating)}</span> ${p.rating} · sample rating</div>
        <div class="pprice"><span class="now">${SS.fmt(p.price)}</span><span class="save">demo price</span></div>
      </div>
    </a>`;
  }
  window.SS.cardHTML = cardHTML;

  function shell(){
    const page = document.body.dataset.page || "";
    const active = c => (page === "shop" && document.body.dataset.cat === c) ? " class=active" : "";
    const head = `
      <div class="demo-ribbon">Design sample — <b>AI-generated demo photos, demo prices</b> — not a live store, no real orders</div>
      <header class="site">
        <div class="container hd-main">
          <a class="logo" href="index.html"><span class="l1">Saree</span> <span class="l2">Studio</span><small>${SHOP.tagline}</small></a>
          <form class="search-wrap" action="shop.html" method="get">
            <input name="q" placeholder="Search sarees, fabrics, colours…" aria-label="Search">
            <button type="submit">${""}<span>Search</span>&#128269;</button>
          </form>
          <div class="hd-actions">
            <a class="hd-act" href="shop.html?wish=1">${SVG.heart}<span>Wishlist</span></a>
            <a class="hd-act" href="cart.html">${SVG.cart}<span>Cart</span><b class="cart-count"></b></a>
          </div>
        </div>
        <nav class="cats"><div class="container"><ul>
          ${CATEGORIES.map(c => `<li><a${active(c)} href="shop.html${c === "All" ? "" : "?cat=" + encodeURIComponent(c)}">${c}</a></li>`).join("")}
        </ul></div></nav>
      </header>`;
    const foot = `
      <footer class="site">
        <div class="container ft-grid">
          <div class="ft-brand">
            <a class="logo" href="index.html"><span class="l1">Saree</span> <span class="l2">Studio</span></a>
            <p>Handpicked sarees for every occasion — from daily elegance to bridal grandeur. This is a design sample of the upcoming online store.</p>
          </div>
          <div><h4>Shop</h4>
            <a href="shop.html">All sarees</a><a href="shop.html?cat=Silk">Silk</a><a href="shop.html?cat=Bridal">Bridal</a><a href="shop.html?cat=Party%20Wear">Party wear</a>
          </div>
          <div><h4>Help</h4>
            <a href="cart.html">Your cart</a><a href="checkout.html">Checkout</a><a href="#" onclick="SS.toast('Sample only — policies will be published with the live store');return false">Returns &amp; exchange</a>
          </div>
          <div><h4>Visit / contact</h4>
            <a href="#" onclick="SS.toast('Shop address, phone and WhatsApp will appear here once confirmed');return false">Store details coming soon</a>
            <a href="#" onclick="SS.toast('WhatsApp ordering will be connected once the shop number is confirmed');return false">Order on WhatsApp</a>
          </div>
        </div>
        <div class="container ft-bottom">
          <span>© 2026 Saree Studio — design sample</span>
          <span>Demo catalog · no real orders or payments</span>
        </div>
      </footer>
      <nav class="bottom-nav">
        <a href="index.html" class="${page === "home" ? "on" : ""}">${SVG.home}<span>Home</span></a>
        <a href="shop.html" class="${page === "shop" ? "on" : ""}">${SVG.grid}<span>Shop</span></a>
        <a href="shop.html?wish=1">${SVG.heart}<span>Wishlist</span></a>
        <a href="cart.html" class="bn-cart ${page === "cart" ? "on" : ""}">${SVG.cart}<span>Cart</span><b class="cart-count"></b></a>
      </nav>
      <button class="back-top" aria-label="back to top" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>`;
    document.body.insertAdjacentHTML("afterbegin", head);
    document.body.insertAdjacentHTML("beforeend", foot);
    SS.badge();

    // reveal-on-scroll
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("vis"); io.unobserve(e.target); } }), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    setTimeout(() => document.querySelectorAll(".reveal").forEach(el => el.classList.add("vis")), 900);
    const bt = document.querySelector(".back-top");
    addEventListener("scroll", () => { if (bt) bt.style.display = scrollY > 500 ? "flex" : "none"; }, { passive: true });
  }
  window.SS.observeReveals = function(){
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("vis"); io.unobserve(e.target); } }), { threshold: .12 });
    document.querySelectorAll(".reveal:not(.vis)").forEach(el => io.observe(el));
    setTimeout(() => document.querySelectorAll(".reveal").forEach(el => el.classList.add("vis")), 900);
  };
  document.addEventListener("DOMContentLoaded", shell);
})();
