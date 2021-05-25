import { DOMSelectors } from "./DOM";

const listen = function(){
    DOMSelectors.searchForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const searchParams = DOMSelectors.searchArea.value
        const searchQuery = async function () {
            try {
              const response = await fetch(`https://pokeapi.co/api/v2//pokemon/${searchParams}`);
              const data = await response.json();
              data.forEach((pokemon) => {
                DOMSelectors.grid.insertAdjacentHTML("beforeend", 
                `<div class="poke-card">
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.results.indexOf(pokemon) + 1}.png" alt="">
                  <h1 class="poke-name">${pokemon.species.name}</h1>
                </div>`)
              })
            } catch (error) {
              console.log(error);
              alert("Hey something went wrong");
            }
          };
          searchQuery();
    });
}
listen();
