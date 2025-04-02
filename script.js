function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// TECHNOLOGY MODAL
document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "http://localhost:3001/api";
  const technologyModal = document.getElementById("technologyModal");
  const technologyForm = document.getElementById("technologyForm");
  const addTechnologyBtn = document.getElementById("addTechnologyBtn");
  const modalTitle = document.getElementById("modalTitle");

  const openAddTechnologyModal = () => {
    editTechnologyId = null;
    modalTitle.innerText = "Adicionar Tecnologia";
    technologyForm.reset();
    technologyModal.style.display = "block";
  };

  // Adicionar tecnologia
  const addTechnology = async (technology) => {
    await fetch(`${apiUrl}/technologies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(technology),
    });
    // loadTechnologies();
  };

  technologyForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const technologyData = {
      name: document.getElementById("name").value,
      area: document.getElementById("area").value,
      description: document.getElementById("description").value,
    };
    await addTechnology(technologyData);

    technologyModal.style.display = "none";
  });

  // Fechar modal ao clicar no "x"
  document.querySelector(".close").addEventListener("click", () => {
    technologyModal.style.display = "none";
  });

  // Fechar modal ao clicar fora dele
  window.addEventListener("click", (event) => {
    if (event.target === technologyModal) {
      technologyModal.style.display = "none";
    }
  });

  // Inicializando o carregamento de usuários e eventos
  addTechnologyBtn.addEventListener("click", openAddTechnologyModal);
  // loadTechnologies();
});

// NAVIGATION TAB
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();
//

// ACCORDION LIST
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    // accordionList[0].classList.add(activeClass);
    // accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      console.log(this.nextElementSibling.classList.toggle(activeClass));
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();
//

function initSmoothScroll() {
  const menuLinks = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Scroll suave alternativo
    // const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior: 'smooth',
    // });
  }

  menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initSmoothScroll();
//

function initScrollAnimation() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowHalf = window.innerHeight * 0.8;

    function scrollAnimation() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHalf < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }

    scrollAnimation();

    window.addEventListener("scroll", scrollAnimation);
  }
}
initScrollAnimation();
