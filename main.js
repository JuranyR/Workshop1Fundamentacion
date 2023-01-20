const URL_API = 'https://pokeapi.co/api/v2/pokemon';

const listPokemons = [];

const getPokemons = async () => {
  const response = await axios.get(URL_API);
  const dataPokemon = response.data;
  const newPokemon = {
    name: pokemom.name,
    image: dataPokemon.data.sprites.front_default,
    weight: dataPokemon.data.weight,
    height: dataPokemon.data.height,
    experience: dataPokemon.data.base_experience,
    abilities: dataPokemon.data.abilities,
  };
};

// render cards
const containerM = document.querySelector('#dataPokemon');

const renderPokemons = (arrayPokemons) => {
  containerM.innerHTML = '';
  arrayPokemons.forEach((pokemon) => {
    containerM.innerHTML += `
  <div class="left">
    <span>
      <h2>CHARIZARD</h2>
      <img
      class="imgCard"
      src="${(pokemon, image)}"
      alt="Charizard"
    />
    </span>
    <figure></figure>
  </div>
  <div class="right">
    <div class="right-colum1">
      <span>No.</span>
      <span>007</span>
    </div>
    <div class="right-colum2">
      <span>LEVEL</span>
      <span>1700</span>
    </div>
    <div class="right-colum1">
      <span>TYPE</span>
      <span>FIRE</span>
    </div>
    <div class="right-colum2">
      <span>HABILITY</span>
      <span>FLAMES</span>
    </div>
    <div class="right-colum1">
      <span>HEIGHT</span>
      <span>90,5 Kg</span>
    </div>
    <div class="right-colum2">
      <span>WEIGHT</span>
      <span>1,7 m</span>
    </div>
  </div>`;
  });
};
