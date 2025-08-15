
type Movie = {
    title: string;
    poster: string;
}

function MovieCard({title, poster}:Movie){
    const handleOnClick = () => {
        alert("Clicked");
    }
    return (
    <>
        <div className="movie-card">
        <div className="movie-poster">
            <img src={poster} alt={title}/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={handleOnClick}>
                        🤍
                    </button>
                </div>
            </div>
        </div>
    </>
    )
}