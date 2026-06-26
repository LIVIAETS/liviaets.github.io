/* LIVIA — interactions: theme, nav, reveals, counters, hero canvas */
(function () {
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Theme toggle ---- */
  window.toggleTheme = function () {
    var root = document.documentElement;
    var cur = root.getAttribute("data-theme");
    var sysDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var next = cur ? (cur === "dark" ? "light" : "dark") : (sysDark ? "light" : "dark");
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  };

  /* ---- Mobile nav ---- */
  function initNav() {
    var burger = document.querySelector(".nav-burger");
    var links = document.querySelector(".nav-links");
    if (!burger || !links) return;
    burger.addEventListener("click", function () { links.classList.toggle("open"); });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  /* ---- Scroll reveal ---- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window) || reduce) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- Animated counters ---- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-target"));
    var pre = el.getAttribute("data-prefix") || "";
    var suf = el.getAttribute("data-suffix") || "";
    var dec = parseInt(el.getAttribute("data-dec") || "0", 10);
    if (isNaN(target) || reduce) { el.textContent = pre + target + suf; return; }
    var dur = 1400, start = performance.now();
    function step(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = (target * eased).toFixed(dec);
      el.textContent = pre + val + suf;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = pre + target.toFixed(dec) + suf;
    }
    requestAnimationFrame(step);
  }
  function initCounters() {
    var els = document.querySelectorAll("[data-target]");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) { els.forEach(animateCount); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animateCount(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- Hero canvas: vision constellation ---- */
  function initHero() {
    var canvas = document.getElementById("hero-canvas");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w, h, pts, raf, mouse = { x: -9999, y: -9999 };

    function color() {
      return getComputedStyle(document.documentElement).getPropertyValue("--dot").trim() || "rgba(150,160,200,.5)";
    }
    function resize() {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.min(Math.floor((w * h) / 14000), 110);
      pts = [];
      for (var i = 0; i < count; i++) {
        pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35 });
      }
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      var c = color();
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        var dxm = p.x - mouse.x, dym = p.y - mouse.y;
        if (dxm * dxm + dym * dym < 16000) { p.x += dxm * 0.012; p.y += dym * 0.012; }
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.7, 0, Math.PI * 2);
        ctx.fillStyle = c; ctx.fill();
      }
      for (var a = 0; a < pts.length; a++) {
        for (var b = a + 1; b < pts.length; b++) {
          var dx = pts[a].x - pts[b].x, dy = pts[a].y - pts[b].y;
          var d2 = dx * dx + dy * dy;
          if (d2 < 16000) {
            var alpha = (1 - d2 / 16000) * 0.5;
            ctx.strokeStyle = c.replace(/[\d.]+\)$/, alpha.toFixed(2) + ")");
            ctx.lineWidth = 1; ctx.beginPath();
            ctx.moveTo(pts[a].x, pts[a].y); ctx.lineTo(pts[b].x, pts[b].y); ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }
    resize();
    if (reduce) { draw(); cancelAnimationFrame(raf); return; }
    draw();
    window.addEventListener("resize", function () { cancelAnimationFrame(raf); resize(); draw(); });
    canvas.parentElement.addEventListener("mousemove", function (e) {
      var r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    });
    canvas.parentElement.addEventListener("mouseleave", function () { mouse.x = -9999; mouse.y = -9999; });
  }

  /* ---- Active nav link ---- */
  function initActive() {
    var path = location.pathname.replace(/index\.html$/, "").replace(/\/$/, "");
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      var href = a.getAttribute("href").replace(/index\.html$/, "").replace(/\/$/, "");
      if (href && href !== "/" && path.indexOf(href.replace(/^\.\//, "")) !== -1) a.classList.add("active");
    });
  }

  /* ---- Nav shadow on scroll ---- */
  function initScroll() {
    var nav = document.querySelector(".nav");
    if (!nav) return;
    function on() { nav.style.boxShadow = window.scrollY > 8 ? "var(--shadow-sm)" : "none"; }
    on(); window.addEventListener("scroll", on, { passive: true });
  }

  /* ---- Reading progress bar (blog pages) ---- */
  function initProgress() {
    var bar = document.querySelector(".reading-progress");
    if (!bar) return;
    function on() {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var p = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
      bar.style.width = (p * 100).toFixed(2) + "%";
    }
    on(); window.addEventListener("scroll", on, { passive: true }); window.addEventListener("resize", on);
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav(); initReveal(); initCounters(); initHero(); initActive(); initScroll(); initProgress();
  });
})();
