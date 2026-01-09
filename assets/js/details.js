"use strict";

async function getQueryParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}

async function fillProjectDetails(proj) {
  const desc = document.querySelector(".portfolio-description");
  let title = desc.querySelector(".temp-proj-title");
  let subtitle = desc.querySelector(".temp-proj-subtitle");
  let summary = desc.querySelector(".temp-proj-summary");

  const info = document.querySelector(".portfolio-info");
  let technologies = info.querySelector(".temp-proj-technologies");
  let techniques = info.querySelector(".temp-proj-techniques");
  let date = info.querySelector(".temp-proj-date");
  let url = info.querySelector(".temp-proj-url");
  let urlA = info.querySelector(".temp-proj-url-a");
  let role = info.querySelector(".temp-proj-role");

  const prev = document.querySelector(".temp-proj-prev");

  title.textContent = proj["name"];
  subtitle.textContent = proj["summary-short"];
  summary.innerHTML = proj["summary"];

  technologies.textContent = proj["technologies"].join(", ");
  techniques.textContent = proj["techniques"].join(", ");

  date.textContent = `${proj["date-start"]}`;
  url.textContent = proj["url"];
  urlA.href = proj["url"];
  role.textContent = proj["role"].join(", ");

  if (proj["preview-vid"]) {
    let source = document.createElement("source");
    source.src = proj["preview-vid"];
    source.type = `video/${proj["preview-vid"].split(".").pop()}`;

    let template = document.querySelector(".temp-proj-prev-vid");

    let elem = template.content.cloneNode(true).querySelector("video");
    elem.appendChild(source);
    elem.load();

    prev.appendChild(elem);
  } else {
    let template = document.querySelector(".temp-proj-prev-img");

    let elem = template.content.cloneNode(true).querySelector("img");
    elem.src = proj["preview-img"];

    prev.appendChild(elem);
  }
}

async function main() {
  const arg = await getQueryParam("proj");
  let json = await fetch("../assets/json/proj-details.json");
  json = await json.json();

  if (json[arg]) {
    fillProjectDetails(json[arg]);
  } else {
    // go back to main page
    window.location.href = "index.html";
    return;
  }
}

main();
