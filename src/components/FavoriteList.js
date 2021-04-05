import React from 'react'
import FavoriteMovieCard from './FavoriteMovieCard'
import './FavoriteMovieList.css'

export default function FavoriteList(props) {
    return (
        <>
            <h3>Favorite List &nbsp;&nbsp; <i className="fas fa-chevron-right"></i></h3>
            <div className='movie-list'>
                {props.favoriteList.map((movie) => <FavoriteMovieCard key={movie.imdbID} movie={movie} removeFromFaverite={props.removeFromFaverite} addToFavorite={props.addToFavorite} />)}
            </div>
        </>
    )
}
