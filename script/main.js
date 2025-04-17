// API Link 
const url = "https://pokeapi.co/api/v2/pokemon/"

const generateBtn = document.getElementById("generate");
let cards = document.getElementsByClassName("card");

// function to display the card of the pokemon
const pokeData = (data) => {
  let type = data.types[0].type.name
  // console.log(type);
  let className = colorCard(type);
  // console.log(className[1])
  let bodyBg = document.querySelector("body")
  bodyBg.style.background = className[1];

  document.querySelector(".container").innerHTML = `
<figure class="card  ${className[0]}">
<div class="card__image-container ">
  <img src="${data?.sprites?.other?.dream_world?.front_default}" alt="${data?.name}" class="card__image">
</div>

<figcaption class="card__caption">
  <h1 class="card__name">${data.name}</h1>

  <h3 class="card__type">
${data?.types[0]?.type?.name}
  </h3>

  <table class="card__stats">
    <tbody>
      <tr>
        <th>HP</th>
        <td>${data?.stats[0]?.base_stat}</td>
      </tr>
      <tr>
        <th>Attack</th>
        <td>${data?.stats[1]?.base_stat}</td>
      </tr>

      <tr>
        <th>Defense</th>
        <td>${data?.stats[2]?.base_stat}</td>
      </tr>

      <tr>
        <th>Height</th>
        <td>${data?.height}</td>
      </tr>
      <tr>
        <th>Weight</th>
        <td>${data?.weight}</td>
      </tr>
      <tr>
        <th>Speed</th>
        <td>${data?.stats[5]?.base_stat}</td>
      </tr>
    </tbody>
  </table>

  <div class="card__abilities">
    <h4 class="card__ability">
      <span class="card__label">Ability</span>
     ${data?.abilities[0]?.ability?.name}
    </h4>
    <h4 class="card__ability">
      <span class="card__label">Hidden Ability</span>
      ${data?.abilities[1]?.ability?.name}
    </h4>
  </div>
</figcaption>
</figure>
`
}

// function generating background and card colors belongs to the pokemon type
function colorCard(type) {
  let temp = []
  switch (type) {
    case "water":
      temp[0] = "card--water"
      temp[1] = "linear-gradient(120deg, #1cb5e079 0%, #00085196 100%)"
      break;

    case "grass":
      temp[0] = "card--grass"
      temp[1] = "linear-gradient(140deg, rgba(197, 218, 61, 0.548) 0%, rgba(110, 127, 14, 0.541) 69%, rgba(39, 80, 9, 0.582) 100%)"
      break;
    case "electric":
      temp[0] = "card--electric"
      temp[1] = "linear-gradient(90deg, rgba(255, 221, 0, 0.562) 34%, rgba(231, 255, 153, 0.61)83%)"

      break;
    case "fire":
      temp[0] = "card--fire"
      temp[1] = "linear-gradient(0deg, rgba(199, 23, 0, 0.493) 10%, rgba(252, 194, 69, 0.479) 100%)"
      break;

    case "poison":
      temp[0] = "card--dark"
      temp[1] = "linear-gradient(20deg, rgba(25, 25, 25, 0.507) 0%, rgba(16, 11, 50, 0.671) 33%, rgba(92, 2, 73, 0.507) 100%)"
      break;

    case "fairy":
      temp[0] = "card--fairy"
      temp[1] = "linear-gradient(45deg, rgba(255, 230, 240, 0.514) 0%, rgba(255, 197, 224, 0.527) 3rgba(255, 166, 185, 0.582), 71%, rgba(255, 138, 150, 0.5) 100%)"
      break;

    case "psychic":
      temp[0] = "card--psychic"
      temp[1] = "linear-gradient(140deg, rgba(255, 167, 249, 0.486) 0%, rgba(255, 44, 195, 0.404) 39%, rgba(255, 227, 167, 0.459) 100%)"
      break;

    case "dark":
      temp[0] = "card--dark"
      temp[1] = "linear-gradient(20deg, rgba(25, 25, 25, 0.507) 0%, rgba(16, 11, 50, 0.671) 33%, rgba(92, 2, 73, 0.507) 100%)"
      break;

    case "ice":
      temp[0] = "card--ice"
      temp[1] = "linear-gradient(230deg, rgba(202, 234, 246, 0.527) 0%, rgba(160, 234, 241, 0.521) 46%, rgba(111, 183, 235, 0.534) 100%)"
      break;

    default:
      temp[0] = "card--normal"
      temp[1] = "linear-gradient(110deg, #fdbb2d73 0%, #3a1c7175 100%)"
      break;
  }
  return temp

}
// Function to generate random pokemon datas
function randomPokemons() {
  let random = Math.floor(Math.random() * 1025);
  let newUrl = url + random;

  fetch(newUrl)
    .then(res => res.json())
    .then(data => {
      pokeData(data);
    })
}

window.addEventListener("load", randomPokemons);
generateBtn.addEventListener("click", () => {
  randomPokemons();
});