// Header
gsap.from(".name", {
  duration: 1,
  delay: 1.5,
  opacity: 0,
  ease: "power3"
});

gsap.from(".circle", {
  duration: 2,
  delay: 0.5,
  scale: 0,
  ease: "power3"
});

gsap.from(".star", {
  duration: 0.5,
  delay: 1.5,
  opacity: 0,
  ease: "power3"
});

gsap.from(".vertical-line", {
  duration: 2,
  delay: 0.2,
  scaleY: 0,
  transformOrigin: "top",
  ease: "power3"
});

gsap.from(".horizontal-line", {
  duration: 2,
  delay: 0.5,
  scaleX: 0,
  transformOrigin: "left",
  ease: "power3"
});

gsap.from(".numbers li", {
  delay: 0.5,
  y: "100%",
  opacity: 0,
  stagger: 0.1,
  ease: "power4"
});

gsap.from(".roles li", {
  delay: 1.2,
  y: "100%",
  opacity: 0,
  stagger: 0.1,
  ease: "power4"
});

gsap.from(".socials li", {
  delay: 1.5,
  y: "100%",
  opacity: 0,
  stagger: 0.1,
  ease: "power4"
});

// ScrollMagic Scenes
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
  triggerHook: 0.5
})
  .setTween(projects)
  .addTo(controller);

let selected__img = gsap.from(".img img", {
  duration: 2,
  scale: 1.2,
  ease: "power4"
});

let scene2 = new ScrollMagic.Scene({
  triggerElement: ".selected-work",
  triggerHook: 0.5
})
  .setTween(selected__img)
  .addTo(controller);

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

let catchphrase = gsap.from(".catchphrase h3", {
  duration: 1,
  y: 30,
  opacity: 0,
  ease: "power4"
});

let scene5 = new ScrollMagic.Scene({
  triggerElement: ".catchphrase",
  triggerHook: 0.7
})
  .setTween(catchphrase)
  .addTo(controller);

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
