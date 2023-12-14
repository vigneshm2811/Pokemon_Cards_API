// API Link 
const url = "https://pokeapi.co/api/v2/pokemon/"

const generateBtn =document.getElementById("generate");

const pokeData = (data)=>{
    let type=data.types[0].type.name
console.log(type);
let className= colorCard(type);
document.querySelector(".container").innerHTML = `
<figure class="card ${className}">
<div class="card__image-container ">
  <img src="${data.sprites.other.dream_world.front_default}" alt="${data.name}" class="card__image">
</div>

<figcaption class="card__caption">
  <h1 class="card__name">${data.name}</h1>

  <h3 class="card__type">
${data.types[0].type.name}
  </h3>

  <table class="card__stats">
    <tbody>
      <tr>
        <th>HP</th>
        <td>${data.stats[0].base_stat}</td>
      </tr>
      <tr>
        <th>Attack</th>
        <td>${data.stats[1].base_stat}</td>
      </tr>

      <tr>
        <th>Defense</th>
        <td>${data.stats[2].base_stat}</td>
      </tr>

      <tr>
        <th>Height</th>
        <td>${data.height}</td>
      </tr>
      <tr>
        <th>Weight</th>
        <td>${data.weight}</td>
      </tr>
      <tr>
        <th>Speed</th>
        <td>${data.stats[5].base_stat}</td>
      </tr>
    </tbody>
  </table>

  <div class="card__abilities">
    <h4 class="card__ability">
      <span class="card__label">Ability</span>
     ${data.abilities[0].ability.name}
    </h4>
    <h4 class="card__ability">
      <span class="card__label">Hidden Ability</span>
      ${data.abilities[1].ability.name}
    </h4>
  </div>
</figcaption>
</figure>
`
}


function colorCard(type){
    let temp
    switch(type){
        case "water":
           temp ="card--water" 
           break;
        
        case "grass":
            temp ="card--grass" 
            break;
        case "electric":
            temp ="card--electric" 
            break;
        case "fire":
            temp ="card--fire" 
            break;
        
        case "poison":
            temp ="card--dark" 
            break;
        case "fairy":
            temp ="card--fairy" 
            break;
        case "psychic":
            temp ="card--psychic" 
            break;
        case "dark":
            temp ="card--dark" 
            break;
        case "ice":
            temp ="card--ice" 
            break;

           default:
            temp ="card--normal"
            break;


    }
    return temp

}
function randomPokemons(){
    let random = Math.floor(Math.random()*151);
    let newUrl = url+random;
    fetch(newUrl)
    .then(res=>res.json())
    .then(data =>{
        console.log(data);
        pokeData(data);
    })
}
window.addEventListener("load",randomPokemons);
generateBtn.addEventListener("click",randomPokemons);