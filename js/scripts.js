let pokemonRepository = (function(){
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

      function getAll() {
        return pokemonList;
      }

      function add(pokemon) {
        if (typeof pokemon === 'object' && 'name' in pokemon){
        pokemonList.push(pokemon);
      }
    }

      function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');

        let listItem = document.createElement('li');

        let button = document.createElement('button');
        button.innerText = pokemon.name
        button.classList.add('button-class');

        listItem.appendChild(button);
        pokemonList.appendChild(listItem);

        button.addEventListener('click', function(event) {
			showDetails(pokemon)
		})
	}

	function showDetails(pokemon) {
		console.log(pokemon);
    }


      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
      }

})()

pokemonRepository.add({name:'Pikachu', height: 1.3, type:['electric']});


pokemonRepository.getAll().forEach(function(pokemon){
pokemonRepository.addListItem(pokemon);
})

function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}

return {
  add: add,
  getAll: getAll,
  loadList: loadList
};

pokemonRepository.loadList().then(function() {
// Now the data is loaded!
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
});

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    console.log(pokemon);
  });
}