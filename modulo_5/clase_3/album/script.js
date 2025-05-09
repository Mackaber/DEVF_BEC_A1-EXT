const imagesContainer = document.getElementById("images-container")
const renderImage = (imageObject) => {
    return `
        <div>
            <h4>${imageObject.titulo}</h4>
        </div>
    `
}

const requestOptions = {
    method: "GET",
    redirect: "follow"
};
  
fetch("https://sheetdb.io/api/v1/1zdjycnz0gdy2", requestOptions)
    .then((response) => response.json())
    .then((images) => {
        let html = ""
        for(let i = 0; i<images.length; i++) {
            html += renderImage(images[i])
        }
        console.log(html)
        imagesContainer.innerHTML = html
    })
    .catch((error) => console.error(error));