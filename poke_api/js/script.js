const apiUrl = "https://pokeapi.co/api/v2/";
const pokemonContainer = document.getElementById("pokemons");

async function pokeQuery(id) {
    try {
        const response = await fetch(apiUrl + "pokemon/" + id);
        const pokemon = await response.json();

        const template = `
        <div class="card" style="width: 18rem;">
            <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
            <div class="card-body">
                <h5 class="card-title text-capitalize">${pokemon.name}</h5>
                <p class="card-text">Altura: ${pokemon.height} <br> Peso: ${pokemon.weight}</p>
                <a href="#" class="btn btn-primary">Ver detalles</a>
            </div>
        </div>
        `;

        pokemonContainer.innerHTML += template;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

pokeQuery(1);
pokeQuery(2);
pokeQuery(3);
pokeQuery(4);
pokeQuery(5);
pokeQuery(6);
pokeQuery(7);
pokeQuery(8);