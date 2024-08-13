import React, { useEffect, useState } from 'react'
import { TrashIcon } from "@heroicons/react/20/solid";
import {data} from "../../data/Etude-de-cas-front-movies-data"

type Movie = {
  id: string,
  title: string,
  category: string,
  likes: number,
  dislikes: number
}

const Card: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await data;
        setMovies(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(movies); // Ceci affichera les données une fois qu'elles seront chargées

  return (
    <>
      {movies.map((movie) => (
        <article key={movie.id} className="movie-card">
          <a href="/" className="movie-card__link-image">
            <img className='movie-card__image' src={`./src/assets/${movie.id}.webp`} alt="" />
          </a>
          <div className="movie-card__info">
            <div className='movie-card__header'>
              <h2 className="movie-card__title">{movie.title}</h2>
              <button className='movie-card__delete-btn'>
                <TrashIcon className="delete_btn-icon" />
              </button>
            </div>
            <div className='movie-card__footer'>
              <div className='movie-card__likes'>
                <button className='movie-card__like-btn'></button>
                <button className='movie-card__dislike-btn'></button>
              </div>
              <span className="movie-card__category">{movie.category}</span>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default Card;