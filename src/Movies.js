import React , {useEffect , useState} from 'react';
import styles from '../src/components/DetailMovie.module.css'

// components
import Movie from './components/Movie';
import Navbar from './components/Navbar';


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7f5eb1ada732580bda54f66e34328c75&page=2"

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=7f5eb1ada732580bda54f66e34328c75&query="

// console.log(FEATURED_API , IMG_API , SEARCH_API )

function Movies () {


  const [movies , setMovies] = useState([])
  const [searchTerm , setSearchTerm] = useState('')
  console.log(movies)

  useEffect( () => { 

    getMovies(FEATURED_API)
    
  } , [])

  const getMovies = (API) => { 

    fetch(API)
    .then(res => res.json())
    .then(data => { 
      console.log(data)
      setMovies(data.results)
    })

  }

  const handleOnSubmit = (e) => { 
    e.preventDefault()

    if(searchTerm) {
      getMovies(SEARCH_API + searchTerm)
   
      setSearchTerm('')
  }
}

  const handleOnChange = (e) => { 
    setSearchTerm(e.target.value)
  }


  return (
    <>
    <Navbar />  
      <header className={styles.header}>
        <form onSubmit={handleOnSubmit} className='myForm' >
          <div className={styles.searchBox}>
            <input type='search' placeholder='Search...' className={styles.search} value={searchTerm} onChange={handleOnChange} />
            <button type='submit' className={styles.submitButton} >Submit</button>
          </div>
        </form>
      </header>
    <div className='movie-container'>
      {
        movies.length > 0 && 
        movies.map((movie) => ( 
          <Movie key={movie.id}{...movie} />
        ))
      }
    </div>
    
    </>
  );
};

export default Movies;