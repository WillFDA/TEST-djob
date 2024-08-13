import Card from "./components/Card"
import './App.css'

function App() {

  return (
    <>
    <main>
    <section className="movie-filters"></section>

      <section className="movie-container">
        <Card />
      </section>

      <section className="movie-pagination"></section>
    </main>
    </>
  )
}

export default App
