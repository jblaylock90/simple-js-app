let pokemonRepository = (function(){
  let pokemonList = [
    {
      name:'Bulbasaur',
      height: 0.7,
      type:['grass','poison']
    },
    {
      name:'Weedle',
      height: 0.3,
      type:['bug','poison']
    },
    {
      name: 'Nidoqueen',
      height: 1.3,
      type:['ground','poison']
    }];

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
