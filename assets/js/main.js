/* Shared shell + cart store for the Saree Sansar design sample */
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
    prod: id => PRODUCTS.find(p => p.id === id),
    stars: r => {
      const f = Math.round(r);
      return "★".repeat(f) + "☆".repeat(5 - f);
    },
    getCart(){ try { return JSON.parse(localStorage.getItem("ss_cart") || "[]"); } catch(e){ return []; } },
    setCart(c){ localStorage.setItem("ss_cart", JSON.stringify(c)); SS.badge(); },
    lineKey: l => l.id + "|" + (l.opt || ""),
    addToCart(id, qty, opt){
      const c = SS.getCart();
      const key = id + "|" + (opt || "");
      const line = c.find(l => SS.lineKey(l) === key);
      if (line) line.qty = Math.min(10, line.qty + (qty || 1));
      else c.push({ id, qty: qty || 1, opt: opt || "" });
      SS.setCart(c);
      SS.toast("Added to cart");
      SS.openCartDrawer();
    },
    updateLine(key, d){
      const c = SS.getCart();
      const l = c.find(x => SS.lineKey(x) === key);
      if (!l) return;
      l.qty = Math.max(1, Math.min(10, l.qty + d));
      SS.setCart(c);
    },
    removeLine(key){ SS.setCart(SS.getCart().filter(x => SS.lineKey(x) !== key)); },
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
    siteUrl: "https://akash991833.github.io/saree-store-sample/",
    productLink: p => SS.siteUrl + "pv-" + p.id + ".html",
    async sharePhoto(id, extraText){
      const p = SS.prod(id); if (!p) return;
      const msg = (extraText || "") + "\n" + p.name + " (Code: " + p.id + ") — " + SS.fmt(p.price) + " demo price\n" + SS.productLink(p);
      try {
        const blob = await (await fetch(p.img)).blob();
        const file = new File([blob], p.id + "-photo.jpg", { type: blob.type || "image/jpeg" });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file], text: msg, title: p.name });
          return;
        }
      } catch(e){ if (e && e.name === "AbortError") return; }
      SS.toast("Direct photo share needs a phone browser - the order link shows the photo preview instead");
    },
    waGeneral(){
      const url = SS.whatsappOrder("Namaste! I have a question about a product at Saree Sansar.");
      if (url) open(url, "_blank");
      else SS.toast("WhatsApp ordering is not available in this preview");
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
        ${p.stock === "low" ? `<span class="pstock low">Few left</span>` : p.stock === "out" ? `<span class="pstock out">Sold out (demo)</span>` : ""}
        <span class="poff">Demo price</span>
        <button class="qv" onclick="event.preventDefault();SS.quickView('${p.id}')">Quick view</button>
        <button class="wish${wished}" aria-label="wishlist" onclick="event.preventDefault();SS.toggleWish('${p.id}',this)">${SVG.heart}</button>
      </div>
      <div class="pbody${p.stock === "out" ? " soldout" : ""}">
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
      <div class="demo-ribbon">Design sample — <b>AI-generated demo photos, demo prices</b> — order requests go to the shop on WhatsApp; nothing is booked until the shop confirms</div>
      <header class="site">
        <div class="container hd-main">
          <a class="logo" href="index.html"><span class="l1">Saree</span> <span class="l2">Sansar</span><small>${SHOP.tagline}</small></a>
          <form class="search-wrap" action="shop.html" method="get">
            <input name="q" placeholder="Search sarees, kids, cosmetics…" aria-label="Search">
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
            <a class="logo" href="index.html"><span class="l1">Saree</span> <span class="l2">Sansar</span></a>
            <p>Sarees, kids' clothing and cosmetics for every occasion. This is a design sample of the upcoming online store.</p>
          </div>
          <div><h4>Shop</h4>
            <a href="shop.html">All products</a><a href="shop.html?cat=Silk">Silk</a><a href="shop.html?cat=Bridal">Bridal</a><a href="shop.html?cat=Party%20Wear">Party wear</a><a href="shop.html?cat=Kids%27%20Wear">Kids' wear</a><a href="shop.html?cat=Cosmetics">Cosmetics</a>
          </div>
          <div><h4>Help</h4>
            <a href="cart.html">Your cart</a><a href="checkout.html">Checkout</a><a href="#" onclick="SS.toast('Sample only — policies will be published with the live store');return false">Returns &amp; exchange</a>
          </div>
          <div><h4>Shop owner</h4>
            <a href="owner.html">Owner view (demo)</a>
          </div>
          <div><h4>Visit / contact</h4>
            <a href="#" onclick="SS.toast('Shop address, phone and WhatsApp will appear here once confirmed');return false">Store details coming soon</a>
            <a href="#" onclick="SS.waGeneral();return false">Order on WhatsApp</a>
          </div>
        </div>
        <div class="container ft-bottom">
          <span>© 2026 Saree Sansar — design sample</span>
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

/* ===== Advanced storefront features (demo) ===== */
(function(){
  // ---------- option chips ----------
  SS.optChips = function(p, sel){
    if (!p.options) return "";
    const cur = sel || p.options.choices[0];
    return `<div class="opt-row"><span class="opt-label">${p.options.label}:</span><div class="opt-chips">` +
      p.options.choices.map(c => `<button type="button" class="opt-chip${c === cur ? " on" : ""}" data-opt="${c}" onclick="SS.pickOpt(this)">${c}</button>`).join("") +
      `</div></div>`;
  };
  SS.pickOpt = function(btn){
    btn.closest(".opt-chips").querySelectorAll(".opt-chip").forEach(b => b.classList.remove("on"));
    btn.classList.add("on");
    const hidden = btn.closest(".opt-scope")?.querySelector(".opt-value");
    if (hidden) hidden.value = btn.dataset.opt;
  };
  SS.chosenOpt = function(scope){
    const on = (scope || document).querySelector(".opt-scope .opt-chip.on");
    return on ? on.dataset.opt : "";
  };

  // ---------- cart drawer ----------
  function drawerHTML(){
    const c = SS.getCart();
    const items = c.map(l => {
      const p = SS.prod(l.id); if (!p) return "";
      return `<div class="cd-item">
        <img src="${p.img}" alt="${p.name}">
        <div class="cd-info">
          <div class="cd-name">${p.name}</div>
          ${l.opt ? `<div class="cd-opt">${p.options ? p.options.label : "Option"}: ${l.opt}</div>` : ""}
          <div class="cd-price">${SS.fmt(p.price)} · demo price</div>
        </div>
        <div class="cd-right">
          <span class="qty"><button onclick="SS.updateLine('${SS.lineKey(l)}',-1);SS.refreshDrawer()">−</button><span>${l.qty}</span><button onclick="SS.updateLine('${SS.lineKey(l)}',1);SS.refreshDrawer()">+</button></span>
          <button class="remove" onclick="SS.removeLine('${SS.lineKey(l)}');SS.refreshDrawer()">✕</button>
        </div>
      </div>`;
    }).join("");
    const total = c.reduce((s,l) => { const p = SS.prod(l.id); return p ? s + p.price*l.qty : s; }, 0);
    return `<div class="cd-head"><b>Your cart (${c.reduce((s,l)=>s+l.qty,0)})</b><button class="cd-close" onclick="SS.closeCartDrawer()">✕</button></div>
      ${c.length ? `<div class="cd-items">${items}</div>
      <div class="cd-foot">
        <div class="cd-total"><span>Demo total</span><b>${SS.fmt(total)}</b></div>
        <a class="btn btn-maroon" href="checkout.html">Order on WhatsApp</a>
        <a class="btn btn-outline" href="cart.html">View full cart</a>
        <p class="cd-note">Demo prices — the shop confirms availability and total in chat</p>
      </div>` : `<div class="cd-empty">Your cart is empty.<br><a href="shop.html">Browse the collection →</a></div>`}`;
  }
  SS.openCartDrawer = function(){
    let d = document.querySelector(".cart-drawer");
    if (!d){
      document.body.insertAdjacentHTML("beforeend", `<div class="drawer-scrim" onclick="SS.closeCartDrawer()"></div><aside class="cart-drawer" aria-label="cart"></aside>`);
      d = document.querySelector(".cart-drawer");
    }
    d.innerHTML = drawerHTML();
    document.body.classList.add("drawer-open");
  };
  SS.refreshDrawer = function(){
    const d = document.querySelector(".cart-drawer");
    if (d) d.innerHTML = drawerHTML();
  };
  SS.closeCartDrawer = function(){ document.body.classList.remove("drawer-open"); };

  // ---------- quick view ----------
  SS.quickView = function(id){
    const p = SS.prod(id); if (!p) return;
    let qv = document.querySelector(".qv-modal");
    if (!qv){
      document.body.insertAdjacentHTML("beforeend", `<div class="qv-scrim" onclick="SS.closeQuickView()"></div><div class="qv-modal" role="dialog" aria-label="quick view"></div>`);
      qv = document.querySelector(".qv-modal");
    }
    const out = p.stock === "out";
    qv.innerHTML = `<button class="qv-close" onclick="SS.closeQuickView()">✕</button>
      <div class="qv-grid">
        <div class="qv-img"><img src="${p.img}" alt="${p.name}"></div>
        <div class="opt-scope">
          <input type="hidden" class="opt-value" value="${p.options ? p.options.choices[0] : ""}">
          <div class="qv-cat">${p.category} · AI-generated demo photo</div>
          <h3>${p.name}</h3>
          <div class="prate"><span class="stars">${SS.stars(p.rating)}</span> ${p.rating} · sample rating</div>
          <div class="pprice" style="margin:.5rem 0"><span class="now">${SS.fmt(p.price)}</span><span class="save">demo price</span></div>
          ${p.stock === "low" ? `<div class="stock-line low">Few left (demo stock)</div>` : out ? `<div class="stock-line out">Sold out in this demo</div>` : `<div class="stock-line in">In stock (demo stock)</div>`}
          ${SS.optChips(p)}
          <div class="qv-actions">
            <button class="btn btn-outline" ${out ? "disabled" : ""} onclick="SS.addToCart('${p.id}',1,SS.chosenOpt(this.closest('.opt-scope')));SS.closeQuickView()">Add to cart</button>
            <button class="btn btn-maroon" ${out ? "disabled" : ""} onclick="SS.qvOrder('${p.id}')">Order on WhatsApp</button>
          </div>
          <a class="qv-more" href="product.html?id=${p.id}">Full details →</a>
        </div>
      </div>`;
    document.body.classList.add("qv-open");
  };
  SS.qvOrder = function(id){
    const p = SS.prod(id);
    const opt = SS.chosenOpt(document.querySelector(".qv-modal"));
    const optTxt = opt && p.options ? ` (${p.options.label}: ${opt})` : "";
    const msg = `Namaste! I would like to order: ${p.name}${optTxt} x 1 — ${SS.fmt(p.price)} (demo price).\nCode: ${p.id}\nProduct page + photo: ${SS.siteUrl}pv-${p.id}.html\nPlease confirm availability and final total.`;
    const url = SS.whatsappOrder(msg);
    if (url) open(url, "_blank");
    else SS.toast("WhatsApp ordering is not available in this preview");
  };
  SS.closeQuickView = function(){ document.body.classList.remove("qv-open"); };

  // ---------- search suggestions ----------
  function wireSearch(){
    const form = document.querySelector(".search-wrap");
    if (!form) return;
    const inp = form.querySelector("input");
    const box = document.createElement("div");
    box.className = "suggest";
    form.appendChild(box);
    inp.setAttribute("autocomplete", "off");
    inp.addEventListener("input", () => {
      const q = inp.value.trim().toLowerCase();
      if (q.length < 2) { box.classList.remove("show"); return; }
      const hits = PRODUCTS.filter(p => (p.name + " " + p.fabric + " " + p.color + " " + p.category).toLowerCase().includes(q)).slice(0, 6);
      if (!hits.length) { box.innerHTML = `<div class="sg-none">No matches in the demo catalog</div>`; box.classList.add("show"); return; }
      box.innerHTML = hits.map(p => `<a class="sg-item" href="product.html?id=${p.id}"><img src="${p.img}" alt=""><span>${p.name}<small>${p.category} · ${SS.fmt(p.price)} demo</small></span></a>`).join("");
      box.classList.add("show");
    });
    document.addEventListener("click", e => { if (!form.contains(e.target)) box.classList.remove("show"); });
  }

  // ---------- recently viewed ----------
  SS.pushRecent = function(id){
    try {
      let r = JSON.parse(localStorage.getItem("ss_recent") || "[]");
      r = [id, ...r.filter(x => x !== id)].slice(0, 8);
      localStorage.setItem("ss_recent", JSON.stringify(r));
    } catch(e){}
  };
  SS.recentHTML = function(excludeId){
    let r = [];
    try { r = JSON.parse(localStorage.getItem("ss_recent") || "[]"); } catch(e){}
    const items = r.filter(x => x !== excludeId).map(x => SS.prod(x)).filter(Boolean).slice(0, 4);
    if (!items.length) return "";
    return `<section class="block"><div class="sec-head"><span class="kick">Your browsing</span><h2>Recently viewed</h2><div class="flourish">✦</div></div>
      <div class="pgrid">${items.map(SS.cardHTML).join("")}</div></section>`;
  };

  document.addEventListener("DOMContentLoaded", wireSearch);
})();
