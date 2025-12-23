async function fillPortfolioItems() {
  let projDetails = await fetch("assets/json/proj-details.json");
  projDetails = await projDetails.json();
  projDetails = Object.entries(projDetails);
  projDetails.sort((a, b) => a[1].priority - b[1].priority);

  let container = document.querySelector(".temp-portfolio-container");
  let template = document.querySelector(".temp-portfolio-item");

  for (const [key, proj] of projDetails) {
    let item = template.content.cloneNode(true).querySelector("div");

    for (const [_, filter] of Object.entries(proj["filter"])) {
      item.classList.add(filter);
    }

    let [img, info] = item.children[0].children;
    let [title, detail, prev, link, desc] = info.children;

    img.src = proj["preview-img-thumb"];

    title.textContent = proj["name"];
    detail.textContent = proj["summary-short"];

    prev.href = proj["preview-vid"] ?? proj["preview-img"];
    prev.title = proj["name"];
    prev.setAttribute(
      "data-glightbox",
      `title: ${proj["summary-short"]}; description: .${key}-desc`,
    );

    link.href = `proj-details.html?proj=${key}`;

    desc.classList.add(`${key}-desc`);
    desc.children[0].href = `proj-details.html?proj=${key}`;

    container.appendChild(item);
  }
}

function initGlightbox() {
  const _glightbox = GLightbox({
    selector: ".glightbox",
  });
}

function initIsotope() {
  document.querySelectorAll(".isotope-layout").forEach((isotopeItem) => {
    let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
    let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";
    let container = isotopeItem.querySelector(".isotope-container");

    new imagesLoaded(container, () => {
      let isotope = new Isotope(container, {
        itemSelector: ".isotope-item",
        layoutMode: layout,
        filter: filter,
        sortBy: sort,
      });

      isotopeItem.querySelectorAll(".isotope-filters li").forEach((filters) => {
        filters.addEventListener(
          "click",
          function () {
            isotopeItem
              .querySelector(".isotope-filters .filter-active")
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            isotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
          },
          false,
        );
      });
    });
  });
}

function main() {
  fillPortfolioItems().then(() => {
    initGlightbox();
    initIsotope();
  });
}

main();
