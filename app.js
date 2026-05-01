(function () {
  var revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) return;
  var statCards = Array.prototype.slice.call(document.querySelectorAll("#performance-stats .stat-card"));
  var statState = statCards.map(function (card) {
    var numberEl = card.querySelector(".stat-number");
    return numberEl ? { card: card, el: numberEl, desired: 0, current: 0 } : null;
  }).filter(Boolean);
  var animFrame = null;

  function formatStatValue(el, value) {
    var target = Number(el.dataset.target || 0);
    var format = el.dataset.format || "plain";
    var clamped = Math.max(0, Math.min(target, Math.round(value)));

    if (format === "range10") {
      if (clamped <= 0) el.textContent = "0";
      else if (clamped < 10) el.textContent = String(clamped);
      else el.textContent = "10-" + clamped;
      return;
    }

    if (format === "range2x") {
      if (clamped <= 0) el.textContent = "0x";
      else if (clamped < 2) el.textContent = clamped + "x";
      else el.textContent = "2-" + clamped + "x";
      return;
    }

    if (format === "ltMin") {
      if (clamped <= 0) el.textContent = "0 min";
      else el.textContent = "<" + clamped + " min";
      return;
    }

    if (format === "range20pct") {
      if (clamped <= 0) el.textContent = "0%";
      else if (clamped < 20) el.textContent = clamped + "%";
      else el.textContent = "20-" + clamped + "%";
      return;
    }

    el.textContent = String(clamped);
  }

  function animateStats() {
    var stillAnimating = false;
    statState.forEach(function (item) {
      var delta = item.desired - item.current;
      if (Math.abs(delta) > 0.02) {
        item.current += delta * 0.12;
        stillAnimating = true;
      } else {
        item.current = item.desired;
      }
      formatStatValue(item.el, item.current);
    });

    if (stillAnimating) {
      animFrame = window.requestAnimationFrame(animateStats);
    } else {
      animFrame = null;
    }
  }

  function updateScrollTargets() {
    if (!statState.length) return;
    var viewportMid = window.innerHeight / 2;
    var influenceRange = window.innerHeight * 0.95;
    statState.forEach(function (item) {
      var rect = item.card.getBoundingClientRect();
      var cardMid = rect.top + rect.height / 2;
      var rawProgress;
      // Once the card center is at or above the viewport middle (scrolled past mid),
      // hold full values instead of counting back down.
      if (cardMid <= viewportMid) {
        rawProgress = 1;
      } else {
        var distanceBelow = cardMid - viewportMid;
        rawProgress = 1 - Math.min(distanceBelow / influenceRange, 1);
      }
      var eased = rawProgress * rawProgress * (3 - 2 * rawProgress);
      var target = Number(item.el.dataset.target || 0);
      item.desired = target * eased;
    });
    if (!animFrame) animFrame = window.requestAnimationFrame(animateStats);
  }

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) {
      item.classList.add("in");
    });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealItems.forEach(function (item) { observer.observe(item); });
  }

  var ticking = false;
  function onScrollOrResize() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      updateScrollTargets();
      ticking = false;
    });
  }

  updateScrollTargets();
  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize);
}());

(function () {
  var leadForm = document.getElementById("lead-form");
  var statusEl = document.getElementById("form-status");
  if (!leadForm || !statusEl) return;

  leadForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var payload = {
      name: leadForm.name.value.trim(),
      phone: leadForm.phone.value.trim(),
      businessType: leadForm.businessType.value
    };

    if (!payload.name || !payload.phone || !payload.businessType) {
      statusEl.textContent = "Please complete all fields.";
      statusEl.className = "status err";
      return;
    }

    try {
      var existing = JSON.parse(localStorage.getItem("active8_leads") || "[]");
      existing.push({
        submittedAt: new Date().toISOString(),
        name: payload.name,
        phone: payload.phone,
        businessType: payload.businessType
      });
      localStorage.setItem("active8_leads", JSON.stringify(existing));
      statusEl.textContent = "Thanks. We received your info and will contact you soon.";
      statusEl.className = "status ok";
      leadForm.reset();
    } catch (err) {
      statusEl.textContent = "Your browser blocked local storage. Please book through Calendly.";
      statusEl.className = "status err";
    }
  });
}());
