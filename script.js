(() => {
  const resetToTop = () => {
    if (window.location.hash) return;
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.scrollTop = 0;
    document.body.scrollTop = 0;
    root.style.scrollBehavior = previousScrollBehavior;
  };

  const scheduleRootReset = () => {
    if (window.location.hash) return;
    resetToTop();
    [0, 60, 160, 320, 600].forEach((delay) => window.setTimeout(resetToTop, delay));
  };

  scheduleRootReset();
  window.addEventListener("DOMContentLoaded", scheduleRootReset, { once: true });
  window.addEventListener("load", scheduleRootReset, { once: true });
  window.addEventListener("pageshow", scheduleRootReset);
  window.addEventListener("beforeunload", resetToTop);
  window.addEventListener("pagehide", resetToTop);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-navigation]");
  const updateHeaderState = () => document.body.classList.toggle("is-scrolled", window.scrollY > 18);

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  const closeMenu = () => {
    if (!menuToggle || !navigation) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation?.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navigation?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (link.getAttribute("target") !== "_blank") closeMenu();
    });
  });

  const revealItems = document.querySelectorAll(".reveal:not(.reveal--visible)");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" }
    );
    revealItems.forEach((item) => revealObserver.observe(item));
  }

  const process = document.querySelector("[data-process]");
  if (process && !reducedMotion && "IntersectionObserver" in window) {
    const processObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (!entry.isIntersecting) return;
        process.classList.add("is-active");
        observer.disconnect();
      },
      { threshold: 0.3 }
    );
    processObserver.observe(process);
  } else {
    process?.classList.add("is-active");
  }

  const magnetic = document.querySelector("[data-magnetic]");
  const canAnimateBrain = !reducedMotion && magnetic;

  if (canAnimateBrain) {
    const canMagnetize = window.matchMedia("(pointer: fine)").matches;
    let targetX = 0;
    let targetY = 0;
    let targetRotation = 0;
    let currentX = 0;
    let currentY = 0;
    let currentRotation = 0;
    let ambientTarget = { x: 0, y: 0, rotation: 0 };
    let nextAmbientShift = 0;
    let pointerActive = false;
    let frame = null;

    const updateAmbientTarget = (time) => {
      if (time < nextAmbientShift) return;
      ambientTarget = {
        x: (Math.random() * 2 - 1) * 12,
        y: (Math.random() * 2 - 1) * 10,
        rotation: (Math.random() * 2 - 1) * 0.8,
      };
      nextAmbientShift = time + 2600 + Math.random() * 2200;
    };

    const renderMagnet = (time) => {
      if (!pointerActive) {
        updateAmbientTarget(time);
        const seconds = time / 1000;
        targetX = ambientTarget.x + Math.cos(seconds * 0.58) * 3.2;
        targetY = ambientTarget.y + Math.sin(seconds * 0.52) * 3.2;
        targetRotation = ambientTarget.rotation + Math.sin(seconds * 0.42) * 0.16;
      }

      const easing = pointerActive ? 0.11 : 0.055;
      currentX += (targetX - currentX) * easing;
      currentY += (targetY - currentY) * easing;
      currentRotation += (targetRotation - currentRotation) * easing;
      magnetic.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0) rotate(${currentRotation.toFixed(2)}deg)`;
      frame = requestAnimationFrame(renderMagnet);
    };

    const startFrame = () => {
      if (!frame) frame = requestAnimationFrame(renderMagnet);
    };

    const updateCursorTarget = (event) => {
      const bounds = magnetic.getBoundingClientRect();
      targetX = Math.max(-16, Math.min(16, ((event.clientX - bounds.left) / bounds.width - 0.5) * 32));
      targetY = Math.max(-16, Math.min(16, ((event.clientY - bounds.top) / bounds.height - 0.5) * 32));
      targetRotation = Math.max(-0.9, Math.min(0.9, targetX * 0.055));
      startFrame();
    };

    startFrame();

    if (canMagnetize) {
      magnetic.addEventListener("pointerenter", () => {
        pointerActive = true;
        startFrame();
      });
      magnetic.addEventListener("pointermove", updateCursorTarget);
      magnetic.addEventListener("pointerleave", () => {
        pointerActive = false;
        startFrame();
      });
    }
  }
})();
