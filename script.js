function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 10+"px"
    crsr.style.top = dets.y + 10+"px"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})



if(window.innerWidth > 1250){

    gsap.from(".page1 h1,.page1 h2", {
        y: 10,
        rotate: 10,
        opacity: 0,
        delay: 0.3,
        duration: 0.7
    })
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: ".main",
            // markers:true,
            start: "top 27%",
            end: "top 0",
            scrub: 3
        }
    })
    tl.to(".page1 h1", {
        x: -100,
    }, "anim")
    tl.to(".page1 h2", {
        x: 100
    }, "anim")
    tl.to(".page1 video", {
        width: "90%"
    }, "anim")
    tl.to(".page1 img", {
        width: "90%"
    }, "anim")

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: ".main",
            // markers:true,
            start: "top -115%",
            end: "top -125%",
            scrub: 3
        }
    })
    tl2.to(".main", {
        backgroundColor: "#fff",
    }, "anim2")

    tl2.from(".page2 h1", {
        opacity : 0,
    }, "anim2")
    tl2.from(".page2-left", {
        x: -100,
        opacity : 0,
    }, "anim2")
    tl2.from(".page2-right", {
        x: 100,
        opacity : 0,
    }, "anim2")

    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: ".main",
            // markers:true,
            start: "top -220%",
            end: "top -240%",
            scrub: 3
        }
    })
    tl4.from(".page3 h1",{
        opacity : 0
    }, "anim5")
    tl4.from(".pg3stock1",{
        scale : "0"
    }, "anim5")
    tl4.from(".page3-part1",{
        scale : "0",
        opacity : 0
    }, "anim5")

    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: ".main",
            // markers:true,
            start: "top -250%",
            end: "top -280%",
            scrub: 3
        }
    })
    tl3.to(".main",{
        backgroundColor:"#0F0D0D"
    }, "pop")
    tl3.from(".pg3stock2",{
        scale : "0"
    }, "pop")

    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: ".main",
            // markers:true,
            start: "top -410%",
            end: "top -430%",
            scrub: 3
        }
    })
    tl5.from(".page5",{
        x : -100,
        opacity : 0,
    })
}


else if(window.innerWidth > 325){
    ScrollReveal({ 
        reset: true,
        distance : '50px',
        duration : 2000,
        delay : 200
    });


    ScrollReveal().reveal('#nav h2', { origin:'right'});
    ScrollReveal().reveal('#nav #circle', { origin:'left'});

    ScrollReveal().reveal('.page1 img', { origin:'top'});

    ScrollReveal().reveal('.page2 h1 ', { origin:'top'});
    // ScrollReveal().reveal('.page2 h1 span', { origin:'top'});
    ScrollReveal().reveal('.page2 .page2-left h2', { origin:'left'});
    ScrollReveal().reveal('.page2 .page2-right p', { origin:'bottom'});
    ScrollReveal().reveal('.page2 .page2-right .socials', { origin:'left'});

    ScrollReveal().reveal('.page3 h1', { origin:'top'});
    ScrollReveal().reveal('.page3 img', { origin:'bottom'});
    // ScrollReveal().reveal('.page3 h1', { origin:'bottom'});
    // ScrollReveal().reveal('.page3 img', { origin:'top'});

    ScrollReveal().reveal('.page4 .elem .w1', { origin:'left'});
    ScrollReveal().reveal('.page4 .elem .w2', { origin:'right'});
    ScrollReveal().reveal('.page4 .elem .w3', { origin:'left'});

    ScrollReveal().reveal('.page5 h2', { origin:'top'});
    ScrollReveal().reveal('.page5 .box h3', { origin:'right'});
    ScrollReveal().reveal('.page5 .box h4', { origin:'left'});

}
