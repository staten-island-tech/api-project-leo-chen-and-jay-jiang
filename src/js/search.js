import { DOMSelectors } from "./DOM";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${searchParams}`
        );
        const data = await response.json();
        //const datarray = Object.entries(data);
        const datarray = [data];
        datarray.forEach((pokemon) => {
          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            `<div class="poke-card">
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="">
                  <h1 class="poke-name">${data.species.name}</h1>
                  <h1 class="poke-height">Height: 0.${data.height} Meters</h1>
                  <h1 class="poke-type">Type: ${data.types[0].type.name}</h1>
                  <h1 class="poke-weight">Weight: ${data.weight/10} kg</h1>
                </div>`
          );
        });
      } catch (error) {
        console.log(error);
        alert("No such pokemon was found.");
      }
    };
    searchQuery();
  });
};
listen();
