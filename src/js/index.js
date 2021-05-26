import { DOMSelectors } from "./DOM";

const query = async function () {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=898`);
    const data = await response.json();
    console.log(data);
    data.results.forEach((pokemon) => {
      //const pokeType = fetch(`https://pokeapi.co/api/v2/type/${pokemon.name}`);
      //const pokeValue = Promise.resolve(pokeType);
      //console.log(pokeType);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="poke-card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          data.results.indexOf(pokemon) + 1
        }.png" alt="">
        <h7 class="poke-name">${pokemon.name}</h7>
      </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("Hey something went wrong");
  }
};
query();
