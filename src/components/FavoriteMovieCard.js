import React from 'react'
import './FavoriteMovieCard.css'
import defaultPoster from '../img/no-poster-available.jpg'

export default function MovieCard(props) {
    let { Poster, Title, imdbID} = props.movie;
    if(Poster === "N/A"){
        Poster = defaultPoster;
    }
    return (
        <div className='fav-movie-card'>
            <img className='movie-poster' src={Poster} alt={Title}></img>
            <h6 className='movie-title'>{Title}</h6>
            <div className='overlay'></div>
            <button className='favorite-button' onClick={() => props.removeFromFaverite(imdbID)}><i className="fas fa-heart"></i></button>
        </div>
    )
}
