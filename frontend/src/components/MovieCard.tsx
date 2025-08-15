import './moviecard.css'

type Movie = {
    id: number;
    title: string;
    poster: string;
    releaseDate: string;
}

type MovieProps = {
    movie: Movie;
}

function MovieCard({movie}:MovieProps){
    const handleOnClick = () => {
        alert("Clicked");
    }
    return (
    <>
        <div className="movie-card">
            <img className="movie-poster" src={movie.poster} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={handleOnClick}>
                        🤍
                    </button>
                </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
    </>
    )
}

export default MovieCard;