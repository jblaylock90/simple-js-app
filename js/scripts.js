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

  function add(pokemon){
    pokemonList.push(pokemon);
  }

  function getAll(){
    return pokemonList;
  }

  return{
    add:add,
    getAll: getAll
  };

})();

let pokemonList= pokemonRepository.getAll();

function addListItem(pokemon){
  let pokemonList = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('my-button');
  listItem.appendChild(button);
  pokemonList.appendChild(listItem);
  buttonEvent(button, pokemon);
}
pokemonList.forEach(function(pokemon){
  document.write(pokemon.name + "'s height is " + pokemon.height + '<br>')});
