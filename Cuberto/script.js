var main = document.querySelector(".main")
var cursor = document.querySelector(".cursor")
var heading = document.querySelector(".headings")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x-4,
        y:dets.y-4,
        duration:0.3
    })
})

gsap.from(".nav",{
    y:-100,
    opacity:0,
    duration:1,
})

heading.addEventListener("mouseenter",function(){
    gsap.to(".headings h1",{
        color:"black"
    })
})

heading.addEventListener("mouseleave",function(){
    gsap.to(".headings h1",{
        color:"transparent",
        delay:0.3
    })
})

gsap.from(".homemain h1",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.3
})

gsap.from(".homelast",{
    opacity:0,
    y:100,
    delay:1.5
})

gsap.from(".fheading",{
    opacity:0,
    y:100,
    duration:1,
    scrollTrigger:{
        trigger:".featured",
        scroller:"body",
        start:"top 70%",
        end:"bottom",
    }
})

gsap.to(".fleft .elements",{
    transform:"translateY(-300%)",
    scrollTrigger:{
        trigger:".fproject",
        scroller:"body",
        start:"top 0%",
        end:"top -200%",
        scrub:3,
        pin:true
    }
})

gsap.from(".dev",{
    opacity:0,
    y:100,
    duration:1,
    scrollTrigger:{
        trigger:".dev",
        scroller:"body",
        start:"top 70%",
        end:"bottom",
    }
})
