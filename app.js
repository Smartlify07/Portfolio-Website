document.addEventListener("DOMContentLoaded", () => {
  //Get burger, navlinks
  const navSlide = () => {
    const navlinks = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", () => {
      // Toggle burger to show X shape
      const body = document.querySelector("body");
      body.style.overflowX = "hidden";
      burger.classList.toggle("turn");
      navlinks.classList.toggle("active-nav");
    });
  };
  navSlide();

  // Show Overlay on hover for projects

  const project_card = document.querySelectorAll(".description");
  project_card.forEach((project) => {
    project.addEventListener("mouseover", () => {
      project.classList.toggle("active-project");
      project.classList.toggle("overlay");
    });
    project.addEventListener("mouseout", () => {
      project.classList.remove("active-project");
      project.classList.remove("overlay");
    });
  });

  // Filter Projects Based on Languages
  const projects = document.querySelectorAll(".project");
  const languages = document.querySelectorAll(".project .languages .btn");
  languages.forEach((language) => {
    language.classList.add(language.textContent.toLowerCase());
  });
  const filter_btns = document.querySelectorAll(".filter");
  filter_btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // console.log(e.target.textContent);
      const selectedLang = e.target.textContent.toLowerCase();
      projects.forEach((project) => {
        projectLang = Array.from(
          project.querySelectorAll(".languages .btn")
        ).map((btn) => btn.textContent.toLowerCase());

        if (projectLang.includes(selectedLang)) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
      btn.classList.add("btn-dark");
      toggleBtn(btn);
    });
  });

  function toggleBtn(clickedbtn) {
    filter_btns.forEach((button) => {
      if (button === clickedbtn) {
        button.classList.add("btn-dark");
      } else {
        button.classList.remove("btn-dark");
      }
    });
  }
});

const form = document.querySelector("form");
console.log(form);
anime({
  targets: "form",
  translateY: 5,
  easing: "easeInOutQuad",
  duration: 1000,
});

anime({
  targets: ".nav-links-footer li",
  translateX: 5,
  duration: 3000,
  delay: 1000,
  easing: "easeInOutQuad",
});
