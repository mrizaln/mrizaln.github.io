/**
 * Template Name: iPortfolio
 * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
 * Updated: Jun 29 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

"use strict";

function headerToggle() {
  const headerToggleFun = () => {
    document.querySelector("#header").classList.toggle("header-show");
    headerToggleBtn.classList.toggle("bi-list");
    headerToggleBtn.classList.toggle("bi-x");
  };

  const headerToggleBtn = document.querySelector(".header-toggle");
  headerToggleBtn.addEventListener("click", headerToggleFun);

  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".header-show")) {
        headerToggleFun();
      }
    });
  });
}

function preloader() {
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }
}

function toggleScrollTop() {
  let scrollTop = document.querySelector(".scroll-top");

  const scrollTopFun = () => {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  };

  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", scrollTopFun);
  document.addEventListener("scroll", scrollTopFun);
}

function initTypedJs() {
  const selectTyped = document.querySelector(".typed");
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 40,
      backSpeed: 25,
      backDelay: 2000,
    });
  }
}

/**
 * Animate the skills items on reveal
 */
function animateSkills() {
  let skillsAnimation = document.querySelectorAll(".skills-animation");
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: "80%",
      handler: (_direction) => {
        let progress = item.querySelectorAll(".progress .progress-bar");
        progress.forEach((el) => {
          el.style.width = el.getAttribute("aria-valuenow") + "%";
        });
      },
    });
  });
}

function initSwiperSliders() {
  const initSwiper = () => {
    document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim(),
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  };

  window.addEventListener("load", initSwiper);
}

/**
 * Correct scrolling position upon page load for URLs containing hash links.
 */
function correctScrollingPosition() {
  window.addEventListener("load", (_) => {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });
}

function navmenuScrollspy() {
  let navmenulinks = document.querySelectorAll(".navmenu a");

  const navmenuScrollspy = () => {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);
}

function main() {
  preloader();
  headerToggle();

  initTypedJs();
  animateSkills();
  initSwiperSliders();

  navmenuScrollspy();
  toggleScrollTop();
  correctScrollingPosition();
}

main();
