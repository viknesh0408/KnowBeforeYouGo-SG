    // JS Section for Section-Based Translation
    /* function showSection(sectionId, lang){
      const enDiv = document.getElementById(sectionId+'-en');
      const taDiv = document.getElementById(sectionId+'-ta');
      if(lang==='en'){
        enDiv.style.display='block';
        taDiv.style.display='none';
      } else {
        enDiv.style.display='none';
        taDiv.style.display='block';
      }
    } */


/* laws animation script */
  
  // Animate strips when visible
  const lawBlocks = document.querySelectorAll("[data-law]");
  const lawSection = document.getElementById("laws");

  window.addEventListener("scroll", () => {
    const triggerHeight = window.innerHeight * 0.85;

    lawBlocks.forEach(law => {
      const top = law.getBoundingClientRect().top;
      if (top < triggerHeight) law.classList.add("show");
    });

    // Alert background when section in view
    const top = lawSection.getBoundingClientRect().top;
    const bottom = lawSection.getBoundingClientRect().bottom;
    if (top < window.innerHeight && bottom > 0) {
      lawSection.classList.add("alert-active");
    } else {
      lawSection.classList.remove("alert-active");
    }
  });

/* laws animation script ends */


/* do and dont script */
    const lines = document.querySelectorAll('.etq-line');
    window.addEventListener("scroll", () => {
      lines.forEach((line,i)=>{
        if(line.getBoundingClientRect().top < window.innerHeight * 0.9){
          setTimeout(()=> line.style.opacity = "1", i * 80);
        }
      });
    });
/* do and dont script ends */


/* travel tips animation script */
    const tips = document.querySelectorAll(".tip-card");
    window.addEventListener("scroll", () => {
      const trigger = window.innerHeight * 0.9;
      tips.forEach((tip, i) => {
        if (tip.getBoundingClientRect().top < trigger) {
          tip.style.opacity = "1";
          tip.style.transform = "translateY(0)";
          tip.style.transitionDelay = `${i * 0.1}s`;
        }
      });
    });
/* travel tips animation script ends */



/* contact button script */
      const contactBtn = document.getElementById("contactBtn");
      const hint = document.getElementById("contactHint");
      let hintShown = false;

      window.addEventListener("scroll", () => {
        const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 700;

        if (nearBottom) {
          contactBtn.style.display = "inline-block";

           // Show hint again every time bottom is reached
            hint.classList.add("show");
            clearTimeout(hint.hideTimeout); // clear old timer if triggered again
            hint.hideTimeout = setTimeout(()=> hint.classList.remove("show"), 3500);

        }
        else {
          contactBtn.style.display = "none";
          hint.classList.remove("show");
        }
      });
/* contact button script ends */

/*back to top script */
  const topBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      topBtn.classList.add("show");
    } else {
      topBtn.classList.remove("show");
    }
  });

  topBtn.addEventListener("click", () => {
    topBtn.classList.add("launching");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    // Reset rocket animation after scroll
    setTimeout(() => {
      topBtn.classList.remove("launching");
    }, 1000);
  });
/* back to top script end */



// sticky mini navbar script
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const sectionTop = sec.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
// sticky mini navbar script ends
  


