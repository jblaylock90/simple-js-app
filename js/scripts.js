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
  }
];

  for (let i = 0; i < pokemonList.length; i++){
    if(pokemonList[i].height < 1){
    document.write(pokemonList[i].name + "'s height is " + pokemonList[i].height + '<br>');
  }else if (pokemonList[i].height>= 1) {
    document.write(pokemonList[i].name + "'s height is " + pokemonList[i].height + ". Wow, that's Big!" + '<br>')
  }
}
