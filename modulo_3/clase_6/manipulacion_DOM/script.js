// Selectores de elementos

// Sintaxis


// - document.getElementById("id")

let titulo_recetas = document.getElementById("titulo_recetas")
console.log(titulo_recetas)

titulo_recetas.innerHTML = "Recetas de la semana..."

// - document.getElementsByClassName("class")

let recetas = document.getElementsByClassName("receta")
console.log(recetas)

for(let i = 0; i < recetas.length; i++) {
    const original_html = recetas[i].innerHTML
    recetas[i].innerHTML = "Receta numero " + (i + 1) + " de " + recetas.length + ": " + original_html
}

// - document.getElementsByTagName("tag")

let articles = document.getElementsByTagName("article")
console.log(articles)

for(let i = 0; i < articles.length; i++) {
    const original_html = articles[i].innerHTML
    articles[i].innerHTML = "| " + original_html + " |"
}

// - document.querySelector("selector")

let h2 = document.querySelector("h2#titulo_recetas")
h2.innerHTML = "Recetas de la semana... (Otra vez)"


// - document.querySelectorAll("selector")

let recetas_restaurantes = document.querySelector(".recetas, .restaurantes")
console.log(recetas_restaurantes)

for(let i = 0; i < recetas_restaurantes.length; i++) {
    const original_html = recetas_restaurantes[i].innerHTML
    recetas_restaurantes[i].outerHTML = "<div>"  + original_html + "</div>"
}

// Manipulación del DOM con JavaScript

// Sintaxis
// - OuterHTML
// - innerHTML

// Ejemplos

/* let */ h2 = document.querySelector("h2#titulo_recetas")
h2.innerHTML = "Recetas de la semana... (Otra vez)"
h2.outerHTML = "<h2 id='titulo_recetas'>Recetas de la semana... (Otra vez)</h2>"
