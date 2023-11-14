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
  console.log(project_card);
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
});
