let mainNavLinks = document.querySelectorAll(".nav-link");
let mainSections = document.querySelectorAll("main section");

window.addEventListener("scroll", (event) => {
  let fromTop = window.scrollY - 50;

  mainNavLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop + 55 &&
      section.offsetTop + section.offsetHeight > fromTop + 55
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

// Nav
gsap.to("nav div:nth-child(1)", {
  duration: 1,
  delay: 1,
  y: 0,
  opacity: 1,
  ease: "power3",
});

gsap.to("nav div:nth-child(2)", {
  duration: 1,
  delay: 1.3,
  x: 0,
  opacity: 1,
  ease: "power3",
});

gsap.to("nav div:nth-child(3)", {
  duration: 1,
  delay: 1.6,
  x: 0,
  opacity: 1,
  ease: "power3",
});

// Geometry
gsap.to(".circle", {
  duration: 2,
  delay: 0.5,
  scale: 1,
  ease: "power3",
});

gsap.to(".vertical-line", {
  duration: 2,
  delay: 0.5,
  scaleY: 1,
  transformOrigin: "top",
  ease: "power3",
});

gsap.to(".horizontal-line", {
  duration: 2,
  delay: 0.5,
  scaleX: 1,
  transformOrigin: "left",
  ease: "power3",
});

// Intro
gsap.to(".intro img", {
  duration: 1,
  opacity: 1,
  ease: "power3",
});

gsap.to(".intro h1", {
  duration: 1,
  delay: 1.8,
  y: 0,
  opacity: 1,
  ease: "power3",
});

gsap.to(".star", {
  duration: 0.5,
  delay: 1.8,
  opacity: 1,
  ease: "power3",
});

gsap.to(".intro h2", {
  duration: 1,
  delay: 1.9,
  y: 0,
  opacity: 1,
  ease: "power3",
});

gsap.to(".intro p", {
  duration: 1,
  delay: 2,
  y: 0,
  opacity: 1,
  ease: "power3",
});

gsap.to(".socials > *", {
  duration: 1,
  delay: 2.3,
  y: 0,
  opacity: 1,
  stagger: 0.1,
  ease: "power3",
});

// Work
gsap.to("figure img", {
  duration: 1,
  delay: 1,
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  ease: "power4.inOut",
});

gsap.to(".project h3", {
  duration: 1,
  delay: 1.5,
  y: 0,
  opacity: 1,
  ease: "power3",
});

gsap.to(".project p", {
  duration: 1,
  delay: 1.7,
  y: 0,
  opacity: 1,
  stagger: 0.2,
  ease: "power3",
});

// About
gsap.to("#about img", {
  duration: 1,
  delay: 1,
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  ease: "power4.inOut",
});

gsap.to("#about h1", {
  duration: 1,
  delay: 0.5,
  y: 0,
  opacity: 1,
  ease: "power3",
});

gsap.to("#about h2", {
  duration: 1,
  delay: 0.6,
  y: 0,
  opacity: 1,
  ease: "power3",
});

gsap.to("#about p", {
  duration: 1,
  delay: 0.7,
  y: 0,
  opacity: 1,
  stagger: 0.2,
  ease: "power3",
});

gsap.to(".cv", {
  duration: 1,
  delay: 1.1,
  y: 0,
  opacity: 1,
  ease: "power3",
});

// Contact
gsap.to(".contact p", {
  duration: 1,
  delay: 1.6,
  y: 0,
  opacity: 1,
  ease: "power3",
});

// Contact
gsap.to("footer > *", {
  duration: 1,
  delay: 1.6,
  y: 0,
  opacity: 1,
  stagger: 0.2,
  ease: "power3",
});
