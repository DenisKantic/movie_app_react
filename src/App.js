import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";


// 8ee7393f

const API_URL = 'http://www.omdbapi.com?apikey=8ee7393f';


const App = () =>{

    const [ movies, setMovies ] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect( () =>{
        searchMovies(searchTerm);
    });

    return (
       <div className="app">
           <h1>MovieLand</h1>

           <div className="search">
               <input type="text" placeholder="Search for movies"
               value={searchTerm} onChange={ (e) => setSearchTerm(e.target.value)}/>
               <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
               </div>

               {
                   movies?.length > 0 ? 
                   ( <div className="container">
                   {movies.map( (movie) => (
                       <MovieCard movie={movie}></MovieCard>
                   ))}
                    </div>
                   ) : (
                       <div className="empty">
                           <h2>No Movies found</h2>
                       </div>
                   )
               }

       </div>
    )
}

export default App;