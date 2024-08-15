import { useState } from 'react'
import Card from "./components/Card"
import Select from "./components/Select"
import './App.css'

function App() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoriesChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  return (
    <>
    <main>
    <section className="movie-filters">
      <Select onCategoriesChange={handleCategoriesChange} />
    </section>

      <section className="movie-container">
        <Card selectedCategories={selectedCategories} />
      </section>

      <section className="movie-pagination"></section>
    </main>
    </>
  )
}

export default App