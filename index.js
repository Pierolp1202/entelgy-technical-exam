const API_URL = "https://restcountries.com/v3.1/lang/spa";
import "./card-component.js";

window.addEventListener("load", () => {
  fetchCountries();
});

async function fetchCountries() {
  const res = await fetch(API_URL);
  const json = await res.json();

  const main = document.querySelector("main");
  // console.log(json.length);
  json.forEach((country) => {
    const el = document.createElement("card-component");
    el.country = country;
    main.appendChild(el);
    // console.log(el);
  });
}

//OTRA VERSION
// // GLOBAL VARIABLES
// let countries;

// fetch("https://restcountries.com/v3.1/lang/spa")
//   .then((res) => res.json())
//   .then((data) => initialize(data))
//   .catch((err) => console.log("Error: ", err));

// const main = document.querySelector("main");

// function initialize(countriesData) {
//   countries = countriesData;
//   for (var i = 0; i < countries.length; i++) {
//     console.log(countries[i].continents[0]);
//     const el = document.createElement("card-component");
//     el.setAttribute("flags", `${countries[i].flags.png}`);
//     el.setAttribute("name", `${countries[i].name.common}`);
//     el.setAttribute("continents", `${countries[i].continents[0]}`);
//     el.setAttribute("capital", `${countries[i].continents[0]}`);
//     main.appendChild(el);
//   }
// }
