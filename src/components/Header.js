import React,{useState} from 'react'
import './Header.css'

export default function Header(props) {
    const [searchValue, setSearchVlaue] = useState('Search');

    const handleChange = (event) => {
        setSearchVlaue(event.target.value);
    }
    const handleSearch = (event) => {
        event.preventDefault();
        props.getMovies(searchValue)
    }
    return (
        <div className='header'>
            <h1 className='app-title'>Movie App</h1>
            <form onSubmit={handleSearch} className='search'>
                <input className='search-filed' type="text" value={searchValue} onChange={handleChange}/>
                <button type='submit' className='search-button'>Search</button>
            </form>
        </div>
    )
}
