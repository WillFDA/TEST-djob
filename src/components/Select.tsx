import React, { useState, useEffect } from 'react';
import { data } from '../../data/Etude-de-cas-front-movies-data';

type Movie = {
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
};

type SelectProps = {
  onCategoriesChange: (categories: string[]) => void;
};

const Select: React.FC<SelectProps> = ({ onCategoriesChange }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const movies = await data as Movie[];
        const uniqueCategories = [...new Set(movies.map(movie => movie.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      const newSelection = prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category];
      
      onCategoriesChange(newSelection);
      return newSelection;
    });
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="select-container">
      <button onClick={toggleDropdown} className="select-button">
        {selectedCategories.length === 0 ? 'Sélectionner des catégories' : `${selectedCategories.length} catégorie(s) sélectionnée(s)`}
      </button>
      {isOpen && (
        <div className="select-dropdown">
          {categories.map(category => (
            <label onChange={() => handleCategoryChange(category)} key={category} className="select-item">
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
              />
              {category}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;