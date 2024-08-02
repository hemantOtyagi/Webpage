var crsr=document.querySelector("#cursor")
var crsrblur=document.querySelector("#cursorblur")
document.addEventListener("mousemove",function(dets){
    crsr.style.top=dets.clientY +"px"
    crsr.style.left=dets.clientX +"px"
    crsrblur.style.top=dets.clientY - 180 +"px"
    crsrblur.style.left=dets.clientX - 180   +"px"    
})


gsap.to("#nav",{
    backgroundColor: "#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
       // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:1
    }
})


var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){

        crsr.style.scale=2;
        crsr.style.border="1px  solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){

        crsr.style.scale=1
        crsr.style.border="0px  solid #95C11E"
        crsr.style.backgroundColor="#95C11E"
    })
})


gsap.from("#about-us img , #about-us-in",{
    y:90,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:2
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
        start:"top 70%",
        end:"top 65%",
        scrub:1
        
    }
})


gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 5,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 5,
    },
  });

  gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
      },
  })