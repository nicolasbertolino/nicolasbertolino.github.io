// GSAP
gsap.to("nav *", {
  y: 0,
  opacity: 1,
  stagger: 0.05,
  ease: "power3",
});

// Geometry
gsap.to(".star", {
  duration: 0.5,
  delay: 2,
  opacity: 1,
  ease: "power3",
});

gsap.to(".circle", {
  duration: 2,
  delay: 0.5,
  scale: 1,
  ease: "power3",
});

gsap.to(".vertical-line", {
  duration: 2,
  delay: 0.2,
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

// Socials
gsap.to(".socials > *", {
  delay: 1.5,
  x: 0,
  opacity: 1,
  stagger: 0.1,
  ease: "power4",
});

// Intro
gsap.to(".intro h1", {
  duration: 1,
  delay: 1,
  y: 0,
  opacity: 1,
  ease: "power3",
});

gsap.to(".intro h2", {
  duration: 1,
  delay: 1.1,
  y: 0,
  opacity: 1,
  ease: "power3",
});

gsap.to(".intro p", {
  duration: 1,
  delay: 1.2,
  y: 0,
  opacity: 1,
  ease: "power3",
});

// Work
gsap.to(".picture img", {
  duration: 1,
  delay: 1,
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  ease: "power4.inOut",
});

gsap.to("h3", {
  duration: 1,
  delay: 1.5,
  y: 0,
  opacity: 1,
  ease: "power3",
});

gsap.to("h5", {
  duration: 1,
  delay: 1.6,
  y: 0,
  opacity: 1,
  ease: "power3",
});

gsap.to(".project-right p", {
  duration: 1,
  delay: 1.7,
  y: 0,
  opacity: 1,
  stagger: 0.2,
  ease: "power3",
});

// About
gsap.to(".about img", {
  duration: 1,
  delay: 1,
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  ease: "power4.inOut",
});

gsap.to(".about h1", {
  duration: 1,
  delay: 0.5,
  y: 0,
  opacity: 1,
  ease: "power3",
});

gsap.to(".about h2", {
  duration: 1,
  delay: 0.6,
  y: 0,
  opacity: 1,
  ease: "power3",
});

gsap.to(".about p", {
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
gsap.to(".contact div:first-child ul li", {
  duration: 1,
  delay: 1,
  y: 0,
  opacity: 1,
  stagger: 0.1,
  ease: "power3",
});

gsap.to(CSSRulePlugin.getRule(".contact div:first-child::after"), {
  duration: 1,
  delay: 1.4,
  cssRule: { scaleY: 1, transformOrigin: "top" },
  ease: "power3",
});

gsap.to(".contact div:last-child p", {
  duration: 1,
  delay: 1.6,
  y: 0,
  opacity: 1,
  ease: "power3",
});

// Pages Transitions
function leaveTransition() {
  gsap.to("main", { duration: 0.3, opacity: 0, ease: "power3" });
}

function contentAnimation() {
  // Geometry
  gsap.to(".star", {
    duration: 0.5,
    delay: 1,
    opacity: 1,
    ease: "power3",
  });

  // Socials
  gsap.to(".socials > *", {
    delay: 0.5,
    x: 0,
    opacity: 1,
    stagger: 0.1,
    ease: "power4",
  });

  // Intro
  gsap.to(".intro h1", {
    duration: 1,
    delay: 0.1,
    y: 0,
    opacity: 1,
    ease: "power3",
  });

  gsap.to(".intro h2", {
    duration: 1,
    delay: 0.2,
    y: 0,
    opacity: 1,
    ease: "power3",
  });

  gsap.to(".intro p", {
    duration: 1,
    delay: 0.3,
    y: 0,
    opacity: 1,
    ease: "power3",
  });

  // Work
  gsap.to(".picture img", {
    duration: 1,
    delay: 0.1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ease: "power4.inOut",
  });

  gsap.to("h3", {
    duration: 1,
    delay: 0.6,
    y: 0,
    opacity: 1,
    ease: "power3",
  });

  gsap.to("h5", {
    duration: 1,
    delay: 0.7,
    y: 0,
    opacity: 1,
    ease: "power3",
  });

  gsap.to(".project-right p", {
    duration: 1,
    delay: 0.8,
    y: 0,
    opacity: 1,
    stagger: 0.2,
    ease: "power3",
  });

  // About
  gsap.to(".about img", {
    duration: 1,
    delay: 0.5,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ease: "power4.inOut",
  });

  gsap.to(".about h1", {
    duration: 1,
    delay: 0.1,
    y: 0,
    opacity: 1,
    ease: "power3",
  });

  gsap.to(".about h2", {
    duration: 1,
    delay: 0.2,
    y: 0,
    opacity: 1,
    ease: "power3",
  });

  gsap.to(".about p", {
    duration: 1,
    delay: 0.3,
    y: 0,
    opacity: 1,
    stagger: 0.2,
    ease: "power3",
  });

  gsap.to(".cv", {
    duration: 1,
    delay: 0.6,
    y: 0,
    opacity: 1,
    ease: "power3",
  });

  // Contact
  gsap.to(".contact div:first-child ul li", {
    duration: 1,
    delay: 0.1,
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: "power3",
  });

  gsap.to(CSSRulePlugin.getRule(".contact div:first-child::after"), {
    duration: 1,
    delay: 0.25,
    cssRule: { scaleY: 1, transformOrigin: "top" },
    ease: "power3",
  });

  gsap.to(".contact div:last-child p", {
    duration: 1,
    delay: 0.4,
    y: 0,
    opacity: 1,
    ease: "power3",
  });
}

function delay(n) {
  n = n || 1000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,

  transitions: [
    {
      async leave(data) {
        const done = this.async();

        leaveTransition();
        await delay(400);
        done();
      },

      async enter(data) {
        contentAnimation();
      },

      // async once(data) {
      //   contentAnimation();
      // }
    },
  ],
});
