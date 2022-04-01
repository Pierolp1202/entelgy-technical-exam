let index = 0;

class CardComponent extends HTMLElement {
  set country(country) {
    // console.log(country);

    this.innerHTML = `
    <div class="card">
       <img src="${country.flags.png}" >
       <div class="card-content">
          <h4>Pais: ${country.name.common}</h4>
          <button onclick="document.getElementById('myModal${index}').style.display='block'" id="myBtn">Mas info</button>
      </div>
    </div>
    <div id="myModal${index}" class="modal">
          <div class="modal-content">
              <span onclick="document.getElementById('myModal${index}').style.display='none'" class="close">&times;</span>
              <p><strong>Continente: </strong>${country.continents[0]}</p>
              <p><strong>Capital: </strong>${country.capital[0]}</p>
          </div>
      </div>`;

    index++;
  }
}

window.customElements.define("card-component", CardComponent);
