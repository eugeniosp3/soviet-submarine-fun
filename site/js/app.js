(function () {
  const progress = document.querySelector(".progress");
  const dots = [...document.querySelectorAll(".chap-dots a")];
  const chapters = [...document.querySelectorAll(".chapter")];

  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const p = max > 0 ? h.scrollTop / max : 0;
    if (progress) progress.style.width = (p * 100).toFixed(2) + "%";

    let current = 0;
    chapters.forEach((ch, i) => {
      const top = ch.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.38) current = i;
    });
    dots.forEach((d, i) => d.classList.toggle("on", i === current));
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const jump = new URLSearchParams(location.search).get("s");
  if (jump) {
    const el = document.getElementById(jump);
    if (el) {
      el.scrollIntoView();
      onScroll();
    }
  }

  const shot = new URLSearchParams(location.search).get("shot");
  if (shot) {
    const el = document.getElementById(shot);
    if (el) {
      document.querySelectorAll(".hero, .chapter").forEach((n) => {
        if (n !== el) n.style.display = "none";
      });
      window.scrollTo(0, 0);
    }
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("in");
      });
    },
    { threshold: 0.28 }
  );
  document.querySelectorAll(".diagram").forEach((el) => io.observe(el));
})();
