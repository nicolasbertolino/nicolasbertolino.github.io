function leaveTransition() {
  gsap.to("main", { duration: 0.3, opacity: 0, ease: "power3" });
}

function contentAnimation() {
  let controller = new ScrollMagic.Controller();

  let projects = gsap.from(".projects div a", {
    duration: 1,
    y: "100%",
    opacity: 0,
    stagger: 0.1,
    ease: "power2"
  });

  let scene = new ScrollMagic.Scene({
    triggerElement: ".projects",
    triggerHook: 0.6
  })
    .setTween(projects)
    .addTo(controller);

  function selectedImg(mql) {
    if (mql.matches) {
      let selected__img = gsap.from(".img img", {
        duration: 2,
        scale: 0.8,
        ease: "power4.inOut"
      });

      let scene2 = new ScrollMagic.Scene({
        triggerElement: ".selected-work",
        triggerHook: 0.8
      })
        .setTween(selected__img)
        .addTo(controller);
    } else {
      let selected__img = gsap.from(".img img", {
        duration: 2,
        scale: 1.2,
        ease: "power4.inOut"
      });

      let scene2 = new ScrollMagic.Scene({
        triggerElement: ".selected-work",
        triggerHook: 0.5
      })
        .setTween(selected__img)
        .addTo(controller);
    }
  }

  let mql = window.matchMedia("(max-width: 834px)");
  selectedImg(mql);

  let left__h3 = gsap.from(".left h3", {
    duration: 1,
    y: "100%",
    opacity: 0,
    ease: "power4"
  });

  let scene3 = new ScrollMagic.Scene({
    triggerElement: ".selected-work",
    triggerHook: 0.5
  })
    .setTween(left__h3)
    .addTo(controller);

  let right__div = gsap.from(".right div *", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power4"
  });

  let scene4 = new ScrollMagic.Scene({
    triggerElement: ".selected-work",
    triggerHook: 0.5
  })
    .setTween(right__div)
    .addTo(controller);

  function selectedCatchphrase(mql2) {
    if (mql2.matches) {
      let catchphrase = gsap.from(".catchphrase h3", {
        duration: 1,
        scale: 1,
        y: 50,
        opacity: 0,
        ease: "power4"
      });

      let scene5 = new ScrollMagic.Scene({
        triggerElement: ".catchphrase",
        triggerHook: 0.7
      })
        .setTween(catchphrase)
        .addTo(controller);
    } else {
      let catchphrase = gsap.from(".catchphrase h3", {
        duration: 1,
        scale: 1.2,
        opacity: 0,
        ease: "power4"
      });

      let scene5 = new ScrollMagic.Scene({
        triggerElement: ".catchphrase",
        triggerHook: 0.7
      })
        .setTween(catchphrase)
        .addTo(controller);
    }
  }

  let mql2 = window.matchMedia("(max-width: 834px)");
  selectedCatchphrase(mql2);

  let about = gsap.from(".about div *", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power4"
  });

  let scene6 = new ScrollMagic.Scene({
    triggerElement: ".about",
    triggerHook: 0.5
  })
    .setTween(about)
    .addTo(controller);

  let contact = gsap.from(".contact p span", {
    duration: 0.5,
    y: 50,
    opacity: 0,
    stagger: 0.1,
    ease: "power2"
  });

  let scene7 = new ScrollMagic.Scene({
    triggerElement: ".contact",
    offset: -200,
    triggerHook: 0.5
  })
    .setTween(contact)
    .addTo(controller);

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
        window.scrollBy({
          top: window.innerHeight,
          left: 0,
          behavior: "smooth"
        });
        contentAnimation();
      }

      // async once(data) {
      //   contentAnimation();
      // }
    }
  ]
});
