// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
// // import { SplitText } from "gsap-trial/SplitText";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { SplitText } from "gsap/SplitText";

// interface ParaElement extends HTMLElement {
//   anim?: gsap.core.Animation;
//   split?: SplitText;
// }

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// export default function setSplitText() {
//   ScrollTrigger.config({ ignoreMobileResize: true });
//   if (window.innerWidth < 900) return;
//   const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
//   const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

//   const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
//   const ToggleAction = "play pause resume reverse";

//   paras.forEach((para: ParaElement) => {
//     para.classList.add("visible");
//     if (para.anim) {
//       para.anim.progress(1).kill();
//       para.split?.revert();
//     }

//     para.split = new SplitText(para, {
//       type: "lines,words",
//       linesClass: "split-line",
//     });

//     para.anim = gsap.fromTo(
//       para.split!.words,
//       { autoAlpha: 0, y: 80 },
//       {
//         autoAlpha: 1,
//         scrollTrigger: {
//           trigger: para.parentElement?.parentElement,
//           toggleActions: ToggleAction,
//           start: TriggerStart,
//         },
//         duration: 1,
//         ease: "power3.out",
//         y: 0,
//         stagger: 0.02,
//       }
//     );
//   });
//   titles.forEach((title: ParaElement) => {
//     if (title.anim) {
//       title.anim.progress(1).kill();
//       title.split?.revert();
//     }
//     title.split = new SplitText(title, {
//       type: "chars,lines",
//       linesClass: "split-line",
//     });
//     title.anim = gsap.fromTo(
//       title.split!.chars,
//       { autoAlpha: 0, y: 80, rotate: 10 },
//       {
//         autoAlpha: 1,
//         scrollTrigger: {
//           trigger: title.parentElement?.parentElement,
//           toggleActions: ToggleAction,
//           start: TriggerStart,
//         },
//         duration: 0.8,
//         ease: "power2.inOut",
//         y: 0,
//         rotate: 0,
//         stagger: 0.03,
//       }
//     );
//   });

//   ScrollTrigger.addEventListener("refresh", () => setSplitText());
// }



import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitText;
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  // Cleanup helper to prevent memory leaks and "div soup"
  const cleanup = (el: ParaElement) => {
    if (el.anim) {
      el.anim.kill();
      el.anim = undefined;
    }
    if (el.split) {
      el.split.revert();
      el.split = undefined;
    }
  };

  // 1. Check conditions early
  if (window.innerWidth < 900) {
    paras.forEach(cleanup);
    titles.forEach(cleanup);
    return;
  }

  const triggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const toggleAction = "play pause resume reverse";

  // 2. Animate Paragraphs
  paras.forEach((para: ParaElement) => {
    cleanup(para); // Always revert before re-splitting
    para.classList.add("visible");

    const splitInstance = new SplitText(para, {
      type: "lines,words",
      linesClass: "split-line",
    });
    para.split = splitInstance;

    para.anim = gsap.fromTo(
      splitInstance.words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement || para,
          toggleActions: toggleAction,
          start: triggerStart,
        },
      }
    );
  });

  // 3. Animate Titles
  titles.forEach((title: ParaElement) => {
    cleanup(title);

    const splitInstance = new SplitText(title, {
      type: "chars,lines",
      linesClass: "split-line",
    });
    title.split = splitInstance;

    title.anim = gsap.fromTo(
      splitInstance.chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.03,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement || title,
          toggleActions: toggleAction,
          start: triggerStart,
        },
      }
    );
  });
}

// 4. Handle Resize OUTSIDE the function to avoid the infinite loop
let resizeTimer: ReturnType<typeof setTimeout>;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    setSplitText();
    ScrollTrigger.refresh(); // Refreshing here is safe because it's after the logic runs
  }, 250);
});

// Initial Init
setSplitText();