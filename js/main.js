barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0,
        y: -10,
        duration: 0.3
      });
    },
  }]
});
