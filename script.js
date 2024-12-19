// segment -4.2
var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +"px";
    crsr.style.top = dets.y +"px";
})





//segment -3
gsap.to("#nav",{
    backgroundColor:"#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    

    }
})

// segment -4.1
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top - 75%",
        scrub:2
    }
})

// segment -5

var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    blur.style.left = dets.x-200 +"px";
    blur.style.top = dets.y-200 + "px";

})


// segment -10

var h4all =document.querySelectorAll("#nav h4");
h4all.forEach(function(element){
    element.addEventListener("mouseenter",function(){
        crsr.style.scale = 3,
        crsr.style.border = "1px solid white",
        crsr.style.backgroundColor = "transparent"
    })
    element.addEventListener("mouseleave",function(){
        crsr.style.scale = 1,
        crsr.style.border = "0px solid #95c11e",
        crsr.style.backgroundColor = "#95c11e"
    })

})

gsap.from("#about-us img, #about-us-description",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:true
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:true
    }
})

gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

// segment - 11

gsap.from("#page4 h2",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h2",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }

})