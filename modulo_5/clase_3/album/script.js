const imagesContainer = document.getElementById("images-container")
const uploadForm = document.getElementById("upload-form")
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

const loadImages = () => {
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
}

uploadForm.addEventListener("submit", (e) => {
    e.preventDefault()

    console.log(e.target.title.value)

    const raw = JSON.stringify({
        id: "=ROW()",
        titulo: e.target.title.value
    })

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch("https://sheetdb.io/api/v1/1zdjycnz0gdy2", {
        headers: myHeaders,
        method: "POST",
        body: raw
    }).then((response) => response.json())
    .then((result) => {
        console.log(result)
        loadImages()  
    })
    .catch((error) => console.error(error))
})

loadImages()