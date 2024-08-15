import React, { useEffect, useState } from 'react'
import { TrashIcon, HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/20/solid";
import { HandThumbUpIcon as HandThumbUpIconOutlined, HandThumbDownIcon as HandThumbDownIconOutlined } from '@heroicons/react/24/outline';
import {data} from "../../data/Etude-de-cas-front-movies-data"

type Movie = {
  id: string,
  title: string,
  category: string,
  likes: number,
  dislikes: number
}

type CardProps = {
  selectedCategories: string[];
}

const Card: React.FC<CardProps> = ({ selectedCategories }) => {
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

  const filteredMovies = selectedCategories.length > 0
    ? movies.filter(movie => selectedCategories.includes(movie.category))
    : movies;

  return (
    <>
      {filteredMovies.map((movie) => (
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
                <button className='movie-card__like-btn'>
                  <HandThumbUpIcon className="like_btn-icon" />
                  <HandThumbUpIconOutlined className="like_btn-icon outline" />
                </button>
                <button className='movie-card__dislike-btn'>
                  <HandThumbDownIconOutlined className="like_btn-icon outline" />
                  <HandThumbDownIcon className="dislike_btn-icon" />
                </button>
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