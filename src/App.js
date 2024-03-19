import { useEffect, useState } from "react";
import './App.css'
import searchIcon from './search.svg'
import Movie from './components/Movie'

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=db9cb5c9'

function App() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const searhcMovies = async (title) => {
    try{
      const response = await fetch(`${API_URL}&s=${title}`)
      const data = await response.json()
      console.log(data.Search)
      setMovies(data.Search)
    }catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    searhcMovies('avatar')
  }, [search])

  return (
    <div className="app">
      <h1>Movie</h1>
      <div className="search">
        <input type="text"
          placeholder="search"
          value={search}
          onChange={(event) => { setSearch(event.target.value) }}
        />
        <img src={searchIcon} alt="search"
          onClick={() => { }}
        />
      </div>
      <div className="container">
        {movies.map((movie) => (<Movie {...movie} key={movie.Title + movie.Year}/>))}
      </div>
    </div>
  );
}

export default App;
