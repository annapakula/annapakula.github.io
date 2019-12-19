"use strict";

const menu = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');

// Hamburger menu - show amd hide (by adding extra class)
menu.addEventListener('click', () => {
  menu.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
});

// GitHub API - get my repositories info
const projectsList = document.querySelector(".repos--js");

fetch("https://api.github.com/users/annamazurek/repos?sort=created")
  .then(response => response.json())
  .then(response => {
    const repositories = response;
    for (const repo of repositories) {
      let language = String(repo.language).toLowerCase();
      console.log(language);
      if (language == "null") {
        language = "github-icon-black";
      }
      if (repo.description === null) {
        repo.description = "No description";
      }
      if (repo.homepage === null || repo.homepage === "") {
        projectsList.innerHTML += `
        <li class="repos__item--js">
        <img class="repos__language" src="assets/img/${language}.svg">

        <h3 class="repos__title--js">${repo.name}</h3> 
        <br>
        <p class="repos__description--js">${repo.description}</p>
        <div class="repos__links--js">
          <a class="repos__link--github repos__link--js" href="${repo.html_url}">GitHub</a>
        </div>
      </li>`;
      } else {
        projectsList.innerHTML += `
        <li class="repos__item--js">
        <img class="repos__language" src="assets/img/${language}.svg">

          <h3 class="repos__title--js">${repo.name}</h3> 
          <br>
          <p class="repos__description--js">${repo.description}</p>
          <div class="repos__links--js">
            <a class="repos__link--demo repos__link--js" href="${repo.homepage}">Demo</a>
            <a class="repos__link--github repos__link--js" href="${repo.html_url}">GitHub</a>
          </div>
        </li>`;
      }
    }
  })


console.log('%cHello!', 'color: lightgreen; font-size: 16px');
console.log(`I'm glad you're interested in my code. If you see something I could do better, please type me: anna.mazurek.93@gmail.com`);