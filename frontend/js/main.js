import { getAll } from "./fetchData.js";
import { show, hide } from "./visibilityContent.js";

// HTML Blocks
const error = document.querySelector(".error");
const loader = document.querySelector(".loader");
const cardWrapper = document.querySelector("#card-wrapper");

// Search user by login
// const searchBar = document.querySelector(".search-bar")
// const searchBarInput = searchBar.querySelector(".search-bar__input")
// searchBarInput.addEventListener("change", function() {
//   setData(this.value)
// })

// Set HTML
async function getData() {
	hide(error);
  show(loader);
  const response = await getAll();
	if (response.length > 0) {
		hide(loader);
    hide(error);
    
    for (const item of response) {
      let cardHTML = '<div class="card">';
      // cardHTML += `<img class="card__img" src="${data.avatar_url}" alt="${data.login}">`;
      cardHTML += '<div class="card__content">';
      if (item.title) {
        cardHTML += `<h4 class="card__name">${item.title}</h4>`;
      }
      if (item.date) {
        cardHTML += `<span class="card__date">${item.date}</span>`;
      }
      if (item.description) {
        cardHTML += `<p class="card__bio">${item.description}</p>`;
      }
      // cardHTML += `<a class="card__link" href="${data.html_url}" target="_blank">Github: ${data.login}</a>`;
      cardHTML += "</div>";
      cardHTML += "</div>";
      cardWrapper.innerHTML += cardHTML;
    }
    
	} else {
		cardWrapper.innerHTML = "";
    show(error, "Nothing");
    hide(loader);
	}
}
getData();

// Popup
