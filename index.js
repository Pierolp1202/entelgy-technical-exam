// const API_URL = "https://restcountries.com/v3.1/lang/spa";

// const xhr = new XMLHttpRequest();

// function onRequestHandler() {
//   if (this.readyState === 4 && this.status === 200) {
//     //   UNSET, no se ha llamado al metodo open // 0
//     //   OPENED, se ha llamado al metodo open.
//     //   HEADERS RECEIVED, se está llamando al metodo send ()
//     //   DONE, se ha completado la operación.
//     const data = JSON.parse(this.response);
//     const HTMLResponse = document.querySelector("#app");
//     const tpl = data.map((country) => `<li>${country.name.common}  </li>`);
//     HTMLResponse.innerHTML = `<div>${tpl}</div>`;
//   }
// }

// fetch("https://restcountries.com/v3.1/lang/spa")
//   .then(function (res) {
//     //console.log(res);
//     return res.json();
//   })
//   .then(function (data) {
//     //console.log(data);
//     initialize(data);
//   })
//   .catch(function () {
//     console.log("Error: ", err);
//   });

//GLOBAL VARIABLES

let countries;

fetch("https://restcountries.com/v3.1/lang/spa")
  .then((res) => res.json())
  .then((data) => initialize(data))
  .catch((err) => console.log("Error: ", err));

function initialize(countriesData) {
  countries = countriesData;
  console.log(countries[0].name.common);
  //console.log(countriesData);
}

// setTimeout(() => {
//   console.log(countries);
// }, 500);
