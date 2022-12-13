import Movie from "./Movie";

export default function Movies (props) {
    const {movies = []} = props;

    return (
        <div className="movies">
            {movies.length ? movies.map(movie => 
            (<Movie key='movie.imdbID' {...movie} />)) : 
            <h2>Nothing found</h2>} 
        </div>
    )
}