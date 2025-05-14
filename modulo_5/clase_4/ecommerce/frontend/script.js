const productList = document.querySelector("#product-list")
const productForm = document.querySelector("#product-form")

const render = (res) => {
    return `
    <tr>
        <td>${res.title}</td>
        <td>${res.price}</td>
        <td>${res.qty}</td>
        <td>${res.type}</td>
        <td class="actions">
            <button disabled>Edit</button>
            <button class="delete-btn" disabled>Delete</button>
        </td>
    </tr>`
}
/*
productList.innerHTML = render({
    title: "The Lord of the Rings",
    price: 1999,
    qty: 1,
    type: "BOOK"
})
*/
// ...existing code...

// Popup utility
function showPopup(message) {
    // Remove existing popup if present
    const oldPopup = document.getElementById('custom-popup');
    if (oldPopup) oldPopup.remove();

    // Create popup elements
    const popup = document.createElement('div');
    popup.id = 'custom-popup';
    popup.innerHTML = `
        <div style="margin-bottom:16px;">${message}</div>
        <button id="popup-close-btn" style="padding:8px 16px;">Cerrar</button>
    `;

    document.body.appendChild(popup);

    document.getElementById('popup-close-btn').onclick = () => {
        popup.remove();
    };
}

productForm.addEventListener("submit", async (ev) => {
    ev.preventDefault()

    const res = {
        title: ev.target.title.value,
        author: ev.target.author.value,
        price: ev.target.price.value,
        qty: ev.target.quantity.value,
        type: ev.target.type.value
    }

    console.log(res)


    try {
        const response = await axios.post("https://crudcrud.com/api/2448632880e242df9a3ee3aac386729f/products", res)
        console.log(response)
    } catch(e) {
        console.error(e)
        showPopup(e)
    }
})

const main = async () => {
    try{
       const response = await axios.get("https://crudcrud.com/api/2448632880e242df9a3ee3aac386729f/products")
       console.log(response.data) // [ {... }, {... } ]

       let html = ""
       for(let i = 0; i<response.data.length; i++) {
           html += render(response.data[i])
       }
       productList.innerHTML = html
    } catch(e) {
        console.error(e)
        showPopup(e)
    }

}

main()



