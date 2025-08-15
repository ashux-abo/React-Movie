import MovieCard from "../components/MovieCard"

function Home(){
    const movies =[
        {id:1, title:'Demon Slayer', releaseDate:'2025-08-22', poster:''},
        {id:2, title:'Minecraft', releaseDate:'2025-08-22', poster:''},
        {id:3, title:'John Wick', releaseDate:'2025-08-22', poster:''},
        {id:4, title:'Fantastic 4', releaseDate:'2025-08-22', poster:''},
        {id:5, title:'Superman', releaseDate:'2025-08-22', poster:''},
    ]
    return(
        <div className="home">
            <div className="movie-grid">
                {movies.map((movie) =>(
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default Home;