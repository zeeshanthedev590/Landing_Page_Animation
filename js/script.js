const hero = document.querySelector(".hero");
const burger = document.querySelector(".hamberger");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const headline = document.querySelector(".headline");
const btn = document.querySelector(".btn");
const t1 = new TimelineMax();

t1.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "100%" },
    { width: "80%", ease: Power2.easeInOut }
  )

  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(logo, 1, { opacity: 0, x: 1000 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(burger, 0.5, { opacity: 0, y: 1000 }, { opacity: 1, y: 0 }, "-=0.5")
  .fromTo(btn, 0.4, { opacity: 0, x: 1000 }, { opacity: 1, x: 0 }, "-=0.5");
