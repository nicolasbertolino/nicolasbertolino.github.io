// Smooth Scrolling
const math = {
  lerp: (a, b, n) => {
    return (1 - n) * a + n * b;
  },
  norm: (value, min, max) => {
    return (value - min) / (max - min);
  },
};

const config = {
  height: window.innerHeight,
  width: window.innerWidth,
};

class Smooth {
  constructor() {
    this.bindMethods();

    this.data = {
      ease: 0.1,
      current: 0,
      last: 0,
      rounded: 0,
    };

    this.dom = {
      el: document.querySelector("[data-scroll]"),
      content: document.querySelector("[data-scroll-content]"),
    };

    this.rAF = null;

    this.init();
  }

  bindMethods() {
    ["scroll", "run", "resize"].forEach(
      (fn) => (this[fn] = this[fn].bind(this))
    );
  }

  setStyles() {
    Object.assign(this.dom.el.style, {
      position: "fixed",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      overflow: "hidden",
    });
  }

  setHeight() {
    document.body.style.height = `${
      this.dom.content.getBoundingClientRect().height
    }px`;
  }

  resize() {
    this.setHeight();
    this.scroll();
  }

  preload() {
    imagesLoaded(this.dom.content, (instance) => {
      this.setHeight();
    });
  }

  scroll() {
    this.data.current = window.scrollY;
  }

  run() {
    this.data.last += (this.data.current - this.data.last) * this.data.ease;
    this.data.rounded = Math.round(this.data.last * 100) / 100;

    const diff = this.data.current - this.data.rounded;
    const acc = diff / config.width;
    const velo = +acc;
    const skew = velo * 3;

    this.dom.content.style.transform = `translate3d(0, -${this.data.rounded}px, 0) skewY(${skew}deg)`;

    this.requestAnimationFrame();
  }

  on() {
    this.setStyles();
    this.setHeight();
    this.addEvents();

    this.requestAnimationFrame();
  }

  off() {
    this.cancelAnimationFrame();

    this.removeEvents();
  }

  requestAnimationFrame() {
    this.rAF = requestAnimationFrame(this.run);
  }

  cancelAnimationFrame() {
    cancelAnimationFrame(this.rAF);
  }

  destroy() {
    document.body.style.height = "";

    this.data = null;

    this.removeEvents();
    this.cancelAnimationFrame();
  }

  resize() {
    this.setHeight();
    this.data.rounded = this.data.last = this.data.current;
  }

  addEvents() {
    window.addEventListener("resize", this.resize, { passive: true });
    window.addEventListener("scroll", this.scroll, { passive: true });
  }

  removeEvents() {
    window.removeEventListener("resize", this.resize, { passive: true });
    window.removeEventListener("scroll", this.scroll, { passive: true });
  }

  init() {
    this.preload();
    this.on();
  }
}

new Smooth();

// GSAP
gsap.to("h1", {
  duration: 1,
  delay: 1.5,
  y: 0,
  opacity: 1,
  stagger: 0.1,
  ease: "power3"
});

gsap.to(".intro p", {
  duration: 1,
  delay: 1.7,
  y: 0,
  opacity: 1,
  ease: "power3"
});

gsap.to(".star", {
  duration: 0.5,
  delay: 2,
  opacity: 1,
  ease: "power3"
});

gsap.to(".circle", {
  duration: 2,
  delay: 0.5,
  scale: 1,
  ease: "power3"
});

gsap.to(".vertical-line", {
  duration: 2,
  delay: 0.2,
  scaleY: 1,
  transformOrigin: "top",
  ease: "power3"
});

gsap.to(".horizontal-line", {
  duration: 2,
  delay: 0.5,
  scaleX: 1,
  transformOrigin: "left",
  ease: "power3"
});

gsap.to(".showcase img", {
  duration: 1,
  delay: 1.7,
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  ease: "power4.inOut"
});

gsap.to(".socials li", {
  delay: 1,
  x: 0,
  opacity: 1,
  stagger: 0.1,
  ease: "power4"
});
