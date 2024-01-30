import React from "react";
import { useEffect, useState } from "react";
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

import './App.css'
const API_URL = 'http://www.omdbapi.com?apikey=1ec686c'

const movie1 = {
    "Title": "The Grand Budapest Hotel",
    "Year": "2014",
    "imdbID": "tt2278388",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const responce = await fetch(`${API_URL} &s=${title}`);
        const data = await responce.json();

        setMovies(data.Search);
    }

useEffect(() => {
    searchMovies('Grand Budapest Hotel')
}, []);

    return(
        <div className='app'>
            <h1>MovieLand</h1>

        <div className = 'search'>
            <input placeholder="Search for Movies"
            value = {searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img src={SearchIcon}
            alt="Search"
            onClick={() => searchMovies(searchTerm)}
            />
        </div>

        {movies?.length > 0
            ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
            <div className="empty">
                <h2>No movies found</h2>
            </div>
            )}

     </div>


    );
}

export default App;