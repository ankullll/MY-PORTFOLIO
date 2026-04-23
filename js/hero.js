import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
  const isHomePage = document.querySelector(".page.home-page");
  if (!isHomePage) return;
  gsap.registerPlugin(ScrollTrigger);

  const heroImg = document.querySelector(".hero-img img");
  let currentImageIndex = 1;
  const totalImages = 10;
  let scrollTriggerInstance = null;

  setInterval(() => {
    currentImageIndex =
      currentImageIndex >= totalImages ? 1 : currentImageIndex + 1;
    heroImg.src = `/images/work-items/work-item-${currentImageIndex}.jpg`;
  }, 250);

  const initAnimation = ()=>{
    if(scrollTriggerInstance){
        scrollTriggerInstance.kill();

    }
    scrollTriggerInstance = ScrollTrigger.create({
        trigger:".hero-img-holder",
        start:"top bottom",
        end:"top top",
        onUpdate :(self)=>{
            const progress = self.progress;
            gsap.set(".hero-img",{
                y:`${-95 + 95*progress}%`,
                scale:0.23+ 0.77*progress,
                rotation:-15 +15*progress
            })
        }
    })
  }
  initAnimation()
  window.addEventListener("resize",()=>{
    initAnimation()
  })
});
