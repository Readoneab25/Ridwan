



window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
  });

  // Smooth scroll
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
  });

  // Typing Effect
  const typingText = document.querySelector(".typing");
  const words = ["Fresh Meal", "Nutritious Meal", "Sustainable Food"];
  let i = 0, j = 0, currentWord = "", isDeleting = false;
  function type() {
    currentWord = words[i];
    typingText.textContent = currentWord.slice(0, j);
    if (!isDeleting && j < currentWord.length) { j++; setTimeout(type, 100); }
    else if (isDeleting && j > 0) { j--; setTimeout(type, 50); }
    else { isDeleting = !isDeleting; if (!isDeleting) i = (i + 1) % words.length; setTimeout(type, 1000); }
  }
  type();

  // Reveal on Scroll
  const reveals = document.querySelectorAll(".reveal");
  window.addEventListener("scroll", () => {
    for (let el of reveals) {
      const windowHeight = window.innerHeight;
      const revealTop = el.getBoundingClientRect().top;
      if (revealTop < windowHeight - 100) el.classList.add("active");
    }
  });

  // Counters
  const stats = document.querySelectorAll(".stat h2");
  let started = false;
  window.addEventListener("scroll", () => {
    if (!started && document.querySelector("#about").getBoundingClientRect().top < window.innerHeight - 100) {
      stats[0].textContent = 10;
      stats[1].textContent = 500;
      stats[2].textContent = 1200;
      started = true;
    }
  });

  // Testimonials carousel
  const testimonials = document.querySelectorAll(".testimonial");
  let index = 0;
  setInterval(() => {
    testimonials[index].classList.remove("active");
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add("active");
  }, 4000);

  // Back to top button
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Dark mode toggle
  document.querySelector(".toggle-dark").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Contact form alert
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
  });
//sidebar
document.getElementById("check")
document.getElementById("side")
    document.getElementById("tog")
    document.getElementById("to")
    side.style.transition = "1s"
to.onclick = function () {
    tog.style.display = "flex"
    to.style.display = "none"
    side.style.display = "block"
    side.style.transition = "1s"
}
tog.onclick = function () {
    side.style.display = "none"
    tog.style.display = "none"
    to.style.display = "flex"
    side.style.transition = "1s"
}
