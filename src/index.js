const pokeForm = document.querySelector(".poke-form");
const pokeList = document.querySelector(".poke-list");

function addPokemon(pokemon) {
  const liEl = document.createElement("li");
  const imgEl = document.createElement("img");
  const h2El = document.createElement("h2");
  const likeButton = document.createElement("button");
  likeButton.innerText = 'like?' 
  likeButton.addEventListener("click", function(event){
    event.preventDefault();
    likePokemon(pokemon)
    console.log(pokemon)
    likeButton.innerText = pokemon.like
  })
  const removeButton = document.createElement("button");
  removeButton.innerText = 'Remove?'
  removeButton.addEventListener("click", function(event){
    event.preventDefault();
    removePokemon(pokemon)
  })

  liEl.classList.add("pokemon");
  imgEl.src = pokemon.image;

  h2El.innerText = pokemon.name;

  liEl.append(imgEl, h2El, likeButton, removeButton);
  pokeList.append(liEl);
}

function addPokemons(pokemons) {
  pokemons.forEach(pokemon => addPokemon(pokemon))
}

function listenToAddPokemonForm() {
  pokeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const pokemon = {
      name: pokeForm.name.value,
      image: pokeForm.image.value
    };

    //POST
    fetch("http://localhost:3000/pokemons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokemon)
    })
      .then(res =>  res.json())
      .then(pokemon => addPokemon(pokemon));
      });

    pokeForm.reset();
  };


function init() {
  listenToAddPokemonForm();

  //GET

 fetch("http://localhost:3000/pokemons") 
 .then(res => res.json())
 .then(pokemons => addPokemons(pokemons))

}

function removePokemon(pokemon) {

  fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
  method: 'DELETE'
})

}

function likePokemon(pokemon) {
  fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({ like: "You liked this pokemon" })
})
}

init()

