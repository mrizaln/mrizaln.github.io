"use strict";

async function getQueryParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}

async function fillProjectDetails(proj) {
  const desc = document.querySelector(".portfolio-description");
  let name = desc.querySelector(".temp-proj-name");
  let summary = desc.querySelector(".temp-proj-summary");

  const info = document.querySelector(".portfolio-info");
  let technologies = info.querySelector(".temp-proj-technologies");
  let techniques = info.querySelector(".temp-proj-techniques");
  let date = info.querySelector(".temp-proj-date");
  let url = info.querySelector(".temp-proj-url");
  let urlA = info.querySelector(".temp-proj-url-a");
  let role = info.querySelector(".temp-proj-role");

  const prev = document.querySelector(".temp-proj-prev");

  name.innerHTML = proj["name"];
  summary.innerHTML = proj["summary"];

  technologies.innerHTML = proj["technologies"].join(", ");
  techniques.innerHTML = proj["techniques"].join(", ");

  date.innerHTML = `${proj["date-start"]} - ${proj["date-end"]}`;
  url.innerHTML = proj["url"];
  urlA.href = proj["url"];
  role.innerHTML = proj["role"];

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
  console.log(arg);

  let json = await fetch("assets/json/proj-details.json");
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
