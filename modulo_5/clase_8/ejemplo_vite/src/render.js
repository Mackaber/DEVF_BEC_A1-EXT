const render = (usuario) => {
    return `
        <label>Nombre: </label><span>${usuario.nombre}</span><br>
        <label>Edad: </label><span>${usuario.edad}</span><br>
        <label>Profesion: </label><span>${usuario.profesion}</span>
    `
}

export default render