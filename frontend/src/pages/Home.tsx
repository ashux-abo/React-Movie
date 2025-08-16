import MovieCard from "../components/MovieCard"
import { useState } from "react";
import '../components/home.css'
import CustomButton from '../components/CustomButton'
import { useNavigate } from "react-router-dom";

function Home() {
    const movies = [
        { id: 1, title: 'Demon Slayer', releaseDate: '2025-08-22', poster: './babi.jpg' },
        { id: 2, title: 'Minecraft', releaseDate: '2025-08-22', poster: './babi.jpg' },
        { id: 3, title: 'John Wick', releaseDate: '2025-08-22', poster: './babi.jpg' },
        { id: 4, title: 'Fantastic 4', releaseDate: '2025-08-22', poster: './babi.jpg' },
        { id: 5, title: 'Superman', releaseDate: '2025-08-22', poster: './babi.jpg' },
    ]

    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(searchQuery);
    }

    const navigateFavorites = () =>{
        navigate('./favorites')
    }



    return (
        <>
            <div className="navbar">
                <CustomButton title="Home"/>
                <CustomButton title="Favorites" onPress={navigateFavorites}/>
            </div>
            <h1>Browse for Movies</h1>
            <form onSubmit={handleSearch} className='search-form'>
                <input
                    type='text'
                    placeholder='Search for movies...'
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type='submit' className='search-btn'>Search</button>
            </form>

            <div className="home">
                <div className="movie-grid">
                    {movies.map((movie) => (
                         movie.title.toLowerCase().startsWith(searchQuery.toLowerCase().trim()) && <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home;