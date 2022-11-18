gsap.registerPlugin(ScrollTrigger)
const mainTimeLine = gsap.timeline({
    scrollTrigger: {
        markers: true,
        trigger: '.jumbo',
        start: "top top",
        end: "+=" + (window.innerHeight * 2),
        scrub: true,
        pin: true
    }
})

mainTimeLine
    .from('#testo2', { opacity: 0, y: 50 })
    .fromTo('#idea', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "<=")
    .from('#pianta', { y: 20, opacity: 0 }, "<=")
    .from('#sveglia', { y: 20, opacity: 0 }, "<=")
    .from('#vaso', { y: -30, opacity: 0 }, "<=")
    .from('#regalo', { y: -30, opacity: 0 }, "<=")
    .from('#scarpa', { y: -30, opacity: 0 }, "<=")
    .from('#scarpa2', { y: -50, opacity: 0 }, "<=")
    .from('#macchina', { y: -50, opacity: 0 }, "<=")
    .from('#tazza', { y: -50, opacity: 0 }, "<=")
    .fromTo('#scatola', { opacity: 0, x: 300 }, { opacity: 1, x: 0, duration: .5 }, "<=")
    .to('#pianta', { y: -50, scale: 3, x: 400, rotate: 300, transformOrigin: '50% 50%', delay: 1, duration: .5, ease: "circ.inOut" }, "<=")
    .to('#sveglia', { y: -50, scale: 3, x: 400, rotate: 300, transformOrigin: '50% 50%', duration: .5, ease: "circ.inOut" }, "<=")
    .to('#regalo', { y: -100, scale: 3, x: 400, rotate: 300, transformOrigin: '50% 50%', duration: .5, ease: "circ.inOut" }, "<=")
    .to('#vaso', { y: -60, x: 450, scale: 3, rotate: 300, transformOrigin: '50% 50%', duration: .5, ease: "circ.inOut" }, "<=")
    .to('#scarpa', { y: -60, x: 460, scale: 3, rotate: 300, transformOrigin: '50% 50%', duration: .5, ease: "circ.inOut" }, "<=")
    .to('#scarpa2', { y: -50, x: 400, scale: 3, rotate: 300, transformOrigin: '50% 50%', duration: .5, ease: "circ.inOut" }, "<=")
    .to('#macchina', { y: -100, x: 450, scale: 3, rotate: 300, transformOrigin: '50% 50%', duration: .5, ease: "circ.inOut" }, "<=")
    .to('#tazza', { y: -100, x: 450, rotate: 300, scale: 3, transformOrigin: '50% 50%', duration: .5, ease: "circ.inOut" }, "<=")
    .to([
        '#pianta',
        '#sveglia',
        '#vaso',
        '#scarpa',
        '#scarpa2',
        '#macchina',
        '#tazza',
        "#regalo"], { opacity: 0, duration: .2 })
    .to('#ala1', { rotate: -110, transformOrigin: '100% 100%', duration: .5, ease: "circ.inOut" }, "<=")
    .to('#ala2', { rotate: 100, transformOrigin: '100% 0%', duration: .5, ease: "circ.inOut" }, "<=")
    .to('#scatola', { rotate: 92., x: 30, ease: "circ.inOut" })
    .to(['#idea', "#donna"], { scale: .5, opacity: 0., transformOrigin: 'bottom left' })
    .to(['#nuvolaTop', '#nuvolaBottomRight'], { x: -300, ease: "circ.inOut" }, "<=")
    .to('#scatola', { x: -350, y: 50, transformOrigin: '50% 50%' }, "<=")
    .to('#scatola', { scale: .8, transformOrigin: '50% 50%', ease: "back.out(1.8)" }, "<=")
    .to("#pc", { scale: 1.3, y: -30 }, "<=")
    .to('#scatola', { scale: .8, x: -200, opacity: 0, transformOrigin: '50% 50%', ease: "back.out(1.8)", }, "+=1")
    .to('#pc-scatola', { scale: 1.3, opacity: 1, x: 40, y: -10, transformOrigin: '50% 50%', ease: "back.out(1.8)" }, "<=")

