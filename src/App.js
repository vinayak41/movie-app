import React, { useEffect, useState } from 'react';
import FavoriteList from './components/FavoriteList';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css'
import MovieNotFound from './components/MovieNotFound';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [favoriteList, setFevoriteList] = useState([]);
    const [movieFound, setMovieFound] = useState(true);
    const getMovies = async (movieTitle) => {
        const URL = `https://omdbapi.com/?s=${movieTitle}&apikey=a2e41ea0`;
        const responce = await fetch(URL);
        const responceJSON = await responce.json().then( movie => {return movie});
        if(responceJSON.Search){
            setMovies(responceJSON.Search);
            setMovieFound(true);
        }else{
            setMovieFound(false);
        }
    }
    const getMovieByID = async (movieID) => {
        const URL = `https://omdbapi.com/?i=${movieID}&apikey=a2e41ea0`;
        const responce = await fetch(URL);
        const responceJSON = await responce.json();
        return responceJSON;
    }

    const saveToLocalStorage = (item) => {
        localStorage.setItem('react-movie-app-favoriteList', JSON.stringify(item));
    }

    const addToFavorite = async (movieID) => {
        let movie;
        await getMovieByID(movieID).then((data) => { movie = data});
        let newFavoriteList;
        if(favoriteList === 'null'){
            newFavoriteList = [movie];
        } else {
            newFavoriteList = favoriteList;
            newFavoriteList = newFavoriteList.filter((item) => item.imdbID !== movie.imdbID);
            newFavoriteList = [...newFavoriteList, movie]
        }
        setFevoriteList(newFavoriteList);
        saveToLocalStorage(newFavoriteList);

    }

    const removeFromFaverite = (movieID) => {
        console.log('i am here')
        let list = favoriteList;
        list = list.filter( item => item.imdbID !== movieID)
        setFevoriteList(list);
        saveToLocalStorage(list);
    }

    useEffect(()=>{
        getMovies('avengers');
    }, []);
    useEffect(()=>{
        const localFavoriteList = JSON.parse(localStorage.getItem('react-movie-app-favoriteList'));
        if(localFavoriteList) {
            setFevoriteList(localFavoriteList);
        } else {
            localStorage.setItem('react-movie-app-favoriteList', [''])
        }
    }, [])
    return (
        <div className='app'>
            <Header getMovies={getMovies} />
            { movieFound ? <MovieList movies={movies} addToFavorite={addToFavorite}/> : <MovieNotFound />}
            {(favoriteList === 'null') ? <></> : <FavoriteList favoriteList={favoriteList} removeFromFaverite={removeFromFaverite}/>}
        </div>
    )
}

export default App;