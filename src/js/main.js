"use strict";

const projectsList = document.querySelector(".projects__repos--js");

fetch("https://api.github.com/users/annamazurek/repos")
  .then(response => response.json())
  .then(response => {
    const repositories = response;
    for(const repo of repositories){
      projectsList.innerHTML += `<li class="projects__item"><a class="projects__link" href="${repo.html_url}">
        ${repo.name} <br>
        ${repo.description}
      </a></li>`
    }
    console.log(response);
  })
  // .catch(error);
  









console.log(`Hello! 
I'm glad you're interested in my code. If you see something I could do better, please write me: anna.mazurek.93@gmail.com`);