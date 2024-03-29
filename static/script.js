const pokeContainer = document.querySelector(".poke-container");
const pokemonCount = 905;
const color = {
  fire: "#FDDFDF",
  grass: "#DFFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const fetchPokemon = async () => {
  for (let i = 1; i <= pokemonCount; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
  console.log(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  let pokemonNmae = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  let pokemonId = pokemon.id.toString().padStart(3, "0");
  let pokemonType = pokemon.types[0].type.name;
  const pokemoncardColor = color[pokemonType];
  pokemonEl.style.backgroundColor = pokemoncardColor;
  const pokemonDivInnerHtml = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="" />
        </div>
        <div class="info">
            <span class="number">#${pokemonId}</span>
            <h3 class="name">${pokemonNmae}</h3>
            <small class="tyle">Type: <span>${pokemonType}</span></small>
        </div>
    `;

  pokemonEl.innerHTML = pokemonDivInnerHtml;
  pokeContainer.appendChild(pokemonEl);
};

fetchPokemon();
