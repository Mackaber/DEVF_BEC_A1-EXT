const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
fetch("https://pokeapi.co/api/v2/pokemon/ditto", requestOptions)
// fetch("https://pokeapi.co/api/v2/pokemon/lapras", requestOptions)
.then((response) => response.json())
.then((result) => {
    //console.log(result)
    console.log(`La experiencia base de éste pokemon es: ${result.base_experience} `)

    let abilities_string = ""
    console.log("Las habilidades de este pokemon son:")
    for(let i = 0; i<result.abilities.length;i++) {
        console.log(result.abilities[i].ability.name)
    }

    // Las habilidades de éste pokemon son: limber, imposter
})
.catch((error) => console.error(error));