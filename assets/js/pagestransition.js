function leaveTransition() {
  gsap.to("main", { duration: 0.3, opacity: 0, ease: "power3" });
}

function contentAnimation() {
  gsap.fromTo(
    ".project__infos div:first-of-type",
    {
      y: 20,
      opacity: 0,
      ease: "power2"
    },
    {
      delay: 0.1,
      y: 0,
      opacity: 1,
      ease: "power2"
    }
  );
  gsap.fromTo(
    ".arrow-left",
    {
      y: 20,
      opacity: 0,
      ease: "power2"
    },
    {
      y: 0,
      opacity: 1,
      ease: "power2"
    }
  );
  gsap.fromTo(
    ".project__infos h4",
    {
      y: 20,
      opacity: 0,
      ease: "power2"
    },
    {
      delay: 0.2,
      y: 0,
      opacity: 1,
      ease: "power2"
    }
  );
  gsap.fromTo(
    ".project__infos h2",
    {
      y: 20,
      opacity: 0,
      ease: "power2"
    },
    {
      delay: 0.3,
      y: 0,
      opacity: 1,
      ease: "power2"
    }
  );
  gsap.fromTo(
    ".project__description",
    {
      y: 20,
      opacity: 0,
      ease: "power2"
    },
    {
      delay: 0.4,
      y: 0,
      opacity: 1,
      ease: "power2"
    }
  );
  gsap.fromTo(
    ".project__see",
    {
      y: 20,
      opacity: 0,
      ease: "power2"
    },
    {
      delay: 0.5,
      y: 0,
      opacity: 1,
      ease: "power2"
    }
  );
  gsap.fromTo(
    ".project__number",
    {
      y: 20,
      opacity: 0,
      ease: "power2"
    },
    {
      delay: 0.6,
      y: 0,
      opacity: 1,
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

      async once(data) {
        contentAnimation();
      }
    }
  ]
});
