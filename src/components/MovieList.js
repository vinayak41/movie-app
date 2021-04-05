import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'

export default function MovieList(props) {
    return (
        <>
            <h3>Movie List &nbsp;&nbsp; <i className="fas fa-chevron-right"></i></h3>
            <div className='movie-list'>
                {props.movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} addToFavorite={props.addToFavorite} />)}
            </div>
        </>
    )
}
