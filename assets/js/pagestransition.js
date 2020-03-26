function leaveTransition() {
  gsap.to("main", { duration: 0.3, opacity: 0, ease: "power3" });
}

function contentAnimation() {
  gsap.fromTo(
    ".project__infos div:first-of-type",
    {
      x: -20,
      opacity: 0,
      ease: "power2"
    },
    {
      delay: 0.1,
      x: 0,
      opacity: 1,
      ease: "power2"
    }
  );
  gsap.fromTo(
    ".arrow-left",
    {
      x: -20,
      opacity: 0,
      ease: "power2"
    },
    {
      x: 0,
      opacity: 1,
      ease: "power2"
    }
  );
  gsap.fromTo(
    ".project__infos h4",
    {
      x: -20,
      opacity: 0,
      ease: "power2"
    },
    {
      delay: 0.2,
      x: 0,
      opacity: 1,
      ease: "power2"
    }
  );
  gsap.fromTo(
    ".project__infos h2",
    {
      x: -20,
      opacity: 0,
      ease: "power2"
    },
    {
      delay: 0.3,
      x: 0,
      opacity: 1,
      ease: "power2"
    }
  );
  gsap.fromTo(
    ".project__description",
    {
      x: -20,
      opacity: 0,
      ease: "power2"
    },
    {
      delay: 0.4,
      x: 0,
      opacity: 1,
      ease: "power2"
    }
  );
  gsap.fromTo(
    ".project__see",
    {
      x: -20,
      opacity: 0,
      ease: "power2"
    },
    {
      delay: 0.5,
      x: 0,
      opacity: 1,
      ease: "power2"
    }
  );
  gsap.fromTo(
    ".project__number",
    {
      x: -20,
      opacity: 0,
      ease: "power2"
    },
    {
      delay: 0.6,
      x: 0,
      opacity: 1,
      ease: "power2"
    }
  );
  gsap.fromTo(
    ".project div:last-child",
    {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      ease: "power2"
    },
    {
      delay: 0.3,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power2"
    }
  );
}

function delay(n) {
  n = n || 1000;
  return new Promise(done => {
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
    }
  ]
});
