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

pokemonList.forEach(function(pokemon){
  document.write(pokemon.name + "'s height is " + pokemon.height + '<br>')});
