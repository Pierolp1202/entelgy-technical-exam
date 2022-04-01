class CardComponent extends HTMLElement {
  set country(country) {
    console.log(country);
    this.innerHTML = `
    <div class="card">
       <img src="${country.flags.png}" >
       <div class="card-content">
          <h4>Pais: ${country.name.common}</h4>
          <button onClick="openModal()" id="myBtn">Mas info</button>
      </div>
    </div>
    <div id="modal" class="modal">
          <div class="modal-content">
              <span class="close">&times;</span>
              <p><strong>Continente: </strong>${country.continents[0]}</p>
              <p><strong>Capital: </strong>${country.capital[0]}</p>
          </div>
      </div>`;
  }

  // constructor() {
  //   super();
  //   this.flags;
  //   this.name;
  //   this.continents;
  //   this.capital;
  // }

  // static get observedAttributes() {
  //   return ["flags", "name", "continents", "capital"];
  // }

  // attributeChangeCallback(nameAtr, oldValue, newValue) {
  //   switch (nameAtr) {
  //     case "flags":
  //       this.flags = newValue;
  //       break;
  //     case "name":
  //       this.name = newValue;
  //       break;
  //     case "continents":
  //       this.continents = newValue;
  //       break;
  //     case "capital":
  //       this.capital = newValue;
  //       break;
  //   }
  // }

  // connectedCallback() {
  //   this.innerHTML = `
  //     <div class="card">
  //        <img src="${this.flags}">
  //        <div class="card-content">
  //           <h3>Nombre de Pais: ${this.name}</h3>
  //           <button onClick="openModal()" id="myBtn">Mas info</button>
  //       </div>
  //     </div>
  //     <div id="modal" class="modal">
  //           <div class="modal-content">
  //               <span class="close">&times;</span>
  //               <p><strong>Continente: </strong>${this.continents}</p>
  //               <p><strong>Capital: </strong>${this.capital}</p>
  //           </div>
  //       </div>`;
  // }
}

window.customElements.define("card-component", CardComponent);
