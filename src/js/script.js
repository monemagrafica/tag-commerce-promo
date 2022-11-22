gsap.registerPlugin(ScrollTrigger);
const block1 = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".block.uno",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
  },
});

block1
  .from(".block.uno .wrapper-header", { y: 300 })
  .fromTo(".jumbo .idea", { opacity: 0, y: 0 }, { opacity: 1, y: 0 })
  .fromTo(
    "#idea",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    "-=1"
  );
const block2 = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".block.due",
    start: "top top",
    end: "bottom top",
    scrub: true,
    duration: 30,
    pin: true,
  },
});

block2
  .from(".block.due header", { y: 100, opacity: 0 })
  .to(
    "#pc-logo",
    {
      y: -60,
      x: 200,
      scale: 0.7,
      transformOrigin: "50% 50%",
      rotate: 360,
    },
    "<="
  )
  .to("#pc-logo", { opacity: 0 })
  .fromTo(
    "#grigliaprodotto",
    { opacity: 0, scale: 0.2, transformOrigin: "50% 50%" },
    { opacity: 1, scale: 1 },
    "<="
  )
  .fromTo(
    "#prodotti-pc",
    { opacity: 0, y: -100 },
    { opacity: 1, y: 0, ease: "back.out(1.7)", duration: 1, delay: 1 }
  );

const tlNuvole = gsap.timeline({ repeat: -1, yoyo: true });

tlNuvole
  .to("#nuvola1", { y: 5, duration: 1 })
  .to("#nuvola2", { y: -5, duration: 1 }, "<=");

const block3 = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".block.tre",
    start: "top top",
    end: "bottom top",
    scrub: true,
    duration: 30,
    pin: true,
  },
});
block3

  .from(
    "#scheda-add",
    {
      y: 50,
      opacity: 0,
      duration: 0.2,
    },
    "<="
  )
  .from("#scheda-testo", {
    y: 50,
    opacity: 0,
    duration: 0.2,
  })
  .to(
    "#pc-cursore",
    {
      y: -40,
      x: 50,
      scale: 1,
    },
    "<="
  )
  .fromTo(
    "#pc-cursore",
    {
      scale: 0.8,
    },
    { scale: 1, delay: 1 }
  )
  .from("#blocco3", {
    opacity: 0,
    y: 100,
    ease: "back.out(1.7)",
    duration: 1,
  })

  .to("#pc-scheda-tazza", {
    x: 325,
    y: -40,
    rotate: 180,
    transformOrigin: "50% 50%",
    delay: 0.5,
    duration: 1,
  })
  .to("#wrapperscheda", { opacity: 0 })
  .from(
    "#thumbup",
    {
      opacity: 0,
      y: 50,
    },
    "<="
  )
  .from(
    "#monete",
    {
      opacity: 0,
      y: 50,
    },
    "<="
  )
  .from(
    "#logo-3",
    {
      opacity: 0,
      rotate: 90,
      transformOrigin: "50% 50%",
    },
    "<="
  );
const form = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: ".form",
    start: "top bottom",
    duration: 1,
  },
});

form.from(".form header", {
  opacity: 0,
  y: 100,
});
gsap.to("#idea-pianta", {
  y: 5,
  duration: 1,
  repeat: -1,
  ease: "sine.inOut",
  yoyo: true,
});
gsap.to("#idea-sveglia", {
  y: 5,
  duration: 1,
  repeat: -1,
  ease: "sine.out",
  yoyo: true,
});
gsap.to("#idea-vaso", {
  y: 5,
  duration: 1,
  repeat: -1,
  ease: "sine.out",
  yoyo: true,
});
gsap.to("#idea-scarpa", {
  y: -5,
  duration: 1,
  repeat: -1,
  ease: "sine.out",
  yoyo: true,
});
gsap.to("#idea-scarpa2", {
  y: 5,
  duration: 1,
  repeat: -1,
  ease: "sine.out",
  yoyo: true,
});
gsap.to("#idea-macchina", {
  y: -5,
  duration: 1,
  repeat: -1,
  ease: "sine.out",
  yoyo: true,
});
gsap.to("#idea-tazza", {
  y: 5,
  duration: 1,
  repeat: -1,
  ease: "sine.out",
  yoyo: true,
});
gsap.to("#idea-regalo", {
  y: 5,
  duration: 1,
  repeat: -1,
  yoyo: true,
});
/*  .from("#testo3", { opacity: 0, y: 50, delay: 3 })
.to("#idea", {
    opacity: 0,
    duration: 1,
  })
  .fromTo(
    "#pc",
    { y: 100, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, duration: 1 },
    "<="
  )

  .fromTo(
    "#pc-logo",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay: 2 }
  )
  .from("#testo4", { opacity: 0, y: 50 })
  .to("#pc", { scale: 1, y: 0 }, "<=")
  .to("#pc-logo", { y: 100, opacity: 0, delay: 3, duration: 1 })
  .from("#pianta", { y: 20, opacity: 0 })
  .from("#sveglia", { y: 20, opacity: 0 }, "<=")
  .from("#vaso", { y: -30, opacity: 0 }, "<=")
  .from("#regalo", { y: -30, opacity: 0 }, "<=")
  .from("#scarpa", { y: -30, opacity: 0 }, "<=")
  .from("#scarpa2", { y: -50, opacity: 0 }, "<=")
  .from("#macchina", { y: -50, opacity: 0 }, "<=")
  .from("#tazza", { y: -50, opacity: 0 }, "<=")
  .fromTo(
    "#scatola",
    { opacity: 0, x: 300 },
    { opacity: 1, x: 0, duration: 0.5, delay: 0.5 }
  )
  .to(
    "#pianta",
    {
      y: 40,
      scale: 3,
      x: 300,
      rotate: 300,
      transformOrigin: "50% 50%",
      delay: 1,
      duration: 1.5,
      ease: "circ.inOut",
    },
    "<="
  )
  .to(
    "#sveglia",
    {
      y: 50,
      scale: 3,
      x: 300,
      rotate: 300,
      transformOrigin: "50% 50%",
      duration: 1.5,
      ease: "circ.inOut",
    },
    "<="
  )
  .to(
    "#regalo",
    {
      y: 50,
      scale: 3,
      x: 270,
      rotate: 300,
      transformOrigin: "50% 50%",
      duration: 1.5,
      ease: "circ.inOut",
    },
    "<="
  )
  .to(
    "#vaso",
    {
      y: 60,
      x: 350,
      scale: 3,
      rotate: 300,
      transformOrigin: "50% 50%",
      duration: 1.5,
      ease: "circ.inOut",
    },
    "<="
  )
  .to(
    "#scarpa",
    {
      y: 60,
      x: 360,
      scale: 3,
      rotate: 300,
      transformOrigin: "50% 50%",
      duration: 1.5,
      ease: "circ.inOut",
    },
    "<="
  )
  .to(
    "#scarpa2",
    {
      y: 50,
      x: 300,
      scale: 3,
      rotate: 300,
      transformOrigin: "50% 50%",
      duration: 1.5,
      ease: "circ.inOut",
    },
    "<="
  )
  .to(
    "#macchina",
    {
      y: 50,
      x: 350,
      scale: 3,
      rotate: 300,
      transformOrigin: "50% 50%",
      duration: 1.5,
      ease: "circ.inOut",
    },
    "<="
  )
  .to(
    "#tazza",
    {
      y: 70,
      x: 350,
      rotate: 300,
      scale: 3,
      transformOrigin: "50% 50%",
      duration: 1.5,
      ease: "circ.inOut",
    },
    "<="
  )
  .to("#grigliaprodotto", { opacity: 0 }, "-=.7")
  .fromTo("#monete", { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
  .fromTo("#euro", { opacity: 0, y: -20 }, { opacity: 1, y: 0 }, "<=")
  .to(
    [
      "#pianta",
      "#sveglia",
      "#vaso",
      "#scarpa",
      "#scarpa2",
      "#macchina",
      "#tazza",
      "#regalo",
    ],
    { opacity: 0, duration: 0.2 }
  )
  .to(
    "#ala1",
    {
      delay: 1,
      rotate: -110,
      transformOrigin: "100% 100%",
      duration: 0.5,
      ease: "circ.inOut",
    },
    "<="
  )
  .to(
    "#ala2",
    {
      rotate: 100,
      transformOrigin: "100% 0%",
      duration: 0.5,
      ease: "circ.inOut",
    },
    "<="
  )
  .to("#scatola", {
    rotate: 92,
    x: 30,
    transformOrigin: "50% 50%",
  })
  .to(
    ["#nuvolaTop", "#nuvolaBottomRight"],
    { x: -300, ease: "circ.inOut", duration: 1 },
    "<="
  )
  .to(
    ["#nuvolaTop1", "#nuvolaBottomRight"],
    { x: 300, ease: "circ.inOut", duration: 1 },
    "<="
  )
  .fromTo(
    "#spedito",
    { opacity: 0, scale: 2 },
    {
      scale: 0.8,
      opacity: 1,
      x: 30,
      y: 15,
      ease: "back.out(1.7)",
      duration: 1,
      delay: 1,
    },
    "<="
  );

 */
