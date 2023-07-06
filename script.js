var crs = document.querySelector("#cursor")
var blur = document.querySelector("#blur")

document.addEventListener("mousemove",function(dets){
    crs.style.left = dets.x+30+"px"
    crs.style.top = dets.y+"px"
    blur.style.left = dets.x- 200+"px"
    blur.style.top = dets.y- 200+"px"

})
var h4 = document.querySelectorAll("#nav h4")

h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crs.style.scale =2.5
        crs.style.border ="1px solid #fff"
        crs.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crs.style.scale =1
        crs.style.border ="0px solid #95C11E "
        crs.style.backgroundColor="#95C11E"
    })
})

gsap.to("#nav",{
     backgroundColor :"#000",
     height: "105px",
     duration:0.5,
     scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1

     }
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start: "top -25%",
        end: "top -70%",
        scrub:2
    }
})
gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start: "top 70%",
        end: "top 65%",
        scrub:3
    }
})
// gsap.from(".card",{
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     stagger:0.1,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         start: "top 70%",
//         end: "top 58%",
//         scrub:1
//     }
// })
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})