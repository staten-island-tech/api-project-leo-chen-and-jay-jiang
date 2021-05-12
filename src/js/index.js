import { DOMSelectors } from "./DOM";


const query = async function () {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=898`);
    const data = await response.json();
    data.results.forEach((pokemon) => {
      DOMSelectors.grid.insertAdjacentHTML("beforeend", 
      `<div class="poke-card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.results.indexOf(pokemon) + 1}.png" alt="">
        <h1 class="poke-name">${pokemon.name}</h1>
      </div>`)
    })
  } catch (error) {
    console.log(error);
    alert("Hey something went wrong");
  }
};
query();
