const URL_API = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemons = async (namePokemon) => {
  const response = await axios.get(URL_API + namePokemon);
  const dataPokemon = response.data;
  const cardPokemon = document.getElementById('dataPokemon');
  const abilities = [];
  dataPokemon.abilities.forEach((element) => {
    abilities.push(element.ability.name);
  });
  const types = [];
  dataPokemon.types.forEach((element) => {
    types.push(element.type.name);
  });

  cardPokemon.innerHTML = '';
  cardPokemon.innerHTML += `
        <div class="left">
            <span>
                <h2>
                    ${dataPokemon.name.toUpperCase()}
                </h2>
            </span>
            <figure>
                <img src="${dataPokemon.sprites.front_default}" alt="${
    dataPokemon.name
  }">
            </figure>
        </div>
        <div class="right">
            <div class="right-colum1">
                <span>No.</span>
                <span>${dataPokemon.order}</span>
            </div>
            <div class="right-colum2">
                <span>LEVEL</span>
                <span>${dataPokemon.base_experience}</span>
            </div>
            <div class="right-colum1">
                <span>TYPE</span>
                <span>${types.toString()}</span>
            </div>
            <div class="right-colum2">
                <span>HABILITY</span>
                <span>${abilities.toString()}</span>
            </div>
            <div class="right-colum1">
                <span>HEIGHT</span>
                <span>${dataPokemon.height} m</span>
            </div>
            <div class="right-colum2">
                <span>WEIGHT</span>
                <span>${dataPokemon.weight} Kg</span>
            </div>
        </div>
    `;
};

getPokemons('charizard');

const getListenerHTML = (idHTML, namePokemon) => {
  document
    .getElementById(idHTML)
    .addEventListener('click', () => getPokemons(namePokemon));
};

getListenerHTML('pokeSquatter', 'squirtle');
getListenerHTML('pokeNN', 'mewtwo');
getListenerHTML('pokeSharmander', 'charmander');
getListenerHTML('pokeRattata', 'rattata');

//filtro de buscador

const search = document.querySelector('.form__search');

search.addEventListener('submit', async (event) => {
  event.preventDefault();
  const inputSearch = document.querySelector('#inputSearch');
  const searchTerm = inputSearch.value;
  try {
    await getPokemons(searchTerm);
  } catch (error) {
    alert('Pokemon No Encontrado');
  }
});
