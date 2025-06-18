import './App.css'
import ParentComponent from './components/ParentComponent'

function App() {

  return (
    <ParentComponent>
      <h1>Etiqueta Hija</h1>  
      {/* Lorem ipsum con varios articles y sections */ }
      <article>
        <h2>Etiqueta Hija 1</h2>
        <section>
          <h3>Etiqueta Hija 2</h3>
          <p>Etiqueta Hija 3</p>
        </section>
      </article>
    </ParentComponent>
  )
}

export default App
