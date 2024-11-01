
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
       behavior: "smooth" 
    });
});
});

WebGLSampler.registerPlugin(ScrollTrigger);
WebGLSampler.from(".project-card", {
    scrollTrigger: ".project-card",
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.3

});