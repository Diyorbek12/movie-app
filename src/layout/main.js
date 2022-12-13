import React, {useState, useEffect} from 'react';
import Movies from '../components/Movies';
import Loader from '../components/Loader';
import Search from '../components/Search';

export default function Main () {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true)

    const searchMovie = (str, type = 'all') => {
        setLoading(true)
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=7d2d7ac6&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then((response) => response.json())
        .then((data) => {
            setLoading(false)
            setMovie(data.Search)
        })
    }

    useEffect(() => {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=7d2d7ac6&s=demo')
        .then((response) => response.json())
        .then((data) => {setMovie(data.Search); setLoading(false)})
    }, [])
     
    return (
        <div className='container content'>
            <Search searchMovie={searchMovie} />
            { loading ? (<Loader />) : (<Movies movies={movie} />) }
        </div>
    ) 
}